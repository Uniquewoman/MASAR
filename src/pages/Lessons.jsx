import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowDown, BookOpen, Lightbulb, Sparkles,
  ChevronDown, RotateCcw, CheckCircle2, XCircle, Loader2
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { supabase } from '../supabaseClient';
import { sectionGuides } from '../data/guides';

// مفتاح القسم في جدول الأسئلة: العنوان الإنجليزي بعد حذف اسم المسار
// («Programming Basics» ← «Basics»)، وهو الاشتقاق المطبّق في الصفحة الرئيسية.
const sectionKey = (track, section) => section.title.replace(track.name + ' ', '').trim();

// خلية الجدول التي محتواها كله لاتيني (كود أو تعبير مثل «10 / 2») تُعرض
// معكوسة داخل جدول عربي، فتُجبَر على الاتجاه اللاتيني وحدها.
const isLatin = (s) => typeof s === 'string' && /^[\x20-\x7E]+$/.test(s);

const TYPE_LABEL = {
  'multiple-choice': { ar: 'اختر', en: 'CHOOSE' },
  'true-false': { ar: 'صح أو خطأ', en: 'TRUE / FALSE' },
  'code': { ar: 'اقرأ الكود', en: 'READ CODE' },
  'matching': { ar: 'طابِق', en: 'MATCH' },
  'ordering': { ar: 'رتّب الخطوات', en: 'ORDER' },
  'multi-select': { ar: 'اختر كل ما ينطبق', en: 'SELECT ALL' },
  'terminal': { ar: 'اكتب الإجابة', en: 'TYPE' }
};

// ═══════════ تمرين الموضوع: أسئلة حقيقية من بنك المستوى نفسه ═══════════
const TopicPractice = ({ trackId, sectionId, level, color, t, language }) => {
  const [questions, setQuestions] = useState(null);
  const [open, setOpen] = useState(null);
  const [answered, setAnswered] = useState({});

  useEffect(() => {
    let alive = true;
    const load = async () => {
      const { data } = await supabase
        .from('questions')
        .select('id, question, options, correct_answer, explanation, type, code_snippet')
        .eq('track_id', trackId)
        .eq('section_id', sectionId)
        .eq('level', level)
        .eq('is_active', true)
        .in('type', ['multiple-choice', 'true-false', 'code'])
        .limit(60);

      if (!alive) return;
      // ست أسئلة مختلفة في كل زيارة، من بنك المستوى نفسه لا من نص مكتوب هنا
      const picked = (data || []).sort(() => Math.random() - 0.5).slice(0, 6);
      setQuestions(picked);
    };
    load();
    return () => { alive = false; };
  }, [trackId, sectionId, level]);

  const solved = Object.keys(answered).length;

  if (questions === null) {
    return (
      <div className="flex items-center gap-3 p-6 text-white/30 text-sm font-bold">
        <Loader2 size={16} className="animate-spin" /> {t('جارٍ جلب أسئلة المستوى…', 'Loading level questions…')}
      </div>
    );
  }
  if (questions.length === 0) return null;

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <h4 className="font-black text-white text-lg">{t('تمرّن على هذا الموضوع', 'PRACTISE THIS TOPIC')}</h4>
        <span className="text-sm font-black tabular-nums" dir="ltr" style={{ color }}>
          {solved} / {questions.length}
        </span>
      </div>

      <div className="divide-y divide-white/5">
        {questions.map((q, i) => {
          const isOpen = open === q.id;
          const picked = answered[q.id];
          return (
            <div key={q.id}>
              <button onClick={() => setOpen(isOpen ? null : q.id)}
                className={`w-full flex items-center gap-4 p-5 hover:bg-white/[0.03] transition-all ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0"
                  style={{ backgroundColor: `${color}22`, color }}>{i + 1}</span>
                <span className="flex-1 font-bold text-white/80 text-sm leading-relaxed">{q.question}</span>
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md shrink-0 hidden sm:block"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>
                  {t(TYPE_LABEL[q.type]?.ar, TYPE_LABEL[q.type]?.en)}
                </span>
                <ChevronDown size={16} className={`shrink-0 text-white/30 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden">
                    <div className="px-5 pb-6 space-y-2">
                      {q.code_snippet && (
                        <pre dir="ltr" className="p-4 mb-3 rounded-xl bg-black/50 border border-white/10 text-[12px] text-white/75 overflow-x-auto text-left whitespace-pre font-mono">
                          {q.code_snippet}
                        </pre>
                      )}
                      {(q.options || []).map((opt, oi) => {
                        const isRight = oi === q.correct_answer;
                        const chosen = picked === oi;
                        const reveal = picked !== undefined;
                        return (
                          <button key={oi} disabled={reveal}
                            onClick={() => setAnswered(a => ({ ...a, [q.id]: oi }))}
                            className={`w-full p-4 rounded-xl border text-sm font-bold flex items-center justify-between gap-3 transition-all ${language === 'ar' ? 'text-right' : 'text-left'}`}
                            style={
                              reveal && isRight ? { backgroundColor: '#22c55e18', borderColor: '#22c55e', color: '#fff' }
                              : reveal && chosen ? { backgroundColor: '#ef444418', borderColor: '#ef4444', color: '#fff' }
                              : { backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }
                            }>
                            <span>{opt}</span>
                            {reveal && isRight && <CheckCircle2 size={16} className="text-green-400 shrink-0" />}
                            {reveal && chosen && !isRight && <XCircle size={16} className="text-red-400 shrink-0" />}
                          </button>
                        );
                      })}
                      {picked !== undefined && q.explanation && (
                        <p className="pt-3 text-sm text-white/50 font-bold leading-relaxed">{q.explanation}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ═══════════ بطاقات المراجعة السريعة ═══════════
const Flashcards = ({ cards, color, t, language }) => {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(false);
  const card = cards[i];

  const go = (step) => {
    setShown(false);
    setI(prev => (prev + step + cards.length) % cards.length);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-black text-white text-lg">{t('بطاقات مراجعة سريعة', 'QUICK REVIEW CARDS')}</h4>
        <span className="text-sm font-black tabular-nums" dir="ltr" style={{ color }}>{i + 1} / {cards.length}</span>
      </div>

      <button onClick={() => setShown(s => !s)}
        className={`w-full min-h-[190px] p-8 rounded-[1.5rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex flex-col justify-center ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color }}>
          {shown ? t('الإجابة', 'ANSWER') : t('سؤال', 'QUESTION')}
        </p>
        {/* بلا AnimatePresence: حركة الخروج كانت تعلق فيبقى نص السؤال معروضاً
            تحت وسم «الإجابة». العنصر القديم يُزال فوراً والجديد يظهر متحركاً. */}
        <motion.p key={`${i}-${shown}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className={shown ? 'text-lg text-white/75 font-bold leading-loose' : 'text-2xl font-black text-white leading-snug'}>
          {shown ? t(card.a_ar, card.a_en) : t(card.q_ar, card.q_en)}
        </motion.p>
        {!shown && (
          <p className="text-xs text-white/25 font-bold mt-5">{t('اضغط لعرض الإجابة', 'Tap to reveal the answer')}</p>
        )}
      </button>

      <div className="flex items-center justify-between mt-5">
        <button onClick={() => go(-1)}
          className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all">
          {language === 'ar' ? '→ السابقة' : '← PREV'}
        </button>
        <div className="flex gap-1.5">
          {cards.map((_, di) => (
            <span key={di} className="h-1.5 rounded-full transition-all"
              style={{ width: di === i ? 22 : 6, backgroundColor: di === i ? color : 'rgba(255,255,255,0.15)' }} />
          ))}
        </div>
        <button onClick={() => go(1)}
          className="px-5 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all"
          style={{ backgroundColor: color, color: '#000' }}>
          {language === 'ar' ? 'التالية ←' : 'NEXT →'}
        </button>
      </div>
    </div>
  );
};

// ═══════════ الصفحة ═══════════
export const Lessons = ({ section }) => {
  const { currentTrack, tracksInfo, language, t } = useAppContext();
  const track = currentTrack || tracksInfo['Programming'];
  const [selectedSection, setSelectedSection] = useState(section || null);

  const color = track.color || '#14b8a6';
  const cardBg = 'bg-white/[0.03] backdrop-blur-md border border-white/10';

  const sectionIndex = useMemo(() => {
    if (!selectedSection) return -1;
    return track.sections.findIndex(
      s => s.title === selectedSection.title || s.title_ar === selectedSection.title_ar
    );
  }, [track.sections, selectedSection]);

  const topics = sectionGuides[track.id]?.[sectionIndex] || [];

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // ─── اختيار القسم ───
  if (!selectedSection) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="pt-32 px-6 md:px-10 pb-20 max-w-7xl mx-auto text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-8">
          {t('اختر قسماً لعرض الشرح', 'CHOOSE A SECTION')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {track.sections.map((sec, i) => {
            const ready = (sectionGuides[track.id]?.[i] || []).length;
            return (
              <motion.div key={i} whileHover={{ scale: 1.03 }} onClick={() => setSelectedSection(sec)}
                className={`p-8 rounded-[2.5rem] ${cardBg} cursor-pointer border-t-4 hover:bg-white/[0.06] transition-all`}
                style={{ borderColor: color }}>
                <h3 className={`text-xl font-black text-white mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t(sec.title_ar, sec.title)}
                </h3>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${language === 'ar' ? 'text-right' : 'text-left'}`}
                  style={{ color: ready ? color : 'rgba(255,255,255,0.25)' }}>
                  {ready ? t(`${ready} مواضيع`, `${ready} TOPICS`) : t('قيد الإعداد', 'COMING SOON')}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  // ─── الشرح الطويل ───
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="pt-28 px-6 md:px-10 pb-24 max-w-4xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>

      <button onClick={() => setSelectedSection(null)}
        className="mb-8 inline-flex items-center gap-2 px-5 py-3 rounded-2xl border-2 bg-white/5 font-black uppercase text-xs tracking-widest hover:bg-white/15 transition-all"
        style={{ color, borderColor: color }}>
        {language === 'ar' ? <ArrowRight size={16} /> : <ArrowRight size={16} className="rotate-180" />}
        {t('العودة للأقسام', 'BACK TO SECTIONS')}
      </button>

      {/* رأس القسم */}
      <div className={`p-10 rounded-[2.5rem] ${cardBg} mb-10 relative overflow-hidden ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(to bottom right, ${color}, transparent)` }} />
        <h1 className="text-3xl md:text-4xl font-black italic text-white mb-4 relative z-10">
          {t(selectedSection.title_ar, selectedSection.title)}
        </h1>
        <p className="text-white/40 font-bold leading-relaxed relative z-10">
          {t(selectedSection.desc_ar, selectedSection.desc)}
        </p>
      </div>

      {/* فهرس المواضيع */}
      {topics.length > 0 && (
        <div className={`p-6 rounded-[2rem] ${cardBg} mb-12 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25 mb-4">{t('المواضيع', 'TOPICS')}</p>
          <div className="space-y-1">
            {topics.map((topic, i) => (
              <button key={i} onClick={() => scrollTo(`topic-${i}`)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0"
                  style={{ backgroundColor: `${color}22`, color }}>{i + 1}</span>
                <span className="font-bold text-white/70 text-sm">{t(topic.title_ar, topic.title_en)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {topics.length === 0 ? (
        <div className={`p-16 rounded-[3rem] ${cardBg} text-center`}>
          <BookOpen size={48} className="mx-auto mb-6 opacity-30" style={{ color }} />
          <h3 className="text-2xl font-black italic text-white mb-3">{t('شرح هذا القسم قيد الإعداد', 'THIS SECTION IS IN PREPARATION')}</h3>
          <p className="text-white/40 font-bold text-sm">
            {t('أسئلة القسم متاحة في المستويات، والشرح يُضاف قسماً بعد قسم.',
               'The section questions are live in the levels; the guide is added section by section.')}
          </p>
        </div>
      ) : topics.map((topic, ti) => (
        <section key={ti} id={`topic-${ti}`} className="mb-20 scroll-mt-28">

          {/* عنوان الموضوع */}
          <div className="flex items-center gap-4 p-6 rounded-[1.5rem] mb-8"
            style={{ backgroundColor: `${color}14`, border: `1px solid ${color}30` }}>
            <span className="w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0"
              style={{ backgroundColor: color, color: '#000' }}>{ti + 1}</span>
            <h2 className="text-xl md:text-2xl font-black" style={{ color }}>
              {t(topic.title_ar, topic.title_en)}
            </h2>
          </div>

          {/* صندوق الفكرة */}
          <div className={`p-6 rounded-[1.25rem] mb-8 ${language === 'ar' ? 'border-r-4 text-right' : 'border-l-4 text-left'}`}
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: color }}>
            <p className="text-white/85 font-bold leading-loose">{t(topic.lead_ar, topic.lead_en)}</p>
          </div>

          {/* الشرح المتصل */}
          <div className={`space-y-6 mb-10 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {(language === 'ar' ? topic.body_ar : topic.body_en).map((para, pi) => (
              <p key={pi} className="text-white/65 font-medium leading-[2.1] text-[15px]">{para}</p>
            ))}
          </div>

          {/* جدول المقارنة */}
          {topic.table && (
            <div className="mb-10 overflow-x-auto rounded-[1.25rem] border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: `${color}14` }}>
                    {(language === 'ar' ? topic.table.head_ar : topic.table.head_en).map((h, hi) => (
                      <th key={hi} className={`p-4 font-black text-white/80 whitespace-nowrap ${language === 'ar' ? 'text-right' : 'text-left'}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topic.table.rows.map((row, ri) => (
                    <tr key={ri} className="border-t border-white/5">
                      {row.map((cell, ci) => (
                        <td key={ci} className={`p-4 font-bold ${ci === 0 ? 'text-white' : 'text-white/50'} ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {isLatin(cell)
                            ? <span dir="ltr" className="inline-block font-mono text-[13px]">{cell}</span>
                            : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* تخيّلها كذا */}
          {topic.analogy_ar && (
            <div className={`p-6 rounded-[1.25rem] mb-10 bg-white/[0.03] border border-white/10 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center gap-2 mb-3" style={{ color }}>
                <Lightbulb size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t('تخيّلها كذا', 'PICTURE IT')}</span>
              </div>
              <p className="text-white/65 font-medium leading-loose text-[15px]">{t(topic.analogy_ar, topic.analogy_en)}</p>
            </div>
          )}

          {/* نقاط أساسية للحفظ */}
          <div className={`p-8 rounded-[1.5rem] mb-10 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            style={{ backgroundColor: color }}>
            <h4 className="font-black text-black/80 mb-5 text-lg">{t('نقاط أساسية للحفظ', 'KEY POINTS')}</h4>
            <ul className="space-y-3">
              {(language === 'ar' ? topic.keyPoints_ar : topic.keyPoints_en).map((point, ki) => (
                <li key={ki} className="flex items-start gap-3 text-black/85 font-bold leading-relaxed text-[15px]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/60 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* المصطلحات */}
          {topic.terms?.length > 0 && (
            <div className={`p-7 rounded-[1.5rem] mb-10 ${cardBg} ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center gap-2 mb-5" style={{ color }}>
                <Sparkles size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t('مصطلحات الموضوع', 'TERMS')}</span>
              </div>
              <div className="space-y-4">
                {topic.terms.map((term, tri) => (
                  <div key={tri}>
                    <p className="font-black text-white mb-1" dir="ltr"
                      style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>{term.term}</p>
                    <p className="text-sm text-white/45 font-bold leading-relaxed">{t(term.def_ar, term.def_en)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* تمرين من بنك الأسئلة الحقيقي */}
          <div className="mb-10">
            <TopicPractice
              trackId={track.id}
              sectionId={sectionKey(track, selectedSection)}
              level={ti + 1}
              color={color} t={t} language={language}
            />
          </div>

          {/* بطاقات المراجعة */}
          {topic.cards?.length > 0 && (
            <Flashcards cards={topic.cards} color={color} t={t} language={language} />
          )}

          {/* تذييل الموضوع */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
            <span className="text-[11px] font-black uppercase tracking-widest text-white/25">
              {t('انتهى هذا الموضوع', 'TOPIC COMPLETE')}
            </span>
            {ti < topics.length - 1 ? (
              <button onClick={() => scrollTo(`topic-${ti + 1}`)}
                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:gap-3 transition-all"
                style={{ color }}>
                {t('الموضوع التالي', 'NEXT TOPIC')} <ArrowDown size={14} />
              </button>
            ) : (
              <button onClick={() => scrollTo('topic-0')}
                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:gap-3 transition-all"
                style={{ color }}>
                {t('العودة لأول موضوع', 'BACK TO FIRST')} <RotateCcw size={14} />
              </button>
            )}
          </div>
        </section>
      ))}
    </motion.div>
  );
};
