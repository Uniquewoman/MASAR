// التقنية المالية · S4 البلوكشين والأصول الرقمية · L5 المحافظ والأمن
// ثلاثة مواضيع: المفاتيح والمحافظ · حفظ الأصول وحمايتها · الاحتيال والاسترداد
//
// آخر مستوى في القسم. L1 بنية الكتل، وL2 الإجماع والتعدين، وL3 أنواع
// الأصول والتداول، وL4 العقود الذكية. وهذا المستوى يسأل عن الملكية نفسها:
// من يملك المفتاح يملك الأصل، وما يترتب على ذلك من حفظ ومخاطر.
//
// الصعوبة: ٥٠ متوسط · ٤٠ صعب — مطابق لصف L5.

const T = 'FinTech';
const S = 'Blockchain & Digital Assets';
const L = 5;

const KEY = 'Keys and Wallets';
const CUS = 'Custody and Protection';
const FRD = 'Fraud and Recovery';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: KEY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي تحفظه المحفظة فعلياً؟',
  options: ['المفاتيح لا الأصول نفسها', 'الأصول لا المفاتيح', 'نسخة من سجل الشبكة', 'رصيد العميل لدى منصة'],
  correct_answer: 0,
  explanation: 'الأصل مسجَّل على الشبكة، والمحفظة تحفظ ما يحرّكه.' },

{ topic: KEY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الفرق بين المفتاح الخاص والعام؟',
  options: ['الأول يوقّع والثاني يُشتقّ منه', 'الأول يُشتقّ من الثاني', 'كلاهما يوقّع المعاملات', 'كلاهما يُنشَر على الشبكة'],
  correct_answer: 0,
  explanation: 'العام يُشتقّ من الخاص ولا يُعكَس الاشتقاق.' },

{ topic: KEY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما وظيفة التوقيع في المعاملة؟',
  options: ['يثبت أن صاحب المفتاح أذن بها', 'يشفّر محتواها عن الشبكة', 'يحدد رسومها على الشبكة', 'يسرّع إدراجها في الكتلة'],
  correct_answer: 0,
  explanation: 'التوقيع إثبات إذن لا إخفاء محتوى.' },

{ topic: KEY, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز العبارة الاحتياطية؟',
  options: ['تشتق منها كل مفاتيح المحفظة', 'تشفّر مفاتيح المحفظة فقط', 'تسجَّل على الشبكة كنسخة', 'تُصدرها المنصة لكل عميل'],
  correct_answer: 0,
  explanation: 'من يملكها يعيد بناء المحفظة كاملة في أي جهاز.' },

{ topic: KEY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الفرق بين المحفظة الساخنة والباردة؟',
  options: ['الأولى متصلة والثانية معزولة', 'الأولى معزولة والثانية متصلة', 'كلاهما معزولة عن الشبكة', 'كلاهما متصلة بالإنترنت'],
  correct_answer: 0,
  explanation: 'الاتصال يسهّل الاستعمال ويوسّع سطح الهجوم.' },

{ topic: KEY, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا تُعدّ المحفظة الباردة أعلى أماناً؟',
  options: ['مفتاحها لا يلامس جهازاً متصلاً', 'رسومها أقل عند كل تحويل منها', 'تعمل بلا عبارة احتياطية أصلاً', 'تحفظ الأصول نفسها لا المفاتيح'],
  correct_answer: 0,
  explanation: 'ما لا يمرّ بجهاز متصل لا يُسرَق ببرمجية خبيثة.' },

{ topic: KEY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالمحفظة الحافظة؟',
  options: ['محفظة يحفظ غيرك مفاتيحها', 'محفظة تحفظ مفاتيحك بنفسك', 'محفظة تعمل بلا مفاتيح', 'محفظة تصدرها الشبكة لك'],
  correct_answer: 0,
  explanation: 'من يحفظ المفتاح يتحمّل خطره ويملك التصرّف.' },

{ topic: KEY, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يترتب على الحفظ الذاتي للمفاتيح؟',
  options: ['سيطرة كاملة ومسؤولية كاملة', 'سيطرة كاملة بلا مسؤولية', 'مسؤولية كاملة بلا سيطرة', 'لا سيطرة ولا مسؤولية'],
  correct_answer: 0,
  explanation: 'لا جهة تعيد ما ضاع حين تحفظه بنفسك.' },

{ topic: KEY, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما وظيفة المحفظة متعددة التواقيع؟',
  options: ['تشترط عدة مفاتيح لكل تحويل', 'تنشئ مفتاحاً جديداً كل مرة', 'توزّع الأصول على عناوين', 'تلغي الحاجة لأي مفتاح'],
  correct_answer: 0,
  explanation: 'ضياع مفتاح واحد أو سرقته لا يكفي لتحريك الأصل.' },

{ topic: KEY, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يعالجه اشتراط توقيعين من ثلاثة؟',
  options: ['فقد مفتاح واحد دون تعطيل', 'ارتفاع رسوم كل تحويل', 'بطء التأكيد على الشبكة', 'تكرار العناوين المستعملة'],
  correct_answer: 0,
  explanation: 'الحد يوازن بين احتمال الفقد واحتمال السرقة.' },

{ topic: CUS, difficulty: 'medium', type: 'multiple-choice',
  question: 'أين تُحفَظ العبارة الاحتياطية؟',
  options: ['وسيط غير متصل بعيد عن الجهاز', 'صورة في معرض الهاتف', 'ملاحظة في بريد إلكتروني', 'ملف في خدمة تخزين سحابي'],
  correct_answer: 0,
  explanation: 'كل خيار متصل يعرّضها لمن يخترق الحساب.' },

{ topic: CUS, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما خطر نسخة واحدة من العبارة الاحتياطية؟',
  options: ['ضياعها يضيّع الأصول نهائياً', 'ارتفاع كلفة التحويل منها', 'بطء استعادة المحفظة بها', 'تكرار العناوين المشتقّة منها'],
  correct_answer: 0,
  explanation: 'لا جهة تعيد ما لا نسخة له في الحفظ الذاتي.' },

{ topic: CUS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التوزيع الجغرافي للنسخ؟',
  options: ['حادث واحد لا يتلف كل النسخ', 'سرعة أكبر في الاستعادة', 'رسوم أقل عند التحويل', 'عناوين أكثر في المحفظة'],
  correct_answer: 0,
  explanation: 'النسخ في مكان واحد نسخة واحدة أمام الحريق.' },

{ topic: CUS, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يوازن بين تعدد النسخ وخطر كشفها؟',
  options: ['نسخ قليلة في مواضع محمية', 'نسخ كثيرة في مواضع متاحة', 'نسخة واحدة في الجهاز', 'لا نسخ إطلاقاً للعبارة'],
  correct_answer: 0,
  explanation: 'كل نسخة إضافية تقلّل الفقد وتزيد فرصة الكشف.' },

{ topic: CUS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة تقسيم الأصول بين محفظتين؟',
  options: ['قليل للاستعمال وكثير للحفظ', 'كثير للاستعمال وقليل للحفظ', 'تسريع التحويل بين الاثنتين', 'تخفيض رسوم كل تحويل'],
  correct_answer: 0,
  explanation: 'ما يتعرّض للاستعمال اليومي يبقى صغيراً.' },

{ topic: CUS, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الحفظ المؤسسي المنظَّم؟',
  options: ['فصل الأصول وتأمين ورقابة', 'رسوم أقل من الحفظ الذاتي', 'سرعة أعلى في التحويل', 'إعفاء من تحقق الهوية'],
  correct_answer: 0,
  explanation: 'الفصل والتأمين هما ما يميّزه عن مجرد إيداع.' },

{ topic: CUS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من إثبات الاحتياطي لدى الحافظ؟',
  options: ['إثبات أن ما لديه يغطي التزاماته', 'إثبات ربحية عملياته السنوية', 'إثبات عدد عملائه المسجَّلين', 'إثبات سرعة تنفيذ سحوباته'],
  correct_answer: 0,
  explanation: 'الغطاء لا الحجم هو ما يحمي المودعين.' },

{ topic: CUS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم قبل تحويل كبير من محفظة باردة؟',
  options: ['تحويل تجريبي صغير أولاً', 'رفع رسوم التحويل عمداً', 'إعلان التحويل في المنصة', 'إيقاف بقية المعاملات'],
  correct_answer: 0,
  explanation: 'خطأ في عنوان تحويل كبير لا يُسترد.' },

{ topic: CUS, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي تحققه القائمة البيضاء للعناوين؟',
  options: ['منع السحب لعنوان غير معتمد', 'تسريع السحب لأي عنوان', 'تخفيض رسوم السحب دورياً', 'زيادة سقف السحب اليومي'],
  correct_answer: 0,
  explanation: 'من يخترق الحساب لا يجد عنواناً يسحب إليه.' },

{ topic: CUS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة مهلة التفعيل لعنوان جديد؟',
  options: ['وقت لكشف السحب غير المصرّح', 'رسوم أقل عند أول تحويل', 'سرعة أعلى في التأكيد', 'سقف أكبر للتحويل منه'],
  correct_answer: 0,
  explanation: 'المهلة تمنح صاحب الحساب فرصة التدخل.' },

{ topic: FRD, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا يصعب استرداد الأصول المحوَّلة خطأً؟',
  options: ['المعاملة المؤكَّدة لا تُعكَس', 'رسوم العكس مرتفعة جداً', 'الشبكة تعكسها ببطء شديد', 'المنصات تمنع طلب العكس'],
  correct_answer: 0,
  explanation: 'ما دخل السجل يبقى، والعكس يحتاج تعاون المستلم.' },

{ topic: FRD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الاحتيال بانتحال الدعم الفني؟',
  options: ['يطلب العبارة بحجة الإصلاح', 'يطلب رفع رسوم التحويل', 'يطلب تغيير شبكة الأصل', 'يطلب تقليل سقف السحب'],
  correct_answer: 0,
  explanation: 'لا جهة شرعية تطلب العبارة الاحتياطية أبداً.' },

{ topic: FRD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز عرض العائد المضمون المرتفع؟',
  options: ['وعد لا يقدّمه سوق حقيقي', 'فرصة نادرة تستحق المخاطرة', 'منتج منظَّم قليل المخاطر', 'خدمة تقدّمها الشبكة نفسها'],
  correct_answer: 0,
  explanation: 'ضمان العائد المرتفع علامة احتيال لا فرصة.' },

{ topic: FRD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما المقصود بموقع المحفظة المزيّف؟',
  options: ['يحاكي الأصلي ليأخذ عبارتك', 'يبيع محافظ بأسعار أقل', 'يعرض أسعاراً قديمة للأصول', 'يؤخر تأكيد معاملاتك عمداً'],
  correct_answer: 0,
  explanation: 'العبارة تُدخَل مرة واحدة فتضيع المحفظة كلها.' },

{ topic: FRD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يكشف تطبيق محفظة مزوَّراً؟',
  options: ['اختلاف الناشر عن الرسمي', 'ارتفاع تقييمه في المتجر', 'كثرة تحديثاته الأخيرة', 'صغر حجم ملف تنزيله'],
  correct_answer: 0,
  explanation: 'الناشر لا الشكل هو ما يُتحقَّق منه.' },

{ topic: FRD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما خطر منح عقد صلاحية إنفاق غير محدودة؟',
  options: ['يسحب رصيدك متى شاء لاحقاً', 'يرفع رسوم معاملاتك القادمة', 'يبطئ تأكيد تحويلاتك القادمة', 'يمنعك من استعمال محفظتك'],
  correct_answer: 0,
  explanation: 'الإذن يبقى قائماً حتى تسحبه أنت.' },

{ topic: FRD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يعالج أذونات الإنفاق المتراكمة؟',
  options: ['مراجعتها وسحب ما لا يلزم', 'زيادة سقف كل إذن منها', 'إخفاء عنوان المحفظة عنها', 'تحويل الأصول لعنوان آخر'],
  correct_answer: 0,
  explanation: 'إذن مُنِح لحاجة انقضت باب مفتوح بلا سبب.' },

{ topic: FRD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما أول خطوة عند الاشتباه بتسريب العبارة؟',
  options: ['نقل الأصول لمحفظة جديدة', 'تغيير كلمة مرور الجهاز', 'إبلاغ الشبكة بالتسريب', 'انتظار ظهور أي حركة'],
  correct_answer: 0,
  explanation: 'العبارة المسرَّبة لا تُبطَل، فالنقل هو العلاج.' },

{ topic: FRD, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا لا يكفي تغيير كلمة مرور المحفظة بعد التسريب؟',
  options: ['الكلمة تحمي الجهاز لا المفاتيح', 'الكلمة تحمي المفاتيح لا الجهاز', 'الكلمة تُسجَّل على الشبكة', 'الكلمة تُشتقّ من العبارة'],
  correct_answer: 0,
  explanation: 'من ملك العبارة أعاد بناء المحفظة في أي جهاز.' },

{ topic: FRD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يفيد في ملاحقة أصول مسروقة؟',
  options: ['علانية السجل وتتبّع العناوين', 'سرّية السجل عن العموم', 'إلغاء المعاملة من الشبكة', 'تغيير عنوان السارق قسراً'],
  correct_answer: 0,
  explanation: 'التتبّع ممكن، والاسترداد يحتاج جهة تنفيذ.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: KEY, difficulty: 'medium', type: 'code',
  question: 'ما الذي يملكه هذا الشخص فعلاً؟',
  code_snippet: 'العبارة الاحتياطية: لديه\nالمفتاح الخاص: مشتقّ منها\nالجهاز: ضاع',
  options: ['المحفظة كاملة قابلة للاستعادة', 'لا شيء إطلاقاً بعد ضياع الجهاز', 'العناوين فقط بلا قدرة تحريك', 'رصيداً لدى المنصة الحافظة فقط'],
  correct_answer: 0,
  explanation: 'من يملكها يعيد بناء المحفظة كاملة في أي جهاز.' },

{ topic: KEY, difficulty: 'hard', type: 'code',
  question: 'هل يستطيع هذا المستخدم التحويل؟',
  code_snippet: 'المحفظة: توقيعان من ثلاثة\nالمفاتيح المتاحة له: واحد\nالباقي: عند شريكين',
  options: ['لا، يلزمه توقيع آخر', 'نعم، مفتاحه يكفي وحده', 'نعم، بعد رفع الرسوم', 'لا، إلا بالمفاتيح الثلاثة'],
  correct_answer: 0,
  explanation: 'الحد اثنان، فمفتاح واحد لا يحرّك شيئاً.' },

{ topic: CUS, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في هذا الحفظ؟',
  code_snippet: 'العبارة: مصوَّرة في الهاتف\nالنسخ الأخرى: لا يوجد\nالهاتف: متصل دائماً',
  options: ['عبارة متصلة بنسخة وحيدة', 'عبارة موزَّعة أكثر من اللازم', 'عبارة قصيرة لا تكفي', 'لا خلل ما دام الهاتف مقفلاً'],
  correct_answer: 0,
  explanation: 'الاتصال يعرّضها للسرقة، والوحدة تعرّضها للفقد.' },

{ topic: CUS, difficulty: 'hard', type: 'code',
  question: 'ما الذي منعته هذي الإعدادات؟',
  code_snippet: 'اخترق مهاجم الحساب\nحاول السحب لعنوانه\nالقائمة البيضاء: مفعّلة',
  options: ['السحب لعنوان غير معتمد', 'الدخول إلى الحساب أصلاً', 'قراءة رصيد الحساب', 'تغيير كلمة مرور الحساب'],
  correct_answer: 0,
  explanation: 'من يخترق الحساب لا يجد عنواناً يسحب إليه.' },

{ topic: CUS, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا التوزيع؟',
  code_snippet: 'محفظة ساخنة: 3% للاستعمال\nمحفظة باردة: 97% للحفظ',
  options: ['فصل الاستعمال عن الحفظ', 'حفظ كل الأصول متصلاً', 'حفظ كل الأصول معزولاً', 'توزيع بلا غرض واضح'],
  correct_answer: 0,
  explanation: 'ما يتعرّض للاستعمال اليومي يبقى صغيراً.' },

{ topic: FRD, difficulty: 'hard', type: 'code',
  question: 'ما الذي يجب فعله فوراً هنا؟',
  code_snippet: 'رسالة: «الدعم الفني»\nالطلب: العبارة الاحتياطية للإصلاح\nالعبارة: لم تُرسَل بعد',
  options: ['عدم إرسالها وإنهاء المحادثة', 'إرسالها ثم تغيير الكلمة', 'إرسال نصفها للتحقق', 'إرسالها لعنوان رسمي فقط'],
  correct_answer: 0,
  explanation: 'لا جهة شرعية تطلب العبارة الاحتياطية أبداً.' },

{ topic: FRD, difficulty: 'medium', type: 'code',
  question: 'ما الخطر في هذا الإذن؟',
  code_snippet: 'العقد: طلب صلاحية إنفاق\nالحد: غير محدود\nالمدة: بلا انتهاء',
  options: ['سحب الرصيد في أي وقت لاحق', 'ارتفاع رسوم المعاملات القادمة', 'بطء في تأكيد التحويلات', 'منع استعمال المحفظة كلياً'],
  correct_answer: 0,
  explanation: 'الإذن يبقى قائماً حتى تسحبه أنت.' },

{ topic: FRD, difficulty: 'hard', type: 'code',
  question: 'ما الذي يكشف زيف هذا الموقع؟',
  code_snippet: 'الشكل: مطابق للموقع الرسمي\nالعنوان: يختلف بحرف واحد\nالطلب: إدخال العبارة',
  options: ['طلب العبارة وعنوان مختلف', 'بطء تحميل صفحاته الداخلية', 'قلة عدد صفحاته المنشورة', 'غياب صور المنتجات فيه'],
  correct_answer: 0,
  explanation: 'الموقع الرسمي لا يطلب العبارة في متصفحك.' },

{ topic: FRD, difficulty: 'medium', type: 'code',
  question: 'ما الذي تكشفه هذي القراءة؟',
  code_snippet: 'العرض: عائد 20% شهرياً\nالضمان: مكتوب في الإعلان\nالمخاطر: غير مذكورة',
  options: ['وعد لا يقدّمه سوق حقيقي', 'منتج منظَّم قليل المخاطر', 'فرصة نادرة تستحق التجربة', 'خدمة رسمية من الشبكة'],
  correct_answer: 0,
  explanation: 'ضمان العائد المرتفع علامة احتيال لا فرصة.' },

{ topic: FRD, difficulty: 'hard', type: 'code',
  question: 'ما الإجراء الصحيح في هذي الحالة؟',
  code_snippet: 'العبارة: أُدخِلت في موقع مشبوه\nالأصول: ما زالت في المحفظة\nالوقت: دقائق',
  options: ['نقل الأصول لمحفظة جديدة فوراً', 'تغيير كلمة مرور المحفظة', 'إبلاغ الشبكة بالتسريب', 'مراقبة الحركة قبل التصرف'],
  correct_answer: 0,
  explanation: 'العبارة المسرَّبة لا تُبطَل، فالسباق على النقل.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: KEY, difficulty: 'medium', type: 'true-false',
  question: 'المحفظة تحفظ الأصول نفسها لا المفاتيح.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الأصل مسجَّل على الشبكة، والمحفظة تحفظ ما يحرّكه.' },

{ topic: KEY, difficulty: 'medium', type: 'true-false',
  question: 'المفتاح العام يُشتقّ من الخاص ولا يُعكَس الاشتقاق.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'اتجاه واحد فقط، وهذا أساس أمان التوقيع.' },

{ topic: KEY, difficulty: 'hard', type: 'true-false',
  question: 'من يملك العبارة الاحتياطية يملك المحفظة كاملة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'تشتق منها كل المفاتيح فتُبنى في أي جهاز.' },

{ topic: KEY, difficulty: 'medium', type: 'true-false',
  question: 'المحفظة الحافظة تعني أنك تحفظ مفاتيحك بنفسك.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الحافظة طرف آخر يحفظ المفاتيح عنك.' },

{ topic: CUS, difficulty: 'medium', type: 'true-false',
  question: 'حفظ العبارة في خدمة سحابية إجراء آمن.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'كل خيار متصل يعرّضها لمن يخترق الحساب.' },

{ topic: CUS, difficulty: 'hard', type: 'true-false',
  question: 'كل نسخة إضافية تقلّل خطر الفقد وتزيد خطر الكشف.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'التوازن مطلوب: نسخ قليلة في مواضع محمية.' },

{ topic: CUS, difficulty: 'medium', type: 'true-false',
  question: 'القائمة البيضاء تمنع السحب لعنوان غير معتمد.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'من يخترق الحساب لا يجد عنواناً يسحب إليه.' },

{ topic: FRD, difficulty: 'medium', type: 'true-false',
  question: 'المعاملة المؤكَّدة يمكن عكسها بطلب من المرسل.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'ما دخل السجل يبقى، والعكس يحتاج تعاون المستلم.' },

{ topic: FRD, difficulty: 'hard', type: 'true-false',
  question: 'تغيير كلمة مرور المحفظة يكفي بعد تسريب العبارة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'من ملك العبارة أعاد بناء المحفظة في أي جهاز.' },

{ topic: FRD, difficulty: 'medium', type: 'true-false',
  question: 'علانية السجل تتيح تتبّع الأصول المسروقة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'التتبّع ممكن، والاسترداد يحتاج جهة تنفيذ.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: KEY, difficulty: 'medium', type: 'matching',
  question: 'صل كل عنصر بدوره في المحفظة',
  pairs: [ { left: 'المفتاح الخاص', right: 'يوقّع المعاملات' }, { left: 'المفتاح العام', right: 'يُشتقّ منه العنوان' }, { left: 'العبارة الاحتياطية', right: 'تعيد بناء المحفظة' }, { left: 'التوقيع', right: 'يثبت الإذن' } ],
  explanation: 'أربعة عناصر تفسّر كيف تُملَك الأصول.' },

{ topic: KEY, difficulty: 'hard', type: 'matching',
  question: 'صل كل نوع محفظة بخاصيته',
  pairs: [ { left: 'ساخنة', right: 'متصلة سهلة الاستعمال' }, { left: 'باردة', right: 'معزولة أعلى أماناً' }, { left: 'حافظة', right: 'مفاتيحك عند غيرك' }, { left: 'متعددة التواقيع', right: 'عدة مفاتيح لكل تحويل' } ],
  explanation: 'لكل نوع موضع يصلح له لا يصلح لغيره.' },

{ topic: KEY, difficulty: 'medium', type: 'matching',
  question: 'صل كل خيار حفظ بما يترتب عليه',
  pairs: [ { left: 'حفظ ذاتي', right: 'سيطرة ومسؤولية كاملتان' }, { left: 'حفظ لدى طرف', right: 'اعتماد على غيرك' }, { left: 'حفظ مشترك', right: 'قرار لا ينفرد به أحد' }, { left: 'بلا نسخ احتياطية', right: 'فقد لا يُعوَّض' } ],
  explanation: 'كل خيار يشتري أماناً بثمن يدفعه في غيره.' },

{ topic: CUS, difficulty: 'medium', type: 'matching',
  question: 'صل كل ممارسة حفظ بغرضها',
  pairs: [ { left: 'وسيط غير متصل', right: 'حماية من الاختراق' }, { left: 'نسخ موزَّعة', right: 'حماية من الحادث' }, { left: 'تحويل تجريبي', right: 'كشف خطأ العنوان' }, { left: 'قائمة بيضاء', right: 'حصر وجهات السحب' } ],
  explanation: 'كل ممارسة تسدّ باباً لا يسدّه غيرها.' },

{ topic: CUS, difficulty: 'hard', type: 'matching',
  question: 'صل كل خطر بالإجراء الذي يقابله',
  pairs: [ { left: 'سرقة الجهاز', right: 'محفظة باردة' }, { left: 'حريق المكان', right: 'نسخ موزَّعة' }, { left: 'اختراق الحساب', right: 'قائمة بيضاء' }, { left: 'خطأ العنوان', right: 'تحويل تجريبي' } ],
  explanation: 'إجراء واحد لا يغطي كل الأخطار.' },

{ topic: CUS, difficulty: 'medium', type: 'matching',
  question: 'صل كل صفة حافظ منظَّم بمعناها',
  pairs: [ { left: 'فصل الأصول', right: 'لا تخلط بأصوله' }, { left: 'التأمين', right: 'تغطية عند الخسارة' }, { left: 'إثبات الاحتياطي', right: 'غطاء يقابل الالتزام' }, { left: 'الرقابة', right: 'جهة تراجع عمله' } ],
  explanation: 'أربع صفات تميّز الحافظ عن مجرد مستودع.' },

{ topic: FRD, difficulty: 'medium', type: 'matching',
  question: 'صل كل نمط احتيال بعلامته',
  pairs: [ { left: 'انتحال الدعم', right: 'طلب العبارة الاحتياطية' }, { left: 'عائد مضمون', right: 'ربح مرتفع بلا مخاطر' }, { left: 'موقع مزيّف', right: 'عنوان يختلف بحرف' }, { left: 'تطبيق مزوَّر', right: 'ناشر غير رسمي' } ],
  explanation: 'العلامة تُعرَف قبل الوقوع لا بعده.' },

{ topic: FRD, difficulty: 'hard', type: 'matching',
  question: 'صل كل حالة بالإجراء الأول فيها',
  pairs: [ { left: 'تسريب العبارة', right: 'نقل الأصول فوراً' }, { left: 'إذن إنفاق مفتوح', right: 'سحب الإذن' }, { left: 'تحويل لعنوان خاطئ', right: 'محاولة بلوغ المستلم' }, { left: 'تطبيق مشبوه', right: 'إزالته وفحص المحفظة' } ],
  explanation: 'أول خطوة تحدد ما يبقى مما ضاع.' },

{ topic: FRD, difficulty: 'medium', type: 'matching',
  question: 'صل كل إذن بما يمنحه للعقد',
  pairs: [ { left: 'إذن بحد محدد', right: 'إنفاق لا يتجاوزه' }, { left: 'إذن غير محدود', right: 'إنفاق بلا سقف' }, { left: 'إذن بمدة', right: 'ينتهي بانقضائها' }, { left: 'إذن مسحوب', right: 'لا يملك شيئاً' } ],
  explanation: 'حدّ الإذن هو حدّ ما يمكن أن تخسره.' },

{ topic: KEY, difficulty: 'hard', type: 'matching',
  question: 'صل كل حد تواقيع بأثره',
  pairs: [ { left: 'واحد من واحد', right: 'بساطة وخطر مركّز' }, { left: 'اثنان من ثلاثة', right: 'يحتمل فقد مفتاح' }, { left: 'ثلاثة من ثلاثة', right: 'فقد واحد يعطّل' }, { left: 'واحد من ثلاثة', right: 'سرقة واحد تكفي' } ],
  explanation: 'الحد يوازن بين احتمال الفقد واحتمال السرقة.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: KEY, difficulty: 'medium', type: 'terminal', prompt_label: 'العنصر',
  question: 'اكتب اسم ما يوقّع به صاحب الأصل معاملاته',
  expected_answers: ['المفتاح الخاص', 'المفتاح السري', 'private key', 'مفتاح خاص'],
  explanation: 'من يملك المفتاح يملك التصرّف في الأصل.' },

{ topic: KEY, difficulty: 'hard', type: 'terminal', prompt_label: 'النسخة',
  question: 'اكتب اسم الكلمات التي تُشتقّ منها كل مفاتيح المحفظة',
  expected_answers: ['العبارة الاحتياطية', 'عبارة الاسترداد', 'seed phrase', 'الكلمات الاحتياطية'],
  explanation: 'من يملكها يعيد بناء المحفظة كاملة في أي جهاز.' },

{ topic: KEY, difficulty: 'medium', type: 'terminal', prompt_label: 'النوع',
  question: 'اكتب اسم المحفظة المعزولة عن الاتصال',
  expected_answers: ['المحفظة الباردة', 'الباردة', 'cold wallet', 'محفظة باردة'],
  explanation: 'ما لا يمرّ بجهاز متصل لا يُسرَق ببرمجية خبيثة.' },

{ topic: KEY, difficulty: 'hard', type: 'terminal', prompt_label: 'الترتيب',
  question: 'اكتب اسم المحفظة التي تشترط عدة مفاتيح لكل تحويل',
  expected_answers: ['متعددة التواقيع', 'المحفظة متعددة التواقيع', 'multisig', 'تعدد التواقيع'],
  explanation: 'ضياع مفتاح واحد أو سرقته لا يكفي لتحريك الأصل.' },

{ topic: CUS, difficulty: 'medium', type: 'terminal', prompt_label: 'الضابط',
  question: 'اكتب اسم حصر السحب في عناوين معتمدة سلفاً',
  expected_answers: ['القائمة البيضاء', 'قائمة العناوين المعتمدة', 'whitelist', 'قائمة بيضاء'],
  explanation: 'من يخترق الحساب لا يجد عنواناً يسحب إليه.' },

{ topic: CUS, difficulty: 'medium', type: 'terminal', prompt_label: 'الإجراء',
  question: 'اكتب اسم إرسال مبلغ صغير قبل التحويل الكبير',
  expected_answers: ['تحويل تجريبي', 'التحويل التجريبي', 'test transfer', 'مبلغ تجريبي'],
  explanation: 'خطأ في عنوان تحويل كبير لا يُسترد.' },

{ topic: CUS, difficulty: 'hard', type: 'terminal', prompt_label: 'الإثبات',
  question: 'اكتب اسم إثبات أن ما لدى الحافظ يغطي التزاماته',
  expected_answers: ['إثبات الاحتياطي', 'اثبات الاحتياطي', 'proof of reserves', 'إثبات الاحتياطيات'],
  explanation: 'الغطاء لا الحجم هو ما يحمي المودعين.' },

{ topic: FRD, difficulty: 'medium', type: 'terminal', prompt_label: 'القاعدة',
  question: 'اكتب ما لا يُرسَل لأي جهة مهما ادّعت',
  expected_answers: ['العبارة الاحتياطية', 'عبارة الاسترداد', 'المفتاح الخاص', 'الكلمات الاحتياطية'],
  explanation: 'لا جهة شرعية تطلب العبارة الاحتياطية أبداً.' },

{ topic: FRD, difficulty: 'hard', type: 'terminal', prompt_label: 'العلاج',
  question: 'اكتب ما يُفعَل بأذونات الإنفاق التي انقضت حاجتها',
  expected_answers: ['سحبها', 'سحب الإذن', 'إلغاؤها', 'revoke'],
  explanation: 'إذن مُنِح لحاجة انقضت باب مفتوح بلا سبب.' },

{ topic: FRD, difficulty: 'medium', type: 'terminal', prompt_label: 'الخطوة',
  question: 'اكتب أول ما يُفعَل عند الاشتباه بتسريب العبارة',
  expected_answers: ['نقل الأصول', 'نقل الأصول لمحفظة جديدة', 'تحويل الأصول', 'النقل لمحفظة جديدة'],
  explanation: 'العبارة المسرَّبة لا تُبطَل، فالنقل هو العلاج.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: KEY, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن المفاتيح؟',
  options: ['الخاص يوقّع المعاملات', 'العام يُشتقّ من الخاص', 'الخاص يُشتقّ من العام', 'كلاهما يُنشَر على الشبكة'],
  correct_answers: [0, 1],
  explanation: 'الاشتقاق باتجاه واحد، والخاص لا يُنشَر أبداً.' },

{ topic: KEY, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يميّز المحفظة الباردة؟',
  options: ['مفتاحها لا يلامس جهازاً متصلاً', 'أبطأ في الاستعمال اليومي', 'تحفظ الأصول لا المفاتيح', 'تعمل بلا عبارة احتياطية'],
  correct_answers: [0, 1],
  explanation: 'الأخيران يخالفان طبيعة أي محفظة.' },

{ topic: KEY, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي من آثار الحفظ الذاتي؟',
  options: ['سيطرة كاملة على الأصل', 'مسؤولية كاملة عن فقده', 'جهة تعيد ما ضاع', 'تأمين تلقائي على الرصيد'],
  correct_answers: [0, 1],
  explanation: 'لا جهة تعيد ما ضاع حين تحفظه بنفسك.' },

{ topic: CUS, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي موضع سليم للعبارة الاحتياطية؟',
  options: ['وسيط مادي غير متصل', 'موضع محمي بعيد عن الجهاز', 'صورة في معرض الهاتف', 'ملف في خدمة سحابية'],
  correct_answers: [0, 1],
  explanation: 'كل خيار متصل يعرّضها لمن يخترق الحساب.' },

{ topic: CUS, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يقلّل خطر التحويل الخاطئ؟',
  options: ['تحويل تجريبي صغير أولاً', 'مطابقة العنوان حرفاً بحرف', 'رفع رسوم التحويل عمداً', 'تنفيذه في وقت ازدحام أقل'],
  correct_answers: [0, 1],
  explanation: 'الرسوم والوقت لا يصحّحان عنواناً خاطئاً.' },

{ topic: CUS, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يميّز الحافظ المنظَّم؟',
  options: ['فصل أصول العملاء عن أصوله', 'خضوعه لرقابة جهة مختصة', 'ضمانه لعائد ثابت شهرياً', 'إعفاؤه من تحقق الهوية'],
  correct_answers: [0, 1],
  explanation: 'الأخيران وعدان لا يقدّمهما حافظ منظَّم.' },

{ topic: FRD, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي علامة احتيال؟',
  options: ['طلب العبارة الاحتياطية', 'ضمان عائد مرتفع بلا مخاطر', 'نشر شيفرة المشروع للعموم', 'وجود ترخيص من جهة رقابية'],
  correct_answers: [0, 1],
  explanation: 'الأخيران علامتا شفافية لا احتيال.' },

{ topic: FRD, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يقلّل خطر أذونات الإنفاق؟',
  options: ['منح إذن بحد محدد', 'مراجعتها وسحب ما لا يلزم', 'منح إذن غير محدود مرة', 'تجاهلها ما دامت قديمة'],
  correct_answers: [0, 1],
  explanation: 'إذن مُنِح لحاجة انقضت باب مفتوح بلا سبب.' },

{ topic: FRD, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يُفعَل عند تسريب العبارة؟',
  options: ['نقل الأصول لمحفظة جديدة', 'إنشاء عبارة احتياطية جديدة', 'تغيير كلمة مرور المحفظة', 'انتظار ظهور حركة مشبوهة'],
  correct_answers: [0, 1],
  explanation: 'الأخيران لا يمنعان من ملك العبارة من التصرّف.' },

{ topic: FRD, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي صحيح عن استرداد أصل محوَّل؟',
  options: ['المعاملة المؤكَّدة لا تُعكَس', 'الاسترداد يحتاج تعاون المستلم', 'الشبكة تعكسها بطلب المرسل', 'الحافظ يلغيها متى شاء'],
  correct_answers: [0, 1],
  explanation: 'ما دخل السجل يبقى مهما كان مرسله.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: KEY, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إنشاء محفظة بحفظ ذاتي',
  options: ['توليد العبارة الاحتياطية', 'تدوينها على وسيط غير متصل', 'التحقق من صحة تدوينها', 'استقبال أول مبلغ فيها'],
  explanation: 'لا يُستقبَل مبلغ قبل التحقق من صحة النسخة.' },

{ topic: KEY, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات استعادة محفظة على جهاز جديد',
  options: ['تثبيت التطبيق من ناشره الرسمي', 'إدخال العبارة الاحتياطية', 'اشتقاق المفاتيح والعناوين', 'التحقق من ظهور الأرصدة'],
  explanation: 'الناشر الرسمي أولاً وإلا سُلِّمت العبارة لمزوَّر.' },

{ topic: KEY, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات توقيع معاملة وإرسالها',
  options: ['إنشاء المعاملة وبياناتها', 'توقيعها بالمفتاح الخاص', 'بثّها على الشبكة', 'انتظار تأكيدها في كتلة'],
  explanation: 'التوقيع قبل البث لأنه ما يثبت الإذن.' },

{ topic: CUS, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تحويل كبير من محفظة باردة',
  options: ['مطابقة عنوان الوجهة', 'إرسال مبلغ تجريبي', 'التحقق من وصوله', 'إرسال بقية المبلغ'],
  explanation: 'التجربة الصغيرة قبل الكبيرة تمنع خسارة كاملة.' },

{ topic: CUS, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات بناء خطة حفظ للأصول',
  options: ['تحديد ما يُستعمَل وما يُحفَظ', 'اختيار نوع محفظة لكل منهما', 'توزيع النسخ الاحتياطية', 'اختبار الاستعادة فعلياً'],
  explanation: 'خطة لم تُختبَر استعادتها ليست خطة.' },

{ topic: CUS, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تفعيل القائمة البيضاء',
  options: ['إضافة العنوان المعتمد', 'التحقق منه برمز', 'انتظار مهلة التفعيل', 'السحب إليه بعدها'],
  explanation: 'المهلة تمنح صاحب الحساب فرصة التدخل.' },

{ topic: FRD, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التصرّف عند تسريب العبارة',
  options: ['إنشاء محفظة جديدة', 'نقل الأصول إليها فوراً', 'سحب أذونات العقود القديمة', 'إتلاف النسخة المسرَّبة'],
  explanation: 'النقل أولاً لأن السباق على ما تبقى.' },

{ topic: FRD, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات مراجعة أذونات الإنفاق',
  options: ['حصر العقود المأذون لها', 'تحديد ما انقضت حاجته', 'سحب أذونها', 'التحقق من زوالها'],
  explanation: 'التحقق بعد السحب يثبت أن الإذن زال فعلاً.' },

{ topic: FRD, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات التحقق من تطبيق محفظة',
  options: ['مطابقة اسم الناشر الرسمي', 'التحقق من رابط المصدر', 'تنزيله وتثبيته', 'اختباره بمبلغ صغير'],
  explanation: 'الناشر قبل التنزيل، والاختبار الصغير قبل الكبير.' },

{ topic: FRD, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التعامل مع تحويل لعنوان خاطئ',
  options: ['التحقق من وجهة التحويل فعلاً', 'معرفة ما إذا كان لجهة معروفة', 'التواصل معها لطلب الإعادة', 'توثيق الحالة إن تعذّرت'],
  explanation: 'ما دخل السجل يبقى، والعكس يحتاج تعاون المستلم.' }

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
