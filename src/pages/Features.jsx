import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlayCircle, FileText, Users, PlusCircle, LogIn, Swords,
  Shuffle, User, Shield, ArrowRight, BrainCircuit, Database, Trophy, LayoutGrid, Zap, Sparkles, Code, ArrowLeft, XCircle
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { getSectionQuestions } from '../data/questions';
import { trackLessons, trackDocuments } from '../data/courses';

export const Lessons = ({ section }) => {
  const { currentTrack, tracksInfo, language, t } = useAppContext();
  const track = currentTrack || tracksInfo['Programming'];
  const [selectedSection, setSelectedSection] = useState(section || null);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  const trackColor = track.color || '#14b8a6';
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08]";

  const sectionIndex = useMemo(() => {
    if (!selectedSection) return -1;
    return track.sections.findIndex(s => s.title === selectedSection.title || s.title_ar === selectedSection.title_ar);
  }, [track.sections, selectedSection]);

  const lessonsList = useMemo(() => {
    const list = trackLessons[track.id.toLowerCase()]?.[sectionIndex];
    if (list && list.length > 0) return list;
    return [
      { t_ar: `شرح المفاهيم الأساسية للقسم`, t_en: `Basic Concepts of this Section`, d_ar: `محاضرة معمقة حول معايير التصميم والتطبيقات العملية.`, d_en: `Deep lecture on design standards and practical applications.`, videoUrl: 'https://www.youtube.com/embed/W_m4d9X7vF8', duration: '12:45' },
      { t_ar: `استراتيجيات التحسين والتطوير`, t_en: `Optimization & Development Strategies`, d_ar: `كيفية تقليل استهلاك الذاكرة وتحسين سرعة الاستجابة.`, d_en: `How to reduce memory usage and optimize latency.`, videoUrl: 'https://www.youtube.com/embed/7D5A92_n_tA', duration: '10:15' },
      { t_ar: `دراسة حالة وتحليل الأنظمة`, t_en: `Case Study & System Analysis`, d_ar: `تحليل تقني عملي لكيفية معالجة الطلبات وإدارة الأخطاء.`, d_en: `Technical practical analysis of handling requests and errors.`, videoUrl: 'https://www.youtube.com/embed/5aTHeRerN8Y', duration: '15:30' }
    ];
  }, [track.id, sectionIndex]);

  const docsList = useMemo(() => {
    const list = trackDocuments[track.id.toLowerCase()]?.[sectionIndex];
    if (list && list.length > 0) return list;
    return [
      { t_ar: 'ملخص المفاهيم الأساسية', t_en: 'Core Concepts Summary', d_ar: 'ملخص يحتوي على أهم النقاط التي تم شرحها في هذا القسم بشكل مبسط.', d_en: 'A summary of the key points explained in this section in a simplified form.' },
      { t_ar: 'قائمة المراجع الإضافية', t_en: 'Additional References', d_ar: 'روابط ومصادر خارجية لتعميق فهمك للمواضيع المتقدمة.', d_en: 'External links and resources to deepen your understanding of advanced topics.' }
    ];
  }, [track.id, sectionIndex]);

  if (!selectedSection) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-10 pb-20 max-w-7xl mx-auto text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-8">{t('اختر قسماً لعرض الشروحات', 'CHOOSE A SECTION FOR LESSONS')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {track.sections.map((sec, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSection(sec)}
              className={`p-8 rounded-[2.5rem] ${cardBg} cursor-pointer border-t-4`}
              style={{ borderColor: trackColor }}
            >
              <h3 className={`text-xl font-black text-white mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t(sec.title_ar, sec.title)}</h3>
              <p className={`text-[10px] text-white/40 font-bold uppercase tracking-widest ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t('عرض الدروس', 'VIEW LESSONS')}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-10 pb-20 max-w-7xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <button onClick={() => setSelectedSection(null)} className="mb-8 flex items-center gap-2 font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all" style={{ color: trackColor }}>
        {language === 'ar' ? <ArrowRight size={14} /> : <ArrowRight size={14} className="rotate-180" />} {t('العودة للأقسام', 'BACK TO SECTIONS')}
      </button>

      <div className={`p-12 rounded-[3rem] ${cardBg} mb-12 relative overflow-hidden group ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(to bottom right, ${trackColor}, transparent)` }} />
        <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-white">{t(selectedSection.title_ar, selectedSection.title)}</h1>
        <p className="text-white/40 font-bold leading-relaxed max-w-3xl italic">
          {t('"العلم ليس مجرد معلومات، بل هو طريقك لبناء المستقبل. استثمر وقتك في فهم هذه المفاهيم بعمق."', '"Knowledge is not just information; it is your path to building the future. Invest your time in understanding these concepts deeply."')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {lessonsList.map((vid, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`p-6 rounded-[2.5rem] ${cardBg} transition-all cursor-pointer ${language === 'ar' ? 'text-right' : 'text-left'}`}
            onClick={() => setActiveVideoUrl(vid.videoUrl)}
          >
            <div className="aspect-video bg-black/40 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden group">
              <PlayCircle size={48} className="relative z-10 opacity-60 group-hover:opacity-100 transition-all" style={{ color: trackColor }} />
              <div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-[10px] font-mono">{vid.duration}</div>
            </div>
            <h4 className="text-lg font-black text-white mb-2">{t(vid.t_ar, vid.t_en)}</h4>
            <p className="text-xs text-white/40 font-bold leading-relaxed">{t(vid.d_ar, vid.d_en)}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-10 flex items-center gap-4">
          <FileText size={32} style={{ color: trackColor }} /> {t('شروحات مكتوبة مختصرة', 'WRITTEN LESSON SUMMARIES')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docsList.map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className={`p-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-md border border-white/10 group cursor-default relative overflow-hidden ${language === 'ar' ? 'text-right' : 'text-left'}`}
              style={{ borderTopColor: trackColor, borderTopWidth: 3 }}
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, ${trackColor}08, transparent)` }} />
              <div className="flex items-start gap-5 relative z-10" style={{ flexDirection: language === 'ar' ? 'row' : 'row-reverse' }}>
                <div className="p-3 rounded-2xl bg-white/5 shrink-0" style={{ color: trackColor }}>
                  <FileText size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-black uppercase tracking-[0.4em] mb-2 opacity-40" style={{ color: trackColor }}>#{i + 1}</div>
                  <h4 className="text-white font-black italic mb-3 text-base leading-tight">{t(doc.t_ar, doc.t_en)}</h4>
                  <p className="text-sm text-white/60 font-medium leading-relaxed">{t(doc.d_ar, doc.d_en)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[200] flex items-center justify-center p-4"
            onClick={() => setActiveVideoUrl(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-950/90 border border-white/10 rounded-[3rem] p-6 max-w-4xl w-full relative overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 border border-white/20 text-white/60 hover:text-white hover:bg-white/20 transition-all z-[210]"
              >
                <XCircle size={24} />
              </button>
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black mt-10">
                <iframe
                  width="100%"
                  height="100%"
                  src={activeVideoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const QuestionBank = ({ section }) => {
  const { currentTrack, tracksInfo, language, t } = useAppContext();
  const track = currentTrack || tracksInfo['SE'];
  const [selectedSection, setSelectedSection] = useState(section || null);

  const trackColor = track.color || '#14b8a6';
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08]";

  const questions = useMemo(() => {
    if (!selectedSection) return [];
    const sectionIndex = track.sections.findIndex(s => s.title === selectedSection.title || s.title_ar === selectedSection.title_ar);
    return getSectionQuestions(track.id.toLowerCase(), sectionIndex >= 0 ? sectionIndex : 0, 10, language);
  }, [selectedSection, language, track.id]);

  if (!selectedSection) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-10 pb-20 max-w-7xl mx-auto text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-8">{t('اختر قسماً لعرض بنك الأسئلة', 'CHOOSE A SECTION FOR QUESTION BANK')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {track.sections.map((sec, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSection(sec)}
              className={`p-8 rounded-[2.5rem] ${cardBg} cursor-pointer border-t-4`}
              style={{ borderColor: trackColor }}
            >
              <h3 className={`text-xl font-black text-white mb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t(sec.title_ar, sec.title)}</h3>
              <p className={`text-[10px] text-white/40 font-bold uppercase tracking-widest ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t('تصفح الأسئلة', 'BROWSE QUESTIONS')}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-10 pb-20 max-w-7xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <button onClick={() => setSelectedSection(null)} className="mb-8 flex items-center gap-2 font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all" style={{ color: trackColor }}>
        {language === 'ar' ? <ArrowRight size={14} /> : <ArrowRight size={14} className="rotate-180" />} {t('العودة للأقسام', 'BACK TO SECTIONS')}
      </button>

      <div className={`p-12 rounded-[4rem] ${cardBg} mb-12 relative overflow-hidden shadow-2xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(to bottom right, ${trackColor}, transparent)` }} />
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-4 text-white relative z-10">{t(selectedSection.title_ar, selectedSection.title)}</h1>
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className={`p-10 rounded-[3rem] ${cardBg} shadow-xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-black" style={{ color: trackColor }}>{i + 1}</div>
              <h3 className="text-xl font-bold text-white leading-relaxed">{q.q}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {q.options.map((opt, optIdx) => (
                <div key={optIdx} className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white/60 font-bold text-sm" style={q.answer === optIdx ? { borderColor: `${trackColor}30`, backgroundColor: `${trackColor}10`, color: trackColor } : {}}>
                  {opt}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
