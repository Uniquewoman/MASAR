import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Bell, Moon, Sun, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const ProfileSettings = () => {
  const { language, setLanguage, theme, setTheme, t } = useAppContext();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="pt-32 pb-20 px-10 max-w-4xl mx-auto"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className={`mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
          {t('إعدادات المنصة', 'PLATFORM SETTINGS')}
        </h2>
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
          {t('تخصيص تجربتك التعليمية في مسار', 'CUSTOMIZE YOUR LEARNING EXPERIENCE IN MASAR')}
        </p>
      </div>

      <div className="space-y-6">
        {/* Language Toggle Card */}
        <div className={`p-8 rounded-[3rem] ${cardBg} flex items-center justify-between group hover:bg-white/[0.06] transition-all`}>
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-teal-500/10 text-teal-500">
              <Globe size={24} />
            </div>
            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
              <h3 className="text-xl font-black text-white">{t('لغة المنصة', 'Platform Language')}</h3>
              <p className="text-sm text-white/40 font-bold">{t('تغيير اللغة للنظام بالكامل', 'Change the entire system language')}</p>
            </div>
          </div>
          <button 
            onClick={toggleLanguage}
            className="px-8 py-4 rounded-2xl bg-teal-500 text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl shadow-teal-500/20"
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>

        {/* Theme Toggle Card */}
        <div className={`p-8 rounded-[3rem] ${cardBg} flex items-center justify-between group hover:bg-white/[0.06] transition-all`}>
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-500">
              {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
            </div>
            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
              <h3 className="text-xl font-black text-white">{t('المظهر', 'Appearance')}</h3>
              <p className="text-sm text-white/40 font-bold">{t('تبديل بين الوضع الليلي والنهاري', 'Toggle between dark and light mode')}</p>
            </div>
          </div>
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5">
            <button 
              onClick={() => setTheme('dark')}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${theme === 'dark' ? 'bg-purple-500 text-white shadow-lg' : 'text-white/40'}`}
            >
              Dark
            </button>
            <button 
              onClick={() => setTheme('light')}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${theme === 'light' ? 'bg-purple-500 text-white shadow-lg' : 'text-white/40'}`}
            >
              Light
            </button>
          </div>
        </div>

        {/* Security Card */}
        <div className={`p-8 rounded-[3rem] ${cardBg} flex items-center justify-between group hover:bg-white/[0.06] transition-all opacity-50`}>
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-red-500/10 text-red-500">
              <Shield size={24} />
            </div>
            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
              <h3 className="text-xl font-black text-white">{t('الأمان والخصوصية', 'Security & Privacy')}</h3>
              <p className="text-sm text-white/40 font-bold">{t('إدارة كلمة المرور والوصول', 'Manage password and access')}</p>
            </div>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">Coming Soon</div>
        </div>
      </div>

      <button 
        onClick={() => window.dispatchEvent(new CustomEvent('changeView', { detail: 'dashboard' }))}
        className="mt-12 w-full p-8 rounded-[3rem] border border-white/5 bg-white/5 flex items-center justify-center gap-4 text-white/40 hover:text-white hover:bg-white/10 transition-all font-black uppercase text-xs tracking-[0.3em]"
      >
        {language === 'ar' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
        {t('العودة للوحة التحكم', 'RETURN TO DASHBOARD')}
      </button>
    </motion.div>
  );
};
