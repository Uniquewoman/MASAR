// ═══════════════════════════════════════════════════════════════════
// شخصيات الحساب — عشرون شخصية مبنية على مسارات الموقع الخمسة،
// أربع شخصيات لكل مسار بلونه وبأداة تدل على تخصصه.
//
// كل شخصية رسم متجهي مبني في الكود لا ملف صورة، لثلاثة أسباب:
//   · لا تحميل من الشبكة ولا مجلد صور يُنشر مع الموقع.
//   · تُحفظ في عمود avatar_url كعنوان بيانات، فتعمل في كل موضع يعرض
//     الصورة بوسم img دون تعديل صفحة واحدة (التحديات والمتصدّرون).
//   · تتوسّع بلا فقد جودة على أي حجم.
// ═══════════════════════════════════════════════════════════════════

// ─────────── ألوان المسارات كما في تعريفها ───────────
const TRACK = {
  Programming:            { c1: '#0d9488', c2: '#042f2e', ar: 'البرمجة',            en: 'Programming' },
  ArtificialIntelligence: { c1: '#a855f7', c2: '#2e1065', ar: 'الذكاء الاصطناعي',   en: 'AI' },
  CyberSecurity:          { c1: '#ef4444', c2: '#450a0a', ar: 'الأمن السيبراني',    en: 'Cyber Security' },
  Networking:             { c1: '#3b82f6', c2: '#0c2d6b', ar: 'الشبكات',            en: 'Networking' },
  FinTech:                { c1: '#38bdf8', c2: '#075985', ar: 'التقنية المالية',    en: 'FinTech' }
};

// ─────────── شارة المسار أسفل الشخصية ───────────
const GLYPH = {
  Programming: '<path d="M97 97l-6 6 6 6M111 97l6 6-6 6" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  ArtificialIntelligence: '<circle cx="97" cy="97" r="3" fill="#fff"/><circle cx="111" cy="97" r="3" fill="#fff"/><circle cx="104" cy="110" r="3" fill="#fff"/><path d="M97 97l7 13 7-13M97 97h14" stroke="#fff" stroke-width="1.6" fill="none"/>',
  CyberSecurity: '<path d="M104 93l11 4v7c0 7-5 12-11 14-6-2-11-7-11-14v-7z" fill="#fff"/>',
  Networking: '<circle cx="104" cy="104" r="11" stroke="#fff" stroke-width="2.2" fill="none"/><path d="M93 104h22M104 93c5 6 5 16 0 22M104 93c-5 6-5 16 0 22" stroke="#fff" stroke-width="1.8" fill="none"/>',
  FinTech: '<path d="M94 111l6-8 5 5 8-11" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M110 97h5v5" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
};

// ─────────── أغطية الرأس والشعر ───────────
// الشماغ والحجاب مقصودان: المنصّة عربية وشخصياتها تشبه من يستخدمها.
const HEAD = {
  short: (h) => `<path d="M40 54c0-15 10-25 24-25s24 10 24 25c-2-9-9-13-24-13s-22 4-24 13z" fill="${h}"/>`,

  curly: (h) => `<g fill="${h}"><circle cx="46" cy="44" r="9"/><circle cx="58" cy="37" r="10"/><circle cx="71" cy="37" r="10"/><circle cx="82" cy="45" r="9"/><path d="M41 55c0-11 10-18 23-18s23 7 23 18c-3-8-10-11-23-11s-20 3-23 11z"/></g>`,

  bun: (h) => `<g fill="${h}"><circle cx="64" cy="26" r="9"/><path d="M40 54c0-15 10-25 24-25s24 10 24 25c-2-9-9-13-24-13s-22 4-24 13z"/></g>`,

  long: (h) => `<g fill="${h}"><path d="M40 54c0-15 10-25 24-25s24 10 24 25c-2-9-9-13-24-13s-22 4-24 13z"/><path d="M38 50c-3 14-2 28 1 40h8c-3-13-4-26-2-40zM90 50c3 14 2 28-1 40h-8c3-13 4-26 2-40z"/></g>`,

  // الأغطية الثلاثة التالية تُرسم فوق دائرة الرأس فتحجب الوجه،
  // فتُعاد فتحة الوجه بلون البشرة فوقها ليظهر الوجه مؤطَّراً لا مغطّى.

  // حجاب: يغطي الرأس والرقبة والكتفين
  hijab: (h, _a, skin) =>
    `<path d="M64 22c-17 0-28 13-28 30 0 10 2 18 5 24-7 4-11 11-13 20l-2 10h76l-2-10c-2-9-6-16-13-20 3-6 5-14 5-24 0-17-11-30-28-30z" fill="${h}"/>`
    + `<ellipse cx="64" cy="59" rx="16.5" ry="19" fill="${skin}"/>`
    + `<path d="M47.5 59c0-11 7-18 16.5-18s16.5 7 16.5 18c0-6-7-10-16.5-10s-16.5 4-16.5 10z" fill="rgba(0,0,0,.10)"/>`,

  // شماغ وعقال
  shemagh: (h, a, skin) =>
    `<path d="M64 22c-17 0-28 12-28 28 0 16 4 28 9 38h8c-5-11-7-22-7-32 0-14 8-22 18-22s18 8 18 22c0 10-2 21-7 32h8c5-10 9-22 9-38 0-16-11-28-28-28z" fill="${h}"/>`
    + `<ellipse cx="64" cy="59" rx="16.5" ry="19" fill="${skin}"/>`
    + `<ellipse cx="64" cy="32" rx="27" ry="6" fill="${a}"/><ellipse cx="64" cy="39" rx="27" ry="5" fill="${a}"/>`,

  cap: (h) => `<g fill="${h}"><path d="M40 50c0-14 10-23 24-23s24 9 24 23z"/><path d="M88 50h16c0 4-3 6-7 6H88z"/></g>`,

  hood: (h, _a, skin) =>
    `<path d="M64 20c-19 0-32 14-32 33 0 12 3 22 8 30h48c5-8 8-18 8-30 0-19-13-33-32-33z" fill="${h}"/>`
    + `<ellipse cx="64" cy="60" rx="16" ry="18" fill="${skin}"/>`
    + `<path d="M48 60c0-10 7-17 16-17s16 7 16 17c0-6-7-9-16-9s-16 3-16 9z" fill="rgba(0,0,0,.14)"/>`
};

// ─────────── إكسسوارات ───────────
const ACC = {
  none: '',
  glasses: '<g fill="none" stroke="#1e293b" stroke-width="2.4"><circle cx="55" cy="57" r="8"/><circle cx="73" cy="57" r="8"/><path d="M63 57h2M47 55l-6-2M81 55l6-2"/></g>',
  headset: '<g fill="none" stroke="#1e293b" stroke-width="3"><path d="M40 56V50c0-13 11-22 24-22s24 9 24 22v6"/></g><rect x="34" y="52" width="9" height="16" rx="4" fill="#1e293b"/><rect x="85" y="52" width="9" height="16" rx="4" fill="#1e293b"/><path d="M43 66c8 6 8 10 8 14" stroke="#1e293b" stroke-width="2.4" fill="none"/>',
  visor: '<rect x="40" y="50" width="48" height="13" rx="6" fill="#1e293b" opacity=".85"/><rect x="44" y="53" width="16" height="6" rx="3" fill="#67e8f9" opacity=".9"/><rect x="68" y="53" width="16" height="6" rx="3" fill="#67e8f9" opacity=".9"/>',
  mask: '<path d="M46 62c0 10 8 17 18 17s18-7 18-17z" fill="#e2e8f0"/><path d="M46 64h36" stroke="#94a3b8" stroke-width="1.6"/>'
};

// ─────────── تركيب الشخصية ───────────
const build = ({ track, head, headColor, accent, acc, skin, cloth }) => {
  const { c1, c2 } = TRACK[track];
  const dark = shade(skin, -18);
  const eyes = acc === 'visor'
    ? ''
    : `<circle cx="55" cy="57" r="3" fill="#1e293b"/><circle cx="73" cy="57" r="3" fill="#1e293b"/>`;
  const mouth = acc === 'mask'
    ? ''
    : `<path d="M57 68q7 5 14 0" stroke="#1e293b" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">`
    + `<defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>`
    + `<circle cx="64" cy="64" r="64" fill="url(#b)"/>`
    + `<path d="M22 128c0-23 19-36 42-36s42 13 42 36z" fill="${cloth}"/>`
    + `<rect x="57" y="74" width="14" height="16" rx="7" fill="${dark}"/>`
    + `<circle cx="64" cy="57" r="23" fill="${skin}"/>`
    + HEAD[head](headColor, accent, skin)
    + eyes + mouth + ACC[acc]
    + `<circle cx="104" cy="104" r="17" fill="#0f172a" opacity=".92"/>`
    + GLYPH[track]
    + `</svg>`;
};

// تعتيم لون البشرة للرقبة، فتظهر بظل طبيعي بلا لون ثانٍ في التعريف
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const cl = (v) => Math.max(0, Math.min(255, v + amt));
  return '#' + [cl((n >> 16) & 255), cl((n >> 8) & 255), cl(n & 255)]
    .map(v => v.toString(16).padStart(2, '0')).join('');
}

const SKIN = { light: '#f2c9a0', tan: '#e0a878', olive: '#c68b5e', deep: '#8d5a3b' };

// ─────────── الشخصيات العشرون ───────────
const DEFS = [
  // البرمجة
  { id: 'prog-1', track: 'Programming', ar: 'المبرمج', en: 'The Coder',
    head: 'short', headColor: '#1f2937', acc: 'glasses', skin: SKIN.tan, cloth: '#134e4a' },
  { id: 'prog-2', track: 'Programming', ar: 'مهندسة الواجهات', en: 'Frontend Engineer',
    head: 'hijab', headColor: '#0f766e', acc: 'none', skin: SKIN.light, cloth: '#115e59' },
  { id: 'prog-3', track: 'Programming', ar: 'صائد الأخطاء', en: 'Bug Hunter',
    head: 'cap', headColor: '#0f766e', acc: 'none', skin: SKIN.olive, cloth: '#134e4a' },
  { id: 'prog-4', track: 'Programming', ar: 'مطوّرة الخوارزميات', en: 'Algorithms Dev',
    head: 'bun', headColor: '#3f2a1d', acc: 'glasses', skin: SKIN.deep, cloth: '#115e59' },

  // الذكاء الاصطناعي
  { id: 'ai-1', track: 'ArtificialIntelligence', ar: 'عالِمة البيانات', en: 'Data Scientist',
    head: 'hijab', headColor: '#7e22ce', acc: 'glasses', skin: SKIN.light, cloth: '#581c87' },
  { id: 'ai-2', track: 'ArtificialIntelligence', ar: 'مدرّب النماذج', en: 'Model Trainer',
    head: 'short', headColor: '#312e81', acc: 'headset', skin: SKIN.tan, cloth: '#6b21a8' },
  { id: 'ai-3', track: 'ArtificialIntelligence', ar: 'مهندس الشبكات العصبية', en: 'Neural Engineer',
    head: 'curly', headColor: '#1f2937', acc: 'none', skin: SKIN.deep, cloth: '#581c87' },
  { id: 'ai-4', track: 'ArtificialIntelligence', ar: 'باحثة التعلّم', en: 'Learning Researcher',
    head: 'long', headColor: '#4c1d95', acc: 'none', skin: SKIN.olive, cloth: '#6b21a8' },

  // الأمن السيبراني
  { id: 'cyb-1', track: 'CyberSecurity', ar: 'المحلّل الأمني', en: 'Security Analyst',
    head: 'short', headColor: '#1f2937', acc: 'glasses', skin: SKIN.olive, cloth: '#7f1d1d' },
  { id: 'cyb-2', track: 'CyberSecurity', ar: 'مختبِرة الاختراق', en: 'Pentester',
    head: 'hood', headColor: '#111827', acc: 'mask', skin: SKIN.light, cloth: '#111827' },
  { id: 'cyb-3', track: 'CyberSecurity', ar: 'المحقّق الجنائي', en: 'Forensics Investigator',
    head: 'shemagh', headColor: '#f8fafc', accent: '#111827', acc: 'none', skin: SKIN.tan, cloth: '#7f1d1d' },
  { id: 'cyb-4', track: 'CyberSecurity', ar: 'حارسة الجدار', en: 'Firewall Guardian',
    head: 'hijab', headColor: '#991b1b', acc: 'none', skin: SKIN.deep, cloth: '#7f1d1d' },

  // الشبكات
  { id: 'net-1', track: 'Networking', ar: 'مهندس الشبكات', en: 'Network Engineer',
    head: 'short', headColor: '#1e3a8a', acc: 'none', skin: SKIN.tan, cloth: '#1e40af' },
  { id: 'net-2', track: 'Networking', ar: 'مديرة العمليات', en: 'Operations Lead',
    head: 'hijab', headColor: '#1d4ed8', acc: 'glasses', skin: SKIN.light, cloth: '#1e3a8a' },
  { id: 'net-3', track: 'Networking', ar: 'فنّي الألياف', en: 'Fibre Technician',
    head: 'cap', headColor: '#1e40af', acc: 'none', skin: SKIN.olive, cloth: '#1e3a8a' },
  { id: 'net-4', track: 'Networking', ar: 'مخطّطة التغطية', en: 'Coverage Planner',
    head: 'long', headColor: '#0f172a', acc: 'headset', skin: SKIN.deep, cloth: '#1e40af' },

  // التقنية المالية
  { id: 'fin-1', track: 'FinTech', ar: 'المحلّل المالي', en: 'Financial Analyst',
    head: 'shemagh', headColor: '#f1f5f9', accent: '#0c4a6e', acc: 'none', skin: SKIN.light, cloth: '#0c4a6e' },
  { id: 'fin-2', track: 'FinTech', ar: 'مهندسة المدفوعات', en: 'Payments Engineer',
    head: 'hijab', headColor: '#0369a1', acc: 'none', skin: SKIN.tan, cloth: '#075985' },
  { id: 'fin-3', track: 'FinTech', ar: 'خبير الامتثال', en: 'Compliance Expert',
    head: 'short', headColor: '#1f2937', acc: 'glasses', skin: SKIN.deep, cloth: '#0c4a6e' },
  { id: 'fin-4', track: 'FinTech', ar: 'مطوّرة البلوكشين', en: 'Blockchain Dev',
    head: 'curly', headColor: '#0f172a', acc: 'visor', skin: SKIN.olive, cloth: '#075985' }
];

export const AVATARS = DEFS.map(d => ({
  id: d.id,
  track: d.track,
  name_ar: d.ar,
  name_en: d.en,
  trackName_ar: TRACK[d.track].ar,
  trackName_en: TRACK[d.track].en,
  color: TRACK[d.track].c1,
  svg: build({ acc: 'none', accent: '#111827', ...d })
}));

/** عنوان بيانات يصلح مباشرة في وسم img — لا يحتاج شبكة ولا ملفاً. */
export const avatarUri = (a) =>
  'data:image/svg+xml,' + encodeURIComponent(a.svg);

/** كل الشخصيات كعناوين جاهزة، مفهرسة بالمعرّف. */
export const AVATAR_URIS = Object.fromEntries(
  AVATARS.map(a => [a.id, avatarUri(a)])
);

export default AVATARS;
