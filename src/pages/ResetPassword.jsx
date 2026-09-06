import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "../supabaseClient";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // إظهار كلمة المرور: من يغيّر كلمته يحتاج يتأكد مما كتب قبل الحفظ
  const [showPassword, setShowPassword] = useState(false);

  async function updatePassword() {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("تم تغيير كلمة المرور بنجاح");
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h2 className="text-white text-2xl mb-6 text-center">
          تغيير كلمة المرور
        </h2>

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="كلمة المرور الجديدة"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 pl-12 rounded-xl"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
            title={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 transition"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        <button
          onClick={updatePassword}
          className="w-full p-4 rounded-xl bg-indigo-600 text-white"
        >
          حفظ
        </button>

        {message && (
          <p className="text-center mt-4 text-white">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}