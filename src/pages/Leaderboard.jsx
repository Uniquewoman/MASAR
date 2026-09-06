import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Crown, Loader2, RefreshCw, TrendingUp, Info } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { supabase } from '../supabaseClient';

// ═══════════════════════════════════════════════════════════════════
// صفحة المتصدّرين — أعلى ٢٠ في الموقع كله.
//
// ثلاث قواعد عرض:
//   ١) لون البطاقة من المسار الذي يملك فيه الشخص أكثر نقاطه.
//   ٢) يظهر ترتيبه داخل ذلك المسار لا الترتيب العام وحده.
//   ٣) القائمة تتحدّث لحظياً بلا إعادة تحميل.
//
// مصدر البيانات دالة `leaderboard_top` في الخادم لأن أسماء بقية
// المستخدمين محميّة بـRLS، والترتيب داخل المسار يحتاج قراءة كل الصفوف.
// وإن لم تكن الدالة منشورة بعد، تسقط الصفحة على قراءة `user_points`
// المتاحة للقراءة العامة وتعرض القائمة بلا أسماء — أفضل من شاشة عطل.
// ═══════════════════════════════════════════════════════════════════

const REFRESH_MS = 20000;

// بلا اسم لا نعرض علامة استفهام: الشرطة محايدة بين اللغتين،
// و«؟» كانت تظهر بالعربية داخل واجهة إنجليزية.
const initials = (name) => {
  const n = (name || '').trim();
  if (!n) return '—';
  return n.split(/\s+/).slice(0, 2).map(w => w[0]).join('');
};

// نغمة اللون تُشتق من لون المسار نفسه لا من قائمة ثابتة،
// فأي تعديل على ألوان المسارات ينعكس هنا تلقائياً.
const tint = (hex, alpha) => {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
};

const MEDALS = ['#fbbf24', '#cbd5e1', '#d97706']; // ذهبي · فضي · برونزي

export const Leaderboard = () => {
  const { tracksInfo, language, t, user } = useAppContext();

  const [rows, setRows] = useState([]);
  const [myRow, setMyRow] = useState(null);
  const [trackFilter, setTrackFilter] = useState(null); // null = كل المسارات
  const [loading, setLoading] = useState(true);
  const [degraded, setDegraded] = useState(false);      // الدالة غير منشورة
  const [updatedAt, setUpdatedAt] = useState(null);

  const trackList = useMemo(() => Object.values(tracksInfo || {}), [tracksInfo]);
  const trackName = useCallback(
    (id) => {
      const tr = tracksInfo?.[id];
      return tr ? t(tr.name_ar, tr.name) : id;
    },
    [tracksInfo, t]
  );
  const trackColor = useCallback(
    (id) => tracksInfo?.[id]?.color || '#64748b',
    [tracksInfo]
  );

  // ─────────── مسار الاحتياط: قراءة الجدول مباشرة ───────────
  // يُستخدم فقط إن غابت الدالة. يحسب الترتيب في المتصفح، ويعرض
  // «متعلّم» بدل الاسم لأن سياسة الأمان تمنع قراءة ملفات الآخرين.
  const loadFallback = useCallback(async () => {
    const { data, error } = await supabase
      .from('user_points')
      .select('user_id, track_id, points');
    if (error || !data) return [];

    const byUser = new Map();
    data.forEach(({ user_id, track_id, points }) => {
      if (!byUser.has(user_id)) byUser.set(user_id, { user_id, total: 0, tracks: {} });
      const u = byUser.get(user_id);
      u.tracks[track_id] = points;
      u.total += points;
    });

    // ترتيب كل مستخدم داخل كل مسار
    const rankInTrack = {};
    const perTrack = {};
    data.forEach(({ user_id, track_id, points }) => {
      (perTrack[track_id] ||= []).push({ user_id, points });
    });
    Object.entries(perTrack).forEach(([tid, list]) => {
      list.sort((a, b) => b.points - a.points);
      list.forEach((r, i) => { rankInTrack[`${tid}|${r.user_id}`] = i + 1; });
    });

    return [...byUser.values()]
      .map(u => {
        const top = Object.entries(u.tracks).sort((a, b) => b[1] - a[1])[0] || [null, 0];
        return {
          user_id: u.user_id,
          display_name: null,
          avatar_url: null,
          total_points: trackFilter ? (u.tracks[trackFilter] || 0) : u.total,
          top_track: top[0],
          top_track_points: top[1],
          rank_in_top_track: rankInTrack[`${top[0]}|${u.user_id}`] || null
        };
      })
      .filter(r => r.total_points > 0)
      .sort((a, b) => b.total_points - a.total_points)
      .slice(0, 20)
      .map((r, i) => ({ ...r, overall_rank: i + 1 }));
  }, [trackFilter]);

  const load = useCallback(async () => {
    const { data, error } = await supabase.rpc('leaderboard_top', {
      p_limit: 20,
      p_track: trackFilter
    });

    if (error) {
      // الدالة غير منشورة بعد — نعرض ما تسمح به سياسة القراءة العامة
      setDegraded(true);
      setRows(await loadFallback());
      setMyRow(null);
    } else {
      setDegraded(false);
      setRows(data || []);
      if (user) {
        const { data: mine } = await supabase.rpc('leaderboard_me', { p_track: trackFilter });
        const me = mine?.[0] || null;
        // لا نكرّر صفّه إن كان ضمن العشرين أصلاً
        setMyRow(me && !(data || []).some(r => r.user_id === me.user_id) ? me : null);
      }
    }
    setUpdatedAt(new Date());
    setLoading(false);
  }, [trackFilter, user, loadFallback]);

  useEffect(() => { setLoading(true); load(); }, [load]);

  // تحديث لحظي: اشتراك بتغيّرات جدول النقاط + استطلاع احتياطي
  // (الاستطلاع ضروري لأن البثّ اللحظي قد يُعطَّل على المشروع).
  useEffect(() => {
    const channel = supabase
      .channel('leaderboard')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'user_points' }, () => load())
      .subscribe();
    const poll = setInterval(load, REFRESH_MS);
    return () => { supabase.removeChannel(channel); clearInterval(poll); };
  }, [load]);

  const podium = rows.slice(0, 3);
  const rest = rows.slice(3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-10"
    >
      {/* ─────────── العنوان ─────────── */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <Crown className="text-amber-400" size={28} />
          <h1 className="text-4xl font-black tracking-tight text-white">
            {t('المتصدّرون', 'LEADERBOARD')}
          </h1>
        </div>
        <p className="text-white/50 text-sm max-w-lg mx-auto leading-relaxed">
          {trackFilter
            ? t(
                `أعلى ٢٠ في مسار ${trackName(trackFilter)}، بحسب نقاط هذا المسار وحده.`,
                `Top 20 in ${trackName(trackFilter)}, ranked by points in this track alone.`
              )
            : t(
                'أعلى ٢٠ في الموقع كله بمجموع النقاط، ولون كل بطاقة من المسار الذي جمع فيه صاحبها أكثر نقاطه.',
                'The site-wide top 20 by total points, each card coloured by the track where that person earned the most.'
              )}
        </p>
      </div>

      {/* ─────────── مرشّح المسار ─────────── */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setTrackFilter(null)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
            trackFilter === null
              ? 'bg-white text-slate-900 border-white'
              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'
          }`}
        >
          {t('كل المسارات', 'ALL TRACKS')}
        </button>
        {trackList.map(tr => {
          const on = trackFilter === tr.id;
          return (
            <button
              key={tr.id}
              onClick={() => setTrackFilter(tr.id)}
              className="px-4 py-2 rounded-xl text-xs font-bold transition border"
              style={{
                background: on ? tr.color : tint(tr.color, 0.08),
                borderColor: on ? tr.color : tint(tr.color, 0.3),
                color: on ? '#fff' : tr.color
              }}
            >
              {t(tr.name_ar, tr.name)}
            </button>
          );
        })}
      </div>

      {/* ─────────── تنبيه الوضع المنقوص ─────────── */}
      {degraded && (
        <div className="flex items-start gap-3 mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-200/90 text-xs leading-relaxed">
          <Info size={16} className="shrink-0 mt-0.5" />
          <span>
            {t(
              'الأسماء غير معروضة لأن دالة الصدارة لم تُنشَر بعد على قاعدة البيانات. النقاط والترتيب صحيحان، والأسماء تظهر تلقائياً بعد تشغيل docs/sql/leaderboard.sql.',
              'Names are hidden because the leaderboard function is not published yet. Points and ranking are correct, and names appear automatically once docs/sql/leaderboard.sql is run.'
            )}
          </span>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-white/40" size={32} />
        </div>
      ) : rows.length === 0 ? (
        <div className="text-center py-20 text-white/40 text-sm">
          {t(
            'لا نقاط بعد. اجتز مستوى أو ابدأ تحدياً لتظهر هنا.',
            'No points yet. Pass a level or start a challenge to appear here.'
          )}
        </div>
      ) : (
        <>
          {/* ─────────── منصّة الثلاثة الأوائل ─────────── */}
          <div className="grid gap-3 sm:grid-cols-3 mb-4">
            {podium.map((r, i) => (
              <PodiumCard
                key={r.user_id}
                row={r}
                place={i}
                isMe={user?.id === r.user_id}
                color={trackColor(r.top_track)}
                trackName={trackName}
                t={t}
                language={language}
              />
            ))}
          </div>

          {/* ─────────── بقية القائمة ─────────── */}
          <div className="space-y-2">
            {rest.map(r => (
              <Row
                key={r.user_id}
                row={r}
                isMe={user?.id === r.user_id}
                color={trackColor(r.top_track)}
                trackName={trackName}
                t={t}
              />
            ))}
          </div>

          {/* ─────────── صفّي أنا إن كنت خارج العشرين ─────────── */}
          {myRow && (
            <>
              <div className="flex items-center gap-3 my-4 text-white/25 text-[10px] font-bold tracking-widest">
                <div className="h-px flex-1 bg-white/10" />
                {t('ترتيبك', 'YOUR RANK')}
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <Row
                row={myRow}
                isMe
                color={trackColor(myRow.top_track)}
                trackName={trackName}
                t={t}
              />
            </>
          )}
        </>
      )}

      {/* ─────────── شريط التحديث ─────────── */}
      {updatedAt && (
        <div className="flex items-center justify-center gap-2 mt-8 text-white/30 text-[11px]">
          <RefreshCw size={12} />
          <span>{t('يُحدَّث لحظياً · آخر تحديث', 'Live · last updated')}</span>
          <span dir="ltr" className="tabular-nums">
            {updatedAt.toLocaleTimeString(language === 'ar' ? 'ar-SA' : 'en-GB', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </span>
        </div>
      )}
    </motion.div>
  );
};

// ═════════ بطاقة أحد الثلاثة الأوائل ═════════
const PodiumCard = ({ row, place, isMe, color, trackName, t }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: place * 0.07 }}
    className="relative rounded-3xl p-5 border overflow-hidden"
    style={{
      background: `linear-gradient(160deg, ${tint(color, 0.18)}, ${tint(color, 0.04)})`,
      borderColor: isMe ? '#fff' : tint(color, 0.4),
      boxShadow: `0 0 40px ${tint(color, 0.15)}`
    }}
  >
    {/* الميدالية — الرتبة الحقيقية لا الموضع في القائمة.
        متعادلان في المركز الأول يظهران «١» كلاهما لا «١» و«٢». */}
    <div className="flex items-center justify-between mb-4">
      <div
        className="w-10 h-10 rounded-2xl grid place-items-center font-black text-slate-900 text-lg"
        style={{ background: MEDALS[Math.min(row.overall_rank, 3) - 1] || MEDALS[2] }}
        dir="ltr"
      >
        {row.overall_rank}
      </div>
      {row.overall_rank === 1 && <Crown size={20} className="text-amber-300" />}
    </div>

    <Avatar row={row} color={color} size={56} />

    <div className="mt-3 font-black text-white text-base truncate">
      {row.display_name || t('متعلّم', 'Learner')}
      {isMe && <span className="text-white/40 font-normal text-xs"> · {t('أنت', 'you')}</span>}
    </div>

    <div className="mt-1 flex items-baseline gap-1.5" dir="ltr">
      <span className="text-2xl font-black tabular-nums" style={{ color }}>
        {row.total_points}
      </span>
      <span className="text-white/40 text-xs">{t('نقطة', 'pts')}</span>
    </div>

    <TrackBadge row={row} color={color} trackName={trackName} t={t} />
  </motion.div>
);

// ═════════ صفّ عادي في القائمة ═════════
const Row = ({ row, isMe, color, trackName, t }) => (
  <motion.div
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center gap-4 rounded-2xl px-4 py-3 border transition hover:bg-white/[0.04]"
    style={{
      background: isMe ? tint(color, 0.14) : 'rgba(255,255,255,0.02)',
      borderColor: isMe ? '#ffffff55' : tint(color, 0.22),
      borderInlineStartWidth: 4,
      borderInlineStartColor: color
    }}
  >
    <div className="w-8 text-center font-black text-white/35 tabular-nums shrink-0" dir="ltr">
      {row.overall_rank}
    </div>

    <Avatar row={row} color={color} size={40} />

    <div className="min-w-0 flex-1">
      <div className="font-bold text-white text-sm truncate">
        {row.display_name || t('متعلّم', 'Learner')}
        {isMe && <span className="text-white/40 font-normal text-xs"> · {t('أنت', 'you')}</span>}
      </div>
      <TrackBadge row={row} color={color} trackName={trackName} t={t} compact />
    </div>

    <div className="flex items-baseline gap-1.5 shrink-0" dir="ltr">
      <span className="text-lg font-black tabular-nums" style={{ color }}>
        {row.total_points}
      </span>
      <span className="text-white/35 text-[11px]">{t('نقطة', 'pts')}</span>
    </div>
  </motion.div>
);

// ═════════ الصورة أو الأحرف الأولى ═════════
const Avatar = ({ row, color, size }) => (
  <div
    className="rounded-2xl overflow-hidden grid place-items-center font-black text-white shrink-0"
    style={{
      width: size,
      height: size,
      background: tint(color, 0.3),
      border: `1px solid ${tint(color, 0.5)}`,
      fontSize: size / 2.8
    }}
  >
    {row.avatar_url
      ? <img src={row.avatar_url} alt="" className="w-full h-full object-cover" />
      : initials(row.display_name)}
  </div>
);

// ═════════ وسم المسار وترتيب صاحبه فيه ═════════
const TrackBadge = ({ row, color, trackName, t, compact }) => {
  if (!row.top_track) return null;
  const rank = row.rank_in_top_track;
  return (
    <div className={`flex items-center gap-1.5 ${compact ? 'mt-0.5' : 'mt-3'}`}>
      <TrendingUp size={compact ? 11 : 13} style={{ color }} className="shrink-0" />
      <span className="text-[11px] font-bold truncate" style={{ color }}>
        {trackName(row.top_track)}
      </span>
      {rank && (
        <span className="text-[11px] text-white/35 shrink-0">
          {/* الرقم بحاوية لاتينية: الأرقام داخل نص عربي تُعرض معكوسة بدونها */}
          {t('· المركز ', '· rank ')}
          <span dir="ltr" className="tabular-nums">{rank}</span>
        </span>
      )}
    </div>
  );
};

export default Leaderboard;
