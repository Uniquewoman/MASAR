import React, { useState, useEffect } from 'react';
import {
  Shield, Cpu, Code, Landmark, Menu, Zap, Lock, Heart, X,
  Globe, User, BookOpen, Database, Trophy, Crown, Settings, LogOut, ArrowLeft, LayoutGrid, Rocket, Sparkles, Activity, Users, MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from './context/AppContext';
import TutorWidget from './components/TutorWidget';

// Import New Pages
import { supabase } from './supabaseClient'; // تأكدي من المسار
import Auth from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { QuestionBank } from './pages/Features';
import { Lessons } from './pages/Lessons';
import { Challenges } from './pages/Challenges';
import { Leaderboard } from './pages/Leaderboard';

import { ProfileSettings } from './pages/ProfileSettings';

import { TrackHome, PlayLevel } from './pages/TrackPages';
import { SettingsPage } from './pages/SettingsPage';
import { JourneyPage } from "./pages/JourneyPage";
import ResetPassword from './pages/ResetPassword';
const PATHS_CONFIG = {
  Programming: {
    id: 'Programming',
    mainTitle: "Programming", mainTitle_ar: "البرمجة",
    slogan: "Building robust systems from abstract thoughts.", slogan_ar: "بناء أنظمة برمجية متينة من أفكار مجردة.",
    color: "#0d9488",
    theme: { bg: 'from-[#020617] via-[#061c2e] to-[#042f2e]' },
    icon: <Code size={40} />,
    loadingMsgs: ["Compiling Modules...", "Linking Dependencies...", "Initializing Kernel...", "Optimizing Runtime..."],
    loadingMsgs_ar: ["جاري تجميع الوحدات...", "ربط التبعيات...", "تهيئة النواة...", "تحسين وقت التشغيل..."],
  },
  ArtificialIntelligence: {
    id: 'ArtificialIntelligence',
    mainTitle: "Artificial Intelligence", mainTitle_ar: "الذكاء الاصطناعي",
    slogan: "Building intelligent systems for the future.",
    slogan_ar: "بناء أنظمة ذكية لمستقبل أكثر تطورًا.", color: "#a855f7",
    theme: { bg: 'from-[#020617] via-[#1e1b4b] to-[#4c1d95]' },
    icon: <Cpu size={40} />,
    loadingMsgs: ["Training Neurons...", "Processing Datasets...", "Optimizing Weights...", "Deploying Model..."],
    loadingMsgs_ar: ["تدريب الخلايا العصبية...", "معالجة مجموعات البيانات...", "تحسين الأوزان...", "نشر النموذج..."],
  },
  CyberSecurity: {
    id: 'CyberSecurity',
    mainTitle: "Cyber Security", mainTitle_ar: "الأمن السيبراني",
    slogan: "Defending the digital world against evolving threats.", slogan_ar: "حماية العالم الرقمي من التهديدات المتطورة.",
    color: "#ef4444",
    theme: { bg: 'from-[#020617] via-[#1a0505] to-[#450a0a]' },
    icon: <Shield size={40} />,
    loadingMsgs: [
      "Scanning Vulnerabilities...",
      "Analyzing Threats...",
      "Securing Infrastructure...",
      "Monitoring Network..."
    ],
    loadingMsgs_ar: [
      "فحص الثغرات الأمنية...",
      "تحليل التهديدات...",
      "تأمين البنية التحتية...",
      "مراقبة الشبكة..."
    ],
  },
  Networking: {
    id: 'Networking',
    mainTitle: "Networking", mainTitle_ar: "الشبكات",
    slogan: "Connecting the world through modern networks.", slogan_ar: "ربط العالم عبر الشبكات الحديثة.",
    color: "#3b82f6",
    theme: { bg: 'from-[#020617] via-[#062010] to-[#064e3b]' },
    icon: <Globe size={40} />,
    loadingMsgs: [
      "Initializing Network...",
      "Resolving DNS...",
      "Routing Packets...",
      "Establishing Connection..."
    ],
    loadingMsgs_ar: [
      "تهيئة الشبكة...",
      "حل عناوين DNS...",
      "توجيه الحزم...",
      "إنشاء الاتصال..."
    ],
  },
  FinTech: {
    id: 'FinTech',
    mainTitle: "FinTech", mainTitle_ar: "التقنية المالية",
    slogan: "Transforming finance through technology.", slogan_ar: "إعادة تشكيل عالم المال بالتقنية.",
    color: "#38bdf8",
    theme: { bg: 'from-[#020617] via-[#082f49] to-[#075985]' },
    icon: <Landmark size={40} />,
    loadingMsgs: [
      "Connecting Banking APIs...",
      "Processing Payments...",
      "Analyzing Financial Data...",
      "Securing Transactions..."
    ],
    loadingMsgs_ar: [
      "ربط واجهات البنوك...",
      "معالجة المدفوعات...",
      "تحليل البيانات المالية...",
      "تأمين المعاملات..."
    ],
  }
};

export default function CodexQuestPro() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, currentTrack, selectTrack, updateProfileProgress, userStats, language, t, logout } = useAppContext();
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
const startLoading = async (pathId) => {
    setActivePathId(pathId); // هذا يغير المسار النشط
    selectTrack(pathId);     // تأكدي أن هذا يحدث في الـ Context

    // تحديث قاعدة البيانات
    await updateProfileProgress({
      current_path: PATHS_CONFIG[pathId].mainTitle // استخدمي العنوان الثابت
    });

    setView('dashboard'); // الآن انتقلي للداشبورد
  };
  // رابط استعادة كلمة المرور في البريد يقصد هذا المسار، وكانت الصفحة
  // مكتوبة وغير موصولة بشيء فيصل المستخدم لصفحة غير موجودة.
  if (window.location.pathname === '/reset-password') return <ResetPassword />;

  if (!user) return <Auth onAuthSuccess={() => setView('dashboard')} />;

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
      <header className="p-4 md:p-6 flex justify-between items-center fixed top-0 w-full z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsSidebarOpen(true)} className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-black italic tracking-tighter cursor-pointer" onClick={() => setView('landing')}>{t('مسار', 'MASAR')}</h1>
        </div>
        <div className="flex gap-4 items-center">

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
              className={`fixed top-0 ${language === 'ar' ? 'right-0 border-l' : 'left-0 border-r'} h-full w-[85%] max-w-[380px] md:w-[380px] bg-[#030712]/95 border-white/5 z-[120] p-5 md:p-10 flex flex-col gap-3 overflow-y-auto no-scrollbar shadow-2xl`}
            >
              <div className="mb-10 flex justify-between items-center px-4">
                <h2 className="text-[10px] font-black tracking-[0.5em] text-white opacity-40 uppercase">{t('قائمة النظام', 'SYSTEM MENU')}</h2>
                <X size={24} className="cursor-pointer opacity-30 hover:opacity-100" onClick={() => setIsSidebarOpen(false)} />
              </div>
              <SidebarCard icon={<User />} title={t('الحساب الشخصي', 'PROFILE')} color={activePath?.color} onClick={() => { setView('profile'); setIsSidebarOpen(false); }} />
              <SidebarCard icon={<BookOpen />} title={t('الشروحات والدروس', 'LESSONS')} color={activePath?.color} onClick={() => { setView('lessons'); setIsSidebarOpen(false); }} />
              <SidebarCard icon={<Database />} title={t('بنك الأسئلة', 'QUESTION BANK')} color={activePath?.color} onClick={() => { setView('banks'); setIsSidebarOpen(false); }} />
              <div className="my-4 h-px bg-white/5 w-full" />
              <SidebarCard icon={<Trophy />} title={t('التحديات ', '   CHALLENGES')} color={activePath?.color} onClick={() => { setView('challenges'); setIsSidebarOpen(false); }} />
              <SidebarCard icon={<Crown />} title={t('المتصدّرون', 'LEADERBOARD')} color={activePath?.color} onClick={() => { setView('leaderboard'); setIsSidebarOpen(false); }} />

              <SidebarCard icon={<Trophy />} title={t(' رحلتي ', '   My Journey')} color={activePath?.color} onClick={() => { setView('journey'); setIsSidebarOpen(false); }} />
              <SidebarCard icon={<ArrowLeft className={language === 'en' ? 'rotate-180' : ''} />} title={t('العودة للمسارات', 'BACK TO TRACKS')} color={activePath?.color} onClick={() => { setView('landing'); setActivePathId(null); setActiveSection(null); setIsSidebarOpen(false); }} />
              <div className="my-4 h-px bg-white/5 w-full" />

              <SidebarCard icon={<Settings />} title={t('الإعدادات', 'SETTINGS')} color={activePath?.color} onClick={() => { setView('settings'); setIsSidebarOpen(false); }} />
              <button
                onClick={() => setShowLogoutModal(true)}
                className="mt-8 p-6 rounded-[1.25rem] md:rounded-[2.5rem] bg-red-500/10 border border-red-500/20 text-red-500 font-black uppercase text-[10px] tracking-widest hover:bg-red-500/20 transition-all flex items-center justify-center gap-2"
              >
                <LogOut size={16} />
                {t('تسجيل الخروج', 'LOGOUT')}
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="h-full relative z-10 overflow-y-auto no-scrollbar pt-24">

        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-20 px-4 md:px-10 pb-20 max-w-7xl mx-auto flex flex-col items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-16">
                <h1 className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-2">{t('مرحباً بك في مسار', 'WELCOME TO MASAR')}</h1>
                <p className="text-sm text-white/40 font-bold uppercase tracking-[0.3em]">{t('اختر مسارك التعليمي للبدء', 'CHOOSE YOUR LEARNING PATH TO START')}</p>
              </motion.div>

              <div className="flex flex-row justify-start md:justify-center gap-4 md:gap-6 w-full px-4 overflow-x-auto md:overflow-x-visible no-scrollbar">
                {Object.values(PATHS_CONFIG).map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -15, scale: 1.02 }}
                    onClick={() => startLoading(p.id)}
                    className={`w-60 h-[400px] md:w-72 md:h-[480px] rounded-[2rem] md:rounded-[4rem] bg-gradient-to-br ${p.theme.bg} border border-white/10 p-5 md:p-12 flex flex-col items-center justify-between cursor-pointer group relative shadow-2xl overflow-hidden shadow-black shrink-0 transition-shadow hover:shadow-white/5`}
                  >
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-all duration-700" />
                    <div className="relative z-10 p-4 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] bg-white/5" style={{ color: p.color }}>
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

          {view === 'lessons' && <Lessons key="lessons" section={activeSection} />}
          {view === 'banks' && <QuestionBank key="banks" section={activeSection} />}
          {view === 'challenges' && <Challenges key="challenges" />}
          {view === 'leaderboard' && <Leaderboard key="leaderboard" />}
          {view === "journey" && <JourneyPage key="journey" />}
          {view === 'settings' && <SettingsPage key="settings" />}
        </AnimatePresence>
      </main>

      {/* المرشد — يعرف أين المستخدم الآن ليرد بسياق الصفحة */}
      <TutorWidget context={{
        view,
        track_id: currentTrack?.id,
        section_id: activeSection?.title,
        section_index: activeSection ? currentTrack?.sections?.findIndex(s => s.title === activeSection.title || s.title === `${currentTrack.name} ${activeSection.title}`) : undefined,
      }} />

      {showLogoutModal && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <div className="w-[90%] max-w-[420px] md:w-[420px] p-4 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] bg-[#030712] border border-white/10 shadow-2xl">

            <h2 className="text-2xl font-black text-center mb-4">
              {t('تسجيل الخروج', 'Logout')}
            </h2>

            <p className="text-white/50 text-center mb-8">
              {t(
                'هل أنت متأكد أنك تريد تسجيل الخروج؟',
                'Are you sure you want to logout?'
              )}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                {t('إلغاء', 'Cancel')}
              </button>

              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  logout();
                  setIsSidebarOpen(false);
                  setShowLogoutModal(false);
                }}
                className="flex-1 p-4 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-400 font-bold"
              >
                {t('تأكيد', 'Confirm')}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

function SidebarCard({ icon, title, color, onClick, isSoon }) {
  return (
    <button onClick={isSoon ? null : onClick} className={`w-full p-5 rounded-[1.25rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/5 transition-all flex items-center gap-6 group relative overflow-hidden text-white ${isSoon ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/[0.08] hover:border-white/10'}`}>

      <div className="p-4 rounded-2xl bg-white/5 shadow-inner" style={{ color: color || '#0d9488' }}>{icon}</div>
      <div className="flex flex-col items-start"><span className="font-black text-xs uppercase italic tracking-tight">{title}</span>{isSoon && <span className="text-[8px] font-black text-white/40 tracking-widest uppercase mt-1">Soon</span>}</div>
    </button>
  );
}
