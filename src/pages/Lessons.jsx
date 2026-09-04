import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowRight, XCircle, BookOpen, Code2, PlayCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import {
  trackLessons,
  trackDocuments,
  legacyLessonLevels,
  sectionLevelTitles
} from '../data/courses';

export const Lessons = ({ section }) => {
  const { currentTrack, tracksInfo, language, t } = useAppContext();
  const track = currentTrack || tracksInfo['Programming'];
  const [selectedSection, setSelectedSection] = useState(section || null);
  const [openLesson, setOpenLesson] = useState(null);

  const trackColor = track.color || '#14b8a6';
  const cardBg = 'bg-white/[0.03] backdrop-blur-md border border-white/10';

  const sectionIndex = useMemo(() => {
    if (!selectedSection) return -1;
    return track.sections.findIndex(
      s => s.title === selectedSection.title || s.title_ar === selectedSection.title_ar
    );
  }, [track.sections, selectedSection]);

  const levelTitles = sectionLevelTitles[track.id]?.[sectionIndex] || [];

  // المفتاح هو معرّف المسار كما هو («Programming»). كان يُبحث به بحروف صغيرة
  // فلا يطابق شيئاً، فكانت كل الدروس المكتوبة لا تظهر إطلاقاً.
  // كل درس يُقرن بشرحه المكتوب بالترتيب نفسه، ويأخذ مستواه من داخله
  // أو من جدول الدروس الأصلية. البحث داخل useMemo لا خارجه، وإلا
  // أنتج مصفوفات جديدة كل رسم فبطل أثر التذكير.
  const items = useMemo(() => {
    const lessons = trackLessons[track.id]?.[sectionIndex] || [];
    const docs = trackDocuments[track.id]?.[sectionIndex] || [];
    const legacyLevels = legacyLessonLevels[track.id]?.[sectionIndex] || [];
    return lessons.map((lesson, i) => ({
      ...lesson,
      index: i,
      doc: docs[i] || null,
      level: lesson.level || legacyLevels[i] || 1
    }));
  }, [track.id, sectionIndex]);

  const byLevel = useMemo(() => {
    const groups = new Map();
    items.forEach(item => {
      if (!groups.has(item.level)) groups.set(item.level, []);
      groups.get(item.level).push(item);
    });
    return [...groups.entries()].sort((a, b) => a[0] - b[0]);
  }, [items]);

  // ─── اختيار القسم ───
  if (!selectedSection) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="pt-32 px-10 pb-20 max-w-7xl mx-auto text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-8">
          {t('اختر قسماً لعرض الشروحات', 'CHOOSE A SECTION FOR LESSONS')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {track.sections.map((sec, i) => {
            const ready = (trackLessons[track.id]?.[i] || []).length;
            return (
              <motion.div key={i} whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedSection(sec)}
                className={`p-8 rounded-[2.5rem] ${cardBg} cursor-pointer border-t-4 hover:bg-white/[0.06] transition-all`}
                style={{ borderColor: trackColor }}>
                <h3 className={`text-xl font-black text-white mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t(sec.title_ar, sec.title)}
                </h3>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${language === 'ar' ? 'text-right' : 'text-left'}`}
                  style={{ color: ready ? trackColor : 'rgba(255,255,255,0.25)' }}>
                  {ready
                    ? t(`${ready} درساً وشرحاً`, `${ready} LESSONS`)
                    : t('قيد الإعداد', 'COMING SOON')}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  // ─── دروس القسم ───
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="pt-32 px-10 pb-20 max-w-7xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>

      <button onClick={() => setSelectedSection(null)}
        className="mb-8 flex items-center gap-2 font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all"
        style={{ color: trackColor }}>
        {language === 'ar' ? <ArrowRight size={14} /> : <ArrowRight size={14} className="rotate-180" />}
        {t('العودة للأقسام', 'BACK TO SECTIONS')}
      </button>

      <div className={`p-12 rounded-[3rem] ${cardBg} mb-12 relative overflow-hidden ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <div className="absolute inset-0 opacity-10"
          style={{ background: `linear-gradient(to bottom right, ${trackColor}, transparent)` }} />
        <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-white relative z-10">
          {t(selectedSection.title_ar, selectedSection.title)}
        </h1>
        <p className="text-white/40 font-bold leading-relaxed max-w-3xl relative z-10">
          {t(selectedSection.desc_ar, selectedSection.desc)}
        </p>
        {items.length > 0 && (
          <p className="text-[11px] font-black uppercase tracking-[0.3em] mt-6 relative z-10" style={{ color: trackColor }}>
            {t(`${items.length} درساً · ${byLevel.length} مستويات`, `${items.length} LESSONS · ${byLevel.length} LEVELS`)}
          </p>
        )}
      </div>

      {items.length === 0 ? (
        <div className={`p-16 rounded-[3rem] ${cardBg} text-center`}>
          <BookOpen size={48} className="mx-auto mb-6 opacity-30" style={{ color: trackColor }} />
          <h3 className="text-2xl font-black italic text-white mb-3">{t('شروحات هذا القسم قيد الإعداد', 'LESSONS IN PREPARATION')}</h3>
          <p className="text-white/40 font-bold text-sm">
            {t('أسئلة القسم متاحة في المستويات، وشروحاته المكتوبة تُضاف قسماً بعد قسم.',
               'The section questions are live in the levels; written lessons are being added section by section.')}
          </p>
        </div>
      ) : (
        byLevel.map(([level, group]) => (
          <div key={level} className="mb-16">
            {/* عنوان المستوى: يربط الدرس بموضعه من خطة القسم */}
            <div className={`flex items-center gap-4 mb-8 ${language === 'ar' ? '' : 'flex-row-reverse justify-end'}`}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black shrink-0"
                style={{ backgroundColor: `${trackColor}22`, color: trackColor }}>
                {level}
              </div>
              <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/25">
                  {t(`المستوى ${level}`, `LEVEL ${level}`)}
                </p>
                <h3 className="text-xl font-black italic text-white">
                  {levelTitles[level - 1] ? t(levelTitles[level - 1].ar, levelTitles[level - 1].en) : ''}
                </h3>
              </div>
              <div className="flex-1 h-px" style={{ backgroundColor: `${trackColor}30` }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.map(item => (
                <motion.div key={item.index} whileHover={{ y: -6 }}
                  onClick={() => setOpenLesson(item)}
                  className={`p-7 rounded-[2rem] ${cardBg} cursor-pointer hover:bg-white/[0.07] transition-all flex flex-col justify-between min-h-[210px] ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black italic text-white/10">
                        {String(item.index + 1).padStart(2, '0')}
                      </span>
                      {item.doc?.code && <Code2 size={16} style={{ color: trackColor }} className="opacity-50" />}
                    </div>
                    <h4 className="text-base font-black text-white mb-3 leading-snug">{t(item.t_ar, item.t_en)}</h4>
                    <p className="text-xs text-white/40 font-bold leading-relaxed line-clamp-3">{t(item.d_ar, item.d_en)}</p>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest mt-5" style={{ color: trackColor }}>
                    {item.doc ? t('اقرأ الشرح', 'READ LESSON') : t('قريباً', 'SOON')}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))
      )}

      {/* ─── نافذة الشرح الكامل ─── */}
      <AnimatePresence>
        {openLesson && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            // items-start مع فراغ علوي: التوسيط الرأسي مع التمرير يقصّ أعلى
            // النافذة حين يطول محتواها، فيختفي عنوان الدرس تحت الشريط العلوي
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[200] flex items-start justify-center px-4 pt-28 pb-10 overflow-y-auto"
            onClick={() => setOpenLesson(null)}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className={`bg-slate-950/95 border border-white/10 rounded-[3rem] p-10 max-w-3xl w-full relative my-10 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              dir={language === 'ar' ? 'rtl' : 'ltr'}>

              <button onClick={() => setOpenLesson(null)}
                className={`absolute top-6 p-3 rounded-full bg-white/10 border border-white/20 text-white/60 hover:text-white hover:bg-white/20 transition-all ${language === 'ar' ? 'left-6' : 'right-6'}`}>
                <XCircle size={22} />
              </button>

              <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3" style={{ color: trackColor }}>
                {t(`المستوى ${openLesson.level} · الدرس ${openLesson.index + 1}`,
                   `LEVEL ${openLesson.level} · LESSON ${openLesson.index + 1}`)}
              </p>
              <h2 className="text-3xl font-black italic text-white mb-6 leading-tight pl-12">
                {t(openLesson.t_ar, openLesson.t_en)}
              </h2>

              <p className="text-white/70 font-bold leading-loose mb-8">
                {openLesson.doc
                  ? t(openLesson.doc.details_ar, openLesson.doc.details_en)
                  : t(openLesson.d_ar, openLesson.d_en)}
              </p>

              {/* الكود يُعرض دائماً باتجاه لاتيني مهما كانت لغة الواجهة */}
              {openLesson.doc?.code && (
                <div className="mb-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25 mb-3">
                    {t('مثال عملي', 'EXAMPLE')}
                  </p>
                  <pre dir="ltr"
                    className="p-6 rounded-2xl bg-black/50 border border-white/10 text-[13px] leading-relaxed text-white/80 overflow-x-auto text-left whitespace-pre font-mono">
                    {openLesson.doc.code}
                  </pre>
                </div>
              )}

              {openLesson.videoUrl && (
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black mt-6">
                  <iframe width="100%" height="100%" src={openLesson.videoUrl}
                    title={t(openLesson.t_ar, openLesson.t_en)} frameBorder="0" allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                </div>
              )}

              <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
                <button
                  disabled={openLesson.index === 0}
                  onClick={() => setOpenLesson(items[openLesson.index - 1])}
                  className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/60 font-black uppercase text-[10px] tracking-widest disabled:opacity-20 hover:bg-white/10 transition-all">
                  {t('الدرس السابق', 'PREVIOUS')}
                </button>
                {/* dir=ltr: أرقام لاتينية داخل صفحة عربية تُعرض معكوسة بدونه */}
                <span className="text-[11px] font-bold text-white/25 tabular-nums" dir="ltr">
                  {openLesson.index + 1} / {items.length}
                </span>
                <button
                  disabled={openLesson.index === items.length - 1}
                  onClick={() => setOpenLesson(items[openLesson.index + 1])}
                  className="px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest disabled:opacity-20 transition-all"
                  style={{ backgroundColor: trackColor, color: '#000' }}>
                  {t('الدرس التالي', 'NEXT')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ملخص الشروحات المكتوبة */}
      {items.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-10 flex items-center gap-4">
            <FileText size={28} style={{ color: trackColor }} />
            {t('كل الشروحات المكتوبة', 'ALL WRITTEN LESSONS')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {items.filter(i => i.doc).map(item => (
              <motion.div key={item.index} whileHover={{ y: -4 }}
                onClick={() => setOpenLesson(item)}
                className={`p-7 rounded-[2rem] ${cardBg} cursor-pointer hover:bg-white/[0.07] transition-all ${language === 'ar' ? 'text-right' : 'text-left'}`}
                style={{ borderTopColor: trackColor, borderTopWidth: 3 }}>
                <div className="flex items-start gap-4" style={{ flexDirection: language === 'ar' ? 'row' : 'row-reverse' }}>
                  <div className="p-3 rounded-2xl bg-white/5 shrink-0" style={{ color: trackColor }}>
                    <PlayCircle size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] mb-2 opacity-40" style={{ color: trackColor }}>
                      {t(`المستوى ${item.level}`, `LEVEL ${item.level}`)}
                    </div>
                    <h4 className="text-white font-black italic mb-2 text-base leading-tight">
                      {t(item.doc.t_ar, item.doc.t_en)}
                    </h4>
                    <p className="text-sm text-white/50 font-medium leading-relaxed line-clamp-2">
                      {t(item.doc.details_ar, item.doc.details_en)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
