// التقنية المالية · S5 البيانات والتحليل · L3 التقارير واللوحات
// ثلاثة مواضيع: تصميم التقرير · اختيار التمثيل البصري · تشغيل اللوحات
//
// حدود مقصودة: مصادر البيانات وجودتها موضع L1، والمؤشرات والنسب والاتجاه
// والتجزئة موضع L2. وهذا المستوى لا يعيد حساب المقياس، بل يسأل كيف يُعرَض
// ليُقرأ ويُتصرَّف به. التنبؤ والنمذجة موضع L4، وذكاء الأعمال موضع L5.
//
// الصعوبة: ١٣ سهل · ٥٤ متوسط · ٢٣ صعب — مطابق لصف L3.

const T = 'FinTech';
const S = 'Financial Data & Analytics';
const L = 3;

const RPT = 'Report Design';
const VIS = 'Chart Selection';
const DSH = 'Dashboard Practice';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: RPT, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما أول ما يُحدَّد قبل بناء تقرير؟',
  options: ['القرار الذي سيُتَّخذ به', 'عدد الرسوم التي سيضمّها', 'ألوان الهوية المستخدمة', 'برنامج العرض المناسب'],
  correct_answer: 0,
  explanation: 'تقرير لا يخدم قراراً يستهلك وقتاً بلا مقابل.' },

{ topic: RPT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التقرير الموجَّه لجمهوره؟',
  options: ['يعرض ما يقرر به ذلك الجمهور', 'يعرض كل ما توفّر من بيانات', 'يعرض أكبر عدد من الرسوم', 'يعرض التفاصيل التقنية كلها'],
  correct_answer: 0,
  explanation: 'ما لا يقرر به القارئ حشو يزاحم ما يقرر به.' },

{ topic: RPT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما موضع الرسالة الرئيسية في التقرير؟',
  options: ['في أوله قبل تفاصيله', 'في آخره بعد التفاصيل', 'موزَّعة على صفحاته', 'في ملحق منفصل عنه'],
  correct_answer: 0,
  explanation: 'من يقرأ السطر الأول وحده يخرج بالخلاصة.' },

{ topic: RPT, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجعل الرقم في التقرير مفهوماً؟',
  options: ['مرجع يُقارَن به الرقم', 'خط أعرض يُكتَب به الرقم', 'لون يميّز الرقم عن غيره', 'موضع أعلى يوضَع فيه الرقم'],
  correct_answer: 0,
  explanation: 'رقم بلا مقارنة لا يقول مرتفع هو أم منخفض.' },

{ topic: RPT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من ذكر فترة البيانات في التقرير؟',
  options: ['بيان ما يصفه الرقم زمنياً', 'زيادة عدد سطور التقرير', 'إظهار جهد جامع البيانات', 'تأخير قراءة الأرقام نفسها'],
  correct_answer: 0,
  explanation: 'رقم بلا فترة يُقرأ على غير وجهه.' },

{ topic: RPT, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز التقرير القابل للتصرّف؟',
  options: ['يقول ما تغيّر ولماذا وما التالي', 'يقول ما تغيّر بأرقامه فقط', 'يعرض كل المؤشرات المتاحة', 'يقارن كل فترة بما قبلها'],
  correct_answer: 0,
  explanation: 'ما لا يقترح خطوة يبقى عرضاً لا تقريراً.' },

{ topic: RPT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم عند عرض نسبة مئوية؟',
  options: ['بيان الأساس المحسوبة عليه', 'بيان لونها في الرسم', 'بيان من أعدّ حسابها', 'بيان أداة حسابها المستعملة'],
  correct_answer: 0,
  explanation: 'نسبة بلا أساس تخفي حجماً قد يكون ضئيلاً.' },

{ topic: RPT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما خطر عرض المتوسط وحده؟',
  options: ['يخفي تشتّت القيم خلفه', 'يبالغ في حجم العيّنة', 'يغيّر وحدة القياس نفسها', 'يزيد زمن إعداد التقرير'],
  correct_answer: 0,
  explanation: 'متوسطان متساويان قد يخفيان توزيعين مختلفين.' },

{ topic: RPT, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الهامش التوضيحي النافع؟',
  options: ['يفسّر شذوذاً يراه القارئ', 'يعيد وصف ما يظهر بالرسم', 'يشرح طريقة بناء الرسم', 'يذكر اسم مصدر التصميم'],
  correct_answer: 0,
  explanation: 'الشذوذ بلا تفسير يشغل القارئ عن الرسالة.' },

{ topic: RPT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز تقريراً دورياً منضبطاً؟',
  options: ['تعريف ثابت للمقاييس', 'تعريف يتغيّر مع كل فترة', 'مقاييس تُضاف في كل نسخة', 'ترتيب يختلف بين النسخ'],
  correct_answer: 0,
  explanation: 'تغيّر التعريف يجعل المقارنة بين الفترات باطلة.' },

{ topic: VIS, difficulty: 'medium', type: 'multiple-choice',
  question: 'أي تمثيل يناسب تغيّر قيمة عبر الزمن؟',
  options: ['خط زمني متصل', 'رسم دائري بالنسب', 'جدول أرقام مفصّل', 'مخطط تشتّت للنقاط'],
  correct_answer: 0,
  explanation: 'الخط يُظهر الاتجاه الذي يخفيه غيره.' },

{ topic: VIS, difficulty: 'medium', type: 'multiple-choice',
  question: 'أي تمثيل يناسب مقارنة فئات قليلة؟',
  options: ['أعمدة متجاورة للفئات', 'خط زمني متصل', 'مخطط تشتّت للنقاط', 'مؤشر رقمي واحد'],
  correct_answer: 0,
  explanation: 'طول العمود أدق ما تقارنه العين.' },

{ topic: VIS, difficulty: 'hard', type: 'multiple-choice',
  question: 'متى يصلح الرسم الدائري؟',
  options: ['أجزاء قليلة من كلٍّ واحد', 'مقارنة فئات كثيرة دقيقة', 'تتبّع قيمة عبر الزمن', 'إظهار علاقة بين متغيّرين'],
  correct_answer: 0,
  explanation: 'العين تقارن الزوايا بصعوبة، فتكثر فيه الأخطاء.' },

{ topic: VIS, difficulty: 'medium', type: 'multiple-choice',
  question: 'أي تمثيل يُظهر علاقة بين متغيّرين؟',
  options: ['مخطط تشتّت لنقاطهما', 'أعمدة متجاورة للفئات', 'رسم دائري بالنسب', 'مؤشر رقمي واحد'],
  correct_answer: 0,
  explanation: 'انتشار النقاط يكشف اتجاه العلاقة وقوّتها.' },

{ topic: VIS, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يضلّل محور رأسي لا يبدأ من الصفر؟',
  options: ['يضخّم فرقاً صغيراً بصرياً', 'يصغّر فرقاً كبيراً بصرياً', 'يغيّر ترتيب الفئات المعروضة', 'يحذف بعض النقاط تلقائياً'],
  correct_answer: 0,
  explanation: 'العين تقرأ ارتفاع العمود لا رقمه.' },

{ topic: VIS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما خطر استعمال محورين مختلفي المقياس؟',
  options: ['يوحي بعلاقة لا تدل عليها', 'يمنع عرض أكثر من سلسلتين', 'يقلّل دقة قراءة كل سلسلة', 'يغيّر وحدة قياس السلسلتين'],
  correct_answer: 0,
  explanation: 'تقارب الخطين نتيجة المقياس لا نتيجة العلاقة.' },

{ topic: VIS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز استعمال اللون النافع؟',
  options: ['يميّز ما يهمّ ويكبح غيره', 'يميّز كل فئة بلون خاص', 'يزيّن الرسم بألوان متعددة', 'يطابق ألوان الهوية دائماً'],
  correct_answer: 0,
  explanation: 'حين يبرز كل شيء لا يبرز شيء.' },

{ topic: VIS, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الرسم المزدحم؟',
  options: ['تفاصيل تزاحم الرسالة فتخفيها', 'بيانات أكثر مما توفّر فعلاً', 'ألوان أقل مما يحتاجه القارئ', 'محاور أوضح مما يلزم'],
  correct_answer: 0,
  explanation: 'ما لا يخدم الرسالة يُحذف لا يُصغَّر.' },

{ topic: VIS, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما فائدة عنوان الرسم البياني؟',
  options: ['يقول ما يجب أن يُستنتَج منه', 'يذكر اسم أداة الرسم', 'يعيد ذكر أسماء المحاور', 'يحدد ألوان السلاسل فيه'],
  correct_answer: 0,
  explanation: 'عنوان يقول الخلاصة يغني عن تفسير طويل.' },

{ topic: VIS, difficulty: 'medium', type: 'multiple-choice',
  question: 'متى يصلح الجدول بدل الرسم؟',
  options: ['حين تُقرأ قيم بعينها بدقة', 'حين يُقرأ اتجاه عام', 'حين تُقارَن فئات كثيرة', 'حين تُعرَض علاقة بمتغيّر'],
  correct_answer: 0,
  explanation: 'الرسم للاتجاه، والجدول للقيمة المحددة.' },

{ topic: DSH, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الفرق بين اللوحة والتقرير؟',
  options: ['الأولى تُتابَع والثاني يُقرأ مرة', 'الأولى تُقرأ مرة والثاني يُتابَع', 'كلاهما يُقرأ مرة واحدة', 'كلاهما يُحدَّث لحظياً دائماً'],
  correct_answer: 0,
  explanation: 'اللوحة حالة مستمرة، والتقرير لقطة مؤرَّخة.' },

{ topic: DSH, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يحدد وتيرة تحديث اللوحة؟',
  options: ['سرعة القرار المبني عليها', 'قدرة الخادم على التحديث', 'رغبة فريق التطوير فيها', 'عدد مستخدميها المسجَّلين'],
  correct_answer: 0,
  explanation: 'تحديث أسرع من القرار كلفة بلا فائدة.' },

{ topic: DSH, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز التنبيه النافع في اللوحة؟',
  options: ['يُطلَق عند تجاوز حد يستوجب تصرفاً', 'يُطلَق مع كل تغيّر في الرقم', 'يُطلَق في موعد ثابت يومياً', 'يُطلَق لكل مستخدم بلا استثناء'],
  correct_answer: 0,
  explanation: 'تنبيه لا يُتصرَّف عنده يعلّم الناس تجاهل التنبيهات.' },

{ topic: DSH, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما أثر كثرة التنبيهات غير المهمة؟',
  options: ['تجاهل التنبيه المهم حين يأتي', 'تسريع الاستجابة لكل تنبيه', 'زيادة دقة قراءة اللوحة', 'تقليل كلفة تشغيل اللوحة'],
  correct_answer: 0,
  explanation: 'الإنذار المتكرر بلا معنى يُفقِد الإنذار معناه.' },

{ topic: DSH, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة المرشّحات في اللوحة؟',
  options: ['قراءة الرقم لشريحة بعينها', 'تغيير طريقة حساب الرقم', 'إخفاء البيانات عن بعضهم', 'تسريع تحديث مصدر البيانات'],
  correct_answer: 0,
  explanation: 'الرقم الكلي يخفي فروقاً بين الشرائح.' },

{ topic: DSH, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر اختلاف رقمين بين لوحتين؟',
  options: ['اختلاف التعريف أو المرشّح', 'اختلاف ألوان عرض كل منهما', 'اختلاف حجم شاشة كل مستخدم', 'اختلاف ترتيب عناصر كل لوحة'],
  correct_answer: 0,
  explanation: 'الفرق يُحسَم بتوحيد التعريف قبل الاتهام بالخطأ.' },

{ topic: DSH, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من قاموس المقاييس؟',
  options: ['تعريف واحد يرجع إليه الجميع', 'قائمة بأسماء اللوحات كلها', 'سجل بمن فتح اللوحة ومتى', 'دليل ألوان العرض الموحّدة'],
  correct_answer: 0,
  explanation: 'مقياس بتعريفين يصنع رقمين متنازعين.' },

{ topic: DSH, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز اللوحة التشغيلية عن التنفيذية؟',
  options: ['الأولى تفصيلية والثانية موجزة', 'الأولى موجزة والثانية تفصيلية', 'كلاهما بالتفصيل نفسه', 'كلاهما يُحدَّث شهرياً'],
  correct_answer: 0,
  explanation: 'مستوى التفصيل يتبع مستوى القرار.' },

{ topic: DSH, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يُراجَع دورياً في اللوحات القائمة؟',
  options: ['ما يُنظَر إليه فعلاً وما يُهمَل', 'عدد الألوان المستعملة فيها', 'أسماء من صمّموها أصلاً', 'حجم ملفات تصديرها'],
  correct_answer: 0,
  explanation: 'لوحة لا ينظر إليها أحد كلفة تشغيل بلا مقابل.' },

{ topic: DSH, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم عند تعطّل مصدر بيانات اللوحة؟',
  options: ['إظهار أن الرقم قديم', 'عرض آخر رقم بلا إشارة له', 'إخفاء اللوحة حتى يعود', 'استبدال الرقم بتقدير قريب'],
  correct_answer: 0,
  explanation: 'رقم قديم يُقرأ كأنه حديث أسوأ من غيابه.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: VIS, difficulty: 'medium', type: 'code',
  question: 'ما التمثيل المناسب لهذي الحالة؟',
  code_snippet: 'السؤال: كيف تغيّر الإيراد شهرياً؟\nالبيانات: ١٢ شهراً بقيمة لكل شهر',
  options: ['خط زمني متصل', 'رسم دائري بالنسب', 'مخطط تشتّت للنقاط', 'مؤشر رقمي واحد'],
  correct_answer: 0,
  explanation: 'الخط يُظهر الاتجاه الذي يخفيه غيره.' },

{ topic: VIS, difficulty: 'hard', type: 'code',
  question: 'ما الخلل في هذا الرسم؟',
  code_snippet: 'المحور الرأسي: يبدأ من 98\nالقيم: 99 و100 و101\nالانطباع: قفزات هائلة',
  options: ['محور مبتور يضخّم الفرق', 'ألوان غير مناسبة للسلاسل', 'عدد النقاط أقل من اللازم', 'عنوان الرسم غير موجود'],
  correct_answer: 0,
  explanation: 'العين تقرأ ارتفاع العمود لا رقمه.' },

{ topic: VIS, difficulty: 'medium', type: 'code',
  question: 'ما الذي يعيب هذا العرض؟',
  code_snippet: 'الرسم: دائري\nالأجزاء: ١٤ فئة\nالفروق بينها: طفيفة',
  options: ['دائري بفئات أكثر مما يحتمل', 'ألوان أقل من عدد الفئات', 'محور رأسي غير ظاهر', 'عنوان أطول من اللازم'],
  correct_answer: 0,
  explanation: 'العين تقارن الزوايا بصعوبة، فتكثر فيه الأخطاء.' },

{ topic: VIS, difficulty: 'hard', type: 'code',
  question: 'ما الذي يوحي به هذا الرسم زوراً؟',
  code_snippet: 'سلسلتان على محورين مختلفي المقياس\nالخطان: يتحركان معاً بصرياً\nالارتباط المحسوب: ضعيف',
  options: ['علاقة لا تدل عليها البيانات', 'خطأ في جمع البيانات نفسها', 'نقصاً في عدد النقاط', 'اختلافاً في وحدة القياس'],
  correct_answer: 0,
  explanation: 'تقارب الخطين نتيجة المقياس لا نتيجة العلاقة.' },

{ topic: RPT, difficulty: 'medium', type: 'code',
  question: 'ما الذي ينقص هذا الرقم؟',
  code_snippet: 'العنوان: نسبة النمو 40%\nالأساس المحسوبة عليه: غير مذكور\nالقيمة المطلقة: غير مذكورة',
  options: ['أساس النسبة وحجمها المطلق', 'لون مميّز في العرض', 'موضع أعلى في الصفحة', 'خط أعرض في كتابته'],
  correct_answer: 0,
  explanation: 'نسبة بلا أساس تخفي حجماً قد يكون ضئيلاً.' },

{ topic: RPT, difficulty: 'hard', type: 'code',
  question: 'ما الذي تخفيه هذي المقارنة؟',
  code_snippet: 'الفرع أ: متوسط 100 · التشتّت واسع\nالفرع ب: متوسط 100 · التشتّت ضيّق',
  options: ['توزيعين مختلفين بمتوسط واحد', 'خطأً في حساب المتوسط', 'اختلافاً في عدد العملاء', 'اختلافاً في فترة القياس'],
  correct_answer: 0,
  explanation: 'متوسطان متساويان قد يخفيان توزيعين مختلفين.' },

{ topic: DSH, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في هذي اللوحة؟',
  code_snippet: 'مصدر البيانات: متوقف منذ يومين\nالرقم المعروض: كما هو\nإشارة قِدَم البيانات: لا يوجد',
  options: ['رقم قديم يُقرأ كأنه حديث', 'تحديث أسرع من اللازم', 'مرشّحات أكثر مما يلزم', 'ألوان لا تطابق الهوية'],
  correct_answer: 0,
  explanation: 'رقم قديم يُقرأ كأنه حديث أسوأ من غيابه.' },

{ topic: DSH, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر هذا الاختلاف؟',
  code_snippet: 'لوحة أ: العملاء النشطون 12,400\nلوحة ب: العملاء النشطون 9,800\nتعريف «النشط»: يختلف بينهما',
  options: ['تعريف مختلف للمقياس نفسه', 'خطأ في أحد مصدري البيانات', 'اختلاف في ألوان العرض', 'اختلاف في حجم الشاشتين'],
  correct_answer: 0,
  explanation: 'مقياس بتعريفين يصنع رقمين متنازعين.' },

{ topic: DSH, difficulty: 'easy', type: 'code',
  question: 'ما الذي يصفه هذا التنبيه؟',
  code_snippet: 'الحد: نسبة الفشل تتجاوز 2%\nالتنبيه: يُطلَق عند التجاوز\nالإجراء المرتبط: محدد سلفاً',
  options: ['تنبيه مرتبط بحد وتصرّف', 'تنبيه دوري بلا حد', 'تنبيه مع كل تغيّر', 'تنبيه بلا إجراء مرتبط'],
  correct_answer: 0,
  explanation: 'تنبيه لا يُتصرَّف عنده يعلّم الناس تجاهل التنبيهات.' },

{ topic: RPT, difficulty: 'hard', type: 'code',
  question: 'لماذا لا تصحّ هذي المقارنة؟',
  code_snippet: 'الربع الأول: «العميل النشط» من عامل مرة\nالربع الثاني: «العميل النشط» من عامل ثلاثاً',
  options: ['تعريف المقياس تغيّر بين الفترتين', 'الفترتان مختلفتان في الطول', 'عدد العملاء تغيّر بينهما', 'مصدر البيانات تغيّر بينهما'],
  correct_answer: 0,
  explanation: 'تغيّر التعريف يجعل المقارنة بين الفترات باطلة.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: RPT, difficulty: 'easy', type: 'true-false',
  question: 'التقرير يبدأ من القرار الذي سيُتَّخذ به.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'تقرير لا يخدم قراراً يستهلك وقتاً بلا مقابل.' },

{ topic: RPT, difficulty: 'medium', type: 'true-false',
  question: 'كثرة البيانات في التقرير دليل على جودته.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'ما لا يقرر به القارئ حشو يزاحم ما يقرر به.' },

{ topic: RPT, difficulty: 'medium', type: 'true-false',
  question: 'عرض المتوسط وحده كافٍ لوصف مجموعة قيم.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'متوسطان متساويان قد يخفيان توزيعين مختلفين.' },

{ topic: RPT, difficulty: 'hard', type: 'true-false',
  question: 'تغيّر تعريف المقياس يبطل المقارنة بين الفترات.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الرقمان يقيسان شيئين مختلفين وإن حملا اسماً واحداً.' },

{ topic: VIS, difficulty: 'medium', type: 'true-false',
  question: 'المحور الرأسي المبتور يضخّم الفروق الصغيرة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'العين تقرأ ارتفاع العمود لا رقمه.' },

{ topic: VIS, difficulty: 'medium', type: 'true-false',
  question: 'الرسم الدائري يصلح لمقارنة فئات كثيرة بدقة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'العين تقارن الزوايا بصعوبة، فتكثر فيه الأخطاء.' },

{ topic: VIS, difficulty: 'easy', type: 'true-false',
  question: 'تلوين كل عنصر بلون مميّز يبرز ما يهمّ.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'حين يبرز كل شيء لا يبرز شيء.' },

{ topic: DSH, difficulty: 'medium', type: 'true-false',
  question: 'وتيرة تحديث اللوحة تتبع سرعة القرار المبني عليها.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'تحديث أسرع من القرار كلفة بلا فائدة.' },

{ topic: DSH, difficulty: 'hard', type: 'true-false',
  question: 'كثرة التنبيهات تجعل الفريق أسرع استجابة لها.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الإنذار المتكرر بلا معنى يُفقِد الإنذار معناه.' },

{ topic: DSH, difficulty: 'medium', type: 'true-false',
  question: 'إظهار قِدَم البيانات أفضل من عرض رقم قديم بلا إشارة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'رقم قديم يُقرأ كأنه حديث أسوأ من غيابه.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: VIS, difficulty: 'easy', type: 'matching',
  question: 'صل كل سؤال بالتمثيل المناسب له',
  pairs: [ { left: 'تغيّر عبر الزمن', right: 'خط زمني' }, { left: 'مقارنة فئات', right: 'أعمدة متجاورة' }, { left: 'علاقة بين متغيّرين', right: 'مخطط تشتّت' }, { left: 'قيمة محددة بدقة', right: 'جدول أرقام' } ],
  explanation: 'التمثيل يتبع السؤال لا الذوق.' },

{ topic: VIS, difficulty: 'medium', type: 'matching',
  question: 'صل كل عيب بصري بأثره',
  pairs: [ { left: 'محور مبتور', right: 'تضخيم فرق صغير' }, { left: 'محوران مختلفان', right: 'إيحاء بعلاقة' }, { left: 'ألوان كثيرة', right: 'ضياع ما يهمّ' }, { left: 'رسم مزدحم', right: 'اختفاء الرسالة' } ],
  explanation: 'أربعة عيوب تُفسِد رسماً بيانات سليمة.' },

{ topic: VIS, difficulty: 'hard', type: 'matching',
  question: 'صل كل عنصر في الرسم بوظيفته',
  pairs: [ { left: 'العنوان', right: 'يقول الخلاصة' }, { left: 'المحاور', right: 'تحدد المقياس' }, { left: 'اللون', right: 'يبرز ما يهمّ' }, { left: 'الهامش', right: 'يفسّر شذوذاً' } ],
  explanation: 'كل عنصر يؤدي دوراً أو يُحذَف.' },

{ topic: RPT, difficulty: 'medium', type: 'matching',
  question: 'صل كل عنصر في التقرير بغرضه',
  pairs: [ { left: 'الرسالة الأولى', right: 'خلاصة لمن يقرأ سطراً' }, { left: 'المرجع للمقارنة', right: 'يجعل الرقم مفهوماً' }, { left: 'فترة البيانات', right: 'تحدد ما يصفه الرقم' }, { left: 'الخطوة المقترحة', right: 'تجعله قابلاً للتصرّف' } ],
  explanation: 'أربعة عناصر تحوّل عرضاً إلى تقرير.' },

{ topic: RPT, difficulty: 'hard', type: 'matching',
  question: 'صل كل نقص في العرض بما يخفيه',
  pairs: [ { left: 'نسبة بلا أساس', right: 'حجم قد يكون ضئيلاً' }, { left: 'متوسط بلا تشتّت', right: 'فروق داخل المجموعة' }, { left: 'رقم بلا فترة', right: 'ما يصفه زمنياً' }, { left: 'رقم بلا مرجع', right: 'هل هو مرتفع أم لا' } ],
  explanation: 'ما يُحذَف من السياق يُقرأ على غير وجهه.' },

{ topic: RPT, difficulty: 'medium', type: 'matching',
  question: 'صل كل جمهور بما يحتاجه في التقرير',
  pairs: [ { left: 'الإدارة التنفيذية', right: 'خلاصة وقرار' }, { left: 'الفريق التشغيلي', right: 'تفصيل قابل للتنفيذ' }, { left: 'المراجع الرقابي', right: 'أثر يمكن تتبّعه' }, { left: 'الشريك الخارجي', right: 'ما يخصّ تعامله' } ],
  explanation: 'التقرير الواحد للجميع لا يخدم أحداً تماماً.' },

{ topic: DSH, difficulty: 'medium', type: 'matching',
  question: 'صل كل عنصر في اللوحة بدوره',
  pairs: [ { left: 'المؤشر', right: 'يعرض الحالة' }, { left: 'المرشّح', right: 'يحصر الشريحة' }, { left: 'التنبيه', right: 'ينادي عند حد' }, { left: 'قِدَم البيانات', right: 'يبيّن حداثتها' } ],
  explanation: 'أربعة عناصر تجعل اللوحة صالحة للمتابعة.' },

{ topic: DSH, difficulty: 'hard', type: 'matching',
  question: 'صل كل سبب لاختلاف رقمين بين لوحتين',
  pairs: [ { left: 'تعريف مختلف', right: 'المقياس ليس واحداً' }, { left: 'فترة مختلفة', right: 'النطاق الزمني يختلف' }, { left: 'مرشّح مطبَّق', right: 'شريحة لا الكل' }, { left: 'مصدر مختلف', right: 'بيانات غير متطابقة' } ],
  explanation: 'الفرق يُحسَم بتوحيد التعريف قبل الاتهام بالخطأ.' },

{ topic: DSH, difficulty: 'medium', type: 'matching',
  question: 'صل كل نوع لوحة بمستوى تفصيلها',
  pairs: [ { left: 'تنفيذية', right: 'موجزة بقليل مؤشرات' }, { left: 'تشغيلية', right: 'تفصيلية لحظية' }, { left: 'تحليلية', right: 'قابلة للتعمّق' }, { left: 'رقابية', right: 'مركّزة على الحدود' } ],
  explanation: 'مستوى التفصيل يتبع مستوى القرار.' },

{ topic: DSH, difficulty: 'easy', type: 'matching',
  question: 'صل كل حالة بالإجراء الصحيح في اللوحة',
  pairs: [ { left: 'مصدر متوقف', right: 'إظهار قِدَم الرقم' }, { left: 'تنبيه بلا إجراء', right: 'حذفه أو ربطه بإجراء' }, { left: 'لوحة مهملة', right: 'إيقافها' }, { left: 'رقمان متنازعان', right: 'توحيد التعريف' } ],
  explanation: 'كل خلل في اللوحة له علاج معلوم.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: RPT, difficulty: 'medium', type: 'terminal', prompt_label: 'المرجع',
  question: 'اكتب اسم ما يُقارَن به الرقم ليصير مفهوماً',
  expected_answers: ['المرجع', 'خط الأساس', 'المقارنة', 'المعيار'],
  explanation: 'رقم بلا مقارنة لا يقول مرتفع هو أم منخفض.' },

{ topic: RPT, difficulty: 'hard', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يجب ذكره مع كل نسبة مئوية',
  expected_answers: ['الأساس', 'أساس النسبة', 'القيمة المطلقة', 'حجم العيّنة'],
  explanation: 'نسبة بلا أساس تخفي حجماً قد يكون ضئيلاً.' },

{ topic: RPT, difficulty: 'medium', type: 'terminal', prompt_label: 'الصفة',
  question: 'اكتب صفة التقرير الذي يقترح خطوة تالية',
  expected_answers: ['قابل للتصرّف', 'قابل للتنفيذ', 'actionable', 'عملي'],
  explanation: 'ما لا يقترح خطوة يبقى عرضاً لا تقريراً.' },

{ topic: VIS, difficulty: 'medium', type: 'terminal', prompt_label: 'التمثيل',
  question: 'اكتب اسم التمثيل المناسب لتغيّر قيمة عبر الزمن',
  expected_answers: ['الخط الزمني', 'رسم خطي', 'line chart', 'المخطط الخطي'],
  explanation: 'الخط يُظهر الاتجاه الذي يخفيه غيره.' },

{ topic: VIS, difficulty: 'hard', type: 'terminal', prompt_label: 'العيب',
  question: 'اكتب اسم عيب المحور الذي لا يبدأ من الصفر',
  expected_answers: ['محور مبتور', 'بتر المحور', 'محور مقتطع', 'المحور المبتور'],
  explanation: 'العين تقرأ ارتفاع العمود لا رقمه.' },

{ topic: VIS, difficulty: 'easy', type: 'terminal', prompt_label: 'التمثيل',
  question: 'اكتب اسم ما يُظهر علاقة بين متغيّرين',
  expected_answers: ['مخطط التشتّت', 'مخطط تشتت', 'scatter plot', 'رسم الانتشار'],
  explanation: 'انتشار النقاط يكشف اتجاه العلاقة وقوّتها.' },

{ topic: DSH, difficulty: 'medium', type: 'terminal', prompt_label: 'المرجع',
  question: 'اكتب اسم المرجع الذي يوحّد تعريف المقاييس',
  expected_answers: ['قاموس المقاييس', 'دليل المقاييس', 'metric dictionary', 'قاموس البيانات'],
  explanation: 'مقياس بتعريفين يصنع رقمين متنازعين.' },

{ topic: DSH, difficulty: 'hard', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يجب أن يرتبط به كل تنبيه',
  expected_answers: ['إجراء', 'إجراء محدد', 'تصرّف', 'خطوة معلومة'],
  explanation: 'تنبيه لا يُتصرَّف عنده يعلّم الناس تجاهل التنبيهات.' },

{ topic: DSH, difficulty: 'medium', type: 'terminal', prompt_label: 'الأداة',
  question: 'اكتب اسم ما يحصر عرض اللوحة في شريحة بعينها',
  expected_answers: ['المرشّح', 'المرشح', 'filter', 'عامل التصفية'],
  explanation: 'الرقم الكلي يخفي فروقاً بين الشرائح.' },

{ topic: DSH, difficulty: 'hard', type: 'terminal', prompt_label: 'المؤشر',
  question: 'اكتب ما يجب إظهاره حين يتعطّل مصدر البيانات',
  expected_answers: ['قِدَم البيانات', 'قدم البيانات', 'وقت آخر تحديث', 'حداثة البيانات'],
  explanation: 'رقم قديم يُقرأ كأنه حديث أسوأ من غيابه.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: RPT, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يجعل الرقم مفهوماً؟',
  options: ['مرجع يُقارَن به', 'فترة زمنية محددة', 'لون مميّز في العرض', 'خط أعرض في كتابته'],
  correct_answers: [0, 1],
  explanation: 'الأخيران تزيين لا يضيف معنى.' },

{ topic: RPT, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُذكَر مع النسبة المئوية؟',
  options: ['الأساس المحسوبة عليه', 'القيمة المطلقة المقابلة', 'أداة الحساب المستعملة', 'اسم من أعدّ التقرير'],
  correct_answers: [0, 1],
  explanation: 'نسبة بلا أساس تخفي حجماً قد يكون ضئيلاً.' },

{ topic: RPT, difficulty: 'easy', type: 'multi-select',
  question: 'أي مما يلي من صفات التقرير النافع؟',
  options: ['يبدأ بخلاصته', 'يقترح خطوة تالية', 'يعرض كل البيانات', 'يزيد عدد رسومه'],
  correct_answers: [0, 1],
  explanation: 'ما لا يقرر به القارئ حشو يزاحم ما يقرر به.' },

{ topic: VIS, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يضلّل قارئ الرسم؟',
  options: ['محور رأسي مبتور', 'محوران مختلفا المقياس', 'عنوان يقول الخلاصة', 'محاور موسومة بوحداتها'],
  correct_answers: [0, 1],
  explanation: 'الأخيران يوضّحان لا يضلّلان.' },

{ topic: VIS, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُحسّن رسماً مزدحماً؟',
  options: ['حذف ما لا يخدم الرسالة', 'كبح ألوان الخلفية', 'إضافة سلسلة توضيحية', 'تصغير حجم كل عنصر'],
  correct_answers: [0, 1],
  explanation: 'ما لا يخدم الرسالة يُحذَف لا يُصغَّر.' },

{ topic: VIS, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يناسبه الجدول لا الرسم؟',
  options: ['قراءة قيمة بعينها بدقة', 'مراجعة أرقام للتدقيق', 'إظهار اتجاه عام', 'مقارنة فئات كثيرة'],
  correct_answers: [0, 1],
  explanation: 'الرسم للاتجاه، والجدول للقيمة المحددة.' },

{ topic: DSH, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يميّز التنبيه النافع؟',
  options: ['حد واضح يُطلَق عنده', 'إجراء معلوم يتبعه', 'تكرار يومي ثابت', 'إرسال لكل المستخدمين'],
  correct_answers: [0, 1],
  explanation: 'تنبيه لا يُتصرَّف عنده يعلّم الناس تجاهل التنبيهات.' },

{ topic: DSH, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يفسّر اختلاف رقمين بين لوحتين؟',
  options: ['اختلاف تعريف المقياس', 'اختلاف الفترة أو المرشّح', 'اختلاف ألوان العرض', 'اختلاف حجم الشاشة'],
  correct_answers: [0, 1],
  explanation: 'الفرق يُحسَم بتوحيد التعريف قبل الاتهام بالخطأ.' },

{ topic: DSH, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُراجَع في اللوحات القائمة؟',
  options: ['ما يُنظَر إليه فعلاً', 'ما لم يعد يخدم قراراً', 'عدد ألوانها المستعملة', 'أسماء من صمّموها'],
  correct_answers: [0, 1],
  explanation: 'لوحة لا ينظر إليها أحد كلفة تشغيل بلا مقابل.' },

{ topic: DSH, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يحدد وتيرة تحديث اللوحة؟',
  options: ['سرعة القرار المبني عليها', 'وتيرة تغيّر البيانات نفسها', 'عدد مستخدميها المسجَّلين', 'عدد الرسوم المعروضة فيها'],
  correct_answers: [0, 1],
  explanation: 'تحديث أسرع من القرار كلفة بلا فائدة.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: RPT, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء تقرير',
  options: ['تحديد القرار وجمهوره', 'اختيار المقاييس التي تخدمه', 'عرضها بمرجع وفترة', 'اقتراح الخطوة التالية'],
  explanation: 'القرار أولاً، فما لا يخدمه لا يدخل التقرير.' },

{ topic: RPT, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التحقق من صحة مقارنة بين فترتين',
  options: ['مطابقة تعريف المقياس', 'مطابقة طول الفترتين', 'مطابقة المرشّحات المطبَّقة', 'الحكم على الفرق'],
  explanation: 'الحكم آخر خطوة بعد التأكد أن المقارن واحد.' },

{ topic: RPT, difficulty: 'easy', type: 'ordering',
  question: 'رتّب عناصر التقرير من أعلاه إلى أسفله',
  options: ['الخلاصة والرسالة', 'المؤشرات الرئيسية', 'التفاصيل الداعمة', 'الملاحق والمنهجية'],
  explanation: 'من يقرأ السطر الأول وحده يخرج بالخلاصة.' },

{ topic: VIS, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات اختيار تمثيل بصري',
  options: ['تحديد السؤال المطروح', 'تحديد نوع البيانات', 'اختيار التمثيل المناسب', 'حذف ما لا يخدم الرسالة'],
  explanation: 'التمثيل يتبع السؤال لا الذوق.' },

{ topic: VIS, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات مراجعة رسم قبل نشره',
  options: ['فحص بداية المحاور ومقياسها', 'فحص وضوح العنوان', 'فحص ما يمكن حذفه', 'قراءته بعين من لا يعرفه'],
  explanation: 'القراءة بعين الغريب آخر اختبار وأصدقه.' },

{ topic: VIS, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إبراز ما يهمّ في الرسم',
  options: ['تحديد العنصر الحامل للرسالة', 'كبح ألوان بقية العناصر', 'تمييزه بلون واضح', 'وسمه بتعليق مختصر'],
  explanation: 'حين يبرز كل شيء لا يبرز شيء.' },

{ topic: DSH, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء لوحة متابعة',
  options: ['تحديد القرار المتكرر', 'اختيار مؤشراته وحدوده', 'ربط التنبيه بإجراء', 'مراجعة استعمالها لاحقاً'],
  explanation: 'لوحة بلا قرار متكرر لا مبرر لبنائها.' },

{ topic: DSH, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات حسم تنازع رقمين بين لوحتين',
  options: ['مقارنة تعريف المقياس', 'مقارنة الفترة والمرشّحات', 'مقارنة مصدر البيانات', 'توحيد التعريف في القاموس'],
  explanation: 'التوحيد في القاموس يمنع تكرار النزاع.' },

{ topic: DSH, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات ضبط التنبيهات المزعجة',
  options: ['حصر التنبيهات المتكررة', 'قياس ما تُبع بإجراء منها', 'رفع حدود ما لا يُتصرَّف عنده', 'إيقاف ما لا قيمة له'],
  explanation: 'الإنذار المتكرر بلا معنى يُفقِد الإنذار معناه.' },

{ topic: DSH, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات التعامل مع تعطّل مصدر بيانات',
  options: ['كشف توقف التحديث', 'إظهار قِدَم الرقم للقارئ', 'إصلاح المصدر', 'التحقق من عودة الأرقام'],
  explanation: 'إظهار القِدَم قبل الإصلاح يمنع قراراً على رقم قديم.' }

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
