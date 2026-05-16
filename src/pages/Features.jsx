import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayCircle, FileText, Users, PlusCircle, LogIn, Swords, 
  Shuffle, User, Shield, ArrowRight, BrainCircuit, Database, Trophy, LayoutGrid, Zap, Sparkles, Code, ArrowLeft, XCircle
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { getSectionQuestions } from '../data/questions';

export const Lessons = ({ section }) => {
  const { currentTrack, tracksInfo, language, t } = useAppContext();
  const track = currentTrack || tracksInfo['SE'];
  const [selectedSection, setSelectedSection] = useState(section || null);

  const trackColor = track.color || '#14b8a6';
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08]";

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
        {[
          { t_ar: `بناء الأنظمة الموزعة`, t_en: `Building Distributed Systems`, d_ar: `محاضرة معمقة حول معايير التصميم العالمي.`, d_en: `Deep lecture on global design standards.` },
          { t_ar: `استراتيجيات التحسين`, t_en: `Optimization Strategies`, d_ar: `كيفية تقليل استهلاك الذاكرة والمعالجة.`, d_en: `How to reduce memory and CPU usage.` },
          { t_ar: `دراسة حالة: معمارية الأنظمة`, t_en: `Case Study: System Architecture`, d_ar: `تحليل تقني لكيفية معالجة ملايين الطلبات.`, d_en: `Technical analysis of processing millions of requests.` }
        ].map((vid, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className={`p-6 rounded-[2.5rem] ${cardBg} transition-all ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="aspect-video bg-black/40 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden group">
              <PlayCircle size={48} className="relative z-10 opacity-60 group-hover:opacity-100 transition-all" style={{ color: trackColor }} />
              <div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-[10px] font-mono">12:45</div>
            </div>
            <h4 className="text-lg font-black text-white mb-2">{t(vid.t_ar, vid.t_en)}</h4>
            <p className="text-xs text-white/40 font-bold leading-relaxed">{t(vid.d_ar, vid.d_en)}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-10 flex items-center gap-4">
          <FileText size={32} style={{ color: trackColor }} /> {t('وثائق وشروحات مكتوبة', 'STUDY DOCUMENTS & SUMMARIES')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {[
             { t_ar: 'ملخص المفاهيم الأساسية', t_en: 'Core Concepts Summary', d_ar: 'ملف PDF يحتوي على أهم النقاط التي تم شرحها في هذا القسم بشكل مبسط.', d_en: 'A simplified PDF containing the key points explained in this section.' },
             { t_ar: 'قائمة المراجع الإضافية', t_en: 'Additional References', d_ar: 'روابط ومصادر خارجية لتعميق فهمك للمواضيع المتقدمة.', d_en: 'External links and resources to deepen your understanding of advanced topics.' }
           ].map((doc, i) => (
             <motion.div key={i} whileHover={{ x: language === 'ar' ? -10 : 10 }} className={`p-8 rounded-[2.5rem] ${cardBg} flex items-center gap-8 group cursor-pointer border-r-4`} style={{ borderRightColor: trackColor }}>
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all" style={{ color: trackColor }}>
                  <LayoutGrid size={24} />
                </div>
                <div className={language === 'ar' ? 'text-right' : 'text-left'}>
                   <h4 className="text-white font-black italic mb-1">{t(doc.t_ar, doc.t_en)}</h4>
                   <p className="text-[10px] text-white/40 font-bold">{t(doc.d_ar, doc.d_en)}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
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

export const Challenges = () => {
  const { currentTrack, tracksInfo, language, t } = useAppContext();
  const track = currentTrack || tracksInfo['SE'];
  const [view, setView] = useState('menu'); // menu | self-challenge-options | playing-self | rooms-menu | create-room | create-room-ready | join-room | random-match-options | room-playing
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [playerCount, setPlayerCount] = useState(2);
  const [roomID, setRoomID] = useState(null);
  const [inputRoomID, setInputRoomID] = useState('');
  const [challengeTask, setChallengeTask] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  
  const trackColor = track.color || '#14b8a6';
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08]";

  const generateTask = () => {
    const codeTasks = [
      { code: "let x = 10; function getVal() { return x * 2; }", q_ar: "ما هي قيمة x في الكود البرمجي؟", q_en: "What is the value of x in the code?", ans: "10" },
      { code: "const api_key = 'SDA_2024'; if(auth) { connect(api_key); }", q_ar: "ما هو المتغير المستخدم لتخزين المفتاح البرمجي؟", q_en: "What variable is used to store the API key?", ans: "api_key" },
      { code: "users.map(u => u.id === target_id);", q_ar: "ما هي الدالة المستخدمة للبحث في المصفوفة؟", q_en: "What function is used to search the array?", ans: "map" },
      { code: "let status = 'active'; let isAdmin = true; if(isAdmin) { status = 'superuser'; }", q_ar: "ما هي قيمة المتغير status إذا كان isAdmin صحيحاً؟", q_en: "What is the value of 'status' if 'isAdmin' is true?", ans: "superuser" },
      { code: "const [data, setData] = useState([]); useEffect(() => { fetchData(); }, []);", q_ar: "ما هو اسم المتغير الذي يخزن الحالة (State)؟", q_en: "What is the name of the variable that stores the state?", ans: "data" }
    ];
    setChallengeTask(codeTasks[Math.floor(Math.random() * codeTasks.length)]);
    setIsAnswered(false);
    setIsWrong(false);
    setView('playing-self');
  };

  const handleCreateRoom = () => {
    const id = Math.floor(100000 + Math.random() * 900000).toString();
    setRoomID(id);
    setView('create-room-ready');
  };

  const handleJoinRoom = () => {
    if (inputRoomID.length === 6) {
      setRoomID(inputRoomID);
      setView('room-playing');
    }
  };

  const startRandomMatch = () => {
    setRoomID("RANDOM_" + Math.floor(Math.random() * 1000));
    setView('room-playing');
  };

  const checkAnswer = () => {
    // Simple logic for simulation
    setIsAnswered(true);
    const correct = Math.random() > 0.3;
    setIsWrong(!correct);
    if (!correct) {
      // Show red border feedback simulation
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-10 pb-20 max-w-7xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {view === 'menu' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div whileHover={{ y: -10 }} onClick={() => setView('self-challenge-options')} className={`p-12 rounded-[4rem] ${cardBg} cursor-pointer flex flex-col justify-between h-[500px] border-b-8 shadow-2xl relative overflow-hidden group ${language === 'ar' ? 'text-right' : 'text-left'}`} style={{ borderBottomColor: trackColor }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to bottom right, ${trackColor}10, transparent)` }} />
            <div className="p-8 rounded-[2.5rem] bg-white/5 w-fit shadow-inner" style={{ color: trackColor }}><Zap size={48} /></div>
            <div>
              <h2 className="text-4xl font-black italic text-white mb-4 uppercase tracking-tighter">{t('تحدي نفسي', 'SELF CHALLENGE')}</h2>
              <p className="text-white/40 font-bold leading-relaxed text-lg">{t('حلل الكود البرمجي واستخرج القيم المطلوبة لاختبار سرعة بديهتك التقنية.', 'Analyze the code and extract the required values to test your technical wit.')}</p>
            </div>
            <button className="w-full py-6 rounded-[2rem] text-black font-black uppercase text-sm tracking-widest group-hover:bg-white transition-all" style={{ backgroundColor: trackColor }}>{t('ابدأ الآن', 'START NOW')}</button>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} onClick={() => setView('rooms-menu')} className={`p-12 rounded-[4rem] ${cardBg} cursor-pointer flex flex-col justify-between h-[500px] border-b-8 shadow-2xl relative overflow-hidden group ${language === 'ar' ? 'text-right' : 'text-left'}`} style={{ borderBottomColor: trackColor }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to bottom right, ${trackColor}10, transparent)` }} />
            <div className="p-8 rounded-[2.5rem] bg-white/5 w-fit shadow-inner" style={{ color: trackColor }}><Users size={48} /></div>
            <div>
              <h2 className="text-4xl font-black italic text-white mb-4 uppercase tracking-tighter">{t('الرومات', 'ROOMS')}</h2>
              <p className="text-white/40 font-bold leading-relaxed text-lg">{t('نافس المتدربين الآخرين في تحديات مباشرة 1v1 داخل غرف مخصصة.', 'Compete against other trainees in live 1v1 challenges within dedicated rooms.')}</p>
            </div>
            <button className="w-full py-6 rounded-[2rem] text-white font-black uppercase text-sm tracking-widest group-hover:bg-white group-hover:text-black transition-all" style={{ backgroundColor: `${trackColor}80` }}>{t('دخول الرومات', 'ENTER ROOMS')}</button>
          </motion.div>
        </div>
      )}

      {/* BACK BUTTONS FOR ALL SUB-VIEWS */}
      {(view !== 'menu') && (
        <button onClick={() => setView(view.includes('playing') || view.includes('ready') ? 'rooms-menu' : 'menu')} className="mb-8 flex items-center gap-2 text-white/40 font-black uppercase text-[10px] tracking-widest hover:text-white transition-all" style={{ color: trackColor }}>
          {language === 'ar' ? <ArrowRight size={14} /> : <ArrowRight size={14} className="rotate-180" />} {t('العودة', 'BACK')}
        </button>
      )}

      {view === 'self-challenge-options' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-12">
          <div className={`p-12 rounded-[4rem] ${cardBg} space-y-10 shadow-2xl relative overflow-hidden`}>
            <div className="absolute top-0 right-0 p-8 opacity-20" style={{ color: trackColor }}><BrainCircuit size={100} /></div>
            <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter text-center relative z-10">{t('تخصيص التحدي', 'CUSTOMIZE CHALLENGE')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <label className="text-[10px] font-black uppercase text-white/20 tracking-[0.3em] block">{t('اختر القسم', 'SELECT SECTION')}</label>
                <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {track.sections.map((sec, i) => (
                    <button key={i} onClick={() => setSelectedSection(sec)} className={`p-5 rounded-2xl border text-right transition-all text-sm font-bold flex justify-between items-center ${selectedSection === sec ? 'text-black border-transparent' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`} style={selectedSection === sec ? { backgroundColor: trackColor } : {}}>
                      {t(sec.title_ar, sec.title)}
                      {selectedSection === sec && <Zap size={16} />}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <label className="text-[10px] font-black uppercase text-white/20 tracking-[0.3em] block">{t('مستوى الصعوبة', 'DIFFICULTY LEVEL')}</label>
                <div className="grid grid-cols-3 gap-4">
                   {[1, 2, 3].map(lvl => (
                     <button key={lvl} onClick={() => setSelectedLevel(lvl)} className={`p-6 rounded-2xl border transition-all flex flex-col items-center gap-2 ${selectedLevel === lvl ? 'text-black border-transparent shadow-lg' : 'bg-white/5 border-white/10 text-white/40'}`} style={selectedLevel === lvl ? { backgroundColor: trackColor } : {}}>
                        <span className="text-2xl font-black italic">{lvl}</span>
                        <span className="text-[8px] font-black uppercase">{lvl === 1 ? t('سهل', 'EASY') : lvl === 2 ? t('متوسط', 'MID') : t('صعب', 'HARD')}</span>
                     </button>
                   ))}
                </div>
              </div>
            </div>
            <button disabled={!selectedSection} onClick={generateTask} className="w-full py-8 rounded-[3rem] text-black font-black uppercase text-lg tracking-widest shadow-2xl transition-all hover:scale-[1.02]" style={{ backgroundColor: trackColor, boxShadow: `0 20px 50px ${trackColor}30` }}>{t('بدء التحدي الفوري', 'START INSTANT CHALLENGE')}</button>
          </div>
        </motion.div>
      )}

      {view === 'playing-self' && challengeTask && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto space-y-8">
           <div className={`p-12 rounded-[4rem] ${cardBg} border-t-8 space-y-10 shadow-2xl ${isWrong ? 'border-red-500' : ''}`} style={{ borderTopColor: isWrong ? '#ef4444' : trackColor }}>
             <div className="bg-black/80 p-10 rounded-[3rem] font-mono text-xl overflow-x-auto shadow-inner border border-white/5" style={{ color: isWrong ? '#ef4444' : trackColor }}><pre>{challengeTask.code}</pre></div>
             <div className="text-center space-y-8">
               <h3 className="text-3xl font-black text-white italic">{t(challengeTask.q_ar, challengeTask.q_en)}</h3>
               <input type="text" placeholder={t('اكتب إجابتك هنا...', 'Type your answer here...')} className={`w-full bg-white/5 border rounded-[2.5rem] p-8 text-white text-center outline-none transition-all text-xl font-bold ${isWrong ? 'border-red-500 text-red-500' : 'border-white/5'}`} />
               <button onClick={checkAnswer} className="w-full py-8 rounded-[3rem] text-black font-black uppercase tracking-widest text-lg shadow-xl" style={{ backgroundColor: trackColor }}>{t('تحقق من الإجابة', 'CHECK ANSWER')}</button>
             </div>
           </div>
        </motion.div>
      )}

      {view === 'rooms-menu' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} onClick={() => setView('create-room')} className={`p-10 rounded-[3.5rem] ${cardBg} flex flex-col justify-between h-[450px] border-b-8 shadow-2xl group cursor-pointer relative overflow-hidden`} style={{ borderBottomColor: trackColor }}>
            <div className="p-6 rounded-3xl bg-white/5 w-fit shadow-inner" style={{ color: trackColor }}><PlusCircle size={32}/></div>
            <h3 className="text-2xl font-black italic text-white uppercase mb-2">{t('إنشاء روم', 'CREATE ROOM')}</h3>
            <button className="w-full py-5 rounded-2xl text-black font-black uppercase text-xs tracking-widest group-hover:bg-white transition-all" style={{ backgroundColor: trackColor }}>{t('تفعيل الغرفة', 'ACTIVATE ROOM')}</button>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} onClick={() => setView('join-room')} className={`p-10 rounded-[3.5rem] ${cardBg} flex flex-col justify-between h-[450px] border-b-8 shadow-2xl group cursor-pointer relative overflow-hidden`} style={{ borderBottomColor: trackColor }}>
            <div className="p-6 rounded-3xl bg-white/5 w-fit shadow-inner" style={{ color: trackColor }}><LogIn size={32}/></div>
            <h3 className="text-2xl font-black italic text-white uppercase mb-2">{t('دخول روم', 'JOIN ROOM')}</h3>
            <button className="w-full py-5 rounded-2xl text-black font-black uppercase text-xs tracking-widest group-hover:bg-white transition-all" style={{ backgroundColor: trackColor }}>{t('بحث عن غرفة', 'FIND ROOM')}</button>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} onClick={() => setView('random-match-options')} className={`p-10 rounded-[3.5rem] ${cardBg} flex flex-col justify-between h-[450px] border-b-8 shadow-2xl group cursor-pointer relative overflow-hidden`} style={{ borderBottomColor: trackColor }}>
            <div className="p-6 rounded-3xl bg-white/5 w-fit shadow-inner" style={{ color: trackColor }}><Shuffle size={32}/></div>
            <h3 className="text-2xl font-black italic text-white uppercase mb-2">{t('بحث عشوائي', 'RANDOM MATCH')}</h3>
            <button className="w-full py-5 rounded-2xl text-black font-black uppercase text-xs tracking-widest group-hover:bg-white transition-all" style={{ backgroundColor: trackColor }}>{t('بدء المطابقة', 'START MATCHING')}</button>
          </motion.div>
        </motion.div>
      )}

      {view === 'create-room' && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto">
          <div className={`p-12 rounded-[4rem] ${cardBg} space-y-10 shadow-2xl`}>
             <h2 className="text-3xl font-black italic text-white uppercase text-center">{t('إعدادات الغرفة', 'ROOM SETUP')}</h2>
             <div className="space-y-6">
                <label className="text-[10px] font-black uppercase text-white/20 tracking-widest block">{t('عدد اللاعبين', 'PLAYER COUNT')}</label>
                <div className="grid grid-cols-2 gap-4">
                   {[2, 4].map(num => (
                     <button key={num} onClick={() => setPlayerCount(num)} className={`p-6 rounded-2xl border transition-all ${playerCount === num ? 'text-black border-transparent' : 'bg-white/5 border-white/10 text-white/40'}`} style={playerCount === num ? { backgroundColor: trackColor } : {}}>{num} {t('لاعبين', 'Players')}</button>
                   ))}
                </div>
                <label className="text-[10px] font-black uppercase text-white/20 tracking-widest block">{t('مستوى الصعوبة', 'DIFFICULTY')}</label>
                <div className="grid grid-cols-3 gap-3">
                   {[1, 2, 3].map(lvl => (
                     <button key={lvl} onClick={() => setSelectedLevel(lvl)} className={`p-4 rounded-xl border transition-all text-[10px] font-black ${selectedLevel === lvl ? 'text-black border-transparent' : 'bg-white/5 border-white/10 text-white/40'}`} style={selectedLevel === lvl ? { backgroundColor: trackColor } : {}}>{lvl === 1 ? 'EASY' : lvl === 2 ? 'MID' : 'HARD'}</button>
                   ))}
                </div>
             </div>
             <button onClick={handleCreateRoom} className="w-full py-6 rounded-[2rem] text-black font-black uppercase tracking-widest shadow-xl" style={{ backgroundColor: trackColor }}>{t('إنشاء الغرفة الآن', 'CREATE ROOM NOW')}</button>
          </div>
        </motion.div>
      )}

      {view === 'create-room-ready' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl mx-auto text-center space-y-10">
           <div className={`p-12 rounded-[4rem] ${cardBg} space-y-8 shadow-2xl border-t-8`} style={{ borderTopColor: trackColor }}>
              <h2 className="text-2xl font-black text-white italic">{t('تم إنشاء الغرفة بنجاح!', 'Room Created Successfully!')}</h2>
              <div className="bg-black/60 p-10 rounded-[3rem] border border-white/5 shadow-inner">
                 <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-4">{t('رمز الدخول', 'ENTRY CODE')}</div>
                 <div className="text-6xl font-black tracking-[0.2em]" style={{ color: trackColor }}>{roomID}</div>
              </div>
              <p className="text-xs text-white/40 font-bold leading-relaxed">{t('شارك هذا الرمز مع أصدقائك ليبدأوا التحدي معك.', 'Share this code with your friends to start the challenge with you.')}</p>
              <button onClick={() => setView('room-playing')} className="w-full py-6 rounded-[2rem] text-black font-black uppercase tracking-widest" style={{ backgroundColor: trackColor }}>{t('بدء التحدي', 'START CHALLENGE')}</button>
           </div>
        </motion.div>
      )}

      {view === 'join-room' && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto">
          <div className={`p-12 rounded-[4rem] ${cardBg} space-y-10 shadow-2xl`}>
             <h2 className="text-3xl font-black italic text-white uppercase text-center">{t('دخول غرفة', 'JOIN ROOM')}</h2>
             <div className="space-y-6">
                <label className="text-[10px] font-black uppercase text-white/20 tracking-widest block text-center">{t('أدخل رمز الغرفة المكون من 6 أرقام', 'ENTER 6-DIGIT ROOM CODE')}</label>
                <input 
                  type="text" 
                  maxLength={6}
                  value={inputRoomID}
                  onChange={(e) => setInputRoomID(e.target.value)}
                  className="w-full bg-black/60 border border-white/5 rounded-[2.5rem] p-8 text-center text-5xl font-black tracking-[0.3em] outline-none transition-all" 
                  style={{ color: trackColor, border: `2px solid ${trackColor}20` }}
                />
             </div>
             <button onClick={handleJoinRoom} disabled={inputRoomID.length !== 6} className="w-full py-6 rounded-[2rem] text-black font-black uppercase tracking-widest shadow-xl disabled:opacity-20" style={{ backgroundColor: trackColor }}>{t('دخول الآن', 'JOIN NOW')}</button>
          </div>
        </motion.div>
      )}

      {view === 'random-match-options' && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto">
          <div className={`p-12 rounded-[4rem] ${cardBg} space-y-10 shadow-2xl`}>
             <h2 className="text-3xl font-black italic text-white uppercase text-center">{t('بحث عشوائي', 'RANDOM MATCH')}</h2>
             <div className="space-y-6">
                <label className="text-[10px] font-black uppercase text-white/20 tracking-widest block">{t('اختر مستوى الصعوبة المفضل', 'CHOOSE PREFERRED DIFFICULTY')}</label>
                <div className="grid grid-cols-1 gap-4">
                   {[1, 2, 3].map(lvl => (
                     <button key={lvl} onClick={() => setSelectedLevel(lvl)} className={`p-6 rounded-2xl border transition-all flex justify-between items-center ${selectedLevel === lvl ? 'text-black border-transparent' : 'bg-white/5 border-white/10 text-white/40'}`} style={selectedLevel === lvl ? { backgroundColor: trackColor } : {}}>
                        <span className="text-lg font-black">{lvl === 1 ? t('سهل', 'EASY') : lvl === 2 ? t('متوسط', 'MID') : t('صعب', 'HARD')}</span>
                        {selectedLevel === lvl && <Zap size={20} />}
                     </button>
                   ))}
                </div>
             </div>
             <button onClick={startRandomMatch} className="w-full py-6 rounded-[2rem] text-black font-black uppercase tracking-widest shadow-xl" style={{ backgroundColor: trackColor }}>{t('البدء في المطابقة', 'START MATCHMAKING')}</button>
          </div>
        </motion.div>
      )}

      {view === 'room-playing' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 text-center">
           <div className={`p-12 rounded-[4rem] ${cardBg} border-b-8 shadow-2xl relative overflow-hidden`} style={{ borderBottomColor: trackColor }}>
              <button onClick={() => setView('rooms-menu')} className="absolute top-8 left-8 p-3 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all z-20">
                <ArrowLeft size={20} className={language === 'ar' ? 'rotate-180' : ''} />
              </button>
              <div className="absolute top-4 right-4 text-[8px] font-mono text-white/20 uppercase tracking-widest">Room: {roomID}</div>
              <div className="flex justify-center gap-20 mb-12">
                 <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center font-black text-2xl border-2" style={{ color: trackColor, borderColor: trackColor }}>ME</div>
                    <div className="text-[10px] font-black uppercase text-white/40">150 XP</div>
                 </div>
                 <div className="flex flex-col items-center justify-center text-4xl font-black italic text-white/10 uppercase tracking-tighter">VS</div>
                 <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-3xl bg-red-500/10 text-red-500 flex items-center justify-center font-black text-2xl border-2 border-red-500/50">OP</div>
                    <div className="text-[10px] font-black uppercase text-white/40">120 XP</div>
                 </div>
              </div>
              <div className="space-y-8">
                 <h2 className="text-3xl font-black text-white italic">{t('أي من هذه الدوال تستخدم لإضافة عنصر لمصفوفة؟', 'Which of these functions is used to add an item to an array?')}</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['push()', 'pop()', 'shift()', 'slice()'].map((opt, i) => (
                      <button key={i} className="p-6 rounded-2xl border border-white/5 bg-white/5 text-white/60 font-black hover:bg-white/10 transition-all">{opt}</button>
                    ))}
                 </div>
              </div>
              <button onClick={() => setView('rooms-menu')} className="mt-12 text-[10px] font-black uppercase text-white/20 hover:text-white transition-all">{t('انسحاب', 'SURRENDER')}</button>
           </div>
        </motion.div>
      )}
    </motion.div>
  );
};
