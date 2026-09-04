import { supabase } from '../supabaseClient';

// ═══════════════════════════════════════════════════════════
// قيم النقاط — المصدر الوحيد للحقيقة في الواجهة.
// نظيرتها في قاعدة البيانات داخل دوال SQL (grant_points وأخواتها)،
// وهي المرجع النهائي لأن الاحتساب يتم في الخادم لا في المتصفح.
// أي تعديل هنا لازم يقابله تعديل في الدوال، والعكس.
// ═══════════════════════════════════════════════════════════
export const POINTS = {
  LEVEL_PASS: 100,        // اجتياز مستوى — مرة واحدة لكل مستوى، الإعادة لا تُحتسب
  PER_CORRECT: 2,         // كل إجابة صحيحة في التحدي
  ROOM_WINNER: 15,        // الأول في الروم
  ROOM_SECOND: 5,         // الثاني في الروم
  DAILY_CHALLENGE_CAP: 200 // سقف نقاط التحديات في اليوم الواحد
};

/** نقاط اجتياز مستوى. تُمنح مرة واحدة فقط لكل (مسار · قسم · مستوى). */
export const awardLevelPoints = async (trackId, sectionId, level) => {
  const { data, error } = await supabase.rpc('award_level_points', {
    p_track: trackId,
    p_section: sectionId,
    p_level: level
  });
  if (error) {
    console.warn('تعذّر منح نقاط المستوى:', error.message);
    return 0;
  }
  return data || 0;
};

/** نتيجة تحدٍ فردي. تعيد عدد النقاط الممنوحة فعلاً (قد تقل بسبب السقف اليومي). */
export const recordSoloChallenge = async (trackId, sectionId, difficulty, correct, total) => {
  const { data, error } = await supabase.rpc('record_solo_challenge', {
    p_track: trackId,
    p_section: sectionId,
    p_difficulty: difficulty,
    p_correct: correct,
    p_total: total
  });
  if (error) {
    console.warn('تعذّر تسجيل التحدي:', error.message);
    return 0;
  }
  return data || 0;
};

/** مجموع نقاط المستخدم لكل مسار + الإجمالي + المسار الأعلى (للون كرت الصدارة). */
export const fetchUserPoints = async (userId) => {
  if (!userId) return { total: 0, byTrack: {}, topTrack: null };
  const { data, error } = await supabase
    .from('user_points')
    .select('track_id, points')
    .eq('user_id', userId);

  if (error || !data) return { total: 0, byTrack: {}, topTrack: null };

  const byTrack = {};
  let total = 0;
  let topTrack = null;
  data.forEach(({ track_id, points }) => {
    byTrack[track_id] = points;
    total += points;
    if (!topTrack || points > byTrack[topTrack]) topTrack = track_id;
  });
  return { total, byTrack, topTrack };
};

/** ما تبقّى للمستخدم من السقف اليومي لنقاط التحديات. */
export const fetchRemainingDailyCap = async (userId) => {
  if (!userId) return POINTS.DAILY_CHALLENGE_CAP;
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const { data, error } = await supabase
    .from('point_events')
    .select('points')
    .eq('user_id', userId)
    .like('source', 'challenge%')
    .gte('created_at', startOfDay.toISOString());

  if (error || !data) return POINTS.DAILY_CHALLENGE_CAP;
  const used = data.reduce((sum, e) => sum + e.points, 0);
  return Math.max(0, POINTS.DAILY_CHALLENGE_CAP - used);
};
