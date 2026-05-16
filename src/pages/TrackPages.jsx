import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Clock, AlertTriangle, ArrowRight, Lock, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { getSectionQuestions } from '../data/questions';

export const TrackHome = () => {
  const { currentTrack, tracksInfo, language, t } = useAppContext();
  const track = currentTrack || tracksInfo['SE'];
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08]";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-10 max-w-7xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="text-center mb-16">
        <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white mb-4" style={{ color: track.color }}>
          {t(track.name_ar, track.name)}
        </h2>
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">{t('نظرة عامة على المسار', 'TRACK OVERVIEW')}</p>
      </div>
      <div className={`p-12 rounded-[4rem] ${cardBg} mb-12 relative overflow-hidden shadow-2xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>
         <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(to bottom right, ${track.color}, transparent)` }} />
         <h3 className="text-2xl font-black italic text-white mb-6 uppercase">{t('وصف المسار', 'TRACK DESCRIPTION')}</h3>
         <p className="text-lg text-white/60 font-bold leading-relaxed">{t(track.description_ar, track.description)}</p>
      </div>
    </motion.div>
  );
};

export const PlayLevel = ({ section }) => {
  const { currentTrack, tracksInfo, addXP, userStats, language, t } = useAppContext();
  const track = currentTrack || tracksInfo['SE'];
  const trackColor = track.color || '#14b8a6';
  
  const [view, setView] = useState('map'); // map | playing
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [mistakes, setMistakes] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isLevelFailed, setIsLevelFailed] = useState(false);
  const [isLevelSuccess, setIsLevelSuccess] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const targetToWin = 100; 
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10";

  const levels = Array.from({ length: 15 }, (_, i) => i + 1);

  const currentQ = useMemo(() => {
    const sectionIndex = track.sections.findIndex(s => s.title === section?.title || s.title_ar === section?.title_ar);
    const sectionPool = getSectionQuestions(track.id.toLowerCase(), sectionIndex >= 0 ? sectionIndex : 0, 400, language);
    const baseIdx = (questionNum) % sectionPool.length;
    const offset = Math.floor(Math.random() * sectionPool.length);
    let idx = (baseIdx + offset) % sectionPool.length;
    return sectionPool[idx];
  }, [track.id, questionNum, section, attempt, language]);

  useEffect(() => {
    if (view !== 'playing' || selectedAns !== null || isLevelFailed || isLevelSuccess) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timer); handleAnswer(-1); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [view, questionNum, selectedAns, isLevelFailed, isLevelSuccess]);

  const handleAnswer = (idx) => {
    if (selectedAns !== null || isLevelFailed || isLevelSuccess) return;
    setSelectedAns(idx);
    const correct = idx === currentQ.answer;
    setIsCorrect(correct);
    if (correct) {
      setCorrectCount(prev => prev + 1);
      addXP(10); 
      setTimeout(() => {
        if (correctCount + 1 >= targetToWin) setIsLevelSuccess(true);
        else nextQuestion();
      }, 500);
    } else {
      setMistakes(prev => prev + 1);
      if (mistakes + 1 >= 3) {
        setTimeout(() => {
          setIsLevelFailed(true);
          // Auto exit after a short delay to show the failure state
          setTimeout(() => setView('map'), 3000);
        }, 1000);
      } else {
        setTimeout(() => nextQuestion(), 2000);
      }
    }
  };

  const nextQuestion = () => {
    setQuestionNum(prev => prev + 1);
    setSelectedAns(null);
    setIsCorrect(null);
    setTimeLeft(60);
  };

  const startLevel = (lvl) => {
    setSelectedLevel(lvl);
    setView('playing');
    setMistakes(0);
    setCorrectCount(0);
    setQuestionNum(0);
    setIsLevelFailed(false);
    setIsLevelSuccess(false);
    setAttempt(prev => prev + 1);
    setTimeLeft(60);
  };

  if (view === 'map') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-10 max-w-5xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <button onClick={() => window.dispatchEvent(new CustomEvent('changeView', { detail: 'dashboard' }))} className="mb-8 flex items-center gap-2 text-white/40 font-black uppercase text-[10px] tracking-widest hover:text-white transition-all">
          {language === 'ar' ? <ArrowRight size={14} /> : <ArrowRight size={14} className="rotate-180" />} {t('العودة للوحة التحكم', 'BACK TO DASHBOARD')}
        </button>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2">{t(section?.title_ar || section?.title, section?.title) || t('المستويات', 'LEVELS')}</h2>
          <p className="text-white/40 font-bold uppercase tracking-widest text-xs">{t('أكمل 100 سؤال لفتح المستوى التالي', 'COMPLETE 100 QUESTIONS TO UNLOCK NEXT LEVEL')}</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {levels.map((lvl) => (
            <motion.div 
              key={lvl} 
              whileHover={lvl === 1 ? { scale: 1.1, rotate: 5 } : {}}
              onClick={() => lvl === 1 && startLevel(lvl)}
              className="aspect-square rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all h-[150px]"
              style={lvl === 1 ? { backgroundColor: trackColor, color: '#000', boxShadow: `0 20px 40px ${trackColor}30` } : { backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              {lvl > 1 ? <Lock size={24} /> : <span className="text-3xl font-black italic">{lvl}</span>}
              <span className="text-[10px] font-black uppercase mt-2">{lvl > 1 ? t('مقفل', 'LOCKED') : t('مستوى', 'LEVEL')}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="pt-32 px-10 pb-20 flex items-center justify-center min-h-[90vh]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <AnimatePresence mode="wait">
        {isLevelFailed ? (
          <motion.div key="fail" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`p-12 rounded-[4rem] ${cardBg} text-center max-w-lg shadow-2xl border-t-8 border-red-500`}>
            <XCircle size={80} className="text-red-500 mx-auto mb-8" />
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-4">{t('لقد فشلت!', 'YOU FAILED!')}</h2>
            <p className="text-white/40 font-bold mb-10 leading-relaxed">{t('لقد ارتكبت 3 أخطاء. جاري إعادتك للمستويات...', 'You made 3 mistakes. Returning to levels...')}</p>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
               <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 3 }} className="h-full bg-red-500" />
            </div>
          </motion.div>
        ) : isLevelSuccess ? (
          <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`p-12 rounded-[4rem] ${cardBg} text-center max-w-lg border-t-8 shadow-2xl`} style={{ borderTopColor: trackColor }}>
            <CheckCircle2 size={80} style={{ color: trackColor }} className="mx-auto mb-8" />
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-4">{t('أحسنت صنعاً!', 'WELL DONE!')}</h2>
            <p className="text-white/40 font-bold mb-10 leading-relaxed">{t('لقد أكملت 100 سؤال بنجاح! تم فتح المستوى التالي ومزامنة نقاط الخبرة.', 'You successfully completed 100 questions! Next level unlocked and XP synced.')}</p>
            <button onClick={() => setView('map')} className="w-full py-6 rounded-[2rem] text-black font-black uppercase tracking-tighter shadow-2xl hover:scale-105 transition-all" style={{ backgroundColor: trackColor, boxShadow: `0 15px 40px ${trackColor}30` }}>{t('المتابعة للمستويات', 'CONTINUE TO LEVELS')}</button>
          </motion.div>
        ) : (
          <motion.div key={questionNum} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className={`p-12 rounded-[4rem] ${cardBg} w-full max-w-4xl relative overflow-hidden shadow-2xl`}>
             <button onClick={() => setView('map')} className="absolute top-8 left-8 p-3 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all z-20">
               <ArrowLeft size={20} className={language === 'ar' ? 'rotate-180' : ''} />
             </button>

             <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-6">
                   <div className="px-6 py-2 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                      <Clock size={18} style={{ color: trackColor }} />
                      <span className="font-mono font-black text-white">00:{timeLeft < 10 ? "0"+timeLeft : timeLeft}</span>
                   </div>
                   <div className="px-6 py-2 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                      <Trophy size={18} className="text-yellow-500" />
                      <span className="font-mono font-black text-white">{correctCount}/{targetToWin}</span>
                   </div>
                </div>
                <div className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest opacity-40" style={{ color: trackColor }}>
                   <AlertTriangle size={18} /> {t('الأخطاء', 'MISTAKES')}: {mistakes}/3
                </div>
             </div>

             <div className="text-center mb-16">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 uppercase italic" style={{ color: trackColor }}>{t('وحدة', 'UNIT')} {selectedLevel} {t('مهمة', 'MISSION')}</div>
                <h2 className="text-4xl font-black text-white leading-tight">{currentQ.q}</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentQ.options.map((opt, i) => {
                  const isAnswered = selectedAns !== null;
                  const isCorrectOpt = i === currentQ.answer;
                  const isSelected = i === selectedAns;
                  
                  let borderStyle = { borderColor: 'rgba(255,255,255,0.05)' };
                  let bgStyle = { backgroundColor: 'rgba(255,255,255,0.05)' };
                  let textColor = 'text-white/60';

                  if (isAnswered) {
                    if (isCorrectOpt) { 
                      borderStyle = { borderColor: trackColor }; 
                      bgStyle = { backgroundColor: `${trackColor}10` }; 
                      textColor = 'text-white';
                    }
                    else if (isSelected) { 
                      // Red border ONLY for the question area when wrong
                      borderStyle = { borderColor: '#ef4444' }; 
                      bgStyle = { backgroundColor: 'rgba(239, 68, 68, 0.1)' }; 
                      textColor = 'text-red-500';
                    }
                  }

                  return (
                    <motion.button 
                      key={i} 
                      onClick={() => handleAnswer(i)}
                      className={`p-8 rounded-[2rem] border text-lg font-black transition-all ${language === 'ar' ? 'text-right' : 'text-left'} ${!isAnswered ? 'hover:bg-white/10 hover:border-white/20' : ''} ${textColor}`}
                      style={{ ...borderStyle, ...bgStyle }}
                      disabled={isAnswered}
                    >
                      {opt}
                    </motion.button>
                  );
                })}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
