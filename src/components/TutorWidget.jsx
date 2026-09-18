import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

// زر «المرشد» العائم — يفتح صفحة المرشد الكاملة (يختفي وأنت فيها أصلاً)
export default function TutorWidget({ view, onOpen }) {
  const { user, t, currentTrack } = useAppContext();
  const color = currentTrack?.color || '#0d9488';
  if (!user || view === 'tutor') return null;

  return (
    <motion.button
      whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
      onClick={onOpen}
      aria-label={t('مساعدي', 'My Assistant')}
      title={t('مساعدي', 'My Assistant')}
      className="fixed bottom-5 end-5 z-[90] h-14 pl-5 pr-4 rounded-full flex items-center gap-2 shadow-2xl border border-white/20 text-black font-black text-sm"
      style={{ backgroundColor: color, boxShadow: `0 0 30px ${color}66` }}
    >
      <Sparkles size={20} />
      <span className="hidden sm:inline">{t('مساعدي', 'Assistant')}</span>
    </motion.button>
  );
}
