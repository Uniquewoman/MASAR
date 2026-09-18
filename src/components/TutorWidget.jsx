import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Loader2, Target, CalendarCheck, BookOpen, Crown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { askTutor, loadTutorHistory } from '../lib/tutorApi';

// ─── عرض Markdown خفيف بلا مكتبة: أكواد ``` · **تمييز** · `كود` · قوائم ───
function renderInline(text, key) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return (
    <span key={key}>
      {parts.map((p, i) => {
        if (p.startsWith('**') && p.endsWith('**')) return <strong key={i} className="text-white">{p.slice(2, -2)}</strong>;
        if (p.startsWith('`') && p.endsWith('`')) return <code key={i} className="px-1 rounded bg-white/10 font-mono text-[12px]" dir="ltr">{p.slice(1, -1)}</code>;
        return p;
      })}
    </span>
  );
}

function Markdown({ text }) {
  const blocks = text.split(/```/);
  return (
    <div className="space-y-2 leading-relaxed">
      {blocks.map((block, bi) => {
        if (bi % 2 === 1) {
          const code = block.replace(/^[a-z]*\n/i, '');
          return <pre key={bi} dir="ltr" className="text-left bg-black/50 border border-white/10 rounded-xl p-3 text-[12px] font-mono overflow-x-auto whitespace-pre">{code}</pre>;
        }
        const lines = block.split('\n');
        const out = []; let list = null;
        const flush = () => { if (list) { out.push(<ul key={'l' + out.length} className="list-disc ps-5 space-y-1">{list}</ul>); list = null; } };
        lines.forEach((ln, li) => {
          const m = ln.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)$/);
          if (m) { (list ??= []).push(<li key={li}>{renderInline(m[1], li)}</li>); return; }
          flush();
          if (ln.trim()) out.push(<p key={li}>{renderInline(ln.replace(/^#+\s*/, ''), li)}</p>);
        });
        flush();
        return <div key={bi} className="space-y-2">{out}</div>;
      })}
    </div>
  );
}

// ─── الأداة نفسها ───
export default function TutorWidget({ context }) {
  const { user, language, t, currentTrack } = useAppContext();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [level, setLevel] = useState(null);
  const bottomRef = useRef(null);
  const color = currentTrack?.color || '#0d9488';

  // المستوى الذي يلعبه المستخدم الآن (يُبثّ من PlayLevel)
  useEffect(() => {
    const h = (e) => setLevel(e.detail);
    window.addEventListener('tutorLevel', h);
    return () => window.removeEventListener('tutorLevel', h);
  }, []);

  useEffect(() => {
    if (!open || loaded) return;
    loadTutorHistory().then((h) => { setMsgs(h); setLoaded(true); });
  }, [open, loaded]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, busy, open]);

  if (!user) return null;

  const send = async (text) => {
    const message = (text ?? input).trim();
    if (!message || busy) return;
    setInput('');
    setMsgs((m) => [...m, { role: 'user', content: message }]);
    setBusy(true);
    const res = await askTutor(message, { ...context, level: context?.view === 'levels' ? level : undefined, language });
    const reply = res?.reply || (language === 'en' ? 'Something went wrong, try again.' : 'صار خلل، جرّب مرة ثانية.');
    setMsgs((m) => [...m, { role: 'assistant', content: reply }]);
    if (res?.planSaved) window.dispatchEvent(new CustomEvent('studyPlanSaved'));
    setBusy(false);
  };

  const quick = [
    { icon: <Target size={13} />, ar: 'وش نقاط ضعفي؟', en: 'What are my weak spots?' },
    { icon: <CalendarCheck size={13} />, ar: 'جهّز لي خطة الأسبوع', en: 'Build my weekly plan' },
    { icon: <BookOpen size={13} />, ar: 'اشرح لي درس هذا المستوى', en: 'Explain this level\'s lesson' },
    { icon: <Crown size={13} />, ar: 'وين ترتيبي بين المتصدرين؟', en: 'Where do I rank?' },
  ];

  return (
    <>
      {/* الزر العائم */}
      <motion.button
        whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        aria-label={t('المرشد', 'Tutor')}
        className="fixed bottom-5 end-5 z-[90] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border border-white/20 text-black"
        style={{ backgroundColor: color, boxShadow: `0 0 30px ${color}66` }}
      >
        {open ? <X size={22} /> : <Sparkles size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.96 }}
            className="fixed bottom-24 end-5 z-[90] w-[92vw] max-w-[400px] h-[70vh] max-h-[600px] rounded-[1.75rem] bg-[#05070f]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-black" style={{ backgroundColor: color }}><Sparkles size={16} /></div>
              <div>
                <div className="font-black text-sm">{t('المرشد', 'Your Tutor')}</div>
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{t('يعرف تقدّمك ويشرح لك', 'Knows your progress · explains anything')}</div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-[13px]">
              {msgs.length === 0 && !busy && (
                <div className="text-white/50 text-center pt-6 space-y-3">
                  <p className="font-bold">{t('أهلاً! أنا مرشدك في مسار.', 'Hi! I\'m your Masar tutor.')}</p>
                  <p className="text-[12px]">{t('أعرف تقدّمك ونقاط ضعفك، أشرح أي درس، أمرّنك، وأجهّز لك خطة.', 'I know your progress and weak spots, explain any lesson, quiz you, and build your plan.')}</p>
                </div>
              )}
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[88%] px-4 py-3 rounded-2xl ${m.role === 'user' ? 'bg-white/10 text-white' : 'bg-white/[0.04] border border-white/10 text-white/85'}`}>
                    {m.role === 'user' ? <p className="whitespace-pre-wrap">{m.content}</p> : <Markdown text={m.content} />}
                  </div>
                </div>
              ))}
              {busy && (
                <div className="flex justify-end"><div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white/50 flex items-center gap-2"><Loader2 size={14} className="animate-spin" />{t('يفكّر...', 'Thinking...')}</div></div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="px-3 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
              {quick.map((q, i) => (
                <button key={i} onClick={() => send(t(q.ar, q.en))} disabled={busy}
                  className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-white/70 hover:text-white hover:border-white/30 transition disabled:opacity-40">
                  {q.icon}{t(q.ar, q.en)}
                </button>
              ))}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); send(); }} className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={input} onChange={(e) => setInput(e.target.value)} disabled={busy}
                placeholder={t('اسأل عن أي شي في مسار...', 'Ask anything about Masar...')}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm outline-none focus:border-white/30 disabled:opacity-50"
              />
              <button type="submit" disabled={busy || !input.trim()} className="w-10 h-10 rounded-full flex items-center justify-center text-black disabled:opacity-40" style={{ backgroundColor: color }}>
                <Send size={16} className={language === 'ar' ? 'rotate-180' : ''} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
