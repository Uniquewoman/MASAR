import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Loader2, Plus, Pencil, Trash2, Check, X, MessageSquare, Target, CalendarCheck, BookOpen, Crown, PanelRightOpen } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { askTutor, listConversations, loadConversation, renameConversation, deleteConversation } from '../lib/tutorApi';
import { Markdown } from '../components/TutorMarkdown';

// صفحة «المرشد» كاملة: قائمة محادثات على الجنب (جديدة · تسمية · حذف) ومنطقة محادثة
export default function TutorPage({ context }) {
  const { user, language, t, currentTrack } = useAppContext();
  const color = currentTrack?.color || '#0d9488';
  const rtl = language === 'ar';

  const [convs, setConvs] = useState([]);
  const [active, setActive] = useState(null);      // id المحادثة الحالية، null = جديدة
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState(null);    // { id, title }
  const [confirmDel, setConfirmDel] = useState(null);
  const [listOpen, setListOpen] = useState(false); // للجوال
  const [level, setLevel] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const refresh = useCallback(() => { if (user) listConversations().then(setConvs); }, [user]);
  useEffect(() => { refresh(); }, [refresh]);

  useEffect(() => {
    const h = (e) => setLevel(e.detail);
    window.addEventListener('tutorLevel', h);
    return () => window.removeEventListener('tutorLevel', h);
  }, []);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, busy]);

  const openConv = async (id) => {
    setActive(id); setListOpen(false);
    setMsgs(id ? await loadConversation(id) : []);
    inputRef.current?.focus();
  };

  const newChat = () => { setActive(null); setMsgs([]); setListOpen(false); inputRef.current?.focus(); };

  const send = async (text) => {
    const message = (text ?? input).trim();
    if (!message || busy) return;
    setInput('');
    setMsgs((m) => [...m, { role: 'user', content: message }]);
    setBusy(true);
    const res = await askTutor(message, { ...context, level: context?.view === 'levels' ? level : undefined, language }, active);
    const reply = res?.reply || (rtl ? 'صار خلل، جرّب مرة ثانية.' : 'Something went wrong, try again.');
    setMsgs((m) => [...m, { role: 'assistant', content: reply }]);
    if (res?.conversation_id && res.conversation_id !== active) setActive(res.conversation_id);
    if (res?.planSaved) window.dispatchEvent(new CustomEvent('studyPlanSaved'));
    setBusy(false);
    refresh();
  };

  const saveTitle = async () => {
    if (!editing) return;
    const title = editing.title.trim();
    if (title) await renameConversation(editing.id, title);
    setEditing(null); refresh();
  };

  const removeConv = async (id) => {
    await deleteConversation(id);
    setConfirmDel(null);
    if (active === id) newChat();
    refresh();
  };

  const quick = [
    { icon: <Target size={13} />, ar: 'وش نقاط ضعفي؟', en: 'What are my weak spots?' },
    { icon: <CalendarCheck size={13} />, ar: 'جهّز لي خطة الأسبوع', en: 'Build my weekly plan' },
    { icon: <BookOpen size={13} />, ar: 'اشرح لي درس هذا المستوى', en: "Explain this level's lesson" },
    { icon: <Crown size={13} />, ar: 'وين ترتيبي بين المتصدرين؟', en: 'Where do I rank?' },
  ];

  const fmtDate = (d) => new Date(d).toLocaleDateString(rtl ? 'ar' : 'en', { day: 'numeric', month: 'short' });

  const ConvList = (
    <div className="flex flex-col h-full">
      <button onClick={newChat} className="m-3 flex items-center justify-center gap-2 py-3 rounded-2xl font-black text-sm text-black transition hover:opacity-90" style={{ backgroundColor: color }}>
        <Plus size={16} />{t('محادثة جديدة', 'New chat')}
      </button>
      <div className="px-4 pb-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{t('محادثاتك', 'YOUR CHATS')}</div>
      <div className="flex-1 overflow-y-auto no-scrollbar px-2 pb-4 space-y-1">
        {convs.length === 0 && <div className="text-xs text-white/30 text-center pt-8">{t('ما فيه محادثات بعد', 'No chats yet')}</div>}
        {convs.map((c) => (
          <div key={c.id} className={`group rounded-xl px-3 py-2.5 cursor-pointer transition border ${active === c.id ? 'bg-white/10 border-white/15' : 'border-transparent hover:bg-white/5'}`} onClick={() => editing?.id !== c.id && openConv(c.id)}>
            {editing?.id === c.id ? (
              <form onSubmit={(e) => { e.preventDefault(); saveTitle(); }} className="flex items-center gap-1">
                <input autoFocus value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} onClick={(e) => e.stopPropagation()}
                  className="flex-1 min-w-0 bg-black/40 border border-white/20 rounded-lg px-2 py-1 text-xs outline-none" />
                <button type="submit" className="p-1 text-emerald-400"><Check size={14} /></button>
                <button type="button" onClick={(e) => { e.stopPropagation(); setEditing(null); }} className="p-1 text-white/50"><X size={14} /></button>
              </form>
            ) : confirmDel === c.id ? (
              <div className="flex items-center justify-between gap-2 text-xs" onClick={(e) => e.stopPropagation()}>
                <span className="text-red-300 font-bold">{t('حذف المحادثة؟', 'Delete chat?')}</span>
                <span className="flex gap-1">
                  <button onClick={() => removeConv(c.id)} className="px-2 py-1 rounded-lg bg-red-500/20 text-red-300 font-bold">{t('حذف', 'Delete')}</button>
                  <button onClick={() => setConfirmDel(null)} className="px-2 py-1 rounded-lg bg-white/10">{t('إلغاء', 'Cancel')}</button>
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="shrink-0 text-white/30" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold truncate text-white/85">{c.title}</div>
                  <div className="text-[10px] text-white/30">{fmtDate(c.updated_at)}</div>
                </div>
                <div className="hidden group-hover:flex items-center gap-0.5" onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => setEditing({ id: c.id, title: c.title })} className="p-1 text-white/40 hover:text-white" title={t('تسمية', 'Rename')}><Pencil size={13} /></button>
                  <button onClick={() => setConfirmDel(c.id)} className="p-1 text-white/40 hover:text-red-400" title={t('حذف', 'Delete')}><Trash2 size={13} /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[calc(100vh-7.5rem)] pt-2 md:pt-4 px-3 md:px-8 pb-4 max-w-7xl mx-auto flex flex-col" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-black" style={{ backgroundColor: color, boxShadow: `0 0 30px ${color}55` }}><Sparkles size={20} /></div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter">{t('مساعدي', 'MY ASSISTANT')}</h2>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.3em]">{t('يعرف تقدّمك · يشرح · يمرّنك · يخطط لك', 'Knows your progress · explains · quizzes · plans')}</p>
          </div>
        </div>
        <button onClick={() => setListOpen(true)} className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10"><PanelRightOpen size={18} /></button>
      </div>

      <div className="flex-1 min-h-0 flex gap-4">
        {/* قائمة المحادثات — عمود ثابت على الشاشات الكبيرة، درج على الجوال */}
        <aside className="hidden md:flex w-72 shrink-0 rounded-[1.5rem] bg-white/[0.03] border border-white/10 overflow-hidden">{ConvList}</aside>
        <AnimatePresence>
          {listOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/70 md:hidden" onClick={() => setListOpen(false)} />
              <motion.aside initial={{ x: rtl ? 300 : -300 }} animate={{ x: 0 }} exit={{ x: rtl ? 300 : -300 }} className={`fixed top-0 bottom-0 ${rtl ? 'right-0' : 'left-0'} z-50 w-72 bg-[#05070f] border-white/10 ${rtl ? 'border-l' : 'border-r'} md:hidden`}>{ConvList}</motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* المحادثة */}
        <section className="flex-1 min-w-0 rounded-[1.5rem] bg-white/[0.03] border border-white/10 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-4 text-sm">
            {msgs.length === 0 && !busy && (
              <div className="h-full flex flex-col items-center justify-center text-center text-white/50 gap-3 max-w-md mx-auto">
                <Sparkles size={36} style={{ color }} />
                <p className="font-black text-lg text-white/80">{t('أهلاً! أنا مساعدك في مسار.', "Hi! I'm your Masar assistant.")}</p>
                <p className="text-xs leading-relaxed">{t('أعرف تقدّمك ونقاط ضعفك، أشرح أي درس بأكثر من طريقة، أمرّنك، وأجهّز لك خطة أسبوعية. ابدأ بسؤال أو اختر من الأزرار تحت.', 'I know your progress and weak spots, explain any lesson in more than one way, quiz you, and build your weekly plan. Ask anything or pick a button below.')}</p>
              </div>
            )}
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] md:max-w-[75%] px-5 py-4 rounded-3xl ${m.role === 'user' ? 'bg-white/10 text-white' : 'bg-white/[0.04] border border-white/10 text-white/85'}`}>
                  {m.role === 'user' ? <p className="whitespace-pre-wrap">{m.content}</p> : <Markdown text={m.content} />}
                </div>
              </div>
            ))}
            {busy && <div className="flex justify-end"><div className="px-5 py-4 rounded-3xl bg-white/[0.04] border border-white/10 text-white/50 flex items-center gap-2"><Loader2 size={14} className="animate-spin" />{t('يفكّر...', 'Thinking...')}</div></div>}
            <div ref={bottomRef} />
          </div>

          <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
            {quick.map((q, i) => (
              <button key={i} onClick={() => send(t(q.ar, q.en))} disabled={busy}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-white/70 hover:text-white hover:border-white/30 transition disabled:opacity-40">
                {q.icon}{t(q.ar, q.en)}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(); }} className="p-3 md:p-4 border-t border-white/10 flex gap-2">
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} disabled={busy}
              placeholder={t('اسأل عن أي شي في مسار...', 'Ask anything about Masar...')}
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm outline-none focus:border-white/30 disabled:opacity-50" />
            <button type="submit" disabled={busy || !input.trim()} className="w-12 h-12 rounded-full flex items-center justify-center text-black disabled:opacity-40" style={{ backgroundColor: color }}>
              <Send size={18} className={rtl ? 'rotate-180' : ''} />
            </button>
          </form>
        </section>
      </div>
    </motion.div>
  );
}
