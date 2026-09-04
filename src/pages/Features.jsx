import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlayCircle, FileText, Users, PlusCircle, LogIn, Swords,
  Shuffle, User, Shield, ArrowRight, BrainCircuit, Database, Trophy, LayoutGrid, Zap, Sparkles, Code, ArrowLeft, XCircle
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { getSectionQuestions } from '../data/questions';

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
