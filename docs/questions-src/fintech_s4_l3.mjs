// التقنية المالية · S4 البلوكشين والأصول الرقمية · L3 العملات الرقمية
// ثلاثة مواضيع: أنواع الأصول الرقمية · المعروض والقيمة · منصات التبادل
//
// حدود مقصودة: بنية الكتل والشفافية موضع L1، والإجماع والتعدين والرسوم
// والانقسامات موضع L2، والعقود الذكية موضع L4، والمحافظ والمفاتيح والأمن
// موضع L5. والتمويل اللامركزي وعملات البنوك المركزية أقسام كاملة في S7،
// فلا تُستبق هنا.
//
// الصعوبة: ١٣ سهل · ٥٤ متوسط · ٢٣ صعب — مطابق لصف L3.

const T = 'FinTech';
const S = 'Blockchain & Digital Assets';
const L = 3;

const TYP = 'Asset Types';
const VAL = 'Supply and Value';
const EXC = 'Exchanges';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: TYP, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بالأصل الرقمي؟',
  options: ['قيمة تُملَك وتُنقَل رقمياً', 'ملف صورة يُحفَظ بالجهاز', 'رقم حساب في بنك رقمي', 'برنامج يُشترى مرة واحدة'],
  correct_answer: 0,
  explanation: 'ما يُملَك ويُنقَل هو الأصل، لا كل ما هو رقمي.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الفرق بين العملة الأصلية والرمز المُصدَر عليها؟',
  options: ['الأولى للشبكة والثاني فوقها', 'الأولى فوق الشبكة والثاني لها', 'كلاهما يُصدِره بنك مركزي', 'كلاهما يعمل بلا شبكة أصلاً'],
  correct_answer: 0,
  explanation: 'الشبكة لها عملتها، وغيرها يُصدَر فوقها بعقد.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز العملة المستقرة؟',
  options: ['قيمتها مربوطة بأصل مرجعي', 'قيمتها ترتفع كل عام بنسبة', 'قيمتها تحددها الشبكة يومياً', 'قيمتها ثابتة بلا أي غطاء'],
  correct_answer: 0,
  explanation: 'الاستقرار مستمَدّ من المرجع لا من الشبكة.' },

{ topic: TYP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يحدد مصداقية عملة مستقرة مغطّاة؟',
  options: ['احتياطي معلن يُدقَّق دورياً', 'وعد مُصدِرها بالحفاظ عليها', 'كثرة من يتداولونها يومياً', 'إدراجها في منصات كثيرة'],
  correct_answer: 0,
  explanation: 'الغطاء الذي لا يُدقَّق دعوى لا ضمانة.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الرمز غير القابل للاستبدال؟',
  options: ['وحدة فريدة لا تُبادَل بمثلها', 'وحدة تُبادَل بمثلها تماماً', 'وحدة تُقسَّم إلى أجزاء صغيرة', 'وحدة تُصدِرها الشبكة تلقائياً'],
  correct_answer: 0,
  explanation: 'التفرّد هو ما يمنع مبادلته بمثله.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بقابلية الاستبدال في الأصل؟',
  options: ['أن تعادل كل وحدة غيرها تماماً', 'أن تختلف كل وحدة عن غيرها', 'أن يُستبدَل الأصل بنقد فوراً', 'أن تُنقَل الوحدة بلا رسوم'],
  correct_answer: 0,
  explanation: 'تساوي الوحدات شرط استعمالها وسيطاً للتبادل.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز رمز المنفعة عن رمز الحوكمة؟',
  options: ['الأول يشتري خدمة والثاني يصوّت', 'الأول يصوّت والثاني يشتري خدمة', 'كلاهما يمنح حصة في الأرباح', 'كلاهما يمنح حق التصويت وحده'],
  correct_answer: 0,
  explanation: 'المنفعة استعمال، والحوكمة رأي في القرار.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجعل الرمز أقرب للورقة المالية تنظيمياً؟',
  options: ['توقّع ربح من جهد غيرك', 'استعماله لشراء خدمة الشبكة', 'ندرته المبرمَجة في الشبكة', 'تداوله في منصات عالمية'],
  correct_answer: 0,
  explanation: 'التوقّع والاعتماد على جهد المُصدِر جوهر التكييف.' },

{ topic: TYP, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الذي يمثّله الرمز المرتبط بأصل واقعي؟',
  options: ['حق في أصل خارج الشبكة', 'حق في عملة الشبكة نفسها', 'حصة في أرباح المنصة', 'وحدة قياس داخل الشبكة'],
  correct_answer: 0,
  explanation: 'الرمز تمثيل، وقيمته من الأصل الذي وراءه.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما خطر الرمز الممثّل لأصل واقعي؟',
  options: ['قد يغيب الأصل رغم بقاء الرمز', 'قد يزيد الأصل ولا يزيد الرمز', 'قد يُنقَل الرمز بلا شبكة', 'قد يُقسَّم الرمز إلى أجزاء'],
  correct_answer: 0,
  explanation: 'الشبكة تضمن الرمز ولا تضمن ما وراءه.' },

{ topic: VAL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالمعروض الأقصى للعملة؟',
  options: ['أكثر ما يمكن إصداره منها', 'ما صدر منها حتى اليوم', 'ما يُتداوَل منها فعلاً', 'ما يملكه مُصدِرها وحده'],
  correct_answer: 0,
  explanation: 'حد الإصدار غير المُصدَر وغير المتداول.' },

{ topic: VAL, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الفرق بين المعروض المتداول والمعروض الكلي؟',
  options: ['الأول متاح والثاني يشمل المجمَّد', 'الأول يشمل المجمَّد والثاني متاح', 'كلاهما يساوي المعروض الأقصى', 'كلاهما يتغيّر بسعر السوق'],
  correct_answer: 0,
  explanation: 'المجمَّد موجود ولا يضغط على السوق اليوم.' },

{ topic: VAL, difficulty: 'medium', type: 'multiple-choice',
  question: 'كيف تُحسَب القيمة السوقية للأصل الرقمي؟',
  options: ['السعر مضروباً في المتداول', 'السعر مضروباً في الأقصى', 'السعر مقسوماً على المتداول', 'مجموع أسعار يوم كامل'],
  correct_answer: 0,
  explanation: 'ما ليس متداولاً لا يدخل في القيمة الحالية.' },

{ topic: VAL, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يضلّل السعر وحده عند مقارنة أصلين؟',
  options: ['لاختلاف عدد الوحدات بينهما', 'لاختلاف شبكتيهما تقنياً', 'لاختلاف منصات تداولهما', 'لاختلاف رسوم نقلهما'],
  correct_answer: 0,
  explanation: 'سعر الوحدة بلا عددها لا يقول شيئاً عن الحجم.' },

{ topic: VAL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يفسّر تقلّب سعر أصل رقمي بحدّة؟',
  options: ['سيولة ضحلة وطلب متغيّر', 'سيولة عميقة وطلب ثابت', 'معروض ثابت وطلب ثابت', 'إدراجه في منصة واحدة فقط'],
  correct_answer: 0,
  explanation: 'أمر واحد كبير يحرّك سوقاً ضحلة كثيراً.' },

{ topic: VAL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بعمق السوق؟',
  options: ['حجم الأوامر القريبة من السعر', 'عدد المنصات المُدرِجة للأصل', 'عمر الأصل منذ إصداره', 'عدد المحافظ التي تملكه'],
  correct_answer: 0,
  explanation: 'كلما كثرت الأوامر القريبة قلّ أثر الأمر الواحد.' },

{ topic: VAL, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما أثر تركّز الملكية في عدد قليل من المحافظ؟',
  options: ['تحرّك واحد منها يقلب السعر', 'استقرار أكبر في السعر', 'زيادة في عمق السوق', 'انخفاض في رسوم التداول'],
  correct_answer: 0,
  explanation: 'من يملك الكثير يستطيع تحريك السوق ببيع واحد.' },

{ topic: VAL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يسند قيمة أصل رقمي بلا غطاء؟',
  options: ['ندرته وقبول الناس به', 'ضمان جهة رقابية له', 'احتياطي معلن ومُدقَّق', 'تعهّد مُصدِره بشرائه'],
  correct_answer: 0,
  explanation: 'قيمته اتفاقية: ندرة يقابلها قبول.' },

{ topic: VAL, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بالسيولة في سوق الأصول الرقمية؟',
  options: ['سهولة البيع بسعر قريب', 'سرعة الشبكة في التأكيد', 'عدد الوحدات المُصدَرة', 'حجم رسوم كل عملية'],
  correct_answer: 0,
  explanation: 'السيولة قدرة على الخروج بلا خصم كبير.' },

{ topic: VAL, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الانزلاق السعري؟',
  options: ['فرق بين السعر المتوقع والمنفَّذ', 'فرق بين منصتين في السعر', 'فرق بين العرض والطلب عدداً', 'فرق بين رسوم منصتين'],
  correct_answer: 0,
  explanation: 'الأمر الكبير يأكل مستويات السعر فيتغيّر متوسطه.' },

{ topic: EXC, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما وظيفة منصة تبادل الأصول الرقمية؟',
  options: ['تجمع أوامر البيع والشراء', 'تصدر عملات جديدة للشبكة', 'تؤكد المعاملات على الشبكة', 'تحدد سعر الأصل رسمياً'],
  correct_answer: 0,
  explanation: 'المنصة سوق تلتقي فيه الأوامر لا مُصدِر ولا مؤكِّد.' },

{ topic: EXC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الفرق بين أمر السوق وأمر الحد؟',
  options: ['الأول ينفَّذ فوراً والثاني بسعرك', 'الأول ينفَّذ بسعرك والثاني فوراً', 'كلاهما ينفَّذ بسعر محدد سلفاً', 'كلاهما ينتظر موافقة المنصة'],
  correct_answer: 0,
  explanation: 'السرعة مقابل السعر: تختار أحدهما لا كليهما.' },

{ topic: EXC, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بدفتر الأوامر؟',
  options: ['سجل أوامر الشراء والبيع القائمة', 'سجل المعاملات المؤكَّدة بالشبكة', 'سجل عملاء المنصة وأرصدتهم', 'سجل رسوم المنصة الشهرية'],
  correct_answer: 0,
  explanation: 'ما لم يُنفَّذ بعد يبقى في الدفتر منتظراً.' },

{ topic: EXC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يعنيه اتساع الفارق بين أفضل عرض وطلب؟',
  options: ['سيولة أقل وكلفة دخول أعلى', 'سيولة أكبر وكلفة أقل', 'رسوم منصة أقل للمتداول', 'تأكيد أسرع على الشبكة'],
  correct_answer: 0,
  explanation: 'الفارق الواسع يعني أنك تدفع أكثر لتنفّذ فوراً.' },

{ topic: EXC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود ببوابة التحويل بين النقد والأصل الرقمي؟',
  options: ['خدمة تحوّل العملة الوطنية إليه', 'خدمة تحوّل أصلاً رقمياً لآخر', 'خدمة تؤكد المعاملة على الشبكة', 'خدمة تحفظ مفاتيح العميل'],
  correct_answer: 0,
  explanation: 'المدخل والمخرج النقدي هو ما يربط السوقين.' },

{ topic: EXC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الفرق بين رصيدك في المنصة ورصيدك على الشبكة؟',
  options: ['الأول قيد لديها والثاني ملك بمفتاحك', 'الأول ملك بمفتاحك والثاني قيد', 'كلاهما قيد داخلي في المنصة', 'كلاهما مسجَّل على الشبكة نفسها'],
  correct_answer: 0,
  explanation: 'ما داخل المنصة وعدٌ بالتسليم لا ملك مباشر.' },

{ topic: EXC, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا تطلب المنصات المنظَّمة تحقق هوية العميل؟',
  options: ['لالتزامها بأنظمة مكافحة الغسل', 'لتحديد سعر الأصل بدقة', 'لتخفيض رسوم الشبكة عليه', 'لتسريع تأكيد معاملاته'],
  correct_answer: 0,
  explanation: 'المنصة كيان خاضع للتنظيم كأي وسيط مالي.' },

{ topic: EXC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز منصة منظَّمة عن غير منظَّمة؟',
  options: ['رقابة وفصل أموال العملاء', 'رسوم أقل على كل عملية', 'أصول أكثر متاحة للتداول', 'تأكيد أسرع على الشبكة'],
  correct_answer: 0,
  explanation: 'الفصل والرقابة هما ما يحمي العميل عند التعثّر.' },

{ topic: EXC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجب التحقق منه قبل السحب من منصة؟',
  options: ['صحة العنوان والشبكة', 'سعر الأصل لحظة السحب', 'عدد العملاء في المنصة', 'حجم تداول الأصل اليوم'],
  correct_answer: 0,
  explanation: 'إرسال على شبكة غير مدعومة يضيّع المبلغ.' },

{ topic: EXC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر اختلاف سعر أصل بين منصتين؟',
  options: ['اختلاف السيولة وأوامر كل سوق', 'اختلاف الشبكة التي يعمل عليها', 'اختلاف معروضه الأقصى بينهما', 'اختلاف عدد وحداته المُصدَرة'],
  correct_answer: 0,
  explanation: 'كل منصة سوق مستقلة بأوامرها ومتداوليها.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: VAL, difficulty: 'medium', type: 'code',
  question: 'ما القيمة السوقية لهذا الأصل؟',
  code_snippet: 'السعر: 2 ريال\nالمعروض المتداول: 10,000,000\nالمعروض الأقصى: 21,000,000',
  options: ['20,000,000 ريال', '42,000,000 ريال', '10,000,000 ريال', '21,000,000 ريال'],
  correct_answer: 0,
  explanation: 'السعر × المتداول = ٢ × ١٠ ملايين = ٢٠ مليوناً.' },

{ topic: VAL, difficulty: 'hard', type: 'code',
  question: 'أي الأصلين أكبر حجماً في السوق؟',
  code_snippet: 'أ: السعر 100 · المتداول 1,000,000\nب: السعر 5 · المتداول 40,000,000',
  options: ['ب لأن قيمته 200 مليون', 'أ لأن سعره أعلى بكثير', 'متساويان في القيمة تماماً', 'لا يمكن الحكم من هذا'],
  correct_answer: 0,
  explanation: 'أ = ١٠٠ مليون وب = ٢٠٠ مليون رغم انخفاض سعر ب.' },

{ topic: EXC, difficulty: 'medium', type: 'code',
  question: 'بأي سعر يُنفَّذ أمر السوق هنا؟',
  code_snippet: 'أفضل عرض بيع: 101\nأفضل عرض شراء: 99\nالأمر: شراء بأمر سوق',
  options: ['101 لأنه يشتري من البائع', '99 لأنه أفضل سعر شراء', '100 كمتوسط بين السعرين', '102 بعد إضافة الرسوم'],
  correct_answer: 0,
  explanation: 'المشتري بأمر سوق يأخذ أفضل عرض بيع قائم.' },

{ topic: EXC, difficulty: 'hard', type: 'code',
  question: 'ما متوسط سعر تنفيذ هذا الأمر؟',
  code_snippet: 'أوامر البيع: 10 وحدات بـ100 · 10 وحدات بـ110\nالأمر: شراء 20 وحدة بأمر سوق',
  options: ['105 لأنه يأخذ الشريحتين', '100 لأنه أفضل سعر متاح', '110 لأنه آخر سعر منفَّذ', '210 لأنه مجموع السعرين'],
  correct_answer: 0,
  explanation: '(١٠×١٠٠ + ١٠×١١٠) ÷ ٢٠ = ٢١٠٠ ÷ ٢٠ = ١٠٥.' },

{ topic: EXC, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في هذا السحب؟',
  code_snippet: 'الأصل: عملة تعمل على شبكة أ\nالعنوان: على شبكة ب\nالشبكة المختارة: ب',
  options: ['إرسال على شبكة لا تدعم الأصل', 'رسوم سحب أعلى من اللازم', 'تأخر التأكيد بسبب الازدحام', 'لا خلل ما دام العنوان صحيحاً'],
  correct_answer: 0,
  explanation: 'مطابقة الشبكة شرط قبل صحة العنوان نفسه.' },

{ topic: VAL, difficulty: 'medium', type: 'code',
  question: 'ما الذي تكشفه هذي القراءة عن السوق؟',
  code_snippet: 'الفارق بين أفضل عرض وطلب: 8%\nحجم الأوامر القريبة: ضئيل',
  options: ['سوق ضحلة عالية الانزلاق', 'سوق عميقة منخفضة الكلفة', 'سوق متوازنة بلا مخاطر', 'خلل في الشبكة لا السوق'],
  correct_answer: 0,
  explanation: 'الفارق الواسع مع قلة الأوامر علامة ضحالة.' },

{ topic: TYP, difficulty: 'hard', type: 'code',
  question: 'ما الذي يصفه هذا الأصل؟',
  code_snippet: 'القيمة: مربوطة بريال واحد\nالغطاء: ودائع نقدية معلنة\nالتدقيق: شهري منشور',
  options: ['عملة مستقرة مغطّاة ومُدقَّقة', 'عملة أصلية لشبكة جديدة', 'رمز حوكمة يمنح تصويتاً', 'رمز فريد غير قابل للاستبدال'],
  correct_answer: 0,
  explanation: 'الربط مع غطاء معلن مُدقَّق وصف العملة المستقرة.' },

{ topic: TYP, difficulty: 'medium', type: 'code',
  question: 'ما نوع هذا الرمز؟',
  code_snippet: 'كل وحدة: لها معرّف فريد\nالمبادلة بمثلها: غير ممكنة\nالتقسيم: غير متاح',
  options: ['رمز غير قابل للاستبدال', 'عملة مستقرة مغطّاة', 'عملة أصلية لشبكة', 'رمز منفعة قابل للتجزئة'],
  correct_answer: 0,
  explanation: 'التفرّد وعدم القابلية للمبادلة يحسمان النوع.' },

{ topic: VAL, difficulty: 'hard', type: 'code',
  question: 'ما الخطر الذي تكشفه هذي البيانات؟',
  code_snippet: 'أكبر ثلاث محافظ: تملك 78%\nبقية المحافظ: تملك 22%',
  options: ['تركّز ملكية يقلب السعر', 'توزيع صحي واسع للملكية', 'ارتفاع في عمق السوق', 'انخفاض في رسوم النقل'],
  correct_answer: 0,
  explanation: 'من يملك أكثر من ثلاثة أرباع يحرّك السعر وحده.' },

{ topic: EXC, difficulty: 'easy', type: 'code',
  question: 'ما الذي يمثّله هذا الرصيد؟',
  code_snippet: 'الرصيد: ظاهر في حساب المنصة\nالمفتاح الخاص: لدى المنصة\nالسحب: لم يُطلَب بعد',
  options: ['قيد لدى المنصة لا ملك مباشر', 'ملك مباشر مسجَّل على الشبكة', 'رصيد مجمَّد بأمر تنظيمي', 'وحدات لم تُصدَر أصلاً'],
  correct_answer: 0,
  explanation: 'ما داخل المنصة وعدٌ بالتسليم حتى يُسحَب.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: TYP, difficulty: 'easy', type: 'true-false',
  question: 'كل أصل رقمي عملة تصلح وسيطاً للتبادل.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الرمز الفريد أصل ولا يصلح وسيطاً لعدم تماثله.' },

{ topic: TYP, difficulty: 'medium', type: 'true-false',
  question: 'العملة المستقرة تستمد ثباتها من مرجع خارجي.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الربط بالمرجع لا الشبكة هو مصدر الاستقرار.' },

{ topic: TYP, difficulty: 'medium', type: 'true-false',
  question: 'إعلان الغطاء يكفي للحكم على عملة مستقرة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الغطاء الذي لا يُدقَّق دعوى لا ضمانة.' },

{ topic: VAL, difficulty: 'medium', type: 'true-false',
  question: 'ارتفاع سعر الوحدة يعني أصلاً أكبر حجماً.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الحجم سعر × عدد وحدات، والسعر وحده لا يقوله.' },

{ topic: VAL, difficulty: 'medium', type: 'true-false',
  question: 'القيمة السوقية تُحسَب بالمعروض المتداول لا الأقصى.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما لم يُصدَر بعد لا يدخل في قيمة اليوم.' },

{ topic: VAL, difficulty: 'medium', type: 'true-false',
  question: 'السوق الضحلة تحتمل الأوامر الكبيرة بلا أثر يُذكر.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الأمر الكبير في سوق ضحلة يقلب السعر بشدة.' },

{ topic: VAL, difficulty: 'easy', type: 'true-false',
  question: 'تركّز الملكية في محافظ قليلة يزيد مخاطر السعر.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'من يملك الكثير يستطيع تحريك السوق ببيع واحد.' },

{ topic: EXC, difficulty: 'medium', type: 'true-false',
  question: 'أمر الحد يضمن التنفيذ الفوري بأي سعر متاح.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'أمر الحد يضمن السعر ولا يضمن التنفيذ.' },

{ topic: EXC, difficulty: 'hard', type: 'true-false',
  question: 'الرصيد داخل المنصة قيد لديها لا ملك مباشر.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'من يملك المفتاح يملك الأصل على الشبكة.' },

{ topic: EXC, difficulty: 'medium', type: 'true-false',
  question: 'اختلاف السعر بين منصتين أمر طبيعي لاستقلال كل سوق.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'كل منصة سوق مستقلة بأوامرها وسيولتها.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: TYP, difficulty: 'easy', type: 'matching',
  question: 'صل كل نوع أصل بخاصيته',
  pairs: [ { left: 'عملة أصلية', right: 'وقود شبكتها' }, { left: 'عملة مستقرة', right: 'مربوطة بمرجع' }, { left: 'رمز منفعة', right: 'يشتري خدمة' }, { left: 'رمز فريد', right: 'لا يُبادَل بمثله' } ],
  explanation: 'الوظيفة هي ما يميّز نوعاً عن نوع.' },

{ topic: TYP, difficulty: 'medium', type: 'matching',
  question: 'صل كل رمز بما يمنحه صاحبه',
  pairs: [ { left: 'رمز حوكمة', right: 'صوت في القرار' }, { left: 'رمز منفعة', right: 'حق استعمال' }, { left: 'رمز مرتبط بأصل', right: 'حق في أصل واقعي' }, { left: 'رمز فريد', right: 'ملكية وحدة بعينها' } ],
  explanation: 'ما يمنحه الرمز هو تكييفه لا اسمه.' },

{ topic: TYP, difficulty: 'hard', type: 'matching',
  question: 'صل كل عملة مستقرة بمصدر ثباتها',
  pairs: [ { left: 'مغطّاة بالنقد', right: 'ودائع معلنة مُدقَّقة' }, { left: 'مغطّاة بأصول', right: 'محفظة أصول مرجعية' }, { left: 'مغطّاة بأصل رقمي', right: 'ضمان يفوق قيمتها' }, { left: 'خوارزمية', right: 'ضبط معروض برمجي' } ],
  explanation: 'اختلاف الغطاء يعني اختلاف الخطر عند الضغط.' },

{ topic: VAL, difficulty: 'medium', type: 'matching',
  question: 'صل كل مقياس بما يقوله',
  pairs: [ { left: 'القيمة السوقية', right: 'حجم الأصل في السوق' }, { left: 'المعروض المتداول', right: 'المتاح للتداول فعلاً' }, { left: 'عمق السوق', right: 'أوامر قريبة من السعر' }, { left: 'الفارق السعري', right: 'كلفة التنفيذ الفوري' } ],
  explanation: 'كل مقياس يجيب سؤالاً مختلفاً عن الأصل.' },

{ topic: VAL, difficulty: 'medium', type: 'matching',
  question: 'صل كل حالة سوق بأثرها على المتداول',
  pairs: [ { left: 'سيولة عميقة', right: 'انزلاق ضئيل' }, { left: 'سيولة ضحلة', right: 'انزلاق كبير' }, { left: 'فارق سعري واسع', right: 'كلفة دخول أعلى' }, { left: 'ملكية مركّزة', right: 'تقلّب مفاجئ' } ],
  explanation: 'حال السوق يقرر كلفة الدخول والخروج.' },

{ topic: VAL, difficulty: 'hard', type: 'matching',
  question: 'صل كل مصدر قيمة بنوع الأصل',
  pairs: [ { left: 'ندرة وقبول', right: 'أصل بلا غطاء' }, { left: 'ودائع مرجعية', right: 'عملة مستقرة' }, { left: 'أصل واقعي وراءه', right: 'رمز ممثّل لأصل' }, { left: 'طلب على خدمة', right: 'رمز منفعة' } ],
  explanation: 'اسأل دائماً: من أين تأتي القيمة؟' },

{ topic: EXC, difficulty: 'easy', type: 'matching',
  question: 'صل كل مصطلح تداول بمعناه',
  pairs: [ { left: 'أمر السوق', right: 'تنفيذ فوري بأفضل سعر' }, { left: 'أمر الحد', right: 'تنفيذ عند سعرك' }, { left: 'دفتر الأوامر', right: 'الأوامر القائمة' }, { left: 'الانزلاق', right: 'فرق المتوقع والمنفَّذ' } ],
  explanation: 'أربعة مصطلحات تلزم قبل أول أمر.' },

{ topic: EXC, difficulty: 'medium', type: 'matching',
  question: 'صل كل خطوة سحب بغرضها',
  pairs: [ { left: 'اختيار الشبكة', right: 'مطابقتها للأصل' }, { left: 'نسخ العنوان', right: 'منع الخطأ اليدوي' }, { left: 'مبلغ تجريبي', right: 'التحقق قبل الكل' }, { left: 'مراجعة الرسوم', right: 'معرفة الصافي' } ],
  explanation: 'خطوات تمنع خسارة لا يمكن استردادها.' },

{ topic: EXC, difficulty: 'medium', type: 'matching',
  question: 'صل كل صفة منصة بأثرها على العميل',
  pairs: [ { left: 'مرخّصة ومراقَبة', right: 'حماية عند التعثّر' }, { left: 'تفصل أموال العملاء', right: 'أصوله غير مخلوطة' }, { left: 'بلا تنظيم', right: 'لا جهة يُلجَأ إليها' }, { left: 'سيولة ضعيفة', right: 'خروج بسعر أسوأ' } ],
  explanation: 'صفات المنصة تقرر ما يبقى لك عند الأزمة.' },

{ topic: EXC, difficulty: 'hard', type: 'matching',
  question: 'صل كل موضع للأصل بما يترتب عليه',
  pairs: [ { left: 'رصيد في المنصة', right: 'قيد لديها' }, { left: 'أصل بمفتاحك', right: 'ملك مباشر' }, { left: 'أصل قيد السحب', right: 'انتظار تأكيد' }, { left: 'أصل في أمر قائم', right: 'محجوز حتى ينفَّذ' } ],
  explanation: 'موضع الأصل يحدد من يتحمّل خطره.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: TYP, difficulty: 'easy', type: 'terminal', prompt_label: 'النوع',
  question: 'اكتب اسم أصل رقمي مربوط بأصل مرجعي ليثبت سعره',
  expected_answers: ['عملة مستقرة', 'العملة المستقرة', 'stablecoin', 'مستقرة'],
  explanation: 'الاستقرار مستمَدّ من المرجع لا من الشبكة.' },

{ topic: TYP, difficulty: 'medium', type: 'terminal', prompt_label: 'الصفة',
  question: 'اكتب صفة الأصل الذي تعادل كل وحدة منه غيرها',
  expected_answers: ['قابل للاستبدال', 'التماثل', 'fungible', 'قابلية الاستبدال'],
  explanation: 'تساوي الوحدات شرط استعماله وسيطاً للتبادل.' },

{ topic: TYP, difficulty: 'medium', type: 'terminal', prompt_label: 'الشرط',
  question: 'اكتب ما يثبت غطاء عملة مستقرة فعلاً',
  expected_answers: ['تدقيق مستقل', 'التدقيق', 'تدقيق دوري منشور', 'مراجعة مستقلة'],
  explanation: 'الغطاء الذي لا يُدقَّق دعوى لا ضمانة.' },

{ topic: VAL, difficulty: 'medium', type: 'terminal', prompt_label: 'المقياس',
  question: 'اكتب اسم حاصل ضرب السعر في المعروض المتداول',
  expected_answers: ['القيمة السوقية', 'القيمة السوقيه', 'market cap', 'الرسملة السوقية'],
  explanation: 'ما ليس متداولاً لا يدخل في القيمة الحالية.' },

{ topic: VAL, difficulty: 'medium', type: 'terminal', prompt_label: 'المفهوم',
  question: 'اكتب اسم حجم الأوامر القريبة من السعر الحالي',
  expected_answers: ['عمق السوق', 'العمق', 'market depth', 'عمق السيولة'],
  explanation: 'كلما كثرت الأوامر القريبة قلّ أثر الأمر الواحد.' },

{ topic: VAL, difficulty: 'hard', type: 'terminal', prompt_label: 'الفرق',
  question: 'اكتب اسم الفرق بين السعر المتوقع والمنفَّذ فعلاً',
  expected_answers: ['الانزلاق السعري', 'الانزلاق', 'slippage', 'انزلاق التنفيذ'],
  explanation: 'الأمر الكبير يأكل مستويات السعر فيتغيّر متوسطه.' },

{ topic: VAL, difficulty: 'medium', type: 'terminal', prompt_label: 'المعروض',
  question: 'اكتب اسم أكثر ما يمكن إصداره من العملة إطلاقاً',
  expected_answers: ['المعروض الأقصى', 'الحد الأقصى', 'max supply', 'السقف الأقصى'],
  explanation: 'حد الإصدار غير المُصدَر وغير المتداول.' },

{ topic: EXC, difficulty: 'medium', type: 'terminal', prompt_label: 'الأمر',
  question: 'اكتب اسم الأمر الذي ينفَّذ فوراً بأفضل سعر متاح',
  expected_answers: ['أمر السوق', 'أمر سوق', 'market order', 'الأمر السوقي'],
  explanation: 'السرعة مقابل السعر: تختار أحدهما لا كليهما.' },

{ topic: EXC, difficulty: 'medium', type: 'terminal', prompt_label: 'السجل',
  question: 'اكتب اسم سجل أوامر الشراء والبيع القائمة في المنصة',
  expected_answers: ['دفتر الأوامر', 'سجل الأوامر', 'order book', 'دفتر الطلبات'],
  explanation: 'ما لم يُنفَّذ بعد يبقى في الدفتر منتظراً.' },

{ topic: EXC, difficulty: 'hard', type: 'terminal', prompt_label: 'التحقق',
  question: 'اكتب ما يجب مطابقته للأصل قبل تنفيذ السحب',
  expected_answers: ['الشبكة', 'شبكة الأصل', 'network', 'الشبكة المختارة'],
  explanation: 'إرسال على شبكة غير مدعومة يضيّع المبلغ.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: TYP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يصف الرمز غير القابل للاستبدال؟',
  options: ['لكل وحدة معرّف فريد', 'لا تُبادَل وحدته بمثلها', 'كل وحداته متماثلة تماماً', 'يصلح وسيطاً عاماً للتبادل'],
  correct_answers: [0, 1],
  explanation: 'الأخيران وصف الأصل القابل للاستبدال لا الفريد.' },

{ topic: TYP, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُقيَّم به ادعاء غطاء عملة مستقرة؟',
  options: ['نوع الأصول في الاحتياطي', 'استقلال جهة التدقيق', 'عدد منصات إدراجها', 'حجم تداولها اليومي'],
  correct_answers: [0, 1],
  explanation: 'الإدراج والتداول شهرة لا دليل على الغطاء.' },

{ topic: TYP, difficulty: 'easy', type: 'multi-select',
  question: 'أي مما يلي من أنواع الأصول الرقمية؟',
  options: ['عملة أصلية لشبكة', 'رمز مُصدَر فوق شبكة', 'رقم حساب في مصرف', 'ملف صورة في الجهاز'],
  correct_answers: [0, 1],
  explanation: 'ليس كل ما هو رقمي أصلاً يُملَك ويُنقَل.' },

{ topic: VAL, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يلزم لمقارنة حجم أصلين؟',
  options: ['سعر الوحدة لكل منهما', 'المعروض المتداول لكل منهما', 'اسم الشبكة لكل منهما', 'رسوم النقل في كل شبكة'],
  correct_answers: [0, 1],
  explanation: 'الحجم حاصل ضربهما، والباقي لا يدخل الحساب.' },

{ topic: VAL, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يزيد تقلّب سعر الأصل؟',
  options: ['سيولة ضحلة في السوق', 'تركّز الملكية في محافظ', 'عمق كبير في الأوامر', 'توزيع واسع بين الملّاك'],
  correct_answers: [0, 1],
  explanation: 'الأخيران يخفّضان التقلّب لا يرفعانه.' },

{ topic: VAL, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُقرأ من دفتر الأوامر؟',
  options: ['الفارق بين العرض والطلب', 'حجم الأوامر عند كل سعر', 'المعروض الأقصى للعملة', 'عدد المحافظ المالكة له'],
  correct_answers: [0, 1],
  explanation: 'الأخيران من بيانات الشبكة لا من السوق.' },

{ topic: EXC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يميّز المنصة المنظَّمة؟',
  options: ['فصل أموال العملاء عن أموالها', 'خضوعها لرقابة جهة مختصة', 'إعفاء العميل من تحقق الهوية', 'ضمانها لأرباح المتداولين'],
  correct_answers: [0, 1],
  explanation: 'الأخيران وعدان لا يقدّمهما تنظيم سليم.' },

{ topic: EXC, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُتحقَّق منه قبل السحب؟',
  options: ['مطابقة الشبكة للأصل', 'صحة عنوان الوجهة', 'سعر الأصل لحظة السحب', 'عدد عملاء المنصة'],
  correct_answers: [0, 1],
  explanation: 'الأخيران لا يمنعان خسارة لا تُسترد.' },

{ topic: EXC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن أمر الحد؟',
  options: ['ينفَّذ عند سعرك أو أفضل', 'قد يبقى قائماً بلا تنفيذ', 'ينفَّذ فوراً بأي سعر', 'تضمنه المنصة بأي حال'],
  correct_answers: [0, 1],
  explanation: 'يضمن السعر ولا يضمن التنفيذ.' },

{ topic: EXC, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يفسّر فرق السعر بين منصتين؟',
  options: ['اختلاف سيولة كل منصة', 'اختلاف أوامر متداوليها', 'اختلاف معروض الأصل الأقصى', 'اختلاف عدد وحداته المُصدَرة'],
  correct_answers: [0, 1],
  explanation: 'المعروض واحد على الشبكة مهما تعددت المنصات.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: TYP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تصنيف أصل رقمي مجهول',
  options: ['معرفة شبكته وطريقة إصداره', 'فحص قابليته للاستبدال', 'تحديد ما يمنحه لصاحبه', 'تصنيفه ضمن نوعه'],
  explanation: 'التصنيف نتيجة الفحص لا نقطة بدايته.' },

{ topic: TYP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تقييم عملة مستقرة',
  options: ['معرفة المرجع المربوطة به', 'فحص نوع الاحتياطي', 'مراجعة تقرير التدقيق', 'الحكم على متانة الربط'],
  explanation: 'الحكم آخر خطوة بعد الغطاء وتدقيقه.' },

{ topic: VAL, difficulty: 'easy', type: 'ordering',
  question: 'رتّب خطوات حساب القيمة السوقية',
  options: ['معرفة سعر الوحدة', 'معرفة المعروض المتداول', 'ضرب السعر في المتداول', 'مقارنة الناتج بأصل آخر'],
  explanation: 'المقارنة تأتي بعد الحساب لا قبله.' },

{ topic: VAL, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تقدير سيولة أصل',
  options: ['قراءة الفارق بين العرض والطلب', 'قياس حجم الأوامر القريبة', 'تقدير الانزلاق المتوقع', 'تحديد حجم أمر آمن'],
  explanation: 'حجم الأمر يُقرَّر بعد تقدير الانزلاق لا قبله.' },

{ topic: VAL, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات فحص تركّز ملكية أصل',
  options: ['حصر أكبر المحافظ المالكة', 'حساب نسبتها من المعروض', 'مقارنتها بحجم السوق اليومي', 'تقدير أثر بيع واحد منها'],
  explanation: 'الأثر يُقدَّر بعد معرفة النسبة وحجم السوق.' },

{ topic: EXC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تنفيذ أمر شراء بحدّ',
  options: ['تحديد السعر المقبول', 'إدخال الكمية المطلوبة', 'دخول الأمر دفتر الأوامر', 'تنفيذه عند بلوغ السعر'],
  explanation: 'أمر الحد ينتظر السعر ولا يستعجله.' },

{ topic: EXC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات السحب من منصة إلى محفظتك',
  options: ['اختيار الأصل والشبكة', 'إدخال عنوان الوجهة', 'إرسال مبلغ تجريبي', 'تحويل بقية المبلغ'],
  explanation: 'التجربة الصغيرة قبل الكبيرة تمنع خسارة كاملة.' },

{ topic: EXC, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات اختيار منصة للتعامل',
  options: ['التحقق من ترخيصها ورقابتها', 'مراجعة فصل أموال العملاء', 'قياس سيولة الأصل فيها', 'مقارنة رسومها بغيرها'],
  explanation: 'الرسوم آخر معيار بعد الأمان والسيولة.' },

{ topic: EXC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تحويل نقد إلى أصل رقمي',
  options: ['فتح حساب واستكمال التحقق', 'إيداع العملة الوطنية', 'تنفيذ أمر الشراء', 'نقل الأصل لحفظك'],
  explanation: 'النقل لحفظك آخر خطوة تنقل الملك إليك.' },

{ topic: EXC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات قراءة سوق قبل الدخول',
  options: ['قراءة القيمة السوقية', 'فحص عمق دفتر الأوامر', 'قياس الفارق السعري', 'تحديد حجم الدخول'],
  explanation: 'الحجم يُقرَّر بعد قراءة السوق لا قبلها.' }

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
