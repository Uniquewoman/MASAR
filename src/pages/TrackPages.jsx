import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Clock, AlertTriangle, ArrowRight, Lock, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { supabase } from '../supabaseClient';

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
  const {
    currentTrack,
    tracksInfo,
    addXP,
    userStats,
    language,
    t,
    loadUnlockedLevel,
    saveUnlockedLevel
  } = useAppContext();
 // تأكدي أننا نعتمد على المسار النشط فقط
const track = currentTrack;

// ملاحظة: فحص وجود المسار موجود بعد كل الـ hooks (قبل الـ return مباشرة)
// لأن قواعد React تمنع أي return قبل استدعاء الـ hooks.
  const trackColor = track?.color || '#14b8a6';

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

const [loading, setLoading] = useState(false);
const [currentQ, setCurrentQ] = useState(null);
const [sessionQuestions, setSessionQuestions] = useState([]);

// عدد الإجابات الصحيحة المطلوبة لعبور المستوى
const NEEDED_CORRECT = 30;
const MAX_MISTAKES = 6;
// نسحب 36 = 30 صحيحة + 6 أخطاء، حتى لو استهلك كل فرصه يبقى عنده أسئلة يكمل فيها
const PULL_SIZE = NEEDED_CORRECT + MAX_MISTAKES;

// لو بنك المستوى أصغر من 30، نخفّض المطلوب لحجم البنك حتى يبقى المستوى قابلاً للعبور
const [targetCorrect, setTargetCorrect] = useState(NEEDED_CORRECT);
// دورة الأسئلة: بعد ما يخلص كل أسئلة المستوى تبدأ دورة جديدة مخلوطة
const [cycle, setCycle] = useState(1);

// حالة أسئلة التوصيل (ماتش)
const [matchLinks, setMatchLinks] = useState({});   // فهرس اليمين -> فهرس اليسار المخلوط
const [activeLeft, setActiveLeft] = useState(null); // العنصر المختار حالياً
const [shuffledRight, setShuffledRight] = useState([]);
// حالة أسئلة التيرمنال
const [termInput, setTermInput] = useState('');
// حالة أسئلة الاختيار المتعدد (اختر كل ما ينطبق)
const [multiPicked, setMultiPicked] = useState([]);
// حالة أسئلة الترتيب — عناصر مخلوطة يعيد اليوزر ترتيبها
const [orderItems, setOrderItems] = useState([]);
const [dragIndex, setDragIndex] = useState(null);
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10";

  const levels = Array.from({ length: 5 }, (_, i) => i + 1);
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  useEffect(() => {
    const loadLevel = async () => {
      if (!track || !section) return;

      const level = await loadUnlockedLevel(
        track.id,
        section.title
      );
      setUnlockedLevel(level);
    };

    loadLevel();

  }, [track, section, loadUnlockedLevel]);


  useEffect(() => {
    if (!isLevelSuccess) return;
    if (!track || !section) return;

    const unlockNextLevel = async () => {
      const nextLevel = selectedLevel + 1;

      if (nextLevel > unlockedLevel) {
        setUnlockedLevel(nextLevel);

        await saveUnlockedLevel(
          track.id,
          section.title,
          nextLevel
        );
      }
    };

    unlockNextLevel();

  }, [
    isLevelSuccess,
    selectedLevel,
    unlockedLevel,
    track,
    section,
    saveUnlockedLevel
  ]);

const loadQuestions = async (level) => {
  setLoading(true);

  // 1. استخدام القيم القادمة من الـ Props والـ Context مباشرة
  // هذه القيم هي التي تحدد المسار والقسم الذي دخل فيه المستخدم
  const currentTrackId = track.id; 
  const currentSectionId = section.title; 

  console.log("🔍 جاري جلب الأسئلة بناءً على:", { 
    Track: currentTrackId, 
    Section: currentSectionId, 
    Level: level 
  });

  // 2. جلب بنك المستوى كامل بترتيب الأسئلة الأصلي
  const { data: pool, error } = await supabase
    .from("questions")
    .select("*")
    .eq("track_id", currentTrackId)    // المسار الحالي
    .eq("section_id", currentSectionId) // القسم الحالي
    .eq("level", Number(level))         // المستوى الحالي
    .order("question_order", { ascending: true });

  if (error) {
    console.error("❌ خطأ Supabase:", error.message);
    setLoading(false);
    return;
  }

  if (!pool || pool.length === 0) {
    console.warn("⚠️ لا توجد أسئلة بهذا المسار والقسم والمستوى:", { currentTrackId, currentSectionId, level });
    alert(`عذراً، لم يتم العثور على أسئلة للمسار: ${currentTrackId}، القسم: ${currentSectionId}، المستوى: ${level}`);
    setLoading(false);
    return;
  }

  // 3. المطلوب لعبور المستوى (يقلّ لو البنك أصغر من 30)
  const need = Math.min(NEEDED_CORRECT, pool.length);
  setTargetCorrect(need);

  // 4. الأسئلة اللي شافها اليوزر سابقاً في هذا المستوى
  const { data: { user } } = await supabase.auth.getUser();
  let activeCycle = 1;
  let seenIds = [];

  if (user) {
    const { data: history, error: histErr } = await supabase
      .from("user_question_history")
      .select("question_id, cycle")
      .eq("user_id", user.id)
      .eq("track_id", currentTrackId)
      .eq("section_id", currentSectionId)
      .eq("level", Number(level));

    if (histErr) {
      // الجدول غير موجود بعد — نكمل بدون تتبّع بدل ما ينكسر المستوى
      console.warn("⚠️ تعذّر قراءة سجل الأسئلة، سيتم السحب بدون تتبّع:", histErr.message);
    } else if (history?.length) {
      activeCycle = Math.max(...history.map(h => h.cycle));
      seenIds = history.filter(h => h.cycle === activeCycle).map(h => h.question_id);
    }
  }

  // 5. غير المشاهدة في الدورة الحالية
  let remaining = pool.filter(q => !seenIds.includes(q.id));

  // 6. خلصت الدورة؟ نبدأ دورة جديدة بكامل البنك
  if (remaining.length < need) {
    activeCycle += 1;
    remaining = [...pool];
    console.log(`🔄 انتهت أسئلة المستوى — بدء الدورة رقم ${activeCycle}`);
  }
  setCycle(activeCycle);

  // 7. خلط عشوائي من أول محاولة، حتى تتوزّع أنواع الأسئلة والمواضيع على الجلسة
  //    بدل ما تتجمّع الأسئلة القديمة أولاً والجديدة في الآخر
  const shuffled = [...remaining];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const session = shuffled.slice(0, PULL_SIZE);
  console.log(`✅ بنك المستوى ${pool.length} سؤال · متبقٍ ${remaining.length} · سُحب ${session.length} · المطلوب ${need} صحيحة · دورة ${activeCycle}`);

  setSessionQuestions(session);
  setCurrentQ(session[0]);
  setQuestionNum(0);
  setTimeLeft(session[0]?.time_limit || 60);
  setLoading(false);
  setView('playing');
};

// تسجيل أن اليوزر شاف السؤال، حتى لا يتكرر عليه قبل ما تخلص أسئلة المستوى
const recordSeen = async (question) => {
  if (!question) return;
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("user_question_history").insert({
      user_id: user.id,
      question_id: question.id,
      track_id: track.id,
      section_id: section.title,
      level: Number(selectedLevel),
      cycle,
    });
  } catch (e) {
    console.warn("⚠️ تعذّر تسجيل السؤال في السجل:", e?.message);
  }
};
// تعريف دالة (مرفوع) وليس ثابتاً، لأن مؤقّت السؤال أعلاه يستدعيها قبل هذا السطر
// اختيار من متعدد / صح وخطأ / سيناريو / كود / صورة
function handleAnswer(idx) {
  if (selectedAns !== null || isLevelFailed || isLevelSuccess) return;
  setSelectedAns(idx);
  scoreAnswer(idx === currentQ?.correct_answer);
}

// أسئلة التوصيل — تُحتسب صحيحة فقط لو كل الأزواج صح
function submitMatching() {
  if (selectedAns !== null || isLevelFailed || isLevelSuccess) return;
  const total = currentQ?.pairs?.length || 0;
  if (Object.keys(matchLinks).length < total) return;
  const allCorrect = Object.entries(matchLinks)
    .every(([leftIdx, rightIdx]) => shuffledRight[rightIdx]?.originalIndex === Number(leftIdx));
  setSelectedAns('matching');
  scoreAnswer(allCorrect);
}

// أسئلة التيرمنال — يكتب الأمر بنفسه
function submitTerminal() {
  if (selectedAns !== null || isLevelFailed || isLevelSuccess) return;
  const typed = termInput.trim();
  if (!typed) return;
  const normalize = (s) => String(s).trim().toLowerCase().replace(/\s+/g, ' ');
  const accepted = Array.isArray(currentQ?.expected_answers) ? currentQ.expected_answers : [];
  const correct = accepted.some(a => normalize(a) === normalize(typed));
  setSelectedAns('terminal');
  scoreAnswer(correct);
}

// اختر كل ما ينطبق — صحيح فقط لو اختار كل الصحيحة ولا شيء غيرها
function submitMultiSelect() {
  if (selectedAns !== null || isLevelFailed || isLevelSuccess) return;
  if (multiPicked.length === 0) return;
  const expected = Array.isArray(currentQ?.correct_answers) ? currentQ.correct_answers : [];
  const same = expected.length === multiPicked.length
    && expected.every(i => multiPicked.includes(i));
  setSelectedAns('multi');
  scoreAnswer(same);
}

// ترتيب الخطوات — options مخزّنة بالترتيب الصحيح، والمقارنة على الترتيب النهائي
function submitOrdering() {
  if (selectedAns !== null || isLevelFailed || isLevelSuccess) return;
  const correct = orderItems.every((item, i) => item.originalIndex === i);
  setSelectedAns('ordering');
  scoreAnswer(correct);
}

// تحريك عنصر لأعلى أو لأسفل في قائمة الترتيب
const moveItem = (from, to) => {
  if (selectedAns !== null) return;
  if (to < 0 || to >= orderItems.length) return;
  setOrderItems(prev => {
    const next = [...prev];
    [next[from], next[to]] = [next[to], next[from]];
    return next;
  });
};

// السحب والإفلات لإعادة الترتيب
const onDragStart = (e, index) => {
  if (selectedAns !== null) return;
  setDragIndex(index);
  e.dataTransfer.effectAllowed = 'move';
};

const onDragOver = (e, index) => {
  if (selectedAns !== null || dragIndex === null) return;
  e.preventDefault();
  if (index === dragIndex) return;
  setOrderItems(prev => {
    const next = [...prev];
    const [moved] = next.splice(dragIndex, 1);
    next.splice(index, 0, moved);
    return next;
  });
  setDragIndex(index);
};

// منطق الاحتساب المشترك لكل الأنواع
function scoreAnswer(correct) {
  setIsCorrect(correct);

  recordSeen(currentQ);

  if (correct) {
    const newCorrect = correctCount + 1;
    setCorrectCount(newCorrect);

    setTimeout(() => {
      // العبور يتحقق بعدد الإجابات الصحيحة، لا بعدد الأسئلة المعروضة
      if (newCorrect >= targetCorrect) {
        setIsLevelSuccess(true);
      } else {
        nextQuestion();
      }
    }, 500);

  } else {
    setMistakes(prev => {
      const newMistakes = prev + 1;

      setTimeout(() => {
        showHint(currentQ);

        if (newMistakes >= MAX_MISTAKES) {
          setIsLevelFailed(true);

          setTimeout(() => {
            setView('map');
            
          }, 3000);

        } else {
          nextQuestion();
        }
      }, 2000);

      return newMistakes;
    });
  }
}
const [hint, setHint] = useState(null);

// مؤقّت السؤال — موضوع بعد handleAnswer لأنه يستدعيها عند انتهاء الوقت
useEffect(() => {
  if (view !== 'playing' || selectedAns !== null || isLevelFailed || isLevelSuccess) return;
  const timer = setInterval(() => {
    setTimeLeft(prev => {
      if (prev <= 1) { clearInterval(timer); handleAnswer(-1); return 0; }
      return prev - 1;
    });
  }, 1000);
  return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [view, questionNum, selectedAns, isLevelFailed, isLevelSuccess]);

// إعادة تهيئة حالة الماتش والتيرمنال مع كل سؤال جديد
useEffect(() => {
  setMatchLinks({});
  setActiveLeft(null);
  setTermInput('');
  setMultiPicked([]);

  // الترتيب: نخلط العناصر مع الاحتفاظ بموضعها الصحيح للمقارنة لاحقاً
  if (currentQ?.type === 'ordering' && Array.isArray(currentQ.options)) {
    const items = currentQ.options.map((text, i) => ({ text, originalIndex: i }));
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    // نتفادى أن يبدأ السؤال وهو مرتّب أصلاً
    if (items.every((it, i) => it.originalIndex === i) && items.length > 1) {
      [items[0], items[1]] = [items[1], items[0]];
    }
    setOrderItems(items);
  } else {
    setOrderItems([]);
  }

  if (currentQ?.type === 'matching' && Array.isArray(currentQ.pairs)) {
    const rights = currentQ.pairs.map((p, i) => ({ ...p, originalIndex: i }));
    setShuffledRight([...rights].sort(() => Math.random() - 0.5));
  } else {
    setShuffledRight([]);
  }
}, [currentQ]);

// ربط عنصر من اليمين بعنصر من اليسار
const linkRight = (rightIdx) => {
  if (selectedAns !== null || activeLeft === null) return;
  setMatchLinks(prev => {
    const next = {};
    // نلغي أي ربط سابق لنفس الطرفين حتى يبقى كل عنصر بزوج واحد
    Object.entries(prev).forEach(([l, r]) => {
      if (Number(l) !== activeLeft && r !== rightIdx) next[l] = r;
    });
    next[activeLeft] = rightIdx;
    return next;
  });
  setActiveLeft(null);
};

const showHint = (q) => {
  setHint(q.explanation);
};

const nextQuestion = () => {
  const nextIndex = questionNum + 1;
setHint(null);
  // خلصت أسئلة الجلسة قبل ما يوصل العدد المطلوب من الإجابات الصحيحة
  if (nextIndex >= sessionQuestions.length) {
    if (correctCount >= targetCorrect) setIsLevelSuccess(true);
    else setIsLevelFailed(true);
    return;
  }

  const nextQ = sessionQuestions[nextIndex];
  setQuestionNum(nextIndex);
  setCurrentQ(nextQ);

  setSelectedAns(null);
  setIsCorrect(null);
  // كل سؤال يقدر يحدد وقته الخاص — الأنواع الأصعب تاخذ وقت أطول
  setTimeLeft(nextQ?.time_limit || 60);
};
const startLevel = (lvl) => {
  setSelectedLevel(lvl);
  setView('playing');

  setMistakes(0);
  setCorrectCount(0);
  setQuestionNum(0);

  setSelectedAns(null);
  setIsCorrect(null);

  setIsLevelFailed(false);
  setIsLevelSuccess(false);

setAttempt(prev => prev + 1);
setTimeLeft(60);

loadQuestions(lvl);
};
  // فحص المسار هنا — بعد كل الـ hooks، حتى لا نخالف قواعد React
  if (!track) {
    return <div className="p-10 text-center text-white">لم يتم اختيار مسار صحيح. الرجاء العودة للقائمة الرئيسية.</div>;
  }

  if (view === 'map') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-10 max-w-5xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <button onClick={() => window.dispatchEvent(new CustomEvent('changeView', { detail: 'dashboard' }))} className="mb-8 flex items-center gap-2 text-white/40 font-black uppercase text-[10px] tracking-widest hover:text-white transition-all">
          {language === 'ar' ? <ArrowRight size={14} /> : <ArrowRight size={14} className="rotate-180" />} {t('العودة للوحة التحكم', 'BACK TO DASHBOARD')}
        </button>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2">{t(section?.title_ar || section?.title, section?.title) || t('المستويات', 'LEVELS')}</h2>
          <p className="text-white/40 font-bold uppercase tracking-widest text-xs">{t('أجب 30 إجابة صحيحة لفتح المستوى التالي', 'ANSWER 30 QUESTIONS CORRECTLY TO UNLOCK THE NEXT LEVEL')}</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">

 {levels.map((lvl) => (
  <motion.div
    key={lvl}
    whileHover={lvl <= unlockedLevel ? { scale: 1.1, rotate: 5 } : {}}
    onClick={() => {
      if (lvl <= unlockedLevel) {
        startLevel(lvl);
      }
    }}
    className="aspect-square rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all h-[150px]"
    style={
      lvl <= unlockedLevel
        ? {
            backgroundColor: trackColor,
            color: '#000',
            boxShadow: `0 20px 40px ${trackColor}30`
          }
        : {
            backgroundColor: 'rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.05)'
          }
    }
  >
    <span className="text-3xl font-black italic">{lvl}</span>

    <span className="text-[10px] font-black uppercase mt-2">
      {lvl <= unlockedLevel
        ? t('مستوى', 'LEVEL')
        : t('مقفل', 'LOCKED')}
    </span>
  </motion.div>
))}

</div>
</motion.div>
    );if (!currentQ) {
  return (
    <div className="text-white flex items-center justify-center h-screen">
      Loading Questions...
    </div>
  );
}
  }

  return (
    <div className="pt-32 px-10 pb-20 flex items-center justify-center min-h-[90vh]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <AnimatePresence mode="wait">
        {isLevelFailed ? (
          <motion.div key="fail" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`p-12 rounded-[4rem] ${cardBg} text-center max-w-lg shadow-2xl border-t-8 border-red-500`}>
            <XCircle size={80} className="text-red-500 mx-auto mb-8" />
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-4">{t('لقد فشلت!', 'YOU FAILED!')}</h2>
           
            <p className="text-white/40 font-bold mb-10 leading-relaxed">{t('لقد ارتكبت 6 أخطاء. جاري إعادتك للمستويات...', 'You made 6 mistakes. Returning to levels...')}</p>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 3 }} className="h-full bg-red-500" />
            </div>
          </motion.div>
        ) : isLevelSuccess ? (
          <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`p-12 rounded-[4rem] ${cardBg} text-center max-w-lg border-t-8 shadow-2xl`} style={{ borderTopColor: trackColor }}>
            <CheckCircle2 size={80} style={{ color: trackColor }} className="mx-auto mb-8" />
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-4">{t('أحسنت صنعاً!', 'WELL DONE!')}</h2>
            <p className="text-white/40 font-bold mb-10 leading-relaxed">{t('أحسنت! أجبت على العدد المطلوب بشكل صحيح. تم فتح المستوى التالي ومزامنة نقاط الخبرة.', 'Well done! You answered enough questions correctly. Next level unlocked and XP synced.')}</p>
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
                  <span className="font-mono font-black text-white">00:{timeLeft < 10 ? "0" + timeLeft : timeLeft}</span>
                </div>
                <div className="px-6 py-2 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                  <Trophy size={18} className="text-yellow-500" />
                  <span className="font-mono font-black text-white">{correctCount}/{targetCorrect}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest opacity-40" style={{ color: trackColor }}>
                <AlertTriangle size={18} /> {t('الأخطاء', 'MISTAKES')}: {mistakes}/6
              </div>
            </div>

            <div className="text-center mb-10">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 uppercase italic" style={{ color: trackColor }}>{t('وحدة', 'UNIT')} {selectedLevel} {t('مهمة', 'MISSION')}</div>
              <h2 className="text-3xl font-black text-white leading-tight mb-6">
                {currentQ?.question }
              </h2>
              {hint && (
  <div className="mt-4 p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm font-bold">
    💡 {hint}
  </div>
)}
              {/* صورة السؤال */}
              {currentQ?.image_url && (
                <div className="my-6 flex justify-center">
                  <img
                    src={currentQ.image_url}
                    alt={t('صورة توضيحية للسؤال', 'Question illustration')}
                    loading="lazy"
                    className="max-h-72 w-auto max-w-full rounded-3xl border border-white/10 shadow-xl object-contain bg-black/30"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              )}

              {/* Custom Code Snippet Renderer */}
              {currentQ?.code_snippet && (
                <pre className="my-6 p-6 bg-black/60 rounded-3xl text-left font-mono text-xs border border-white/10 text-teal-400 overflow-x-auto max-w-2xl mx-auto shadow-inner">
                  <code>{currentQ?.code_snippet}</code>
                </pre>
              )}

              {/* Memory Box Diagram */}
              {currentQ?.visual_type === 'memory' && (
                <div className="my-6 flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl max-w-md mx-auto shadow-xl">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">RAM Simulation • محاكاة الذاكرة</span>
                  <div className="flex gap-2">
                    <div className="p-4 bg-teal-900/30 border border-teal-500/30 rounded-2xl text-center">
                      <div className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Address</div>
                      <div className="font-mono text-teal-400 font-bold">{currentQ?.visualData?.address || '0x7ffd'}</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center min-w-[100px]">
                      <div className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Variable</div>
                      <div className="font-mono text-white font-black">{currentQ?.visualData?.name || 'x'}</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center min-w-[100px]">
                      <div className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Value</div>
                      <div className="font-mono text-amber-400 font-black">{currentQ?.visualData?.value || '10'}</div>
                    </div>
                  </div>
                </div>
              )}

             {/* List Elements Diagram */}
{currentQ?.visual_type === 'list' && (
  <div className="my-6 flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl max-w-xl mx-auto overflow-x-auto shadow-xl">
    
    <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">
      List Elements • عناصر المصفوفة
    </span>

    <div className="flex gap-2">
      {(currentQ?.visual_data?.items || []).map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          
          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center font-mono text-white font-black shadow-lg">
            {item}
          </div>

          <div className="text-xs font-mono font-bold mt-2 text-teal-400">
            [ {idx} ]
          </div>

        </div>
      ))}
    </div>

  </div>
)}
{currentQ?.visual_type === 'list' && (
  <div className="my-6 flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl max-w-xl mx-auto overflow-x-auto shadow-xl">

    <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">
      List Elements • عناصر المصفوفة
    </span>

    <div className="flex gap-2">
      {(currentQ?.visual_data?.items || []).map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">

          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center font-mono text-white font-black shadow-lg">
            {item}
          </div>

          <div className="text-xs font-mono font-bold mt-2 text-teal-400">
            [ {idx} ]
          </div>

        </div>
      ))}
    </div>

  </div>
)}
            </div>

            {/* ===== سؤال توصيل (ماتش) ===== */}
            {currentQ?.type === 'matching' && Array.isArray(currentQ?.pairs) && (() => {
              const answered = selectedAns !== null;
              const linkedCount = Object.keys(matchLinks).length;
              const total = currentQ.pairs.length;
              const rightOfLeft = (l) => (l in matchLinks ? matchLinks[l] : null);
              const leftOfRight = (r) => {
                const found = Object.entries(matchLinks).find(([, v]) => v === r);
                return found ? Number(found[0]) : null;
              };
              const pairColor = (n) => ['#f59e0b', '#3b82f6', '#a855f7', '#10b981', '#ec4899', '#06b6d4'][n % 6];

              return (
                <div>
                  <p className="text-center text-white/40 font-bold text-xs mb-6">
                    {answered
                      ? t('راجع إجاباتك', 'Review your answers')
                      : t('اضغط عنصراً من اليمين ثم ما يقابله من اليسار', 'Tap an item on the right, then its match on the left')}
                  </p>

                  <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
                    {/* العمود الثابت */}
                    <div className="flex flex-col gap-3">
                      {currentQ.pairs.map((p, i) => {
                        const linked = rightOfLeft(i);
                        const isActive = activeLeft === i;
                        const ok = answered && shuffledRight[linked]?.originalIndex === i;
                        let cls = 'border-white/10 bg-white/5 text-white/70';
                        if (answered) cls = ok ? 'border-teal-400 bg-teal-400/10 text-white' : 'border-red-500 bg-red-500/10 text-red-300';
                        else if (isActive) cls = 'border-white/60 bg-white/15 text-white';
                        else if (linked !== null) cls = 'border-white/30 bg-white/10 text-white';
                        return (
                          <button
                            key={i}
                            type="button"
                            disabled={answered}
                            onClick={() => setActiveLeft(prev => (prev === i ? null : i))}
                            className={`p-4 md:p-5 rounded-2xl border text-sm md:text-base font-bold transition-all flex items-center justify-between gap-2 ${cls} ${!answered ? 'hover:bg-white/10' : ''}`}
                          >
                            <span className="text-right">{p.left}</span>
                            {linked !== null && (
                              <span
                                className="shrink-0 w-6 h-6 rounded-full text-[11px] font-black flex items-center justify-center text-black"
                                style={{ backgroundColor: pairColor(i) }}
                              >{i + 1}</span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* العمود المخلوط */}
                    <div className="flex flex-col gap-3">
                      {shuffledRight.map((r, ri) => {
                        const owner = leftOfRight(ri);
                        const ok = answered && owner !== null && r.originalIndex === owner;
                        let cls = 'border-white/10 bg-white/5 text-white/70';
                        if (answered) {
                          if (owner === null) cls = 'border-white/10 bg-white/5 text-white/40';
                          else cls = ok ? 'border-teal-400 bg-teal-400/10 text-white' : 'border-red-500 bg-red-500/10 text-red-300';
                        } else if (owner !== null) cls = 'border-white/30 bg-white/10 text-white';
                        return (
                          <button
                            key={ri}
                            type="button"
                            disabled={answered || activeLeft === null}
                            onClick={() => linkRight(ri)}
                            className={`p-4 md:p-5 rounded-2xl border text-sm md:text-base font-bold transition-all flex items-center justify-between gap-2 ${cls} ${!answered && activeLeft !== null ? 'hover:bg-white/10' : ''}`}
                          >
                            {owner !== null && (
                              <span
                                className="shrink-0 w-6 h-6 rounded-full text-[11px] font-black flex items-center justify-center text-black"
                                style={{ backgroundColor: pairColor(owner) }}
                              >{owner + 1}</span>
                            )}
                            <span className="text-right flex-1">{r.right}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {!answered && (
                    <div className="mt-8 flex flex-col items-center gap-3">
                      <span className="text-white/40 font-bold text-xs">
                        {t(`وصّلت ${linkedCount} من ${total}`, `${linkedCount} of ${total} matched`)}
                      </span>
                      <button
                        type="button"
                        onClick={submitMatching}
                        disabled={linkedCount < total}
                        className="px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-sm text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        style={{ backgroundColor: trackColor }}
                      >
                        {t('تحقق', 'CHECK')}
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* ===== سؤال تيرمنال ===== */}
            {currentQ?.type === 'terminal' && (
              <div className="max-w-2xl mx-auto">
                <p className="text-center text-white/40 font-bold text-xs mb-4">
                  {t('اكتب الأمر الصحيح ثم اضغط Enter', 'Type the correct command, then press Enter')}
                </p>
                <div className="rounded-3xl border border-white/10 bg-black/80 p-6 font-mono text-left shadow-inner" dir="ltr">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 text-teal-400 text-sm">
                      {currentQ.prompt_label || 'user@masar:~$'}
                    </span>
                    <input
                      type="text"
                      value={termInput}
                      autoFocus
                      spellCheck="false"
                      autoComplete="off"
                      disabled={selectedAns !== null}
                      onChange={(e) => setTermInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') submitTerminal(); }}
                      className="flex-1 bg-transparent border-none outline-none text-white text-sm caret-teal-400 disabled:opacity-60"
                      placeholder="_"
                    />
                  </div>
                  {selectedAns !== null && (
                    <p className={`mt-4 text-xs ${isCorrect ? 'text-teal-400' : 'text-red-400'}`}>
                      {isCorrect
                        ? '✓ ' + t('أمر صحيح', 'Correct command')
                        : '✗ ' + t('الأمر الصحيح: ', 'Expected: ') + (currentQ?.expected_answers?.[0] || '')}
                    </p>
                  )}
                </div>
                {selectedAns === null && (
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={submitTerminal}
                      disabled={!termInput.trim()}
                      className="px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-sm text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      style={{ backgroundColor: trackColor }}
                    >
                      {t('تنفيذ', 'RUN')}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ===== اختر كل ما ينطبق ===== */}
            {currentQ?.type === 'multi-select' && (() => {
              const answered = selectedAns !== null;
              const expected = Array.isArray(currentQ?.correct_answers) ? currentQ.correct_answers : [];
              return (
                <div className="max-w-3xl mx-auto">
                  <p className="text-center text-white/40 font-bold text-xs mb-6">
                    {t('اختر كل الإجابات الصحيحة — قد تكون أكثر من واحدة', 'Select every correct answer — there may be more than one')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQ?.options?.map((opt, i) => {
                      const picked = multiPicked.includes(i);
                      const shouldBe = expected.includes(i);
                      let cls = 'border-white/10 bg-white/5 text-white/60';
                      if (answered) {
                        if (shouldBe) cls = 'border-teal-400 bg-teal-400/10 text-white';
                        else if (picked) cls = 'border-red-500 bg-red-500/10 text-red-400';
                      } else if (picked) cls = 'border-white/60 bg-white/15 text-white';
                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={answered}
                          onClick={() => setMultiPicked(prev =>
                            prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                          className={`p-6 rounded-2xl border text-base font-bold transition-all flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'} ${cls} ${!answered ? 'hover:bg-white/10' : ''}`}
                        >
                          <span className={`shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center text-xs ${picked ? 'border-white bg-white text-black' : 'border-white/30'}`}>
                            {picked ? '✓' : ''}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                  {!answered && (
                    <div className="mt-8 flex flex-col items-center gap-3">
                      <span className="text-white/40 font-bold text-xs">
                        {t(`اخترت ${multiPicked.length}`, `${multiPicked.length} selected`)}
                      </span>
                      <button
                        type="button"
                        onClick={submitMultiSelect}
                        disabled={multiPicked.length === 0}
                        className="px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-sm text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        style={{ backgroundColor: trackColor }}
                      >
                        {t('تأكيد', 'CONFIRM')}
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* ===== ترتيب الخطوات ===== */}
            {currentQ?.type === 'ordering' && (() => {
              const answered = selectedAns !== null;
              return (
                <div className="max-w-2xl mx-auto">
                  <p className="text-center text-white/40 font-bold text-xs mb-6">
                    {t('اسحب الخطوة لأعلى أو لأسفل حتى يصبح الترتيب صحيحاً', 'Drag each step up or down until the order is right')}
                  </p>
                  <div className="flex flex-col gap-3">
                    {orderItems.map((item, i) => {
                      const ok = answered && item.originalIndex === i;
                      const dragging = dragIndex === i;
                      let cls = 'border-white/10 bg-white/5 text-white/70';
                      if (answered) cls = ok ? 'border-teal-400 bg-teal-400/10 text-white' : 'border-red-500 bg-red-500/10 text-red-300';
                      else if (dragging) cls = 'border-white/60 bg-white/15 text-white';
                      return (
                        <div
                          key={item.originalIndex}
                          draggable={!answered}
                          onDragStart={(e) => onDragStart(e, i)}
                          onDragOver={(e) => onDragOver(e, i)}
                          onDragEnd={() => setDragIndex(null)}
                          onDrop={(e) => { e.preventDefault(); setDragIndex(null); }}
                          className={`p-4 rounded-2xl border flex items-center gap-4 transition-all ${cls} ${!answered ? 'cursor-grab active:cursor-grabbing' : ''} ${dragging ? 'opacity-60' : ''}`}
                        >
                          {!answered && (
                            <span className="shrink-0 text-white/25 text-lg leading-none select-none" aria-hidden="true">⠿</span>
                          )}
                          <span className="shrink-0 w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-black text-sm" style={{ color: trackColor }}>
                            {i + 1}
                          </span>
                          <span className="flex-1 font-bold text-sm md:text-base">{item.text}</span>
                          {!answered && (
                            <span className="shrink-0 flex flex-col gap-1">
                              <button
                                type="button"
                                aria-label={t('تحريك لأعلى', 'Move up')}
                                onClick={() => moveItem(i, i - 1)}
                                disabled={i === 0}
                                className="w-7 h-6 rounded-lg bg-white/10 text-white/70 text-xs font-black disabled:opacity-20 hover:bg-white/20 transition-all"
                              >▲</button>
                              <button
                                type="button"
                                aria-label={t('تحريك لأسفل', 'Move down')}
                                onClick={() => moveItem(i, i + 1)}
                                disabled={i === orderItems.length - 1}
                                className="w-7 h-6 rounded-lg bg-white/10 text-white/70 text-xs font-black disabled:opacity-20 hover:bg-white/20 transition-all"
                              >▼</button>
                            </span>
                          )}
                          {answered && !ok && (
                            <span className="shrink-0 text-[10px] font-black text-white/40">
                              {t(`مكانه ${item.originalIndex + 1}`, `goes to ${item.originalIndex + 1}`)}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {!answered && (
                    <div className="mt-8 flex justify-center">
                      <button
                        type="button"
                        onClick={submitOrdering}
                        className="px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-sm text-black transition-all"
                        style={{ backgroundColor: trackColor }}
                      >
                        {t('تحقق', 'CHECK')}
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* ===== الخيارات (بقية الأنواع) ===== */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${['matching','terminal','multi-select','ordering'].includes(currentQ?.type) ? 'hidden' : ''}`}>
             {currentQ?.options?.map((opt, i) => {
                const isAnswered = selectedAns !== null;
              const isCorrectOpt = i === currentQ?.correct_answer;
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
