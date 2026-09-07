// الشبكات · S3 التوجيه والتبديل · L5 بروتوكولات التوجيه
// ثلاثة مواضيع: OSPF · EIGRP · BGP
//
// L4 وصف العائلتين بلا أسماء: متجه المسافة وحالة الوصلة، والتقارب
// وحمايات الحلقات. وهذا المستوى يسمّي البروتوكولات الثلاثة السائدة
// ويقابل بينها: اثنان داخل النظام الواحد، وواحد بين الأنظمة.
//
// حدّ مقصود: لا صيغ أوامر إعداد ولا حساب مقياس مركّب بأرقامه —
// المطلوب فهم يُستعمل في الاختيار والتشخيص لا حفظ صيغة.
//
// الصعوبة: ٥٠ متوسط · ٤٠ صعب — مطابق لصف L5 (لا سهل).

const T = 'Networking';
const S = 'Routing and Switching';
const L = 5;

const OSPF = 'OSPF';
const EIGRP = 'EIGRP';
const BGP = 'BGP';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

// ── OSPF · ١٠ ──

{ topic: OSPF, difficulty: 'medium', type: 'multiple-choice',
  question: 'إلى أي عائلة ينتمي بروتوكول OSPF؟',
  options: ['حالة الوصلة داخل النظام الواحد', 'متجه المسافة داخل النظام الواحد', 'متجه المسار بين الأنظمة', 'توجيه ثابت يكتبه المسؤول'],
  correct_answer: 0,
  explanation: 'كل موجّه يبني خريطة كاملة ثم يحسب أقصر طريق عليها.' },

{ topic: OSPF, difficulty: 'medium', type: 'multiple-choice',
  question: 'على أي أساس يحسب OSPF مقياسه؟',
  options: ['كلفة مشتقّة من سعة الوصلة', 'عدد القفزات إلى الوجهة', 'طول قائمة الأنظمة المارّة', 'زمن الذهاب والإياب المقيس'],
  correct_answer: 0,
  explanation: 'الوصلة الأسرع كلفتها أقل، فيُفضَّل مجموع الكلف الأصغر.' },

{ topic: OSPF, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من تقسيم OSPF إلى مناطق؟',
  options: ['حصر إعادة الحساب داخل المنطقة', 'رفع سرعة الوصلات بين الموجّهات', 'زيادة عدد الجيران المسموح بهم', 'إلغاء الحاجة إلى مقياس المسار'],
  correct_answer: 0,
  explanation: 'تغيّر في منطقة لا يُجبِر موجّهات المناطق الأخرى على الحساب.' },

{ topic: OSPF, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما دور المنطقة صفر في تصميم OSPF؟',
  options: ['منطقة يمرّ بها ما بين المناطق', 'منطقة تُعطَّل فيها كل المسارات', 'منطقة تحوي الأجهزة الطرفية فقط', 'منطقة تُستعمَل للاختبار وحدها'],
  correct_answer: 0,
  explanation: 'كل منطقة تتصل بها، ولذلك تُسمّى منطقة العمود الفقري.' },

{ topic: OSPF, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الغرض من انتخاب موجّه مُعيَّن على شبكة مشتركة؟',
  options: ['تقليل عدد علاقات الجوار الكاملة', 'رفع كلفة الوصلة على الشبكة', 'منع دخول موجّهات جديدة إليها', 'تقسيم الشبكة إلى منطقتين'],
  correct_answer: 0,
  explanation: 'الكل يبني الجوار الكامل معه بدل بناء علاقة مع كل موجّه.' },

{ topic: OSPF, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يتبادله موجّهات OSPF لبناء خريطتها؟',
  options: ['إعلانات تصف حالة كل وصلة', 'جداول التوجيه كاملة دورياً', 'قوائم بالأنظمة التي مرّ بها', 'عناوين الأجهزة الطرفية كلها'],
  correct_answer: 0,
  explanation: 'من مجموع الإعلانات تتكوّن قاعدة بيانات واحدة عند الجميع.' },

{ topic: OSPF, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما شرط قيام الجوار بين موجّهي OSPF؟',
  options: ['اتفاق المنطقة والمهل والمصادقة', 'تساوي كلفة الوصلة بينهما', 'تطابق أسماء الموجّهين تماماً', 'اتصالهما بموجّه ثالث مشترك'],
  correct_answer: 0,
  explanation: 'اختلاف أحدها يمنع الجوار بصمت، وهو أشيع سبب لغيابه.' },

{ topic: OSPF, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يحدث عند تغيّر حالة وصلة في OSPF؟',
  options: ['يُغرَق الإعلان ثم يُعاد الحساب', 'ينتظر الموجّه دورته الزمنية', 'يُرسَل الجدول كاملاً للجيران', 'يُجمَّد المسار مدة قبل إعلانه'],
  correct_answer: 0,
  explanation: 'الإغراق ينشر الخبر بسرعة، ثم يحسب كل موجّه على خريطته.' },

{ topic: OSPF, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما أثر ضبط المقياس على وصلة في OSPF؟',
  options: ['توجيه الحركة عبر وصلة دون أخرى', 'تغيير المنطقة التي تنتمي إليها', 'رفع سرعة الوصلة المادية نفسها', 'منع قيام الجوار على تلك الوصلة'],
  correct_answer: 0,
  explanation: 'رفع الكلفة يُبعِد الحركة، وخفضها يجذبها بلا لمس العتاد.' },

{ topic: OSPF, difficulty: 'medium', type: 'multiple-choice',
  question: 'متى يُفضَّل OSPF على غيره في شبكة مؤسسة؟',
  options: ['حين يُراد معيار مفتوح متعدد الموردين', 'حين تكون كل الأجهزة من مورّد واحد', 'حين يُراد ربط الشبكة بمزوّدَين', 'حين لا توجد إلا وصلة خروج واحدة'],
  correct_answer: 0,
  explanation: 'كونه معياراً مفتوحاً يجعله يعمل بين أجهزة مختلفة المصادر.' },

// ── EIGRP · ١٠ ──

{ topic: EIGRP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز EIGRP عن متجه المسافة الكلاسيكي؟',
  options: ['يحتفظ ببدائل محسوبة سلفاً', 'يبني خريطة كاملة للشبكة', 'يحسب مقياسه من عدد القفزات', 'يعمل بين الأنظمة المستقلة فقط'],
  correct_answer: 0,
  explanation: 'البديل الجاهز يجعل تقاربه شبه فوري بلا إعادة حساب واسعة.' },

{ topic: EIGRP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالخلَف في EIGRP؟',
  options: ['أفضل مسار مُثبَّت في الجدول', 'أول مسار عُلِم من الجيران', 'أطول مسار في قاعدة البيانات', 'مسار ثابت يكتبه المسؤول يدوياً'],
  correct_answer: 0,
  explanation: 'هو المسار العامل، ويبقى إلى أن يسقط فيحلّ محلّه بديله.' },

{ topic: EIGRP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما شرط اعتماد المسار خلَفاً محتمَلاً؟',
  options: ['أن تقلّ مسافة جاره عن مسافتنا', 'أن يتساوى مقياسه مع الخلَف', 'أن يمرّ بعدد قفزات أقل', 'أن يكون على الوصلة نفسها'],
  correct_answer: 0,
  explanation: 'الشرط يضمن أن الجار لا يمرّ بنا، فلا تنشأ حلقة عند التبديل.' },

{ topic: EIGRP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ماذا يفعل EIGRP إن سقط الخلَف ولا بديل محتمَل؟',
  options: ['يسأل جيرانه عن مسار للوجهة', 'يحذف الوجهة من الجدول نهائياً', 'ينتظر انتهاء مدة المسار الساقط', 'يعلن الوجهة بمقياس لا نهائي'],
  correct_answer: 0,
  explanation: 'يدخل حالة الاستعلام، وطول بقائه فيها من أشيع أعطاله.' },

{ topic: EIGRP, difficulty: 'medium', type: 'multiple-choice',
  question: 'مِمّ يتكوّن مقياس EIGRP المركّب افتراضياً؟',
  options: ['سعة الوصلة وزمن التأخير', 'عدد القفزات وعمر المسار', 'حمل الوصلة وطول بادئتها', 'كلفة الوصلة ورقم منطقتها'],
  correct_answer: 0,
  explanation: 'المقياس المركّب يميّز وصلة بطيئة قصيرة من سريعة أطول.' },

{ topic: EIGRP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما شرط تبادل المسارات بين موجّهي EIGRP؟',
  options: ['تطابق رقم النظام المستقل', 'تساوي مقياس الوصلة بينهما', 'اتصالهما بموجّه ثالث مشترك', 'تطابق أسماء الموجّهين تماماً'],
  correct_answer: 0,
  explanation: 'اختلاف الرقم يمنع الجوار وإن كان الموجّهان على وصلة واحدة.' },

{ topic: EIGRP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما فائدة التلخيص عند حدود شبكة تعمل بـEIGRP؟',
  options: ['حصر الاستعلامات وتصغير الجدول', 'رفع سعة الوصلات بين المواقع', 'إلغاء الحاجة إلى مقياس مركّب', 'منع قيام الجوار مع الخارج'],
  correct_answer: 0,
  explanation: 'الاستعلام يقف عند حد التلخيص فلا ينتشر في الشبكة كلها.' },

{ topic: EIGRP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُرسَل في تحديثات EIGRP الاعتيادية؟',
  options: ['ما تغيّر فقط لا الجدول كله', 'الجدول كله في كل دورة زمنية', 'خريطة الشبكة كاملة لكل جار', 'قائمة الأنظمة التي مرّ بها'],
  correct_answer: 0,
  explanation: 'التحديث الجزئي يوفّر سعة كبيرة على الوصلات البطيئة.' },

{ topic: EIGRP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما أثر رفع التأخير المعلَن على وصلة في EIGRP؟',
  options: ['إبعاد الحركة إلى وصلة أخرى', 'تعطيل الجوار على تلك الوصلة', 'نقلها إلى نظام مستقل آخر', 'إلغاء تلخيص المسارات عندها'],
  correct_answer: 0,
  explanation: 'التأخير أنسب ما يُضبَط، فتغيير السعة المعلَنة يربك حسابات أخرى.' },

{ topic: EIGRP, difficulty: 'medium', type: 'multiple-choice',
  question: 'متى يُرجَّح EIGRP على غيره في شبكة مؤسسة؟',
  options: ['حين تكون الأجهزة من مورّد يدعمه', 'حين يُراد ربط الشبكة بمزوّدَين', 'حين تُبنى الشبكة على مناطق كثيرة', 'حين لا توجد إلا وصلة خروج واحدة'],
  correct_answer: 0,
  explanation: 'تقاربه السريع وإعداده الأبسط يخدمان بيئة متجانسة المورّد.' },

// ── BGP · ١٠ ──

{ topic: BGP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما موقع BGP بين بروتوكولات التوجيه؟',
  options: ['يوجّه بين الأنظمة المستقلة', 'يوجّه داخل النظام الواحد', 'يوجّه بين مناطق النظام نفسه', 'يوجّه بين المبدّلات في الطبقة الثانية'],
  correct_answer: 0,
  explanation: 'هو بروتوكول الإنترنت الذي يربط شبكات الجهات ببعضها.' },

{ topic: BGP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالنظام المستقل؟',
  options: ['شبكة بسياسة توجيه واحدة ورقم', 'وصلة واحدة بين موجّهين اثنين', 'منطقة داخل بروتوكول حالة الوصلة', 'مجموعة أجهزة على مبدّل واحد'],
  correct_answer: 0,
  explanation: 'الرقم يعرّفها عالمياً، وBGP يوجّه بين هذي الأنظمة.' },

{ topic: BGP, difficulty: 'hard', type: 'multiple-choice',
  question: 'إلى أي عائلة ينتمي BGP؟',
  options: ['متجه المسار يحمل قائمة الأنظمة', 'حالة الوصلة يبني خريطة كاملة', 'متجه المسافة يعدّ القفزات فقط', 'توجيه ثابت يكتبه المسؤول يدوياً'],
  correct_answer: 0,
  explanation: 'قائمة الأنظمة المارّة تكشف الحلقة: من رأى رقمه رفض المسار.' },

{ topic: BGP, difficulty: 'hard', type: 'multiple-choice',
  question: 'كيف يمنع BGP حلقات التوجيه بين الأنظمة؟',
  options: ['يرفض مساراً يحمل رقم نظامه', 'يحدّد عمراً أقصى لكل مسار', 'يجمّد المسار الساقط مدة محددة', 'يمنع إعلان المسار لمصدره'],
  correct_answer: 0,
  explanation: 'رؤية رقمه في القائمة تعني أن المسار مرّ به فيُرفَض.' },

{ topic: BGP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الجلسة الداخلية عن الخارجية في BGP؟',
  options: ['الداخلية بين موجّهي النظام نفسه', 'الداخلية بين مزوّدَين مختلفين', 'الداخلية تعمل على وصلة لاسلكية', 'الداخلية لا تحمل مسارات أصلاً'],
  correct_answer: 0,
  explanation: 'والخارجية بين نظامين مختلفين، ولكلٍّ قواعد إعلان تخصّه.' },

{ topic: BGP, difficulty: 'medium', type: 'multiple-choice',
  question: 'على أي أساس يفاضل BGP بين المسارات؟',
  options: ['سياسات وسمات لا سرعة الوصلة', 'كلفة مشتقّة من سعة الوصلة', 'مجموع التأخير على المسار', 'عدد المبدّلات بين الطرفين'],
  correct_answer: 0,
  explanation: 'الاختيار تجاري وإداري، فقد يُفضَّل الأرخص لا الأسرع.' },

{ topic: BGP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما أثر قصر قائمة الأنظمة في مفاضلة BGP؟',
  options: ['يرجّح المسار عند تساوي ما قبله', 'يحسم الاختيار قبل كل السمات', 'يرفع سعة المسار المتاحة فعلاً', 'يمنع قبول المسار من الجار'],
  correct_answer: 0,
  explanation: 'المفاضلة مرتّبة، وسمات السياسة تُفحَص قبل طول القائمة.' },

{ topic: BGP, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يوصف تقارب BGP بأنه بطيء؟',
  options: ['مهله طويلة وقراراته سياسية', 'يبني خريطة كاملة عند كل تغيّر', 'يرسل جدوله كاملاً كل ثانية', 'ينتظر انتخاب موجّه مُعيَّن'],
  correct_answer: 0,
  explanation: 'صُمّم للاستقرار على حجم الإنترنت لا لسرعة التبديل.' },

{ topic: BGP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض الشائع من استعمال BGP في مؤسسة؟',
  options: ['الربط بمزوّدَين مع تحكّم بالخروج', 'توجيه الحركة بين مناطق الشبكة', 'تقسيم الشبكة إلى شبكات افتراضية', 'تسريع التقارب داخل الفرع الواحد'],
  correct_answer: 0,
  explanation: 'يمنح تحكّماً في اختيار المزوّد لكل وجهة عند تعدّد الوصلات.' },

{ topic: BGP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما خطر إعلان بادئة ليست ملكاً للنظام؟',
  options: ['جذب حركة غيره إليه بالخطأ', 'رفع كلفة وصلاته الداخلية', 'تعطيل جلساته مع الجيران كلها', 'إلغاء تلخيص مساراته المعلَنة'],
  correct_answer: 0,
  explanation: 'يُعرَف باختطاف البادئة، ويُتّقى بترشيح ما يُعلَن ويُقبَل.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: OSPF, difficulty: 'hard', type: 'code',
  question: 'ما الذي يمنع قيام هذا الجوار؟',
  code_snippet: 'موجّه أ: المنطقة 0 · مهلة الحياة ١٠\nموجّه ب: المنطقة 1 · مهلة الحياة ١٠',
  options: ['اختلاف المنطقة بين الطرفين', 'اختلاف مهلة الحياة بينهما', 'غياب المصادقة عند أحدهما', 'تساوي كلفة الوصلة عندهما'],
  correct_answer: 0,
  explanation: 'المهلة متطابقة، والفرق الوحيد رقم المنطقة فيمتنع الجوار.' },

{ topic: OSPF, difficulty: 'medium', type: 'code',
  question: 'أي مسار يختاره OSPF هنا؟',
  code_snippet: 'المسار الأول: كلفتان ١٠ و١٠\nالمسار الثاني: ثلاث كلف ٥ و٥ و٥',
  options: ['الثاني بمجموع خمسة عشر', 'الأول بمجموع عشرين', 'الأول لأنه أقل قفزات', 'الثاني لأنه أكثر قفزات'],
  correct_answer: 0,
  explanation: 'المفاضلة بمجموع الكلف لا بعدد القفزات، و١٥ أقل من ٢٠.' },

{ topic: OSPF, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر هذا الاضطراب المتكرر؟',
  code_snippet: 'وصلة تصعد وتهبط كل ثوانٍ\nكل مرة: إغراق إعلان وإعادة حساب',
  options: ['وصلة مضطربة تُرهِق الشبكة كلها', 'مناطق أكثر من اللازم في التصميم', 'مصادقة غير متطابقة بين الجارين', 'موجّه مُعيَّن لم يُنتخَب بعد'],
  correct_answer: 0,
  explanation: 'خبر حالة الوصلة يُغرَق للجميع، فعطل محلي يتحوّل عبئاً عاماً.' },

{ topic: EIGRP, difficulty: 'hard', type: 'code',
  question: 'هل يصلح الجار الثاني خلَفاً محتمَلاً؟',
  code_snippet: 'مسافتنا للوجهة: ٣٠\nمسافة الجار الثاني المعلَنة: ٢٠',
  options: ['نعم فمسافته أقل من مسافتنا', 'لا فمسافته أقل من مسافتنا', 'نعم لأن الفرق عشر وحدات', 'لا حتى يتساوى مع الخلَف'],
  correct_answer: 0,
  explanation: 'شرط البديل أن تقلّ مسافة الجار عن مسافتنا، و٢٠ أقل من ٣٠.' },

{ topic: EIGRP, difficulty: 'hard', type: 'code',
  question: 'ماذا يجري بعد سقوط المسار في هذي الحالة؟',
  code_snippet: 'الخلَف: سقط الآن\nالخلَف المحتمَل: لا يوجد',
  options: ['يستعلم الموجّه من جيرانه', 'يبدّل فوراً إلى البديل الجاهز', 'يحذف الوجهة من الجدول', 'يجمّد الوجهة مدة محددة'],
  correct_answer: 0,
  explanation: 'غياب البديل يُدخِله حالة الاستعلام، وهي أبطأ من التبديل.' },

{ topic: EIGRP, difficulty: 'medium', type: 'code',
  question: 'ما الذي يمنع تبادل المسارات هنا؟',
  code_snippet: 'موجّه أ: النظام المستقل ١٠\nموجّه ب: النظام المستقل ٢٠',
  options: ['اختلاف رقم النظام المستقل', 'اختلاف مقياس الوصلة بينهما', 'غياب التلخيص عند الحدود', 'تساوي التأخير على الطرفين'],
  correct_answer: 0,
  explanation: 'الرقم شرط الجوار، فلا تبادل مع اختلافه ولو كانت الوصلة واحدة.' },

{ topic: BGP, difficulty: 'hard', type: 'code',
  question: 'لماذا يرفض هذا النظام المسار؟',
  code_snippet: 'رقم نظامنا: ٦٥٠٠١\nقائمة أنظمة المسار: 65002 65001 65003',
  options: ['رقمنا موجود في قائمة المسار', 'القائمة أطول من المسموح', 'المسار من جلسة داخلية', 'البادئة أقصر من المطلوب'],
  correct_answer: 0,
  explanation: 'ظهور رقمنا يعني أن المسار مرّ بنا، فقبوله يصنع حلقة.' },

{ topic: BGP, difficulty: 'medium', type: 'code',
  question: 'أي مسار يرجّحه BGP عند تساوي السياسات؟',
  code_snippet: 'المسار الأول: 65010 65020 65030\nالمسار الثاني: 65010 65040',
  options: ['الثاني لأن قائمته أقصر', 'الأول لأن قائمته أطول', 'الأول لأن سعته أعلى', 'الثاني لأن كلفته أقل'],
  correct_answer: 0,
  explanation: 'عند تساوي ما قبلها من سمات، تُرجَّح القائمة الأقصر.' },

{ topic: BGP, difficulty: 'hard', type: 'code',
  question: 'ما الخطر في هذا الإعلان؟',
  code_snippet: 'نظام يعلن البادئة 203.0.113.0/24\nوهي مسجّلة لجهة أخرى',
  options: ['اختطاف بادئة يجذب حركة غيره', 'إغراق الجيران برسائل زائدة', 'تعطيل جلساته الداخلية كلها', 'رفع كلفة وصلاته الخارجية'],
  correct_answer: 0,
  explanation: 'العلاج ترشيح ما يُعلَن ويُقبَل والتحقق من ملكية البادئة.' },

{ topic: BGP, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا الترتيب من الجلسات؟',
  code_snippet: 'جلسة بين موجّهين في النظام نفسه\nوأخرى مع موجّه مزوّد الخدمة',
  options: ['جلسة داخلية وأخرى خارجية', 'جلستان داخليتان في نظام واحد', 'جلستان خارجيتان مع مزوّدَين', 'جلسة توجيه داخلي لا BGP'],
  correct_answer: 0,
  explanation: 'الداخلية داخل النظام والخارجية مع نظام آخر، ولكلٍّ قواعده.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: OSPF, difficulty: 'medium', type: 'true-false',
  question: 'مقياس OSPF مشتقّ من سعة الوصلة لا من عدد القفزات.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الوصلة الأسرع كلفتها أقل فيُفضَّل مجموع الكلف الأصغر.' },

{ topic: OSPF, difficulty: 'hard', type: 'true-false',
  question: 'تقسيم OSPF إلى مناطق يوسّع نطاق إعادة الحساب.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'بالعكس، المناطق تحصر أثر التغيّر داخل المنطقة الواحدة.' },

{ topic: OSPF, difficulty: 'medium', type: 'true-false',
  question: 'اختلاف رقم المنطقة بين موجّهين يمنع قيام الجوار.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'وكذلك اختلاف المهل أو المصادقة، والجوار يغيب بصمت.' },

{ topic: EIGRP, difficulty: 'medium', type: 'true-false',
  question: 'يحتفظ EIGRP ببديل محسوب سلفاً حين يتوفّر شرطه.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'وجوده يجعل التبديل شبه فوري بلا استعلام من الجيران.' },

{ topic: EIGRP, difficulty: 'hard', type: 'true-false',
  question: 'يعتمد EIGRP على عدد القفزات وحده في مقياسه.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'مقياسه مركّب من السعة والتأخير افتراضياً لا من القفزات.' },

{ topic: EIGRP, difficulty: 'medium', type: 'true-false',
  question: 'تحديثات EIGRP الاعتيادية تحمل ما تغيّر لا الجدول كله.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'التحديث الجزئي يوفّر سعة كبيرة على الوصلات البطيئة.' },

{ topic: BGP, difficulty: 'medium', type: 'true-false',
  question: 'يوجّه BGP بين الأنظمة المستقلة لا داخل النظام الواحد.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'وهو بروتوكول الإنترنت الذي يربط شبكات الجهات ببعضها.' },

{ topic: BGP, difficulty: 'hard', type: 'true-false',
  question: 'يختار BGP مساره على أساس أعلى سعة متاحة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'اختياره بالسياسات والسمات، وقد يُفضَّل الأرخص لا الأسرع.' },

{ topic: BGP, difficulty: 'medium', type: 'true-false',
  question: 'قائمة الأنظمة في المسار وسيلة BGP لكشف الحلقات.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'من رأى رقمه في القائمة رفض المسار لأنه مرّ به.' },

{ topic: BGP, difficulty: 'hard', type: 'true-false',
  question: 'تقارب BGP أسرع من تقارب بروتوكولات النظام الواحد.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'صُمّم للاستقرار على حجم الإنترنت، فمهله أطول عمداً.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: OSPF, difficulty: 'medium', type: 'matching',
  question: 'صل كل بروتوكول بعائلته',
  pairs: [ { left: 'OSPF', right: 'حالة الوصلة' }, { left: 'EIGRP', right: 'متجه مسافة متقدّم' }, { left: 'BGP', right: 'متجه المسار' }, { left: 'المسار الثابت', right: 'يكتبه المسؤول' } ],
  explanation: 'العائلة تحدد كيف يتعلّم المسار وكيف يمنع الحلقة.' },

{ topic: OSPF, difficulty: 'medium', type: 'matching',
  question: 'صل كل بروتوكول بمقياسه',
  pairs: [ { left: 'OSPF', right: 'كلفة من السعة' }, { left: 'EIGRP', right: 'سعة وتأخير' }, { left: 'BGP', right: 'سمات وسياسات' }, { left: 'متجه المسافة القديم', right: 'عدد القفزات' } ],
  explanation: 'اختلاف المقياس يفسّر اختلاف المسار المختار بينها.' },

{ topic: OSPF, difficulty: 'hard', type: 'matching',
  question: 'صل كل مفهوم في OSPF بغرضه',
  pairs: [ { left: 'المنطقة', right: 'حصر إعادة الحساب' }, { left: 'المنطقة صفر', right: 'العمود الفقري' }, { left: 'الموجّه المُعيَّن', right: 'تقليل علاقات الجوار' }, { left: 'إعلان الوصلة', right: 'بناء الخريطة' } ],
  explanation: 'أربعة مفاهيم تصف كيف يتوسّع OSPF بلا أن يختنق.' },

{ topic: EIGRP, difficulty: 'hard', type: 'matching',
  question: 'صل كل مصطلح في EIGRP بمعناه',
  pairs: [ { left: 'الخلَف', right: 'المسار المُثبَّت' }, { left: 'الخلَف المحتمَل', right: 'بديل جاهز آمن' }, { left: 'الاستعلام', right: 'سؤال الجيران' }, { left: 'التلخيص', right: 'حصر الاستعلام' } ],
  explanation: 'البديل الجاهز والتلخيص هما سرّ سرعة تقاربه واستقراره.' },

{ topic: BGP, difficulty: 'hard', type: 'matching',
  question: 'صل كل مصطلح في BGP بمعناه',
  pairs: [ { left: 'النظام المستقل', right: 'شبكة بسياسة ورقم' }, { left: 'الجلسة الخارجية', right: 'بين نظامين' }, { left: 'الجلسة الداخلية', right: 'داخل النظام' }, { left: 'قائمة الأنظمة', right: 'كشف الحلقة' } ],
  explanation: 'أربعة مصطلحات تكفي لقراءة أي إعلان بين الأنظمة.' },

{ topic: OSPF, difficulty: 'medium', type: 'matching',
  question: 'صل كل حاجة بالبروتوكول الأنسب',
  pairs: [ { left: 'معيار مفتوح متعدد الموردين', right: 'OSPF' }, { left: 'تقارب سريع بمورّد واحد', right: 'EIGRP' }, { left: 'ربط بمزوّدَين للإنترنت', right: 'BGP' }, { left: 'مخرج وحيد لا بديل له', right: 'مسار ثابت' } ],
  explanation: 'لا بروتوكول أفضل مطلقاً، بل أنسب لحاجة موصوفة.' },

{ topic: EIGRP, difficulty: 'medium', type: 'matching',
  question: 'صل كل بروتوكول بنطاق عمله',
  pairs: [ { left: 'OSPF', right: 'داخل النظام' }, { left: 'EIGRP', right: 'داخل النظام' }, { left: 'BGP', right: 'بين الأنظمة' }, { left: 'المسار الافتراضي', right: 'مخرج لما لم يُعرَف' } ],
  explanation: 'النطاق يحدد ما يُتوقَّع منه، فلا يُلام على ما ليس مجاله.' },

{ topic: BGP, difficulty: 'hard', type: 'matching',
  question: 'صل كل بروتوكول بطريقة منعه للحلقة',
  pairs: [ { left: 'OSPF', right: 'خريطة كاملة موحّدة' }, { left: 'EIGRP', right: 'شرط البديل الآمن' }, { left: 'BGP', right: 'رفض رقم نظامه' }, { left: 'متجه المسافة القديم', right: 'عدّاد القفزات' } ],
  explanation: 'كل عائلة تدفع ثمناً مختلفاً لتأمين نفسها من الحلقات.' },

{ topic: OSPF, difficulty: 'hard', type: 'matching',
  question: 'صل كل عرَض بسببه المرجّح',
  pairs: [ { left: 'جوار OSPF لا يقوم', right: 'اختلاف منطقة أو مهلة' }, { left: 'EIGRP يستعلم كثيراً', right: 'غياب التلخيص' }, { left: 'حركة تدخل النظام خطأً', right: 'إعلان بادئة ليست له' }, { left: 'تبديل بطيء بعد عطل', right: 'مهل BGP الطويلة' } ],
  explanation: 'أربعة أعطال شائعة، ولكل واحد سبب يميّزه عن غيره.' },

{ topic: EIGRP, difficulty: 'medium', type: 'matching',
  question: 'صل كل بروتوكول بشرط جواره',
  pairs: [ { left: 'OSPF', right: 'اتفاق المنطقة والمهل' }, { left: 'EIGRP', right: 'تطابق رقم النظام' }, { left: 'BGP الخارجي', right: 'إعداد الجار صراحةً' }, { left: 'المسار الثابت', right: 'لا جوار أصلاً' } ],
  explanation: 'شرط الجوار أول ما يُفحَص حين لا تظهر المسارات المنتظَرة.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: OSPF, difficulty: 'medium', type: 'terminal', prompt_label: 'البروتوكول',
  question: 'اكتب اسم بروتوكول حالة الوصلة المفتوح داخل النظام',
  expected_answers: ['OSPF', 'ospf', 'أو إس بي إف'],
  explanation: 'معيار مفتوح يبني خريطة كاملة ثم يحسب أقصر طريق.' },

{ topic: OSPF, difficulty: 'medium', type: 'terminal', prompt_label: 'المنطقة',
  question: 'اكتب رقم منطقة العمود الفقري في OSPF',
  expected_answers: ['0', '٠', 'صفر', 'المنطقة صفر', 'area 0'],
  explanation: 'كل منطقة تتصل بها، ومنها تمرّ المسارات بين المناطق.' },

{ topic: OSPF, difficulty: 'hard', type: 'terminal', prompt_label: 'المفهوم',
  question: 'اكتب اسم الموجّه الذي يبني الجميع الجوار الكامل معه',
  expected_answers: ['الموجّه المُعيَّن', 'designated router', 'DR', 'الموجه المعين'],
  explanation: 'يقلّل عدد علاقات الجوار على الشبكة المشتركة.' },

{ topic: EIGRP, difficulty: 'medium', type: 'terminal', prompt_label: 'البروتوكول',
  question: 'اكتب اسم بروتوكول متجه المسافة المتقدّم ذي البديل الجاهز',
  expected_answers: ['EIGRP', 'eigrp', 'إي آي جي آر بي'],
  explanation: 'البديل المحسوب سلفاً يجعل تقاربه شبه فوري.' },

{ topic: EIGRP, difficulty: 'hard', type: 'terminal', prompt_label: 'المصطلح',
  question: 'اكتب اسم المسار المُثبَّت العامل في EIGRP',
  expected_answers: ['الخلَف', 'successor', 'الخلف'],
  explanation: 'يبقى عاملاً حتى يسقط فيحلّ محلّه بديله إن وُجد.' },

{ topic: EIGRP, difficulty: 'hard', type: 'terminal', prompt_label: 'المصطلح',
  question: 'اكتب اسم البديل الجاهز الذي تقلّ مسافة جاره عن مسافتنا',
  expected_answers: ['الخلَف المحتمَل', 'feasible successor', 'الخلف المحتمل'],
  explanation: 'شرطه يضمن أن الجار لا يمرّ بنا فلا تنشأ حلقة.' },

{ topic: BGP, difficulty: 'medium', type: 'terminal', prompt_label: 'البروتوكول',
  question: 'اكتب اسم بروتوكول التوجيه بين الأنظمة المستقلة',
  expected_answers: ['BGP', 'bgp', 'بي جي بي'],
  explanation: 'هو بروتوكول الإنترنت الذي يربط شبكات الجهات ببعضها.' },

{ topic: BGP, difficulty: 'medium', type: 'terminal', prompt_label: 'المفهوم',
  question: 'اكتب اسم الشبكة ذات السياسة الواحدة والرقم العالمي',
  expected_answers: ['النظام المستقل', 'autonomous system', 'AS', 'النظام الذاتي'],
  explanation: 'رقمه يعرّفه عالمياً، وBGP يوجّه بين هذي الأنظمة.' },

{ topic: BGP, difficulty: 'hard', type: 'terminal', prompt_label: 'السمة',
  question: 'اكتب اسم قائمة الأنظمة التي مرّ بها المسار',
  expected_answers: ['قائمة الأنظمة', 'AS path', 'مسار الأنظمة', 'as-path'],
  explanation: 'بها يكشف BGP الحلقة: من رأى رقمه رفض المسار.' },

{ topic: BGP, difficulty: 'hard', type: 'terminal', prompt_label: 'الهجوم',
  question: 'اكتب اسم إعلان نظام بادئة ليست ملكاً له',
  expected_answers: ['اختطاف البادئة', 'prefix hijacking', 'اختطاف المسار', 'BGP hijacking'],
  explanation: 'يجذب حركة غيره، ويُتّقى بترشيح ما يُعلَن ويُقبَل.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: OSPF, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يصف OSPF؟',
  options: ['يبني خريطة كاملة للشبكة', 'مقياسه مشتقّ من السعة', 'يوجّه بين الأنظمة المستقلة', 'مقياسه عدد القفزات فقط'],
  correct_answers: [0, 1],
  explanation: 'التوجيه بين الأنظمة عمل BGP، والقفزات مقياس قديم.' },

{ topic: OSPF, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي شرط لقيام جوار OSPF؟',
  options: ['تطابق رقم المنطقة', 'تطابق المهل والمصادقة', 'تساوي كلفة الوصلة', 'تطابق أسماء الموجّهين'],
  correct_answers: [0, 1],
  explanation: 'الكلفة قد تختلف بين الطرفين، والأسماء لا شأن لها بالجوار.' },

{ topic: OSPF, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي فائدة لتقسيم OSPF إلى مناطق؟',
  options: ['حصر إعادة الحساب محلياً', 'تصغير قاعدة البيانات', 'رفع سعة الوصلات فعلياً', 'إلغاء الحاجة إلى المقياس'],
  correct_answers: [0, 1],
  explanation: 'المناطق تنظيم منطقي لا تغيّر شيئاً في العتاد ولا المقياس.' },

{ topic: EIGRP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يصف EIGRP؟',
  options: ['يحتفظ ببديل محسوب سلفاً', 'مقياسه مركّب لا قفزات', 'يبني خريطة كاملة للشبكة', 'يوجّه بين الأنظمة المستقلة'],
  correct_answers: [0, 1],
  explanation: 'الخريطة الكاملة صفة حالة الوصلة، والأنظمة مجال BGP.' },

{ topic: EIGRP, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يسرّع تقارب EIGRP؟',
  options: ['وجود خلَف محتمَل جاهز', 'تلخيص المسارات عند الحدود', 'رفع التأخير على كل وصلة', 'زيادة عدد الجيران المستعلَمين'],
  correct_answers: [0, 1],
  explanation: 'رفع التأخير يبعد الحركة، وكثرة الجيران تطيل الاستعلام.' },

{ topic: EIGRP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يمنع جوار EIGRP؟',
  options: ['اختلاف رقم النظام المستقل', 'اختلاف المصادقة بين الطرفين', 'اختلاف التأخير المعلَن', 'اختلاف طول بادئة الوجهة'],
  correct_answers: [0, 1],
  explanation: 'التأخير والبادئة يخصّان اختيار المسار لا قيام الجوار.' },

{ topic: BGP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يصف BGP؟',
  options: ['يوجّه بين الأنظمة المستقلة', 'يفاضل بالسياسات والسمات', 'يبني خريطة كاملة للشبكة', 'مقياسه مشتقّ من السعة'],
  correct_answers: [0, 1],
  explanation: 'الخريطة والكلفة من صفات OSPF لا من صفاته.' },

{ topic: BGP, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يخصّ قائمة الأنظمة في BGP؟',
  options: ['كشف الحلقة برفض رقمه', 'ترجيح الأقصر عند التساوي', 'قياس سعة المسار المتاحة', 'تحديد كلفة الوصلة الأولى'],
  correct_answers: [0, 1],
  explanation: 'القائمة لا تقيس سعة ولا كلفة، بل تصف الأنظمة المارّة.' },

{ topic: BGP, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يقلّل خطر اختطاف البادئات؟',
  options: ['ترشيح ما يُعلَن للجيران', 'ترشيح ما يُقبَل منهم', 'رفع مهل الجلسة كلها', 'زيادة عدد الجلسات الداخلية'],
  correct_answers: [0, 1],
  explanation: 'المهل والجلسات لا تفحص ملكية البادئة أصلاً.' },

{ topic: BGP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يبرّر تشغيل BGP في مؤسسة؟',
  options: ['الربط بمزوّدَين للإنترنت', 'التحكّم بمخرج كل وجهة', 'تسريع التقارب داخل الفرع', 'تقسيم الشبكة إلى مناطق'],
  correct_answers: [0, 1],
  explanation: 'التقارب الداخلي والمناطق شأن بروتوكولات النظام الواحد.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: OSPF, difficulty: 'medium', type: 'ordering',
  question: 'رتّب ما يجري في OSPF منذ تشغيل الواجهة',
  options: ['اكتشاف الجار برسائل الحياة', 'مزامنة قاعدة البيانات معه', 'حساب أقصر طريق على الخريطة', 'تثبيت المسارات في الجدول'],
  explanation: 'الحساب لا يبدأ قبل أن تتطابق قاعدة البيانات عند الطرفين.' },

{ topic: OSPF, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تشخيص جوار OSPF لا يقوم',
  options: ['التحقق من عمل الواجهة', 'مقارنة رقم المنطقة', 'مقارنة المهل والمصادقة', 'إصلاح المختلف والتحقق'],
  explanation: 'من الأدنى إلى الأعلى، فالوصلة الساقطة تُغني عن باقي الفحص.' },

{ topic: OSPF, difficulty: 'medium', type: 'ordering',
  question: 'رتّب ما يجري في OSPF عند تغيّر حالة وصلة',
  options: ['رصد التغيّر على الواجهة', 'إغراق الإعلان للجيران', 'إعادة الحساب عند الجميع', 'استقرار الجداول على النتيجة'],
  explanation: 'الإغراق قبل الحساب، فكل موجّه يحسب على خريطته المحدَّثة.' },

{ topic: EIGRP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب ما يجري في EIGRP عند سقوط الخلَف',
  options: ['رصد سقوط المسار المُثبَّت', 'البحث عن خلَف محتمَل', 'تثبيته أو الاستعلام من الجيران', 'استقرار الجدول على البديل'],
  explanation: 'وجود البديل يختصر الاستعلام، وغيابه هو ما يبطئ التقارب.' },

{ topic: EIGRP, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات علاج استعلامات EIGRP الواسعة',
  options: ['رصد اتساع نطاق الاستعلام', 'تحديد حدود الشبكة المناسبة', 'تلخيص المسارات عندها', 'قياس زمن التقارب بعدها'],
  explanation: 'الاستعلام يقف عند حد التلخيص فلا ينتشر في الشبكة كلها.' },

{ topic: EIGRP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تشغيل EIGRP بين موقعين',
  options: ['توحيد رقم النظام المستقل', 'تحديد الشبكات المشمولة', 'تفعيل المصادقة بين الجارين', 'التحقق من تعلّم المسارات'],
  explanation: 'التحقق آخراً، فبه يثبت أن الجوار والمصادقة معاً يعملان.' },

{ topic: BGP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إقامة جلسة BGP خارجية',
  options: ['الاتفاق على رقمي النظامين', 'إعداد الجار صراحةً عند الطرفين', 'قيام الجلسة وتبادل المسارات', 'ترشيح ما يُعلَن ويُقبَل'],
  explanation: 'الترشيح آخراً وقبل الاعتماد، فجلسة بلا ترشيح خطر مفتوح.' },

{ topic: BGP, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات معالجة حركة تخرج من المزوّد الخطأ',
  options: ['قراءة المسار المُختار للوجهة', 'تحديد السمة التي رجّحته', 'ضبط السياسة على المخرج المطلوب', 'التحقق من تحوّل الحركة'],
  explanation: 'المفاضلة مرتّبة، فلا تُضبَط سمة قبل معرفة أيها حسم.' },

{ topic: BGP, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات الاستجابة لاختطاف بادئة',
  options: ['رصد إعلان البادئة من غير مالكها', 'التحقق من سجلات ملكيتها', 'ترشيح الإعلان عند الحدود', 'إبلاغ المزوّد والمتابعة'],
  explanation: 'الترشيح المحلي يوقف الأثر، والإبلاغ يعالج المصدر نفسه.' },

{ topic: OSPF, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات اختيار بروتوكول لشبكة جديدة',
  options: ['وصف الحجم والتغيّر والموردين', 'تحديد نطاق العمل داخلاً أو خارجاً', 'اختيار البروتوكول المطابق للوصف', 'اختباره على جزء قبل التعميم'],
  explanation: 'الاختبار الجزئي آخراً، فالتعميم بلا تجربة أغلى ما يُصلَح.' }

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
