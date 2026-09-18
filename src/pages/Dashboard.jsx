import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { ArrowRight, Code, Cpu, Shield, Globe, Landmark, Zap } from 'lucide-react';
import StudyPlanCard from '../components/StudyPlanCard';

export const Dashboard = ({ onSelectSection }) => {
  const { currentTrack, language, t, updateProfileProgress } = useAppContext();
  const track = currentTrack;
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08]";

  // كان الاحتياطي tracksInfo['SE'] وهو مسار غير موجود، فيعيد undefined
  // ثم تسقط الصفحة عند أول قراءة لـtrack.color بدل أن ترشد المستخدم.
  if (!track) {
    return (
      <div className="pt-40 text-center text-white/50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {t('اختر مساراً أولاً من الصفحة الرئيسية.', 'Choose a track from the home page first.')}
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-24 md:pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className={`mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <motion.h2 animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-4" style={{ color: track.color }}>
          {t(track.name_ar, track.name)}
        </motion.h2>
        <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs">
          {t('أقسام المسار التعليمي', 'LEARNING TRACK SECTIONS')}
        </p>
      </div>

      <StudyPlanCard />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {track.sections.map((section, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`p-4 md:p-8 rounded-[1.5rem] md:rounded-[3rem] ${cardBg} cursor-pointer relative overflow-hidden group h-[380px] flex flex-col justify-between`}
          onClick={() => {
  // بدلاً من إرسال القسم كما هو، تأكدي أننا نرسل العنوان الأصلي فقط
  onSelectSection({
    ...section,
    title: section.title.replace(track.name + " ", "") // هذا يزيل اسم المسار إذا كان مدمجاً
  });
              updateProfileProgress({
                current_section: section.title_ar,
                current_section_id: section.title
              });
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className={`flex justify-between items-start ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="p-5 rounded-2xl bg-white/5 text-white/20 transition-colors" style={{ color: section.isHovered ? track.color : undefined }}>
                <Zap size={24} />
              </div>
              <div className="text-2xl md:text-4xl font-black italic text-white/5 group-hover:text-white/10 transition-colors">0{i + 1}</div>
            </div>
            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
              <h3 className="text-2xl font-black italic text-white mb-3 uppercase tracking-tighter">
                {t(section.title_ar, section.title)}
              </h3>
              <p className="text-xs text-white/40 font-bold leading-relaxed">
                {t(section.desc_ar, section.desc)}
              </p>
            </div>
            <div
              className="w-full py-4 rounded-full bg-white/5 border border-white/10 text-white/60 font-black uppercase text-[10px] tracking-widest transition-all flex items-center justify-center gap-2 group-hover:text-black"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = track.color; e.currentTarget.style.color = 'black'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
            >
              {t('ابدأ القسم', 'START SECTION')}
              {language === 'ar' ? <ArrowRight size={14} /> : <ArrowRight size={14} className="rotate-180" />}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
