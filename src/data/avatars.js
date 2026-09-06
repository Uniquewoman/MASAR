// ═══════════════════════════════════════════════════════════════════
// شخصيات الحساب — عشرون روبوتاً على طراز شخصيات الألعاب،
// أربعة لكل مسار من مسارات الموقع الخمسة، بلون المسار وأداته.
//
// كل شخصية رسم متجهي مبني في الكود لا ملف صورة، لثلاثة أسباب:
//   · لا تحميل من الشبكة ولا مجلد صور يُنشر مع الموقع.
//   · تُحفظ في عمود avatar_url كعنوان بيانات، فتعمل في كل موضع يعرض
//     الصورة بوسم img دون تعديل صفحة واحدة (التحديات والمتصدّرون).
//   · تتوسّع بلا فقد جودة على أي حجم.
// ═══════════════════════════════════════════════════════════════════

const TRACK = {
  Programming:            { c1: '#0d9488', c2: '#042f2e', glow: '#5eead4', ar: 'البرمجة',          en: 'Programming' },
  ArtificialIntelligence: { c1: '#a855f7', c2: '#2e1065', glow: '#e9d5ff', ar: 'الذكاء الاصطناعي', en: 'AI' },
  CyberSecurity:          { c1: '#ef4444', c2: '#450a0a', glow: '#fca5a5', ar: 'الأمن السيبراني',  en: 'Cyber Security' },
  Networking:             { c1: '#3b82f6', c2: '#0c2d6b', glow: '#93c5fd', ar: 'الشبكات',          en: 'Networking' },
  FinTech:                { c1: '#38bdf8', c2: '#075985', glow: '#bae6fd', ar: 'التقنية المالية',  en: 'FinTech' }
};

const GLYPH = {
  Programming: '<path d="M97 97l-6 6 6 6M111 97l6 6-6 6" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  ArtificialIntelligence: '<circle cx="97" cy="97" r="3" fill="#fff"/><circle cx="111" cy="97" r="3" fill="#fff"/><circle cx="104" cy="110" r="3" fill="#fff"/><path d="M97 97l7 13 7-13M97 97h14" stroke="#fff" stroke-width="1.6" fill="none"/>',
  CyberSecurity: '<path d="M104 93l11 4v7c0 7-5 12-11 14-6-2-11-7-11-14v-7z" fill="#fff"/>',
  Networking: '<circle cx="104" cy="104" r="11" stroke="#fff" stroke-width="2.2" fill="none"/><path d="M93 104h22M104 93c5 6 5 16 0 22M104 93c-5 6-5 16 0 22" stroke="#fff" stroke-width="1.8" fill="none"/>',
  FinTech: '<path d="M94 111l6-8 5 5 8-11" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M110 97h5v5" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
};

// ─────────── هيكل الرأس ───────────
const SHELL = {
  // رأس مربّع مستدير الأركان
  box: (m, d) => `<rect x="33" y="36" width="62" height="54" rx="17" fill="${m}"/>`
    + `<rect x="33" y="36" width="62" height="54" rx="17" fill="none" stroke="${d}" stroke-width="2"/>`,

  // قبّة علوية وفكّ عريض
  dome: (m, d) => `<path d="M64 33c-18 0-30 12-30 28v13c0 9 7 16 16 16h28c9 0 16-7 16-16V61c0-16-12-28-30-28z" fill="${m}"/>`
    + `<path d="M64 33c-18 0-30 12-30 28v13c0 9 7 16 16 16h28c9 0 16-7 16-16V61c0-16-12-28-30-28z" fill="none" stroke="${d}" stroke-width="2"/>`,

  // سداسي حادّ الطابع
  hex: (m, d) => `<path d="M64 32l27 15v30L64 92 37 77V47z" fill="${m}"/>`
    + `<path d="M64 32l27 15v30L64 92 37 77V47z" fill="none" stroke="${d}" stroke-width="2"/>`,

  // خوذة ضيّقة من الأسفل
  helm: (m, d) => `<path d="M64 32c-17 0-29 11-29 26v14c0 10 8 18 18 18h22c10 0 18-8 18-18V58c0-15-12-26-29-26z" fill="${m}"/>`
    + `<path d="M40 62h48" stroke="${d}" stroke-width="2"/>`
};

// ─────────── العيون ───────────
const EYES = {
  twin: (g) => `<circle cx="53" cy="62" r="6" fill="${g}"/><circle cx="75" cy="62" r="6" fill="${g}"/>`
    + `<circle cx="53" cy="62" r="2.4" fill="#0f172a"/><circle cx="75" cy="62" r="2.4" fill="#0f172a"/>`,

  visor: (g) => `<rect x="41" y="55" width="46" height="15" rx="7.5" fill="#0b1220"/>`
    + `<rect x="46" y="59" width="13" height="7" rx="3.5" fill="${g}"/>`
    + `<rect x="69" y="59" width="13" height="7" rx="3.5" fill="${g}"/>`,

  slit: (g) => `<rect x="40" y="57" width="48" height="12" rx="6" fill="#0b1220"/>`
    + `<rect x="45" y="61" width="38" height="4" rx="2" fill="${g}"/>`,

  lens: (g) => `<circle cx="64" cy="62" r="15" fill="#0b1220"/><circle cx="64" cy="62" r="10" fill="${g}"/>`
    + `<circle cx="64" cy="62" r="4.5" fill="#0f172a"/><circle cx="59" cy="57" r="2.6" fill="#fff" opacity=".85"/>`,

  pixel: (g) => `<rect x="43" y="56" width="42" height="14" rx="4" fill="#0b1220"/>`
    + `<rect x="47" y="60" width="5" height="6" fill="${g}"/><rect x="55" y="60" width="5" height="6" fill="${g}"/>`
    + `<rect x="68" y="60" width="5" height="6" fill="${g}"/><rect x="76" y="60" width="5" height="6" fill="${g}"/>`,

  trio: (g) => `<circle cx="50" cy="62" r="4.5" fill="${g}"/><circle cx="64" cy="59" r="5.5" fill="${g}"/><circle cx="78" cy="62" r="4.5" fill="${g}"/>`
};

// ─────────── الفم أو اللوحة السفلية ───────────
const MOUTH = {
  grille: (d) => `<g stroke="${d}" stroke-width="2.4" stroke-linecap="round"><path d="M53 80h22M56 85h16"/></g>`,
  smile: (d) => `<path d="M55 79q9 7 18 0" stroke="${d}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
  bar: (d) => `<rect x="54" y="79" width="20" height="5" rx="2.5" fill="${d}"/>`,
  slot: (d) => `<rect x="48" y="78" width="32" height="7" rx="3.5" fill="#0b1220"/><rect x="52" y="80.5" width="24" height="2" rx="1" fill="${d}"/>`,
  none: () => ''
};

// ─────────── الهوائي أو ما يعلو الرأس ───────────
const TOP = {
  none: () => '',
  ball: (c, g) => `<path d="M64 36V24" stroke="${c}" stroke-width="3.4" stroke-linecap="round"/><circle cx="64" cy="20" r="5.5" fill="${g}"/>`,
  dual: (c, g) => `<path d="M48 38l-6-12M80 38l6-12" stroke="${c}" stroke-width="3.2" stroke-linecap="round"/>`
    + `<circle cx="41" cy="23" r="4.5" fill="${g}"/><circle cx="87" cy="23" r="4.5" fill="${g}"/>`,
  dish: (c, g) => `<path d="M64 36V26" stroke="${c}" stroke-width="3.4" stroke-linecap="round"/>`
    + `<ellipse cx="64" cy="21" rx="15" ry="6" fill="${g}"/><ellipse cx="64" cy="21" rx="8" ry="3" fill="${c}"/>`,
  siren: (c, g) => `<rect x="55" y="24" width="18" height="12" rx="6" fill="${g}"/>`
    + `<path d="M46 22l-6-4M82 22l6-4" stroke="${g}" stroke-width="2.6" stroke-linecap="round" opacity=".8"/>`,
  spark: (c, g) => `<path d="M64 34l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" fill="${g}" transform="translate(0,-22)"/>`,
  waves: (c, g) => `<path d="M64 36V26" stroke="${c}" stroke-width="3.2" stroke-linecap="round"/><circle cx="64" cy="23" r="4" fill="${g}"/>`
    + `<path d="M52 20a17 17 0 0 1 24 0M46 14a26 26 0 0 1 36 0" stroke="${g}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".75"/>`,
  fin: (c, g) => `<path d="M64 34c-3-8-1-14 0-18 1 4 3 10 0 18z" fill="${g}"/>`
};

// ─────────── إضافات فوق كل شيء ───────────
const EXTRA = {
  none: () => '',
  // قلنسوة الهاكر
  hood: (c) => `<path d="M64 20c-22 0-36 16-36 38 0 13 3 24 9 33l9-5c-5-8-7-17-7-27 0-17 11-28 25-28s25 11 25 28c0 10-2 19-7 27l9 5c6-9 9-20 9-33 0-22-14-38-36-38z" fill="${c}"/>`,
  // درع على الجبهة
  shield: (g) => `<path d="M64 34l10 4v7c0 6-4 10-10 12-6-2-10-6-10-12v-7z" fill="${g}" opacity=".9"/>`,
  // سمّاعات على الجانبين
  cans: (m, d) => `<rect x="24" y="52" width="12" height="24" rx="6" fill="${d}"/><rect x="92" y="52" width="12" height="24" rx="6" fill="${d}"/>`
    + `<path d="M30 52V48c0-14 15-24 34-24s34 10 34 24v4" stroke="${d}" stroke-width="4" fill="none"/>`,
  // سلسلة على الصدر
  chain: (g) => `<circle cx="55" cy="104" r="6" stroke="${g}" stroke-width="2.6" fill="none"/><circle cx="70" cy="104" r="6" stroke="${g}" stroke-width="2.6" fill="none"/>`
};

// ─────────── ألواح الأذن الجانبية ───────────
const ears = (d) =>
  `<rect x="26" y="57" width="9" height="17" rx="4.5" fill="${d}"/><rect x="93" y="57" width="9" height="17" rx="4.5" fill="${d}"/>`;

// ─────────── تركيب الروبوت ───────────
const build = (d) => {
  const { c1, c2, glow } = TRACK[d.track];
  const metal = d.metal || '#cbd5e1';
  const edge = d.edge || '#64748b';
  const g = d.glow || glow;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">`
    + `<defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1">`
    + `<stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>`
    + `<circle cx="64" cy="64" r="64" fill="url(#b)"/>`
    // الجسم
    + `<path d="M26 128c0-20 17-31 38-31s38 11 38 31z" fill="${d.body || edge}"/>`
    + `<rect x="57" y="86" width="14" height="12" rx="4" fill="${edge}"/>`
    + (d.extra === 'cans' ? EXTRA.cans(metal, edge) : ears(edge))
    + (d.top ? TOP[d.top](metal, g) : '')
    + SHELL[d.shell](metal, edge)
    + EYES[d.eyes](g)
    + MOUTH[d.mouth](edge)
    + (d.extra && d.extra !== 'cans' ? EXTRA[d.extra](d.extraColor || g) : '')
    + `<circle cx="104" cy="104" r="17" fill="#0f172a" opacity=".92"/>`
    + GLYPH[d.track]
    + `</svg>`;
};

// ─────────── الشخصيات العشرون ───────────
const DEFS = [
  // ══ البرمجة ══
  { id: 'prog-1', track: 'Programming', ar: 'بوت المطوّر', en: 'Dev Bot',
    shell: 'box', eyes: 'visor', mouth: 'grille', top: 'ball' },
  { id: 'prog-2', track: 'Programming', ar: 'بوت الطرفية', en: 'Terminal Bot',
    shell: 'box', eyes: 'pixel', mouth: 'bar', top: 'none', metal: '#94a3b8', edge: '#334155' },
  { id: 'prog-3', track: 'Programming', ar: 'بوت التصحيح', en: 'Debug Bot',
    shell: 'dome', eyes: 'lens', mouth: 'smile', top: 'fin' },
  { id: 'prog-4', track: 'Programming', ar: 'بوت الخوارزميات', en: 'Algo Bot',
    shell: 'hex', eyes: 'trio', mouth: 'grille', top: 'dual' },

  // ══ الذكاء الاصطناعي ══
  { id: 'ai-1', track: 'ArtificialIntelligence', ar: 'بوت العصبونات', en: 'Neuro Bot',
    shell: 'dome', eyes: 'twin', mouth: 'grille', top: 'dual' },
  { id: 'ai-2', track: 'ArtificialIntelligence', ar: 'بوت التدريب', en: 'Trainer Bot',
    shell: 'box', eyes: 'visor', mouth: 'bar', top: 'none', extra: 'cans' },
  { id: 'ai-3', track: 'ArtificialIntelligence', ar: 'بوت الرؤية', en: 'Vision Bot',
    shell: 'helm', eyes: 'lens', mouth: 'none', top: 'ball' },
  { id: 'ai-4', track: 'ArtificialIntelligence', ar: 'بوت التوليد', en: 'Gen Bot',
    shell: 'hex', eyes: 'trio', mouth: 'smile', top: 'spark' },

  // ══ الأمن السيبراني ══
  { id: 'cyb-1', track: 'CyberSecurity', ar: 'بوت الهاكر', en: 'Hacker Bot',
    shell: 'helm', eyes: 'slit', mouth: 'none', top: 'none',
    extra: 'hood', extraColor: '#111827', metal: '#475569', edge: '#1e293b', glow: '#4ade80' },
  { id: 'cyb-2', track: 'CyberSecurity', ar: 'بوت الدرع', en: 'Shield Bot',
    shell: 'box', eyes: 'twin', mouth: 'grille', top: 'none', extra: 'shield' },
  { id: 'cyb-3', track: 'CyberSecurity', ar: 'بوت التخفّي', en: 'Stealth Bot',
    shell: 'hex', eyes: 'slit', mouth: 'bar', top: 'fin', metal: '#334155', edge: '#0f172a' },
  { id: 'cyb-4', track: 'CyberSecurity', ar: 'بوت الإنذار', en: 'Alert Bot',
    shell: 'dome', eyes: 'pixel', mouth: 'grille', top: 'siren' },

  // ══ الشبكات ══
  { id: 'net-1', track: 'Networking', ar: 'بوت الإشارة', en: 'Signal Bot',
    shell: 'box', eyes: 'twin', mouth: 'smile', top: 'waves' },
  { id: 'net-2', track: 'Networking', ar: 'بوت التوجيه', en: 'Router Bot',
    shell: 'hex', eyes: 'pixel', mouth: 'bar', top: 'dual' },
  { id: 'net-3', track: 'Networking', ar: 'بوت القمر', en: 'Satellite Bot',
    shell: 'dome', eyes: 'visor', mouth: 'grille', top: 'dish' },
  { id: 'net-4', track: 'Networking', ar: 'بوت المراقبة', en: 'Monitor Bot',
    shell: 'helm', eyes: 'lens', mouth: 'bar', top: 'ball', metal: '#94a3b8', edge: '#1e3a5f' },

  // ══ التقنية المالية ══
  { id: 'fin-1', track: 'FinTech', ar: 'بوت المدفوعات', en: 'Payments Bot',
    shell: 'box', eyes: 'visor', mouth: 'slot', top: 'none' },
  { id: 'fin-2', track: 'FinTech', ar: 'بوت التحليل', en: 'Analyst Bot',
    shell: 'dome', eyes: 'twin', mouth: 'smile', top: 'ball' },
  { id: 'fin-3', track: 'FinTech', ar: 'بوت البلوكشين', en: 'Chain Bot',
    shell: 'hex', eyes: 'trio', mouth: 'grille', top: 'dual', extra: 'chain' },
  { id: 'fin-4', track: 'FinTech', ar: 'بوت الامتثال', en: 'Compliance Bot',
    shell: 'helm', eyes: 'pixel', mouth: 'bar', top: 'fin', extra: 'shield' }
];

export const AVATARS = DEFS.map(d => ({
  id: d.id,
  track: d.track,
  name_ar: d.ar,
  name_en: d.en,
  trackName_ar: TRACK[d.track].ar,
  trackName_en: TRACK[d.track].en,
  color: TRACK[d.track].c1,
  svg: build(d)
}));

/** عنوان بيانات يصلح مباشرة في وسم img — لا يحتاج شبكة ولا ملفاً. */
export const avatarUri = (a) =>
  'data:image/svg+xml,' + encodeURIComponent(a.svg);

/** كل الشخصيات كعناوين جاهزة، مفهرسة بالمعرّف. */
export const AVATAR_URIS = Object.fromEntries(
  AVATARS.map(a => [a.id, avatarUri(a)])
);

export default AVATARS;
