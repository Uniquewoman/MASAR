import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Layers, MonitorPlay, ArrowRight, Shield, Cpu, Code, Landmark, Globe } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Programs = ({ onStart }) => {
  const { language, t, currentTrack, tracksInfo } = useAppContext();
  const track = currentTrack || tracksInfo['SE'];
  const trackColor = track.color || '#14b8a6';
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08]";

  const sdaPrograms = [
    { id: 1, title: t('معسكرات الهمم الرقمية', 'Digital Ambition Bootcamps'), type: t('معسكر', 'BOOTCAMP'), desc: t('معسكرات مكثفة تهدف إلى بناء قدرات وطنية احترافية في مجالات التقنيات الناشئة.', 'Intensive bootcamps aimed at building professional national capabilities in emerging technologies.'), icon: <Layers />, color: 'text-teal-500' },
    { id: 2, title: t('منصة مسار التعليمية', 'Masar Learning Platform'), type: t('منصة', 'PLATFORM'), desc: t('بيئة تعليمية ذكية تعتمد على أسلوب التلعيب لتقييم وتطوير المهارات التقنية.', 'A smart learning environment using gamification to assess and develop technical skills.'), icon: <MonitorPlay />, color: 'text-purple-500' },
    { id: 3, title: t('رواد التقنية', 'Tech Pioneers'), type: t('قيادة', 'LEADERSHIP'), desc: t('برنامج قيادي يستهدف الكفاءات لتطويرهم وإعدادهم لقيادة التحول الرقمي.', 'A leadership program targeting talents to develop and prepare them for digital transformation.'), icon: <BookOpen />, color: 'text-blue-500' },
    { id: 4, title: t('معسكر طويق السيبراني', 'Tuwaiq Cyber Bootcamp'), type: t('أمن', 'SECURITY'), desc: t('تدريب مكثف في مجال الأمن السيبراني لحماية المنشآت والأنظمة الوطنية.', 'Intensive training in cyber security to protect national facilities and systems.'), icon: <Shield />, color: 'text-red-500' },
    { id: 5, title: t('منصة الابتكار المفتوح', 'Open Innovation Platform'), type: t('ابتكار', 'INNOVATION'), desc: t('مساحة إبداعية للباحثين لابتكار حلول تقنية تعتمد على الذكاء الاصطناعي.', 'A creative space for researchers to innovate technical solutions based on AI.'), icon: <Cpu />, color: 'text-yellow-500' },
    { id: 6, title: t('هاكاثون مسار', 'Masar Hackathon'), type: t('هاكاثون', 'HACKATHON'), desc: t('منافسات برمجية ضخمة لاكتشاف المواهب وبناء تطبيقات تخدم المجتمع.', 'Massive coding competitions to discover talent and build apps that serve society.'), icon: <Code />, color: 'text-green-500' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="px-10 mb-24 flex flex-col items-center text-center">
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="px-6 py-2 rounded-full bg-white/5 text-[10px] font-black tracking-widest uppercase mb-8 border border-white/10" style={{ color: trackColor, borderColor: `${trackColor}40` }}>
          {t('مبادرة رسمية من SDA', 'Official SDA Initiative')}
        </motion.div>
        <h1 className="text-7xl font-black italic uppercase tracking-tighter text-white mb-6">{t('منصة مسار التعليمية', 'MASAR LEARNING PLATFORM')}</h1>
        <p className="text-xl text-white/40 font-bold max-w-3xl leading-relaxed">
          {t('منصة مسار هي بيئة تعليمية ذكية تابعة للأكاديمية السعودية الرقمية، تعتمد على أحدث أساليب التلعيب (Gamification) لتقديم تجربة دراسية تفاعلية متكاملة.', 'Masar is a smart learning platform under the Saudi Digital Academy, using the latest gamification techniques to provide an integrated interactive study experience.')}
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <button onClick={onStart} className="px-12 py-6 rounded-[2rem] text-black font-black uppercase tracking-tighter shadow-2xl hover:scale-105 transition-all" style={{ backgroundColor: trackColor, boxShadow: `0 20px 40px ${trackColor}30` }}>{t('ابدأ الرحلة الآن', 'START JOURNEY NOW')}</button>
          <button className="px-12 py-6 rounded-[2rem] bg-white/5 border border-white/10 text-white font-black uppercase tracking-tighter hover:bg-white/10 transition-all">{t('استكشف المزيد', 'EXPLORE MORE')}</button>
        </div>
      </div>

      <div className="px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sdaPrograms.map((prog, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className={`p-10 rounded-[4rem] ${cardBg} flex flex-col justify-between h-[450px] relative overflow-hidden group shadow-2xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to bottom right, ${trackColor}10, transparent)` }} />
             <div className={`text-[10px] font-black tracking-widest uppercase mb-6 ${prog.color}`}>{prog.type}</div>
             <div className={`p-6 rounded-[2rem] bg-white/5 w-fit ${prog.color} mb-8 group-hover:scale-110 transition-transform ${language === 'ar' ? '' : 'mr-auto'}`}>{prog.icon}</div>
             <div>
               <h3 className="text-2xl font-black italic text-white mb-4 uppercase tracking-tighter">{prog.title}</h3>
               <p className="text-xs text-white/40 font-bold leading-relaxed">{prog.desc}</p>
             </div>
             <button 
               className="w-full mt-8 py-4 rounded-full bg-white/5 border border-white/10 text-white/60 font-black uppercase text-[10px] tracking-widest transition-all group-hover:text-black"
               onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = trackColor; e.currentTarget.style.color = 'black'; }}
               onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
             >
               {t('اعرف المزيد', 'LEARN MORE')}
             </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const AboutSDA = () => {
  const { language, t, currentTrack, tracksInfo } = useAppContext();
  const track = currentTrack || tracksInfo['SE'];
  const trackColor = track.color || '#14b8a6';
  const cardBg = "bg-white/[0.03] backdrop-blur-md border border-white/10";
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-40 px-10 pb-20 max-w-5xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className={`p-16 rounded-[4rem] ${cardBg} relative overflow-hidden shadow-2xl border-t-8 ${language === 'ar' ? 'text-right' : 'text-left'}`} style={{ borderTopColor: trackColor }}>
        <div className="absolute inset-0 opacity-50" style={{ background: `linear-gradient(to bottom right, ${trackColor}10, transparent)` }} />
        <h1 className="relative z-10 text-5xl font-black italic uppercase tracking-tighter text-white mb-8">{t('عن الأكاديمية السعودية الرقمية', 'ABOUT SAUDI DIGITAL ACADEMY')}</h1>
        <p className="relative z-10 text-xl text-white/60 font-bold leading-relaxed mb-12">
          {t('الأكاديمية السعودية الرقمية (SDA) هي إحدى مبادرات وزارة الاتصالات وتقنية المعلومات، تهدف إلى بناء وتطوير القدرات الرقمية الوطنية في مجالات التقنيات الحديثة والمتقدمة.', 'The Saudi Digital Academy (SDA) is an initiative of the Ministry of Communications and Information Technology, aiming to build and develop national digital capabilities in modern and advanced technologies.')}
        </p>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
             <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6" style={{ color: trackColor }}>{t('رؤيتنا', 'OUR VISION')}</h2>
             <p className="text-sm text-white/40 font-bold leading-relaxed">{t('أن نكون الأكاديمية الرائدة إقليمياً في تأهيل وتطوير المواهب الرقمية لتمكين الاقتصاد الرقمي في المملكة.', 'To be the leading regional academy in qualifying and developing digital talents to empower the digital economy in the Kingdom.')}</p>
           </div>
           <div>
             <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6" style={{ color: trackColor }}>{t('أهدافنا', 'OUR GOALS')}</h2>
             <ul className="space-y-4">
                {[
                  t('سد الفجوة في المهارات الرقمية المتقدمة', 'Bridging the gap in advanced digital skills'),
                  t('تمكين الكوادر الوطنية من التقنيات الناشئة', 'Empowering national cadres with emerging technologies'),
                  t('دعم التحول الرقمي للجهات الحكومية', 'Supporting digital transformation for government entities'),
                  t('تعزيز ثقافة الابتكار التقني', 'Promoting a culture of technical innovation')
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-sm text-white/60 font-bold italic ${language === 'ar' ? '' : 'flex-row-reverse'}`}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: trackColor }} /> {item}
                  </li>
                ))}
             </ul>
           </div>
        </div>
      </div>
    </motion.div>
  );
};
