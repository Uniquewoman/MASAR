import React, { useState, useEffect } from 'react';
import {
  Shield, Cpu, Code, Landmark, Menu, Zap, Lock, Heart, X,
  Globe, User, BookOpen, Database, Trophy, Settings, LogOut, ArrowLeft, LayoutGrid, Rocket, Sparkles, Activity, Users, MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from './context/AppContext';

// Import New Pages
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { Lessons, QuestionBank, Challenges } from './pages/Features';
import { Analytics } from './pages/Analytics';
import { ProfileSettings } from './pages/ProfileSettings';
import { Programs, AboutSDA } from './pages/SDAInfo';
import { TrackHome, PlayLevel } from './pages/TrackPages';
import { Community } from './pages/Community';

const PATHS_CONFIG = {
  SE: {
    id: 'SE',
    mainTitle: "Software Engineering", mainTitle_ar: "هندسة البرمجيات",
    slogan: "Building robust systems from abstract thoughts.", slogan_ar: "بناء أنظمة برمجية متينة من أفكار مجردة.",
    color: "#0d9488",
    theme: { bg: 'from-[#020617] via-[#061c2e] to-[#042f2e]' },
    icon: <Code size={40} />,
    loadingMsgs: ["Compiling Modules...", "Linking Dependencies...", "Initializing Kernel...", "Optimizing Runtime..."],
    loadingMsgs_ar: ["جاري تجميع الوحدات...", "ربط التبعيات...", "تهيئة النواة...", "تحسين وقت التشغيل..."],
  },
  AI: {
    id: 'AI',
    mainTitle: "Artificial Intelligence", mainTitle_ar: "الذكاء الاصطناعي",
    slogan: "Simulating neural pathways to evolve technology.", slogan_ar: "محاكاة المسارات العصبية لتطوير التكنولوجيا.",
    color: "#a855f7",
    theme: { bg: 'from-[#020617] via-[#1e1b4b] to-[#4c1d95]' },
    icon: <Cpu size={40} />,
    loadingMsgs: ["Training Neurons...", "Processing Datasets...", "Optimizing Weights...", "Deploying Model..."],
    loadingMsgs_ar: ["تدريب الخلايا العصبية...", "معالجة مجموعات البيانات...", "تحسين الأوزان...", "نشر النموذج..."],
  },
  CS: {
    id: 'CS',
    mainTitle: "Cyber Security", mainTitle_ar: "الأمن السيبراني",
    slogan: "Protecting the digital frontier, one packet at a time.", slogan_ar: "حماية الحدود الرقمية، حزمة تلو الأخرى.",
    color: "#ef4444",
    theme: { bg: 'from-[#020617] via-[#1a0505] to-[#450a0a]' },
    icon: <Shield size={40} />,
    loadingMsgs: ["Scanning Vulnerabilities...", "Decrypting Handshake..."],
    loadingMsgs_ar: ["فحص الثغرات الأمنية...", "فك تشفير الاتصال..."],
  },
  NW: {
    id: 'NW',
    mainTitle: "Networking", mainTitle_ar: "الشبكات",
    slogan: "Connecting the world through neural infrastructures.", slogan_ar: "ربط العالم من خلال البنى التحتية العصبية.",
    color: "#3b82f6",
    theme: { bg: 'from-[#020617] via-[#062010] to-[#064e3b]' },
    icon: <Globe size={40} />,
    loadingMsgs: ["Tracing Packets...", "Resolving DNS..."],
    loadingMsgs_ar: ["تتبع الحزم...", "حل عناوين DNS..."],
  },
  FI: {
    id: 'FI',
    mainTitle: "Digital Finance", mainTitle_ar: "المالية",
    slogan: "Decoding the future of decentralized economy.", slogan_ar: "فك تشفير مستقبل الاقتصاد اللامركزي.",
    color: "#38bdf8",
    theme: { bg: 'from-[#020617] via-[#082f49] to-[#075985]' },
    icon: <Landmark size={40} />,
    loadingMsgs: ["Validating Ledger...", "Mining Blocks..."],
    loadingMsgs_ar: ["التحقق من السجل...", "تعدين الكتل..."],
  }
};

export default function CodexQuestPro() {
  const { user, currentTrack, selectTrack, userStats, language, t } = useAppContext();
  const [view, setView] = useState('landing');
  const [activePathId, setActivePathId] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activePath = activePathId ? PATHS_CONFIG[activePathId] : null;

  useEffect(() => {
    const handleViewChange = (e) => setView(e.detail);
    window.addEventListener('changeView', handleViewChange);
    return () => window.removeEventListener('changeView', handleViewChange);
  }, []);

  const startLoading = (pathId) => {
    setActivePathId(pathId);
    selectTrack(pathId);
    setView('dashboard');
  };

  if (!user) return <Auth onAuthSuccess={() => setView('landing')} />;

  return (
    <div className={`h-screen bg-[#000000] text-white font-sans relative overflow-hidden transition-all duration-1000 ${view !== 'landing' ? `bg-gradient-to-br ${activePath?.theme.bg || 'from-[#000000] to-black'}` : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>

      {/* Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute bg-white rounded-full opacity-20" style={{ width: Math.random() * 4, height: Math.random() * 4, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, boxShadow: `0 0 10px white` }} animate={{ y: [0, -50, 0], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: Math.random() * 5 + 2, repeat: Infinity }} />
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Header */}
      <header className="p-6 flex justify-between items-center fixed top-0 w-full z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsSidebarOpen(true)} className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-black italic tracking-tighter cursor-pointer" onClick={() => setView('landing')}>MASAR</h1>
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => {
              const nextLang = language === 'en' ? 'ar' : 'en';
              setLanguage(nextLang);
            }}
            className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-[10px] font-black uppercase tracking-widest"
          >
            {language === 'en' ? 'العربية' : 'English'}
          </button>

          {/* COMMUNITY BUTTON: Conditional and Dynamic */}
          {activePathId && (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => setView('community')}
              className="px-8 py-3 rounded-2xl text-black font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-3"
              style={{ backgroundColor: activePath?.color, boxShadow: `0 10px 30px ${activePath?.color}40` }}
            >
              <Users size={18} /> {t('المجتمع', 'COMMUNITY')}
            </motion.button>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110]" />
            <motion.aside
              initial={{ x: language === 'ar' ? 500 : -500 }}
              animate={{ x: 0 }}
              exit={{ x: language === 'ar' ? 500 : -500 }}
              className={`fixed top-0 ${language === 'ar' ? 'right-0 border-l' : 'left-0 border-r'} h-full w-[380px] bg-[#030712]/95 border-white/5 z-[120] p-10 flex flex-col gap-3 overflow-y-auto no-scrollbar shadow-2xl`}
            >
              <div className="mb-10 flex justify-between items-center px-4">
                <h2 className="text-[10px] font-black tracking-[0.5em] text-white opacity-40 uppercase">{t('قائمة النظام', 'SYSTEM MENU')}</h2>
                <X size={24} className="cursor-pointer opacity-30 hover:opacity-100" onClick={() => setIsSidebarOpen(false)} />
              </div>
              <SidebarCard icon={<User />} title={t('الحساب الشخصي', 'PROFILE')} color={activePath?.color} onClick={() => { setView('profile'); setIsSidebarOpen(false); }} />
              <SidebarCard icon={<Users />} title={t('المجتمع', 'COMMUNITY')} color={activePath?.color} onClick={() => { setView('community'); setIsSidebarOpen(false); }} />
              <SidebarCard icon={<BookOpen />} title={t('الشروحات والدروس', 'LESSONS')} color={activePath?.color} onClick={() => { setView('lessons'); setIsSidebarOpen(false); }} />
              <SidebarCard icon={<Database />} title={t('بنك الأسئلة', 'QUESTION BANK')} color={activePath?.color} onClick={() => { setView('banks'); setIsSidebarOpen(false); }} />
              <div className="my-4 h-px bg-white/5 w-full" />
              <SidebarCard icon={<ArrowLeft className={language === 'en' ? 'rotate-180' : ''} />} title={t('العودة للمسارات', 'BACK TO TRACKS')} color={activePath?.color} onClick={() => { setView('landing'); setActivePathId(null); setActiveSection(null); setIsSidebarOpen(false); }} />
              <div className="my-4 h-px bg-white/5 w-full" />
              <SidebarCard icon={<Trophy />} title={t('تحديات الكود', 'CODE CHALLENGES')} color={activePath?.color} onClick={() => { setView('challenges'); setIsSidebarOpen(false); }} />
              <SidebarCard icon={<LayoutGrid />} title={t('البرامج والخدمات', 'PROGRAMS')} color={activePath?.color} onClick={() => { setView('programs'); setIsSidebarOpen(false); }} />
              <SidebarCard icon={<Activity />} title={t('التحليلات', 'ANALYTICS')} color={activePath?.color} onClick={() => { setView('analytics'); setIsSidebarOpen(false); }} />
              <div className="my-6 h-px bg-white/5 w-full" />
              <SidebarCard icon={<Settings />} title={t('الإعدادات', 'SETTINGS')} color={activePath?.color} onClick={() => { setView('profile'); setIsSidebarOpen(false); }} />
              <button className="mt-8 p-6 rounded-[2.5rem] bg-red-500/10 border border-red-500/20 text-red-500 font-black uppercase text-[10px] tracking-widest hover:bg-red-500/20 transition-all flex items-center justify-center gap-2"><LogOut size={16} /> {t('تسجيل الخروج', 'LOGOUT')}</button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="h-full relative z-10 overflow-y-auto no-scrollbar pt-24">
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-20 px-10 pb-20 max-w-7xl mx-auto flex flex-col items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-16">
                <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white mb-2">{t('مرحباً بك في مسار', 'WELCOME TO MASAR')}</h1>
                <p className="text-sm text-white/40 font-bold uppercase tracking-[0.3em]">{t('اختر مسارك التعليمي للبدء', 'CHOOSE YOUR LEARNING PATH TO START')}</p>
              </motion.div>

              <div className="flex flex-row justify-center gap-6 w-full px-4 no-scrollbar">
                {Object.values(PATHS_CONFIG).map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -15, scale: 1.02 }}
                    onClick={() => startLoading(p.id)}
                    className={`w-72 h-[480px] rounded-[4rem] bg-gradient-to-br ${p.theme.bg} border border-white/10 p-12 flex flex-col items-center justify-between cursor-pointer group relative shadow-2xl overflow-hidden shadow-black shrink-0 transition-shadow hover:shadow-white/5`}
                  >
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-all duration-700" />
                    <div className="relative z-10 p-8 rounded-[2.5rem] bg-white/5" style={{ color: p.color }}>
                      {React.cloneElement(p.icon, { size: 48 })}
                    </div>
                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2" style={{ color: p.color }}>{t(p.mainTitle_ar, p.mainTitle)}</h3>
                      <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest leading-relaxed">{t(p.slogan_ar, p.slogan)}</p>
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {view === 'dashboard' && <Dashboard key="dashboard" onSelectSection={(sec) => { setActiveSection(sec); setView('levels'); }} />}
          {view === 'levels' && <PlayLevel key="play" section={activeSection} />}
          {view === 'profile' && <ProfileSettings key="profile" />}
          {view === 'community' && <Community key="community" />}
          {view === 'lessons' && <Lessons key="lessons" section={activeSection} />}
          {view === 'banks' && <QuestionBank key="banks" section={activeSection} />}
          {view === 'challenges' && <Challenges key="challenges" />}
          {view === 'analytics' && <Analytics key="analytics" section={activeSection} />}
          {view === 'programs' && <Programs key="programs" onStart={() => setView('landing')} />}
          {view === 'about' && <AboutSDA key="about" />}
          {view === 'settings' && <ProfileSettings key="settings" />}
        </AnimatePresence>
      </main>
    </div>
  );
}

function SidebarCard({ icon, title, color, onClick, isSoon }) {
  return (
    <button onClick={isSoon ? null : onClick} className={`w-full p-5 rounded-[2.5rem] bg-white/[0.03] border border-white/5 transition-all flex items-center gap-6 group relative overflow-hidden text-white ${isSoon ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/[0.08] hover:border-white/10'}`}>
      <div className="p-4 rounded-2xl bg-white/5 shadow-inner" style={{ color: color || '#0d9488' }}>{icon}</div>
      <div className="flex flex-col items-start"><span className="font-black text-xs uppercase italic tracking-tight">{title}</span>{isSoon && <span className="text-[8px] font-black text-white/40 tracking-widest uppercase mt-1">Soon</span>}</div>
    </button>
  );
}
