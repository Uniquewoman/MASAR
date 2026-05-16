/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
const BIG_DATABASE = {
  CS: { // تخصص السايبر
    level1: [ // 200 سؤال للمستوى الأول (أمثلة)
      { 
        type: 'multiple-choice',
        q: "ماذا يرمز حرف C في مثلث CIA؟", 
        options: ["Confidentiality", "Control", "Cyber", "Cloud"], 
        correct: 0, 
        time: 30 
      },
      { 
        type: 'true-false', 
        q: "هل يعتبر بروتوكول HTTP أكثر أماناً من HTTPS؟", 
        options: ["صح", "خطأ"], 
        correct: 1, 
        time: 20 
      },
      // ... كرر هذا الهيكل حتى 200 سؤال
    ],
    level5: [ // مستوى متقدم (تصحيح وحلول)
      {
        type: 'fix-code',
        q: "هذا الكود يعاني من ثغرة SQL Injection، ما هي الكلمة الناقصة لتأمينه؟",
        codeSnippet: "query = 'SELECT * FROM users WHERE id = ' + user_input",
        correctAnswer: "parameterized",
        time: 90
      },
      {
        type: 'matching', // نوع التوصيل
        q: "صل كل بروتوكول بمنفذه (Port) الصحيح",
        pairs: { "SSH": "22", "HTTP": "80", "HTTPS": "443" },
        time: 60
      }
    ]
  }
};