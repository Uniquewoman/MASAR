// التقنية المالية · S6 الأمن والامتثال · L5 الامتثال والتدقيق
// ثلاثة مواضيع: وظيفة الامتثال · التدقيق والأدلة · الرقابة والإفصاح
//
// آخر مستوى في القسم. L1 الاحتيال، وL2 غسل الأموال، وL3 اعرف عميلك،
// وL4 الأمن السيبراني. وهذا المستوى يسأل عمّا يثبت أن ذلك كله يُطبَّق
// فعلاً: من يراقب، وبأي دليل، ولمن يُفصَح.
//
// الصعوبة: ٥٠ متوسط · ٤٠ صعب — مطابق لصف L5.

const T = 'FinTech';
const S = 'Financial Security & Compliance';
const L = 5;

const CMP = 'Compliance Function';
const AUD = 'Audit and Evidence';
const REG = 'Regulation and Disclosure';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: CMP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما وظيفة إدارة الامتثال في المؤسسة المالية؟',
  options: ['التأكد أن العمل يوافق ما يلزمه', 'تنفيذ العمليات المالية اليومية', 'تسويق منتجات المؤسسة للعملاء', 'تطوير أنظمة المؤسسة التقنية'],
  correct_answer: 0,
  explanation: 'الامتثال يراقب الالتزام ولا ينفّذ العمل نفسه.' },

{ topic: CMP, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا تُفصَل الامتثال عن الإدارة التنفيذية؟',
  options: ['لئلا تراقب من تتبع له', 'لتقليل عدد موظفيها', 'لتسريع اعتماد المنتجات', 'لتخفيض كلفة تشغيلها'],
  correct_answer: 0,
  explanation: 'من يتبع لمن يراقبه لا يستطيع مخالفته.' },

{ topic: CMP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بخطوط الدفاع الثلاثة؟',
  options: ['التشغيل ثم الامتثال ثم التدقيق', 'التدقيق ثم الامتثال ثم التشغيل', 'الامتثال ثم التشغيل ثم التدقيق', 'التشغيل ثم التدقيق ثم الامتثال'],
  correct_answer: 0,
  explanation: 'كل خط يراقب ما قبله ويستقل عنه.' },

{ topic: CMP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الخط الأول عن الثاني؟',
  options: ['الأول يملك الخطر والثاني يراقبه', 'الأول يراقب الخطر والثاني يملكه', 'كلاهما يملك الخطر ويديره', 'كلاهما يراقب من موقع مستقل'],
  correct_answer: 0,
  explanation: 'من يمارس النشاط يملك خطره لا من يراقبه.' },

{ topic: CMP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بسياسة الامتثال المكتوبة؟',
  options: ['مرجع معتمد يحدد ما يجوز', 'تقرير سنوي يُرفَع للإدارة', 'قائمة بأسماء موظفي الإدارة', 'دليل تشغيل الأنظمة التقنية'],
  correct_answer: 0,
  explanation: 'ما لا يُكتَب يُفسَّر بالهوى وقت الخلاف.' },

{ topic: CMP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الضابط الوقائي عن الكاشف؟',
  options: ['الأول يمنع الوقوع والثاني يرصده', 'الأول يرصد الوقوع والثاني يمنعه', 'كلاهما يمنع وقوع المخالفة', 'كلاهما يرصد بعد وقوعها'],
  correct_answer: 0,
  explanation: 'المنع أرخص من الكشف، والكشف ألزم مما لا يُمنَع.' },

{ topic: CMP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجعل الضابط فعّالاً لا اسمياً؟',
  options: ['يعمل ويُختبَر ويُوثَّق أثره', 'يُذكَر في السياسة المكتوبة', 'يوافق عليه رئيس القسم', 'يُشرَح في تدريب سنوي'],
  correct_answer: 0,
  explanation: 'ضابط لم يُختبَر لا يُعرَف هل يعمل.' },

{ topic: CMP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من تدريب الموظفين على الامتثال؟',
  options: ['معرفة ما يلزمهم في عملهم فعلاً', 'استيفاء ساعات تدريب مقررة', 'تقليل عدد موظفي الامتثال', 'إثبات حسن نية المؤسسة'],
  correct_answer: 0,
  explanation: 'تدريب لا يغيّر سلوكاً في العمل ساعات مهدورة.' },

{ topic: CMP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز قناة الإبلاغ الداخلي النافعة؟',
  options: ['تحمي المبلِّغ وتُتابَع بلاغاته', 'تكشف هوية المبلِّغ للإدارة', 'تُفتَح مرة كل سنة مالية', 'تقتصر على كبار الموظفين'],
  correct_answer: 0,
  explanation: 'من يخشى العاقبة لا يبلّغ مهما فُتِحت القناة.' },

{ topic: CMP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر بقاء مخالفة رغم وجود سياسة تمنعها؟',
  options: ['سياسة بلا ضابط ينفّذها', 'سياسة مكتوبة بلغة معقّدة', 'سياسة قصيرة أكثر مما يلزم', 'سياسة اعتمدتها الإدارة حديثاً'],
  correct_answer: 0,
  explanation: 'ما لا يمنعه النظام لا تمنعه السياسة وحدها.' },

{ topic: AUD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الفرق بين التدقيق الداخلي والخارجي؟',
  options: ['الأول من داخل المؤسسة والثاني مستقل عنها', 'الأول مستقل عنها والثاني من داخلها', 'كلاهما من داخل المؤسسة', 'كلاهما مستقل عنها تماماً'],
  correct_answer: 0,
  explanation: 'الداخلي يتبع مجلس الإدارة، والخارجي جهة منفصلة.' },

{ topic: AUD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الدليل الصالح في التدقيق؟',
  options: ['كافٍ وموثوق ويخصّ الفترة', 'كثير مهما كان مصدره', 'يؤيّد رأي الإدارة المسبق', 'يصدر عن الفريق المدقَّق عليه'],
  correct_answer: 0,
  explanation: 'دليل من الجهة المدقَّق عليها أضعف من دليل مستقل.' },

{ topic: AUD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما المقصود بمسار التدقيق؟',
  options: ['سجل يتتبّع من فعل ماذا ومتى', 'خطة زيارات المدققين السنوية', 'قائمة الملاحظات المفتوحة', 'دليل إجراءات إدارة التدقيق'],
  correct_answer: 0,
  explanation: 'ما لا يُسجَّل لا يمكن إثباته ولا نفيه.' },

{ topic: AUD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجعل مسار التدقيق معتمَداً؟',
  options: ['لا يستطيع أحد تعديله أو محوه', 'يُحفَظ على جهاز مدير النظام', 'يُراجَع مرة كل خمس سنوات', 'يُختصَر ليقلّ حجم تخزينه'],
  correct_answer: 0,
  explanation: 'سجل يعدّله من يُسجَّل عليه لا يصلح دليلاً.' },

{ topic: AUD, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا يعتمد التدقيق على العيّنة لا الحصر؟',
  options: ['فحص الكل مكلف بلا زيادة يقين', 'العيّنة تعطي يقيناً كاملاً', 'الحصر يمنعه النظام دائماً', 'العيّنة تُختار لتؤيّد النتيجة'],
  correct_answer: 0,
  explanation: 'العيّنة السليمة تكفي، والمنحازة تُبطِل النتيجة.' },

{ topic: AUD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يُبطِل حكم عيّنة التدقيق؟',
  options: ['اختيارها بما يوافق المرجوّ', 'اختيارها بطريقة معلنة سلفاً', 'صغر حجمها مع تمثيلها للكل', 'شمولها فترات مختلفة من السنة'],
  correct_answer: 0,
  explanation: 'عيّنة مختارة لتؤيّد رأياً تثبته لا تختبره.' },

{ topic: AUD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الملاحظة التي تستحق التصعيد؟',
  options: ['أثرها المحتمل وتكرار وقوعها', 'طول وصفها في التقرير', 'اسم الفريق الذي وقعت فيه', 'قِدَم الملاحظة منذ اكتشافها'],
  correct_answer: 0,
  explanation: 'الأثر والتكرار يرتّبان الملاحظات لا الترتيب الزمني.' },

{ topic: AUD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم بعد صدور ملاحظة تدقيق؟',
  options: ['خطة معالجة بمالك وموعد', 'ردّ مكتوب من الإدارة', 'حفظها في ملف الملاحظات', 'انتظار التدقيق القادم'],
  correct_answer: 0,
  explanation: 'ملاحظة بلا مالك ولا موعد لا تُغلَق أبداً.' },

{ topic: AUD, difficulty: 'hard', type: 'multiple-choice',
  question: 'متى تُغلَق ملاحظة التدقيق فعلياً؟',
  options: ['حين يُتحقَّق أن السبب زال', 'حين تُقرّ الإدارة بها', 'حين تُكتَب خطة معالجتها', 'حين ينتهي موعدها المقرر'],
  correct_answer: 0,
  explanation: 'إغلاق بلا تحقق يعيد الملاحظة في الجولة القادمة.' },

{ topic: AUD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التدقيق القائم على المخاطر؟',
  options: ['يبدأ بما أثره أكبر لا بما هو أسهل', 'يفحص كل العمليات بالتساوي', 'يبدأ بالأقسام الأقرب مكاناً', 'يتبع ترتيب الأقسام في الهيكل'],
  correct_answer: 0,
  explanation: 'موارد التدقيق محدودة فتُوجَّه حيث الأثر أكبر.' },

{ topic: REG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من التقارير الدورية للمنظّم؟',
  options: ['إطلاعه على ما يجري في المؤسسة', 'تسويق نتائج المؤسسة للعملاء', 'إثبات ربحية المؤسسة للمساهمين', 'تقييم أداء موظفي الامتثال'],
  correct_answer: 0,
  explanation: 'الرقابة تحتاج صورة دورية لا لقطة عند الأزمة.' },

{ topic: REG, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الإفصاح النافع للجهة الرقابية؟',
  options: ['مبكر وكامل ولو كان في غير صالحك', 'متأخر بعد اكتمال المعالجة', 'مختصر يخفي ما قد يُساءل عنه', 'مؤجَّل حتى تسأل الجهة عنه'],
  correct_answer: 0,
  explanation: 'ما يُكتشَف بالتحقيق أشدّ مما يُفصَح عنه طوعاً.' },

{ topic: REG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بمخاطر عدم الامتثال؟',
  options: ['غرامة وقيود وضرر في السمعة', 'انخفاض في أسعار المنتجات', 'زيادة في عدد الموظفين', 'ارتفاع كلفة الأنظمة التقنية'],
  correct_answer: 0,
  explanation: 'ضرر السمعة قد يفوق الغرامة نفسها.' },

{ topic: REG, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يفوق ضرر السمعة الغرامة أحياناً؟',
  options: ['العميل يغادر ولا يعود سريعاً', 'الغرامة تتكرر كل سنة', 'السمعة تُقاس بدقة أكبر', 'الغرامة تُدفَع على أقساط'],
  correct_answer: 0,
  explanation: 'المال يُعوَّض، والثقة تُبنى في سنوات.' },

{ topic: REG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم عند صدور تنظيم جديد؟',
  options: ['تحليل أثره وتعديل ما يخالفه', 'انتظار أول مخالفة تُرصَد', 'الاكتفاء بتعميمه على الموظفين', 'تأجيله حتى يُطبَّق في السوق'],
  correct_answer: 0,
  explanation: 'مهلة التطبيق فرصة للتهيؤ لا للانتظار.' },

{ topic: REG, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز المؤسسة المستعدة للتفتيش؟',
  options: ['أدلتها جاهزة في مسار عملها', 'تجهّز أدلتها عند الإشعار', 'تعتمد على ذاكرة موظفيها', 'تؤجّل التوثيق لآخر السنة'],
  correct_answer: 0,
  explanation: 'من يوثّق أثناء العمل لا يخشى موعد التفتيش.' },

{ topic: REG, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز ثقافة الامتثال الناضجة؟',
  options: ['يُسأل عن الحكم قبل الإطلاق لا بعده', 'يُسأل عن الحكم بعد أول شكوى', 'تُترَك المسألة لإدارة الامتثال', 'يُكتفى بتوقيع إقرار سنوي'],
  correct_answer: 0,
  explanation: 'ما يُبنى مخالفاً يُعاد بناؤه بكلفة مضاعفة.' },

{ topic: REG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجعل الامتثال ميزة لا عبئاً؟',
  options: ['ثقة تفتح أسواقاً وشراكات', 'إعفاء من الرسوم الرقابية', 'تقليل عدد موظفي المؤسسة', 'تسريع إطلاق كل منتج جديد'],
  correct_answer: 0,
  explanation: 'من لا يثق به المنظّم لا يشاركه أحد.' },

{ topic: REG, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يوازن بين سرعة الابتكار والتزام التنظيم؟',
  options: ['إشراك الامتثال في التصميم مبكراً', 'مراجعة الامتثال بعد الإطلاق', 'تجاوز المراجعة للمنتجات الصغيرة', 'تأجيل الابتكار حتى تتغيّر الأنظمة'],
  correct_answer: 0,
  explanation: 'ما يُبنى مخالفاً يُعاد بناؤه بكلفة مضاعفة.' },

{ topic: REG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُراجَع في برنامج الامتثال دورياً؟',
  options: ['كفاية الضوابط أمام مخاطر متغيّرة', 'عدد التقارير المرفوعة سنوياً', 'أسماء العاملين في الإدارة', 'حجم ميزانية الإدارة المصروفة'],
  correct_answer: 0,
  explanation: 'ضوابط بُنِيت لمخاطر مضت لا تكفي لما استجدّ.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: CMP, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في هذا الترتيب التنظيمي؟',
  code_snippet: 'إدارة الامتثال: تتبع مدير العمليات\nالمخالفات المرصودة: في العمليات نفسها\nالتصعيد: يمرّ بالمدير',
  options: ['امتثال يتبع من يراقبه', 'امتثال بلا موظفين كافين', 'امتثال بلا سياسة مكتوبة', 'امتثال بلا تدريب سنوي'],
  correct_answer: 0,
  explanation: 'من يتبع لمن يراقبه لا يستطيع مخالفته.' },

{ topic: CMP, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر استمرار المخالفة هنا؟',
  code_snippet: 'السياسة: تمنع الإجراء صراحة\nالنظام: يسمح به بلا مانع\nالمخالفات: تتكرر شهرياً',
  options: ['سياسة بلا ضابط ينفّذها', 'سياسة اعتُمِدت حديثاً', 'موظفون لم يقرؤوا السياسة', 'نظام يحتاج ترقية عاجلة'],
  correct_answer: 0,
  explanation: 'ما لا يمنعه النظام لا تمنعه السياسة وحدها.' },

{ topic: CMP, difficulty: 'medium', type: 'code',
  question: 'ما نوع هذا الضابط؟',
  code_snippet: 'النظام: يرفض التحويل قبل استكمال التحقق\nالمخالفة: لا تقع أصلاً',
  options: ['ضابط وقائي يمنع الوقوع', 'ضابط كاشف يرصد بعده', 'ضابط تصحيحي يعالج الأثر', 'ضابط توجيهي يرشد فقط'],
  correct_answer: 0,
  explanation: 'المنع أرخص من الكشف، والكشف ألزم مما لا يُمنَع.' },

{ topic: AUD, difficulty: 'hard', type: 'code',
  question: 'ما الذي يُضعِف هذا الدليل؟',
  code_snippet: 'الدليل: جدول أعدّه الفريق المدقَّق عليه\nالمصدر المستقل: لم يُطلَب\nالتحقق: لم يجرِ',
  options: ['دليل من الجهة المدقَّق عليها', 'دليل حديث أكثر من اللازم', 'دليل مفصّل أكثر مما يلزم', 'دليل يخصّ فترة قديمة'],
  correct_answer: 0,
  explanation: 'دليل من الجهة المدقَّق عليها أضعف من دليل مستقل.' },

{ topic: AUD, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في هذي العيّنة؟',
  code_snippet: 'الهدف: اختبار الالتزام\nالعيّنة: اختارها الفريق المدقَّق عليه\nالنتيجة: صفر ملاحظة',
  options: ['عيّنة منحازة تُبطِل النتيجة', 'عيّنة أكبر مما يلزم', 'عيّنة من فترة واحدة', 'لا خلل ما دامت النتيجة نظيفة'],
  correct_answer: 0,
  explanation: 'عيّنة مختارة لتؤيّد رأياً تثبته لا تختبره.' },

{ topic: AUD, difficulty: 'hard', type: 'code',
  question: 'ما الذي يُبطِل هذا السجل كدليل؟',
  code_snippet: 'السجل: يوثّق عمليات المستخدمين\nصلاحية التعديل عليه: لمدير النظام\nالمدير: من ضمن من يُسجَّل عليهم',
  options: ['من يُسجَّل عليه يعدّل السجل', 'السجل أكبر من اللازم حجماً', 'السجل يُراجَع مرة كل شهر', 'السجل لا يذكر أسماء العملاء'],
  correct_answer: 0,
  explanation: 'سجل يعدّله من يُسجَّل عليه لا يصلح دليلاً.' },

{ topic: AUD, difficulty: 'medium', type: 'code',
  question: 'لماذا عادت هذي الملاحظة؟',
  code_snippet: 'الملاحظة: أُغلِقت العام الماضي\nالتحقق من زوال السبب: لم يجرِ\nالجولة الحالية: ظهرت ثانية',
  options: ['إغلاق بلا تحقق من زوال السبب', 'تدقيق أشدّ من العام الماضي', 'تغيّر في فريق التدقيق', 'اتساع نطاق الجولة الحالية'],
  correct_answer: 0,
  explanation: 'إغلاق بلا تحقق يعيد الملاحظة في الجولة القادمة.' },

{ topic: REG, difficulty: 'hard', type: 'code',
  question: 'ما الذي فاقم هذي الحالة؟',
  code_snippet: 'الخلل: اكتُشِف داخلياً في يناير\nالإفصاح للجهة الرقابية: لم يجرِ\nالجهة: كشفته في تفتيش مارس',
  options: ['كتمان ما كان يمكن الإفصاح عنه', 'سرعة في الإفصاح عن الخلل', 'ضعف في نظام الرصد الداخلي', 'كثرة التقارير المرفوعة'],
  correct_answer: 0,
  explanation: 'ما يُكتشَف بالتحقيق أشدّ مما يُفصَح عنه طوعاً.' },

{ topic: REG, difficulty: 'medium', type: 'code',
  question: 'ما الذي أخّر هذا المنتج؟',
  code_snippet: 'المنتج: بُنِي كاملاً\nمراجعة الامتثال: بعد الاكتمال\nالنتيجة: إعادة بناء أجزاء منه',
  options: ['امتثال أُشرِك بعد البناء', 'فريق تطوير أصغر من اللازم', 'تنظيم جديد صدر فجأة بلا مهلة', 'ميزانية أقل مما يلزم للبناء'],
  correct_answer: 0,
  explanation: 'ما يُبنى مخالفاً يُعاد بناؤه بكلفة مضاعفة.' },

{ topic: REG, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا الاستعداد؟',
  code_snippet: 'الأدلة: تُنتَج مع كل عملية\nالسجلات: محفوظة ومفهرسة\nالتفتيش: لا يحتاج تجهيزاً خاصاً',
  options: ['توثيق أثناء العمل لا عند الطلب', 'تجهيز متعجّل قبل التفتيش', 'اعتماد على ذاكرة الموظفين', 'تأجيل التوثيق لآخر السنة'],
  correct_answer: 0,
  explanation: 'من يوثّق أثناء العمل لا يخشى موعد التفتيش.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: CMP, difficulty: 'medium', type: 'true-false',
  question: 'إدارة الامتثال تنفّذ العمليات المالية بنفسها.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الامتثال يراقب الالتزام ولا ينفّذ العمل نفسه.' },

{ topic: CMP, difficulty: 'hard', type: 'true-false',
  question: 'من يتبع لمن يراقبه لا يستطيع مخالفته.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'لذلك تُفصَل الامتثال عن الإدارة التنفيذية.' },

{ topic: CMP, difficulty: 'medium', type: 'true-false',
  question: 'السياسة المكتوبة وحدها تكفي لمنع المخالفة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'ما لا يمنعه النظام لا تمنعه السياسة وحدها.' },

{ topic: CMP, difficulty: 'medium', type: 'true-false',
  question: 'الضابط الوقائي يمنع الوقوع والكاشف يرصده.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'المنع أرخص من الكشف، والكشف ألزم مما لا يُمنَع.' },

{ topic: AUD, difficulty: 'medium', type: 'true-false',
  question: 'دليل يعدّه الفريق المدقَّق عليه يعادل دليلاً مستقلاً.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'دليل من الجهة المدقَّق عليها أضعف من دليل مستقل.' },

{ topic: AUD, difficulty: 'hard', type: 'true-false',
  question: 'سجل يعدّله من يُسجَّل عليه لا يصلح دليلاً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'قابلية التعديل تُسقِط قيمة السجل الإثباتية.' },

{ topic: AUD, difficulty: 'medium', type: 'true-false',
  question: 'إغلاق الملاحظة يتم بإقرار الإدارة بها.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'إغلاق بلا تحقق يعيد الملاحظة في الجولة القادمة.' },

{ topic: REG, difficulty: 'hard', type: 'true-false',
  question: 'الإفصاح المبكر أخفّ أثراً من كشف الجهة للخلل.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما يُكتشَف بالتحقيق أشدّ مما يُفصَح عنه طوعاً.' },

{ topic: REG, difficulty: 'medium', type: 'true-false',
  question: 'ضرر السمعة أهون دائماً من الغرامة المالية.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'المال يُعوَّض، والثقة تُبنى في سنوات.' },

{ topic: REG, difficulty: 'medium', type: 'true-false',
  question: 'إشراك الامتثال في التصميم أرخص من التعديل بعده.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما يُبنى مخالفاً يُعاد بناؤه بكلفة مضاعفة.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: CMP, difficulty: 'hard', type: 'matching',
  question: 'صل كل خط دفاع بدوره',
  pairs: [ { left: 'الخط الأول', right: 'يمارس ويملك الخطر' }, { left: 'الخط الثاني', right: 'يراقب ويضع الضوابط' }, { left: 'الخط الثالث', right: 'يدقّق باستقلال' }, { left: 'مجلس الإدارة', right: 'يعتمد ويحاسب' } ],
  explanation: 'كل خط يراقب ما قبله ويستقل عنه.' },

{ topic: CMP, difficulty: 'hard', type: 'matching',
  question: 'صل كل نوع ضابط بمثاله',
  pairs: [ { left: 'وقائي', right: 'رفض النظام للإجراء' }, { left: 'كاشف', right: 'تنبيه عند تجاوز حد' }, { left: 'تصحيحي', right: 'إجراء يعالج الأثر' }, { left: 'توجيهي', right: 'سياسة ترشد السلوك' } ],
  explanation: 'المنع أرخص من الكشف، والكشف ألزم مما لا يُمنَع.' },

{ topic: CMP, difficulty: 'medium', type: 'matching',
  question: 'صل كل عنصر في برنامج الامتثال بغرضه',
  pairs: [ { left: 'السياسة المكتوبة', right: 'مرجع لما يجوز' }, { left: 'الضوابط', right: 'تنفيذ السياسة' }, { left: 'التدريب', right: 'معرفة ما يلزم' }, { left: 'قناة الإبلاغ', right: 'كشف ما يخفى' } ],
  explanation: 'أربعة عناصر بلا أحدها يبقى البرنامج ناقصاً.' },

{ topic: AUD, difficulty: 'medium', type: 'matching',
  question: 'صل كل جهة رقابة بموقعها',
  pairs: [ { left: 'التدقيق الداخلي', right: 'داخل المؤسسة مستقل' }, { left: 'التدقيق الخارجي', right: 'جهة منفصلة عنها' }, { left: 'الامتثال', right: 'يراقب الالتزام' }, { left: 'الجهة الرقابية', right: 'تشرف على القطاع' } ],
  explanation: 'الاستقلال درجات لا حالة واحدة.' },

{ topic: AUD, difficulty: 'hard', type: 'matching',
  question: 'صل كل صفة دليل بحكمها',
  pairs: [ { left: 'مصدر مستقل', right: 'أقوى في الإثبات' }, { left: 'من المدقَّق عليه', right: 'أضعف ويحتاج سنداً' }, { left: 'يخصّ الفترة', right: 'صالح للاعتماد' }, { left: 'من فترة أخرى', right: 'لا يثبت الحالي' } ],
  explanation: 'الدليل يُوزَن بمصدره وزمنه لا بحجمه.' },

{ topic: AUD, difficulty: 'medium', type: 'matching',
  question: 'صل كل مرحلة في دورة الملاحظة بمضمونها',
  pairs: [ { left: 'الرصد', right: 'اكتشاف الخلل' }, { left: 'التصعيد', right: 'ترتيب بالأثر' }, { left: 'المعالجة', right: 'مالك وموعد' }, { left: 'الإغلاق', right: 'تحقق من زوال السبب' } ],
  explanation: 'ملاحظة بلا مالك ولا موعد لا تُغلَق أبداً.' },

{ topic: REG, difficulty: 'medium', type: 'matching',
  question: 'صل كل أثر لعدم الامتثال بوصفه',
  pairs: [ { left: 'الغرامة', right: 'كلفة مالية مباشرة' }, { left: 'قيد النشاط', right: 'حدّ على ما يُقدَّم' }, { left: 'ضرر السمعة', right: 'عملاء يغادرون' }, { left: 'سحب الترخيص', right: 'إيقاف النشاط' } ],
  explanation: 'ضرر السمعة قد يفوق الغرامة نفسها.' },

{ topic: REG, difficulty: 'hard', type: 'matching',
  question: 'صل كل ممارسة بأثرها في العلاقة بالمنظّم',
  pairs: [ { left: 'إفصاح مبكر', right: 'ثقة رغم الخلل' }, { left: 'كتمان مكتشَف', right: 'عقوبة مضاعفة' }, { left: 'أدلة جاهزة', right: 'تفتيش أيسر' }, { left: 'تجهيز متعجّل', right: 'شك في الالتزام' } ],
  explanation: 'ما يُكتشَف بالتحقيق أشدّ مما يُفصَح عنه طوعاً.' },

{ topic: REG, difficulty: 'medium', type: 'matching',
  question: 'صل كل خطوة تجاه تنظيم جديد بغرضها',
  pairs: [ { left: 'تحليل الأثر', right: 'معرفة ما يتغيّر' }, { left: 'تعديل الإجراءات', right: 'إزالة ما يخالف' }, { left: 'تدريب المعنيّين', right: 'تطبيق ما تغيّر' }, { left: 'اختبار الضوابط', right: 'إثبات الالتزام' } ],
  explanation: 'مهلة التطبيق فرصة للتهيؤ لا للانتظار.' },

{ topic: CMP, difficulty: 'medium', type: 'matching',
  question: 'صل كل خلل في البرنامج بعلاجه',
  pairs: [ { left: 'سياسة بلا ضابط', right: 'ضابط في النظام' }, { left: 'ضابط بلا اختبار', right: 'اختبار دوري موثّق' }, { left: 'بلاغ بلا حماية', right: 'قناة تحمي المبلِّغ' }, { left: 'تدريب بلا أثر', right: 'ربطه بالعمل اليومي' } ],
  explanation: 'لكل خلل في البرنامج علاج معلوم.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: CMP, difficulty: 'medium', type: 'terminal', prompt_label: 'الترتيب',
  question: 'اكتب اسم ترتيب التشغيل والامتثال والتدقيق',
  expected_answers: ['خطوط الدفاع الثلاثة', 'الخطوط الثلاثة', 'three lines of defence', 'خطوط الدفاع'],
  explanation: 'كل خط يراقب ما قبله ويستقل عنه.' },

{ topic: CMP, difficulty: 'hard', type: 'terminal', prompt_label: 'النوع',
  question: 'اكتب اسم الضابط الذي يمنع وقوع المخالفة',
  expected_answers: ['ضابط وقائي', 'الوقائي', 'preventive control', 'الضابط الوقائي'],
  explanation: 'المنع أرخص من الكشف، والكشف ألزم مما لا يُمنَع.' },

{ topic: CMP, difficulty: 'hard', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يجعل الضابط فعّالاً لا اسمياً',
  expected_answers: ['اختباره وتوثيق أثره', 'الاختبار', 'اختباره دورياً', 'إثبات عمله'],
  explanation: 'ضابط لم يُختبَر لا يُعرَف هل يعمل.' },

{ topic: AUD, difficulty: 'medium', type: 'terminal', prompt_label: 'السجل',
  question: 'اكتب اسم السجل الذي يتتبّع من فعل ماذا ومتى',
  expected_answers: ['مسار التدقيق', 'سجل التدقيق', 'audit trail', 'أثر التدقيق'],
  explanation: 'ما لا يُسجَّل لا يمكن إثباته ولا نفيه.' },

{ topic: AUD, difficulty: 'hard', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يجعل السجل صالحاً للإثبات',
  expected_answers: ['عدم قابليته للتعديل', 'الحماية من التعديل', 'عدم التعديل', 'حصانته من التغيير'],
  explanation: 'سجل يعدّله من يُسجَّل عليه لا يصلح دليلاً.' },

{ topic: AUD, difficulty: 'medium', type: 'terminal', prompt_label: 'الأسلوب',
  question: 'اكتب اسم فحص جزء يمثّل الكل في التدقيق',
  expected_answers: ['العيّنة', 'العينة', 'sampling', 'أسلوب العيّنة'],
  explanation: 'العيّنة السليمة تكفي، والمنحازة تُبطِل النتيجة.' },

{ topic: AUD, difficulty: 'hard', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يلزم لإغلاق ملاحظة تدقيق فعلياً',
  expected_answers: ['التحقق من زوال السبب', 'التحقق', 'إثبات زوال السبب', 'التحقق من المعالجة'],
  explanation: 'إغلاق بلا تحقق يعيد الملاحظة في الجولة القادمة.' },

{ topic: REG, difficulty: 'medium', type: 'terminal', prompt_label: 'الإجراء',
  question: 'اكتب اسم إبلاغ الجهة الرقابية بالخلل قبل كشفها له',
  expected_answers: ['الإفصاح المبكر', 'الإفصاح الطوعي', 'الإفصاح', 'الإبلاغ الذاتي'],
  explanation: 'ما يُكتشَف بالتحقيق أشدّ مما يُفصَح عنه طوعاً.' },

{ topic: REG, difficulty: 'hard', type: 'terminal', prompt_label: 'الخطر',
  question: 'اكتب اسم خطر الغرامة والقيد وضرر السمعة',
  expected_answers: ['مخاطر عدم الامتثال', 'خطر الامتثال', 'compliance risk', 'مخاطر الامتثال'],
  explanation: 'ضرر السمعة قد يفوق الغرامة نفسها.' },

{ topic: REG, difficulty: 'medium', type: 'terminal', prompt_label: 'التوقيت',
  question: 'اكتب متى يُشرَك الامتثال في المنتج الجديد',
  expected_answers: ['في التصميم', 'مبكراً', 'قبل البناء', 'من البداية'],
  explanation: 'ما يُبنى مخالفاً يُعاد بناؤه بكلفة مضاعفة.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: CMP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي من مهام إدارة الامتثال؟',
  options: ['وضع السياسات ومتابعة تطبيقها', 'رصد المخالفات وتصعيدها', 'تنفيذ التحويلات المالية', 'تسويق منتجات المؤسسة'],
  correct_answers: [0, 1],
  explanation: 'الامتثال يراقب الالتزام ولا ينفّذ العمل نفسه.' },

{ topic: CMP, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي شرط في استقلال الامتثال؟',
  options: ['ألّا يتبع من يراقبه', 'أن يصل تصعيده للمجلس', 'أن تكثر ميزانيته', 'أن يوافق على كل منتج'],
  correct_answers: [0, 1],
  explanation: 'من يتبع لمن يراقبه لا يستطيع مخالفته.' },

{ topic: CMP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يجعل الضابط فعّالاً؟',
  options: ['أن يعمل فعلاً في النظام', 'أن يُختبَر ويُوثَّق أثره', 'أن يُذكَر في السياسة', 'أن يوافق عليه المدير'],
  correct_answers: [0, 1],
  explanation: 'ضابط لم يُختبَر لا يُعرَف هل يعمل.' },

{ topic: AUD, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صفة الدليل الصالح؟',
  options: ['كافٍ وموثوق المصدر', 'يخصّ الفترة المدقَّقة', 'كثير مهما كان مصدره', 'يؤيّد رأي الإدارة'],
  correct_answers: [0, 1],
  explanation: 'الدليل يُوزَن بمصدره وزمنه لا بحجمه.' },

{ topic: AUD, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُبطِل نتيجة عيّنة؟',
  options: ['اختيارها بما يوافق النتيجة', 'اختيار المدقَّق عليه لها', 'صغر حجمها مع تمثيلها', 'شمولها فترات مختلفة'],
  correct_answers: [0, 1],
  explanation: 'عيّنة مختارة لتؤيّد رأياً تثبته لا تختبره.' },

{ topic: AUD, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يلزم في معالجة ملاحظة؟',
  options: ['مالك محدد لها', 'موعد معلن للإغلاق', 'وصف مطوّل لها', 'اسم مكتشفها'],
  correct_answers: [0, 1],
  explanation: 'ملاحظة بلا مالك ولا موعد لا تُغلَق أبداً.' },

{ topic: REG, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي من آثار عدم الامتثال؟',
  options: ['غرامة مالية', 'قيد على النشاط', 'انخفاض أسعار المنتجات', 'زيادة عدد الموظفين'],
  correct_answers: [0, 1],
  explanation: 'الأخيران لا علاقة لهما بالمخالفة التنظيمية.' },

{ topic: REG, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يلزم عند صدور تنظيم جديد؟',
  options: ['تحليل أثره على الإجراءات', 'تعديل ما يخالفه منها', 'انتظار أول مخالفة', 'تأجيله حتى يطبّقه غيرك'],
  correct_answers: [0, 1],
  explanation: 'مهلة التطبيق فرصة للتهيؤ لا للانتظار.' },

{ topic: REG, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يميّز الاستعداد الحقيقي للتفتيش؟',
  options: ['أدلة تُنتَج مع العمل', 'سجلات محفوظة ومفهرسة', 'تجهيز متعجّل عند الإشعار', 'اعتماد على ذاكرة الموظفين'],
  correct_answers: [0, 1],
  explanation: 'من يوثّق أثناء العمل لا يخشى موعد التفتيش.' },

{ topic: REG, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يجعل الامتثال ميزة لا عبئاً؟',
  options: ['ثقة تفتح شراكات', 'دخول أسواق منظَّمة', 'إعفاء من الرسوم', 'تسريع كل إطلاق'],
  correct_answers: [0, 1],
  explanation: 'من لا يثق به المنظّم لا يشاركه أحد.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: CMP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء برنامج امتثال',
  options: ['حصر ما يلزم المؤسسة من أنظمة', 'كتابة السياسات المقابلة له', 'بناء ضوابط تنفّذها', 'اختبارها وتوثيق أثرها'],
  explanation: 'ضابط لم يُختبَر لا يُعرَف هل يعمل.' },

{ topic: CMP, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات معالجة مخالفة متكررة',
  options: ['رصد تكرارها وحجمه', 'البحث عن سببها النظامي', 'بناء ضابط يمنعها', 'التحقق من توقفها'],
  explanation: 'ما لا يمنعه النظام لا تمنعه السياسة وحدها.' },

{ topic: CMP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات التعامل مع بلاغ داخلي',
  options: ['استلامه بحماية المبلِّغ', 'التحقق من وقائعه', 'معالجة ما ثبت منه', 'إبلاغ المبلِّغ بالنتيجة'],
  explanation: 'من يخشى العاقبة لا يبلّغ مهما فُتِحت القناة.' },

{ topic: AUD, difficulty: 'medium', type: 'ordering',
  question: 'رتّب مراحل مهمة تدقيق',
  options: ['تحديد النطاق بالمخاطر', 'جمع الأدلة واختبار الضوابط', 'إصدار الملاحظات', 'متابعة المعالجة والإغلاق'],
  explanation: 'موارد التدقيق محدودة فتُوجَّه حيث الأثر أكبر.' },

{ topic: AUD, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات اختبار ضابط',
  options: ['فهم كيف يعمل الضابط', 'اختيار عيّنة غير منحازة', 'فحصها وتوثيق النتيجة', 'الحكم على كفايته'],
  explanation: 'عيّنة مختارة لتؤيّد رأياً تثبته لا تختبره.' },

{ topic: AUD, difficulty: 'medium', type: 'ordering',
  question: 'رتّب دورة حياة ملاحظة تدقيق',
  options: ['رصدها وتوثيق أثرها', 'تصعيدها بحسب الأثر', 'خطة معالجة بمالك وموعد', 'إغلاقها بعد التحقق'],
  explanation: 'إغلاق بلا تحقق يعيد الملاحظة في الجولة القادمة.' },

{ topic: REG, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات التعامل مع تنظيم جديد',
  options: ['قراءته وتحليل أثره', 'حصر ما يخالفه لديك', 'تعديل الإجراءات والأنظمة', 'إثبات الالتزام بأدلة'],
  explanation: 'مهلة التطبيق فرصة للتهيؤ لا للانتظار.' },

{ topic: REG, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات الإفصاح عن خلل مكتشَف',
  options: ['تحديد ما وقع ونطاقه', 'إبلاغ الجهة الرقابية مبكراً', 'معالجة السبب', 'تقرير بما جرى وما عولج'],
  explanation: 'ما يُكتشَف بالتحقيق أشدّ مما يُفصَح عنه طوعاً.' },

{ topic: REG, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إطلاق منتج مالي منظَّم',
  options: ['إشراك الامتثال في التصميم', 'تحديد ما يلزمه من ضوابط', 'بناؤه بها لا بعدها', 'إطلاقه ومتابعة التزامه'],
  explanation: 'ما يُبنى مخالفاً يُعاد بناؤه بكلفة مضاعفة.' },

{ topic: REG, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات مراجعة برنامج الامتثال',
  options: ['حصر المخاطر المستجدّة', 'مقارنتها بالضوابط القائمة', 'سدّ ما ظهر من فجوات', 'إعادة اختبار الضوابط'],
  explanation: 'ضوابط بُنِيت لمخاطر مضت لا تكفي لما استجدّ.' }

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
