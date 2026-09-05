// فحوصات عقد الجودة على دفعة أسئلة قبل إدخالها.
// تُشغَّل محلياً ولا تحتاج صلاحية كتابة على قاعدة البيانات — تقرأ فقط
// عناوين المسار القائمة للتحقق من صفر تكرار.
//
//   node docs/questions-src/check.mjs <path-to-batch.mjs>
//
// يرجع رمز خروج ١ إذا رسب فحص، فيصلح للاستخدام في أي أتمتة لاحقاً.

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const file = process.argv[2];
if (!file) {
  console.error('الاستخدام: node docs/questions-src/check.mjs <batch.mjs>');
  process.exit(2);
}
// pathToFileURL يقبل المسار النسبي والمطلق معاً على ويندوز ولينكس
const { questions } = await import(pathToFileURL(path.resolve(file)).href);

// ─────────── عناوين المسار القائمة ───────────
// تُجلب حيّة لا من ملف ثابت، فيبقى فحص التكرار صحيحاً كلما نما البنك.
const envText = fs.readFileSync(new URL('../../.env', import.meta.url), 'utf8');
const env = Object.fromEntries(
  envText.split(/\r?\n/)
    .filter(l => l.includes('='))
    .map(l => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()])
);
const H = {
  apikey: env.VITE_SUPABASE_ANON_KEY,
  Authorization: 'Bearer ' + env.VITE_SUPABASE_ANON_KEY
};
const track = questions[0].track_id;
const existing = new Set();
for (let off = 0; ; off += 1000) {
  const url = `${env.VITE_SUPABASE_URL}/rest/v1/questions`
    + `?select=question&track_id=eq.${track}&is_active=eq.true`
    + `&order=id&limit=1000&offset=${off}`;
  const page = await (await fetch(url, { headers: H })).json();
  page.forEach(x => existing.add(x.question));
  if (page.length < 1000) break;
}
console.log(`عناوين المسار «${track}» القائمة: ${existing.size}`);

const fail = [];
const warn = [];
const ok = (m) => console.log('  ✓ ' + m);
const bad = (m) => { fail.push(m); console.log('  ✗ ' + m); };

console.log('\n═══ عدد الأسئلة ═══');
questions.length === 90 ? ok('٩٠ سؤالاً') : bad(`العدد ${questions.length} لا ٩٠`);

console.log('\n═══ توزيع الأنواع ═══');
const TARGET = { 'multiple-choice': 30, code: 10, 'true-false': 10, matching: 10, terminal: 10, 'multi-select': 10, ordering: 10 };
const types = {};
questions.forEach(q => types[q.type] = (types[q.type] || 0) + 1);
Object.entries(TARGET).forEach(([k, v]) =>
  types[k] === v ? ok(`${k}: ${v}`) : bad(`${k}: ${types[k] || 0} بدل ${v}`));

// صف المستوى في جدول التدرّج بـdocs/CURRICULUM.md
const DIFF_TARGET = {
  1: { easyMax: 60, hardMin: 2 },
  2: { easyMax: 40, hardMin: 10 },
  3: { easyMax: 22, hardMin: 18 },
  4: { easyMax: 12, hardMin: 32 },
  5: { easyMax: 4,  hardMin: 38 }
};
const lvl = questions[0].level;
const tgt = DIFF_TARGET[lvl];
console.log(`\n═══ توزيع الصعوبة (المستوى ${lvl}) ═══`);
const diff = {};
questions.forEach(q => diff[q.difficulty] = (diff[q.difficulty] || 0) + 1);
console.log('  ', JSON.stringify(diff));
const pct = (n) => Math.round(((n || 0) / questions.length) * 100);
pct(diff.easy) > tgt.easyMax ? bad(`easy ${pct(diff.easy)}% > ${tgt.easyMax}%`) : ok(`easy ${pct(diff.easy)}%`);
pct(diff.hard) < tgt.hardMin ? bad(`hard ${pct(diff.hard)}% < ${tgt.hardMin}%`) : ok(`hard ${pct(diff.hard)}%`);

console.log('\n═══ مواضع الإجابة في الاختيار من متعدد (هدف ~٢٥٪ لكل موضع) ═══');
const mc = questions.filter(q => q.type === 'multiple-choice');
const pos = [0, 0, 0, 0];
mc.forEach(q => pos[q.correct_answer]++);
console.log('  ', JSON.stringify(pos));
pos.every(p => p >= 6 && p <= 9) ? ok('كل موضع بين ٦ و٩ من ٣٠') : bad(`توزيع منحاز: ${pos}`);

console.log('\n═══ فجوة الطول (الصحيحة لا تزيد عن أطول بديل بـ٧ أحرف) ═══');
let gapFails = 0;
[...mc, ...questions.filter(q => q.type === 'code')].forEach(q => {
  if (!q.options || q.correct_answer === undefined) return;
  const correct = q.options[q.correct_answer];
  const longestOther = Math.max(...q.options.filter((_, i) => i !== q.correct_answer).map(o => o.length));
  const gap = correct.length - longestOther;
  if (gap >= 7) { bad(`فجوة ${gap}: «${q.question}» ← «${correct}»`); gapFails++; }
});
if (!gapFails) ok('صفر فجوة ≥٧');

console.log('\n═══ الصحيحة شاذة: كلمة في كل البدائل وليست فيها ═══');
let odd = 0;
mc.forEach(q => {
  const correct = q.options[q.correct_answer];
  const others = q.options.filter((_, i) => i !== q.correct_answer);
  const words = new Set(others.flatMap(o => o.split(/\s+/)).filter(w => w.length > 4));
  words.forEach(w => {
    if (others.every(o => o.includes(w)) && !correct.includes(w)) {
      warn.push(`«${w}» في كل البدائل لا الصحيحة: ${q.question}`); odd++;
    }
  });
});
odd ? console.log(`  ⚠ ${odd} إنذار — تُقرأ يدوياً`) : ok('صفر حالة');

console.log('\n═══ كلمة من السؤال حصرية بالصحيحة ═══');
let leak = 0;
mc.forEach(q => {
  const correct = q.options[q.correct_answer];
  const others = q.options.filter((_, i) => i !== q.correct_answer);
  q.question.replace(/[؟?،.]/g, '').split(/\s+/).filter(w => w.length > 4).forEach(w => {
    if (correct.includes(w) && !others.some(o => o.includes(w))) {
      warn.push(`«${w}» من السؤال حصرية بالصحيحة: ${q.question}`); leak++;
    }
  });
});
leak ? console.log(`  ⚠ ${leak} إنذار — تُقرأ يدوياً`) : ok('صفر حالة');

console.log('\n═══ التكرار (داخل الدفعة وعبر المسار) ═══');
const titles = questions.map(q => q.question);
const dupInBatch = titles.filter((t, i) => titles.indexOf(t) !== i);
dupInBatch.length ? bad(`تكرار داخلي: ${[...new Set(dupInBatch)].join(' · ')}`) : ok('صفر تكرار داخل الدفعة');
const dupTrack = titles.filter(t => existing.has(t));
dupTrack.length ? bad(`تكرار مع المسار: ${dupTrack.join(' · ')}`) : ok(`صفر تكرار مع ${existing.size} سؤالاً قائماً`);

console.log('\n═══ البنية ═══');
const noExp = questions.filter(q => !q.explanation || !q.explanation.trim());
noExp.length ? bad(`${noExp.length} بلا شرح`) : ok('كل سؤال له شرح');

const badMC = mc.filter(q => !q.options || q.options.length !== 4);
badMC.length ? bad(`${badMC.length} اختيار بغير ٤ خيارات`) : ok('كل اختيار بأربعة خيارات');

const tf = questions.filter(q => q.type === 'true-false');
const badTF = tf.filter(q => q.options?.length !== 2 || ![0, 1].includes(q.correct_answer));
badTF.length ? bad(`${badTF.length} صح/خطأ غير سليم`) : ok('صح/خطأ سليمة');
const tfPos = [tf.filter(q => q.correct_answer === 0).length, tf.filter(q => q.correct_answer === 1).length];
tfPos[0] >= 4 && tfPos[1] >= 4 ? ok(`صح/خطأ متوازنة ${tfPos}`) : bad(`صح/خطأ منحازة ${tfPos}`);

const badMatch = questions.filter(q => q.type === 'matching' && (!q.pairs || q.pairs.length < 3));
badMatch.length ? bad(`${badMatch.length} توصيل بأقل من ٣ أزواج`) : ok('كل توصيل ≥٣ أزواج');

const badOrder = questions.filter(q => q.type === 'ordering' && (!q.options || q.options.length < 4));
badOrder.length ? bad(`${badOrder.length} ترتيب بأقل من ٤ خطوات`) : ok('كل ترتيب ≥٤ خطوات');

const badCode = questions.filter(q => q.type === 'code' && !q.code_snippet);
badCode.length ? bad(`${badCode.length} كود بلا مقطع`) : ok('كل سؤال كود له مقطع');

const badTerm = questions.filter(q => q.type === 'terminal' && (!q.expected_answers?.length || !q.prompt_label));
badTerm.length ? bad(`${badTerm.length} تيرمنال ناقص`) : ok('كل تيرمنال له إجابات ووسم');

const ms = questions.filter(q => q.type === 'multi-select');
const badMS = ms.filter(q => !q.correct_answers || q.correct_answers.length < 2);
badMS.length ? bad(`${badMS.length} متعدد الإجابات ناقص`) : ok('كل متعدد الإجابات له إجابتان فأكثر');
const msPos = {};
ms.forEach(q => q.correct_answers.forEach(i => msPos[i] = (msPos[i] || 0) + 1));
console.log('   مواضع الصح في متعدد الإجابات:', JSON.stringify(msPos));

console.log('\n═══ المواضيع ═══');
const topics = {};
questions.forEach(q => topics[q.topic] = (topics[q.topic] || 0) + 1);
console.log('  ', JSON.stringify(topics));
Object.keys(topics).length <= 3 ? ok(`${Object.keys(topics).length} مواضيع`) : bad(`${Object.keys(topics).length} مواضيع > ٣`);

console.log('\n' + '═'.repeat(52));
if (warn.length) {
  console.log(`\n⚠ ${warn.length} إنذار يحتاج قراءة يدوية:`);
  warn.forEach(w => console.log('   - ' + w));
}
console.log(fail.length ? `\n✗ رسب ${fail.length} فحصاً` : '\n✓ اجتازت كل الفحوصات الآلية');
process.exit(fail.length ? 1 : 0);
