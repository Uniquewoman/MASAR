// التقنية المالية · S3 المصرفية الرقمية · L5 التحول الرقمي
// ثلاثة مواضيع: الأنظمة القديمة والهجرة · تغيير طريقة العمل · حوكمة التحول
//
// آخر مستوى في القسم. L1 وصف البنك الرقمي وخدماته، وL2 المصرفية
// المفتوحة، وL3 الواجهات، وL4 تجربة العميل. وهذا المستوى يسأل عمّا
// يجعل ذلك ممكناً في مؤسسة قائمة: نظام قديم لا يُطفَأ، وفرق تعمل
// بطريقة قديمة، وقرارات تحتاج من يملكها.
//
// الصعوبة: ٥٠ متوسط · ٤٠ صعب — مطابق لصف L5.

const T = 'FinTech';
const S = 'Digital Banking';
const L = 5;

const LEG = 'Legacy Migration';
const WAY = 'Ways of Working';
const GOV = 'Transformation Governance';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: LEG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالنظام القديم في مؤسسة مالية؟',
  options: ['نظام حرج يصعب تغييره أو إحلاله', 'نظام أُطلِق قبل سنة من اليوم', 'نظام لا يستخدمه أحد منذ سنة', 'نظام مكتوب بلغة غير مألوفة'],
  correct_answer: 0,
  explanation: 'قِدَمه ليس عيبه، بل صعوبة تغييره مع حرج ما يشغّله.' },

{ topic: LEG, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما خطر استبدال النظام القديم دفعة واحدة؟',
  options: ['عطل واسع بلا طريق للعودة', 'بطء في إنجاز المشروع', 'ارتفاع كلفة التدريب وحدها', 'تأخر إطلاق خدمة جديدة'],
  correct_answer: 0,
  explanation: 'ما يشغّل أعمالاً حرجة لا يُبدَّل في ليلة واحدة.' },

{ topic: LEG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالهجرة التدريجية للأنظمة؟',
  options: ['نقل جزء بعد جزء والقديم عامل', 'نقل الكل في يوم واحد معلن مسبقاً', 'بناء نظام جديد بلا نقل بيانات', 'تجميد التطوير حتى ينتهي النقل'],
  correct_answer: 0,
  explanation: 'كل جزء يُنقَل ويُثبَت قبل أن يليه الذي بعده.' },

{ topic: LEG, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما وظيفة طبقة وسيطة أمام نظام قديم؟',
  options: ['تعزل الجديد عن تفاصيله حتى يُستبدَل', 'تلغي الحاجة لاستبداله إطلاقاً', 'تسرّع النظام القديم في عمله', 'تنقل بياناته إلى نظام آخر'],
  correct_answer: 0,
  explanation: 'من بنى على الوسيط لا يتأثر بما وراءه حين يتغيّر.' },

{ topic: LEG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم قبل نقل بيانات إلى نظام جديد؟',
  options: ['تنظيفها ومطابقتها بعد النقل', 'نقلها كما هي بلا فحص مسبق', 'حذف القديم فور بدء النقل', 'إيقاف الخدمة شهراً كاملاً'],
  correct_answer: 0,
  explanation: 'بيانات مشوّهة في نظام جديد تُفسِد ما بُنِي عليها.' },

{ topic: LEG, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الغرض من التشغيل المتوازي للنظامين؟',
  options: ['مقارنة النتائج قبل الاعتماد', 'مضاعفة كلفة التشغيل بلا داعٍ', 'إبقاء القديم إلى الأبد', 'إخفاء عيوب النظام الجديد'],
  correct_answer: 0,
  explanation: 'اختلاف النتيجتين يكشف ما لا يكشفه أي اختبار.' },

{ topic: LEG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز خطة التراجع في الهجرة؟',
  options: ['طريق معلوم للعودة إن أخفق التحويل', 'وعد بالنجاح من الفريق المنفّذ', 'قرار يُتَّخذ وقت وقوع العطل', 'إلغاء المشروع عند أول خطأ'],
  correct_answer: 0,
  explanation: 'تحويل بلا طريق عودة مقامرة بأعمال حرجة.' },

{ topic: LEG, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر بقاء نظام قديم رغم قرار استبداله؟',
  options: ['ارتباطه بأنظمة أخرى لم تُحصَر', 'رغبة الموظفين في إبقائه', 'رخص تشغيله مقارنة بالجديد', 'سرعته الفائقة في المعالجة'],
  correct_answer: 0,
  explanation: 'ما لم يُحصَر ارتباطه لا يُعرَف ما يسقط بإسقاطه.' },

{ topic: LEG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُقاس ليُعرَف تقدّم الهجرة؟',
  options: ['ما تحوّل من الأعمال لا الشيفرة', 'عدد الاجتماعات المنعقدة شهرياً', 'عدد المستندات المكتوبة للمشروع', 'حجم الميزانية المصروفة منها'],
  correct_answer: 0,
  explanation: 'مشروع يصرف ولا يحوّل عملاً واحداً لم يتقدّم.' },

{ topic: LEG, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الدين التقني المتراكم؟',
  options: ['يبطئ كل تغيير لاحق حتى يُسدَّد', 'يظهر في القوائم المالية للبنك', 'يختفي مع مرور الوقت وحده', 'يخصّ فريق التسويق لا التقنية'],
  correct_answer: 0,
  explanation: 'يُقترَض بسرعة اليوم ويُسدَّد ببطء الغد.' },

{ topic: WAY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الفريق متعدد التخصصات؟',
  options: ['يملك ما يلزم لإنجاز المهمة كاملة', 'يضم أفراداً من قسم واحد', 'ينتظر قسماً آخر في كل خطوة', 'يعمل على مهمة واحدة سنوياً'],
  correct_answer: 0,
  explanation: 'الانتظار بين الأقسام أكثر ما يبطئ التسليم.' },

{ topic: WAY, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر بطء التسليم رغم كثرة العاملين؟',
  options: ['انتظار متبادل بين فرق متفرقة', 'قلة عدد الاجتماعات الأسبوعية', 'ضعف مهارات الأفراد وحده', 'قصر مدة المشروع المخطَّطة'],
  correct_answer: 0,
  explanation: 'الوقت يضيع في الانتظار أكثر مما يضيع في العمل.' },

{ topic: WAY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من الإطلاق التدريجي للميزة؟',
  options: ['حصر أثر الخطأ في شريحة صغيرة', 'إبطاء وصول الميزة عمداً', 'إخفاء الميزة عن المنافسين', 'تقليل كلفة تطويرها'],
  correct_answer: 0,
  explanation: 'ما أخفق عند مئة أهون مما يخفق عند مليون.' },

{ topic: WAY, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز ثقافة التعلّم من الأخطاء؟',
  options: ['تسأل عن سبب النظام لا المُلام', 'تحدد المسؤول عن كل خطأ يقع', 'تخفي الأخطاء عن الإدارة', 'تمنع التجربة خشية الخطأ'],
  correct_answer: 0,
  explanation: 'من يُلام يُخفي، ومن يُخفي يترك الثغرة قائمة.' },

{ topic: WAY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز القرار القريب من العمل؟',
  options: ['أسرع وأقرب لواقع المشكلة', 'أبطأ وأبعد عن الواقع', 'يحتاج موافقات أكثر', 'يخالف استراتيجية المؤسسة'],
  correct_answer: 0,
  explanation: 'رفع كل قرار للأعلى يحوّل الإدارة إلى عنق زجاجة.' },

{ topic: WAY, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما خطر نقل الطريقة الجديدة بالاسم دون المضمون؟',
  options: ['طقوس جديدة بنتائج قديمة', 'تسريع مفرط في التسليم', 'إلغاء الحاجة للتخطيط', 'اختفاء الأنظمة القديمة'],
  correct_answer: 0,
  explanation: 'اجتماع يومي بلا صلاحية قرار اجتماع لا أكثر.' },

{ topic: WAY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز فريق المنتج عن فريق المشروع؟',
  options: ['يبقى مع ما يبنيه ويحسّنه', 'ينتهي بانتهاء مشروعه', 'يعمل بلا هدف واضح محدد', 'يخدم قسماً واحداً فقط'],
  correct_answer: 0,
  explanation: 'من يبقى مع ما بناه يتحمّل نتيجته ويحسّنه.' },

{ topic: WAY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم لتمكين فريق من التسليم بنفسه؟',
  options: ['صلاحية وأدوات ومسؤولية', 'اجتماعات أكثر مع الإدارة', 'تقارير أسبوعية أطول', 'موافقات إضافية قبل كل خطوة'],
  correct_answer: 0,
  explanation: 'مسؤولية بلا صلاحية عبء لا تمكين.' },

{ topic: WAY, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر مقاومة موظفين للتحول؟',
  options: ['غموض أثره على عملهم ومكانتهم', 'حبّهم للأنظمة القديمة نفسها', 'كثرة التدريب المقدَّم لهم', 'وضوح خطة التحول أكثر مما ينبغي'],
  correct_answer: 0,
  explanation: 'المقاومة غالباً خوف من المجهول لا رفض للتقنية.' },

{ topic: WAY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التدريب النافع في التحول؟',
  options: ['يربط الجديد بعمل المتدرّب اليومي', 'يشرح التقنية شرحاً عاماً', 'يُقدَّم مرة واحدة عند الإطلاق', 'يستهدف الإدارة العليا وحدها'],
  correct_answer: 0,
  explanation: 'ما لا يظهر أثره في عمل اليوم يُنسى قبل الغد.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التحول الرقمي عن مشروع تقني؟',
  options: ['يغيّر طريقة العمل لا الأدوات فقط', 'يغيّر الأدوات لا طريقة العمل', 'ينتهي بتسليم نظام واحد', 'يخصّ قسم التقنية وحده'],
  correct_answer: 0,
  explanation: 'نظام جديد بطريقة عمل قديمة يعيد المشكلة بواجهة أحدث.' },

{ topic: GOV, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجعل للتحول مالكاً حقيقياً؟',
  options: ['صلاحية تغيير الإجراء لا الأداة', 'لقب وظيفي كبير في المؤسسة كلها', 'ميزانية ضخمة بلا صلاحية قرار', 'فريق كبير من الاستشاريين معه'],
  correct_answer: 0,
  explanation: 'من لا يملك تغيير الإجراء لا يملك التحول.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُقاس ليُعرَف نجاح التحول؟',
  options: ['أثره في العميل والكلفة والسرعة', 'عدد الأنظمة التي اشتُريَت', 'عدد الموظفين المدرَّبين', 'عدد الشهادات التي حُصِّلَت'],
  correct_answer: 0,
  explanation: 'ما لا يظهر في أحد الثلاثة لم يغيّر شيئاً.' },

{ topic: GOV, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما خطر إطلاق مبادرات تحول متوازية كثيرة؟',
  options: ['تنازع على الموارد وإنهاك', 'تسريع التحول إلى الضعف', 'توفير في كلفة التنفيذ', 'وضوح أكبر في الأولويات'],
  correct_answer: 0,
  explanation: 'من يفتح كل الجبهات لا يكسب أياً منها.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الأولوية الحقيقية؟',
  options: ['يُؤجَّل غيرها من أجلها فعلاً', 'تُذكَر في العرض التقديمي', 'يوافق عليها الجميع لفظاً', 'تُكتَب في الخطة السنوية'],
  correct_answer: 0,
  explanation: 'قائمة أولويات فيها عشرة بنود ليست أولويات.' },

{ topic: GOV, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يوازن سرعة التحول بضبط المخاطر؟',
  options: ['ضوابط مدمَجة في المسار لا حواجز بعده', 'إلغاء الضوابط لتسريع التسليم', 'مراجعة يدوية لكل تغيير مهما صغر', 'تأجيل التسليم حتى تكتمل الضوابط'],
  correct_answer: 0,
  explanation: 'الضابط المدمَج يمرّ مع العمل، والحاجز يوقفه.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الشراكة مع مزوّد عن البناء داخلياً؟',
  options: ['أسرع بدءاً وأقل تحكماً', 'أبطأ بدءاً وأكثر تحكماً', 'أسرع بدءاً وأكثر تحكماً', 'أبطأ بدءاً وأقل تحكماً'],
  correct_answer: 0,
  explanation: 'ما يُشترى يبدأ أسرع، وما يُبنى يُملَك أكثر.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم في التحول تجاه العملاء الحاليين؟',
  options: ['ألّا تنقطع خدمتهم أثناء التغيير', 'تأجيل خدمتهم حتى ينتهي', 'نقلهم قسراً للنظام الجديد', 'إغلاق القنوات القديمة فوراً'],
  correct_answer: 0,
  explanation: 'التحول شأن داخلي لا يجوز أن يدفع ثمنه العميل.' },

{ topic: GOV, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر تعثّر تحول رغم الإنفاق الكبير؟',
  options: ['تغيير الأدوات دون الإجراءات', 'قلة الأدوات المشتراة حديثاً', 'صغر فريق التقنية المكلّف', 'كثرة التدريب المقدَّم لهم'],
  correct_answer: 0,
  explanation: 'نظام جديد بطريقة عمل قديمة يعيد المشكلة بواجهة أحدث.' },

{ topic: GOV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُراجَع دورياً في برنامج التحول؟',
  options: ['ما تحقق من أثر وما يستحق الإيقاف', 'عدد المبادرات المطلقة فقط', 'أسماء الفرق المشاركة فيه', 'حجم الميزانية المتبقية وحده'],
  correct_answer: 0,
  explanation: 'مبادرة لا تُثمر تُوقَف لتفرغ مواردها لغيرها.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: LEG, difficulty: 'hard', type: 'code',
  question: 'ما الخطر في هذي الخطة؟',
  code_snippet: 'الخطة: إطفاء النظام القديم ليلة الجمعة\nالنظام الجديد: لم يعمل متوازياً قط\nخطة التراجع: غير مكتوبة',
  options: ['تحويل بلا تجربة ولا طريق عودة', 'خطة سليمة توفّر وقتاً وكلفة', 'تأخير مفرط في الاستبدال', 'لا خطر ما دام الجديد جاهزاً'],
  correct_answer: 0,
  explanation: 'ما يشغّل أعمالاً حرجة لا يُبدَّل في ليلة واحدة.' },

{ topic: LEG, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا الترتيب؟',
  code_snippet: 'النظامان: يعملان معاً شهرين\nالنتائج: تُقارَن يومياً\nالاعتماد على الجديد: بعد تطابقها',
  options: ['تشغيل متوازٍ قبل الاعتماد', 'استبدال دفعة واحدة', 'تجميد للتطوير كله', 'إلغاء للنظام الجديد'],
  correct_answer: 0,
  explanation: 'اختلاف النتيجتين يكشف ما لا يكشفه أي اختبار.' },

{ topic: LEG, difficulty: 'hard', type: 'code',
  question: 'ما الذي كُشِف هنا متأخراً؟',
  code_snippet: 'أُطفِئ نظام قديم\nتعطّلت ثلاثة أنظمة أخرى\nخريطة الارتباطات: لم تُرسَم',
  options: ['ارتباطات لم تُحصَر قبل الإطفاء', 'عطل في النظام الجديد وحده', 'خطأ في نقل البيانات فقط', 'نقص في تدريب الموظفين'],
  correct_answer: 0,
  explanation: 'ما لم يُحصَر ارتباطه لا يُعرَف ما يسقط بإسقاطه.' },

{ topic: LEG, difficulty: 'medium', type: 'code',
  question: 'ما الذي ينقص هذي الهجرة؟',
  code_snippet: 'البيانات: نُقِلت كما هي\nالتنظيف قبل النقل: لم يجرِ\nالمطابقة بعده: لم تجرِ',
  options: ['تنظيف قبل النقل ومطابقة بعده', 'سرعة أكبر في النقل', 'إيقاف الخدمة مدة أطول', 'حذف النظام القديم فوراً'],
  correct_answer: 0,
  explanation: 'بيانات مشوّهة في نظام جديد تُفسِد ما بُنِي عليها.' },

{ topic: WAY, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر هذا البطء؟',
  code_snippet: 'زمن العمل الفعلي على الطلب: يومان\nزمن انتظار موافقات وفرق أخرى: ثلاثة أسابيع',
  options: ['الانتظار بين الفرق لا العدد', 'نقص مهارة الفريق المنفِّذ له', 'قلة الاجتماعات الأسبوعية', 'صغر حجم الطلب المنفَّذ'],
  correct_answer: 0,
  explanation: 'الوقت يضيع في الانتظار أكثر مما يضيع في العمل.' },

{ topic: WAY, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا الإطلاق؟',
  code_snippet: 'الميزة: فُعِّلت لواحد بالمئة\nالمؤشرات: تُراقَب\nالتوسيع: بعد ثبوت سلامتها',
  options: ['إطلاق تدريجي يحصر أثر الخطأ', 'إطلاق شامل بلا مراقبة', 'تأجيل للميزة بلا سبب', 'إخفاء للميزة عن الجميع'],
  correct_answer: 0,
  explanation: 'ما أخفق عند مئة أهون مما يخفق عند مليون.' },

{ topic: WAY, difficulty: 'hard', type: 'code',
  question: 'ما الخلل في هذا التبنّي؟',
  code_snippet: 'اجتماع يومي: أُقيم\nصلاحية الفريق في القرار: كما كانت\nالموافقات: لم تتغيّر',
  options: ['طقوس جديدة بنتائج قديمة', 'تبنٍّ كامل للطريقة الجديدة', 'تسريع مفرط في التسليم', 'إلغاء للحوكمة كلها'],
  correct_answer: 0,
  explanation: 'اجتماع يومي بلا صلاحية قرار اجتماع لا أكثر.' },

{ topic: GOV, difficulty: 'medium', type: 'code',
  question: 'ما الذي تكشفه هذي القائمة؟',
  code_snippet: 'الأولويات المعلنة: اثنتا عشرة\nما أُجِّل من أجلها: لا شيء',
  options: ['قائمة رغبات لا أولويات', 'تخطيط دقيق ومحكم', 'تركيز عالٍ على الأهم', 'قلة في عدد المبادرات'],
  correct_answer: 0,
  explanation: 'قائمة أولويات فيها عشرة بنود ليست أولويات.' },

{ topic: GOV, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر هذي النتيجة؟',
  code_snippet: 'الإنفاق على الأنظمة: ضخم\nالإجراءات الداخلية: كما هي\nزمن خدمة العميل: لم يتغيّر',
  options: ['تغيير الأدوات دون الإجراءات', 'نقص في الإنفاق على الأنظمة', 'كثرة التدريب على الجديد', 'صغر فريق التقنية المكلّف'],
  correct_answer: 0,
  explanation: 'نظام جديد بطريقة عمل قديمة يعيد المشكلة بواجهة أحدث.' },

{ topic: GOV, difficulty: 'medium', type: 'code',
  question: 'ما الذي ينقص هذا المالك؟',
  code_snippet: 'اللقب: قائد التحول\nالميزانية: متاحة\nصلاحية تغيير الإجراءات: عند غيره',
  options: ['صلاحية تغيير الإجراء', 'ميزانية أكبر مما لديه', 'لقب وظيفي أعلى', 'فريق استشاري أكبر'],
  correct_answer: 0,
  explanation: 'من لا يملك تغيير الإجراء لا يملك التحول.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: LEG, difficulty: 'medium', type: 'true-false',
  question: 'قِدَم النظام وحده سبب كافٍ لاستبداله.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'العيب في صعوبة تغييره مع حرج ما يشغّله لا في عمره.' },

{ topic: LEG, difficulty: 'hard', type: 'true-false',
  question: 'التشغيل المتوازي يكشف فروقاً لا يكشفها الاختبار.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'البيانات الحقيقية تصنع حالات لا تخطر على بال المختبِر.' },

{ topic: LEG, difficulty: 'medium', type: 'true-false',
  question: 'نقل البيانات كما هي أسرع وأسلم من تنظيفها.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'بيانات مشوّهة في نظام جديد تُفسِد ما بُنِي عليها.' },

{ topic: LEG, difficulty: 'hard', type: 'true-false',
  question: 'الدين التقني يبطئ كل تغيير لاحق حتى يُسدَّد.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'يُقترَض بسرعة اليوم ويُسدَّد ببطء الغد.' },

{ topic: WAY, difficulty: 'medium', type: 'true-false',
  question: 'زيادة عدد العاملين تعالج البطء الناتج عن الانتظار.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الانتظار بين الفرق لا يعالجه عدد بل تقليل التسليمات.' },

{ topic: WAY, difficulty: 'medium', type: 'true-false',
  question: 'الإطلاق التدريجي يحصر أثر الخطأ في شريحة صغيرة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما أخفق عند مئة أهون مما يخفق عند مليون.' },

{ topic: WAY, difficulty: 'hard', type: 'true-false',
  question: 'تبنّي طقوس الطريقة الجديدة يكفي لتغيير النتائج.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'اجتماع يومي بلا صلاحية قرار اجتماع لا أكثر.' },

{ topic: GOV, difficulty: 'medium', type: 'true-false',
  question: 'التحول الرقمي يغيّر طريقة العمل لا الأدوات وحدها.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'نظام جديد بطريقة قديمة يعيد المشكلة بواجهة أحدث.' },

{ topic: GOV, difficulty: 'hard', type: 'true-false',
  question: 'قائمة فيها اثنتا عشرة أولوية قائمة أولويات محكمة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'ما لم يُؤجَّل غيره من أجله ليس أولوية.' },

{ topic: GOV, difficulty: 'medium', type: 'true-false',
  question: 'التحول شأن داخلي لا يجوز أن يدفع ثمنه العميل.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'انقطاع الخدمة أثناء التغيير يُحسَب على المؤسسة لا عليه.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: LEG, difficulty: 'medium', type: 'matching',
  question: 'صل كل أسلوب هجرة بوصفه',
  pairs: [ { left: 'الاستبدال الدفعي', right: 'تحويل كامل في موعد' }, { left: 'الهجرة التدريجية', right: 'جزء بعد جزء' }, { left: 'التشغيل المتوازي', right: 'النظامان معاً للمقارنة' }, { left: 'الطبقة الوسيطة', right: 'عزل الجديد عن القديم' } ],
  explanation: 'الأول أسرع وأخطر، والباقي أبطأ وأأمن.' },

{ topic: LEG, difficulty: 'hard', type: 'matching',
  question: 'صل كل خطوة في الهجرة بغرضها',
  pairs: [ { left: 'حصر الارتباطات', right: 'معرفة ما يسقط بالإطفاء' }, { left: 'تنظيف البيانات', right: 'ألّا يرث الجديد التشويه' }, { left: 'المطابقة بعد النقل', right: 'إثبات صحة ما وصل' }, { left: 'خطة التراجع', right: 'طريق عودة إن أخفق' } ],
  explanation: 'أربع خطوات تُسقِط أكثر مخاطر الهجرة.' },

{ topic: WAY, difficulty: 'medium', type: 'matching',
  question: 'صل كل ممارسة بأثرها في التسليم',
  pairs: [ { left: 'فريق متعدد التخصصات', right: 'انتظار أقل بين الفرق' }, { left: 'إطلاق تدريجي', right: 'أثر خطأ محصور' }, { left: 'قرار قريب من العمل', right: 'سرعة وواقعية' }, { left: 'مراجعة بلا لوم', right: 'أخطاء تُعرَف فتُصلَح' } ],
  explanation: 'أربع ممارسات تغيّر النتيجة لا الشكل.' },

{ topic: WAY, difficulty: 'hard', type: 'matching',
  question: 'صل كل شكل تبنٍّ بحكمه',
  pairs: [ { left: 'اجتماع يومي بلا صلاحية', right: 'طقس بلا أثر' }, { left: 'فريق يملك التسليم', right: 'تبنٍّ حقيقي' }, { left: 'تسمية جديدة لأدوار قديمة', right: 'تغيير شكلي' }, { left: 'تقليل الموافقات فعلاً', right: 'تغيير جوهري' } ],
  explanation: 'ما لم يغيّر من يقرر لم يغيّر شيئاً.' },

{ topic: GOV, difficulty: 'medium', type: 'matching',
  question: 'صل كل عنصر في حوكمة التحول بمضمونه',
  pairs: [ { left: 'المالك', right: 'صلاحية تغيير الإجراء' }, { left: 'الأولوية', right: 'ما يُؤجَّل غيره لأجله' }, { left: 'المقياس', right: 'أثر في عميل أو كلفة' }, { left: 'المراجعة', right: 'إيقاف ما لا يُثمِر' } ],
  explanation: 'أربعة أركان بلا أحدها يتعثّر البرنامج.' },

{ topic: GOV, difficulty: 'hard', type: 'matching',
  question: 'صل كل خطأ في التحول بأثره',
  pairs: [ { left: 'أدوات بلا إجراءات', right: 'إنفاق بلا تغيير' }, { left: 'مبادرات متوازية كثيرة', right: 'تنازع وإنهاك' }, { left: 'مالك بلا صلاحية', right: 'قرارات معلّقة' }, { left: 'ضوابط حاجزة', right: 'التفاف عليها' } ],
  explanation: 'أربعة أخطاء تفسّر أكثر التعثّرات.' },

{ topic: LEG, difficulty: 'medium', type: 'matching',
  question: 'صل كل مؤشر بما يقوله عن الهجرة',
  pairs: [ { left: 'أعمال تحوّلت فعلاً', right: 'تقدّم حقيقي' }, { left: 'ميزانية صُرِفت', right: 'كلفة لا تقدّم' }, { left: 'فروق في المطابقة', right: 'خلل يجب حسمه' }, { left: 'أنظمة قديمة أُطفِئت', right: 'دين تقني أقل' } ],
  explanation: 'مشروع يصرف ولا يحوّل عملاً واحداً لم يتقدّم.' },

{ topic: WAY, difficulty: 'medium', type: 'matching',
  question: 'صل كل سبب لمقاومة التحول بمعالجته',
  pairs: [ { left: 'غموض الأثر على العمل', right: 'وضوح ما يتغيّر ولمن' }, { left: 'الخوف على المكانة', right: 'دور معلوم في الجديد' }, { left: 'ضعف المهارة', right: 'تدريب مربوط بالعمل' }, { left: 'تجربة سابقة فاشلة', right: 'مكسب صغير مبكر' } ],
  explanation: 'المقاومة غالباً خوف من المجهول لا رفض للتقنية.' },

{ topic: GOV, difficulty: 'medium', type: 'matching',
  question: 'صل كل خيار بين البناء والشراء بأثره',
  pairs: [ { left: 'الشراء من مزوّد', right: 'بدء أسرع' }, { left: 'البناء داخلياً', right: 'تحكم أكبر' }, { left: 'الشراء', right: 'اعتماد على غيرك' }, { left: 'البناء', right: 'كلفة وزمن أعلى' } ],
  explanation: 'ما يُشترى يبدأ أسرع، وما يُبنى يُملَك أكثر.' },

{ topic: GOV, difficulty: 'hard', type: 'matching',
  question: 'صل كل ضابط بموضعه في المسار',
  pairs: [ { left: 'فحص آلي مع كل تغيير', right: 'مدمَج في المسار' }, { left: 'مراجعة يدوية لكل شيء', right: 'حاجز يوقف العمل' }, { left: 'حدود مكتوبة مسبقاً', right: 'مدمَج في المسار' }, { left: 'موافقة لجنة شهرية', right: 'حاجز يوقف العمل' } ],
  explanation: 'الضابط المدمَج يمرّ مع العمل، والحاجز يوقفه.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: LEG, difficulty: 'medium', type: 'terminal', prompt_label: 'الوصف',
  question: 'اكتب وصف نظام حرج يصعب تغييره أو إحلاله',
  expected_answers: ['نظام قديم', 'النظام القديم', 'legacy', 'النظام الموروث'],
  explanation: 'قِدَمه ليس عيبه، بل صعوبة تغييره مع حرج ما يشغّله.' },

{ topic: LEG, difficulty: 'hard', type: 'terminal', prompt_label: 'الأسلوب',
  question: 'اكتب اسم تشغيل النظامين معاً لمقارنة نتائجهما',
  expected_answers: ['التشغيل المتوازي', 'التوازي', 'parallel run', 'التشغيل المزدوج'],
  explanation: 'اختلاف النتيجتين يكشف ما لا يكشفه أي اختبار.' },

{ topic: LEG, difficulty: 'medium', type: 'terminal', prompt_label: 'الخطة',
  question: 'اكتب اسم طريق العودة إن أخفق التحويل',
  expected_answers: ['خطة التراجع', 'خطة العودة', 'rollback', 'خطة الرجوع'],
  explanation: 'تحويل بلا طريق عودة مقامرة بأعمال حرجة.' },

{ topic: LEG, difficulty: 'hard', type: 'terminal', prompt_label: 'المفهوم',
  question: 'اكتب اسم ما يتراكم فيبطئ كل تغيير لاحق',
  expected_answers: ['الدين التقني', 'الديون التقنية', 'technical debt', 'الدين البرمجي'],
  explanation: 'يُقترَض بسرعة اليوم ويُسدَّد ببطء الغد.' },

{ topic: WAY, difficulty: 'medium', type: 'terminal', prompt_label: 'الفريق',
  question: 'اكتب وصف فريق يملك ما يلزم لإنجاز المهمة كاملة',
  expected_answers: ['متعدد التخصصات', 'فريق متعدد التخصصات', 'cross functional', 'فريق متكامل'],
  explanation: 'الانتظار بين الأقسام أكثر ما يبطئ التسليم.' },

{ topic: WAY, difficulty: 'medium', type: 'terminal', prompt_label: 'الأسلوب',
  question: 'اكتب اسم تفعيل الميزة لشريحة صغيرة أولاً',
  expected_answers: ['الإطلاق التدريجي', 'الطرح التدريجي', 'الإطلاق المرحلي', 'التوسيع التدريجي'],
  explanation: 'ما أخفق عند مئة أهون مما يخفق عند مليون.' },

{ topic: WAY, difficulty: 'hard', type: 'terminal', prompt_label: 'العيب',
  question: 'اكتب وصف تبنّي شكل الطريقة الجديدة دون مضمونها',
  expected_answers: ['تبنٍّ شكلي', 'طقوس بلا مضمون', 'تغيير شكلي', 'تبني صوري'],
  explanation: 'اجتماع يومي بلا صلاحية قرار اجتماع لا أكثر.' },

{ topic: GOV, difficulty: 'medium', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يجعل لمالك التحول ملكية حقيقية',
  expected_answers: ['صلاحية تغيير الإجراءات', 'صلاحية القرار', 'الصلاحية', 'سلطة تغيير الإجراء'],
  explanation: 'من لا يملك تغيير الإجراء لا يملك التحول.' },

{ topic: GOV, difficulty: 'hard', type: 'terminal', prompt_label: 'المعيار',
  question: 'اكتب ما يميّز الأولوية الحقيقية عن المعلنة',
  expected_answers: ['يُؤجَّل غيرها لأجلها', 'تأجيل ما سواها', 'التضحية بغيرها', 'أن يُؤجَّل غيرها'],
  explanation: 'قائمة أولويات فيها عشرة بنود ليست أولويات.' },

{ topic: GOV, difficulty: 'medium', type: 'terminal', prompt_label: 'الضابط',
  question: 'اكتب وصف ضابط يمرّ مع العمل لا يوقفه',
  expected_answers: ['مدمَج', 'ضابط مدمَج', 'مدمج في المسار', 'ضابط تلقائي'],
  explanation: 'الضابط المدمَج يمرّ مع العمل، والحاجز يوقفه.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: LEG, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يقلّل خطر الهجرة؟',
  options: ['التشغيل المتوازي قبل الاعتماد', 'خطة تراجع مكتوبة مسبقاً', 'التحويل دفعة واحدة ليلاً', 'حذف النظام القديم فوراً'],
  correct_answers: [0, 1],
  explanation: 'الأخيران يزيدان الخطر ويلغيان طريق العودة.' },

{ topic: LEG, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يسبق إطفاء نظام قديم؟',
  options: ['حصر ما يرتبط به من أنظمة', 'التحقق أن بدائله تعمل فعلاً', 'إعلان تاريخ الإطفاء وحده', 'حذف سجلاته التاريخية'],
  correct_answers: [0, 1],
  explanation: 'ما لم يُحصَر ارتباطه لا يُعرَف ما يسقط بإسقاطه.' },

{ topic: LEG, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يلزم في نقل البيانات؟',
  options: ['تنظيفها قبل النقل', 'مطابقة نتائجها بعده', 'نقلها كما هي للسرعة', 'إتلاف الأصل فور النقل'],
  correct_answers: [0, 1],
  explanation: 'بيانات مشوّهة في نظام جديد تُفسِد ما بُنِي عليها.' },

{ topic: WAY, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يقلّل زمن التسليم؟',
  options: ['فريق يملك ما يلزم للإنجاز', 'تقليل التسليمات بين الفرق', 'زيادة الموافقات قبل كل خطوة', 'رفع كل قرار للإدارة العليا'],
  correct_answers: [0, 1],
  explanation: 'الوقت يضيع في الانتظار أكثر مما يضيع في العمل.' },

{ topic: WAY, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي تبنٍّ حقيقي لا شكلي؟',
  options: ['صلاحية قرار انتقلت للفريق', 'موافقات قُلِّلت فعلاً', 'اجتماع يومي أُضيف', 'أدوار أُعيدت تسميتها'],
  correct_answers: [0, 1],
  explanation: 'ما لم يغيّر من يقرر لم يغيّر شيئاً.' },

{ topic: WAY, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يعالج مقاومة التحول؟',
  options: ['وضوح ما يتغيّر ولمن', 'دور معلوم لكل متأثر', 'تجاهل المخاوف حتى تهدأ', 'تسريع التغيير بلا شرح'],
  correct_answers: [0, 1],
  explanation: 'المقاومة غالباً خوف من المجهول لا رفض للتقنية.' },

{ topic: GOV, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يقيس نجاح التحول؟',
  options: ['أثر في تجربة العميل', 'تغيّر في الكلفة أو السرعة', 'عدد الأنظمة المشتراة', 'عدد الشهادات المحصَّلة'],
  correct_answers: [0, 1],
  explanation: 'ما لا يظهر في أحدهما لم يغيّر شيئاً.' },

{ topic: GOV, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يفسّر تعثّر برنامج تحول؟',
  options: ['أدوات جديدة بإجراءات قديمة', 'مبادرات كثيرة تتنازع الموارد', 'وجود مالك بصلاحية واضحة', 'أولوية واحدة أُجِّل غيرها لها'],
  correct_answers: [0, 1],
  explanation: 'الأخيران من أسباب النجاح لا التعثّر.' },

{ topic: GOV, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي من الضوابط المدمَجة؟',
  options: ['فحص آلي مع كل تغيير', 'حدود مكتوبة يعرفها الفريق', 'موافقة لجنة شهرية', 'مراجعة يدوية لكل سطر'],
  correct_answers: [0, 1],
  explanation: 'الضابط المدمَج يمرّ مع العمل، والحاجز يوقفه.' },

{ topic: GOV, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُراعى تجاه العملاء أثناء التحول؟',
  options: ['استمرار الخدمة بلا انقطاع', 'إشعار مسبق بما سيتغيّر', 'نقلهم قسراً في يوم واحد', 'إغلاق القنوات القديمة فوراً'],
  correct_answers: [0, 1],
  explanation: 'التحول شأن داخلي لا يجوز أن يدفع ثمنه العميل.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: LEG, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات هجرة نظام قديم',
  options: ['حصر ما يرتبط به', 'بناء البديل وربطه', 'تشغيل متوازٍ ومطابقة', 'إطفاء القديم بعد الثبوت'],
  explanation: 'الإطفاء آخر خطوة لا أولها.' },

{ topic: LEG, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات نقل بيانات إلى نظام جديد',
  options: ['حصر ما يُنقَل وما يُترَك', 'تنظيف ما سيُنقَل', 'تنفيذ النقل', 'مطابقة النتائج بالمصدر'],
  explanation: 'المطابقة بعد النقل هي ما يثبت صحته.' },

{ topic: LEG, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إدخال طبقة وسيطة',
  options: ['تحديد ما يحتاجه الجديد من القديم', 'بناء الوسيط بعقد ثابت', 'تحويل الجديد ليخاطبه', 'استبدال ما خلفه تدريجياً'],
  explanation: 'العقد الثابت هو ما يسمح بتغيير ما خلفه بلا كسر.' },

{ topic: WAY, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إطلاق تدريجي لميزة',
  options: ['تفعيلها لشريحة صغيرة', 'مراقبة المؤشرات والأخطاء', 'توسيعها تدريجياً', 'تعميمها بعد الثبوت'],
  explanation: 'ما أخفق عند مئة أهون مما يخفق عند مليون.' },

{ topic: WAY, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تقليل زمن التسليم',
  options: ['قياس زمن العمل مقابل الانتظار', 'تحديد أطول انتظار وسببه', 'نقل ما يلزم للفريق نفسه', 'إعادة القياس بعد التغيير'],
  explanation: 'ما لا يُقاس انتظاره لا يُعرَف أين يضيع الوقت.' },

{ topic: WAY, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات معالجة مقاومة التحول',
  options: ['الإنصات لسبب المقاومة', 'بيان ما يتغيّر ولمن', 'إعطاء دور معلوم في الجديد', 'مكسب صغير مبكر يُرى'],
  explanation: 'من رأى مكسباً مبكراً هان عليه ما بعده.' },

{ topic: GOV, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء برنامج تحول',
  options: ['تحديد الأثر المطلوب', 'اختيار أولوية واحدة تخدمه', 'تعيين مالك بصلاحية', 'قياس الأثر ومراجعته'],
  explanation: 'الأثر أولاً، فما لا يخدم أثراً لا يستحق برنامجاً.' },

{ topic: GOV, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات مراجعة مبادرات التحول',
  options: ['جمع أثر كل مبادرة', 'مقارنته بما وُعِد به', 'إيقاف ما لا يُثمِر', 'إعادة توجيه موارده'],
  explanation: 'مبادرة لا تُثمر تُوقَف لتفرغ مواردها لغيرها.' },

{ topic: GOV, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات القرار بين البناء والشراء',
  options: ['تحديد ما يميّزك في هذا العمل', 'تقدير كلفة الخيارين وزمنهما', 'اختيار البناء لما يميّزك', 'شراء ما عداه'],
  explanation: 'يُبنى ما يصنع تميّزك، ويُشترى ما لا يصنعه.' },

{ topic: GOV, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات دمج ضابط في المسار',
  options: ['تحديد الخطر المراد ضبطه', 'كتابة الحد بوضوح', 'أتمتة فحصه مع كل تغيير', 'مراجعة الحد دورياً'],
  explanation: 'ضابط لا يُفحَص آلياً يتحوّل مع الوقت إلى حاجز.' }

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
