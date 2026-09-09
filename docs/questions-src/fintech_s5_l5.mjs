// التقنية المالية · S5 البيانات والتحليل · L5 ذكاء الأعمال
// ثلاثة مواضيع: بنية البيانات المؤسسية · حوكمة البيانات · ثقافة القرار بالبيانات
//
// آخر مستوى في القسم. L1 المصادر والجودة، وL2 المؤشرات والتحليل الوصفي،
// وL3 التقارير واللوحات، وL4 التنبؤ والنمذجة. وهذا المستوى يسأل عمّا يجعل
// ذلك ممكناً في مؤسسة: من أين تأتي البيانات، ومن يملكها، ومن يقرر بها.
//
// الصعوبة: ٥٠ متوسط · ٤٠ صعب — مطابق لصف L5.

const T = 'FinTech';
const S = 'Financial Data & Analytics';
const L = 5;

const ARC = 'Data Architecture';
const GOV = 'Data Governance';
const CUL = 'Decision Culture';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: ARC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز مستودع البيانات؟',
  options: ['بيانات منظَّمة مهيّأة للتحليل', 'بيانات خام كما وصلت', 'نسخة حيّة من نظام التشغيل', 'ملفات مبعثرة في الأقسام'],
  correct_answer: 0,
  explanation: 'المستودع يجمع ويوحّد ليُسأل لا ليُشغَّل عليه.' },

{ topic: ARC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الفرق بين المستودع وبحيرة البيانات؟',
  options: ['الأول منظَّم سلفاً والثانية خام', 'الأول خام والثانية منظَّمة سلفاً', 'كلاهما يحفظ بيانات منظَّمة', 'كلاهما نسخة من نظام التشغيل'],
  correct_answer: 0,
  explanation: 'البنية تُفرَض عند الكتابة في الأول وعند القراءة في الثانية.' },

{ topic: ARC, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا يُفصَل التحليل عن نظام التشغيل؟',
  options: ['لئلا يبطئ الاستعلام خدمة العملاء', 'لأن التحليل يحتاج بيانات أقل', 'لأن التشغيل لا يحفظ التاريخ', 'لأن التحليل يجري مرة سنوياً'],
  correct_answer: 0,
  explanation: 'استعلام تحليلي ثقيل يزاحم معاملات العملاء.' },

{ topic: ARC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بخط نقل البيانات؟',
  options: ['مسار ينقلها ويحوّلها ويحمّلها', 'خط يربط فرعين بشبكة واحدة', 'قناة يرسل بها العميل طلبه', 'اتصال بين خادمين متجاورين'],
  correct_answer: 0,
  explanation: 'النقل والتحويل والتحميل ثلاث خطوات لا واحدة.' },

{ topic: ARC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز التحميل الدوري عن اللحظي؟',
  options: ['الأول دفعات مجدولة والثاني مستمر', 'الأول مستمر والثاني دفعات مجدولة', 'كلاهما دفعات في موعد ثابت', 'كلاهما نقل مستمر بلا انقطاع'],
  correct_answer: 0,
  explanation: 'اللحظي أغلى، فلا يُختار إلا لقرار لا ينتظر.' },

{ topic: ARC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من طبقة التحويل قبل التحميل؟',
  options: ['توحيد الصيغ ومعالجة النواقص', 'زيادة حجم البيانات المخزّنة', 'تسريع اتصال الشبكة بينها', 'إخفاء مصدر البيانات الأصلي'],
  correct_answer: 0,
  explanation: 'ما لا يُوحَّد قبل التحميل يُوحَّد في كل استعلام.' },

{ topic: ARC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر بطء استعلام على بيانات ضخمة؟',
  options: ['قراءة أعمدة وصفوف لا يحتاجها', 'صغر عدد الأعمدة في الجدول', 'حداثة البيانات المحمّلة فيه', 'قلة المستخدمين الذين يسألونه'],
  correct_answer: 0,
  explanation: 'ما لا يُقرأ لا يكلّف، والتقسيم يقلّل ما يُقرأ.' },

{ topic: ARC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة تقسيم الجداول الكبيرة بالتاريخ؟',
  options: ['قراءة الفترة المطلوبة وحدها', 'ضغط البيانات إلى نصف حجمها', 'إلغاء الحاجة لطبقة التحويل', 'زيادة عدد الأعمدة الممكنة'],
  correct_answer: 0,
  explanation: 'استعلام شهر لا يقرأ خمس سنوات.' },

{ topic: ARC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز البيانات الوصفية؟',
  options: ['تصف الحقل ذاته ومصدره', 'تصف عملاء المؤسسة وحدهم', 'تصف معاملات يوم واحد', 'تصف واجهة عرض التقارير'],
  correct_answer: 0,
  explanation: 'من أين جاء العمود ومتى تحدّث سؤال يجيبه الوصف.' },

{ topic: ARC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الغرض من تتبّع نسب البيانات؟',
  options: ['معرفة أصل الرقم وما مرّ به', 'تحديد من يملك صلاحية قراءته', 'قياس حجم الجدول المخزَّن', 'تسريع تحميل الدفعة القادمة'],
  correct_answer: 0,
  explanation: 'رقم لا يُعرَف مصدره لا يُدافَع عنه عند الشك.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بحوكمة البيانات؟',
  options: ['قواعد لمن يملكها ويصل إليها', 'برنامج يخزّن البيانات ويؤرشفها', 'فريق يكتب التقارير الدورية', 'شبكة تنقل البيانات بين الفروع'],
  correct_answer: 0,
  explanation: 'الحوكمة تنظيم للملكية والوصول والجودة لا أداة.' },

{ topic: GOV, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما دور مالك مجال البيانات؟',
  options: ['يقرر تعريفها وحدود استعمالها', 'يخزّنها على خوادم قسمه', 'يكتب استعلاماتها للمحللين', 'يصمّم لوحاتها ورسومها'],
  correct_answer: 0,
  explanation: 'من يملك المجال يحسم تعريف مقاييسه.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز مبدأ الحد الأدنى للوصول؟',
  options: ['صلاحية بقدر ما يلزم العمل', 'صلاحية كاملة لكل الموظفين', 'صلاحية تُمنَح مرة ولا تُراجَع', 'صلاحية يمنحها كل مدير قسم'],
  correct_answer: 0,
  explanation: 'ما لا يلزم العمل لا يُمنَح ولو كان متاحاً.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من إخفاء البيانات في بيئة الاختبار؟',
  options: ['اختبار بلا كشف بيانات حقيقية', 'تسريع تشغيل بيئة الاختبار', 'تقليل حجم قاعدة الاختبار', 'إلغاء الحاجة لصلاحيات فيها'],
  correct_answer: 0,
  explanation: 'بيئة الاختبار أقل حماية وأكثر من يصل إليها.' },

{ topic: GOV, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الفرق بين الإخفاء والتشفير؟',
  options: ['الأول يستبدل القيمة والثاني يعكسها بمفتاح', 'الأول يعكسها بمفتاح والثاني يستبدلها', 'كلاهما يستبدل القيمة بلا رجعة', 'كلاهما قابل للعكس بمفتاح واحد'],
  correct_answer: 0,
  explanation: 'ما استُبدِل لا يعود، وما شُفِّر يعود بمفتاحه.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي تحدده سياسة الاحتفاظ بالبيانات؟',
  options: ['مدة حفظ كل نوع ثم إتلافه', 'حجم التخزين المتاح للقسم', 'عدد النسخ الاحتياطية اليومية', 'سرعة استرجاع البيانات القديمة'],
  correct_answer: 0,
  explanation: 'الاحتفاظ بما انقضى غرضه عبء ومسؤولية.' },

{ topic: GOV, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يُعدّ الاحتفاظ الزائد خطراً لا احتياطاً؟',
  options: ['يوسّع ما يُسرَّب عند الاختراق', 'يبطئ استعلامات التحليل اليومية', 'يرفع كلفة الشبكة بين الفروع', 'يقلّل دقة التقارير الدورية'],
  correct_answer: 0,
  explanation: 'ما لا يُحفَظ لا يُسرَّق.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من سجل الوصول للبيانات الحساسة؟',
  options: ['معرفة من قرأ ماذا ومتى', 'منع الوصول إليها إطلاقاً', 'تسريع الاستعلامات عليها', 'تقليل حجمها المخزَّن'],
  correct_answer: 0,
  explanation: 'السجل يجعل الوصول قابلاً للمساءلة.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز تصنيف البيانات بحساسيتها؟',
  options: ['يحدد الحماية اللازمة لكل صنف', 'يحدد حجم كل صنف بالتخزين', 'يحدد سرعة قراءة كل صنف', 'يحدد من كتب كل سجل فيها'],
  correct_answer: 0,
  explanation: 'حماية واحدة للكل إما مفرطة وإما ناقصة.' },

{ topic: GOV, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجعل الحوكمة نافذة لا ورقية؟',
  options: ['ضوابط مطبَّقة في الأنظمة نفسها', 'سياسة مكتوبة يوقّع عليها الجميع', 'دورة تدريبية سنوية للموظفين', 'لجنة تجتمع كل ربع سنة'],
  correct_answer: 0,
  explanation: 'ما لا يمنعه النظام لا تمنعه الورقة.' },

{ topic: CUL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز القرار المبني على البيانات؟',
  options: ['يُغيَّر حين يخالفه الدليل', 'يستشهد بأرقام تؤيّده', 'يُتَّخذ بعد عرض تقديمي', 'يوافق عليه أكثر الحضور'],
  correct_answer: 0,
  explanation: 'من لا يغيّر رأيه بالدليل يزيّن رأيه به.' },

{ topic: CUL, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما المقصود بانتقاء ما يوافق الرأي من الأرقام؟',
  options: ['اختيار ما يؤيّد وإهمال ما يخالف', 'اختيار أدق المقاييس المتاحة', 'اختيار أحدث فترة في البيانات', 'اختيار أوضح تمثيل بصري لها'],
  correct_answer: 0,
  explanation: 'بيانات كثيرة تجد فيها ما يؤيّد أي رأي.' },

{ topic: CUL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز السؤال الجيد قبل التحليل؟',
  options: ['يحدد ما سيتغيّر بحسب الجواب', 'يطلب كل البيانات المتاحة', 'يترك المجال مفتوحاً للاستكشاف', 'يذكر الأداة التي ستُستعمل'],
  correct_answer: 0,
  explanation: 'سؤال لا يغيّر جوابه شيئاً لا يستحق تحليلاً.' },

{ topic: CUL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة تحديد المقياس قبل إطلاق مبادرة؟',
  options: ['منع تفسير النتيجة بعد وقوعها', 'تسريع تنفيذ المبادرة نفسها', 'تقليل كلفة جمع البيانات', 'زيادة عدد المشاركين فيها'],
  correct_answer: 0,
  explanation: 'من يختار المقياس بعد النتيجة يثبت ما أراد.' },

{ topic: CUL, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز مقياس المخرَج عن مقياس النشاط؟',
  options: ['الأول أثر والثاني عدد ما فُعِل', 'الأول عدد ما فُعِل والثاني أثر', 'كلاهما يقيس أثراً في العميل', 'كلاهما يعدّ ما أنجزه الفريق'],
  correct_answer: 0,
  explanation: 'عدد الاجتماعات نشاط، وتغيّر الكلفة أثر.' },

{ topic: CUL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما خطر ربط مكافأة الفريق بمقياس واحد؟',
  options: ['تحسين الرقم على حساب غيره', 'انخفاض الرقم المستهدَف نفسه', 'صعوبة حساب المقياس دورياً', 'ارتفاع كلفة جمع بياناته'],
  correct_answer: 0,
  explanation: 'كل مقياس يصير هدفاً يفقد صلاحيته مقياساً.' },

{ topic: CUL, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يعالج تحسين مقياس على حساب غيره؟',
  options: ['مقياس موازن يُقرأ معه', 'رفع المستهدَف كل فترة', 'إخفاء المقياس عن الفريق', 'تغيير المقياس كل شهر'],
  correct_answer: 0,
  explanation: 'السرعة تُقرأ مع الجودة وإلا اشتُريت بها.' },

{ topic: CUL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز محو الأمية البياناتية في المؤسسة؟',
  options: ['قدرة الفرق على قراءة الرقم ونقده', 'وجود محلل بيانات في كل قسم', 'امتلاك أحدث أدوات التحليل', 'عرض لوحات في كل اجتماع'],
  correct_answer: 0,
  explanation: 'من لا يعرف نقد الرقم يقبله كما عُرِض عليه.' },

{ topic: CUL, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر إهمال تحليل صحيح؟',
  options: ['لم يصل في وقت القرار ولا بلغته', 'كان دقيقاً أكثر مما ينبغي', 'استعمل أدوات حديثة جداً', 'اعتمد على بيانات كثيرة'],
  correct_answer: 0,
  explanation: 'تحليل يصل بعد القرار كأنه لم يكن.' },

{ topic: CUL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُقاس ليُعرَف نضج المؤسسة تحليلياً؟',
  options: ['كم قراراً غيّرته البيانات', 'كم لوحة بُنِيت خلال السنة', 'كم أداة تحليل اشترتها', 'كم موظفاً حضر تدريباً'],
  correct_answer: 0,
  explanation: 'مؤسسة تبني لوحات ولا تغيّر قراراً لم تنضج.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: ARC, difficulty: 'medium', type: 'code',
  question: 'ما الذي تصفه هذي الخطوات الثلاث؟',
  code_snippet: 'استخراج من نظم التشغيل\nتوحيد الصيغ ومعالجة النواقص\nتحميل في المستودع',
  options: ['خط نقل بيانات كامل', 'نسخة احتياطية للنظام', 'استعلام تحليلي مباشر', 'أرشفة لبيانات قديمة'],
  correct_answer: 0,
  explanation: 'النقل والتحويل والتحميل ثلاث خطوات لا واحدة.' },

{ topic: ARC, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر بطء استعلام الشهر الواحد؟',
  code_snippet: 'الجدول: خمس سنوات بلا تقسيم\nالاستعلام: عن شهر واحد\nالمقروء: كل الصفوف',
  options: ['غياب التقسيم يقرأ ما لا يلزم', 'حداثة البيانات المحمّلة', 'قلة عدد الأعمدة المطلوبة', 'صغر حجم ذاكرة الخادم'],
  correct_answer: 0,
  explanation: 'استعلام شهر لا يقرأ خمس سنوات.' },

{ topic: ARC, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في هذا التصميم؟',
  code_snippet: 'التحليل: يعمل على قاعدة التشغيل\nالنتيجة: تأخر معاملات العملاء وقت التقارير',
  options: ['تحليل يزاحم التشغيل على المورد', 'تحليل يحتاج بيانات أحدث', 'تقارير أطول مما ينبغي', 'عدد مستخدمين أكبر من اللازم'],
  correct_answer: 0,
  explanation: 'استعلام تحليلي ثقيل يزاحم معاملات العملاء.' },

{ topic: GOV, difficulty: 'hard', type: 'code',
  question: 'ما الخلل في هذي الصلاحيات؟',
  code_snippet: 'الموظف: في خدمة العملاء\nالوصول الممنوح: كل جداول المؤسسة\nالمبرر: لم يُذكَر',
  options: ['وصول يتجاوز ما يلزم العمل', 'وصول أضيق مما يحتاجه', 'تأخير في منح الصلاحية', 'خطأ في تصنيف الجداول'],
  correct_answer: 0,
  explanation: 'ما لا يلزم العمل لا يُمنَح ولو كان متاحاً.' },

{ topic: GOV, difficulty: 'medium', type: 'code',
  question: 'ما الخطر في هذي البيئة؟',
  code_snippet: 'بيئة الاختبار: نسخة من الإنتاج\nأسماء العملاء وأرقامهم: كما هي\nالوصول: مفتوح للمطورين',
  options: ['بيانات حقيقية في بيئة أقل حماية', 'بيانات ناقصة تعطّل الاختبار', 'حجم بيانات أكبر من اللازم', 'بطء في تشغيل بيئة الاختبار'],
  correct_answer: 0,
  explanation: 'بيئة الاختبار أقل حماية وأكثر من يصل إليها.' },

{ topic: GOV, difficulty: 'hard', type: 'code',
  question: 'ما الذي كشفه هذا الحادث؟',
  code_snippet: 'تسريب شمل بيانات ١٢ سنة\nسياسة الاحتفاظ: لا يوجد\nالحاجة لبيانات ما قبل ٥ سنوات: انقضت',
  options: ['احتفاظ زائد وسّع نطاق التسريب', 'ضعف في تشفير قاعدة البيانات', 'خطأ في صلاحيات المطورين', 'قِدَم في نسخ الاحتياط المخزّنة'],
  correct_answer: 0,
  explanation: 'ما لا يُحفَظ لا يُسرَّق.' },

{ topic: CUL, difficulty: 'hard', type: 'code',
  question: 'ما العيب في هذا الاستدلال؟',
  code_snippet: 'المبادرة: أُطلِقت بلا مقياس معلن\nبعد الإطلاق: اختير المقياس الذي تحسّن\nالخلاصة: نجحت',
  options: ['مقياس اختير بعد النتيجة', 'فترة قياس قصيرة جداً', 'عيّنة أصغر مما يلزم', 'مقارنة بفترة غير مشابهة'],
  correct_answer: 0,
  explanation: 'من يختار المقياس بعد النتيجة يثبت ما أراد.' },

{ topic: CUL, difficulty: 'medium', type: 'code',
  question: 'ما الذي تكشفه هذي النتيجة؟',
  code_snippet: 'المستهدَف: تقليل زمن المعالجة\nالنتيجة: الزمن انخفض 40%\nإعادة فتح الحالات: ارتفعت 60%',
  options: ['تحسين مقياس على حساب غيره', 'تحسّن حقيقي في الأداء', 'خطأ في قياس الزمن نفسه', 'تغيّر في عدد الحالات الواردة'],
  correct_answer: 0,
  explanation: 'السرعة تُقرأ مع الجودة وإلا اشتُريت بها.' },

{ topic: CUL, difficulty: 'medium', type: 'code',
  question: 'ما الذي يفسّر إهمال هذا التحليل؟',
  code_snippet: 'التحليل: صحيح ومفصّل\nموعد تسليمه: بعد اتخاذ القرار بأسبوع',
  options: ['وصل بعد وقت القرار', 'كان مفصّلاً أكثر مما يلزم', 'استعمل أداة غير مألوفة', 'اعتمد على بيانات قديمة'],
  correct_answer: 0,
  explanation: 'تحليل يصل بعد القرار كأنه لم يكن.' },

{ topic: ARC, difficulty: 'medium', type: 'code',
  question: 'ما الذي يجيب عنه هذا السجل؟',
  code_snippet: 'العمود: صافي الإيراد\nالمصدر: نظام الفوترة\nآخر تحديث: أمس ٢٣:٠٠\nالمالك: المالية',
  options: ['وصف البيانات ومصدرها', 'صلاحيات الوصول إليها', 'حجمها المخزَّن فعلياً', 'سرعة الاستعلام عنها'],
  correct_answer: 0,
  explanation: 'من أين جاء العمود ومتى تحدّث سؤال يجيبه الوصف.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: ARC, difficulty: 'medium', type: 'true-false',
  question: 'المستودع يفرض البنية عند الكتابة والبحيرة عند القراءة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الأول ينظّم قبل الحفظ، والثانية تحفظ الخام.' },

{ topic: ARC, difficulty: 'medium', type: 'true-false',
  question: 'تشغيل التحليل على قاعدة الإنتاج ممارسة سليمة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'استعلام تحليلي ثقيل يزاحم معاملات العملاء.' },

{ topic: ARC, difficulty: 'hard', type: 'true-false',
  question: 'التحميل اللحظي أفضل من الدوري في كل الحالات.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'اللحظي أغلى، فلا يُختار إلا لقرار لا ينتظر.' },

{ topic: ARC, difficulty: 'medium', type: 'true-false',
  question: 'تقسيم الجدول بالتاريخ يقلّل ما يقرؤه الاستعلام.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'استعلام شهر لا يقرأ خمس سنوات.' },

{ topic: GOV, difficulty: 'medium', type: 'true-false',
  question: 'منح صلاحية واسعة أسهل فيكفي أن تُمنَح مرة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'ما لا يلزم العمل لا يُمنَح ولو كان متاحاً.' },

{ topic: GOV, difficulty: 'hard', type: 'true-false',
  question: 'الإخفاء يستبدل القيمة والتشفير يعكسها بمفتاح.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما استُبدِل لا يعود، وما شُفِّر يعود بمفتاحه.' },

{ topic: GOV, difficulty: 'medium', type: 'true-false',
  question: 'الاحتفاظ بكل البيانات إلى الأبد احتياط حكيم.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'ما لا يُحفَظ لا يُسرَّق.' },

{ topic: CUL, difficulty: 'medium', type: 'true-false',
  question: 'من لا يغيّر رأيه بالدليل يستعمل البيانات تزييناً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'القرار بالبيانات يُغيَّر حين يخالفه الدليل.' },

{ topic: CUL, difficulty: 'hard', type: 'true-false',
  question: 'اختيار المقياس بعد ظهور النتيجة استدلال سليم.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'من يختار المقياس بعد النتيجة يثبت ما أراد.' },

{ topic: CUL, difficulty: 'medium', type: 'true-false',
  question: 'كل مقياس يصير هدفاً وحيداً يفقد صلاحيته مقياساً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'يُحسَّن الرقم على حساب ما لا يُقاس معه.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: ARC, difficulty: 'medium', type: 'matching',
  question: 'صل كل مكوّن في بنية البيانات بدوره',
  pairs: [ { left: 'نظام التشغيل', right: 'يخدم المعاملات' }, { left: 'خط النقل', right: 'ينقل ويحوّل' }, { left: 'المستودع', right: 'يجمع للتحليل' }, { left: 'البحيرة', right: 'تحفظ الخام' } ],
  explanation: 'كل مكوّن يخدم غرضاً لا يخدمه غيره.' },

{ topic: ARC, difficulty: 'hard', type: 'matching',
  question: 'صل كل خيار تصميم بأثره',
  pairs: [ { left: 'تحميل لحظي', right: 'حداثة بكلفة أعلى' }, { left: 'تحميل دوري', right: 'كلفة أقل بتأخر' }, { left: 'تقسيم بالتاريخ', right: 'قراءة أقل' }, { left: 'فصل التحليل', right: 'تشغيل لا يتأثر' } ],
  explanation: 'كل خيار يشتري ميزة بثمن يدفعه في غيرها.' },

{ topic: ARC, difficulty: 'medium', type: 'matching',
  question: 'صل كل سؤال بما يجيبه',
  pairs: [ { left: 'من أين جاء العمود؟', right: 'نسب البيانات' }, { left: 'متى تحدّث؟', right: 'البيانات الوصفية' }, { left: 'من يملكه؟', right: 'سجل الملكية' }, { left: 'من قرأه؟', right: 'سجل الوصول' } ],
  explanation: 'أربعة سجلات تجيب أسئلة لا يجيبها الرقم نفسه.' },

{ topic: GOV, difficulty: 'medium', type: 'matching',
  question: 'صل كل ركن في الحوكمة بمضمونه',
  pairs: [ { left: 'الملكية', right: 'من يقرر التعريف' }, { left: 'الوصول', right: 'من يقرأ وماذا' }, { left: 'الجودة', right: 'ما يُقبَل من بيانات' }, { left: 'الاحتفاظ', right: 'كم تبقى ثم تُتلَف' } ],
  explanation: 'أربعة أركان بلا أحدها تتعثّر الحوكمة.' },

{ topic: GOV, difficulty: 'hard', type: 'matching',
  question: 'صل كل ضابط حماية بما يحققه',
  pairs: [ { left: 'الإخفاء', right: 'اختبار بلا بيانات حقيقية' }, { left: 'التشفير', right: 'حفظ يعود بمفتاحه' }, { left: 'الحد الأدنى للوصول', right: 'تقليل من يرى' }, { left: 'سجل الوصول', right: 'مساءلة من رأى' } ],
  explanation: 'ضابط واحد لا يغطي كل الأخطار.' },

{ topic: GOV, difficulty: 'medium', type: 'matching',
  question: 'صل كل تصنيف بيانات بما يستوجبه',
  pairs: [ { left: 'عامة', right: 'حماية أساسية' }, { left: 'داخلية', right: 'وصول للموظفين' }, { left: 'سرّية', right: 'وصول بحاجة معلنة' }, { left: 'شديدة الحساسية', right: 'وصول مسجَّل ومراجَع' } ],
  explanation: 'حماية واحدة للكل إما مفرطة وإما ناقصة.' },

{ topic: CUL, difficulty: 'medium', type: 'matching',
  question: 'صل كل مقياس بنوعه',
  pairs: [ { left: 'عدد الاجتماعات', right: 'مقياس نشاط' }, { left: 'زمن المعالجة', right: 'مقياس مخرَج' }, { left: 'رضا العميل', right: 'مقياس أثر' }, { left: 'إعادة فتح الحالة', right: 'مقياس موازن' } ],
  explanation: 'عدد الاجتماعات نشاط، وتغيّر الكلفة أثر.' },

{ topic: CUL, difficulty: 'hard', type: 'matching',
  question: 'صل كل خلل في الاستدلال بوصفه',
  pairs: [ { left: 'انتقاء ما يوافق', right: 'إهمال ما يخالف' }, { left: 'مقياس بعد النتيجة', right: 'إثبات ما أُريد' }, { left: 'مقياس وحيد', right: 'تحسين على حساب غيره' }, { left: 'تحليل متأخر', right: 'قرار مضى بلا دليل' } ],
  explanation: 'أربعة أخطاء تُفسِد قراراً ببيانات صحيحة.' },

{ topic: CUL, difficulty: 'medium', type: 'matching',
  question: 'صل كل ممارسة بما تعالجه',
  pairs: [ { left: 'مقياس معلن سلفاً', right: 'الانتقاء بعد النتيجة' }, { left: 'مقياس موازن', right: 'التحسين على حساب غيره' }, { left: 'موعد يسبق القرار', right: 'التحليل المتأخر' }, { left: 'تدريب على قراءة الرقم', right: 'قبوله بلا نقد' } ],
  explanation: 'لكل خلل في ثقافة القرار علاج معلوم.' },

{ topic: ARC, difficulty: 'hard', type: 'matching',
  question: 'صل كل عرض بيانات بموضعه المناسب',
  pairs: [ { left: 'معاملة عميل الآن', right: 'نظام التشغيل' }, { left: 'اتجاه ثلاث سنوات', right: 'المستودع' }, { left: 'ملفات خام غير مهيّأة', right: 'البحيرة' }, { left: 'سجلات انقضى غرضها', right: 'الإتلاف بالسياسة' } ],
  explanation: 'موضع البيانات يتبع الغرض منها.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: ARC, difficulty: 'medium', type: 'terminal', prompt_label: 'المخزن',
  question: 'اكتب اسم المخزن الذي يجمع البيانات منظَّمة للتحليل',
  expected_answers: ['مستودع البيانات', 'المستودع', 'data warehouse', 'مستودع'],
  explanation: 'المستودع يجمع ويوحّد ليُسأل لا ليُشغَّل عليه.' },

{ topic: ARC, difficulty: 'hard', type: 'terminal', prompt_label: 'المسار',
  question: 'اكتب اسم المسار الذي ينقل البيانات ويحوّلها ويحمّلها',
  expected_answers: ['خط نقل البيانات', 'خط الأنابيب', 'pipeline', 'مسار البيانات'],
  explanation: 'النقل والتحويل والتحميل ثلاث خطوات لا واحدة.' },

{ topic: ARC, difficulty: 'medium', type: 'terminal', prompt_label: 'التقنية',
  question: 'اكتب اسم تجزئة الجدول ليُقرأ جزؤه المطلوب',
  expected_answers: ['التقسيم', 'تقسيم الجداول', 'partitioning', 'التجزئة'],
  explanation: 'استعلام شهر لا يقرأ خمس سنوات.' },

{ topic: ARC, difficulty: 'hard', type: 'terminal', prompt_label: 'التتبّع',
  question: 'اكتب اسم تتبّع أصل الرقم وما مرّ به من تحويل',
  expected_answers: ['نسب البيانات', 'سلسلة النسب', 'data lineage', 'تتبّع النسب'],
  explanation: 'رقم لا يُعرَف مصدره لا يُدافَع عنه عند الشك.' },

{ topic: GOV, difficulty: 'medium', type: 'terminal', prompt_label: 'المبدأ',
  question: 'اكتب اسم منح الصلاحية بقدر ما يلزم العمل',
  expected_answers: ['الحد الأدنى للوصول', 'أقل صلاحية', 'least privilege', 'الحد الأدنى للصلاحية'],
  explanation: 'ما لا يلزم العمل لا يُمنَح ولو كان متاحاً.' },

{ topic: GOV, difficulty: 'medium', type: 'terminal', prompt_label: 'الإجراء',
  question: 'اكتب اسم استبدال القيم الحقيقية في بيئة الاختبار',
  expected_answers: ['الإخفاء', 'إخفاء البيانات', 'masking', 'التقنيع'],
  explanation: 'بيئة الاختبار أقل حماية وأكثر من يصل إليها.' },

{ topic: GOV, difficulty: 'hard', type: 'terminal', prompt_label: 'السياسة',
  question: 'اكتب اسم ما يحدد مدة حفظ كل نوع ثم إتلافه',
  expected_answers: ['سياسة الاحتفاظ', 'الاحتفاظ بالبيانات', 'retention policy', 'سياسة حفظ البيانات'],
  explanation: 'الاحتفاظ بما انقضى غرضه عبء ومسؤولية.' },

{ topic: CUL, difficulty: 'medium', type: 'terminal', prompt_label: 'المقياس',
  question: 'اكتب اسم المقياس الذي يُقرأ مع الأول لكشف الضرر',
  expected_answers: ['المقياس الموازن', 'مقياس موازن', 'counter metric', 'المقياس المقابل'],
  explanation: 'السرعة تُقرأ مع الجودة وإلا اشتُريت بها.' },

{ topic: CUL, difficulty: 'hard', type: 'terminal', prompt_label: 'الخلل',
  question: 'اكتب اسم اختيار ما يؤيّد الرأي وإهمال ما يخالفه',
  expected_answers: ['الانتقاء', 'انتقاء الأدلة', 'cherry picking', 'الانتقائية'],
  explanation: 'بيانات كثيرة تجد فيها ما يؤيّد أي رأي.' },

{ topic: CUL, difficulty: 'medium', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يجب إعلانه قبل إطلاق المبادرة لا بعدها',
  expected_answers: ['المقياس', 'مقياس النجاح', 'المستهدَف', 'معيار النجاح'],
  explanation: 'من يختار المقياس بعد النتيجة يثبت ما أراد.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: ARC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يميّز المستودع عن نظام التشغيل؟',
  options: ['يهيّأ للأسئلة التحليلية', 'يحفظ تاريخاً يمتد سنوات', 'يخدم معاملات العملاء لحظياً', 'يحفظ آخر حالة فقط'],
  correct_answers: [0, 1],
  explanation: 'الأخيران وصف لنظام التشغيل لا المستودع.' },

{ topic: ARC, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يقلّل كلفة استعلام تحليلي؟',
  options: ['تقسيم الجدول بالتاريخ', 'قراءة الأعمدة المطلوبة وحدها', 'زيادة عدد الأعمدة المخزّنة', 'تحميل البيانات لحظياً'],
  correct_answers: [0, 1],
  explanation: 'ما لا يُقرأ لا يكلّف.' },

{ topic: ARC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي تجيبه البيانات الوصفية؟',
  options: ['مصدر العمود', 'وقت آخر تحديث', 'قيمة العمود اليوم', 'عدد قارئيه أمس'],
  correct_answers: [0, 1],
  explanation: 'الوصف يصف البيانات لا يعرض قيمها.' },

{ topic: GOV, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي من أركان حوكمة البيانات؟',
  options: ['ملكية معلنة لكل مجال', 'ضوابط وصول مبنية على الحاجة', 'شراء أحدث أدوات التخزين', 'زيادة حجم النسخ الاحتياطية'],
  correct_answers: [0, 1],
  explanation: 'الأخيران أدوات لا حوكمة.' },

{ topic: GOV, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يقلّل ضرر تسريب محتمل؟',
  options: ['سياسة احتفاظ تتلف ما انقضى', 'إخفاء البيانات في بيئات الاختبار', 'توسيع صلاحيات الفرق', 'حفظ كل شيء إلى الأبد'],
  correct_answers: [0, 1],
  explanation: 'ما لا يُحفَظ لا يُسرَّق.' },

{ topic: GOV, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يجعل الحوكمة نافذة؟',
  options: ['ضوابط مطبَّقة في الأنظمة', 'مراجعة دورية للصلاحيات', 'سياسة مكتوبة بلا تطبيق', 'دورة تدريبية سنوية وحدها'],
  correct_answers: [0, 1],
  explanation: 'ما لا يمنعه النظام لا تمنعه الورقة.' },

{ topic: CUL, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يميّز القرار المبني على البيانات؟',
  options: ['يُغيَّر حين يخالفه الدليل', 'يُعلَن مقياسه قبل التنفيذ', 'يستشهد بما يؤيّده فقط', 'يُبنى على رأي الأكثرية'],
  correct_answers: [0, 1],
  explanation: 'من لا يغيّر رأيه بالدليل يزيّن رأيه به.' },

{ topic: CUL, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يعالج أثر المقياس الوحيد؟',
  options: ['إضافة مقياس موازن', 'قراءة المقياسين معاً', 'رفع المستهدَف كل فترة', 'إخفاء المقياس عن الفريق'],
  correct_answers: [0, 1],
  explanation: 'السرعة تُقرأ مع الجودة وإلا اشتُريت بها.' },

{ topic: CUL, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يجعل التحليل مؤثراً في القرار؟',
  options: ['وصوله قبل موعد القرار', 'صياغته بلغة متخذه', 'تفصيله أكثر ما يمكن', 'استعماله أحدث الأدوات'],
  correct_answers: [0, 1],
  explanation: 'تحليل يصل بعد القرار كأنه لم يكن.' },

{ topic: CUL, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يقيس نضج المؤسسة في البيانات؟',
  options: ['قرارات غيّرتها البيانات', 'ثقة الفرق في الأرقام', 'عدد اللوحات المبنيّة', 'عدد الأدوات المشتراة'],
  correct_answers: [0, 1],
  explanation: 'مؤسسة تبني لوحات ولا تغيّر قراراً لم تنضج.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: ARC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب رحلة البيانات في المؤسسة',
  options: ['نشأتها في نظام التشغيل', 'استخراجها وتحويلها', 'تحميلها في المستودع', 'استعمالها في تحليل وقرار'],
  explanation: 'القرار آخر المحطات وأول ما تُبنى الرحلة لأجله.' },

{ topic: ARC, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تسريع استعلام بطيء',
  options: ['قياس ما يُقرأ فعلاً', 'حصر الأعمدة المطلوبة', 'تقسيم الجدول بالتاريخ', 'إعادة القياس بعد التغيير'],
  explanation: 'ما لا يُقاس أولاً لا يُعرَف أثر تغييره.' },

{ topic: ARC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء خط نقل بيانات',
  options: ['تحديد المصادر المطلوبة', 'كتابة قواعد التحويل', 'جدولة التحميل ووتيرته', 'مراقبة فشل الدفعات'],
  explanation: 'خط بلا مراقبة يتوقف بلا أن يُعلَم.' },

{ topic: GOV, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء حوكمة بيانات',
  options: ['حصر مجالات البيانات', 'تعيين مالك لكل مجال', 'تصنيف الحساسية والوصول', 'مراجعة دورية للصلاحيات'],
  explanation: 'المراجعة الدورية هي ما يبقي الحوكمة حيّة.' },

{ topic: GOV, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تطبيق سياسة احتفاظ',
  options: ['تحديد أنواع البيانات', 'تحديد مدة كل نوع', 'أتمتة الإتلاف عند انقضائها', 'توثيق ما أُتلِف'],
  explanation: 'سياسة لا تُؤتمَت تبقى نيّة لا تطبيقاً.' },

{ topic: GOV, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات منح وصول لبيانات حساسة',
  options: ['بيان الحاجة من العمل', 'موافقة مالك المجال', 'منح الحد الأدنى اللازم', 'تسجيل الوصول ومراجعته'],
  explanation: 'الحاجة تسبق الموافقة، والتسجيل يلي المنح.' },

{ topic: CUL, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات قرار مبني على البيانات',
  options: ['صياغة السؤال وما يغيّره', 'تحديد المقياس سلفاً', 'قراءة الدليل كما هو', 'اتخاذ القرار أو تغييره'],
  explanation: 'المقياس يُعلَن قبل النتيجة لا بعدها.' },

{ topic: CUL, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات ضبط مقياس يُساء استعماله',
  options: ['رصد تحسّنه مع ضرر جانبي', 'تحديد ما تضرّر فعلاً', 'إضافة مقياس موازن', 'قراءة الاثنين معاً'],
  explanation: 'كل مقياس يصير هدفاً وحيداً يفقد صلاحيته مقياساً.' },

{ topic: CUL, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات جعل التحليل مؤثراً',
  options: ['معرفة موعد القرار', 'ضبط نطاق التحليل ليسبقه', 'تسليمه بلغة متخذه', 'متابعة ما تغيّر به'],
  explanation: 'تحليل يصل بعد القرار كأنه لم يكن.' },

{ topic: CUL, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات قياس نضج المؤسسة في البيانات',
  options: ['حصر القرارات المتكررة', 'تتبّع ما استند منها لبيانات', 'قياس ما تغيّر منها بالدليل', 'معالجة ما بقي بلا دليل'],
  explanation: 'مؤسسة تبني لوحات ولا تغيّر قراراً لم تنضج.' }

];

// ═══ تدوير مواضع الإجابة الصحيحة ═══
const counters = {};
export const questions = raw.map(q => {
  let out = q;
  if ((q.type === 'multiple-choice' || q.type === 'code') && q.options && q.correct_answer !== undefined) {
    const n = (counters[q.type] = (counters[q.type] ?? -1) + 1);
    const target = n % 4;
    const correct = q.options[q.correct_answer];
    const rest = q.options.filter((_, i) => i !== q.correct_answer);
    const options = [...rest];
    options.splice(target, 0, correct);
    out = { ...q, options, correct_answer: target };
  }
  return { track_id: T, section_id: S, level: L, is_active: true, time_limit: 60, ...out };
});

export default questions;
