import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { useAppContext } from '../context/AppContext';

export const ProfileSettings = () => {

  const { language, t, tracksInfo } = useAppContext();


  const [userData, setUserData] = useState(null);
  const [progressData, setProgressData] = useState(null);


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

className="pt-32 pb-20 px-10 max-w-4xl mx-auto"

>





<div className="mb-16 text-center">


<h2 className="text-5xl font-black text-white mb-4">

{userData.full_name}

</h2>



<p className="text-teal-400 font-bold text-sm">

{t("مستواك الحالي","Your current level")}: <p>
مستواك الحالي: {currentProgress?.unlocked_level || 1}
</p>

</p>


</div>








<div className="grid grid-cols-1 md:grid-cols-2 gap-6">






<div className="p-8 rounded-3xl bg-white bg-opacity-5 border border-white border-opacity-10">


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









<div className="p-8 rounded-3xl bg-white bg-opacity-5 border border-white bg-opacity-10">


<Trophy className="text-yellow-500 mb-4" size={24}/>



<h3 className="text-xl font-black text-white">

{t("نقاط الخبرة","Experience Points")}

</h3>



<p className="text-3xl font-black text-white">

{t("المستوى","Level")} {currentProgress?.unlocked_level || 1}

</p>



</div>






</div>









<div className="mt-6 p-8 rounded-3xl bg-white bg-opacity-5 border border-white border-opacity-10">


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






</motion.div>

);

};