-- جدول تتبّع الأسئلة اللي شافها اليوزر في كل مستوى
-- الغرض: ما يتكرر عليه سؤال قبل ما يخلص كل أسئلة المستوى
-- شغّليه في: Supabase Dashboard > SQL Editor > New query

create table if not exists public.user_question_history (
  user_id     uuid        not null,
  question_id bigint      not null,
  track_id    text        not null,
  section_id  text        not null,
  level       int         not null,
  cycle       int         not null default 1,
  answered_at timestamptz not null default now(),
  primary key (user_id, question_id, cycle)
);

-- فهرس يسرّع جلب سجل المستوى الواحد
create index if not exists idx_uqh_level_lookup
  on public.user_question_history (user_id, track_id, section_id, level, cycle);

-- حماية: كل مستخدم يشوف ويعدّل سجله فقط
alter table public.user_question_history enable row level security;

drop policy if exists "uqh_select_own" on public.user_question_history;
create policy "uqh_select_own" on public.user_question_history
  for select using (auth.uid() = user_id);

drop policy if exists "uqh_insert_own" on public.user_question_history;
create policy "uqh_insert_own" on public.user_question_history
  for insert with check (auth.uid() = user_id);

drop policy if exists "uqh_delete_own" on public.user_question_history;
create policy "uqh_delete_own" on public.user_question_history
  for delete using (auth.uid() = user_id);
