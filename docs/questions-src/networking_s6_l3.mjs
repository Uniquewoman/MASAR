// الشبكات · S6 أمن الشبكات · L3 كشف التسلل ومنعه
// ثلاثة مواضيع: أساليب الكشف · الموضع والوضع · معالجة النتائج
//
// L2 وضع الجدار: يسمح ويمنع بقواعد على العناوين والمنافذ. وهذا المستوى
// يجيب ما بعده: كيف يُكشَف ما مرّ **مسموحاً به** وهو هجوم؟ وما الفرق
// بين نظام يرى ويبلّغ ونظام يقف في الطريق ويمنع؟
//
// حدّ مقصود: القياس وخطّ الأساس التشغيلي دُرِّس في S4 L5، فيُستعمَل هنا
// في سياق الكشف الأمني لا يُعاد تعريفه. والقوائم والتقسيم موضع L4.
//
// الصعوبة: ١٣ سهل · ٥٤ متوسط · ٢٣ صعب — مطابق لصف L3.

const T = 'Networking';
const S = 'Network Security';
const L = 3;

const DET = 'Detection Methods';
const PLC = 'IDS and IPS Placement';
const ALR = 'Alert Handling';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

// ── أساليب الكشف · ١٠ ──

{ topic: DET, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الذي يضيفه نظام الكشف فوق الجدار؟',
  options: ['فحص ما مرّ مسموحاً به بحثاً عن هجوم', 'منع الحركة من مصادر محددة', 'ترجمة العناوين الخاصة إلى عامة', 'توزيع العناوين على الأجهزة'],
  correct_answer: 0,
  explanation: 'الجدار يسأل: أمسموح؟ والكشف يسأل: أهذا هجوم؟' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالكشف بالتوقيع؟',
  options: ['مطابقة الحركة بأنماط هجمات معروفة', 'مقارنة الحركة بسلوكها المعتاد', 'منع كل ما لم يُسمَح به صراحةً', 'تشفير الحركة بين الطرفين'],
  correct_answer: 0,
  explanation: 'دقيق فيما يعرفه، أعمى عمّا لم يُكتَب له توقيع بعد.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالكشف بالشذوذ؟',
  options: ['رصد انحراف الحركة عن سلوكها المعتاد', 'مطابقة الحركة بأنماط معروفة سلفاً', 'حجب المنافذ غير المستعمَلة', 'تسجيل كل الحزم المارّة كاملة'],
  correct_answer: 0,
  explanation: 'يبلغ عمّا لم يُعرَف قبلاً، وثمنه إنذارات كاذبة أكثر.' },

{ topic: DET, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما نقطة ضعف الكشف بالتوقيع؟',
  options: ['لا يرى هجوماً جديداً بلا توقيع', 'يبلّغ عن كل حركة معتادة', 'يحتاج خطّ أساس طويل المدة', 'يمنع الحركة قبل فحصها'],
  correct_answer: 0,
  explanation: 'ولهذا تُحدَّث التواقيع، ويُسنَد إليه كشف بالشذوذ.' },

{ topic: DET, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما نقطة ضعف الكشف بالشذوذ؟',
  options: ['ما شذّ ليس كله هجوماً', 'لا يرى إلا هجمات معروفة', 'يحتاج تواقيع محدَّثة يومياً', 'يعمل على المنافذ المغلقة فقط'],
  correct_answer: 0,
  explanation: 'تحديث برمجي أو موسم عمل يبدو شذوذاً وهو مشروع.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا يُجمَع أسلوبا الكشف معاً؟',
  options: ['كل واحد يغطي عمى الآخر', 'أحدهما احتياطي بارد للثاني', 'الجمع يقلّل حجم السجلات', 'الجمع يلغي الحاجة للتحديث'],
  correct_answer: 0,
  explanation: 'التوقيع يمسك المعروف، والشذوذ يلمح ما لم يُعرَف بعد.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما أثر تشفير الحركة على الكشف بالمحتوى؟',
  options: ['يخفي المحتوى فيبقى الظرف وحده', 'يسهّل قراءة الحمولة كاملة', 'يمنع النظام من رؤية العناوين', 'يوقف النظام عن العمل تماماً'],
  correct_answer: 0,
  explanation: 'يبقى من يخاطب من وكم وحجم، ومنه يُبنى كشف السلوك.' },

{ topic: DET, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يعالج عمى الكشف أمام الحركة المشفّرة؟',
  options: ['فحص الظرف أو فكّه عند نقطة معتمدة', 'رفع سعة الوصلة نحو الإنترنت العام', 'زيادة عدد التواقيع المحمَّلة عليه', 'إيقاف تشفير الحركة الداخلية كلها'],
  correct_answer: 0,
  explanation: 'والفكّ يفتح باب خصوصية وأداء، فلا يُتخَذ بلا سياسة.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجعل خطّ الأساس لازماً للكشف بالشذوذ؟',
  options: ['بلا معرفة المعتاد لا يُعرَف الشاذّ', 'التواقيع لا تعمل بلا خطّ أساس', 'الجدار يحتاجه لكتابة قواعده', 'الشبكة لا تمرّر حركة بدونه'],
  correct_answer: 0,
  explanation: 'يُبنى في مدة هادئة، ويُعاد بناؤه مع تغيّر العمل.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يكشفه فحص السلوك على مدى أيام؟',
  options: ['نشاطاً بطيئاً يتخفّى في الضجيج', 'حزمة واحدة بتوقيع معروف', 'منفذاً مغلقاً على الجدار', 'اسم مورّد الجهاز المصاب'],
  correct_answer: 0,
  explanation: 'من سرق ببطء أفلت من نافذة الدقيقة وظهر في نافذة الأسبوع.' },

// ── الموضع والوضع · ١٠ ──

{ topic: PLC, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الفرق بين نظام الكشف ونظام المنع؟',
  options: ['الكشف يبلّغ والمنع يوقف الحركة', 'الكشف يوقف الحركة والمنع يبلّغ', 'كلاهما يوقف الحركة المشبوهة', 'كلاهما يبلّغ ولا يوقف شيئاً'],
  correct_answer: 0,
  explanation: 'الأول شاهد على الطريق، والثاني حاجز فيه.' },

{ topic: PLC, difficulty: 'medium', type: 'multiple-choice',
  question: 'أين يُوضَع نظام الكشف عادةً؟',
  options: ['على نسخة من الحركة لا في مسارها', 'داخل مسار الحركة يقطعه', 'على جهاز المستخدم النهائي', 'خلف خادم الأسماء المحلي'],
  correct_answer: 0,
  explanation: 'يأخذ نسخة، فعطله لا يقطع حركة أحد.' },

{ topic: PLC, difficulty: 'medium', type: 'multiple-choice',
  question: 'أين يُوضَع نظام المنع عادةً؟',
  options: ['داخل مسار الحركة ليقطع ما يشاء', 'على نسخة من الحركة المارّة فقط', 'في سجلّ منفصل عن مسار الشبكة', 'على خادم توزيع العناوين الداخلي'],
  correct_answer: 0,
  explanation: 'لا يمنع من لا يمرّ به، فموضعه في الطريق شرط عمله.' },

{ topic: PLC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما خطر وضع نظام المنع في مسار الحركة؟',
  options: ['عطله أو خطؤه يقطع خدمة سليمة', 'لا يرى الحركة المارّة أصلاً', 'يحتاج تواقيع أكثر من الكشف', 'يمنع تشفير الحركة الخارجة'],
  correct_answer: 0,
  explanation: 'ولهذا يُدرَج تدريجياً ويُبدَأ بالإبلاغ قبل المنع.' },

{ topic: PLC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة تشغيل نظام المنع بوضع الإبلاغ أولاً؟',
  options: ['معرفة ما كان سيُقطَع قبل قطعه', 'رفع سرعة الحركة المارّة به', 'تقليل عدد التواقيع اللازمة', 'إلغاء الحاجة لخطّ الأساس'],
  correct_answer: 0,
  explanation: 'قاعدة تبدو صائبة قد تقطع تطبيقاً لا يعرفه أحد.' },

{ topic: PLC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز النظام على المضيف عن النظام على الشبكة؟',
  options: ['يرى ما يجري داخل الجهاز نفسه', 'يرى الحركة بين كل الأجهزة', 'يمنع الحركة عند حدّ المؤسسة', 'يوزّع العناوين على الأجهزة'],
  correct_answer: 0,
  explanation: 'ويرى الحركة المشفّرة قبل تشفيرها أو بعد فكّها.' },

{ topic: PLC, difficulty: 'medium', type: 'multiple-choice',
  question: 'أين يُفيد وضع نظام كشف داخل الشبكة لا عند حدّها؟',
  options: ['كشف الانتشار الجانبي بين الأجهزة', 'منع الحركة القادمة من الإنترنت', 'ترجمة عناوين الأجهزة الداخلية', 'توزيع الحمل بين وصلتي الخروج'],
  correct_answer: 0,
  explanation: 'من دخل مرة يتحرك داخلاً، ولا يمرّ بحدّ المؤسسة ثانيةً.' },

{ topic: PLC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفوت نظاماً يرى حركة الحدّ وحدها؟',
  options: ['ما ينتقل بين جهازين داخليين', 'ما يدخل من الإنترنت للشبكة', 'ما يخرج من الشبكة للإنترنت', 'ما يمرّ بالجدار الحدّي مسموحاً'],
  correct_answer: 0,
  explanation: 'الحركة الداخلية لا تعبر الحدّ فلا يراها من يقف عليه.' },

{ topic: PLC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم النظام ليقرأ الحركة على وصلة سريعة؟',
  options: ['قدرة معالجة تكفي معدّلها', 'عنوان عام مسجّل باسمه', 'اسم نطاق فرعي خاص به', 'خطة اشتراك عند المزوّد'],
  correct_answer: 0,
  explanation: 'ما عجز عن اللحاق يُسقِط حزماً أو يفوّت فحصها.' },

{ topic: PLC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يبقى لازماً رغم وجود نظام الكشف؟',
  options: ['الجدار وتقوية الأجهزة والتحديث', 'إيقاف التشفير على الحركة', 'فتح المنافذ لتسهيل الفحص', 'إلغاء سجلات الأجهزة الطرفية'],
  correct_answer: 0,
  explanation: 'الكشف طبقة فوق الوقاية لا بديل عنها.' },

// ── معالجة النتائج · ١٠ ──

{ topic: ALR, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بالإنذار الكاذب؟',
  options: ['بلاغ عن حركة سليمة ظُنّت هجوماً', 'هجوم وقع ولم يُبلَّغ عنه', 'بلاغ عن هجوم وقع فعلاً', 'حركة سليمة لم يُبلَّغ عنها'],
  correct_answer: 0,
  explanation: 'كثرته تدرّب الفريق على تجاهل ما يستحق النظر.' },

{ topic: ALR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالسلبي الكاذب؟',
  options: ['هجوم مرّ بلا أن يُبلَّغ عنه', 'حركة سليمة بلا بلاغ عنها', 'بلاغ عن حركة سليمة', 'بلاغ عن هجوم فعلي'],
  correct_answer: 0,
  explanation: 'أخطر من الكاذب الإيجابي، لأنه لا يترك أثراً يُنبِّه.' },

{ topic: ALR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يوازنه ضبط حساسية الكشف؟',
  options: ['إنذارات كاذبة مقابل هجمات تفوت', 'سرعة الشبكة مقابل عدد الأجهزة', 'كلفة التخزين مقابل عمر السجل', 'عدد المنافذ مقابل عدد العناوين'],
  correct_answer: 0,
  explanation: 'رفعها يغرق الفريق، وخفضها يمرّر ما يستحق الوقوف.' },

{ topic: ALR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُفعَل بقاعدة تُنذِر كذباً كل يوم؟',
  options: ['تُضبَط أو تُستثنى بعد فهم سببها', 'تُحذَف فوراً بلا مراجعة سببها', 'تُترَك كما هي حتى تتوقف وحدها', 'تُنسَخ على بقية الأنظمة كما هي'],
  correct_answer: 0,
  explanation: 'الاستثناء بلا فهم قد يعمي النظام عن هجوم حقيقي.' },

{ topic: ALR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما أول ما يُفحَص في إنذار وارد؟',
  options: ['هل الحركة سليمة أم مشبوهة فعلاً', 'اسم القاعدة التي أطلقته', 'عدد الإنذارات المشابهة اليوم', 'مورّد النظام الذي أطلقه'],
  correct_answer: 0,
  explanation: 'التحقق قبل التصعيد، فالتصعيد بلا تحقق يُنهك الفريق.' },

{ topic: ALR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يرفع أولوية إنذار على غيره؟',
  options: ['قيمة الأصل المستهدَف وأثر نجاحه', 'ترتيب وصوله في قائمة اليوم', 'طول اسم القاعدة التي أطلقته', 'عدد الحزم التي فحصها النظام'],
  correct_answer: 0,
  explanation: 'إنذار على خادم قواعد البيانات ليس كإنذار على طابعة.' },

{ topic: ALR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة ربط الإنذار بسجلات أخرى؟',
  options: ['تكوين قصة كاملة بدل لقطة واحدة', 'تقليل عدد الإنذارات الواردة', 'رفع سرعة النظام في الفحص', 'إلغاء الحاجة لضبط الحساسية'],
  correct_answer: 0,
  explanation: 'إنذار وحده يحتمل وجوهاً، ومع سجل الدخول يصير واضحاً.' },

{ topic: ALR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُوثَّق بعد معالجة كل إنذار؟',
  options: ['ما تبيّن وما فُعِل وما تُرِك', 'اسم من ناوب تلك الليلة', 'عدد الحزم التي مرّت به', 'مدة تشغيل النظام كاملة'],
  correct_answer: 0,
  explanation: 'وبه يُختصَر وقت من يواجه الإنذار نفسه بعد شهر.' },

{ topic: ALR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي تحتاجه التواقيع لتبقى نافعة؟',
  options: ['تحديثاً دورياً من مصدر موثوق', 'حذفها كلها كل بضعة أشهر', 'نسخها من نظام قديم متوقف', 'كتابتها يدوياً لكل هجوم'],
  correct_answer: 0,
  explanation: 'توقيع قديم يترك هجمات هذا الشهر تمرّ بلا بلاغ.' },

{ topic: ALR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يقيسه مراجعة الإنذارات بعد شهر؟',
  options: ['نسبة ما استحق تدخّلاً من الكل', 'عدد الحزم التي فحصها النظام', 'سعة الوصلة التي عمل عليها', 'عدد التواقيع المحمَّلة عليه'],
  correct_answer: 0,
  explanation: 'نسبة ضئيلة تعني ضبطاً سيئاً لا فريقاً مقصّراً.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: DET, difficulty: 'medium', type: 'code',
  question: 'ما أسلوب الكشف الذي يصفه هذا السلوك؟',
  code_snippet: 'النظام: يقارن الحزم بقائمة أنماط معروفة\nما لا يطابق: يمرّ بلا بلاغ',
  options: ['كشف بالتوقيع', 'كشف بالشذوذ', 'ترجمة عناوين', 'توزيع حمل'],
  correct_answer: 0,
  explanation: 'دقيق فيما يعرفه، أعمى عمّا لم يُكتَب له توقيع.' },

{ topic: DET, difficulty: 'medium', type: 'code',
  question: 'ما أسلوب الكشف الثاني الذي يصفه هذا السلوك؟',
  code_snippet: 'النظام: بنى صورة للحركة المعتادة\nيبلّغ عمّا ينحرف عنها',
  options: ['كشف بالشذوذ', 'كشف بالتوقيع', 'جدار بقواعد ثابتة', 'ترجمة بالمنافذ'],
  correct_answer: 0,
  explanation: 'يلمح ما لم يُعرَف بعد، وثمنه إنذارات كاذبة أكثر.' },

{ topic: ALR, difficulty: 'hard', type: 'code',
  question: 'ما تصنيف هذي الحالة؟',
  code_snippet: 'النظام: أطلق إنذاراً\nالتحقق: الحركة تحديث برمجي مشروع',
  options: ['إنذار كاذب يستحق الضبط', 'سلبي كاذب خطير', 'كشف صحيح لهجوم', 'عطل في النظام نفسه'],
  correct_answer: 0,
  explanation: 'ما شذّ ليس كله هجوماً، والضبط يمنع تكرار الضجيج.' },

{ topic: ALR, difficulty: 'hard', type: 'code',
  question: 'ما تصنيف هذي الحالة الثانية؟',
  code_snippet: 'الهجوم: وقع ونجح فعلاً\nالنظام: لم يطلق أي إنذار',
  options: ['سلبي كاذب لا يترك أثراً', 'إنذار كاذب يُتجاهَل', 'كشف صحيح متأخر', 'حركة سليمة بلا بلاغ'],
  correct_answer: 0,
  explanation: 'أخطر الحالات، لأن غياب البلاغ يبدو كأنه سلامة.' },

{ topic: PLC, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا الموضع؟',
  code_snippet: 'الجهاز: يأخذ نسخة من حركة المبدّل\nولا يقف في مسارها',
  options: ['نظام كشف يبلّغ ولا يمنع', 'نظام منع يقطع الحركة', 'جدار حدّي بقواعد', 'بوابة ترجمة عناوين'],
  correct_answer: 0,
  explanation: 'من يأخذ نسخة لا يقدر على قطع الأصل.' },

{ topic: PLC, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر هذا الانقطاع؟',
  code_snippet: 'نظام منع في مسار الحركة\nقاعدة جديدة فُعّلت للتوّ\nتطبيق داخلي: توقف',
  options: ['القاعدة تقطع حركة مشروعة', 'الوصلة المادية انقطعت', 'خادم الأسماء متوقف', 'العناوين نفدت من النطاق'],
  correct_answer: 0,
  explanation: 'ولهذا تُشغَّل القاعدة بوضع الإبلاغ قبل تفعيل المنع.' },

{ topic: DET, difficulty: 'hard', type: 'code',
  question: 'ما الذي يمنع فحص محتوى هذي الحركة؟',
  code_snippet: 'الحركة: مشفّرة من الطرف للطرف\nالنظام: يرى العناوين والأحجام فقط',
  options: ['التشفير يخفي الحمولة عنه', 'النظام لا يدعم هذي الوصلة', 'التواقيع لم تُحدَّث بعد', 'خطّ الأساس لم يُبنَ بعد'],
  correct_answer: 0,
  explanation: 'يبقى الظرف، ومنه يُبنى كشف السلوك لا كشف المحتوى.' },

{ topic: ALR, difficulty: 'medium', type: 'code',
  question: 'ما الذي تشير إليه هذي النسبة؟',
  code_snippet: 'إنذارات الشهر: ثلاثة آلاف\nما استحق تدخّلاً: أربعة',
  options: ['ضبط سيئ للحساسية والقواعد', 'فريق مقصّر في المتابعة', 'نظام متوقف عن الفحص', 'تواقيع محدَّثة أكثر من اللازم'],
  correct_answer: 0,
  explanation: 'النسبة الضئيلة عيب في الضبط لا في من يقرأ.' },

{ topic: PLC, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر عدم رصد هذا الانتشار؟',
  code_snippet: 'الإصابة انتقلت بين خادمين داخليين\nالنظام موضوع عند حدّ المؤسسة',
  options: ['الحركة الداخلية لا تعبر الحدّ', 'الخادمان مشفّران بالكامل', 'التواقيع قديمة جداً', 'النظام في وضع الإبلاغ'],
  correct_answer: 0,
  explanation: 'من وقف على الباب لا يرى ما يجري بين الغرف.' },

{ topic: ALR, difficulty: 'medium', type: 'code',
  question: 'ما الذي يحوّل هذي اللقطة إلى قصة؟',
  code_snippet: 'إنذار: اتصال مشبوه من جهاز موظف\nالمتاح: الإنذار وحده',
  options: ['ربطه بسجلات الدخول والترجمة', 'رفع حساسية النظام أكثر', 'حذف القاعدة التي أطلقته', 'إيقاف الجهاز عن الشبكة فوراً'],
  correct_answer: 0,
  explanation: 'إنذار وحده يحتمل وجوهاً، والسجلات تحسم أيها وقع.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: DET, difficulty: 'easy', type: 'true-false',
  question: 'الكشف بالتوقيع يطابق الحركة بأنماط هجمات معروفة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'دقيق فيما يعرفه، أعمى عمّا لم يُكتَب له توقيع.' },

{ topic: DET, difficulty: 'medium', type: 'true-false',
  question: 'الكشف بالشذوذ يرى الهجمات المعروفة وحدها.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'يرصد الانحراف عن المعتاد، فيلمح ما لم يُعرَف بعد.' },

{ topic: DET, difficulty: 'medium', type: 'true-false',
  question: 'تشفير الحركة يخفي المحتوى ويبقي ظرف الاتصال.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'يبقى من يخاطب من وكم، ومنه يُبنى كشف السلوك.' },

{ topic: PLC, difficulty: 'easy', type: 'true-false',
  question: 'نظام الكشف يبلّغ ونظام المنع يقطع الحركة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الأول شاهد على الطريق، والثاني حاجز فيه.' },

{ topic: PLC, difficulty: 'medium', type: 'true-false',
  question: 'نظام المنع يعمل وهو خارج مسار الحركة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'لا يمنع من لا يمرّ به، فموضعه في الطريق شرط عمله.' },

{ topic: PLC, difficulty: 'hard', type: 'true-false',
  question: 'نظام عند حدّ المؤسسة يرى الانتشار بين جهازين داخليين.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الحركة الداخلية لا تعبر الحدّ فلا يراها من يقف عليه.' },

{ topic: ALR, difficulty: 'medium', type: 'true-false',
  question: 'السلبي الكاذب أخطر من الإنذار الكاذب.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'لأنه لا يترك أثراً ينبّه أن شيئاً فات.' },

{ topic: ALR, difficulty: 'medium', type: 'true-false',
  question: 'رفع حساسية الكشف يحسّن النتيجة بلا ثمن.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'يغرق الفريق بالكاذب، وخفضها يمرّر ما يستحق الوقوف.' },

{ topic: ALR, difficulty: 'hard', type: 'true-false',
  question: 'استثناء قاعدة مزعجة بلا فهم سببها قد يعمي النظام.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'قد يكون الإزعاج نفسه أثر هجوم متكرر لم يُقرأ.' },

{ topic: ALR, difficulty: 'medium', type: 'true-false',
  question: 'التواقيع تبقى نافعة بلا تحديث دوري.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'توقيع قديم يترك هجمات هذا الشهر تمرّ بلا بلاغ.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: DET, difficulty: 'medium', type: 'matching',
  question: 'صل كل أسلوب كشف بصفته',
  pairs: [ { left: 'بالتوقيع', right: 'يمسك المعروف بدقة' }, { left: 'بالشذوذ', right: 'يلمح ما لم يُعرَف' }, { left: 'التوقيع وحده', right: 'يفوته الجديد' }, { left: 'الشذوذ وحده', right: 'إنذارات كاذبة أكثر' } ],
  explanation: 'كل أسلوب يغطي عمى الآخر، فيُجمعان في الأنظمة الجادة.' },

{ topic: PLC, difficulty: 'medium', type: 'matching',
  question: 'صل كل نظام بموضعه وأثره',
  pairs: [ { left: 'نظام الكشف', right: 'نسخة من الحركة' }, { left: 'نظام المنع', right: 'داخل مسار الحركة' }, { left: 'عطل الكشف', right: 'لا يقطع أحداً' }, { left: 'خطأ المنع', right: 'يقطع خدمة سليمة' } ],
  explanation: 'الموضع يحدد ما يستطيعه النظام وما يخاطر به.' },

{ topic: ALR, difficulty: 'hard', type: 'matching',
  question: 'صل كل حالة بتصنيفها',
  pairs: [ { left: 'بلاغ عن حركة سليمة', right: 'إنذار كاذب' }, { left: 'هجوم مرّ بلا بلاغ', right: 'سلبي كاذب' }, { left: 'بلاغ عن هجوم فعلي', right: 'كشف صحيح' }, { left: 'سلامة بلا بلاغ', right: 'سلبي صحيح' } ],
  explanation: 'أربع حالات يُقاس بها أي نظام كشف قياساً عادلاً.' },

{ topic: ALR, difficulty: 'medium', type: 'matching',
  question: 'صل كل إجراء بغرضه في المعالجة',
  pairs: [ { left: 'التحقق قبل التصعيد', right: 'منع إنهاك الفريق' }, { left: 'الربط بالسجلات', right: 'تكوين قصة كاملة' }, { left: 'ترتيب بأثر الأصل', right: 'الأهم أولاً' }, { left: 'توثيق ما تبيّن', right: 'اختصار وقت لاحق' } ],
  explanation: 'أربع خطوات تحوّل سيلاً من الإنذارات إلى عمل منظّم.' },

{ topic: DET, difficulty: 'hard', type: 'matching',
  question: 'صل كل عائق بما يعالجه',
  pairs: [ { left: 'حركة مشفّرة', right: 'فحص الظرف أو نقطة فكّ' }, { left: 'هجوم جديد بلا توقيع', right: 'كشف بالشذوذ' }, { left: 'شذوذ مشروع متكرر', right: 'ضبط أو استثناء مفهوم' }, { left: 'وصلة أسرع من النظام', right: 'قدرة معالجة تكفي' } ],
  explanation: 'أربعة عوائق عملية لكل واحد علاج يخصّه.' },

{ topic: PLC, difficulty: 'medium', type: 'matching',
  question: 'صل كل موضع بما يراه',
  pairs: [ { left: 'عند حدّ المؤسسة', right: 'الداخل والخارج' }, { left: 'داخل الشبكة', right: 'الانتشار الجانبي' }, { left: 'على المضيف', right: 'ما يجري في الجهاز' }, { left: 'على نسخة الحركة', right: 'المرور بلا قطع' } ],
  explanation: 'ما لا يمرّ بالنظام لا يراه مهما كان النظام جيداً.' },

{ topic: ALR, difficulty: 'medium', type: 'matching',
  question: 'صل كل ضبط بأثره على النتائج',
  pairs: [ { left: 'حساسية مرتفعة', right: 'كاذب أكثر' }, { left: 'حساسية منخفضة', right: 'هجمات تفوت' }, { left: 'تواقيع قديمة', right: 'عمى عن الجديد' }, { left: 'استثناء بلا فهم', right: 'عمى مقصود بالخطأ' } ],
  explanation: 'كل ضبط يشتري شيئاً بثمن، والقياس يكشف أيهما دفعت.' },

{ topic: PLC, difficulty: 'hard', type: 'matching',
  question: 'صل كل طبقة بدورها في الحماية',
  pairs: [ { left: 'الجدار', right: 'يسمح أو يمنع بقاعدة' }, { left: 'نظام الكشف', right: 'يفحص ما مرّ مسموحاً' }, { left: 'نظام المنع', right: 'يقطع ما ثبت خطره' }, { left: 'تقوية الأجهزة', right: 'تقليل ما يُستغَل أصلاً' } ],
  explanation: 'طبقات متتابعة، وسقوط واحدة لا يعني سقوط الباقي.' },

{ topic: DET, difficulty: 'medium', type: 'matching',
  question: 'صل كل مصدر معلومة بما يعطيه للكشف',
  pairs: [ { left: 'التواقيع المحدَّثة', right: 'أنماط هجمات معروفة' }, { left: 'خطّ الأساس', right: 'صورة المعتاد' }, { left: 'سجلات الشبكة', right: 'سياق حول الإنذار' }, { left: 'سجل المضيف', right: 'ما جرى داخل الجهاز' } ],
  explanation: 'الكشف الجيد يجمع مصادر، ولا يعتمد على مصدر واحد.' },

{ topic: ALR, difficulty: 'hard', type: 'matching',
  question: 'صل كل قراءة أمنية بتفسيرها',
  pairs: [ { left: 'آلاف إنذارات وأربعة أفعال', right: 'ضبط سيئ' }, { left: 'اختراق بلا إنذار واحد', right: 'سلبي كاذب' }, { left: 'إنذار يتكرر كل يوم', right: 'شذوذ مشروع' }, { left: 'إنذار على أصل حسّاس', right: 'أولوية عليا' } ],
  explanation: 'الأرقام لا تتكلم وحدها، والتفسير هو عمل المحلّل.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: DET, difficulty: 'easy', type: 'terminal', prompt_label: 'الأسلوب',
  question: 'اكتب اسم الكشف الذي يطابق الحركة بأنماط معروفة',
  expected_answers: ['الكشف بالتوقيع', 'signature based', 'التوقيع', 'كشف بالتوقيع'],
  explanation: 'دقيق فيما يعرفه، أعمى عمّا لم يُكتَب له توقيع.' },

{ topic: DET, difficulty: 'easy', type: 'terminal', prompt_label: 'الأسلوب',
  question: 'اكتب اسم الكشف الذي يرصد الانحراف عن المعتاد',
  expected_answers: ['الكشف بالشذوذ', 'anomaly based', 'الشذوذ', 'كشف بالشذوذ'],
  explanation: 'يلمح ما لم يُعرَف بعد، وثمنه إنذارات كاذبة أكثر.' },

{ topic: PLC, difficulty: 'medium', type: 'terminal', prompt_label: 'النظام',
  question: 'اكتب اسم النظام الذي يبلّغ ولا يقطع الحركة',
  expected_answers: ['نظام كشف التسلل', 'IDS', 'ids', 'نظام الكشف'],
  explanation: 'يأخذ نسخة، فعطله لا يقطع حركة أحد.' },

{ topic: PLC, difficulty: 'medium', type: 'terminal', prompt_label: 'النظام',
  question: 'اكتب اسم النظام الذي يقف في المسار ويقطع ما يشاء',
  expected_answers: ['نظام منع التسلل', 'IPS', 'ips', 'نظام المنع'],
  explanation: 'لا يمنع من لا يمرّ به، فموضعه في الطريق شرط عمله.' },

{ topic: PLC, difficulty: 'hard', type: 'terminal', prompt_label: 'الوضع',
  question: 'اكتب اسم تشغيل نظام المنع ليبلّغ قبل أن يقطع',
  expected_answers: ['وضع الإبلاغ', 'monitor mode', 'وضع المراقبة', 'الإبلاغ'],
  explanation: 'قاعدة تبدو صائبة قد تقطع تطبيقاً لا يعرفه أحد.' },

{ topic: ALR, difficulty: 'medium', type: 'terminal', prompt_label: 'التصنيف',
  question: 'اكتب اسم البلاغ عن حركة سليمة ظُنّت هجوماً',
  expected_answers: ['الإنذار الكاذب', 'false positive', 'إنذار كاذب', 'الإيجابي الكاذب'],
  explanation: 'كثرته تدرّب الفريق على تجاهل ما يستحق النظر.' },

{ topic: ALR, difficulty: 'hard', type: 'terminal', prompt_label: 'التصنيف',
  question: 'اكتب اسم الهجوم الذي مرّ بلا أن يُبلَّغ عنه',
  expected_answers: ['السلبي الكاذب', 'false negative', 'سلبي كاذب', 'الكاذب السلبي'],
  explanation: 'أخطر الحالات، لأن غياب البلاغ يبدو كأنه سلامة.' },

{ topic: DET, difficulty: 'medium', type: 'terminal', prompt_label: 'الأساس',
  question: 'اكتب اسم صورة الحركة المعتادة التي يُقاس عليها الشذوذ',
  expected_answers: ['خطّ الأساس', 'baseline', 'خط الأساس', 'الأساس'],
  explanation: 'يُبنى في مدة هادئة، ويُعاد بناؤه مع تغيّر العمل.' },

{ topic: PLC, difficulty: 'hard', type: 'terminal', prompt_label: 'الحركة',
  question: 'اكتب اسم انتقال المهاجم بين الأجهزة الداخلية',
  expected_answers: ['الانتشار الجانبي', 'lateral movement', 'الحركة الجانبية', 'الانتقال الجانبي'],
  explanation: 'لا يعبر حدّ المؤسسة، فلا يراه من يقف عليه وحده.' },

{ topic: ALR, difficulty: 'medium', type: 'terminal', prompt_label: 'الإجراء',
  question: 'اكتب اسم ما يلزم للتواقيع لتبقى نافعة',
  expected_answers: ['التحديث الدوري', 'تحديث التواقيع', 'التحديث', 'تحديث دوري'],
  explanation: 'توقيع قديم يترك هجمات هذا الشهر تمرّ بلا بلاغ.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: DET, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يصف الكشف بالتوقيع؟',
  options: ['يمسك الهجمات المعروفة بدقة', 'يحتاج تحديثاً دورياً للتواقيع', 'يرصد الانحراف عن المعتاد', 'يبني صورة للحركة الطبيعية'],
  correct_answers: [0, 1],
  explanation: 'الرصد وبناء الصورة وصف الكشف بالشذوذ لا بالتوقيع.' },

{ topic: DET, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي ثمن الكشف بالشذوذ؟',
  options: ['إنذارات كاذبة أكثر', 'حاجة لخطّ أساس يُبنى ويُحدَّث', 'عمى تام عن الهجوم الجديد', 'حاجة لتواقيع تُحدَّث يومياً'],
  correct_answers: [0, 1],
  explanation: 'العمى عن الجديد والتواقيع صفتا الكشف بالتوقيع.' },

{ topic: DET, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يبقى مرئياً في حركة مشفّرة؟',
  options: ['عنوانا الطرفين', 'حجم الحركة وتوقيتها', 'محتوى الحمولة نفسها', 'كلمات المرور المرسَلة'],
  correct_answers: [0, 1],
  explanation: 'المحتوى مخفي، ومن الظرف يُبنى كشف السلوك.' },

{ topic: PLC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يصف نظام الكشف؟',
  options: ['يعمل على نسخة من الحركة', 'عطله لا يقطع خدمة', 'يقطع الحركة المشبوهة', 'يقف داخل مسار الحركة'],
  correct_answers: [0, 1],
  explanation: 'القطع والوقوف في المسار صفتا نظام المنع.' },

{ topic: PLC, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي خطر في نظام المنع؟',
  options: ['خطأ قاعدة يقطع خدمة سليمة', 'عطله يقطع مسار الحركة', 'لا يرى الحركة المارّة به', 'يحتاج نسخة من الحركة'],
  correct_answers: [0, 1],
  explanation: 'الرؤية والنسخة شأن نظام الكشف لا المنع.' },

{ topic: PLC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يفوت نظاماً عند حدّ المؤسسة وحده؟',
  options: ['انتشار بين خادمين داخليين', 'حركة بين جهازي مستخدمين', 'دخول من الإنترنت للشبكة', 'خروج من الشبكة للإنترنت'],
  correct_answers: [0, 1],
  explanation: 'ما يعبر الحدّ يراه، وما يبقى داخلاً لا يمرّ به.' },

{ topic: ALR, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يُفعَل بإنذار وارد؟',
  options: ['التحقق من الحركة قبل التصعيد', 'ربطه بسجلات أخرى للسياق', 'تصعيده فوراً بلا تحقق', 'حذفه لتقليل عدد الإنذارات'],
  correct_answers: [0, 1],
  explanation: 'التصعيد بلا تحقق يُنهك، والحذف يُخفي لا يعالج.' },

{ topic: ALR, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يرفع أولوية إنذار؟',
  options: ['حساسية الأصل المستهدَف', 'أثر نجاح الهجوم عليه', 'ترتيب وصوله في القائمة', 'طول اسم القاعدة المطلِقة'],
  correct_answers: [0, 1],
  explanation: 'الترتيب والاسم لا يقولان شيئاً عن خطورة الواقعة.' },

{ topic: ALR, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يدلّ على سوء ضبط النظام؟',
  options: ['آلاف إنذارات وأفعال معدودة', 'قاعدة تُنذِر كذباً كل يوم', 'إنذار نادر على أصل حسّاس', 'تواقيع محدَّثة هذا الأسبوع'],
  correct_answers: [0, 1],
  explanation: 'الإنذار النادر المهم والتحديث علامتا صحة لا خلل.' },

{ topic: DET, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يبقى لازماً مع وجود الكشف؟',
  options: ['الجدار وقواعده', 'تحديث الأنظمة وتقويتها', 'فتح المنافذ لتسهيل الفحص', 'إيقاف تشفير الحركة الداخلية'],
  correct_answers: [0, 1],
  explanation: 'الكشف طبقة فوق الوقاية، وإضعاف الوقاية له ليس مقايضة.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: ALR, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات معالجة إنذار وارد',
  options: ['قراءة الإنذار وسياقه', 'التحقق من الحركة فعلياً', 'تصعيده أو إغلاقه بقرار', 'توثيق ما تبيّن وما فُعِل'],
  explanation: 'التحقق قبل القرار، والتوثيق بعده لا قبله.' },

{ topic: PLC, difficulty: 'easy', type: 'ordering',
  question: 'رتّب خطوات إدخال نظام منع إلى الشبكة',
  options: ['وضعه على نسخة الحركة أولاً', 'ضبط قواعده بوضع الإبلاغ', 'نقله إلى مسار الحركة', 'تفعيل المنع تدريجياً'],
  explanation: 'المنع آخر خطوة، فقاعدة غير مضبوطة تقطع خدمات قائمة.' },

{ topic: DET, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تشغيل الكشف بالشذوذ',
  options: ['جمع الحركة مدة هادئة', 'بناء خطّ الأساس منها', 'ضبط حدود الانحراف', 'مراجعة الإنذارات وضبطها'],
  explanation: 'الحدود تُشتَقّ من الأساس، ومن ضبطها قبله ضبطها بالتخمين.' },

{ topic: ALR, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات معالجة قاعدة تُنذِر كذباً يومياً',
  options: ['قراءة ما تطلقه فعلاً', 'فهم سبب تكرار الإنذار', 'ضبطها أو استثناء الحالة المفهومة', 'مراقبة النتيجة أسبوعاً'],
  explanation: 'الاستثناء بلا فهم قد يعمي النظام عن هجوم حقيقي.' },

{ topic: DET, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات معالجة عمى الكشف أمام التشفير',
  options: ['تحديد ما لا يُفحَص محتواه', 'تقدير قيمة فحصه أمنياً', 'اختيار فحص الظرف أو نقطة فكّ', 'توثيق القرار وأثره'],
  explanation: 'فكّ التشفير قرار له ثمن في الخصوصية والأداء، فيُوثَّق.' },

{ topic: PLC, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات توسيع الرؤية للانتشار الجانبي',
  options: ['رصد غياب الرؤية داخل الشبكة', 'تحديد نقاط الالتقاط الداخلية', 'تشغيل الكشف عليها', 'قياس ما ظهر ولم يكن يظهر'],
  explanation: 'القياس بعد التشغيل يثبت أن الرؤية اتّسعت فعلاً.' },

{ topic: ALR, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات المراجعة الدورية للكشف',
  options: ['حصر إنذارات المدة', 'حساب ما استحق تدخّلاً', 'ضبط القواعد والحساسية', 'إعادة القياس بعد الضبط'],
  explanation: 'إعادة القياس تفصل بين ضبط نافع وضبط أخفى المشكلة.' },

{ topic: DET, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تحديث التواقيع بأمان',
  options: ['جلبها من مصدر موثوق', 'مراجعة ما تغيّر فيها', 'تطبيقها على جزء أولاً', 'تعميمها بعد التحقق'],
  explanation: 'حزمة تواقيع جديدة قد تُغرِق الفريق أو تقطع خدمة.' },

{ topic: PLC, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تشخيص انقطاع بعد تفعيل قاعدة منع',
  options: ['ربط زمن الانقطاع بزمن التفعيل', 'قراءة ما قطعته القاعدة', 'إعادتها لوضع الإبلاغ', 'ضبطها ثم تفعيلها ثانيةً'],
  explanation: 'العودة للإبلاغ تُعيد الخدمة وتُبقي الرؤية حتى يُضبَط.' },

{ topic: ALR, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات التحقيق في إنذار على أصل حسّاس',
  options: ['عزل الأصل عن الشبكة عند اللزوم', 'جمع سجلاته وسجلات الشبكة', 'تحديد ما جرى وحدوده', 'إعادته للعمل بعد المعالجة'],
  explanation: 'العزل أولاً يمنع الانتشار، والجمع بعده لا قبله.' }

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
