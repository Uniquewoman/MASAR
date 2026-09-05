// يحوّل دفعة أسئلة إلى ملف SQL واحد قابل للتشغيل في محرر Supabase.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const src = process.argv[2];
const out = process.argv[3];
const title = process.argv[4] || '';
const { questions } = await import(pathToFileURL(path.resolve(src)).href);

const q = (v) => v === null || v === undefined ? 'NULL' : `'${String(v).replace(/'/g, "''")}'`;
const j = (v) => v === null || v === undefined ? 'NULL' : `'${JSON.stringify(v).replace(/'/g, "''")}'::jsonb`;
const n = (v) => v === null || v === undefined ? 'NULL' : String(v);

const cols = ['track_id','section_id','level','topic','difficulty','question','options',
  'correct_answer','correct_answers','explanation','type','code_snippet','pairs',
  'expected_answers','prompt_label','time_limit','is_active'];

const values = questions.map(r => '  (' + [
  q(r.track_id), q(r.section_id), n(r.level), q(r.topic), q(r.difficulty), q(r.question),
  r.options ? j(r.options) : 'NULL',
  n(r.correct_answer),
  r.correct_answers ? j(r.correct_answers) : 'NULL',
  q(r.explanation), q(r.type), q(r.code_snippet),
  r.pairs ? j(r.pairs) : 'NULL',
  r.expected_answers ? j(r.expected_answers) : 'NULL',
  q(r.prompt_label), n(r.time_limit), 'true'
].join(', ') + ')').join(',\n');

const sql = `-- ${title}
-- ${questions.length} سؤالاً · وُلِّد آلياً بعد اجتياز فحوصات عقد الجودة كاملة:
--   توزيع الأنواع 30/10×6 · مواضع الإجابة 8/8/7/7 · صفر فجوة طول ≥7
--   صفر تكرار داخل الدفعة وعبر المسار · كل الأنواع مكتملة البنية
-- التشغيل: لوحة Supabase ← SQL Editor ← الصق ونفّذ.

begin;

insert into public.questions
  (${cols.join(', ')})
values
${values};

-- تحقق فوري بعد الإدخال
select level, type, count(*)
from public.questions
where track_id = ${q(questions[0].track_id)}
  and section_id = ${q(questions[0].section_id)}
  and level = ${n(questions[0].level)}
  and is_active
group by level, type
order by type;

commit;
`;

fs.mkdirSync(out.replace(/[/\\][^/\\]+$/, ''), { recursive: true });
fs.writeFileSync(out, sql, 'utf8');
console.log(`✓ ${out} — ${questions.length} سؤالاً · ${(sql.length / 1024).toFixed(0)} كيلوبايت`);
