import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy, TrendingUp, Target, Award, Brain, Sparkles,
  CheckCircle2, Lock, Clock, ArrowRight, Layers
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

// ═══════════════════════════════════════════════════════════════════
// صفحة رحلتي — إعادة ترتيب وتصحيح حساب.
//
// كانت البطاقات الثلاث العلوية مفتوحة وبقية الصفحة كلها متداخلة داخل
// البطاقة الأولى، فيظهر ترتيب المحتوى مقلوباً: الرتبة ثم كل الأقسام
// ثم بطاقتا التقدم والمسارات في آخر الصفحة.
//
// وكان الحساب خاطئاً في ثلاثة مواضع:
//   · totalLevels = عدد الأقسام × ١٠، والقسم خمسة مستويات لا عشرة.
//   · completedLevels = مجموع unlocked_level، وهو رقم المستوى المتاح
//     التالي لا عدد المكتمل، فيُحتسب مستوى لم يُجتَز بعد.
//   · «المسارات المكتملة» كانت تعدّ الأقسام وتقارنها بعدد المسارات،
//     فيمكن أن تظهر ٧ من ٥.
// ═══════════════════════════════════════════════════════════════════

const LEVELS_PER_SECTION = 5;

// unlocked_level هو المستوى المتاح التالي، فالمكتمل ما قبله
const completedIn = (row) =>
  Math.max(0, Math.min((row?.unlocked_level ?? 1) - 1, LEVELS_PER_SECTION));

export const JourneyPage = () => {
  const {
    language, t, currentTrack, tracksInfo,
    profile, userProgress, journeyLogs, userAchievements
  } = useAppContext();

  const isArabic = language === 'ar';
  const card = 'rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10';
  const track = currentTrack;
  const color = track?.color || '#00E5FF';

  // ─────────── حساب التقدم ───────────
  const stats = useMemo(() => {
    const progress = userProgress || [];

    // صفوف المسار الحالي، مطابقةً بالعنوان الكامل كما يخزّنه PlayLevel
    const sections = track?.sections || [];
    const perSection = sections.map(sec => {
      const row = progress.find(
        p => p.track_id === track?.id && p.section_id === sec.title
      );
      return {
        section: sec,
        unlocked: row?.unlocked_level ?? 1,
        completed: completedIn(row)
      };
    });

    const doneLevels = perSection.reduce((s, x) => s + x.completed, 0);
    const totalLevels = sections.length * LEVELS_PER_SECTION;
    const percent = totalLevels ? Math.round((doneLevels / totalLevels) * 100) : 0;
    const doneSections = perSection.filter(x => x.completed >= LEVELS_PER_SECTION).length;
    const highestLevel = perSection.reduce((m, x) => Math.max(m, x.completed), 0);

    // مسار يُعد مكتملاً حين تكتمل كل أقسامه لا حين يكتمل قسم واحد
    const completedTracks = Object.values(tracksInfo || {}).filter(tr => {
      const secs = tr.sections || [];
      if (!secs.length) return false;
      return secs.every(sec => {
        const row = progress.find(p => p.track_id === tr.id && p.section_id === sec.title);
        return completedIn(row) >= LEVELS_PER_SECTION;
      });
    }).length;

    // أول قسم لم يكتمل — هو الخطوة القادمة الطبيعية
    const nextUp = perSection.find(x => x.completed < LEVELS_PER_SECTION) || null;
    // أبعد قسم وصل فيه — نقطة قوته الفعلية
    const strongest = perSection.reduce(
      (best, x) => (!best || x.completed > best.completed ? x : best),
      null
    );

    return {
      perSection, doneLevels, totalLevels, percent, doneSections,
      highestLevel, completedTracks,
      totalTracks: Object.keys(tracksInfo || {}).length,
      nextUp, strongest
    };
  }, [userProgress, track, tracksInfo]);

  if (!track) {
    return (
      <div className="pt-40 text-center text-white/50" dir={isArabic ? 'rtl' : 'ltr'}>
        {t('اختر مساراً أولاً لعرض رحلتك فيه.', 'Choose a track first to see your journey in it.')}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-6 max-w-6xl mx-auto"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* ─────────── العنوان ─────────── */}
      <div className={`mb-12 ${isArabic ? 'text-right' : 'text-left'}`}>
        <h2
          className="text-5xl font-black italic uppercase tracking-tighter mb-3"
          style={{ color }}
        >
          {t(`رحلتي في ${track.name_ar}`, `MY ${track.name}`)}
        </h2>
        <p className="text-white/40 uppercase tracking-[0.3em] text-[11px] font-bold">
          {t('كل تقدمك داخل هذا المسار', 'YOUR PROGRESS INSIDE THIS TRACK')}
        </p>
      </div>

      {/* ─────────── ثلاث بطاقات في صف واحد ─────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        <StatCard
          label={t('أعلى مستوى بلغته', 'HIGHEST LEVEL')}
          value={stats.highestLevel}
          icon={<Trophy size={26} color={color} />}
          color={color}
          note={t('في أبعد أقسام هذا المسار', 'In your furthest section here')}
        />

        <StatCard
          label={t('تقدّم المسار', 'TRACK PROGRESS')}
          value={`${stats.percent}%`}
          icon={<TrendingUp size={26} color={color} />}
          color={color}
          note={
            <span dir="ltr" className="tabular-nums">
              {stats.doneLevels} / {stats.totalLevels}{' '}
              <span className="opacity-60">{t('مستوى', 'levels')}</span>
            </span>
          }
        >
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.percent}%` }}
              transition={{ duration: 1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
        </StatCard>

        <StatCard
          label={t('الأقسام المكتملة', 'SECTIONS DONE')}
          value={<span dir="ltr" className="tabular-nums">{stats.doneSections}/{track.sections.length}</span>}
          icon={<Layers size={26} className="text-white/70" />}
          color={color}
          note={
            <span dir="ltr" className="tabular-nums">
              {stats.completedTracks}/{stats.totalTracks}{' '}
              <span className="opacity-60">{t('مسار مكتمل', 'tracks complete')}</span>
            </span>
          }
        />
      </div>

      {/* ─────────── خريطة التقدم ─────────── */}
      <Section
        title={t('خريطة التقدم', 'PROGRESS MAP')}
        sub={t('كل قسم وخمسة مستوياته', 'Every section and its five levels')}
        isArabic={isArabic}
      >
        <div className={`${card} p-6 space-y-3`}>
          {stats.perSection.map(({ section, completed, unlocked }, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white text-sm truncate">
                  {t(section.title_ar, section.title)}
                </div>
                <div className="text-white/30 text-[11px] mt-0.5">
                  <span dir="ltr" className="tabular-nums">{completed}/{LEVELS_PER_SECTION}</span>
                  {' '}{t('مستوى مكتمل', 'levels done')}
                </div>
              </div>

              <div className="flex gap-1.5 shrink-0">
                {[1, 2, 3, 4, 5].map(lv => {
                  const done = lv <= completed;
                  const current = lv === unlocked && !done;
                  return (
                    <div
                      key={lv}
                      title={`${t('مستوى', 'Level')} ${lv}`}
                      className="w-9 h-9 rounded-xl grid place-items-center text-[11px] font-black border transition"
                      style={
                        done
                          ? { background: color, borderColor: color, color: '#fff' }
                          : current
                            ? { background: `${color}18`, borderColor: `${color}70`, color }
                            : { background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.22)' }
                      }
                      dir="ltr"
                    >
                      {done ? <CheckCircle2 size={14} /> : current ? lv : <Lock size={12} />}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────── تحليل رحلتك ─────────── */}
      <Section
        title={t('تحليل رحلتك', 'JOURNEY ANALYSIS')}
        sub={t('مبني على تقدمك الفعلي', 'Based on your actual progress')}
        isArabic={isArabic}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <InsightCard
            icon={<Brain />} color={color}
            title={t('أبعد ما وصلت', 'FURTHEST POINT')}
            body={
              stats.strongest && stats.strongest.completed > 0
                ? t(
                    `${stats.strongest.section.title_ar} — ${stats.strongest.completed} من ${LEVELS_PER_SECTION}`,
                    `${stats.strongest.section.title} — ${stats.strongest.completed} of ${LEVELS_PER_SECTION}`
                  )
                : t('لم تجتز مستوى بعد في هذا المسار.', 'No level passed yet in this track.')
            }
          />
          <InsightCard
            icon={<Target />} color={color}
            title={t('خطوتك القادمة', 'NEXT STEP')}
            body={
              stats.nextUp
                ? t(
                    `المستوى ${stats.nextUp.unlocked} في ${stats.nextUp.section.title_ar}`,
                    `Level ${stats.nextUp.unlocked} in ${stats.nextUp.section.title}`
                  )
                : t('أكملت كل أقسام هذا المسار.', 'You completed every section here.')
            }
          />
          <InsightCard
            icon={<Sparkles />} color={color}
            title={t('ما بقي أمامك', 'WHAT REMAINS')}
            body={
              <span dir="ltr" className="tabular-nums">
                {stats.totalLevels - stats.doneLevels}{' '}
                <span className="opacity-70">{t('مستوى', 'levels')}</span>
              </span>
            }
          />
        </div>
      </Section>

      {/* ─────────── آخر نشاط ─────────── */}
      <Section
        title={t('آخر نشاط', 'RECENT ACTIVITY')}
        sub={t('آخر عشر خطوات لك', 'Your last ten steps')}
        isArabic={isArabic}
      >
        <div className={`${card} p-6`}>
          {journeyLogs?.length ? (
            <div className="divide-y divide-white/5">
              {journeyLogs.map(log => (
                <div key={log.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center shrink-0"
                    style={{ background: `${color}18`, color }}
                  >
                    {log.event_type === 'completed' ? <CheckCircle2 size={18} /> : <Clock size={18} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-bold text-sm truncate">{log.title}</h4>
                    {log.description && (
                      <p className="text-white/40 text-xs mt-0.5 truncate">{log.description}</p>
                    )}
                  </div>
                  {log.created_at && (
                    <span className="text-white/25 text-[11px] shrink-0 tabular-nums" dir="ltr">
                      {new Date(log.created_at).toLocaleDateString(isArabic ? 'ar-SA' : 'en-GB')}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/35 text-center text-sm py-6">
              {t('لا نشاط بعد — اجتز مستوى ليظهر هنا.', 'No activity yet. Pass a level and it appears here.')}
            </p>
          )}
        </div>
      </Section>

      {/* ─────────── الإنجازات ─────────── */}
      <Section
        title={t('الإنجازات', 'ACHIEVEMENTS')}
        sub={t('ما فتحته حتى الآن', 'What you unlocked so far')}
        isArabic={isArabic}
      >
        {userAchievements?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {userAchievements.map(item => (
              <motion.div key={item.id} whileHover={{ y: -5 }} className={`${card} p-6`}>
                <div
                  className="w-14 h-14 rounded-2xl grid place-items-center mb-4"
                  style={{ background: `${color}18`, color }}
                >
                  <Award size={26} />
                </div>
                <h4 className="text-white font-black text-lg">{item.achievements?.name}</h4>
                <p className="text-white/40 text-sm mt-2 leading-relaxed">
                  {item.achievements?.description}
                </p>
                <div className="mt-4 text-xs font-black" style={{ color }} dir="ltr">
                  +{item.achievements?.xp_reward || 0} XP
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className={`${card} p-6`}>
            <p className="text-white/35 text-center text-sm py-6">
              {t('لا إنجازات بعد.', 'No achievements yet.')}
            </p>
          </div>
        )}
      </Section>

      {/* ─────────── رسالة الختام ─────────── */}
      <motion.div
        whileHover={{ y: -4 }}
        className={`${card} p-8 mt-14 relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20 blur-3xl" style={{ backgroundColor: color }} />
        <div className="relative flex flex-col md:flex-row items-center gap-6">
          <div
            className="w-16 h-16 rounded-2xl grid place-items-center shrink-0"
            style={{ backgroundColor: `${color}20` }}
          >
            <Sparkles size={32} color={color} />
          </div>
          <div className={isArabic ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-black text-white">
              {t('أين أنت الآن', 'WHERE YOU STAND')}
            </h3>
            <p className="text-white/50 mt-2 leading-relaxed text-sm">
              {stats.percent >= 80
                ? t('بقي القليل على إكمال المسار — أنهِ ما تبقّى قبل أن يبرد.',
                     'Little remains to finish this track. Close it out before it goes cold.')
                : stats.percent >= 40
                  ? t('تجاوزت المنتصف، والأقسام القادمة تبني على ما أتقنته.',
                       'You are past halfway, and the coming sections build on what you mastered.')
                  : stats.doneLevels > 0
                    ? t('بدأت فعلاً — والاستمرار بمستوى في اليوم يقطع المسار في شهر.',
                         'You have genuinely started. One level a day finishes this track in a month.')
                    : t('ابدأ بالمستوى الأول من القسم الأول، والباقي يفتح تباعاً.',
                         'Start at the first level of the first section; the rest unlocks in turn.')}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ═════════ بطاقة رقم في الصف العلوي ═════════
const StatCard = ({ label, value, icon, color, note, children }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 p-6"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="min-w-0">
        <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">{label}</p>
        <h3 className="text-3xl font-black text-white mt-2 tabular-nums" dir="ltr">{value}</h3>
      </div>
      <div
        className="w-14 h-14 rounded-2xl grid place-items-center shrink-0"
        style={{ backgroundColor: `${color}20` }}
      >
        {icon}
      </div>
    </div>
    <div className="text-white/45 text-xs">{note}</div>
    {children}
  </motion.div>
);

// ═════════ عنوان قسم ═════════
const Section = ({ title, sub, isArabic, children }) => (
  <div className="mt-14">
    <div className={`mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="text-white/35 text-[11px] mt-1.5 uppercase tracking-widest">{sub}</p>
    </div>
    {children}
  </div>
);

// ═════════ بطاقة تحليل ═════════
const InsightCard = ({ icon, title, body, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 p-6"
  >
    <div
      className="w-12 h-12 rounded-2xl grid place-items-center mb-4"
      style={{ background: `${color}18`, color }}
    >
      {icon}
    </div>
    <h4 className="text-white font-black text-base">{title}</h4>
    <p className="text-white/45 mt-2 text-sm leading-relaxed">{body}</p>
  </motion.div>
);

export default JourneyPage;
