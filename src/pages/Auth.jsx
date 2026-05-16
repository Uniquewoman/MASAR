import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, User, Mail, ArrowLeft, ArrowRight, Zap, Rocket, Sparkles } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Auth = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });
  const { loginUser, registerUser, language, t } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (loginUser(formData.username, formData.password)) onAuthSuccess();
      else alert(language === 'ar' ? 'بيانات الاعتماد غير صالحة' : 'Invalid credentials');
    } else {
      registerUser(formData);
      onAuthSuccess();
    }
  };

  const darkNavyBg = "bg-[#020617]/95 backdrop-blur-3xl border border-slate-800";
  const darkButtonBg = "bg-[#1e293b] hover:bg-[#334155] text-white"; // Slate/Dark Navy for button

  return (
    <div className="fixed inset-0 z-[2000] bg-[#000000] flex items-center justify-center p-6 overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Dynamic Background Particles (Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div 
            key={i} 
            className="absolute bg-slate-500 rounded-full opacity-10" 
            style={{ 
              width: Math.random() * 2, 
              height: Math.random() * 2, 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`, 
              boxShadow: `0 0 10px #64748b` 
            }} 
            animate={{ 
              y: [0, -40, 0], 
              opacity: [0.05, 0.2, 0.05],
            }} 
            transition={{ 
              duration: Math.random() * 10 + 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }} 
          />
        ))}
      </div>

      {/* Main Auth Card */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
        className={`w-full max-w-lg p-12 rounded-[4rem] ${darkNavyBg} relative overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] group`}
      >
        {/* Subtle animated border */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[3000ms] ease-in-out" />
        </div>

        {/* Deep Glow effects */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-slate-900/40 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-slate-900/40 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center mb-12">
          <motion.div 
            whileHover={{ y: -5, scale: 1.05 }}
            className="p-10 rounded-[3rem] bg-slate-900/50 text-slate-300 mb-10 shadow-inner border border-slate-800 relative overflow-hidden"
          >
            <Rocket size={54} className="relative z-10 opacity-70 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
          </motion.div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Sparkles size={14} className="text-slate-600" />
                <h1 className="text-[12px] font-black tracking-[0.8em] text-slate-500 uppercase">
                  {t('مسار', 'MASAR')}
                </h1>
                <Sparkles size={14} className="text-slate-600" />
            </div>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white leading-tight">
              {isLogin ? t('تسجيل الدخول', 'PORTAL ACCESS') : t('إنشاء حساب', 'JOIN MASAR')}
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 italic">
              {t('منصة مسار التعليمية • دخول آمن', 'MASAR LEARNING PLATFORM • SECURE')}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
          <div className="space-y-4">
            {/* Username Input */}
            <div className="relative group/input">
              <User className={`absolute ${language === 'ar' ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 text-slate-700 group-focus-within/input:text-slate-400 transition-all duration-500`} size={20} />
              <input 
                type="text" 
                placeholder={t('اسم المستخدم', 'USERNAME')} 
                required 
                value={formData.username} 
                onChange={(e) => setFormData({...formData, username: e.target.value})} 
                className={`w-full p-7 ${language === 'ar' ? 'pr-20' : 'pl-20'} rounded-[2.5rem] bg-slate-900/30 border border-slate-800 text-white focus:border-slate-700 focus:bg-slate-900/50 outline-none transition-all placeholder:text-slate-800 placeholder:uppercase placeholder:text-[9px] placeholder:tracking-widest font-bold`} 
              />
            </div>

            {/* Email Input (Conditional) */}
            <AnimatePresence>
              {!isLogin && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="relative group/input overflow-hidden"
                >
                  <Mail className={`absolute ${language === 'ar' ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 text-slate-700 group-focus-within/input:text-slate-400 transition-all duration-500`} size={20} />
                  <input 
                    type="email" 
                    placeholder={t('البريد الإلكتروني', 'EMAIL ADDRESS')} 
                    required 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    className={`w-full p-7 ${language === 'ar' ? 'pr-20' : 'pl-20'} rounded-[2.5rem] bg-slate-900/30 border border-slate-800 text-white focus:border-slate-700 focus:bg-slate-900/50 outline-none transition-all placeholder:text-slate-800 placeholder:uppercase placeholder:text-[9px] placeholder:tracking-widest font-bold`} 
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Password Input */}
            <div className="relative group/input">
              <Lock className={`absolute ${language === 'ar' ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 text-slate-700 group-focus-within/input:text-slate-400 transition-all duration-500`} size={20} />
              <input 
                type="password" 
                placeholder={t('كلمة المرور', 'PASSWORD')} 
                required 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
                className={`w-full p-7 ${language === 'ar' ? 'pr-20' : 'pl-20'} rounded-[2.5rem] bg-slate-900/30 border border-slate-800 text-white focus:border-slate-700 focus:bg-slate-900/50 outline-none transition-all placeholder:text-slate-800 placeholder:uppercase placeholder:text-[9px] placeholder:tracking-widest font-bold`} 
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className={`w-full py-7 rounded-[3rem] ${darkButtonBg} font-black uppercase tracking-tighter shadow-2xl transition-all flex items-center justify-center gap-4 group/btn`}
          >
            <span className="text-lg">{isLogin ? t('دخول', 'ACCESS') : t('تسجيل', 'REGISTER')}</span>
            {language === 'ar' ? (
              <ArrowLeft className="group-hover/btn:-translate-x-2 transition-transform" size={24} />
            ) : (
              <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={24} />
            )}
          </motion.button>
        </form>

        {/* Toggle Auth Mode */}
        <div className="relative z-10 mt-12 text-center border-t border-slate-800/50 pt-8">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-slate-300 transition-all"
          >
            {isLogin 
              ? t('ليس لديك حساب؟ سجل هنا', "Don't have an account? Sign up") 
              : t('لديك حساب بالفعل؟ سجل دخولك', "Already registered? Sign in")}
          </button>
        </div>
      </motion.div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none opacity-20">
         <p className="text-[8px] font-black uppercase tracking-[1em] text-slate-500">{t('مسار • التحول الرقمي التعليمي', 'MASAR • EDUCATIONAL TRANSFORMATION')}</p>
      </div>
    </div>
  );
};
