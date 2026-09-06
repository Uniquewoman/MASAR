import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Loader2, Search, CheckCircle2, Lightbulb, Filter, X
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { supabase } from '../supabaseClient';

// ═══════════════════════════════════════════════════════════════════
// بنك الأسئلة — يقرأ من جدول questions في Supabase مباشرة.
//
// كان يقرأ من ملف src/data/questions.js المحلي، فلم تكن أسئلة البنك
// الحقيقية تظهر فيه إطلاقاً مهما أُدخل منها. وكان يعرض عشرة أسئلة
// من نوع واحد، بينما البنك سبعة أنواع لكل منها بنية مختلفة.
//
// مفتاح القسم في الجدول هو العنوان الإنجليزي بعد حذف اسم المسار منه
// («Programming Basics» ← «Basics») — نفس الاشتقاق المطبّق في الدروس.
// ═══════════════════════════════════════════════════════════════════

const PAGE = 20;

const sectionKey = (track, section) =>
  section.title.replace(track.name + ' ', '').trim();

const TYPE_LABELS = {
  'multiple-choice': ['اختيار من متعدد', 'Multiple choice'],
  'code': ['كود', 'Code'],
  'true-false': ['صح وخطأ', 'True / false'],
  'matching': ['توصيل', 'Matching'],
  'terminal': ['كتابة حرة', 'Free text'],
  'multi-select': ['متعدد الإجابات', 'Multi-select'],
  'ordering': ['ترتيب', 'Ordering']
};

const DIFF_LABELS = {
  easy: ['سهل', 'Easy'],
  medium: ['متوسط', 'Medium'],
  hard: ['صعب', 'Hard']
};

const DIFF_COLORS = { easy: '#22c55e', medium: '#eab308', hard: '#ef4444' };

// المحتوى اللاتيني داخل صفحة عربية يُعرض معكوساً بلا هذا الوسم
const isLatin = (s) => typeof s === 'string' && /^[\x20-\x7E\n\r\t]+$/.test(s);

export const QuestionBank = ({ section }) => {
  const { currentTrack, language, t } = useAppContext();
  const track = currentTrack;

  const [selectedSection, setSelectedSection] = useState(section || null);
  const [level, setLevel] = useState(1);
  const [typeFilter, setTypeFilter] = useState(null);
  const [diffFilter, setDiffFilter] = useState(null);
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [levelCounts, setLevelCounts] = useState({});
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const trackColor = track?.color || '#14b8a6';
  const cardBg = 'bg-white/[0.03] backdrop-blur-md border border-white/10';

  // ─────────── عدد أسئلة كل مستوى ───────────
  // يُجلب مرة عند اختيار القسم ليظهر على أزرار المستويات،
  // فيعرف المتصفّح أي مستوى فيه أسئلة قبل أن يفتحه.
  useEffect(() => {
    if (!track || !selectedSection) return;
    let alive = true;
    (async () => {
      const counts = {};
      await Promise.all([1, 2, 3, 4, 5].map(async (lv) => {
        const { count } = await supabase
          .from('questions')
          .select('id', { count: 'exact', head: true })
          .eq('track_id', track.id)
          .eq('section_id', sectionKey(track, selectedSection))
          .eq('level', lv)
          .eq('is_active', true);
        counts[lv] = count || 0;
      }));
      if (alive) setLevelCounts(counts);
    })();
    return () => { alive = false; };
  }, [track, selectedSection]);

  // ─────────── جلب صفحة الأسئلة ───────────
  const load = useCallback(async () => {
    if (!track || !selectedSection) return;
    setLoading(true);
    let q = supabase
      .from('questions')
      .select('*', { count: 'exact' })
      .eq('track_id', track.id)
      .eq('section_id', sectionKey(track, selectedSection))
      .eq('level', level)
      .eq('is_active', true);

    if (typeFilter) q = q.eq('type', typeFilter);
    if (diffFilter) q = q.eq('difficulty', diffFilter);
    if (search.trim()) q = q.ilike('question', `%${search.trim()}%`);

    const { data, count, error } = await q
      .order('type')
      .order('id')
      .range(page * PAGE, page * PAGE + PAGE - 1);

    if (!error) {
      setRows(data || []);
      setTotal(count || 0);
    }
    setLoading(false);
  }, [track, selectedSection, level, typeFilter, diffFilter, search, page]);

  useEffect(() => { load(); }, [load]);
  // أي تغيير في المرشّحات يعيدنا للصفحة الأولى، وإلا بقينا في صفحة لا وجود لها
  useEffect(() => { setPage(0); }, [level, typeFilter, diffFilter, search]);

  if (!track) {
    return (
      <div className="pt-40 text-center text-white/50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {t('اختر مساراً أولاً من الصفحة الرئيسية.', 'Choose a track from the home page first.')}
      </div>
    );
  }

  // ─────────── اختيار القسم ───────────
  if (!selectedSection) {
    return (
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="pt-32 px-6 pb-20 max-w-7xl mx-auto text-center"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-3">
          {t('بنك الأسئلة', 'QUESTION BANK')}
        </h2>
        <p className="text-white/50 text-sm mb-10">
          {t('تصفّح أسئلة المسار بإجاباتها وشرحها — للمراجعة لا للاختبار.',
             'Browse the track questions with answers and explanations, for review rather than testing.')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {track.sections.map((sec, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              onClick={() => { setSelectedSection(sec); setLevel(1); }}
              className={`p-8 rounded-[2.5rem] ${cardBg} cursor-pointer border-t-4 hover:bg-white/[0.07] transition`}
              style={{ borderColor: trackColor }}
            >
              <h3 className={`text-xl font-black text-white mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {t(sec.title_ar, sec.title)}
              </h3>
              <p className={`text-[10px] text-white/40 font-bold uppercase tracking-widest ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {t('تصفّح الأسئلة', 'BROWSE QUESTIONS')}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  const pages = Math.ceil(total / PAGE);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="pt-32 px-6 pb-20 max-w-5xl mx-auto"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <button
        onClick={() => { setSelectedSection(null); setRows([]); }}
        className="mb-8 inline-flex items-center gap-2 px-5 py-3 rounded-2xl border-2 bg-white/5 font-black uppercase text-xs tracking-widest hover:bg-white/15 transition-all"
        style={{ color: trackColor, borderColor: trackColor }}
      >
        <ArrowRight size={16} className={language === 'ar' ? '' : 'rotate-180'} />
        {t('العودة للأقسام', 'BACK TO SECTIONS')}
      </button>

      <div className={`p-8 rounded-[2.5rem] ${cardBg} mb-6 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(to bottom right, ${trackColor}, transparent)` }} />
        <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white relative z-10">
          {t(selectedSection.title_ar, selectedSection.title)}
        </h1>
      </div>

      {/* ─────────── المستويات ─────────── */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[1, 2, 3, 4, 5].map(lv => {
          const n = levelCounts[lv];
          const on = level === lv;
          const empty = n === 0;
          return (
            <button
              key={lv}
              onClick={() => setLevel(lv)}
              disabled={empty}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition ${
                empty ? 'opacity-30 cursor-not-allowed border-white/10 text-white/40' : 'hover:bg-white/10'
              }`}
              style={on && !empty
                ? { background: trackColor, borderColor: trackColor, color: '#fff' }
                : { borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.65)' }}
            >
              {t('المستوى', 'Level')} <span dir="ltr" className="tabular-nums">{lv}</span>
              {n !== undefined && (
                <span className="opacity-60"> · <span dir="ltr" className="tabular-nums">{n}</span></span>
              )}
            </button>
          );
        })}
      </div>

      {/* ─────────── المرشّحات ─────────── */}
      <div className={`p-4 rounded-2xl ${cardBg} mb-6 space-y-3`}>
        <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
          <Filter size={12} /> {t('تصفية', 'FILTER')}
        </div>

        <div className="flex flex-wrap gap-2">
          <Chip on={!typeFilter} color={trackColor} onClick={() => setTypeFilter(null)}>
            {t('كل الأنواع', 'All types')}
          </Chip>
          {Object.entries(TYPE_LABELS).map(([id, [ar, en]]) => (
            <Chip key={id} on={typeFilter === id} color={trackColor} onClick={() => setTypeFilter(id)}>
              {t(ar, en)}
            </Chip>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <Chip on={!diffFilter} color={trackColor} onClick={() => setDiffFilter(null)}>
            {t('كل المستويات', 'All levels')}
          </Chip>
          {Object.entries(DIFF_LABELS).map(([id, [ar, en]]) => (
            <Chip key={id} on={diffFilter === id} color={DIFF_COLORS[id]} onClick={() => setDiffFilter(id)}>
              {t(ar, en)}
            </Chip>
          ))}
        </div>

        <div className="relative">
          <Search size={14} className={`absolute top-1/2 -translate-y-1/2 text-white/30 ${language === 'ar' ? 'right-3' : 'left-3'}`} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('ابحث في نص السؤال…', 'Search question text…')}
            className={`w-full bg-white/5 border border-white/10 rounded-xl py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/25 ${
              language === 'ar' ? 'pr-9 pl-9' : 'pl-9 pr-9'
            }`}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className={`absolute top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 ${language === 'ar' ? 'left-3' : 'right-3'}`}
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* ─────────── العدّاد ─────────── */}
      <div className="flex items-center justify-between mb-4 text-white/40 text-xs">
        <span>
          {t('النتائج', 'Results')}: <span dir="ltr" className="tabular-nums font-bold text-white/70">{total}</span>
        </span>
        {pages > 1 && (
          <span dir="ltr" className="tabular-nums">{page + 1} / {pages}</span>
        )}
      </div>

      {/* ─────────── الأسئلة ─────────── */}
      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin text-white/30" size={28} /></div>
      ) : rows.length === 0 ? (
        <div className="text-center py-20 text-white/40 text-sm">
          {t('لا أسئلة تطابق هذي التصفية.', 'No questions match this filter.')}
        </div>
      ) : (
        <div className="space-y-5">
          {rows.map((q, i) => (
            <QuestionCard
              key={q.id}
              q={q}
              index={page * PAGE + i + 1}
              color={trackColor}
              language={language}
              t={t}
            />
          ))}
        </div>
      )}

      {/* ─────────── التنقّل بين الصفحات ─────────── */}
      {pages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-white/60 disabled:opacity-25 hover:bg-white/5 transition"
          >
            {t('السابق', 'Previous')}
          </button>
          <span className="text-white/40 text-xs tabular-nums" dir="ltr">{page + 1} / {pages}</span>
          <button
            onClick={() => setPage(p => Math.min(pages - 1, p + 1))}
            disabled={page >= pages - 1}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-white/60 disabled:opacity-25 hover:bg-white/5 transition"
          >
            {t('التالي', 'Next')}
          </button>
        </div>
      )}
    </motion.div>
  );
};

// ═════════ شريحة تصفية ═════════
const Chip = ({ on, color, onClick, children }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 rounded-lg text-[11px] font-bold border transition"
    style={on
      ? { background: color, borderColor: color, color: '#fff' }
      : { borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.55)' }}
  >
    {children}
  </button>
);

// ═════════ بطاقة سؤال — لكل نوع عرضه ═════════
const QuestionCard = ({ q, index, color, language, t }) => {
  const cardBg = 'bg-white/[0.03] backdrop-blur-md border border-white/10';
  const [typeAr, typeEn] = TYPE_LABELS[q.type] || [q.type, q.type];
  const [diffAr, diffEn] = DIFF_LABELS[q.difficulty] || [q.difficulty, q.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className={`p-7 rounded-[2rem] ${cardBg} ${language === 'ar' ? 'text-right' : 'text-left'}`}
    >
      {/* الترويسة */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="w-9 h-9 rounded-xl bg-white/5 grid place-items-center font-black text-sm shrink-0" style={{ color }} dir="ltr">
          {index}
        </div>
        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/5 text-white/50">
          {t(typeAr, typeEn)}
        </span>
        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold"
          style={{ background: `${DIFF_COLORS[q.difficulty]}20`, color: DIFF_COLORS[q.difficulty] }}>
          {t(diffAr, diffEn)}
        </span>
        {q.topic && (
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/5 text-white/35" dir="ltr">
            {q.topic}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-white leading-relaxed mb-4">{q.question}</h3>

      {/* مقطع الكود — لاتيني دائماً فيُعرض بمحاذاة يسارية */}
      {q.code_snippet && (
        <pre dir="ltr" className="mb-4 p-4 rounded-xl bg-black/40 border border-white/10 text-[13px] text-white/75 overflow-x-auto whitespace-pre font-mono leading-relaxed">
          {q.code_snippet}
        </pre>
      )}

      {/* الخيارات — الصحيحة مميّزة */}
      {(q.type === 'multiple-choice' || q.type === 'code' || q.type === 'true-false' || q.type === 'multi-select') && Array.isArray(q.options) && (
        <div className={`grid gap-2.5 ${q.type === 'true-false' ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
          {q.options.map((opt, i) => {
            const correct = q.type === 'multi-select'
              ? (q.correct_answers || []).includes(i)
              : q.correct_answer === i;
            return (
              <div
                key={i}
                className="p-4 rounded-xl border text-sm font-bold flex items-start gap-2"
                style={correct
                  ? { borderColor: `${color}55`, background: `${color}14`, color }
                  : { borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.55)' }}
              >
                {correct && <CheckCircle2 size={15} className="shrink-0 mt-0.5" />}
                <span dir={isLatin(opt) ? 'ltr' : undefined} className={isLatin(opt) ? 'inline-block' : ''}>{opt}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* التوصيل */}
      {q.type === 'matching' && Array.isArray(q.pairs) && (
        <div className="space-y-2">
          {q.pairs.map((p, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="flex-1 text-sm font-bold text-white/80">{p.left}</span>
              <ArrowRight size={13} className={`shrink-0 ${language === 'ar' ? '' : 'rotate-180'}`} style={{ color }} />
              <span className="flex-1 text-sm font-bold" style={{ color }}>{p.right}</span>
            </div>
          ))}
        </div>
      )}

      {/* الترتيب — options مخزّنة بالترتيب الصحيح */}
      {q.type === 'ordering' && Array.isArray(q.options) && (
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="w-6 h-6 rounded-lg grid place-items-center text-[11px] font-black shrink-0"
                style={{ background: `${color}20`, color }} dir="ltr">{i + 1}</span>
              <span className="text-sm font-bold text-white/75">{opt}</span>
            </div>
          ))}
        </div>
      )}

      {/* الكتابة الحرة */}
      {q.type === 'terminal' && Array.isArray(q.expected_answers) && (
        <div>
          {q.prompt_label && (
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">{q.prompt_label}</div>
          )}
          <div className="flex flex-wrap gap-2">
            {q.expected_answers.map((a, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-bold"
                style={{ background: `${color}14`, color, border: `1px solid ${color}40` }}
                dir={isLatin(a) ? 'ltr' : undefined}>
                {a}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* الشرح */}
      {q.explanation && (
        <div className="mt-5 pt-4 border-t border-white/5 flex items-start gap-2.5">
          <Lightbulb size={15} className="shrink-0 mt-0.5 text-amber-400/70" />
          <p className="text-sm text-white/55 leading-relaxed">{q.explanation}</p>
        </div>
      )}
    </motion.div>
  );
};

export default QuestionBank;
