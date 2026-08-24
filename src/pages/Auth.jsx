import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Lock, Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Auth({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const language = 'ar'; // أو اجعليها dynamic إذا كانت تتغير
  const [errorMessage, setErrorMessage] = useState('');
  async function resetPassword() {
    if (!email) {
      setErrorMessage('ادخلي البريد الإلكتروني أولاً');
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/reset-password"
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      alert('تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني');
    }
  }
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      console.log("LOGIN RESULT:", error);
      if (error) {
        setHasError(false);
        setErrorMessage('');
        setHasError(true);
        setErrorMessage('البريد الإلكتروني أو كلمة المرور غير صحيح');
        return;
      }

      else {



      }
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
      } else {

        const { error: profileError } = await supabase
          .from("profiles")
          .insert({
            id: data.user.id,
            full_name: fullName,
            username: username,
            level: 1,
            total_progress: 0
          });

        console.log("PROFILE ERROR:", profileError);

        alert('تم إنشاء الحساب! يرجى التحقق من بريدك.');
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="الاسم الكامل"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-7 rounded-[2.5rem] bg-slate-900/30 border border-slate-800 text-white"
              />

              <input
                type="text"
                placeholder="اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-7 rounded-[2.5rem] bg-slate-900/30 border border-slate-800 text-white"
              />
            </>
          )}
          {/* Email Input */}
          <div className="relative group/input">
            <Mail className={`absolute ${language === 'ar' ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 text-slate-700 group-focus-within/input:text-slate-400 transition-all`} size={20} />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-7 ${language === 'ar' ? 'pr-20' : 'pl-20'} rounded-[2.5rem] bg-slate-900/30 border border-slate-800 text-white focus:border-slate-700 outline-none transition-all`}
            />
          </div>

          {/* Password Input */}
          <div className="relative group/input">
            <Lock className={`absolute ${language === 'ar' ? 'right-7' : 'left-7'} top-1/2 -translate-y-1/2 text-slate-700 group-focus-within/input:text-slate-400 transition-all`} size={20} />
            <input
              type="password"
              placeholder="كلمة المرور"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-7 ${language === 'ar' ? 'pr-20' : 'pl-20'} rounded-[2.5rem] bg-slate-900/30 border ${errorMessage ? 'border-red-500' : 'border-slate-800'
                } text-white focus:border-slate-700 outline-none transition-all`} />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2 mr-2">
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full py-7 rounded-[3rem] bg-indigo-600 text-white font-black uppercase tracking-tighter shadow-2xl transition-all flex items-center justify-center gap-4"
          >
            <span className="text-lg">{isLogin ? 'دخول' : 'تسجيل'}</span>
            {language === 'ar' ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
          </motion.button>
          <button
            type="button"
            onClick={resetPassword}
            className="text-sm text-indigo-400 hover:text-indigo-300"
          >
            نسيت كلمة المرور؟
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-12 text-center border-t border-slate-800 pt-8">
          <button onClick={() => setIsLogin(!isLogin)} className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-600 hover:text-slate-300 transition-all">
            {isLogin ? 'ليس لديك حساب؟ سجل هنا' : 'لديك حساب بالفعل؟ سجل دخولك'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}