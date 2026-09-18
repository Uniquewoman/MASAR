import { supabase } from '../supabaseClient';

// يرسل رسالة للمرشد (دالة Edge `tutor`) بجلسة المستخدم الحالية.
// السياق يخبر المرشد أين المستخدم الآن (المسار/القسم/المستوى/اللغة).
// conversationId فارغ = محادثة جديدة، والخادم يرجّع رقمها.
export async function askTutor(message, context, conversationId = null) {
  const { data, error } = await supabase.functions.invoke('tutor', {
    body: { message, context, conversation_id: conversationId },
  });
  if (error) {
    // supabase-js يخفي جسم الرد عند الأخطاء غير 2xx — نحاول قراءته لعرض رسالة مفهومة
    let body = null;
    try { body = await error.context?.json?.(); } catch { /* لا شيء */ }
    return { reply: body?.reply || null, error: body?.error || error.message };
  }
  return data;
}

// ─── المحادثات (RLS يضمن أنها للمستخدم نفسه) ───
export async function listConversations() {
  const { data } = await supabase
    .from('tutor_conversations')
    .select('id,title,updated_at')
    .order('updated_at', { ascending: false });
  return data || [];
}

export async function loadConversation(conversationId, limit = 200) {
  const { data } = await supabase
    .from('tutor_messages')
    .select('role,content,created_at')
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true })
    .limit(limit);
  return data || [];
}

export async function renameConversation(id, title) {
  const { error } = await supabase.from('tutor_conversations').update({ title }).eq('id', id);
  return !error;
}

export async function deleteConversation(id) {
  const { error } = await supabase.from('tutor_conversations').delete().eq('id', id);
  return !error;
}

// ─── الخطط ───
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
