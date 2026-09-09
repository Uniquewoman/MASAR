// التقنية المالية · S4 البلوكشين والأصول الرقمية · L4 العقود الذكية
// ثلاثة مواضيع: مفهوم العقد الذكي وتنفيذه · حدوده ومخاطره · تطبيقاته المالية
//
// حدود مقصودة: بنية الكتل L1، والإجماع والتعدين L2، وأنواع الأصول والتداول
// L3، والمحافظ والمفاتيح والأمن L5. والتمويل اللامركزي قسم كامل في S7 L2،
// فيُبنى هنا ما يفهمه به لا هو نفسه.
//
// الصعوبة: ٥ سهل · ٤٩ متوسط · ٣٦ صعب — مطابق لصف L4.

const T = 'FinTech';
const S = 'Blockchain & Digital Assets';
const L = 4;

const CON = 'Smart Contract Basics';
const RSK = 'Contract Risks';
const APP = 'Financial Applications';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: CON, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بالعقد الذكي؟',
  options: ['شيفرة تنفَّذ على الشبكة بشروطها', 'اتفاق مكتوب يوقّعه طرفان', 'خدمة تحفظ الاتفاقات رقمياً', 'برنامج يدير محفظة العميل'],
  correct_answer: 0,
  explanation: 'الشرط مكتوب في الشيفرة وينفَّذ بها لا بورقة.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يشغّل العقد الذكي؟',
  options: ['معاملة ترسَل إلى عنوانه', 'مؤقّت داخلي يعمل وحده', 'قرار من مالك الشبكة', 'إشعار من خادم خارجي'],
  correct_answer: 0,
  explanation: 'العقد ساكن حتى تناديه معاملة، فلا يبدأ من نفسه.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز تنفيذ العقد على كل العقد؟',
  options: ['نتيجة واحدة يتحقق منها الجميع', 'نتيجة مختلفة عند كل عقدة', 'نتيجة يحددها منفّذ واحد', 'نتيجة تُحسَب خارج الشبكة'],
  correct_answer: 0,
  explanation: 'الحتمية شرط، فبدونها لا يتفق المتحققون.' },

{ topic: CON, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يجب أن يكون تنفيذ العقد حتمياً؟',
  options: ['ليصل الجميع للنتيجة نفسها', 'ليعمل العقد بسرعة أكبر', 'ليقلّ حجم شيفرته المخزّنة', 'لتقلّ كلفة نشره مرة واحدة'],
  correct_answer: 0,
  explanation: 'اختلاف النتائج يهدم الإجماع الذي تقوم عليه الشبكة.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود برسوم التنفيذ في العقد؟',
  options: ['مقابل الحوسبة التي يستهلكها', 'مقابل تخزين نسخته الأولى', 'مقابل مراجعة شيفرته أمنياً', 'مقابل إدراجه في المنصات'],
  correct_answer: 0,
  explanation: 'كل خطوة حسابية تُدفَع لأنها تشغل الشبكة كلها.' },

{ topic: CON, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يحدث حين تنفد الرسوم أثناء التنفيذ؟',
  options: ['يُلغى الأثر وتُستهلك الرسوم', 'يكتمل التنفيذ وتُؤجَّل الرسوم', 'يتوقف مؤقتاً حتى تُضاف', 'تُعاد الرسوم كاملة للمرسل'],
  correct_answer: 0,
  explanation: 'الشبكة عملت فاستحقت، والحالة ترجع كما كانت.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما معنى أن تنفيذ العقد ذرّي؟',
  options: ['ينجح كاملاً أو لا يُغيّر شيئاً', 'ينجح جزئياً ويكمل لاحقاً', 'يُقسَّم على عدة معاملات', 'يُنفَّذ على عقدة واحدة فقط'],
  correct_answer: 0,
  explanation: 'لا حالة نصفية تبقى بعد فشل التنفيذ.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بحالة العقد؟',
  options: ['بيانات يحفظها بين الاستدعاءات', 'شيفرته المكتوبة قبل نشرها', 'رسوم استدعائه في كل مرة', 'عنوانه المسجَّل على الشبكة'],
  correct_answer: 0,
  explanation: 'الحالة ذاكرة العقد التي تبقى بعد انتهاء النداء.' },

{ topic: CON, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز العقد غير القابل للترقية؟',
  options: ['شيفرته ثابتة بعد نشرها', 'شيفرته تُعدَّل بأمر مالكه', 'شيفرته تُحدَّث كل فترة', 'شيفرته تُحذَف عند الخطأ'],
  correct_answer: 0,
  explanation: 'الثبات يطمئن المتعامل ويمنع إصلاح الخطأ معاً.' },

{ topic: CON, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يقرأه العقد من خارج الشبكة؟',
  options: ['ما يُدخِله له مغذّي بيانات', 'ما يجلبه بنفسه من الإنترنت', 'ما يقرأه من جهاز مالكه', 'ما يستنتجه من الكتل السابقة'],
  correct_answer: 0,
  explanation: 'العقد لا يخرج من الشبكة، فيحتاج من يُدخِل له الخبر.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجعل خطأ العقد أشدّ من خطأ برنامج عادي؟',
  options: ['صعوبة تعديله بعد نشره', 'بطء تنفيذه على الشبكة', 'ارتفاع كلفة كتابته أولاً', 'قلة من يقرؤون شيفرته'],
  correct_answer: 0,
  explanation: 'ما نُشِر يصعب سحبه، وما نُقِل يصعب استرداده.' },

{ topic: RSK, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما المقصود بخطر مغذّي البيانات؟',
  options: ['خبر خاطئ يُنفَّذ عليه العقد', 'بطء في وصول الخبر للعقد', 'ارتفاع رسوم إدخال الخبر', 'كثرة المغذّين لعقد واحد'],
  correct_answer: 0,
  explanation: 'العقد سليم والمدخَل فاسد، فالنتيجة فاسدة.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يعالج اعتماد العقد على مصدر خبر واحد؟',
  options: ['تعدد المصادر وأخذ وسيطها', 'زيادة رسوم استدعاء المصدر', 'تقليل عدد استدعاءاته يومياً', 'إخفاء اسم المصدر عن الناس'],
  correct_answer: 0,
  explanation: 'مصدر واحد نقطة فشل وحيدة مهما كان موثوقاً.' },

{ topic: RSK, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما المقصود بخطر إعادة الدخول في العقد؟',
  options: ['استدعاء يعود قبل تحديث الرصيد', 'استدعاء يتكرر بعد اكتماله', 'استدعاء يفشل ويعيد المحاولة', 'استدعاء يأتي من عقدين معاً'],
  correct_answer: 0,
  explanation: 'التحويل قبل التحديث يفتح باب السحب المتكرر.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يقلّل خطر الصلاحيات في العقد؟',
  options: ['حصر ما يقدر عليه المالك', 'منح المالك صلاحية كاملة', 'إخفاء عنوان المالك عنه', 'تغيير المالك كل فترة'],
  correct_answer: 0,
  explanation: 'مالك يقدر على كل شيء يعيد المركزية من الباب الخلفي.' },

{ topic: RSK, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز مفتاح الإيقاف في العقد؟',
  options: ['يوقف العقد عند كشف خلل', 'يحذف العقد من الشبكة', 'يعيد الأموال تلقائياً', 'يمنع نشر عقود مشابهة'],
  correct_answer: 0,
  explanation: 'يحدّ الضرر ويُعطي مالكه سلطة تُساء إن لم تُقيَّد.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة مراجعة شيفرة العقد قبل نشرها؟',
  options: ['كشف الثغرة قبل استحالة إصلاحها', 'تسريع تنفيذ العقد بعد نشره', 'تخفيض رسوم استدعائه لاحقاً', 'ضمان ارتفاع قيمة رمزه'],
  correct_answer: 0,
  explanation: 'ما يُكتشَف قبل النشر يُصلَح، وبعده يُدفَع ثمنه.' },

{ topic: RSK, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما حدود ما تثبته المراجعة الأمنية للعقد؟',
  options: ['أن العقد لم تُكتشَف ثغرته', 'أن العقد آمن بشكل قاطع', 'أن العقد مربح لمن يستخدمه', 'أن العقد أرخص من غيره'],
  correct_answer: 0,
  explanation: 'غياب الدليل على الثغرة ليس دليلاً على غيابها.' },

{ topic: RSK, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الخطأ المنطقي عن الثغرة التقنية؟',
  options: ['الأول يعمل كما كُتِب لا كما قُصِد', 'الأول يوقف تنفيذ العقد فوراً', 'الأول يظهر في المراجعة دائماً', 'الأول لا يترتب عليه خسارة'],
  correct_answer: 0,
  explanation: 'شيفرة سليمة تنفّذ قصداً خاطئاً بأمانة تامة.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم قبل إيداع مبلغ كبير في عقد؟',
  options: ['فحص شيفرته وصلاحيات مالكه', 'قراءة إعلانات فريقه', 'متابعة عدد متابعيه', 'مقارنة عائده بغيره'],
  correct_answer: 0,
  explanation: 'ما وراء العقد من صلاحيات أخطر من عائده المعلن.' },

{ topic: APP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يحققه العقد في الضمان بين طرفين؟',
  options: ['يحجز المبلغ حتى يتحقق الشرط', 'يمنح البائع المبلغ فوراً', 'يعيد المبلغ للمشتري دائماً', 'يقسّم المبلغ بين الطرفين'],
  correct_answer: 0,
  explanation: 'الحجز المشروط يغني عن ثقة أحدهما بالآخر.' },

{ topic: APP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجعل العقد بديلاً عن وسيط بشري؟',
  options: ['شرط معلن ينفَّذ بلا تقدير', 'سرعته في نقل الأموال', 'رخص رسومه مقارنة به', 'قدرته على فهم النزاع'],
  correct_answer: 0,
  explanation: 'ما يحتاج تقديراً بشرياً لا يُسلَّم لشيفرة.' },

{ topic: APP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بترميز الأصل عبر عقد؟',
  options: ['تمثيل ملكية الأصل بوحدات', 'نقل الأصل نفسه إلى الشبكة', 'تحويل الأصل إلى عملة نقدية', 'إخفاء مالك الأصل عن الجميع'],
  correct_answer: 0,
  explanation: 'الوحدة تمثيل، والأصل يبقى حيث هو.' },

{ topic: APP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يحتاجه ترميز أصل واقعي ليعتدّ به؟',
  options: ['حافظ للأصل وإطار قانوني', 'شبكة سريعة ورسوم قليلة', 'عدد كبير من الحاملين', 'إدراج في منصات كثيرة'],
  correct_answer: 0,
  explanation: 'الرمز بلا سند قانوني وعدٌ لا يُنفَّذ خارج الشبكة.' },

{ topic: APP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة تجزئة ملكية أصل عبر الترميز؟',
  options: ['دخول مستثمرين بمبالغ صغيرة', 'ارتفاع قيمة الأصل تلقائياً', 'إعفاء الأصل من التنظيم', 'إلغاء الحاجة لتقييمه'],
  correct_answer: 0,
  explanation: 'التجزئة تخفض عتبة الدخول لا تغيّر قيمة الأصل.' },

{ topic: APP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الدفع المشروط بعقد؟',
  options: ['ينفَّذ عند تحقق شرط معلن', 'ينفَّذ بموافقة الطرفين معاً', 'ينفَّذ في موعد ثابت شهرياً', 'ينفَّذ بقرار من المنصة'],
  correct_answer: 0,
  explanation: 'الشرط مكتوب سلفاً فلا يحتاج تدخلاً وقت التنفيذ.' },

{ topic: APP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يحدّ من استعمال العقود في المدفوعات اليومية؟',
  options: ['كلفة التنفيذ ووقت التأكيد', 'صعوبة كتابة شرط الدفع', 'عدم قابلية الأصل للتجزئة', 'منع الأنظمة لها إطلاقاً'],
  correct_answer: 0,
  explanation: 'ما يكلّف أكثر من قيمة الدفعة لا يُستعمل فيها.' },

{ topic: APP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التسوية عبر عقد عن التسوية التقليدية؟',
  options: ['تتم مع التنفيذ لا بعده بأيام', 'تحتاج غرفة مقاصة وسيطة', 'تؤجَّل إلى نهاية يوم العمل', 'تحتاج موافقة بنكين معاً'],
  correct_answer: 0,
  explanation: 'اقتران التسليم بالدفع يلغي خطر الطرف المقابل.' },

{ topic: APP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يبقى خارج قدرة العقد الذكي؟',
  options: ['الحكم فيما يحتاج تقديراً', 'تنفيذ شرط معلن مسبقاً', 'حجز مبلغ حتى موعد', 'توزيع مبلغ على عناوين'],
  correct_answer: 0,
  explanation: 'الشيفرة تنفّذ ما كُتِب ولا تجتهد فيما لم يُكتَب.' },

{ topic: APP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم لربط عقد بإجراء مالي منظَّم؟',
  options: ['اعتراف الجهة الرقابية بأثره', 'زيادة عدد مستخدميه المسجَّلين', 'خفض رسوم استدعائه المتكرر', 'نشره على شبكة أسرع تأكيداً'],
  correct_answer: 0,
  explanation: 'ما لا تعترف به الجهة الرقابية لا يُعتدّ به نظاماً.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: CON, difficulty: 'medium', type: 'code',
  question: 'ماذا يحدث عند استدعاء هذا العقد بمبلغ ناقص؟',
  code_snippet: 'شرط العقد: يُحوَّل للبائع إذا وصل المبلغ 100\nالمبلغ الوارد: 80',
  options: ['يُرفض التنفيذ ولا يُحوَّل شيء', 'يُحوَّل 80 وينتظر الباقي', 'يُحوَّل 100 من رصيد العقد', 'يُؤجَّل التنفيذ حتى يكتمل'],
  correct_answer: 0,
  explanation: 'الشرط لم يتحقق، والتنفيذ ذرّي فلا حالة نصفية.' },

{ topic: CON, difficulty: 'hard', type: 'code',
  question: 'ما نتيجة نفاد الرسوم هنا؟',
  code_snippet: 'الخطوة 1: خصم الرصيد ✓\nالخطوة 2: تحويل المبلغ ✗ نفدت الرسوم',
  options: ['يعود الرصيد وتُستهلك الرسوم', 'يبقى الخصم ويُلغى التحويل', 'يكتمل التحويل بلا رسوم', 'تُعاد الرسوم ويُلغى الكل'],
  correct_answer: 0,
  explanation: 'الأثر يُلغى كاملاً، والشبكة تأخذ مقابل ما عملته.' },

{ topic: RSK, difficulty: 'hard', type: 'code',
  question: 'ما الثغرة في هذا الترتيب؟',
  code_snippet: 'الخطوة 1: إرسال المبلغ للمستدعي\nالخطوة 2: تصفير رصيده في العقد',
  options: ['استدعاء عائد قبل تصفير الرصيد', 'رسوم أعلى من اللازم للتنفيذ', 'خطأ في حساب المبلغ المرسل', 'لا ثغرة ما دام الترتيب واضحاً'],
  correct_answer: 0,
  explanation: 'الإرسال قبل التحديث يسمح بسحب متكرر قبل التصفير.' },

{ topic: RSK, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في تصميم هذا العقد؟',
  code_snippet: 'مصدر السعر: مغذٍّ واحد\nالإجراء: تصفية المراكز عند هبوط السعر',
  options: ['مصدر وحيد يقرر إجراءً حاسماً', 'إجراء التصفية بطيء التنفيذ', 'رسوم التصفية أعلى من اللازم', 'لا خلل ما دام المصدر معروفاً'],
  correct_answer: 0,
  explanation: 'خبر خاطئ من مصدر واحد يصفّي مراكز سليمة.' },

{ topic: RSK, difficulty: 'hard', type: 'code',
  question: 'ما الذي تكشفه هذي الصلاحيات؟',
  code_snippet: 'المالك يستطيع: سحب كل الأرصدة\nالمالك يستطيع: تعديل الشروط\nالقيود: لا شيء',
  options: ['مركزية كاملة رغم شكل العقد', 'لامركزية تامة في الإدارة', 'حماية إضافية لأموال العملاء', 'قيود صارمة على المالك'],
  correct_answer: 0,
  explanation: 'من يقدر على سحب الكل يملك الكل مهما قيل غير ذلك.' },

{ topic: APP, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا العقد؟',
  code_snippet: 'المبلغ: محجوز في العقد\nالشرط: تأكيد التسليم\nعند التأكيد: يُحوَّل للبائع',
  options: ['عقد ضمان مشروط بين طرفين', 'عقد ترميز لأصل واقعي', 'عقد توزيع أرباح دوري', 'عقد إقراض قصير الأجل'],
  correct_answer: 0,
  explanation: 'الحجز المشروط يغني عن ثقة أحدهما بالآخر.' },

{ topic: APP, difficulty: 'hard', type: 'code',
  question: 'ما الذي ينقص هذا الترميز ليعتدّ به؟',
  code_snippet: 'الرمز: يمثّل عقاراً\nالحافظ للأصل: غير محدد\nالسند القانوني: غير موجود',
  options: ['حافظ للأصل وإطار قانوني', 'شبكة أسرع ورسوم أقل', 'عدد أكبر من الحاملين', 'إدراج في منصات إضافية'],
  correct_answer: 0,
  explanation: 'الرمز بلا سند قانوني وعدٌ لا يُنفَّذ خارج الشبكة.' },

{ topic: APP, difficulty: 'medium', type: 'code',
  question: 'كم يستلم كل مستفيد هنا؟',
  code_snippet: 'المبلغ الوارد: 900\nالمستفيدون: 3 بحصص متساوية\nرسوم التنفيذ: مدفوعة من المرسل',
  options: ['300 لكل مستفيد', '900 لكل مستفيد', '450 لاثنين فقط', '270 بعد خصم الرسوم'],
  correct_answer: 0,
  explanation: '٩٠٠ ÷ ٣ = ٣٠٠، والرسوم على المرسل لا على الحصص.' },

{ topic: CON, difficulty: 'medium', type: 'code',
  question: 'لماذا يفشل هذا العقد في الإجماع؟',
  code_snippet: 'الشيفرة: تستعمل رقماً عشوائياً محلياً\nالنتيجة: تختلف بين العقد',
  options: ['التنفيذ غير حتمي فتختلف النتائج', 'الرسوم غير كافية للتنفيذ', 'الشيفرة أطول مما تسمح الكتلة', 'العنوان غير مسجَّل على الشبكة'],
  correct_answer: 0,
  explanation: 'الحتمية شرط، فبدونها لا يتفق المتحققون.' },

{ topic: RSK, difficulty: 'hard', type: 'code',
  question: 'ما نوع الخطأ هنا؟',
  code_snippet: 'المقصود: توزيع 10% أرباحاً\nالمكتوب: توزيع 10 وحدات ثابتة\nالتنفيذ: يعمل بلا خطأ',
  options: ['خطأ منطقي لا ثغرة تقنية', 'ثغرة إعادة دخول معروفة', 'خطأ في حساب الرسوم', 'عطل في مغذّي البيانات'],
  correct_answer: 0,
  explanation: 'شيفرة سليمة تنفّذ قصداً خاطئاً بأمانة تامة.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: CON, difficulty: 'medium', type: 'true-false',
  question: 'العقد الذكي يبدأ التنفيذ من نفسه بلا معاملة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'العقد ساكن حتى تناديه معاملة ترسَل إليه.' },

{ topic: CON, difficulty: 'medium', type: 'true-false',
  question: 'تنفيذ العقد ذرّي: ينجح كاملاً أو لا يُغيّر شيئاً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'لا حالة نصفية تبقى بعد فشل التنفيذ.' },

{ topic: CON, difficulty: 'hard', type: 'true-false',
  question: 'العقد يجلب بيانات السوق بنفسه من الإنترنت.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'لا يخرج من الشبكة، فيحتاج مغذّياً يُدخِل له الخبر.' },

{ topic: CON, difficulty: 'easy', type: 'true-false',
  question: 'رسوم التنفيذ مقابل الحوسبة التي يستهلكها العقد.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'كل خطوة حسابية تشغل الشبكة كلها فتُدفَع.' },

{ topic: RSK, difficulty: 'medium', type: 'true-false',
  question: 'المراجعة الأمنية تثبت خلوّ العقد من الثغرات.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'غياب الدليل على الثغرة ليس دليلاً على غيابها.' },

{ topic: RSK, difficulty: 'hard', type: 'true-false',
  question: 'صلاحية المالك بسحب كل الأرصدة تنقض لامركزية العقد.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'من يقدر على سحب الكل يملك الكل مهما قيل غيره.' },

{ topic: RSK, difficulty: 'medium', type: 'true-false',
  question: 'الخطأ المنطقي يظهر بوضوح لأن العقد يتوقف عنده.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'شيفرة سليمة تنفّذ قصداً خاطئاً بأمانة تامة.' },

{ topic: APP, difficulty: 'medium', type: 'true-false',
  question: 'الترميز ينقل الأصل الواقعي نفسه إلى الشبكة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الوحدة تمثيل للملكية، والأصل يبقى حيث هو.' },

{ topic: APP, difficulty: 'hard', type: 'true-false',
  question: 'اقتران التسليم بالدفع في العقد يلغي خطر الطرف المقابل.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'لا يسلّم أحدهما إلا وقد سلّم الآخر في اللحظة ذاتها.' },

{ topic: APP, difficulty: 'medium', type: 'true-false',
  question: 'ما يحتاج تقديراً بشرياً يبقى خارج قدرة العقد.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الشيفرة تنفّذ ما كُتِب ولا تجتهد فيما لم يُكتَب.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: CON, difficulty: 'medium', type: 'matching',
  question: 'صل كل خاصية للعقد بمعناها',
  pairs: [ { left: 'الحتمية', right: 'نتيجة واحدة للجميع' }, { left: 'الذرّية', right: 'كل التنفيذ أو لا شيء' }, { left: 'الحالة', right: 'ما يبقى بين النداءات' }, { left: 'الرسوم', right: 'مقابل الحوسبة' } ],
  explanation: 'أربع خصائص تفسّر أكثر سلوك العقود.' },

{ topic: CON, difficulty: 'hard', type: 'matching',
  question: 'صل كل حالة تنفيذ بنتيجتها',
  pairs: [ { left: 'الشرط تحقق', right: 'ينفَّذ ويُحفَظ الأثر' }, { left: 'الشرط لم يتحقق', right: 'يُرفض بلا أثر' }, { left: 'نفدت الرسوم', right: 'يُلغى وتُستهلك الرسوم' }, { left: 'مبلغ ناقص', right: 'يُرفض التنفيذ' } ],
  explanation: 'الأثر إما كامل وإما معدوم في كل الحالات.' },

{ topic: CON, difficulty: 'easy', type: 'matching',
  question: 'صل كل عنصر بدوره في العقد',
  pairs: [ { left: 'المعاملة', right: 'تشغّل العقد' }, { left: 'مغذّي البيانات', right: 'يُدخِل خبراً خارجياً' }, { left: 'العنوان', right: 'موضع العقد' }, { left: 'الشيفرة', right: 'الشرط المنفَّذ' } ],
  explanation: 'كل عنصر يؤدي دوراً لا يؤديه غيره.' },

{ topic: RSK, difficulty: 'medium', type: 'matching',
  question: 'صل كل خطر بمعالجته',
  pairs: [ { left: 'مصدر خبر واحد', right: 'تعدد المصادر' }, { left: 'صلاحية مالك مطلقة', right: 'حصر ما يقدر عليه' }, { left: 'ثغرة قبل النشر', right: 'مراجعة مستقلة' }, { left: 'خلل بعد النشر', right: 'مفتاح إيقاف مقيَّد' } ],
  explanation: 'لكل خطر علاج يسبقه لا يتبعه.' },

{ topic: RSK, difficulty: 'hard', type: 'matching',
  question: 'صل كل عيب بوصفه الدقيق',
  pairs: [ { left: 'إعادة الدخول', right: 'عودة قبل تحديث الرصيد' }, { left: 'خطأ منطقي', right: 'ينفّذ غير ما قُصِد' }, { left: 'خبر فاسد', right: 'مدخَل خاطئ لعقد سليم' }, { left: 'باب خلفي', right: 'صلاحية غير معلنة' } ],
  explanation: 'تسمية العيب أول خطوة في علاجه.' },

{ topic: RSK, difficulty: 'medium', type: 'matching',
  question: 'صل كل فحص قبل الإيداع بما يكشفه',
  pairs: [ { left: 'قراءة الصلاحيات', right: 'ما يقدر عليه المالك' }, { left: 'مراجعة الشيفرة', right: 'ثغرات محتملة' }, { left: 'فحص المغذّي', right: 'مصدر ما يعتمد عليه' }, { left: 'تاريخ التحديثات', right: 'قابليته للتغيير' } ],
  explanation: 'أربعة أسئلة تسبق أي مبلغ يُودَع.' },

{ topic: APP, difficulty: 'medium', type: 'matching',
  question: 'صل كل تطبيق مالي بما يقدّمه العقد فيه',
  pairs: [ { left: 'الضمان', right: 'حجز حتى تحقق الشرط' }, { left: 'الترميز', right: 'تمثيل ملكية بوحدات' }, { left: 'الدفع المشروط', right: 'تنفيذ عند شرط معلن' }, { left: 'التسوية', right: 'تسليم يقارن الدفع' } ],
  explanation: 'أربع حالات يضيف فيها العقد قيمة حقيقية.' },

{ topic: APP, difficulty: 'hard', type: 'matching',
  question: 'صل كل عنصر في ترميز أصل واقعي بدوره',
  pairs: [ { left: 'الحافظ للأصل', right: 'يحتفظ به فعلياً' }, { left: 'السند القانوني', right: 'يربط الرمز بالحق' }, { left: 'العقد', right: 'يدير الوحدات' }, { left: 'المدقق', right: 'يثبت وجود الأصل' } ],
  explanation: 'غياب أحدها يجعل الرمز وعداً بلا سند.' },

{ topic: APP, difficulty: 'medium', type: 'matching',
  question: 'صل كل مهمة بمن يصلح لها',
  pairs: [ { left: 'تنفيذ شرط معلن', right: 'عقد ذكي' }, { left: 'تقدير نية طرف', right: 'حَكَم بشري' }, { left: 'حجز مبلغ لموعد', right: 'عقد ذكي' }, { left: 'تفسير عبارة مبهمة', right: 'حَكَم بشري' } ],
  explanation: 'ما يحتاج تقديراً لا يُسلَّم لشيفرة.' },

{ topic: APP, difficulty: 'medium', type: 'matching',
  question: 'صل كل قيد على العقود المالية بسببه',
  pairs: [ { left: 'كلفة التنفيذ', right: 'حوسبة تدفعها الشبكة' }, { left: 'وقت التأكيد', right: 'انتظار إدراج الكتلة' }, { left: 'صعوبة التعديل', right: 'ثبات ما نُشِر' }, { left: 'الاعتراف النظامي', right: 'حاجة الجهة الرقابية' } ],
  explanation: 'قيود تفسّر لماذا لا يصلح العقد لكل شيء.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: CON, difficulty: 'easy', type: 'terminal', prompt_label: 'المفهوم',
  question: 'اكتب اسم شيفرة تنفَّذ على الشبكة بشروط مكتوبة فيها',
  expected_answers: ['عقد ذكي', 'العقد الذكي', 'smart contract', 'العقود الذكية'],
  explanation: 'الشرط مكتوب في الشيفرة وينفَّذ بها لا بورقة.' },

{ topic: CON, difficulty: 'medium', type: 'terminal', prompt_label: 'الخاصية',
  question: 'اكتب اسم خاصية أن ينجح التنفيذ كاملاً أو لا يُغيّر شيئاً',
  expected_answers: ['الذرّية', 'الذرية', 'atomicity', 'التنفيذ الذرّي'],
  explanation: 'لا حالة نصفية تبقى بعد فشل التنفيذ.' },

{ topic: CON, difficulty: 'hard', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب اسم شرط وصول كل العقد للنتيجة نفسها',
  expected_answers: ['الحتمية', 'الحتميه', 'determinism', 'التنفيذ الحتمي'],
  explanation: 'اختلاف النتائج يهدم الإجماع الذي تقوم عليه الشبكة.' },

{ topic: CON, difficulty: 'medium', type: 'terminal', prompt_label: 'الوسيط',
  question: 'اكتب اسم ما يُدخِل للعقد خبراً من خارج الشبكة',
  expected_answers: ['مغذّي البيانات', 'مغذي البيانات', 'oracle', 'الأوراكل'],
  explanation: 'العقد لا يخرج من الشبكة، فيحتاج من يُدخِل له الخبر.' },

{ topic: RSK, difficulty: 'hard', type: 'terminal', prompt_label: 'الثغرة',
  question: 'اكتب اسم عودة الاستدعاء قبل تحديث الرصيد',
  expected_answers: ['إعادة الدخول', 'اعادة الدخول', 'reentrancy', 'ثغرة إعادة الدخول'],
  explanation: 'التحويل قبل التحديث يفتح باب السحب المتكرر.' },

{ topic: RSK, difficulty: 'medium', type: 'terminal', prompt_label: 'الخطأ',
  question: 'اكتب اسم خطأ ينفّذ العقد فيه غير ما قُصِد بلا عطل',
  expected_answers: ['خطأ منطقي', 'الخطأ المنطقي', 'logic bug', 'عيب منطقي'],
  explanation: 'شيفرة سليمة تنفّذ قصداً خاطئاً بأمانة تامة.' },

{ topic: RSK, difficulty: 'medium', type: 'terminal', prompt_label: 'الإجراء',
  question: 'اكتب اسم فحص الشيفرة المستقل قبل نشر العقد',
  expected_answers: ['المراجعة الأمنية', 'التدقيق', 'audit', 'مراجعة الشيفرة'],
  explanation: 'ما يُكتشَف قبل النشر يُصلَح، وبعده يُدفَع ثمنه.' },

{ topic: APP, difficulty: 'easy', type: 'terminal', prompt_label: 'التطبيق',
  question: 'اكتب اسم حجز المبلغ في العقد حتى يتحقق الشرط',
  expected_answers: ['الضمان', 'عقد ضمان', 'escrow', 'الحجز المشروط'],
  explanation: 'الحجز المشروط يغني عن ثقة أحدهما بالآخر.' },

{ topic: APP, difficulty: 'medium', type: 'terminal', prompt_label: 'العملية',
  question: 'اكتب اسم تمثيل ملكية أصل بوحدات على الشبكة',
  expected_answers: ['الترميز', 'ترميز الأصول', 'tokenization', 'التوريق الرقمي'],
  explanation: 'الوحدة تمثيل، والأصل يبقى حيث هو.' },

{ topic: APP, difficulty: 'hard', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يربط الرمز بحق حقيقي في الأصل',
  expected_answers: ['سند قانوني', 'الإطار القانوني', 'إطار قانوني', 'السند النظامي'],
  explanation: 'الرمز بلا سند قانوني وعدٌ لا يُنفَّذ خارج الشبكة.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: CON, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن تنفيذ العقد؟',
  options: ['تشغّله معاملة ترسَل إليه', 'ينجح كاملاً أو لا يُغيّر شيئاً', 'يبدأ من نفسه في موعد', 'ينفَّذ على عقدة واحدة فقط'],
  correct_answers: [0, 1],
  explanation: 'الأخيران يخالفان طبيعة التنفيذ على الشبكة.' },

{ topic: CON, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يلزم لبقاء الإجماع سليماً؟',
  options: ['حتمية نتيجة التنفيذ', 'خلوّه من مصادر عشوائية محلية', 'قلة عدد أسطر شيفرته', 'انخفاض رسوم استدعائه'],
  correct_answers: [0, 1],
  explanation: 'الحجم والرسوم لا علاقة لهما باتفاق المتحققين.' },

{ topic: CON, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يستهلك رسوم تنفيذ؟',
  options: ['كتابة بيانات في حالة العقد', 'تنفيذ خطوات حسابية فيه', 'قراءة شيفرته من خارج الشبكة', 'عرض عنوانه في مستكشف'],
  correct_answers: [0, 1],
  explanation: 'ما لا يشغّل الشبكة لا يُدفَع مقابله.' },

{ topic: RSK, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُفحَص قبل الإيداع في عقد؟',
  options: ['صلاحيات مالكه المعلنة', 'مصادر البيانات التي يعتمدها', 'عدد متابعي فريقه', 'حجم إعلاناته المدفوعة'],
  correct_answers: [0, 1],
  explanation: 'الأخيران دعاية لا تقول شيئاً عن سلامته.' },

{ topic: RSK, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يقلّل خطر مغذّي البيانات؟',
  options: ['تعدد المصادر المستقلة', 'أخذ وسيط القراءات لا واحدة', 'زيادة رسوم كل قراءة', 'إخفاء اسم المصدر عن الناس'],
  correct_answers: [0, 1],
  explanation: 'الأخيران لا يمنعان خبراً خاطئاً من الوصول.' },

{ topic: RSK, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يصف حدود المراجعة الأمنية؟',
  options: ['تكشف ما وجدته لا كل شيء', 'تخصّ نسخة الشيفرة المراجَعة', 'تضمن سلامة العقد قطعاً', 'تضمن ربح من يستخدمه'],
  correct_answers: [0, 1],
  explanation: 'غياب الدليل على الثغرة ليس دليلاً على غيابها.' },

{ topic: RSK, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي علامة مركزية خفية في عقد؟',
  options: ['صلاحية سحب كل الأرصدة', 'قدرة على تعديل الشروط', 'نشر الشيفرة للعموم', 'ثبات الشيفرة بعد النشر'],
  correct_answers: [0, 1],
  explanation: 'الأخيران يقلّلان المركزية لا يصنعانها.' },

{ topic: APP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يصلح للعقد الذكي؟',
  options: ['تنفيذ شرط معلن مسبقاً', 'حجز مبلغ حتى موعد محدد', 'تقدير نية أحد الطرفين', 'تفسير عبارة عقد مبهمة'],
  correct_answers: [0, 1],
  explanation: 'ما يحتاج تقديراً لا يُسلَّم لشيفرة.' },

{ topic: APP, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يلزم لترميز أصل واقعي؟',
  options: ['حافظ يحتفظ بالأصل فعلاً', 'سند قانوني يربط الرمز بالحق', 'إدراج في منصات كثيرة', 'عدد كبير من الحاملين'],
  correct_answers: [0, 1],
  explanation: 'الأخيران شهرة لا تصنع حقاً قابلاً للتنفيذ.' },

{ topic: APP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يحدّ استعمال العقود في المدفوعات؟',
  options: ['كلفة التنفيذ على الشبكة', 'وقت انتظار التأكيد', 'صعوبة كتابة شرط بسيط', 'عدم قابلية الأصل للتجزئة'],
  correct_answers: [0, 1],
  explanation: 'الأخيران ليسا قيداً حقيقياً في المدفوعات.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: CON, difficulty: 'medium', type: 'ordering',
  question: 'رتّب دورة حياة عقد ذكي',
  options: ['كتابة الشيفرة واختبارها', 'مراجعتها مراجعة مستقلة', 'نشرها على الشبكة', 'استدعاؤها بمعاملات'],
  explanation: 'المراجعة قبل النشر لأن ما نُشِر يصعب تعديله.' },

{ topic: CON, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تنفيذ استدعاء عقد',
  options: ['إرسال معاملة لعنوانه', 'التحقق من الشروط', 'تنفيذ الخطوات وخصم الرسوم', 'حفظ الحالة الجديدة'],
  explanation: 'الحالة لا تُحفَظ إلا بعد اكتمال التنفيذ.' },

{ topic: CON, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات إدخال خبر خارجي للعقد',
  options: ['جمع القراءة من مصادر عدة', 'حساب القيمة المتفق عليها', 'إرسالها للعقد كمعاملة', 'تنفيذ الشرط المبني عليها'],
  explanation: 'الاتفاق على القيمة قبل إرسالها يمنع خبراً منفرداً.' },

{ topic: RSK, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات معالجة ثغرة مكتشَفة بعد النشر',
  options: ['تفعيل مفتاح الإيقاف', 'حصر الأرصدة المتأثرة', 'نشر نسخة مصحَّحة', 'نقل الأرصدة إليها'],
  explanation: 'الإيقاف أولاً لأنه يحدّ الخسارة الجارية.' },

{ topic: RSK, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات فحص عقد قبل الإيداع فيه',
  options: ['قراءة صلاحيات مالكه', 'مراجعة تقرير التدقيق', 'فحص مصادر بياناته', 'تحديد مبلغ تجريبي صغير'],
  explanation: 'التجربة الصغيرة بعد الفحص لا بدلاً منه.' },

{ topic: RSK, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات كتابة دالة سحب آمنة',
  options: ['التحقق من رصيد المستدعي', 'تحديث رصيده في العقد', 'إرسال المبلغ إليه', 'تسجيل العملية في السجل'],
  explanation: 'التحديث قبل الإرسال يغلق باب إعادة الدخول.' },

{ topic: APP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات عقد ضمان بين طرفين',
  options: ['إيداع المشتري في العقد', 'تسليم البائع للسلعة', 'تأكيد التسليم', 'تحويل المبلغ للبائع'],
  explanation: 'المبلغ يُحوَّل بعد التأكيد لا قبله.' },

{ topic: APP, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات ترميز أصل واقعي',
  options: ['إثبات ملكية الأصل وتقييمه', 'إيداعه لدى حافظ', 'توثيق السند القانوني', 'إصدار الوحدات بعقد'],
  explanation: 'الإصدار آخر خطوة بعد اكتمال السند.' },

{ topic: APP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تسوية مقترنة بالدفع',
  options: ['حجز الأصل والمبلغ في العقد', 'التحقق من اكتمال الطرفين', 'تنفيذ التبادل في خطوة واحدة', 'تسجيل النتيجة على الشبكة'],
  explanation: 'التبادل في خطوة واحدة هو ما يلغي خطر الطرف المقابل.' },

{ topic: APP, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تقييم صلاحية العقد لعملية مالية',
  options: ['تحديد ما إذا كان الشرط معلناً', 'تقدير كلفة التنفيذ وزمنه', 'فحص الاعتراف النظامي به', 'قرار استعماله أو تركه'],
  explanation: 'شرط غير معلن يُسقِط الفكرة قبل حساب كلفتها.' }

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
