-- ═══════════════════════════════════════════════════════════════════
-- صفحة المتصدّرين — دالتان بصلاحية المُعرِّف (SECURITY DEFINER)
--
-- لماذا دالة لا استعلام مباشر من الواجهة؟
--   جدول `profiles` محميّ بـRLS فلا يقرأ المستخدم إلا صفّه، والمتصدّرون
--   يحتاجون أسماء غيرهم. الدالة تكشف ثلاثة حقول فقط (اسم العرض والصورة
--   والنقاط) لأعلى ٢٠ فقط — ولا تفتح الجدول كاملاً ولا تكشف بريداً.
--
-- الترتيب داخل المسار يُحسَب في الخادم لأنه يحتاج قراءة كل الصفوف،
-- وحسابه في المتصفح كان يعني تنزيل جدول النقاط كاملاً على كل زائر.
--
-- التشغيل: لوحة Supabase ← SQL Editor ← الصق ونفّذ.
-- ═══════════════════════════════════════════════════════════════════

-- ─────────── أعلى المتصدّرين ───────────
-- p_track = NULL  → الترتيب بمجموع النقاط عبر كل المسارات
-- p_track = 'X'   → الترتيب بنقاط ذلك المسار وحده
create or replace function public.leaderboard_top(
  p_limit int default 20,
  p_track text default null
)
returns table (
  user_id            uuid,
  display_name       text,
  avatar_url         text,
  total_points       int,
  top_track          text,
  top_track_points   int,
  rank_in_top_track  int,
  overall_rank       int
)
language sql
stable
security definer
set search_path = public
as $$
  with scoped as (
    -- النقاط التي يقع عليها الترتيب: الإجمالي أو مسار واحد
    select up.user_id,
           sum(up.points)::int as pts
    from user_points up
    where p_track is null or up.track_id = p_track
    group by up.user_id
  ),
  in_track as (
    -- ترتيب كل مستخدم داخل كل مسار على حدة
    select up.user_id,
           up.track_id,
           up.points,
           rank() over (partition by up.track_id order by up.points desc)::int as rnk
    from user_points up
  ),
  best as (
    -- مسار كل مستخدم الأعلى نقاطاً — هو ما يلوّن بطاقته
    select distinct on (user_id) user_id, track_id, points, rnk
    from in_track
    order by user_id, points desc, track_id
  )
  select s.user_id,
         coalesce(nullif(btrim(p.full_name), ''), nullif(btrim(p.username), ''), 'متعلّم') as display_name,
         p.avatar_url,
         s.pts,
         b.track_id,
         b.points::int,
         b.rnk,
         rank() over (order by s.pts desc)::int
  from scoped s
  join best b on b.user_id = s.user_id
  left join profiles p on p.id = s.user_id
  where s.pts > 0
  order by s.pts desc
  limit greatest(1, least(p_limit, 100));
$$;

-- ─────────── صفّ المستخدم الحالي ───────────
-- يُستخدم حين يكون خارج العشرين، فيُثبَّت صفّه أسفل القائمة بترتيبه الحقيقي.
create or replace function public.leaderboard_me(p_track text default null)
returns table (
  user_id            uuid,
  display_name       text,
  avatar_url         text,
  total_points       int,
  top_track          text,
  top_track_points   int,
  rank_in_top_track  int,
  overall_rank       int
)
language sql
stable
security definer
set search_path = public
as $$
  with scoped as (
    select up.user_id, sum(up.points)::int as pts
    from user_points up
    where p_track is null or up.track_id = p_track
    group by up.user_id
  ),
  ranked as (
    select s.user_id, s.pts, rank() over (order by s.pts desc)::int as rnk
    from scoped s
  ),
  in_track as (
    select up.user_id, up.track_id, up.points,
           rank() over (partition by up.track_id order by up.points desc)::int as rnk
    from user_points up
  ),
  best as (
    select distinct on (user_id) user_id, track_id, points, rnk
    from in_track
    order by user_id, points desc, track_id
  )
  select r.user_id,
         coalesce(nullif(btrim(p.full_name), ''), nullif(btrim(p.username), ''), 'متعلّم'),
         p.avatar_url,
         r.pts,
         b.track_id,
         b.points::int,
         b.rnk,
         r.rnk
  from ranked r
  join best b on b.user_id = r.user_id
  left join profiles p on p.id = r.user_id
  where r.user_id = auth.uid();
$$;

-- القراءة متاحة للزائر أيضاً: الصدارة صفحة عامة بطبيعتها.
grant execute on function public.leaderboard_top(int, text) to anon, authenticated;
grant execute on function public.leaderboard_me(text)       to anon, authenticated;

-- ─────────── فهرس يخدم الترتيب ───────────
create index if not exists user_points_track_points_idx
  on public.user_points (track_id, points desc);
