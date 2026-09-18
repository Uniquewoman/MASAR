// المرشد — وكيل تعليمي يعرف تقدّم المستخدم ونقاط ضعفه ويشرح محتوى الموقع
// ويجهّز له خطة. يعمل على Supabase Edge Functions ويستدعي OpenAI بمفتاح
// سرّي في الخادم (OPENAI_API_KEY) — المفتاح لا يصل للمتصفح أبداً.
//
// كل أداة تقرأ البيانات بجلسة المستخدم نفسه (RLS)، فلا يرى إلا ما يخصه.
// الكتابة (حفظ الرسائل والخطط) تجري بمفتاح الخدمة لكن دائماً باسم المستخدم
// المستخرج من توكنه، لا من جسم الطلب.
import { createClient, SupabaseClient } from 'npm:@supabase/supabase-js@2';

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = Deno.env.get('OPENAI_MODEL') ?? 'gpt-4o-mini';
const DAILY_LIMIT = Number(Deno.env.get('TUTOR_DAILY_LIMIT') ?? 40);
const MAX_TOOL_ROUNDS = 6;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

// ─── التعريف بالمسارات (نفس مفاتيح الداتابيس) ───
const TRACKS: Record<string, { ar: string; sections: string[] }> = {
  Programming: { ar: 'البرمجة', sections: ['Basics', 'Computational Thinking and Algorithms', 'Object-Oriented and Advanced Programming', 'Data Structures', 'Software Development', 'Software Engineering', 'Specializations'] },
  ArtificialIntelligence: { ar: 'الذكاء الاصطناعي', sections: ['Fundamentals', 'Mathematics and Data for AI', 'Machine Learning', 'Deep Learning', 'Generative AI, NLP and Computer Vision', 'AI Development and Deployment', 'AI Specializations'] },
  CyberSecurity: { ar: 'الأمن السيبراني', sections: ['Basics', 'Networking for Security', 'System and Operating System Security', 'Application and Web Security', 'Ethical Hacking and Penetration Testing', 'Digital Forensics and Incident Response', 'Cloud Security and Advanced Cyber Defense'] },
  Networking: { ar: 'الشبكات', sections: ['Basics', 'Network Protocols', 'Routing and Switching', 'Network Services', 'Wireless and Cloud Networking', 'Network Security', 'Network Administration and Troubleshooting'] },
  FinTech: { ar: 'التقنية المالية', sections: ['Fundamentals', 'Digital Payments', 'Digital Banking', 'Blockchain & Digital Assets', 'Financial Data & Analytics', 'Financial Security & Compliance', 'Advanced FinTech'] },
};

type Ctx = { view?: string; track_id?: string; section_id?: string; section_index?: number; level?: number; language?: 'ar' | 'en' };

// ─── الأدوات التي يستدعيها النموذج ───
const TOOLS = [
  { type: 'function', function: { name: 'get_my_progress', description: 'تقدّم المستخدم: المستويات المفتوحة في كل قسم، نقاطه في كل مسار، مستواه العام، وعدد إنجازاته.', parameters: { type: 'object', properties: {} } } },
  { type: 'function', function: { name: 'get_my_weak_topics', description: 'نقاط القوة والضعف: نسبة الإجابات الصحيحة لكل موضوع (topic) في كل مستوى لعبه المستخدم، الأضعف أولاً. استخدمها قبل أي خطة أو تشخيص.', parameters: { type: 'object', properties: { track_id: { type: 'string', description: 'حصر النتائج بمسار (اختياري)' } } } } },
  { type: 'function', function: { name: 'get_my_recent_activity', description: 'آخر أحداث رحلة المستخدم (اجتياز مستوى، إنجازات...).', parameters: { type: 'object', properties: {} } } },
  { type: 'function', function: { name: 'list_curriculum', description: 'فهرس مواضيع الموقع: كل مسار وأقسامه ومستوياته وعنوان كل موضوع. استخدمها لتعرف أين يقع موضوع سأل عنه المستخدم.', parameters: { type: 'object', properties: { track_id: { type: 'string' } } } } },
  { type: 'function', function: { name: 'get_lesson', description: 'نص الدرس الكامل لموضوع معيّن (شرح + خلاصات + مصطلحات). المصدر الرسمي للشرح — اشرح منه لا من ذاكرتك.', parameters: { type: 'object', properties: { track_id: { type: 'string' }, section_index: { type: 'integer', description: '0 إلى 6' }, level: { type: 'integer', description: '1 إلى 5' } }, required: ['track_id', 'section_index', 'level'] } } },
  { type: 'function', function: { name: 'get_practice_questions', description: 'أسئلة تدريب من بنك الموقع لمستوى معيّن (مع الإجابة والشرح لك أنت). لا تكشف الإجابة قبل أن يحاول المستخدم.', parameters: { type: 'object', properties: { track_id: { type: 'string' }, section_id: { type: 'string' }, level: { type: 'integer' }, topic: { type: 'string' }, n: { type: 'integer', default: 3 } }, required: ['track_id', 'section_id', 'level'] } } },
  { type: 'function', function: { name: 'get_leaderboard', description: 'قائمة المتصدرين وترتيب المستخدم الحالي بينهم.', parameters: { type: 'object', properties: { track_id: { type: 'string' } } } } },
  { type: 'function', function: { name: 'save_study_plan', description: 'يحفظ خطة دراسية للمستخدم تظهر له في لوحته. استدعها فقط بعد get_my_weak_topics وget_my_progress، وبعد أن تعرض الخطة عليه.', parameters: { type: 'object', properties: { track_id: { type: 'string' }, title: { type: 'string' }, summary: { type: 'string' }, items: { type: 'array', items: { type: 'object', properties: { day: { type: 'string' }, task: { type: 'string' }, track_id: { type: 'string' }, section_index: { type: 'integer' }, level: { type: 'integer' } }, required: ['task'] } } }, required: ['title', 'items'] } } },
];

function systemPrompt(ctx: Ctx, name: string | null) {
  const lang = ctx.language === 'en' ? 'English' : 'Arabic';
  const where = ctx.track_id
    ? `المستخدم الآن في مسار «${TRACKS[ctx.track_id]?.ar ?? ctx.track_id}»${ctx.section_id ? ` · قسم «${ctx.section_id}» (section_index=${ctx.section_index ?? '?'})` : ''}${ctx.level ? ` · المستوى ${ctx.level}` : ''} · صفحة ${ctx.view ?? '?'}.`
    : 'المستخدم في الصفحة الرئيسية ولم يختر مساراً بعد.';
  return `أنت «المرشد» — مدرّب شخصي داخل منصة «مسار» التعليمية. مسار منصة تتعلم فيها التقنية كلعبة ورحلة:
خمسة مسارات (البرمجة · الذكاء الاصطناعي · الأمن السيبراني · الشبكات · التقنية المالية)، كل مسار سبعة أقسام، كل قسم خمسة مستويات،
كل مستوى بنك ٩٠ سؤالاً يُسحب منه ٣٦، العبور بـ٣٠ إجابة صحيحة، والفشل عند ٦ أخطاء. المستخدم يكسب XP ونقاطاً وإنجازات ويتنافس في المتصدرين.

${name ? `اسم المستخدم: ${name}.` : ''} ${where}

قواعدك:
- تكلّم بـ${lang}. لهجتك ودودة ومحفّزة كمدرّب لعبة، مختصرة، بلا مبالغة. لا تطوّل إلا إذا طُلب شرح كامل.
- لا تخمّن تقدّم المستخدم أو نقاط ضعفه أبداً — استدعِ الأدوات. لو لم يلعب بعد، قل ذلك واقترح من أين يبدأ.
- الشرح يكون من get_lesson (محتوى الموقع الرسمي)، وبأسلوبك وأمثلتك، لا نسخاً حرفياً. اربط الشرح بما أخطأ فيه إن وُجد.
- في التمرين: اعرض السؤال، انتظر إجابته، ثم صحّح واشرح. لا تكشف الإجابة مسبقاً.
- الخطة الدراسية: ابنِها على نقاط الضعف الفعلية والمستوى التالي المفتوح، ٥–٧ بنود لأسبوع، كل بند ملموس (مستوى محدد أو موضوع محدد). اعرضها ثم احفظها بـsave_study_plan.
- لا تخرج عن مواضيع الموقع والتعلّم؛ لو سُئلت عن شيء بعيد، أعِد المستخدم بلطف لمساره.
- استخدم Markdown خفيفاً (قوائم، **تمييز**، أكواد بين \`\`\`). لا جداول طويلة.
- لا تذكر أسماء الأدوات أو تفاصيل تقنية داخلية للمستخدم.`;
}

// ─── تنفيذ الأدوات ───
async function runTool(name: string, args: any, user: SupabaseClient, admin: SupabaseClient, userId: string, lang: string) {
  switch (name) {
    case 'get_my_progress': {
      const [{ data: progress }, { data: points }, { data: profile }, { count: ach }] = await Promise.all([
        user.from('user_progress').select('track_id,section_id,unlocked_level'),
        user.from('user_points').select('track_id,points').eq('user_id', userId),
        user.from('profiles').select('level,total_progress,current_path_id,current_section_id').eq('id', userId).maybeSingle(),
        user.from('user_achievements').select('*', { count: 'exact', head: true }).eq('user_id', userId),
      ]);
      return { progress: progress ?? [], points: points ?? [], profile, achievements: ach ?? 0 };
    }
    case 'get_my_weak_topics': {
      const { data, error } = await user.rpc('my_topic_stats', { p_track: args?.track_id ?? null });
      if (error) return { error: error.message };
      if (!data?.length) return { note: 'لا توجد إجابات مسجّلة بعد — المستخدم لم يلعب أي مستوى منذ تفعيل التتبّع.' };
      return { topics: data.slice(0, 40) };
    }
    case 'get_my_recent_activity': {
      const { data } = await user.from('journey_logs').select('track_id,section_id,level,event_type,title,created_at').eq('user_id', userId).order('created_at', { ascending: false }).limit(15);
      return { events: data ?? [] };
    }
    case 'list_curriculum': {
      let q = user.from('lesson_guides').select('track_id,section_id,section_index,level,title_ar,title_en').order('track_id').order('section_index').order('level');
      if (args?.track_id) q = q.eq('track_id', args.track_id);
      const { data } = await q;
      return { topics: (data ?? []).map((r: any) => ({ track_id: r.track_id, section_id: r.section_id, section_index: r.section_index, level: r.level, title: lang === 'en' ? r.title_en : r.title_ar })) };
    }
    case 'get_lesson': {
      const { data } = await user.from('lesson_guides').select('*').eq('track_id', args.track_id).eq('section_index', args.section_index).eq('level', args.level).maybeSingle();
      if (!data) return { error: 'لا يوجد درس بهذي المعرّفات' };
      const en = lang === 'en';
      return { title: en ? data.title_en : data.title_ar, lead: en && data.lead_en ? data.lead_en : data.lead_ar, body: en && data.body_en ? data.body_en : data.body_ar, key_points: en && data.key_points_en?.length ? data.key_points_en : data.key_points_ar, terms: data.terms };
    }
    case 'get_practice_questions': {
      let q = user.from('questions').select('id,topic,difficulty,type,question,options,correct_answer,correct_answers,explanation,code_snippet,pairs,expected_answers').eq('track_id', args.track_id).eq('section_id', args.section_id).eq('level', args.level).eq('is_active', true).in('type', ['multiple-choice', 'true-false', 'code', 'terminal']);
      if (args?.topic) q = q.eq('topic', args.topic);
      const { data } = await q.limit(40);
      const pool = data ?? [];
      for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
      return { questions: pool.slice(0, Math.min(args?.n ?? 3, 5)) };
    }
    case 'get_leaderboard': {
      const [{ data: top }, { data: me }] = await Promise.all([
        user.rpc('leaderboard_top', { p_limit: 10, p_track: args?.track_id ?? null }),
        user.rpc('leaderboard_me', { p_track: args?.track_id ?? null }),
      ]);
      return { top: top ?? [], me: me?.[0] ?? null };
    }
    case 'save_study_plan': {
      const items = (args.items ?? []).map((it: any) => ({ ...it, done: false }));
      const { error } = await admin.from('study_plans').insert({ user_id: userId, track_id: args.track_id ?? null, title: args.title, summary: args.summary ?? null, items });
      return error ? { error: error.message } : { saved: true, items: items.length };
    }
    default:
      return { error: 'unknown tool' };
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'POST only' }, 405);

  const apiKey = Deno.env.get('OPENAI_API_KEY');
  if (!apiKey) return json({ error: 'OPENAI_API_KEY غير مضبوط في أسرار الدالة' }, 500);

  const authHeader = req.headers.get('Authorization') ?? '';
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const user = createClient(supabaseUrl, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: authHeader } } });
  const admin = createClient(supabaseUrl, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

  const { data: { user: authUser }, error: authErr } = await user.auth.getUser();
  if (authErr || !authUser) return json({ error: 'unauthorized' }, 401);
  const userId = authUser.id;

  let body: { message?: string; context?: Ctx };
  try { body = await req.json(); } catch { return json({ error: 'bad json' }, 400); }
  const message = (body.message ?? '').toString().trim().slice(0, 2000);
  if (!message) return json({ error: 'empty message' }, 400);
  const ctx: Ctx = body.context ?? {};
  const lang = ctx.language === 'en' ? 'en' : 'ar';

  // حد يومي لكل مستخدم
  const since = new Date(); since.setUTCHours(0, 0, 0, 0);
  const { count } = await admin.from('tutor_messages').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('role', 'user').gte('created_at', since.toISOString());
  if ((count ?? 0) >= DAILY_LIMIT) return json({ error: 'limit', reply: lang === 'en' ? `You've reached today's limit (${DAILY_LIMIT} messages). See you tomorrow!` : `وصلت حد اليوم (${DAILY_LIMIT} رسالة). نكمل بكرة!` }, 429);

  // آخر ١٢ رسالة للسياق
  const [{ data: hist }, { data: profile }] = await Promise.all([
    admin.from('tutor_messages').select('role,content').eq('user_id', userId).order('created_at', { ascending: false }).limit(12),
    admin.from('profiles').select('full_name,username').eq('id', userId).maybeSingle(),
  ]);
  const name = profile?.full_name || profile?.username || null;

  const messages: any[] = [
    { role: 'system', content: systemPrompt(ctx, name) },
    ...(hist ?? []).reverse().map((m: any) => ({ role: m.role, content: m.content })),
    { role: 'user', content: message },
  ];

  await admin.from('tutor_messages').insert({ user_id: userId, role: 'user', content: message, context: ctx });

  const toolsUsed: string[] = [];
  let reply = '';
  for (let round = 0; round <= MAX_TOOL_ROUNDS; round++) {
    const r = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model: MODEL, messages, tools: TOOLS, tool_choice: round === MAX_TOOL_ROUNDS ? 'none' : 'auto', temperature: 0.4, max_tokens: 1200 }),
    });
    if (!r.ok) {
      const t = await r.text();
      console.error('openai', r.status, t);
      return json({ error: 'llm', reply: lang === 'en' ? 'The tutor is unavailable right now. Try again in a moment.' : 'المرشد غير متاح حالياً، جرّب بعد لحظات.' }, 502);
    }
    const data = await r.json();
    const msg = data.choices?.[0]?.message;
    if (!msg) break;
    messages.push(msg);
    if (msg.tool_calls?.length) {
      for (const tc of msg.tool_calls) {
        let args: any = {};
        try { args = JSON.parse(tc.function.arguments || '{}'); } catch { /* تجاهل */ }
        toolsUsed.push(tc.function.name);
        let result: unknown;
        try { result = await runTool(tc.function.name, args, user, admin, userId, lang); }
        catch (e) { result = { error: String(e) }; }
        messages.push({ role: 'tool', tool_call_id: tc.id, content: JSON.stringify(result).slice(0, 24000) });
      }
      continue;
    }
    reply = (msg.content ?? '').trim();
    break;
  }
  if (!reply) reply = lang === 'en' ? 'I could not form an answer — try rephrasing.' : 'ما قدرت أكوّن إجابة — جرّب صياغة ثانية.';

  await admin.from('tutor_messages').insert({ user_id: userId, role: 'assistant', content: reply, context: { tools: toolsUsed } });
  return json({ reply, planSaved: toolsUsed.includes('save_study_plan') });
});
