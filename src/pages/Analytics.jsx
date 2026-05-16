import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { BarChart3, TrendingUp, Award, Target, Zap, Activity, BrainCircuit, Sparkles, MessageSquare } from 'lucide-react';

export const Analytics = ({ section }) => {
  const { userStats, language, t, currentTrack, tracksInfo } = useAppContext();
  const track = currentTrack || tracksInfo['SE'];
  const trackColor = track.color || '#14b8a6';
  const [showAI, setShowAI] = useState(false);
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08]";

  const stats = [
    { label: t('إجمالي الأسئلة', 'TOTAL QUESTIONS'), value: userStats.totalQuestions, icon: <Activity />, color: "text-blue-500", glow: "shadow-blue-500/20" },
    { label: t('الإجابات الصحيحة', 'CORRECT ANSWERS'), value: userStats.correctAnswers, icon: <Target />, color: "text-green-500", glow: "shadow-green-500/20" },
    { label: t('نسبة الدقة', 'ACCURACY RATE'), value: `${userStats.totalQuestions > 0 ? Math.round((userStats.correctAnswers / userStats.totalQuestions) * 100) : 0}%`, icon: <TrendingUp />, color: "text-purple-500", glow: "shadow-purple-500/20" },
    { label: t('نقاط الخبرة', 'XP POINTS'), value: userStats.xp, icon: <Zap fill="currentColor" />, color: "text-yellow-500", glow: "shadow-yellow-500/20" },
  ];

  const aiInsights = [
    t("مستوى أدائك في هذا القسم ممتاز، لكن ينصح بالتركيز على مفاهيم هياكل البيانات المتقدمة.", "Your performance in this section is excellent, but it is recommended to focus on advanced data structure concepts."),
    t("لقد قمت بحل 100 سؤال في وقت قياسي! أنت جاهز للمستوى التالي.", "You solved 100 questions in record time! You are ready for the next level."),
    t("تنبيه: نسبة الخطأ زادت في الأسئلة المتعلقة بالخوارزميات الجينية.", "Warning: Error rate increased in questions related to genetic algorithms.")
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-10 pb-20 max-w-7xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className={`flex flex-col md:flex-row justify-between items-center mb-16 gap-10`}>
        <div className={language === 'ar' ? 'text-right' : 'text-left'}>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter text-white mb-4" style={{ color: trackColor }}>{t('تحليلات الأداء', 'PERFORMANCE ANALYTICS')}</h1>
          <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs">
            {t('تحليل خاص بقسم:', 'ANALYSIS FOR SECTION:')}{' '}
            <span style={{ color: trackColor }}>{t(section?.title_ar || section?.title, section?.title) || t('عام', 'GENERAL')}</span>
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAI(!showAI)}
          className="px-10 py-5 rounded-[2rem] text-black font-black uppercase tracking-tighter flex items-center gap-4 shadow-2xl transition-all"
          style={{ backgroundColor: trackColor, boxShadow: `0 20px 50px ${trackColor}30` }}
        >
          <BrainCircuit size={24} /> {showAI ? t('إخفاء المساعد', 'HIDE ASSISTANT') : t('تحليل الذكاء الاصطناعي', 'AI ANALYTICS')}
        </motion.button>
      </div>
      
      <AnimatePresence>
        {showAI && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className={`mb-16 rounded-[3rem] ${cardBg} overflow-hidden shadow-2xl`}
            style={{ borderColor: `${trackColor}30` }}
          >
            <div className={`p-10 flex flex-col md:flex-row gap-10 items-center`}>
              <div className="p-8 rounded-[2.5rem] bg-white/5 shadow-inner" style={{ color: trackColor }}>
                <Sparkles size={64} />
              </div>
              <div className={`flex-1 space-y-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-black text-white italic uppercase flex items-center gap-3">
                  <MessageSquare size={20} style={{ color: trackColor }} /> {t('تقرير المساعد الذكي', 'SMART ASSISTANT REPORT')}
                </h3>
                <div className="space-y-3">
                  {aiInsights.map((insight, i) => (
                    <motion.div key={i} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className={`flex items-start gap-4 text-white/60 font-bold italic text-sm border-white/10 ${language === 'ar' ? 'border-r-2 pr-4' : 'border-l-2 pl-4'}`} style={{ borderColor: `${trackColor}40` }}>
                      {insight}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {stats.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className={`p-10 rounded-[3rem] ${cardBg} flex flex-col items-center text-center relative overflow-hidden group shadow-2xl ${s.glow}`}>
            <div className={`p-6 rounded-[2rem] bg-white/5 ${s.color} mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
              {s.icon}
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">{s.label}</div>
            <div className="text-4xl font-black italic text-white">{s.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`p-12 rounded-[4rem] ${cardBg} h-[500px] flex flex-col shadow-2xl`}>
          <h2 className={`text-2xl font-black italic uppercase tracking-tighter text-white mb-10 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <BarChart3 size={32} style={{ color: trackColor }} />
            {t('توزيع التقدم في', 'PROGRESS DISTRIBUTION IN')} {t(section?.title_ar || section?.title, section?.title) || t('المسار', 'TRACK')}
          </h2>
          <div className="flex-1 flex flex-col justify-around">
             {[
               { name: t('إتمام المستويات', 'LEVEL COMPLETION'), val: 10, color: trackColor },
               { name: t('دقة الإجابات', 'ANSWER ACCURACY'), val: 85, color: '#a855f7' },
               { name: t('سرعة الحل', 'SOLVING SPEED'), val: 60, color: '#ef4444' },
               { name: t('الاستمرارية', 'CONSISTENCY'), val: 100, color: '#22c55e' }
             ].map((item, i) => (
               <div key={i}>
                 <div className="flex justify-between items-center mb-3">
                   <span className="text-xs font-black uppercase text-white/60 italic">{item.name}</span>
                   <span className="text-[10px] font-mono text-white/30">{item.val}%</span>
                 </div>
                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${item.val}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="h-full shadow-[0_0_15px_rgba(255,255,255,0.1)]" style={{ backgroundColor: item.color }} />
                 </div>
               </div>
             ))}
          </div>
        </div>

        <div className={`p-12 rounded-[4rem] ${cardBg} h-[500px] flex flex-col shadow-2xl`}>
          <h2 className={`text-2xl font-black italic uppercase tracking-tighter text-white mb-10 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <Award size={32} className="text-yellow-500" />
            {t('أوسمة القسم الحالي', 'CURRENT SECTION BADGES')}
          </h2>
          <div className="grid grid-cols-3 gap-6 flex-1">
            {[
              { name: t('مبتدئ القسم', 'SECTION NOVICE'), icon: '🌱', active: true },
              { name: t('سريع البديهة', 'QUICK WITTED'), icon: '⚡', active: true },
              { name: t('المجتهد', 'DILIGENT'), icon: '📚', active: userStats.totalQuestions > 50 },
              { name: t('خبير الوحدة', 'MODULE EXPERT'), icon: '🎓', active: userStats.totalQuestions > 100 },
              { name: t('المتميز', 'EXCEPTIONAL'), icon: '🌟', active: false },
              { name: t('الأسطورة', 'LEGEND'), icon: '🏆', active: false }
            ].map((ach, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className={`flex flex-col items-center justify-center p-6 rounded-[2.5rem] border ${ach.active ? 'border-yellow-500/20 bg-yellow-500/5 shadow-inner' : 'border-white/5 bg-white/[0.02] opacity-20'}`}>
                <div className="text-4xl mb-4">{ach.icon}</div>
                <div className="text-[9px] font-black uppercase tracking-tighter text-center text-white/60">{ach.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
