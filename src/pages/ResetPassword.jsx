import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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

        <input
          type="password"
          placeholder="كلمة المرور الجديدة"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl mb-4"
        />

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