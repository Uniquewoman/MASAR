import React, {useState} from "react";
import {
  Bell,
  Shield,
  Headphones,
  LogOut,
  X,
  Mail,
  Lock
} from "lucide-react";

import { useAppContext } from "../context/AppContext";


export const SettingsPage = () => {


const {
 language,
 setLanguage,
 t,
 logout
} = useAppContext();



const [notifications,setNotifications] = useState(true);

const [security,setSecurity] = useState(false);

const [editType,setEditType] = useState(null);

const [langConfirm,setLangConfirm] = useState(null);



const changeLanguage = () => {

setLanguage(langConfirm);

setLangConfirm(null);

}



return (

<div 
className="settings-page"
dir={language==="ar"?"rtl":"ltr"}
>



<div className="page-title">

<h1>
{t("الإعدادات","Settings")}
</h1>

<p>
{t("تحكم بتجربة استخدامك","Control your experience")}
</p>

</div>






<div className="settings-list">





<div className="setting-btn">


<div className="icon">
🌐
</div>


<div className="text">

<h3>
{t("اللغة","Language")}
</h3>

</div>



<div className="lang-box">


<button
onClick={()=>setLangConfirm("ar")}
>
العربية
</button>


<button
onClick={()=>setLangConfirm("en")}
>
English
</button>



</div>


</div>









<div className="setting-btn">


<div className="icon">
<Bell/>
</div>


<div className="text">

<h3>
{t("الإشعارات","Notifications")}
</h3>


<span>
{
notifications
?
t("مفعلة","Enabled")
:
t("متوقفة","Disabled")
}
</span>


</div>




<button

className={`notify-switch ${notifications?"active":""}`}

onClick={()=>setNotifications(!notifications)}

>

<div></div>

</button>




</div>









<div 
className="setting-btn"
onClick={()=>setSecurity(!security)}
>


<div className="icon">
<Shield/>
</div>


<div className="text">

<h3>
{t("الأمان","Security")}
</h3>


<span>
{t(
"تغيير بيانات الحساب",
"Account security"
)}
</span>


</div>



</div>








{
security && (

<div className="security-area">


<button
onClick={()=>setEditType("email")}
>

<Mail/>

{t("تغيير الإيميل","Change Email")}

</button>



<button
onClick={()=>setEditType("password")}
>

<Lock/>

{t("تغيير الرمز","Change Password")}

</button>



</div>

)

}









<div className="setting-btn">


<div className="icon">
<Headphones/>
</div>


<div className="text">

<h3>
{t("الدعم والتواصل","Support")}
</h3>

<span>
rawanmusaad.tw@gmail.com
<br/>
0558763703
</span>


</div>


</div>







<button
className="setting-btn logout"
onClick={logout}
>


<LogOut/>

{t("تسجيل الخروج","Logout")}


</button>





</div>










{
langConfirm && (

<div className="security-popup">

<div className="security-box">


<h2>
{t("تأكيد تغيير اللغة","Confirm language")}
</h2>


<p>
{t(
"هل تريد تغيير اللغة؟",
"Do you want to change language?"
)}
</p>



<button onClick={changeLanguage}>
{t("موافق","OK")}
</button>


<button onClick={()=>setLangConfirm(null)}>
{t("إلغاء","Cancel")}
</button>



</div>

</div>

)

}










{
editType && (

<div className="security-popup">

<div className="security-box">


<X onClick={()=>setEditType(null)}/>


<h2>
{
editType==="email"
?
t("تغيير الإيميل","Change Email")
:
t("تغيير الرمز","Change Password")
}
</h2>



<input placeholder={t("القديم","Old")}/>

<input placeholder={t("الجديد","New")}/>


<button>
{t("حفظ","Save")}
</button>



</div>

</div>

)

}




</div>

)

}