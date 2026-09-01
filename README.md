#  MASAR | منصة مسار التعليمية

Masar is a bilingual (Arabic/English, RTL-first) web learning platform. I built it for myself first, and for anyone who wants to learn without losing interest halfway through: the whole journey is structured like a game, so you always know where you are and what comes next.

It's a dark-themed, card-driven UI covering five learning tracks: **Programming, Artificial Intelligence, Cyber Security, Networking, and FinTech**, each broken into sections with lessons, a question bank, and level-based practice.

---

## What's inside

- **Learning tracks** — 5 tracks × 7 sections × 5 levels, ordered so every topic builds on the one before it ([خطة المنهج](docs/CURRICULUM.md))
- **Lessons** — per-section video/lesson lists, with fallback placeholder content for sections without custom lessons yet
- **Question bank** — practice questions per track/section, multiple difficulty levels (`src/data/questions.js`)
- **Level play** — pull 36 questions, pass with 30 correct, fail at 6 mistakes; questions never repeat until the level's bank is exhausted
- **Question types** — multiple choice, true/false, scenario, code tracing, image, **matching** (connect two columns), and **terminal** (type the correct command)
- **Journey dashboard** — personal progress, achievements, and activity log
- **Profile & settings** — theme, language switcher, notifications/security toggles, logout
- **Auth** — Supabase-backed sign up / sign in / password reset

---

## Tech stack

- React 19 + Vite 7
- Tailwind CSS 4
- Framer Motion (animations) + Lucide (icons)
- Supabase (Postgres + Auth) as the live backend
- React Context for global state (auth, track selection, language, theme, gamification) — no React Router; navigation is a local view-state switch in `App.jsx`

---

## Running locally

```bash
git clone https://github.com/Uniquewoman/MASAR.git
cd MASAR
npm install
```

Copy `.env.example` to `.env` and fill in the Supabase keys:

```bash
cp .env.example .env
```

```bash
npm run dev
```

Runs on `http://localhost:5173` by default.

```bash
npm run build      # production build → /dist
npm run preview    # preview the production build
npm run lint        # eslint
npm run seed:questions   # seed script for the question bank
```

---

## Project structure

```
tailwind.config.js       # إعدادات Tailwind (بالجذر)
postcss.config.js        # إعدادات PostCSS (بالجذر)
.env / .env.example      # مفاتيح Supabase
src/
├── App.jsx              # root component + view-state navigation (landing/dashboard/lessons/...)
├── supabaseClient.js     # Supabase client (auth + data) — يقرأ من .env
├── context/
│   └── AppContext.jsx    # auth, track selection, language (i18n), theme, XP/levels, progress
├── data/
│   ├── courses.js        # bilingual lesson/document content per track & section
│   ├── questions.js      # question bank per track/section
│   ├── bigDatabase.js    # أسئلة السايبر (multiple-choice / true-false / fix-code / matching)
│   └── questionSeeder.js # seeds the question bank (npm run seed:questions)
└── pages/
    ├── Auth.jsx
    ├── Dashboard.jsx
    ├── Features.jsx       # Lessons, QuestionBank, Challenges
    ├── TrackPages.jsx      # TrackHome, PlayLevel
    ├── JourneyPage.jsx
    ├── ProfileSettings.jsx
    ├── SettingsPage.jsx
    └── ResetPassword.jsx
```

Supabase tables used: `profiles`, `user_progress`, `journey_logs`, `user_achievements`, `achievements`, `questions`, `user_question_history`.

SQL migrations live in [`sql/`](sql/). The curriculum plan — which topics belong to which level, the exact `section_id` keys, and the question quality bar — is in [`docs/CURRICULUM.md`](docs/CURRICULUM.md).

---

## Notes

- Auth and progress are backed by Supabase (Postgres + Auth) — no longer purely client-side.
- The `backend/` folder is a separate, not-yet-wired-in Express + Prisma API (JWT auth, SQLite dev DB) — an alternate backend design that the frontend currently does **not** call.
- `my-codex-app/` is an earlier standalone scaffold of this project kept in the repo for reference; it is not part of the active app.

---

## License

© 2026 Rawan Alshammari. This project is for portfolio and educational purposes.
Not licensed for commercial use without permission.
