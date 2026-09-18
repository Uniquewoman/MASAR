import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, CheckCircle2, Circle, Sparkles } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { loadLatestPlan, togglePlanItem } from '../lib/tutorApi';

// آخر خطة أسبوعية جهّزها المرشد للمستخدم — تظهر في الداشبورد ويعلّم بنودها
export default function StudyPlanCard() {
  const { user, language, t, currentTrack } = useAppContext();
  const [plan, setPlan] = useState(null);
  const color = currentTrack?.color || '#0d9488';

  const load = useCallback(() => { if (user) loadLatestPlan().then(setPlan); }, [user]);
  useEffect(() => {
    load();
    window.addEventListener('studyPlanSaved', load);
    return () => window.removeEventListener('studyPlanSaved', load);
  }, [load]);

  if (!user || !plan) return null;
  const done = plan.items.filter((i) => i.done).length;
  const pct = plan.items.length ? Math.round((done / plan.items.length) * 100) : 0;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      className="mb-12 p-5 md:p-7 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.03] backdrop-blur-md border border-white/10"
      dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-black" style={{ backgroundColor: color }}><CalendarCheck size={18} /></div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 flex items-center gap-1"><Sparkles size={10} />{t('خطتك من المرشد', 'YOUR TUTOR\'S PLAN')}</div>
            <h3 className="font-black text-lg">{plan.title}</h3>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black" style={{ color }}>{pct}%</div>
          <div className="text-[10px] text-white/40 font-bold">{done}/{plan.items.length}</div>
        </div>
      </div>
      {plan.summary && <p className="text-xs text-white/50 mb-4 leading-relaxed">{plan.summary}</p>}
      <div className="h-1.5 rounded-full bg-white/5 mb-4 overflow-hidden"><div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: color }} /></div>
      <ul className="space-y-2">
        {plan.items.map((it, i) => (
          <li key={i}>
            <button onClick={async () => setPlan(await togglePlanItem(plan, i))}
              className={`w-full flex items-start gap-3 text-start px-3 py-2 rounded-xl hover:bg-white/5 transition ${it.done ? 'text-white/35 line-through' : 'text-white/85'}`}>
              {it.done ? <CheckCircle2 size={18} style={{ color }} className="shrink-0 mt-0.5" /> : <Circle size={18} className="shrink-0 mt-0.5 text-white/30" />}
              <span className="text-sm">{it.day && <span className="text-[10px] font-black uppercase tracking-widest text-white/40 me-2">{it.day}</span>}{it.task}</span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
