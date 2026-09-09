// التقنية المالية · S7 المتقدمة · L3 التمويل المدمج
// ثلاثة مواضيع: مفهوم التمويل المدمج · نماذجه ومنتجاته · الأدوار والمخاطر
//
// حدود مقصودة: الذكاء الاصطناعي في التمويل موضع L1، والتمويل اللامركزي
// موضع L2، وInsurTech وRegTech موضع L4، وعملات البنوك المركزية موضع L5.
// وواجهات المصرفية المفتوحة تُستعمَل هنا مبنية من S3 لا تُعاد.
//
// الصعوبة: ١٣ سهل · ٥٤ متوسط · ٢٣ صعب — مطابق لصف L3.

const T = 'FinTech';
const S = 'Advanced FinTech';
const L = 3;

const CON = 'Embedded Finance Concept';
const MOD = 'Embedded Models';
const RSK = 'Roles and Risks';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: CON, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بالتمويل المدمج؟',
  options: ['خدمة مالية داخل رحلة غير مالية', 'خدمة مالية في تطبيق مصرفي', 'خدمة مالية يقدّمها فرع بنك', 'خدمة مالية عبر موقع وسيط'],
  correct_answer: 0,
  explanation: 'العميل لا يقصد بنكاً بل يشتري فيجد التمويل حاضراً.' },

{ topic: CON, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الذي يميّز التمويل المدمج عن الإحالة للبنك؟',
  options: ['يتم داخل المنصة بلا مغادرتها', 'يتم بعد مغادرة المنصة للبنك', 'يتم في فرع بعد موعد مسبق', 'يتم برسالة يرسلها المتجر'],
  correct_answer: 0,
  explanation: 'كل خطوة يخرج فيها العميل تُسقِط جزءاً منهم.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجعل لحظة الشراء أنسب لعرض التمويل؟',
  options: ['الحاجة قائمة والقرار حاضر', 'الرسوم أقل في تلك اللحظة', 'الموافقة أسرع من غيرها', 'المنافسة أقل في المتجر'],
  correct_answer: 0,
  explanation: 'عرض التمويل بعد أسبوع يخاطب حاجة انقضت.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي مكّن التمويل المدمج تقنياً؟',
  options: ['واجهات برمجية تنقل الخدمة للمنصة', 'انخفاض أسعار الأجهزة الذكية', 'انتشار وسائل التواصل الاجتماعي', 'ارتفاع سرعات الشبكات المحمولة'],
  correct_answer: 0,
  explanation: 'الواجهة تنقل قدرة البنك إلى حيث العميل.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الفرق بين التمويل المدمج والبنك الرقمي؟',
  options: ['الأول داخل منتج غيره والثاني منتج قائم', 'الأول منتج قائم والثاني داخل غيره', 'كلاهما منتج مصرفي قائم بذاته', 'كلاهما يعمل داخل منصة تجارية'],
  correct_answer: 0,
  explanation: 'المدمج لا يطلب من العميل أن يأتي إليه.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي تكسبه المنصة من دمج خدمة مالية؟',
  options: ['إتمام مبيعات وإيراداً إضافياً', 'رخصة مصرفية تلقائية', 'إعفاء من الرقابة المالية', 'ملكية أموال العملاء لديها'],
  correct_answer: 0,
  explanation: 'التمويل يرفع الإتمام ويضيف عمولة على البيع.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يكسبه المزوّد المالي من الدمج؟',
  options: ['وصول لعملاء بكلفة اكتساب أقل', 'إعفاء من متطلبات الترخيص', 'تحرر من مسؤولية الالتزام', 'ملكية بيانات المنصة كلها'],
  correct_answer: 0,
  explanation: 'المنصة تجلب العميل، والمزوّد يقدّم القدرة المرخّصة.' },

{ topic: CON, difficulty: 'easy', type: 'multiple-choice',
  question: 'أي مما يلي مثال على تمويل مدمج؟',
  options: ['تقسيط يظهر في صفحة الدفع', 'تحويل عبر تطبيق البنك', 'إيداع نقدي في الصراف', 'فتح حساب في فرع البنك'],
  correct_answer: 0,
  explanation: 'الخدمة تظهر حيث يشتري العميل لا حيث يصرف.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز تجربة الدمج الناجحة؟',
  options: ['خطوات قليلة داخل السياق نفسه', 'خطوات كثيرة تشرح كل التفاصيل', 'انتقال لموقع المزوّد المالي', 'انتظار موافقة يوم عمل كامل'],
  correct_answer: 0,
  explanation: 'كل خطوة يخرج فيها العميل تُسقِط جزءاً منهم.' },

{ topic: CON, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يحدّ من صلاحية التمويل المدمج لمنتج ما؟',
  options: ['ضعف صلة الخدمة برحلة العميل', 'صغر حجم المنصة المستضيفة', 'حداثة تأسيس المزوّد المالي', 'تعدد المنافسين في السوق'],
  correct_answer: 0,
  explanation: 'خدمة لا تخدم ما جاء العميل لأجله تُقحَم لا تُدمَج.' },

{ topic: MOD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالمصرفية كخدمة؟',
  options: ['بنك مرخّص يتيح قدرته لمنصات', 'منصة تجارية تفتح فروعاً', 'عميل يشارك بياناته المصرفية', 'جهة رقابية تمنح رخصاً سريعة'],
  correct_answer: 0,
  explanation: 'الرخصة تبقى عند البنك وإن ظهرت الخدمة باسم المنصة.' },

{ topic: MOD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الفرق بين المصرفية كخدمة والمصرفية المفتوحة؟',
  options: ['الأولى تتيح القدرة والثانية تتيح البيانات', 'الأولى تتيح البيانات والثانية القدرة', 'كلاهما يتيح البيانات بإذن العميل', 'كلاهما يمنح المنصة رخصة مصرفية'],
  correct_answer: 0,
  explanation: 'قراءة الحساب شيء، وفتح حساب باسمك شيء آخر.' },

{ topic: MOD, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بالدفع المدمج في المنصة؟',
  options: ['إتمام الدفع بلا مغادرة الصفحة', 'تحويل العميل لبوابة خارجية', 'إرسال فاتورة للسداد لاحقاً', 'تحصيل المبلغ عند التسليم'],
  correct_answer: 0,
  explanation: 'كل خطوة يخرج فيها العميل تُسقِط جزءاً منهم.' },

{ topic: MOD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالإقراض المدمج؟',
  options: ['تمويل يُعرَض عند الحاجة في المنصة', 'قرض يُطلَب من فرع البنك', 'قرض يوافق عليه المتجر بنفسه', 'تمويل يُعرَض بعد شهر من الشراء'],
  correct_answer: 0,
  explanation: 'المنصة تعرض، والمزوّد المرخّص يقرض ويتحمّل الخطر.' },

{ topic: MOD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الشراء الآن والدفع لاحقاً؟',
  options: ['تقسيط قصير يُقرَّر لحظته', 'تقسيط طويل يُقرَّر في الفرع', 'قرض شخصي بضمان عيني', 'بطاقة ائتمان تُصدَر للعميل'],
  correct_answer: 0,
  explanation: 'القرار اللحظي والمدة القصيرة يميّزانه عن القرض.' },

{ topic: MOD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التأمين المدمج؟',
  options: ['تغطية تُعرَض مع المنتج المؤمَّن', 'وثيقة تُشترى من وكيل تأمين', 'تغطية تبدأ بعد سنة من الشراء', 'وثيقة تُجدَّد في فرع الشركة'],
  correct_answer: 0,
  explanation: 'التغطية تُعرَض حيث نشأت الحاجة إليها.' },

{ topic: MOD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالحساب المدمج للتاجر؟',
  options: ['حساب يُفتَح داخل منصة يعمل بها', 'حساب يفتحه التاجر في فرع', 'حساب مشترك بين تجّار المنصة', 'حساب توفير بعائد سنوي ثابت'],
  correct_answer: 0,
  explanation: 'المنصة تعرف تدفقات التاجر فتخدمه بها.' },

{ topic: MOD, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز تمويل التاجر عبر منصته؟',
  options: ['بيانات مبيعاته تحسّن التقدير', 'رسومه أقل من كل بديل متاح', 'موافقته لا تحتاج أي تقييم', 'مبلغه لا يرتبط بمبيعاته'] ,
  correct_answer: 0,
  explanation: 'من يرى التدفق يقدّر السداد أدق ممن يقرأ كشفاً.' },

{ topic: MOD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالسداد من التدفق؟',
  options: ['خصم نسبة من كل عملية بيع', 'قسط ثابت في موعد شهري', 'دفعة واحدة عند الاستحقاق', 'خصم من رصيد حساب آخر'],
  correct_answer: 0,
  explanation: 'السداد يتبع البيع فيخفّ في الموسم الضعيف.' },

{ topic: MOD, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يحدد أنسب نموذج دمج لمنصة؟',
  options: ['طبيعة رحلتها والحاجة فيها', 'حجم المنصة وعدد موظفيها', 'عمر المنصة منذ تأسيسها', 'عدد المزوّدين في السوق'],
  correct_answer: 0,
  explanation: 'الحاجة في الرحلة تحدد ما يُدمَج لا العكس.' },

{ topic: RSK, difficulty: 'easy', type: 'multiple-choice',
  question: 'من يتحمّل المسؤولية التنظيمية في التمويل المدمج؟',
  options: ['الجهة المرخّصة المقدّمة لها', 'المنصة التي تعرض الخدمة', 'العميل الذي وافق عليها', 'مزوّد التقنية الذي ربطهما'],
  correct_answer: 0,
  explanation: 'العرض لا ينقل الترخيص ولا مسؤوليته.' },

{ topic: RSK, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجب أن يعرفه العميل في الخدمة المدمجة؟',
  options: ['من الجهة المرخّصة التي تتعامل معه', 'عدد شركاء المنصة التقنيين', 'حجم عمولة المنصة من العملية', 'اسم مزوّد الاستضافة للمنصة'],
  correct_answer: 0,
  explanation: 'من يجهل من يتعامل معه لا يعرف إلى من يشتكي.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما خطر عرض التمويل بلا بيان كلفته؟',
  options: ['قرار يتخذه العميل بلا علم بأثره', 'بطء في إتمام عملية الشراء', 'ارتفاع كلفة التقنية على المنصة', 'انخفاض عمولة المزوّد المالي'],
  correct_answer: 0,
  explanation: 'يسر الحصول لا يعفي من بيان الكلفة كاملة.' },

{ topic: RSK, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الدمج المسؤول عن المُقحَم؟',
  options: ['يظهر حيث تنشأ الحاجة لا في كل صفحة', 'يظهر في كل صفحة يزورها العميل', 'يخفي شروطه حتى تمام الشراء', 'يفترض موافقة العميل تلقائياً'],
  correct_answer: 0,
  explanation: 'ما يُقحَم في غير موضعه يُفقِد المنصة ثقة عميلها.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما خطر تيسير الاقتراض في لحظة الشراء؟',
  options: ['التزام يفوق قدرة العميل على السداد', 'تأخر في تسليم المنتج المشترى', 'ارتفاع سعر المنتج نفسه', 'انخفاض جودة خدمة المنصة'],
  correct_answer: 0,
  explanation: 'سهولة القرار لا تعني قدرة على تحمّله.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يعالج خطر تراكم الالتزامات على العميل؟',
  options: ['تقييم قدرته على السداد قبل الموافقة', 'رفع رسوم التأخير على المتعثّر', 'تقصير مدة التقسيم المعروضة', 'زيادة عدد الأقساط المتاحة'],
  correct_answer: 0,
  explanation: 'رفع الرسوم يعاقب المتعثّر ولا يمنع التعثّر.' },

{ topic: RSK, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر تعثّر شراكة دمج رغم نجاح تقنيتها؟',
  options: ['غموض في اقتسام المسؤولية والعائد', 'بطء في استجابة الواجهة البرمجية', 'قلة عدد المنتجات المدمجة', 'حداثة المنصة المستضيفة للخدمة'],
  correct_answer: 0,
  explanation: 'ما لا يُحسَم في العقد يُتنازَع عليه عند أول خلل.' },

{ topic: RSK, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يلزم تحديده في عقد الدمج؟',
  options: ['من يخدم العميل ومن يتحمّل الخطر', 'عدد موظفي كل طرف في المشروع', 'موعد اجتماعات الفريقين الأسبوعية', 'اسم مزوّد الاستضافة المستعمل'],
  correct_answer: 0,
  explanation: 'ما لا يُحسَم في العقد يُتنازَع عليه عند أول خلل.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم عند شكوى عميل من خدمة مدمجة؟',
  options: ['مسار معلوم يبلغ الجهة المسؤولة', 'إحالته بين الطرفين حتى ييأس', 'إغلاق الشكوى لعدم الاختصاص', 'انتظار تواصله مرة أخرى'],
  correct_answer: 0,
  explanation: 'من يجهل من يتعامل معه لا يعرف إلى من يشتكي.' },

{ topic: RSK, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز مشاركة البيانات في الدمج؟',
  options: ['بيانات بقدر الخدمة وبإذن معلن', 'كل بيانات العميل لدى المنصة', 'بيانات العميل بلا إذن منه', 'بيانات كل عملاء المنصة معاً'],
  correct_answer: 0,
  explanation: 'الدمج لا يوسّع ما يجوز مشاركته من البيانات.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: CON, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا العرض؟',
  code_snippet: 'المنصة: متجر إلكتروني\nصفحة الدفع: تعرض تقسيطاً على ثلاث دفعات\nالعميل: يكمل بلا مغادرة الصفحة',
  options: ['تمويل مدمج في رحلة الشراء', 'إحالة العميل لموقع بنك', 'إعلان لمنتج مصرفي', 'تحويل بين حسابين للعميل'],
  correct_answer: 0,
  explanation: 'العميل لا يقصد بنكاً بل يشتري فيجد التمويل حاضراً.' },

{ topic: CON, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر هذا الفرق؟',
  code_snippet: 'عرض التمويل داخل الصفحة: إتمام 42%\nعرضه برابط لموقع البنك: إتمام 11%',
  options: ['كل خطوة خروج تُسقِط جزءاً منهم', 'الرسوم أعلى في الحالة الثانية', 'المنتج مختلف بين الحالتين', 'الموافقة أبطأ في الحالة الأولى'],
  correct_answer: 0,
  explanation: 'الخروج من السياق يكلّف أكثر مما يبدو.' },

{ topic: MOD, difficulty: 'medium', type: 'code',
  question: 'ما نموذج الدمج هنا؟',
  code_snippet: 'البنك: مرخّص ويقدّم القدرة\nالمنصة: تعرض الخدمة باسمها\nالحساب: مفتوح لدى البنك',
  options: ['مصرفية كخدمة', 'مصرفية مفتوحة', 'إحالة تسويقية', 'وكالة دفع'],
  correct_answer: 0,
  explanation: 'الرخصة تبقى عند البنك وإن ظهرت الخدمة باسم المنصة.' },

{ topic: MOD, difficulty: 'hard', type: 'code',
  question: 'ما الذي حسّن تقدير القدرة هنا؟',
  code_snippet: 'التاجر: يبيع عبر المنصة منذ سنتين\nالتمويل: مبني على مبيعاته المسجّلة\nالسداد: نسبة من كل عملية',
  options: ['بيانات تدفق فعلي لا كشف حساب', 'ضمان عيني قدّمه التاجر', 'كفالة من مالك المنصة', 'ارتفاع سعر الفائدة عليه'],
  correct_answer: 0,
  explanation: 'من يرى التدفق يقدّر السداد أدق ممن يقرأ كشفاً.' },

{ topic: MOD, difficulty: 'medium', type: 'code',
  question: 'ما الذي يميّز هذا السداد؟',
  code_snippet: 'الموسم القوي: يُخصَم أكثر\nالموسم الضعيف: يُخصَم أقل\nالنسبة من كل بيع: ثابتة',
  options: ['سداد يتبع التدفق لا موعداً', 'قسط شهري ثابت المبلغ دوماً', 'دفعة واحدة عند الاستحقاق', 'سداد يتغيّر بقرار المزوّد'],
  correct_answer: 0,
  explanation: 'السداد يتبع البيع فيخفّ في الموسم الضعيف.' },

{ topic: RSK, difficulty: 'hard', type: 'code',
  question: 'ما الخلل في هذا العرض؟',
  code_snippet: 'الشاشة: «قسّط بلا تعقيد»\nالكلفة الإجمالية: غير ظاهرة\nرسوم التأخير: في صفحة أخرى',
  options: ['يسر الحصول بلا بيان الكلفة', 'بطء في عرض الخيارات', 'كثرة الخيارات المعروضة', 'ارتفاع عمولة المنصة'],
  correct_answer: 0,
  explanation: 'يسر الحصول لا يعفي من بيان الكلفة كاملة.' },

{ topic: RSK, difficulty: 'medium', type: 'code',
  question: 'ما الذي تكشفه هذي الحالة؟',
  code_snippet: 'العميل: شكا من خصم خاطئ\nالمنصة: أحالته للمزوّد\nالمزوّد: أحاله للمنصة',
  options: ['مسار شكوى غير محدد في العقد', 'خطأ تقني في نظام الخصم', 'تأخر في رد المزوّد المالي', 'نقص في تدريب موظفي المنصة'],
  correct_answer: 0,
  explanation: 'ما لا يُحسَم في العقد يُتنازَع عليه عند أول خلل.' },

{ topic: RSK, difficulty: 'medium', type: 'code',
  question: 'ما الذي يستوجب المراجعة هنا؟',
  code_snippet: 'العميل: عليه ستة التزامات تقسيط\nكل منصة: قيّمت قدرته وحدها\nالمجموع: يفوق دخله',
  options: ['تقييم القدرة بلا رؤية الباقي', 'ارتفاع رسوم كل منصة على حدة', 'قصر مدة التقسيط في كل عرض', 'تعدد المنصات التي يتعامل معها'],
  correct_answer: 0,
  explanation: 'من يرى جزءاً من الالتزامات يقدّر القدرة خطأ.' },

{ topic: RSK, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في إفصاح هذي الخدمة؟',
  code_snippet: 'الخدمة: تظهر باسم المنصة وحدها\nالجهة المرخّصة: غير مذكورة\nالعميل: يظن المنصة هي المزوّد',
  options: ['جهة مرخّصة غير معلنة للعميل', 'تصميم لا يطابق هوية المنصة', 'بطء في تحميل صفحة الخدمة', 'كثرة الخطوات قبل الموافقة'],
  correct_answer: 0,
  explanation: 'من يجهل من يتعامل معه لا يعرف إلى من يشتكي.' },

{ topic: CON, difficulty: 'medium', type: 'code',
  question: 'لماذا يبدو هذا العرض مُقحَماً؟',
  code_snippet: 'المنصة: تطبيق قراءة كتب\nالعرض: تمويل عقاري في كل صفحة\nصلة الخدمة بالرحلة: لا توجد',
  options: ['خدمة لا صلة لها برحلته', 'تصميم العرض غير جذّاب', 'رسوم التمويل مرتفعة جداً', 'المنصة صغيرة الحجم والنشاط'],
  correct_answer: 0,
  explanation: 'ما يُقحَم في غير موضعه يُفقِد المنصة ثقة عميلها.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: CON, difficulty: 'easy', type: 'true-false',
  question: 'التمويل المدمج خدمة مالية داخل رحلة غير مالية.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'العميل لا يقصد بنكاً بل يشتري فيجد التمويل حاضراً.' },

{ topic: CON, difficulty: 'medium', type: 'true-false',
  question: 'إحالة العميل لموقع البنك صورة من التمويل المدمج.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'كل خطوة يخرج فيها العميل تُسقِط جزءاً منهم.' },

{ topic: CON, difficulty: 'medium', type: 'true-false',
  question: 'الواجهات البرمجية هي ما مكّن التمويل المدمج تقنياً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الواجهة تنقل قدرة البنك إلى حيث العميل.' },

{ topic: MOD, difficulty: 'hard', type: 'true-false',
  question: 'المصرفية كخدمة تمنح المنصة رخصة مصرفية خاصة بها.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الرخصة تبقى عند البنك وإن ظهرت الخدمة باسم المنصة.' },

{ topic: MOD, difficulty: 'medium', type: 'true-false',
  question: 'السداد من التدفق يخفّ في الموسم الضعيف للتاجر.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'النسبة ثابتة والمبلغ يتبع حجم البيع.' },

{ topic: MOD, difficulty: 'medium', type: 'true-false',
  question: 'الشراء الآن والدفع لاحقاً قرض طويل يُقرَّر في الفرع.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'القرار اللحظي والمدة القصيرة يميّزانه عن القرض.' },

{ topic: RSK, difficulty: 'medium', type: 'true-false',
  question: 'عرض المنصة للخدمة ينقل إليها الترخيص ومسؤوليته.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'العرض لا ينقل الترخيص ولا مسؤوليته.' },

{ topic: RSK, difficulty: 'hard', type: 'true-false',
  question: 'يسر الحصول على التمويل لا يعفي من بيان كلفته كاملة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'قرار بلا علم بالكلفة قرار ناقص.' },

{ topic: RSK, difficulty: 'medium', type: 'true-false',
  question: 'رفع رسوم التأخير يعالج تراكم التزامات العميل.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'رفع الرسوم يعاقب المتعثّر ولا يمنع التعثّر.' },

{ topic: RSK, difficulty: 'medium', type: 'true-false',
  question: 'الدمج لا يوسّع ما يجوز مشاركته من بيانات العميل.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الإذن والغرض يحكمان المشاركة مهما تغيّر الشكل.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: CON, difficulty: 'easy', type: 'matching',
  question: 'صل كل حالة بوصفها',
  pairs: [ { left: 'تقسيط في صفحة الدفع', right: 'تمويل مدمج' }, { left: 'رابط لموقع البنك', right: 'إحالة لا دمج' }, { left: 'تحويل من تطبيق البنك', right: 'خدمة مصرفية مباشرة' }, { left: 'إعلان بنك في المتجر', right: 'تسويق لا دمج' } ],
  explanation: 'الدمج أن تتم الخدمة داخل الرحلة لا بجوارها.' },

{ topic: CON, difficulty: 'easy', type: 'matching',
  question: 'صل كل طرف بما يكسبه من الدمج',
  pairs: [ { left: 'المنصة', right: 'إتمام مبيعات وعمولة' }, { left: 'المزوّد المالي', right: 'عملاء بكلفة أقل' }, { left: 'العميل', right: 'خدمة في موضع حاجته' }, { left: 'مزوّد التقنية', right: 'رسوم ربط وتشغيل' } ],
  explanation: 'الدمج يقوم على مكسب لكل طرف وإلا لم يدم.' },

{ topic: CON, difficulty: 'medium', type: 'matching',
  question: 'صل كل مفهوم بما يميّزه',
  pairs: [ { left: 'التمويل المدمج', right: 'خدمة داخل رحلة غيره' }, { left: 'البنك الرقمي', right: 'منتج مصرفي قائم' }, { left: 'المصرفية المفتوحة', right: 'إتاحة بيانات بإذن' }, { left: 'المصرفية كخدمة', right: 'إتاحة قدرة مرخّصة' } ],
  explanation: 'قراءة الحساب شيء، وفتح حساب باسمك شيء آخر.' },

{ topic: MOD, difficulty: 'medium', type: 'matching',
  question: 'صل كل منتج مدمج برحلته',
  pairs: [ { left: 'تقسيط', right: 'صفحة دفع متجر' }, { left: 'تأمين', right: 'شراء منتج قابل للتلف' }, { left: 'تمويل تاجر', right: 'منصة بيع بالجملة' }, { left: 'محفظة', right: 'تطبيق نقل أو توصيل' } ],
  explanation: 'الحاجة في الرحلة تحدد ما يُدمَج لا العكس.' },

{ topic: MOD, difficulty: 'medium', type: 'matching',
  question: 'صل كل نموذج بما تقدّمه المنصة فيه',
  pairs: [ { left: 'مصرفية كخدمة', right: 'واجهة العميل فقط' }, { left: 'مصرفية مفتوحة', right: 'تحليل بيانات مأذونة' }, { left: 'إحالة تسويقية', right: 'عرض ينتهي عندها' }, { left: 'وكالة دفع', right: 'تحصيل نيابة عن غيرها' } ],
  explanation: 'ما تقدّمه المنصة يحدد ما تتحمّله من مسؤولية.' },

{ topic: MOD, difficulty: 'medium', type: 'matching',
  question: 'صل كل صيغة سداد بخاصيتها',
  pairs: [ { left: 'نسبة من كل بيع', right: 'يتبع التدفق' }, { left: 'قسط شهري ثابت', right: 'لا يتأثر بالموسم' }, { left: 'دفعة عند الاستحقاق', right: 'عبء مؤجَّل مركّز' }, { left: 'ثلاث دفعات قصيرة', right: 'التزام قصير الأجل' } ],
  explanation: 'صيغة السداد تناسب طبيعة دخل المقترض.' },

{ topic: RSK, difficulty: 'medium', type: 'matching',
  question: 'صل كل دور في الدمج بمسؤوليته',
  pairs: [ { left: 'الجهة المرخّصة', right: 'الالتزام التنظيمي' }, { left: 'المنصة', right: 'وضوح العرض وسياقه' }, { left: 'مزوّد التقنية', right: 'سلامة الربط' }, { left: 'الجهة الرقابية', right: 'الإشراف على الجميع' } ],
  explanation: 'العرض لا ينقل الترخيص ولا مسؤوليته.' },

{ topic: RSK, difficulty: 'hard', type: 'matching',
  question: 'صل كل خطر في الدمج بعلاجه',
  pairs: [ { left: 'كلفة غير مبيَّنة', right: 'إفصاح كامل مسبق' }, { left: 'التزامات متراكمة', right: 'تقييم قدرة شامل' }, { left: 'مسار شكوى مبهم', right: 'تحديده في العقد' }, { left: 'جهة مرخّصة مجهولة', right: 'إعلانها في الشاشة' } ],
  explanation: 'أكثر مخاطر الدمج تُعالَج بوضوح لا بتقنية.' },

{ topic: RSK, difficulty: 'medium', type: 'matching',
  question: 'صل كل بند في عقد الدمج بغرضه',
  pairs: [ { left: 'اقتسام العائد', right: 'منع النزاع المالي' }, { left: 'توزيع الخطر', right: 'من يتحمّل التعثّر' }, { left: 'مسار الشكوى', right: 'خدمة العميل' }, { left: 'حدود البيانات', right: 'حماية الخصوصية' } ],
  explanation: 'ما لا يُحسَم في العقد يُتنازَع عليه عند أول خلل.' },

{ topic: CON, difficulty: 'medium', type: 'matching',
  question: 'صل كل عرض بحكمه',
  pairs: [ { left: 'تقسيط عند شراء جهاز', right: 'دمج في موضعه' }, { left: 'تمويل عقاري في تطبيق قراءة', right: 'إقحام بلا صلة' }, { left: 'تأمين مع تذكرة سفر', right: 'دمج في موضعه' }, { left: 'قرض في كل صفحة', right: 'إقحام مزعج' } ],
  explanation: 'ما يُقحَم في غير موضعه يُفقِد المنصة ثقة عميلها.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: CON, difficulty: 'easy', type: 'terminal', prompt_label: 'المفهوم',
  question: 'اكتب اسم تقديم خدمة مالية داخل رحلة غير مالية',
  expected_answers: ['التمويل المدمج', 'التمويل المضمّن', 'embedded finance', 'الخدمات المالية المدمجة'],
  explanation: 'العميل لا يقصد بنكاً بل يشتري فيجد التمويل حاضراً.' },

{ topic: MOD, difficulty: 'easy', type: 'terminal', prompt_label: 'النموذج',
  question: 'اكتب اسم إتاحة بنك مرخّص قدرته لمنصات أخرى',
  expected_answers: ['المصرفية كخدمة', 'البنك كخدمة', 'BaaS', 'banking as a service'],
  explanation: 'الرخصة تبقى عند البنك وإن ظهرت الخدمة باسم المنصة.' },

{ topic: MOD, difficulty: 'medium', type: 'terminal', prompt_label: 'المنتج',
  question: 'اكتب اسم التقسيط القصير الذي يُقرَّر لحظة الشراء',
  expected_answers: ['الشراء الآن والدفع لاحقاً', 'اشترِ الآن وادفع لاحقاً', 'BNPL', 'التقسيط اللحظي'],
  explanation: 'القرار اللحظي والمدة القصيرة يميّزانه عن القرض.' },

{ topic: MOD, difficulty: 'hard', type: 'terminal', prompt_label: 'الصيغة',
  question: 'اكتب اسم خصم نسبة من كل عملية بيع سداداً',
  expected_answers: ['السداد من التدفق', 'السداد بنسبة من المبيعات', 'revenue based', 'السداد من الإيراد'],
  explanation: 'السداد يتبع البيع فيخفّ في الموسم الضعيف.' },

{ topic: MOD, difficulty: 'medium', type: 'terminal', prompt_label: 'المنتج',
  question: 'اكتب اسم التغطية التي تُعرَض مع المنتج المؤمَّن',
  expected_answers: ['التأمين المدمج', 'التأمين المضمّن', 'embedded insurance', 'التأمين في نقطة البيع'],
  explanation: 'التغطية تُعرَض حيث نشأت الحاجة إليها.' },

{ topic: RSK, difficulty: 'medium', type: 'terminal', prompt_label: 'المسؤول',
  question: 'اكتب من يتحمّل المسؤولية التنظيمية في الخدمة المدمجة',
  expected_answers: ['الجهة المرخّصة', 'المزوّد المرخّص', 'البنك المرخّص', 'صاحب الترخيص'],
  explanation: 'العرض لا ينقل الترخيص ولا مسؤوليته.' },

{ topic: RSK, difficulty: 'hard', type: 'terminal', prompt_label: 'الواجب',
  question: 'اكتب ما يجب بيانه للعميل قبل قبول التمويل',
  expected_answers: ['الكلفة الإجمالية', 'الكلفة كاملة', 'التكلفة الكلية', 'كلفة التمويل'],
  explanation: 'يسر الحصول لا يعفي من بيان الكلفة كاملة.' },

{ topic: RSK, difficulty: 'medium', type: 'terminal', prompt_label: 'الخطر',
  question: 'اكتب اسم تجاوز التزامات العميل لقدرته على السداد',
  expected_answers: ['الإفراط في الاقتراض', 'تراكم الالتزامات', 'over indebtedness', 'المديونية المفرطة'],
  explanation: 'سهولة القرار لا تعني قدرة على تحمّله.' },

{ topic: RSK, difficulty: 'medium', type: 'terminal', prompt_label: 'البند',
  question: 'اكتب ما يحدد في العقد من يخدم العميل عند الشكوى',
  expected_answers: ['مسار الشكوى', 'مسار التصعيد', 'آلية الشكاوى', 'مسار خدمة العميل'],
  explanation: 'ما لا يُحسَم في العقد يُتنازَع عليه عند أول خلل.' },

{ topic: CON, difficulty: 'hard', type: 'terminal', prompt_label: 'المعيار',
  question: 'اكتب ما يميّز الدمج في موضعه عن الإقحام',
  expected_answers: ['صلته برحلة العميل', 'الحاجة في الرحلة', 'ارتباطه بالسياق', 'ملاءمته للسياق'],
  explanation: 'ما يُقحَم في غير موضعه يُفقِد المنصة ثقة عميلها.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: CON, difficulty: 'easy', type: 'multi-select',
  question: 'أي مما يلي تمويل مدمج؟',
  options: ['تقسيط داخل صفحة الدفع', 'تأمين مع حجز التذكرة', 'رابط لموقع البنك', 'إعلان بنك في المتجر'],
  correct_answers: [0, 1],
  explanation: 'الدمج أن تتم الخدمة داخل الرحلة لا بجوارها.' },

{ topic: CON, difficulty: 'easy', type: 'multi-select',
  question: 'أي مما يلي تكسبه المنصة من الدمج؟',
  options: ['إتمام مبيعات أكثر', 'إيراد عمولة إضافي', 'رخصة مصرفية لها', 'إعفاء من الرقابة'],
  correct_answers: [0, 1],
  explanation: 'العرض لا ينقل الترخيص ولا مسؤوليته.' },

{ topic: CON, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يجعل الدمج في موضعه؟',
  options: ['صلته بحاجة نشأت في الرحلة', 'ظهوره عند لحظة القرار', 'ظهوره في كل صفحة', 'إخفاء شروطه حتى الشراء'],
  correct_answers: [0, 1],
  explanation: 'ما يُقحَم في غير موضعه يُفقِد المنصة ثقة عميلها.' },

{ topic: MOD, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن المصرفية كخدمة؟',
  options: ['الرخصة تبقى عند البنك', 'المنصة تقدّم واجهة العميل', 'المنصة تصير بنكاً مرخّصاً', 'الرقابة تنتقل للمنصة'],
  correct_answers: [0, 1],
  explanation: 'الرخصة تبقى عند البنك وإن ظهرت الخدمة باسم المنصة.' },

{ topic: MOD, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يميّز تمويل التاجر عبر منصته؟',
  options: ['بيانات مبيعات تحسّن التقدير', 'سداد يتبع التدفق', 'إعفاء من تقييم القدرة', 'مبلغ لا يرتبط بالمبيعات'],
  correct_answers: [0, 1],
  explanation: 'من يرى التدفق يقدّر السداد أدق ممن يقرأ كشفاً.' },

{ topic: MOD, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي من منتجات التمويل المدمج؟',
  options: ['تقسيط عند الشراء', 'تأمين مع المنتج', 'حساب جارٍ في فرع', 'قرض عقاري من بنك'],
  correct_answers: [0, 1],
  explanation: 'الأخيران خدمتان مصرفيتان مباشرتان لا مدمجتان.' },

{ topic: RSK, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يجب إعلانه للعميل؟',
  options: ['الجهة المرخّصة المتعامل معها', 'الكلفة الإجمالية للتمويل', 'عمولة المنصة من العملية', 'اسم مزوّد التقنية الرابط'],
  correct_answers: [0, 1],
  explanation: 'من يجهل من يتعامل معه لا يعرف إلى من يشتكي.' },

{ topic: RSK, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يقلّل خطر تراكم الالتزامات؟',
  options: ['تقييم القدرة قبل الموافقة', 'رؤية التزامات العميل الأخرى', 'رفع رسوم التأخير', 'زيادة عدد الأقساط'],
  correct_answers: [0, 1],
  explanation: 'من يرى جزءاً من الالتزامات يقدّر القدرة خطأ.' },

{ topic: RSK, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يُحسَم في عقد الدمج؟',
  options: ['من يتحمّل خطر التعثّر', 'من يخدم العميل عند الشكوى', 'عدد موظفي كل طرف', 'موعد الاجتماعات الدورية'],
  correct_answers: [0, 1],
  explanation: 'ما لا يُحسَم في العقد يُتنازَع عليه عند أول خلل.' },

{ topic: RSK, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يحكم مشاركة البيانات في الدمج؟',
  options: ['إذن معلن من العميل', 'حصرها بما تحتاجه الخدمة', 'حجم المنصة المستضيفة', 'عدد المزوّدين المشاركين'],
  correct_answers: [0, 1],
  explanation: 'الدمج لا يوسّع ما يجوز مشاركته من البيانات.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: CON, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات دمج خدمة مالية في منصة',
  options: ['تحديد الحاجة في رحلة العميل', 'اختيار المزوّد المرخّص', 'الربط التقني والاختبار', 'الإطلاق ومتابعة الأثر'],
  explanation: 'الحاجة في الرحلة تحدد ما يُدمَج لا العكس.' },

{ topic: CON, difficulty: 'easy', type: 'ordering',
  question: 'رتّب رحلة عميل في تمويل مدمج',
  options: ['اختيار المنتج في المتجر', 'ظهور خيار التقسيط', 'التحقق والموافقة اللحظية', 'إتمام الشراء بلا مغادرة'],
  explanation: 'كل خطوة يخرج فيها العميل تُسقِط جزءاً منهم.' },

{ topic: MOD, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إتاحة المصرفية كخدمة',
  options: ['بنك مرخّص يتيح واجهاته', 'المنصة تتكامل معها', 'الخدمة تظهر باسم المنصة', 'الالتزام يبقى على البنك'],
  explanation: 'الرخصة تبقى عند البنك وإن ظهرت الخدمة باسم المنصة.' },

{ topic: MOD, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تمويل تاجر عبر منصته',
  options: ['قراءة تدفق مبيعاته المسجّل', 'تقدير قدرته على السداد', 'عرض المبلغ ونسبة الخصم', 'السداد مع كل عملية بيع'],
  explanation: 'من يرى التدفق يقدّر السداد أدق ممن يقرأ كشفاً.' },

{ topic: MOD, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات اختيار منتج مالي للدمج',
  options: ['رصد الحاجة المتكررة في الرحلة', 'مطابقتها بمنتج مالي مناسب', 'تقدير أثره على الإتمام', 'اختباره على شريحة أولاً'],
  explanation: 'ما لم يُقَس أثره على شريحة لا يُعمَّم.' },

{ topic: RSK, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء شراكة دمج',
  options: ['تحديد الأدوار والمسؤوليات', 'الاتفاق على اقتسام الخطر والعائد', 'تحديد مسار الشكاوى', 'توقيع العقد والربط'],
  explanation: 'ما لا يُحسَم في العقد يُتنازَع عليه عند أول خلل.' },

{ topic: RSK, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات عرض تمويل مسؤول',
  options: ['تقييم قدرة العميل', 'بيان الكلفة الإجمالية', 'إعلان الجهة المرخّصة', 'أخذ موافقته الصريحة'],
  explanation: 'الموافقة آخر خطوة بعد اكتمال ما يعلمه.' },

{ topic: RSK, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات معالجة شكوى في خدمة مدمجة',
  options: ['استقبالها في المنصة', 'تحديد الجهة المسؤولة', 'إحالتها بمسار معلوم', 'إبلاغ العميل بالنتيجة'],
  explanation: 'من يجهل من يتعامل معه لا يعرف إلى من يشتكي.' },

{ topic: RSK, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات ضبط مشاركة البيانات في الدمج',
  options: ['تحديد ما تحتاجه الخدمة', 'أخذ إذن معلن بالغرض', 'مشاركة الحد الأدنى', 'مراجعة الإذن دورياً'],
  explanation: 'الدمج لا يوسّع ما يجوز مشاركته من البيانات.' },

{ topic: CON, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تقييم فكرة دمج مقترحة',
  options: ['هل تخدم حاجة في الرحلة', 'هل يوجد مزوّد مرخّص لها', 'ما أثرها المتوقع على الإتمام', 'قرار المضي أو تركها'],
  explanation: 'خدمة لا تخدم ما جاء العميل لأجله تُقحَم لا تُدمَج.' }

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
