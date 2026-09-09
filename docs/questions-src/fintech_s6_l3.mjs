// التقنية المالية · S6 الأمن والامتثال · L3 اعرف عميلك
// ثلاثة مواضيع: التحقق من الهوية · المستفيد الحقيقي · العناية المستمرة
//
// حدود مقصودة: الاحتيال ومؤشراته موضع L1، ومراحل غسل الأموال والفرز على
// قوائم الجزاءات والأشخاص المعرَّضين سياسياً والنهج القائم على المخاطر
// والإبلاغ عن الاشتباه موضع L2 — فتُستعمل هنا مبنية لا تُعاد. الأمن
// السيبراني المالي موضع L4، والامتثال والتدقيق موضع L5.
//
// الصعوبة: ١٣ سهل · ٥٤ متوسط · ٢٣ صعب — مطابق لصف L3.

const T = 'FinTech';
const S = 'Financial Security & Compliance';
const L = 3;

const IDV = 'Identity Verification';
const UBO = 'Beneficial Ownership';
const ODD = 'Ongoing Due Diligence';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: IDV, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الغرض من إجراءات اعرف عميلك؟',
  options: ['التحقق ممن يتعامل مع المؤسسة', 'تسريع فتح الحسابات الجديدة', 'زيادة عدد منتجات العميل', 'تقليل رسوم الخدمات عليه'],
  correct_answer: 0,
  explanation: 'من لا تعرفه لا تعرف مصدر أمواله ولا وجهتها.' },

{ topic: IDV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الفرق بين تحديد الهوية والتحقق منها؟',
  options: ['الأول جمع البيانات والثاني إثباتها', 'الأول إثبات البيانات والثاني جمعها', 'كلاهما جمع للبيانات المعلنة', 'كلاهما إثبات بمصدر مستقل'],
  correct_answer: 0,
  explanation: 'ما يقوله العميل يُجمَع، وما يثبته مصدر مستقل يُتحقَّق.' },

{ topic: IDV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز المصدر المستقل في التحقق؟',
  options: ['لا يملك العميل التأثير فيه', 'يقدّمه العميل مع طلبه بنفسه', 'يصدر عن العميل بتوقيعه', 'يُكتَب بناء على إفادته'],
  correct_answer: 0,
  explanation: 'وثيقة يصنعها العميل لا تثبت ما يدّعيه.' },

{ topic: IDV, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الغرض من اختبار الحياة في التحقق الرقمي؟',
  options: ['إثبات حضور شخص أمام الكاميرا', 'إثبات أن الوثيقة غير منتهية', 'إثبات أن العنوان صحيح فعلاً', 'إثبات أن الجهاز غير مخترَق'],
  correct_answer: 0,
  explanation: 'صورة مطبوعة أو مقطع مسجَّل يجتاز التحقق بلا اختبار حياة.' },

{ topic: IDV, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الذي يُطابَق في التحقق البيومتري؟',
  options: ['وجه صاحب الطلب بصورة الوثيقة', 'رقم الوثيقة برقم الحساب', 'عنوان العميل بعنوان فرعه', 'توقيع العميل بتوقيع كفيله'],
  correct_answer: 0,
  explanation: 'المطابقة تربط الحاضر بالوثيقة التي يقدّمها.' },

{ topic: IDV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يكشف وثيقة هوية مزوَّرة؟',
  options: ['فحص عناصر الأمان وتحققها آلياً', 'وضوح صورة الوثيقة المرسلة', 'حداثة تاريخ إصدار الوثيقة', 'تطابق الاسم مع اسم الطلب'],
  correct_answer: 0,
  explanation: 'الاسم والصورة يسهل تزويرهما، وعناصر الأمان أصعب.' },

{ topic: IDV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بانتحال الهوية في فتح الحساب؟',
  options: ['استعمال بيانات شخص حقيقي آخر', 'استعمال بيانات مؤسسة مرخّصة', 'استعمال اسم مستعار معلن', 'استعمال حساب قديم للعميل'],
  correct_answer: 0,
  explanation: 'الضحية لا تعلم أن حساباً فُتِح باسمها.' },

{ topic: IDV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الهوية المركَّبة عن المنتحَلة؟',
  options: ['تخلط بيانات حقيقية ببيانات ملفّقة', 'تنسخ بيانات شخص واحد كاملة', 'تستعمل وثيقة منتهية الصلاحية', 'تستعمل بيانات شركة لا شخص'],
  correct_answer: 0,
  explanation: 'لا ضحية تشتكي، فتمرّ الهوية المركَّبة طويلاً.' },

{ topic: IDV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم عند تعذّر التحقق من هوية طالب الحساب؟',
  options: ['ألّا يُفتَح حتى يكتمل التحقق', 'فتحه بحدود منخفضة مؤقتاً', 'فتحه وتأجيل التحقق شهراً', 'فتحه بضمان موظف الفرع'],
  correct_answer: 0,
  explanation: 'التحقق شرط لبدء العلاقة لا خطوة تُؤجَّل.' },

{ topic: IDV, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من التحقق من العميل غير الحاضر؟',
  options: ['بلوغ ثقة تعادل الحضور الشخصي', 'تقليل عدد الوثائق المطلوبة', 'إعفاؤه من إجراءات التحقق', 'تسريع الموافقة على طلبه'],
  correct_answer: 0,
  explanation: 'غياب الحضور يُعوَّض بضوابط أشد لا بضوابط أقل.' },

{ topic: UBO, difficulty: 'easy', type: 'multiple-choice',
  question: 'من المستفيد الحقيقي من حساب شركة؟',
  options: ['من يملكها أو يسيطر عليها فعلاً', 'من وقّع طلب فتح الحساب', 'من يدير عملياتها اليومية', 'من يظهر اسمه في السجل'],
  correct_answer: 0,
  explanation: 'المستفيد شخص طبيعي لا كيان مهما تعددت الطبقات.' },

{ topic: UBO, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا لا يصحّ التوقف عند كيان في سلسلة الملكية؟',
  options: ['لأن وراءه شخصاً يبقى مجهولاً', 'لأنه لا يفتح حسابات أصلاً', 'لأنه لا يملك أصولاً باسمه', 'لأنه لا يخضع لأي تنظيم'],
  correct_answer: 0,
  explanation: 'التوقف عند كيان يترك السلسلة مفتوحة.' },

{ topic: UBO, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالملكية غير المباشرة؟',
  options: ['ملكية عبر كيان يملك الكيان', 'ملكية باسم الشخص مباشرة', 'ملكية تنتهي عند سنة', 'ملكية بلا حق تصويت'],
  correct_answer: 0,
  explanation: 'حساب النسبة يمرّ عبر الطبقات لا عند أولها.' },

{ topic: UBO, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجعل شخصاً مستفيداً رغم قلّة حصته؟',
  options: ['سيطرة فعلية على القرار', 'حضوره اجتماعات الشركة', 'قِدَم شراكته فيها', 'كونه من مؤسسيها'],
  correct_answer: 0,
  explanation: 'السيطرة قد تأتي باتفاق أو حق نقض لا بالحصة.' },

{ topic: UBO, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز المدير الصوري في بنية ملكية؟',
  options: ['اسمه في السجل والقرار عند غيره', 'اسمه في السجل والقرار بيده', 'لا اسم له ولا قرار عنده', 'قراره نافذ بلا تسجيل'],
  correct_answer: 0,
  explanation: 'الاسم في السجل لا يعني السيطرة على الكيان.' },

{ topic: UBO, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي تكشفه بنية ملكية معقّدة بلا مبرر تجاري؟',
  options: ['احتمال إخفاء من يقف وراءها', 'كفاءة عالية في إدارة الضرائب', 'اتساع نشاط الشركة الفعلي', 'قِدَم الشركة وتوسّعها'],
  correct_answer: 0,
  explanation: 'التعقيد بلا غرض تجاري مؤشر يستوجب البحث.' },

{ topic: UBO, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُطلَب لإثبات هوية المستفيد الحقيقي؟',
  options: ['وثائق ملكية ووثيقة هوية له', 'إقرار خطي من مدير الشركة', 'شهادة من محاسب الشركة', 'خطاب من أحد الشركاء'],
  correct_answer: 0,
  explanation: 'إقرار بلا وثيقة ادّعاء لا إثبات.' },

{ topic: UBO, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم عند تغيّر ملكية الشركة العميلة؟',
  options: ['تحديث المستفيد الحقيقي وتوثيقه', 'إغلاق الحساب وفتح غيره', 'الاكتفاء بإشعار من الشركة', 'انتظار التحديث الدوري القادم'],
  correct_answer: 0,
  explanation: 'ملف يعكس ملّاكاً سابقين ملف مضلِّل.' },

{ topic: UBO, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الشركة الواجهة عن الشركة العاملة؟',
  options: ['الأولى بلا نشاط يقابل تدفقاتها', 'الأولى ذات نشاط واسع ومعلن', 'كلاهما بلا نشاط فعلي قائم', 'كلاهما ذو نشاط واسع ومعلن'],
  correct_answer: 0,
  explanation: 'تدفقات كبيرة بلا نشاط يفسّرها مؤشر يستوجب البحث.' },

{ topic: UBO, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من سجل المستفيدين الحقيقيين؟',
  options: ['مرجع يُحدَّث ويُدقَّق', 'قائمة تُعرَض على العملاء', 'أرشيف يُحفَظ ولا يُراجَع', 'تقرير يُرسَل للمساهمين'],
  correct_answer: 0,
  explanation: 'سجل لا يُحدَّث يصير مصدر خطأ لا مرجعاً.' },

{ topic: ODD, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بالعناية المستمرة تجاه العميل؟',
  options: ['متابعة تعاملاته ومطابقتها بملفه', 'إعادة فتح حسابه كل سنة', 'إلغاء تحققه الأول بعد مدة', 'مراجعة رسوم خدماته دورياً'],
  correct_answer: 0,
  explanation: 'اعرف عميلك ليست خطوة عند الفتح بل علاقة مستمرة.' },

{ topic: ODD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يستوجب تحديث ملف العميل قبل موعده؟',
  options: ['تغيّر في نشاطه لا يفسّره ملفه', 'مرور نصف المدة المقررة', 'ارتفاع رسوم خدماته', 'تغيّر رقم هاتفه المسجَّل'],
  correct_answer: 0,
  explanation: 'الحدث يسبق الجدول متى خالف السلوك ما هو مسجَّل.' },

{ topic: ODD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُقارَن به سلوك العميل في المتابعة؟',
  options: ['النشاط المعلن في ملفه', 'متوسط عملاء الفرع كلهم', 'أعلى مبلغ حوّله سابقاً', 'عدد منتجاته لدى المؤسسة'],
  correct_answer: 0,
  explanation: 'ما يخالف ملفه هو المؤشر لا ما يخالف غيره.' },

{ topic: ODD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز العناية المشددة عن الاعتيادية؟',
  options: ['وثائق أكثر ومتابعة أقرب', 'وثائق أقل ومتابعة أبعد', 'وثائق مماثلة بمدة أطول', 'وثائق مماثلة برسوم أعلى'],
  correct_answer: 0,
  explanation: 'شدّة العناية تتبع درجة المخاطر المحددة سلفاً.' },

{ topic: ODD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من السؤال عن مصدر الأموال؟',
  options: ['معرفة من أين جاء المال المودَع', 'معرفة أين سيُنفَق المال', 'معرفة عمر الحساب المستقبِل', 'معرفة عدد المستفيدين منه'],
  correct_answer: 0,
  explanation: 'المصدر يسأل عن الماضي، والوجهة عن المستقبل.' },

{ topic: ODD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الفرق بين مصدر الأموال ومصدر الثروة؟',
  options: ['الأول أصل المبلغ والثاني أصل الملاءة', 'الأول أصل الملاءة والثاني أصل المبلغ', 'كلاهما يسأل عن المبلغ المودَع', 'كلاهما يسأل عن ثروة العميل كلها'],
  correct_answer: 0,
  explanation: 'قد يُعرَف أصل الحوالة ويبقى أصل الثروة مجهولاً.' },

{ topic: ODD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم عند رفض العميل تحديث بياناته؟',
  options: ['تقييد الخدمة وفق سياسة معلنة', 'إغلاق الحساب فوراً بلا إشعار', 'تجاهل الرفض وإبقاء الملف', 'تحديث البيانات من مصدر آخر'],
  correct_answer: 0,
  explanation: 'التقييد المتدرّج المعلن يوازن الالتزام وحق العميل.' },

{ topic: ODD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز ملف العميل الصالح للاعتماد؟',
  options: ['بيانات محدَّثة موثَّقة بمصادرها', 'بيانات كثيرة مهما قدُمت', 'بيانات أقرّها العميل خطياً', 'بيانات جُمِعت مرة عند الفتح'],
  correct_answer: 0,
  explanation: 'التوثيق يجعل الملف قابلاً للمراجعة لا مجرد إدخال.' },

{ topic: ODD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر مرور عميل عالي المخاطر بلا متابعة؟',
  options: ['تصنيف وُضِع مرة ولم يُراجَع', 'كثرة الوثائق المطلوبة منه', 'قِدَم علاقته مع المؤسسة', 'ارتفاع أرصدته لدى الفرع'],
  correct_answer: 0,
  explanation: 'تصنيف لا يُراجَع يشيخ مع تغيّر سلوك العميل.' },

{ topic: ODD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجعل إجراءات اعرف عميلك عبئاً بلا فائدة؟',
  options: ['جمع وثائق لا يُبنى عليها قرار', 'ربط شدّة الإجراء بدرجة المخاطر', 'توثيق المصدر لكل بيانات الملف', 'تحديث الملف عند تغيّر السلوك'],
  correct_answer: 0,
  explanation: 'ما يُجمَع ولا يُقرأ كلفة على الطرفين بلا حماية.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: IDV, difficulty: 'medium', type: 'code',
  question: 'ما الذي ينقص هذا التحقق؟',
  code_snippet: 'البيانات المُدخَلة: اسم ورقم هوية\nالمصدر المستقل: لم يُراجَع\nالوثيقة: لم تُطلَب',
  options: ['تحقق بمصدر مستقل من البيانات', 'بيانات إضافية يعلنها العميل', 'موافقة خطية على الشروط', 'رسوم فتح الحساب المقررة'],
  correct_answer: 0,
  explanation: 'ما يقوله العميل يُجمَع، وما يثبته مصدر مستقل يُتحقَّق.' },

{ topic: IDV, difficulty: 'medium', type: 'code',
  question: 'ما الذي منعه اختبار الحياة هنا؟',
  code_snippet: 'المُقدَّم للكاميرا: صورة مطبوعة للوجه\nالمطابقة مع الوثيقة: ناجحة\nاختبار الحياة: أخفق',
  options: ['قبول صورة بدل شخص حاضر', 'قبول وثيقة منتهية الصلاحية', 'قبول عنوان غير صحيح', 'قبول جهاز غير موثوق'],
  correct_answer: 0,
  explanation: 'صورة مطبوعة أو مقطع مسجَّل يجتاز المطابقة وحدها.' },

{ topic: IDV, difficulty: 'medium', type: 'code',
  question: 'ما نوع هذي الحالة؟',
  code_snippet: 'رقم الهوية: يعود لشخص حقيقي\nالاسم وتاريخ الميلاد: ملفّقان\nصاحب الرقم: لا يعلم بالحساب',
  options: ['هوية تخلط الحقيقي بالملفّق', 'انتحال كامل لهوية شخص آخر', 'حساب مشترك بين شخصين', 'خطأ إدخال في بيانات الطلب'],
  correct_answer: 0,
  explanation: 'لا ضحية تشتكي، فتمرّ الهوية المركَّبة طويلاً.' },

{ topic: UBO, difficulty: 'hard', type: 'code',
  question: 'من المستفيد الحقيقي هنا؟',
  code_snippet: 'شركة أ يملكها: شركة ب بنسبة 100%\nشركة ب يملكها: سالم بنسبة 100%',
  options: ['سالم لأنه شخص طبيعي', 'شركة ب لأنها المالك المباشر', 'شركة أ لأنها صاحبة الحساب', 'لا مستفيد لتعدد الطبقات'],
  correct_answer: 0,
  explanation: 'التوقف عند كيان يترك السلسلة مفتوحة.' },

{ topic: UBO, difficulty: 'hard', type: 'code',
  question: 'كم نسبة ملكية نورة غير المباشرة؟',
  code_snippet: 'نورة تملك 50% من شركة ب\nشركة ب تملك 40% من شركة أ',
  options: ['20% في شركة أ', '40% في شركة أ', '50% في شركة أ', '90% في شركة أ'],
  correct_answer: 0,
  explanation: '٥٠٪ × ٤٠٪ = ٢٠٪، فالنسبة تُضرَب عبر الطبقات.' },

{ topic: UBO, difficulty: 'medium', type: 'code',
  question: 'ما الذي يستوجب البحث في هذي الحالة؟',
  code_snippet: 'المالك المسجَّل: حصة 5%\nحق النقض على القرارات: له وحده\nبقية الشركاء: بلا حق نقض',
  options: ['سيطرة فعلية رغم صغر الحصة', 'حصة صغيرة لا تستوجب شيئاً', 'خطأ في تسجيل الحصص', 'تعدد شركاء بلا قرار'],
  correct_answer: 0,
  explanation: 'السيطرة قد تأتي باتفاق أو حق نقض لا بالحصة.' },

{ topic: ODD, difficulty: 'medium', type: 'code',
  question: 'ما الذي تكشفه هذي المقارنة؟',
  code_snippet: 'النشاط المعلن بالملف: محل تجزئة صغير\nالتحويلات الشهرية: تعادل مئة ضعف المعلن',
  options: ['سلوك يخالف ما في ملف العميل', 'نمو طبيعي في نشاط المحل', 'خطأ في تسجيل العملات', 'ارتفاع موسمي معتاد'],
  correct_answer: 0,
  explanation: 'ما يخالف ملفه هو المؤشر لا ما يخالف غيره.' },

{ topic: ODD, difficulty: 'hard', type: 'code',
  question: 'ما الخلل في هذا الملف؟',
  code_snippet: 'تصنيف المخاطر: عالٍ\nتاريخ التصنيف: قبل أربع سنوات\nالمراجعة منذئذ: لا يوجد',
  options: ['تصنيف عالٍ بلا مراجعة', 'تصنيف منخفض يحتاج رفعاً', 'ملف مكتمل لا يحتاج شيئاً', 'خطأ في تاريخ التصنيف'],
  correct_answer: 0,
  explanation: 'تصنيف لا يُراجَع يشيخ مع تغيّر سلوك العميل.' },

{ topic: ODD, difficulty: 'medium', type: 'code',
  question: 'أي سؤال بقي بلا جواب هنا؟',
  code_snippet: 'مصدر المبلغ: بيع عقار موثّق\nكيف تكوّنت ثروة العميل أصلاً: غير معلوم',
  options: ['مصدر الثروة لا مصدر المبلغ', 'مصدر المبلغ لا مصدر الثروة', 'وجهة المبلغ بعد الإيداع', 'هوية العميل ووثائقه'],
  correct_answer: 0,
  explanation: 'قد يُعرَف أصل الحوالة ويبقى أصل الثروة مجهولاً.' },

{ topic: UBO, difficulty: 'medium', type: 'code',
  question: 'ما الذي يستوجب البحث في هذي البنية؟',
  code_snippet: 'الشركة: بلا موظفين ولا مقر\nالنشاط المعلن: تجارة عامة\nالتدفقات: ملايين شهرياً',
  options: ['تدفقات بلا نشاط فعلي يفسّرها', 'نشاط واسع يفسّر التدفقات', 'شركة ناشئة في بدايتها', 'خطأ في تسجيل النشاط'],
  correct_answer: 0,
  explanation: 'تدفقات كبيرة بلا نشاط يفسّرها مؤشر يستوجب البحث.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: IDV, difficulty: 'easy', type: 'true-false',
  question: 'ما يعلنه العميل عن نفسه يكفي للتحقق من هويته.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'ما يقوله العميل يُجمَع، وما يثبته مصدر مستقل يُتحقَّق.' },

{ topic: IDV, difficulty: 'medium', type: 'true-false',
  question: 'اختبار الحياة يثبت أن أمام الكاميرا شخصاً حاضراً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'صورة مطبوعة أو مقطع مسجَّل يجتاز المطابقة وحدها.' },

{ topic: IDV, difficulty: 'medium', type: 'true-false',
  question: 'الهوية المركَّبة يكشفها بلاغ صاحب الهوية سريعاً.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'لا ضحية تشتكي، فتمرّ الهوية المركَّبة طويلاً.' },

{ topic: IDV, difficulty: 'medium', type: 'true-false',
  question: 'التعامل عن بُعد يستوجب ضوابط أشد لا أخف.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'غياب الحضور يُعوَّض بضوابط أشد لا بضوابط أقل.' },

{ topic: UBO, difficulty: 'medium', type: 'true-false',
  question: 'يصحّ أن يكون المستفيد الحقيقي شركة لا شخصاً.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'التوقف عند كيان يترك السلسلة مفتوحة.' },

{ topic: UBO, difficulty: 'hard', type: 'true-false',
  question: 'السيطرة الفعلية قد تثبت بحق نقض لا بحجم الحصة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'من يملك تعطيل القرار يملك القرار.' },

{ topic: UBO, difficulty: 'medium', type: 'true-false',
  question: 'إقرار خطي من المدير يغني عن وثائق الملكية.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'إقرار بلا وثيقة ادّعاء لا إثبات.' },

{ topic: ODD, difficulty: 'easy', type: 'true-false',
  question: 'اعرف عميلك علاقة مستمرة لا خطوة عند الفتح.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ملف لا يتابَع يصف عميلاً لم يعد موجوداً.' },

{ topic: ODD, difficulty: 'hard', type: 'true-false',
  question: 'معرفة مصدر المبلغ تغني عن معرفة مصدر الثروة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'قد يُعرَف أصل الحوالة ويبقى أصل الثروة مجهولاً.' },

{ topic: ODD, difficulty: 'medium', type: 'true-false',
  question: 'وثائق تُجمَع ولا يُبنى عليها قرار كلفة بلا حماية.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما يُجمَع ولا يُقرأ عبء على الطرفين.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: IDV, difficulty: 'easy', type: 'matching',
  question: 'صل كل خطوة تحقق بغرضها',
  pairs: [ { left: 'جمع البيانات', right: 'معرفة ما يعلنه' }, { left: 'التحقق بمصدر', right: 'إثبات ما أعلنه' }, { left: 'المطابقة البيومترية', right: 'ربط الحاضر بالوثيقة' }, { left: 'اختبار الحياة', right: 'إثبات حضور شخص' } ],
  explanation: 'كل خطوة تسدّ ثغرة لا تسدّها الأخرى.' },

{ topic: IDV, difficulty: 'medium', type: 'matching',
  question: 'صل كل نمط تلاعب بوصفه',
  pairs: [ { left: 'انتحال هوية', right: 'بيانات شخص حقيقي' }, { left: 'هوية مركَّبة', right: 'حقيقي مخلوط بملفّق' }, { left: 'وثيقة مزوَّرة', right: 'عناصر أمان مقلّدة' }, { left: 'صورة أمام الكاميرا', right: 'حضور مزيّف' } ],
  explanation: 'تسمية النمط أول خطوة في كشفه.' },

{ topic: IDV, difficulty: 'medium', type: 'matching',
  question: 'صل كل مصدر بحكمه في التحقق',
  pairs: [ { left: 'سجل حكومي', right: 'مستقل يُعتدّ به' }, { left: 'وثيقة يصدرها العميل', right: 'غير مستقل' }, { left: 'إفادة شفهية', right: 'لا تثبت شيئاً' }, { left: 'مزوّد تحقق مرخّص', right: 'مستقل يُعتدّ به' } ],
  explanation: 'وثيقة يصنعها العميل لا تثبت ما يدّعيه.' },

{ topic: UBO, difficulty: 'easy', type: 'matching',
  question: 'صل كل صفة بمن تنطبق عليه',
  pairs: [ { left: 'المستفيد الحقيقي', right: 'يملك أو يسيطر فعلاً' }, { left: 'المدير الصوري', right: 'اسم بلا قرار' }, { left: 'الوكيل', right: 'يتصرف بتفويض' }, { left: 'المالك المسجَّل', right: 'اسم في السجل' } ],
  explanation: 'الاسم في السجل لا يعني السيطرة على الكيان.' },

{ topic: UBO, difficulty: 'hard', type: 'matching',
  question: 'صل كل مؤشر في بنية الملكية بدلالته',
  pairs: [ { left: 'طبقات كثيرة بلا مبرر', right: 'احتمال إخفاء' }, { left: 'شركة بلا نشاط', right: 'واجهة محتملة' }, { left: 'حق نقض بحصة صغيرة', right: 'سيطرة فعلية' }, { left: 'تغيّر ملّاك متكرر', right: 'يستوجب تحديثاً' } ],
  explanation: 'التعقيد بلا غرض تجاري مؤشر يستوجب البحث.' },

{ topic: UBO, difficulty: 'medium', type: 'matching',
  question: 'صل كل مطلوب بما يثبته',
  pairs: [ { left: 'عقد التأسيس', right: 'بنية الملكية' }, { left: 'سجل الشركاء', right: 'الحصص ونسبها' }, { left: 'وثيقة هوية المستفيد', right: 'شخصه الطبيعي' }, { left: 'محضر الصلاحيات', right: 'من يقرر فعلاً' } ],
  explanation: 'إقرار بلا وثيقة ادّعاء لا إثبات.' },

{ topic: ODD, difficulty: 'medium', type: 'matching',
  question: 'صل كل حدث بما يستوجبه في الملف',
  pairs: [ { left: 'تغيّر نشاط العميل', right: 'تحديث قبل الموعد' }, { left: 'تغيّر ملّاك الشركة', right: 'تحديث المستفيد' }, { left: 'مرور المدة المقررة', right: 'مراجعة دورية' }, { left: 'رفض التحديث', right: 'تقييد وفق السياسة' } ],
  explanation: 'الحدث يسبق الجدول متى خالف السلوك ما هو مسجَّل.' },

{ topic: ODD, difficulty: 'hard', type: 'matching',
  question: 'صل كل سؤال بما يبحث عنه',
  pairs: [ { left: 'مصدر الأموال', right: 'أصل هذا المبلغ' }, { left: 'مصدر الثروة', right: 'أصل الملاءة كلها' }, { left: 'الغرض من الحساب', right: 'ما سيُستعمَل فيه' }, { left: 'النشاط المتوقع', right: 'حجم ما يُنتظَر' } ],
  explanation: 'أربعة أسئلة يبني عليها الملف صورة متماسكة.' },

{ topic: ODD, difficulty: 'medium', type: 'matching',
  question: 'صل كل درجة عناية بما تستوجبه',
  pairs: [ { left: 'مبسّطة', right: 'وثائق أساسية' }, { left: 'اعتيادية', right: 'وثائق ومتابعة دورية' }, { left: 'مشددة', right: 'وثائق أكثر ومتابعة أقرب' }, { left: 'متابعة الحدث', right: 'تحديث خارج الجدول' } ],
  explanation: 'شدّة العناية تتبع درجة المخاطر المحددة سلفاً.' },

{ topic: IDV, difficulty: 'medium', type: 'matching',
  question: 'صل كل حالة بالإجراء الصحيح فيها',
  pairs: [ { left: 'تعذّر التحقق', right: 'عدم فتح الحساب' }, { left: 'وثيقة منتهية', right: 'طلب سارية' }, { left: 'شك في التزوير', right: 'فحص عناصر الأمان' }, { left: 'اختلاف الوجه', right: 'إيقاف الطلب ومراجعته' } ],
  explanation: 'التحقق شرط لبدء العلاقة لا خطوة تُؤجَّل.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: IDV, difficulty: 'easy', type: 'terminal', prompt_label: 'الإجراء',
  question: 'اكتب اسم إجراءات التحقق ممن يتعامل مع المؤسسة',
  expected_answers: ['اعرف عميلك', 'اعرف عميلك KYC', 'KYC', 'التحقق من العميل'],
  explanation: 'من لا تعرفه لا تعرف مصدر أمواله ولا وجهتها.' },

{ topic: IDV, difficulty: 'medium', type: 'terminal', prompt_label: 'الاختبار',
  question: 'اكتب اسم ما يثبت أن أمام الكاميرا شخصاً حاضراً',
  expected_answers: ['اختبار الحياة', 'كشف الحياة', 'liveness', 'فحص الحياة'],
  explanation: 'صورة مطبوعة أو مقطع مسجَّل يجتاز المطابقة وحدها.' },

{ topic: IDV, difficulty: 'medium', type: 'terminal', prompt_label: 'النمط',
  question: 'اكتب اسم الهوية التي تخلط بيانات حقيقية بملفّقة',
  expected_answers: ['هوية مركَّبة', 'الهوية المركبة', 'synthetic identity', 'هوية تركيبية'],
  explanation: 'لا ضحية تشتكي، فتمرّ الهوية المركَّبة طويلاً.' },

{ topic: IDV, difficulty: 'medium', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب صفة المصدر الذي يُعتدّ به في إثبات البيانات',
  expected_answers: ['مستقل', 'مصدر مستقل', 'independent', 'مصدر موثوق مستقل'],
  explanation: 'وثيقة يصنعها العميل لا تثبت ما يدّعيه.' },

{ topic: UBO, difficulty: 'easy', type: 'terminal', prompt_label: 'الشخص',
  question: 'اكتب اسم من يملك الكيان أو يسيطر عليه فعلاً',
  expected_answers: ['المستفيد الحقيقي', 'المالك المستفيد', 'UBO', 'المستفيد النهائي'],
  explanation: 'المستفيد شخص طبيعي لا كيان مهما تعددت الطبقات.' },

{ topic: UBO, difficulty: 'hard', type: 'terminal', prompt_label: 'الصفة',
  question: 'اكتب وصف من اسمه في السجل والقرار عند غيره',
  expected_answers: ['مدير صوري', 'المدير الصوري', 'nominee', 'واجهة اسمية'],
  explanation: 'الاسم في السجل لا يعني السيطرة على الكيان.' },

{ topic: UBO, difficulty: 'medium', type: 'terminal', prompt_label: 'الكيان',
  question: 'اكتب وصف شركة بلا نشاط فعلي يقابل تدفقاتها',
  expected_answers: ['شركة واجهة', 'شركة صورية', 'shell company', 'كيان واجهة'],
  explanation: 'تدفقات كبيرة بلا نشاط يفسّرها مؤشر يستوجب البحث.' },

{ topic: ODD, difficulty: 'medium', type: 'terminal', prompt_label: 'السؤال',
  question: 'اكتب اسم السؤال عن أصل المبلغ المودَع تحديداً',
  expected_answers: ['مصدر الأموال', 'مصدر المال', 'source of funds', 'أصل الأموال'],
  explanation: 'المصدر يسأل عن الماضي، والوجهة عن المستقبل.' },

{ topic: ODD, difficulty: 'hard', type: 'terminal', prompt_label: 'السؤال',
  question: 'اكتب اسم السؤال عن أصل ملاءة العميل كلها',
  expected_answers: ['مصدر الثروة', 'أصل الثروة', 'source of wealth', 'مصدر الملاءة'],
  explanation: 'قد يُعرَف أصل الحوالة ويبقى أصل الثروة مجهولاً.' },

{ topic: ODD, difficulty: 'medium', type: 'terminal', prompt_label: 'المتابعة',
  question: 'اكتب اسم متابعة تعاملات العميل ومطابقتها بملفه',
  expected_answers: ['العناية المستمرة', 'المتابعة المستمرة', 'ongoing due diligence', 'العناية الواجبة المستمرة'],
  explanation: 'ملف لا يتابَع يصف عميلاً لم يعد موجوداً.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: IDV, difficulty: 'easy', type: 'multi-select',
  question: 'أي مما يلي مصدر مستقل للتحقق؟',
  options: ['سجل حكومي رسمي', 'مزوّد تحقق مرخّص', 'وثيقة يصدرها العميل', 'إفادة شفهية منه'],
  correct_answers: [0, 1],
  explanation: 'وثيقة يصنعها العميل لا تثبت ما يدّعيه.' },

{ topic: IDV, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يكشف محاولة تحقق مزيّفة؟',
  options: ['إخفاق اختبار الحياة', 'خلل في عناصر أمان الوثيقة', 'وضوح صورة الوثيقة', 'حداثة تاريخ إصدارها'],
  correct_answers: [0, 1],
  explanation: 'الاسم والصورة يسهل تزويرهما، وعناصر الأمان أصعب.' },

{ topic: IDV, difficulty: 'easy', type: 'multi-select',
  question: 'أي مما يلي من خطوات اعرف عميلك؟',
  options: ['جمع بيانات هويته', 'التحقق منها بمصدر', 'تحديد رسوم خدماته', 'اختيار منتجاته له'],
  correct_answers: [0, 1],
  explanation: 'الأخيران عمل تجاري لا إجراء امتثال.' },

{ topic: UBO, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يثبت المستفيد الحقيقي؟',
  options: ['وثائق الملكية وسجل الشركاء', 'وثيقة هوية الشخص الطبيعي', 'إقرار خطي من المدير', 'شهادة من محاسب الشركة'],
  correct_answers: [0, 1],
  explanation: 'إقرار بلا وثيقة ادّعاء لا إثبات.' },

{ topic: UBO, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يجعل شخصاً مستفيداً حقيقياً؟',
  options: ['ملكية تتجاوز الحد المقرر', 'سيطرة فعلية على القرار', 'إدارة العمليات اليومية', 'قِدَم شراكته في الكيان'],
  correct_answers: [0, 1],
  explanation: 'السيطرة قد تأتي باتفاق أو حق نقض لا بالحصة.' },

{ topic: UBO, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يستوجب البحث في بنية ملكية؟',
  options: ['طبقات كثيرة بلا مبرر تجاري', 'كيان بلا نشاط يقابل تدفقاته', 'وجود عقد تأسيس موثّق', 'وضوح حصص الشركاء'],
  correct_answers: [0, 1],
  explanation: 'الأخيران علامتا وضوح لا اشتباه.' },

{ topic: ODD, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يستوجب تحديث الملف قبل موعده؟',
  options: ['تغيّر نشاط العميل', 'تغيّر ملّاك الشركة', 'مرور نصف المدة', 'تغيّر رقم هاتفه'],
  correct_answers: [0, 1],
  explanation: 'الحدث يسبق الجدول متى خالف السلوك ما هو مسجَّل.' },

{ topic: ODD, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يبني صورة متماسكة عن العميل؟',
  options: ['مصدر الأموال والثروة', 'الغرض من الحساب ونشاطه المتوقع', 'عدد منتجاته لدى المؤسسة', 'رسوم خدماته الشهرية'],
  correct_answers: [0, 1],
  explanation: 'الأخيران بيانات تجارية لا تصف مخاطره.' },

{ topic: ODD, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي من العناية المشددة؟',
  options: ['وثائق إضافية عن المصدر', 'متابعة أقرب للتعاملات', 'وثائق أقل تسهيلاً للعميل', 'إعفاء من التحديث الدوري'],
  correct_answers: [0, 1],
  explanation: 'شدّة العناية تتبع درجة المخاطر المحددة سلفاً.' },

{ topic: ODD, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يجعل الإجراء نافعاً لا شكلياً؟',
  options: ['أن يُبنى عليه قرار', 'أن تُوثَّق مصادره', 'أن تكثر وثائقه', 'أن يُكرَّر كل شهر'],
  correct_answers: [0, 1],
  explanation: 'ما يُجمَع ولا يُقرأ كلفة على الطرفين بلا حماية.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: IDV, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات التحقق من عميل فرد',
  options: ['جمع بياناته ووثيقته', 'التحقق منها بمصدر مستقل', 'مطابقة وجهه بالوثيقة', 'اعتماد الملف وفتح الحساب'],
  explanation: 'التحقق شرط لبدء العلاقة لا خطوة تُؤجَّل.' },

{ topic: IDV, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات فحص وثيقة مشتبه بها',
  options: ['فحص عناصر الأمان', 'مطابقة البيانات بالمصدر', 'مقارنة الصورة بصاحب الطلب', 'إيقاف الطلب أو اعتماده'],
  explanation: 'الحكم آخر خطوة بعد الفحص والمطابقة.' },

{ topic: IDV, difficulty: 'easy', type: 'ordering',
  question: 'رتّب خطوات التحقق عن بُعد',
  options: ['تصوير الوثيقة وإرسالها', 'التحقق من صحتها آلياً', 'مطابقة الوجه واختبار الحياة', 'اعتماد النتيجة أو تصعيدها'],
  explanation: 'غياب الحضور يُعوَّض بضوابط أشد لا بضوابط أقل.' },

{ topic: UBO, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تحديد المستفيد الحقيقي',
  options: ['طلب بنية الملكية وعقد التأسيس', 'تتبّع الطبقات وحساب النسب', 'تحديد الشخص الطبيعي', 'توثيق هويته في الملف'],
  explanation: 'التوثيق آخر خطوة بعد بلوغ الشخص الطبيعي.' },

{ topic: UBO, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات فحص سيطرة لا تظهر بالحصص',
  options: ['قراءة اتفاقيات الشركاء', 'حصر حقوق النقض والتصويت', 'تحديد من يقرر فعلاً', 'إضافته مستفيداً حقيقياً'],
  explanation: 'السيطرة قد تأتي باتفاق أو حق نقض لا بالحصة.' },

{ topic: UBO, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تحديث ملف شركة تغيّر ملّاكها',
  options: ['استلام إشعار التغيّر', 'طلب سجل الشركاء المحدَّث', 'تحديد المستفيد الجديد', 'توثيق التحديث في السجل'],
  explanation: 'ملف يعكس ملّاكاً سابقين ملف مضلِّل.' },

{ topic: ODD, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات العناية المستمرة',
  options: ['تسجيل النشاط المتوقع', 'متابعة التعاملات الفعلية', 'مقارنتها بما في الملف', 'تحديث الملف أو التصعيد'],
  explanation: 'ما يخالف ملفه هو المؤشر لا ما يخالف غيره.' },

{ topic: ODD, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التعامل مع سلوك يخالف الملف',
  options: ['رصد الاختلاف وحجمه', 'طلب تفسير ووثائق مصدر', 'تقييم كفاية التفسير', 'تحديث الملف أو التصعيد'],
  explanation: 'التصعيد بعد طلب التفسير لا قبله.' },

{ topic: ODD, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات مراجعة دورية لملف عميل',
  options: ['بلوغ موعد المراجعة', 'مطابقة البيانات بمصادرها', 'مراجعة درجة المخاطر', 'اعتماد الملف أو تحديثه'],
  explanation: 'تصنيف لا يُراجَع يشيخ مع تغيّر سلوك العميل.' },

{ topic: ODD, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات التعامل مع رفض تحديث البيانات',
  options: ['تذكير العميل بما هو مطلوب', 'بيان أثر عدم التحديث', 'تقييد الخدمة وفق السياسة', 'توثيق الحالة وإجراءاتها'],
  explanation: 'التقييد المتدرّج المعلن يوازن الالتزام وحق العميل.' }

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
