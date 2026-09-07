// الشبكات · S2 بروتوكولات الشبكات · L4 عناوين IPv6
// ثلاثة مواضيع مترابطة: بنية العنوان · أنواع العناوين · التشغيل والانتقال
//
// L3 حسب IPv4 وقسّمه، وانتهى إلى أن ندرة العناوين هي أصل التقسيم الدقيق
// والترجمة عند الحدود. وهذا المستوى يعرض الحل الجذري: مساحة عناوين لا
// تُستنفَد، ومعها اختصار في الكتابة وأنواع جديدة وطريقة إعداد ذاتية.
//
// المقارنة بـIPv4 مقصودة في كل موضع: ما الذي بقي، وما الذي زال (البث
// الشامل والحاجة للترجمة)، وما الذي حلّ محله (البث المتعدد والاكتشاف).
//
// الصعوبة: ٤ سهل · ٥٠ متوسط · ٣٦ صعب — مطابق لصف L4.

const T = 'Networking';
const S = 'Network Protocols';
const L = 4;

const STR = 'IPv6 Structure';
const TYP = 'IPv6 Address Types';
const OPS = 'IPv6 Operations';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

// ── بنية العنوان · ١٠ ──

{ topic: STR, difficulty: 'easy', type: 'multiple-choice',
  question: 'كم بتاً في عنوان IPv6؟',
  options: ['١٢٨ بتاً', '٦٤ بتاً', '٣٢ بتاً', '٢٥٦ بتاً'],
  correct_answer: 0,
  explanation: 'أربعة أضعاف IPv4، فمساحة العناوين لا تُقارَن بها.' },

{ topic: STR, difficulty: 'medium', type: 'multiple-choice',
  question: 'كيف يُكتَب عنوان IPv6؟',
  options: ['ثماني مجموعات ست عشرية بنقطتين', 'أربع خانات عشرية بنقاط', 'ست مجموعات ثنائية بشرطات', 'اثنتا عشرة مجموعة بفواصل'],
  correct_answer: 0,
  explanation: 'كل مجموعة أربعة رموز ست عشرية أي ستة عشر بتاً.' },

{ topic: STR, difficulty: 'medium', type: 'multiple-choice',
  question: 'كم بتاً في كل مجموعة من مجموعات العنوان؟',
  options: ['١٦ بتاً', '٨ بتات', '٣٢ بتاً', '٤ بتات'],
  correct_answer: 0,
  explanation: 'أربعة رموز ست عشرية × أربعة بتات لكل رمز.' },

{ topic: STR, difficulty: 'hard', type: 'multiple-choice',
  question: 'كم رمزاً ست عشرياً في العنوان الكامل؟',
  options: ['٣٢ رمزاً', '١٦ رمزاً', '٦٤ رمزاً', '٨ رموز'],
  correct_answer: 0,
  explanation: 'مئة وثمانية وعشرون بتاً مقسومة على أربعة لكل رمز.' },

{ topic: STR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يسمح به اختصار الأصفار البادئة؟',
  options: ['حذفها من أول كل مجموعة', 'حذف المجموعة كلها إن بدأت بصفر', 'استبدالها بنقطتين', 'إضافتها لآخر المجموعة'],
  correct_answer: 0,
  explanation: 'المجموعة 0db8 تُكتَب db8، والقيمة لا تتغيّر.' },

{ topic: STR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي تختصره النقطتان المزدوجتان في العنوان؟',
  options: ['سلسلة مجموعات أصفار متتالية', 'الأصفار البادئة في كل مجموعة', 'المجموعات الأربع الأخيرة دائماً', 'كل مجموعة تحوي صفراً واحداً'],
  correct_answer: 0,
  explanation: 'تختصر مجموعات كاملة أصفارها، لا أصفاراً داخل مجموعة.' },

{ topic: STR, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا لا تتكرر النقطتان المزدوجتان في عنوان واحد؟',
  options: ['لتعذّر معرفة كم مجموعة اختصرت كلٌّ منهما', 'لأن العنوان يصير أطول من المسموح', 'لأن القراءة تصير أصعب على المستخدم', 'لأن البروتوكول يمنع تكرار الرموز'],
  correct_answer: 0,
  explanation: 'الاختصار الواحد يُستعاد بالطرح، والاثنان يجعلان التوزيع مجهولاً.' },

{ topic: STR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يفصل جزء الشبكة عن جزء الواجهة؟',
  options: ['طول البادئة بترميز الشرطة المائلة', 'قناع بأربع خانات كما في IPv4', 'نقطتان مزدوجتان في وسط العنوان', 'أول مجموعة في العنوان دائماً'],
  correct_answer: 0,
  explanation: 'ترميز الطول وحده بقي، فلا قناع منقّطاً في IPv6.' },

{ topic: STR, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما طول البادئة المعتاد لشبكة فرعية في IPv6؟',
  options: ['/64', '/24', '/32', '/128'],
  correct_answer: 0,
  explanation: 'يترك أربعة وستين بتاً لمعرّف الواجهة، وهو ما يفترضه الإعداد الذاتي.' },

{ topic: STR, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يعنيه الترميز /128 لعنوان؟',
  options: ['عنوان واحد بعينه لا مدى', 'مدى يسع ١٢٨ عنواناً', 'شبكة فرعية قياسية', 'عنوان بث لكل الشبكة'],
  correct_answer: 0,
  explanation: 'كل البتات للشبكة، فلا يبقى للواجهة شيء يتغيّر.' },

// ── أنواع العناوين · ١٠ ──

{ topic: TYP, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الذي زال من IPv4 ولم يبقَ في IPv6؟',
  options: ['البث الشامل لكل الشبكة', 'البث الأحادي لجهاز واحد', 'البث المتعدد لمجموعة', 'عنوان الاسترجاع للجهاز'],
  correct_answer: 0,
  explanation: 'حلّ محلّه البث المتعدد الموجّه لمن اشترك وحده.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما البادئة التي تميّز عنوان الوصلة المحلية؟',
  options: ['fe80::/10', '2000::/3', 'ff00::/8', 'fc00::/7'],
  correct_answer: 0,
  explanation: 'يُولَّد تلقائياً على كل واجهة ولا يُوجَّه خارج الوصلة.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما البادئة التي تميّز البث المتعدد؟',
  options: ['ff00::/8', 'fe80::/10', '2000::/3', 'fd00::/8'],
  correct_answer: 0,
  explanation: 'كل ما يبدأ بـff رسالة لمجموعة مشتركة لا لجهاز بعينه.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز عنوان البث الأحادي العالمي؟',
  options: ['يُوجَّه على الإنترنت من 2000::/3', 'يقتصر على الوصلة المحلية وحدها', 'يخاطب مجموعة مشتركة من الأجهزة', 'يخاطب الجهاز نفسه دون الشبكة'],
  correct_answer: 0,
  explanation: 'نظير العنوان العام في IPv4، وهو ما يبلغ به الجهاز العالم.' },

{ topic: TYP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما نظير العنوان الخاص في IPv6؟',
  options: ['العنوان المحلي الفريد fc00::/7', 'عنوان الوصلة المحلية fe80::/10', 'عنوان البث المتعدد ff00::/8', 'العنوان العالمي 2000::/3'],
  correct_answer: 0,
  explanation: 'يُستعمَل داخلياً ولا يُوجَّه على الإنترنت، بخلاف الوصلة المحلية التي لا تغادر وصلتها.' },

{ topic: TYP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الفرق بين عنوان الوصلة المحلية والمحلي الفريد؟',
  options: ['الأول لا يغادر وصلته والثاني يُوجَّه داخلياً', 'الثاني لا يغادر وصلته والأول يُوجَّه داخلياً', 'الأول للخوادم والثاني للمحطات', 'الأول مؤقت والثاني مؤقت كذلك'],
  correct_answer: 0,
  explanation: 'الوصلة المحلية لا يعبرها موجّه، والمحلي الفريد يعبر شبكات المنشأة.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما عنوان الاسترجاع في IPv6؟',
  options: ['::1', '::', '127.0.0.1', 'fe80::1'],
  correct_answer: 0,
  explanation: 'مئة وسبعة وعشرون صفراً ثم واحد، ويختصر إلى نقطتين وواحد.' },

{ topic: TYP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يعنيه العنوان :: وحده؟',
  options: ['عنوان غير محدد بعد', 'عنوان الاسترجاع للجهاز', 'عنوان بث لكل الشبكة', 'عنوان الوصلة المحلية'],
  correct_answer: 0,
  explanation: 'يستعمله الجهاز مصدراً قبل أن يحصل على عنوانه.' },

{ topic: TYP, difficulty: 'medium', type: 'multiple-choice',
  question: 'كم عنواناً قد تحمله واجهة واحدة في IPv6؟',
  options: ['أكثر من عنوان في الوقت نفسه', 'عنواناً واحداً لا غير', 'عنوانين على الأكثر', 'عنواناً لكل بروتوكول تطبيق'],
  correct_answer: 0,
  explanation: 'وصلة محلية وعالمي ومؤقت قد تجتمع على واجهة واحدة.' },

{ topic: TYP, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الغرض من العنوان المؤقت في IPv6؟',
  options: ['تقليل تتبّع الجهاز عبر عنوانه الثابت', 'تسريع الاتصال بالمواقع البعيدة', 'توفير عناوين في الشبكة الداخلية', 'إلغاء الحاجة لعنوان عالمي'],
  correct_answer: 0,
  explanation: 'معرّف واجهة ثابت يتيح تتبّع الجهاز حيثما تنقّل.' },

// ── التشغيل والانتقال · ١٠ ──

{ topic: OPS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يحلّ محل ARP في IPv6؟',
  options: ['بروتوكول اكتشاف الجوار', 'خدمة توزيع العناوين', 'بروتوكول ترجمة الأسماء', 'بروتوكول التوجيه الديناميكي'],
  correct_answer: 0,
  explanation: 'يعمل فوق ICMPv6 بالبث المتعدد لا بالبث الشامل.' },

{ topic: OPS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما المقصود بالإعداد الذاتي عديم الحالة؟',
  options: ['الجهاز يبني عنوانه من بادئة الموجّه', 'الخادم يمنح الجهاز عنوانه كاملاً', 'المسؤول يسند العنوان يدوياً', 'الجهاز يستعمل عنوان الاسترجاع'],
  correct_answer: 0,
  explanation: 'يأخذ البادئة من إعلان الموجّه ويكمل معرّف الواجهة بنفسه.' },

{ topic: OPS, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يعلنه الموجّه في رسالة الإعلان؟',
  options: ['بادئة الشبكة ووجوده كبوابة', 'عنوان كل جهاز على الوصلة', 'أسماء الخوادم في المنشأة', 'جدول التوجيه كاملاً'],
  correct_answer: 0,
  explanation: 'منها يبني الجهاز عنوانه ويعرف من يسلّمه ما يخرج.' },

{ topic: OPS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز التشغيل المزدوج في الانتقال؟',
  options: ['تشغيل البروتوكولين معاً على الجهاز', 'تغليف حزم أحدهما داخل الآخر', 'ترجمة عناوين أحدهما للآخر', 'إيقاف القديم وتشغيل الجديد فوراً'],
  correct_answer: 0,
  explanation: 'أبسط الطرق وأكثرها استعمالاً، وثمنه إدارة مكدّسين معاً.' },

{ topic: OPS, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز النفق في الانتقال؟',
  options: ['تغليف حزم بروتوكول داخل الآخر', 'تشغيل البروتوكولين معاً', 'استبدال العناوين عند الحدود', 'إلغاء أحد البروتوكولين نهائياً'],
  correct_answer: 0,
  explanation: 'يعبر به IPv6 شبكات لا تدعمه بعد، وثمنه حمل إضافي وتعقيد.' },

{ topic: OPS, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا لا يحتاج IPv6 ترجمة العناوين للخروج؟',
  options: ['العناوين العالمية تكفي كل جهاز', 'الترجمة ممنوعة في البروتوكول', 'العناوين كلها خاصة بطبيعتها', 'الموجّهات لا تدعم الترجمة فيه'],
  correct_answer: 0,
  explanation: 'الندرة كانت سبب الترجمة في IPv4، وقد زالت هنا.' },

{ topic: OPS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما أثر غياب البث الشامل على الشبكة؟',
  options: ['ضجيج أقل لأن الرسالة تبلغ المشتركين', 'انقطاع اكتشاف الجوار بين الأجهزة', 'حاجة لعنوان بث في كل مدى', 'تعذّر الإعداد الذاتي للأجهزة'],
  correct_answer: 0,
  explanation: 'البث المتعدد يوصل الرسالة لمن يعنيه الأمر دون بقية الشبكة.' },

{ topic: OPS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجب فحصه أولاً في جهاز لا يبلغ الخارج بـIPv6؟',
  options: ['هل يحمل عنواناً عالمياً أصلاً', 'هل عنوان الوصلة المحلية موجود', 'هل الكابل موصول بالمبدّل', 'هل نظام التشغيل محدَّث'],
  correct_answer: 0,
  explanation: 'الوصلة المحلية تُولَّد دائماً، فوجودها لا يدل على إعداد سليم.' },

{ topic: OPS, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما دلالة جهاز يحمل وصلة محلية بلا عنوان عالمي؟',
  options: ['لم يصله إعلان موجّه أو خدمة عنونة', 'إعداده سليم ولا ينقصه شيء', 'عنوانه العالمي مخفيّ عن العرض', 'الكابل مفصول عن المبدّل'],
  correct_answer: 0,
  explanation: 'الوصلة المحلية ذاتية التوليد، فصمت الموجّه هو ما يُفتَقَد.' },

{ topic: OPS, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يبقى لازماً في IPv6 كما في IPv4؟',
  options: ['ترجمة الأسماء إلى عناوين', 'ترجمة العناوين عند الحدود', 'البث الشامل لاكتشاف الجوار', 'قناع منقّط بأربع خانات'],
  correct_answer: 0,
  explanation: 'العنوان الطويل يزيد الحاجة للأسماء لا يقللها.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: STR, difficulty: 'medium', type: 'code',
  question: 'ما الصيغة المختصرة لهذا العنوان؟',
  code_snippet: '2001:0db8:0000:0000:0000:0000:0000:0001',
  options: ['2001:db8::1', '2001:db8:0:1', '2001:0db8::0001:', '2001::db8::1'],
  correct_answer: 0,
  explanation: 'تُحذَف الأصفار البادئة، وتُختصَر الأصفار المتتالية بنقطتين مرة واحدة.' },

{ topic: STR, difficulty: 'hard', type: 'code',
  question: 'ما الخطأ في كتابة هذا العنوان؟',
  code_snippet: '2001:db8::1428::57ab',
  options: ['النقطتان المزدوجتان تكررتا', 'المجموعات أقل من ثمانٍ', 'رمز غير ست عشري في العنوان', 'الأصفار البادئة لم تُحذَف'],
  correct_answer: 0,
  explanation: 'تكرارهما يجعل عدد المجموعات المختصرة في كل موضع مجهولاً.' },

{ topic: STR, difficulty: 'medium', type: 'code',
  question: 'كم مجموعة أصفار اختصرتها النقطتان هنا؟',
  code_snippet: 'العنوان المختصر: 2001:db8::5\nالعنوان الكامل ثماني مجموعات',
  options: ['خمس مجموعات', 'ثلاث مجموعات', 'ست مجموعات', 'مجموعتان'],
  correct_answer: 0,
  explanation: 'ظهرت ثلاث مجموعات، فالمختصَر ثمانٍ ناقص ثلاث = خمس.' },

{ topic: TYP, difficulty: 'medium', type: 'code',
  question: 'ما نوع هذا العنوان؟',
  code_snippet: 'العنوان: fe80::1c2b:4aff:fe33:9012',
  options: ['وصلة محلية لا تغادر وصلتها', 'عالمي يُوجَّه على الإنترنت', 'بث متعدد لمجموعة مشتركة', 'محلي فريد يُوجَّه داخلياً'],
  correct_answer: 0,
  explanation: 'البادئة fe80 تعيّنه، ويُولَّد على كل واجهة تلقائياً.' },

{ topic: TYP, difficulty: 'hard', type: 'code',
  question: 'ما نوع هذا العنوان الثاني؟',
  code_snippet: 'العنوان: ff02::1',
  options: ['بث متعدد لكل العقد على الوصلة', 'بث أحادي لجهاز واحد بعينه', 'وصلة محلية لجهاز على الشبكة', 'عنوان غير محدد بعد'],
  correct_answer: 0,
  explanation: 'البادئة ff تعيّن البث المتعدد، وهذا يخص كل عقد الوصلة.' },

{ topic: OPS, difficulty: 'hard', type: 'code',
  question: 'ما الذي ينقص هذا الجهاز؟',
  code_snippet: 'العناوين على الواجهة:\nfe80::a1b2:c3d4:e5f6:7890\nلا عنوان آخر',
  options: ['عنوان عالمي من إعلان موجّه', 'عنوان وصلة محلية ثانٍ', 'قناع شبكة منقّط', 'عنوان استرجاع محلي'],
  correct_answer: 0,
  explanation: 'الوصلة المحلية ذاتية التوليد، فغياب العالمي يعني صمت الموجّه.' },

{ topic: STR, difficulty: 'hard', type: 'code',
  question: 'ما بادئة شبكة هذا العنوان؟',
  code_snippet: 'العنوان: 2001:db8:acad:12::9/64',
  options: ['2001:db8:acad:12::/64', '2001:db8::/64', '2001:db8:acad::/64', '2001:db8:acad:12:9::/64'],
  correct_answer: 0,
  explanation: 'أربع وستون بتاً = أربع مجموعات أولى، وما بعدها معرّف الواجهة.' },

{ topic: OPS, difficulty: 'medium', type: 'code',
  question: 'ما الذي يصفه هذا الترتيب في الانتقال؟',
  code_snippet: 'الجهاز يشغّل IPv4 وIPv6 معاً\nويختار حسب ما تدعمه الوجهة',
  options: ['تشغيل مزدوج', 'نفق تغليفي', 'ترجمة عناوين', 'إعداد ذاتي'],
  correct_answer: 0,
  explanation: 'أبسط طرق الانتقال، وثمنه إدارة مكدّسين ومجموعتَي سياسات.' },

{ topic: OPS, difficulty: 'hard', type: 'code',
  question: 'ما الذي يصفه هذا الترتيب الثاني؟',
  code_snippet: 'حزمة IPv6 تُغلَّف داخل حزمة IPv4\nلتعبر شبكة لا تدعم الجديد',
  options: ['نفق تغليفي', 'تشغيل مزدوج', 'إعداد ذاتي', 'اكتشاف جوار'],
  correct_answer: 0,
  explanation: 'يعبر به الجديد شبكات القديم، وثمنه حمل إضافي وتعقيد تشخيص.' },

{ topic: OPS, difficulty: 'medium', type: 'code',
  question: 'ما الذي بنى به الجهاز عنوانه هنا؟',
  code_snippet: 'وصل إعلان الموجّه بالبادئة 2001:db8:1::/64\nفصار للجهاز 2001:db8:1::a1b2',
  options: ['إعداد ذاتي عديم الحالة', 'إسناد يدوي من المسؤول', 'خادم توزيع عناوين', 'ترجمة من عنوان IPv4'],
  correct_answer: 0,
  explanation: 'أخذ البادئة من الإعلان وأكمل معرّف الواجهة بنفسه.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: STR, difficulty: 'easy', type: 'true-false',
  question: 'عنوان IPv6 يتكوّن من مئة وثمانية وعشرين بتاً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'أربعة أضعاف IPv4، وهو أصل اتساع مساحة العناوين.' },

{ topic: STR, difficulty: 'medium', type: 'true-false',
  question: 'النقطتان المزدوجتان قد تتكرران في العنوان الواحد.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'مرة واحدة فقط، وإلا صار توزيع الأصفار المختصرة مجهولاً.' },

{ topic: STR, difficulty: 'medium', type: 'true-false',
  question: 'الأصفار البادئة في المجموعة تُحذَف بلا تغيير في القيمة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: '0db8 تُكتَب db8، فالصفر البادئ لا يضيف قيمة.' },

{ topic: STR, difficulty: 'hard', type: 'true-false',
  question: 'القناع المنقّط بأربع خانات مستعمل في IPv6.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'ترميز الطول بالشرطة المائلة وحده هو المستعمل.' },

{ topic: TYP, difficulty: 'medium', type: 'true-false',
  question: 'البث الشامل ألغي في IPv6 وحلّ محله البث المتعدد.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الرسالة تبلغ من اشترك في المجموعة لا كل الشبكة.' },

{ topic: TYP, difficulty: 'medium', type: 'true-false',
  question: 'عنوان الوصلة المحلية يُوجَّه بين شبكات المنشأة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'لا يعبره موجّه، والذي يُوجَّه داخلياً هو المحلي الفريد.' },

{ topic: TYP, difficulty: 'hard', type: 'true-false',
  question: 'الواجهة الواحدة قد تحمل أكثر من عنوان IPv6 معاً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'وصلة محلية وعالمي ومؤقت قد تجتمع عليها في وقت واحد.' },

{ topic: OPS, difficulty: 'medium', type: 'true-false',
  question: 'الإعداد الذاتي يبني العنوان من بادئة يعلنها الموجّه.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الجهاز يكمل معرّف الواجهة بنفسه بعد أخذ البادئة.' },

{ topic: OPS, difficulty: 'hard', type: 'true-false',
  question: 'وجود عنوان وصلة محلية يدل على إعداد شبكة سليم.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'يُولَّد ذاتياً حتى لو صمت الموجّه، فلا يدل على شيء.' },

{ topic: OPS, difficulty: 'medium', type: 'true-false',
  question: 'ترجمة الأسماء تبقى لازمة في IPv6 كما في IPv4.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'العنوان الطويل يزيد الحاجة للأسماء لا يقللها.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: TYP, difficulty: 'medium', type: 'matching',
  question: 'صل كل بادئة بنوع عنوانها',
  pairs: [ { left: 'fe80::/10', right: 'وصلة محلية' }, { left: 'fc00::/7', right: 'محلي فريد' }, { left: '2000::/3', right: 'عالمي' }, { left: 'ff00::/8', right: 'بث متعدد' } ],
  explanation: 'البادئة وحدها تعيّن النوع، ومنها يُعرَف مدى انتشار العنوان.' },

{ topic: TYP, difficulty: 'hard', type: 'matching',
  question: 'صل كل نوع بمدى انتشاره',
  pairs: [ { left: 'وصلة محلية', right: 'لا يعبر موجّهاً' }, { left: 'محلي فريد', right: 'داخل المنشأة' }, { left: 'عالمي', right: 'على الإنترنت' }, { left: 'بث متعدد', right: 'لمن اشترك فيه' } ],
  explanation: 'أربعة مديات مختلفة، والخلط بينها يوجّه الحزمة لغير موضعها.' },

{ topic: STR, difficulty: 'medium', type: 'matching',
  question: 'صل كل قاعدة اختصار بأثرها',
  pairs: [ { left: 'حذف الأصفار البادئة', right: '0db8 تصير db8' }, { left: 'النقطتان المزدوجتان', right: 'اختصار مجموعات أصفار' }, { left: 'مرة واحدة للنقطتين', right: 'منع غموض التوزيع' }, { left: 'ترميز الطول', right: 'فصل الشبكة عن الواجهة' } ],
  explanation: 'قاعدتان للاختصار وقيد واحد عليهما، وترميز للطول بدل القناع.' },

{ topic: STR, difficulty: 'hard', type: 'matching',
  question: 'صل كل عدد بما يقيسه في IPv6',
  pairs: [ { left: '١٢٨', right: 'بتات العنوان' }, { left: '٨', right: 'مجموعات العنوان' }, { left: '١٦', right: 'بتات كل مجموعة' }, { left: '٣٢', right: 'رموز ست عشرية' } ],
  explanation: 'أربعة أعداد يشتقّ بعضها من بعض، وأصلها الاثنان والثلاثون بعد المئة.' },

{ topic: OPS, difficulty: 'medium', type: 'matching',
  question: 'صل كل آلية انتقال بوصفها',
  pairs: [ { left: 'التشغيل المزدوج', right: 'بروتوكولان معاً' }, { left: 'النفق', right: 'تغليف داخل الآخر' }, { left: 'الترجمة', right: 'تحويل بين العنوانين' }, { left: 'الإحلال', right: 'إيقاف القديم كلياً' } ],
  explanation: 'أربع طرق، والمزدوج أشيعها لأنه لا يقطع القديم.' },

{ topic: OPS, difficulty: 'hard', type: 'matching',
  question: 'صل كل وظيفة في IPv4 بما يقابلها في IPv6',
  pairs: [ { left: 'ARP', right: 'اكتشاف الجوار' }, { left: 'البث الشامل', right: 'البث المتعدد' }, { left: 'القناع المنقّط', right: 'ترميز الطول' }, { left: 'الترجمة للخروج', right: 'عنوان عالمي مباشر' } ],
  explanation: 'كل وظيفة بقيت وتغيّرت وسيلتها، عدا الترجمة فزال سببها.' },

{ topic: TYP, difficulty: 'medium', type: 'matching',
  question: 'صل كل عنوان خاص بدوره',
  pairs: [ { left: '::1', right: 'استرجاع للجهاز' }, { left: '::', right: 'غير محدد بعد' }, { left: 'ff02::1', right: 'كل العقد على الوصلة' }, { left: 'ff02::2', right: 'كل الموجّهات على الوصلة' } ],
  explanation: 'أربعة عناوين محفوظة يُبنى عليها الاكتشاف والتشخيص.' },

{ topic: OPS, difficulty: 'medium', type: 'matching',
  question: 'صل كل عرَض في IPv6 بسببه المحتمل',
  pairs: [ { left: 'وصلة محلية بلا عالمي', right: 'لا إعلان من موجّه' }, { left: 'لا عنوان إطلاقاً', right: 'الواجهة معطّلة' }, { left: 'عالمي بلا وصول للخارج', right: 'بوابة أو توجيه ناقص' }, { left: 'عناوين تعمل والأسماء لا', right: 'خادم أسماء لا يستجيب' } ],
  explanation: 'كل عرَض يشير لطبقة مختلفة، والتشخيص يبدأ بما هو أدنى.' },

{ topic: STR, difficulty: 'hard', type: 'matching',
  question: 'صل كل ترميز طول بما يعنيه',
  pairs: [ { left: '/64', right: 'شبكة فرعية قياسية' }, { left: '/128', right: 'عنوان واحد بعينه' }, { left: '/48', right: 'مدى يُخصَّص لمنشأة' }, { left: '/10', right: 'مدى الوصلة المحلية' } ],
  explanation: 'الطول يحدد ما بقي لمعرّف الواجهة، وكلما قصر اتسع المدى.' },

{ topic: TYP, difficulty: 'hard', type: 'matching',
  question: 'صل كل مفهوم بمعناه في IPv6',
  pairs: [ { left: 'معرّف الواجهة', right: 'ما بعد بادئة الشبكة' }, { left: 'العنوان المؤقت', right: 'يقلّل تتبّع الجهاز' }, { left: 'الإعداد الذاتي', right: 'بادئة من الموجّه' }, { left: 'إعلان الموجّه', right: 'يحمل البادئة والبوابة' } ],
  explanation: 'أربعة مفاهيم يقوم عليها تشغيل IPv6 اليومي.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: STR, difficulty: 'easy', type: 'terminal', prompt_label: 'العدد',
  question: 'اكتب عدد بتات عنوان IPv6',
  expected_answers: ['128', '١٢٨', 'مئة وثمانية وعشرون'],
  explanation: 'أربعة أضعاف عنوان IPv4.' },

{ topic: STR, difficulty: 'medium', type: 'terminal', prompt_label: 'العدد',
  question: 'اكتب عدد المجموعات في عنوان IPv6 الكامل',
  expected_answers: ['8', '٨', 'ثمانية', 'ثماني مجموعات'],
  explanation: 'كل مجموعة ستة عشر بتاً، فالمجموع مئة وثمانية وعشرون.' },

{ topic: STR, difficulty: 'medium', type: 'terminal', prompt_label: 'الترميز',
  question: 'اكتب طول البادئة المعتاد لشبكة فرعية في IPv6',
  expected_answers: ['/64', '64', '٦٤'],
  explanation: 'يترك أربعة وستين بتاً لمعرّف الواجهة.' },

{ topic: TYP, difficulty: 'medium', type: 'terminal', prompt_label: 'البادئة',
  question: 'اكتب البادئة التي تميّز عنوان الوصلة المحلية',
  expected_answers: ['fe80::/10', 'fe80', 'FE80::/10', 'fe80::'],
  explanation: 'يُولَّد تلقائياً على كل واجهة ولا يغادر وصلته.' },

{ topic: TYP, difficulty: 'medium', type: 'terminal', prompt_label: 'العنوان',
  question: 'اكتب عنوان الاسترجاع في IPv6',
  expected_answers: ['::1', '::1/128'],
  explanation: 'مئة وسبعة وعشرون صفراً ثم واحد.' },

{ topic: TYP, difficulty: 'hard', type: 'terminal', prompt_label: 'البادئة',
  question: 'اكتب البادئة التي تميّز عناوين البث المتعدد',
  expected_answers: ['ff00::/8', 'ff', 'ff00', 'FF00::/8'],
  explanation: 'كل ما يبدأ بـff رسالة لمجموعة مشتركة.' },

{ topic: TYP, difficulty: 'hard', type: 'terminal', prompt_label: 'النوع',
  question: 'اكتب نظير العنوان الخاص في IPv6',
  expected_answers: ['المحلي الفريد', 'unique local', 'fc00::/7', 'العنوان المحلي الفريد'],
  explanation: 'يُوجَّه داخل المنشأة ولا يخرج للإنترنت.' },

{ topic: OPS, difficulty: 'medium', type: 'terminal', prompt_label: 'البروتوكول',
  question: 'اكتب اسم ما يحلّ محل ARP في IPv6',
  expected_answers: ['اكتشاف الجوار', 'NDP', 'neighbor discovery', 'بروتوكول اكتشاف الجوار'],
  explanation: 'يعمل فوق ICMPv6 بالبث المتعدد لا بالبث الشامل.' },

{ topic: OPS, difficulty: 'medium', type: 'terminal', prompt_label: 'الآلية',
  question: 'اكتب اسم بناء الجهاز عنوانه من بادئة الموجّه',
  expected_answers: ['الإعداد الذاتي', 'SLAAC', 'slaac', 'الإعداد الذاتي عديم الحالة'],
  explanation: 'يأخذ البادئة ويكمل معرّف الواجهة بنفسه.' },

{ topic: OPS, difficulty: 'hard', type: 'terminal', prompt_label: 'الطريقة',
  question: 'اكتب اسم تشغيل البروتوكولين معاً على الجهاز',
  expected_answers: ['التشغيل المزدوج', 'dual stack', 'المكدّس المزدوج', 'الازدواج'],
  explanation: 'أشيع طرق الانتقال لأنه لا يقطع القديم.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: STR, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن بنية عنوان IPv6؟',
  options: ['١٢٨ بتاً', 'ثماني مجموعات', '٣٢ بتاً', 'أربع خانات عشرية'],
  correct_answers: [0, 1],
  explanation: 'الخياران الأخيران وصف IPv4 لا IPv6.' },

{ topic: STR, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي قاعدة اختصار صحيحة؟',
  options: ['حذف الأصفار البادئة في المجموعة', 'اختصار مجموعات الأصفار مرة واحدة', 'اختصار الأصفار مرتين إن لزم', 'حذف المجموعة الأخيرة دائماً'],
  correct_answers: [0, 1],
  explanation: 'التكرار يجعل التوزيع مجهولاً، وحذف الأخيرة ليس قاعدة أصلاً.' },

{ topic: TYP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي عنوان لا يُوجَّه على الإنترنت؟',
  options: ['fe80::1', 'fd00::5', '2001:db8::1', '2a00:1450::1'],
  correct_answers: [0, 1],
  explanation: 'الأول وصلة محلية والثاني محلي فريد، والآخران من المدى العالمي.' },

{ topic: TYP, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي صحيح عن البث في IPv6؟',
  options: ['البث الشامل ألغي', 'البث المتعدد حلّ محله', 'البث الشامل بقي كما هو', 'البث المتعدد ألغي كذلك'],
  correct_answers: [0, 1],
  explanation: 'الرسالة تبلغ المشتركين وحدهم، فيقلّ ضجيج الشبكة.' },

{ topic: TYP, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي قد تحمله واجهة واحدة معاً؟',
  options: ['عنوان وصلة محلية', 'عنوان عالمي', 'عنوان واحد لا غير', 'عنوان بث شامل'],
  correct_answers: [0, 1],
  explanation: 'تعدد العناوين طبيعي في IPv6، والبث الشامل غير موجود أصلاً.' },

{ topic: OPS, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يحمله إعلان الموجّه؟',
  options: ['بادئة الشبكة', 'وجود الموجّه كبوابة', 'عنوان كل جهاز على الوصلة', 'جدول التوجيه كاملاً'],
  correct_answers: [0, 1],
  explanation: 'منهما يبني الجهاز عنوانه ويعرف مخرجه.' },

{ topic: OPS, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي من طرق الانتقال؟',
  options: ['التشغيل المزدوج', 'النفق التغليفي', 'زيادة سعة الوصلات', 'ترقية المبدّلات فقط'],
  correct_answers: [0, 1],
  explanation: 'السعة والمبدّلات لا تخصّان انتقال البروتوكول.' },

{ topic: OPS, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يبقى لازماً في IPv6؟',
  options: ['ترجمة الأسماء', 'التوجيه بين الشبكات', 'ترجمة العناوين للخروج', 'البث الشامل للاكتشاف'],
  correct_answers: [0, 1],
  explanation: 'الترجمة زال سببها، والبث الشامل ألغي أصلاً.' },

{ topic: OPS, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يفسّر جهازاً بوصلة محلية بلا عالمي؟',
  options: ['لم يصل إعلان موجّه', 'الموجّه لا يُعلن البادئة', 'الواجهة معطّلة تماماً', 'الكابل مفصول عن المبدّل'],
  correct_answers: [0, 1],
  explanation: 'العطل والفصل يمنعان حتى الوصلة المحلية من الظهور.' },

{ topic: STR, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن ترميز الطول في IPv6؟',
  options: ['يفصل الشبكة عن معرّف الواجهة', 'يُكتَب بشرطة مائلة وعدد', 'يُكتَب قناعاً منقّطاً', 'يُشتقّ من أول مجموعة'],
  correct_answers: [0, 1],
  explanation: 'القناع المنقّط بقي في IPv4 وحده.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: STR, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات اختصار عنوان IPv6',
  options: ['كتابة العنوان بمجموعاته الثماني', 'حذف الأصفار البادئة في كل مجموعة', 'تحديد أطول سلسلة أصفار متتالية', 'استبدالها بنقطتين مرة واحدة'],
  explanation: 'الأطول أولى بالاختصار، والنقطتان مرة واحدة لا أكثر.' },

{ topic: STR, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات استعادة العنوان الكامل من مختصره',
  options: ['عدّ المجموعات الظاهرة', 'طرحها من ثمانٍ', 'وضع الناتج مجموعات أصفار', 'إعادة الأصفار البادئة لكل مجموعة'],
  explanation: 'الطرح هو ما يعيّن عدد المجموعات المختصَرة.' },

{ topic: OPS, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات حصول جهاز على عنوانه ذاتياً',
  options: ['توليد عنوان وصلة محلية', 'طلب إعلان من الموجّه', 'أخذ البادئة من الإعلان', 'تكوين العنوان العالمي'],
  explanation: 'الوصلة المحلية أولاً، وبها يخاطب الموجّه قبل أن يملك عالمياً.' },

{ topic: OPS, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تشخيص جهاز لا يبلغ الخارج بـIPv6',
  options: ['التأكد من عنوان الوصلة المحلية', 'التأكد من وجود عنوان عالمي', 'التأكد من بلوغ البوابة', 'التأكد من بلوغ وجهة خارجية'],
  explanation: 'من الأدنى للأعلى، وكل خطوة تبرّئ ما قبلها.' },

{ topic: OPS, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تشغيل IPv6 في شبكة قائمة',
  options: ['طلب مدى عناوين من المزوّد', 'تخطيط البادئات على الأقسام', 'تشغيل الإعلان على الموجّهات', 'تفعيل التشغيل المزدوج للأجهزة'],
  explanation: 'التخطيط قبل الإعلان، فالبادئة المعلنة يجب أن تكون مقرَّرة سلفاً.' },

{ topic: TYP, difficulty: 'medium', type: 'ordering',
  question: 'رتّب أنواع العناوين من الأضيق مدىً للأوسع',
  options: ['الاسترجاع للجهاز', 'الوصلة المحلية', 'المحلي الفريد', 'العالمي'],
  explanation: 'من داخل الجهاز إلى وصلته إلى منشأته إلى العالم.' },

{ topic: OPS, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات اكتشاف جوار على الوصلة',
  options: ['إرسال طلب جوار ببث متعدد', 'استقبال المعنيّ له وحده', 'رده بعنوانه الفيزيائي', 'تخزينه في جدول الجوار'],
  explanation: 'البث المتعدد يبلغ المعنيّ دون إزعاج بقية الوصلة.' },

{ topic: STR, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إيجاد بادئة شبكة من عنوان بطوله',
  options: ['قراءة عدد البتات بعد الشرطة', 'تحويله لعدد مجموعات', 'أخذ تلك المجموعات من اليسار', 'كتابة الباقي أصفاراً'],
  explanation: 'كل مجموعة ستة عشر بتاً، فـ/64 أربع مجموعات.' },

{ topic: OPS, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات معالجة جهاز بلا عنوان عالمي',
  options: ['التأكد أن الواجهة تعمل', 'التأكد من وصول إعلان الموجّه', 'فحص إعداد الإعلان على الموجّه', 'إعادة طلب العنوان بعد الإصلاح'],
  explanation: 'الواجهة أولاً، فجهاز معطّل الواجهة لا وصلة محلية له أصلاً.' },

{ topic: OPS, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات إدخال نفق لعبور شبكة قديمة',
  options: ['التأكد أن الطرفين يدعمان الجديد', 'تحديد الشبكة التي لا تدعمه', 'إنشاء النفق بين الطرفين', 'اختبار العبور والحمل الإضافي'],
  explanation: 'اختبار الحمل آخراً، فالتغليف يزيد حجم الحزمة ويعقّد التشخيص.' }

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
