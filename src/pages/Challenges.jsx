import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, Users, ArrowRight, Copy, Check, Crown, Clock, Trophy,
  Loader2, XCircle, CheckCircle2, LogIn, Sparkles, Play
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { supabase } from '../supabaseClient';
import { POINTS, recordSoloChallenge, fetchRemainingDailyCap } from '../lib/points';

// أنواع الأسئلة الصالحة للتحدي السريع: كلها ذات خيارات وإجابة واحدة،
// فالمقارنة بين اللاعبين تبقى عادلة والوقت محدود لا يتسع للتوصيل والترتيب.
const CHALLENGE_TYPES = ['multiple-choice', 'true-false', 'code'];
const QUESTION_COUNTS = [10, 20, 30];
const DIFFICULTIES = [
  { id: 'easy', ar: 'سهل', en: 'EASY' },
  { id: 'medium', ar: 'متوسط', en: 'MEDIUM' },
  { id: 'hard', ar: 'صعب', en: 'HARD' },
  { id: 'mixed', ar: 'منوّع', en: 'MIXED' }
];

// الوقت مُنح للجولة كاملة لا لكل سؤال: الجولة سباق، من يجيب أكثر في الوقت المتاح يفوز.
// نفس المعادلة مطبّقة في دالة seconds_per_question بقاعدة البيانات ليتطابق وقت كل اللاعبين.
const secondsPerQuestion = (difficulty) =>
  ({ easy: 15, medium: 20, hard: 30 }[difficulty] ?? 20);

const roundSeconds = (difficulty, count) => secondsPerQuestion(difficulty) * count;

const clock = (secs) => {
  const m = Math.floor(Math.max(0, secs) / 60);
  const s = Math.max(0, secs) % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
};

// مفتاح القسم في جدول الأسئلة هو العنوان الإنجليزي بعد حذف اسم المسار منه
// («Programming Basics» ← «Basics»)، وهو نفس الاشتقاق المطبّق في الصفحة الرئيسية.
const sectionKey = (track, section) =>
  section.title.replace(track.name + ' ', '').trim();

const MIN_Q = 5;
const MAX_Q = 50;

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const initials = (name) =>
  (name || '؟').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('');

// ═════════ بطاقة اللاعب في زاوية الشاشة ═════════
const PlayerSeat = ({ player, color, isMe, isHost, corner, total }) => {
  const pos = {
    0: 'top-4 left-4',
    1: 'top-4 right-4',
    2: 'bottom-4 left-4',
    3: 'bottom-4 right-4'
  }[corner];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`absolute ${pos} z-20 flex items-center gap-3 p-3 pr-4 rounded-3xl backdrop-blur-xl border transition-all`}
      style={{
        backgroundColor: isMe ? `${color}22` : 'rgba(255,255,255,0.04)',
        borderColor: isMe ? color : 'rgba(255,255,255,0.1)'
      }}
    >
      <div className="relative">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm overflow-hidden"
          style={{ backgroundColor: `${color}33`, color }}
        >
          {player.avatar_url
            ? <img src={player.avatar_url} alt="" className="w-full h-full object-cover" />
            : initials(player.name)}
        </div>
        {isHost && (
          <Crown size={14} className="absolute -top-1 -right-1 text-amber-400 fill-amber-400" />
        )}
      </div>
      <div className="min-w-[70px]">
        <p className="text-[11px] font-black text-white truncate max-w-[110px]">{player.name}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-black italic" style={{ color }}>{player.correct_count}</span>
          <span className="text-[9px] font-bold text-white/30">/ {total}</span>
        </div>
      </div>
    </motion.div>
  );
};

export const Challenges = () => {
  const { currentTrack, tracksInfo, language, t, user } = useAppContext();
  const track = currentTrack || tracksInfo['Programming'];
  const trackColor = track.color || '#14b8a6';
  const cardBg = 'bg-white/[0.03] backdrop-blur-md border border-white/10';

  // menu | setup | playing | result | room-menu | room-setup | lobby | room-playing | room-result
  const [view, setView] = useState('menu');
  const [mode, setMode] = useState('solo'); // solo | room

  // إعدادات التحدي
  const [pickedTrack, setPickedTrack] = useState(track);
  const [pickedSection, setPickedSection] = useState(null);
  const [difficulty, setDifficulty] = useState('mixed');
  const [count, setCount] = useState(20);
  const [maxPlayers, setMaxPlayers] = useState(2);

  // مجرى اللعب
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0); // ثوانٍ متبقية من وقت الجولة كاملةً
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [earned, setEarned] = useState(0);
  const [remainingCap, setRemainingCap] = useState(POINTS.DAILY_CHALLENGE_CAP);

  // الرومات
  const [room, setRoom] = useState(null);
  const [players, setPlayers] = useState([]);
  const [joinCode, setJoinCode] = useState('');
  const [copied, setCopied] = useState(false);

  const answeredRef = useRef(false);
  const currentQ = questions[qIndex] || null;
  const isHost = room && user && room.host_id === user.id;

  useEffect(() => { setPickedTrack(track); }, [track]);

  useEffect(() => {
    if (user) fetchRemainingDailyCap(user.id).then(setRemainingCap);
  }, [user, view]);

  // ═════════ سحب الأسئلة ═════════
  const loadQuestions = async (trk, section, diff, howMany) => {
    let query = supabase
      .from('questions')
      .select('id, question, options, correct_answer, explanation, type, code_snippet, difficulty')
      .eq('track_id', trk.id)
      .eq('section_id', sectionKey(trk, section))
      .eq('is_active', true)
      .in('type', CHALLENGE_TYPES)
      .limit(300);

    if (diff !== 'mixed') query = query.eq('difficulty', diff);

    const { data, error: qErr } = await query;
    if (qErr) throw new Error(qErr.message);
    if (!data || data.length < 5) {
      throw new Error(t('لا توجد أسئلة كافية في هذا الاختيار', 'Not enough questions for this selection'));
    }
    return shuffle(data).slice(0, howMany);
  };

  const startSolo = async () => {
    if (!pickedSection) return;
    setLoading(true); setError(null);
    try {
      const qs = await loadQuestions(pickedTrack, pickedSection, difficulty, count);
      setQuestions(qs);
      setQIndex(0); setCorrect(0); setPicked(null); setEarned(0);
      setTimeLeft(roundSeconds(difficulty, qs.length));
      answeredRef.current = false;
      endedRef.current = false;
      correctRef.current = 0;
      setMode('solo');
      setView('playing');
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // ═════════ إنهاء الجولة — عند نفاد الوقت أو انتهاء الأسئلة ═════════
  const endedRef = useRef(false);
  const correctRef = useRef(0);

  const endRound = useCallback(async () => {
    if (endedRef.current) return;
    endedRef.current = true;

    if (mode === 'room' && room) {
      await supabase.rpc('finish_challenge', { p_room: room.id });
      setView('room-result');
    } else {
      const pts = await recordSoloChallenge(
        pickedTrack.id, sectionKey(pickedTrack, pickedSection), difficulty, correctRef.current, questions.length
      );
      setEarned(pts);
      setView('result');
    }
  }, [mode, room, pickedTrack, pickedSection, difficulty, questions.length]);

  // مؤقّت الجولة كاملةً: يمشي بلا توقف حتى لو كان اللاعب يقرأ شرح إجابة
  useEffect(() => {
    if (view !== 'playing' && view !== 'room-playing') return;
    if (timeLeft <= 0) { endRound(); return; }
    const id = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, view, endRound]);

  const handleAnswer = (optionIndex) => {
    if (answeredRef.current || !currentQ || endedRef.current) return;
    answeredRef.current = true;
    setPicked(optionIndex);

    const isRight = optionIndex === currentQ.correct_answer;
    if (isRight) {
      correctRef.current += 1;
      setCorrect(correctRef.current);
    }

    if (mode === 'room' && room) {
      supabase.rpc('submit_challenge_answer', { p_room: room.id, p_correct: isRight });
    }

    // مهلة قصيرة لقراءة التصحيح، ثم السؤال التالي — الوقت الكلي يستمر خلالها
    setTimeout(() => {
      if (endedRef.current) return;
      if (qIndex + 1 >= questions.length) {
        endRound();
      } else {
        setQIndex(i => i + 1);
        setPicked(null);
        answeredRef.current = false;
      }
    }, 1200);
  };

  // ═════════ الرومات ═════════
  const refreshPlayers = useCallback(async (roomId) => {
    const { data: parts } = await supabase
      .from('challenge_participants')
      .select('user_id, correct_count, answered_count, finished, points_awarded')
      .eq('room_id', roomId)
      .order('joined_at');

    if (!parts) return;
    const ids = parts.map(p => p.user_id);
    const { data: profs } = await supabase
      .from('profiles')
      .select('id, full_name, username, avatar_url')
      .in('id', ids);

    const byId = Object.fromEntries((profs || []).map(p => [p.id, p]));
    setPlayers(parts.map(p => ({
      ...p,
      name: byId[p.user_id]?.full_name || byId[p.user_id]?.username || t('لاعب', 'Player'),
      avatar_url: byId[p.user_id]?.avatar_url || null
    })));
  }, [t]);

  // اشتراك مباشر بتغيّرات الغرفة + استطلاع احتياطي كل ثانيتين ونصف
  useEffect(() => {
    if (!room?.id) return;
    refreshPlayers(room.id);

    const channel = supabase
      .channel(`room-${room.id}`)
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'challenge_participants', filter: `room_id=eq.${room.id}` },
        () => refreshPlayers(room.id))
      .on('postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'challenge_rooms', filter: `id=eq.${room.id}` },
        ({ new: updated }) => {
          setRoom(r => ({ ...r, ...updated }));
          if (updated.status === 'playing' && view === 'lobby') beginRoomRound(updated);
        })
      .subscribe();

    const poll = setInterval(() => refreshPlayers(room.id), 2500);
    return () => { supabase.removeChannel(channel); clearInterval(poll); };
  }, [room?.id, view, refreshPlayers]);

  const beginRoomRound = async (roomRow) => {
    setLoading(true);
    try {
      const ids = roomRow.question_ids || [];
      const { data } = await supabase
        .from('questions')
        .select('id, question, options, correct_answer, explanation, type, code_snippet, difficulty')
        .in('id', ids);

      // نحفظ ترتيب الغرفة نفسه لكل اللاعبين
      const byId = Object.fromEntries((data || []).map(q => [q.id, q]));
      const ordered = ids.map(id => byId[id]).filter(Boolean);

      setQuestions(ordered);
      setQIndex(0); setCorrect(0); setPicked(null);
      // الوقت يأتي من الغرفة نفسها ليبدأ كل اللاعبين بنفس الرصيد
      setTimeLeft(roomRow.duration_seconds || roundSeconds(roomRow.difficulty, ordered.length));
      answeredRef.current = false;
      endedRef.current = false;
      correctRef.current = 0;
      setMode('room');
      setView('room-playing');
    } finally {
      setLoading(false);
    }
  };

  const createRoom = async () => {
    if (!pickedSection) return;
    setLoading(true); setError(null);
    try {
      const { data, error: e } = await supabase.rpc('create_challenge_room', {
        p_track: pickedTrack.id,
        p_section: sectionKey(pickedTrack, pickedSection),
        p_difficulty: difficulty,
        p_count: count,
        p_max_players: maxPlayers
      });
      if (e) throw new Error(e.message);
      setRoom(data);
      setView('lobby');
    } catch (e) {
      setError(
        e.message.includes('not enough')
          ? t('لا توجد أسئلة كافية في هذا الاختيار', 'Not enough questions for this selection')
          : e.message
      );
    } finally {
      setLoading(false);
    }
  };

  const joinRoom = async () => {
    if (joinCode.length !== 6) return;
    setLoading(true); setError(null);
    try {
      const { data, error: e } = await supabase.rpc('join_challenge_room', { p_code: joinCode });
      if (e) throw new Error(e.message);
      setRoom(data);
      setPickedTrack(tracksInfo[data.track_id] || track);
      setView('lobby');
    } catch (e) {
      setError(
        e.message.includes('not found') ? t('لا توجد غرفة بهذا الكود', 'No room with this code')
        : e.message.includes('full')    ? t('الغرفة مكتملة', 'Room is full')
        : e.message
      );
    } finally {
      setLoading(false);
    }
  };

  const startRound = async () => {
    setLoading(true);
    const { data, error: e } = await supabase.rpc('start_challenge_room', { p_room: room.id });
    setLoading(false);
    if (!e && data) { setRoom(data); beginRoomRound(data); }
  };

  const copyCode = () => {
    navigator.clipboard?.writeText(room.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const backToMenu = () => {
    setView('menu'); setRoom(null); setPlayers([]); setQuestions([]);
    setPickedSection(null); setJoinCode(''); setError(null);
  };

  // ═════════ شاشة الإعداد (مشتركة بين الفردي والروم) ═════════
  const SetupScreen = ({ isRoom }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto space-y-8">
      <div className={`p-10 rounded-[3rem] ${cardBg} space-y-10`}>
        <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter text-center">
          {isRoom ? t('إنشاء غرفة تحدي', 'CREATE CHALLENGE ROOM') : t('تخصيص التحدي', 'CUSTOMIZE CHALLENGE')}
        </h2>

        {/* المسار */}
        <div className="space-y-4">
          <label className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em] block">{t('المسار', 'TRACK')}</label>
          <div className="flex flex-wrap gap-3">
            {Object.values(tracksInfo).map(tr => (
              <button key={tr.id}
                onClick={() => { setPickedTrack(tr); setPickedSection(null); }}
                className="px-5 py-3 rounded-2xl border text-xs font-black transition-all"
                style={pickedTrack.id === tr.id
                  ? { backgroundColor: tr.color, borderColor: tr.color, color: '#000' }
                  : { backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                {t(tr.name_ar, tr.name)}
              </button>
            ))}
          </div>
        </div>

        {/* القسم */}
        <div className="space-y-4">
          <label className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em] block">{t('القسم', 'SECTION')}</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[240px] overflow-y-auto pr-2">
            {pickedTrack.sections.map((sec, i) => (
              <button key={i} onClick={() => setPickedSection(sec)}
                className={`p-4 rounded-2xl border text-sm font-bold transition-all ${language === 'ar' ? 'text-right' : 'text-left'}`}
                style={pickedSection?.title === sec.title
                  ? { backgroundColor: pickedTrack.color, borderColor: pickedTrack.color, color: '#000' }
                  : { backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                {t(sec.title_ar, sec.title)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* الصعوبة */}
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em] block">{t('الصعوبة', 'DIFFICULTY')}</label>
            <div className="flex flex-wrap gap-3">
              {DIFFICULTIES.map(d => (
                <button key={d.id} onClick={() => setDifficulty(d.id)}
                  className="px-5 py-3 rounded-2xl border text-xs font-black transition-all"
                  style={difficulty === d.id
                    ? { backgroundColor: pickedTrack.color, borderColor: pickedTrack.color, color: '#000' }
                    : { backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                  {t(d.ar, d.en)}
                </button>
              ))}
            </div>
          </div>

          {/* عدد الأسئلة */}
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em] block">
              {t(`عدد الأسئلة (${MIN_Q}–${MAX_Q})`, `QUESTIONS (${MIN_Q}–${MAX_Q})`)}
            </label>
            <div className="flex flex-wrap items-center gap-3">
              {QUESTION_COUNTS.map(c => (
                <button key={c} onClick={() => setCount(c)}
                  className="px-6 py-3 rounded-2xl border text-sm font-black transition-all"
                  style={count === c
                    ? { backgroundColor: pickedTrack.color, borderColor: pickedTrack.color, color: '#000' }
                    : { backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                  {c}
                </button>
              ))}
              {/* كتابة عدد مخصص — يُضبط داخل الحدود عند مغادرة الحقل */}
              <input
                type="number" min={MIN_Q} max={MAX_Q} value={count} dir="ltr"
                onChange={e => setCount(e.target.value === '' ? '' : Number(e.target.value))}
                onBlur={e => {
                  const n = Number(e.target.value);
                  setCount(Number.isFinite(n) ? Math.min(MAX_Q, Math.max(MIN_Q, Math.round(n))) : 20);
                }}
                className="w-24 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-center text-sm font-black text-white outline-none focus:border-white/30"
                placeholder={t('غيره', 'other')}
              />
            </div>
          </div>
        </div>

        {/* عدد اللاعبين — للروم فقط */}
        {isRoom && (
          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase text-white/30 tracking-[0.3em] block">{t('عدد اللاعبين', 'PLAYERS')}</label>
            <div className="flex gap-3">
              {[2, 3, 4].map(n => (
                <button key={n} onClick={() => setMaxPlayers(n)}
                  className="px-8 py-3 rounded-2xl border text-sm font-black transition-all"
                  style={maxPlayers === n
                    ? { backgroundColor: pickedTrack.color, borderColor: pickedTrack.color, color: '#000' }
                    : { backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                  {n}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-6 pt-2">
          <div className="space-y-1">
            <p className="text-[11px] font-black" style={{ color: pickedTrack.color }}>
              {t(`وقت الجولة: ${clock(roundSeconds(difficulty, count || 0))} دقيقة لكل الأسئلة`,
                 `Round time: ${clock(roundSeconds(difficulty, count || 0))} for the whole round`)}
            </p>
            <p className="text-[11px] font-bold text-white/30">
              {t(`كل إجابة صحيحة = ${POINTS.PER_CORRECT} نقطة · متبقٍ لك اليوم ${remainingCap} نقطة`,
                 `${POINTS.PER_CORRECT} pts per correct · ${remainingCap} pts left today`)}
            </p>
          </div>
          <button
            disabled={!pickedSection || loading || !(count >= MIN_Q && count <= MAX_Q)}
            onClick={isRoom ? createRoom : startSolo}
            className="px-12 py-5 rounded-[2rem] font-black uppercase text-sm tracking-widest disabled:opacity-30 flex items-center gap-3"
            style={{ backgroundColor: pickedTrack.color, color: '#000' }}>
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />}
            {isRoom ? t('إنشاء الغرفة', 'CREATE ROOM') : t('ابدأ التحدي', 'START')}
          </button>
        </div>

        {error && <p className="text-red-400 font-bold text-sm text-center">{error}</p>}
      </div>
    </motion.div>
  );

  // ═════════ شاشة السؤال ═════════
  const QuestionScreen = ({ withSeats }) => (
    <div className="relative min-h-[620px]">
      {withSeats && players.map((p, i) => (
        <PlayerSeat key={p.user_id} player={p} corner={i} total={questions.length}
          color={pickedTrack.color} isMe={p.user_id === user?.id} isHost={room?.host_id === p.user_id} />
      ))}

      <div className="max-w-3xl mx-auto pt-24">
        {/* الشريط العلوي */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
            <Clock size={16} style={{ color: timeLeft <= 30 ? '#ef4444' : pickedTrack.color }} />
            <span className="font-black text-lg tabular-nums" dir="ltr"
              style={{ color: timeLeft <= 30 ? '#ef4444' : '#fff' }}>{clock(timeLeft)}</span>
          </div>
          <div className="flex-1 mx-6 h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div className="h-full rounded-full"
              animate={{ width: `${((qIndex) / questions.length) * 100}%` }}
              style={{ backgroundColor: pickedTrack.color }} />
          </div>
          <span className="font-black text-sm text-white/40">{qIndex + 1} / {questions.length}</span>
        </div>

        <motion.div key={qIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className={`p-10 rounded-[3rem] ${cardBg} ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <h3 className="text-2xl font-black text-white mb-6 leading-relaxed">{currentQ?.question}</h3>

          {currentQ?.code_snippet && (
            <pre className="p-6 rounded-2xl bg-black/40 border border-white/10 text-sm text-white/70 mb-6 overflow-x-auto text-left" dir="ltr">
              {currentQ.code_snippet}
            </pre>
          )}

          <div className="space-y-3">
            {(currentQ?.options || []).map((opt, i) => {
              const isRight = i === currentQ.correct_answer;
              const isPicked = picked === i;
              const reveal = picked !== null;
              return (
                <button key={i} onClick={() => handleAnswer(i)} disabled={reveal}
                  className={`w-full p-5 rounded-2xl border font-bold transition-all flex items-center justify-between gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                  style={
                    reveal && isRight ? { backgroundColor: '#22c55e22', borderColor: '#22c55e', color: '#fff' }
                    : reveal && isPicked ? { backgroundColor: '#ef444422', borderColor: '#ef4444', color: '#fff' }
                    : { backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }
                  }>
                  <span>{opt}</span>
                  {reveal && isRight && <CheckCircle2 size={20} className="text-green-400 shrink-0" />}
                  {reveal && isPicked && !isRight && <XCircle size={20} className="text-red-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {picked !== null && currentQ?.explanation && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 p-5 rounded-2xl bg-white/5 text-sm text-white/50 font-bold leading-relaxed">
                {currentQ.explanation}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {!withSeats && (
          <p className="text-center mt-6 font-black text-sm" style={{ color: pickedTrack.color }}>
            {t(`إجاباتك الصحيحة: ${correct}`, `Correct: ${correct}`)}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="pt-32 px-10 pb-20 max-w-7xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>

      {view !== 'menu' && view !== 'playing' && view !== 'room-playing' && (
        <button onClick={backToMenu}
          className="mb-8 flex items-center gap-2 font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all"
          style={{ color: trackColor }}>
          {language === 'ar' ? <ArrowRight size={14} /> : <ArrowRight size={14} className="rotate-180" />}
          {t('العودة', 'BACK')}
        </button>
      )}

      {/* ── القائمة ── */}
      {view === 'menu' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { id: 'setup', icon: Zap, ar: 'تحدي نفسي', en: 'SELF CHALLENGE',
              dAr: 'اختر المسار والقسم والصعوبة وعدد الأسئلة، وتنافس مع نفسك على أعلى نتيجة.',
              dEn: 'Pick track, section, difficulty and question count, and beat your own score.' },
            { id: 'room-menu', icon: Users, ar: 'تحدي أصدقاء', en: 'CHALLENGE FRIENDS',
              dAr: 'أنشئ غرفة واحصل على كود، أعطه أصدقاءك حتى أربعة لاعبين، وابدأوا معاً.',
              dEn: 'Create a room, share the code with up to four players, and start together.' }
          ].map(card => (
            <motion.div key={card.id} whileHover={{ y: -10 }} onClick={() => setView(card.id)}
              className={`p-12 rounded-[4rem] ${cardBg} cursor-pointer flex flex-col justify-between h-[480px] border-b-8 group ${language === 'ar' ? 'text-right' : 'text-left'}`}
              style={{ borderBottomColor: trackColor }}>
              <div className="p-8 rounded-[2.5rem] bg-white/5 w-fit" style={{ color: trackColor }}>
                <card.icon size={48} />
              </div>
              <div>
                <h2 className="text-4xl font-black italic text-white mb-4 uppercase tracking-tighter">{t(card.ar, card.en)}</h2>
                <p className="text-white/40 font-bold leading-relaxed text-lg">{t(card.dAr, card.dEn)}</p>
              </div>
              <div className="w-full py-6 rounded-[2rem] font-black uppercase text-sm tracking-widest text-center"
                style={{ backgroundColor: trackColor, color: '#000' }}>
                {t('ابدأ', 'START')}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {view === 'setup' && <SetupScreen isRoom={false} />}
      {view === 'room-setup' && <SetupScreen isRoom={true} />}

      {/* ── قائمة الرومات ── */}
      {view === 'room-menu' && (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -8 }} onClick={() => setView('room-setup')}
            className={`p-10 rounded-[3rem] ${cardBg} cursor-pointer h-[340px] flex flex-col justify-between`}>
            <Sparkles size={40} style={{ color: trackColor }} />
            <div>
              <h3 className="text-2xl font-black italic text-white uppercase mb-2">{t('إنشاء غرفة', 'CREATE ROOM')}</h3>
              <p className="text-white/40 font-bold text-sm">{t('أنت المضيف — تختار الإعدادات وتبدأ الجولة.', 'You host — pick settings and start the round.')}</p>
            </div>
            <div className="py-4 rounded-2xl text-center font-black uppercase text-xs tracking-widest"
              style={{ backgroundColor: trackColor, color: '#000' }}>{t('إنشاء', 'CREATE')}</div>
          </motion.div>

          <div className={`p-10 rounded-[3rem] ${cardBg} h-[340px] flex flex-col justify-between`}>
            <LogIn size={40} style={{ color: trackColor }} />
            <div>
              <h3 className="text-2xl font-black italic text-white uppercase mb-2">{t('دخول بكود', 'JOIN WITH CODE')}</h3>
              <p className="text-white/40 font-bold text-sm mb-4">{t('أدخل الكود المكوّن من ٦ أرقام.', 'Enter the 6-digit code.')}</p>
              <input value={joinCode} onChange={e => setJoinCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000" dir="ltr" maxLength={6}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-center text-2xl font-black tracking-[0.4em] text-white outline-none focus:border-white/30" />
            </div>
            <button onClick={joinRoom} disabled={joinCode.length !== 6 || loading}
              className="py-4 rounded-2xl font-black uppercase text-xs tracking-widest disabled:opacity-30"
              style={{ backgroundColor: trackColor, color: '#000' }}>
              {loading ? t('جارٍ الدخول…', 'JOINING…') : t('دخول', 'JOIN')}
            </button>
          </div>
          {error && <p className="md:col-span-2 text-red-400 font-bold text-center">{error}</p>}
        </div>
      )}

      {/* ── غرفة الانتظار ── */}
      {view === 'lobby' && room && (
        <div className="max-w-4xl mx-auto space-y-10">
          <div className={`p-12 rounded-[3rem] ${cardBg} text-center relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10"
              style={{ background: `linear-gradient(to bottom right, ${pickedTrack.color}, transparent)` }} />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-4">{t('كود الغرفة', 'ROOM CODE')}</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl font-black tracking-[0.3em] text-white" dir="ltr">{room.code}</span>
              <button onClick={copyCode} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="text-white/50" />}
              </button>
            </div>
            <p className="text-white/40 font-bold text-sm">
              {t(`${room.question_count} سؤال · ${DIFFICULTIES.find(d => d.id === room.difficulty)?.ar} · وقت الجولة ${clock(room.duration_seconds || 0)} · ${players.length}/${room.max_players} لاعبين`,
                 `${room.question_count} questions · ${room.difficulty} · ${clock(room.duration_seconds || 0)} round · ${players.length}/${room.max_players} players`)}
            </p>
            <p className="text-[11px] font-bold text-white/25 mt-3">
              {t('الكود صالح لهذه الغرفة وحدها، ولا يُعاد استعماله لغرفة أخرى إلا بعد عشر دقائق من انتهائها.',
                 'This code belongs to this room only, and is not reused for another room until ten minutes after it ends.')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: room.max_players }).map((_, i) => {
              const p = players[i];
              return (
                <div key={i} className={`p-6 rounded-3xl border text-center transition-all ${p ? '' : 'border-dashed'}`}
                  style={{
                    backgroundColor: p ? `${pickedTrack.color}11` : 'rgba(255,255,255,0.02)',
                    borderColor: p ? pickedTrack.color : 'rgba(255,255,255,0.1)'
                  }}>
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center font-black mb-3 overflow-hidden"
                    style={{ backgroundColor: p ? `${pickedTrack.color}33` : 'rgba(255,255,255,0.05)', color: pickedTrack.color }}>
                    {p ? (p.avatar_url ? <img src={p.avatar_url} alt="" className="w-full h-full object-cover" /> : initials(p.name)) : '—'}
                  </div>
                  <p className="text-xs font-black text-white truncate">
                    {p ? p.name : t('بانتظار لاعب', 'Waiting…')}
                  </p>
                  {p && room.host_id === p.user_id && (
                    <p className="text-[9px] font-black uppercase tracking-widest text-amber-400 mt-1">{t('المضيف', 'HOST')}</p>
                  )}
                </div>
              );
            })}
          </div>

          {isHost ? (
            <button onClick={startRound} disabled={players.length < 2 || loading}
              className="w-full py-6 rounded-[2rem] font-black uppercase text-sm tracking-widest disabled:opacity-30 flex items-center justify-center gap-3"
              style={{ backgroundColor: pickedTrack.color, color: '#000' }}>
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />}
              {players.length < 2 ? t('بانتظار لاعب آخر على الأقل', 'WAITING FOR ONE MORE PLAYER') : t('ابدأ الجولة', 'START ROUND')}
            </button>
          ) : (
            <p className="text-center py-6 font-black uppercase text-xs tracking-widest text-white/40">
              {t('بانتظار المضيف ليبدأ الجولة…', 'WAITING FOR HOST TO START…')}
            </p>
          )}
        </div>
      )}

      {view === 'playing' && currentQ && <QuestionScreen withSeats={false} />}
      {view === 'room-playing' && currentQ && <QuestionScreen withSeats={true} />}

      {/* ── نتيجة التحدي الفردي ── */}
      {view === 'result' && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className={`max-w-2xl mx-auto p-16 rounded-[4rem] ${cardBg} text-center space-y-8`}>
          <Trophy size={64} className="mx-auto" style={{ color: pickedTrack.color }} />
          <div>
            <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter mb-3">{t('انتهى التحدي', 'CHALLENGE OVER')}</h2>
            <p className="text-white/40 font-bold">
              {t(`أجبت ${correct} من ${questions.length} إجابة صحيحة`, `${correct} of ${questions.length} correct`)}
            </p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">{t('النقاط المضافة لحسابك', 'POINTS ADDED')}</p>
            <p className="text-6xl font-black italic" style={{ color: pickedTrack.color }}>+{earned}</p>
            {earned < correct * POINTS.PER_CORRECT && (
              <p className="text-[11px] font-bold text-amber-400/70 mt-3">
                {t('بلغت السقف اليومي للنقاط — بقية إجاباتك صحيحة لكنها لم تُحتسب.',
                   'Daily points cap reached — the rest of your correct answers were not counted.')}
              </p>
            )}
          </div>
          <div className="flex gap-4">
            <button onClick={() => setView('setup')}
              className="flex-1 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest"
              style={{ backgroundColor: pickedTrack.color, color: '#000' }}>{t('تحدٍ جديد', 'NEW CHALLENGE')}</button>
            <button onClick={backToMenu}
              className="flex-1 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest bg-white/5 border border-white/10 text-white/60">
              {t('القائمة', 'MENU')}
            </button>
          </div>
        </motion.div>
      )}

      {/* ── نتيجة الروم ── */}
      {view === 'room-result' && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto space-y-8">
          <div className={`p-12 rounded-[4rem] ${cardBg} text-center`}>
            <Trophy size={56} className="mx-auto mb-6" style={{ color: pickedTrack.color }} />
            <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-2">{t('النتيجة النهائية', 'FINAL RESULT')}</h2>
            <p className="text-white/30 font-bold text-xs">
              {players.some(p => !p.finished)
                ? t('بانتظار بقية اللاعبين لاحتساب النقاط…', 'Waiting for other players before points are awarded…')
                : t('النقاط أُضيفت لحسابات اللاعبين', 'Points added to players’ accounts')}
            </p>
          </div>

          <div className="space-y-3">
            {[...players].sort((a, b) => b.correct_count - a.correct_count).map((p, i) => (
              <motion.div key={p.user_id} layout
                className={`flex items-center gap-4 p-5 rounded-3xl border ${p.user_id === user?.id ? '' : 'border-white/10'}`}
                style={{
                  backgroundColor: i === 0 ? `${pickedTrack.color}18` : 'rgba(255,255,255,0.03)',
                  borderColor: p.user_id === user?.id ? pickedTrack.color : 'rgba(255,255,255,0.1)'
                }}>
                <span className="text-2xl font-black italic w-10" style={{ color: i === 0 ? pickedTrack.color : 'rgba(255,255,255,0.2)' }}>
                  {i + 1}
                </span>
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-xs overflow-hidden"
                  style={{ backgroundColor: `${pickedTrack.color}33`, color: pickedTrack.color }}>
                  {p.avatar_url ? <img src={p.avatar_url} alt="" className="w-full h-full object-cover" /> : initials(p.name)}
                </div>
                <div className="flex-1">
                  <p className="font-black text-white text-sm">{p.name}</p>
                  <p className="text-[11px] font-bold text-white/30">
                    {t(`${p.correct_count} إجابة صحيحة`, `${p.correct_count} correct`)}
                  </p>
                </div>
                {i === 0 && <Crown size={20} className="text-amber-400 fill-amber-400" />}
                {p.points_awarded > 0 && (
                  <span className="font-black text-lg" style={{ color: pickedTrack.color }}>+{p.points_awarded}</span>
                )}
              </motion.div>
            ))}
          </div>

          <button onClick={backToMenu}
            className="w-full py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest"
            style={{ backgroundColor: pickedTrack.color, color: '#000' }}>
            {t('العودة للقائمة', 'BACK TO MENU')}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};
