import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // يحترم المنفذ الذي تسنده بيئة التشغيل، ويرجع لـ5173 محلياً
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
