import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, UserRound, Check, X, Loader2 } from 'lucide-react';
import { AVATARS, avatarUri } from '../data/avatars';
import { supabase } from '../supabaseClient';
import { useAppContext } from '../context/AppContext';

export const ProfileSettings = () => {

  const { language, t, tracksInfo } = useAppContext();


  const [userData, setUserData] = useState(null);
  const [progressData, setProgressData] = useState(null);

  // اختيار الشخصية: النافذة مفتوحة؟ وأي شخصية مختارة مؤقتاً قبل الحفظ؟
  const [pickerOpen, setPickerOpen] = useState(false);
  const [draft, setDraft] = useState(null);
  const [saving, setSaving] = useState(false);

  // تُفتح النافذة على الشخصية الحالية، فالإلغاء يعيد الحال كما كان
  const openPicker = () => {
    const current = AVATARS.find(a => avatarUri(a) === userData?.avatar_url);
    setDraft(current?.id || null);
    setPickerOpen(true);
  };

  const saveAvatar = async () => {
    const chosen = AVATARS.find(a => a.id === draft);
    if (!chosen) return;
    setSaving(true);
    const { data: authData } = await supabase.auth.getUser();
    const { error } = await supabase
      .from('profiles')
      .update({ avatar_url: avatarUri(chosen) })
      .eq('id', authData.user.id);
    setSaving(false);
    if (error) return;
    setUserData(u => ({ ...u, avatar_url: avatarUri(chosen) }));
    setPickerOpen(false);
    // بقية الصفحات تقرأ الملف الشخصي عند هذا الحدث فتلتقط الصورة الجديدة
    window.dispatchEvent(new Event('profileUpdated'));
  };


  useEffect(() => {

    getProfile();


    const handleProfileUpdate = () => {
      getProfile();
    };


    window.addEventListener("profileUpdated", handleProfileUpdate);


    return () => {
      window.removeEventListener("profileUpdated", handleProfileUpdate);
    };


  }, []);



  async function getProfile() {

    const { data: authData } = await supabase.auth.getUser();


    if (!authData.user) return;



    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", authData.user.id)
      .single();



    if (error) return;


    setUserData(data);



    const { data: progress } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", authData.user.id);



    setProgressData(progress);

  }




  if (!userData) {

    return (

      <div className="min-h-screen flex items-center justify-center text-white">

        {t("جاري تحميل الحساب...","Loading account...")}

      </div>

    );

  }




const currentProgress = progressData?.find(
  (item) =>
    item.track_id === userData.current_path_id &&
    item.section_id === userData.current_section_id
);





const currentTrackInfo = Object.values(tracksInfo || {}).find(

(track) =>

track.name_ar === userData.current_path ||
track.name === userData.current_path

);




const currentTrackName = currentTrackInfo

?

t(
currentTrackInfo.name_ar,
currentTrackInfo.name
)

:

userData.current_path || t("لم يبدأ مسار","No track started");





const currentSectionInfo = currentTrackInfo?.sections?.find(

(section)=>

section.title_ar === userData.current_section ||
section.title === userData.current_section

);





const currentSectionName = currentSectionInfo

?

t(
currentSectionInfo.title_ar,
currentSectionInfo.title
)

:

userData.current_section || t("لم يبدأ قسم","No section");








return (

<motion.div

initial={{ opacity:0, y:20 }}

animate={{ opacity:1, y:0 }}

dir={language==="ar"?"rtl":"ltr"}

className="pt-24 md:pt-32 pb-20 px-4 md:px-10 max-w-4xl mx-auto"

>





<div className="mb-16 text-center">

{/* الصورة — يُضغط عليها فتُفتح شخصيات الموقع للاختيار */}
<button
  onClick={openPicker}
  className="group relative mx-auto mb-6 block w-32 h-32 rounded-[2rem] overflow-hidden border-2 border-white/15 hover:border-white/40 transition"
  title={t("غيّر صورتك", "Change your picture")}
>
  {userData.avatar_url ? (
    <img src={userData.avatar_url} alt="" className="w-full h-full object-cover" />
  ) : (
    <div className="w-full h-full grid place-items-center bg-white/5 text-white/35">
      <UserRound size={44} />
    </div>
  )}
  <span className="absolute inset-x-0 bottom-0 py-1.5 bg-black/70 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition">
    {t("تغيير", "CHANGE")}
  </span>
</button>

<h2 className="text-2xl md:text-5xl font-black text-white mb-4">

{userData.full_name}

</h2>



<p className="text-teal-400 font-bold text-sm">

{t("مستواك الحالي","Your current level")}: <p>
مستواك الحالي: {currentProgress?.unlocked_level || 1}
</p>

</p>


</div>








<div className="grid grid-cols-1 md:grid-cols-2 gap-6">






<div className="p-4 md:p-8 rounded-3xl bg-white bg-opacity-5 border border-white border-opacity-10">


<BookOpen className="text-teal-500 mb-4" size={24}/>



<h3 className="text-xl font-black text-white">

{t("المسار الحالي","Current Track")}

</h3>



<p className="text-white text-opacity-60 text-lg">

{currentTrackName}

</p>




<p className="text-white text-opacity-60 text-sm mt-2">

{t("القسم","Section")}: {currentSectionName}

</p>


</div>









<div className="p-4 md:p-8 rounded-3xl bg-white bg-opacity-5 border border-white bg-opacity-10">


<Trophy className="text-yellow-500 mb-4" size={24}/>



<h3 className="text-xl font-black text-white">

{t("نقاط الخبرة","Experience Points")}

</h3>



<p className="text-3xl font-black text-white">

{t("المستوى","Level")} {currentProgress?.unlocked_level || 1}

</p>



</div>






</div>









<div className="mt-6 p-4 md:p-8 rounded-3xl bg-white bg-opacity-5 border border-white border-opacity-10">


<h3 className="text-xl font-black text-white mb-8">

{t("تحليلات التقدم","Progress Analytics")}

</h3>





<div className="flex justify-between text-white text-opacity-60 text-sm font-bold mb-2">


<span>

{t("نسبة التقدم","Progress")}

</span>


{((currentProgress?.unlocked_level || 1) * 10)}%



</div>





<div className="w-full bg-white bg-opacity-10 h-4 rounded-full">


<div

className="bg-teal-500 h-4 rounded-full"

style={{

width:
((currentProgress?.unlocked_level || 1) * 10)+"%"

}}

/>


</div>



</div>









<button

onClick={()=>window.dispatchEvent(

new CustomEvent('changeView',{

detail:'dashboard'

})

)}

className="mt-12 w-full p-6 rounded-3xl bg-white bg-opacity-10 text-white font-black uppercase tracking-widest hover:bg-white hover:bg-opacity-20 transition-all"

>


{t("العودة للوحة التحكم","Back to Dashboard")}


</button>


{/* ─────────── اختيار الشخصية ─────────── */}
{pickerOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    onClick={() => setPickerOpen(false)}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-3xl max-h-[85vh] flex flex-col rounded-[2rem] bg-[#0b1220] border border-white/12 overflow-hidden"
    >
      <div className="flex items-center justify-between p-6 border-b border-white/8 shrink-0">
        <div>
          <h3 className="text-xl font-black text-white">
            {t("اختر شخصيتك", "CHOOSE YOUR CHARACTER")}
          </h3>
          <p className="text-white/40 text-xs mt-1">
            {t("عشرون شخصية من مسارات الموقع الخمسة",
               "Twenty characters from the five tracks")}
          </p>
        </div>
        <button
          onClick={() => setPickerOpen(false)}
          className="w-9 h-9 rounded-xl grid place-items-center text-white/50 hover:text-white hover:bg-white/10 transition"
        >
          <X size={18} />
        </button>
      </div>

      <div className="overflow-y-auto p-6 flex-1">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {AVATARS.map(a => {
            const on = draft === a.id;
            return (
              <button
                key={a.id}
                onClick={() => setDraft(a.id)}
                className="group text-center"
                title={t(a.name_ar, a.name_en)}
              >
                <div
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 transition"
                  style={{
                    borderColor: on ? a.color : 'rgba(255,255,255,0.08)',
                    boxShadow: on ? `0 0 0 3px ${a.color}35` : 'none'
                  }}
                >
                  <img src={avatarUri(a)} alt="" className="w-full h-full" />
                  {on && (
                    <div
                      className="absolute top-1.5 left-1.5 w-6 h-6 rounded-lg grid place-items-center"
                      style={{ background: a.color }}
                    >
                      <Check size={14} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="mt-2 text-[11px] font-bold text-white/70 truncate">
                  {t(a.name_ar, a.name_en)}
                </div>
                <div className="text-[10px] truncate" style={{ color: a.color }}>
                  {t(a.trackName_ar, a.trackName_en)}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 p-5 border-t border-white/8 shrink-0">
        <button
          onClick={() => setPickerOpen(false)}
          className="px-6 py-3 rounded-xl border border-white/12 text-white/60 text-sm font-bold hover:bg-white/5 transition"
        >
          {t("إلغاء", "Cancel")}
        </button>
        <button
          onClick={saveAvatar}
          disabled={!draft || saving}
          className="px-8 py-3 rounded-xl text-sm font-bold text-white disabled:opacity-35 transition flex items-center gap-2"
          style={{ background: AVATARS.find(a => a.id === draft)?.color || '#334155' }}
        >
          {saving && <Loader2 size={15} className="animate-spin" />}
          {t("حفظ", "Save")}
        </button>
      </div>
    </motion.div>
  </div>
)}






</motion.div>

);

};