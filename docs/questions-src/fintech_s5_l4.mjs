// التقنية المالية · S5 البيانات والتحليل · L4 التنبؤ والنمذجة
// ثلاثة مواضيع: أساس التنبؤ · بناء النموذج وتقييمه · النماذج في القرار المالي
//
// حدود مقصودة: المصادر والجودة L1، والمؤشرات والاتجاه والارتباط L2،
// والعرض واللوحات L3، وذكاء الأعمال والحوكمة L5. ومسار الذكاء الاصطناعي
// يشرح خوارزميات التعلّم نفسها، فالمقصود هنا استعمالها في قرار مالي
// وقراءة حدودها لا اشتقاقها.
//
// الصعوبة: ٥ سهل · ٤٩ متوسط · ٣٦ صعب — مطابق لصف L4.

const T = 'FinTech';
const S = 'Financial Data & Analytics';
const L = 4;

const FCT = 'Forecasting Basics';
const MDL = 'Model Building';
const DEC = 'Models in Decisions';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: FCT, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بالتنبؤ في التحليل المالي؟',
  options: ['تقدير قيمة مستقبلية من نمط', 'وصف ما حدث في فترة ماضية', 'حساب متوسط قيم مسجّلة سلفاً', 'جمع بيانات من مصادر متعددة'],
  correct_answer: 0,
  explanation: 'التنبؤ امتداد لنمط، والوصف قراءة لما مضى.' },

{ topic: FCT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الفرض الذي يقوم عليه كل تنبؤ؟',
  options: ['استمرار ما حكم الماضي في المستقبل', 'ثبات القيم على ما كانت عليه', 'تساوي كل الفترات في الأهمية', 'خلوّ البيانات من أي ضجيج'],
  correct_answer: 0,
  explanation: 'ينكسر التنبؤ حين تتغيّر القواعد لا حين تتغيّر الأرقام.' },

{ topic: FCT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الاتجاه عن الموسمية؟',
  options: ['الأول ميل عام والثانية دورة متكررة', 'الأول دورة متكررة والثانية ميل', 'كلاهما ميل عام بلا دورة', 'كلاهما دورة تتكرر سنوياً'],
  correct_answer: 0,
  explanation: 'الميل يستمر، والدورة تعود في مواعيدها.' },

{ topic: FCT, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يضلّل تجاهل الموسمية في التنبؤ؟',
  options: ['يُقرأ ارتفاع الموسم نمواً دائماً', 'يُقرأ النمو الدائم موسماً عابراً', 'يُلغي أثر الاتجاه العام كلياً', 'يزيد عدد النقاط المطلوبة'],
  correct_answer: 0,
  explanation: 'قفزة الموسم تعود لأصلها بعد انقضائه.' },

{ topic: FCT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بمدى التنبؤ؟',
  options: ['المدة التي يمتد إليها التقدير', 'عدد النقاط في بيانات التدريب', 'الفرق بين أعلى قيمة وأدناها', 'عدد المتغيّرات الداخلة فيه'],
  correct_answer: 0,
  explanation: 'كلما بعد المدى اتسع مجال الخطأ.' },

{ topic: FCT, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يحدث لدقة التنبؤ كلما بعد مداه؟',
  options: ['تنخفض ويتسع مجال عدم اليقين', 'ترتفع لتراكم بيانات أكثر', 'تبقى ثابتة مهما بعد المدى', 'ترتفع ثم تثبت عند حد'],
  correct_answer: 0,
  explanation: 'كل خطوة مستقبلية تُبنى على تقدير قبلها.' },

{ topic: FCT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة عرض مجال التنبؤ لا رقم واحد؟',
  options: ['يبيّن حدود عدم اليقين للقارئ', 'يخفي ضعف النموذج المستعمل', 'يقلّل زمن حساب التنبؤ', 'يزيد عدد المتغيّرات المستعملة'],
  correct_answer: 0,
  explanation: 'رقم واحد يوحي بيقين لا يملكه أي نموذج.' },

{ topic: FCT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز القيمة الشاذة في السلسلة؟',
  options: ['تبتعد كثيراً عن نمط ما حولها', 'تساوي متوسط القيم تماماً', 'تتكرر في كل فترة بانتظام', 'تقع في منتصف مدى القيم'],
  correct_answer: 0,
  explanation: 'الشاذة تُفحَص قبل حذفها فقد تكون الخبر نفسه.' },

{ topic: FCT, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يلزم قبل حذف قيمة شاذة من البيانات؟',
  options: ['معرفة سببها وهل يتكرر', 'التأكد أنها أعلى من غيرها', 'حساب أثرها على المتوسط', 'مقارنتها بقيم فترة أخرى'],
  correct_answer: 0,
  explanation: 'حدث حقيقي متكرر يُنمذَج لا يُحذَف.' },

{ topic: FCT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التنبؤ الجيد عن التخمين؟',
  options: ['طريقة معلنة وخطأ يُقاس', 'ثقة قائله في صحته', 'قربه من رغبة الإدارة', 'تفاؤله بمستقبل النشاط'],
  correct_answer: 0,
  explanation: 'ما لا يُقاس خطؤه لا يمكن تحسينه.' },

{ topic: MDL, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا تُقسَّم البيانات إلى تدريب واختبار؟',
  options: ['لقياس الأداء على ما لم يره', 'لتقليل حجم البيانات المستعملة', 'لتسريع بناء النموذج نفسه', 'لتوحيد وحدات القياس فيها'],
  correct_answer: 0,
  explanation: 'أداء على ما رآه النموذج لا يدل على شيء.' },

{ topic: MDL, difficulty: 'hard', type: 'multiple-choice',
  question: 'كيف تُقسَّم سلسلة زمنية للاختبار؟',
  options: ['الأقدم للتدريب والأحدث للاختبار', 'الأحدث للتدريب والأقدم للاختبار', 'قسمة عشوائية بين المجموعتين', 'قسمة متساوية بلا ترتيب زمني'],
  correct_answer: 0,
  explanation: 'التدريب على المستقبل تسريب لا يقع في الواقع.' },

{ topic: MDL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بفرط المطابقة في النموذج؟',
  options: ['يحفظ ضجيج التدريب فيفشل بغيره', 'يبسّط العلاقة فيفشل في الحالتين', 'يستعمل متغيّرات أقل من اللازم', 'يتدرّب على بيانات قليلة جداً'],
  correct_answer: 0,
  explanation: 'من يحفظ الأمثلة لا يعمّم على غيرها.' },

{ topic: MDL, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما العلامة التي تكشف فرط المطابقة؟',
  options: ['أداء ممتاز بالتدريب وضعيف بالاختبار', 'أداء ضعيف في التدريب والاختبار', 'أداء متقارب في المجموعتين', 'أداء ممتاز في المجموعتين'],
  correct_answer: 0,
  explanation: 'الفجوة بين الأداءين هي الدليل.' },

{ topic: MDL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بتسريب البيانات في النمذجة؟',
  options: ['دخول معلومة لا تُعرَف وقت التنبؤ', 'ضياع جزء من بيانات التدريب', 'نسخ البيانات إلى جهة أخرى', 'خلط وحدات القياس بين الأعمدة'],
  correct_answer: 0,
  explanation: 'أداء مبهر في الاختبار ينهار في التشغيل.' },

{ topic: MDL, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز خط الأساس في تقييم نموذج؟',
  options: ['تقدير بسيط يجب أن يتفوّق عليه', 'أفضل نموذج متاح في السوق', 'متوسط أداء نماذج مشابهة', 'حد أدنى تفرضه الجهة الرقابية'],
  correct_answer: 0,
  explanation: 'نموذج لا يتفوّق على «قيمة الأمس» لا يستحق تشغيله.' },

{ topic: MDL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يقيسه متوسط الخطأ المطلق؟',
  options: ['متوسط بعد التقدير عن الواقع', 'متوسط ما يزيد به عن الواقع', 'نسبة التقديرات فوق الواقع', 'متوسط تشتّت القيم الحقيقية'],
  correct_answer: 0,
  explanation: 'يقيس حجم الخطأ لا اتجاهه.' },

{ topic: MDL, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يكشفه انحياز الأخطاء إلى جهة واحدة؟',
  options: ['النموذج يقدّر أعلى أو أدنى دائماً', 'حجم الخطأ كبير في الاتجاهين', 'البيانات موزّعة توزيعاً طبيعياً', 'عدد النقاط أقل مما يلزم'],
  correct_answer: 0,
  explanation: 'خطأ منحاز يُصحَّح، وخطأ عشوائي يُحتمَل.' },

{ topic: MDL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بانحراف النموذج مع الزمن؟',
  options: ['تغيّر الواقع فيضعف أداء النموذج', 'تغيّر شيفرة النموذج بلا قصد', 'تغيّر أسماء الأعمدة في البيانات', 'تغيّر الجهاز الذي يعمل عليه'],
  correct_answer: 0,
  explanation: 'نموذج بُنِي على واقع مضى يشيخ مع تغيّره.' },

{ topic: MDL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يعالج انحراف النموذج؟',
  options: ['مراقبة أدائه وإعادة تدريبه', 'زيادة عدد متغيّراته فوراً', 'إخفاء نتائجه عن المستخدمين', 'تثبيت بياناته على فترة واحدة'],
  correct_answer: 0,
  explanation: 'ما لا يُراقَب أداؤه يتدهور بلا أن يُعلَم.' },

{ topic: DEC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الارتباط عن السببية؟',
  options: ['الأول تلازم والثاني تأثير مثبت', 'الأول تأثير مثبت والثاني تلازم', 'كلاهما يثبت أن أحدهما سبب', 'كلاهما تلازم بلا دلالة سببية'],
  correct_answer: 0,
  explanation: 'قد يتلازم شيئان بسبب ثالث يجمعهما.' },

{ topic: DEC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما خطر بناء قرار على ارتباط وحده؟',
  options: ['تغيير سبب لا أثر له في النتيجة', 'تأخير القرار حتى تكتمل البيانات', 'ارتفاع كلفة حساب الارتباط', 'صعوبة عرض النتيجة في تقرير'],
  correct_answer: 0,
  explanation: 'التدخّل في متلازم لا سببي لا يغيّر النتيجة.' },

{ topic: DEC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من اختبار الفرضية بتجربة؟',
  options: ['تمييز الأثر الحقيقي عن التلازم', 'زيادة حجم البيانات المتاحة', 'تسريع بناء النموذج التنبؤي', 'تبسيط عرض النتائج للإدارة'],
  correct_answer: 0,
  explanation: 'التجربة تغيّر عاملاً وتثبّت ما عداه.' },

{ topic: DEC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز النموذج القابل للتفسير؟',
  options: ['يُعرَف لماذا أعطى هذي النتيجة', 'يعطي نتيجة أدق من غيره', 'يعمل أسرع من النماذج المعقّدة', 'يحتاج بيانات أقل في تدريبه'],
  correct_answer: 0,
  explanation: 'قرار ائتماني بلا تفسير لا يُدافَع عنه أمام رقابة.' },

{ topic: DEC, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا يهمّ التفسير في القرارات الائتمانية؟',
  options: ['لأن التفسير حق للعميل المرفوض', 'لأن التفسير يرفع دقة النموذج', 'لأن التفسير يقلّل كلفة تشغيله', 'لأن التفسير يسرّع اتخاذ القرار'],
  correct_answer: 0,
  explanation: 'رفض بلا سبب مفهوم لا يُقبَل نظاماً ولا عرفاً.' },

{ topic: DEC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما مصدر التحيّز في نموذج مالي؟',
  options: ['بيانات تعكس تمييزاً وقع سابقاً', 'خوارزمية تنحاز من تلقائها', 'عدد متغيّرات أكبر من اللازم', 'حجم بيانات أصغر من اللازم'],
  correct_answer: 0,
  explanation: 'النموذج يتعلّم ما في البيانات بما فيه الخلل.' },

{ topic: DEC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يكشف تحيّز نموذج ضد فئة؟',
  options: ['قياس أدائه على كل فئة حدة', 'قياس أدائه الكلي وحده', 'مقارنة سرعته بنموذج آخر', 'حساب عدد متغيّراته الداخلة'],
  correct_answer: 0,
  explanation: 'الأداء الكلي يخفي فئة يخطئ فيها النموذج كثيراً.' },

{ topic: DEC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز النموذج الصالح للتشغيل؟',
  options: ['يتفوّق على البديل ويُراقَب أثره', 'يعطي رقماً بدقة عالية جداً', 'يستعمل أحدث الطرق المتاحة', 'يعمل على أكبر حجم بيانات'],
  correct_answer: 0,
  explanation: 'ما لا يُراقَب أثره بعد التشغيل لا يُوثَق به.' },

{ topic: DEC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يوازن بين دقة النموذج وقابلية تفسيره؟',
  options: ['أثر القرار الذي يُبنى عليه', 'حجم البيانات المتاحة له', 'سرعة الجهاز الذي يشغّله', 'عدد من يستعملون نتيجته'],
  correct_answer: 0,
  explanation: 'كلما ثقل أثر القرار وجب أن يُفسَّر أكثر.' },

{ topic: DEC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم عند تعارض نتيجة النموذج مع خبرة الفريق؟',
  options: ['فحص مدخلاته قبل الحكم لأيهما', 'الأخذ بالنموذج لأنه محايد', 'الأخذ بالخبرة لأنها بشرية', 'تجاهل الحالة حتى تتكرر'],
  correct_answer: 0,
  explanation: 'التعارض إشارة تُفحَص لا نزاع يُحسَم بالانحياز.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: MDL, difficulty: 'medium', type: 'code',
  question: 'ما الذي تكشفه هذي القراءة عن النموذج؟',
  code_snippet: 'خطأ التدريب: 2%\nخطأ الاختبار: 27%',
  options: ['فرط مطابقة على بيانات التدريب', 'نقص مطابقة يحتاج تعقيداً', 'أداء متوازن مقبول للتشغيل', 'خطأ في حساب المقياس نفسه'],
  correct_answer: 0,
  explanation: 'الفجوة بين الأداءين هي الدليل.' },

{ topic: MDL, difficulty: 'hard', type: 'code',
  question: 'ما الخلل في هذا التقسيم؟',
  code_snippet: 'البيانات: سلسلة شهرية ٢٠٢٠–٢٠٢٥\nالتقسيم: عشوائي بين تدريب واختبار',
  options: ['تدريب على مستقبل يسرّب المعلومة', 'حجم الاختبار أصغر من اللازم', 'عدد النقاط أقل مما يكفي', 'وحدة القياس غير موحّدة'],
  correct_answer: 0,
  explanation: 'التدريب على المستقبل تسريب لا يقع في الواقع.' },

{ topic: MDL, difficulty: 'hard', type: 'code',
  question: 'ما الذي يفسّر هذا الأداء المبهر؟',
  code_snippet: 'الهدف: التنبؤ بتعثّر العميل\nمن المتغيّرات: «تاريخ إشعار التعثّر»\nدقة الاختبار: 99%',
  options: ['تسريب معلومة لا تُعرَف وقت التنبؤ', 'نموذج ممتاز يستحق التشغيل', 'حجم بيانات كبير جداً للتدريب', 'خطأ في حساب مقياس الدقة'],
  correct_answer: 0,
  explanation: 'أداء مبهر في الاختبار ينهار في التشغيل.' },

{ topic: MDL, difficulty: 'medium', type: 'code',
  question: 'ما الحكم على هذا النموذج؟',
  code_snippet: 'خطأ النموذج: 8.4%\nخطأ خط الأساس «قيمة الأمس»: 8.1%',
  options: ['لا يتفوّق على خط الأساس', 'يتفوّق على خط الأساس بوضوح', 'لا يمكن الحكم بلا بيانات أكثر', 'أداؤه ممتاز يستحق التشغيل'],
  correct_answer: 0,
  explanation: 'نموذج لا يتفوّق على «قيمة الأمس» لا يستحق تشغيله.' },

{ topic: MDL, difficulty: 'hard', type: 'code',
  question: 'ما الذي تكشفه هذي الأخطاء؟',
  code_snippet: 'الأخطاء: +120 · +95 · +140 · +110 · +130\nالاتجاه: كلها موجبة',
  options: ['انحياز يقدّر أعلى من الواقع', 'خطأ عشوائي متوازن الاتجاهين', 'تشتّت واسع بلا اتجاه واضح', 'أداء ممتاز لا يحتاج تصحيحاً'],
  correct_answer: 0,
  explanation: 'خطأ منحاز يُصحَّح، وخطأ عشوائي يُحتمَل.' },

{ topic: DEC, difficulty: 'hard', type: 'code',
  question: 'ما الذي يخفيه هذا الأداء الكلي؟',
  code_snippet: 'الدقة الكلية: 93%\nالفئة أ: 96%\nالفئة ب: 61%',
  options: ['فئة يخطئ فيها النموذج كثيراً', 'خطأ في حساب الدقة الكلية', 'صغر حجم بيانات التدريب', 'تسريب معلومة في المتغيّرات'],
  correct_answer: 0,
  explanation: 'الأداء الكلي يخفي فئة يخطئ فيها النموذج كثيراً.' },

{ topic: DEC, difficulty: 'medium', type: 'code',
  question: 'ما الاستنتاج الصحيح من هذي القراءة؟',
  code_snippet: 'ارتباط بين مبيعات المثلجات وحوادث الغرق: قوي\nالسبب المشترك: حرارة الصيف',
  options: ['تلازم بسبب ثالث لا سببية', 'المثلجات سبب لحوادث الغرق', 'الغرق سبب لبيع المثلجات', 'الارتباط محسوب حساباً خاطئاً'],
  correct_answer: 0,
  explanation: 'قد يتلازم شيئان بسبب ثالث يجمعهما.' },

{ topic: FCT, difficulty: 'medium', type: 'code',
  question: 'ما الذي يفسّر هذا النمط؟',
  code_snippet: 'الإيراد يرتفع كل ديسمبر\nثم يعود لمستواه في يناير\nويتكرر ذلك أربع سنوات',
  options: ['موسمية متكررة لا نمو دائم', 'نمو دائم في الإيراد', 'قيم شاذة يجب حذفها', 'انحراف في مصدر البيانات'],
  correct_answer: 0,
  explanation: 'قفزة الموسم تعود لأصلها بعد انقضائه.' },

{ topic: FCT, difficulty: 'hard', type: 'code',
  question: 'ما الذي يلزم قبل حذف هذي القيمة؟',
  code_snippet: 'قيمة شاذة: قفزة في مارس\nالسبب: حملة تسويقية تتكرر سنوياً',
  options: ['إبقاؤها ونمذجتها لأنها تتكرر', 'حذفها لأنها تشوّه المتوسط', 'استبدالها بمتوسط الشهور', 'تجاهل الشهر كله في التدريب'],
  correct_answer: 0,
  explanation: 'حدث حقيقي متكرر يُنمذَج لا يُحذَف.' },

{ topic: DEC, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا التغيّر؟',
  code_snippet: 'دقة النموذج عند الإطلاق: 91%\nبعد ثمانية أشهر: 74%\nالشيفرة: لم تتغيّر',
  options: ['انحراف النموذج لتغيّر الواقع', 'خطأ برمجي طرأ على النموذج', 'نقص في بيانات التدريب الأصلية', 'تغيّر في مقياس الدقة نفسه'],
  correct_answer: 0,
  explanation: 'نموذج بُنِي على واقع مضى يشيخ مع تغيّره.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: FCT, difficulty: 'medium', type: 'true-false',
  question: 'دقة التنبؤ تتحسّن كلما بعد مداه الزمني.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'كل خطوة مستقبلية تُبنى على تقدير قبلها فيتسع الخطأ.' },

{ topic: FCT, difficulty: 'medium', type: 'true-false',
  question: 'كل تنبؤ يفترض استمرار ما حكم الماضي.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ينكسر التنبؤ حين تتغيّر القواعد لا حين تتغيّر الأرقام.' },

{ topic: FCT, difficulty: 'easy', type: 'true-false',
  question: 'القيمة الشاذة تُحذَف مباشرة لأنها تشوّه النتيجة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'حدث حقيقي متكرر يُنمذَج لا يُحذَف.' },

{ topic: MDL, difficulty: 'medium', type: 'true-false',
  question: 'أداء النموذج على بيانات تدريبه دليل كافٍ على جودته.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'أداء على ما رآه النموذج لا يدل على شيء.' },

{ topic: MDL, difficulty: 'hard', type: 'true-false',
  question: 'تقسيم السلسلة الزمنية عشوائياً يسرّب المستقبل للتدريب.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'التدريب على المستقبل تسريب لا يقع في الواقع.' },

{ topic: MDL, difficulty: 'medium', type: 'true-false',
  question: 'نموذج لا يتفوّق على خط الأساس يستحق التشغيل.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'نموذج لا يتفوّق على «قيمة الأمس» لا يستحق تشغيله.' },

{ topic: MDL, difficulty: 'medium', type: 'true-false',
  question: 'انحراف النموذج يعالَج بمراقبة أدائه وإعادة تدريبه.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما لا يُراقَب أداؤه يتدهور بلا أن يُعلَم.' },

{ topic: DEC, difficulty: 'medium', type: 'true-false',
  question: 'الارتباط القوي بين متغيّرين يثبت أن أحدهما سبب الآخر.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'قد يتلازم شيئان بسبب ثالث يجمعهما.' },

{ topic: DEC, difficulty: 'hard', type: 'true-false',
  question: 'تحيّز النموذج مصدره غالباً بيانات تعكس خللاً سابقاً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'النموذج يتعلّم ما في البيانات بما فيه الخلل.' },

{ topic: DEC, difficulty: 'medium', type: 'true-false',
  question: 'الأداء الكلي قد يخفي فئة يخطئ فيها النموذج كثيراً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الأداء الكلي يخفي فئة يخطئ فيها النموذج كثيراً.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: FCT, difficulty: 'medium', type: 'matching',
  question: 'صل كل مكوّن في السلسلة الزمنية بوصفه',
  pairs: [ { left: 'الاتجاه', right: 'ميل عام مستمر' }, { left: 'الموسمية', right: 'دورة تعود بمواعيد' }, { left: 'الشذوذ', right: 'قيمة بعيدة عن النمط' }, { left: 'الضجيج', right: 'تذبذب بلا معنى' } ],
  explanation: 'فصل المكوّنات أول خطوة في قراءة السلسلة.' },

{ topic: FCT, difficulty: 'hard', type: 'matching',
  question: 'صل كل حالة بالتصرّف الصحيح فيها',
  pairs: [ { left: 'شذوذ يتكرر سنوياً', right: 'يُنمذَج لا يُحذَف' }, { left: 'خطأ إدخال واضح', right: 'يُصحَّح أو يُحذَف' }, { left: 'حدث استثنائي مرة', right: 'يُوسَم ويُستثنى' }, { left: 'تذبذب صغير', right: 'يُحتمَل كضجيج' } ],
  explanation: 'الشاذة تُفحَص قبل حذفها فقد تكون الخبر نفسه.' },

{ topic: FCT, difficulty: 'medium', type: 'matching',
  question: 'صل كل مدى تنبؤ بما يناسبه',
  pairs: [ { left: 'أيام', right: 'قرار تشغيلي' }, { left: 'أشهر', right: 'تخطيط موازنة' }, { left: 'سنوات', right: 'توجّه استراتيجي' }, { left: 'كلما بعد المدى', right: 'اتسع مجال الخطأ' } ],
  explanation: 'مدى التنبؤ يتبع أفق القرار المبني عليه.' },

{ topic: MDL, difficulty: 'medium', type: 'matching',
  question: 'صل كل مجموعة بيانات بدورها',
  pairs: [ { left: 'التدريب', right: 'يتعلّم منها النموذج' }, { left: 'الاختبار', right: 'يُقاس بها أداؤه' }, { left: 'خط الأساس', right: 'يُقارَن به' }, { left: 'بيانات التشغيل', right: 'يُراقَب عليها' } ],
  explanation: 'خلط الأدوار يفسد الحكم على النموذج.' },

{ topic: MDL, difficulty: 'hard', type: 'matching',
  question: 'صل كل عيب في النمذجة بعلامته',
  pairs: [ { left: 'فرط المطابقة', right: 'فجوة بين التدريب والاختبار' }, { left: 'نقص المطابقة', right: 'ضعف في المجموعتين' }, { left: 'تسريب البيانات', right: 'دقة تنهار بالتشغيل' }, { left: 'الانحراف', right: 'تدهور تدريجي بالزمن' } ],
  explanation: 'لكل عيب أثر يظهر في مكان مختلف.' },

{ topic: MDL, difficulty: 'medium', type: 'matching',
  question: 'صل كل مقياس بما يقوله عن الخطأ',
  pairs: [ { left: 'متوسط الخطأ المطلق', right: 'حجم الخطأ' }, { left: 'إشارة الأخطاء', right: 'اتجاه الانحياز' }, { left: 'تشتّت الأخطاء', right: 'ثبات الأداء' }, { left: 'خطأ خط الأساس', right: 'مرجع للمقارنة' } ],
  explanation: 'مقياس واحد لا يصف الخطأ وصفاً كافياً.' },

{ topic: DEC, difficulty: 'medium', type: 'matching',
  question: 'صل كل مفهوم بما يثبته',
  pairs: [ { left: 'الارتباط', right: 'تلازم في الحركة' }, { left: 'السببية', right: 'أثر مثبت بتجربة' }, { left: 'السبب الثالث', right: 'تلازم بلا تأثير' }, { left: 'التجربة المضبوطة', right: 'عزل أثر عامل' } ],
  explanation: 'قد يتلازم شيئان بسبب ثالث يجمعهما.' },

{ topic: DEC, difficulty: 'hard', type: 'matching',
  question: 'صل كل قرار بما يحتاجه من النموذج',
  pairs: [ { left: 'رفض تمويل', right: 'تفسير للسبب' }, { left: 'ترتيب عروض', right: 'دقة تكفي' }, { left: 'إيقاف حساب', right: 'مراجعة بشرية' }, { left: 'اقتراح منتج', right: 'أثر قابل للقياس' } ],
  explanation: 'كلما ثقل أثر القرار وجب أن يُفسَّر أكثر.' },

{ topic: DEC, difficulty: 'medium', type: 'matching',
  question: 'صل كل مصدر خلل بأثره في النموذج',
  pairs: [ { left: 'بيانات منحازة', right: 'قرار يظلم فئة' }, { left: 'متغيّر مسرَّب', right: 'أداء لا يصمد' }, { left: 'واقع متغيّر', right: 'انحراف تدريجي' }, { left: 'هدف سيّئ التعريف', right: 'نموذج يحلّ غير المشكلة' } ],
  explanation: 'أكثر عيوب النماذج مصدره ما قبلها لا هي.' },

{ topic: DEC, difficulty: 'medium', type: 'matching',
  question: 'صل كل ممارسة حوكمة بغرضها',
  pairs: [ { left: 'قياس الأداء بالفئات', right: 'كشف تحيّز خفي' }, { left: 'توثيق المتغيّرات', right: 'تفسير القرار' }, { left: 'مراقبة بعد التشغيل', right: 'كشف الانحراف' }, { left: 'مراجعة بشرية', right: 'ضبط الحالات الثقيلة' } ],
  explanation: 'أربع ممارسات تجعل النموذج قابلاً للمساءلة.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: FCT, difficulty: 'easy', type: 'terminal', prompt_label: 'المكوّن',
  question: 'اكتب اسم الدورة التي تعود في مواعيد ثابتة',
  expected_answers: ['الموسمية', 'الموسميه', 'seasonality', 'التأثير الموسمي'],
  explanation: 'الميل يستمر، والدورة تعود في مواعيدها.' },

{ topic: FCT, difficulty: 'medium', type: 'terminal', prompt_label: 'المدى',
  question: 'اكتب اسم المدة التي يمتد إليها التقدير',
  expected_answers: ['مدى التنبؤ', 'أفق التنبؤ', 'forecast horizon', 'الأفق الزمني'],
  explanation: 'كلما بعد المدى اتسع مجال الخطأ.' },

{ topic: FCT, difficulty: 'medium', type: 'terminal', prompt_label: 'العرض',
  question: 'اكتب ما يُعرَض مع التنبؤ ليبيّن عدم اليقين',
  expected_answers: ['مجال التنبؤ', 'المجال', 'فترة الثقة', 'حدود التنبؤ'],
  explanation: 'رقم واحد يوحي بيقين لا يملكه أي نموذج.' },

{ topic: MDL, difficulty: 'medium', type: 'terminal', prompt_label: 'العيب',
  question: 'اكتب اسم حفظ النموذج لضجيج التدريب',
  expected_answers: ['فرط المطابقة', 'الإفراط في المطابقة', 'overfitting', 'فرط التخصيص'],
  explanation: 'من يحفظ الأمثلة لا يعمّم على غيرها.' },

{ topic: MDL, difficulty: 'hard', type: 'terminal', prompt_label: 'الخلل',
  question: 'اكتب اسم دخول معلومة لا تُعرَف وقت التنبؤ',
  expected_answers: ['تسريب البيانات', 'التسريب', 'data leakage', 'تسرب البيانات'],
  explanation: 'أداء مبهر في الاختبار ينهار في التشغيل.' },

{ topic: MDL, difficulty: 'medium', type: 'terminal', prompt_label: 'المرجع',
  question: 'اكتب اسم التقدير البسيط الذي يجب تجاوزه',
  expected_answers: ['خط الأساس', 'الأساس', 'baseline', 'النموذج الأساس'],
  explanation: 'نموذج لا يتفوّق على «قيمة الأمس» لا يستحق تشغيله.' },

{ topic: MDL, difficulty: 'hard', type: 'terminal', prompt_label: 'الظاهرة',
  question: 'اكتب اسم تدهور أداء النموذج لتغيّر الواقع',
  expected_answers: ['الانحراف', 'انحراف النموذج', 'drift', 'انحراف البيانات'],
  explanation: 'نموذج بُنِي على واقع مضى يشيخ مع تغيّره.' },

{ topic: DEC, difficulty: 'medium', type: 'terminal', prompt_label: 'التمييز',
  question: 'اكتب اسم ما يثبت الأثر لا مجرد التلازم',
  expected_answers: ['السببية', 'العلاقة السببية', 'causation', 'الأثر السببي'],
  explanation: 'قد يتلازم شيئان بسبب ثالث يجمعهما.' },

{ topic: DEC, difficulty: 'hard', type: 'terminal', prompt_label: 'الفحص',
  question: 'اكتب ما يكشف تحيّز النموذج ضد فئة بعينها',
  expected_answers: ['قياس الأداء بالفئات', 'تفصيل الأداء', 'الأداء لكل فئة', 'تجزئة الأداء'],
  explanation: 'الأداء الكلي يخفي فئة يخطئ فيها النموذج كثيراً.' },

{ topic: DEC, difficulty: 'medium', type: 'terminal', prompt_label: 'الصفة',
  question: 'اكتب صفة النموذج الذي يُعرَف سبب نتيجته',
  expected_answers: ['قابل للتفسير', 'قابلية التفسير', 'interpretable', 'مفسَّر'],
  explanation: 'قرار ائتماني بلا تفسير لا يُدافَع عنه أمام رقابة.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: FCT, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يُقرأ في سلسلة زمنية؟',
  options: ['الاتجاه العام', 'الدورة الموسمية', 'عدد أعمدة الجدول', 'اسم مصدر البيانات'],
  correct_answers: [0, 1],
  explanation: 'الأخيران وصف للملف لا للسلسلة.' },

{ topic: FCT, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يلزم قبل التصرّف بقيمة شاذة؟',
  options: ['معرفة سببها', 'معرفة هل تتكرر', 'مقارنتها بالمتوسط', 'حساب أثرها في الرسم'],
  correct_answers: [0, 1],
  explanation: 'حدث حقيقي متكرر يُنمذَج لا يُحذَف.' },

{ topic: FCT, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن مدى التنبؤ؟',
  options: ['يتبع أفق القرار المبني عليه', 'كلما بعد اتسع مجال الخطأ', 'كلما بعد ارتفعت دقته', 'يحدده حجم الملف المستعمل'],
  correct_answers: [0, 1],
  explanation: 'كل خطوة مستقبلية تُبنى على تقدير قبلها.' },

{ topic: MDL, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يكشف فرط المطابقة؟',
  options: ['فجوة بين التدريب والاختبار', 'أداء ينهار على بيانات جديدة', 'أداء ضعيف في المجموعتين', 'زمن تدريب أطول من المعتاد'],
  correct_answers: [0, 1],
  explanation: 'الثالث علامة نقص مطابقة لا فرطها.' },

{ topic: MDL, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يمنع تسريب البيانات؟',
  options: ['استبعاد ما لا يُعرَف وقت التنبؤ', 'تقسيم زمني يحترم ترتيب الوقت', 'زيادة حجم بيانات التدريب', 'استعمال نموذج أبسط'],
  correct_answers: [0, 1],
  explanation: 'الحجم والبساطة لا يعالجان متغيّراً مسرَّباً.' },

{ topic: MDL, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يُقيَّم به نموذج قبل تشغيله؟',
  options: ['أداؤه على بيانات لم يرها', 'تفوّقه على خط الأساس', 'حداثة الطريقة المستعملة', 'عدد المتغيّرات الداخلة فيه'],
  correct_answers: [0, 1],
  explanation: 'الحداثة والعدد لا يقولان شيئاً عن النفع.' },

{ topic: DEC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يميّز السببية عن الارتباط؟',
  options: ['أثر يثبت بتجربة مضبوطة', 'تغيّر النتيجة بتغيير السبب', 'تحرّك المتغيّرين معاً', 'ارتفاع معامل الارتباط'],
  correct_answers: [0, 1],
  explanation: 'الأخيران وصف للتلازم لا إثبات للأثر.' },

{ topic: DEC, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي من حوكمة النماذج المالية؟',
  options: ['قياس الأداء لكل فئة', 'مراقبة الأثر بعد التشغيل', 'إخفاء المتغيّرات المستعملة', 'الاكتفاء بالأداء الكلي'],
  correct_answers: [0, 1],
  explanation: 'الأخيران يمنعان كشف الخلل لا يعالجانه.' },

{ topic: DEC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يستوجب نموذجاً قابلاً للتفسير؟',
  options: ['رفض طلب تمويل', 'إيقاف حساب عميل', 'ترتيب اقتراحات عرض', 'اختيار لون واجهة'],
  correct_answers: [0, 1],
  explanation: 'كلما ثقل أثر القرار وجب أن يُفسَّر أكثر.' },

{ topic: DEC, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُفعَل عند تعارض النموذج مع الخبرة؟',
  options: ['فحص مدخلات النموذج', 'فحص أساس رأي الخبرة', 'الأخذ بالنموذج لحياده', 'الأخذ بالخبرة لبشريتها'],
  correct_answers: [0, 1],
  explanation: 'التعارض إشارة تُفحَص لا نزاع يُحسَم بالانحياز.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: FCT, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء تنبؤ لسلسلة زمنية',
  options: ['فحص السلسلة ومكوّناتها', 'معالجة الشذوذ والنواقص', 'بناء التقدير ومداه', 'عرضه بمجال عدم يقينه'],
  explanation: 'المجال يُعرَض مع التقدير لا بعده بطلب.' },

{ topic: FCT, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التصرّف بقيمة شاذة',
  options: ['رصدها في السلسلة', 'البحث عن سببها', 'تحديد هل تتكرر', 'نمذجتها أو استثناؤها'],
  explanation: 'الحكم عليها آخر خطوة بعد معرفة سببها.' },

{ topic: FCT, difficulty: 'easy', type: 'ordering',
  question: 'رتّب خطوات فصل مكوّنات السلسلة',
  options: ['رسم السلسلة كاملة', 'تمييز الميل العام', 'تمييز الدورة المتكررة', 'ما تبقّى يُعدّ ضجيجاً'],
  explanation: 'ما لا يفسّره الميل ولا الدورة هو الضجيج.' },

{ topic: MDL, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تقييم نموذج',
  options: ['تقسيم البيانات زمنياً', 'التدريب على الأقدم', 'القياس على الأحدث', 'المقارنة بخط الأساس'],
  explanation: 'المقارنة بخط الأساس هي ما يحسم نفع النموذج.' },

{ topic: MDL, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تشخيص أداء منهار في التشغيل',
  options: ['مقارنة أداء التشغيل بالاختبار', 'فحص المتغيّرات المسرَّبة', 'فحص تغيّر الواقع', 'تصحيح أو إعادة تدريب'],
  explanation: 'التسريب يُفحَص قبل الانحراف لأنه عيب أصلي.' },

{ topic: MDL, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات معالجة انحراف نموذج',
  options: ['رصد تدهور الأداء', 'تحديد ما تغيّر في الواقع', 'إعادة التدريب ببيانات حديثة', 'التحقق من عودة الأداء'],
  explanation: 'ما لا يُراقَب أداؤه يتدهور بلا أن يُعلَم.' },

{ topic: DEC, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التحقق من علاقة سببية',
  options: ['رصد التلازم بين المتغيّرين', 'اقتراح آلية تفسّر الأثر', 'استبعاد سبب ثالث محتمل', 'اختبار الأثر بتجربة'],
  explanation: 'التجربة آخر ما يحسم، وما قبلها تمهيد لها.' },

{ topic: DEC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات فحص عدل نموذج',
  options: ['تحديد الفئات المعنيّة', 'قياس أدائه على كل فئة', 'مقارنة الفروق بينها', 'معالجة الفجوة المكتشَفة'],
  explanation: 'الأداء الكلي يخفي فئة يخطئ فيها النموذج كثيراً.' },

{ topic: DEC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إدخال نموذج في قرار مالي',
  options: ['تحديد القرار وأثره', 'اختيار مستوى التفسير اللازم', 'تشغيله على شريحة محدودة', 'قياس أثره قبل التعميم'],
  explanation: 'التعميم بعد قياس الأثر لا قبله.' },

{ topic: DEC, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التعامل مع تعارض النموذج والخبرة',
  options: ['توثيق حالة التعارض', 'فحص مدخلات النموذج', 'فحص أساس رأي الخبرة', 'تعديل ما ثبت خطؤه'],
  explanation: 'التعارض إشارة تُفحَص لا نزاع يُحسَم بالانحياز.' }

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
