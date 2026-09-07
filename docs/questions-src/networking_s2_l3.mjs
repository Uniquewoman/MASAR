// الشبكات · S2 بروتوكولات الشبكات · L3 عناوين IPv4 والتقسيم الفرعي
// ثلاثة مواضيع مترابطة: البنية الثنائية · القناع وCIDR · التقسيم عملياً
//
// S1 L4 وضع العنوان والقناع مفهوماً: جزء شبكة وجزء مضيف، وبوابة وجيران.
// وهذا المستوى يحسبها: كم عنواناً في المدى، وأين يبدأ وأين ينتهي، وأي
// قناع يكفي لعدد مضيفين مطلوب، وكيف يُقسَّم مدى واحد على عدة شبكات.
//
// كل سؤال حسابي هنا تُتبِّع يدوياً: حجم الكتلة = ٢٥٦ ناقص آخر خانة في
// القناع، وبداية المدى مضاعف حجم الكتلة الذي لا يتجاوز العنوان.
//
// الصعوبة: ٧ سهل · ٤٧ متوسط · ٣٦ صعب — ضمن صف L3.

const T = 'Networking';
const S = 'Network Protocols';
const L = 3;

const BIN = 'IPv4 Binary';
const CID = 'Mask and CIDR';
const SUB = 'Subnetting Practice';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

// ── البنية الثنائية · ١٠ ──

{ topic: BIN, difficulty: 'easy', type: 'multiple-choice',
  question: 'كم بتاً في كل خانة من خانات عنوان IPv4؟',
  options: ['٨ بتات', '٤ بتات', '١٦ بتاً', '٣٢ بتاً'],
  correct_answer: 0,
  explanation: 'أربع خانات × ثمانية = اثنان وثلاثون بتاً للعنوان كله.' },

{ topic: BIN, difficulty: 'easy', type: 'multiple-choice',
  question: 'كم قيمة مختلفة تحملها ثمانية بتات؟',
  options: ['٢٥٦ قيمة من ٠ إلى ٢٥٥', '٢٥٥ قيمة من ١ إلى ٢٥٥', '١٢٨ قيمة من ٠ إلى ١٢٧', '٦٤ قيمة من ٠ إلى ٦٣'],
  correct_answer: 0,
  explanation: 'اثنان مرفوعة للثمانية = ٢٥٦، والعدّ يبدأ من الصفر.' },

{ topic: BIN, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما القيمة العشرية للخانة 11000000؟',
  options: ['١٩٢', '١٢٨', '٢٢٤', '٢٤٠'],
  correct_answer: 0,
  explanation: 'البتّان الأعلى فقط: ١٢٨ + ٦٤ = ١٩٢.' },

{ topic: BIN, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما القيمة العشرية للخانة 11111110؟',
  options: ['٢٥٤', '٢٥٥', '٢٥٢', '١٢٧'],
  correct_answer: 0,
  explanation: '٢٥٥ ناقص واحد، فالبتّ الأدنى وحده صفر.' },

{ topic: BIN, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما التمثيل الثنائي للقيمة ١٢٨؟',
  options: ['10000000', '01000000', '11000000', '00000001'],
  correct_answer: 0,
  explanation: 'البتّ الأعلى وحده، وقيمته ١٢٨ في خانة ثمانية بتات.' },

{ topic: BIN, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما القيمة العشرية للخانة 11110000؟',
  options: ['٢٤٠', '٢٢٤', '٢٤٨', '١٩٢'],
  correct_answer: 0,
  explanation: '١٢٨ + ٦٤ + ٣٢ + ١٦ = ٢٤٠، وهي قناع أربعة بتات.' },

{ topic: BIN, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز قناعاً صالحاً في تمثيله الثنائي؟',
  options: ['آحاد متصلة ثم أصفار متصلة', 'آحاد وأصفار متناوبة', 'أصفار متصلة ثم آحاد متصلة', 'أي ترتيب من الآحاد والأصفار'],
  correct_answer: 0,
  explanation: 'القناع يفصل جزأين، فلا يصلح أن تتخلّل أصفارُه آحاده.' },

{ topic: BIN, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي تعنيه إضافة بتّ واحد لجزء الشبكة؟',
  options: ['ضِعف عدد الشبكات ونصف حجم كلٍّ', 'نصف عدد الشبكات وضِعف حجم كلٍّ', 'ضِعف عدد الشبكات وضِعف حجم كلٍّ', 'لا أثر على العدد ولا الحجم'],
  correct_answer: 0,
  explanation: 'كل بتّ يُقتطَع من المضيف يضاعف الشبكات ويقسم مداها.' },

{ topic: BIN, difficulty: 'medium', type: 'multiple-choice',
  question: 'كم عنواناً في مدى تركه القناع لأربعة بتات مضيف؟',
  options: ['١٦ عنواناً', '٨ عناوين', '٣٢ عنواناً', '٤ عناوين'],
  correct_answer: 0,
  explanation: 'اثنان مرفوعة للأربعة = ١٦، ومنها اثنان محجوزان.' },

{ topic: BIN, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يقلّ عدد المضيفين عن عدد العناوين باثنين؟',
  options: ['أول المدى للشبكة وآخره للبث', 'أول المدى للبوابة وآخره للأسماء', 'اثنان يُحجَزان للقناع نفسه', 'اثنان يُحجَزان لخدمة التوزيع'],
  correct_answer: 0,
  explanation: 'العنوانان محجوزان في كل مدى فلا يُسنَدان لجهاز.' },

// ── القناع وCIDR · ١٠ ──

{ topic: CID, difficulty: 'easy', type: 'multiple-choice',
  question: 'ما الذي يعنيه الترميز /24؟',
  options: ['٢٤ بتاً للشبكة و٨ للمضيف', '٢٤ بتاً للمضيف و٨ للشبكة', '٢٤ شبكة فرعية متاحة', '٢٤ مضيفاً في كل شبكة'],
  correct_answer: 0,
  explanation: 'الرقم يعدّ بتات الشبكة، والباقي من الاثنين والثلاثين للمضيف.' },

{ topic: CID, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما القناع المكافئ للترميز /26؟',
  options: ['255.255.255.192', '255.255.255.224', '255.255.255.128', '255.255.255.240'],
  correct_answer: 0,
  explanation: 'ستة وعشرون بتاً: ثلاث خانات كاملة وبتّان في الرابعة = ١٩٢.' },

{ topic: CID, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الترميز المكافئ للقناع 255.255.255.240؟',
  options: ['/28', '/26', '/27', '/29'],
  correct_answer: 0,
  explanation: '٢٤٠ = أربعة بتات آحاد، فالمجموع ٢٤ + ٤ = ٢٨.' },

{ topic: CID, difficulty: 'medium', type: 'multiple-choice',
  question: 'كم عنواناً في مدى /27؟',
  options: ['٣٢ عنواناً', '١٦ عنواناً', '٦٤ عنواناً', '٣٠ عنواناً'],
  correct_answer: 0,
  explanation: 'خمسة بتات مضيف: اثنان مرفوعة للخمسة = ٣٢، والمضيفون ٣٠.' },

{ topic: CID, difficulty: 'hard', type: 'multiple-choice',
  question: 'كم مضيفاً يسع مدى /29؟',
  options: ['٦ مضيفين', '٨ مضيفين', '١٤ مضيفاً', '٤ مضيفين'],
  correct_answer: 0,
  explanation: 'ثلاثة بتات مضيف = ٨ عناوين، ناقص اثنين محجوزين = ٦.' },

{ topic: CID, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز مدى /30 عن غيره؟',
  options: ['مضيفان يكفيان وصلة بين موجّهين', 'مضيف واحد يكفي جهازاً منفرداً', 'ستة مضيفين لشبكة صغيرة', 'أربعة عشر مضيفاً لمكتب صغير'],
  correct_answer: 0,
  explanation: 'أربعة عناوين: شبكة وبث ومضيفان، وهو أصغر ما يصلح لوصلة.' },

{ topic: CID, difficulty: 'medium', type: 'multiple-choice',
  question: 'كيف يُحسَب حجم الكتلة من آخر خانة في القناع؟',
  options: ['٢٥٦ ناقص قيمة تلك الخانة', 'قيمة تلك الخانة ناقص ٢٥٦', '٢٥٦ مقسومة على تلك القيمة', 'قيمة تلك الخانة مضروبة في ٢'],
  correct_answer: 0,
  explanation: 'قناع ١٩٢ يعطي كتلة ٦٤، و٢٢٤ يعطي ٣٢، وهكذا.' },

{ topic: CID, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يعنيه القناع المتغيّر الطول؟',
  options: ['قناع لكل شبكة بحسب حاجتها', 'قناع واحد لكل الشبكات', 'قناع يتغيّر مع الوقت تلقائياً', 'قناع يحدده المضيف لا الشبكة'],
  correct_answer: 0,
  explanation: 'وصلة بين موجّهين تأخذ /30، وقسم بخمسين جهازاً يأخذ /26.' },

{ topic: CID, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما فائدة تجميع المديات في مسار واحد؟',
  options: ['يختصر جداول التوجيه في الشبكة', 'يزيد عدد العناوين المتاحة', 'يرفع سرعة المنافذ المستعملة', 'يلغي الحاجة لقناع الشبكة'],
  correct_answer: 0,
  explanation: 'أربعة مديات متجاورة تُعلَن مدىً واحداً أوسع فيقلّ عدد السطور.' },

{ topic: CID, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يحدد أي مدى يكفي لعدد مضيفين مطلوب؟',
  options: ['أصغر مدى يتجاوز العدد بعد حجز اثنين', 'أكبر مدى متاح في العنونة', 'المدى الذي يساوي العدد تماماً', 'المدى الذي يستعمله بقية الأقسام'],
  correct_answer: 0,
  explanation: 'خمسون مضيفاً تحتاج /26 لا /27، لأن /27 يسع ثلاثين فقط.' },

// ── التقسيم عملياً · ١٠ ──

{ topic: SUB, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما عنوان شبكة الجهاز 192.168.1.100 بقناع /26؟',
  options: ['192.168.1.64', '192.168.1.0', '192.168.1.96', '192.168.1.128'],
  correct_answer: 0,
  explanation: 'الكتلة ٦٤، والمضاعف الذي لا يتجاوز ١٠٠ هو ٦٤.' },

{ topic: SUB, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما عنوان البث لشبكة 192.168.1.64 بقناع /26؟',
  options: ['192.168.1.127', '192.168.1.126', '192.168.1.128', '192.168.1.255'],
  correct_answer: 0,
  explanation: 'المدى ٦٤ إلى ١٢٧، فآخره ١٢٧ هو البث.' },

{ topic: SUB, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما مدى المضيفين الصالح في 192.168.1.64/26؟',
  options: ['من .65 إلى .126', 'من .64 إلى .127', 'من .65 إلى .127', 'من .64 إلى .126'],
  correct_answer: 0,
  explanation: 'يُستبعَد أول المدى للشبكة وآخره للبث، فيبقى ما بينهما.' },

{ topic: SUB, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما عنوان شبكة الجهاز 10.1.5.130 بقناع /25؟',
  options: ['10.1.5.128', '10.1.5.0', '10.1.5.130', '10.1.5.192'],
  correct_answer: 0,
  explanation: 'الكتلة ١٢٨، فالمدى الثاني يبدأ من ١٢٨ وينتهي ٢٥٥.' },

{ topic: SUB, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما عنوان شبكة الجهاز 172.16.4.20 بقناع /28؟',
  options: ['172.16.4.16', '172.16.4.0', '172.16.4.20', '172.16.4.32'],
  correct_answer: 0,
  explanation: 'الكتلة ١٦: المضاعفات ٠ و١٦ و٣٢، وأكبرها دون ٢٠ هو ١٦.' },

{ topic: SUB, difficulty: 'medium', type: 'multiple-choice',
  question: 'أي قناع يكفي قسماً فيه ٥٠ جهازاً؟',
  options: ['/26 لأنه يسع ٦٢ مضيفاً', '/27 لأنه يسع ٣٠ مضيفاً', '/28 لأنه يسع ١٤ مضيفاً', '/24 لأنه يسع ٢٥٤ مضيفاً'],
  correct_answer: 0,
  explanation: 'أصغر مدى يتجاوز الخمسين، فـ/27 لا يكفي و/24 إسراف.' },

{ topic: SUB, difficulty: 'medium', type: 'multiple-choice',
  question: 'أي قناع يكفي وصلة بين موجّهين؟',
  options: ['/30 لأنه يسع مضيفين', '/29 لأنه يسع ستة', '/28 لأنه يسع أربعة عشر', '/24 لأنه يسع مئتين'],
  correct_answer: 0,
  explanation: 'الوصلة طرفان فقط، وما زاد عنهما عناوين تُهدَر.' },

{ topic: SUB, difficulty: 'hard', type: 'multiple-choice',
  question: 'كم شبكة فرعية ينتج تقسيم /24 إلى /27؟',
  options: ['٨ شبكات', '٤ شبكات', '١٦ شبكة', '٣٢ شبكة'],
  correct_answer: 0,
  explanation: 'ثلاثة بتات مقتطعة: اثنان مرفوعة للثلاثة = ٨.' },

{ topic: SUB, difficulty: 'hard', type: 'multiple-choice',
  question: 'هل يتخاطب 192.168.1.60 و192.168.1.70 مباشرة بقناع /26؟',
  options: ['لا فهما في مديين مختلفين', 'نعم فهما في المدى نفسه', 'نعم إن اتفق عنوان البوابة', 'لا إلا بتغيير عنوان البث'],
  correct_answer: 0,
  explanation: 'الحدّ عند ٦٤: الأول في مدى ٠-٦٣ والثاني في ٦٤-١٢٧.' },

{ topic: SUB, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجب حسابه أولاً عند تقسيم مدى؟',
  options: ['عدد المضيفين المطلوب لكل شبكة', 'عدد المنافذ في كل مبدّل', 'طول الكابل بين الأجهزة', 'اسم كل شبكة في التوثيق'],
  correct_answer: 0,
  explanation: 'العدد يحدد القناع، والقناع يحدد بقية الحساب كله.' },

// ═══════════ كود · ١٠ ═══════════

{ topic: SUB, difficulty: 'medium', type: 'code',
  question: 'ما عنوان الشبكة لهذا الجهاز؟',
  code_snippet: 'العنوان: 192.168.10.200\nالقناع : 255.255.255.192',
  options: ['192.168.10.192', '192.168.10.128', '192.168.10.200', '192.168.10.64'],
  correct_answer: 0,
  explanation: 'الكتلة ٢٥٦−١٩٢=٦٤، والمضاعفات ٠ و٦٤ و١٢٨ و١٩٢، وأكبرها دون ٢٠٠ هو ١٩٢.' },

{ topic: SUB, difficulty: 'hard', type: 'code',
  question: 'ما عنوان البث لهذا المدى؟',
  code_snippet: 'الشبكة: 172.20.8.32\nالقناع : /27',
  options: ['172.20.8.63', '172.20.8.62', '172.20.8.64', '172.20.8.255'],
  correct_answer: 0,
  explanation: 'الكتلة ٣٢، فالمدى ٣٢ إلى ٦٣، وآخره البث.' },

{ topic: SUB, difficulty: 'hard', type: 'code',
  question: 'هل يتخاطب هذان الجهازان مباشرة؟',
  code_snippet: 'أ: 10.0.0.30 · القناع /28\nب: 10.0.0.20 · القناع /28',
  options: ['نعم فكلاهما في مدى ١٦ إلى ٣١', 'لا فأ في مدى مختلف عن ب', 'لا لأن القناع لا يسمح بذلك', 'نعم لأن القناع واحد بينهما'],
  correct_answer: 0,
  explanation: 'الكتلة ١٦: المدى الثاني ١٦-٣١ يضمّ العشرين والثلاثين معاً.' },

{ topic: SUB, difficulty: 'medium', type: 'code',
  question: 'أي قناع يناسب هذا الطلب؟',
  code_snippet: 'المطلوب: شبكة تتسع ١٢ جهازاً\nمع هامش بسيط للنمو',
  options: ['/28 لأنه يسع ١٤', '/29 لأنه يسع ٦', '/30 لأنه يسع ٢', '/24 لأنه يسع ٢٥٤'],
  correct_answer: 0,
  explanation: 'أصغر مدى يتجاوز الاثني عشر، و/29 لا يكفيها أصلاً.' },

{ topic: CID, difficulty: 'medium', type: 'code',
  question: 'ما الترميز المكافئ لهذا القناع؟',
  code_snippet: 'القناع: 255.255.255.224',
  options: ['/27', '/26', '/28', '/25'],
  correct_answer: 0,
  explanation: '٢٢٤ = 11100000 أي ثلاثة بتات، فالمجموع ٢٤+٣ = ٢٧.' },

{ topic: BIN, difficulty: 'hard', type: 'code',
  question: 'ما القيمة العشرية لهذي الخانة؟',
  code_snippet: 'الخانة الثنائية: 10101100',
  options: ['١٧٢', '١٦٨', '١٧٦', '١٩٢'],
  correct_answer: 0,
  explanation: '١٢٨ + ٣٢ + ٨ + ٤ = ١٧٢.' },

{ topic: SUB, difficulty: 'hard', type: 'code',
  question: 'كم شبكة ينتج هذا التقسيم؟',
  code_snippet: 'المدى الأصلي: 192.168.5.0/24\nالمطلوب : تقسيمه إلى /26',
  options: ['٤ شبكات', '٨ شبكات', '٢ شبكتان', '١٦ شبكة'],
  correct_answer: 0,
  explanation: 'بتّان مقتطعان: اثنان مرفوعة للاثنين = ٤ مديات بكتلة ٦٤.' },

{ topic: SUB, difficulty: 'medium', type: 'code',
  question: 'ما أول مدى وآخره في هذا التقسيم؟',
  code_snippet: 'المدى: 192.168.5.0/24 مقسّماً إلى /26',
  options: ['يبدأ 192.168.5.0 وينتهي 192.168.5.192', 'يبدأ 192.168.5.0 وينتهي 192.168.5.128', 'يبدأ 192.168.5.64 وينتهي 192.168.5.255', 'يبدأ 192.168.5.0 وينتهي 192.168.5.255'],
  correct_answer: 0,
  explanation: 'المديات ٠ و٦٤ و١٢٨ و١٩٢، فأولها ٠ وآخرها يبدأ من ١٩٢.' },

{ topic: CID, difficulty: 'hard', type: 'code',
  question: 'ما الخلل في هذا القناع؟',
  code_snippet: 'القناع المقترح: 255.255.240.255',
  options: ['آحاده غير متصلة فلا يصلح', 'قيمته أكبر من المسموح', 'ينقصه خانة رابعة', 'يساوي /28 فلا يكفي'],
  correct_answer: 0,
  explanation: 'القناع آحاد متصلة ثم أصفار، وهنا عاد ٢٥٥ بعد ٢٤٠.' },

{ topic: SUB, difficulty: 'hard', type: 'code',
  question: 'ما الخطأ في هذا الإسناد؟',
  code_snippet: 'الشبكة: 10.2.3.0/26\nأُسنِد للجهاز: 10.2.3.63',
  options: ['العنوان هو بث المدى فلا يُسنَد', 'العنوان خارج المدى تماماً', 'العنوان هو أول المدى', 'العنوان يحتاج قناعاً أوسع'],
  correct_answer: 0,
  explanation: 'المدى ٠ إلى ٦٣، وآخره محجوز للبث.' },

// ═══════════ صح وخطأ · ١٠ ═══════════

{ topic: BIN, difficulty: 'easy', type: 'true-false',
  question: 'ثمانية بتات تحمل ٢٥٦ قيمة من صفر إلى ٢٥٥.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'اثنان مرفوعة للثمانية، والعدّ يبدأ من الصفر.' },

{ topic: BIN, difficulty: 'medium', type: 'true-false',
  question: 'القناع الصالح تتخلّله أصفار بين آحاده.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'آحاده متصلة ثم أصفاره، وإلا لم يفصل الجزأين فصلاً واضحاً.' },

{ topic: BIN, difficulty: 'hard', type: 'true-false',
  question: 'إضافة بتّ لجزء الشبكة تضاعف عدد الشبكات وتنصّف مداها.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما يُقتطَع من المضيف يُضاف للشبكة، فيزيد العدد ويضيق المدى.' },

{ topic: CID, difficulty: 'medium', type: 'true-false',
  question: 'الترميز /26 يكافئ القناع 255.255.255.192.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'بتّان في الخانة الرابعة: ١٢٨ + ٦٤ = ١٩٢.' },

{ topic: CID, difficulty: 'medium', type: 'true-false',
  question: 'مدى /27 يسع اثنين وثلاثين مضيفاً.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'يسع ٣٢ عنواناً و٣٠ مضيفاً بعد حجز الشبكة والبث.' },

{ topic: CID, difficulty: 'hard', type: 'true-false',
  question: 'حجم الكتلة يساوي قيمة آخر خانة في القناع.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'بل ٢٥٦ ناقصها: قناع ٢٢٤ يعطي كتلة ٣٢، و١٩٢ يعطي ٦٤.' },

{ topic: SUB, difficulty: 'medium', type: 'true-false',
  question: 'الجهاز 192.168.1.100 بقناع /26 يقع في شبكة 192.168.1.64.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'الكتلة ٦٤، وأكبر مضاعف لا يتجاوز ١٠٠ هو ٦٤.' },

{ topic: SUB, difficulty: 'hard', type: 'true-false',
  question: 'آخر عنوان في المدى يصلح للإسناد لجهاز.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'محجوز للبث في كل مدى، كما أن أوله محجوز للشبكة.' },

{ topic: SUB, difficulty: 'medium', type: 'true-false',
  question: 'وصلة بين موجّهين تحتاج /28 على الأقل.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'يكفيها /30: أربعة عناوين منها مضيفان هما طرفا الوصلة.' },

{ topic: SUB, difficulty: 'hard', type: 'true-false',
  question: 'القناع المتغيّر الطول يمنح كل شبكة ما يناسب حجمها.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'وصلة تأخذ /30 وقسم كبير يأخذ /26، فلا تُهدَر العناوين.' },

// ═══════════ توصيل · ١٠ ═══════════

{ topic: CID, difficulty: 'easy', type: 'matching',
  question: 'صل كل ترميز بقناعه',
  pairs: [ { left: '/24', right: '255.255.255.0' }, { left: '/25', right: '255.255.255.128' }, { left: '/26', right: '255.255.255.192' }, { left: '/27', right: '255.255.255.224' } ],
  explanation: 'كل بتّ يُضاف يرفع قيمة الخانة بنصف ما بقي منها.' },

{ topic: CID, difficulty: 'medium', type: 'matching',
  question: 'صل كل ترميز بعدد عناوينه',
  pairs: [ { left: '/30', right: '٤ عناوين' }, { left: '/29', right: '٨ عناوين' }, { left: '/28', right: '١٦ عنواناً' }, { left: '/27', right: '٣٢ عنواناً' } ],
  explanation: 'كل بتّ مضيف يضاعف العدد، والحساب اثنان مرفوعة لعدد بتاته.' },

{ topic: CID, difficulty: 'medium', type: 'matching',
  question: 'صل كل ترميز بعدد مضيفيه',
  pairs: [ { left: '/30', right: 'مضيفان' }, { left: '/29', right: 'ستة' }, { left: '/28', right: 'أربعة عشر' }, { left: '/26', right: 'اثنان وستون' } ],
  explanation: 'العدد دائماً عدد العناوين ناقص اثنين محجوزين.' },

{ topic: CID, difficulty: 'hard', type: 'matching',
  question: 'صل كل قناع بحجم كتلته',
  pairs: [ { left: '255.255.255.128', right: '١٢٨' }, { left: '255.255.255.192', right: '٦٤' }, { left: '255.255.255.224', right: '٣٢' }, { left: '255.255.255.240', right: '١٦' } ],
  explanation: 'الكتلة = ٢٥٦ ناقص قيمة آخر خانة في القناع.' },

{ topic: SUB, difficulty: 'hard', type: 'matching',
  question: 'صل كل عنوان بشبكته بقناع /26',
  pairs: [ { left: '192.168.1.10', right: '192.168.1.0' }, { left: '192.168.1.100', right: '192.168.1.64' }, { left: '192.168.1.150', right: '192.168.1.128' }, { left: '192.168.1.200', right: '192.168.1.192' } ],
  explanation: 'الكتلة ٦٤، فالحدود ٠ و٦٤ و١٢٨ و١٩٢.' },

{ topic: SUB, difficulty: 'medium', type: 'matching',
  question: 'صل كل حاجة بالقناع المناسب لها',
  pairs: [ { left: 'وصلة بين موجّهين', right: '/30' }, { left: 'مكتب فيه ١٠ أجهزة', right: '/28' }, { left: 'قسم فيه ٥٠ جهازاً', right: '/26' }, { left: 'طابق فيه ٢٠٠ جهاز', right: '/24' } ],
  explanation: 'أصغر مدى يتجاوز العدد بعد حجز اثنين هو الاختيار الصحيح.' },

{ topic: BIN, difficulty: 'medium', type: 'matching',
  question: 'صل كل قيمة ثنائية بعشريّتها',
  pairs: [ { left: '10000000', right: '١٢٨' }, { left: '11000000', right: '١٩٢' }, { left: '11100000', right: '٢٢٤' }, { left: '11110000', right: '٢٤٠' } ],
  explanation: 'كل بتّ يُضاف من اليسار يزيد نصف ما بقي: ١٢٨ ثم ٦٤ ثم ٣٢ ثم ١٦.' },

{ topic: SUB, difficulty: 'hard', type: 'matching',
  question: 'صل كل موضع في المدى بدوره',
  pairs: [ { left: 'أول عنوان', right: 'عنوان الشبكة' }, { left: 'آخر عنوان', right: 'عنوان البث' }, { left: 'ما بينهما', right: 'مضيفون صالحون' }, { left: 'أحدها بالعرف', right: 'البوابة' } ],
  explanation: 'اثنان محجوزان دائماً مهما اتسع المدى أو ضاق.' },

{ topic: CID, difficulty: 'hard', type: 'matching',
  question: 'صل كل مفهوم بمعناه في العنونة',
  pairs: [ { left: 'CIDR', right: 'ترميز بعدد بتات الشبكة' }, { left: 'القناع المتغيّر', right: 'قناع بحسب حاجة كل شبكة' }, { left: 'التجميع', right: 'إعلان مديات بمدى أوسع' }, { left: 'حجم الكتلة', right: 'المسافة بين مدى وتاليه' } ],
  explanation: 'أربعة مفاهيم يقوم عليها التخطيط الحديث للعناوين.' },

{ topic: SUB, difficulty: 'medium', type: 'matching',
  question: 'صل كل خطأ في الإسناد بسببه',
  pairs: [ { left: 'إسناد أول المدى', right: 'محجوز للشبكة' }, { left: 'إسناد آخر المدى', right: 'محجوز للبث' }, { left: 'جهازان لا يتخاطبان', right: 'مديان مختلفان' }, { left: 'عناوين لا تكفي', right: 'قناع أضيق من الحاجة' } ],
  explanation: 'أربعة أخطاء شائعة، وكلها تُكتشَف بحساب المدى قبل الإسناد.' },

// ═══════════ تيرمنال · ١٠ ═══════════

{ topic: CID, difficulty: 'easy', type: 'terminal', prompt_label: 'الترميز',
  question: 'اكتب الترميز المكافئ للقناع 255.255.255.0',
  expected_answers: ['/24', '24', '٢٤'],
  explanation: 'ثلاث خانات كاملة = أربعة وعشرون بتاً للشبكة.' },

{ topic: CID, difficulty: 'medium', type: 'terminal', prompt_label: 'القناع',
  question: 'اكتب القناع المكافئ للترميز /26',
  expected_answers: ['255.255.255.192', '255.255.255.192/26'],
  explanation: 'بتّان في الخانة الرابعة: ١٢٨ + ٦٤ = ١٩٢.' },

{ topic: CID, difficulty: 'medium', type: 'terminal', prompt_label: 'العدد',
  question: 'اكتب عدد المضيفين الصالحين في مدى /28',
  expected_answers: ['14', '١٤', 'أربعة عشر'],
  explanation: 'ستة عشر عنواناً ناقص اثنين محجوزين.' },

{ topic: CID, difficulty: 'hard', type: 'terminal', prompt_label: 'العدد',
  question: 'اكتب عدد المضيفين الصالحين في مدى /26',
  expected_answers: ['62', '٦٢', 'اثنان وستون'],
  explanation: 'أربعة وستون عنواناً ناقص اثنين محجوزين.' },

{ topic: SUB, difficulty: 'medium', type: 'terminal', prompt_label: 'العنوان',
  question: 'اكتب عنوان شبكة الجهاز 192.168.1.100 بقناع /26',
  expected_answers: ['192.168.1.64', '192.168.1.64/26'],
  explanation: 'الكتلة ٦٤، وأكبر مضاعف لا يتجاوز ١٠٠ هو ٦٤.' },

{ topic: SUB, difficulty: 'hard', type: 'terminal', prompt_label: 'العنوان',
  question: 'اكتب عنوان البث لشبكة 172.20.8.32 بقناع /27',
  expected_answers: ['172.20.8.63', '172.20.8.63/27'],
  explanation: 'الكتلة ٣٢، فالمدى ٣٢ إلى ٦٣ وآخره البث.' },

{ topic: CID, difficulty: 'medium', type: 'terminal', prompt_label: 'الحجم',
  question: 'اكتب حجم الكتلة لقناع آخر خانته ٢٢٤',
  expected_answers: ['32', '٣٢', 'اثنان وثلاثون'],
  explanation: '٢٥٦ ناقص ٢٢٤ = ٣٢.' },

{ topic: SUB, difficulty: 'hard', type: 'terminal', prompt_label: 'الترميز',
  question: 'اكتب أصغر ترميز يكفي وصلة بين موجّهين',
  expected_answers: ['/30', '30', '٣٠'],
  explanation: 'أربعة عناوين: شبكة وبث ومضيفان اثنان.' },

{ topic: SUB, difficulty: 'medium', type: 'terminal', prompt_label: 'الترميز',
  question: 'اكتب أصغر ترميز يكفي قسماً فيه ٥٠ جهازاً',
  expected_answers: ['/26', '26', '٢٦'],
  explanation: '/27 يسع ثلاثين فقط، و/26 يسع اثنين وستين.' },

{ topic: BIN, difficulty: 'medium', type: 'terminal', prompt_label: 'القيمة',
  question: 'اكتب القيمة العشرية للخانة الثنائية 11000000',
  expected_answers: ['192', '١٩٢', 'مئة واثنان وتسعون'],
  explanation: 'البتّان الأعلى: ١٢٨ + ٦٤ = ١٩٢.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════

{ topic: CID, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن الترميز /27؟',
  options: ['يترك خمسة بتات للمضيف', 'يسع ثلاثين مضيفاً', 'يسع اثنين وثلاثين مضيفاً', 'يترك ثلاثة بتات للمضيف'],
  correct_answers: [0, 1],
  explanation: 'اثنان وثلاثون عدد العناوين لا المضيفين، وثلاثة بتات وصف /29.' },

{ topic: CID, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي قناع صالح؟',
  options: ['255.255.255.192', '255.255.0.0', '255.0.255.0', '255.255.253.0'],
  correct_answers: [0, 1],
  explanation: 'الأخيران آحادهما غير متصلة، فلا يصلحان قناعاً.' },

{ topic: BIN, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن بتات العنوان؟',
  options: ['كل خانة ثمانية بتات', 'العنوان اثنان وثلاثون بتاً', 'كل خانة أربعة بتات', 'العنوان ستة عشر بتاً'],
  correct_answers: [0, 1],
  explanation: 'أربع خانات × ثمانية = اثنان وثلاثون بتاً.' },

{ topic: BIN, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي أثر لاقتطاع بتّ من المضيف؟',
  options: ['يتضاعف عدد الشبكات', 'ينتصف عدد عناوين كل شبكة', 'يتضاعف عدد عناوين كل شبكة', 'ينتصف عدد الشبكات'],
  correct_answers: [0, 1],
  explanation: 'الخياران الأخيران يصفان اقتطاع بتّ من الشبكة لا من المضيف.' },

{ topic: SUB, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي محجوز في كل مدى؟',
  options: ['أول عنوان للشبكة', 'آخر عنوان للبث', 'العنوان الذي قبل الأخير', 'العنوان الذي بعد الأول'],
  correct_answers: [0, 1],
  explanation: 'ما بين المحجوزين كله صالح للإسناد بلا استثناء.' },

{ topic: SUB, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي صحيح عن 192.168.1.64/26؟',
  options: ['بثه 192.168.1.127', 'مضيفوه من .65 إلى .126', 'بثه 192.168.1.126', 'مضيفوه من .64 إلى .127'],
  correct_answers: [0, 1],
  explanation: 'أول المدى وآخره محجوزان، فيبقى ما بينهما للأجهزة.' },

{ topic: SUB, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يُحسَب قبل تقسيم مدى؟',
  options: ['عدد المضيفين لكل شبكة', 'عدد الشبكات المطلوبة', 'طول الكابل بين الأجهزة', 'عدد المنافذ في المبدّل'],
  correct_answers: [0, 1],
  explanation: 'الطول والمنافذ قيود مادية لا تدخل في حساب العناوين.' },

{ topic: CID, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي من فوائد القناع المتغيّر الطول؟',
  options: ['يمنع هدر العناوين', 'يمنح كل شبكة ما يناسبها', 'يبسّط جداول التوجيه دائماً', 'يلغي الحاجة لعنوان البث'],
  correct_answers: [0, 1],
  explanation: 'التبسيط عمل التجميع، والبث محجوز في كل مدى مهما تغيّر القناع.' },

{ topic: SUB, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يمنع جهازين من التخاطب مباشرة؟',
  options: ['وقوعهما في مديين مختلفين', 'قناع يفصل بينهما عند حدّ', 'اختلاف نوع أجهزتهما', 'اختلاف سرعة منفذيهما'],
  correct_answers: [0, 1],
  explanation: 'النوع والسرعة لا يدخلان في قرار الإرسال المباشر أصلاً.' },

{ topic: CID, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي صحيح عن حجم الكتلة؟',
  options: ['يساوي ٢٥٦ ناقص آخر خانة', 'يحدد المسافة بين مدى وتاليه', 'يساوي عدد المضيفين الصالحين', 'يحدد عدد الخانات في العنوان'],
  correct_answers: [0, 1],
  explanation: 'المضيفون أقل منه باثنين، والخانات أربع دائماً.' },

// ═══════════ ترتيب خطوات · ١٠ ═══════════

{ topic: SUB, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إيجاد عنوان شبكة جهاز',
  options: ['قراءة آخر خانة في القناع', 'حساب حجم الكتلة منها', 'إيجاد أكبر مضاعف لا يتجاوز العنوان', 'اعتماده عنوان الشبكة'],
  explanation: 'حجم الكتلة هو المفتاح، ومنه تُعرَف حدود كل مدى.' },

{ topic: SUB, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات إيجاد مدى المضيفين الصالح',
  options: ['إيجاد عنوان الشبكة', 'إضافة حجم الكتلة ناقص واحد', 'استبعاد أول المدى وآخره', 'اعتماد ما بينهما للأجهزة'],
  explanation: 'الاستبعاد قبل الاعتماد، فأول المدى وآخره محجوزان.' },

{ topic: SUB, difficulty: 'easy', type: 'ordering',
  question: 'رتّب خطوات اختيار قناع لقسم جديد',
  options: ['حصر عدد الأجهزة المتوقع', 'إضافة اثنين للمحجوزين', 'اختيار أصغر مدى يتجاوزه', 'اعتماد ترميزه للقسم'],
  explanation: 'إضافة المحجوزين قبل الاختيار، وإلا جاء المدى أضيق بجهازين.' },

{ topic: SUB, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تقسيم مدى على عدة أقسام',
  options: ['ترتيب الأقسام من الأكبر للأصغر', 'إسناد المدى للأكبر أولاً', 'إسناد ما يليه للذي يليه', 'توثيق المديات وحدودها'],
  explanation: 'البدء بالأكبر يمنع تشظّي المدى بما لا يتسع لاحقاً للكبار.' },

{ topic: CID, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تحويل قناع إلى ترميز',
  options: ['تحويل كل خانة لثنائيها', 'عدّ الآحاد المتصلة', 'التحقق من عدم تخلّل الأصفار', 'كتابة العدد بعد الشرطة'],
  explanation: 'التحقق قبل الكتابة يكشف قناعاً غير صالح من أصله.' },

{ topic: BIN, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تحويل قيمة عشرية لثنائيها',
  options: ['البدء من قيمة ١٢٨', 'طرحها إن كانت أصغر من العدد', 'الانتقال للقيمة التي تليها', 'تكرارها حتى يصفر الباقي'],
  explanation: 'الطرح من الأعلى للأدنى يبني البتات مرتبة من اليسار.' },

{ topic: SUB, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التحقق من تخاطب جهازين مباشرة',
  options: ['حساب حجم الكتلة من القناع', 'إيجاد شبكة كل جهاز', 'مقارنة الشبكتين', 'الحكم بالتخاطب أو التسليم للبوابة'],
  explanation: 'الحكم آخراً وبعد إيجاد الشبكتين لا بمجرد تقارب العنوانين.' },

{ topic: SUB, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات معالجة عنوان مرفوض على جهاز',
  options: ['حساب مدى الشبكة وحدوده', 'التأكد أن العنوان داخله', 'التأكد أنه ليس أوله ولا آخره', 'إسناد عنوان صالح بدله'],
  explanation: 'الحدود أولاً، فأكثر الرفض سببه عنوان محجوز أو خارج المدى.' },

{ topic: CID, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات تجميع مديات في إعلان واحد',
  options: ['التأكد أنها متجاورة', 'التأكد أن عددها قوة للاثنين', 'إيجاد المدى الأوسع الجامع', 'إعلانه بدل المديات المفردة'],
  explanation: 'التجاور والعدد شرطان معاً، ونقص أحدهما يمنع التجميع.' },

{ topic: SUB, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات توثيق خطة عنونة',
  options: ['تسجيل المدى الأصلي', 'تسجيل مدى كل قسم وقناعه', 'تسجيل بوابة كل مدى', 'تسجيل ما بقي متاحاً للنمو'],
  explanation: 'ما بقي متاحاً آخراً، وهو أول ما يُسأل عنه عند التوسّع.' }

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
