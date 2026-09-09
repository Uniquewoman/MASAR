// التقنية المالية · S6 الأمن والامتثال · L4 الأمن السيبراني المالي
// ثلاثة مواضيع: حماية الحساب والوصول · التهديدات على المؤسسة المالية · الاستجابة والصمود
//
// حدود مقصودة: الاحتيال ومؤشراته L1، وغسل الأموال L2، واعرف عميلك L3،
// والامتثال والتدقيق L5. وأمن المدفوعات وPCI-DSS موضع S2 L5، وأمن
// المحافظ الرقمية موضع S4 L5 — فلا يُعادان هنا. المقصود: ما يخصّ
// المؤسسة المالية بوصفها هدفاً وما تفعله حين تُصاب.
//
// الصعوبة: ٥ سهل · ٤٩ متوسط · ٣٦ صعب — مطابق لصف L4.

const T = 'FinTech';
const S = 'Financial Security & Compliance';
const L = 4;

const ACC = 'Account Security';
const THR = 'Institutional Threats';
const RES = 'Response and Resilience';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: ACC, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بالمصادقة متعددة العوامل؟',
  options: ['إثبات بعاملين مختلفين النوع', 'إثبات بكلمتي مرور مختلفتين', 'إثبات برمز يتكرر كل شهر', 'إثبات بسؤال سرّي إضافي'],
  correct_answer: 0,
  explanation: 'كلمتا مرور عامل واحد مكرر لا عاملان.' },

{ topic: ACC, difficulty: 'medium', type: 'multiple-choice',
  question: 'أي العوامل الثلاثة يمثّله رمز الرسالة النصية؟',
  options: ['ما تملكه لا ما تعرفه', 'ما تعرفه لا ما تملكه', 'ما أنت عليه لا ما تملكه', 'ما أنت عليه لا ما تعرفه'],
  correct_answer: 0,
  explanation: 'الرمز يصل لجهاز تملكه فهو من عامل الملكية.' },

{ topic: ACC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يضعف رمز الرسالة النصية كعامل ثانٍ؟',
  options: ['إمكان نقل الشريحة لمهاجم', 'طول الرمز وصعوبة حفظه', 'تأخر وصوله بضع ثوان', 'تكرار استعماله لمرة واحدة'],
  correct_answer: 0,
  explanation: 'من ينقل الشريحة يستقبل الرمز بلا اختراق للحساب.' },

{ topic: ACC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز مفتاح المرور عن كلمة المرور؟',
  options: ['لا يُرسَل سرّه للموقع إطلاقاً', 'يُرسَل سرّه مشفَّراً للموقع', 'يُحفَظ في المتصفح كنص', 'يتغيّر تلقائياً كل شهر'],
  correct_answer: 0,
  explanation: 'ما لا يُرسَل لا يُسرَق من موقع مزيّف ولا من تسريب.' },

{ topic: ACC, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يقاوم مفتاح المرور مواقع التصيّد؟',
  options: ['مرتبط بنطاق الموقع الأصلي', 'يطلب رمزاً إضافياً بعده', 'يظهر تحذيراً عند الشك', 'ينتهي بعد دقيقة واحدة'],
  correct_answer: 0,
  explanation: 'الموقع المزيّف بنطاق مختلف لا يقبل به المفتاح.' },

{ topic: ACC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الغرض من ربط الجلسة بالجهاز؟',
  options: ['كشف استعمالها من جهاز آخر', 'تسريع تحميل صفحات الحساب', 'تقليل عدد مرات الدخول', 'رفع سقف التحويل اليومي'],
  correct_answer: 0,
  explanation: 'رمز جلسة مسروق يُستعمَل من جهاز غير الأصلي.' },

{ topic: ACC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما المقصود بسرقة رمز الجلسة؟',
  options: ['استعمال جلسة قائمة بلا كلمة مرور', 'تخمين كلمة مرور الحساب', 'إعادة ضبط كلمة المرور قسراً', 'اعتراض رمز التحقق وحده'],
  correct_answer: 0,
  explanation: 'من ملك الجلسة تجاوز الدخول وعوامله كلها.' },

{ topic: ACC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يعالج إعادة استعمال كلمة المرور نفسها؟',
  options: ['كلمة فريدة لكل خدمة بمدير كلمات', 'كلمة أطول تُستعمَل في الكل', 'تغيير الكلمة كل ثلاثة أشهر', 'إضافة رقم لآخر الكلمة نفسها'],
  correct_answer: 0,
  explanation: 'تسريب خدمة واحدة يفتح كل ما شاركها الكلمة.' },

{ topic: ACC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز حشو بيانات الاعتماد؟',
  options: ['تجربة كلمات مسرَّبة على خدمات أخرى', 'تجربة كل الكلمات الممكنة عشوائياً', 'تخمين كلمة المرور من بيانات العميل', 'إرسال رابط مزيّف لطلب الكلمة'],
  correct_answer: 0,
  explanation: 'المهاجم لا يخمّن بل يعيد استعمال ما تسرّب فعلاً.' },

{ topic: ACC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يكشف حشو بيانات الاعتماد في السجلات؟',
  options: ['محاولات كثيرة بحسابات مختلفة', 'محاولات كثيرة بحساب واحد', 'دخول ناجح من الجهاز المعتاد', 'تغيير كلمة المرور مرة واحدة'],
  correct_answer: 0,
  explanation: 'تعدد الحسابات لا تعدد المحاولات هو العلامة.' },

{ topic: THR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التصيّد الموجَّه عن العام؟',
  options: ['يُصاغ لشخص بعينه ببياناته', 'يُرسَل لآلاف بلا تخصيص', 'يُرسَل رسالة نصية لا بريداً', 'يطلب مبلغاً صغيراً فقط'],
  correct_answer: 0,
  explanation: 'التخصيص يرفع نسبة التصديق كثيراً.' },

{ topic: THR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما المقصود باحتيال أوامر التحويل المزيّفة؟',
  options: ['انتحال مسؤول لطلب تحويل عاجل', 'اعتراض تحويل قائم وتغييره', 'تكرار تحويل واحد مرات', 'إلغاء تحويل بعد تنفيذه'],
  correct_answer: 0,
  explanation: 'العجلة والسلطة عنصران يعطّلان التحقق المعتاد.' },

{ topic: THR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يعالج طلب تحويل عاجل من مسؤول؟',
  options: ['تحقق بقناة أخرى معروفة سلفاً', 'الرد على البريد نفسه للتأكيد', 'تنفيذه ثم إبلاغ الإدارة', 'تأجيله ليوم عمل واحد'],
  correct_answer: 0,
  explanation: 'الرد على البريد نفسه يصل للمهاجم لا للمسؤول.' },

{ topic: THR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز التهديد من الداخل؟',
  options: ['صلاحية مشروعة لغير غرضها', 'اختراق خارجي لجدار الحماية', 'برمجية خبيثة في مرفق بريد', 'ثغرة في تطبيق العميل'],
  correct_answer: 0,
  explanation: 'لا اختراق يُكشَف لأن الوصول نفسه مصرّح به.' },

{ topic: THR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يحدّ من أثر التهديد الداخلي؟',
  options: ['فصل المهام ومراجعة السجلات', 'زيادة صلاحيات كبار الموظفين', 'إلغاء تسجيل عمليات الموظفين', 'الاكتفاء بثقة سنوات الخدمة'],
  correct_answer: 0,
  explanation: 'من ينفّذ لا يعتمد، ومن يعتمد لا ينفّذ.' },

{ topic: THR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما المقصود بمخاطر الطرف الثالث؟',
  options: ['خطر يصل عبر مزوّد متصل بأنظمتك', 'خطر من عميل يستعمل خدمتك', 'خطر من موظف في قسمك', 'خطر من عطل في الكهرباء'],
  correct_answer: 0,
  explanation: 'أمانك لا يزيد عن أضعف من تصله بأنظمتك.' },

{ topic: THR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يقلّل مخاطر مزوّد متصل بأنظمة المؤسسة؟',
  options: ['حصر وصوله بما يلزم ومراقبته', 'الاكتفاء بشهادة أمنية منه', 'منحه وصولاً كاملاً لتسهيل العمل', 'مراجعة عقده مرة كل خمس سنين'],
  correct_answer: 0,
  explanation: 'شهادة على ورق لا تحصر ما يستطيع الوصول إليه.' },

{ topic: THR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز برمجية الفدية؟',
  options: ['تشفّر البيانات وتطلب مقابلاً', 'تنسخ البيانات وتبيعها لغيرك', 'تبطئ الأنظمة بلا ضرر ظاهر', 'تعرض إعلانات مزعجة للموظفين'],
  correct_answer: 0,
  explanation: 'التعطيل نفسه هو أداة الابتزاز.' },

{ topic: THR, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا لا يُعدّ دفع الفدية حلاً موثوقاً؟',
  options: ['لا يضمن الاسترجاع ويشجّع التكرار', 'يستغرق وقتاً أطول من الاستعادة', 'يحتاج موافقة الجهة الرقابية', 'يكشف هوية المهاجم للجميع'],
  correct_answer: 0,
  explanation: 'من عطّل عمداً لا يُوثَق بوعده بالإصلاح.' },

{ topic: THR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز هجوم حجب الخدمة؟',
  options: ['إغراقها حتى تعجز عن الرد', 'سرقة بيانات العملاء منها', 'تعديل أرصدة الحسابات فيها', 'تشفير قواعد بياناتها كلها'],
  correct_answer: 0,
  explanation: 'الهدف تعطيل الوصول لا سرقة المحتوى.' },

{ topic: RES, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما أول خطوة عند اكتشاف اختراق؟',
  options: ['احتواء الأثر ومنع اتساعه', 'إعلان الحادث للعموم', 'استعادة الأنظمة من النسخ', 'تحديد المسؤول عن الخلل'],
  correct_answer: 0,
  explanation: 'الاحتواء يوقف النزيف قبل التحقيق والإصلاح.' },

{ topic: RES, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يسبق الاحتواء الاستعادة؟',
  options: ['استعادة على بيئة مخترقة تُصاب', 'استعادة تحتاج وقتاً أطول منه', 'استعادة تحتاج موافقة رقابية', 'استعادة تكشف هوية المهاجم'],
  correct_answer: 0,
  explanation: 'ما لم يُغلَق الباب لا تنفع إعادة الأثاث.' },

{ topic: RES, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الغرض من حفظ الأدلة أثناء الحادث؟',
  options: ['معرفة ما جرى وإثباته لاحقاً', 'إثبات براءة فريق التقنية', 'تسريع استعادة الخدمة نفسها', 'تقليل كلفة معالجة الحادث'],
  correct_answer: 0,
  explanation: 'استعادة متعجّلة قد تمحو أثر ما جرى.' },

{ topic: RES, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز النسخة الاحتياطية الصالحة للاعتماد؟',
  options: ['معزولة ومُختبَرة الاستعادة', 'حديثة ومتصلة بالشبكة', 'كبيرة الحجم ومضغوطة', 'محفوظة على النظام نفسه'],
  correct_answer: 0,
  explanation: 'نسخة متصلة تُشفَّر مع ما تحميه، وغير مختبَرة قد لا تعود.' },

{ topic: RES, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من تمرين الاستجابة للحوادث؟',
  options: ['كشف الثغرات قبل وقوع الحادث', 'إثبات الالتزام أمام الرقابة', 'تدريب الموظفين على الأنظمة', 'تقليل كلفة التأمين السنوية'],
  correct_answer: 0,
  explanation: 'خطة لم تُجرَّب لا يُعرَف أين تنكسر.' },

{ topic: RES, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجب إبلاغ العملاء به بعد تسريب؟',
  options: ['ما تسرّب وما يفعلونه بعده', 'اسم المهاجم وطريقة اختراقه', 'كلفة الحادث على المؤسسة', 'أسماء الموظفين المسؤولين'],
  correct_answer: 0,
  explanation: 'الإبلاغ يخدم من تضرّر لا من يفضل الصمت.' },

{ topic: RES, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز المراجعة بعد الحادث النافعة؟',
  options: ['تسأل عن الثغرة لا عن المُلام', 'تحدد الموظف المسؤول عنه', 'تُؤجَّل حتى تهدأ الأمور كلها', 'تُحفَظ سرّاً عن بقية الفرق'],
  correct_answer: 0,
  explanation: 'من يُلام يُخفي، فتبقى الثغرة نفسها مفتوحة.' },

{ topic: RES, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالصمود التشغيلي؟',
  options: ['استمرار الخدمات الحرجة رغم العطل', 'منع وقوع أي عطل إطلاقاً', 'سرعة اكتشاف الاختراق وحدها', 'حفظ نسخ كثيرة من البيانات'],
  correct_answer: 0,
  explanation: 'الصمود يفترض وقوع العطل ويخطط لما بعده.' },

{ topic: RES, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يحدد أولوية استعادة الخدمات؟',
  options: ['أثر انقطاع كل خدمة على العملاء', 'ترتيبها الأبجدي في القائمة', 'حجم قاعدة بيانات كل خدمة', 'عمر الخدمة منذ إطلاقها'],
  correct_answer: 0,
  explanation: 'ما يوقف الناس عن أموالهم يُستعاد أولاً.' },

{ topic: RES, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجعل خطة الاستجابة صالحة للتنفيذ؟',
  options: ['أدوار معلومة وقنوات بديلة للاتصال', 'صفحات مفصّلة في ملف واحد', 'موافقة الإدارة العليا عليها', 'مراجعتها مرة عند كتابتها'],
  correct_answer: 0,
  explanation: 'خطة على شبكة معطَّلة لا تُقرأ وقت الحاجة.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: ACC, difficulty: 'medium', type: 'code',
  question: 'هل هذي مصادقة متعددة العوامل؟',
  code_snippet: 'العامل الأول: كلمة مرور\nالعامل الثاني: سؤال سرّي',
  options: ['لا، كلاهما مما تعرفه', 'نعم، عاملان مختلفان', 'نعم، السؤال عامل ملكية', 'لا، لأن الكلمة قصيرة'],
  correct_answer: 0,
  explanation: 'كلمتا مرور عامل واحد مكرر لا عاملان.' },

{ topic: ACC, difficulty: 'hard', type: 'code',
  question: 'ما الذي مكّن المهاجم هنا؟',
  code_snippet: 'الحساب: محمي برمز رسالة نصية\nالمهاجم: نقل شريحة الضحية لجهازه\nالنتيجة: استقبل الرمز ودخل',
  options: ['نقل الشريحة يلتف على العامل الثاني', 'كلمة مرور ضعيفة سهلة التخمين', 'ثغرة في تطبيق المصرف', 'إهمال في تحديث النظام'],
  correct_answer: 0,
  explanation: 'من ينقل الشريحة يستقبل الرمز بلا اختراق للحساب.' },

{ topic: ACC, difficulty: 'hard', type: 'code',
  question: 'لماذا أخفق التصيّد هنا؟',
  code_snippet: 'الموقع المزيّف: نسخة مطابقة للأصل\nالنطاق: يختلف بحرف\nطريقة الدخول: مفتاح مرور',
  options: ['المفتاح مرتبط بنطاق الأصل', 'الموقع بطيء فانصرف العميل', 'المتصفح حجب الصفحة تلقائياً', 'كلمة المرور كانت طويلة'],
  correct_answer: 0,
  explanation: 'الموقع المزيّف بنطاق مختلف لا يقبل به المفتاح.' },

{ topic: ACC, difficulty: 'medium', type: 'code',
  question: 'ما الذي تكشفه هذي السجلات؟',
  code_snippet: 'محاولات دخول: 40,000 في ساعة\nالحسابات المستهدفة: 39,500 حساباً مختلفاً\nمصدر الكلمات: تسريب سابق',
  options: ['حشو بيانات اعتماد مسرَّبة', 'تخمين كلمة حساب واحد', 'عطل في نظام الدخول', 'دخول اعتيادي كثيف'],
  correct_answer: 0,
  explanation: 'تعدد الحسابات لا تعدد المحاولات هو العلامة.' },

{ topic: THR, difficulty: 'medium', type: 'code',
  question: 'ما الإجراء الصحيح هنا؟',
  code_snippet: 'بريد باسم المدير المالي\nالطلب: تحويل عاجل لحساب جديد\nالتوقيت: نهاية يوم الخميس',
  options: ['التحقق بقناة أخرى معروفة سلفاً', 'الرد على البريد لطلب التأكيد', 'التنفيذ ثم الإبلاغ لاحقاً', 'تجاهل الطلب بلا إبلاغ'],
  correct_answer: 0,
  explanation: 'الرد على البريد نفسه يصل للمهاجم لا للمسؤول.' },

{ topic: THR, difficulty: 'hard', type: 'code',
  question: 'ما نوع هذا التسريب؟',
  code_snippet: 'الموظف: صلاحية مشروعة على الملفات\nالاستعمال: نسخ بيانات عملاء لجهة خارجية\nالاختراق: لا يوجد',
  options: ['تهديد داخلي بصلاحية مشروعة', 'اختراق خارجي لجدار الحماية', 'برمجية خبيثة في الشبكة', 'خطأ في إعداد الصلاحيات'],
  correct_answer: 0,
  explanation: 'لا اختراق يُكشَف لأن الوصول نفسه مصرّح به.' },

{ topic: THR, difficulty: 'medium', type: 'code',
  question: 'ما الثغرة التي استُغِلّت هنا؟',
  code_snippet: 'المزوّد: وصول كامل لأنظمة المؤسسة\nالمزوّد: اختُرِق\nالمهاجم: انتقل لأنظمة المؤسسة',
  options: ['وصول مزوّد أوسع مما يلزم', 'كلمة مرور ضعيفة لموظف', 'ثغرة في تطبيق العملاء', 'إهمال في تحديث الخوادم'],
  correct_answer: 0,
  explanation: 'أمانك لا يزيد عن أضعف من تصله بأنظمتك.' },

{ topic: RES, difficulty: 'hard', type: 'code',
  question: 'ما الخلل في هذا الترتيب؟',
  code_snippet: 'اكتُشِف الاختراق\nاستُعيدت الأنظمة من النسخ\nالمهاجم: ما زال في الشبكة',
  options: ['استعادة قبل احتواء الاختراق', 'نسخ احتياطية قديمة جداً', 'بطء في إعلان الحادث للعموم', 'نقص في عدد النسخ المحفوظة'],
  correct_answer: 0,
  explanation: 'ما لم يُغلَق الباب لا تنفع إعادة الأثاث.' },

{ topic: RES, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في هذي النسخ؟',
  code_snippet: 'النسخ الاحتياطية: على الشبكة نفسها\nالفدية: شفّرت النسخ مع الأنظمة\nاختبار الاستعادة: لم يجرِ',
  options: ['نسخ متصلة وغير مختبَرة', 'نسخ كثيرة أكثر من اللازم', 'نسخ قديمة تحتاج تحديثاً', 'نسخ مضغوطة يصعب فتحها'],
  correct_answer: 0,
  explanation: 'نسخة متصلة تُشفَّر مع ما تحميه، وغير مختبَرة قد لا تعود.' },

{ topic: RES, difficulty: 'medium', type: 'code',
  question: 'ما الذي عطّل هذي الخطة؟',
  code_snippet: 'خطة الاستجابة: محفوظة على الشبكة الداخلية\nالحادث: عطّل الشبكة كلها\nقناة اتصال بديلة: غير محددة',
  options: ['خطة لا تُقرأ وقت الحاجة', 'خطة أقصر مما ينبغي لها', 'خطة لم تعتمدها الإدارة', 'خطة كُتِبت قبل سنة كاملة'],
  correct_answer: 0,
  explanation: 'خطة على شبكة معطَّلة لا تُقرأ وقت الحاجة.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: ACC, difficulty: 'easy', type: 'true-false',
  question: 'كلمة مرور وسؤال سرّي يشكّلان عاملين مختلفين.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'كلاهما مما تعرفه، فهو عامل واحد مكرر.' },

{ topic: ACC, difficulty: 'medium', type: 'true-false',
  question: 'مفتاح المرور لا يُرسَل سرّه للموقع إطلاقاً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما لا يُرسَل لا يُسرَق من موقع مزيّف ولا من تسريب.' },

{ topic: ACC, difficulty: 'hard', type: 'true-false',
  question: 'رمز الرسالة النصية عامل ثانٍ لا يُلتفّ عليه.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'من ينقل الشريحة يستقبل الرمز بلا اختراق للحساب.' },

{ topic: ACC, difficulty: 'medium', type: 'true-false',
  question: 'من ملك رمز الجلسة تجاوز الدخول وعوامله كلها.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الجلسة القائمة لا تُطالِب بكلمة مرور من جديد.' },

{ topic: THR, difficulty: 'medium', type: 'true-false',
  question: 'الرد على بريد الطلب المشبوه طريقة سليمة للتحقق.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الرد على البريد نفسه يصل للمهاجم لا للمسؤول.' },

{ topic: THR, difficulty: 'hard', type: 'true-false',
  question: 'التهديد الداخلي يمرّ بلا كشف لأن الوصول مصرّح به.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'لا جدار يمنع من له مفتاح مشروع.' },

{ topic: THR, difficulty: 'medium', type: 'true-false',
  question: 'شهادة أمنية من المزوّد تغني عن حصر وصوله.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'شهادة على ورق لا تحصر ما يستطيع الوصول إليه.' },

{ topic: RES, difficulty: 'medium', type: 'true-false',
  question: 'الاحتواء يسبق الاستعادة في التعامل مع الحادث.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما لم يُغلَق الباب لا تنفع إعادة الأثاث.' },

{ topic: RES, difficulty: 'hard', type: 'true-false',
  question: 'نسخة احتياطية على الشبكة نفسها تحمي من الفدية.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'نسخة متصلة تُشفَّر مع ما تحميه.' },

{ topic: RES, difficulty: 'medium', type: 'true-false',
  question: 'الصمود التشغيلي يفترض وقوع العطل ويخطط لما بعده.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'منع كل عطل وعد لا يفي به أحد.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: ACC, difficulty: 'medium', type: 'matching',
  question: 'صل كل عامل مصادقة بنوعه',
  pairs: [ { left: 'كلمة المرور', right: 'ما تعرفه' }, { left: 'رمز على جهازك', right: 'ما تملكه' }, { left: 'بصمة الوجه', right: 'ما أنت عليه' }, { left: 'سؤال سرّي', right: 'ما تعرفه' } ],
  explanation: 'العاملان يجب أن يختلفا في النوع لا في الشكل.' },

{ topic: ACC, difficulty: 'hard', type: 'matching',
  question: 'صل كل وسيلة دخول بأقوى ما تقاومه',
  pairs: [ { left: 'كلمة مرور وحدها', right: 'لا تقاوم التسريب' }, { left: 'رمز رسالة نصية', right: 'يُلتفّ عليه بنقل الشريحة' }, { left: 'تطبيق مصادقة', right: 'يقاوم نقل الشريحة' }, { left: 'مفتاح مرور', right: 'يقاوم التصيّد' } ],
  explanation: 'كل وسيلة أقوى مما قبلها في نمط هجوم بعينه.' },

{ topic: ACC, difficulty: 'medium', type: 'matching',
  question: 'صل كل هجوم على الحساب بوصفه',
  pairs: [ { left: 'حشو بيانات اعتماد', right: 'كلمات مسرَّبة على خدمات' }, { left: 'سرقة الجلسة', right: 'استعمال جلسة قائمة' }, { left: 'التصيّد', right: 'خداع لتسليم البيانات' }, { left: 'نقل الشريحة', right: 'استقبال رموز الضحية' } ],
  explanation: 'تسمية الهجوم أول خطوة في اختيار الضابط.' },

{ topic: THR, difficulty: 'easy', type: 'matching',
  question: 'صل كل تهديد بما يستهدفه',
  pairs: [ { left: 'الفدية', right: 'توافر الأنظمة' }, { left: 'حجب الخدمة', right: 'وصول العملاء' }, { left: 'التسريب', right: 'سرّية البيانات' }, { left: 'التلاعب بالسجلات', right: 'سلامة البيانات' } ],
  explanation: 'كل تهديد يضرب ركناً من أركان الأمن.' },

{ topic: THR, difficulty: 'hard', type: 'matching',
  question: 'صل كل مصدر خطر بضابطه',
  pairs: [ { left: 'موظف بصلاحية واسعة', right: 'فصل المهام' }, { left: 'مزوّد متصل', right: 'حصر الوصول ومراقبته' }, { left: 'بريد موجَّه', right: 'تحقق بقناة أخرى' }, { left: 'كلمة مكررة', right: 'مدير كلمات مرور' } ],
  explanation: 'لكل مصدر خطر ضابط يخصّه لا يغني عنه غيره.' },

{ topic: THR, difficulty: 'medium', type: 'matching',
  question: 'صل كل نمط احتيال على المؤسسة بعلامته',
  pairs: [ { left: 'أمر تحويل مزيّف', right: 'عجلة وسلطة مدّعاة' }, { left: 'تصيّد موجَّه', right: 'رسالة مفصّلة لشخص' }, { left: 'فاتورة مزوّرة', right: 'حساب مستفيد تغيّر' }, { left: 'انتحال مزوّد', right: 'طلب تحديث بيانات بنكية' } ],
  explanation: 'العلامة تُعرَف قبل التنفيذ لا بعده.' },

{ topic: RES, difficulty: 'medium', type: 'matching',
  question: 'صل كل مرحلة استجابة بمضمونها',
  pairs: [ { left: 'الاحتواء', right: 'منع اتساع الأثر' }, { left: 'التحقيق', right: 'معرفة ما جرى' }, { left: 'الاستعادة', right: 'إعادة الخدمة' }, { left: 'المراجعة', right: 'سدّ الثغرة النظامية' } ],
  explanation: 'الاحتواء يوقف النزيف قبل التحقيق والإصلاح.' },

{ topic: RES, difficulty: 'hard', type: 'matching',
  question: 'صل كل صفة نسخة احتياطية بأثرها',
  pairs: [ { left: 'معزولة عن الشبكة', right: 'تنجو من الفدية' }, { left: 'مختبَرة الاستعادة', right: 'يُوثَق بعودتها' }, { left: 'متصلة بالنظام', right: 'تُشفَّر معه' }, { left: 'غير مختبَرة', right: 'قد لا تعود' } ],
  explanation: 'نسخة لم تُختبَر استعادتها ليست نسخة.' },

{ topic: RES, difficulty: 'medium', type: 'matching',
  question: 'صل كل عنصر في خطة الاستجابة بغرضه',
  pairs: [ { left: 'أدوار معلومة', right: 'لا انتظار للقرار' }, { left: 'قناة بديلة', right: 'اتصال رغم العطل' }, { left: 'أولوية الخدمات', right: 'ما يُستعاد أولاً' }, { left: 'تمرين دوري', right: 'كشف ما ينكسر' } ],
  explanation: 'خطة لم تُجرَّب لا يُعرَف أين تنكسر.' },

{ topic: RES, difficulty: 'medium', type: 'matching',
  question: 'صل كل خطأ في معالجة الحادث بأثره',
  pairs: [ { left: 'استعادة قبل احتواء', right: 'إصابة ثانية' }, { left: 'محو الأدلة', right: 'سبب مجهول' }, { left: 'تأخير إبلاغ العملاء', right: 'ضرر يتسع' }, { left: 'مراجعة تبحث عن مُلام', right: 'ثغرة تبقى' } ],
  explanation: 'أربعة أخطاء تحوّل حادثاً محدوداً إلى أزمة.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: ACC, difficulty: 'easy', type: 'terminal', prompt_label: 'الوسيلة',
  question: 'اكتب اسم الإثبات بعاملين مختلفين النوع',
  expected_answers: ['المصادقة متعددة العوامل', 'المصادقة الثنائية', 'MFA', 'التحقق بخطوتين'],
  explanation: 'كلمتا مرور عامل واحد مكرر لا عاملان.' },

{ topic: ACC, difficulty: 'medium', type: 'terminal', prompt_label: 'البديل',
  question: 'اكتب اسم البديل الذي لا يُرسَل سرّه للموقع',
  expected_answers: ['مفتاح المرور', 'مفتاح مرور', 'passkey', 'مفاتيح المرور'],
  explanation: 'ما لا يُرسَل لا يُسرَق من موقع مزيّف ولا من تسريب.' },

{ topic: ACC, difficulty: 'hard', type: 'terminal', prompt_label: 'الهجوم',
  question: 'اكتب اسم تجربة كلمات مسرَّبة على خدمات أخرى',
  expected_answers: ['حشو بيانات الاعتماد', 'حشو الاعتماد', 'credential stuffing', 'حشو كلمات المرور'],
  explanation: 'المهاجم لا يخمّن بل يعيد استعمال ما تسرّب فعلاً.' },

{ topic: ACC, difficulty: 'medium', type: 'terminal', prompt_label: 'الهجوم',
  question: 'اكتب اسم استعمال جلسة قائمة بلا كلمة مرور',
  expected_answers: ['سرقة الجلسة', 'اختطاف الجلسة', 'session hijacking', 'سرقة رمز الجلسة'],
  explanation: 'من ملك الجلسة تجاوز الدخول وعوامله كلها.' },

{ topic: THR, difficulty: 'medium', type: 'terminal', prompt_label: 'النمط',
  question: 'اكتب اسم التصيّد المصاغ لشخص بعينه ببياناته',
  expected_answers: ['التصيّد الموجَّه', 'التصيد الموجه', 'spear phishing', 'الاصطياد الموجَّه'],
  explanation: 'التخصيص يرفع نسبة التصديق كثيراً.' },

{ topic: THR, difficulty: 'hard', type: 'terminal', prompt_label: 'الخطر',
  question: 'اكتب وصف صلاحية مشروعة تُستعمَل لغير غرضها',
  expected_answers: ['تهديد داخلي', 'التهديد الداخلي', 'insider threat', 'خطر من الداخل'],
  explanation: 'لا اختراق يُكشَف لأن الوصول نفسه مصرّح به.' },

{ topic: THR, difficulty: 'medium', type: 'terminal', prompt_label: 'التهديد',
  question: 'اكتب اسم ما يشفّر البيانات ويطلب مقابلاً',
  expected_answers: ['برمجية الفدية', 'الفدية', 'ransomware', 'برنامج الفدية'],
  explanation: 'التعطيل نفسه هو أداة الابتزاز.' },

{ topic: RES, difficulty: 'medium', type: 'terminal', prompt_label: 'المرحلة',
  question: 'اكتب اسم أول مرحلة عند اكتشاف اختراق',
  expected_answers: ['الاحتواء', 'احتواء الحادث', 'containment', 'الحصر'],
  explanation: 'الاحتواء يوقف النزيف قبل التحقيق والإصلاح.' },

{ topic: RES, difficulty: 'hard', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يجعل النسخة الاحتياطية صالحة للاعتماد',
  expected_answers: ['معزولة ومختبَرة', 'العزل والاختبار', 'اختبار الاستعادة', 'عزلها واختبارها'],
  explanation: 'نسخة متصلة تُشفَّر مع ما تحميه، وغير مختبَرة قد لا تعود.' },

{ topic: RES, difficulty: 'medium', type: 'terminal', prompt_label: 'المفهوم',
  question: 'اكتب اسم استمرار الخدمات الحرجة رغم وقوع عطل',
  expected_answers: ['الصمود التشغيلي', 'المرونة التشغيلية', 'operational resilience', 'الصمود'],
  explanation: 'الصمود يفترض وقوع العطل ويخطط لما بعده.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: ACC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي عاملان مختلفان في النوع؟',
  options: ['كلمة مرور', 'مفتاح مادي بيدك', 'سؤال سرّي', 'كلمة مرور ثانية'],
  correct_answers: [0, 1],
  explanation: 'الأخيران مما تعرفه فهما عامل واحد مكرر.' },

{ topic: ACC, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يقاوم موقع تصيّد مزيّفاً؟',
  options: ['مفتاح مرور مرتبط بالنطاق', 'رفض المتصفح لنطاق غير مطابق', 'رمز رسالة نصية', 'كلمة مرور طويلة'],
  correct_answers: [0, 1],
  explanation: 'الرمز والكلمة يُدخَلان في الموقع المزيّف فيُسرقان.' },

{ topic: ACC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يعالج إعادة استعمال كلمة المرور؟',
  options: ['كلمة فريدة لكل خدمة', 'مدير كلمات مرور', 'إضافة رقم لآخرها', 'استعمالها بأحرف كبيرة'],
  correct_answers: [0, 1],
  explanation: 'تغيير شكل الكلمة لا يجعلها فريدة.' },

{ topic: THR, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي علامة أمر تحويل مزيّف؟',
  options: ['عجلة غير معتادة في الطلب', 'حساب مستفيد تغيّر فجأة', 'طلب موثّق بالإجراء المعتاد', 'مبلغ ضمن الحدود المعلنة'],
  correct_answers: [0, 1],
  explanation: 'العجلة والسلطة عنصران يعطّلان التحقق المعتاد.' },

{ topic: THR, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يحدّ من التهديد الداخلي؟',
  options: ['فصل المهام بين المنفّذ والمعتمِد', 'مراجعة سجلات الوصول', 'توسيع صلاحيات الأقدم', 'إلغاء تسجيل العمليات'],
  correct_answers: [0, 1],
  explanation: 'من ينفّذ لا يعتمد، ومن يعتمد لا ينفّذ.' },

{ topic: THR, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يقلّل مخاطر الطرف الثالث؟',
  options: ['حصر وصوله بما يلزم', 'مراقبة نشاطه في أنظمتك', 'الاكتفاء بشهادته الأمنية', 'منحه وصولاً كاملاً للتسهيل'],
  correct_answers: [0, 1],
  explanation: 'أمانك لا يزيد عن أضعف من تصله بأنظمتك.' },

{ topic: RES, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يُفعَل عند اكتشاف اختراق؟',
  options: ['احتواء الأثر أولاً', 'حفظ الأدلة قبل الاستعادة', 'الاستعادة قبل الاحتواء', 'محو السجلات لتسريع العمل'],
  correct_answers: [0, 1],
  explanation: 'استعادة على بيئة مخترقة تُصاب ثانية.' },

{ topic: RES, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي شرط في نسخة احتياطية يُعتدّ بها؟',
  options: ['معزولة عن الشبكة', 'مُختبَرة الاستعادة', 'محفوظة على النظام نفسه', 'كبيرة الحجم ومضغوطة'],
  correct_answers: [0, 1],
  explanation: 'نسخة متصلة تُشفَّر مع ما تحميه.' },

{ topic: RES, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يُبلَّغ به العميل بعد تسريب؟',
  options: ['ما تسرّب من بياناته', 'ما يفعله لحماية نفسه', 'كلفة الحادث على المؤسسة', 'أسماء الموظفين المسؤولين'],
  correct_answers: [0, 1],
  explanation: 'الإبلاغ يخدم من تضرّر لا من يفضل الصمت.' },

{ topic: RES, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يجعل خطة الاستجابة صالحة؟',
  options: ['أدوار معلومة سلفاً', 'قناة اتصال بديلة', 'طولها وتفصيلها', 'حفظها على الشبكة وحدها'],
  correct_answers: [0, 1],
  explanation: 'خطة على شبكة معطَّلة لا تُقرأ وقت الحاجة.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: ACC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تقوية دخول الحساب',
  options: ['كلمة فريدة بمدير كلمات', 'تفعيل عامل ثانٍ', 'ترقيته لمفتاح مرور', 'مراجعة الأجهزة المتصلة'],
  explanation: 'كل خطوة تسدّ ما لا تسدّه التي قبلها.' },

{ topic: ACC, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التعامل مع حشو بيانات اعتماد',
  options: ['رصد المحاولات وحساباتها', 'حصر الحسابات المتأثرة', 'إجبارها على تغيير الكلمة', 'رفع ضوابط الدخول'],
  explanation: 'تعدد الحسابات لا تعدد المحاولات هو العلامة.' },

{ topic: ACC, difficulty: 'easy', type: 'ordering',
  question: 'رتّب خطوات التحقق من جلسة مشبوهة',
  options: ['مراجعة الأجهزة المتصلة', 'تمييز الجهاز غير المعروف', 'إنهاء جلسته', 'تغيير كلمة المرور'],
  explanation: 'إنهاء الجلسة قبل تغيير الكلمة يمنع بقاءه داخلاً.' },

{ topic: THR, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات التعامل مع طلب تحويل مشبوه',
  options: ['إيقاف التنفيذ مؤقتاً', 'التحقق بقناة أخرى معروفة', 'إبلاغ فريق الأمن', 'توثيق الحالة وإجراءاتها'],
  explanation: 'الإيقاف أولاً لأن التنفيذ لا يُسترد.' },

{ topic: THR, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات ضبط وصول مزوّد خارجي',
  options: ['حصر ما يحتاجه فعلاً', 'منح الحد الأدنى منه', 'مراقبة نشاطه', 'مراجعة الوصول دورياً'],
  explanation: 'شهادة على ورق لا تحصر ما يستطيع الوصول إليه.' },

{ topic: THR, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات الحد من التهديد الداخلي',
  options: ['حصر الصلاحيات الحساسة', 'فصل المنفّذ عن المعتمِد', 'تسجيل العمليات', 'مراجعة السجلات دورياً'],
  explanation: 'من ينفّذ لا يعتمد، ومن يعتمد لا ينفّذ.' },

{ topic: RES, difficulty: 'medium', type: 'ordering',
  question: 'رتّب مراحل الاستجابة للحادث',
  options: ['الاحتواء', 'حفظ الأدلة والتحقيق', 'الاستعادة', 'المراجعة وسدّ الثغرة'],
  explanation: 'الاحتواء يوقف النزيف قبل التحقيق والإصلاح.' },

{ topic: RES, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التعافي من هجوم فدية',
  options: ['عزل الأنظمة المصابة', 'تقييم ما شُفِّر وما نجا', 'الاستعادة من نسخة معزولة', 'التحقق قبل إعادة التشغيل'],
  explanation: 'من عطّل عمداً لا يُوثَق بوعده بالإصلاح.' },

{ topic: RES, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إبلاغ العملاء بتسريب',
  options: ['تحديد ما تسرّب فعلاً', 'تحديد من تضرّر منهم', 'إبلاغهم بما يفعلونه', 'متابعة أثر الحادث عليهم'],
  explanation: 'إبلاغ قبل معرفة ما تسرّب يربك ولا يفيد.' },

{ topic: RES, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء خطة صمود',
  options: ['حصر الخدمات الحرجة', 'تحديد أولوية استعادتها', 'كتابة الأدوار والقنوات', 'تجريبها في تمرين'],
  explanation: 'خطة لم تُجرَّب لا يُعرَف أين تنكسر.' }

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
