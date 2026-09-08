// التقنية المالية · S3 المصرفية الرقمية · L4 تجربة العميل
// ثلاثة مواضيع: تصميم الرحلة · التخصيص وحدوده · قياس التجربة
//
// L1 عدّد القنوات والخدمات الرقمية وخطوات فتح الحساب. وهذا المستوى
// لا يعيد عدّها، بل يسأل: أين يتعثّر العميل ولماذا، ومتى يكون التخصيص
// خدمةً ومتى يصير تطفّلاً، وبأي رقم تُقاس التجربة لا بالانطباع.
//
// حدّ مقصود: التحول الرقمي المؤسسي موضع L5.
//
// الصعوبة: ٥ سهل · ٤٩ متوسط · ٣٦ صعب — مطابق لصف L4.

const T = 'FinTech';
const S = 'Digital Banking';
const L = 4;

const JRN = 'Journey Design';
const PER = 'Personalization';
const MSR = 'Experience Measurement';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

{ topic: JRN, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود برحلة العميل في الخدمة المصرفية؟',
  options: ['تتابع خطواته من الحاجة حتى إنجازها', 'قائمة الخدمات المعروضة في التطبيق', 'عدد مرات دخوله إلى حسابه', 'ترتيب الأزرار في الشاشة الرئيسية'],
  correct_answer: 0,
  explanation: 'الرحلة تُقاس بما أنجزه العميل لا بما عُرِض عليه.' },

{ topic: JRN, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بنقطة التعثّر في الرحلة؟',
  options: ['خطوة يتوقف عندها كثير من العملاء', 'خطوة يمرّ بها كل العملاء بسهولة', 'شاشة تحمل أكثر من زر واحد', 'خدمة لم تُطلَق بعد في التطبيق'],
  correct_answer: 0,
  explanation: 'العدد الكبير عند خطوة واحدة يشير إلى عيب فيها لا في الناس.' },

{ topic: JRN, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يفسّر ترك العملاء عند خطوة التحقق؟',
  options: ['طلب معلومة يصعب توفيرها الآن', 'جمال التصميم في تلك الشاشة', 'قصر النص المعروض في الخطوة', 'وجود زر رجوع في أعلى الشاشة'],
  correct_answer: 0,
  explanation: 'من طُلِب منه مستند لا يملكه الآن يؤجّل ثم ينسى.' },

{ topic: JRN, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الخطوة التي تستحق البقاء في الرحلة؟',
  options: ['تخدم غرضاً لا تتم الخدمة بدونه', 'تجمع بيانات قد تنفع مستقبلاً', 'تعرض إعلاناً عن خدمة أخرى', 'تُظهِر جهد الفريق في التصميم'],
  correct_answer: 0,
  explanation: 'كل خطوة زائدة تُسقِط جزءاً ممن بدأ.' },

{ topic: JRN, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الاحتكاك النافع عن الضار؟',
  options: ['النافع يحمي والضار يعطّل بلا سبب', 'النافع يعطّله والضار يحميه', 'كلاهما يحمي العميل بالقدر نفسه', 'كلاهما يعطّله بالقدر نفسه'],
  correct_answer: 0,
  explanation: 'تأكيد تحويل كبير نافع، وطلب بيانات لا تُستعمَل ضار.' },

{ topic: JRN, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز رسالة الخطأ الجيدة للعميل؟',
  options: ['تقول ما حدث وما يفعله الآن', 'تعتذر بعبارة عامة بلا تفصيل', 'تعرض رمز الخطأ التقني وحده', 'تخفي وقوع الخطأ عن العميل'],
  correct_answer: 0,
  explanation: 'العميل لا يحتاج سبباً تقنياً بل خطوة تالية.' },

{ topic: JRN, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يقلّل هجر العميل في رحلة طويلة؟',
  options: ['حفظ تقدّمه ليكملها لاحقاً', 'إلزامه بإكمالها في جلسة واحدة', 'إخفاء عدد الخطوات المتبقية', 'إعادته للبداية عند كل انقطاع'],
  correct_answer: 0,
  explanation: 'من انقطع ولم يفقد ما أنجزه يعود، ومن فقده لا يعود.' },

{ topic: JRN, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الغرض من بيان عدد الخطوات المتبقية؟',
  options: ['توقّع الجهد يرفع احتمال الإكمال', 'إطالة الرحلة في نظر العميل', 'إخفاء طول الإجراء الحقيقي', 'تقليل عدد الحقول المطلوبة'],
  correct_answer: 0,
  explanation: 'المجهول يبدو أطول مما هو، فيُترَك قبل نهايته.' },

{ topic: JRN, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز الاتساق بين القنوات؟',
  options: ['ما بدأه في قناة يكمله في أخرى', 'اختلاف الخدمات بين كل قناة', 'إلزامه بقناة واحدة لكل خدمة', 'تكرار الشرح في كل قناة'],
  correct_answer: 0,
  explanation: 'إعادة الشرح في كل قناة أكثر ما يُنفِّر العميل.' },

{ topic: JRN, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز تصميماً يراعي محدودية القدرة؟',
  options: ['يعمل بخط أكبر وتباين عالٍ', 'يفترض بصراً حاداً وحركة دقيقة', 'يعتمد على الألوان وحدها للدلالة', 'يفرض وقتاً قصيراً لكل خطوة'],
  correct_answer: 0,
  explanation: 'ما يصعب استعماله يستبعد من صُمِّم لهم.' },

{ topic: PER, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما المقصود بتخصيص التجربة للعميل؟',
  options: ['تكييف ما يُعرَض بحسب حاله وسلوكه', 'عرض المحتوى نفسه لكل العملاء', 'تغيير ألوان التطبيق دورياً', 'إضافة خدمات جديدة كل شهر'],
  correct_answer: 0,
  explanation: 'التخصيص يقصّر الطريق إلى ما يحتاجه فعلاً.' },

{ topic: PER, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يحوّل التخصيص من خدمة إلى تطفّل؟',
  options: ['استنتاج ما لم يُفصِح عنه العميل', 'ترتيب الخدمات بحسب استخدامه', 'تذكّر لغته المفضّلة في العرض', 'اقتراح خدمة سبق أن سأل عنها'],
  correct_answer: 0,
  explanation: 'الاستنتاج الصائب قد يكون أكثر إزعاجاً من الخاطئ.' },

{ topic: PER, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجعل التخصيص مقبولاً عند العميل؟',
  options: ['وضوح سببه وإمكان إيقافه', 'دقّته العالية في التنبؤ وحدها', 'كثرة الاقتراحات المعروضة له', 'إخفاء مصدر البيانات المستخدمة'],
  correct_answer: 0,
  explanation: 'من عرف لماذا رأى هذا الاقتراح يقبله أو يوقفه بوعي.' },

{ topic: PER, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الاقتراح النافع عن الإعلان المقحَم؟',
  options: ['يحلّ حاجة ظاهرة في سلوك العميل', 'يخدم هدف بيع الشهر للفريق', 'يُعرَض في كل شاشة بلا سياق', 'يمنع العميل من إغلاقه'],
  correct_answer: 0,
  explanation: 'ما لا يخدم العميل يفقده الثقة بكل ما يُعرَض بعده.' },

{ topic: PER, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما خطر التخصيص المبني على بيانات ناقصة؟',
  options: ['اقتراح لا يناسب فيهدر ثقة العميل', 'ارتفاع كلفة تخزين البيانات', 'بطء تحميل الشاشة الرئيسية', 'زيادة عدد خيارات القائمة'],
  correct_answer: 0,
  explanation: 'اقتراح غريب مرتين يجعل العميل يتجاهل ما بعده كله.' },

{ topic: PER, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يلزم قبل استخدام سلوك العميل في التخصيص؟',
  options: ['إعلامه بذلك وإتاحة الاعتراض له', 'الاكتفاء بموافقة عامة عند التسجيل', 'إخفاء الاستخدام لتجنّب أسئلته', 'مشاركة البيانات مع شركاء الإعلان'],
  correct_answer: 0,
  explanation: 'موافقة على نص طويل لا تجعل كل استخدام مقبولاً.' },

{ topic: PER, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التخصيص عن التمييز غير العادل؟',
  options: ['الأول يرتّب العرض والثاني يمنع الحق', 'الأول يمنع الحق والثاني يرتّب العرض', 'كلاهما يرتّب العرض بلا فرق', 'كلاهما يمنع الحق بلا فرق'],
  correct_answer: 0,
  explanation: 'ترتيب الاقتراحات شيء، وحرمان فئة من منتج شيء آخر.' },

{ topic: PER, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يُراجَع في نتائج التخصيص دورياً؟',
  options: ['أثره على الفئات المختلفة لا متوسطه', 'عدد الاقتراحات المعروضة إجمالاً', 'سرعة توليد الاقتراح تقنياً', 'حجم البيانات المستهلَكة فيه'],
  correct_answer: 0,
  explanation: 'متوسط جيد قد يخفي فئة تُخدَم أسوأ من غيرها.' },

{ topic: PER, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز إعدادات التحكم بالتخصيص؟',
  options: ['يجدها العميل ويفهمها ويغيّرها', 'تُخفى في نهاية قائمة طويلة', 'تتطلب اتصالاً بخدمة العملاء', 'تُغيَّر مرة واحدة بلا رجعة'],
  correct_answer: 0,
  explanation: 'تحكّم لا يُعثَر عليه كأنه غير موجود.' },

{ topic: PER, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يقيس نجاح التخصيص فعلاً؟',
  options: ['انتفاع العميل به لا مجرد نقره عليه', 'عدد مرات عرضه على الشاشة', 'حجم البيانات التي بُنِي عليها', 'عدد النماذج المستخدمة فيه'],
  correct_answer: 0,
  explanation: 'النقر قد يكون فضولاً أو خطأً لا حاجة.' },

{ topic: MSR, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الذي يقيسه معدل إتمام الرحلة؟',
  options: ['نسبة من بدأ فأنهى الإجراء', 'عدد من فتح التطبيق اليوم', 'عدد الشاشات في الإجراء', 'زمن تحميل الشاشة الأولى'],
  correct_answer: 0,
  explanation: 'من بدأ ولم ينهِ رقم يقول إن ثمة عائقاً.' },

{ topic: MSR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز قياس الجهد عن قياس الرضا؟',
  options: ['الأول يسأل كم شقّ عليك والثاني كم أعجبك', 'الأول يسأل كم أعجبك والثاني كم شقّ عليك', 'كلاهما يسأل عن الإعجاب فقط', 'كلاهما يسأل عن المشقّة فقط'],
  correct_answer: 0,
  explanation: 'المشقّة تتنبأ بالترك أكثر مما يتنبأ به الإعجاب.' },

{ topic: MSR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز المقياس السلوكي عن المقياس المعلَن؟',
  options: ['الأول يرصد الفعل والثاني يسأل الرأي', 'الأول يسأل الرأي والثاني يرصد الفعل', 'كلاهما يرصد الفعل بالقدر نفسه', 'كلاهما يسأل الرأي بالقدر نفسه'],
  correct_answer: 0,
  explanation: 'ما يقوله العميل قد يخالف ما يفعله، فيُقرآن معاً.' },

{ topic: MSR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما خطر الاعتماد على متوسط الرضا وحده؟',
  options: ['يخفي فئة تعاني بين راضين كثيرين', 'يبالغ في تقدير عدد الشكاوى', 'يمنع جمع أي رأي من العملاء', 'يقيس الجهد لا الرضا فعلاً'],
  correct_answer: 0,
  explanation: 'التقسيم بالفئات يكشف ما يبتلعه المتوسط.' },

{ topic: MSR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز سؤال العميل في وقته؟',
  options: ['يُسأل بعد التجربة مباشرة', 'يُسأل قبل أن يجرّب الخدمة', 'يُسأل مرة واحدة كل سنة', 'يُسأل في كل شاشة يفتحها'],
  correct_answer: 0,
  explanation: 'الذاكرة تبهت، والرأي المتأخر رأي عن انطباع لا عن تجربة.' },

{ topic: MSR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يحوّل نتيجة القياس إلى تحسين؟',
  options: ['ربط الرقم بخطوة بعينها ومعالجتها', 'نشر الرقم في تقرير شهري', 'مقارنته بمنافس في السوق', 'رفع هدف الرقم للعام القادم'],
  correct_answer: 0,
  explanation: 'رقم بلا موضع لا يقول ماذا يُصلَح.' },

{ topic: MSR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي تكشفه شكوى متكررة في الدعم؟',
  options: ['عيباً في التصميم لا في العملاء', 'ضعفاً في تدريب موظفي الدعم', 'حاجة لزيادة عدد الموظفين', 'حاجة لإغلاق قناة الشكاوى'],
  correct_answer: 0,
  explanation: 'الشكوى نفسها من مئات تعني أن المنتج يصنعها.' },

{ topic: MSR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُقارَن به مقياس التجربة ليُفهَم؟',
  options: ['قياسه السابق وفئات العملاء فيه', 'عدد موظفي البنك في الفروع', 'حجم الإنفاق التسويقي الشهري', 'عدد الخدمات في التطبيق'],
  correct_answer: 0,
  explanation: 'الرقم المفرد لا يقول أتحسّن الأمر أم ساء.' },

{ topic: MSR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز اختبار تغيير على شريحة أولاً؟',
  options: ['يقيس أثره قبل تعميمه على الجميع', 'يعمّم التغيير أسرع على الجميع', 'يلغي الحاجة لقياس الأثر', 'يخفي التغيير عن العملاء كلهم'],
  correct_answer: 0,
  explanation: 'تعميم تغيير لم يُقَس أثره مقامرة بتجربة الجميع.' },

{ topic: MSR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يُفعَل حين يتحسّن رقم ويسوء آخر؟',
  options: ['موازنة الأثرين قبل تثبيت التغيير', 'تثبيت التغيير لأن أحدهما تحسّن', 'إلغاء القياس لتعارض النتائج', 'اختيار الرقم الذي يخدم الفريق'],
  correct_answer: 0,
  explanation: 'تسريع الرحلة بحذف تحقق مكسب في رقم وخسارة في آخر.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: JRN, difficulty: 'medium', type: 'code',
  question: 'ما الذي تكشفه هذي الأرقام عن الرحلة؟',
  code_snippet: 'بدأوا: عشرة آلاف\nبلغوا خطوة التحقق: ثمانية آلاف\nأتمّوا: ألف',
  options: ['خطوة التحقق نقطة تعثّر كبرى', 'الرحلة سليمة ولا عائق فيها', 'الشاشة الأولى هي المشكلة', 'العملاء غير مهتمين بالخدمة'],
  correct_answer: 0,
  explanation: 'الهبوط الحاد عند خطوة واحدة يشير إلى عيب فيها.' },

{ topic: JRN, difficulty: 'hard', type: 'code',
  question: 'ما تصنيف هذا الاحتكاك؟',
  code_snippet: 'الخطوة: تأكيد إضافي لتحويل كبير\nالأثر: تأخير ثوانٍ ومنع أخطاء مكلفة',
  options: ['احتكاك نافع يحمي العميل', 'احتكاك ضار يعطّله بلا سبب', 'خطوة زائدة تُحذَف فوراً', 'عيب في التصميم يجب إصلاحه'],
  correct_answer: 0,
  explanation: 'ما يمنع خسارة لا تُستردّ يستحق ثوانيه.' },

{ topic: JRN, difficulty: 'hard', type: 'code',
  question: 'ما تصنيف هذا الطلب في الرحلة؟',
  code_snippet: 'الحقل: مطلوب في نموذج التسجيل\nاستخدامه: لا شيء في أي نظام',
  options: ['احتكاك ضار يُحذَف من الرحلة', 'احتكاك نافع يحمي العميل', 'حقل لازم للالتزام النظامي', 'تحسين في تجربة المستخدم'],
  correct_answer: 0,
  explanation: 'كل حقل بلا استعمال يُسقِط جزءاً ممن بدأ.' },

{ topic: JRN, difficulty: 'medium', type: 'code',
  question: 'ما الذي ينقص رسالة الخطأ هذي؟',
  code_snippet: 'المعروض للعميل: تعذّر إتمام العملية\nلا سبب ولا خطوة تالية',
  options: ['ما حدث وما يفعله العميل الآن', 'رمز الخطأ التقني الكامل', 'اعتذار أطول وأكثر تهذيباً', 'إخفاء الرسالة عن العميل'],
  correct_answer: 0,
  explanation: 'العميل لا يحتاج سبباً تقنياً بل خطوة تالية.' },

{ topic: PER, difficulty: 'hard', type: 'code',
  question: 'ما الحكم على هذا التخصيص؟',
  code_snippet: 'الاستنتاج: حالة صحية من نمط الإنفاق\nالمعروض: منتج بناءً عليها\nإفصاح للعميل: لا يوجد',
  options: ['تطفّل يهدر ثقة العميل', 'تخصيص نافع يخدم حاجته', 'إجراء تفرضه الجهة التنظيمية', 'تحسين محايد لا أثر له'],
  correct_answer: 0,
  explanation: 'الاستنتاج الصائب قد يكون أكثر إزعاجاً من الخاطئ.' },

{ topic: PER, difficulty: 'medium', type: 'code',
  question: 'ما الذي يجعل هذا التخصيص مقبولاً؟',
  code_snippet: 'المعروض: اقتراح مع سبب ظهوره\nالمتاح: زر لإيقاف هذا النوع',
  options: ['وضوح السبب وإمكان الإيقاف', 'دقّة التنبؤ في الاقتراح', 'كثرة الاقتراحات المعروضة', 'إخفاء مصدر البيانات'],
  correct_answer: 0,
  explanation: 'من عرف لماذا رأى هذا الاقتراح يقبله أو يوقفه بوعي.' },

{ topic: PER, difficulty: 'hard', type: 'code',
  question: 'ما الذي تكشفه هذي المراجعة؟',
  code_snippet: 'رضا العملاء عن التخصيص: مرتفع في المتوسط\nفي فئة كبار السن: منخفض جداً',
  options: ['متوسط يخفي فئة تُخدَم أسوأ', 'نجاح متكامل للتخصيص', 'خطأ في طريقة القياس حتماً', 'حاجة لرفع عدد الاقتراحات'],
  correct_answer: 0,
  explanation: 'التقسيم بالفئات يكشف ما يبتلعه المتوسط.' },

{ topic: MSR, difficulty: 'medium', type: 'code',
  question: 'ما الذي تدلّ عليه هذي المقارنة؟',
  code_snippet: 'ما يقوله العملاء: الخدمة سهلة\nما يفعلونه: يتركونها عند الخطوة الثالثة',
  options: ['السلوك يخالف الرأي فيُقدَّم عليه', 'الرأي أدق من السلوك دائماً', 'القياسان متطابقان ولا تعارض', 'خطأ في أداة القياس حتماً'],
  correct_answer: 0,
  explanation: 'ما يقوله العميل قد يخالف ما يفعله، فيُقرآن معاً.' },

{ topic: MSR, difficulty: 'hard', type: 'code',
  question: 'ما الحكم على هذا التغيير؟',
  code_snippet: 'بعد حذف خطوة التحقق\nمعدل الإتمام: ارتفع\nالعمليات المتنازَع عليها: ارتفعت أكثر',
  options: ['مكسب في رقم وخسارة أكبر في آخر', 'مكسب صافٍ يُثبَّت فوراً', 'لا أثر يُذكَر في الطرفين', 'خسارة في الرقمين معاً'],
  correct_answer: 0,
  explanation: 'موازنة الأثرين تسبق تثبيت أي تغيير.' },

{ topic: MSR, difficulty: 'medium', type: 'code',
  question: 'ما الذي ينقص هذا القياس؟',
  code_snippet: 'الرقم: رضا العملاء ٧ من ١٠\nلا مقارنة بقياس سابق ولا تقسيم بالفئات',
  options: ['مرجع يُقارَن به وتقسيم بالفئات', 'رقم إضافي عن سرعة التطبيق', 'مقارنة بمنافس في السوق', 'هدف أعلى للعام القادم'],
  correct_answer: 0,
  explanation: 'الرقم المفرد لا يقول أتحسّن الأمر أم ساء.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: JRN, difficulty: 'medium', type: 'true-false',
  question: 'كل خطوة تُضاف للرحلة تُسقِط جزءاً ممن بدأها.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ولهذا تبقى الخطوة التي لا تتم الخدمة بدونها.' },

{ topic: JRN, difficulty: 'medium', type: 'true-false',
  question: 'كل احتكاك في الرحلة عيب يجب حذفه.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الاحتكاك النافع يحمي العميل من خسارة لا تُستردّ.' },

{ topic: JRN, difficulty: 'hard', type: 'true-false',
  question: 'حفظ تقدّم العميل يرفع إتمام الرحلات الطويلة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'من انقطع ولم يفقد ما أنجزه يعود، ومن فقده لا يعود.' },

{ topic: JRN, difficulty: 'medium', type: 'true-false',
  question: 'إخفاء عدد الخطوات المتبقية يقلّل هجر العميل.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'المجهول يبدو أطول مما هو، فيُترَك قبل نهايته.' },

{ topic: PER, difficulty: 'medium', type: 'true-false',
  question: 'وضوح سبب الاقتراح وإمكان إيقافه يجعلان التخصيص مقبولاً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'من عرف لماذا رأى هذا الاقتراح يقبله أو يوقفه بوعي.' },

{ topic: PER, difficulty: 'hard', type: 'true-false',
  question: 'دقّة التنبؤ وحدها تكفي لقبول العميل للتخصيص.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الاستنتاج الصائب قد يكون أكثر إزعاجاً من الخاطئ.' },

{ topic: PER, difficulty: 'medium', type: 'true-false',
  question: 'ترتيب العرض تخصيص، وحرمان فئة من منتج تمييز.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الأول يقصّر الطريق، والثاني يمنع حقاً.' },

{ topic: MSR, difficulty: 'medium', type: 'true-false',
  question: 'ما يقوله العميل عن الخدمة يطابق دائماً ما يفعله فيها.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'ولهذا يُقرأ المقياس المعلَن مع السلوكي معاً.' },

{ topic: MSR, difficulty: 'hard', type: 'true-false',
  question: 'متوسط الرضا قد يخفي فئة تعاني بين راضين كثيرين.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'التقسيم بالفئات يكشف ما يبتلعه المتوسط.' },

{ topic: MSR, difficulty: 'medium', type: 'true-false',
  question: 'ارتفاع مقياس واحد كافٍ لتثبيت التغيير الذي أحدثه.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'قد يقابله هبوط أكبر في مقياس آخر.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: JRN, difficulty: 'medium', type: 'matching',
  question: 'صل كل عنصر في الرحلة بأثره',
  pairs: [ { left: 'خطوة بلا غرض', right: 'هجر بلا مقابل' }, { left: 'حفظ التقدّم', right: 'عودة من انقطع' }, { left: 'بيان الخطوات المتبقية', right: 'توقّع يرفع الإكمال' }, { left: 'رسالة خطأ واضحة', right: 'خطوة تالية يعرفها' } ],
  explanation: 'تفاصيل صغيرة تفرّق بين من يُكمِل ومن يترك.' },

{ topic: JRN, difficulty: 'hard', type: 'matching',
  question: 'صل كل احتكاك بحكمه',
  pairs: [ { left: 'تأكيد تحويل كبير', right: 'نافع يحمي' }, { left: 'حقل لا يُستعمَل', right: 'ضار يعطّل' }, { left: 'تحقق عند جهاز جديد', right: 'نافع يحمي' }, { left: 'إعادة إدخال بيانات محفوظة', right: 'ضار يعطّل' } ],
  explanation: 'الحكم يتبع ما يقيه الاحتكاك لا وجوده.' },

{ topic: PER, difficulty: 'medium', type: 'matching',
  question: 'صل كل ممارسة في التخصيص بحكمها',
  pairs: [ { left: 'ترتيب بحسب الاستخدام', right: 'خدمة مقبولة' }, { left: 'استنتاج ما لم يُفصِح عنه', right: 'تطفّل يهدر الثقة' }, { left: 'بيان سبب الاقتراح', right: 'شفافية تبني القبول' }, { left: 'إخفاء التحكم', right: 'كأن التحكم غير موجود' } ],
  explanation: 'المقبول ما يفهمه العميل ويستطيع إيقافه.' },

{ topic: PER, difficulty: 'hard', type: 'matching',
  question: 'صل كل خطر في التخصيص بعلاجه',
  pairs: [ { left: 'اقتراح لا يناسب', right: 'مراجعة جودة البيانات' }, { left: 'شعور بالتطفّل', right: 'إفصاح وإيقاف' }, { left: 'فئة تُخدَم أسوأ', right: 'تقسيم النتائج بالفئات' }, { left: 'اقتراح يخدم البائع', right: 'ربطه بحاجة العميل' } ],
  explanation: 'أربعة أخطار لكل واحد علاج يخصّه.' },

{ topic: MSR, difficulty: 'medium', type: 'matching',
  question: 'صل كل مقياس بما يقيسه',
  pairs: [ { left: 'معدل الإتمام', right: 'من بدأ فأنهى' }, { left: 'مقياس الجهد', right: 'كم شقّ على العميل' }, { left: 'مقياس الرضا', right: 'كم أعجبه' }, { left: 'معدل التكرار', right: 'عودته للخدمة' } ],
  explanation: 'أربعة أرقام لا يغني أحدها عن الآخر.' },

{ topic: MSR, difficulty: 'hard', type: 'matching',
  question: 'صل كل نوع مقياس بمصدره',
  pairs: [ { left: 'سلوكي', right: 'ما يفعله العميل فعلاً' }, { left: 'معلَن', right: 'ما يقوله في سؤال' }, { left: 'تشغيلي', right: 'زمن الاستجابة والأعطال' }, { left: 'دعم العملاء', right: 'ما يشتكي منه متكرراً' } ],
  explanation: 'اجتماع المصادر يكشف ما يخفيه مصدر واحد.' },

{ topic: JRN, difficulty: 'medium', type: 'matching',
  question: 'صل كل عائق أمام الوصول بمعالجته',
  pairs: [ { left: 'ضعف البصر', right: 'خط أكبر وتباين عالٍ' }, { left: 'صعوبة الحركة الدقيقة', right: 'أهداف لمس أوسع' }, { left: 'ضعف القراءة', right: 'لغة مبسّطة ورموز' }, { left: 'اتصال ضعيف', right: 'شاشات أخفّ' } ],
  explanation: 'ما يصعب استعماله يستبعد من صُمِّم لهم.' },

{ topic: MSR, difficulty: 'medium', type: 'matching',
  question: 'صل كل خطوة في القياس بغرضها',
  pairs: [ { left: 'اختيار المقياس', right: 'تحديد ما يهمّ فعلاً' }, { left: 'القياس في وقته', right: 'رأي عن تجربة لا انطباع' }, { left: 'التقسيم بالفئات', right: 'كشف ما يخفيه المتوسط' }, { left: 'ربطه بخطوة', right: 'معرفة ما يُصلَح' } ],
  explanation: 'رقم بلا موضع لا يقول ماذا يُصلَح.' },

{ topic: PER, difficulty: 'medium', type: 'matching',
  question: 'صل كل مستوى تخصيص بما يعتمد عليه',
  pairs: [ { left: 'تفضيلات صرّح بها', right: 'ما اختاره بنفسه' }, { left: 'سلوك داخل الخدمة', right: 'ما فعله فيها' }, { left: 'بيانات الحساب', right: 'ما يملكه ويستخدمه' }, { left: 'استنتاج حسّاس', right: 'ما لم يُفصِح عنه' } ],
  explanation: 'كلما ابتعد المصدر عن تصريحه ازداد وجوب الحذر.' },

{ topic: JRN, difficulty: 'hard', type: 'matching',
  question: 'صل كل رقم في الرحلة بما يوجّه إليه',
  pairs: [ { left: 'هبوط عند خطوة', right: 'فحص تلك الخطوة' }, { left: 'هبوط موزّع', right: 'مراجعة الرحلة كلها' }, { left: 'إتمام مرتفع ونزاع مرتفع', right: 'تحقق نقص' }, { left: 'عودة متكررة للدعم', right: 'غموض في التصميم' } ],
  explanation: 'الرقم يقول أين ينظر لا ماذا يفعل.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: JRN, difficulty: 'easy', type: 'terminal', prompt_label: 'المفهوم',
  question: 'اكتب اسم تتابع خطوات العميل من الحاجة حتى إنجازها',
  expected_answers: ['رحلة العميل', 'الرحلة', 'customer journey', 'رحلة المستخدم'],
  explanation: 'تُقاس بما أنجزه العميل لا بما عُرِض عليه.' },

{ topic: JRN, difficulty: 'medium', type: 'terminal', prompt_label: 'الموضع',
  question: 'اكتب اسم الخطوة التي يتوقف عندها كثير من العملاء',
  expected_answers: ['نقطة التعثّر', 'نقطة الهجر', 'التعثّر', 'نقطة التسرّب'],
  explanation: 'العدد الكبير عند خطوة واحدة يشير إلى عيب فيها.' },

{ topic: JRN, difficulty: 'medium', type: 'terminal', prompt_label: 'الوصف',
  question: 'اكتب اسم ما يعطّل العميل بلا سبب يخدمه',
  expected_answers: ['احتكاك ضار', 'الاحتكاك الضار', 'احتكاك بلا فائدة', 'عائق زائد'],
  explanation: 'يقابله الاحتكاك النافع الذي يقيه خسارة.' },

{ topic: JRN, difficulty: 'hard', type: 'terminal', prompt_label: 'الحل',
  question: 'اكتب ما يمنع ضياع ما أنجزه العميل عند الانقطاع',
  expected_answers: ['حفظ التقدّم', 'حفظ المسودة', 'استكمال لاحق', 'حفظ الحالة'],
  explanation: 'من انقطع ولم يفقد ما أنجزه يعود.' },

{ topic: PER, difficulty: 'medium', type: 'terminal', prompt_label: 'المفهوم',
  question: 'اكتب اسم تكييف ما يُعرَض بحسب حال العميل وسلوكه',
  expected_answers: ['التخصيص', 'الشخصنة', 'personalization', 'التخصيص الشخصي'],
  explanation: 'يقصّر الطريق إلى ما يحتاجه فعلاً.' },

{ topic: PER, difficulty: 'hard', type: 'terminal', prompt_label: 'الشرطان',
  question: 'اكتب ما يجعل التخصيص مقبولاً عند العميل',
  expected_answers: ['وضوح السبب وإمكان الإيقاف', 'الإفصاح والتحكم', 'بيان السبب والتحكم', 'الشفافية والإيقاف'],
  explanation: 'من عرف لماذا رأى الاقتراح يقبله أو يوقفه بوعي.' },

{ topic: MSR, difficulty: 'medium', type: 'terminal', prompt_label: 'المقياس',
  question: 'اكتب اسم نسبة من بدأ الإجراء فأنهاه',
  expected_answers: ['معدل الإتمام', 'نسبة الإتمام', 'completion rate', 'معدل الإنجاز'],
  explanation: 'من بدأ ولم ينهِ رقم يقول إن ثمة عائقاً.' },

{ topic: MSR, difficulty: 'hard', type: 'terminal', prompt_label: 'المقياس',
  question: 'اكتب اسم ما يسأل العميل كم شقّ عليه الإجراء',
  expected_answers: ['مقياس الجهد', 'جهد العميل', 'customer effort', 'مؤشر الجهد'],
  explanation: 'المشقّة تتنبأ بالترك أكثر مما يتنبأ به الإعجاب.' },

{ topic: MSR, difficulty: 'medium', type: 'terminal', prompt_label: 'التحليل',
  question: 'اكتب ما يكشف فئة تعاني خلف متوسط مرتفع',
  expected_answers: ['التقسيم بالفئات', 'تقسيم النتائج', 'التجزئة', 'التحليل بالشرائح'],
  explanation: 'المتوسط يبتلع ما يعانيه القليل.' },

{ topic: MSR, difficulty: 'hard', type: 'terminal', prompt_label: 'الأسلوب',
  question: 'اكتب اسم تجربة التغيير على شريحة قبل تعميمه',
  expected_answers: ['الاختبار على شريحة', 'التجربة المحدودة', 'الإطلاق التدريجي', 'اختبار مقارن'],
  explanation: 'تعميم تغيير لم يُقَس أثره مقامرة بتجربة الجميع.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: JRN, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يرفع إتمام الرحلة؟',
  options: ['حفظ تقدّم العميل', 'بيان الخطوات المتبقية', 'إضافة حقول احتياطية', 'إخفاء طول الإجراء'],
  correct_answers: [0, 1],
  explanation: 'الحقول الزائدة والغموض يرفعان الهجر لا الإتمام.' },

{ topic: JRN, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي احتكاك نافع؟',
  options: ['تأكيد قبل تحويل كبير', 'تحقق عند جهاز جديد', 'حقل لا يُستعمَل بعد جمعه', 'إعادة إدخال بيانات محفوظة'],
  correct_answers: [0, 1],
  explanation: 'ما يمنع خسارة لا تُستردّ يستحق ثوانيه.' },

{ topic: JRN, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي من التصميم الذي يراعي القدرة؟',
  options: ['تباين عالٍ وخط أكبر', 'دلالة لا تعتمد اللون وحده', 'وقت قصير مفروض لكل خطوة', 'افتراض حركة دقيقة للأصابع'],
  correct_answers: [0, 1],
  explanation: 'الافتراضان الأخيران يستبعدان فئات كاملة.' },

{ topic: PER, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يجعل التخصيص مقبولاً؟',
  options: ['بيان سبب ظهور الاقتراح', 'تحكم يجده العميل ويفهمه', 'إخفاء مصدر البيانات', 'منع العميل من إيقافه'],
  correct_answers: [0, 1],
  explanation: 'تحكّم لا يُعثَر عليه كأنه غير موجود.' },

{ topic: PER, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يهدر ثقة العميل بالتخصيص؟',
  options: ['استنتاج ما لم يُفصِح عنه', 'اقتراح لا يناسبه مراراً', 'ترتيب بحسب استخدامه', 'تذكّر لغته المفضّلة'],
  correct_answers: [0, 1],
  explanation: 'الأخيران تخصيص مقبول لا مأخذ عليه.' },

{ topic: PER, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يُراجَع في التخصيص دورياً؟',
  options: ['أثره على كل فئة لا متوسطه', 'انتفاع العميل به لا نقره', 'سرعة توليده تقنياً', 'حجم البيانات المستهلَكة'],
  correct_answers: [0, 1],
  explanation: 'السرعة والحجم شأن تقني لا شأن تجربة.' },

{ topic: MSR, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي مقياس سلوكي؟',
  options: ['معدل إتمام الرحلة', 'نقطة الهجر في الخطوات', 'رأي العميل في استبيان', 'تقييمه في متجر التطبيقات'],
  correct_answers: [0, 1],
  explanation: 'الأخيران معلَنان يُقرآن مع السلوكي لا بدلاً منه.' },

{ topic: MSR, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يلزم ليُفهَم رقم التجربة؟',
  options: ['مقارنته بقياس سابق', 'تقسيمه على فئات العملاء', 'مقارنته بعدد الموظفين', 'ربطه بالإنفاق التسويقي'],
  correct_answers: [0, 1],
  explanation: 'الرقم المفرد لا يقول أتحسّن الأمر أم ساء.' },

{ topic: MSR, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يحوّل القياس إلى تحسين؟',
  options: ['ربط الرقم بخطوة بعينها', 'معالجة تلك الخطوة وقياسها', 'نشر الرقم في تقرير', 'رفع الهدف للعام القادم'],
  correct_answers: [0, 1],
  explanation: 'رقم بلا موضع لا يقول ماذا يُصلَح.' },

{ topic: MSR, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يلزم عند تعارض المقاييس؟',
  options: ['موازنة الأثرين قبل التثبيت', 'تقدير كلفة كل منهما', 'اختيار ما يخدم الفريق', 'إلغاء القياس لتعارضه'],
  correct_answers: [0, 1],
  explanation: 'تسريع الرحلة بحذف تحقق مكسب في رقم وخسارة في آخر.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: JRN, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تحسين رحلة متعثّرة',
  options: ['رسم خطوات الرحلة كما هي', 'قياس الهبوط عند كل خطوة', 'معالجة الخطوة الأشد هبوطاً', 'قياس الأثر بعد المعالجة'],
  explanation: 'الرقم يقول أين ينظر، والمعالجة تتبعه لا تسبقه.' },

{ topic: JRN, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات الحكم على خطوة في الرحلة',
  options: ['تحديد غرضها المعلن', 'التحقق أن الغرض قائم فعلاً', 'تقدير ما تُسقِطه من عملاء', 'إبقاؤها أو حذفها بقرار موثّق'],
  explanation: 'خطوة بلا غرض قائم تُحذَف مهما اعتاد الفريق عليها.' },

{ topic: JRN, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات معالجة رسالة خطأ غامضة',
  options: ['حصر متى تظهر للعميل', 'تحديد ما يفعله عندها', 'صياغتها بلغته مع الخطوة', 'قياس أثرها في الدعم'],
  explanation: 'الرسالة الجيدة تُقاس بانخفاض من اتصل بالدعم بعدها.' },

{ topic: PER, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إطلاق تخصيص جديد',
  options: ['تحديد الحاجة التي يخدمها', 'تحديد البيانات المشروعة له', 'إتاحة الإفصاح والتحكم', 'قياس انتفاع الفئات به'],
  explanation: 'ما لا حاجة له لا يستحق بيانات ولا شاشة.' },

{ topic: PER, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات معالجة شكوى من تخصيص متطفّل',
  options: ['تحديد البيانات التي بُنِي عليها', 'تقدير هل يجاوز ما صرّح به', 'إيقاف النوع أو تعديله', 'مراجعة بقية أنواع التخصيص'],
  explanation: 'شكوى واحدة قد تكشف نمطاً في غيرها.' },

{ topic: PER, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات مراجعة عدالة التخصيص',
  options: ['تقسيم النتائج على الفئات', 'مقارنة ما يصل كل فئة', 'تحديد الفجوة وسببها', 'معالجتها وإعادة القياس'],
  explanation: 'متوسط جيد قد يخفي فئة تُخدَم أسوأ من غيرها.' },

{ topic: MSR, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات بناء قياس لتجربة العميل',
  options: ['تحديد ما يهمّ في هذي الرحلة', 'اختيار مقياس يعبّر عنه', 'قياسه في وقته لا متأخراً', 'مقارنته بمرجع وتقسيمه'],
  explanation: 'مقياس لا يعبّر عمّا يهمّ رقم بلا معنى.' },

{ topic: MSR, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات اختبار تغيير في التجربة',
  options: ['تحديد المقياس المستهدف', 'تشغيله على شريحة محدودة', 'مقارنة الشريحتين', 'التعميم أو التراجع'],
  explanation: 'تعميم تغيير لم يُقَس أثره مقامرة بتجربة الجميع.' },

{ topic: MSR, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات الاستفادة من شكاوى الدعم',
  options: ['تصنيف الشكاوى بموضوعها', 'كشف المتكرر منها', 'ربطه بخطوة في الرحلة', 'معالجة الخطوة لا الشكوى'],
  explanation: 'الشكوى نفسها من مئات تعني أن المنتج يصنعها.' },

{ topic: MSR, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات معالجة تعارض بين مقياسين',
  options: ['رصد اتجاه كل منهما', 'تقدير كلفة الخسارة ومكسب الربح', 'الموازنة بينهما بقرار', 'توثيق القرار وسببه'],
  explanation: 'قرار بلا سبب موثّق يُعاد النقاش فيه كل ربع.' }

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
