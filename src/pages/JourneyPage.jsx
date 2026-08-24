import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  TrendingUp,
  Target,
  Award,
  Brain,
  Shield,
  Star,
  Flame,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Sparkles
} from 'lucide-react';

import { useAppContext } from '../context/AppContext';

export const JourneyPage = () => {
const {
    language,
    t,
    currentTrack,
    tracksInfo,
    profile,
    userProgress,
    journeyLogs,
    userAchievements
  } = useAppContext();
 const track = currentTrack || {
  id: null,
  name_ar: "رحلتي",
  name: "Journey",
  color:"#00E5FF"
};
const trackProgress = userProgress.filter(
  item => item.track_id === track?.id
);


const maxLevel = Math.max(
  ...trackProgress.map(
    item => item.unlocked_level
  ),
  1
);


const totalLevels = trackProgress.length * 10;


const completedLevels =
  trackProgress.reduce(
    (sum,item)=> sum + item.unlocked_level,
    0
  );


const progressPercent = Math.min(
  Math.round(
    (completedLevels / totalLevels) * 100
  ),
  100
);
  const isArabic = language === 'ar';

  const card =
    "rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10";

  const totalTracks = Object.keys(tracksInfo || {}).length;

const completedTracks = useMemo(() => {
  if (!userProgress?.length) return 0;

  return userProgress.filter(
    item => item.unlocked_level >= 5
  ).length;

}, [userProgress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-10 max-w-7xl mx-auto"
      dir={isArabic ? "rtl" : "ltr"}
    >

   
 {/* Header */}

<div className={`mb-14 ${isArabic ? "text-right" : "text-left"}`}>
  <motion.h2
    animate={{ y: [0, -8, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
    className="text-6xl font-black italic uppercase tracking-tighter text-white mb-4"
    style={{ color: track?.color || "#00E5FF" }}
  >
    {track
      ? t("رحلتي في " + track.name_ar, `MY ${track.name}`)
      : t("رحلتي", "MY JOURNEY")}
  </motion.h2>

  <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold">
    {track
      ? t(
          "كل تقدمك وتحليلك داخل هذا المسار",
          "YOUR PROGRESS INSIDE THIS TRACK"
        )
      : t(
          "ملخص رحلتك التعليمية بالكامل",
          "YOUR COMPLETE LEARNING JOURNEY"
        )}
  </p>
</div> {/* Top Cards */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6"><motion.div
  whileHover={{ y: -6 }}
  className={`${card} p-7`}
>
  <div className="flex items-center justify-between mb-6">

    <div>
      <p className="text-white/40 text-xs font-bold uppercase">
        {t("الرتبة", "RANK")}
      </p>

    <h3 className="text-3xl font-black text-white mt-2">
  {maxLevel}
</h3>
    </div>

    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center"
      style={{
        backgroundColor: `${track?.color || "#00E5FF"}20`
      }}
    >
      <Trophy
        size={30}
        color={track?.color || "#00E5FF"}
      />
    </div>

  </div>

  <div className="text-white/50 text-sm">
    {t(
      "استمر بالتقدم لرفع رتبتك.",
      "Keep progressing to rank up."
    )}
  </div>
{/* Journey Timeline */}

<div className="mt-14">

  <div className={`mb-8 ${isArabic ? "text-right" : "text-left"}`}>
    <h3 className="text-3xl font-black text-white">
      {t("مسار رحلتك", "YOUR JOURNEY PATH")}
    </h3>

    <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">
      {t(
        "تتبع تقدمك ومستواك الحالي",
        "TRACK YOUR CURRENT PROGRESS"
      )}
    </p>
  </div>


  <div className={`${card} p-8`}>

    {[
      {
        icon: <Brain />,
        title: t("التعلم", "LEARNING"),
        text: t(
          "ابدأ التعلم وتجاوز الدروس",
          "Complete lessons and learn"
        ),
        done: true
      },
      {
        icon: <Target />,
        title: t("التحديات", "CHALLENGES"),
        text: t(
          "اختبر مهاراتك بالتحديات",
          "Test your skills"
        ),
        done: false
      },
      {
        icon: <Trophy />,
        title: t("الإنجاز", "ACHIEVEMENT"),
        text: t(
          "افتح المستويات والجوائز",
          "Unlock levels and rewards"
        ),
        done: false
      }

    ].map((item,index)=>(

      <motion.div
        key={index}
        whileHover={{ x: isArabic ? -8 : 8 }}
        className="flex items-center gap-5 mb-8 last:mb-0"
      >

        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 text-white"
        >
          {item.icon}
        </div>


        <div>

          <h4 className="text-white font-black text-lg">
            {item.title}
          </h4>

          <p className="text-white/40 text-sm">
            {item.text}
          </p>

        </div>


        <div className="ml-auto">

          {item.done ? (
            <CheckCircle2 
              className="text-green-400"
              size={25}
            />
          ) : (
            <CircleAlert
              className="text-white/30"
              size={25}
            />
          )}

        </div>


      </motion.div>

    ))}

  </div>

</div>
{/* Recent Activity */}

<div className="mt-14">

  <div className={`mb-8 ${isArabic ? "text-right" : "text-left"}`}>
    <h3 className="text-3xl font-black text-white">
      {t("آخر نشاط", "RECENT ACTIVITY")}
    </h3>

    <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">
      {t(
        "آخر خطواتك داخل المنصة",
        "YOUR LATEST ACTIONS"
      )}
    </p>
  </div>


  <div className={`${card} p-8`}>

  {journeyLogs && journeyLogs.length > 0 ? (

    journeyLogs.map((log) => (

      <motion.div
        key={log.id}
        whileHover={{ scale: 1.02 }}
        className="flex items-center justify-between py-5 border-b border-white/5 last:border-none"
      >

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">

            {log.event_type === "completed"
              ? <CheckCircle2 />
              : <CircleAlert />
            }

          </div>


          <div>

            <h4 className="text-white font-black">
              {log.title}
            </h4>


            <p className="text-white/40 text-sm">
              {log.description}
            </p>


          </div>

        </div>


        <ArrowRight
          className={
            language === "ar"
              ? "rotate-180 text-white/30"
              : "text-white/30"
          }
        />


      </motion.div>

    ))

  ) : (

    <p className="text-white/40 text-center">

      {t(
        "لا يوجد نشاط حتى الآن",
        "NO ACTIVITY YET"
      )}

    </p>

  )}

</div>
{/* Achievements */}

<div className="mt-14">

  <div className={`mb-8 ${isArabic ? "text-right" : "text-left"}`}>

    <h3 className="text-3xl font-black text-white">
      {t("الإنجازات", "ACHIEVEMENTS")}
    </h3>


    <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">
      {t(
        "الجوائز التي حصلت عليها",
        "YOUR UNLOCKED REWARDS"
      )}
    </p>

  </div>



  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


  {userAchievements && userAchievements.length > 0 ? (


    userAchievements.map((item)=>(


      <motion.div

        key={item.id}

        whileHover={{ y:-8 }}

        className={`${card} p-7`}

      >


        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">

          <Trophy size={30}/>

        </div>



        <h4 className="text-white font-black text-xl">

          {item.achievements?.name}

        </h4>



        <p className="text-white/40 text-sm mt-3">

          {item.achievements?.description}

        </p>



        <div className="mt-5 text-xs font-black text-white/50">

          +{item.achievements?.xp_reward || 0} XP

        </div>


      </motion.div>


    ))


  ) : (


    <p className="text-white/40">

      {t(
      "لا توجد إنجازات بعد",
      "NO ACHIEVEMENTS YET"
      )}

    </p>


  )}


  </div>

</div>
{/* Journey Analysis */}

<div className="mt-14">

  <div className={`mb-8 ${isArabic ? "text-right" : "text-left"}`}>

    <h3 className="text-3xl font-black text-white">
      {t(
        "تحليل رحلتك",
        "JOURNEY ANALYSIS"
      )}
    </h3>

    <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">
      {t(
        "تحليل ذكي لتقدمك واقتراح الخطوة القادمة",
        "SMART INSIGHTS ABOUT YOUR PROGRESS"
      )}
    </p>

  </div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


    <motion.div
      whileHover={{ y:-6 }}
      className={`${card} p-7`}
    >

      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
        <Brain />
      </div>


      <h4 className="text-white font-black text-xl">
        {t(
          "نقطة قوتك",
          "YOUR STRENGTH"
        )}
      </h4>


      <p className="text-white/40 mt-3 text-sm">
        {t(
          "الاستمرار والتعلم بشكل منتظم",
          "Consistency and learning progress"
        )}
      </p>

    </motion.div>



    <motion.div
      whileHover={{ y:-6 }}
      className={`${card} p-7`}
    >

      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
        <Target />
      </div>


      <h4 className="text-white font-black text-xl">
        {t(
          "ركز أكثر على",
          "FOCUS ON"
        )}
      </h4>


      <p className="text-white/40 mt-3 text-sm">
        {t(
          "إكمال المستويات القادمة",
          "Completing upcoming levels"
        )}
      </p>


    </motion.div>




    <motion.div
      whileHover={{ y:-6 }}
      className={`${card} p-7`}
    >

      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
        <Sparkles />
      </div>


      <h4 className="text-white font-black text-xl">
        {t(
          "اقتراحنا لك",
          "NEXT STEP"
        )}
      </h4>


      <p className="text-white/40 mt-3 text-sm">
        {t(
          "ابدأ التحدي القادم وارفع مستواك",
          "Start your next challenge"
        )}
      </p>


    </motion.div>


  </div>

</div>
{/* Progress Map */}

<div className="mt-14">

  <div className={`mb-8 ${isArabic ? "text-right" : "text-left"}`}>

    <h3 className="text-3xl font-black text-white">
      {t(
        "خريطة التقدم",
        "PROGRESS MAP"
      )}
    </h3>

    <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">
      {t(
        "رحلتك من البداية حتى الاحتراف",
        "YOUR ROAD TO MASTERY"
      )}
    </p>

  </div>


  <div className={`${card} p-8`}>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">


      {[1,2,3,4,5,6,7,8,9,10].map((level)=>{

 const currentLevel = maxLevel;
        const unlocked = level <= currentLevel;


        return (

          <motion.div

            key={level}

            whileHover={{ scale: 1.08 }}

            className={`
              h-28 rounded-3xl
              flex flex-col
              items-center
              justify-center
              border
              transition-all
              ${
                unlocked
                ? "bg-white/10 border-white/20"
                : "bg-white/[0.02] border-white/5"
              }
            `}

          >


            <div className="text-white/40 text-xs font-bold uppercase">
              {t("مستوى","LEVEL")}
            </div>


            <div
              className={`
                text-3xl
                font-black
                mt-2
                ${
                  unlocked
                  ? "text-white"
                  : "text-white/20"
                }
              `}
            >
              {level}
            </div>


            {
              unlocked ? (

                <CheckCircle2
                  size={18}
                  className="mt-2 text-white"
                />

              ) : (

                <CircleAlert
                  size={18}
                  className="mt-2 text-white/20"
                />

              )
            }


          </motion.div>

        )

      })}


    </div>

  </div>

</div>{/* AI Journey Message */}

<div className="mt-14">

  <motion.div
    whileHover={{ y: -5 }}
    className={`${card} p-8 relative overflow-hidden`}
  >

    <div
      className="absolute inset-0 opacity-20 blur-3xl"
      style={{
        backgroundColor: track?.color || "#00E5FF"
      }}
    />


    <div className="relative flex flex-col md:flex-row items-center gap-6">


      <div
        className="w-20 h-20 rounded-3xl flex items-center justify-center"
        style={{
          backgroundColor: `${track?.color || "#00E5FF"}20`
        }}
      >

        <Sparkles
          size={38}
          color={track?.color || "#00E5FF"}
        />

      </div>



      <div className={isArabic ? "text-right" : "text-left"}>

        <h3 className="text-2xl font-black text-white">

          {t(
            "رسالة مساعدك الذكي",
            "AI ASSISTANT MESSAGE"
          )}

        </h3>


        <p className="text-white/50 mt-3 leading-relaxed">

          {profile?.total_progress >= 80

            ? t(
                "ممتاز! أنت قريب من إكمال رحلتك، استمر بنفس القوة 🚀",
                "Amazing! You are close to completing your journey 🚀"
              )

            : profile?.total_progress >= 40

            ? t(
                "تقدمك جيد، ركز على التحديات القادمة لرفع مستواك 🔥",
                "Good progress, focus on upcoming challenges 🔥"
              )

            : t(
                "ابدأ خطوتك الأولى، كل مستوى يقربك من الاحتراف ⭐",
                "Start your first step, every level gets you closer ⭐"
              )

          }

        </p>


      </div>



    </div>


  </motion.div>


</div>
</div>
</motion.div><motion.div
  whileHover={{ y: -6 }}
  className={`${card} p-7`}
>
  <div className="flex items-center justify-between mb-6">

    <div>
      <p className="text-white/40 text-xs font-bold uppercase">
        {t("التقدم", "PROGRESS")}
      </p>

      <h3 className="text-3xl font-black text-white mt-2">
       {progressPercent}%
      </h3>
    </div>

    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center"
      style={{
        backgroundColor: `${track?.color || "#00E5FF"}20`
      }}
    >
      <TrendingUp
        size={30}
        color={track?.color || "#00E5FF"}
      />
    </div>

  </div>

  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{
       width: `${progressPercent}%`
      }}
      transition={{ duration: 1 }}
      className="h-full rounded-full"
      style={{
        backgroundColor: track?.color || "#00E5FF"
      }}
    />
  </div>

</motion.div><motion.div
  whileHover={{ y: -6 }}
  className={`${card} p-7`}
>
  <div className="flex items-center justify-between mb-6">

    <div>
      <p className="text-white/40 text-xs font-bold uppercase">
        {t("المسارات", "TRACKS")}
      </p>

      <h3 className="text-3xl font-black text-white mt-2">
        {completedTracks}/{totalTracks}
      </h3>
    </div>

    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
      <Award size={30} className="text-white" />
    </div>

  </div>

  <p className="text-white/50 text-sm font-bold">
    {t(
      "مسارات مكتملة",
      "Completed learning paths"
    )}
  </p>

</motion.div>

</div>

</motion.div>

);
};