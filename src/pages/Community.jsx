import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MessageSquare, Send, Hash, Search, Bell, UserPlus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Community = () => {
  const { user, language, t, currentTrack, tracksInfo } = useAppContext();
  const track = currentTrack || tracksInfo['SE'];
  const trackColor = track.color || '#14b8a6';
  const [activeTab, setActiveTab] = useState('all');
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10";

  const posts = [
    { 
      id: 1, 
      user: t('سارة', 'Sarah'), 
      content: t('كيف يمكنني تجاوز المستوى الخامس في مسار الأمن السيبراني؟ الأسئلة المتعلقة بالتشفير صعبة جداً!', 'How can I pass level 5 in the Cyber Security track? Cryptography questions are very difficult!'), 
      tag: 'CyberSecurity', likes: 12, replies: 5 
    },
    { 
      id: 2, 
      user: t('فهد', 'Fahad'), 
      content: t('أبحث عن شريك للدراسة في مسار هندسة البرمجيات، هل من مهتم؟', 'I am looking for a study partner in the Software Engineering track, anyone interested?'), 
      tag: 'SoftwareEngineering', likes: 8, replies: 12 
    },
    { 
      id: 3, 
      user: t('خالد', 'Khaled'), 
      content: t('نصيحة للمبتدئين في الذكاء الاصطناعي: ابدأوا بفهم الجبر الخطي أولاً قبل الدخول في الشبكات العصبية.', 'Advice for AI beginners: start with understanding Linear Algebra before diving into Neural Networks.'), 
      tag: 'AI', likes: 25, replies: 3 
    }
  ];

  const channels = [
    { ar: 'الكل', en: 'All', id: 'all' },
    { ar: 'هندسة البرمجيات', en: 'Software Engineering', id: 'Software Engineering' },
    { ar: 'الذكاء الاصطناعي', en: 'Artificial Intelligence', id: 'Artificial Intelligence' },
    { ar: 'الأمن السيبراني', en: 'Cyber Security', id: 'Cyber Security' },
    { ar: 'الشبكات', en: 'Networking', id: 'Networking' },
    { ar: 'التقنية المالية', en: 'Digital Finance', id: 'Digital Finance' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-10 pb-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Sidebar Channels */}
      <div className="w-full lg:w-80 shrink-0">
        <div className={`p-8 rounded-[3.5rem] ${cardBg} shadow-2xl`}>
          <h2 className={`text-xl font-black italic uppercase tracking-tighter text-white mb-8 flex items-center gap-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
             <Hash size={24} style={{ color: trackColor }} /> {t('القنوات', 'CHANNELS')}
          </h2>
          <div className="space-y-3">
             {channels.map(ch => (
               <button 
                key={ch.id} 
                onClick={() => setActiveTab(ch.id)} 
                className={`w-full p-4 rounded-2xl text-sm font-bold transition-all ${language === 'ar' ? 'text-right' : 'text-left'} ${activeTab === ch.id ? 'text-black shadow-lg' : 'text-white/40 hover:bg-white/5'}`}
                style={activeTab === ch.id ? { backgroundColor: trackColor, boxShadow: `0 10px 20px ${trackColor}20` } : {}}
               >
                 # {t(ch.ar, ch.en)}
               </button>
             ))}
          </div>
        </div>
      </div>

      {/* Main Feed */}
      <div className="flex-1 space-y-8">
        <div className={`p-8 rounded-[3.5rem] ${cardBg} shadow-2xl`}>
           <div className={`flex items-center gap-6 mb-6 ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-black font-black uppercase italic shrink-0" style={{ backgroundColor: trackColor }}>{user?.username?.[0] || 'A'}</div>
              <input 
                type="text" 
                placeholder={t('شارك سؤالك أو فكرتك مع المجتمع...', 'Share your question or idea with the community...')} 
                className={`flex-1 bg-white/5 border border-white/5 rounded-2xl p-4 text-white outline-none transition-all ${language === 'ar' ? 'text-right' : 'text-left'}`} 
                style={{ focusBorderColor: trackColor }}
              />
              <button className="p-4 rounded-2xl text-black hover:scale-105 transition-all" style={{ backgroundColor: trackColor }}><Send size={20} className={language === 'en' ? 'rotate-180' : ''}/></button>
           </div>
        </div>

        <div className="space-y-6">
          {posts.map(post => (
            <motion.div key={post.id} whileHover={{ y: -5 }} className={`p-10 rounded-[4rem] ${cardBg} shadow-xl relative overflow-hidden group ${language === 'ar' ? 'text-right' : 'text-left'}`}>
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to bottom right, ${trackColor}05, transparent)` }} />
               <div className={`flex justify-between items-start mb-6 ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                     <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold">{post.user[0]}</div>
                     <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                        <div className="text-white font-black italic">{post.user}</div>
                        <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: trackColor }}>#{post.tag}</div>
                     </div>
                  </div>
                  <button className="text-white/20 hover:text-white transition-colors"><Bell size={18} /></button>
               </div>
               <p className="text-white/80 font-bold leading-relaxed mb-8">{post.content}</p>
               <div className={`flex gap-6 border-t border-white/5 pt-6 ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest cursor-pointer hover:text-white transition-colors" style={{ hoverColor: trackColor }}>
                     <MessageSquare size={16} /> {post.replies} {t('ردود', 'REPLIES')}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest cursor-pointer hover:text-red-500 transition-colors">
                     <Users size={16} /> {post.likes} {t('إعجابات', 'LIKES')}
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Trending */}
      <div className="w-full lg:w-80 shrink-0 space-y-8">
         <div className={`p-8 rounded-[3.5rem] ${cardBg} shadow-2xl`}>
            <h2 className={`text-xl font-black italic uppercase tracking-tighter text-white mb-6 ${language === 'ar' ? 'text-right' : 'text-left'}`}>{t('الأكثر تفاعلاً', 'TRENDING')}</h2>
            <div className="space-y-4">
               {[
                 { ar: 'كيف تبدأ في البرمجة؟', en: 'How to start coding?', v: '1.2k' },
                 { ar: 'مستقبل الذكاء الاصطناعي', en: 'Future of AI', v: '940' },
                 { ar: 'تحدي الأمن السيبراني اليوم', en: 'Cyber Security Challenge today', v: '850' }
               ].map((item, i) => (
                 <div key={i} className={`flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5 ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <span className="text-xs font-bold text-white/80">{t(item.ar, item.en)}</span>
                    <span className="text-[10px] font-mono" style={{ color: trackColor }}>{item.v}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </motion.div>
  );
};
