import { supabase } from '../supabaseClient';

// يرسل رسالة للمرشد (دالة Edge `tutor`) بجلسة المستخدم الحالية.
// السياق يخبر المرشد أين المستخدم الآن (المسار/القسم/المستوى/اللغة).
export async function askTutor(message, context) {
  const { data, error } = await supabase.functions.invoke('tutor', {
    body: { message, context },
  });
  if (error) {
    // supabase-js يخفي جسم الرد عند الأخطاء غير 2xx — نحاول قراءته لعرض رسالة مفهومة
    let body = null;
    try { body = await error.context?.json?.(); } catch { /* لا شيء */ }
    return { reply: body?.reply || null, error: body?.error || error.message };
  }
  return data;
}

// سجل المحادثة السابق (RLS يضمن أنه للمستخدم نفسه)
export async function loadTutorHistory(limit = 30) {
  const { data } = await supabase
    .from('tutor_messages')
    .select('role,content,created_at')
    .order('created_at', { ascending: false })
    .limit(limit);
  return (data || []).reverse();
}

export async function loadLatestPlan() {
  const { data } = await supabase
    .from('study_plans')
    .select('id,title,summary,items,track_id,created_at')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  return data;
}

export async function togglePlanItem(plan, index) {
  const items = plan.items.map((it, i) => (i === index ? { ...it, done: !it.done } : it));
  const { error } = await supabase.from('study_plans').update({ items }).eq('id', plan.id);
  return error ? plan : { ...plan, items };
}
