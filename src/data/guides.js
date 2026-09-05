// ══════════════════════════════════════════════════════════════════
// أدلة الأقسام — الشرح الطويل المتصل الذي تُبنى منه صفحة «الشروحات والدروس».
//
// لكل قسم مجموعة مواضيع بعدد مستوياته الخمسة، وكل موضوع يحمل:
//   lead      : الفكرة في جملة واحدة (صندوق الاقتباس أعلى الموضوع)
//   body      : فقرات الشرح المتصل
//   table     : جدول مقارنة اختياري { head, rows }
//   keyPoints : خلاصات الحفظ (الصندوق الملوّن)
//   analogy   : تشبيه يقرّب الفكرة (صندوق «تخيّلها كذا»)
//   terms     : مصطلحات الموضوع وتعريفاتها المختصرة
//   cards     : بطاقات المراجعة السريعة (سؤال ← إجابة)
//
// أسئلة التمرين لا تُكتب هنا: تُسحب حيّة من بنك الأسئلة في Supabase
// بمفتاح القسم ورقم المستوى، فتبقى الصفحة والبنك مصدراً واحداً.
// ══════════════════════════════════════════════════════════════════

export const sectionGuides = {
  Programming: {
    // ─────────── أساسيات البرمجة ───────────
    0: [
      {
        title_ar: 'المتغيرات والتعليقات',
        title_en: 'Variables and Comments',
        lead_ar: 'المتغيّر اسم تعطيه لمكان في الذاكرة تحفظ فيه قيمة، والتعليق كلام تكتبه لنفسك ولمن يقرأ كودك ويتجاهله الحاسوب تماماً.',
        lead_en: 'A variable is a name you give a place in memory that holds a value, and a comment is text for you and your readers that the computer ignores entirely.',
        body_ar: [
          'كل برنامج تكتبه يحتاج يحفظ أشياء: اسم مستخدم، رصيد حساب، نتيجة عملية حسابية. المتغيّر هو الطريقة اللي تحجز فيها مساحة في ذاكرة الجهاز وتعطيها اسماً تناديه به لاحقاً. لما تكتب x = 5، أنت تقول للحاسوب: احجز مكاناً سمّه x وحط فيه الرقم 5.',
          'وعلامة = هنا ما تعني «يساوي» بالمعنى الرياضي، بل تعني «خذ اللي على اليمين وحطه في اللي على اليسار». ولهذا السطر x = x + 1 صحيح تماماً في البرمجة وهو مستحيل في الرياضيات: خذ قيمة x الحالية، زد عليها واحداً، وارجع خزّنها في x نفسه.',
          'اسم المتغيّر ليس تفصيلاً شكلياً. الاسم الجيد يشرح الغرض بلا حاجة لتعليق: total_price أوضح من tp، وuser_age أوضح من x. والقواعد التي لا يقبل غيرها المفسّر: يبدأ بحرف أو شرطة سفلية لا برقم، وبلا مسافات ولا رموز خاصة، ولا يكون كلمة محجوزة في اللغة مثل if أو for.',
          'أما التعليق فهو السطر الذي يبدأ بعلامة # في بايثون، فيتجاهله المفسّر كلياً عند التنفيذ. وقيمته أن الكود يُقرأ أضعاف ما يُكتب: ستعود لكودك بعد شهرين وأنت أشبه بشخص غريب عنه. والتعليق الجيد لا يعيد ما يقوله الكود، بل يشرح سبب ما فعلت: لا تكتب «زد العداد واحداً» فوق سطر counter += 1، واكتب بدلها لماذا احتجت الزيادة هنا.',
          'وللتعليقات استخدام عملي ثانٍ: تعطيل سطر مؤقتاً أثناء البحث عن خطأ، بأن تضع # قبله فيتوقف عن التنفيذ دون حذفه. وهي طريقة سريعة لعزل السطر المشتبه به.'
        ],
        body_en: [
          'Every program needs to store things: a username, an account balance, the result of a calculation. A variable is how you reserve space in memory and give it a name to call later. Writing x = 5 tells the computer: reserve a place called x and put 5 in it.',
          'The = sign here does not mean equality in the mathematical sense; it means take what is on the right and put it in what is on the left. That is why x = x + 1 is perfectly valid in programming while impossible in mathematics: take the current value of x, add one, and store it back in x.',
          'A variable name is not cosmetic. A good name explains its purpose with no comment needed: total_price beats tp, and user_age beats x. The rules the interpreter enforces: start with a letter or underscore not a digit, no spaces or special characters, and never a reserved word such as if or for.',
          'A comment is a line starting with # in Python, ignored entirely at run time. Its value comes from code being read far more often than written: you will return to your own code in two months as a stranger. A good comment does not restate the code; it explains why you did something.',
          'Comments have a second practical use: temporarily disabling a line while hunting a bug, by putting # before it so it stops executing without being deleted. It is a fast way to isolate a suspect line.'
        ],
        keyPoints_ar: [
          'المتغيّر اسم لمكان في الذاكرة، وعلامة = إسناد لا مساواة.',
          'x = x + 1 صحيح برمجياً: اقرأ القيمة، عدّلها، أعد تخزينها.',
          'الاسم الواضح يغني عن التعليق؛ والتعليق يشرح السبب لا ما يفعله الكود.',
          'الاسم لا يبدأ برقم ولا يحوي مسافة ولا يكون كلمة محجوزة.'
        ],
        keyPoints_en: [
          'A variable names a place in memory, and = is assignment not equality.',
          'x = x + 1 is valid: read the value, change it, store it back.',
          'A clear name replaces a comment; a comment explains why, not what.',
          'A name cannot start with a digit, contain a space, or be a reserved word.'
        ],
        analogy_ar: 'تخيّل المتغيّر صندوقاً في مستودع عليه ملصق باسمه. الملصق هو اسم المتغيّر، وما بداخل الصندوق هو القيمة. تقدر تفرّغه وتحط فيه شيئاً آخر متى شئت، والملصق نفسه لا يتغيّر. أما التعليق فهو ورقة ملصقة على الرف تقول لماذا وُضع هذا الصندوق هنا — يقرأها الناس ولا تعني الرافعة شيئاً.',
        analogy_en: 'Picture a variable as a labelled box in a warehouse. The label is the name and the contents are the value. You can empty it and put something else in whenever you like, while the label stays. A comment is a note stuck on the shelf saying why this box is here: people read it, the forklift does not.',
        terms: [
          { term: 'Variable', def_ar: 'اسم يشير إلى قيمة مخزّنة في الذاكرة يمكن تغييرها.', def_en: 'A name referring to a value stored in memory that can change.' },
          { term: 'Assignment', def_ar: 'وضع قيمة في متغيّر بعلامة =، من اليمين إلى اليسار.', def_en: 'Placing a value into a variable with =, right side into left.' },
          { term: 'Comment', def_ar: 'نص يتجاهله المفسّر، يبدأ بـ# في بايثون.', def_en: 'Text ignored by the interpreter, starting with # in Python.' },
          { term: 'Keyword', def_ar: 'كلمة محجوزة للغة لا يجوز استخدامها اسماً لمتغيّر.', def_en: 'A word reserved by the language that cannot name a variable.' }
        ],
        cards: [
          { q_ar: 'ما الفرق بين = و== ؟', q_en: 'What is the difference between = and == ?', a_ar: 'علامة = تُسند قيمة لمتغيّر، و== تقارن قيمتين وترجع صح أو خطأ.', a_en: '= assigns a value to a variable; == compares two values and returns true or false.' },
          { q_ar: 'لماذا يصح x = x + 1 برمجياً؟', q_en: 'Why is x = x + 1 valid in programming?', a_ar: 'لأن = إسناد لا مساواة: تُقرأ قيمة x الحالية، يُضاف إليها واحد، ثم تُخزَّن النتيجة في x نفسه.', a_en: 'Because = is assignment: the current x is read, one is added, and the result is stored back into x.' },
          { q_ar: 'متى يكون التعليق سيئاً؟', q_en: 'When is a comment bad?', a_ar: 'حين يعيد ما يقوله الكود حرفياً بلا فائدة، أو حين يبقى بعد تغيّر الكود فيصير مضللاً.', a_en: 'When it restates the code verbatim, or when it survives a code change and becomes misleading.' },
          { q_ar: 'أي الأسماء صالح: 2score أم user_2 ؟', q_en: 'Which name is valid: 2score or user_2 ?', a_ar: 'user_2 صالح، و2score مرفوض لأن الاسم لا يبدأ برقم.', a_en: 'user_2 is valid; 2score is rejected because a name cannot start with a digit.' }
        ]
      },
      {
        title_ar: 'أنواع البيانات والإدخال والإخراج',
        title_en: 'Data Types, Input and Output',
        lead_ar: 'لكل قيمة نوع يحدد ما يمكن عمله بها، وأخطر لحظة في البرنامج هي استقبال مدخل من المستخدم لأنه يصلك نصاً دائماً.',
        lead_en: 'Every value has a type that decides what you can do with it, and the riskiest moment is receiving user input, because it always arrives as text.',
        body_ar: [
          'الحاسوب لا يتعامل مع كل القيم بالطريقة نفسها. الرقم الصحيح int يصلح للعد والحساب، والرقم العشري float للكسور، والنص str لأي حروف بين علامتي اقتباس، والقيمة المنطقية bool ليس لها إلا حالتان: True أو False.',
          'وأهمية النوع تظهر في العمليات: علامة + بين رقمين تجمعهما، وبين نصين تلصقهما. فـ 3 + 4 يعطي 7، بينما "3" + "4" يعطي "34". والقيمتان تبدوان متشابهتين على الشاشة، لكن النوع مختلف والنتيجة مختلفة تماماً — وهذا مصدر أخطاء كثيرة عند المبتدئين.',
          'دالة print هي صوت البرنامج: تعرض ما تعطيها على الشاشة. وتقبل أكثر من قيمة تفصل بينها بفواصل فتطبعها متتابعة بمسافة بينها، وتقبل خلط الأنواع بلا تحويل: print("العمر:", 25) تعمل بلا مشكلة.',
          'ودالة input هي أذن البرنامج: توقف التنفيذ وتنتظر المستخدم يكتب ويضغط Enter، ثم ترجع ما كتبه. والقاعدة التي لا استثناء لها: input ترجع نصاً دائماً، حتى لو كتب المستخدم أرقاماً. فلو جمعت مدخلين مباشرة حصلت على التصاق لا جمع.',
          'ولهذا نحتاج التحويل بين الأنواع: int() تحوّل النص إلى رقم صحيح، وfloat() إلى عشري، وstr() تحوّل الرقم إلى نص. والتحويل ليس مضموناً: int("خمسة") يرفع خطأ ValueError لأن النص لا يمثّل رقماً. وهذا بالضبط ما يُعالَج لاحقاً بـtry وexcept.'
        ],
        body_en: [
          'The computer does not treat all values alike. An int suits counting and arithmetic, a float handles decimals, a str is any characters between quotes, and a bool has only two states: True or False.',
          'The type matters most in operations: + between two numbers adds them, and between two strings joins them. So 3 + 4 gives 7 while "3" + "4" gives "34". The two look alike on screen, but the type differs and so does the result, which is a major source of beginner bugs.',
          'print is the program voice: it displays whatever you give it. It accepts several values separated by commas, printing them in sequence with a space, and it mixes types without conversion.',
          'input is the program ear: it pauses execution, waits for the user to type and press Enter, then returns what was typed. The rule with no exception: input always returns text, even when the user types digits. Adding two inputs directly concatenates instead of adding.',
          'Hence type conversion: int() turns text into a whole number, float() into a decimal, and str() turns a number into text. Conversion is not guaranteed: int("five") raises ValueError because the text is not a number. This is exactly what try and except handle later.'
        ],
        table: {
          head_ar: ['النوع', 'مثال', 'يصلح لـ', 'أثر + بينهما'],
          head_en: ['Type', 'Example', 'Used for', 'Effect of +'],
          rows: [
            ['int', '25', 'العد والحساب', 'جمع رياضي'],
            ['float', '9.99', 'الكسور والأسعار', 'جمع رياضي'],
            ['str', '"مسار"', 'النصوص والأسماء', 'التصاق النصين'],
            ['bool', 'True', 'الشروط والقرارات', 'يُعامل ككـ 1 و0']
          ]
        },
        keyPoints_ar: [
          'النوع يحدد معنى العملية: + للأرقام جمع وللنصوص التصاق.',
          'input ترجع نصاً دائماً مهما كتب المستخدم.',
          'التحويل بـint() قد يفشل ويرفع ValueError إن لم يكن النص رقماً.',
          'print تقبل قيماً متعددة بفواصل وتخلط الأنواع بلا تحويل.'
        ],
        keyPoints_en: [
          'The type decides the meaning of an operation: + adds numbers and joins strings.',
          'input always returns text, whatever the user types.',
          'int() may fail with ValueError when the text is not a number.',
          'print accepts several comma-separated values and mixes types freely.'
        ],
        analogy_ar: 'تخيّل النوع كوحدة القياس. الرقم 3 مثل «٣ كيلو» و"3" مثل «حرف الثلاثة مطبوعاً على ورقة». تقدر تجمع ثلاثة كيلو على أربعة كيلو فتصير سبعة، لكن لو لصقت ورقة عليها ٣ بورقة عليها ٤ صار عندك ورقة مكتوب عليها ٣٤ — لا سبعة. والحاسوب يفعل الشيء نفسه بالضبط.',
        analogy_en: 'Think of a type as a unit of measure. The number 3 is like three kilos, while "3" is like the digit three printed on paper. Three kilos plus four kilos is seven, but taping a sheet reading 3 to one reading 4 gives you 34, not seven. The computer does exactly the same.',
        terms: [
          { term: 'int', def_ar: 'رقم صحيح بلا كسور.', def_en: 'A whole number with no fraction.' },
          { term: 'float', def_ar: 'رقم عشري يقبل الكسور.', def_en: 'A decimal number accepting fractions.' },
          { term: 'str', def_ar: 'نص بين علامتي اقتباس.', def_en: 'Text between quotation marks.' },
          { term: 'Type Casting', def_ar: 'تحويل قيمة من نوع إلى آخر بدوال مثل int() وstr().', def_en: 'Converting a value from one type to another with functions like int() and str().' }
        ],
        cards: [
          { q_ar: 'ما ناتج "3" + "4" ؟', q_en: 'What is the result of "3" + "4" ?', a_ar: 'النص "34"، لأن + بين نصين التصاق لا جمع.', a_en: 'The string "34", because + between strings joins rather than adds.' },
          { q_ar: 'ماذا ترجع input دائماً؟', q_en: 'What does input always return?', a_ar: 'نصاً str، حتى لو كتب المستخدم أرقاماً، فيلزم تحويله قبل الحساب.', a_en: 'A str, even when the user types digits, so it must be converted before arithmetic.' },
          { q_ar: 'متى يفشل int() ؟', q_en: 'When does int() fail?', a_ar: 'حين لا يمثّل النص رقماً صحيحاً، فيرفع ValueError.', a_en: 'When the text does not represent a whole number, raising ValueError.' },
          { q_ar: 'كم حالة للنوع bool ؟', q_en: 'How many states does bool have?', a_ar: 'حالتان فقط: True وFalse.', a_en: 'Two only: True and False.' }
        ]
      },
      {
        title_ar: 'العمليات والمنطق',
        title_en: 'Operators and Logic',
        lead_ar: 'الحساب في البرمجة يتبع أولويات صارمة، والمقارنة تنتج قيمة منطقية هي أساس كل قرار يتخذه البرنامج.',
        lead_en: 'Arithmetic follows strict precedence, and comparison produces a boolean, which is the basis of every decision a program makes.',
        body_ar: [
          'العمليات الحسابية في بايثون هي الجمع + والطرح - والضرب * والقسمة /، ومعها ثلاث تُنسى كثيراً: باقي القسمة % والقسمة الصحيحة // والأس **. وباقي القسمة أنفع مما يبدو: 10 % 2 يساوي صفراً، وهذا الاختبار المعتاد للزوجية.',
          'وترتيب الأولويات ليس اختيارياً: الأقواس أولاً، ثم الأس، ثم الضرب والقسمة وباقي القسمة، ثم الجمع والطرح، ومتساويات الأولوية تُنفَّذ من اليسار لليمين. فـ 2 + 3 * 4 يساوي 14 لا 20، لأن الضرب يسبق الجمع. والقاعدة العملية: إن ترددت، ضع أقواساً — فهي مجانية وتُغني القارئ عن الحساب.',
          'وانتبه للفرق بين / و//: القسمة العادية ترجع عشرياً دائماً حتى لو قسمت بلا باقٍ، فـ 10 / 2 يعطي 5.0 لا 5. أما // فترجع الجزء الصحيح فقط: 7 // 2 يعطي 3.',
          'أما المقارنة فتنتج قيمة منطقية: == للتساوي، و!= للاختلاف، و> و< و>= و<= للترتيب. ولاحظ الفرق بين = و== : الأولى إسناد والثانية مقارنة، والخلط بينهما من أشهر أخطاء المبتدئين.',
          'وتُركَّب الشروط بثلاث أدوات منطقية: and تشترط تحقق الطرفين معاً، وor يكفيها تحقق أحدهما، وnot تعكس النتيجة. فشرط منح الوصول «مسجّل دخوله ولديه رصيد» يُكتب بـand، لأن سقوط أحد الشرطين يُسقط الشرط كله.',
          'وهذه القيم المنطقية هي وقود جملة if: البرنامج ينفّذ الكتلة إن كان الشرط True، ويتخطاها إن كان False. وهنا تظهر أهمية المسافة البادئة في بايثون: هي التي تحدد أي السطور داخل الكتلة وأيها خارجها، وليست تجميلاً.'
        ],
        body_en: [
          'Python arithmetic offers + - * /, plus three often forgotten: modulo %, floor division //, and exponent **. Modulo is more useful than it looks: 10 % 2 equals zero, the standard test for evenness.',
          'Precedence is not optional: parentheses first, then exponent, then multiplication, division and modulo, then addition and subtraction, with equal precedence evaluated left to right. So 2 + 3 * 4 is 14, not 20. Practical rule: when in doubt add parentheses, they are free and spare the reader the arithmetic.',
          'Mind the difference between / and //: plain division always returns a decimal even when it divides evenly, so 10 / 2 gives 5.0 not 5, while // returns only the whole part: 7 // 2 gives 3.',
          'Comparison produces a boolean: == for equality, != for difference, and > < >= <= for ordering. Note the gap between = and ==: the first assigns and the second compares, and confusing them is a classic beginner bug.',
          'Conditions combine with three logical tools: and requires both sides, or accepts either, and not inverts the result. A rule like "logged in and has balance" uses and, because failing one side fails the whole.',
          'These booleans fuel the if statement: the program runs the block when the condition is True and skips it when False. Here Python indentation matters: it defines which lines are inside the block, and it is not decoration.'
        ],
        table: {
          head_ar: ['العملية', 'مثال', 'الناتج', 'ملاحظة'],
          head_en: ['Operation', 'Example', 'Result', 'Note'],
          rows: [
            ['القسمة /', '10 / 2', '5.0', 'عشري دائماً'],
            ['القسمة الصحيحة //', '7 // 2', '3', 'الجزء الصحيح فقط'],
            ['باقي القسمة %', '10 % 3', '1', 'يكشف الزوجية والدورات'],
            ['الأس **', '2 ** 3', '8', 'يسبق الضرب في الأولوية']
          ]
        },
        keyPoints_ar: [
          'الأقواس ثم الأس ثم الضرب والقسمة ثم الجمع والطرح.',
          '2 + 3 * 4 = 14 لا 20، والأقواس تحسم الالتباس.',
          'القسمة / ترجع عشرياً دائماً، و// ترجع الجزء الصحيح.',
          'and تشترط الطرفين، وor يكفيها طرف واحد، وnot تعكس.'
        ],
        keyPoints_en: [
          'Parentheses, then exponent, then multiply and divide, then add and subtract.',
          '2 + 3 * 4 = 14 not 20, and parentheses settle any ambiguity.',
          '/ always returns a decimal while // returns the whole part.',
          'and needs both sides, or needs one, and not inverts.'
        ],
        analogy_ar: 'تخيّل الشرط المنطقي بوابة بقفلين. مع and لازم يُفتح القفلان معاً لتمر، فيكفي قفل واحد مغلق ليمنعك. ومع or يكفي فتح قفل واحد. وnot تبدّل حالة البوابة: المفتوحة تصير مغلقة والعكس. والبرنامج يقف عند البوابة في كل مرة ويسأل: أمرّ أم أتخطى؟',
        analogy_en: 'Picture a logical condition as a gate with two locks. With and both must open for you to pass, so a single locked one stops you. With or one open lock suffices. not flips the gate state: open becomes closed and the reverse. The program stops at the gate each time and asks: pass or skip?',
        terms: [
          { term: 'Modulo %', def_ar: 'باقي القسمة، يُستخدم لاختبار الزوجية والدورات.', def_en: 'The division remainder, used to test evenness and cycles.' },
          { term: 'Boolean', def_ar: 'قيمة منطقية لا تكون إلا True أو False.', def_en: 'A value that is only True or False.' },
          { term: 'Precedence', def_ar: 'ترتيب تنفيذ العمليات عند اجتماعها في تعبير واحد.', def_en: 'The order operations run in when combined in one expression.' },
          { term: 'Indentation', def_ar: 'المسافة البادئة التي تحدد نطاق الكتلة في بايثون.', def_en: 'The leading whitespace that defines a block scope in Python.' }
        ],
        cards: [
          { q_ar: 'ما ناتج 2 + 3 * 4 ؟', q_en: 'What is 2 + 3 * 4 ?', a_ar: '14، لأن الضرب يُنفَّذ قبل الجمع.', a_en: '14, because multiplication runs before addition.' },
          { q_ar: 'ما الفرق بين 10 / 2 و10 // 2 ؟', q_en: 'Difference between 10 / 2 and 10 // 2 ?', a_ar: 'الأولى تعطي 5.0 عشرياً، والثانية تعطي 5 صحيحاً.', a_en: 'The first gives 5.0 as a decimal, the second gives the whole number 5.' },
          { q_ar: 'كيف تختبر أن رقماً زوجي؟', q_en: 'How do you test that a number is even?', a_ar: 'بباقي القسمة: n % 2 == 0 يعني زوجي.', a_en: 'With modulo: n % 2 == 0 means even.' },
          { q_ar: 'متى يكون شرط and صحيحاً؟', q_en: 'When is an and condition true?', a_ar: 'حين يتحقق الطرفان معاً؛ فسقوط أحدهما يُسقط الشرط كله.', a_en: 'When both sides hold; failing either fails the whole.' }
        ]
      },
      {
        title_ar: 'التكرار والمصفوفات',
        title_en: 'Loops and Arrays',
        lead_ar: 'الحلقة تنفّذ الخطوة مرات كثيرة بلا نسخها، والقائمة تجمع قيماً كثيرة تحت اسم واحد — واجتماعهما هو أكثر ما تفعله البرامج فعلاً.',
        lead_en: 'A loop runs a step many times without copying it, and a list gathers many values under one name, and their combination is most of what programs actually do.',
        body_ar: [
          'القائمة تُكتب بأقواس مربعة وعناصرها مفصولة بفواصل، وتقبل أي نوع بيانات بل وتقبل قوائم داخلها. وتُحفظ عناصرها بترتيبها، ولكل عنصر فهرس يبدأ من الصفر لا من الواحد — فأول عنصر فهرسه 0 وثالث عنصر فهرسه 2.',
          'ويقبل الفهرس السالب أيضاً بمعنى العد من النهاية: fruits[-1] هو العنصر الأخير مهما كان طول القائمة، وهي طريقة أنظف من len(fruits) - 1. والقوائم قابلة للتعديل: append تضيف للنهاية، وinsert تضيف في موضع محدد، وremove تحذف بالقيمة.',
          'وحلقة for تنفّذ كتلة عدداً معروفاً من المرات. ومعها range التي تولّد أرقاماً تبدأ من الصفر وتنتهي قبل العدد المعطى: range(3) تعطي 0 و1 و2 — ثلاث دورات لا أربع، وهذا موضع خطأ متكرر.',
          'أما حلقة while فتكرر ما دام الشرط صحيحاً، وتُستخدم حين لا تعرف عدد الدورات مسبقاً. وخطرها الشهير الحلقة اللانهائية: إن لم يتغيّر المتغيّر الداخل في الشرط بقي الشرط صحيحاً أبداً. فتأكد أن شيئاً داخل الحلقة يقرّب الشرط من أن يصير خاطئاً.',
          'ولتوجيه مسار الحلقة أداتان: break يوقف الحلقة كلها فوراً حين يتحقق الهدف فلا معنى لمواصلة البحث، وcontinue يتخطى بقية الدورة الحالية فقط وينتقل للتالية. الأول يخرج والثاني يقفز.',
          'وحين تضع حلقة داخل حلقة، تدور الداخلية دورتها كاملة مع كل دورة للخارجية. فثلاث في ثلاث تعني تسع تنفيذات لا ستاً، ولهذا ترتفع كلفة الحلقات المتداخلة بسرعة كلما كبرت البيانات. وعليها تُبنى المصفوفات ثنائية الأبعاد: قائمة عناصرها قوائم، تُقرأ خليتها بفهرس الصف ثم فهرس العمود.'
        ],
        body_en: [
          'A list is written with square brackets and comma-separated elements, accepting any type and even other lists. Order is preserved, and each element has an index starting at zero, so the first is 0 and the third is 2.',
          'Negative indexes count from the end: fruits[-1] is the last element whatever the length, cleaner than len(fruits) - 1. Lists are mutable: append adds at the end, insert places at a position, and remove deletes by value.',
          'A for loop runs a block a known number of times, usually with range, which generates numbers from zero up to but excluding the given count: range(3) yields 0, 1, 2, three iterations not four, a recurring source of error.',
          'A while loop repeats as long as its condition holds, used when the iteration count is unknown. Its famous danger is the infinite loop: if the variable in the condition never changes, the condition stays true forever.',
          'Two tools steer a loop: break stops it entirely once the goal is met, and continue skips the rest of the current iteration only. The first exits, the second jumps.',
          'Nesting a loop inside another runs the inner one fully for each outer pass. Three by three means nine executions, not six, which is why nested loops get expensive as data grows. Two-dimensional arrays build on this: a list of lists, read by row index then column index.'
        ],
        table: {
          head_ar: ['الأداة', 'متى تستخدمها', 'الخطر الشائع'],
          head_en: ['Tool', 'When to use', 'Common pitfall'],
          rows: [
            ['for', 'عدد الدورات معروف', 'نسيان أن range تنتهي قبل العدد'],
            ['while', 'عدد الدورات مجهول', 'حلقة لا نهائية بلا تغيّر الشرط'],
            ['break', 'تحقق الهدف فتوقف', 'استخدامه مكان continue'],
            ['continue', 'تخطي حالة واحدة', 'ظن أنه يوقف الحلقة']
          ]
        },
        keyPoints_ar: [
          'الفهرس يبدأ من صفر، والفهرس -1 هو العنصر الأخير.',
          'range(3) تعطي 0 و1 و2 — ثلاث دورات لا أربع.',
          'while بلا تغيّر في متغيّر الشرط تدور إلى الأبد.',
          'break يخرج من الحلقة، وcontinue يقفز للدورة التالية.',
          'حلقتان متداخلتان بثلاث دورات لكل منهما تعنيان تسع تنفيذات.'
        ],
        keyPoints_en: [
          'Indexes start at zero, and -1 is the last element.',
          'range(3) yields 0, 1, 2: three iterations, not four.',
          'A while whose condition variable never changes runs forever.',
          'break exits the loop; continue jumps to the next iteration.',
          'Two nested loops of three iterations each mean nine executions.'
        ],
        analogy_ar: 'تخيّل القائمة صفّاً من الخزائن مرقّمة، وأول خزانة رقمها صفر. والحلقة موظف يمشي على الخزائن واحدة واحدة وينفّذ التعليمة نفسها عند كل خزانة. فـbreak يعني: إن وجدت ما تبحث عنه، اترك الباقي وارجع. وcontinue يعني: تجاوز هذي الخزانة وأكمل مشيك.',
        analogy_en: 'Picture a list as a row of numbered lockers where the first is number zero. A loop is a clerk walking the lockers one by one, applying the same instruction at each. break means: if you find what you seek, leave the rest and come back. continue means: skip this locker and keep walking.',
        terms: [
          { term: 'Index', def_ar: 'رقم موضع العنصر في القائمة، يبدأ من الصفر.', def_en: 'The position number of an element in a list, starting at zero.' },
          { term: 'range', def_ar: 'دالة تولّد سلسلة أرقام تنتهي قبل العدد المعطى.', def_en: 'A function generating a number sequence ending before the given count.' },
          { term: 'Infinite Loop', def_ar: 'حلقة لا يتحقق شرط خروجها أبداً فلا تتوقف.', def_en: 'A loop whose exit condition never holds, so it never stops.' },
          { term: '2D Array', def_ar: 'قائمة عناصرها قوائم، تمثّل جدولاً بصفوف وأعمدة.', def_en: 'A list of lists representing a table of rows and columns.' }
        ],
        cards: [
          { q_ar: 'كم دورة تعطي range(3) ؟', q_en: 'How many iterations does range(3) give?', a_ar: 'ثلاث دورات بالقيم 0 و1 و2، لأنها تنتهي قبل العدد المعطى.', a_en: 'Three, with values 0, 1 and 2, because it ends before the given count.' },
          { q_ar: 'ما فهرس آخر عنصر في أي قائمة؟', q_en: 'What is the index of the last element in any list?', a_ar: 'الفهرس -1، وهو أنظف من len(list) - 1.', a_en: 'Index -1, cleaner than len(list) - 1.' },
          { q_ar: 'ما الفرق بين break وcontinue ؟', q_en: 'Difference between break and continue?', a_ar: 'break يوقف الحلقة كلها، وcontinue يتخطى الدورة الحالية فقط.', a_en: 'break stops the whole loop; continue skips only the current iteration.' },
          { q_ar: 'كم مرة ينفَّذ جسم حلقتين متداخلتين بثلاث دورات لكل منهما؟', q_en: 'How many times does the body of two nested three-iteration loops run?', a_ar: 'تسع مرات، لأن الداخلية تدور كاملةً مع كل دورة للخارجية.', a_en: 'Nine times, because the inner loop runs fully for each outer pass.' }
        ]
      },
      {
        title_ar: 'الدوال والأخطاء والوحدات',
        title_en: 'Functions, Errors and Modules',
        lead_ar: 'الدالة تجمع خطوات متكررة تحت اسم واحد، والخطأ ليس عدواً بل رسالة تدلّك على موضع المشكلة، والوحدة تعطيك دوالاً جاهزة بلا كتابتها.',
        lead_en: 'A function groups repeated steps under one name, an error is not an enemy but a message pointing at the problem, and a module hands you ready-made functions.',
        body_ar: [
          'تعريف الدالة بكلمة def لا ينفّذ شيئاً بذاته، إنما يسجّل الخطوات. والتنفيذ يحدث عند الاستدعاء بكتابة الاسم متبوعاً بقوسين — ونسيان القوسين يعني الإشارة للدالة لا تشغيلها.',
          'وتستقبل الدالة قيماً عبر المعاملات المكتوبة بين قوسي التعريف، وما يُمرَّر وقت الاستدعاء يُسمّى الوسيط. ويمكن إعطاء المعامل قيمة افتراضية تُستخدم إن لم يُمرَّر شيء، فيصير الاستدعاء ممكناً بوسيط وبدونه.',
          'وأهم فرق يلتبس على المبتدئ هو بين print وreturn. فـprint يعرض على الشاشة فقط ولا يعطي البرنامج قيمة تُستخدم، وreturn يسلّم القيمة لمن استدعى الدالة فتُخزَّن في متغيّر أو تدخل في حساب. والدالة التي لا تحوي return ترجع None ضمناً — ولهذا يفاجأ كثيرون بطباعة None.',
          'والمتغيّر المعرَّف داخل دالة محلي: يولد بالاستدعاء ويختفي بانتهائه ولا يراه الخارج. وهذا العزل مقصود، فهو يمنع دالة من إفساد بيانات أخرى. أما العودية فدالة تستدعي نفسها على مسألة أصغر، ولا بد لها من حالة توقف ترجع نتيجة مباشرة، وإلا تراكمت الاستدعاءات حتى ينهار البرنامج.',
          'والأخطاء نوعان يختلفان جذرياً: خطأ البناء يمنع التشغيل ويظهر فوراً مع رقم السطر فهو أرحم، والخطأ المنطقي يترك البرنامج يعمل ويعطي نتيجة خاطئة بلا أي رسالة — ولا يكشفه إلا التتبّع أو الاختبار. ورسالة الخطأ تُقرأ من أسفلها: السطر الأخير يذكر نوع الخطأ وسببه، وما فوقه يبيّن مسار الوصول إليه.',
          'وبعض الأخطاء متوقَّعة ولا ذنب للمبرمج فيها: مستخدم يكتب حرفاً مكان رقم، أو قسمة على صفر. فبدل أن يتوقف البرنامج نضع الكود المعرَّض في try ونعالج الحالة في except، ويُفضَّل تحديد نوع الخطأ لكل حالة لأن except العام يبتلع أخطاء لم تقصدها ويخفي عيوباً حقيقية.',
          'وأخيراً: لا تكتب ما هو مكتوب. الوحدة ملف فيه دوال جاهزة، وimport math يجلبها كاملة فتُستخدم مسبوقة باسمها، وfrom math import sqrt يجلب اسماً واحداً يُستخدم مباشرة. الأول أوضح لأنه يبيّن مصدر الدالة، والثاني أقصر.'
        ],
        body_en: [
          'Defining a function with def executes nothing by itself; it records the steps. Execution happens on the call, writing the name followed by parentheses, and omitting them references the function instead of running it.',
          'A function receives values through parameters written between the definition parentheses, while what is passed at call time is an argument. A parameter can carry a default used when nothing is passed, so the call works either way.',
          'The difference that most confuses beginners is print versus return. print only displays and gives the program no usable value, while return hands the value to the caller for storage or computation. A function without return implicitly returns None, which surprises many.',
          'A variable defined inside a function is local: born at the call and gone when it ends, invisible outside. This isolation prevents one function from corrupting another data. Recursion is a function calling itself on a smaller problem, and it must have a base case returning directly, or calls pile up until the program crashes.',
          'Errors come in two fundamentally different kinds: a syntax error blocks execution and shows immediately with a line number, which is the merciful case, while a logic error lets the program run and produce a wrong answer with no message, exposed only by tracing or testing. Read an error message from the bottom: the last line names the type and cause.',
          'Some errors are expected and not the programmer fault: a letter typed where a number belongs, or division by zero. Rather than crashing, put the risky code in try and handle it in except, naming the specific error type, since a bare except swallows unintended errors and hides real defects.',
          'Finally: do not write what is already written. A module is a file of ready functions; import math brings it whole so functions are used prefixed by its name, while from math import sqrt brings a single name used directly.'
        ],
        table: {
          head_ar: ['المفهوم', 'يعطي قيمة؟', 'يظهر على الشاشة؟'],
          head_en: ['Concept', 'Returns a value?', 'Shows on screen?'],
          rows: [
            ['print(x)', 'لا — ترجع None', 'نعم'],
            ['return x', 'نعم — تُستخدم في حساب', 'لا'],
            ['دالة بلا return', 'ترجع None ضمناً', 'حسب محتواها'],
            ['try / except', 'يمنع توقف البرنامج', 'حسب المعالجة']
          ]
        },
        keyPoints_ar: [
          'def يسجّل الخطوات، والقوسان عند الاستدعاء هما ما ينفّذها.',
          'print يعرض فقط، وreturn يسلّم قيمة تُستخدم — والدالة بلا return ترجع None.',
          'متغيّر الدالة محلي يختفي بانتهاء الاستدعاء.',
          'العودية بلا حالة توقف تنهار حتماً.',
          'خطأ البناء يوقف التشغيل، والخطأ المنطقي يعمل بصمت ويعطي نتيجة خاطئة.',
          'حدّد نوع الخطأ في except ولا تستخدم except عاماً.'
        ],
        keyPoints_en: [
          'def records the steps; the parentheses at the call are what run them.',
          'print only displays while return hands back a usable value, and a function without return returns None.',
          'A function variable is local and vanishes when the call ends.',
          'Recursion without a base case is guaranteed to crash.',
          'A syntax error stops execution; a logic error runs silently and returns a wrong result.',
          'Name the error type in except rather than using a bare except.'
        ],
        analogy_ar: 'تخيّل الدالة وصفة طبخ مكتوبة في دفتر. كتابة الوصفة لا تُطعم أحداً — التنفيذ هو أن تقف وتطبخها، وهذا هو الاستدعاء. والمقادير التي تدخلها هي الوسائط، والطبق الذي يخرج هو return. أما print فهو أن تصوّر الطبق وتنشره: يراه الناس ولا يأكله أحد ولا يدخل في وصفة أخرى.',
        analogy_en: 'Picture a function as a recipe in a notebook. Writing the recipe feeds nobody; cooking it is the call. The ingredients you put in are the arguments and the dish that comes out is return. print is photographing the dish and posting it: people see it, nobody eats it, and it goes into no other recipe.',
        terms: [
          { term: 'Parameter', def_ar: 'الاسم المكتوب بين قوسي تعريف الدالة.', def_en: 'The name written between the function definition parentheses.' },
          { term: 'Argument', def_ar: 'القيمة الفعلية الممرَّرة وقت الاستدعاء.', def_en: 'The actual value passed at call time.' },
          { term: 'Scope', def_ar: 'نطاق رؤية المتغيّر: محلي داخل الدالة أو عام خارجها.', def_en: 'Where a variable is visible: local inside a function or global outside.' },
          { term: 'Base Case', def_ar: 'حالة التوقف في الدالة العودية التي ترجع نتيجة بلا استدعاء.', def_en: 'The stopping case in recursion that returns without recursing.' },
          { term: 'Exception', def_ar: 'خطأ يقع أثناء التشغيل ويمكن التقاطه ومعالجته.', def_en: 'A run-time error that can be caught and handled.' }
        ],
        cards: [
          { q_ar: 'ما الفرق بين print وreturn ؟', q_en: 'Difference between print and return?', a_ar: 'print يعرض على الشاشة فقط، وreturn يسلّم قيمة للمستدعي يمكن تخزينها أو استخدامها في حساب.', a_en: 'print only displays; return hands a value to the caller that can be stored or computed with.' },
          { q_ar: 'ماذا ترجع دالة بلا return ؟', q_en: 'What does a function without return give back?', a_ar: 'ترجع None ضمناً.', a_en: 'It implicitly returns None.' },
          { q_ar: 'ما الجزآن اللازمان لأي دالة عودية؟', q_en: 'What two parts does any recursive function need?', a_ar: 'حالة التوقف التي ترجع نتيجة مباشرة، والخطوة العودية التي تقترب منها.', a_en: 'A base case returning directly, and a recursive step moving toward it.' },
          { q_ar: 'لماذا يُتجنَّب except العام؟', q_en: 'Why avoid a bare except?', a_ar: 'لأنه يبتلع أخطاء لم تكن تقصدها فيخفي عيوباً حقيقية في الكود.', a_en: 'Because it swallows unintended errors and hides real defects in the code.' },
          { q_ar: 'أي الخطأين أخطر: البنائي أم المنطقي؟', q_en: 'Which is more dangerous: syntax or logic error?', a_ar: 'المنطقي، لأن البرنامج يعمل بلا رسالة ويعطي نتيجة خاطئة قد تمر دون أن تُلاحظ.', a_en: 'The logic error, because the program runs with no message and returns a wrong result that may go unnoticed.' }
        ]
      }
    ],

    // ─────────── التفكير البرمجي والخوارزميات ───────────
    1: [
      {
        title_ar: 'مفهوم الخوارزمية وتحليل المشكلة',
        title_en: 'Algorithms and Problem Analysis',
        lead_ar: 'الخوارزمية سلسلة خطوات محددة تحوّل مدخلاً إلى مخرج، وهي ليست كوداً — الكود ترجمتها إلى لغة يفهمها الجهاز.',
        lead_en: 'An algorithm is a definite sequence of steps turning an input into an output. It is not code; code is its translation into a language the machine understands.',
        body_ar: [
          'قبل أي سطر تكتبه، هناك فكرة: ما الخطوات التي تحل المشكلة؟ هذي الفكرة هي الخوارزمية. وهي مستقلة عن اللغة تماماً، فالخوارزمية الواحدة تُكتب ببايثون أو جافا أو حتى بالعربية على ورقة. ولهذا يقال إن المبرمج الجيد يفكر في الخوارزمية أولاً ويكتب الكود ثانياً — والعكس هو سبب أغلب الكود المرتبك.',
          'وأنت تستخدم خوارزميات يومياً بلا أن تسميها: وصفة طبخ لها مدخلات (المقادير) ومخرج (الطبق) وخطوات مرتبة، والطريق من بيتك إلى عملك، وطريقة ترتيبك للأوراق حسب التاريخ. الفرق الوحيد أن الحاسوب لا يملأ الفراغات: يجب أن تكون كل خطوة واضحة لا تحتمل تفسيرين.',
          'ولا يُسمى وصفٌ خوارزميةً حتى تتوفر فيه خمس خصائص: مدخلات محددة، ومخرجات محددة، ووضوح كل خطوة، ومحدودية بأن تنتهي بعد عدد منتهٍ من الخطوات، وقابلية للتنفيذ بوسائل متاحة. وأكثر ما يُخلّ به المبتدئ اثنتان: الوضوح، بكتابة خطوة مثل «رتّب البيانات» دون بيان كيف؛ والمحدودية، بكتابة تكرار بلا شرط خروج.',
          'وقبل الحل يأتي التحليل. حدّد ثلاثة: ما المعطى — المدخلات وأنواعها، وما المطلوب — المخرج بالضبط، وما القيود — حجم البيانات والحالات الاستثنائية. وأكثر الأخطاء كلفةً حلٌّ صحيح تماماً لمشكلة غير المطلوبة، وسببه القفز إلى الكود قبل تحديد المطلوب. واسأل دائماً عن الحالات الحدّية: ماذا لو كانت القائمة فارغة؟ ماذا لو تساوت العناصر؟',
          'ثم فكّك المشكلة الكبيرة إلى مسائل صغيرة، كل واحدة مفهومة وقابلة للاختبار وحدها. فائدة التجزئة ثلاثية: تختبر كل جزء منفرداً فتعرف موضع الخطأ بدقة، وتعيد استخدام الجزء في مكان آخر، وتوزّع الأجزاء على أكثر من شخص. والعلامة على تجزئة جيدة أن تصف كل جزء بجملة واحدة بلا كلمة «ثم».',
          'وآخر أدوات التفكير: التجريد وملاحظة الأنماط. التجريد إهمال ما لا يؤثر في الحل — فحين ترتب طلاباً بالدرجات لا يهم اسم الطالب، إنما يهم أن لكل عنصر قيمة تُقارن. ولهذا تصلح خوارزمية الترتيب نفسها للطلاب والمنتجات والملفات: ثلاث مشاكل مختلفة الظاهر، بنيتها واحدة بعد التجريد.'
        ],
        body_en: [
          'Before any line you write, there is an idea: what steps solve the problem? That idea is the algorithm. It is entirely language independent, so one algorithm can be written in Python, Java, or even in words on paper. A good programmer thinks about the algorithm first and writes code second; the reverse produces most confused code.',
          'You use algorithms daily without naming them: a recipe has inputs, an output and ordered steps, so does your route to work and the way you sort papers by date. The only difference is that a computer fills no gaps: every step must be unambiguous.',
          'A description is not an algorithm until it has five properties: defined inputs, defined outputs, unambiguous steps, finiteness so it ends after a limited number of steps, and effectiveness with available means. Beginners break two most often: clarity, by writing a step like "sort the data" without saying how; and finiteness, by writing repetition with no exit.',
          'Analysis precedes solving. Define three things: what is given, what is required, and the constraints. The costliest mistake is a perfectly correct solution to the wrong problem, caused by jumping to code. Always ask about edge cases: what if the list is empty, what if elements are equal?',
          'Then decompose the large problem into small ones, each understandable and testable alone. The benefit is threefold: you locate errors precisely, reuse parts elsewhere, and distribute work. Good decomposition is signalled by describing each part in one sentence without the word "then".',
          'The last thinking tool is abstraction and pattern recognition. Abstraction drops what does not affect the solution: ranking students by grade does not care about names, only that each item has a comparable value. That is why one sorting algorithm serves students, products and files.'
        ],
        table: {
          head_ar: ['الخاصية', 'معناها', 'مثال على الإخلال بها'],
          head_en: ['Property', 'Meaning', 'Example of violation'],
          rows: [
            ['المدخلات', 'محددة ومعروفة النوع', 'خوارزمية لا تبيّن ما تستقبل'],
            ['الوضوح', 'كل خطوة لا تحتمل تفسيرين', 'اختر الرقم المناسب'],
            ['المحدودية', 'تنتهي بعد خطوات منتهية', 'كرّر إلى الأبد'],
            ['المخرجات', 'نتيجة محددة تُنتَج', 'خوارزمية لا تُرجع شيئاً']
          ]
        },
        keyPoints_ar: [
          'الخوارزمية فكرة مستقلة عن اللغة، والكود ترجمتها.',
          'خمس خصائص لازمة: مدخلات ومخرجات ووضوح ومحدودية وقابلية تنفيذ.',
          'حلٌّ صحيح لمشكلة غير المطلوبة أكلف من حلٍّ خاطئ يُكتشف مبكراً.',
          'التجزئة تجعل الخطأ محصوراً في جزء واحد يسهل عزله.',
          'التجريد يكشف أن مشاكل مختلفة الظاهر بنيتها واحدة.'
        ],
        keyPoints_en: [
          'An algorithm is a language-independent idea; code is its translation.',
          'Five required properties: inputs, outputs, clarity, finiteness, effectiveness.',
          'A correct solution to the wrong problem costs more than a wrong one caught early.',
          'Decomposition confines an error to one part that is easy to isolate.',
          'Abstraction reveals that seemingly different problems share one structure.'
        ],
        analogy_ar: 'تخيّل الخوارزمية وصفة طبخ، والكود هو الوصفة مترجمة للغة الطباخ. الوصفة نفسها تصلح لأي مطبخ في العالم، وترجمتها تختلف باختلاف اللغة. والوصفة الرديئة لا تُصلحها ترجمة ممتازة: لو كانت الخطوات نفسها خاطئة، فالطبق سيفسد بأي لغة كُتبت بها.',
        analogy_en: 'Picture the algorithm as a recipe and the code as that recipe translated for the cook. The recipe itself works in any kitchen; only the translation changes with language. A bad recipe is not saved by an excellent translation: if the steps are wrong, the dish fails in every language.',
        terms: [
          { term: 'Algorithm', def_ar: 'سلسلة خطوات محددة تحوّل مدخلاً إلى مخرج.', def_en: 'A definite sequence of steps turning an input into an output.' },
          { term: 'Decomposition', def_ar: 'تفكيك المشكلة الكبيرة إلى مسائل صغيرة تُحل وتُختبر وحدها.', def_en: 'Breaking a large problem into small ones solved and tested alone.' },
          { term: 'Abstraction', def_ar: 'إهمال التفاصيل التي لا تؤثر في الحل والاحتفاظ بجوهر المشكلة.', def_en: 'Dropping details that do not affect the solution, keeping the essence.' },
          { term: 'Edge Case', def_ar: 'حالة حدّية نادرة كقائمة فارغة أو قيمة سالبة قد تكسر الحل.', def_en: 'A rare boundary case such as an empty list or negative value that may break the solution.' }
        ],
        cards: [
          { q_ar: 'ما الفرق بين الخوارزمية والكود؟', q_en: 'Difference between an algorithm and code?', a_ar: 'الخوارزمية الفكرة والخطوات مستقلةً عن اللغة، والكود ترجمتها إلى لغة ينفّذها الجهاز.', a_en: 'The algorithm is the language-independent idea and steps; code is its translation into an executable language.' },
          { q_ar: 'لماذا تُشترط المحدودية في الخوارزمية؟', q_en: 'Why must an algorithm be finite?', a_ar: 'لأن ما لا ينتهي لا يعطي مخرجاً أبداً، فلا يُسمى حلاً.', a_en: 'Because what never ends never produces an output, so it is not a solution.' },
          { q_ar: 'ما أكلف خطأ في مرحلة التحليل؟', q_en: 'What is the costliest analysis mistake?', a_ar: 'حلّ مشكلة غير المطلوبة حلاً صحيحاً، لأنه لا يُكتشف إلا متأخراً بعد بناء كامل.', a_en: 'Correctly solving the wrong problem, since it surfaces only late after everything is built.' },
          { q_ar: 'ما فائدة التجريد عملياً؟', q_en: 'What is the practical value of abstraction?', a_ar: 'يكشف أن مشاكل مختلفة الظاهر لها البنية نفسها، فيُنقل الحل الواحد بينها.', a_en: 'It reveals that different-looking problems share a structure, so one solution transfers between them.' }
        ]
      },
      {
        title_ar: 'الكود الوهمي والمخططات الانسيابية',
        title_en: 'Pseudocode and Flowcharts',
        lead_ar: 'قبل أن تكتب كوداً تحاسبك عليه اللغة، اكتب خطواتك بلغة تفهمها أنت — نصاً أو رسماً — فتراجع منطقك وحده.',
        lead_en: 'Before writing code the language will hold you to, write your steps in a form you understand, as text or a drawing, so you can review the logic alone.',
        body_ar: [
          'الخطوات في الخوارزمية مرتبة لا مجموعة: تبديل خطوتين قد يقلب النتيجة أو يفسدها. والسبب أن كل خطوة تفترض حالة أنتجتها السابقة؛ فلا يمكن قسمة المجموع على العدد قبل حساب المجموع، ولا طباعة نتيجة قبل حسابها. وطريقة التحقق البسيطة: اسأل عن كل خطوة ما الذي تحتاجه جاهزاً قبلها.',
          'والكود الوهمي كتابة الخوارزمية بلغة قريبة من البشر، منظمة كالكود لكنها لا تلتزم بقواعد لغة بعينها: لا فواصل منقوطة ولا أقواس تُحاسب عليها. وفائدته أنه يفصل التفكير في الحل عن التفكير في قواعد اللغة، فتراجع منطقك قبل أن تكتب سطراً واحداً — وقد تكتشف خطأً في الفكرة كان سيكلفك ساعة تصحيح لو كتبته كوداً.',
          'وميزة ثانية للكود الوهمي: يقرأه غير المبرمجين. فإن كنت تناقش فكرة مع فريق فيه محلل أعمال أو مصمم، فالكود الوهمي لغة مشتركة بينكم، بينما الكود الحقيقي يقصي نصف الغرفة.',
          'والمخطط الانسيابي يرسم الخوارزمية بأشكال لكل منها معنى متفق عليه: البيضاوي للبداية والنهاية، ومتوازي الأضلاع للإدخال والإخراج، والمستطيل للمعالجة والحساب، والمعيّن للقرار، والسهم لاتجاه التنفيذ. والالتزام بهذي المعاني شرط لا تجميل، فرسم القرار بمستطيل يجعل مخططك غير مقروء لمن يعرف الاصطلاح.',
          'والقرار يُرسم معيّناً يدخله سهم واحد ويخرج منه سهمان: نعم ولا. ولا يجوز أن يخرج منه سهم واحد، لأن الحالة الأخرى تبقى بلا مسار. وقد يلتقي المساران بعده إن كان الاختلاف في خطوة واحدة، وقد يستمران منفصلين — وهذا التمثيل هو صورة if وelse نفسها.',
          'أما الحلقة فتُرسم بسهم راجع يعيد التنفيذ إلى نقطة سابقة، ولا بد قبل الرجوع من معيّن يفحص شرط الاستمرار. وموضع هذا المعيّن يحدد نوع الحلقة: إن كان قبل الجسم فقد لا يُنفَّذ الجسم ولا مرة، وإن كان بعده نُفِّذ مرة على الأقل. والخطأ الشائع رسم السهم الراجع بلا معيّن، فينتج دوران أبدي.'
        ],
        body_en: [
          'Steps are ordered, not merely collected: swapping two may flip or ruin the result, because each step assumes a state the previous produced. You cannot divide the sum by the count before computing the sum. A simple check: for each step, ask what must be ready before it.',
          'Pseudocode writes the algorithm in near-human language, structured like code but bound to no language rules. Its value is separating thinking about the solution from thinking about syntax, so you review logic before writing a line, often catching an idea-level error that would have cost an hour of debugging.',
          'A second merit: non-programmers can read it. Discussing an idea with a business analyst or designer, pseudocode is common ground while real code excludes half the room.',
          'A flowchart draws the algorithm with shapes carrying agreed meanings: an oval for start and end, a parallelogram for input and output, a rectangle for processing, a diamond for a decision, and an arrow for flow. Respecting these is required, not decorative.',
          'A decision is a diamond with one arrow in and two out, yes and no. It must never have a single outgoing arrow, or the other case has no path. The two may rejoin afterwards or continue separately, and this is exactly the picture of if and else.',
          'A loop is drawn with a back arrow returning to an earlier point, and before returning there must be a diamond checking the continue condition. Its position defines the loop type: before the body the body may never run, after it the body runs at least once. Drawing the back arrow with no diamond produces an endless cycle.'
        ],
        table: {
          head_ar: ['الشكل', 'معناه', 'يقابله في الكود'],
          head_en: ['Shape', 'Meaning', 'Code equivalent'],
          rows: [
            ['بيضاوي', 'البداية والنهاية', 'بداية البرنامج ونهايته'],
            ['متوازي أضلاع', 'إدخال أو إخراج', 'input و print'],
            ['مستطيل', 'معالجة أو حساب', 'إسناد أو عملية حسابية'],
            ['معيّن', 'قرار بمخرجين', 'if و else'],
            ['سهم راجع', 'تكرار', 'for و while']
          ]
        },
        keyPoints_ar: [
          'ترتيب الخطوات جزء من صحة الخوارزمية لا شكل لها.',
          'الكود الوهمي يفصل مراجعة المنطق عن قواعد اللغة، ويقرأه غير المبرمج.',
          'لكل شكل في المخطط معنى ثابت، ومخالفته تُفقد المخطط قيمته.',
          'المعيّن لا يخرج منه سهم واحد أبداً؛ لا بد من مسار لكل حالة.',
          'السهم الراجع بلا معيّن يفحص الشرط = حلقة لا نهائية.'
        ],
        keyPoints_en: [
          'Step order is part of correctness, not presentation.',
          'Pseudocode separates logic review from syntax, and non-programmers can read it.',
          'Each flowchart shape has a fixed meaning; breaking it makes the chart worthless.',
          'A diamond never has one outgoing arrow; every case needs a path.',
          'A back arrow with no condition diamond is an infinite loop.'
        ],
        analogy_ar: 'تخيّل الكود الوهمي مخطط المهندس على ورق قبل صبّ الخرسانة. تعديل خط على الورق يكلّف ثانية، وتعديل جدار مصبوب يكلّف أسبوعاً. والمخطط الانسيابي هو المخطط نفسه لكن بصورة: يريك المسارات والتفرعات دفعة واحدة، فتلمح الطريق المسدود قبل أن تسلكه.',
        analogy_en: 'Picture pseudocode as an engineer drawing on paper before pouring concrete. Moving a line on paper costs a second; moving a poured wall costs a week. A flowchart is the same plan as a picture: it shows paths and branches at once, so you spot the dead end before walking it.',
        terms: [
          { term: 'Pseudocode', def_ar: 'كتابة الخوارزمية بلغة قريبة من البشر لا تلتزم بقواعد لغة برمجة.', def_en: 'Writing an algorithm in near-human language bound to no programming syntax.' },
          { term: 'Flowchart', def_ar: 'تمثيل الخوارزمية بأشكال وأسهم لكل منها معنى متفق عليه.', def_en: 'Representing an algorithm with shapes and arrows of agreed meaning.' },
          { term: 'Decision', def_ar: 'المعيّن في المخطط، يدخله سهم ويخرج منه مساران: نعم ولا.', def_en: 'The diamond, entered by one arrow and leaving by two: yes and no.' },
          { term: 'Back Arrow', def_ar: 'السهم الذي يعيد التنفيذ لنقطة سابقة فيصنع الحلقة.', def_en: 'The arrow returning execution to an earlier point, forming a loop.' }
        ],
        cards: [
          { q_ar: 'لماذا يُكتب الكود الوهمي أصلاً؟', q_en: 'Why write pseudocode at all?', a_ar: 'ليفصل مراجعة المنطق عن قواعد اللغة، فتُكتشف أخطاء الفكرة قبل كتابة الكود.', a_en: 'To separate logic review from syntax, so idea-level errors surface before coding.' },
          { q_ar: 'كم سهماً يخرج من المعيّن؟', q_en: 'How many arrows leave a decision diamond?', a_ar: 'سهمان: نعم ولا؛ وسهم واحد يعني حالة بلا مسار.', a_en: 'Two: yes and no; a single one leaves a case with no path.' },
          { q_ar: 'ما الذي ينتج عن سهم راجع بلا معيّن؟', q_en: 'What results from a back arrow with no diamond?', a_ar: 'حلقة لا نهائية، لأن لا شرط يوقف الرجوع.', a_en: 'An infinite loop, since nothing stops the return.' },
          { q_ar: 'ما أثر موضع معيّن الشرط في الحلقة؟', q_en: 'What does the condition diamond position change?', a_ar: 'إن كان قبل الجسم فقد لا يُنفَّذ ولا مرة، وإن كان بعده نُفِّذ مرة على الأقل.', a_en: 'Before the body it may never run; after it the body runs at least once.' }
        ]
      },
      {
        title_ar: 'التتبّع والبحث',
        title_en: 'Tracing and Searching',
        lead_ar: 'التتبّع اليدوي أقوى وسيلة لكشف الخطأ المنطقي، والبحث الثنائي أسرع من الخطي بشرط واحد لا يُتنازل عنه: أن تكون القائمة مرتبة.',
        lead_en: 'Manual tracing is the strongest way to expose logic errors, and binary search beats linear search under one non-negotiable condition: a sorted list.',
        body_ar: [
          'التتبّع اليدوي تنفيذ الخوارزمية بالورقة والقلم: ترسم عموداً لكل متغيّر وصفاً لكل خطوة، وتكتب القيم بعد كل سطر. وهو الوسيلة الوحيدة تقريباً لكشف الخطأ المنطقي، لأن البرنامج المنطقي الخاطئ يعمل بلا رسالة خطأ فلا يفضحه المفسّر. وأهم ما يُكشف به: الشرط المعكوس، والحلقة التي تزيد أو تنقص دورة واحدة.',
          'والبحث الخطي يفحص العناصر من الأول إلى الأخير حتى يجد المطلوب فيتوقف، أو تنتهي القائمة فيعلن عدم وجوده. ميزته أنه لا يشترط ترتيباً ويصلح لأي بيانات، وعيبه أنه في أسوأ الحالات يفحص كل العناصر. فعدد مقارناته واحدة إن كان المطلوب أول عنصر، وn إن كان الأخير أو غير موجود.',
          'أما البحث الثنائي فيحدد طرفي المجال ويقارن بعنصره الأوسط: فإن ساواه انتهى، وإن كان المطلوب أكبر نقل الطرف الأدنى إلى ما بعد الأوسط، وإن كان أصغر نقل الطرف الأعلى إلى ما قبله. فيتقلص المجال إلى نصفه في كل خطوة حتى يجد المطلوب أو يتقاطع الطرفان.',
          'وشرط الترتيب ليس تفصيلاً بل هو أساس عمله. فهو حين يجد الأوسط أصغر من المطلوب، يستبعد النصف الأيسر كله بناءً على أن الترتيب يضمن أن كل ما قبل الأوسط أصغر منه. فإن كانت القائمة غير مرتبة بطل هذا الضمان، وقد يستبعد النصف الذي فيه المطلوب فيعلن عدم وجوده وهو موجود — والأخطر أنه لا يعطي رسالة خطأ، بل نتيجة خاطئة بثقة.',
          'والفرق بين البحثين لا يظهر على عشرة عناصر، وإنما حين تكبر البيانات: على ألف عنصر يحتاج الخطي في أسوأ حالاته ألف مقارنة، والثنائي عشراً فقط، لأن 2 مرفوعة للقوة 10 تساوي 1024. وعلى مليون عنصر: مليون مقارنة مقابل عشرين.',
          'لكن لا تُخدع بالأرقام وحدها: الثنائي يشترط الترتيب، وترتيب قائمة غير مرتبة أغلى من البحث الخطي نفسه. فالقاعدة العملية: إن كانت القائمة مرتبة أصلاً أو ستُبحث فيها مرات كثيرة، فرتّبها مرة واستخدم الثنائي؛ وإن كان بحثاً واحداً على قائمة غير مرتبة، فالخطي أوفر.'
        ],
        body_en: [
          'Manual tracing runs the algorithm on paper: a column per variable, a row per step, values written after each line. It is almost the only way to expose logic errors, since a logically wrong program runs with no error message. It most often catches an inverted condition or a loop off by one iteration.',
          'Linear search checks elements from first to last until it finds the target or the list ends. Its advantage is requiring no sorting; its drawback is checking everything in the worst case: one comparison if the target is first, n if it is last or absent.',
          'Binary search sets range bounds and compares with the middle: equal means done, larger moves the low bound past the middle, smaller moves the high bound before it. The range halves each step until the target is found or the bounds cross.',
          'The sorting requirement is the basis of how it works, not a detail. Finding the middle smaller than the target, it discards the whole left half, relying on sorting to guarantee everything before is smaller. Unsorted, that guarantee is void and it may discard the very half holding the target, reporting absence confidently with no error message.',
          'The difference does not show on ten elements but as data grows: on a thousand elements linear needs up to a thousand comparisons and binary only ten, since 2 to the power 10 is 1024. On a million: a million against twenty.',
          'Do not be fooled by numbers alone: binary requires sorting, and sorting an unsorted list costs more than the linear search itself. Practical rule: if the list is already sorted or will be searched many times, sort once and use binary; for a single search on an unsorted list, linear is cheaper.'
        ],
        table: {
          head_ar: ['عدد العناصر', 'الخطي (أسوأ حالة)', 'الثنائي (أسوأ حالة)'],
          head_en: ['Elements', 'Linear (worst)', 'Binary (worst)'],
          rows: [
            ['10', '10', '4'],
            ['100', '100', '7'],
            ['1,000', '1,000', '10'],
            ['1,000,000', '1,000,000', '20']
          ]
        },
        keyPoints_ar: [
          'التتبّع اليدوي يكشف الخطأ المنطقي الذي لا يعطي أي رسالة خطأ.',
          'البحث الخطي لا يشترط ترتيباً، وأسوأ حالاته فحص كل العناصر.',
          'البحث الثنائي ينصّف المجال في كل خطوة، ويشترط قائمة مرتبة.',
          'على قائمة غير مرتبة يعطي الثنائي نتيجة خاطئة بلا أي إنذار.',
          'ترتيب القائمة لأجل بحث واحد أغلى من البحث الخطي نفسه.'
        ],
        keyPoints_en: [
          'Manual tracing exposes logic errors that raise no message.',
          'Linear search needs no sorting and checks everything in the worst case.',
          'Binary search halves the range each step and requires a sorted list.',
          'On an unsorted list binary returns a wrong answer with no warning.',
          'Sorting a list for a single search costs more than the linear search.'
        ],
        analogy_ar: 'تخيّل معجماً ورقياً. البحث الخطي أن تقلب من الصفحة الأولى ورقة ورقة حتى تجد الكلمة. والثنائي أن تفتح المنتصف: إن كانت كلمتك بعده أهملت النصف الأول كله دفعة واحدة. وهذا لا يصلح إلا لأن المعجم مرتب أبجدياً — لو كانت كلماته مبعثرة، لكان فتح المنتصف بلا معنى وأهملت نصفاً قد يحوي كلمتك.',
        analogy_en: 'Picture a paper dictionary. Linear search turns page by page from the first. Binary opens the middle: if your word comes after, you drop the entire first half at once. This works only because the dictionary is alphabetical; with scattered words, opening the middle is meaningless and you would drop a half that may hold your word.',
        terms: [
          { term: 'Tracing', def_ar: 'تنفيذ الخوارزمية يدوياً بجدول يسجّل قيم المتغيرات خطوة خطوة.', def_en: 'Running an algorithm by hand with a table recording variable values step by step.' },
          { term: 'Linear Search', def_ar: 'فحص العناصر واحداً واحداً حتى العثور على المطلوب.', def_en: 'Checking elements one by one until the target is found.' },
          { term: 'Binary Search', def_ar: 'تنصيف المجال بمقارنة العنصر الأوسط، ويشترط قائمة مرتبة.', def_en: 'Halving the range by comparing the middle element; requires a sorted list.' },
          { term: 'Precondition', def_ar: 'شرط يجب تحققه قبل تشغيل الخوارزمية وإلا بطلت نتيجتها.', def_en: 'A condition that must hold before running, or the result is invalid.' }
        ],
        cards: [
          { q_ar: 'لماذا يفشل البحث الثنائي على قائمة غير مرتبة؟', q_en: 'Why does binary search fail on an unsorted list?', a_ar: 'لأنه يستبعد نصفاً كاملاً اعتماداً على ضمان الترتيب؛ فبلا ترتيب قد يستبعد النصف الذي فيه المطلوب.', a_en: 'Because it discards a whole half relying on the sorting guarantee; unsorted, it may discard the half holding the target.' },
          { q_ar: 'كم مقارنة يحتاج البحث الثنائي في ألف عنصر؟', q_en: 'How many comparisons does binary search need for a thousand elements?', a_ar: 'عشر مقارنات تقريباً، لأن 2 أس 10 يساوي 1024.', a_en: 'About ten, because 2 to the power 10 is 1024.' },
          { q_ar: 'متى يكون البحث الخطي هو الخيار الأوفر؟', q_en: 'When is linear search the cheaper choice?', a_ar: 'حين تكون القائمة غير مرتبة والبحث مرة واحدة، لأن الترتيب أغلى من البحث نفسه.', a_en: 'When the list is unsorted and searched once, since sorting costs more than the search itself.' },
          { q_ar: 'ما الخطأ الذي لا يكشفه إلا التتبّع اليدوي؟', q_en: 'Which error does only manual tracing expose?', a_ar: 'الخطأ المنطقي، لأن البرنامج يعمل ويعطي نتيجة خاطئة بلا أي رسالة.', a_en: 'The logic error, since the program runs and returns a wrong result with no message.' }
        ]
      },
      {
        title_ar: 'خوارزميات الترتيب',
        title_en: 'Sorting Algorithms',
        lead_ar: 'ثلاث خوارزميات بسيطة تُفهم بسهولة وتبطئ على البيانات الكبيرة، واثنتان تقسمان المسألة فتسرع كثيراً — ولكل ثمن.',
        lead_en: 'Three simple algorithms are easy to grasp and slow on large data, and two divide the problem to go much faster, each with a price.',
        body_ar: [
          'الترتيب الفقاعي يقارن كل عنصرين متجاورين ويبدّلهما إن كانا في غير ترتيبهما، فيطفو أكبر عنصر إلى النهاية في كل مرور كاملة. ويتكرر المرور حتى لا يحدث تبديل، وعندها تكون القائمة مرتبة. وهو أبسطها فهماً وأبطؤها عملياً، فيُدرَّس ولا يُستخدم على بيانات كبيرة.',
          'وترتيب الاختيار يقسم القائمة ذهنياً إلى جزء مرتب في أولها وجزء غير مرتب في بقيتها، ثم يبحث في غير المرتب عن أصغر عنصر ويبدّله مع أوله، فيكبر الجزء المرتب عنصراً في كل جولة. وميزته على الفقاعي قلة التبديلات: تبديل واحد لكل موضع مهما كانت الحالة.',
          'وترتيب الإدراج يعمل كما ترتب أوراق اللعب في يدك: تأخذ ورقة وتزحزح ما قبلها حتى تجد موضعها فتدسها فيه. وهو أفضل الثلاثة عملياً حين تكون القائمة شبه مرتبة أصلاً، لأنه لا يزيح شيئاً حينها فيمر مروراً واحداً سريعاً.',
          'والثلاثة تشترك في بنية واحدة: حلقتان متداخلتان، فكلفتها ترتفع بمربع عدد العناصر. ومعنى ذلك عملياً أن مضاعفة البيانات تضاعف الزمن أربع مرات — فعشرة آلاف عنصر تحتاج مئة مليون عملية.',
          'أما ترتيب الدمج فيقوم على فرّق تسد: يقسم القائمة نصفين، ثم يقسم كل نصف، حتى تصير كل قطعة عنصراً واحداً — والعنصر الواحد مرتب بذاته. ثم يعكس المسار فيدمج كل قطعتين مرتبتين في واحدة مرتبة بمقارنة أولهما في كل خطوة. وهو أسرع بكثير من الثلاثة، لكنه يحتاج مساحة إضافية بحجم القائمة أثناء الدمج.',
          'والترتيب السريع يختار عنصراً محوراً ويقسم القائمة حوله: الأصغر جهة والأكبر جهة، فيستقر المحور في موضعه النهائي مباشرة، ثم تُرتَّب الجهتان بالطريقة نفسها. وهو أسرعها عملياً في المتوسط، لكن اختيار محور سيئ — كأصغر عنصر في كل مرة — يجعل التقسيم غير متوازن فيهبط أداؤه إلى مستوى الخوارزميات البسيطة.',
          'وثمة فارق ثالث يهم عملياً ويُنسى كثيراً: الاستقرار، وهو حفظ الترتيب النسبي للعناصر المتساوية. فلو رتبت موظفين بالاسم ثم بالقسم، فالخوارزمية المستقرة تُبقي ترتيب الأسماء داخل كل قسم، وغير المستقرة تبعثره — والفقاعي والإدراج والدمج مستقرة، والاختيار والسريع غير مستقرين.'
        ],
        body_en: [
          'Bubble sort compares adjacent pairs and swaps them when out of order, so the largest bubbles to the end each pass. Passes repeat until no swap occurs. It is the simplest to understand and the slowest in practice, taught but not used on large data.',
          'Selection sort splits the list into a sorted front and unsorted rest, finds the smallest in the rest and swaps it to the front, growing the sorted part by one per round. Its advantage over bubble is few swaps: one per position regardless.',
          'Insertion sort works like sorting cards in hand: take a card and shift earlier ones until its place appears. It is the best of the three when the list is nearly sorted, since it shifts nothing and passes once quickly.',
          'All three share one structure: two nested loops, so cost grows with the square of the count. Practically, doubling the data quadruples the time: ten thousand elements need a hundred million operations.',
          'Merge sort applies divide and conquer: split in half, split again, until each piece is one element, which is sorted by itself. Then merge each two sorted pieces by comparing their fronts. It is far faster than the three but needs extra space the size of the list.',
          'Quick sort picks a pivot and partitions around it, so the pivot lands in its final position immediately, then both sides sort the same way. It is fastest on average, but a poor pivot such as the smallest element every time unbalances the partition and drops it to the simple sorts level.',
          'A third practical difference is often forgotten: stability, preserving the relative order of equal elements. Sorting employees by name then by department, a stable algorithm keeps the name order inside each department while an unstable one scrambles it. Bubble, insertion and merge are stable; selection and quick are not.'
        ],
        table: {
          head_ar: ['الخوارزمية', 'متوسط الحالة', 'أسوأ حالة', 'مساحة', 'مستقرة'],
          head_en: ['Algorithm', 'Average', 'Worst', 'Space', 'Stable'],
          rows: [
            ['الفقاعي', 'n²', 'n²', '1', 'نعم'],
            ['الاختيار', 'n²', 'n²', '1', 'لا'],
            ['الإدراج', 'n²', 'n²', '1', 'نعم'],
            ['الدمج', 'n log n', 'n log n', 'n', 'نعم'],
            ['السريع', 'n log n', 'n²', 'log n', 'لا']
          ]
        },
        keyPoints_ar: [
          'الفقاعي والاختيار والإدراج كلفتها n² لأنها حلقتان متداخلتان.',
          'الإدراج الأفضل بينها على قائمة شبه مرتبة.',
          'الدمج أسرع لكنه يحتاج مساحة إضافية بحجم القائمة.',
          'السريع أسرعها متوسطاً، ويهبط إلى n² بمحور رديء.',
          'الاستقرار يحفظ الترتيب النسبي للمتساويين: الدمج مستقر والسريع لا.'
        ],
        keyPoints_en: [
          'Bubble, selection and insertion cost n² because of two nested loops.',
          'Insertion is the best of them on a nearly sorted list.',
          'Merge is faster but needs extra space the size of the list.',
          'Quick is fastest on average and drops to n² with a poor pivot.',
          'Stability preserves the order of equals: merge is stable, quick is not.'
        ],
        analogy_ar: 'تخيّل ترتيب مئة ورقة امتحان. الفقاعي أن تمر على الرصّة مراراً وتبدّل كل ورقتين متجاورتين في غير ترتيبهما — مرهق ومكرر. والدمج أن توزّعها على عشرة أشخاص، كل واحد يرتب عشرة، ثم تدمج الرصّات المرتبة اثنتين اثنتين. الثاني أسرع بكثير، لكنه يحتاج طاولة إضافية تضع عليها الرصّات أثناء الدمج — وهذي هي المساحة الإضافية.',
        analogy_en: 'Picture sorting a hundred exam papers. Bubble sort walks the stack again and again swapping adjacent out-of-order pairs: tiring and repetitive. Merge sort hands ten papers to each of ten people, each sorts theirs, then you merge sorted stacks two at a time. The second is far faster but needs an extra table to hold stacks while merging, and that table is the extra space.',
        terms: [
          { term: 'Bubble Sort', def_ar: 'تبديل المتجاورين حتى يطفو الأكبر إلى النهاية في كل مرور.', def_en: 'Swapping adjacent pairs so the largest bubbles to the end each pass.' },
          { term: 'Merge Sort', def_ar: 'تقسيم القائمة حتى الآحاد ثم دمج القطع مرتبةً.', def_en: 'Splitting to single elements then merging pieces in order.' },
          { term: 'Pivot', def_ar: 'العنصر المحوري الذي يقسم حوله الترتيب السريع.', def_en: 'The element quick sort partitions around.' },
          { term: 'Stability', def_ar: 'حفظ الترتيب النسبي للعناصر المتساوية بعد الترتيب.', def_en: 'Preserving the relative order of equal elements after sorting.' }
        ],
        cards: [
          { q_ar: 'أي الخوارزميات البسيطة أفضل على قائمة شبه مرتبة؟', q_en: 'Which simple sort is best on a nearly sorted list?', a_ar: 'ترتيب الإدراج، لأنه لا يزيح شيئاً فيمر مروراً واحداً سريعاً.', a_en: 'Insertion sort, because it shifts nothing and passes once quickly.' },
          { q_ar: 'ما ثمن سرعة ترتيب الدمج؟', q_en: 'What is the price of merge sort speed?', a_ar: 'مساحة إضافية بحجم القائمة أثناء الدمج.', a_en: 'Extra space the size of the list while merging.' },
          { q_ar: 'متى يهبط الترتيب السريع إلى n² ؟', q_en: 'When does quick sort drop to n² ?', a_ar: 'حين يكون المحور رديئاً باستمرار فيصير التقسيم غير متوازن.', a_en: 'When the pivot is consistently poor and the partition stays unbalanced.' },
          { q_ar: 'ما معنى أن خوارزمية الترتيب مستقرة؟', q_en: 'What does a stable sort mean?', a_ar: 'أنها تحفظ الترتيب النسبي للعناصر المتساوية كما كان قبل الترتيب.', a_en: 'It preserves the relative order of equal elements as it was before sorting.' }
        ]
      },
      {
        title_ar: 'التعقيد الزمني واختيار الخوارزمية',
        title_en: 'Time Complexity and Choosing an Algorithm',
        lead_ar: 'لا نقيس الخوارزمية بالثواني لأنها تتغيّر بتغيّر الجهاز، بل بعدد العمليات بدلالة حجم المدخل — وهذا ما يجعل المقارنة عادلة.',
        lead_en: 'We do not measure algorithms in seconds, since seconds change with the machine, but in operation count as a function of input size, which makes comparison fair.',
        body_ar: [
          'قياس زمن التنفيذ بالثواني لا يصلح للمقارنة، لأنه يتغيّر بتغيّر الجهاز واللغة وحمل النظام؛ فقد تبدو خوارزمية رديئة أسرع لمجرد أنها جُرِّبت على حاسوب أقوى. لذلك نقيس عدد العمليات الأساسية بدلالة حجم المدخل، فنحصل على وصف مستقل عن الجهاز يصلح للمقارنة في أي مكان.',
          'ورمز Big-O يصف كيف ينمو هذا العدد مع كبر المدخل، ويُهمل الثوابت والحدود الأصغر لأنها لا تؤثر عند الأحجام الكبيرة. فـO(1) لا يتأثر بالحجم أصلاً، وO(log n) ينمو ببطء شديد لأنه ينصّف المسألة، وO(n) ينمو بالتناسب، وO(n log n) هو حد الترتيب الجيد، وO(n²) يتضاعف أربع مرات كلما تضاعف المدخل.',
          'وأسرع طريقة لتقدير التعقيد قراءة الحلقات: حلقة واحدة على n تعطي O(n)، وحلقتان متداخلتان كل منهما على n تعطيان O(n²)، وحلقة تنصّف متغيّرها في كل دورة تعطي O(log n). والحلقات المتتابعة لا المتداخلة تُجمع لا تُضرب، ويبقى الأكبر: حلقة O(n) تليها حلقة O(n) تعطيان O(n) لا O(n²).',
          'وأداء الخوارزمية الواحدة يختلف باختلاف المدخل، فنصف ثلاث حالات: أفضلها وأسوأها ومتوسطها. والبحث الخطي مثال واضح: مقارنة واحدة إن كان المطلوب أول عنصر، وn إن كان الأخير. ويغلب وصف الخوارزمية بأسوأ حالاتها لأنه يعطي ضماناً لا يُخلف، أما متوسط الحالة فيهم حين تتكرر العملية على مدخلات متنوعة — كالترتيب السريع الذي أسوأ حالاته نادرة عملياً.',
          'والتعقيد لا يقتصر على الزمن: تعقيد المساحة يقيس الذاكرة الإضافية فوق المدخل نفسه. فترتيب الإدراج يعمل داخل القائمة ولا يحتاج إلا متغيرات معدودة فمساحته O(1)، وترتيب الدمج ينشئ قوائم مؤقتة فمساحته O(n). وهنا مقايضة أساسية: قد تشتري سرعة أعلى بذاكرة أكبر.',
          'وأخيراً: لا توجد خوارزمية أفضل مطلقاً، وإنما أفضل لحالة بعينها. والاختيار يتبع ثلاثة: حجم البيانات، فعلى عشرة عناصر لا يفرق شيء وعلى مليون يفرق كل شيء؛ وحالتها الابتدائية، فالقائمة شبه المرتبة يناسبها الإدراج؛ وقيود الذاكرة، فإن ضاقت استُبعد ما يحتاج مساحة إضافية. وقبل هذا كله: لا تحسّن ما لم تقس، فالتحسين قبل القياس يعقّد الكود بلا فائدة مثبتة.'
        ],
        body_en: [
          'Runtime in seconds is unfit for comparison, varying with machine, language and load; a poor algorithm may look faster merely for running on a stronger computer. We count basic operations as a function of input size instead, giving a machine-independent description comparable anywhere.',
          'Big-O describes how that count grows with input size, dropping constants and lower terms since they do not matter at scale. O(1) is unaffected by size, O(log n) grows very slowly by halving, O(n) grows proportionally, O(n log n) is the bar for good sorting, and O(n²) quadruples whenever the input doubles.',
          'The fastest way to estimate complexity is reading loops: one loop over n gives O(n), two nested give O(n²), and a loop halving its variable gives O(log n). Sequential loops add rather than multiply, and the largest dominates: an O(n) loop followed by another gives O(n), not O(n²).',
          'One algorithm performs differently by input, so we describe three cases: best, worst and average. Linear search is the clear example: one comparison if the target is first, n if last. Worst case usually describes an algorithm because it guarantees a bound, while the average matters when the operation repeats on varied inputs, like quick sort whose worst case is rare in practice.',
          'Complexity is not only time: space complexity measures extra memory beyond the input. Insertion sort works inside the list needing few variables, so O(1), while merge sort creates temporary lists, so O(n). A core trade-off appears: you may buy speed with memory.',
          'Finally, no algorithm is best absolutely, only best for a case. The choice follows three factors: data size, since on ten elements nothing differs and on a million everything does; initial state, since a nearly sorted list suits insertion; and memory limits, which rule out extra-space algorithms when tight. Above all, do not optimise what you have not measured.'
        ],
        table: {
          head_ar: ['المرتبة', 'عند n = 1000', 'مثال'],
          head_en: ['Order', 'At n = 1000', 'Example'],
          rows: [
            ['O(1)', '1', 'الوصول لعنصر بفهرسه'],
            ['O(log n)', '10', 'البحث الثنائي'],
            ['O(n)', '1,000', 'البحث الخطي'],
            ['O(n log n)', '10,000', 'ترتيب الدمج'],
            ['O(n²)', '1,000,000', 'الترتيب الفقاعي']
          ]
        },
        keyPoints_ar: [
          'نقيس عدد العمليات لا الثواني، فالثواني تتبع الجهاز لا الخوارزمية.',
          'حلقة واحدة O(n)، ومتداخلتان O(n²)، وتنصيف O(log n).',
          'الحلقات المتتابعة تُجمع فيبقى الأكبر، والمتداخلة تُضرب.',
          'أسوأ الحالة يعطي ضماناً، والمتوسط يهم عند تكرار العملية.',
          'تعقيد المساحة مقايضة: سرعة أعلى مقابل ذاكرة أكبر.',
          'لا تحسّن ما لم تقس؛ والتحسين المبكر يعقّد بلا فائدة مثبتة.'
        ],
        keyPoints_en: [
          'Count operations, not seconds, since seconds follow the machine.',
          'One loop is O(n), two nested O(n²), and halving O(log n).',
          'Sequential loops add and the largest dominates; nested loops multiply.',
          'The worst case gives a guarantee; the average matters on repeated operations.',
          'Space complexity is a trade-off: more speed for more memory.',
          'Do not optimise what you have not measured; early optimisation complicates without proven gain.'
        ],
        analogy_ar: 'تخيّل أنك تقارن بين طريقين للوصول لمكان. لا يصح أن تقارن بالدقائق، لأن من يركب سيارة أسرع سيصل قبل غيره مهما كان طريقه أطول. المقارنة العادلة بعدد الكيلومترات: رقم لا يتغيّر بتغيّر السيارة. وBig-O هو عدّاد الكيلومترات في الخوارزميات — يقيس الطريق نفسه لا سرعة من يسلكه.',
        analogy_en: 'Picture comparing two routes to a place. Comparing in minutes is unfair, since a faster car arrives first however longer its route. The fair comparison is kilometres: a number unchanged by the car. Big-O is the odometer of algorithms, measuring the route itself rather than the speed of whoever travels it.',
        terms: [
          { term: 'Big-O', def_ar: 'وصف لنمو عدد العمليات مع كبر حجم المدخل.', def_en: 'A description of how operation count grows with input size.' },
          { term: 'O(log n)', def_ar: 'مرتبة تنمو ببطء شديد لأن كل خطوة تنصّف المسألة.', def_en: 'An order growing very slowly because each step halves the problem.' },
          { term: 'Worst Case', def_ar: 'أسوأ أداء ممكن للخوارزمية، ويُستخدم لأنه يعطي ضماناً.', def_en: 'The worst possible performance, used because it gives a guarantee.' },
          { term: 'Space Complexity', def_ar: 'الذاكرة الإضافية التي تطلبها الخوارزمية فوق المدخل.', def_en: 'The extra memory an algorithm needs beyond the input.' }
        ],
        cards: [
          { q_ar: 'لماذا لا نقيس الخوارزمية بالثواني؟', q_en: 'Why not measure algorithms in seconds?', a_ar: 'لأن الثواني تتغيّر بتغيّر الجهاز واللغة والحمل، فتصير المقارنة بين الأجهزة لا بين الخوارزميات.', a_en: 'Because seconds change with machine, language and load, so the comparison becomes between machines, not algorithms.' },
          { q_ar: 'ما تعقيد حلقتين متتابعتين كل منهما على n ؟', q_en: 'What is the complexity of two sequential loops over n ?', a_ar: 'O(n)، لأن المتتابعة تُجمع ويبقى الأكبر، ولا تُضرب كالمتداخلة.', a_en: 'O(n), because sequential loops add and the largest dominates rather than multiplying.' },
          { q_ar: 'كم عملية تعني O(n²) عند ألف عنصر؟', q_en: 'How many operations is O(n²) at a thousand elements?', a_ar: 'مليون عملية، مقابل عشرة آلاف لـO(n log n).', a_en: 'A million, against ten thousand for O(n log n).' },
          { q_ar: 'ما القاعدة قبل أي تحسين؟', q_en: 'What is the rule before any optimisation?', a_ar: 'لا تحسّن ما لم تقس، فالتحسين قبل القياس يعقّد الكود بلا فائدة مثبتة.', a_en: 'Do not optimise what you have not measured; optimising first complicates code with no proven gain.' }
        ]
      }
    ],

    // ─────────── البرمجة الكائنية والمتقدمة ───────────
    2: [
      {
        title_ar: 'لماذا الكائنية · الكلاس والكائن والخصائص',
        title_en: 'Why OOP · Classes, Objects and Attributes',
        lead_ar: 'الكلاس مخطط، والكائن نسخة مبنية منه — والفكرة كلها أن تجمع البيانات والدوال التي تعمل عليها في مكان واحد بدل تفريقهما.',
        lead_en: 'A class is a blueprint and an object is an instance built from it. The whole idea is keeping data and the functions that act on it in one place instead of scattering them.',
        body_ar: [
          'حين يكبر البرنامج تظهر مشكلة: عندك عشرون متغيّراً تصف طالباً — اسمه ودرجاته ومستواه — وعشر دوال تعمل عليها، وكلها مبعثرة في الملف. فإن أضفت طالباً ثانياً ضاعفت المتغيرات، وإن غيّرت شكل البيانات لاحقتك التعديلات في كل دالة. البرمجة الكائنية تحل هذا بجمع البيانات ودوالها في وحدة واحدة.',
          'والكلاس وصف أو مخطط: يقول ما الذي يملكه الشيء وما الذي يقدر أن يفعله، لكنه لا يشغل ذاكرة ولا يمثّل شيئاً بعينه. أما الكائن فهو النسخة الفعلية المبنية من هذا المخطط، وله قيمه الخاصة. فكلاس Student واحد، وكائناته آلاف الطلاب، لكل واحد اسمه ودرجاته.',
          'والخصائص هي بيانات الكائن: ما يملكه. وتُعطى قيمها الابتدائية في دالة خاصة اسمها __init__ تُستدعى تلقائياً لحظة إنشاء الكائن، فلا تُنادى يدوياً أبداً. وكل ما تكتبه فيها من إسنادات يصير خاصية للكائن الجديد.',
          'وكلمة self هي مربط الفرس: تشير للكائن المحدَّد الذي تشتغل عليه الدالة الآن. فحين تكتب self.name = name داخل __init__، أنت تقول: خاصية الاسم في هذا الكائن بعينه تساوي القيمة الممرَّرة. ولهذا تكون self أول معامل في كل دالة داخل الكلاس — والنسيان الشائع لها من أكثر أخطاء المبتدئ في هذا الباب.',
          'ولاحظ الفرق بين خاصية الكائن وخاصية الكلاس: الأولى تُكتب بـself وتختلف من كائن لآخر، والثانية تُكتب مباشرة داخل الكلاس ويشترك فيها كل الكائنات. فعدّاد لكم عدد الطلاب المنشأين يكون خاصية كلاس، واسم الطالب خاصية كائن.',
          'والفائدة العملية تظهر فوراً: بدل عشرين متغيّراً مبعثراً صار عندك كائن واحد يحمل بياناته معه أينما ذهب. وحين تمرّره لدالة تمرّر كل ما يخصه دفعة واحدة، وحين تغيّر بنيته تعدّل في مكان واحد.'
        ],
        body_en: [
          'As a program grows, a problem appears: twenty variables describe a student, ten functions act on them, and all are scattered through the file. Adding a second student doubles the variables, and changing the data shape chases edits through every function. Object-oriented programming solves this by keeping data and its functions in one unit.',
          'A class is a description or blueprint: it states what a thing has and what it can do, but occupies no memory and represents nothing specific. An object is the actual instance built from that blueprint, with its own values. One Student class, thousands of student objects, each with its own name and grades.',
          'Attributes are the object data: what it has. Their initial values are set in a special function named __init__, called automatically at creation, never manually. Every assignment you write there becomes an attribute of the new object.',
          'The word self is the crux: it refers to the specific object the function is currently working on. Writing self.name = name inside __init__ says: the name attribute of this particular object equals the passed value. That is why self is the first parameter of every method, and forgetting it is a classic beginner error here.',
          'Note the difference between an instance attribute and a class attribute: the first is written with self and differs per object, the second is written directly in the class and is shared by all objects. A counter of created students is a class attribute; a student name is an instance attribute.',
          'The practical benefit shows immediately: instead of twenty scattered variables you have one object carrying its data wherever it goes. Passing it to a function passes everything at once, and changing its structure means editing one place.'
        ],
        table: {
          head_ar: ['المفهوم', 'ما هو', 'يشغل ذاكرة؟', 'مثال'],
          head_en: ['Concept', 'What it is', 'Uses memory?', 'Example'],
          rows: [
            ['Class', 'مخطط ووصف', 'لا', 'Student'],
            ['Object', 'نسخة فعلية من المخطط', 'نعم', 'الطالب سارة'],
            ['Attribute', 'بيانات يملكها الكائن', 'نعم', 'self.name'],
            ['__init__', 'دالة تُستدعى تلقائياً عند الإنشاء', '—', 'تضبط القيم الابتدائية']
          ]
        },
        keyPoints_ar: [
          'الكلاس مخطط لا يشغل ذاكرة، والكائن نسخة فعلية منه لها قيمها.',
          'دالة __init__ تُستدعى تلقائياً عند الإنشاء ولا تُنادى يدوياً.',
          'self تشير للكائن المحدَّد الذي تعمل عليه الدالة، وهي أول معامل دائماً.',
          'خاصية الكائن تختلف بين الكائنات، وخاصية الكلاس يشترك فيها الجميع.',
          'الفائدة الأساسية: البيانات ودوالها في وحدة واحدة لا مبعثرة.'
        ],
        keyPoints_en: [
          'A class is a blueprint using no memory; an object is a real instance with its own values.',
          '__init__ runs automatically at creation and is never called by hand.',
          'self refers to the specific object the method works on, and is always the first parameter.',
          'Instance attributes differ per object; class attributes are shared by all.',
          'The core benefit: data and its functions live in one unit instead of scattered.'
        ],
        analogy_ar: 'تخيّل الكلاس مخطط بيت عند المهندس: ورقة تصف عدد الغرف ومواضع الأبواب. لا أحد يسكن المخطط. والكائن هو البيت المبني فعلاً من هذا المخطط — وقد تبني منه عشرة بيوت، كل بيت بلونه وأثاثه. و__init__ هي لحظة التسليم: تُركَّب فيها الأشياء الابتدائية لكل بيت على حدة.',
        analogy_en: 'Picture a class as an architect house plan: a sheet describing rooms and door positions. Nobody lives in the plan. The object is the house actually built from it, and you may build ten, each with its own colour and furniture. __init__ is the handover moment when each house initial fittings are installed.',
        terms: [
          { term: 'Class', def_ar: 'مخطط يصف ما يملكه الشيء وما يفعله.', def_en: 'A blueprint describing what a thing has and does.' },
          { term: 'Object', def_ar: 'نسخة فعلية مبنية من الكلاس ولها قيمها الخاصة.', def_en: 'A real instance built from a class with its own values.' },
          { term: '__init__', def_ar: 'دالة الإنشاء التي تُستدعى تلقائياً وتضبط القيم الابتدائية.', def_en: 'The constructor called automatically to set initial values.' },
          { term: 'self', def_ar: 'إشارة للكائن المحدَّد الذي تعمل عليه الدالة الآن.', def_en: 'A reference to the specific object the method is working on.' }
        ],
        cards: [
          { q_ar: 'ما الفرق بين الكلاس والكائن؟', q_en: 'Difference between a class and an object?', a_ar: 'الكلاس مخطط يصف ولا يشغل ذاكرة، والكائن نسخة فعلية منه لها قيمها الخاصة.', a_en: 'A class is a describing blueprint using no memory; an object is a real instance with its own values.' },
          { q_ar: 'متى تُستدعى __init__ ؟', q_en: 'When is __init__ called?', a_ar: 'تلقائياً لحظة إنشاء الكائن، ولا تُنادى يدوياً.', a_en: 'Automatically at object creation; it is never called manually.' },
          { q_ar: 'إلامَ تشير self ؟', q_en: 'What does self refer to?', a_ar: 'للكائن المحدَّد الذي تُستدعى عليه الدالة، ولهذا تكون أول معامل في كل دوال الكلاس.', a_en: 'The specific object the method was called on, which is why it is the first parameter of every method.' },
          { q_ar: 'أي الخصائص يشترك فيها كل الكائنات؟', q_en: 'Which attribute is shared by all objects?', a_ar: 'خاصية الكلاس المكتوبة داخله مباشرة، لا خاصية الكائن المكتوبة بـself.', a_en: 'The class attribute written directly in the class, not the instance attribute written with self.' }
        ]
      },
      {
        title_ar: 'الدوال والباني',
        title_en: 'Methods and the Constructor',
        lead_ar: 'الدالة داخل الكلاس تصف ما يقدر الكائن أن يفعله، وتصل لبياناته عبر self بلا حاجة لتمريرها في كل استدعاء.',
        lead_en: 'A method inside a class describes what the object can do, reaching its data through self with no need to pass it on every call.',
        body_ar: [
          'الدالة داخل الكلاس تُسمّى method، وهي تصف سلوك الكائن: ما الذي يقدر أن يفعله. والفرق بينها وبين الدالة العادية أنها تملك وصولاً مباشراً لبيانات الكائن عبر self، فلا تحتاج أن تمرّر لها الاسم والدرجات في كل استدعاء — هي تعرفها أصلاً لأنها جزء من الكائن.',
          'وهذا هو الفرق العملي الأكبر بين الأسلوبين: في الأسلوب الإجرائي تكتب calculate_average(grades) وتمرّر البيانات في كل مرة، وفي الكائني تكتب student.calculate_average() والكائن يعرف درجاته. فإن أضفت بياناً جديداً للطالب، لا تتغيّر توقيعات الدوال.',
          'والباني هو __init__: دالة تُستدعى تلقائياً لحظة الإنشاء لتضبط الحالة الابتدائية للكائن. ويقبل معاملات تُمرَّر عند الإنشاء بين قوسي اسم الكلاس، فيكون كل كائن مضبوطاً من لحظة ولادته لا بعدها بأسطر.',
          'ويمكن للباني أن يعطي قيماً افتراضية لبعض المعاملات، فيصير إنشاء الكائن ممكناً بحد أدنى من البيانات. وهذي ممارسة جيدة تقلل ما يجب على المستخدم تذكّره، لكن احذر الفخ الشهير: لا تجعل القيمة الافتراضية قائمة أو قاموساً، لأنها تُنشأ مرة واحدة وتتشارك بين كل الكائنات.',
          'وثمة دوال خاصة أخرى تبدأ وتنتهي بشرطتين سفليتين، أشهرها __str__ التي تحدد ما يظهر حين تطبع الكائن. فبدونها تطبع بايثون شيئاً مثل موضع الكائن في الذاكرة وهو بلا فائدة للقارئ، ومعها تطبع ما تختاره أنت.',
          'وقاعدة عملية في تصميم الدوال: الدالة الواحدة تفعل شيئاً واحداً. فدالة اسمها save_and_send_and_log تخفي ثلاث مسؤوليات، وتصعب على من يقرأ ومن يختبر. اجعل كل دالة تُوصَف بجملة واحدة بلا واو.'
        ],
        body_en: [
          'A function inside a class is a method describing the object behaviour: what it can do. Unlike a plain function, it reaches the object data directly through self, so you need not pass the name and grades on every call; it already knows them as part of the object.',
          'This is the biggest practical difference between the two styles: procedurally you write calculate_average(grades) passing data each time, while in OOP you write student.calculate_average() and the object knows its grades. Adding a new field does not change method signatures.',
          'The constructor is __init__: a method called automatically at creation to set the initial state. It accepts parameters passed between the class-name parentheses, so every object is configured from birth rather than lines later.',
          'A constructor may give defaults to some parameters, making creation possible with minimal data. That is good practice, reducing what a user must remember, but beware the classic trap: never use a list or dict as a default, since it is created once and shared across all objects.',
          'Other special methods begin and end with double underscores, most notably __str__, which defines what appears when the object is printed. Without it Python prints something like a memory address, useless to a reader; with it you choose what shows.',
          'A practical design rule: one method does one thing. A method named save_and_send_and_log hides three responsibilities and is hard to read and test. Make every method describable in one sentence with no "and".'
        ],
        table: {
          head_ar: ['الأسلوب', 'الاستدعاء', 'أين تعيش البيانات'],
          head_en: ['Style', 'Call', 'Where data lives'],
          rows: [
            ['إجرائي', 'calculate_average(grades)', 'متغيّر خارجي يُمرَّر'],
            ['كائني', 'student.calculate_average()', 'داخل الكائن نفسه'],
            ['الباني', 'Student("سارة", 20)', 'يُضبط لحظة الإنشاء'],
            ['__str__', 'print(student)', 'يحدد شكل الطباعة']
          ]
        },
        keyPoints_ar: [
          'الدالة داخل الكلاس تصل لبيانات الكائن عبر self بلا تمرير.',
          'الباني __init__ يضبط الحالة الابتدائية لحظة الإنشاء لا بعدها.',
          'لا تجعل القيمة الافتراضية قائمة أو قاموساً — تُنشأ مرة وتتشارك.',
          '__str__ تحدد ما يظهر عند طباعة الكائن بدل موضع الذاكرة.',
          'الدالة الواحدة تفعل شيئاً واحداً يُوصَف بجملة بلا واو.'
        ],
        keyPoints_en: [
          'A method reaches object data through self with no passing.',
          '__init__ sets the initial state at creation, not lines later.',
          'Never default a parameter to a list or dict; it is created once and shared.',
          '__str__ defines what prints instead of a memory address.',
          'One method does one thing, describable in a sentence with no "and".'
        ],
        analogy_ar: 'تخيّل الفرق بين طبّاخ يحمل مقاديره معه في حقيبته، وطبّاخ تُسلَّم له المقادير في كل مرة يطبخ. الكائني هو الأول: الدالة جزء من الكائن وتعرف بياناته. والباني هو تجهيز الحقيبة قبل أول طبخة — لا يُترك للطبّاخ أن يجمع مقاديره أثناء العمل.',
        analogy_en: 'Picture the difference between a cook carrying ingredients in their own bag and one handed ingredients every time. OOP is the first: the method belongs to the object and knows its data. The constructor is packing that bag before the first dish, rather than letting the cook gather ingredients mid-service.',
        terms: [
          { term: 'Method', def_ar: 'دالة معرَّفة داخل كلاس تصف سلوك الكائن.', def_en: 'A function defined inside a class describing object behaviour.' },
          { term: 'Constructor', def_ar: 'الباني __init__ الذي يضبط الحالة الابتدائية عند الإنشاء.', def_en: 'The __init__ method setting initial state at creation.' },
          { term: 'Default Parameter', def_ar: 'قيمة تُستخدم إن لم يُمرَّر وسيط، ويُمنع أن تكون قابلة للتغيير.', def_en: 'A value used when no argument is passed; must not be mutable.' },
          { term: '__str__', def_ar: 'دالة خاصة تحدد النص الظاهر عند طباعة الكائن.', def_en: 'A special method defining the text shown when printing an object.' }
        ],
        cards: [
          { q_ar: 'لماذا لا تحتاج الدالة داخل الكلاس تمرير بيانات الكائن؟', q_en: 'Why does a method not need the object data passed in?', a_ar: 'لأنها تصل إليها مباشرة عبر self، فهي جزء من الكائن نفسه.', a_en: 'Because it reaches them directly through self, being part of the object itself.' },
          { q_ar: 'ما خطر جعل القيمة الافتراضية قائمة؟', q_en: 'What is the risk of a list as a default value?', a_ar: 'تُنشأ مرة واحدة وتتشارك بين كل الكائنات، فتعديل واحد يظهر عند الجميع.', a_en: 'It is created once and shared across all objects, so one change appears everywhere.' },
          { q_ar: 'ماذا تطبع بايثون للكائن بلا __str__ ؟', q_en: 'What does Python print for an object without __str__ ?', a_ar: 'وصفاً تقنياً كموضع الكائن في الذاكرة، وهو بلا فائدة للقارئ.', a_en: 'A technical description such as its memory address, useless to a reader.' },
          { q_ar: 'ما علامة أن الدالة تحمل مسؤوليات أكثر من واحدة؟', q_en: 'What signals a method has more than one responsibility?', a_ar: 'أن يحتاج وصفها لكلمة «و»، مثل save_and_send.', a_en: 'Its description needs the word "and", like save_and_send.' }
        ]
      },
      {
        title_ar: 'التغليف ومحددات الوصول',
        title_en: 'Encapsulation and Access Modifiers',
        lead_ar: 'التغليف أن تخفي تفاصيل الكائن الداخلية وتتيح التعامل معه عبر واجهة محددة، فلا يفسد أحد حالته من الخارج.',
        lead_en: 'Encapsulation hides an object internal details and exposes a defined interface, so nobody corrupts its state from outside.',
        body_ar: [
          'حين تترك خصائص الكائن مفتوحة للجميع، يقدر أي كود في المشروع أن يغيّرها بأي قيمة. فلو كان رصيد الحساب خاصية مفتوحة، أمكن لسطر واحد أن يجعله سالباً بمليون، ولن تعرف أي سطر فعلها من بين آلاف السطور. والتغليف يحل هذا: تُغلق الخاصية ويُتاح تعديلها عبر دالة تفحص القيمة قبل قبولها.',
          'وبايثون لا تفرض المنع فرضاً صارماً كبعض اللغات، وإنما تعتمد اصطلاحاً متفقاً عليه: الاسم المسبوق بشرطة سفلية واحدة _balance يعني «هذا داخلي فلا تمسّه»، وهو تحذير للمبرمج لا قيد على المفسّر. والمسبوق بشرطتين __balance يذهب أبعد: تُبدّل بايثون اسمه داخلياً فيصعب الوصول إليه بالخطأ.',
          'ولهذا التبديل أثر مهم يخفى على كثيرين: الخاصية المسبوقة بشرطتين لا تُورَث للابن بالاسم نفسه، لأن الاسم يُبدَّل باسم الكلاس الذي عرّفها. فإن ورث كلاس ابن من أب فيه __balance، لن يجدها بهذا الاسم — وهذا مقصود لا خلل.',
          'والواجهة المتاحة تكون بدوال: دالة قراءة ترجع القيمة، ودالة تعديل تفحص قبل أن تقبل. فدالة الإيداع ترفض المبلغ السالب، ودالة السحب ترفض ما يتجاوز الرصيد. وبهذا يصير من المستحيل — لا الممنوع فقط — أن يصل الكائن لحالة غير صحيحة.',
          'وأهم ثمرة عملية للتغليف أنها تحرر يدك في التعديل: ما دام الخارج لا يتعامل إلا مع الواجهة، تقدر تغيّر التمثيل الداخلي كلياً — تحوّل الرصيد من رقم إلى سجل عمليات مثلاً — بلا أن يتأثر سطر واحد خارج الكلاس. وهذا هو الفرق بين كود يقبل التطور وكود يتحجّر.',
          'والقاعدة العملية: اجعل كل شيء داخلياً بالأصل، ثم افتح ما تحتاج الواجهة فتحه فقط. الفتح لاحقاً سهل، والإغلاق بعد أن يعتمد عليه نصف المشروع مؤلم.'
        ],
        body_en: [
          'Leaving object attributes open to everyone lets any code in the project set them to any value. If an account balance were an open attribute, one line could make it negative by a million, and you would not know which of thousands of lines did it. Encapsulation solves this: the attribute is closed and changed through a method that validates first.',
          'Python does not enforce this strictly like some languages; it relies on convention. A single leading underscore, _balance, means "this is internal, do not touch": a warning to the programmer, not a restriction on the interpreter. A double underscore, __balance, goes further: Python mangles the name internally so it is hard to reach by accident.',
          'That mangling has an important consequence many miss: a double-underscore attribute is not inherited under the same name, because the name carries the defining class. A child inheriting from a parent with __balance will not find it by that name, and this is deliberate, not a defect.',
          'The exposed interface is methods: a reader returning the value, and a writer validating before accepting. A deposit method rejects a negative amount, a withdrawal rejects more than the balance. This makes reaching an invalid state impossible, not merely forbidden.',
          'The most valuable practical result is freedom to change: as long as outside code touches only the interface, you can change the internal representation entirely, turning a balance from a number into a transaction log, without affecting a single line outside the class. That is the difference between code that evolves and code that ossifies.',
          'Practical rule: make everything internal by default, then open only what the interface needs. Opening later is easy; closing after half the project depends on it is painful.'
        ],
        table: {
          head_ar: ['الكتابة', 'المعنى', 'يمنعه المفسّر؟'],
          head_en: ['Notation', 'Meaning', 'Enforced?'],
          rows: [
            ['balance', 'متاح للجميع', 'لا'],
            ['_balance', 'داخلي باصطلاح متفق عليه', 'لا'],
            ['__balance', 'يُبدَّل اسمه فيصعب الوصول', 'شبه محمي'],
            ['get_balance()', 'واجهة قراءة معلنة', '—']
          ]
        },
        keyPoints_ar: [
          'التغليف يمنع الوصول لحالة غير صحيحة، لا يكتفي بمنع التعديل.',
          'الشرطة الواحدة اصطلاح تحذيري، والشرطتان تبدّلان الاسم داخلياً.',
          'الخاصية بشرطتين لا يجدها الابن بالاسم نفسه — وهذا مقصود.',
          'الفحص يكون في دالة التعديل لا في الخارج.',
          'التغليف يحرر تغيير التمثيل الداخلي بلا كسر ما بالخارج.'
        ],
        keyPoints_en: [
          'Encapsulation prevents invalid states, not merely edits.',
          'One underscore is a warning convention; two mangle the name internally.',
          'A double-underscore attribute is not found by the child under the same name, deliberately.',
          'Validation belongs in the setter method, not outside.',
          'Encapsulation frees you to change the internal representation without breaking outside code.'
        ],
        analogy_ar: 'تخيّل ماكينة صرّاف آلي. رصيدك ليس صندوقاً مفتوحاً تمد يدك فيه، بل تصل إليه عبر أزرار محددة: إيداع وسحب واستعلام. والماكينة تفحص كل طلب قبل تنفيذه فترفض سحباً يتجاوز رصيدك. ولأن التعامل عبر الأزرار فقط، يقدر البنك يغيّر نظامه الداخلي كاملاً وأنت لا تلاحظ شيئاً.',
        analogy_en: 'Picture an ATM. Your balance is not an open box you reach into; you touch it through defined buttons: deposit, withdraw, enquire. The machine validates each request and refuses a withdrawal beyond your balance. Because interaction happens only through buttons, the bank can replace its entire internal system without you noticing.',
        terms: [
          { term: 'Encapsulation', def_ar: 'إخفاء التفاصيل الداخلية وإتاحة التعامل عبر واجهة محددة.', def_en: 'Hiding internal details and exposing a defined interface.' },
          { term: 'Name Mangling', def_ar: 'تبديل بايثون لاسم الخاصية المسبوقة بشرطتين ليصعب الوصول إليها.', def_en: 'Python renaming of a double-underscore attribute to make access harder.' },
          { term: 'Getter', def_ar: 'دالة تُرجع قيمة خاصية داخلية للقراءة.', def_en: 'A method returning an internal attribute for reading.' },
          { term: 'Setter', def_ar: 'دالة تعدّل خاصية داخلية بعد فحص القيمة.', def_en: 'A method changing an internal attribute after validating the value.' }
        ],
        cards: [
          { q_ar: 'ما الفرق بين _name و__name ؟', q_en: 'Difference between _name and __name ?', a_ar: 'الأولى اصطلاح تحذيري لا يمنعه المفسّر، والثانية يُبدَّل اسمها داخلياً فيصعب الوصول إليها.', a_en: 'The first is a warning convention the interpreter does not enforce; the second is name-mangled so access is hard.' },
          { q_ar: 'لماذا يوضع الفحص في دالة التعديل؟', q_en: 'Why put validation in the setter?', a_ar: 'ليصير بلوغ حالة غير صحيحة مستحيلاً، لا معتمداً على انضباط من يكتب في الخارج.', a_en: 'So an invalid state becomes impossible rather than depending on outside discipline.' },
          { q_ar: 'ما أكبر مكسب عملي من التغليف؟', q_en: 'What is the biggest practical gain of encapsulation?', a_ar: 'حرية تغيير التمثيل الداخلي كلياً بلا كسر أي كود خارج الكلاس.', a_en: 'Freedom to change the internal representation entirely without breaking code outside the class.' },
          { q_ar: 'هل يرث الابن خاصية مسبوقة بشرطتين بالاسم نفسه؟', q_en: 'Does a child inherit a double-underscore attribute under the same name?', a_ar: 'لا، لأن الاسم يُبدَّل باسم الكلاس الذي عرّفها، وهذا سلوك مقصود.', a_en: 'No, because the name carries the defining class, and this is deliberate behaviour.' }
        ]
      },
      {
        title_ar: 'الوراثة وتعدد الأشكال',
        title_en: 'Inheritance and Polymorphism',
        lead_ar: 'الوراثة تجعل كلاساً يأخذ كل ما في آخر ويزيد عليه أو يغيّره، وتعدد الأشكال يجعل الاستدعاء الواحد يعمل مع أنواع مختلفة.',
        lead_en: 'Inheritance lets one class take everything from another and extend or change it, and polymorphism lets one call work across different types.',
        body_ar: [
          'حين تجد كلاسين يتشاركان أغلب البيانات والدوال ويختلفان في القليل، فتكرار المشترك بينهما خطأ: أي إصلاح ستضطر لتكراره مرتين، وستنسى إحداهما يوماً. والوراثة تحل هذا: تضع المشترك في كلاس أب، ويرث الابن كل ما فيه ويضيف ما يخصه.',
          'والابن يحصل على خصائص الأب ودوالّه كأنها له، ويقدر أن يضيف عليها، ويقدر أن يستبدل تنفيذ دالة موروثة بتنفيذ خاص به — وهذا هو تجاوز الدوال Overriding. فالكلاس Animal فيه دالة صوت عامة، وكل حيوان يستبدلها بصوته.',
          'وإذا احتاج الابن أن يبني على تنفيذ الأب لا أن يلغيه، ينادي دالة الأب بـsuper ثم يضيف بعدها. وهذا شائع في الباني: يستدعي الابن باني الأب ليضبط الخصائص المشتركة، ثم يضبط ما يخصه وحده — فلا يُكرَّر ضبط المشترك.',
          'وتعدد الأشكال هو الثمرة الكبرى: كائنات مختلفة تستجيب للاستدعاء نفسه بطريقتها الخاصة. فإذا كان لديك قائمة فيها كلب وقط وطائر، ومررت عليها تنادي دالة الصوت في كل واحد، نطق كل واحد بصوته دون أن يعرف الكود الذي يناديها نوعَ الكائن أصلاً.',
          'وهذي هي فكرة الواجهة المشتركة التي تُبنى عليها المكتبات الكبيرة: كل نماذج التعلّم الآلي في مكتبة واحدة لها الدوال الثلاث نفسها، فتقدر تبدّل نموذجاً بنموذج دون أن تعيد كتابة الكود الذي يستخدمه. القوة ليست في الوراثة نفسها، بل في أن الكود المستدعي لا يحتاج معرفة النوع.',
          'وتحذير مهم: الوراثة تُساء بكثرة. اسأل قبل أن ترث: هل الابن حقاً «نوع من» الأب؟ فالمربع نوع من الأشكال فترث صحيحة، أما الموظف فليس نوعاً من الشركة وإن كان جزءاً منها — وهنا يصلح الاحتواء لا الوراثة. وسلسلة وراثة عميقة بخمسة مستويات علامة تصميم مضطرب لا تصميم متقن.'
        ],
        body_en: [
          'When two classes share most data and methods and differ in little, duplicating the shared part is a mistake: every fix must be repeated twice and one day you will forget one. Inheritance solves this: put the shared part in a parent class, and the child inherits it and adds its own.',
          'The child receives the parent attributes and methods as if its own, may add to them, and may replace an inherited method with its own implementation, which is overriding. An Animal class has a generic sound method, and each animal replaces it with its own.',
          'When the child needs to build on the parent implementation rather than discard it, it calls the parent method with super then adds afterwards. This is common in constructors: the child calls the parent constructor to set shared attributes, then sets its own, so shared setup is never duplicated.',
          'Polymorphism is the great harvest: different objects answer the same call in their own way. Given a list holding a dog, a cat and a bird, looping and calling the sound method makes each speak its own sound while the calling code never knows the object type.',
          'This is the shared-interface idea large libraries are built on: every machine-learning model in one library exposes the same three methods, so you swap one model for another without rewriting the code that uses it. The power is not inheritance itself but that the calling code needs no knowledge of the type.',
          'An important warning: inheritance is widely misused. Ask before inheriting whether the child truly is a kind of the parent. A square is a kind of shape, so inheriting is right; an employee is not a kind of company although part of one, and there containment fits rather than inheritance. A five-level inheritance chain signals confused design, not craftsmanship.'
        ],
        table: {
          head_ar: ['المفهوم', 'ما يفعله', 'الكلمة المفتاحية'],
          head_en: ['Concept', 'What it does', 'Keyword'],
          rows: [
            ['الوراثة', 'الابن يأخذ ما في الأب', 'class Child(Parent)'],
            ['التجاوز', 'استبدال تنفيذ دالة موروثة', 'إعادة تعريفها في الابن'],
            ['super', 'استدعاء تنفيذ الأب والبناء عليه', 'super().method()'],
            ['تعدد الأشكال', 'استجابة مختلفة لاستدعاء واحد', '—']
          ]
        },
        keyPoints_ar: [
          'الوراثة تمنع تكرار المشترك، فالإصلاح يقع في مكان واحد.',
          'التجاوز استبدال تنفيذ دالة موروثة، وsuper بناء عليه لا إلغاؤه.',
          'تعدد الأشكال: الكود المستدعي لا يحتاج معرفة نوع الكائن.',
          'لا ترث إلا إذا كان الابن حقاً «نوعاً من» الأب.',
          'سلسلة وراثة عميقة علامة تصميم مضطرب.'
        ],
        keyPoints_en: [
          'Inheritance removes duplication so a fix lands in one place.',
          'Overriding replaces an inherited implementation; super builds on it instead of discarding it.',
          'Polymorphism means the calling code needs no knowledge of the type.',
          'Inherit only when the child truly is a kind of the parent.',
          'A deep inheritance chain signals confused design.'
        ],
        analogy_ar: 'تخيّل نموذج سيارة أساسياً عند المصنع فيه الهيكل والعجلات. النسخة الكهربائية ترث كل شي وتستبدل المحرّك فقط — هذا هو التجاوز. وحين تقول لأي سيارة «انطلقي» تنطلق كل واحدة بطريقتها: البنزين تشغّل محركها والكهربائية تدير موتورها. أنت ضغطت الدوّاسة نفسها ولم تسأل عن النوع، وهذا تعدد الأشكال.',
        analogy_en: 'Picture a base car model at the factory with a chassis and wheels. The electric version inherits everything and replaces only the engine, which is overriding. Telling any car to go makes each go its own way: petrol fires its engine, electric spins its motor. You pressed the same pedal and never asked the type, and that is polymorphism.',
        terms: [
          { term: 'Inheritance', def_ar: 'أخذ كلاس ابن كل ما في كلاس أب مع إمكان الزيادة والتغيير.', def_en: 'A child class taking all a parent has, with room to extend and change.' },
          { term: 'Override', def_ar: 'إعادة تعريف دالة موروثة بتنفيذ خاص بالابن.', def_en: 'Redefining an inherited method with the child own implementation.' },
          { term: 'super', def_ar: 'استدعاء تنفيذ الأب من داخل الابن للبناء عليه.', def_en: 'Calling the parent implementation from the child to build on it.' },
          { term: 'Polymorphism', def_ar: 'استجابة كائنات مختلفة للاستدعاء نفسه بطريقة كل منها.', def_en: 'Different objects answering the same call each in its own way.' }
        ],
        cards: [
          { q_ar: 'ما الفرق بين التجاوز واستخدام super ؟', q_en: 'Difference between overriding and using super?', a_ar: 'التجاوز يستبدل تنفيذ الأب كلياً، وsuper ينادي تنفيذ الأب ثم يبني عليه.', a_en: 'Overriding replaces the parent implementation entirely; super calls it then builds on top.' },
          { q_ar: 'ما السؤال الذي يحسم صحة الوراثة؟', q_en: 'What question settles whether inheritance is right?', a_ar: 'هل الابن حقاً «نوع من» الأب؟ فإن لم يكن، فالاحتواء أصح.', a_en: 'Is the child truly a kind of the parent? If not, containment is the right choice.' },
          { q_ar: 'ما الذي يجعل تعدد الأشكال قوياً؟', q_en: 'What makes polymorphism powerful?', a_ar: 'أن الكود المستدعي يعمل مع أي نوع بلا أن يعرف نوعه، فتُبدَّل الأنواع بلا إعادة كتابة.', a_en: 'The calling code works with any type without knowing it, so types can be swapped with no rewrite.' },
          { q_ar: 'لماذا يُستدعى باني الأب داخل باني الابن؟', q_en: 'Why call the parent constructor inside the child one?', a_ar: 'ليضبط الخصائص المشتركة مرة واحدة، فلا يُكرَّر ضبطها في كل ابن.', a_en: 'To set shared attributes once so the setup is not duplicated in every child.' }
        ]
      },
      {
        title_ar: 'التجريد والواجهات ومبادئ SOLID وأنماط التصميم',
        title_en: 'Abstraction, Interfaces, SOLID and Design Patterns',
        lead_ar: 'التجريد يحدد ما يجب أن يفعله الشيء بلا كيف، وSOLID مبادئ تحفظ الكود قابلاً للتغيير، وأنماط التصميم حلول مجرّبة لمشاكل متكررة.',
        lead_en: 'Abstraction defines what a thing must do without the how, SOLID keeps code changeable, and design patterns are proven solutions to recurring problems.',
        body_ar: [
          'التجريد في الكائنية أن تعرّف كلاساً يقول ما الذي يجب أن تفعله الأنواع الوارثة منه، دون أن يحدد كيف تفعله. فكلاس الشكل يفرض وجود دالة مساحة، ولا يعرف كيف تُحسب المساحة — فالدائرة تحسبها بطريقة والمربع بأخرى. وبهذا تضمن أن كل شكل قابل لحساب مساحته، وهذا هو العقد.',
          'والواجهة هي هذا العقد في أنقى صوره: قائمة دوال يجب أن يوفرها من يلتزم بها. وقيمتها أن الكود المستدعي يعتمد على العقد لا على التنفيذ، فيصير تبديل التنفيذ ممكناً بلا لمس المستدعي. وهذا ما يجعل مكتبة كاملة قابلة للاستبدال بأخرى.',
          'ومبادئ SOLID خمسة تحفظ الكود قابلاً للتغيير. أولها المسؤولية الواحدة: للكلاس سبب واحد للتغيير، فكلاس يطبع التقارير ويحسب الرواتب سيتغيّر لسببين مختلفين ويتصادم من يعدّله. وثانيها الانفتاح والانغلاق: مفتوح للامتداد مغلق للتعديل، فتضيف سلوكاً جديداً بكلاس جديد لا بتعديل كلاس مستقر يعمل.',
          'وثالثها استبدال ليسكوف: كل كائن ابن يجب أن يصلح مكان أبيه بلا أن يكسر شيئاً. فإن ورث كلاس من آخر ثم رفض تنفيذ نصف دوالّه أو غيّر معناها، فالوراثة كانت خاطئة أصلاً. ورابعها فصل الواجهات: واجهات صغيرة متخصصة خير من واجهة ضخمة تُجبِر من يلتزم بها على تنفيذ ما لا يخصه.',
          'وخامسها عكس الاعتماد: اعتمد على التجريدات لا على التفاصيل. فكلاس الطلبات لا يعتمد على قاعدة بيانات بعينها، وإنما على واجهة تخزين — فتبدّل القاعدة بأخرى بلا أن يتغيّر كلاس الطلبات. وهذا المبدأ هو ما يجعل الاختبار ممكناً: تمرّر تخزيناً وهمياً وقت الاختبار.',
          'وأنماط التصميم حلول موثّقة لمشاكل تتكرر. فنمط المفرد يضمن كائناً واحداً في البرنامج كله كإعدادات التطبيق، ونمط المصنع ينشئ الكائن المناسب حسب الحالة فلا يتفرّق شرط الإنشاء في الكود، ونمط المراقب يجعل عدة أطراف تُخطَر تلقائياً عند تغيّر حالة، ونمط الاستراتيجية يبدّل الخوارزمية وقت التشغيل.',
          'وتحذير ختامي يهم أكثر من الأنماط نفسها: النمط أداة لا هدف. من يبدأ بالسؤال «أي نمط أستخدم؟» قبل أن تظهر المشكلة، ينتج كوداً معقّداً بلا سبب. اكتب أبسط ما يحل المشكلة، فإذا تكرر الألم في موضع بعينه، فحينها ابحث عن النمط الذي يعالجه.'
        ],
        body_en: [
          'Abstraction in OOP defines a class stating what inheriting types must do without dictating how. A Shape class requires an area method without knowing how area is computed, since a circle computes it one way and a square another. This guarantees every shape can report an area, and that guarantee is the contract.',
          'An interface is that contract in its purest form: a list of methods any implementer must provide. Its value is that calling code depends on the contract rather than the implementation, so implementations swap without touching the caller. This is what makes a whole library replaceable by another.',
          'SOLID is five principles keeping code changeable. First, single responsibility: a class has one reason to change, so a class printing reports and computing salaries changes for two reasons and its editors collide. Second, open-closed: open to extension and closed to modification, so new behaviour arrives as a new class rather than edits to a stable working one.',
          'Third, Liskov substitution: any child object must serve in place of its parent without breaking anything. If a class inherits then refuses half the inherited methods or changes their meaning, the inheritance was wrong to begin with. Fourth, interface segregation: small focused interfaces beat one huge interface forcing implementers to provide what does not concern them.',
          'Fifth, dependency inversion: depend on abstractions rather than details. An orders class does not depend on a specific database but on a storage interface, so the database can be swapped without changing it. This principle is what makes testing possible: you pass a fake storage at test time.',
          'Design patterns are documented solutions to recurring problems. Singleton guarantees one object across the program, such as application settings; Factory creates the right object for the case so creation conditions do not scatter; Observer notifies several parties automatically when state changes; Strategy swaps the algorithm at run time.',
          'A closing warning that matters more than the patterns: a pattern is a tool, not a goal. Starting from "which pattern should I use?" before the problem appears produces needlessly complex code. Write the simplest thing that solves the problem, and when pain repeats in one spot, look for the pattern that treats it.'
        ],
        table: {
          head_ar: ['المبدأ', 'مختصره', 'الخلل الذي يمنعه'],
          head_en: ['Principle', 'In brief', 'Defect prevented'],
          rows: [
            ['S · المسؤولية الواحدة', 'سبب واحد للتغيير', 'كلاس ينفجر بمسؤوليات'],
            ['O · الانفتاح والانغلاق', 'أضف بلا تعديل', 'كسر كود مستقر يعمل'],
            ['L · استبدال ليسكوف', 'الابن يصلح مكان الأب', 'وراثة خاطئة تكسر المستدعي'],
            ['I · فصل الواجهات', 'واجهات صغيرة متخصصة', 'إجبار على تنفيذ ما لا يخص'],
            ['D · عكس الاعتماد', 'اعتمد على التجريد', 'ارتباط بتقنية بعينها']
          ]
        },
        keyPoints_ar: [
          'التجريد يحدد «ماذا» ويترك «كيف» للوارث.',
          'الواجهة عقد يعتمد عليه المستدعي، فيصير التنفيذ قابلاً للاستبدال.',
          'المسؤولية الواحدة: سبب واحد للتغيير في كل كلاس.',
          'عكس الاعتماد هو ما يجعل الاختبار ممكناً بتمرير بديل وهمي.',
          'النمط أداة تُستدعى عند تكرار الألم، لا هدف يُبدأ به.'
        ],
        keyPoints_en: [
          'Abstraction defines the what and leaves the how to the implementer.',
          'An interface is a contract the caller depends on, making implementations swappable.',
          'Single responsibility: one reason to change per class.',
          'Dependency inversion is what makes testing possible by passing a fake.',
          'A pattern is a tool summoned when pain repeats, not a starting goal.'
        ],
        analogy_ar: 'تخيّل مقبس الكهرباء في الجدار. المقبس عقد: ثلاثة أطراف بجهد معلوم. لا يهمه أوصلت مصباحاً أم غسالة أم شاحناً، ولا يهم الجهاز من أي مصنع جاءت الكهرباء. ولهذا تبدّل الجهاز بجهاز والمحطة بمحطة بلا أن يتغيّر الجدار. الواجهة في الكود هي هذا المقبس بالضبط.',
        analogy_en: 'Picture a wall power socket. The socket is a contract: three terminals at a known voltage. It does not care whether you plug in a lamp, a washing machine or a charger, and the device does not care which plant produced the electricity. So devices and plants swap freely while the wall stays. An interface in code is exactly that socket.',
        terms: [
          { term: 'Abstraction', def_ar: 'تحديد ما يجب أن يفعله الشيء دون كيف يفعله.', def_en: 'Defining what a thing must do without how it does it.' },
          { term: 'Interface', def_ar: 'عقد بقائمة دوال يجب أن يوفرها كل من يلتزم به.', def_en: 'A contract listing methods every implementer must provide.' },
          { term: 'Singleton', def_ar: 'نمط يضمن وجود كائن واحد فقط في البرنامج كله.', def_en: 'A pattern guaranteeing a single object across the program.' },
          { term: 'Factory', def_ar: 'نمط ينشئ الكائن المناسب حسب الحالة في موضع واحد.', def_en: 'A pattern creating the right object for the case in one place.' },
          { term: 'Observer', def_ar: 'نمط يُخطِر أطرافاً متعددة تلقائياً عند تغيّر حالة.', def_en: 'A pattern notifying several parties automatically when state changes.' }
        ],
        cards: [
          { q_ar: 'ما الذي يحدده التجريد وما الذي يتركه؟', q_en: 'What does abstraction define and what does it leave out?', a_ar: 'يحدد «ماذا يجب أن يفعل» ويترك «كيف يفعله» لكل نوع وارث.', a_en: 'It defines what must be done and leaves how to each implementing type.' },
          { q_ar: 'ما مبدأ المسؤولية الواحدة؟', q_en: 'What is the single responsibility principle?', a_ar: 'أن يكون للكلاس سبب واحد فقط للتغيير.', a_en: 'A class should have only one reason to change.' },
          { q_ar: 'كيف يجعل عكس الاعتماد الاختبار ممكناً؟', q_en: 'How does dependency inversion make testing possible?', a_ar: 'لأن الكلاس يعتمد على واجهة، فتُمرَّر له نسخة وهمية وقت الاختبار بدل التقنية الحقيقية.', a_en: 'Because the class depends on an interface, so a fake implementation is passed at test time instead of the real technology.' },
          { q_ar: 'متى يُلجأ إلى نمط تصميم؟', q_en: 'When should a design pattern be used?', a_ar: 'عند تكرار مشكلة بعينها فعلاً، لا قبل ظهورها — فالبدء بالنمط يعقّد بلا سبب.', a_en: 'When a specific problem actually recurs, not before it appears, since starting from the pattern adds needless complexity.' }
        ]
      }
    ],

    // ─────────── هياكل البيانات ───────────
    3: [
      {
        title_ar: 'مفهوم الهياكل والمصفوفات',
        title_en: 'Data Structures and Arrays',
        lead_ar: 'هيكل البيانات طريقة تنظيم القيم في الذاكرة، واختياره يقرر أي العمليات ستكون رخيصة وأيها ستكون مكلفة.',
        lead_en: 'A data structure is a way of organising values in memory, and choosing it decides which operations are cheap and which are expensive.',
        body_ar: [
          'البيانات وحدها لا تكفي: المهم كيف تُرتَّب في الذاكرة. فهيكل البيانات ليس ترفاً تنظيمياً، وإنما هو ما يحدد كلفة كل عملية ستجريها عليها. والسؤال الذي يسبق الاختيار دائماً: ما العمليات التي سأكررها كثيراً؟ فالهيكل الذي يجعل عمليتك المتكررة رخيصة هو الصحيح، ولو كان أسوأ في عمليات أخرى لا تحتاجها.',
          'والمصفوفة أبسط الهياكل: عناصر متتابعة في الذاكرة، كل عنصر يليه الذي بعده مباشرة. وهذا التتابع هو سرّ قوتها: يعرف الحاسوب موضع أي عنصر بعملية حسابية واحدة من عنوان البداية والفهرس، فالوصول لأي عنصر بفهرسه فوري مهما كان حجم المصفوفة — سواء كانت عشرة عناصر أو مليوناً.',
          'لكن للتتابع ثمنه: الإضافة والحذف في وسط المصفوفة مكلفة. فلو حذفت العنصر الأول من مليون، وجب إزاحة تسعمئة ألف وتسعة وتسعين عنصراً خطوةً واحدة لسدّ الفراغ. ولهذا: المصفوفة ممتازة للقراءة بالفهرس، رديئة للإدخال والحذف المتكرر في المقدمة أو الوسط.',
          'والفهرس يبدأ من الصفر لا من الواحد، وله سبب هندسي لا اعتباطي: الفهرس في الأصل إزاحة عن عنوان البداية، فالعنصر الأول إزاحته صفر لأنه في البداية نفسها. ومن هنا جاء أشهر خطأ في البرمجة: تجاوز الحد بمقدار واحد، حين تكتب حلقة تصل إلى الطول نفسه بدل الطول ناقص واحد.',
          'والمصفوفة متعددة الأبعاد قائمة عناصرها قوائم: تمثّل جدولاً أو شبكة، ويُوصل للخلية بفهرس الصف ثم فهرس العمود. وتُستخدم في كل ما هو شبكي: صورة بكسلاتها، ولوحة لعبة، وجدول درجات.',
          'وثمة تمييز يخلط فيه كثيرون: المصفوفة الحقيقية ثابتة الحجم ونوع عناصرها واحد، أما قائمة بايثون فديناميكية تكبر وتصغر وتقبل أنواعاً مختلطة. ولهذا المرونة ثمنها في الذاكرة والأداء، لكنها تكفي أغلب الحالات وتغني عن حساب الحجم مسبقاً.'
        ],
        body_en: [
          'Data alone is not enough: what matters is how it is arranged in memory. A data structure is not organisational luxury; it determines the cost of every operation you will run. The question that always precedes the choice is: which operations will I repeat most? The structure that makes your frequent operation cheap is the right one, even if it is worse at operations you never need.',
          'An array is the simplest structure: elements laid consecutively in memory, each directly after the previous. That adjacency is its strength: the computer finds any element position with one calculation from the start address and the index, so access by index is instant whatever the size, ten elements or a million.',
          'Adjacency has a price: inserting or deleting in the middle is expensive. Deleting the first of a million elements requires shifting 999,999 elements one step to close the gap. So an array is excellent for index reads and poor for repeated insertion or deletion at the front or middle.',
          'Indexes start at zero, not one, for an engineering reason rather than an arbitrary one: an index is originally an offset from the start address, so the first element has offset zero because it sits at the start. From this comes the most famous bug in programming, the off-by-one, when a loop reaches the length itself rather than length minus one.',
          'A multi-dimensional array is a list of lists representing a table or grid, reached by row index then column index. It serves everything grid-shaped: an image and its pixels, a game board, a grade table.',
          'A distinction many blur: a true array is fixed in size with one element type, while a Python list is dynamic, growing and shrinking and accepting mixed types. That flexibility costs memory and performance but suffices for most cases and spares you sizing in advance.'
        ],
        table: {
          head_ar: ['العملية', 'كلفتها في المصفوفة', 'السبب'],
          head_en: ['Operation', 'Array cost', 'Reason'],
          rows: [
            ['الوصول بالفهرس', 'O(1)', 'حساب مباشر من عنوان البداية'],
            ['الإضافة في النهاية', 'O(1) غالباً', 'لا إزاحة مطلوبة'],
            ['الإضافة في المقدمة', 'O(n)', 'إزاحة كل العناصر'],
            ['البحث عن قيمة', 'O(n)', 'فحص العناصر واحداً واحداً']
          ]
        },
        keyPoints_ar: [
          'اختيار الهيكل يقرر كلفة كل عملية، فابدأ بسؤال: ما العملية التي أكررها؟',
          'تتابع المصفوفة في الذاكرة يجعل الوصول بالفهرس فورياً مهما كبر الحجم.',
          'الإضافة والحذف في المقدمة مكلفة لأنها تُزيح كل ما بعدها.',
          'الفهرس إزاحة عن البداية، ولذلك يبدأ من الصفر.',
          'قائمة بايثون ديناميكية ومختلطة الأنواع، والمصفوفة الحقيقية ثابتة وموحّدة.'
        ],
        keyPoints_en: [
          'The structure decides operation costs, so start by asking which operation repeats.',
          'Array adjacency makes index access instant whatever the size.',
          'Front insertion and deletion are expensive because everything after shifts.',
          'An index is an offset from the start, which is why it begins at zero.',
          'A Python list is dynamic and mixed; a true array is fixed and uniform.'
        ],
        analogy_ar: 'تخيّل المصفوفة صفَّ خزائن ملتصقة مرقّمة من الصفر. للوصول للخزانة رقم ٧٤٣ تمشي إليها مباشرة بلا فتح ما قبلها — هذا الوصول الفوري. لكن لو أردت إدخال خزانة جديدة في الموضع الثاني، وجب تحريك كل الخزائن التي بعدها خطوة — وهنا الكلفة.',
        analogy_en: 'Picture an array as a row of attached lockers numbered from zero. To reach locker 743 you walk straight to it without opening the earlier ones, and that is instant access. But inserting a new locker at position two means physically shifting every locker after it one step, and that is the cost.',
        terms: [
          { term: 'Data Structure', def_ar: 'طريقة تنظيم القيم في الذاكرة تحدد كلفة العمليات عليها.', def_en: 'A way of organising values in memory that sets operation costs.' },
          { term: 'Array', def_ar: 'عناصر متتابعة في الذاكرة يُوصل لأيها بفهرسه فوراً.', def_en: 'Consecutive elements in memory, any reachable instantly by index.' },
          { term: 'Off-by-one', def_ar: 'خطأ تجاوز الحد بمقدار واحد، أشهره الوصول للطول نفسه.', def_en: 'The off-by-one bug, most often reaching the length itself.' },
          { term: '2D Array', def_ar: 'قائمة عناصرها قوائم تمثّل جدولاً بصفوف وأعمدة.', def_en: 'A list of lists representing a table of rows and columns.' }
        ],
        cards: [
          { q_ar: 'لماذا الوصول بالفهرس في المصفوفة فوري؟', q_en: 'Why is array index access instant?', a_ar: 'لأن العناصر متتابعة في الذاكرة، فيُحسب موضع أيٍّ منها بعملية واحدة من عنوان البداية.', a_en: 'Because elements are consecutive in memory, so any position is computed in one step from the start address.' },
          { q_ar: 'ما كلفة الحذف من مقدمة مصفوفة؟', q_en: 'What is the cost of deleting from the front of an array?', a_ar: 'O(n)، لأن كل العناصر التي بعدها تُزاح خطوة لسدّ الفراغ.', a_en: 'O(n), because every element after it shifts one step to close the gap.' },
          { q_ar: 'لماذا يبدأ الفهرس من الصفر؟', q_en: 'Why does indexing start at zero?', a_ar: 'لأنه إزاحة عن عنوان البداية، والعنصر الأول إزاحته صفر.', a_en: 'Because it is an offset from the start address, and the first element has offset zero.' },
          { q_ar: 'ما السؤال الذي يسبق اختيار الهيكل؟', q_en: 'What question precedes choosing a structure?', a_ar: 'ما العمليات التي سأكررها كثيراً؟ فالهيكل يُختار ليجعلها رخيصة.', a_en: 'Which operations will I repeat most? The structure is chosen to make those cheap.' }
        ]
      },
      {
        title_ar: 'القوائم المترابطة',
        title_en: 'Linked Lists',
        lead_ar: 'القائمة المترابطة عقد متفرقة في الذاكرة يشير كل عقدة للتالية — تربح الإضافة والحذف السريع وتخسر الوصول الفوري بالفهرس.',
        lead_en: 'A linked list is nodes scattered in memory, each pointing to the next: it wins fast insertion and deletion and loses instant index access.',
        body_ar: [
          'المصفوفة تشترط التتابع في الذاكرة، والقائمة المترابطة تتخلى عنه: كل عنصر عقدة تحمل قيمتها وإشارة إلى موضع العقدة التالية. فالعقد قد تكون متفرقة في أنحاء الذاكرة، والذي يربطها هو الإشارات لا التجاور.',
          'وثمرة التخلي عن التتابع أن الإضافة والحذف يصيران رخيصين: لإدخال عقدة بين عقدتين، تُغيَّر إشارتان فقط ولا يُزاح شيء، مهما بلغ طول القائمة. وهذا عكس المصفوفة تماماً، وهو سبب وجود هذا الهيكل أصلاً.',
          'وثمن ذلك أن الوصول بالفهرس لم يعد فورياً: لا يوجد حساب يقفز للعنصر رقم ٥٠٠، بل يجب المشي من الأول عقدة عقدة حتى بلوغه. فالمصفوفة تربح القراءة والقائمة المترابطة تربح التعديل — وهذي هي المقايضة الأساسية بين الهيكلين.',
          'وللقائمة المفردة إشارة واحدة لكل عقدة تشير للتالية، فالمرور فيها باتجاه واحد لا رجعة فيه: لو كنت عند عقدة وأردت سابقتها، وجب البدء من الأول من جديد. ولهذا وُجدت المزدوجة: كل عقدة تشير للتالية وللسابقة معاً، فيصير المرور في الاتجاهين بثمن إشارة إضافية في كل عقدة.',
          'والقائمة الدائرية آخر عقدة فيها تشير للأولى بدل أن تشير إلى لا شيء، فلا نهاية لها. وتصلح لما يدور بطبيعته: تناوب الأدوار بين لاعبين، وقائمة تشغيل تكرر نفسها. وخطرها أن المرور فيها بشرط «حتى تصل إلى لا شيء» لن ينتهي أبداً — فيجب المرور بعدّ أو بمقارنة بنقطة البداية.',
          'وأكثر ما يخطئ فيه المبتدئ في هذا الباب هو الطرفان: الإضافة إلى قائمة فارغة، والحذف من عقدة واحدة، والوصول للعقدة الأخيرة. فأغلب أخطاء القوائم المترابطة تقع في هذي الحالات الحدّية لا في الحالة العامة.'
        ],
        body_en: [
          'An array demands adjacency in memory; a linked list abandons it: each element is a node holding its value and a reference to the next node position. Nodes may be scattered anywhere, and what binds them is references rather than adjacency.',
          'The fruit of abandoning adjacency is cheap insertion and deletion: inserting a node between two changes only two references and shifts nothing, whatever the length. That is the exact opposite of an array and the reason this structure exists.',
          'The price is that index access is no longer instant: no calculation jumps to element 500; you must walk from the first node by node. An array wins reading and a linked list wins editing, and this is the core trade-off between them.',
          'A singly linked list holds one reference per node pointing forward, so traversal goes one way with no return: standing at a node and wanting the previous one means starting over from the head. Hence the doubly linked list, where each node points both forward and backward, giving two-way traversal at the price of an extra reference per node.',
          'A circular list has its last node point back to the first rather than to nothing, so it never ends. It suits naturally cyclic things: turn rotation among players, a repeating playlist. Its danger is that traversing with the condition "until nothing" never terminates, so you must traverse by count or by comparing against the starting point.',
          'What beginners most often get wrong here is the extremes: inserting into an empty list, deleting from a single-node list, and reaching the last node. Most linked-list bugs live in these edge cases rather than the general one.'
        ],
        table: {
          head_ar: ['العملية', 'مصفوفة', 'قائمة مترابطة'],
          head_en: ['Operation', 'Array', 'Linked list'],
          rows: [
            ['الوصول بالفهرس', 'O(1)', 'O(n)'],
            ['الإضافة في المقدمة', 'O(n)', 'O(1)'],
            ['الحذف من الوسط', 'O(n) إزاحة', 'O(1) بعد الوصول'],
            ['استهلاك الذاكرة', 'القيم فقط', 'القيم مع الإشارات']
          ]
        },
        keyPoints_ar: [
          'العقدة تحمل قيمتها وإشارة للتالية، والربط بالإشارات لا بالتجاور.',
          'الإضافة والحذف رخيصان لأنهما تعديل إشارتين بلا إزاحة.',
          'الوصول بالفهرس مكلف لأنه مشي من الأول عقدة عقدة.',
          'المزدوجة تتيح الرجوع بثمن إشارة إضافية في كل عقدة.',
          'الدائرية لا تنتهي، فالمرور فيها يحتاج عدّاً أو مقارنة بالبداية.',
          'أغلب الأخطاء في الحالات الحدّية: القائمة الفارغة والعقدة الوحيدة والأخيرة.'
        ],
        keyPoints_en: [
          'A node holds its value and a reference to the next; binding is by references, not adjacency.',
          'Insertion and deletion are cheap: two reference changes with no shifting.',
          'Index access is expensive: walking from the head node by node.',
          'A doubly linked list allows going back at the price of one extra reference per node.',
          'A circular list never ends, so traversal needs a count or a comparison with the start.',
          'Most bugs live in edge cases: an empty list, a single node, and the last node.'
        ],
        analogy_ar: 'تخيّل المصفوفة صفَّ بيوت في شارع واحد بأرقام متتابعة، والقائمة المترابطة كنزاً بخريطة: كل ورقة تقول لك أين الورقة التالية، وقد تكون في حيّ آخر. إدخال محطة جديدة في رحلة الكنز سهل — تكتب ورقة جديدة وتعدّل إشارتين. لكن للوصول للمحطة الخمسين لا بدّ أن تمرّ بالتاسعة والأربعين قبلها.',
        analogy_en: 'Picture an array as a row of houses on one street with consecutive numbers, and a linked list as a treasure hunt: each note tells you where the next note is, possibly in another neighbourhood. Adding a stop to the hunt is easy, a new note and two edits. But reaching the fiftieth stop requires passing the forty-nine before it.',
        terms: [
          { term: 'Node', def_ar: 'وحدة القائمة المترابطة: قيمة وإشارة إلى التالية.', def_en: 'The unit of a linked list: a value and a reference to the next.' },
          { term: 'Singly Linked', def_ar: 'قائمة كل عقدة فيها تشير للتالية فقط، فالمرور باتجاه واحد.', def_en: 'A list where each node points only forward, so traversal is one-way.' },
          { term: 'Doubly Linked', def_ar: 'قائمة كل عقدة تشير للتالية والسابقة، فالمرور باتجاهين.', def_en: 'A list where each node points both ways, allowing two-way traversal.' },
          { term: 'Circular List', def_ar: 'قائمة آخر عقدة فيها تشير للأولى فلا نهاية لها.', def_en: 'A list whose last node points back to the first, so it never ends.' }
        ],
        cards: [
          { q_ar: 'ما المقايضة الأساسية بين المصفوفة والقائمة المترابطة؟', q_en: 'What is the core trade-off between an array and a linked list?', a_ar: 'المصفوفة تربح الوصول الفوري بالفهرس، والقائمة تربح الإضافة والحذف بلا إزاحة.', a_en: 'The array wins instant index access; the linked list wins insertion and deletion with no shifting.' },
          { q_ar: 'كم إشارة تتغيّر عند إدخال عقدة بين عقدتين؟', q_en: 'How many references change when inserting a node between two?', a_ar: 'إشارتان فقط، ولا يُزاح أي عنصر مهما طالت القائمة.', a_en: 'Only two, and no element shifts however long the list.' },
          { q_ar: 'لماذا يخطر المرور في القائمة الدائرية؟', q_en: 'Why is traversing a circular list risky?', a_ar: 'لأن شرط «حتى تصل إلى لا شيء» لا يتحقق أبداً، فيجب العدّ أو المقارنة بنقطة البداية.', a_en: 'Because the condition "until nothing" never holds, so you must count or compare with the start.' },
          { q_ar: 'أين تقع أغلب أخطاء القوائم المترابطة؟', q_en: 'Where do most linked-list bugs occur?', a_ar: 'في الحالات الحدّية: قائمة فارغة، أو عقدة واحدة، أو العقدة الأخيرة.', a_en: 'In edge cases: an empty list, a single node, or the last node.' }
        ]
      },
      {
        title_ar: 'المكدسات والطوابير',
        title_en: 'Stacks and Queues',
        lead_ar: 'المكدس يخرج منه آخر ما دخل، والطابور يخرج منه أول ما دخل — وهذا الفرق وحده يحسم أي المسائل يناسبها كل منهما.',
        lead_en: 'A stack releases the last item in and a queue releases the first, and that single difference decides which problems suit each.',
        body_ar: [
          'المكدس والطابور ليسا هيكلين جديدين بقدر ما هما قيدان على الوصول: كلاهما يخزّن عناصر، لكن يحدد أيها يخرج أولاً. وهذا التقييد المقصود هو مصدر فائدتهما، لأنه يجعل السلوك متوقَّعاً ويمنع الوصول العشوائي الذي قد يفسد المنطق.',
          'والمكدس يعمل بمبدأ «آخر داخل أول خارج»: تضيف على القمة وتسحب من القمة، فلا تصل لما تحتها إلا بعد رفع ما فوقها. وله عمليتان أساسيتان: الدفع push للإضافة والسحب pop للإخراج، وكلتاهما بكلفة ثابتة لأنهما تعملان على طرف واحد.',
          'وتطبيقاته أكثر مما يبدو: زر التراجع في المحررات يخزّن العمليات مكدساً فيتراجع عن آخرها أولاً، وسجل تصفح المتصفح كذلك، والأهم أن استدعاءات الدوال نفسها تُدار بمكدس. ولهذا حين تنهار العودية بلا حالة توقف، تكون الرسالة «فيضان المكدس»: امتلأ مكدس الاستدعاءات.',
          'ومن أشهر استخداماته فحص توازن الأقواس: تدفع كل قوس فاتح، وعند كل قوس مغلق تسحب من القمة وتقارن. فإن لم يطابق أو كان المكدس فارغاً فالأقواس غير متوازنة، وفي النهاية يجب أن يكون المكدس فارغاً وإلا بقي قوس بلا إغلاق.',
          'أما الطابور فيعمل بمبدأ «أول داخل أول خارج»، تماماً كصف الانتظار: تُضاف العناصر من الخلف وتخرج من الأمام. وتطبيقاته كل ما يجب أن يُخدَم بالترتيب: طوابير الطباعة، وطلبات الخوادم، وجدولة المهام.',
          'واختيار الخطأ بينهما يقلب النتيجة رأساً على عقب. فلو استخدمت مكدساً في نظام تذاكر دعم، لخُدم آخر من وصل أولاً وبقي الأول ينتظر إلى الأبد — وهذا ظلم تشغيلي حقيقي وقع في أنظمة فعلية بسبب اختيار هيكل خاطئ.'
        ],
        body_en: [
          'A stack and a queue are less new structures than access constraints: both store elements but dictate which leaves first. That deliberate restriction is the source of their value, making behaviour predictable and preventing random access that could corrupt the logic.',
          'A stack works last in, first out: you add at the top and take from the top, reaching what is below only after lifting what is above. It has two core operations, push and pop, both at constant cost because they act on one end.',
          'Its applications exceed expectation: the undo button stores operations on a stack so the latest reverses first, browser history likewise, and most importantly function calls themselves are managed by a stack. That is why recursion without a base case crashes with "stack overflow": the call stack filled.',
          'A famous use is bracket balancing: push every opening bracket, and on each closing one pop and compare. A mismatch or an empty stack means unbalanced, and at the end the stack must be empty or an opening bracket was never closed.',
          'A queue works first in, first out, exactly like a waiting line: elements join at the back and leave from the front. Its applications are everything that must be served in order: print queues, server requests, task scheduling.',
          'Choosing wrongly between them inverts the outcome. Using a stack for a support-ticket system would serve the newest arrival first while the earliest waits forever, a genuine operational injustice that has happened in real systems because of a wrong structure choice.'
        ],
        table: {
          head_ar: ['الهيكل', 'المبدأ', 'الإضافة والإخراج', 'مثال'],
          head_en: ['Structure', 'Principle', 'Add / remove', 'Example'],
          rows: [
            ['المكدس', 'آخر داخل أول خارج', 'من القمة فقط', 'زر التراجع'],
            ['الطابور', 'أول داخل أول خارج', 'خلف وأمام', 'صف الطباعة'],
            ['مكدس الاستدعاءات', 'يدير الدوال المتداخلة', 'تلقائي', 'فيضان المكدس'],
            ['طابور الأولوية', 'الأهم يخرج أولاً', 'حسب الأولوية', 'حالات الطوارئ']
          ]
        },
        keyPoints_ar: [
          'المكدس والطابور قيدان على الوصول لا هيكلان جديدان.',
          'المكدس: آخر داخل أول خارج، ويعمل على طرف واحد بكلفة ثابتة.',
          'استدعاءات الدوال تُدار بمكدس، ومنه جاءت رسالة فيضان المكدس.',
          'الطابور: أول داخل أول خارج، لكل ما يجب خدمته بالترتيب.',
          'اختيار الخطأ بينهما يقلب ترتيب الخدمة رأساً على عقب.'
        ],
        keyPoints_en: [
          'Stacks and queues are access constraints rather than new structures.',
          'A stack is last in first out, acting on one end at constant cost.',
          'Function calls run on a stack, which is where stack overflow comes from.',
          'A queue is first in first out, for anything that must be served in order.',
          'Choosing wrongly between them inverts the service order entirely.'
        ],
        analogy_ar: 'تخيّل المكدس رصّة أطباق: تضع الطبق على القمة وتأخذ من القمة، ولا تسحب الطبق الأسفل إلا بعد رفع كل ما فوقه. والطابور صفّ الخبز: من وصل أولاً يُخدَم أولاً، ومن جاء متأخراً يقف خلف. ولو خدمت صفّ الخبز بمنطق رصّة الأطباق، لأخذ آخر الواصلين خبزه وبقي الأول واقفاً.',
        analogy_en: 'Picture a stack as a pile of plates: you place on top and take from the top, reaching the bottom plate only after lifting everything above. A queue is the bakery line: first to arrive is first served and latecomers stand behind. Serving a bakery line with pile-of-plates logic would give the newest arrival bread while the first still waits.',
        terms: [
          { term: 'Stack', def_ar: 'هيكل يخرج منه آخر ما دخل، بعمليتي push وpop.', def_en: 'A structure releasing the last item in, via push and pop.' },
          { term: 'Queue', def_ar: 'هيكل يخرج منه أول ما دخل، الإضافة خلفاً والإخراج أماماً.', def_en: 'A structure releasing the first item in, adding at the back and removing at the front.' },
          { term: 'Call Stack', def_ar: 'مكدس يدير استدعاءات الدوال المتداخلة أثناء التنفيذ.', def_en: 'The stack managing nested function calls at run time.' },
          { term: 'Stack Overflow', def_ar: 'امتلاء مكدس الاستدعاءات، وأشهر أسبابه عودية بلا حالة توقف.', def_en: 'The call stack filling up, most often from recursion with no base case.' }
        ],
        cards: [
          { q_ar: 'ما مبدأ المكدس وما مبدأ الطابور؟', q_en: 'What principle governs a stack and a queue?', a_ar: 'المكدس آخر داخل أول خارج، والطابور أول داخل أول خارج.', a_en: 'A stack is last in first out; a queue is first in first out.' },
          { q_ar: 'لماذا ترتبط رسالة فيضان المكدس بالعودية؟', q_en: 'Why is stack overflow tied to recursion?', a_ar: 'لأن الاستدعاءات تُدار بمكدس، فالعودية بلا حالة توقف تُراكمها حتى يمتلئ.', a_en: 'Because calls run on a stack, so recursion with no base case piles them until it fills.' },
          { q_ar: 'كيف يُفحص توازن الأقواس بمكدس؟', q_en: 'How does a stack check bracket balance?', a_ar: 'يُدفع كل قوس فاتح، وعند كل مغلق يُسحب من القمة ويُقارن، ويجب أن ينتهي المكدس فارغاً.', a_en: 'Push every opening bracket, pop and compare on each closing one, and the stack must end empty.' },
          { q_ar: 'ما أثر استخدام مكدس مكان طابور في نظام تذاكر؟', q_en: 'What happens using a stack instead of a queue for tickets?', a_ar: 'يُخدَم آخر الواصلين أولاً ويبقى الأول ينتظر، فينقلب ترتيب الخدمة.', a_en: 'The newest arrival is served first while the earliest waits, inverting the service order.' }
        ]
      },
      {
        title_ar: 'الأشجار وأشجار البحث الثنائي',
        title_en: 'Trees and Binary Search Trees',
        lead_ar: 'الشجرة هيكل هرمي لكل عقدة فيه أبناء، وشجرة البحث الثنائي ترتّب أبناءها بقاعدة تجعل البحث ينصّف المسألة في كل خطوة.',
        lead_en: 'A tree is a hierarchical structure where each node has children, and a binary search tree orders them by a rule that halves the problem at every step.',
        body_ar: [
          'كل ما سبق من هياكل خطي: عناصر في صف. لكن كثيراً من البيانات في الواقع هرمي لا خطي: نظام الملفات ومجلداته المتداخلة، والهيكل الإداري، وقائمة تصنيفات المتجر. والشجرة هي الهيكل الذي يمثّل هذي العلاقة: جذر واحد في القمة، ولكل عقدة أبناء، والعقدة بلا أبناء تُسمّى ورقة.',
          'ومصطلحاتها تُبنى على هذي الصورة: الجذر أعلى عقدة بلا أب، والأب والابن علاقة مباشرة، والعمق مسافة العقدة عن الجذر، والارتفاع أطول مسار من الجذر إلى ورقة. والشجرة الثنائية حالة خاصة: لكل عقدة ابنان على الأكثر، يمين ويسار.',
          'وشجرة البحث الثنائي تضيف قاعدة ترتيب صارمة: كل ما في الشجرة اليسرى لعقدة أصغر من قيمتها، وكل ما في اليمنى أكبر. وهذي القاعدة ليست تنظيماً شكلياً، بل هي ما يجعل البحث فعالاً: تقارن بالجذر فتعرف في أي نصف تكمل، فتستبعد نصف الشجرة بمقارنة واحدة.',
          'وبهذا يشبه البحث فيها البحث الثنائي في مصفوفة مرتبة، لكن بميزة إضافية: الإضافة والحذف يحفظان الترتيب تلقائياً بلا إزاحة، بينما إدخال قيمة في مصفوفة مرتبة يستوجب إزاحة ما بعدها.',
          'لكن هنا يكمن الخطر الذي يجهله كثيرون: كفاءة الشجرة مشروطة بتوازنها. فلو أدخلت القيم مرتبة تصاعدياً من الأصل، لصار كل عنصر ابناً يمينياً لسابقه، وتحولت الشجرة إلى ما يشبه قائمة مترابطة طويلة — فيهبط البحث من تنصيف في كل خطوة إلى مرور على الجميع.',
          'ولهذا وُجدت الأشجار المتوازنة ذاتياً التي تعيد ترتيب نفسها عند الإضافة لتحفظ التوازن. والدرس العملي: لا تفترض الكفاءة من نوع الهيكل وحده، بل من الهيكل مع نمط البيانات الداخلة إليه — فالبيانات المرتبة سلفاً هي أسوأ ما يدخل شجرة بحث غير متوازنة.',
          'والمرور على الشجرة له ثلاثة ترتيبات شائعة، وأنفعها في شجرة البحث هو المرور الوسطي: يزور الشجرة اليسرى ثم العقدة ثم اليمنى، فيخرج العناصر مرتبة تصاعدياً — وهذي طريقة أنيقة لاستخراج بيانات الشجرة مرتبة بلا خوارزمية ترتيب.'
        ],
        body_en: [
          'Every structure so far is linear: elements in a row. Yet much real data is hierarchical: a file system with nested folders, an org chart, a store category list. A tree represents that relation: one root at the top, each node with children, and a childless node called a leaf.',
          'Its vocabulary follows the image: the root is the top node with no parent, parent and child is a direct relation, depth is a node distance from the root, and height is the longest path from root to leaf. A binary tree is a special case: at most two children per node, left and right.',
          'A binary search tree adds a strict ordering rule: everything in a node left subtree is smaller than its value and everything right is larger. This rule is not cosmetic; it is what makes search efficient: comparing with the root tells you which half to continue in, discarding half the tree in one comparison.',
          'Search then resembles binary search on a sorted array, with an extra advantage: insertion and deletion preserve order automatically with no shifting, while inserting into a sorted array requires shifting everything after.',
          'Here lies the danger many miss: efficiency is conditional on balance. Inserting values in ascending order makes each element the right child of the previous, turning the tree into something like a long linked list, so search degrades from halving each step to visiting everything.',
          'Hence self-balancing trees that reorder themselves on insertion to preserve balance. The practical lesson: never assume efficiency from the structure type alone but from the structure together with the incoming data pattern, since already-sorted data is the worst input to an unbalanced search tree.',
          'Tree traversal has three common orders, and the most useful in a search tree is in-order: visit the left subtree, then the node, then the right, emitting elements in ascending order. That is an elegant way to extract sorted data with no sorting algorithm.'
        ],
        table: {
          head_ar: ['الحالة', 'شكل الشجرة', 'كلفة البحث'],
          head_en: ['Case', 'Tree shape', 'Search cost'],
          rows: [
            ['متوازنة', 'أبناء موزّعون يميناً ويساراً', 'O(log n)'],
            ['غير متوازنة', 'سلسلة في اتجاه واحد', 'O(n)'],
            ['إدخال مرتب تصاعدياً', 'أسوأ حالة ممكنة', 'O(n)'],
            ['متوازنة ذاتياً', 'تعيد ترتيب نفسها', 'O(log n) مضمونة']
          ]
        },
        keyPoints_ar: [
          'الشجرة تمثّل العلاقات الهرمية التي تعجز عنها الهياكل الخطية.',
          'قاعدة شجرة البحث: اليسار أصغر واليمين أكبر، فتُستبعد نصف الشجرة بمقارنة.',
          'الإضافة والحذف يحفظان الترتيب تلقائياً بلا إزاحة.',
          'كفاءة الشجرة مشروطة بتوازنها، وغير المتوازنة تصير كقائمة مترابطة.',
          'إدخال بيانات مرتبة سلفاً هو أسوأ ما يدخل شجرة بحث غير متوازنة.',
          'المرور الوسطي يُخرج عناصر شجرة البحث مرتبة تصاعدياً.'
        ],
        keyPoints_en: [
          'A tree represents hierarchical relations linear structures cannot.',
          'The BST rule is smaller left and larger right, discarding half the tree per comparison.',
          'Insertion and deletion preserve order automatically with no shifting.',
          'Efficiency depends on balance; an unbalanced tree behaves like a linked list.',
          'Already-sorted input is the worst case for an unbalanced search tree.',
          'In-order traversal emits a search tree elements in ascending order.'
        ],
        analogy_ar: 'تخيّل شجرة البحث دليل هاتف مطوياً: تفتحه من المنتصف فتعرف في أي نصف يقع الاسم فتترك النصف الآخر كله. لكن تخيّل دليلاً كُتبت أسماؤه كلها في عمود واحد بلا تفرّع — عندها لا معنى للفتح من المنتصف، ووجب قراءة الأسماء واحداً واحداً. هذي بالضبط الشجرة غير المتوازنة.',
        analogy_en: 'Picture a search tree as a folded phone book: you open the middle, learn which half holds the name and abandon the other. Now picture a book whose names are all written in one column with no branching: opening the middle is meaningless and you must read name by name. That is exactly an unbalanced tree.',
        terms: [
          { term: 'Root', def_ar: 'أعلى عقدة في الشجرة ولا أب لها.', def_en: 'The top node of a tree with no parent.' },
          { term: 'Leaf', def_ar: 'عقدة بلا أبناء.', def_en: 'A node with no children.' },
          { term: 'BST', def_ar: 'شجرة بحث ثنائية: اليسار أصغر واليمين أكبر من العقدة.', def_en: 'A binary search tree: left smaller and right larger than the node.' },
          { term: 'In-order', def_ar: 'مرور يزور اليسار ثم العقدة ثم اليمين فيُخرج القيم مرتبة.', def_en: 'Traversal visiting left, node, then right, emitting sorted values.' },
          { term: 'Balance', def_ar: 'توزّع العقد على الجهتين، وهو شرط كفاءة البحث.', def_en: 'Node distribution across both sides, the condition for search efficiency.' }
        ],
        cards: [
          { q_ar: 'ما قاعدة شجرة البحث الثنائي؟', q_en: 'What is the binary search tree rule?', a_ar: 'كل ما في الشجرة اليسرى أصغر من العقدة وكل ما في اليمنى أكبر منها.', a_en: 'Everything in the left subtree is smaller than the node and everything right is larger.' },
          { q_ar: 'ماذا يحدث لو أُدخلت القيم مرتبة تصاعدياً؟', q_en: 'What happens if values are inserted in ascending order?', a_ar: 'تتحول الشجرة إلى سلسلة في اتجاه واحد فيهبط البحث إلى O(n).', a_en: 'The tree becomes a one-way chain and search degrades to O(n).' },
          { q_ar: 'أي مرور يُخرج عناصر شجرة البحث مرتبة؟', q_en: 'Which traversal emits BST elements sorted?', a_ar: 'المرور الوسطي: اليسار ثم العقدة ثم اليمين.', a_en: 'In-order traversal: left, node, then right.' },
          { q_ar: 'ما ميزة شجرة البحث على المصفوفة المرتبة؟', q_en: 'What advantage does a BST have over a sorted array?', a_ar: 'الإضافة والحذف يحفظان الترتيب بلا إزاحة العناصر.', a_en: 'Insertion and deletion preserve order without shifting elements.' }
        ]
      },
      {
        title_ar: 'الرسوم وجداول التقطيع ومقارنة الهياكل',
        title_en: 'Graphs, Hash Tables and Comparing Structures',
        lead_ar: 'الرسم يمثّل علاقات متشابكة لا هرمية، وجدول التقطيع يصل للقيمة بمفتاحها فوراً — والاختيار بينها كله يعود لسؤال واحد: ما العملية التي أكررها؟',
        lead_en: 'A graph models tangled rather than hierarchical relations, a hash table reaches a value by its key instantly, and choosing between them all comes back to one question: which operation do I repeat?',
        body_ar: [
          'الشجرة تفترض هرمية: لكل عقدة أب واحد ولا دورات. لكن كثيراً من العلاقات ليست كذلك: الصداقة في شبكة اجتماعية متبادلة ومتشابكة، والطرق بين المدن تربط كلاً بأكثر من واحدة وتعود. والرسم هو الهيكل العام لهذي العلاقات: عقد تسمى رؤوساً، وروابط بينها تسمى حوافّ.',
          'وللحافة اتجاه أو لا: فعلاقة الصداقة متبادلة فالرسم غير موجّه، ومتابعة حساب في منصة أحادية فالرسم موجّه. وقد يكون للحافة وزن يمثّل كلفة: مسافة بين مدينتين أو زمن رحلة. وعلى الرسوم الموزونة تُبنى خوارزميات أقصر طريق التي تعمل بها الخرائط.',
          'وجدول التقطيع هيكل مختلف كلياً في فكرته: يحوّل المفتاح إلى رقم بدالة تقطيع، ويستخدم هذا الرقم موضعاً مباشراً للقيمة. فلا بحث ولا مرور: تحسب الموضع وتذهب إليه، ولهذا يكون الوصول بالمفتاح فورياً في المتوسط مهما كبر الجدول.',
          'ولهذا يقع التصادم: مفتاحان مختلفان قد تعطيهما الدالة الرقم نفسه، فيتنازعان الموضع. وتُعالَج بطرق منها ربط قائمة في الموضع الواحد تضم كل ما تصادم عليه. ولو ساءت دالة التقطيع فأرسلت أغلب المفاتيح لموضع واحد، لتحول الجدول إلى قائمة طويلة وهبط الوصول من فوري إلى مرور على الجميع — فجودة الدالة شرط في الكفاءة لا تفصيل.',
          'وهنا تتضح القاعدة الكبرى في هذا القسم كله: لا هيكل أفضل مطلقاً، وإنما أفضل لعملية. المصفوفة للقراءة بالفهرس، والقائمة المترابطة للإضافة والحذف المتكرر، والمكدس والطابور لضبط ترتيب الخدمة، وشجرة البحث للبحث مع بقاء البيانات مرتبة، وجدول التقطيع للوصول بالمفتاح، والرسم للعلاقات المتشابكة.',
          'والخطأ الشائع اختيار الهيكل من حيث الألفة لا من حيث الحاجة: يبدأ كثيرون بالقائمة في كل موضع لأنها أول ما تعلّموه، ثم يشتكون البطء. فاسأل قبل أن تختار: هل عملية القراءة أكثر أم الإضافة؟ هل أبحث بالمفتاح أم بالترتيب؟ هل العلاقات هرمية أم متشابكة؟ — إجابتك عن هذي الثلاث تحدد الهيكل وحدها.'
        ],
        body_en: [
          'A tree assumes hierarchy: one parent per node and no cycles. Many relations are not like that: friendship in a social network is mutual and tangled, and roads between cities connect each to several and loop back. A graph is the general structure for these: nodes called vertices and links called edges.',
          'An edge may or may not have direction: friendship is mutual so the graph is undirected, while following an account is one-way so it is directed. An edge may carry a weight representing cost: distance between cities or travel time. Shortest-path algorithms behind maps are built on weighted graphs.',
          'A hash table is entirely different in idea: it converts a key into a number with a hash function and uses that number as the direct position of the value. No search, no traversal: compute the position and go there, which is why key access is instant on average whatever the size.',
          'Hence collisions: two different keys may hash to the same number and contend for the position. Remedies include chaining a list at each position holding everything that collided. If the hash function is poor and sends most keys to one position, the table becomes a long list and access degrades from instant to visiting everything, so function quality is a condition of efficiency, not a detail.',
          'Here the great rule of this whole section becomes clear: no structure is best absolutely, only best for an operation. Arrays for index reads, linked lists for frequent insertion and deletion, stacks and queues for service order, search trees for searching while data stays sorted, hash tables for key access, and graphs for tangled relations.',
          'The common mistake is choosing by familiarity rather than need: many reach for a list everywhere because it was the first thing they learned, then complain about slowness. Ask before choosing: are reads more frequent than insertions? Do I look up by key or by order? Are relations hierarchical or tangled? Those three answers alone determine the structure.'
        ],
        table: {
          head_ar: ['الهيكل', 'أقوى ما فيه', 'أضعف ما فيه'],
          head_en: ['Structure', 'Strength', 'Weakness'],
          rows: [
            ['مصفوفة', 'وصول بالفهرس O(1)', 'إضافة وحذف في المقدمة O(n)'],
            ['قائمة مترابطة', 'إضافة وحذف O(1)', 'وصول بالفهرس O(n)'],
            ['مكدس وطابور', 'ضبط ترتيب الخدمة', 'لا وصول عشوائي'],
            ['شجرة بحث', 'بحث O(log n) مع بقاء الترتيب', 'تهبط لـO(n) بلا توازن'],
            ['جدول تقطيع', 'وصول بالمفتاح O(1) متوسطاً', 'لا ترتيب، ويتأثر بالتصادم'],
            ['رسم', 'علاقات متشابكة وأوزان', 'أعقد تنفيذاً وتحليلاً']
          ]
        },
        keyPoints_ar: [
          'الرسم لعلاقات متشابكة، وحوافّه قد تكون موجّهة أو موزونة.',
          'جدول التقطيع يحسب موضع القيمة من مفتاحها فلا يبحث أصلاً.',
          'التصادم يقع حتماً، ودالة تقطيع رديئة تحوّل الجدول إلى قائمة بطيئة.',
          'لا هيكل أفضل مطلقاً، وإنما أفضل لعملية بعينها.',
          'ثلاثة أسئلة تحسم الاختيار: قراءة أم إضافة، بمفتاح أم بترتيب، هرمي أم متشابك.'
        ],
        keyPoints_en: [
          'A graph models tangled relations, and its edges may be directed or weighted.',
          'A hash table computes a value position from its key, so it never searches.',
          'Collisions are inevitable, and a poor hash function turns the table into a slow list.',
          'No structure is best absolutely, only best for a specific operation.',
          'Three questions settle the choice: reads or insertions, by key or by order, hierarchical or tangled.'
        ],
        analogy_ar: 'تخيّل جدول التقطيع صالة مواقف فيها لوحة تحسب لك رقم الموقف من رقم لوحتك مباشرة، فتذهب إليه بلا دوران. والتصادم أن تعطي اللوحة الرقم نفسه لسيارتين، فيوقفان في الموقف ذاته وتحتاج تفرّقهما. أما الرسم فهو خريطة الطرق بين المدن: لا قمة ولا قاع، وإنما شبكة تربط كل مدينة بعدة مدن وتعود.',
        analogy_en: 'Picture a hash table as a car park where a board computes your bay number straight from your plate, so you drive to it with no circling. A collision is the board giving two cars the same bay, so they share it and you need a way to tell them apart. A graph is the road map between cities: no top and no bottom, a web linking each city to several and looping back.',
        terms: [
          { term: 'Graph', def_ar: 'رؤوس وحوافّ تمثّل علاقات متشابكة قد تكون موجّهة أو موزونة.', def_en: 'Vertices and edges modelling tangled relations, possibly directed or weighted.' },
          { term: 'Hash Function', def_ar: 'دالة تحوّل المفتاح إلى رقم يُستخدم موضعاً للقيمة.', def_en: 'A function converting a key into a number used as the value position.' },
          { term: 'Collision', def_ar: 'إعطاء الدالة الرقم نفسه لمفتاحين مختلفين.', def_en: 'The function assigning the same number to two different keys.' },
          { term: 'Weighted Edge', def_ar: 'حافة تحمل كلفة كمسافة أو زمن، تُبنى عليها خوارزميات أقصر طريق.', def_en: 'An edge carrying a cost such as distance or time, used by shortest-path algorithms.' }
        ],
        cards: [
          { q_ar: 'لماذا يكون الوصول في جدول التقطيع فورياً؟', q_en: 'Why is hash table access instant?', a_ar: 'لأنه يحسب موضع القيمة من المفتاح مباشرة فلا يبحث ولا يمرّ على العناصر.', a_en: 'Because it computes the position directly from the key, never searching or traversing.' },
          { q_ar: 'ما أثر دالة تقطيع رديئة؟', q_en: 'What is the effect of a poor hash function?', a_ar: 'ترسل أغلب المفاتيح لموضع واحد، فيتحول الجدول إلى قائمة طويلة ويهبط الوصول إلى O(n).', a_en: 'It sends most keys to one position, turning the table into a long list and degrading access to O(n).' },
          { q_ar: 'متى تختار رسماً بدل شجرة؟', q_en: 'When do you choose a graph over a tree?', a_ar: 'حين تكون العلاقات متشابكة وفيها دورات، لا هرمية بأب واحد لكل عقدة.', a_en: 'When relations are tangled with cycles rather than hierarchical with one parent per node.' },
          { q_ar: 'ما الأسئلة الثلاثة التي تحسم اختيار الهيكل؟', q_en: 'Which three questions settle the structure choice?', a_ar: 'قراءة أكثر أم إضافة؟ بحث بالمفتاح أم بالترتيب؟ علاقات هرمية أم متشابكة؟', a_en: 'More reads or insertions? Lookup by key or by order? Hierarchical or tangled relations?' }
        ]
      }
    ],

    // ─────────── تطوير البرمجيات ───────────
    4: [
      {
        title_ar: 'بيئة التطوير وسطر الأوامر',
        title_en: 'The Development Environment and the Command Line',
        lead_ar: 'أدواتك ليست تفصيلاً: بيئة مضبوطة توفّر عليك ساعات، وسطر الأوامر يفتح لك ما لا تصله الواجهات الرسومية.',
        lead_en: 'Your tools are not a detail: a configured environment saves hours, and the command line reaches what graphical interfaces cannot.',
        body_ar: [
          'بيئة التطوير هي المحرّر والمفسّر والأدوات المساعدة مجتمعة. والمحرّر الحديث ليس دفتر كتابة، بل يقرأ كودك ويفهمه: يلوّن العناصر بحسب معناها، ويكمل الأسماء، ويشير للخطأ قبل التشغيل، ويتيح التنقل لتعريف أي دالة بضغطة. وهذي ليست رفاهية: من يكتب بمحرّر لا يفهم لغته يقضي وقته في أخطاء إملائية كان الحاسوب يكشفها فوراً.',
          'وأهم ما تضبطه أول يوم أمران: المُنسّق الآلي الذي يوحّد شكل الكود بلا نقاش، والمُدقّق الذي يكشف الأنماط المشبوهة كمتغيّر عُرّف ولم يُستخدم. وفائدة المُنسّق أبعد من الشكل: يُنهي نقاشات الفريق حول المسافات ويجعل اختلافات الملفات نظيفة.',
          'وسطر الأوامر واجهة نصية تكتب فيها الأمر بدل النقر عليه. وقد يبدو رجوعاً للوراء، لكنه أقوى للمبرمج لثلاثة أسباب: يعمل على الخوادم البعيدة التي لا واجهة رسومية لها أصلاً، ويقبل الأتمتة فتُكتب سلسلة أوامر في ملف تُنفَّذ بأمر واحد، ويعالج عمليات ضخمة بسطر واحد كإعادة تسمية ألف ملف.',
          'وأوامره الأساسية قليلة وتكفي للبداية: أمر لمعرفة موضعك الحالي، وآخر لعرض ما في المجلد، وثالث للانتقال بين المجلدات، ورابع لإنشاء مجلد، وخامس لنسخ ملف ونقله. ومعها مفهوم المسار: المطلق يبدأ من جذر النظام ويعمل من أي موضع، والنسبي يبدأ من موضعك الحالي فيتغيّر معناه بتغيّره.',
          'وأخطر أوامره أمر الحذف: لا سلة محذوفات فيه ولا تراجع، فما حُذف ذهب. والقاعدة قبل تنفيذ أي أمر حذف: تحقق من موضعك أولاً بأمر عرض المحتويات، وتأكد أن ما ستحذفه هو ما تظنه. وهذي عادة تُنقذ مشاريع كاملة.',
          'وآخر مكوّن في البيئة: إدارة الاعتماديات. فمشروعك يستخدم مكتبات خارجية بإصداراتها، وتشغيله على جهاز آخر يستوجب المكتبات نفسها بالإصدارات نفسها. ولهذا يُوثَّق الاعتماد في ملف، وتُعزل بيئة كل مشروع عن غيره حتى لا يتصادم مشروعان على إصدارين مختلفين من مكتبة واحدة.'
        ],
        body_en: [
          'A development environment is the editor, interpreter and supporting tools together. A modern editor is not a notepad; it reads and understands your code: colouring elements by meaning, completing names, flagging errors before running, and jumping to any definition with one keystroke. That is not luxury: writing in an editor that does not understand your language spends your time on typos the computer could have caught instantly.',
          'The two most valuable things to configure on day one are the formatter, which unifies code shape without debate, and the linter, which flags suspicious patterns such as a variable defined and never used. The formatter value goes beyond looks: it ends team arguments about spacing and keeps file differences clean.',
          'The command line is a text interface where you type a command instead of clicking it. It may look like a step backwards, but it is stronger for a developer for three reasons: it works on remote servers that have no graphical interface at all, it accepts automation so a sequence of commands lives in a file run by one command, and it handles bulk operations in one line, such as renaming a thousand files.',
          'Its essential commands are few and enough to start: one to know where you are, one to list a folder, one to move between folders, one to create a folder, and one to copy and move files. With them comes the path concept: an absolute path starts from the system root and works from anywhere, while a relative path starts from your current location so its meaning changes as you move.',
          'Its most dangerous command is delete: there is no recycle bin and no undo, so what is deleted is gone. The rule before any delete: check your location first by listing the contents, and confirm what you are about to remove is what you think. This habit has saved entire projects.',
          'The last component is dependency management. Your project uses external libraries at specific versions, and running it on another machine requires the same libraries at the same versions. So dependencies are recorded in a file, and each project environment is isolated so two projects never clash over two versions of one library.'
        ],
        table: {
          head_ar: ['الأداة', 'ما تمنعه', 'متى تُضبط'],
          head_en: ['Tool', 'What it prevents', 'When to set up'],
          rows: [
            ['المحرّر الذكي', 'أخطاء إملائية ونحوية قبل التشغيل', 'أول يوم'],
            ['المُنسّق الآلي', 'نقاشات الشكل واختلافات ملفات مزعجة', 'أول يوم'],
            ['المُدقّق', 'أنماطاً مشبوهة كمتغيّر غير مستخدم', 'أول يوم'],
            ['ملف الاعتماديات', 'يعمل عندي ولا يعمل عندك', 'مع أول مكتبة'],
            ['البيئة المعزولة', 'تصادم إصدارات بين مشروعين', 'مع أول مشروع']
          ]
        },
        keyPoints_ar: [
          'المحرّر الذي يفهم لغتك يكشف الخطأ قبل التشغيل فيوفّر وقتاً حقيقياً.',
          'المُنسّق ينهي نقاشات الشكل ويجعل اختلافات الملفات نظيفة.',
          'سطر الأوامر يعمل على الخوادم بلا واجهة، ويقبل الأتمتة والعمليات الضخمة.',
          'المسار المطلق يعمل من أي موضع، والنسبي يتغيّر معناه بتغيّر موضعك.',
          'أمر الحذف بلا تراجع: تحقق من موضعك قبل تنفيذه دائماً.',
          'توثيق الاعتماديات وعزل البيئة يمنعان «يعمل عندي ولا يعمل عندك».'
        ],
        keyPoints_en: [
          'An editor that understands your language catches errors before running and saves real time.',
          'A formatter ends style debates and keeps file diffs clean.',
          'The command line works on headless servers and enables automation and bulk work.',
          'An absolute path works from anywhere; a relative one changes meaning as you move.',
          'Delete has no undo: always verify your location before running it.',
          'Recording dependencies and isolating environments prevent "works on my machine".'
        ],
        analogy_ar: 'تخيّل الفرق بين نجّار يعمل بأدوات مبعثرة وآخر بورشة مرتبة كل أداة في موضعها. الاثنان يصنعان الطاولة نفسها، لكن الأول يقضي نصف وقته يبحث. وسطر الأوامر هو المفتاح الإنجليزي: يبدو أقل أناقة من المفكّ الكهربائي، لكنه الوحيد الذي يصل للمواضع الضيقة التي لا تصلها الأدوات الفاخرة.',
        analogy_en: 'Picture the difference between a carpenter working with scattered tools and one in an ordered workshop where every tool has its place. Both build the same table, but the first spends half the time searching. The command line is the adjustable spanner: less elegant than a power driver, yet the only thing that reaches the tight spots fancy tools cannot.',
        terms: [
          { term: 'Linter', def_ar: 'أداة تفحص الكود وتكشف الأنماط المشبوهة قبل التشغيل.', def_en: 'A tool inspecting code and flagging suspicious patterns before running.' },
          { term: 'Formatter', def_ar: 'أداة توحّد شكل الكود آلياً بلا نقاش.', def_en: 'A tool unifying code shape automatically with no debate.' },
          { term: 'Absolute Path', def_ar: 'مسار يبدأ من جذر النظام فيعمل من أي موضع.', def_en: 'A path from the system root that works from anywhere.' },
          { term: 'Dependency', def_ar: 'مكتبة خارجية يعتمد عليها المشروع بإصدار محدد.', def_en: 'An external library the project relies on at a specific version.' }
        ],
        cards: [
          { q_ar: 'لماذا يبقى سطر الأوامر ضرورياً رغم الواجهات الرسومية؟', q_en: 'Why is the command line still necessary?', a_ar: 'لأنه يعمل على الخوادم بلا واجهة، ويقبل الأتمتة، وينفّذ عمليات ضخمة بسطر واحد.', a_en: 'It works on headless servers, enables automation, and performs bulk operations in one line.' },
          { q_ar: 'ما الفرق بين المسار المطلق والنسبي؟', q_en: 'Difference between absolute and relative paths?', a_ar: 'المطلق يبدأ من جذر النظام ويعمل من أي موضع، والنسبي يبدأ من موضعك فيتغيّر معناه.', a_en: 'Absolute starts at the system root and works anywhere; relative starts where you are, so its meaning shifts.' },
          { q_ar: 'ما القاعدة قبل تنفيذ أمر حذف؟', q_en: 'What is the rule before running a delete?', a_ar: 'تحقق من موضعك الحالي واعرض المحتويات أولاً، فلا تراجع بعد الحذف.', a_en: 'Verify your current location and list contents first, since there is no undo.' },
          { q_ar: 'ما الذي يمنع مشكلة «يعمل عندي ولا يعمل عندك»؟', q_en: 'What prevents "works on my machine"?', a_ar: 'توثيق الاعتماديات بإصداراتها في ملف، وعزل بيئة كل مشروع عن غيره.', a_en: 'Recording dependencies with versions in a file and isolating each project environment.' }
        ]
      },
      {
        title_ar: 'التحكم بالإصدارات وGit',
        title_en: 'Version Control and Git',
        lead_ar: 'التحكم بالإصدارات آلة زمن لمشروعك وسجل يجيب عن سؤال «من غيّر هذا ولماذا؟» — وبدونه يصير التعاون فوضى.',
        lead_en: 'Version control is a time machine for your project and a record answering "who changed this and why?" Without it, collaboration turns to chaos.',
        body_ar: [
          'قبل التحكم بالإصدارات كان الناس ينسخون مجلد المشروع ويسمّونه «نسخة نهائية» ثم «نهائية ٢» ثم «نهائية الأخيرة فعلاً». وهذي الطريقة تفشل في ثلاثة: لا تعرف ما الذي تغيّر بين نسختين، ولا تستطيع دمج عمل شخصين، ولا تعرف لماذا اتُّخذ قرار قديم.',
          'وGit يحل الثلاثة: يحفظ لقطات من مشروعك عبر الزمن، ويعرف بالضبط ما تغيّر في كل لقطة، ويحفظ رسالة تشرح السبب. فتقدر ترجع لأي لقطة، وتقارن بينها، وتعرف من كتب أي سطر ومتى ولماذا.',
          'ودورة العمل ثلاث مراحل لا اثنتان، وهذي أكثر ما يلتبس على المبتدئ: ملفاتك في مجلد العمل، ثم تختار ما تريد تسجيله فتضعه في منطقة التجهيز، ثم تسجّل اللقطة. وفائدة منطقة التجهيز أنك قد تكون عدّلت خمسة ملفات لسببين مختلفين، فتسجّل كل سبب في لقطة مستقلة برسالتها.',
          'ورسالة اللقطة ليست شكلية: هي ما يقرأه زميلك — أو أنت بعد سنة — ليفهم لماذا تغيّر هذا. والرسالة الجيدة تصف السبب لا الفعل: «تصحيح احتساب الخصم للطلبات الملغاة» أنفع بكثير من «تعديلات» أو «إصلاح». وسجل رسائل رديئة يجعل تاريخ المشروع بلا قيمة.',
          'والفروع هي القوة الثانية: الفرع مسار عمل مستقل يتفرّع عن الأصل، تعمل فيه على ميزتك بلا أن تمسّ الفرع الرئيسي. فيبقى الرئيسي مستقراً صالحاً للنشر دائماً، ويكمل زملاؤك عملهم بلا أن يصطدموا بنصف ميزتك.',
          'وحين تنتهي، تُدمج تغييراتك في الرئيسي. والدمج يمر بسلام غالباً، فGit يعرف كيف يجمع تعديلات في مواضع مختلفة. لكن إن عدّل شخصان السطر نفسه، وقع تعارض ولا يستطيع Git ترجيح أحدهما — فيتوقف ويطلب منك أنت أن تقرر. والتعارض ليس خطأ ولا عطلاً، وإنما سؤال مشروع: أي التغييرين تريد؟'
        ],
        body_en: [
          'Before version control, people copied the project folder and named it "final", then "final 2", then "really final". That approach fails at three things: you cannot tell what changed between copies, you cannot merge two people work, and you cannot learn why an old decision was made.',
          'Git solves all three: it saves snapshots of your project over time, knows exactly what changed in each, and stores a message explaining why. So you can return to any snapshot, compare them, and learn who wrote a line, when and why.',
          'The workflow has three stages, not two, and this confuses most beginners: files sit in the working directory, then you choose what to record and move it to the staging area, then you commit the snapshot. Staging exists because you may have edited five files for two different reasons, so each reason becomes its own commit with its own message.',
          'A commit message is not ceremonial: it is what your colleague, or you a year later, reads to understand why this changed. A good message describes the reason rather than the action: "fix discount calculation for cancelled orders" is far more useful than "changes" or "fix". A log of poor messages makes project history worthless.',
          'Branches are the second power: a branch is an independent line of work splitting from the main one, where you build your feature without touching it. The main line stays stable and releasable, and colleagues continue without colliding with your half-finished feature.',
          'When done, your changes merge back. Merging usually passes peacefully, since Git knows how to combine edits in different places. But when two people edit the same line, a conflict arises and Git cannot prefer one, so it stops and asks you to decide. A conflict is neither an error nor a fault; it is a legitimate question: which of the two changes do you want?'
        ],
        table: {
          head_ar: ['المرحلة', 'أين الملف', 'ماذا يعني'],
          head_en: ['Stage', 'Where the file is', 'What it means'],
          rows: [
            ['مجلد العمل', 'على قرصك', 'عدّلته ولم تختره بعد'],
            ['منطقة التجهيز', 'مختار للتسجيل', 'قررت ضمّه للقطة القادمة'],
            ['اللقطة', 'مسجّلة في التاريخ', 'محفوظة برسالتها ويمكن الرجوع إليها'],
            ['الفرع', 'مسار عمل مستقل', 'تعمل بلا مسّ الفرع الرئيسي']
          ]
        },
        keyPoints_ar: [
          'Git يجيب عن ثلاثة: ما الذي تغيّر، ومن غيّره، ولماذا.',
          'الدورة ثلاث مراحل: مجلد العمل ثم التجهيز ثم اللقطة.',
          'التجهيز يتيح فصل تعديلات مختلفة الأسباب في لقطات مستقلة.',
          'الرسالة الجيدة تصف السبب لا الفعل، وسجل رديء يُفقد التاريخ قيمته.',
          'الفرع يبقي الرئيسي مستقراً صالحاً للنشر أثناء بناء الميزات.',
          'التعارض سؤال مشروع لا عطل: أي التغييرين تريد؟'
        ],
        keyPoints_en: [
          'Git answers three questions: what changed, who changed it, and why.',
          'The cycle has three stages: working directory, staging, commit.',
          'Staging lets you separate edits made for different reasons into distinct commits.',
          'A good message states the reason, not the action; a poor log wastes the history.',
          'Branches keep the main line stable and releasable while features are built.',
          'A conflict is a legitimate question, not a fault: which change do you want?'
        ],
        analogy_ar: 'تخيّل Git كاميرا تصوّر مشروعك كل ما طلبت، وتكتب تحت كل صورة سبب التقاطها. تقدر ترجع لأي صورة، وتقارن صورتين لترى ما تغيّر بالضبط. والفرع أن تصوّر خطاً موازياً من التجارب بلا أن تفسد الألبوم الرئيسي، فإن نجحت التجربة ضممت صورها للألبوم، وإن فشلت تركتها بلا أثر.',
        analogy_en: 'Picture Git as a camera photographing your project whenever you ask, writing under each photo why it was taken. You can return to any photo and compare two to see exactly what changed. A branch is photographing a parallel line of experiments without spoiling the main album: if the experiment works you fold its photos in, and if not you leave them with no trace.',
        terms: [
          { term: 'Commit', def_ar: 'لقطة مسجّلة من المشروع برسالة تشرح سببها.', def_en: 'A recorded project snapshot with a message explaining its reason.' },
          { term: 'Staging Area', def_ar: 'منطقة تختار فيها ما يدخل اللقطة القادمة.', def_en: 'Where you choose what enters the next commit.' },
          { term: 'Branch', def_ar: 'مسار عمل مستقل يتفرّع عن الأصل ويُدمج فيه لاحقاً.', def_en: 'An independent line of work splitting from the main and merged back later.' },
          { term: 'Merge Conflict', def_ar: 'تعديل شخصين للسطر نفسه فيتوقف Git ليقرر الإنسان.', def_en: 'Two people editing the same line, so Git stops for a human decision.' }
        ],
        cards: [
          { q_ar: 'ما الأسئلة الثلاثة التي يجيب عنها Git ؟', q_en: 'Which three questions does Git answer?', a_ar: 'ما الذي تغيّر، ومن غيّره، ولماذا غُيّر.', a_en: 'What changed, who changed it, and why.' },
          { q_ar: 'ما فائدة منطقة التجهيز؟', q_en: 'What is the staging area for?', a_ar: 'فصل تعديلات مختلفة الأسباب في لقطات مستقلة، لكل واحدة رسالتها.', a_en: 'Separating edits made for different reasons into distinct commits, each with its own message.' },
          { q_ar: 'ما صفة رسالة اللقطة الجيدة؟', q_en: 'What makes a good commit message?', a_ar: 'أن تصف سبب التغيير لا فعله، فيفهمها من يقرأ التاريخ لاحقاً.', a_en: 'It states the reason for the change rather than the action, so future readers understand.' },
          { q_ar: 'متى يقع تعارض الدمج؟', q_en: 'When does a merge conflict occur?', a_ar: 'حين يعدّل شخصان السطر نفسه، فلا يستطيع Git ترجيح أحدهما ويطلب قرار الإنسان.', a_en: 'When two people edit the same line, so Git cannot prefer one and asks a human to decide.' }
        ]
      },
      {
        title_ar: 'قواعد البيانات وSQL',
        title_en: 'Databases and SQL',
        lead_ar: 'قاعدة البيانات ليست ملفاً أكبر، وإنما نظام يضمن أن بياناتك تبقى صحيحة ومتاحة حتى مع آلاف العمليات المتزامنة.',
        lead_en: 'A database is not a bigger file but a system guaranteeing your data stays correct and available even under thousands of concurrent operations.',
        body_ar: [
          'قد تحفظ بيانات تطبيقك في ملف نصي، وستنجح ما دمت وحدك بعشرات السجلات. لكن حين يكتب مستخدمان في اللحظة نفسها، أو تنقطع الكهرباء في منتصف الكتابة، أو تريد كل الطلبات فوق مبلغ في شهر بعينه — عندها يفشل الملف وتظهر الحاجة لقاعدة بيانات.',
          'والقاعدة العلاقية تنظّم البيانات في جداول: كل جدول لنوع كيان واحد، وكل صف سجل، وكل عمود صفة بنوع محدد. والمفتاح الأساسي عمود يميّز كل صف بلا تكرار، والمفتاح الخارجي عمود يشير لمفتاح أساسي في جدول آخر فيربط الجدولين.',
          'وهذا الربط هو جوهر الفكرة: بدل تكرار بيانات العميل في كل طلب من طلباته، يُحفظ العميل مرة في جدوله ويشير كل طلب إليه. فإن تغيّر رقم هاتفه عُدّل في موضع واحد، ولا يبقى في النظام رقمان مختلفان للعميل نفسه.',
          'وSQL لغة مخاطبة القاعدة، وهي تصريحية لا إجرائية: تقول ما تريد لا كيف يُجلب. فتكتب «أعطني أسماء العملاء الذين طلباتهم فوق ألف مرتبة تنازلياً»، ويتولى محرّك القاعدة تحديد أكفأ طريق للتنفيذ. وهذا فرق جوهري عن البرمجة المعتادة التي تصف فيها الخطوات.',
          'وأربعة أوامر تغطي أغلب العمل: قراءة السجلات، وإضافة سجل، وتعديل سجل، وحذف سجل. وأخطر ما فيها التعديل والحذف بلا شرط تحديد: أمر حذف بلا شرط يمسح الجدول كله، وأمر تعديل بلا شرط يغيّر كل الصفوف. والعادة الواقية: اكتب شرط التحديد أولاً وجرّبه بأمر قراءة، فإذا رجع ما تقصده بالضبط حوّله لحذف أو تعديل.',
          'ومن أهم ما يميّز القاعدة عن الملف: المعاملة. فتحويل مبلغ بين حسابين خصمٌ وإضافة، ولو نجح الخصم وفشلت الإضافة ضاع المال. والمعاملة تجمع العمليتين في وحدة لا تتجزأ: إما أن تنجحا معاً أو تُلغيا معاً وترجع البيانات كما كانت. وهذي الضمانة وحدها سبب كافٍ لاستخدام قاعدة بيانات.'
        ],
        body_en: [
          'You may store your application data in a text file, and it will work while you are alone with dozens of records. But when two users write at the same moment, or power fails mid-write, or you want every order above an amount in one month, the file fails and a database becomes necessary.',
          'A relational database organises data into tables: one table per entity type, each row a record and each column an attribute with a defined type. A primary key is a column uniquely identifying each row, and a foreign key is a column pointing at a primary key in another table, linking the two.',
          'That link is the core idea: instead of repeating customer details on every one of their orders, the customer is stored once in their table and each order points to them. If their phone number changes it is edited in one place, and the system never holds two different numbers for the same customer.',
          'SQL is the language for addressing the database, and it is declarative rather than procedural: you state what you want, not how to fetch it. You write "give me the names of customers whose orders exceed a thousand, sorted descending" and the engine decides the most efficient path. That is a fundamental departure from ordinary programming where you describe the steps.',
          'Four commands cover most work: reading records, inserting, updating and deleting. The most dangerous are update and delete without a filtering condition: a delete with no condition wipes the whole table and an update with none changes every row. The protective habit: write the condition first and test it with a read, then convert it to a delete or update once it returns exactly what you mean.',
          'One thing above all separates a database from a file: the transaction. Transferring money between accounts is a debit and a credit, and if the debit succeeds while the credit fails the money vanishes. A transaction binds both into an indivisible unit: either both succeed or both roll back and data returns as it was. That guarantee alone justifies using a database.'
        ],
        table: {
          head_ar: ['المفهوم', 'ما هو', 'لماذا يهم'],
          head_en: ['Concept', 'What it is', 'Why it matters'],
          rows: [
            ['الجدول', 'صفوف وأعمدة لنوع كيان واحد', 'تنظيم واضح بأنواع محددة'],
            ['المفتاح الأساسي', 'عمود يميّز كل صف بلا تكرار', 'لا التباس بين سجلين'],
            ['المفتاح الخارجي', 'عمود يشير لجدول آخر', 'ربط بلا تكرار البيانات'],
            ['المعاملة', 'عمليات لا تتجزأ', 'إما الكل أو لا شيء'],
            ['الفهرس', 'بنية تسرّع البحث في عمود', 'قراءة أسرع بثمن كتابة أبطأ']
          ]
        },
        keyPoints_ar: [
          'القاعدة تلزم عند التزامن وضمان السلامة والاستعلام المركّب، لا عند كثرة البيانات وحدها.',
          'المفتاح الخارجي يربط الجداول فتُحفظ البيانات مرة واحدة لا مكررة.',
          'SQL تصريحية: تصف ما تريد ويحدد المحرّك كيف يجلبه.',
          'حذف أو تعديل بلا شرط يطال الجدول كله — جرّب الشرط بأمر قراءة أولاً.',
          'المعاملة تضمن أن العمليات المترابطة تنجح معاً أو تُلغى معاً.'
        ],
        keyPoints_en: [
          'A database becomes necessary for concurrency, integrity and complex queries, not merely data volume.',
          'A foreign key links tables so data is stored once rather than duplicated.',
          'SQL is declarative: you describe what you want and the engine decides how.',
          'A delete or update with no condition hits the entire table; test the condition with a read first.',
          'A transaction guarantees related operations succeed together or roll back together.'
        ],
        analogy_ar: 'تخيّل الملف النصي دفتراً واحداً يكتب فيه الجميع بالدور، فإن كتب اثنان معاً تشابكت السطور. والقاعدة نظام أرشيف بموظف ينظّم: يمنع تسجيل عميلين برقم واحد، ويرفض طلباً لعميل غير موجود، وإن انقطعت الكهرباء وسط تسجيل عملية ألغاها كاملة بدل أن يتركها نصفاً. المعاملة هي هذا الموظف: لا يقبل نصف عملية أبداً.',
        analogy_en: 'Picture a text file as one notebook everyone writes in by turns, so two writing at once tangle the lines. A database is an archive with a clerk who enforces order: refusing two customers under one number, rejecting an order for a nonexistent customer, and cancelling a half-written operation entirely if power fails rather than leaving it partial. The transaction is that clerk: never accepting half an operation.',
        terms: [
          { term: 'Primary Key', def_ar: 'عمود يميّز كل صف في الجدول بلا تكرار.', def_en: 'A column uniquely identifying each row in a table.' },
          { term: 'Foreign Key', def_ar: 'عمود يشير لمفتاح أساسي في جدول آخر فيربط الجدولين.', def_en: 'A column pointing at another table primary key, linking them.' },
          { term: 'Transaction', def_ar: 'مجموعة عمليات لا تتجزأ: تنجح كلها أو تُلغى كلها.', def_en: 'An indivisible group of operations: all succeed or all roll back.' },
          { term: 'Index', def_ar: 'بنية تسرّع البحث في عمود بثمن إبطاء الكتابة قليلاً.', def_en: 'A structure speeding column searches at the cost of slightly slower writes.' }
        ],
        cards: [
          { q_ar: 'متى تلزم قاعدة بيانات بدل ملف؟', q_en: 'When is a database necessary instead of a file?', a_ar: 'عند الكتابة المتزامنة، وضمان سلامة البيانات، والاستعلامات المركّبة — لا لمجرد كثرة البيانات.', a_en: 'For concurrent writes, data integrity and complex queries, not merely for data volume.' },
          { q_ar: 'ما معنى أن SQL لغة تصريحية؟', q_en: 'What does SQL being declarative mean?', a_ar: 'أنك تصف ما تريد لا كيف يُجلب، ويحدد محرّك القاعدة أكفأ طريق للتنفيذ.', a_en: 'You describe what you want, not how to fetch it, and the engine picks the efficient path.' },
          { q_ar: 'ما خطر أمر تعديل بلا شرط تحديد؟', q_en: 'What is the risk of an update with no condition?', a_ar: 'يغيّر كل صفوف الجدول لا الصف المقصود.', a_en: 'It changes every row in the table rather than the intended one.' },
          { q_ar: 'ما الذي تضمنه المعاملة في تحويل مبلغ؟', q_en: 'What does a transaction guarantee in a transfer?', a_ar: 'أن الخصم والإضافة ينجحان معاً أو يُلغيان معاً، فلا يضيع المال في المنتصف.', a_en: 'The debit and credit both succeed or both roll back, so money never vanishes midway.' }
        ]
      },
      {
        title_ar: 'ربط التطبيق بقاعدة البيانات وواجهات API',
        title_en: 'Connecting to the Database and APIs',
        lead_ar: 'الواجهة البرمجية عقد بين نظامين: تحدد ما يُطلب وكيف يُطلب وما يعود — فيتغيّر كل نظام داخلياً بلا أن يكسر الآخر.',
        lead_en: 'An API is a contract between two systems defining what can be requested, how, and what returns, so each side changes internally without breaking the other.',
        body_ar: [
          'تطبيقك لا يخزّن بياناته بنفسه، وإنما يخاطب قاعدة البيانات: يفتح اتصالاً، ويرسل استعلاماً، ويستقبل النتيجة، ويغلق الاتصال. وفتح الاتصال عملية مكلفة نسبياً، ولهذا تُستخدم بركة اتصالات: مجموعة اتصالات مفتوحة سلفاً تُعار للطلبات وتُعاد بلا فتح وإغلاق متكرر.',
          'وأخطر ما في مخاطبة القاعدة من التطبيق هو بناء الاستعلام بلصق مدخلات المستخدم فيه نصياً. فلو كتب المستخدم في خانة الاسم نصاً يُغلق الجملة ويضيف أمراً، نُفِّذ أمره ضمن استعلامك — وهذا هجوم حقن SQL. والوقاية ليست بتنظيف النص، وإنما باستخدام استعلام معلَّم يمرَّر فيه المدخل كقيمة لا كجزء من نص الاستعلام، فيستحيل أن يُقرأ كأمر.',
          'والواجهة البرمجية API عقد بين نظامين: تحدد ما الذي يمكن طلبه، وبأي شكل يُرسل الطلب، وما الذي يعود. وقيمتها أن النظامين يتغيّران داخلياً بحرية ما داما يحترمان العقد، فتبدّل قاعدة البيانات كلياً ولا يشعر من يستهلك واجهتك.',
          'وREST أسلوب شائع لبناء الواجهات يقوم على فكرة المورد: لكل نوع بيانات عنوان، والفعل يُحدَّد بطريقة الطلب لا بالعنوان. فطلب القراءة يجلب، والإرسال ينشئ، والتحديث يعدّل، والحذف يحذف. ولهذا لا يُكتب الفعل في العنوان — العنوان اسم مورد لا جملة أمر.',
          'ورموز الاستجابة جزء من العقد لا زينة: مئتان تعني نجاحاً، وأربعمئة تعني أن الطلب نفسه خاطئ فلا فائدة من إعادته كما هو، وأربعمئة وواحد تعني أنك غير معرَّف، وأربعمئة وثلاثة تعني معرَّفاً بلا صلاحية، وأربعمئة وأربعة تعني أن المورد غير موجود، وخمسمئة تعني خللاً في الخادم لا في طلبك. وقراءة الرمز تختصر نصف وقت تشخيص المشكلة.',
          'وقاعدة أمنية لا تُخالف: مفاتيح الوصول لا تُكتب داخل الكود ولا تُرفع مع المشروع، وإنما تُقرأ من متغيرات بيئة خارج الملفات المرفوعة. فالمفتاح المرفوع في مستودع عام يُكتشف آلياً خلال دقائق ويُستغل، وقد وقعت حوادث تسريب كبرى بهذا السبب وحده.'
        ],
        body_en: [
          'Your application does not store data itself; it addresses the database: opens a connection, sends a query, receives a result, closes. Opening a connection is relatively expensive, so a connection pool is used: a set of pre-opened connections lent to requests and returned rather than repeatedly opened and closed.',
          'The greatest danger in addressing a database from an application is building the query by pasting user input into it as text. If a user types something in the name field that closes the statement and appends a command, their command runs inside your query, and that is SQL injection. Prevention is not sanitising text but using a parameterised query where input is passed as a value rather than part of the query text, making it impossible to read as a command.',
          'An API is a contract between two systems defining what can be requested, in what shape, and what returns. Its value is that both sides change internally as long as they honour the contract, so you can replace the database entirely and consumers never notice.',
          'REST is a common style built on the resource idea: each data type has an address, and the verb is carried by the request method rather than the address. A read fetches, a post creates, an update modifies, a delete removes. So the verb is never written in the address, which names a resource rather than issuing a command.',
          'Response codes are part of the contract, not decoration: 200 means success, 400 means the request itself is wrong so resending it unchanged is pointless, 401 means unidentified, 403 means identified without permission, 404 means the resource does not exist, and 500 means a server fault rather than a problem with your request. Reading the code halves diagnosis time.',
          'One security rule is never broken: access keys are not written in code nor uploaded with the project, but read from environment variables outside uploaded files. A key pushed to a public repository is discovered automatically within minutes and exploited, and major leaks have happened for this reason alone.'
        ],
        table: {
          head_ar: ['الرمز', 'معناه', 'ماذا تفعل'],
          head_en: ['Code', 'Meaning', 'What to do'],
          rows: [
            ['200', 'نجاح', 'تابع عادة'],
            ['400', 'الطلب نفسه خاطئ', 'صحّح الطلب لا تُعده كما هو'],
            ['401', 'غير معرَّف', 'سجّل الدخول أو أرسل المفتاح'],
            ['403', 'معرَّف بلا صلاحية', 'اطلب الصلاحية، الإعادة لن تنفع'],
            ['404', 'المورد غير موجود', 'راجع العنوان أو المعرّف'],
            ['500', 'خلل في الخادم', 'المشكلة ليست في طلبك']
          ]
        },
        keyPoints_ar: [
          'بركة الاتصالات تتجنب كلفة فتح اتصال جديد لكل طلب.',
          'حقن SQL يُمنع بالاستعلام المعلَّم لا بتنظيف النص.',
          'الواجهة عقد: كل طرف يتغيّر داخلياً ما دام يحترمه.',
          'في REST العنوان اسم مورد، والفعل تحمله طريقة الطلب.',
          'رمز الاستجابة يفرّق بين خطأ طلبك وخطأ الخادم فيختصر التشخيص.',
          'المفاتيح في متغيرات بيئة لا في الكود ولا في المستودع.'
        ],
        keyPoints_en: [
          'A connection pool avoids the cost of opening a new connection per request.',
          'SQL injection is prevented by parameterised queries, not by sanitising text.',
          'An API is a contract: each side changes internally while honouring it.',
          'In REST the address names a resource and the method carries the verb.',
          'The response code separates your error from a server error and shortens diagnosis.',
          'Keys live in environment variables, never in code or the repository.'
        ],
        analogy_ar: 'تخيّل الواجهة نافذة طلبات في مطعم: تقول ما تريد بالشكل المتفق عليه وتستلم طلبك، ولا تدخل المطبخ ولا يهمك من الطبّاخ ولا كيف رُتّب المطبخ. ولهذا يقدر المطعم يغيّر مطبخه كاملاً بلا أن يتغيّر شيء عندك. أما حقن SQL فأن يكتب أحدهم في ورقة الطلب جملة تُقرأ أمراً للطبّاخ — والعلاج ألا تُقرأ الورقة أمراً أبداً، لا أن تُراجع كلماتها.',
        analogy_en: 'Picture an API as a restaurant order window: you state what you want in the agreed form and receive it, never entering the kitchen nor caring who cooks or how it is arranged. So the restaurant can replace its whole kitchen while nothing changes for you. SQL injection is someone writing on the order slip a sentence the cook reads as an instruction, and the cure is that the slip is never read as instructions rather than reviewing its words.',
        terms: [
          { term: 'API', def_ar: 'عقد يحدد ما يُطلب وكيف يُطلب وما يعود بين نظامين.', def_en: 'A contract defining what is requested, how, and what returns between systems.' },
          { term: 'SQL Injection', def_ar: 'إدخال المستخدم يُقرأ جزءاً من الاستعلام فيُنفَّذ كأمر.', def_en: 'User input read as part of the query and executed as a command.' },
          { term: 'Parameterised Query', def_ar: 'استعلام يُمرَّر فيه المدخل كقيمة لا كنص، فيستحيل تنفيذه كأمر.', def_en: 'A query passing input as a value rather than text, so it cannot execute as a command.' },
          { term: 'REST', def_ar: 'أسلوب واجهات يجعل لكل مورد عنواناً والفعل في طريقة الطلب.', def_en: 'An API style giving each resource an address with the verb in the method.' },
          { term: 'Environment Variable', def_ar: 'قيمة تُقرأ من خارج الكود، تُحفظ فيها المفاتيح السرية.', def_en: 'A value read from outside the code, where secret keys are kept.' }
        ],
        cards: [
          { q_ar: 'كيف يُمنع حقن SQL منعاً حقيقياً؟', q_en: 'How is SQL injection genuinely prevented?', a_ar: 'باستعلام معلَّم يُمرَّر فيه المدخل كقيمة لا كجزء من نص الاستعلام.', a_en: 'With a parameterised query passing input as a value rather than part of the query text.' },
          { q_ar: 'ما الفرق بين الرمزين 401 و403 ؟', q_en: 'Difference between 401 and 403?', a_ar: '401 يعني أنك غير معرَّف، و403 يعني معرَّفاً لكن بلا صلاحية لهذا المورد.', a_en: '401 means unidentified; 403 means identified but lacking permission for this resource.' },
          { q_ar: 'أين يوضع الفعل في واجهة REST ؟', q_en: 'Where does the verb live in a REST API?', a_ar: 'في طريقة الطلب لا في العنوان، فالعنوان اسم مورد.', a_en: 'In the request method, not the address, since the address names a resource.' },
          { q_ar: 'لماذا لا يُكتب المفتاح السري داخل الكود؟', q_en: 'Why is a secret key never written in code?', a_ar: 'لأنه يُرفع مع المشروع فيُكتشف آلياً خلال دقائق ويُستغل.', a_en: 'Because it ships with the project and is discovered automatically within minutes and exploited.' }
        ]
      },
      {
        title_ar: 'الاختبار الآلي والنشر',
        title_en: 'Automated Testing and Deployment',
        lead_ar: 'الاختبار الآلي شبكة أمان تخبرك أن تعديلك لم يكسر ما كان يعمل، والنشر خطوة تُؤتمت حتى تصير مملة — والملل هنا مطلوب.',
        lead_en: 'Automated tests are a safety net telling you your change did not break what worked, and deployment is automated until it becomes boring, and boring is the goal.',
        body_ar: [
          'الاختبار اليدوي يكفي في البداية: تشغّل التطبيق وتجرّب. لكنه يفشل بمجرد أن يكبر المشروع، لأن كل تعديل قد يكسر شيئاً بعيداً عنه، ولا أحد يعيد تجربة كل شي يدوياً في كل مرة. والاختبار الآلي كود يشغّل كودك ويتحقق أن ناتجه هو المتوقَّع.',
          'وثلاثة مستويات للاختبار: اختبار الوحدة يفحص دالة واحدة معزولة عن غيرها فهو سريع ودقيق التشخيص، واختبار التكامل يفحص عمل عدة أجزاء معاً كالتطبيق مع قاعدة البيانات، واختبار النظام يفحص المسار كاملاً من واجهة المستخدم إلى النتيجة. والقاعدة العملية: اختبارات وحدة كثيرة، وتكامل أقل، ونظام قليلة — لأن الأخيرة أبطأ وأهش.',
          'والاختبار الجيد يفحص السلوك لا التفاصيل الداخلية. فاختبار يتحقق أن الدالة ترجع القيمة الصحيحة يبقى صالحاً مهما أعدت كتابتها داخلياً، أما اختبار يتحقق أنها استدعت دالة أخرى بترتيب معيّن فسينكسر مع كل إعادة هيكلة ولو بقي السلوك سليماً — وهذي اختبارات هشّة تكلّف أكثر مما تنفع.',
          'ولا تنس الحالات الحدّية: أغلب الأخطاء لا تقع في الحالة المعتادة بل في أطرافها — قائمة فارغة، وقيمة صفرية أو سالبة، ونص طويل جداً، وحرف خاص في اسم. واختبار يفحص الحالة السعيدة وحدها يعطيك طمأنينة كاذبة.',
          'والتكامل المستمر أن تُشغَّل الاختبارات آلياً مع كل تغيير يُرفع، فيُكتشف الكسر خلال دقائق لا بعد أسبوع. والفائدة الحقيقية ليست في الاختبارات بحد ذاتها، وإنما في قِصَر المدة بين ارتكاب الخطأ واكتشافه: خطأ يُكتشف بعد دقيقتين تعرف سببه بالضبط، وخطأ يُكتشف بعد شهر تبحث عنه في مئة تغيير.',
          'والنشر نقل الكود من جهازك إلى بيئة يستخدمها الناس. وأول قاعدة فيه فصل البيئات: بيئة تطوير عندك، وبيئة اختبار تشبه الإنتاج، وبيئة إنتاج للمستخدمين. والنشر المؤتمت يُنفَّذ بأمر واحد فيصير متكرراً ومملاً وقابلاً للتراجع — وهذا أأمن بكثير من نشر يدوي نادر مرهق يخشاه الفريق فيؤجّله حتى تتراكم التغييرات.'
        ],
        body_en: [
          'Manual testing suffices at first: run the app and try it. It fails as soon as the project grows, because any change may break something far away and nobody re-tries everything by hand each time. An automated test is code that runs your code and verifies the result matches expectation.',
          'Testing has three levels: a unit test checks one function in isolation, so it is fast and pinpoints the fault; an integration test checks several parts working together, such as the app with the database; and a system test checks the whole path from interface to result. Practical rule: many unit tests, fewer integration, few system, because the last are slower and more brittle.',
          'A good test checks behaviour rather than internal details. A test verifying the returned value stays valid however you rewrite the internals, while one verifying that it called another function in a certain order breaks with every refactor even when behaviour is intact. Those brittle tests cost more than they give.',
          'Do not forget edge cases: most bugs live not in the ordinary case but at its edges, an empty list, a zero or negative value, very long text, a special character in a name. A test covering only the happy path grants false confidence.',
          'Continuous integration runs the tests automatically on every pushed change, so breakage surfaces in minutes rather than a week. The real benefit is not the tests themselves but the short gap between making an error and finding it: a fault found in two minutes has an obvious cause, while one found a month later is hunted through a hundred changes.',
          'Deployment moves code from your machine to an environment people use. Its first rule is separating environments: development on your machine, a staging environment resembling production, and production for users. Automated deployment runs with one command, so it becomes frequent, boring and reversible, which is far safer than a rare, exhausting manual release the team dreads and postpones until changes pile up.'
        ],
        table: {
          head_ar: ['النوع', 'ما يفحصه', 'سرعته', 'دقة التشخيص'],
          head_en: ['Type', 'What it checks', 'Speed', 'Diagnosis'],
          rows: [
            ['اختبار وحدة', 'دالة واحدة معزولة', 'سريع جداً', 'يحدد السطر تقريباً'],
            ['اختبار تكامل', 'أجزاء تعمل معاً', 'متوسط', 'يحدد الوصلة'],
            ['اختبار نظام', 'المسار كاملاً', 'بطيء', 'يخبرك أن شيئاً كُسر'],
            ['تكامل مستمر', 'الكل مع كل تغيير', '—', 'يقصّر زمن الاكتشاف']
          ]
        },
        keyPoints_ar: [
          'الاختبار الآلي كود يشغّل كودك ويتحقق أن ناتجه هو المتوقَّع.',
          'اختبارات وحدة كثيرة، وتكامل أقل، ونظام قليلة.',
          'افحص السلوك لا التفاصيل الداخلية، وإلا انكسرت اختباراتك مع كل إعادة هيكلة.',
          'أغلب الأخطاء في الحالات الحدّية لا في الحالة السعيدة.',
          'قيمة التكامل المستمر في قِصَر المدة بين ارتكاب الخطأ واكتشافه.',
          'النشر المؤتمت المتكرر أأمن من النشر اليدوي النادر المرهق.'
        ],
        keyPoints_en: [
          'An automated test is code that runs your code and verifies the expected result.',
          'Many unit tests, fewer integration tests, few system tests.',
          'Test behaviour rather than internals, or tests break with every refactor.',
          'Most bugs live in edge cases, not the happy path.',
          'The value of continuous integration is the short gap between error and discovery.',
          'Frequent automated deployment is safer than rare exhausting manual releases.'
        ],
        analogy_ar: 'تخيّل الاختبارات حزام الأمان: لا يمنعك من القيادة ولا يبطئك، لكنه يجعل الخطأ محتملاً بدل أن يكون كارثة. وتخيّل النشر اليدوي النادر عملية جراحية كبرى يخشاها الفريق فيؤجّلها حتى تتراكم المشاكل؛ والنشر المؤتمت المتكرر كجرعة دواء يومية صغيرة — مملة، وهذا بالضبط سبب أمانها.',
        analogy_en: 'Picture tests as a seatbelt: it neither stops you driving nor slows you, but it turns a mistake into something survivable rather than catastrophic. Picture rare manual deployment as major surgery the team dreads and postpones until problems accumulate, while frequent automated deployment is a small daily dose: boring, and that is precisely why it is safe.',
        terms: [
          { term: 'Unit Test', def_ar: 'اختبار يفحص دالة واحدة معزولة عن بقية النظام.', def_en: 'A test checking one function isolated from the rest.' },
          { term: 'Integration Test', def_ar: 'اختبار يفحص عمل عدة أجزاء معاً.', def_en: 'A test checking several parts working together.' },
          { term: 'CI', def_ar: 'تشغيل الاختبارات آلياً مع كل تغيير يُرفع.', def_en: 'Running tests automatically on every pushed change.' },
          { term: 'Staging', def_ar: 'بيئة تشبه الإنتاج تُجرَّب فيها التغييرات قبل المستخدمين.', def_en: 'An environment resembling production where changes are tried before users.' },
          { term: 'Rollback', def_ar: 'الرجوع لإصدار سابق يعمل بعد نشر فاشل.', def_en: 'Returning to a previously working release after a failed deployment.' }
        ],
        cards: [
          { q_ar: 'لماذا يُفضَّل فحص السلوك على فحص التفاصيل الداخلية؟', q_en: 'Why test behaviour rather than internals?', a_ar: 'لأن اختبار السلوك يبقى صالحاً بعد إعادة الهيكلة، واختبار التفاصيل ينكسر ولو بقي السلوك سليماً.', a_en: 'Behaviour tests survive refactoring, while internal-detail tests break even when behaviour is intact.' },
          { q_ar: 'أين تقع أغلب الأخطاء؟', q_en: 'Where do most bugs live?', a_ar: 'في الحالات الحدّية: قائمة فارغة، قيمة صفرية أو سالبة، نص طويل، حرف خاص.', a_en: 'In edge cases: an empty list, zero or negative values, very long text, special characters.' },
          { q_ar: 'ما القيمة الحقيقية للتكامل المستمر؟', q_en: 'What is the real value of continuous integration?', a_ar: 'قِصَر المدة بين ارتكاب الخطأ واكتشافه، فيسهل ربطه بسببه.', a_en: 'The short gap between making an error and finding it, which keeps the cause obvious.' },
          { q_ar: 'لماذا النشر المتكرر أأمن من النادر؟', q_en: 'Why is frequent deployment safer than rare?', a_ar: 'لأن كل نشرة تحمل تغييراً صغيراً يسهل تتبّعه والتراجع عنه، بخلاف نشرة تراكمت فيها التغييرات.', a_en: 'Each release carries a small change that is easy to trace and reverse, unlike one where changes piled up.' }
        ]
      }
    ],

    // ─────────── هندسة البرمجيات ───────────
    5: [
      {
        title_ar: 'مفهوم الهندسة ودورة حياة التطوير',
        title_en: 'Software Engineering and the SDLC',
        lead_ar: 'الفرق بين البرمجة والهندسة أن الأولى تُنتج كوداً يعمل، والثانية تُنتج نظاماً يبقى صالحاً وقابلاً للتغيير بعد سنوات وبأيدٍ كثيرة.',
        lead_en: 'Programming produces code that works; engineering produces a system that stays workable and changeable years later and in many hands.',
        body_ar: [
          'الكود الذي يعمل ليس غاية المشروع. فالبرنامج يُكتب مرة ويُقرأ ويُعدَّل عشرات المرات، ويعمل عليه أشخاص لم يحضروا كتابته، ويستمر سنوات تتغيّر فيها متطلباته. وهندسة البرمجيات هي ما يجعل هذا ممكناً: منهجية وأدوات وممارسات تجعل النظام قابلاً للفهم والتغيير والصيانة، لا مجرد قابل للتشغيل.',
          'ولهذا يُقال إن أغلب كلفة البرمجيات ليست في بنائها أول مرة بل في صيانتها بعد ذلك. ومن هنا تُقاس جودة القرار الهندسي بأثره بعد سنتين لا بسرعته اليوم: حلٌّ يوفّر يومين الآن ويكلّف شهراً كل سنة قرار سيئ ولو بدا ذكياً.',
          'ودورة حياة التطوير هي المراحل التي يمر بها أي نظام: جمع المتطلبات وتحليلها، ثم التصميم، ثم التنفيذ، ثم الاختبار، ثم النشر، ثم الصيانة. وهي ليست وصفة جامدة تُتبع مرة، وإنما إطار يصف طبيعة العمل مهما اختلف نموذج التنفيذ.',
          'وكلفة الخطأ ترتفع كلما تأخر اكتشافه، وهذي من أثبت الحقائق في المجال. فخطأ في المتطلبات يُكتشف في مرحلة المتطلبات يُصحَّح بتعديل جملة، والخطأ نفسه يُكتشف بعد النشر قد يستوجب إعادة بناء وحدة كاملة وترحيل بيانات وإخطار مستخدمين. ولهذا تُبذل عناية في المراحل الأولى ولو بدت بطيئة.',
          'والصيانة أطول مراحل الدورة وأكثرها كلفة، وهي أربعة أنواع: تصحيحية لإصلاح أخطاء ظهرت، وتكيّفية لمواكبة تغيّر البيئة كتحديث نظام أو قانون، وتحسينية لإضافة ما يطلبه المستخدمون، ووقائية لتحسين البنية قبل أن تصير عائقاً. والثالثة والرابعة أكثر من الأولى بكثير خلافاً لما يُظن.',
          'وأخيراً: الجودة ليست ما يُضاف في النهاية باختبار قبل النشر، وإنما ما يُبنى في كل مرحلة. فمشروع بمتطلبات غامضة وتصميم مرتبك لن يُنقذه اختبار مهما اشتد، لأن الاختبار يكشف الانحراف عن المطلوب ولا يصلح مطلوباً خاطئاً أصلاً.'
        ],
        body_en: [
          'Working code is not the goal of a project. Software is written once and read and modified dozens of times, worked on by people who never saw it written, and lives for years while its requirements shift. Software engineering makes that possible: methods, tools and practices making a system understandable, changeable and maintainable rather than merely runnable.',
          'Hence the saying that most software cost lies not in building it once but in maintaining it afterwards. So an engineering decision is judged by its effect in two years rather than its speed today: a solution saving two days now and costing a month every year is a bad decision however clever it looked.',
          'The development life cycle is the stages any system passes through: gathering and analysing requirements, design, implementation, testing, deployment, then maintenance. It is not a rigid recipe followed once but a frame describing the nature of the work whatever the execution model.',
          'The cost of a defect rises the later it is found, one of the best-established facts in the field. A requirements error caught during requirements is fixed by editing a sentence; the same error found after release may demand rebuilding a whole module, migrating data and notifying users. That is why care in the early stages pays even when it feels slow.',
          'Maintenance is the longest and costliest stage, and it has four kinds: corrective for defects that appeared, adaptive to follow a changing environment such as a system or legal update, perfective to add what users request, and preventive to improve structure before it becomes an obstacle. The third and fourth far exceed the first, contrary to common belief.',
          'Finally: quality is not something added at the end by testing before release; it is built at every stage. A project with vague requirements and confused design is not saved by testing however rigorous, because testing exposes deviation from what was asked and cannot repair a wrong ask.'
        ],
        table: {
          head_ar: ['المرحلة', 'سؤالها', 'مخرجها'],
          head_en: ['Stage', 'Its question', 'Its output'],
          rows: [
            ['المتطلبات', 'ما الذي يجب أن يفعله النظام؟', 'وثيقة متطلبات متفق عليها'],
            ['التصميم', 'كيف سيُبنى؟', 'معمارية ومخططات'],
            ['التنفيذ', 'كتابة النظام', 'كود عامل'],
            ['الاختبار', 'هل يفعل ما طُلب؟', 'تقرير جودة وأخطاء'],
            ['النشر', 'إيصاله للمستخدمين', 'إصدار في الإنتاج'],
            ['الصيانة', 'إبقاؤه صالحاً', 'تحديثات وإصلاحات']
          ]
        },
        keyPoints_ar: [
          'الهندسة تُنتج نظاماً قابلاً للتغيير، والبرمجة تُنتج كوداً يعمل.',
          'أغلب كلفة البرمجيات في الصيانة لا في البناء الأول.',
          'كلفة الخطأ ترتفع كلما تأخر اكتشافه، فالعناية المبكرة توفّر لا تُبطئ.',
          'الصيانة أربعة أنواع، والتحسينية والوقائية أكثر من التصحيحية.',
          'الجودة تُبنى في كل مرحلة ولا تُضاف باختبار في النهاية.'
        ],
        keyPoints_en: [
          'Engineering produces a changeable system; programming produces working code.',
          'Most software cost is maintenance, not the first build.',
          'Defect cost rises the later it is found, so early care saves rather than slows.',
          'Maintenance has four kinds, and perfective and preventive exceed corrective.',
          'Quality is built at every stage and cannot be added by testing at the end.'
        ],
        analogy_ar: 'تخيّل الفرق بين من يبني غرفة في حديقته بنفسه، ومن يبني عمارة سكنية. الأول يقرر ويغيّر ويهدم كما شاء. والثاني يحتاج مخططات ومواصفات وتراخيص، لا تعقيداً بلا سبب، بل لأن مئة أسرة ستسكن فيها عشرين سنة، وسيأتي مهندس آخر بعده يصلح ما بناه دون أن يكلّمه. هندسة البرمجيات هي هذا الفرق بالضبط.',
        analogy_en: 'Picture the difference between building a garden shed yourself and building an apartment block. The first lets you decide, change and demolish freely. The second needs plans, specifications and permits, not needless bureaucracy but because a hundred families will live there for twenty years and another engineer will one day repair your work without ever speaking to you. Software engineering is exactly that difference.',
        terms: [
          { term: 'SDLC', def_ar: 'دورة حياة تطوير النظام من المتطلبات إلى الصيانة.', def_en: 'The system development life cycle from requirements to maintenance.' },
          { term: 'Maintainability', def_ar: 'سهولة فهم النظام وتعديله بعد سنوات وبأيدٍ جديدة.', def_en: 'How easily a system is understood and changed years later by new hands.' },
          { term: 'Corrective Maintenance', def_ar: 'صيانة لإصلاح أخطاء ظهرت بعد التشغيل.', def_en: 'Maintenance fixing defects that appeared after release.' },
          { term: 'Preventive Maintenance', def_ar: 'تحسين البنية قبل أن تصير عائقاً أمام التغيير.', def_en: 'Improving structure before it obstructs future change.' }
        ],
        cards: [
          { q_ar: 'ما الفرق بين البرمجة وهندسة البرمجيات؟', q_en: 'Difference between programming and software engineering?', a_ar: 'البرمجة تُنتج كوداً يعمل، والهندسة تُنتج نظاماً يبقى قابلاً للفهم والتغيير والصيانة.', a_en: 'Programming produces working code; engineering produces a system that stays understandable, changeable and maintainable.' },
          { q_ar: 'لماذا تُبذل عناية في مرحلة المتطلبات رغم بطئها؟', q_en: 'Why invest care in requirements despite the slowness?', a_ar: 'لأن كلفة الخطأ ترتفع كلما تأخر اكتشافه، فخطأ متطلبات بعد النشر قد يعيد بناء وحدة كاملة.', a_en: 'Because defect cost rises the later it is found; a requirements error after release may rebuild a whole module.' },
          { q_ar: 'أي أنواع الصيانة أكثر وقوعاً؟', q_en: 'Which kind of maintenance is most common?', a_ar: 'التحسينية والتكيّفية، خلافاً للظن الشائع أن الصيانة إصلاح أخطاء فقط.', a_en: 'Perfective and adaptive, contrary to the common belief that maintenance is only bug fixing.' },
          { q_ar: 'هل ينقذ الاختبار مشروعاً بمتطلبات غامضة؟', q_en: 'Can testing save a project with vague requirements?', a_ar: 'لا، لأن الاختبار يكشف الانحراف عن المطلوب ولا يصلح مطلوباً خاطئاً أصلاً.', a_en: 'No, because testing exposes deviation from what was asked and cannot repair a wrong ask.' }
        ]
      },
      {
        title_ar: 'نماذج التطوير وجمع المتطلبات',
        title_en: 'Development Models and Requirements Gathering',
        lead_ar: 'النموذج يحدد متى تُتخذ القرارات، والمتطلبات هي أخطر ما في المشروع لأن خطأها لا يظهر إلا بعد البناء.',
        lead_en: 'The model decides when decisions are made, and requirements are the riskiest part of a project because their errors surface only after building.',
        body_ar: [
          'النموذج الشلالي ينفّذ المراحل بالترتيب: تُغلق المتطلبات ثم يبدأ التصميم، ويُغلق التصميم ثم يبدأ التنفيذ. وميزته الوضوح وسهولة التخطيط والتوثيق، وعيبه القاتل أن المستخدم لا يرى شيئاً حتى النهاية — فإن كان الفهم خاطئاً من البداية اكتُشف بعد استنفاد الميزانية.',
          'ولذلك يصلح الشلالي حين تكون المتطلبات معروفة ومستقرة ونادرة التغيّر، كنظام يخضع لمواصفة تنظيمية محددة سلفاً. أما حين تكون المتطلبات غامضة أو متغيّرة — وهو الغالب — فالإصرار عليه وصفة للفشل.',
          'والنماذج التكرارية تبني النظام على دورات قصيرة: كل دورة تنتج شيئاً يعمل ويُعرض ويُراجع، فيُصحَّح المسار مبكراً. وثمنها أن التخطيط بعيد المدى أصعب والتوثيق أخف، ومكسبها أن الخطأ في الفهم يُكتشف بعد أسابيع لا بعد سنة.',
          'أما المتطلبات فنوعان: وظيفية تصف ما يفعله النظام — يسجّل الطلب، يصدر فاتورة — وغير وظيفية تصف كيف يجب أن يكون: زمن الاستجابة، وعدد المستخدمين المتزامنين، ومستوى الأمان، وسهولة الاستخدام. وإهمال غير الوظيفية شائع ومكلف: نظام يفعل كل المطلوب لكنه يستغرق ثلاثين ثانية للاستجابة نظام فاشل عملياً.',
          'والمتطلب الجيد له صفات: واضح لا يحتمل تفسيرين، وقابل للقياس فيمكن الحكم على تحققه، وقابل للتنفيذ بالموارد المتاحة، وضروري لا مجرد أمنية. وعبارة مثل «يجب أن يكون النظام سريعاً» ليست متطلباً بل رغبة — والمتطلب أن تقول: يستجيب في أقل من ثانيتين لتسعة وتسعين بالمئة من الطلبات.',
          'وأدوات الجمع متعددة ولكل موضعها: المقابلة تكشف العمق، والاستبيان يغطي عدداً كبيراً، والملاحظة تكشف ما لا يقوله الناس لأنهم اعتادوه فلا ينتبهون له، وتحليل الأنظمة القائمة يكشف ما يعتمدون عليه فعلاً. والاعتماد على أداة واحدة يترك ثغرات، وأخطرها الاكتفاء بسؤال الإدارة دون من سيستخدم النظام يومياً.'
        ],
        body_en: [
          'The waterfall model runs stages in order: requirements close, then design begins; design closes, then implementation. Its merits are clarity and easy planning and documentation; its fatal flaw is that the user sees nothing until the end, so a wrong understanding from the start is discovered after the budget is spent.',
          'So waterfall suits requirements that are known, stable and rarely changing, such as a system bound by a predefined regulatory specification. When requirements are vague or shifting, which is the norm, insisting on it is a recipe for failure.',
          'Iterative models build in short cycles: each produces something working that is shown and reviewed, correcting course early. The price is harder long-range planning and lighter documentation; the gain is that a misunderstanding surfaces in weeks rather than a year.',
          'Requirements come in two kinds: functional describing what the system does, such as recording an order or issuing an invoice, and non-functional describing how it must be: response time, concurrent users, security level, usability. Neglecting the non-functional is common and costly: a system doing everything asked but taking thirty seconds to respond has failed in practice.',
          'A good requirement has traits: unambiguous, measurable so its fulfilment can be judged, feasible with available resources, and necessary rather than a wish. A phrase like "the system should be fast" is not a requirement but a desire; the requirement is that it responds under two seconds for ninety-nine percent of requests.',
          'Gathering tools are several and each has its place: interviews reveal depth, surveys cover numbers, observation reveals what people never say because habit made it invisible, and analysing existing systems reveals what they actually depend on. Relying on one tool leaves gaps, and the most dangerous is asking management alone without those who will use the system daily.'
        ],
        table: {
          head_ar: ['النموذج', 'متى يصلح', 'أكبر خطر فيه'],
          head_en: ['Model', 'When it fits', 'Its biggest risk'],
          rows: [
            ['الشلالي', 'متطلبات مستقرة معروفة سلفاً', 'اكتشاف سوء الفهم بعد استنفاد الميزانية'],
            ['التكراري', 'متطلبات غامضة أو متغيّرة', 'صعوبة التخطيط بعيد المدى'],
            ['النموذج الأولي', 'حاجة لتصوّر الشكل قبل البناء', 'ظن العميل أن النموذج منتج جاهز'],
            ['الحلزوني', 'مشاريع عالية المخاطر', 'ثقل التحليل المتكرر للمخاطر']
          ]
        },
        keyPoints_ar: [
          'الشلالي يصلح للمتطلبات المستقرة، ويفشل حين تتغيّر أو تغمض.',
          'التكراري يكشف سوء الفهم بعد أسابيع لا بعد سنة.',
          'المتطلبات غير الوظيفية تُهمَل كثيراً وإهمالها يُفشل نظاماً كامل الوظائف.',
          'المتطلب الجيد قابل للقياس: «سريع» رغبة، و«أقل من ثانيتين» متطلب.',
          'سؤال الإدارة وحدها دون المستخدم اليومي أخطر ثغرات الجمع.'
        ],
        keyPoints_en: [
          'Waterfall suits stable requirements and fails when they shift or blur.',
          'Iterative models expose misunderstanding in weeks rather than a year.',
          'Non-functional requirements are widely neglected, and neglecting them fails a fully functional system.',
          'A good requirement is measurable: "fast" is a wish, "under two seconds" is a requirement.',
          'Asking management alone without daily users is the most dangerous gathering gap.'
        ],
        analogy_ar: 'تخيّل بناء بيت بالنموذج الشلالي: يوقّع صاحبه المخطط ولا يراه إلا مكتملاً بعد سنة، فإن كان يظن غرفة المعيشة أكبر فالجدران مصبوبة. والتكراري أن يزور الموقع كل أسبوعين فيرى الأساس ثم الجدران ثم التقسيم، فيصحّح فهمه قبل أن يُصبّ الخرسانة. والمتطلب غير القابل للقياس مثل أن يقول: «أريد البيت مريحاً» — لا أحد يعرف متى تحقق.',
        analogy_en: 'Picture building a house the waterfall way: the owner signs the plan and sees nothing until it is finished a year later, so if they imagined a larger living room the walls are already poured. Iterative means visiting every fortnight, seeing the foundation, then walls, then partitions, correcting understanding before the concrete sets. An unmeasurable requirement is like saying "I want the house comfortable": nobody knows when it is met.',
        terms: [
          { term: 'Waterfall', def_ar: 'نموذج ينفّذ المراحل بالترتيب ولا يعود لسابقتها.', def_en: 'A model running stages in order with no return to earlier ones.' },
          { term: 'Iterative', def_ar: 'نموذج يبني على دورات قصيرة كل واحدة تنتج شيئاً يعمل.', def_en: 'A model building in short cycles each producing something working.' },
          { term: 'Functional Requirement', def_ar: 'متطلب يصف ما يفعله النظام.', def_en: 'A requirement describing what the system does.' },
          { term: 'Non-functional Requirement', def_ar: 'متطلب يصف كيف يجب أن يكون النظام: أداءً وأماناً وسهولة.', def_en: 'A requirement describing how the system must be: performance, security, usability.' }
        ],
        cards: [
          { q_ar: 'ما أكبر عيب في النموذج الشلالي؟', q_en: 'What is waterfall biggest flaw?', a_ar: 'أن المستخدم لا يرى شيئاً حتى النهاية، فيُكتشف سوء الفهم بعد استنفاد الميزانية.', a_en: 'The user sees nothing until the end, so misunderstanding surfaces after the budget is spent.' },
          { q_ar: 'أعطِ مثالاً على متطلب غير وظيفي.', q_en: 'Give an example of a non-functional requirement.', a_ar: 'زمن الاستجابة أو عدد المستخدمين المتزامنين أو مستوى الأمان.', a_en: 'Response time, concurrent user count, or security level.' },
          { q_ar: 'لماذا لا تُعد عبارة «النظام سريع» متطلباً؟', q_en: 'Why is "the system is fast" not a requirement?', a_ar: 'لأنها غير قابلة للقياس، فلا يمكن الحكم على تحققها؛ والمتطلب يحدد رقماً كأقل من ثانيتين.', a_en: 'Because it is unmeasurable, so fulfilment cannot be judged; a requirement states a number such as under two seconds.' },
          { q_ar: 'ما أخطر ثغرة في جمع المتطلبات؟', q_en: 'What is the most dangerous requirements-gathering gap?', a_ar: 'الاكتفاء بسؤال الإدارة دون من سيستخدم النظام يومياً.', a_en: 'Asking management alone without the people who will use the system daily.' }
        ]
      },
      {
        title_ar: 'التحليل والتصميم المعماري وUML',
        title_en: 'Analysis, Architecture and UML',
        lead_ar: 'التصميم المعماري قرارات يصعب تغييرها لاحقاً، ومخططات UML لغة مشتركة تكشف الخلل قبل أن يُكتب سطر.',
        lead_en: 'Architecture is the set of decisions hardest to change later, and UML diagrams are a shared language exposing flaws before a line is written.',
        body_ar: [
          'بعد جمع المتطلبات يأتي التحليل: تحويل ما قاله الناس بلغتهم إلى وصف دقيق منظم — ما الكيانات وما العلاقات بينها وما القواعد التي تحكمها. والتحليل يكشف تناقضات لم يلحظها أحد: قسم يقول إن الطلب يُلغى قبل الشحن، وآخر يعمل بأن الإلغاء ممكن بعده. وكشف هذا التناقض على الورق أرخص ألف مرة من كشفه في الإنتاج.',
          'والتصميم المعماري هو القرارات الكبرى في بنية النظام: من أي مكوّنات يتكوّن، وكيف تتخاطب، وأين تُحفظ البيانات، وأين ترسم الحدود بين الأجزاء. وما يميّز القرار المعماري عن غيره أن تغييره لاحقاً مكلف جداً — فتبديل مكتبة يوم عمل، وتبديل بنية النظام كله قد يعني إعادة كتابة.',
          'والمعمارية الطبقية أشهر الأنماط: طبقة عرض للواجهة، وطبقة منطق للقواعد، وطبقة بيانات للتخزين. وقاعدتها أن كل طبقة تخاطب التي تحتها فقط، ولا تقفز طبقة العرض إلى قاعدة البيانات مباشرة. وكسر هذي القاعدة يبدو اختصاراً بريئاً ثم يتحوّل لفوضى: تتفرّق قواعد العمل بين الواجهات فيصير تعديل قاعدة واحدة بحثاً في عشرة ملفات.',
          'والمعمارية الأحادية تجعل النظام كتلة واحدة تُنشر معاً: أبسط وأسهل بداية، وتصلح لأغلب المشاريع. والخدمات المصغّرة تفصله لخدمات مستقلة تُنشر وتُوسَّع كل واحدة وحدها: تحل مشاكل حقيقية في الأنظمة الضخمة، لكنها تجلب تعقيداً شبكياً وتشغيلياً كبيراً — واختيارها لمشروع صغير خطأ شائع يكلّف أضعاف ما يوفّر.',
          'وUML لغة تمثيل مرئي موحّدة تصف النظام بمخططات. وأشهرها ثلاثة: مخطط الكلاسات يصف البنية الساكنة من كلاسات وعلاقات، ومخطط حالات الاستخدام يصف ما يفعله كل نوع مستخدم بالنظام، ومخطط التتابع يصف تبادل الرسائل بين الأجزاء عبر الزمن لسيناريو محدد.',
          'وقيمة المخطط في أنه لغة مشتركة تُقرأ في دقيقة بدل صفحات وصف، وأنه يكشف الخلل مبكراً: مخطط تتابع تظهر فيه خمس عشرة رسالة لعملية بسيطة يقول لك إن التصميم معقّد قبل أن تكتب سطراً. لكن احذر الإفراط: مخططات تفصيلية لكل شيء تتقادم بسرعة ويكذب توثيقها على واقع الكود، والقاعدة العملية أن ترسم ما يحتاج نقاشاً أو ما سيقرؤه غيرك، لا كل شيء.'
        ],
        body_en: [
          'After gathering comes analysis: turning what people said in their own words into a precise structured description of entities, relations and governing rules. Analysis exposes contradictions nobody noticed: one department says an order cancels before shipping while another works on the assumption that cancellation is possible after. Catching that on paper is a thousand times cheaper than catching it in production.',
          'Architecture is the major structural decisions: which components exist, how they communicate, where data lives, and where the boundaries between parts are drawn. What sets an architectural decision apart is that changing it later is very expensive: swapping a library is a day, swapping the system structure may mean a rewrite.',
          'Layered architecture is the best-known pattern: a presentation layer, a logic layer for rules, and a data layer for storage. Its rule is that each layer talks only to the one below, and presentation never jumps straight to the database. Breaking that rule looks like an innocent shortcut then becomes chaos: business rules scatter across interfaces so changing one rule means searching ten files.',
          'A monolith keeps the system one block deployed together: simpler, easier to start, and suitable for most projects. Microservices split it into independent services deployed and scaled separately: they solve real problems in very large systems but bring heavy network and operational complexity, and choosing them for a small project is a common mistake costing multiples of what it saves.',
          'UML is a unified visual language describing a system with diagrams. Three are most used: a class diagram describing static structure of classes and relations, a use-case diagram describing what each user type does with the system, and a sequence diagram describing message exchange between parts over time for a specific scenario.',
          'A diagram value is being a shared language read in a minute instead of pages of prose, and exposing flaws early: a sequence diagram showing fifteen messages for a simple operation tells you the design is complex before you write a line. But beware excess: detailed diagrams for everything age quickly and their documentation starts lying about the code. The practical rule is to draw what needs discussion or what others will read, not everything.'
        ],
        table: {
          head_ar: ['المخطط', 'ما يصفه', 'متى يفيد'],
          head_en: ['Diagram', 'What it describes', 'When it helps'],
          rows: [
            ['الكلاسات', 'البنية الساكنة والعلاقات', 'تصميم النموذج قبل الكتابة'],
            ['حالات الاستخدام', 'ما يفعله كل مستخدم بالنظام', 'الاتفاق على النطاق مع العميل'],
            ['التتابع', 'تبادل الرسائل عبر الزمن', 'كشف تعقيد سيناريو قبل بنائه'],
            ['النشاط', 'تدفّق العملية وقراراتها', 'توضيح إجراء عمل متشعّب']
          ]
        },
        keyPoints_ar: [
          'التحليل يكشف تناقضات المتطلبات على الورق قبل الإنتاج.',
          'القرار المعماري ما يصعب تغييره لاحقاً، فيستحق وقتاً أطول.',
          'في المعمارية الطبقية لا تقفز طبقة العرض إلى البيانات مباشرة.',
          'الأحادية تكفي أغلب المشاريع، والخدمات المصغّرة تجلب تعقيداً حقيقياً.',
          'ارسم ما يحتاج نقاشاً أو ما سيقرؤه غيرك، لا كل شيء.'
        ],
        keyPoints_en: [
          'Analysis exposes requirement contradictions on paper before production.',
          'An architectural decision is one hard to change later, so it deserves more time.',
          'In a layered architecture, presentation never reaches data directly.',
          'A monolith suffices for most projects; microservices bring real complexity.',
          'Draw what needs discussion or what others will read, not everything.'
        ],
        analogy_ar: 'تخيّل المعمارية قرار عدد الأدوار وموضع الأعمدة في مبنى: تغيير لون الجدار سهل في أي وقت، ونقل عمود بعد الصبّ يعني هدم نصف المبنى. ولهذا يُعطى قرار الأعمدة وقتاً وليس لون الدهان. والمخطط المعماري هو ما يجعل مهندساً آخر يفهم مبناك في دقائق بدل أن يمشي فيه شهراً ليعرف ما يحمله.',
        analogy_en: 'Picture architecture as deciding floor count and column positions in a building: repainting a wall is easy anytime, while moving a column after the pour means demolishing half the building. So the column decision earns the time, not the paint colour. An architectural diagram is what lets another engineer understand your building in minutes rather than walking it for a month to learn what carries what.',
        terms: [
          { term: 'Architecture', def_ar: 'القرارات الكبرى في بنية النظام التي يصعب تغييرها لاحقاً.', def_en: 'The major structural decisions that are hard to change later.' },
          { term: 'Layered Architecture', def_ar: 'فصل النظام لطبقات عرض ومنطق وبيانات تخاطب كل منها ما تحتها.', def_en: 'Separating a system into presentation, logic and data layers each talking to the one below.' },
          { term: 'Monolith', def_ar: 'نظام يُبنى ويُنشر كتلة واحدة.', def_en: 'A system built and deployed as one block.' },
          { term: 'Sequence Diagram', def_ar: 'مخطط يصف تبادل الرسائل بين الأجزاء عبر الزمن لسيناريو محدد.', def_en: 'A diagram describing message exchange between parts over time for a scenario.' }
        ],
        cards: [
          { q_ar: 'ما الذي يميّز القرار المعماري عن غيره؟', q_en: 'What sets an architectural decision apart?', a_ar: 'أن تغييره لاحقاً مكلف جداً وقد يعني إعادة كتابة، فيستحق وقتاً أطول في التفكير.', a_en: 'Changing it later is very expensive and may mean a rewrite, so it deserves more thought.' },
          { q_ar: 'ما ضرر قفز طبقة العرض إلى قاعدة البيانات؟', q_en: 'What harm comes from presentation reaching the database directly?', a_ar: 'تتفرّق قواعد العمل بين الواجهات، فيصير تعديل قاعدة واحدة بحثاً في عشرة ملفات.', a_en: 'Business rules scatter across interfaces, so changing one rule means searching ten files.' },
          { q_ar: 'متى تكون الخدمات المصغّرة خطأً؟', q_en: 'When are microservices a mistake?', a_ar: 'في المشاريع الصغيرة، إذ تجلب تعقيداً شبكياً وتشغيلياً يفوق ما توفّره.', a_en: 'In small projects, where they bring network and operational complexity exceeding their benefit.' },
          { q_ar: 'ما القاعدة العملية في رسم المخططات؟', q_en: 'What is the practical rule for drawing diagrams?', a_ar: 'ارسم ما يحتاج نقاشاً أو ما سيقرؤه غيرك، فالمخططات التفصيلية لكل شيء تتقادم وتكذب.', a_en: 'Draw what needs discussion or what others will read, since exhaustive diagrams age and start lying.' }
        ]
      },
      {
        title_ar: 'الأنماط المعمارية وضمان الجودة والاختبارات',
        title_en: 'Architectural Patterns, QA and Testing',
        lead_ar: 'ضمان الجودة عملية تمنع الخلل، والاختبار نشاط يكشفه — والفرق بينهما ليس لفظياً بل يحدد أين تُنفق جهدك.',
        lead_en: 'Quality assurance is a process preventing defects and testing is an activity detecting them, and the difference is not verbal: it decides where your effort goes.',
        body_ar: [
          'نمط MVC من أشهر الأنماط المعمارية: يفصل النموذج الذي يحمل البيانات وقواعدها، عن العرض الذي يظهر للمستخدم، عن المتحكم الذي يستقبل الطلب ويوجّهه. وفائدته أن تغيير شكل الواجهة لا يمسّ قواعد العمل، وأن قواعد العمل تُختبر بلا واجهة أصلاً.',
          'ومن الأنماط أيضاً المعمارية الموجّهة بالأحداث: يُطلق جزء حدثاً ويستجيب له من يعنيه بلا أن يعرف المُطلِق من هم. وتصلح لأنظمة تتفاعل فيها أجزاء كثيرة، وثمنها صعوبة تتبّع المسار: من الصعب أن تعرف ماذا حدث ولماذا حين لا يستدعي أحد أحداً مباشرة.',
          'وضمان الجودة والاختبار ليسا مترادفين. فضمان الجودة عملية وقائية تشمل المعايير والمراجعات والقوالب والتدريب — هدفها ألا يقع الخلل أصلاً. والاختبار نشاط كشفي يجد الخلل بعد وقوعه. ومشروع يعتمد على الاختبار وحده يظل يصلح أعراضاً بلا أن يعالج ما ينتجها.',
          'ومراجعة الكود من أرخص ممارسات ضمان الجودة وأعلاها عائداً: عين ثانية تقرأ التغيير قبل دمجه. وقيمتها ليست في اصطياد الأخطاء فحسب، بل في نشر المعرفة بالنظام بين الفريق وتوحيد الأسلوب. والمراجعة الجيدة تسأل عن سبب القرار ولا تكتفي بالتعليق على التنسيق.',
          'وللاختبارات أنواع بحسب الغرض لا بحسب المستوى فقط: اختبار الانحدار يعيد تشغيل ما كان يعمل ليتأكد أن التعديل لم يكسره، واختبار القبول يتحقق أن النظام يحقق ما طلبه العميل بلغته، واختبار الأداء يقيس السلوك تحت حمل، واختبار الأمان يبحث عن الثغرات، واختبار قابلية الاستخدام يراقب مستخدماً حقيقياً وهو يحاول إنجاز مهمة.',
          'واختبار الانحدار أكثرها إهمالاً وأشدها ضرراً عند إهماله: أكثر ما يشتكيه المستخدمون ليس ميزة جديدة معطوبة، بل ميزة قديمة كانت تعمل ثم توقفت. ولهذا كل إصلاح خطأ يستحق اختباراً يثبت أنه لن يعود — وهذي عادة تفرّق بين فريق يتحسّن وفريق يدور في مكانه.'
        ],
        body_en: [
          'MVC is among the best-known architectural patterns: it separates the model holding data and rules, the view shown to the user, and the controller receiving and routing requests. Its benefit is that changing the interface never touches business rules, and business rules can be tested with no interface at all.',
          'Another is event-driven architecture: one part emits an event and whoever cares responds, without the emitter knowing who they are. It suits systems where many parts interact, at the price of hard tracing: knowing what happened and why is difficult when nobody calls anybody directly.',
          'Quality assurance and testing are not synonyms. QA is a preventive process covering standards, reviews, templates and training, aiming for defects never to occur. Testing is a detective activity finding defects after they occur. A project relying on testing alone keeps treating symptoms without addressing what produces them.',
          'Code review is among the cheapest QA practices with the highest return: a second pair of eyes reading a change before it merges. Its value is not only catching bugs but spreading system knowledge across the team and unifying style. A good review asks why a decision was made rather than commenting on formatting.',
          'Tests also have kinds by purpose, not only by level: regression testing reruns what worked to confirm the change did not break it, acceptance testing verifies the system meets what the client asked in their own terms, performance testing measures behaviour under load, security testing hunts vulnerabilities, and usability testing watches a real user attempting a task.',
          'Regression testing is the most neglected and the most damaging when neglected: what users complain about most is not a broken new feature but an old one that used to work and stopped. So every bug fix deserves a test proving it will not return, a habit separating a team that improves from one running in place.'
        ],
        table: {
          head_ar: ['النشاط', 'طبيعته', 'يقع متى'],
          head_en: ['Activity', 'Its nature', 'When it happens'],
          rows: [
            ['ضمان الجودة', 'وقائي يمنع وقوع الخلل', 'طوال المشروع'],
            ['الاختبار', 'كشفي يجد الخلل الواقع', 'بعد بناء الجزء'],
            ['مراجعة الكود', 'وقائي بعين ثانية', 'قبل الدمج'],
            ['اختبار الانحدار', 'يحمي ما كان يعمل', 'مع كل تغيير'],
            ['اختبار القبول', 'يتحقق من رضا العميل', 'قبل التسليم']
          ]
        },
        keyPoints_ar: [
          'MVC يفصل البيانات عن العرض عن التوجيه، فتُختبر القواعد بلا واجهة.',
          'المعمارية الموجّهة بالأحداث مرنة، وثمنها صعوبة تتبّع المسار.',
          'ضمان الجودة يمنع، والاختبار يكشف — والاعتماد على الاختبار وحده يعالج الأعراض.',
          'مراجعة الكود تنشر المعرفة وتوحّد الأسلوب لا تصطاد الأخطاء فقط.',
          'أكثر شكاوى المستخدمين من ميزة قديمة توقفت، فاختبار الانحدار ضرورة.',
          'كل إصلاح خطأ يستحق اختباراً يثبت أنه لن يعود.'
        ],
        keyPoints_en: [
          'MVC separates data, view and routing so rules are testable with no interface.',
          'Event-driven architecture is flexible at the price of hard tracing.',
          'QA prevents while testing detects; relying on testing alone treats symptoms.',
          'Code review spreads knowledge and unifies style rather than only catching bugs.',
          'Users complain most about an old feature that stopped, so regression testing is essential.',
          'Every bug fix deserves a test proving it will not return.'
        ],
        analogy_ar: 'تخيّل مصنع أغذية. الاختبار أن تفحص عيّنة من المنتج النهائي وترمي الفاسد. وضمان الجودة أن تضبط حرارة المستودع وتدرّب العمال وتعقّم الخطوط، فلا يفسد المنتج أصلاً. والمصنع الذي يفحص فقط سيرمي كل يوم ولن يعرف لماذا يفسد. واختبار الانحدار أن تتأكد أن الوصفة الجديدة لم تفسد المنتج القديم الذي يشتريه الناس منذ سنوات.',
        analogy_en: 'Picture a food factory. Testing is inspecting samples of the finished product and discarding the spoiled. QA is controlling warehouse temperature, training workers and sterilising lines so nothing spoils in the first place. A factory that only inspects will discard daily and never learn why. Regression testing is confirming the new recipe did not ruin the old product people have bought for years.',
        terms: [
          { term: 'MVC', def_ar: 'نمط يفصل النموذج عن العرض عن المتحكم.', def_en: 'A pattern separating model, view and controller.' },
          { term: 'Quality Assurance', def_ar: 'عملية وقائية تمنع وقوع الخلل بالمعايير والمراجعات.', def_en: 'A preventive process stopping defects through standards and reviews.' },
          { term: 'Regression Test', def_ar: 'اختبار يعيد فحص ما كان يعمل ليتأكد أن التعديل لم يكسره.', def_en: 'A test rerunning what worked to confirm a change did not break it.' },
          { term: 'Acceptance Test', def_ar: 'اختبار يتحقق أن النظام يحقق ما طلبه العميل بلغته.', def_en: 'A test verifying the system meets what the client asked in their terms.' },
          { term: 'Code Review', def_ar: 'قراءة عين ثانية للتغيير قبل دمجه.', def_en: 'A second pair of eyes reading a change before it merges.' }
        ],
        cards: [
          { q_ar: 'ما الفرق بين ضمان الجودة والاختبار؟', q_en: 'Difference between QA and testing?', a_ar: 'ضمان الجودة وقائي يمنع وقوع الخلل، والاختبار كشفي يجده بعد وقوعه.', a_en: 'QA is preventive, stopping defects from occurring; testing is detective, finding them after.' },
          { q_ar: 'ما فائدة MVC في الاختبار؟', q_en: 'How does MVC help testing?', a_ar: 'يفصل قواعد العمل عن الواجهة فتُختبر القواعد بلا واجهة أصلاً.', a_en: 'It separates business rules from the interface so rules are testable with no interface.' },
          { q_ar: 'لماذا يُعد اختبار الانحدار ضرورة لا رفاهية؟', q_en: 'Why is regression testing essential rather than optional?', a_ar: 'لأن أكثر شكاوى المستخدمين من ميزة قديمة كانت تعمل ثم توقفت بعد تعديل.', a_en: 'Because users complain most about an old working feature that stopped after a change.' },
          { q_ar: 'ما الذي تسأل عنه المراجعة الجيدة؟', q_en: 'What does a good code review ask about?', a_ar: 'عن سبب القرار ومدى وضوحه، لا عن التنسيق الذي تتولاه الأدوات.', a_en: 'The reason and clarity of a decision, not formatting which tools handle.' }
        ]
      },
      {
        title_ar: 'الصيانة وإدارة التغيير وAgile وScrum',
        title_en: 'Maintenance, Change Management, Agile and Scrum',
        lead_ar: 'التغيير ليس فشلاً في التخطيط بل طبيعة المشاريع، وAgile منهج يبني على هذي الحقيقة بدل مقاومتها.',
        lead_en: 'Change is not a planning failure but the nature of projects, and Agile builds on that fact instead of resisting it.',
        body_ar: [
          'ينتهي البناء ويبدأ الجزء الأطول: الصيانة. والفهم الشائع أنها إصلاح أخطاء، والواقع أن أكثرها إضافة ما يطلبه المستخدمون بعد أن استخدموا النظام فعلاً وعرفوا ما ينقصهم، ومواكبة تغيّر البيئة من أنظمة تشغيل وقوانين وتكاملات. وهذا يفسّر لماذا يجب أن يُبنى النظام قابلاً للتغيير من أول يوم.',
          'والدين التقني استعارة دقيقة: حين تختار حلاً سريعاً تعرف أنه ليس الأمثل، فأنت تقترض وقتاً تدفعه لاحقاً بفوائد. والاقتراض ليس خطأ في ذاته — قد يكون قراراً صائباً للحاق بموعد — لكن الخطأ ألا تسجّله ولا تسدده أبداً، فتتراكم الفوائد حتى يصير كل تغيير بسيط مكلفاً.',
          'وإدارة التغيير عملية منظمة لطلبات التعديل: يُقدَّم الطلب، ويُقيَّم أثره وكلفته، ويُقرَّر قبوله أو تأجيله، ثم يُنفَّذ ويُوثَّق. وبدونها يقع «زحف النطاق»: طلبات صغيرة تُقبَل شفهياً واحدة بعد أخرى حتى يتضاعف المشروع بلا زيادة وقت ولا ميزانية — وهو من أشهر أسباب فشل المشاريع.',
          'وAgile ليس منهجية واحدة بل مجموعة قيم: الأفراد والتفاعل قبل العمليات والأدوات، والبرنامج العامل قبل التوثيق الشامل، والتعاون مع العميل قبل التفاوض التعاقدي، والاستجابة للتغيير قبل اتباع الخطة. ولاحظ أن البنود لا تُلغي الطرف الثاني، وإنما ترجّح الأول عند التعارض — وسوء الفهم هذا أنتج فرقاً تظن Agile يعني بلا توثيق ولا خطة.',
          'وScrum إطار عملي يطبّق هذي القيم: العمل في سباقات قصيرة محددة المدة، ولكل سباق هدف ومخرج قابل للعرض. وأدواره ثلاثة: مالك المنتج يحدد الأولويات ويمثّل العميل، ومدرّب الفريق يزيل العوائق ويحمي العملية، وفريق التطوير ينفّذ ويقدّر.',
          'ومراسمه أربع: تخطيط السباق لاختيار ما سيُنجز، واجتماع يومي قصير للتنسيق وكشف العوائق لا للتقارير الإدارية، ومراجعة السباق لعرض المُنجَز على أصحاب المصلحة، واسترجاع لمراجعة طريقة العمل نفسها. والاسترجاع أكثرها إهمالاً وأعلاها قيمة، لأنه الوحيد الذي يحسّن العملية ذاتها لا المنتج فقط — وفريق يلغي الاسترجاع يكرر أخطاءه سباقاً بعد سباق.'
        ],
        body_en: [
          'Building ends and the longest part begins: maintenance. The common belief is that it means fixing bugs, while in reality most of it is adding what users request after actually using the system and learning what they lack, and following environmental change in operating systems, laws and integrations. This explains why a system must be built changeable from day one.',
          'Technical debt is a precise metaphor: choosing a quick solution you know is not ideal is borrowing time repaid later with interest. Borrowing is not wrong in itself and may be right to meet a deadline, but the error is never recording it and never repaying, so interest accrues until every simple change becomes expensive.',
          'Change management is an organised process for modification requests: a request is submitted, its impact and cost assessed, acceptance or deferral decided, then implemented and documented. Without it comes scope creep: small requests accepted verbally one after another until the project doubles with no added time or budget, one of the best-known causes of project failure.',
          'Agile is not one methodology but a set of values: individuals and interaction over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan. Note that the items do not cancel the second side but prefer the first when they conflict, and misreading this produced teams believing Agile means no documentation and no plan.',
          'Scrum is a practical framework applying those values: work in short time-boxed sprints, each with a goal and a demonstrable output. It has three roles: a product owner setting priorities and representing the customer, a scrum master removing obstacles and protecting the process, and a development team implementing and estimating.',
          'It has four ceremonies: sprint planning to choose what will be done, a short daily meeting for coordination and surfacing obstacles rather than management reporting, a sprint review to show the work to stakeholders, and a retrospective to examine the way of working itself. The retrospective is the most neglected and the most valuable, being the only one improving the process rather than the product, and a team that cancels it repeats its mistakes sprint after sprint.'
        ],
        table: {
          head_ar: ['المراسم', 'غرضها', 'الخطأ الشائع فيها'],
          head_en: ['Ceremony', 'Purpose', 'Common mistake'],
          rows: [
            ['تخطيط السباق', 'اختيار ما سيُنجز وتقديره', 'التزام بأكثر من الطاقة'],
            ['الاجتماع اليومي', 'تنسيق وكشف عوائق', 'تحويله لتقرير للمدير'],
            ['مراجعة السباق', 'عرض المُنجَز وأخذ الملاحظات', 'عرض شرائح بدل نظام عامل'],
            ['الاسترجاع', 'تحسين طريقة العمل نفسها', 'إلغاؤه عند ضيق الوقت']
          ]
        },
        keyPoints_ar: [
          'أكثر الصيانة إضافة وتكيّف لا إصلاح أخطاء، فابنِ النظام قابلاً للتغيير.',
          'الدين التقني اقتراض مشروع، والخطأ ألا يُسجَّل ولا يُسدَّد.',
          'زحف النطاق يقع بقبول طلبات صغيرة شفهياً بلا تقييم أثر.',
          'Agile يرجّح طرفاً عند التعارض ولا يلغي التوثيق ولا التخطيط.',
          'الاجتماع اليومي للتنسيق وكشف العوائق لا لتقارير الإدارة.',
          'الاسترجاع وحده يحسّن العملية، وإلغاؤه يجعل الفريق يكرر أخطاءه.'
        ],
        keyPoints_en: [
          'Most maintenance is addition and adaptation rather than bug fixing, so build for change.',
          'Technical debt is legitimate borrowing; the error is never recording or repaying it.',
          'Scope creep comes from accepting small verbal requests with no impact assessment.',
          'Agile prefers one side in a conflict and cancels neither documentation nor planning.',
          'The daily meeting is for coordination and obstacles, not management reporting.',
          'Only the retrospective improves the process, and cancelling it repeats mistakes.'
        ],
        analogy_ar: 'تخيّل الدين التقني بطاقة ائتمانية. استخدامها لشراء عاجل قرار معقول أحياناً. والكارثة أن تنسى أنك اقترضت وتكتفي بدفع الحد الأدنى: يكبر المبلغ حتى يبتلع دخلك. والدين التقني كذلك — يظهر يوم تكتشف أن تعديل زر واحد يستغرق أسبوعاً. أما الاسترجاع فهو جلسة مراجعة الحسابات: من يلغيها لأنه مشغول يبقى مشغولاً بالسبب نفسه إلى الأبد.',
        analogy_en: 'Picture technical debt as a credit card. Using it for an urgent purchase is sometimes reasonable. The disaster is forgetting you borrowed and paying only the minimum: the balance grows until it swallows your income. Technical debt is the same, showing up the day you find that changing one button takes a week. The retrospective is the account review session: whoever cancels it for being busy stays busy for the very same reason forever.',
        terms: [
          { term: 'Technical Debt', def_ar: 'اقتراض وقت بحل سريع يُدفع لاحقاً بكلفة أعلى.', def_en: 'Borrowing time with a quick fix repaid later at higher cost.' },
          { term: 'Scope Creep', def_ar: 'تضخّم نطاق المشروع بطلبات صغيرة متتابعة بلا تقييم.', def_en: 'Project scope swelling through successive small unassessed requests.' },
          { term: 'Sprint', def_ar: 'دورة عمل قصيرة محددة المدة لها هدف ومخرج قابل للعرض.', def_en: 'A short time-boxed work cycle with a goal and demonstrable output.' },
          { term: 'Product Owner', def_ar: 'من يحدد الأولويات ويمثّل العميل في الفريق.', def_en: 'The person setting priorities and representing the customer.' },
          { term: 'Retrospective', def_ar: 'جلسة تراجع طريقة العمل نفسها لتحسينها.', def_en: 'A session examining the way of working itself to improve it.' }
        ],
        cards: [
          { q_ar: 'ما أكثر أنواع الصيانة وقوعاً؟', q_en: 'What kind of maintenance is most common?', a_ar: 'الإضافة التحسينية والتكيّف مع تغيّر البيئة، لا إصلاح الأخطاء.', a_en: 'Perfective additions and adaptation to environmental change, not bug fixing.' },
          { q_ar: 'متى يصير الدين التقني مشكلة؟', q_en: 'When does technical debt become a problem?', a_ar: 'حين لا يُسجَّل ولا يُسدَّد، فتتراكم كلفته حتى يصير كل تغيير بسيط مكلفاً.', a_en: 'When it is never recorded or repaid, so its cost accrues until every simple change is expensive.' },
          { q_ar: 'ما سوء الفهم الشائع في Agile ؟', q_en: 'What is the common misreading of Agile?', a_ar: 'ظن أنه يعني بلا توثيق ولا خطة، وهو إنما يرجّح طرفاً عند التعارض لا يلغي الآخر.', a_en: 'Believing it means no documentation and no plan, while it merely prefers one side in a conflict.' },
          { q_ar: 'لماذا الاسترجاع أعلى المراسم قيمة؟', q_en: 'Why is the retrospective the most valuable ceremony?', a_ar: 'لأنه الوحيد الذي يحسّن طريقة العمل نفسها، وإلغاؤه يجعل الفريق يكرر أخطاءه.', a_en: 'It is the only one improving the way of working itself, and cancelling it makes the team repeat mistakes.' }
        ]
      }
    ],

    // ─────────── التخصصات البرمجية ───────────
    6: [
      {
        title_ar: 'خريطة التخصصات والواجهات الأمامية',
        title_en: 'The Specialisation Map and Frontend',
        lead_ar: 'التخصصات ليست لغات بل مجالات مشكلات، والواجهة الأمامية أقربها للمستخدم وأكثرها تغيّراً — وتحديها أن كل شيء فيها يحدث في غير ترتيبه.',
        lead_en: 'Specialisations are problem domains rather than languages, and frontend is closest to the user and the fastest changing, its challenge being that everything happens out of order.',
        body_ar: [
          'الخطأ الأول في اختيار التخصص أن تسأل «أي لغة أتعلّم؟». فاللغة أداة تُستبدل، والتخصص مجال مشكلات له طريقة تفكير وقيود وأولويات. ومن أتقن الأساسيات — الخوارزميات والهياكل والتصميم — انتقل بين اللغات بأسابيع، ومن حفظ لغة بلا أساس بقي حبيسها.',
          'والمجالات الكبرى ستة: الواجهات الأمامية، والخلفية، وتطبيقات الجوال، والأنظمة المدمجة، والحوسبة السحابية وDevOps، والذكاء الاصطناعي التطبيقي. ولكل واحد سؤاله الذي يعيش عليه: الأمامي يسأل كيف تكون التجربة سلسة، والخلفي كيف تبقى البيانات صحيحة تحت الحمل، والمدمج كيف يعمل بذاكرة ضئيلة وطاقة محدودة.',
          'والواجهة الأمامية كل ما يراه المستخدم ويتفاعل معه في المتصفح. وأركانها ثلاثة: البنية التي تحدد العناصر ومعناها، والتنسيق الذي يحدد الشكل والتوزيع، والمنطق الذي يحدد السلوك عند التفاعل. والفصل بين الثلاثة ليس تنظيماً شكلياً بل هو ما يجعل تغيير الشكل بلا مساس بالسلوك ممكناً.',
          'وأكبر تحوّل في المجال أنه انتقل من صفحات تُبنى في الخادم إلى تطبيقات تعمل في المتصفح وتدير حالتها. وهنا ظهر التحدي الحقيقي: إدارة الحالة. فما الذي يُعرض الآن؟ وهل البيانات قيد التحميل أم وصلت أم فشلت؟ وأين تُحفظ حالة يحتاجها جزآن بعيدان؟ — وأغلب أخطاء الواجهات ليست في الشكل بل في حالة لم تُحدَّث أو حُدِّثت مرتين.',
          'والعمل غير المتزامن جوهر هذا المجال: طلب الشبكة لا يعود فوراً، والمستخدم يضغط أثناء انتظاره، وقد يصل رد الطلب القديم بعد الجديد. ولهذا تُدار ثلاث حالات لكل طلب لا حالة واحدة: قيد التحميل، ونجح، وفشل. والواجهة التي تفترض النجاح وحده تنهار عند أول انقطاع شبكة.',
          'ومسؤوليتان تُهمَلان كثيراً وتُميّزان المحترف: إتاحة الوصول لذوي الاحتياجات — بنية صحيحة وتباين ألوان كافٍ وتشغيل كامل بلوحة المفاتيح — والأداء المدرَك، وهو شعور المستخدم بالسرعة لا رقم القياس: واجهة تُظهر هيكلاً فورياً ثم تملؤه تبدو أسرع من واجهة تنتظر كل شيء ثم تعرضه دفعة واحدة، ولو تساوى زمناهما.'
        ],
        body_en: [
          'The first mistake in choosing a specialisation is asking which language to learn. A language is a replaceable tool, while a specialisation is a problem domain with its own thinking, constraints and priorities. Whoever masters the fundamentals of algorithms, structures and design moves between languages in weeks, while whoever memorised a language with no foundation stays imprisoned in it.',
          'There are six major domains: frontend, backend, mobile, embedded, cloud and DevOps, and applied AI. Each lives on its own question: frontend asks how the experience becomes smooth, backend asks how data stays correct under load, and embedded asks how to work with tiny memory and limited power.',
          'Frontend is everything the user sees and touches in the browser. It has three pillars: structure defining elements and their meaning, styling defining appearance and layout, and logic defining behaviour on interaction. Separating the three is not cosmetic; it is what makes changing appearance without touching behaviour possible.',
          'The biggest shift in the field was moving from pages built on the server to applications running in the browser and managing their own state. Here the real challenge appeared: state management. What is displayed now? Is data loading, arrived, or failed? Where does state needed by two distant parts live? Most interface bugs are not visual but a state never updated or updated twice.',
          'Asynchronous work is the essence of this field: a network request does not return immediately, the user clicks while waiting, and an older response may arrive after a newer one. So each request has three states rather than one: loading, succeeded, failed. An interface assuming only success collapses at the first network drop.',
          'Two responsibilities are widely neglected and mark the professional: accessibility, with correct structure, sufficient colour contrast and full keyboard operation, and perceived performance, which is how fast it feels rather than what it measures: an interface showing a skeleton instantly then filling it feels faster than one waiting for everything and showing it at once, even at identical timings.'
        ],
        table: {
          head_ar: ['المجال', 'سؤاله المركزي', 'قيده الأكبر'],
          head_en: ['Domain', 'Central question', 'Biggest constraint'],
          rows: [
            ['الواجهات الأمامية', 'كيف تكون التجربة سلسة؟', 'تنوّع الأجهزة والشبكات'],
            ['الخلفية', 'كيف تبقى البيانات صحيحة تحت الحمل؟', 'التزامن والسلامة'],
            ['الجوال', 'كيف تعمل بلا اتصال وببطارية محدودة؟', 'الموارد والمتاجر'],
            ['الأنظمة المدمجة', 'كيف تعمل بذاكرة ضئيلة؟', 'العتاد والطاقة'],
            ['السحابة وDevOps', 'كيف تُنشر وتُوسَّع بأمان؟', 'الكلفة والموثوقية'],
            ['الذكاء التطبيقي', 'كيف نحوّل البيانات لقرار؟', 'جودة البيانات']
          ]
        },
        keyPoints_ar: [
          'التخصص مجال مشكلات لا لغة، واللغة أداة تُستبدل.',
          'الأساسيات المتينة تنقلك بين اللغات بأسابيع.',
          'أركان الواجهة ثلاثة: البنية والتنسيق والمنطق، وفصلها يتيح التغيير الآمن.',
          'أغلب أخطاء الواجهات في الحالة لا في الشكل.',
          'لكل طلب ثلاث حالات: قيد التحميل ونجح وفشل — وافتراض النجاح وحده انهيار مؤجّل.',
          'إتاحة الوصول والأداء المدرَك مسؤوليتان تُميّزان المحترف.'
        ],
        keyPoints_en: [
          'A specialisation is a problem domain, not a language; languages are replaceable tools.',
          'Solid fundamentals move you between languages in weeks.',
          'Frontend has three pillars, structure, styling and logic, and separating them enables safe change.',
          'Most interface bugs live in state rather than appearance.',
          'Every request has three states: loading, succeeded, failed; assuming success is deferred collapse.',
          'Accessibility and perceived performance are the responsibilities marking a professional.'
        ],
        analogy_ar: 'تخيّل الواجهة الأمامية واجهة متجر: العميل لا يرى المستودع ولا نظام المحاسبة، ويحكم على المتجر كله من ترتيب الرفوف وسرعة الخدمة. والحالة هي ما يُعرض على الرف الآن — والفوضى تقع حين يعرض الرف صنفاً نفد فعلاً، أو يبقى فارغاً وقد وصلت البضاعة للمستودع. وهذا بالضبط ما يعنيه أن أغلب أخطاء الواجهات في الحالة لا في الشكل.',
        analogy_en: 'Picture the frontend as a shop front: the customer never sees the warehouse or the accounting system and judges the whole shop by shelf order and service speed. State is what sits on the shelf right now, and chaos comes when the shelf displays an item already sold out, or stays empty while stock has arrived in the warehouse. That is exactly what it means that most interface bugs live in state rather than appearance.',
        terms: [
          { term: 'State', def_ar: 'البيانات التي تحدد ما يُعرض في الواجهة الآن.', def_en: 'The data deciding what the interface shows right now.' },
          { term: 'Asynchronous', def_ar: 'عمل لا يعود فوراً، كطلب الشبكة، فتُدار حالاته الثلاث.', def_en: 'Work that does not return immediately, such as a network request, with three states.' },
          { term: 'Accessibility', def_ar: 'إتاحة استخدام الواجهة لذوي الاحتياجات ببنية وتباين وتشغيل بلوحة المفاتيح.', def_en: 'Making an interface usable for people with disabilities via structure, contrast and keyboard operation.' },
          { term: 'Perceived Performance', def_ar: 'شعور المستخدم بالسرعة، وقد يخالف زمن التحميل المقيس.', def_en: 'How fast it feels to the user, which may differ from measured load time.' }
        ],
        cards: [
          { q_ar: 'لماذا لا يبدأ اختيار التخصص بسؤال اللغة؟', q_en: 'Why does choosing a specialisation not start with the language?', a_ar: 'لأن اللغة أداة تُستبدل، والتخصص مجال مشكلات له تفكيره وقيوده.', a_en: 'Because a language is a replaceable tool while a specialisation is a problem domain with its own thinking and constraints.' },
          { q_ar: 'أين تقع أغلب أخطاء الواجهات؟', q_en: 'Where do most interface bugs live?', a_ar: 'في إدارة الحالة: حالة لم تُحدَّث أو حُدِّثت مرتين، لا في الشكل.', a_en: 'In state management: a state never updated or updated twice, not in appearance.' },
          { q_ar: 'كم حالة لكل طلب شبكة؟', q_en: 'How many states does a network request have?', a_ar: 'ثلاث: قيد التحميل ونجح وفشل، ومن يفترض النجاح وحده تنهار واجهته عند أول انقطاع.', a_en: 'Three: loading, succeeded and failed; assuming only success collapses at the first drop.' },
          { q_ar: 'ما الأداء المدرَك؟', q_en: 'What is perceived performance?', a_ar: 'شعور المستخدم بالسرعة؛ فواجهة تُظهر هيكلاً فوراً ثم تملؤه تبدو أسرع ولو تساوى الزمن.', a_en: 'How fast it feels; showing a skeleton then filling it feels faster even at identical timings.' }
        ]
      },
      {
        title_ar: 'الخلفية والتطوير المتكامل',
        title_en: 'Backend and Full-Stack Development',
        lead_ar: 'الخلفية ما لا يراه المستخدم ويعتمد عليه كل شيء: البيانات والمنطق والأمان — وخطؤها لا يُرى بل يتسرّب.',
        lead_en: 'The backend is what users never see and everything depends on: data, logic and security, and its errors do not show, they leak.',
        body_ar: [
          'الخلفية هي الجزء العامل على الخادم: يستقبل الطلبات، ويطبّق قواعد العمل، ويخاطب قاعدة البيانات، ويعيد الرد. والفرق الجوهري عن الواجهة أن خطأ الواجهة يراه المستخدم ويشتكي منه، وخطأ الخلفية قد يعمل بصمت شهوراً وهو يفسد البيانات أو يسرّبها.',
          'ومسؤولياتها خمس متمايزة: تعريف الواجهة البرمجية التي يخاطبها العملاء، وتطبيق قواعد العمل، وإدارة البيانات وسلامتها، والمصادقة والصلاحيات، والأداء تحت الحمل. وأكثر ما يُخلط: المصادقة تعني «من أنت»، والصلاحية تعني «وماذا يحق لك». فمستخدم مصادَق قد لا يحق له حذف طلب غيره — والخلط بينهما ثغرة شائعة.',
          'وقاعدة الأمان الأولى: لا تثق بأي مدخل قادم من العميل مهما بدا. فالتحقق في الواجهة تحسين تجربة لا حماية، لأن من يريد التلاعب يرسل الطلب مباشرة متجاوزاً واجهتك كلها. والتحقق الحقيقي في الخادم دائماً، وهو غير قابل للتفاوض.',
          'وأخطر ثغرة في هذا الباب مرجعية الكائن المباشرة غير الآمنة: أن يطلب المستخدم موردًا برقمه فيُعطاه بلا فحص أنه صاحبه. فيغيّر الرقم في العنوان ويرى فاتورة غيره. والعلاج ألا يُكتفى بأن الطلب من مستخدم مسجّل، بل يُفحص أن هذا المورد يخصه هو.',
          'والتطوير المتكامل أن يعمل الشخص في الطرفين. وقيمته الحقيقية ليست في إتقان الاثنين بالعمق نفسه — وهذا نادر — بل في فهم أثر قرار كل طرف على الآخر: مصمم واجهة يفهم كلفة الاستعلامات لا يطلب مئة طلب لعرض صفحة، ومطوّر خلفية يفهم تجربة المستخدم يصمم واجهة برمجية تعطي ما تحتاجه الشاشة بطلب واحد.',
          'وفخ شائع في هذا الطريق: انتشار سطحي في كل شي بلا عمق في شيء. والقاعدة العملية أن تتعمّق في طرف حتى تبلغ فيه مستوى موثوقاً، وتُلمّ بالآخر إلماماً يكفي للتفاهم والتصميم المشترك — فسوق العمل يدفع للعمق ويقدّر الإلمام، ولا يدفع للسطحية في الاثنين.'
        ],
        body_en: [
          'The backend is the part running on the server: receiving requests, applying business rules, addressing the database and returning a response. The fundamental difference from the frontend is that an interface bug is seen and complained about, while a backend bug may run silently for months while corrupting or leaking data.',
          'It has five distinct responsibilities: defining the API clients address, applying business rules, managing data and its integrity, authentication and authorisation, and performance under load. The most confused pair: authentication means who you are and authorisation means what you may do. An authenticated user may have no right to delete another person order, and blurring the two is a common vulnerability.',
          'The first security rule: never trust any input coming from a client however it looks. Validation in the interface improves experience but is not protection, because anyone wishing to tamper sends the request directly, bypassing your interface entirely. Real validation always lives on the server and is non-negotiable.',
          'The most dangerous flaw here is insecure direct object reference: a user requests a resource by its number and receives it with no check that it is theirs. They change the number in the address and see somebody else invoice. The cure is not settling for the request coming from a logged-in user but checking that this resource belongs to them.',
          'Full-stack means working on both sides. Its real value is not equal depth in both, which is rare, but understanding how each side decisions affect the other: an interface designer who understands query cost does not request a hundred calls to render a page, and a backend developer who understands user experience designs an API returning what the screen needs in one call.',
          'A common trap on this path is shallow spread across everything with depth in nothing. The practical rule is to go deep on one side until you are dependable there, and know the other well enough for shared understanding and design, since the market pays for depth and values breadth but does not pay for shallowness in both.'
        ],
        table: {
          head_ar: ['المفهوم', 'سؤاله', 'الخلط الشائع'],
          head_en: ['Concept', 'Its question', 'Common confusion'],
          rows: [
            ['المصادقة', 'من أنت؟', 'ظنها تكفي للسماح بكل شيء'],
            ['الصلاحية', 'وماذا يحق لك؟', 'إهمالها بعد تسجيل الدخول'],
            ['التحقق في الواجهة', 'تحسين تجربة', 'ظنها حماية'],
            ['التحقق في الخادم', 'حماية حقيقية', 'الاكتفاء بواجهة تتحقق']
          ]
        },
        keyPoints_ar: [
          'خطأ الواجهة يُرى ويُشتكى، وخطأ الخلفية يعمل بصمت وهو يفسد أو يسرّب.',
          'المصادقة «من أنت» والصلاحية «ماذا يحق لك»، والخلط بينهما ثغرة.',
          'التحقق في الواجهة تجربة لا حماية؛ الحماية في الخادم دائماً.',
          'لا يكفي أن الطلب من مستخدم مسجّل، بل يجب فحص أن المورد يخصه.',
          'قيمة التكامل في فهم أثر قرار كل طرف على الآخر لا في إتقانهما معاً.',
          'العمق في طرف مع إلمام بالآخر خير من سطحية في الاثنين.'
        ],
        keyPoints_en: [
          'A frontend bug is seen and reported; a backend bug runs silently while corrupting or leaking.',
          'Authentication is who you are and authorisation is what you may do; blurring them is a vulnerability.',
          'Client-side validation is experience, not protection; protection always lives on the server.',
          'A logged-in requester is not enough: check the resource belongs to them.',
          'Full-stack value is understanding cross-side impact rather than equal mastery.',
          'Depth on one side with breadth on the other beats shallowness in both.'
        ],
        analogy_ar: 'تخيّل المطعم: الواجهة هي الصالة والقائمة والنادل، والخلفية هي المطبخ والمخزن والمحاسبة. خطأ في الصالة يراه الزبون فوراً فيشتكي. وخطأ في المطبخ — سوء حفظ أو خلط مكوّنات — قد لا يُرى شهوراً ثم يظهر أثره على الجميع دفعة واحدة. والتحقق في الواجهة كأن تكتب على القائمة «الحد الأقصى عشرة أطباق»: تنظيم مفيد، لكن من دخل المطبخ مباشرة لا تمنعه القائمة.',
        analogy_en: 'Picture a restaurant: the frontend is the dining room, menu and waiter, while the backend is the kitchen, store and accounts. A dining-room mistake is seen instantly and reported. A kitchen mistake, poor storage or mixed ingredients, may go unseen for months then hit everyone at once. Client-side validation is like printing "maximum ten dishes" on the menu: useful order, but it stops nobody who walks straight into the kitchen.',
        terms: [
          { term: 'Authentication', def_ar: 'التحقق من هوية المستخدم: من أنت.', def_en: 'Verifying user identity: who you are.' },
          { term: 'Authorisation', def_ar: 'تحديد ما يحق للمستخدم فعله بعد التعرّف عليه.', def_en: 'Deciding what an identified user may do.' },
          { term: 'Server-side Validation', def_ar: 'فحص المدخلات في الخادم، وهو الحماية الحقيقية.', def_en: 'Validating input on the server, the real protection.' },
          { term: 'IDOR', def_ar: 'إعطاء مورد برقمه بلا فحص ملكيته، فيرى المستخدم بيانات غيره.', def_en: 'Serving a resource by id with no ownership check, exposing another user data.' }
        ],
        cards: [
          { q_ar: 'ما الفرق بين المصادقة والصلاحية؟', q_en: 'Difference between authentication and authorisation?', a_ar: 'المصادقة تجيب «من أنت»، والصلاحية تجيب «ماذا يحق لك» بعد التعرّف عليك.', a_en: 'Authentication answers who you are; authorisation answers what you may do once identified.' },
          { q_ar: 'لماذا لا يكفي التحقق في الواجهة؟', q_en: 'Why is client-side validation not enough?', a_ar: 'لأن المتلاعب يرسل الطلب مباشرة متجاوزاً الواجهة كلها، فالحماية في الخادم.', a_en: 'Because an attacker sends the request directly, bypassing the interface entirely, so protection lives on the server.' },
          { q_ar: 'كيف تُمنع ثغرة رؤية بيانات مستخدم آخر برقم المورد؟', q_en: 'How do you prevent seeing another user data by resource id?', a_ar: 'بفحص أن المورد المطلوب يخص المستخدم نفسه، لا الاكتفاء بأنه مسجّل دخول.', a_en: 'By checking the requested resource belongs to that same user, not merely that they are logged in.' },
          { q_ar: 'أين تكمن قيمة التطوير المتكامل؟', q_en: 'Where does full-stack value lie?', a_ar: 'في فهم أثر قرارات كل طرف على الآخر، لا في إتقان الطرفين بالعمق نفسه.', a_en: 'In understanding how each side decisions affect the other, not in equal mastery of both.' }
        ]
      },
      {
        title_ar: 'تطبيقات الجوال وتطوير الألعاب',
        title_en: 'Mobile Applications and Game Development',
        lead_ar: 'الجوال بيئة مقيّدة: بطارية وذاكرة واتصال متقطّع وشاشة صغيرة — والألعاب مجال يجتمع فيه الأداء اللحظي بالتصميم.',
        lead_en: 'Mobile is a constrained environment of battery, memory, intermittent connectivity and a small screen, while games combine real-time performance with design.',
        body_ar: [
          'تطوير الجوال ليس تصغير موقع. البيئة نفسها مختلفة: بطارية محدودة تعاقب على كل عملية خلفية، وذاكرة يقتل النظام تطبيقك إن تجاوزتها، واتصال يتقطّع في المصعد والنفق، وشاشة صغيرة تُلمس بإصبع لا بمؤشر دقيق. وكل قرار تصميمي يمر عبر هذي القيود.',
          'وثلاثة طرق للبناء: الأصلي بلغة المنصة نفسها فيعطي أفضل أداء وأعمق وصول للعتاد بثمن كتابة تطبيقين منفصلين لنظامين. والهجين بتقنيات الويب داخل غلاف فرخيص وسريع لكنه أضعف أداءً وأقل التصاقاً بالمنصة. وبينهما الإطار المشترك الذي يكتب مرة ويعمل على الاثنين بأداء قريب من الأصلي — وهو اختيار أغلب الفرق اليوم.',
          'ودورة حياة التطبيق مفهوم لا نظير له في الويب: التطبيق يُوقَف مؤقتاً حين يفتح المستخدم غيره، وقد يُنهيه النظام دون إشعار ليحرر ذاكرة. ولهذا تُحفظ الحالة عند الإيقاف وتُستعاد عند العودة — وإهمال هذا سبب الشكوى الشهيرة: فتحت التطبيق فوجدته بدأ من الصفر وضاع ما كتبت.',
          'ودعم العمل بلا اتصال ليس ميزة رفاهية في الجوال بل توقّع أساسي: يُحفظ ما يمكن محلياً، وتُصفّ العمليات لتُرسل عند عودة الشبكة، ويُعرض ما لدينا مع بيان أنه قد لا يكون محدَّثاً. والتطبيق الذي يعرض شاشة خطأ عند أول انقطاع يُحذف بسرعة.',
          'وتطوير الألعاب مجال مختلف في طبيعته: حلقة تتكرر عشرات المرات في الثانية تحدّث حالة العالم وترسمه. وقيده أن لكل إطار ميزانية زمنية صارمة — عند ستين إطاراً في الثانية لديك ستة عشر مللي ثانية لكل شيء: منطق ومصادمات ورسم. وتجاوزها يعني تقطيعاً يشعر به اللاعب فوراً.',
          'ولهذا يُبنى منطق اللعبة على الزمن المنقضي بين إطارين لا على عدد الإطارات، وإلا تحرّك اللاعب أسرع على جهاز قوي وأبطأ على ضعيف. وهذا خطأ كلاسيكي وقعت فيه ألعاب تجارية فصار سرعة اللعب تابعة لسرعة الجهاز — وهو مثال دقيق على قيد يفرضه المجال ولا يُفهم إلا بالعمل فيه.'
        ],
        body_en: [
          'Mobile development is not a shrunken website. The environment itself differs: limited battery punishing every background operation, memory whose excess makes the system kill your app, connectivity dropping in a lift or tunnel, and a small screen touched by a finger rather than a precise pointer. Every design decision passes through these constraints.',
          'There are three build routes: native in the platform own language, giving the best performance and deepest hardware access at the cost of writing two separate apps; hybrid with web technologies in a shell, cheap and fast but weaker in performance and less native in feel; and between them the shared framework written once and running on both with near-native performance, which most teams choose today.',
          'The application life cycle has no equivalent on the web: an app is paused when the user opens another and may be terminated by the system with no notice to free memory. So state is saved on pause and restored on return, and neglecting this causes the famous complaint of opening an app to find it started over with your work gone.',
          'Offline support is not a luxury feature on mobile but a baseline expectation: store what you can locally, queue operations to send when the network returns, and show what you have while indicating it may be stale. An app showing an error screen at the first drop is deleted quickly.',
          'Game development differs in nature: a loop repeating dozens of times per second updating the world state and drawing it. Its constraint is a strict time budget per frame: at sixty frames per second you have sixteen milliseconds for everything, logic, collisions and rendering. Exceeding it means stutter the player feels instantly.',
          'So game logic is built on the elapsed time between frames rather than the frame count, otherwise the player moves faster on a powerful machine and slower on a weak one. This is a classic error that shipped in commercial games, tying game speed to machine speed, and it is a precise example of a domain constraint understood only by working in it.'
        ],
        table: {
          head_ar: ['الطريقة', 'الأداء', 'الكلفة', 'الوصول للعتاد'],
          head_en: ['Route', 'Performance', 'Cost', 'Hardware access'],
          rows: [
            ['أصلي', 'الأفضل', 'الأعلى — تطبيقان', 'كامل'],
            ['إطار مشترك', 'قريب من الأصلي', 'متوسطة — كود واحد', 'جيد'],
            ['هجين', 'الأضعف', 'الأقل', 'محدود']
          ]
        },
        keyPoints_ar: [
          'الجوال بيئة مقيّدة ببطارية وذاكرة واتصال متقطّع، لا شاشة أصغر فقط.',
          'الأصلي أفضل أداءً بثمن تطبيقين، والمشترك يوازن، والهجين أرخص وأضعف.',
          'التطبيق قد يُنهيه النظام بلا إشعار، فتُحفظ الحالة عند الإيقاف وتُستعاد.',
          'العمل بلا اتصال توقّع أساسي في الجوال لا ميزة إضافية.',
          'عند ستين إطاراً في الثانية لديك ستة عشر مللي ثانية لكل شيء.',
          'اربط منطق اللعبة بالزمن المنقضي لا بعدد الإطارات، وإلا تبعت السرعةُ الجهازَ.'
        ],
        keyPoints_en: [
          'Mobile is constrained by battery, memory and intermittent connectivity, not merely a smaller screen.',
          'Native performs best at the cost of two apps, shared frameworks balance, hybrid is cheaper and weaker.',
          'The system may terminate an app with no notice, so save state on pause and restore it.',
          'Offline capability is a baseline expectation on mobile, not an extra feature.',
          'At sixty frames per second you have sixteen milliseconds for everything.',
          'Tie game logic to elapsed time rather than frame count, or speed follows the machine.'
        ],
        analogy_ar: 'تخيّل تطبيق الجوال مسافراً بحقيبة يد واحدة: كل ما يحمله محسوب، وقد يُطلب منه النزول فجأة فيترك مكانه لغيره. ولهذا يحزم بذكاء ويحفظ ما يحتاجه معه. وحلقة اللعبة أشبه بعازف في أوركسترا: عليه أن ينهي نوتته في زمنها بالضبط ستين مرة في الدقيقة؛ فإن تأخر جزءاً من الثانية اختلّ اللحن كله وسمعه الجميع.',
        analogy_en: 'Picture a mobile app as a traveller with one carry-on: everything carried is counted, and they may be told to disembark suddenly and give up their seat. So they pack wisely and keep essentials on them. A game loop is like an orchestra player who must finish their note exactly on time sixty times a minute; a fraction of a second late and the whole melody breaks and everyone hears it.',
        terms: [
          { term: 'Native App', def_ar: 'تطبيق مكتوب بلغة المنصة نفسها فيعطي أفضل أداء ووصول.', def_en: 'An app written in the platform own language with best performance and access.' },
          { term: 'App Lifecycle', def_ar: 'مراحل التطبيق من التشغيل للإيقاف المؤقت للإنهاء بأمر النظام.', def_en: 'App stages from launch to pause to termination by the system.' },
          { term: 'Offline-first', def_ar: 'تصميم يفترض انقطاع الشبكة فيحفظ محلياً ويصفّ العمليات.', def_en: 'Design assuming network loss, storing locally and queueing operations.' },
          { term: 'Frame Budget', def_ar: 'الزمن المتاح لكل إطار، وهو ١٦ مللي ثانية عند ٦٠ إطاراً.', def_en: 'The time available per frame, sixteen milliseconds at sixty frames per second.' },
          { term: 'Delta Time', def_ar: 'الزمن المنقضي بين إطارين، يُبنى عليه منطق الحركة.', def_en: 'The elapsed time between frames, on which motion logic is based.' }
        ],
        cards: [
          { q_ar: 'لماذا يُحفظ حالة تطبيق الجوال عند الإيقاف؟', q_en: 'Why save mobile app state on pause?', a_ar: 'لأن النظام قد ينهي التطبيق بلا إشعار لتحرير ذاكرة، فيعود المستخدم ويجده بدأ من الصفر.', a_en: 'Because the system may terminate it with no notice to free memory, so the user returns to find it started over.' },
          { q_ar: 'كم مللي ثانية لكل إطار عند ستين إطاراً في الثانية؟', q_en: 'How many milliseconds per frame at sixty FPS?', a_ar: 'نحو ستة عشر مللي ثانية لكل شيء: منطق ومصادمات ورسم.', a_en: 'About sixteen milliseconds for everything: logic, collisions and rendering.' },
          { q_ar: 'ما خطر ربط حركة اللعبة بعدد الإطارات؟', q_en: 'What is the risk of tying motion to frame count?', a_ar: 'تصير السرعة تابعة لقوة الجهاز، فيتحرك اللاعب أسرع على جهاز قوي.', a_en: 'Speed follows machine power, so the player moves faster on a stronger device.' },
          { q_ar: 'أي طريقة بناء تناسب فريقاً يريد كوداً واحداً بأداء قريب من الأصلي؟', q_en: 'Which route suits one codebase with near-native performance?', a_ar: 'الإطار المشترك، وهو ما تختاره أغلب الفرق اليوم.', a_en: 'A shared framework, which most teams choose today.' }
        ]
      },
      {
        title_ar: 'الأنظمة المدمجة والسحابة وDevOps',
        title_en: 'Embedded Systems, Cloud and DevOps',
        lead_ar: 'المدمج يعمل بذاكرة تُقاس بالكيلوبايت ولا يقبل التوقف، والسحابة تبيع المرونة بالاستخدام — والفرق بينهما أقصى ما في المجال من تباين.',
        lead_en: 'Embedded runs on kilobytes and cannot stop, while the cloud sells elasticity by usage, and the gap between them is the widest in the field.',
        body_ar: [
          'الأنظمة المدمجة برمجيات تعمل داخل أجهزة لا تُرى كحواسيب: غسالة وسيارة وجهاز طبي وحسّاس. وقيودها قاسية: ذاكرة تُقاس بالكيلوبايت لا الجيجابايت، ومعالج ضعيف، وطاقة من بطارية يجب أن تدوم شهوراً، ولا نظام تشغيل كاملاً غالباً.',
          'وأشد ما يميّزها أن لا مجال للتراجع السهل: الجهاز في يد المستخدم أو داخل جدار، وتحديثه ليس ضغطة زر. ومنها ما لا يُقبل فيه الخطأ أصلاً كأجهزة طبية ومكابح سيارة، فيُبنى بمعايير أشد وتحقق أعمق مما اعتاده مطوّر التطبيقات.',
          'ومفهوم الزمن الحقيقي فيها ليس السرعة بل الضمان: أن تكتمل الاستجابة خلال مهلة محددة دائماً لا غالباً. فنظام وسادة هوائية يستجيب في عشر مللي ثانية في تسع وتسعين بالمئة من الحالات نظام فاشل — المطلوب الضمان لا المتوسط.',
          'وإنترنت الأشياء توسّع لهذا المجال: أجهزة صغيرة تجمع بيانات وترسلها. وتحدياتها ثلاثة: الطاقة فكل إرسال يستهلك، والأمان فأجهزة كثيرة تُنشر بكلمات مرور افتراضية فتُخترق جماعياً، والتحديث فكيف تُحدَّث آلاف الأجهزة الموزّعة بأمان دون أن يفشل بعضها في منتصف التحديث.',
          'وعلى الطرف الآخر: الحوسبة السحابية، وهي استئجار موارد حسابية بدل امتلاكها. وميزتها الجوهرية المرونة: تدفع بمقدار ما تستخدم، وتتوسّع في ساعة الذروة وتتقلّص بعدها. لكن السهولة فخ مالي معروف: خدمات تُشغَّل للتجربة وتُنسى تعمل شهوراً، وفواتير تتضخم بلا أن ينتبه أحد حتى نهاية الشهر.',
          'وDevOps ثقافة قبل أن يكون أدوات: تقريب فريق التطوير من التشغيل حتى لا يرمي أحدهما المسؤولية على الآخر. وأثره العملي في أربعة مقاييس: كم مرة تنشر، وكم يستغرق التغيير حتى يصل المستخدم، وكم نسبة النشرات التي تفشل، وكم تستغرق العودة للحالة السليمة بعد عطل. وهذي المقاييس الأربعة تصف صحة الفريق أدق من أي شعار.'
        ],
        body_en: [
          'Embedded systems are software running inside devices nobody sees as computers: a washing machine, a car, a medical device, a sensor. Their constraints are harsh: memory measured in kilobytes rather than gigabytes, a weak processor, power from a battery expected to last months, and often no full operating system.',
          'What most distinguishes them is that easy rollback does not exist: the device is in a user hand or inside a wall, and updating it is not a button press. Some tolerate no error at all, such as medical devices and car brakes, so they are built to stricter standards and deeper verification than an app developer is used to.',
          'Real time here does not mean fast but guaranteed: the response completes within a set deadline always rather than usually. An airbag system responding in ten milliseconds ninety-nine percent of the time has failed; the requirement is the guarantee, not the average.',
          'The internet of things extends this domain: small devices collecting and sending data. It has three challenges: power, since every transmission costs; security, since many devices ship with default passwords and are compromised en masse; and updates, since thousands of distributed devices must update safely without some failing midway.',
          'At the other extreme is cloud computing, renting compute resources rather than owning them. Its essential merit is elasticity: you pay for what you use, scaling up at peak and shrinking after. But that ease is a known financial trap: services started for a trial and forgotten run for months, and bills swell unnoticed until month end.',
          'DevOps is a culture before it is tooling: bringing development and operations close so neither throws responsibility at the other. Its practical effect shows in four measures: how often you deploy, how long a change takes to reach users, what share of deployments fail, and how long recovery takes after an incident. Those four describe team health more precisely than any slogan.'
        ],
        table: {
          head_ar: ['البُعد', 'الأنظمة المدمجة', 'الحوسبة السحابية'],
          head_en: ['Dimension', 'Embedded', 'Cloud'],
          rows: [
            ['الذاكرة', 'كيلوبايتات', 'قابلة للتوسيع'],
            ['التحديث', 'صعب ومحفوف', 'بضغطة وقابل للتراجع'],
            ['القيد الأول', 'الطاقة والذاكرة', 'الكلفة والموثوقية'],
            ['أثر الخطأ', 'قد يكون مادياً وخطراً', 'خدمة متوقفة تُستعاد']
          ]
        },
        keyPoints_ar: [
          'المدمج يعمل بكيلوبايتات وبلا تراجع سهل، فيُبنى بتحقق أعمق.',
          'الزمن الحقيقي ضمان مهلة لا مجرد سرعة متوسطة.',
          'أخطر ما في إنترنت الأشياء كلمات المرور الافتراضية والتحديث الجماعي.',
          'مرونة السحابة فخ مالي إن نُسيت خدمات تعمل بلا استخدام.',
          'DevOps ثقافة تُقاس بأربعة: تكرار النشر وزمنه ونسبة فشله وزمن التعافي.'
        ],
        keyPoints_en: [
          'Embedded runs on kilobytes with no easy rollback, so it is built with deeper verification.',
          'Real time means a guaranteed deadline, not merely average speed.',
          'The gravest IoT risks are default passwords and mass updates.',
          'Cloud elasticity is a financial trap when unused services are forgotten running.',
          'DevOps is a culture measured by four: deploy frequency, lead time, failure rate and recovery time.'
        ],
        analogy_ar: 'تخيّل الفرق بين مهندس يبني قمراً صناعياً ومهندس يدير فندقاً. الأول يحسب كل غرام وكل واط، ويعرف أنه بعد الإطلاق لن يصعد ليصلح شيئاً — فيتحقق ألف مرة قبل. والثاني يفتح غرفاً في الموسم ويغلقها بعده، ويقيس نجاحه بسرعة استعادة الخدمة إن انقطعت الكهرباء. والمشكلة الشائعة في الفندق أن تبقى أضواء جناح فارغ مضاءة شهراً — وهي بالضبط فاتورة السحابة المنسيّة.',
        analogy_en: 'Picture the difference between an engineer building a satellite and one running a hotel. The first counts every gram and watt, knowing that after launch nobody climbs up to fix anything, so they verify a thousand times before. The second opens rooms in season and closes them after, measuring success by how fast service returns when power fails. The hotel common problem is leaving an empty suite lights on for a month, which is precisely the forgotten cloud bill.',
        terms: [
          { term: 'Embedded System', def_ar: 'برنامج يعمل داخل جهاز لا يُرى كحاسوب بقيود صارمة.', def_en: 'Software running inside a device not seen as a computer under tight constraints.' },
          { term: 'Real Time', def_ar: 'ضمان اكتمال الاستجابة خلال مهلة محددة دائماً.', def_en: 'A guarantee that a response completes within a set deadline every time.' },
          { term: 'Elasticity', def_ar: 'توسّع الموارد وتقلّصها حسب الحاجة مع الدفع بالاستخدام.', def_en: 'Resources growing and shrinking on demand with pay-per-use.' },
          { term: 'DevOps', def_ar: 'ثقافة تقرّب التطوير من التشغيل وتُقاس بمقاييس النشر والتعافي.', def_en: 'A culture bringing development and operations together, measured by deployment and recovery metrics.' }
        ],
        cards: [
          { q_ar: 'ما معنى الزمن الحقيقي في الأنظمة المدمجة؟', q_en: 'What does real time mean in embedded systems?', a_ar: 'ضمان اكتمال الاستجابة خلال مهلة محددة دائماً، لا مجرد سرعة في المتوسط.', a_en: 'A guarantee the response completes within a deadline every time, not average speed.' },
          { q_ar: 'ما الفخ المالي الشائع في السحابة؟', q_en: 'What is the common cloud financial trap?', a_ar: 'خدمات تُشغَّل للتجربة وتُنسى تعمل شهوراً فتتضخم الفاتورة بلا استخدام.', a_en: 'Services started for a trial and forgotten running for months, swelling the bill with no use.' },
          { q_ar: 'لماذا يُبنى المدمج بتحقق أعمق؟', q_en: 'Why is embedded built with deeper verification?', a_ar: 'لأن الجهاز في يد المستخدم أو داخل جدار، والتراجع عن خطأ ليس ضغطة زر.', a_en: 'Because the device is in a user hand or inside a wall, and rolling back is not a button press.' },
          { q_ar: 'بم يُقاس أثر DevOps عملياً؟', q_en: 'How is DevOps impact measured?', a_ar: 'بتكرار النشر، وزمن وصول التغيير، ونسبة النشرات الفاشلة، وزمن التعافي.', a_en: 'Deployment frequency, change lead time, failed deployment rate, and recovery time.' }
        ]
      },
      {
        title_ar: 'الذكاء الاصطناعي التطبيقي واختيار المسار المهني',
        title_en: 'Applied AI and Choosing a Career Path',
        lead_ar: 'الذكاء التطبيقي هندسة حول نموذج لا بناء نموذج، واختيار مسارك يُحسم بالتجربة القصيرة لا بالقراءة الطويلة.',
        lead_en: 'Applied AI is engineering around a model rather than building one, and choosing your path is settled by short experiments rather than long reading.',
        body_ar: [
          'أغلب من يعمل بالذكاء الاصطناعي اليوم لا يبني نماذج من الصفر، وإنما يستخدم نماذج جاهزة ويبني حولها نظاماً: يجهّز البيانات، ويستدعي النموذج، ويعالج مخرجه، ويتعامل مع بطئه وأخطائه وكلفته. وهذي هندسة برمجيات في أغلبها، ومن يتقن الأساسيات يدخلها بلا تخصص رياضي عميق.',
          'وثلاثة فروق عن البرمجة المعتادة يجب استيعابها. الأول أن المخرج احتمالي لا قاطع: النموذج نفسه بالمدخل نفسه قد يعطي مخرجاً مختلفاً، فلا تُبنى عليه فروض اليقين. والثاني أن الاستدعاء بطيء ومكلف نسبياً، فيُصمَّم النظام على أساس أنه عملية شبكية ثقيلة لا استدعاء دالة محلية.',
          'والثالث أن الجودة تعتمد على المدخل اعتماداً حاسماً: البيانات الرديئة تعطي مخرجاً رديئاً مهما كان النموذج قوياً. ولهذا تجد أن أغلب وقت المشروع يذهب لتجهيز البيانات وتنظيفها لا لاختيار النموذج — وهذي حقيقة تفاجئ الداخلين الجدد.',
          'وقاعدة تصميم لا يُستغنى عنها: لا تفترض نجاح الاستدعاء ولا صحة المخرج. تحقق من شكل المخرج قبل استخدامه، وضع حداً زمنياً وبديلاً إن تأخر، واحسب الكلفة لكل عملية قبل النشر لا بعد الفاتورة. والنظام الذي يفترض المثالية ينهار في أول يوم إنتاج حقيقي.',
          'وأما اختيار المسار المهني فيغلط فيه كثيرون بطريقة واحدة: يقرؤون شهوراً ويقارنون الرواتب ولا يجربون شيئاً. والحقيقة أن أسبوعين من بناء شيء صغير في مجال يعطيانك عن ملاءمته لك أكثر مما تعطيه خمسون مقالاً. جرّب لا تقرأ فقط.',
          'وثلاثة أسئلة تحسم الاختيار: أي المشكلات تستمتع بحلّها فعلاً — بصرية أم بياناتية أم بنيوية؟ وأي بيئة عمل تناسبك — سرعة الشركات الناشئة أم انضباط المؤسسات الكبيرة؟ وما وضع السوق في مكانك أو عن بُعد؟ وأخيراً: التخصص ليس عقداً أبدياً، فأكثر المحترفين انتقلوا مرة على الأقل، والأساسيات هي ما يجعل الانتقال ممكناً — ولهذا كان بناؤها أول القسم وآخره.'
        ],
        body_en: [
          'Most people working in AI today do not build models from scratch; they use ready models and build a system around them: preparing data, calling the model, processing its output, and handling its latency, errors and cost. That is mostly software engineering, and whoever masters the fundamentals enters it without deep mathematical specialisation.',
          'Three differences from ordinary programming must be internalised. First, the output is probabilistic rather than definite: the same model with the same input may return something different, so certainty assumptions cannot be built on it. Second, calls are relatively slow and costly, so the system is designed around a heavy network operation rather than a local function call.',
          'Third, quality depends decisively on the input: poor data gives poor output however strong the model. That is why most project time goes to preparing and cleaning data rather than choosing a model, a fact that surprises newcomers.',
          'An indispensable design rule: never assume the call succeeds nor the output is valid. Verify the output shape before using it, set a timeout with a fallback, and compute per-operation cost before release rather than after the invoice. A system assuming perfection collapses on its first real production day.',
          'As for choosing a career path, many go wrong in one way: they read for months comparing salaries and try nothing. In truth, two weeks building something small in a field tells you more about its fit for you than fifty articles. Experiment rather than only read.',
          'Three questions settle the choice: which problems do you actually enjoy solving, visual, data or structural? Which work environment suits you, startup speed or large-organisation discipline? And what does the market look like where you are or remotely? Finally, a specialisation is not a lifetime contract: most professionals moved at least once, and fundamentals are what make moving possible, which is why building them opened this section and closes it.'
        ],
        table: {
          head_ar: ['الفرق', 'البرمجة المعتادة', 'الذكاء التطبيقي'],
          head_en: ['Aspect', 'Ordinary programming', 'Applied AI'],
          rows: [
            ['المخرج', 'قاطع ومكرَّر', 'احتمالي قد يختلف'],
            ['الاستدعاء', 'دالة محلية سريعة', 'عملية شبكية بطيئة ومكلفة'],
            ['مصدر الجودة', 'صحة المنطق', 'جودة البيانات أولاً'],
            ['أكثر الوقت', 'كتابة المنطق', 'تجهيز البيانات وتنظيفها']
          ]
        },
        keyPoints_ar: [
          'أغلب العمل في الذكاء التطبيقي هندسة حول نموذج جاهز لا بناء نموذج.',
          'المخرج احتمالي، فلا تُبنى عليه فروض اليقين.',
          'الاستدعاء بطيء ومكلف، فيُصمَّم النظام على هذا الأساس.',
          'البيانات الرديئة تُفسد أقوى نموذج، وأكثر الوقت يذهب لتجهيزها.',
          'تحقق من المخرج وضع مهلة وبديلاً واحسب الكلفة قبل النشر.',
          'أسبوعان من البناء يحسمان ملاءمة المجال أكثر من خمسين مقالاً.',
          'التخصص ليس عقداً أبدياً، والأساسيات هي ما يجعل الانتقال ممكناً.'
        ],
        keyPoints_en: [
          'Most applied AI work is engineering around a ready model, not building one.',
          'The output is probabilistic, so certainty assumptions cannot rest on it.',
          'Calls are slow and costly, so design the system on that basis.',
          'Poor data ruins the strongest model, and most time goes to preparing it.',
          'Validate the output, set a timeout and fallback, and compute cost before release.',
          'Two weeks of building settles a field fit better than fifty articles.',
          'A specialisation is not a lifetime contract, and fundamentals make moving possible.'
        ],
        analogy_ar: 'تخيّل النموذج خبيراً استشارياً تستأجره بالساعة: رأيه نافع لكنه ليس قاطعاً، ويتأخر أحياناً، ويكلّفك مع كل سؤال. فلا تبني نظامك على أنه سيرد فوراً وبيقين دائم، بل تضع مهلة وبديلاً وتراجع جوابه قبل اعتماده. وأما اختيار التخصص فأشبه باختيار رياضة: لا تعرف أيها يناسبك بقراءة قوانينها، وإنما بأن تلعب أسبوعين وترى أين تجد نفسك.',
        analogy_en: 'Picture the model as a consultant hired by the hour: their opinion is useful but not decisive, sometimes slow, and billed per question. So do not build your system on an instant, certain answer; set a timeout and a fallback and review the answer before relying on it. Choosing a specialisation is like choosing a sport: you learn which suits you by playing for two weeks, not by reading the rules.',
        terms: [
          { term: 'Applied AI', def_ar: 'بناء نظام حول نموذج جاهز بدل بناء النموذج نفسه.', def_en: 'Building a system around a ready model rather than the model itself.' },
          { term: 'Probabilistic Output', def_ar: 'مخرج قد يختلف بين استدعاءين للمدخل نفسه.', def_en: 'Output that may differ between two calls with the same input.' },
          { term: 'Fallback', def_ar: 'بديل يُنفَّذ إن تأخر الاستدعاء أو فشل.', def_en: 'An alternative path used when a call is delayed or fails.' },
          { term: 'Data Preparation', def_ar: 'تنظيف البيانات وتجهيزها، ويستهلك أغلب وقت المشروع.', def_en: 'Cleaning and preparing data, which consumes most project time.' }
        ],
        cards: [
          { q_ar: 'ما طبيعة أغلب العمل في الذكاء الاصطناعي التطبيقي؟', q_en: 'What is most applied AI work?', a_ar: 'هندسة برمجيات حول نموذج جاهز: تجهيز بيانات واستدعاء ومعالجة مخرج وإدارة كلفة.', a_en: 'Software engineering around a ready model: preparing data, calling it, processing output and managing cost.' },
          { q_ar: 'لماذا لا تُبنى فروض اليقين على مخرج النموذج؟', q_en: 'Why can certainty assumptions not rest on model output?', a_ar: 'لأنه احتمالي: النموذج نفسه بالمدخل نفسه قد يعطي مخرجاً مختلفاً.', a_en: 'Because it is probabilistic: the same model with the same input may return something different.' },
          { q_ar: 'أين يذهب أكثر وقت مشروع الذكاء الاصطناعي؟', q_en: 'Where does most AI project time go?', a_ar: 'إلى تجهيز البيانات وتنظيفها لا إلى اختيار النموذج.', a_en: 'To preparing and cleaning data rather than choosing a model.' },
          { q_ar: 'ما أسرع طريقة لحسم ملاءمة تخصص لك؟', q_en: 'What is the fastest way to test a specialisation fit?', a_ar: 'بناء شيء صغير فيه أسبوعين؛ التجربة تحسم أكثر من القراءة الطويلة.', a_en: 'Building something small in it for two weeks; experimenting settles it faster than long reading.' }
        ]
      }
    ]
  },

  // ══════════════════ مسار الذكاء الاصطناعي ══════════════════
  ArtificialIntelligence: {
    // ─────────── أساسيات الذكاء الاصطناعي ───────────
    0: [
      {
        title_ar: 'ما هو الذكاء الاصطناعي وتاريخه',
        title_en: 'What AI Is and Its History',
        lead_ar: 'الذكاء الاصطناعي أنظمة تؤدي مهامّ كانت تتطلب ذكاءً بشرياً، وتاريخه دورات من الحماس المفرط تليها خيبات — وفهم هذي الدورات يحميك من تكرارها.',
        lead_en: 'AI is systems performing tasks that once required human intelligence, and its history is cycles of excessive hype followed by disappointment, and understanding them protects you from repeating them.',
        body_ar: [
          'الذكاء الاصطناعي ليس تعريفاً واحداً متفقاً عليه، وإنما وصف لأنظمة تؤدي مهامّ كنا نظن أنها تحتاج ذكاءً بشرياً: التعرّف على وجه، وفهم جملة، واقتراح قرار. ولاحظ عبارة «كنا نظن»: فما إن يُحل مسألة حتى تُنزع عنها صفة الذكاء ويقال إنها مجرد حساب — وهذي ظاهرة قديمة تُسمّى أثر الذكاء الاصطناعي.',
          'والفرق الجوهري بينه وبين البرمجة التقليدية في مصدر القاعدة. ففي التقليدية أنت تكتب القاعدة صراحةً: إذا كان المبلغ أكبر من كذا فافعل كذا. وفي التعلّم الآلي تعطي النظام أمثلة كثيرة بمدخلاتها ومخرجاتها، فيستخرج هو القاعدة من الأمثلة. ولهذا يصلح للمسائل التي تعرف جوابها ولا تستطيع كتابة قاعدتها: أنت تميّز صورة قطة فوراً ولا تستطيع كتابة شروط تعرّفها.',
          'وتاريخه بدأ منتصف القرن الماضي بتفاؤل كبير: توقّع الرواد أن تُحلّ المسألة خلال عقد. ثم جاءت فترات ركود سُميت «شتاء الذكاء الاصطناعي»، توقّف فيها التمويل بعد أن تبيّن أن الوعود أكبر من الممكن. وتكررت الدورة مرتين على الأقل.',
          'والسبب في التقدّم الأخير ليس اختراع فكرة جديدة تماماً، بل اجتماع ثلاثة عوامل: بيانات ضخمة أتاحها الإنترنت، وقدرة حسابية رخيصة أتاحتها معالجات الرسوميات، وتحسينات خوارزمية متراكمة. فأفكار الشبكات العصبية عمرها عقود، لكنها لم تكن قابلة للتنفيذ عملياً حتى توفّرت هذي الثلاثة.',
          'ويُقسَّم المجال إلى ضيّق وعام. فالضيّق يتقن مهمة واحدة ولا يعرف غيرها: نظام يميّز الأورام في الأشعة لا يستطيع لعب الشطرنج ولا فهم نكتة. وكل ما هو موجود اليوم — بلا استثناء — ضيّق. أما العام الذي يضاهي الإنسان في أي مهمة فلا يزال فرضاً بحثياً لم يتحقق، ومن يقول غير ذلك يبيع لا يصف.',
          'والدرس العملي من هذا التاريخ: افصل ما يفعله النظام فعلاً عمّا يُقال إنه يفعله. فالنظام الذي يكتب نصاً مقنعاً لا يفهم ما يكتب بالضرورة، والذي يشخّص مرضاً بدقة عالية قد يفشل تماماً على بيانات مستشفى آخر. والسؤال الصحيح دائماً: على أي بيانات دُرِّب، وعلى أي بيانات قيس، وأين يفشل؟'
        ],
        body_en: [
          'AI has no single agreed definition; it describes systems performing tasks we thought required human intelligence: recognising a face, understanding a sentence, suggesting a decision. Note the phrase "we thought": once a problem is solved, intelligence is stripped from it and it is called mere computation, an old phenomenon known as the AI effect.',
          'The fundamental difference from traditional programming is where the rule comes from. Traditionally you write the rule explicitly: if the amount exceeds this, do that. In machine learning you give the system many examples with inputs and outputs, and it extracts the rule itself. So it suits problems whose answer you know while being unable to write the rule: you recognise a cat photo instantly yet cannot write conditions defining one.',
          'Its history began mid last century with great optimism: pioneers expected the problem solved within a decade. Then came stagnation periods called AI winters, when funding stopped after promises proved larger than the possible. The cycle repeated at least twice.',
          'Recent progress came not from inventing an entirely new idea but from three factors converging: massive data enabled by the internet, cheap computation enabled by graphics processors, and accumulated algorithmic improvements. Neural network ideas are decades old but were not practically executable until those three arrived.',
          'The field divides into narrow and general. Narrow masters one task and knows nothing else: a system detecting tumours in scans cannot play chess or understand a joke. Everything existing today, without exception, is narrow. General AI matching a human at any task remains an unrealised research hypothesis, and whoever says otherwise is selling rather than describing.',
          'The practical lesson from this history: separate what a system actually does from what it is said to do. A system writing persuasive text does not necessarily understand it, and one diagnosing a disease accurately may fail entirely on another hospital data. The right question is always: what data was it trained on, what data was it measured on, and where does it fail?'
        ],
        table: {
          head_ar: ['البُعد', 'البرمجة التقليدية', 'التعلّم الآلي'],
          head_en: ['Aspect', 'Traditional programming', 'Machine learning'],
          rows: [
            ['مصدر القاعدة', 'يكتبها المبرمج صراحةً', 'يستخرجها النظام من الأمثلة'],
            ['المدخل', 'بيانات وقاعدة', 'بيانات ومخرجات مطلوبة'],
            ['المخرج', 'نتيجة محددة', 'نموذج يعمّم على حالات جديدة'],
            ['يصلح لـ', 'قواعد واضحة يمكن كتابتها', 'أنماط تعرفها ولا تستطيع وصفها']
          ]
        },
        keyPoints_ar: [
          'الفرق الجوهري: في التقليدية تكتب القاعدة، وفي التعلّم يستخرجها النظام من الأمثلة.',
          'التعلّم يصلح لما تعرف جوابه ولا تستطيع كتابة قاعدته.',
          'التقدّم الأخير ثمرة اجتماع البيانات والقدرة الحسابية والتحسينات، لا فكرة جديدة.',
          'كل ما هو موجود اليوم ذكاء ضيّق يتقن مهمة واحدة، والعام فرض بحثي.',
          'اسأل دائماً: على أي بيانات دُرِّب، وبأي بيانات قيس، وأين يفشل؟'
        ],
        keyPoints_en: [
          'The core difference: traditionally you write the rule, in learning the system extracts it from examples.',
          'Learning suits problems whose answer you know but whose rule you cannot write.',
          'Recent progress came from data, compute and improvements converging, not a new idea.',
          'Everything today is narrow AI mastering one task; general AI is a research hypothesis.',
          'Always ask: trained on what data, measured on what data, and where does it fail?'
        ],
        analogy_ar: 'تخيّل أنك تعلّم طفلاً تمييز التفاح. البرمجة التقليدية أن تكتب له قائمة شروط: أحمر، مستدير، بحجم كذا — وستفشل مع تفاحة خضراء أو مقضومة. والتعلّم الآلي أن تريه ألف تفاحة وتقول «هذا تفاح»، وألف شيء آخر وتقول «هذا ليس تفاحاً»، فيستخرج هو ما يجمعها. ولهذا يميّز تفاحة لم يرها قط، ويفشل لو كانت كل أمثلتك حمراء وجاءته خضراء.',
        analogy_en: 'Picture teaching a child to recognise apples. Traditional programming writes a list of conditions: red, round, this size, and fails on a green or bitten one. Machine learning shows a thousand apples saying "this is an apple" and a thousand other things saying "this is not", so the child extracts what unites them. That is why it recognises an apple it never saw, and fails if all your examples were red and a green one arrives.',
        terms: [
          { term: 'Narrow AI', def_ar: 'نظام يتقن مهمة واحدة ولا يعمل خارجها.', def_en: 'A system mastering one task and useless outside it.' },
          { term: 'General AI', def_ar: 'ذكاء يضاهي الإنسان في أي مهمة، ولم يتحقق بعد.', def_en: 'Intelligence matching a human at any task, not yet achieved.' },
          { term: 'AI Winter', def_ar: 'فترة ركود وتوقف تمويل بعد وعود لم تتحقق.', def_en: 'A stagnation period with halted funding after unmet promises.' },
          { term: 'AI Effect', def_ar: 'نزع صفة الذكاء عن المسألة بمجرد حلّها.', def_en: 'Stripping intelligence from a problem once it is solved.' }
        ],
        cards: [
          { q_ar: 'ما الفرق الجوهري بين البرمجة التقليدية والتعلّم الآلي؟', q_en: 'Core difference between traditional programming and ML?', a_ar: 'في التقليدية تكتب القاعدة بنفسك، وفي التعلّم يستخرجها النظام من الأمثلة.', a_en: 'Traditionally you write the rule yourself; in learning the system extracts it from examples.' },
          { q_ar: 'لماذا تقدّم المجال أخيراً رغم قِدم أفكاره؟', q_en: 'Why did the field advance recently despite old ideas?', a_ar: 'لاجتماع ثلاثة: بيانات ضخمة، وقدرة حسابية رخيصة، وتحسينات خوارزمية متراكمة.', a_en: 'Three converged: massive data, cheap computation, and accumulated algorithmic improvements.' },
          { q_ar: 'هل يوجد اليوم ذكاء اصطناعي عام؟', q_en: 'Does general AI exist today?', a_ar: 'لا، كل الموجود ضيّق يتقن مهمة واحدة؛ والعام فرض بحثي لم يتحقق.', a_en: 'No, everything existing is narrow, mastering one task; general AI is an unrealised hypothesis.' },
          { q_ar: 'ما الأسئلة الثلاثة التي تُسأل عن أي نظام؟', q_en: 'Which three questions should be asked of any system?', a_ar: 'على أي بيانات دُرِّب، وبأي بيانات قيس أداؤه، وأين يفشل.', a_en: 'What data it was trained on, what data it was measured on, and where it fails.' }
        ]
      },
      {
        title_ar: 'كيف يعمل النظام: بيانات ثم تدريب ثم نموذج ثم استدلال',
        title_en: 'How a System Works: Data, Training, Model, Inference',
        lead_ar: 'كل نظام تعلّم آلي يمر بالمسار نفسه: بيانات تُجهَّز، وتدريب يضبط الأوزان، ونموذج يُحفَظ، واستدلال يُستخدم — والخلط بين التدريب والاستدلال أصل كثير من سوء الفهم.',
        lead_en: 'Every machine-learning system follows one path: data prepared, training adjusting weights, a saved model, and inference in use, and confusing training with inference underlies much misunderstanding.',
        body_ar: [
          'المرحلة الأولى هي البيانات، وهي أكثر ما يُستهان به وأكثر ما يستهلك الوقت. فالبيانات تُجمَع، ثم تُنظَّف من التكرار والقيم الشاذة والحقول الناقصة، ثم تُحوَّل إلى صيغة رقمية يفهمها النموذج. والقاعدة التي لا استثناء لها: بيانات رديئة تعطي نموذجاً رديئاً مهما كانت الخوارزمية متقدمة.',
          'ثم يأتي التدريب، وهو حلقة تتكرر: يمرّر النموذج المدخل ويتنبأ، وتُقارن نتيجته بالجواب الصحيح فتُحسب الخسارة، ثم تُعدَّل أوزانه الداخلية قليلاً في الاتجاه الذي يقلل الخسارة. ويتكرر هذا آلاف المرات حتى تستقر الخسارة عند حدّ مقبول.',
          'والوزن هنا رقم يحدد أهمية كل مدخل في القرار. فالنموذج في بدايته أوزانه عشوائية فيتنبأ عشوائياً، والتدريب ليس إلا ضبطاً تدريجياً لهذي الأرقام. ولهذا يقال إن النموذج «تعلّم»: لم يُخزَّن فيه شيء من الأمثلة، وإنما تغيّرت أرقامه لتلتقط النمط.',
          'وحين ينتهي التدريب يُحفَظ الناتج: بنية النموذج مع أوزانه النهائية. وهذا الملف هو المنتج القابل للنشر، وحجمه قد يكون ميجابايتات أو جيجابايتات، ويمكن نقله وتشغيله على جهاز آخر بلا إعادة تدريب.',
          'ثم الاستدلال: استخدام النموذج المدرَّب على بيانات جديدة لم يرها. وهنا فرق جوهري في الكلفة والزمن: التدريب عملية ثقيلة تُجرى مرة أو مرات معدودة وقد تستغرق ساعات أو أياماً على عتاد قوي، والاستدلال خفيف نسبياً يتكرر ملايين المرات. ولهذا تُقاس تكلفة النظام في الإنتاج بالاستدلال لا بالتدريب.',
          'والخلط بين المرحلتين مصدر أخطاء شائعة: من يظن أن النموذج «يتعلّم من المستخدمين أثناء الاستخدام» يخلط بينهما — فالنموذج المنشور لا يتغيّر إلا إن أُعيد تدريبه صراحةً على بيانات جديدة ثم نُشر من جديد.'
        ],
        body_en: [
          'The first stage is data, the most underestimated and most time-consuming. Data is collected, cleaned of duplicates, outliers and missing fields, then converted into a numeric form the model understands. The rule with no exception: poor data yields a poor model however advanced the algorithm.',
          'Then comes training, a repeating loop: the model takes an input and predicts, its result is compared with the correct answer to compute a loss, then its internal weights are nudged slightly in the direction reducing that loss. This repeats thousands of times until the loss settles at an acceptable level.',
          'A weight here is a number setting how much each input matters to the decision. A fresh model has random weights so it predicts randomly, and training is nothing but the gradual tuning of those numbers. That is why we say the model learned: none of the examples are stored in it; its numbers changed to capture the pattern.',
          'When training ends the result is saved: the model structure with its final weights. That file is the deployable product, sized in megabytes or gigabytes, and it can be moved and run on another machine with no retraining.',
          'Then inference: using the trained model on new data it never saw. Here lies a fundamental cost and time difference: training is heavy, done once or a few times, possibly taking hours or days on powerful hardware, while inference is relatively light and repeats millions of times. So production system cost is measured by inference rather than training.',
          'Confusing the two stages causes common errors: whoever thinks a model "learns from users while being used" is conflating them, since a deployed model does not change unless explicitly retrained on new data and redeployed.'
        ],
        table: {
          head_ar: ['المرحلة', 'ماذا يحدث', 'تكرارها', 'كلفتها'],
          head_en: ['Stage', 'What happens', 'Frequency', 'Cost'],
          rows: [
            ['البيانات', 'جمع وتنظيف وتحويل رقمي', 'مستمرة', 'أكثر الوقت'],
            ['التدريب', 'ضبط الأوزان بتقليل الخسارة', 'مرات معدودة', 'ثقيلة جداً'],
            ['النموذج', 'حفظ البنية والأوزان', 'مرة لكل تدريب', 'تخزين'],
            ['الاستدلال', 'استخدامه على بيانات جديدة', 'ملايين المرات', 'خفيفة لكنها تتراكم']
          ]
        },
        keyPoints_ar: [
          'بيانات رديئة تعطي نموذجاً رديئاً مهما تقدّمت الخوارزمية.',
          'التدريب حلقة: تنبّؤ ثم حساب خسارة ثم تعديل أوزان.',
          'الوزن رقم يحدد أهمية المدخل، والتعلّم ضبط تدريجي لهذي الأرقام.',
          'النموذج المحفوظ بنية وأوزان، وهو المنتج القابل للنشر.',
          'التدريب ثقيل نادر، والاستدلال خفيف متكرر — وكلفة الإنتاج بالاستدلال.',
          'النموذج المنشور لا يتعلّم من الاستخدام إلا بإعادة تدريب ونشر.'
        ],
        keyPoints_en: [
          'Poor data yields a poor model however advanced the algorithm.',
          'Training is a loop: predict, compute loss, adjust weights.',
          'A weight is a number setting input importance, and learning is tuning those numbers.',
          'A saved model is structure plus weights, and it is the deployable product.',
          'Training is heavy and rare while inference is light and frequent, so production cost is inference.',
          'A deployed model does not learn from use without explicit retraining and redeployment.'
        ],
        analogy_ar: 'تخيّل التدريب طالباً يحل ألف مسألة ويصحّح كل واحدة ويعدّل فهمه قليلاً بعد كل خطأ. والنموذج هو حالة فهمه بعد أن انتهى. والاستدلال أن تعطيه مسألة جديدة في الامتحان فيجيب بما فهمه — ولاحظ أنه في الامتحان لا يتعلّم شيئاً جديداً مهما أجاب، تماماً كالنموذج المنشور.',
        analogy_en: 'Picture training as a student solving a thousand problems, correcting each and adjusting their understanding slightly after every mistake. The model is their state of understanding once finished. Inference is handing them a new exam problem to answer from that understanding, and note that during the exam they learn nothing new however they answer, exactly like a deployed model.',
        terms: [
          { term: 'Weight', def_ar: 'رقم داخل النموذج يحدد أهمية مدخل في القرار.', def_en: 'A number inside the model setting how much an input matters.' },
          { term: 'Loss', def_ar: 'مقياس بُعد تنبؤ النموذج عن الجواب الصحيح.', def_en: 'A measure of how far a prediction is from the correct answer.' },
          { term: 'Training', def_ar: 'حلقة تعديل الأوزان لتقليل الخسارة على أمثلة معلومة.', def_en: 'The loop adjusting weights to reduce loss on known examples.' },
          { term: 'Inference', def_ar: 'استخدام النموذج المدرَّب على بيانات جديدة.', def_en: 'Using a trained model on new data.' }
        ],
        cards: [
          { q_ar: 'ما مراحل أي نظام تعلّم آلي؟', q_en: 'What are the stages of any ML system?', a_ar: 'بيانات تُجهَّز، ثم تدريب يضبط الأوزان، ثم نموذج يُحفَظ، ثم استدلال على بيانات جديدة.', a_en: 'Data prepared, training adjusting weights, a saved model, then inference on new data.' },
          { q_ar: 'ماذا يتغيّر داخل النموذج أثناء التدريب؟', q_en: 'What changes inside a model during training?', a_ar: 'أوزانه: أرقام تحدد أهمية كل مدخل، تُعدَّل تدريجياً لتقليل الخسارة.', a_en: 'Its weights: numbers setting input importance, nudged gradually to reduce loss.' },
          { q_ar: 'أي المرحلتين تحدد كلفة النظام في الإنتاج؟', q_en: 'Which stage sets production cost?', a_ar: 'الاستدلال، لأنه يتكرر ملايين المرات وإن كان خفيفاً في المرة الواحدة.', a_en: 'Inference, because it repeats millions of times even though each call is light.' },
          { q_ar: 'هل يتعلّم النموذج المنشور من المستخدمين؟', q_en: 'Does a deployed model learn from users?', a_ar: 'لا، إلا إن أُعيد تدريبه صراحةً على بيانات جديدة ثم أُعيد نشره.', a_en: 'No, unless it is explicitly retrained on new data and redeployed.' }
        ]
      },
      {
        title_ar: 'أنواع التعلّم الثلاثة',
        title_en: 'The Three Types of Learning',
        lead_ar: 'المُشرَف يتعلّم من أمثلة مصحّحة، وغير المُشرَف يكتشف بنية بلا إجابات، والمعزّز يتعلّم بالتجربة والمكافأة — واختيار النوع يحدده ما تملكه من بيانات لا ما تريده.',
        lead_en: 'Supervised learning uses labelled examples, unsupervised discovers structure with no answers, and reinforcement learns by trial and reward, and the choice is set by the data you have rather than the outcome you want.',
        body_ar: [
          'التعلّم المُشرَف أكثر الأنواع استخداماً: تعطي النموذج أمثلة كل واحد منها مدخل ومعه الجواب الصحيح، فيتعلّم الربط بينهما. فتعطيه آلاف الرسائل مصنّفة «مزعجة» و«سليمة»، فيتعلّم تصنيف رسالة جديدة. وشرطه الأساسي وجود بيانات موسومة، وهذا الشرط هو أكبر عائق عملي لأن الوسم يحتاج جهداً بشرياً مكلفاً.',
          'وينقسم المُشرَف بحسب نوع المخرج: تصنيف إن كان المخرج فئة من فئات محددة — مزعج أم سليم، ورم حميد أم خبيث. وانحدار إن كان المخرج رقماً متصلاً — سعر بيت، وعدد مبيعات الشهر القادم. والخلط بينهما شائع، وهو يغيّر كل شيء: الخوارزمية، ودالة الخسارة، ومقاييس التقييم.',
          'والتعلّم غير المُشرَف يعمل بلا إجابات: تعطيه بيانات فقط ويكتشف هو بنيتها. وأشهر تطبيقاته التجميع: يقسّم العملاء إلى مجموعات متشابهة السلوك بلا أن تخبره ما المجموعات ولا كم عددها. ولاحظ أنه لا يسمّي المجموعات — يعطيك أنها ثلاث ويترك لك تفسير كل واحدة، وهذا التفسير عمل بشري لا آلي.',
          'ومن تطبيقاته أيضاً تقليل الأبعاد: ضغط بيانات كثيرة الحقول إلى حقول أقل تحفظ أهم ما فيها، فيسهل عرضها وتسريع تدريبها. وكشف الشذوذ: تعلّم ما هو معتاد ثم الإشارة لما يخالفه، ويُستخدم في كشف الاحتيال وأعطال المعدات.',
          'والتعلّم المعزّز مختلف كلياً في بنيته: وكيل يتفاعل مع بيئة، يتخذ إجراءً فتتغيّر حالة البيئة ويأتيه مكافأة أو عقوبة، فيتعلّم عبر التجربة المتكررة السياسة التي تعظّم المكافأة على المدى الطويل. وهو ما تُدرَّب به أنظمة الألعاب والروبوتات.',
          'وأصعب ما فيه مسألتان: المكافأة المؤجّلة، إذ قد لا تظهر نتيجة قرار إلا بعد مئة خطوة فيصعب معرفة أي خطوة كانت سبب الفوز؛ والموازنة بين الاستكشاف والاستغلال، أي متى يجرّب الوكيل شيئاً جديداً قد يكون أفضل ومتى يكتفي بما يعرف أنه ينجح. وتصميم دالة المكافأة نفسها فخ شهير: وكيل كوفئ على السرعة قد يتعلّم أن يقفز من الحافة لأنه أسرع طريق للنهاية.'
        ],
        body_en: [
          'Supervised learning is the most used: you give the model examples each pairing an input with its correct answer, so it learns the link. Thousands of messages labelled spam and legitimate teach it to classify a new one. Its requirement is labelled data, and that requirement is the biggest practical obstacle since labelling needs costly human effort.',
          'Supervised learning splits by output type: classification when the output is one of defined categories, spam or legitimate, benign or malignant; and regression when the output is a continuous number, a house price or next month sales. Confusing them is common and changes everything: the algorithm, the loss function and the evaluation metrics.',
          'Unsupervised learning works with no answers: you give it data only and it discovers structure. Its best-known application is clustering: splitting customers into behaviourally similar groups without telling it what the groups are or how many. Note that it does not name the groups; it tells you there are three and leaves interpreting each to you, and that interpretation is human work.',
          'It also covers dimensionality reduction: compressing many-featured data into fewer features preserving what matters, easing display and speeding training. And anomaly detection: learning what is normal then flagging what deviates, used in fraud detection and equipment failure.',
          'Reinforcement learning is structurally different: an agent interacts with an environment, takes an action changing the environment state, and receives a reward or penalty, learning through repeated trial the policy maximising long-term reward. It trains game systems and robots.',
          'Its two hardest problems are delayed reward, since a decision consequence may appear a hundred steps later making it hard to know which step caused the win; and the explore-exploit balance, deciding when to try something new that might be better and when to stick with what works. Designing the reward function itself is a famous trap: an agent rewarded for speed may learn to jump off the edge as the fastest route to the end.'
        ],
        table: {
          head_ar: ['النوع', 'ما يحتاجه', 'ما ينتجه', 'مثال'],
          head_en: ['Type', 'What it needs', 'What it yields', 'Example'],
          rows: [
            ['مُشرَف · تصنيف', 'أمثلة موسومة بفئات', 'فئة لكل مدخل جديد', 'رسالة مزعجة أم لا'],
            ['مُشرَف · انحدار', 'أمثلة موسومة بأرقام', 'رقماً متصلاً', 'سعر بيت'],
            ['غير مُشرَف', 'بيانات بلا إجابات', 'بنية ومجموعات', 'شرائح عملاء'],
            ['معزّز', 'بيئة ومكافأة', 'سياسة قرارات', 'روبوت يتعلّم المشي']
          ]
        },
        keyPoints_ar: [
          'اختيار النوع يحدده ما تملك من بيانات لا ما تريد من نتيجة.',
          'المُشرَف يشترط بيانات موسومة، والوسم أكبر عائق عملي لكلفته.',
          'التصنيف مخرجه فئة والانحدار مخرجه رقم متصل، والخلط يغيّر كل شيء.',
          'غير المُشرَف يكتشف المجموعات ولا يسمّيها، والتفسير عمل بشري.',
          'المعزّز يتعلّم بالتجربة والمكافأة، ويصارع المكافأة المؤجّلة وموازنة الاستكشاف.',
          'دالة مكافأة سيئة تعلّم الوكيل حيلة تحقق الرقم وتخالف المقصود.'
        ],
        keyPoints_en: [
          'The type is chosen by the data you have, not the outcome you want.',
          'Supervised learning requires labelled data, and labelling is the biggest practical obstacle.',
          'Classification outputs a category and regression a continuous number, and confusing them changes everything.',
          'Unsupervised learning finds groups without naming them; interpretation is human work.',
          'Reinforcement learns by trial and reward, wrestling with delayed reward and the explore-exploit balance.',
          'A poor reward function teaches the agent a trick that hits the number and defeats the intent.'
        ],
        analogy_ar: 'تخيّل ثلاثة طلاب. الأول يذاكر بأسئلة وحلولها فيتعلّم بالمقارنة — هذا المُشرَف. والثاني يُعطى كتاباً بلا أسئلة ويُطلب منه أن يجد الأنماط والتشابهات بنفسه — هذا غير المُشرَف. والثالث يُلقى في لعبة لا يعرف قواعدها فيجرّب ويخسر ويربح حتى يفهم ما ينفع — هذا المعزّز. ولاحظ أن الثالث لو كوفئ على جمع النقاط فقط، فقد يتعلّم أن يدور حول نقطة واحدة يجمعها إلى الأبد بدل أن يكمل اللعبة.',
        analogy_en: 'Picture three students. The first studies with questions and their answers, learning by comparison: supervised. The second is handed a book with no questions and asked to find patterns and similarities alone: unsupervised. The third is dropped into a game whose rules they do not know, trying, losing and winning until they grasp what works: reinforcement. Note that if the third is rewarded only for collecting points, they may learn to circle one point forever instead of finishing the game.',
        terms: [
          { term: 'Supervised Learning', def_ar: 'تعلّم من أمثلة مدخلاتها معلومة الجواب.', def_en: 'Learning from examples whose answers are known.' },
          { term: 'Classification', def_ar: 'تعلّم مُشرَف مخرجه فئة من فئات محددة.', def_en: 'Supervised learning whose output is one of defined categories.' },
          { term: 'Regression', def_ar: 'تعلّم مُشرَف مخرجه رقم متصل.', def_en: 'Supervised learning whose output is a continuous number.' },
          { term: 'Clustering', def_ar: 'تجميع المتشابهات بلا إجابات مسبقة ولا تسمية.', def_en: 'Grouping similar items with no prior answers and no naming.' },
          { term: 'Reward Function', def_ar: 'الدالة التي تحدد ما يُكافأ عليه الوكيل، وسوء تصميمها يفسد سلوكه.', def_en: 'The function defining what the agent is rewarded for; poor design corrupts its behaviour.' }
        ],
        cards: [
          { q_ar: 'ما الذي يحدد نوع التعلّم المناسب؟', q_en: 'What determines the right learning type?', a_ar: 'ما تملكه من بيانات: موسومة أم لا، وهل ثمة بيئة ومكافأة — لا ما تريده من نتيجة.', a_en: 'The data you have: labelled or not, and whether an environment and reward exist, not the outcome you want.' },
          { q_ar: 'ما الفرق بين التصنيف والانحدار؟', q_en: 'Difference between classification and regression?', a_ar: 'التصنيف مخرجه فئة محددة، والانحدار مخرجه رقم متصل — ويختلف بهما كل شيء.', a_en: 'Classification outputs a defined category and regression a continuous number, and everything differs between them.' },
          { q_ar: 'هل يسمّي التجميع المجموعات التي يجدها؟', q_en: 'Does clustering name the groups it finds?', a_ar: 'لا، يعطيك المجموعات ويترك تفسيرها وتسميتها لك.', a_en: 'No, it gives you the groups and leaves interpreting and naming them to you.' },
          { q_ar: 'ما فخ دالة المكافأة في التعلّم المعزّز؟', q_en: 'What is the reward function trap?', a_ar: 'أن يتعلّم الوكيل حيلة تحقق الرقم المكافَأ عليه وتخالف المقصود منه.', a_en: 'The agent learns a trick hitting the rewarded number while defeating the intent behind it.' }
        ]
      },
      {
        title_ar: 'خريطة المجال ومجالات التطبيق',
        title_en: 'The Field Map and Application Areas',
        lead_ar: 'الذكاء الاصطناعي دوائر متداخلة لا مترادفات: التعلّم الآلي جزء منه، والتعلّم العميق جزء من التعلّم الآلي — والخلط بينها يفسد فهم أي خبر تقرؤه.',
        lead_en: 'AI is nested circles rather than synonyms: machine learning is part of it and deep learning is part of machine learning, and blurring them corrupts your reading of any news item.',
        body_ar: [
          'تُستخدم المصطلحات الثلاثة كأنها مترادفة وهي ليست كذلك. فالذكاء الاصطناعي هو الدائرة الأوسع: كل ما يجعل الآلة تؤدي مهامّ ذكية، بما فيها أنظمة قواعد قديمة لا تتعلّم شيئاً. والتعلّم الآلي دائرة داخله: الأنظمة التي تستخرج القاعدة من البيانات. والتعلّم العميق دائرة داخل التعلّم الآلي: ما يستخدم شبكات عصبية بطبقات كثيرة.',
          'والفرق العملي بين التعلّم الآلي التقليدي والعميق في مصدر السمات. ففي التقليدي يحدد الخبير البشري السمات المهمة: لتقدير سعر بيت يقول إن المساحة وعدد الغرف والموقع هي ما يهم. وفي العميق تُستخرج السمات آلياً من البيانات الخام عبر الطبقات: تتعلّم الطبقة الأولى الحواف، والتالية الأشكال، والتالية أجزاء الوجه.',
          'ولهذا يتفوق العميق على البيانات غير المهيكلة — صور وصوت ونص — حيث يصعب على الإنسان تحديد السمات. أما على البيانات الجدولية المهيكلة فالنماذج التقليدية غالباً أفضل: أسرع تدريباً، وأقل حاجة للبيانات، وأسهل تفسيراً. والقفز إلى العميق في مسألة جدولية بسيطة خطأ شائع يكلّف بلا فائدة.',
          'ومجالات التطبيق الكبرى أربعة. الرؤية الحاسوبية: تصنيف الصور وكشف الأجسام وتحليل الأشعة الطبية. ومعالجة اللغة الطبيعية: الترجمة والتلخيص والإجابة والمساعدين المحاورين. وأنظمة التوصية: اقتراح منتج أو محتوى بناءً على السلوك. والتنبؤ بالسلاسل الزمنية: الطلب والأسعار وأعطال المعدات.',
          'ولكل مجال قيوده التي لا تُفهم إلا بالعمل فيه: الرؤية حسّاسة لظروف التصوير فنموذج دُرِّب على صور نهارية واضحة يفشل ليلاً؛ واللغة حسّاسة للهجة والسياق؛ والتوصية تعاني «البداية الباردة» إذ لا تملك سلوكاً لمستخدم جديد؛ والتنبؤ ينهار عند تغيّر جذري في الظروف لأنه تعلّم ماضياً لم يعد يمثّل الحاضر.',
          'والقاعدة التي تحمي من الوهم: الذكاء الاصطناعي أداة لمسائل بعينها لا حلّ لكل مسألة. فإن كانت القاعدة معروفة وواضحة، فاكتبها برمجياً ولا تدرّب نموذجاً. وإن كانت البيانات قليلة أو رديئة، فالنموذج سيتعلّم الرداءة. وإن كان الخطأ غير محتمل في مجالك، فتذكّر أن النموذج احتمالي بطبعه ولا يعطي يقيناً.'
        ],
        body_en: [
          'The three terms are used as synonyms and are not. AI is the widest circle: everything making a machine perform intelligent tasks, including old rule systems that learn nothing. Machine learning is a circle inside it: systems extracting rules from data. Deep learning is a circle inside machine learning: those using neural networks with many layers.',
          'The practical difference between traditional and deep learning is where features come from. Traditionally a human expert names the important features: to estimate a house price they say area, room count and location matter. In deep learning features are extracted automatically from raw data through layers: the first learns edges, the next shapes, the next face parts.',
          'So deep learning excels on unstructured data, images, audio and text, where humans struggle to name features. On structured tabular data traditional models are often better: faster to train, needing less data, and easier to interpret. Jumping to deep learning for a simple tabular problem is a common and costly mistake.',
          'There are four major application areas. Computer vision: image classification, object detection, medical scan analysis. Natural language processing: translation, summarisation, answering and conversational assistants. Recommender systems: suggesting a product or content from behaviour. And time-series forecasting: demand, prices and equipment failure.',
          'Each area has constraints understood only by working in it: vision is sensitive to capture conditions so a model trained on clear daylight images fails at night; language is sensitive to dialect and context; recommenders suffer cold start with no behaviour for a new user; and forecasting collapses under a fundamental change in conditions because it learned a past no longer representing the present.',
          'The rule guarding against illusion: AI is a tool for particular problems rather than a solution to every problem. If the rule is known and clear, write it in code and do not train a model. If the data is scarce or poor, the model will learn the poverty. And if error is intolerable in your domain, remember that a model is probabilistic by nature and offers no certainty.'
        ],
        table: {
          head_ar: ['البُعد', 'تعلّم آلي تقليدي', 'تعلّم عميق'],
          head_en: ['Aspect', 'Traditional ML', 'Deep learning'],
          rows: [
            ['السمات', 'يحددها خبير بشري', 'تُستخرج آلياً من الخام'],
            ['نوع البيانات', 'جدولية مهيكلة', 'صور وصوت ونص'],
            ['حجم البيانات', 'يكفيه قليل نسبياً', 'يحتاج كثيراً'],
            ['التفسير', 'أسهل غالباً', 'أصعب بكثير'],
            ['الكلفة', 'أقل', 'أعلى تدريباً وتشغيلاً']
          ]
        },
        keyPoints_ar: [
          'الذكاء الاصطناعي أوسع من التعلّم الآلي، والعميق جزء من التعلّم الآلي.',
          'التقليدي يحدد الخبير سماته، والعميق يستخرجها من البيانات الخام.',
          'العميق يتفوق على الصور والصوت والنص، والتقليدي غالباً أفضل للجدولي.',
          'لكل مجال تطبيق قيد يكسره: ظروف التصوير، واللهجة، والبداية الباردة، وتغيّر الظروف.',
          'إن كانت القاعدة واضحة فاكتبها ولا تدرّب نموذجاً.'
        ],
        keyPoints_en: [
          'AI is wider than machine learning, and deep learning is part of machine learning.',
          'Traditional models take expert-chosen features; deep models extract them from raw data.',
          'Deep learning excels on images, audio and text; traditional often wins on tabular data.',
          'Each application area has a breaking constraint: capture conditions, dialect, cold start, changed conditions.',
          'If the rule is clear, write it in code rather than training a model.'
        ],
        analogy_ar: 'تخيّل الثلاثة دوائر متداخلة كطبقات بصلة. الذكاء الاصطناعي القشرة الخارجية تضم كل ما يبدو ذكياً حتى لو كان جدول قواعد ثابتاً. والتعلّم الآلي طبقة أعمق: ما يستنتج قاعدته بنفسه. والعميق قلب البصلة: ما يستنتج حتى السمات التي يبني عليها. ولهذا حين تقرأ خبراً عن «ذكاء اصطناعي جديد»، اسأل أي طبقة يقصد — فالفرق بينها هائل.',
        analogy_en: 'Picture the three as nested onion layers. AI is the outer skin covering everything that looks intelligent, even a fixed rule table. Machine learning is a deeper layer: what infers its own rule. Deep learning is the core: what infers even the features it builds on. So when you read about "a new AI", ask which layer is meant, because the difference between them is enormous.',
        terms: [
          { term: 'Feature', def_ar: 'سمة تُبنى عليها القرارات، يحددها خبير أو تُستخرج آلياً.', def_en: 'An attribute decisions build on, chosen by an expert or extracted automatically.' },
          { term: 'Structured Data', def_ar: 'بيانات جدولية بأعمدة محددة النوع.', def_en: 'Tabular data with typed columns.' },
          { term: 'Cold Start', def_ar: 'عجز نظام التوصية عن اقتراح شيء لمستخدم بلا سلوك سابق.', def_en: 'A recommender inability to suggest for a user with no prior behaviour.' },
          { term: 'Computer Vision', def_ar: 'مجال تحليل الصور والفيديو آلياً.', def_en: 'The field of analysing images and video automatically.' }
        ],
        cards: [
          { q_ar: 'ما علاقة الذكاء الاصطناعي بالتعلّم الآلي بالعميق؟', q_en: 'How do AI, ML and deep learning relate?', a_ar: 'دوائر متداخلة: الذكاء الاصطناعي الأوسع، والتعلّم الآلي داخله، والعميق داخل التعلّم الآلي.', a_en: 'Nested circles: AI is widest, machine learning inside it, and deep learning inside machine learning.' },
          { q_ar: 'ما الفرق في مصدر السمات بين التقليدي والعميق؟', q_en: 'Where do features come from in each?', a_ar: 'في التقليدي يحددها خبير بشري، وفي العميق تُستخرج آلياً من البيانات الخام عبر الطبقات.', a_en: 'Traditionally a human expert names them; deep models extract them automatically from raw data through layers.' },
          { q_ar: 'متى يكون التعلّم التقليدي أفضل من العميق؟', q_en: 'When is traditional ML better than deep learning?', a_ar: 'على البيانات الجدولية المهيكلة: أسرع وأقل حاجة للبيانات وأسهل تفسيراً.', a_en: 'On structured tabular data: faster, needing less data and easier to interpret.' },
          { q_ar: 'ما مشكلة البداية الباردة؟', q_en: 'What is the cold start problem?', a_ar: 'عجز نظام التوصية عن اقتراح شيء لمستخدم جديد لا سلوك سابق له.', a_en: 'A recommender cannot suggest anything for a new user with no prior behaviour.' }
        ]
      },
      {
        title_ar: 'حدود الأنظمة والأخلاقيات والتحيّز',
        title_en: 'System Limits, Ethics and Bias',
        lead_ar: 'النموذج لا يفهم ولا يقصد، وإنما يلتقط أنماطاً في بياناته — فإن كانت البيانات تحمل ظلماً تاريخياً، تعلّمه النموذج وأعاد إنتاجه بمظهر موضوعي.',
        lead_en: 'A model neither understands nor intends; it captures patterns in its data, so if that data carries historical injustice the model learns and reproduces it under an appearance of objectivity.',
        body_ar: [
          'أول حدّ يجب استيعابه: النموذج لا يفهم المعنى، وإنما يلتقط ارتباطات إحصائية. فنظام يصنّف صور الذئاب والكلاب بدقة عالية قد يكون تعلّم أن الثلج في الخلفية يعني ذئباً، لأن أغلب صور الذئاب في بياناته كانت في الثلج. وهذي حالة حقيقية موثّقة: النموذج نجح في الاختبار وفشل في الواقع لأنه تعلّم الشيء الخطأ.',
          'ومن هنا الفرق بين الارتباط والسببية. فالنموذج يجد أن هذا يرتبط بذاك، ولا يعرف أيهما سبب الآخر ولا إن كان بينهما عامل ثالث. ولهذا لا يصح أن يُبنى على مخرجه قرار سببي: نموذج يجد أن مرضى قسم بعينه أعلى وفاةً لا يعني أن القسم يقتلهم، بل قد يكون قسم الحالات الحرجة.',
          'والتحيّز مسألة أعمق من كونها خللاً تقنياً. فالنموذج يتعلّم من بيانات تاريخية، والتاريخ فيه تمييز. فنظام توظيف دُرِّب على قرارات سابقة فُضِّل فيها فئة، سيتعلّم أن يفضّلها — لا لأنه «متحيّز» بقصد، بل لأنه التقط النمط بأمانة. وهذا يجعل المشكلة أخطر: نتيجة متحيّزة تخرج بمظهر رقمي موضوعي فتُصدَّق أكثر من قرار بشري متحيّز.',
          'ومصادر التحيّز ثلاثة على الأقل: بيانات غير ممثِّلة، كنظام تعرّف على الوجوه دُرِّب أغلبه على بشرة فاتحة فتنخفض دقته على غيرها؛ ووسم بشري متحيّز، إذ يحمل الواسمون أحكامهم؛ وأهداف قياس ناقصة، كأن تقيس الدقة الكلية فتخفي فشلاً ذريعاً على فئة صغيرة.',
          'والخصوصية حدّ آخر: النماذج تُدرَّب على بيانات قد تكون شخصية، وقد يمكن استخراج شيء منها من النموذج نفسه. ولهذا تُطبَّق ممارسات كإخفاء الهوية وتقليل ما يُجمَع أصلاً — والقاعدة الأسلم ألا تجمع ما لا تحتاجه، فما لا تملكه لا يُسرَّب منك.',
          'والمسؤولية أخيراً لا تُفوَّض للنموذج. فإن رفض نظام طلب تمويل، فالمسؤول هو المؤسسة لا الخوارزمية، ومن حق المتضرر أن يعرف السبب وأن يعترض. ولهذا تُشترط قابلية التفسير والمراجعة البشرية في القرارات ذات الأثر على الناس — والنموذج مساعد قرار لا صاحبه.'
        ],
        body_en: [
          'The first limit to internalise: a model does not understand meaning, it captures statistical associations. A system classifying wolves and dogs with high accuracy may have learned that snow in the background means wolf, because most wolf photos in its data had snow. That is a real documented case: the model passed the test and failed in reality because it learned the wrong thing.',
          'Hence the difference between correlation and causation. A model finds that this associates with that, knowing neither which causes which nor whether a third factor drives both. So a causal decision must not rest on its output: a model finding one ward has higher mortality does not mean the ward kills patients; it may be the critical care ward.',
          'Bias is deeper than a technical defect. A model learns from historical data, and history contains discrimination. A hiring system trained on past decisions that favoured a group will learn to favour it, not from intent but from faithfully capturing the pattern. That makes the problem worse: a biased result emerges with a numerical, objective appearance and is trusted more than a biased human decision.',
          'Bias has at least three sources: unrepresentative data, such as a face recognition system trained mostly on light skin whose accuracy drops on others; biased human labelling, since labellers carry their judgements; and incomplete measurement targets, such as measuring overall accuracy while hiding catastrophic failure on a small group.',
          'Privacy is another limit: models train on possibly personal data, and something of it may be extractable from the model itself. Hence practices such as anonymisation and minimising what is collected at all, and the safest rule is not collecting what you do not need, since what you do not hold cannot leak from you.',
          'Finally, responsibility is not delegated to the model. If a system denies a financing application, the institution is responsible rather than the algorithm, and the affected person has a right to know why and to appeal. So explainability and human review are required for decisions affecting people, and the model is a decision aid rather than the decision maker.'
        ],
        table: {
          head_ar: ['الحد', 'ما يعنيه', 'الخطأ الناتج عن تجاهله'],
          head_en: ['Limit', 'What it means', 'Error from ignoring it'],
          rows: [
            ['لا فهم بل ارتباط', 'يلتقط أنماطاً لا معاني', 'نجاح في الاختبار وفشل في الواقع'],
            ['ارتباط لا سببية', 'لا يعرف أيهما سبب', 'قرارات سببية خاطئة'],
            ['تحيّز البيانات', 'يتعلّم ظلم التاريخ', 'ظلم بمظهر موضوعي'],
            ['الخصوصية', 'بيانات شخصية في التدريب', 'تسريب أو استخراج'],
            ['المسؤولية', 'لا تُفوَّض للخوارزمية', 'قرار بلا تفسير ولا اعتراض']
          ]
        },
        keyPoints_ar: [
          'النموذج لا يفهم، وقد ينجح لسبب خاطئ كالثلج في خلفية صور الذئاب.',
          'الارتباط ليس سببية، فلا يُبنى على المخرج قرار سببي.',
          'التحيّز ليس خللاً تقنياً بل انعكاس أمين لبيانات تاريخية فيها تمييز.',
          'الدقة الكلية تخفي فشلاً ذريعاً على فئة صغيرة، فقِس لكل فئة.',
          'ما لا تجمعه لا يُسرَّب منك، فقلّل ما تجمع أصلاً.',
          'المسؤولية على المؤسسة لا الخوارزمية، والنموذج مساعد قرار لا صاحبه.'
        ],
        keyPoints_en: [
          'A model does not understand and may succeed for a wrong reason, like snow behind wolves.',
          'Correlation is not causation, so causal decisions must not rest on model output.',
          'Bias is not a technical defect but a faithful reflection of discriminatory historical data.',
          'Overall accuracy hides catastrophic failure on a small group, so measure per group.',
          'What you never collect cannot leak, so minimise collection itself.',
          'Responsibility rests with the institution, not the algorithm; the model aids decisions.'
        ],
        analogy_ar: 'تخيّل طالباً حفظ أن كل أسئلة الامتحان التي فيها كلمة «دائماً» إجابتها خطأ، فنجح بامتياز بلا أن يفهم المادة. ثم جاء امتحان مختلف الصياغة فسقط. النموذج يفعل هذا بالضبط حين يلتقط قرينة سطحية بدل الظاهرة. والتحيّز أن تدرّب موظف توظيف على قرارات مدير كان يفضّل فئة: الموظف الجديد سيقلّده بأمانة ثم يقول لك «أنا محايد، أنا أتبع البيانات».',
        analogy_en: 'Picture a student who memorised that every exam question containing "always" is false, passing brilliantly without understanding the subject, then failing an exam phrased differently. A model does exactly this when it latches onto a superficial cue instead of the phenomenon. Bias is training a new recruiter on the decisions of a manager who favoured one group: the recruit imitates faithfully then tells you "I am neutral, I follow the data".',
        terms: [
          { term: 'Spurious Correlation', def_ar: 'ارتباط سطحي يلتقطه النموذج بدل الظاهرة الحقيقية.', def_en: 'A superficial association a model latches onto instead of the real phenomenon.' },
          { term: 'Algorithmic Bias', def_ar: 'ميل منتظم في المخرجات يضرّ فئة، مصدره البيانات غالباً.', def_en: 'A systematic output tilt harming a group, usually originating in the data.' },
          { term: 'Representativeness', def_ar: 'تمثيل بيانات التدريب لكل الفئات التي سيُستخدم عليها النظام.', def_en: 'Training data representing every group the system will serve.' },
          { term: 'Explainability', def_ar: 'إمكان بيان أسباب قرار النموذج لمن تأثر به.', def_en: 'The ability to state the reasons for a model decision to those affected.' }
        ],
        cards: [
          { q_ar: 'لماذا قد ينجح نموذج في الاختبار ويفشل في الواقع؟', q_en: 'Why might a model pass testing and fail in reality?', a_ar: 'لأنه التقط قرينة سطحية في بيانات التدريب، كالثلف في خلفية صور الذئاب، لا الظاهرة نفسها.', a_en: 'Because it latched onto a superficial cue in the training data, like snow behind wolves, rather than the phenomenon.' },
          { q_ar: 'لماذا يُعد التحيّز الخوارزمي أخطر من البشري؟', q_en: 'Why is algorithmic bias more dangerous than human bias?', a_ar: 'لأنه يخرج بمظهر رقمي موضوعي فيُصدَّق أكثر، ويُطبَّق على آلاف الحالات بسرعة.', a_en: 'It emerges with an objective numerical appearance so it is trusted more, and applies to thousands of cases fast.' },
          { q_ar: 'ما عيب قياس الدقة الكلية وحدها؟', q_en: 'What is wrong with measuring overall accuracy alone?', a_ar: 'تخفي فشلاً ذريعاً على فئة صغيرة، فالمطلوب قياس الأداء لكل فئة على حدة.', a_en: 'It hides catastrophic failure on a small group, so performance must be measured per group.' },
          { q_ar: 'من يتحمّل مسؤولية قرار رفض آلي؟', q_en: 'Who bears responsibility for an automated rejection?', a_ar: 'المؤسسة لا الخوارزمية، ومن حق المتضرر معرفة السبب والاعتراض.', a_en: 'The institution, not the algorithm, and the affected person may know the reason and appeal.' }
        ]
      }
    ],

    // ─────────── الرياضيات والبيانات للذكاء الاصطناعي ───────────
    1: [
      {
        title_ar: 'بايثون ومكتبات المجال',
        title_en: 'Python and the Field Libraries',
        lead_ar: 'بايثون ليست أسرع اللغات، لكنها لغة المجال لأن مكتباتها تنقل الحساب الثقيل إلى كود مترجم سريع وتترك لك التفكير.',
        lead_en: 'Python is not the fastest language, but it is the field language because its libraries push heavy computation into fast compiled code and leave you the thinking.',
        body_ar: [
          'يسأل المبتدئ: لماذا بايثون وهي معروفة بالبطء؟ والجواب أن الحساب الثقيل لا يجري فيها أصلاً. فمكتباتها أغلفة على كود مكتوب بلغات مترجمة سريعة، وأنت تكتب سطراً واحداً بلغة مقروءة فينفَّذ داخلياً بسرعة قريبة من لغة النظام. فتجتمع لك سهولة الكتابة وسرعة التنفيذ.',
          'والمكتبة الأولى في المجال هي مكتبة الحساب العددي، وقلبها المصفوفة متعددة الأبعاد. وتختلف عن قائمة بايثون في ثلاثة: كل عناصرها من نوع واحد، وتُخزَّن في كتلة ذاكرة متّصلة، وتُطبَّق العمليات على المصفوفة كاملة دفعة واحدة بدل المرور بحلقة. وهذي العملية الأخيرة تُسمّى التوجيه، وهي سرّ السرعة.',
          'ولفهم أثر التوجيه: ضرب مليون رقم في اثنين بحلقة بايثون يستغرق أضعاف ما يستغرقه بكتابة عملية واحدة على المصفوفة. والقاعدة العملية في هذا المجال: إن وجدت نفسك تكتب حلقة على بيانات رقمية كثيرة، فغالباً هناك عملية مصفوفية تغنيك عنها وتكون أسرع بمرات.',
          'والشكل مفهوم أساسي: حجم كل بُعد في المصفوفة يُكتب كصف من الأرقام. فالشكل (مئة، خمسة) يعني مئة صفاً وخمسة أعمدة — أي مئة عيّنة كل واحدة بخمس سمات. وأخطاء الشكل أكثر ما يواجهه المبتدئ: عملية ترفض لأن الأبعاد لا تتطابق، وقراءة رسالة الخطأ نفسها تحل أغلبها.',
          'والبثّ آلية تجعل العمليات ممكنة بين مصفوفات مختلفة الأشكال: تُمدّ الأصغر تلقائياً لتطابق الأكبر إن كانت أبعادها متوافقة. فجمع صف واحد على جدول بمئة صف يطبّقه على كل الصفوف بلا حلقة. والقاعدة أن الأبعاد يجب أن تتطابق أو تكون إحداها واحداً.',
          'ومعها مكتبتان: مكتبة الجداول التي تتعامل مع البيانات المسمّاة بأعمدة وصفوف كجدول قاعدة بيانات، وهي أداة التنظيف والاستكشاف الأولى؛ ومكتبة الرسم التي تحوّل الأرقام إلى شكل يُرى. والرسم ليس تزييناً: تُكتشف به القيم الشاذة وعدم التوازن والعلاقات في دقائق، وهي أمور لا تظهر في جدول أرقام.'
        ],
        body_en: [
          'A beginner asks why Python when it is known to be slow. The answer is that heavy computation does not run in it at all. Its libraries wrap code written in fast compiled languages, so you write one readable line executed internally at near system-language speed, combining ease of writing with execution speed.',
          'The first library in the field is the numerical computing one, whose heart is the multi-dimensional array. It differs from a Python list in three ways: all elements share one type, they are stored in a contiguous memory block, and operations apply to the whole array at once instead of looping. That last property is vectorisation, and it is the secret of the speed.',
          'To grasp its effect: multiplying a million numbers by two with a Python loop takes many times longer than one array operation. The practical rule here: if you find yourself writing a loop over lots of numeric data, an array operation probably replaces it and runs many times faster.',
          'Shape is a core concept: the size of each dimension written as a row of numbers. A shape of one hundred by five means a hundred rows and five columns, a hundred samples each with five features. Shape errors are what beginners hit most: an operation refuses because dimensions do not match, and reading the error message solves most of them.',
          'Broadcasting is the mechanism making operations possible between differently shaped arrays: the smaller is stretched automatically to match the larger when dimensions are compatible. Adding one row to a hundred-row table applies it to every row with no loop. The rule is that dimensions must match or one of them must be one.',
          'Two more libraries accompany it: the dataframe library handling named data in columns and rows like a database table, the first tool for cleaning and exploration; and the plotting library turning numbers into something visible. Plotting is not decoration: outliers, imbalance and relationships surface in minutes through it, things a table of numbers never reveals.'
        ],
        table: {
          head_ar: ['المفهوم', 'ما يعنيه', 'خطؤه الشائع'],
          head_en: ['Concept', 'Meaning', 'Common error'],
          rows: [
            ['المصفوفة', 'عناصر موحّدة النوع في ذاكرة متّصلة', 'استخدام قائمة بايثون مكانها'],
            ['التوجيه', 'عملية على المصفوفة كاملة بلا حلقة', 'كتابة حلقة على مليون عنصر'],
            ['الشكل', 'حجم كل بُعد كصف أرقام', 'عملية ترفض لعدم تطابق الأبعاد'],
            ['البثّ', 'مدّ الأصغر ليطابق الأكبر', 'توقّع نتيجة بلا تحقق من التوافق']
          ]
        },
        keyPoints_ar: [
          'بايثون بطيئة، لكن مكتباتها تنفّذ الحساب في كود مترجم سريع.',
          'المصفوفة موحّدة النوع ومتّصلة الذاكرة، ولهذا تسرع.',
          'التوجيه: عملية واحدة على المصفوفة كاملة تغني عن حلقة وتسرّع بمرات.',
          'الشكل هو حجم كل بُعد، وأخطاء الشكل أكثر ما يواجه المبتدئ.',
          'البثّ يمدّ الأصغر ليطابق الأكبر، بشرط تطابق الأبعاد أو أن تكون إحداها واحداً.',
          'الرسم أداة اكتشاف لا تزيين: يكشف الشذوذ وعدم التوازن في دقائق.'
        ],
        keyPoints_en: [
          'Python is slow, but its libraries run computation in fast compiled code.',
          'Arrays are uniformly typed and contiguous in memory, which is why they are fast.',
          'Vectorisation: one whole-array operation replaces a loop and runs many times faster.',
          'Shape is the size of each dimension, and shape errors are what beginners hit most.',
          'Broadcasting stretches the smaller to match the larger when dimensions match or one is one.',
          'Plotting is a discovery tool, not decoration: it reveals outliers and imbalance in minutes.'
        ],
        analogy_ar: 'تخيّل الفرق بين محاسب يجمع ألف رقم بالآلة الحاسبة رقماً رقماً، وآخر يضع الورقة في ماسح يقرأ العمود كله دفعة واحدة. الاثنان يصلان للناتج نفسه، لكن الثاني بآلة مصمَّمة للكميات. التوجيه هو الماسح: تعطيه العمود كاملاً لا رقماً رقماً. وأخطاء الشكل أشبه بمحاولة جمع عمود فيه مئة رقم على عمود فيه خمسون — لا بد أن يعترض أحد.',
        analogy_en: 'Picture an accountant adding a thousand numbers one at a time on a calculator, and another feeding the sheet into a scanner reading the whole column at once. Both reach the same total, but the second uses a machine built for volume. Vectorisation is that scanner: you hand it the whole column rather than number by number. Shape errors are like adding a hundred-number column to a fifty-number one: something must object.',
        terms: [
          { term: 'Array', def_ar: 'مصفوفة موحّدة النوع في كتلة ذاكرة متّصلة.', def_en: 'A uniformly typed array in a contiguous memory block.' },
          { term: 'Vectorisation', def_ar: 'تطبيق العملية على المصفوفة كاملة بدل المرور بحلقة.', def_en: 'Applying an operation to a whole array instead of looping.' },
          { term: 'Shape', def_ar: 'حجم كل بُعد في المصفوفة.', def_en: 'The size of each dimension of an array.' },
          { term: 'Broadcasting', def_ar: 'مدّ المصفوفة الأصغر تلقائياً لتطابق الأكبر عند توافق الأبعاد.', def_en: 'Automatically stretching a smaller array to match a larger one when dimensions are compatible.' }
        ],
        cards: [
          { q_ar: 'لماذا تُستخدم بايثون رغم بطئها؟', q_en: 'Why use Python despite its slowness?', a_ar: 'لأن الحساب الثقيل يجري داخل مكتبات مكتوبة بلغات مترجمة سريعة، فتجتمع سهولة الكتابة وسرعة التنفيذ.', a_en: 'Heavy computation runs inside libraries written in fast compiled languages, combining easy writing with fast execution.' },
          { q_ar: 'ما التوجيه ولماذا يهم؟', q_en: 'What is vectorisation and why does it matter?', a_ar: 'تطبيق العملية على المصفوفة كاملة بلا حلقة، وهو أسرع بمرات على البيانات الكثيرة.', a_en: 'Applying an operation to a whole array with no loop, many times faster on large data.' },
          { q_ar: 'ماذا يعني الشكل (100, 5) ؟', q_en: 'What does a shape of (100, 5) mean?', a_ar: 'مئة صف وخمسة أعمدة: مئة عيّنة لكل واحدة خمس سمات.', a_en: 'A hundred rows and five columns: a hundred samples each with five features.' },
          { q_ar: 'ما شرط نجاح البثّ بين مصفوفتين؟', q_en: 'What condition makes broadcasting work?', a_ar: 'أن تتطابق الأبعاد أو تكون إحداها واحداً.', a_en: 'Dimensions must match or one of them must be one.' }
        ]
      },
      {
        title_ar: 'المتجهات والمصفوفات',
        title_en: 'Vectors and Matrices',
        lead_ar: 'كل بيانات النماذج متجهات ومصفوفات: العيّنة صف أرقام، والدفعة جدول، وضرب المصفوفات هو العملية التي يقضي فيها النموذج أغلب وقته.',
        lead_en: 'All model data is vectors and matrices: a sample is a row of numbers, a batch is a table, and matrix multiplication is where a model spends most of its time.',
        body_ar: [
          'المتجه صف أرقام يمثّل شيئاً واحداً. فالبيت يُمثَّل بمتجه: [المساحة، عدد الغرف، عمر البناء، بُعده عن المركز]. وكل رقم فيه سمة، وطول المتجه عدد السمات. وهكذا يتحوّل أي كائن — بيت أو عميل أو صورة — إلى صف أرقام يفهمه النموذج.',
          'والمصفوفة جدول من المتجهات: كل صف عيّنة وكل عمود سمة. فمئة بيت بأربع سمات مصفوفة بشكل (١٠٠، ٤). وهذا التمثيل هو ما يجعل معالجة مئة عيّنة دفعة واحدة ممكنة بعملية واحدة بدل مئة عملية.',
          'وعمليات المتجهات الأساسية ثلاث. الجمع: يُجمع كل عنصر مع نظيره في الموضع نفسه، فيشترط تساوي الطول. والضرب في عدد: يُضرب كل عنصر في العدد فيتغيّر المقياس بلا تغيّر الاتجاه. وضرب النقطة: تُضرب العناصر المتناظرة ثم تُجمع فينتج رقم واحد لا متجه — وهذي العملية هي جوهر كل شبكة عصبية.',
          'وضرب النقطة يقيس التشابه في الاتجاه: كلما كان المتجهان متجهين لجهة واحدة كبر الناتج. ولهذا يُستخدم في قياس تشابه النصوص والصور بعد تمثيلها متجهات: تشابه المعنى يصير قرباً في الاتجاه.',
          'وضرب المصفوفات هو العملية الأثقل في التعلّم العميق، وشرطه دقيق: عدد أعمدة الأولى يجب أن يساوي عدد صفوف الثانية، والناتج شكله صفوف الأولى في أعمدة الثانية. فمصفوفة (١٠٠، ٤) مضروبة في (٤، ٣) تعطي (١٠٠، ٣) — وأغلب أخطاء بناء الشبكات خطأ في هذا الشرط.',
          'والمعنى العملي لهذا الضرب أنه تحويل: تأخذ مئة عيّنة بأربع سمات وتحوّلها إلى مئة عيّنة بثلاث سمات جديدة، كل واحدة مزيج موزون من الأربع. وهذا بالضبط ما تفعله طبقة في شبكة عصبية — فأوزان الطبقة مصفوفة، وتمرير البيانات عبرها ضرب مصفوفات.'
        ],
        body_en: [
          'A vector is a row of numbers representing one thing. A house becomes a vector: area, room count, building age, distance from centre. Each number is a feature and the vector length is the feature count. So any object, a house, a customer, an image, becomes a row of numbers the model understands.',
          'A matrix is a table of vectors: each row a sample and each column a feature. A hundred houses with four features is a matrix of shape one hundred by four. This representation is what lets a hundred samples be processed in one operation instead of a hundred.',
          'Vectors have three basic operations. Addition: each element adds to its counterpart at the same position, requiring equal lengths. Scalar multiplication: each element multiplies by the number, changing scale without direction. And the dot product: corresponding elements multiply then sum, yielding a single number rather than a vector, and this operation is the essence of every neural network.',
          'The dot product measures directional similarity: the more two vectors point the same way, the larger the result. So it measures similarity between texts and images once represented as vectors: similarity of meaning becomes closeness of direction.',
          'Matrix multiplication is the heaviest operation in deep learning, with a precise condition: the first matrix column count must equal the second matrix row count, and the result shape is first rows by second columns. A hundred by four times four by three gives a hundred by three, and most network-building errors are violations of this condition.',
          'The practical meaning of that multiplication is transformation: take a hundred samples with four features and turn them into a hundred samples with three new features, each a weighted mix of the four. That is exactly what a neural network layer does, since layer weights are a matrix and passing data through it is matrix multiplication.'
        ],
        table: {
          head_ar: ['العملية', 'المدخل', 'المخرج', 'الشرط'],
          head_en: ['Operation', 'Input', 'Output', 'Condition'],
          rows: [
            ['جمع متجهين', 'متجهان', 'متجه', 'تساوي الطول'],
            ['ضرب في عدد', 'متجه وعدد', 'متجه', 'لا شرط'],
            ['ضرب النقطة', 'متجهان', 'رقم واحد', 'تساوي الطول'],
            ['ضرب مصفوفتين', '(a×b) و(b×c)', '(a×c)', 'أعمدة الأولى = صفوف الثانية']
          ]
        },
        keyPoints_ar: [
          'المتجه صف أرقام يمثّل عيّنة واحدة، وطوله عدد سماتها.',
          'المصفوفة جدول عيّنات: صف لكل عيّنة وعمود لكل سمة.',
          'ضرب النقطة يعطي رقماً واحداً ويقيس التشابه في الاتجاه.',
          'شرط ضرب المصفوفات: أعمدة الأولى = صفوف الثانية، والناتج (صفوف الأولى × أعمدة الثانية).',
          'طبقة الشبكة العصبية ليست إلا ضرب مصفوفات: تحويل سمات إلى سمات جديدة.'
        ],
        keyPoints_en: [
          'A vector is a row of numbers representing one sample, its length the feature count.',
          'A matrix is a table of samples: a row per sample and a column per feature.',
          'The dot product returns a single number and measures directional similarity.',
          'Matrix multiplication requires first columns to equal second rows, giving first rows by second columns.',
          'A neural network layer is nothing but matrix multiplication transforming features into new ones.'
        ],
        analogy_ar: 'تخيّل المتجه بطاقة تعريف لشيء: أربعة أرقام تصف بيتاً. والمصفوفة دفتر فيه مئة بطاقة مرتبة. وضرب النقطة أن تقيس كم يشبه بيتان بعضهما بضرب كل سمة بنظيرتها وجمع النواتج — فكلما تشابهت السمات كبر الرقم. وضرب المصفوفات آلة تأخذ الدفتر كله وتخرج دفتراً جديداً بوصف مختلف لكل بيت، مبني على مزج سماته بأوزان.',
        analogy_en: 'Picture a vector as an ID card for a thing: four numbers describing a house. A matrix is a notebook of a hundred such cards. The dot product measures how alike two houses are by multiplying each feature with its counterpart and summing, so more similarity gives a larger number. Matrix multiplication is a machine taking the whole notebook and producing a new one describing each house differently, built by mixing its features with weights.',
        terms: [
          { term: 'Vector', def_ar: 'صف أرقام يمثّل عيّنة واحدة بسماتها.', def_en: 'A row of numbers representing one sample and its features.' },
          { term: 'Matrix', def_ar: 'جدول أرقام صفوفه عيّنات وأعمدته سمات.', def_en: 'A table of numbers with samples as rows and features as columns.' },
          { term: 'Dot Product', def_ar: 'ضرب العناصر المتناظرة وجمعها فينتج رقم واحد.', def_en: 'Multiplying corresponding elements and summing to one number.' },
          { term: 'Matrix Multiplication', def_ar: 'تحويل مصفوفة إلى أخرى بأوزان، وشرطه تطابق البُعد الداخلي.', def_en: 'Transforming one matrix into another with weights, requiring matching inner dimensions.' }
        ],
        cards: [
          { q_ar: 'ما ناتج ضرب النقطة بين متجهين؟', q_en: 'What does a dot product of two vectors give?', a_ar: 'رقم واحد لا متجه، ويقيس مقدار تشابه اتجاهيهما.', a_en: 'A single number rather than a vector, measuring how similarly they point.' },
          { q_ar: 'ما شرط ضرب مصفوفتين وما شكل الناتج؟', q_en: 'What condition and result shape for matrix multiplication?', a_ar: 'أعمدة الأولى تساوي صفوف الثانية، والناتج شكله صفوف الأولى في أعمدة الثانية.', a_en: 'First columns equal second rows, and the result is first rows by second columns.' },
          { q_ar: 'ما ناتج ضرب مصفوفة (100,4) في (4,3) ؟', q_en: 'What is the result of (100,4) times (4,3)?', a_ar: 'مصفوفة شكلها (100,3).', a_en: 'A matrix of shape (100,3).' },
          { q_ar: 'ما علاقة ضرب المصفوفات بطبقة الشبكة العصبية؟', q_en: 'How does matrix multiplication relate to a network layer?', a_ar: 'الطبقة ضرب مصفوفات: أوزانها مصفوفة تحوّل سمات المدخل إلى سمات جديدة.', a_en: 'A layer is matrix multiplication: its weights form a matrix transforming input features into new ones.' }
        ]
      },
      {
        title_ar: 'الإحصاء والاحتمالات',
        title_en: 'Statistics and Probability',
        lead_ar: 'الإحصاء يصف بياناتك قبل أن تدرّب عليها، والاحتمال يفسّر مخرج النموذج بعد أن يتنبأ — وتجاهلهما يجعل النتائج تُقرأ خطأً.',
        lead_en: 'Statistics describes your data before training and probability interprets model output after prediction, and ignoring them makes results misread.',
        body_ar: [
          'قبل تدريب أي نموذج يجب أن تعرف بياناتك، وأول أدوات المعرفة مقاييس المركز: المتوسط والوسيط والمنوال. والفرق بين المتوسط والوسيط ليس أكاديمياً: المتوسط يتأثر بالقيم المتطرفة والوسيط لا. ففي بيانات الدخل، عشرة أشخاص دخلهم متواضع وواحد ثري يجعلون المتوسط مضللاً تماماً، والوسيط يبقى ممثّلاً للحال.',
          'ومقاييس التشتّت لا تقل أهمية: الانحراف المعياري يخبرك كم تتباعد القيم عن متوسطها. ومجموعتان بالمتوسط نفسه قد تكونان مختلفتين تماماً: واحدة متقاربة القيم وأخرى متفرقة. ومن ينظر للمتوسط وحده يظنهما سواء.',
          'والتوزيع الطبيعي شائع في الطبيعة: القيم تتجمّع حول المتوسط وتقلّ كلما ابتعدت، فيتكوّن شكل الجرس. وفيه قاعدة عملية نافعة: نحو ٦٨٪ من القيم تقع ضمن انحراف معياري واحد من المتوسط، ونحو ٩٥٪ ضمن انحرافين. ولهذا تُعدّ القيمة البعيدة بأكثر من ثلاثة انحرافات مرشّحة قوية لأن تكون شاذة.',
          'والاحتمال يقيس فرصة وقوع حدث بين صفر وواحد. وأهم مفهوم فيه للمجال: الاحتمال الشرطي، أي احتمال وقوع شيء بشرط أن آخر وقع. وهو ما تفعله كل نماذج التصنيف: تعطي احتمال أن تكون هذي الرسالة مزعجة بشرط الكلمات التي فيها.',
          'ومغالطة شهيرة تقع كثيراً: الخلط بين احتمال أ بشرط ب، واحتمال ب بشرط أ. فاحتمال أن يكون الفحص إيجابياً بشرط أن المريض مصاب قد يكون ٩٩٪، لكن احتمال أن يكون المصاب فعلاً بشرط أن فحصه إيجابي قد يكون ٩٪ فقط إن كان المرض نادراً. والسبب أن الحالات السليمة كثيرة جداً فحتى نسبة خطأ صغيرة عليها تنتج إنذارات كاذبة أكثر من الإصابات الحقيقية.',
          'وهذي المغالطة ليست تمريناً نظرياً: هي سبب أن نظام كشف احتيال بدقة ٩٩٪ قد يكون عديم الفائدة عملياً. فلو كان الاحتيال واحداً في الألف، فإن نسبة الخطأ ١٪ على التسعمئة وتسعة وتسعين السليمة تعطي عشرة إنذارات كاذبة مقابل احتيال واحد حقيقي — وهذا ما يجعل قياس الدقة وحدها مضللاً في البيانات غير المتوازنة.'
        ],
        body_en: [
          'Before training any model you must know your data, and the first tools are central measures: mean, median and mode. The difference between mean and median is not academic: the mean is pulled by extreme values and the median is not. In income data, ten modest earners and one wealthy person make the mean entirely misleading while the median still represents the situation.',
          'Dispersion measures matter no less: the standard deviation tells how far values spread from their mean. Two groups with identical means may differ completely, one tightly clustered and one widely spread, and whoever looks at the mean alone thinks them identical.',
          'The normal distribution is common in nature: values cluster around the mean and thin out with distance, forming a bell. It carries a useful practical rule: about 68 percent of values fall within one standard deviation of the mean and about 95 percent within two. So a value beyond three deviations is a strong outlier candidate.',
          'Probability measures the chance of an event between zero and one. Its most important concept here is conditional probability: the chance of something given that something else occurred. That is exactly what classification models do: giving the probability this message is spam given the words it contains.',
          'A famous fallacy recurs: confusing the probability of A given B with that of B given A. The probability a test is positive given the patient is ill may be 99 percent, while the probability of actually being ill given a positive test may be only 9 percent when the disease is rare. The reason is that healthy cases are so numerous that even a small error rate on them produces more false alarms than true cases.',
          'This fallacy is not a theoretical exercise: it is why a fraud detection system with 99 percent accuracy may be practically useless. If fraud is one in a thousand, a 1 percent error rate on the 999 legitimate cases yields ten false alarms for every real fraud, which is what makes accuracy alone misleading on imbalanced data.'
        ],
        table: {
          head_ar: ['المقياس', 'ما يقيسه', 'متى يضلّل'],
          head_en: ['Measure', 'What it measures', 'When it misleads'],
          rows: [
            ['المتوسط', 'مركز القيم حسابياً', 'عند وجود قيم متطرفة'],
            ['الوسيط', 'القيمة الوسطى ترتيباً', 'لا يعبّر عن مجموع القيم'],
            ['الانحراف المعياري', 'تباعد القيم عن المتوسط', 'مع توزيع غير طبيعي'],
            ['الدقة', 'نسبة التنبؤات الصحيحة', 'مع بيانات غير متوازنة']
          ]
        },
        keyPoints_ar: [
          'المتوسط يتأثر بالمتطرفات والوسيط لا، والفرق حاسم في بيانات كالدخل.',
          'مجموعتان بالمتوسط نفسه قد تختلفان تماماً في التشتّت.',
          'في التوزيع الطبيعي: ٦٨٪ ضمن انحراف، و٩٥٪ ضمن انحرافين.',
          'التصنيف احتمال شرطي: فرصة الفئة بشرط السمات المرصودة.',
          'لا تخلط بين احتمال أ بشرط ب واحتمال ب بشرط أ — الفرق قد يكون عشرة أضعاف.',
          'الدقة وحدها مضللة في البيانات غير المتوازنة.'
        ],
        keyPoints_en: [
          'The mean is pulled by extremes and the median is not, decisively so in data like income.',
          'Two groups with the same mean may differ entirely in spread.',
          'In a normal distribution 68 percent fall within one deviation and 95 percent within two.',
          'Classification is conditional probability: the chance of a class given the observed features.',
          'Never confuse P(A given B) with P(B given A); the gap may be tenfold.',
          'Accuracy alone is misleading on imbalanced data.'
        ],
        analogy_ar: 'تخيّل مقهى فيه عشرة زبائن دخل كل واحد ألف، ودخل رجل واحد مليونيراً. المتوسط يقول إن رواد المقهى أثرياء، والوسيط يقول إنهم متوسطو الدخل — والوسيط أصدق. وأما مغالطة الاحتمال الشرطي فتخيّل جهاز إنذار حريق دقته ٩٩٪ في مبنى لا يحترق إلا مرة في السنة: سيرنّ كثيراً وأغلب رنيناته كاذبة، لا لأنه رديء بل لأن الأيام السليمة أكثر بكثير.',
        analogy_en: 'Picture a café with ten customers each earning a thousand, then one millionaire walks in. The mean says the clientele is wealthy while the median says they are middle income, and the median is truer. As for the conditional probability fallacy, picture a fire alarm 99 percent accurate in a building that burns once a year: it will ring often and most rings will be false, not because it is poor but because safe days vastly outnumber fires.',
        terms: [
          { term: 'Median', def_ar: 'القيمة الوسطى بعد الترتيب، لا تتأثر بالمتطرفات.', def_en: 'The middle value after sorting, unaffected by extremes.' },
          { term: 'Standard Deviation', def_ar: 'مقياس تباعد القيم عن متوسطها.', def_en: 'A measure of how far values spread from their mean.' },
          { term: 'Normal Distribution', def_ar: 'توزيع تتجمّع فيه القيم حول المتوسط بشكل جرس.', def_en: 'A distribution where values cluster around the mean in a bell shape.' },
          { term: 'Conditional Probability', def_ar: 'احتمال وقوع حدث بشرط وقوع آخر.', def_en: 'The probability of an event given another occurred.' },
          { term: 'Class Imbalance', def_ar: 'ندرة إحدى الفئات بشدة، فتصير الدقة الكلية مضللة.', def_en: 'One class being very rare, making overall accuracy misleading.' }
        ],
        cards: [
          { q_ar: 'متى يضلّل المتوسط ويصدق الوسيط؟', q_en: 'When does the mean mislead and the median hold?', a_ar: 'عند وجود قيم متطرفة كدخل ثري بين متواضعي الدخل: المتوسط ينجذب إليه والوسيط لا.', a_en: 'With extreme values, such as one wealthy earner among modest ones: the mean is pulled and the median is not.' },
          { q_ar: 'كم نسبة القيم ضمن انحرافين معياريين؟', q_en: 'What share of values falls within two standard deviations?', a_ar: 'نحو ٩٥٪ في التوزيع الطبيعي.', a_en: 'About 95 percent in a normal distribution.' },
          { q_ar: 'ما المغالطة الشرطية الشهيرة؟', q_en: 'What is the famous conditional fallacy?', a_ar: 'الخلط بين احتمال أ بشرط ب واحتمال ب بشرط أ، وقد يفترقان عشرة أضعاف مع الحالات النادرة.', a_en: 'Confusing P(A given B) with P(B given A), which may differ tenfold for rare cases.' },
          { q_ar: 'لماذا تضلّل الدقة في بيانات غير متوازنة؟', q_en: 'Why does accuracy mislead on imbalanced data?', a_ar: 'لأن الفئة الغالبة تسيطر على الرقم، فنظام يصنّف الكل سليماً قد يبدو دقيقاً ٩٩٪ بلا فائدة.', a_en: 'The majority class dominates the number, so a system labelling everything safe may look 99 percent accurate and be useless.' }
        ]
      },
      {
        title_ar: 'الاشتقاق ومفهوم التدرّج',
        title_en: 'Derivatives and Gradient Descent',
        lead_ar: 'المشتقة تخبرك اتجاه التغيّر، ونزول التدرّج يستخدمها ليمشي بالنموذج خطوة خطوة نحو أقل خسارة — وهذي هي آلية التعلّم كلها.',
        lead_en: 'A derivative tells you the direction of change, and gradient descent uses it to walk the model step by step toward lower loss, and that is the whole learning mechanism.',
        body_ar: [
          'المشتقة تجيب سؤالاً واحداً: إن غيّرت هذا المدخل قليلاً، كم يتغيّر المخرج وفي أي اتجاه؟ وهذا بالضبط ما يحتاجه التدريب: عندنا خسارة نريد تقليلها، وأوزان نستطيع تغييرها، والسؤال هو أي اتجاه تغيير كل وزن يقلل الخسارة.',
          'ولتصوّر الأمر: تخيّل الخسارة سطحاً كالتضاريس، وموضعك عليه تحدده قيم الأوزان الحالية. وهدفك أخفض نقطة. والمشتقة تخبرك ميل الأرض تحت قدمك في كل اتجاه، فتخطو في الاتجاه الهابط. وتكرار هذي الخطوة هو نزول التدرّج.',
          'والتدرّج هو مجموعة المشتقات لكل الأوزان معاً: متجه يشير لاتجاه أشدّ صعود، فنمشي عكسه. ومقدار الخطوة يُسمّى معدل التعلّم، وضبطه من أهم القرارات: فالكبير جداً يجعل النموذج يقفز فوق أخفض نقطة ويتذبذب بلا استقرار، والصغير جداً يجعل التدريب بطيئاً جداً وقد يعلق في منخفض محلي.',
          'والمنخفض المحلي حفرة ليست أعمق نقطة في التضاريس، لكنك إن دخلتها بدا لك كل اتجاه صاعداً فتوقفت. وهي مشكلة نظرية أكثر منها عملية في الشبكات الكبيرة، لأن كثرة الأبعاد تجعل الخروج ممكناً في اتجاه ما غالباً.',
          'وثلاث صور لتطبيق النزول: الدفعي يحسب التدرّج على كل البيانات قبل كل خطوة فهو دقيق وبطيء ومكلف ذاكرةً؛ والعشوائي يحسبه على عيّنة واحدة فهو سريع ومتذبذب؛ والدفعات الصغيرة وسط بينهما يحسبه على مجموعة صغيرة، وهو المستخدم عملياً لأنه يجمع استقراراً معقولاً مع سرعة مقبولة.',
          'ولاحظ أن هذا كله لا يتطلب منك حساب المشتقات يدوياً: أطر العمل تحسبها آلياً بتتبّع العمليات التي مرّت بها القيمة. لكن فهم الفكرة ضروري لتشخيص المشاكل: خسارة لا تنخفض غالباً معدل تعلّم رديء، وخسارة تقفز فجأة إلى قيمة هائلة غالباً معدل كبير جداً.'
        ],
        body_en: [
          'A derivative answers one question: if I change this input slightly, how much and in which direction does the output change? That is exactly what training needs: we have a loss to reduce and weights we can change, and the question is which direction of change reduces the loss.',
          'To picture it: imagine the loss as a terrain surface, your position on it set by the current weights. Your goal is the lowest point. The derivative tells you the slope under your feet in each direction, so you step downhill. Repeating that step is gradient descent.',
          'The gradient is the collection of derivatives for all weights: a vector pointing in the steepest ascent direction, so we walk opposite it. The step size is the learning rate, and setting it is among the most important decisions: too large makes the model leap over the lowest point and oscillate without settling, while too small makes training painfully slow and prone to sticking in a local minimum.',
          'A local minimum is a dip that is not the deepest point in the terrain, but once inside it every direction looks uphill so you stop. It is more a theoretical than practical problem in large networks, since many dimensions usually leave an escape direction.',
          'Descent comes in three forms: batch computes the gradient over all data before each step, accurate but slow and memory-hungry; stochastic computes it on a single sample, fast and jittery; and mini-batch sits between them on a small group, and it is what is used in practice because it combines reasonable stability with acceptable speed.',
          'Note that none of this requires computing derivatives by hand: frameworks compute them automatically by tracing the operations a value passed through. But understanding the idea is essential for diagnosis: a loss that will not fall usually means a poor learning rate, and a loss suddenly jumping to a huge value usually means the rate is far too large.'
        ],
        table: {
          head_ar: ['الصورة', 'حجم العيّنة لكل خطوة', 'الاستقرار', 'السرعة'],
          head_en: ['Variant', 'Samples per step', 'Stability', 'Speed'],
          rows: [
            ['النزول الدفعي', 'كل البيانات', 'الأعلى', 'الأبطأ'],
            ['النزول العشوائي', 'عيّنة واحدة', 'الأدنى', 'الأسرع'],
            ['الدفعات الصغيرة', 'مجموعة صغيرة', 'متوازن', 'مقبولة']
          ]
        },
        keyPoints_ar: [
          'المشتقة تجيب: كم يتغيّر المخرج وفي أي اتجاه إن غيّرت المدخل قليلاً.',
          'التدرّج متجه يشير لأشدّ صعود، والتدريب يمشي عكسه.',
          'معدل التعلّم كبير جداً يتذبذب، وصغير جداً يبطئ ويعلق.',
          'المنخفض المحلي مشكلة نظرية أكثر منها عملية في الشبكات الكبيرة.',
          'الدفعات الصغيرة هي المستخدم عملياً لجمعها الاستقرار والسرعة.',
          'خسارة لا تنخفض أو تقفز فجأة: راجع معدل التعلّم أولاً.'
        ],
        keyPoints_en: [
          'A derivative answers how much and which way the output changes for a small input change.',
          'The gradient points at steepest ascent, and training walks against it.',
          'Too large a learning rate oscillates; too small slows training and sticks.',
          'Local minima are more a theoretical than practical problem in large networks.',
          'Mini-batch is what is used in practice, combining stability and speed.',
          'A loss that will not fall or suddenly jumps: check the learning rate first.'
        ],
        analogy_ar: 'تخيّل نفسك في جبل ضبابي تريد أسفل الوادي ولا ترى إلا موضع قدمك. تحسّس ميل الأرض حولك واخطُ في الاتجاه الهابط، ثم كرّر. هذا نزول التدرّج. وطول خطوتك هو معدل التعلّم: خطوة عملاقة قد تقفز بك فوق الوادي إلى السفح المقابل فتظل تتأرجح، وخطوة نملة توصلك بعد أسبوع. وحفرة صغيرة في منتصف الجبل تبدو لك وادياً — وهذا المنخفض المحلي.',
        analogy_en: 'Picture yourself on a foggy mountain seeking the valley floor, seeing only where you stand. Feel the slope around you, step downhill, repeat. That is gradient descent. Your stride is the learning rate: a giant leap may carry you over the valley to the opposite slope leaving you swinging back and forth, while an ant step arrives next week. A small pit midway looks like the valley, and that is a local minimum.',
        terms: [
          { term: 'Derivative', def_ar: 'مقدار واتجاه تغيّر المخرج عند تغيّر طفيف في المدخل.', def_en: 'How much and which way the output changes for a slight input change.' },
          { term: 'Gradient', def_ar: 'متجه المشتقات لكل الأوزان، يشير لأشدّ صعود.', def_en: 'The vector of derivatives for all weights, pointing at steepest ascent.' },
          { term: 'Learning Rate', def_ar: 'مقدار الخطوة في كل تعديل للأوزان.', def_en: 'The step size in each weight update.' },
          { term: 'Local Minimum', def_ar: 'منخفض ليس أعمق نقطة لكنه يبدو كذلك من داخله.', def_en: 'A dip that is not the deepest point yet looks like it from inside.' },
          { term: 'Mini-batch', def_ar: 'حساب التدرّج على مجموعة صغيرة، وهو المستخدم عملياً.', def_en: 'Computing the gradient on a small group, the practical choice.' }
        ],
        cards: [
          { q_ar: 'ما السؤال الذي تجيب عنه المشتقة في التدريب؟', q_en: 'What question does the derivative answer in training?', a_ar: 'أي اتجاه لتغيير الوزن يقلل الخسارة، وبأي مقدار يتغيّر المخرج.', a_en: 'Which direction of weight change reduces the loss, and by how much the output changes.' },
          { q_ar: 'ماذا يحدث عند معدل تعلّم كبير جداً؟', q_en: 'What happens with too large a learning rate?', a_ar: 'يقفز النموذج فوق أخفض نقطة ويتذبذب، وقد تقفز الخسارة لقيمة هائلة.', a_en: 'The model leaps over the lowest point and oscillates, and the loss may jump to a huge value.' },
          { q_ar: 'أي صور نزول التدرّج تُستخدم عملياً ولماذا؟', q_en: 'Which descent variant is used in practice and why?', a_ar: 'الدفعات الصغيرة، لأنها تجمع استقراراً معقولاً مع سرعة مقبولة.', a_en: 'Mini-batch, because it combines reasonable stability with acceptable speed.' },
          { q_ar: 'خسارة لا تنخفض إطلاقاً — ما أول ما تفحصه؟', q_en: 'A loss that never falls: what do you check first?', a_ar: 'معدل التعلّم، فهو أشهر أسباب توقف الانخفاض أو تذبذبه.', a_en: 'The learning rate, the most common cause of a stalled or oscillating loss.' }
        ]
      },
      {
        title_ar: 'البيانات عملياً: التنظيف والتطبيع',
        title_en: 'Data in Practice: Cleaning and Scaling',
        lead_ar: 'أغلب وقت أي مشروع يذهب هنا لا في اختيار النموذج، وخطأ واحد في هذي المرحلة — كالتطبيع قبل التقسيم — يفسد كل نتيجة بعده.',
        lead_en: 'Most project time goes here rather than model choice, and one mistake at this stage, such as scaling before splitting, corrupts every result after it.',
        body_ar: [
          'القيم المفقودة أول ما تواجهه، ولها ثلاث معالجات لكل واحدة ثمن. حذف الصفوف الناقصة أبسطها لكنه يخسر بيانات وقد يحدث تحيّزاً إن كان النقص ليس عشوائياً. وحذف العمود يصلح إن كان أغلبه ناقصاً. وتعويض القيمة بالمتوسط أو الوسيط يحفظ الصف لكنه يقلل التباين الحقيقي.',
          'والسؤال الذي يُنسى: لماذا نقصت القيمة؟ فإن كان النقص نفسه يحمل معلومة — كعميل لم يذكر دخله لأنه مرتفع — فالتعويض بالمتوسط يمحو إشارة مفيدة، والأصح إضافة عمود يسجّل أن القيمة كانت مفقودة.',
          'والقيم الشاذة قيم بعيدة جداً عن بقية البيانات. وأول قرار فيها ليس تقنياً: هل هي خطأ إدخال أم حالة حقيقية نادرة؟ فعمر ٢٠٠ سنة خطأ يُحذف، ومعاملة بمليون في بيانات معاملات صغيرة قد تكون احتيالاً حقيقياً وهو بالضبط ما تريد أن يتعلّمه النموذج. وحذف الشواذ بلا فحص قد يحذف الظاهرة التي تدرسها.',
          'والتطبيع ضرورة حين تختلف مقاييس السمات: عمود عمر من ٢٠ إلى ٧٠ وعمود دخل من ٣٠٠٠ إلى ٥٠٠٠٠. فالنماذج التي تعتمد المسافات ستعتبر الدخل أهم آلاف المرات لمجرد أن أرقامه أكبر. والتطبيع يجعل الأعمدة على مقياس واحد فيتساوى تأثيرها الأولي.',
          'وطريقتان شائعتان: التطبيع إلى مدى من صفر لواحد، والتقييس بطرح المتوسط والقسمة على الانحراف المعياري. والثاني أنسب حين توجد قيم شاذة لأن الأول يضغط كل البيانات في زاوية إن وُجدت قيمة متطرفة واحدة.',
          'والخطأ الأخطر في هذي المرحلة هو تسرّب البيانات: أن تحسب المتوسط والانحراف على البيانات كاملة ثم تقسمها لتدريب واختبار. فتكون معلومات الاختبار قد تسرّبت لعملية التطبيع، فيبدو أداء النموذج ممتازاً في القياس ثم ينهار في الإنتاج. والصواب: قسّم أولاً، ثم احسب مقاييس التطبيع من التدريب وحده، ثم طبّقها على الاختبار — وهذي القاعدة تنطبق على كل معالجة تتعلّم شيئاً من البيانات.'
        ],
        body_en: [
          'Missing values are the first thing you meet, with three treatments each carrying a price. Dropping incomplete rows is simplest but loses data and may introduce bias when missingness is not random. Dropping a column suits one that is mostly missing. Imputing with mean or median keeps the row but reduces genuine variance.',
          'The forgotten question is why the value is missing. If the absence itself carries information, such as a customer withholding a high income, imputing the mean erases a useful signal, and the better move is adding a column recording that the value was missing.',
          'Outliers are values far from the rest. The first decision about them is not technical: is this an entry error or a genuine rare case? An age of 200 is an error to delete, while a million-value transaction among small ones may be real fraud, exactly what you want the model to learn. Deleting outliers without inspection may delete the very phenomenon you study.',
          'Scaling becomes necessary when feature ranges differ: an age column from 20 to 70 and an income column from 3,000 to 50,000. Distance-based models will treat income as thousands of times more important merely because its numbers are larger. Scaling puts columns on one scale so their initial influence is comparable.',
          'Two common methods: normalising into a zero-to-one range, and standardising by subtracting the mean and dividing by the standard deviation. The second suits data with outliers, because the first squeezes everything into a corner when a single extreme value exists.',
          'The gravest error at this stage is data leakage: computing the mean and deviation over the entire dataset then splitting into training and test. Test information has leaked into the scaling, so the model looks excellent in measurement then collapses in production. The correct order is: split first, compute scaling statistics from training only, then apply them to the test set, and this rule covers every transformation that learns something from data.'
        ],
        table: {
          head_ar: ['المعالجة', 'متى تصلح', 'ثمنها'],
          head_en: ['Treatment', 'When it fits', 'Its price'],
          rows: [
            ['حذف الصفوف الناقصة', 'النقص قليل وعشوائي', 'خسارة بيانات وتحيّز محتمل'],
            ['حذف العمود', 'أغلب العمود ناقص', 'خسارة سمة قد تكون مهمة'],
            ['تعويض بالمتوسط', 'النقص قليل والعمود مهم', 'تقليل التباين الحقيقي'],
            ['عمود يسجّل النقص', 'النقص نفسه معلومة', 'زيادة عدد الأعمدة']
          ]
        },
        keyPoints_ar: [
          'اسأل لماذا نقصت القيمة قبل أن تقرر كيف تعوّضها.',
          'إن كان النقص نفسه معلومة، فسجّله في عمود ولا تمحه بالمتوسط.',
          'القيمة الشاذة قد تكون الظاهرة نفسها، فلا تحذفها قبل فحصها.',
          'التطبيع يمنع سيطرة عمود لمجرد كِبَر أرقامه.',
          'التقييس أنسب من التطبيع للمدى عند وجود قيم شاذة.',
          'قسّم أولاً ثم احسب مقاييس التطبيع من التدريب وحده — وإلا تسرّبت البيانات.'
        ],
        keyPoints_en: [
          'Ask why a value is missing before deciding how to impute it.',
          'If the absence itself is information, record it in a column rather than erasing it with a mean.',
          'An outlier may be the phenomenon itself, so inspect before deleting.',
          'Scaling stops one column dominating merely because its numbers are larger.',
          'Standardising suits data with outliers better than range normalising.',
          'Split first then compute scaling statistics from training only, or data leaks.'
        ],
        analogy_ar: 'تخيّل أنك تقارن بين مرشّحين بمعيارين: سنوات الخبرة والراتب المطلوب. لو جمعت الرقمين كما هما، لطغى الراتب بآلافه على الخبرة بسنواتها العشر — لا لأنه أهم بل لأن مقياسه أكبر. والتطبيع أن تحوّل الاثنين لمقياس من عشرة فيتحاكما بعدل. وأما تسرّب البيانات فأشبه بمن يراجع أسئلة الامتحان قبل وضع الدرجة النهائية: النتيجة ممتازة وبلا معنى.',
        analogy_en: 'Picture comparing candidates on two criteria: years of experience and requested salary. Adding the raw numbers lets salary in thousands overwhelm experience in single-digit years, not because it matters more but because its scale is larger. Scaling converts both to a ten-point scale so they compete fairly. Data leakage is like reviewing the exam questions before setting the final grade: an excellent and meaningless result.',
        terms: [
          { term: 'Missing Value', def_ar: 'حقل خالٍ في السجل، وسبب خلوّه قد يحمل معلومة.', def_en: 'An empty field in a record whose cause may carry information.' },
          { term: 'Outlier', def_ar: 'قيمة بعيدة جداً عن بقية البيانات، خطأً أو حالة نادرة حقيقية.', def_en: 'A value far from the rest, an error or a genuine rare case.' },
          { term: 'Normalisation', def_ar: 'تحويل القيم إلى مدى محدد كصفر إلى واحد.', def_en: 'Converting values into a set range such as zero to one.' },
          { term: 'Standardisation', def_ar: 'طرح المتوسط والقسمة على الانحراف المعياري.', def_en: 'Subtracting the mean and dividing by the standard deviation.' },
          { term: 'Data Leakage', def_ar: 'تسرّب معلومات الاختبار إلى التدريب فتبدو النتائج أفضل من الواقع.', def_en: 'Test information seeping into training so results look better than reality.' }
        ],
        cards: [
          { q_ar: 'متى يكون تعويض القيمة المفقودة بالمتوسط خطأً؟', q_en: 'When is mean imputation a mistake?', a_ar: 'حين يكون النقص نفسه معلومة، فالتعويض يمحو إشارة مفيدة؛ والأصح تسجيل النقص في عمود.', a_en: 'When the absence itself is information, since imputing erases a useful signal; record it in a column instead.' },
          { q_ar: 'هل تُحذف القيم الشاذة دائماً؟', q_en: 'Should outliers always be deleted?', a_ar: 'لا، قد تكون الظاهرة المدروسة نفسها كالاحتيال؛ فافحص أولاً هل هي خطأ إدخال أم حالة حقيقية.', a_en: 'No, they may be the studied phenomenon itself such as fraud; first check whether it is an entry error or a real case.' },
          { q_ar: 'لماذا يلزم التطبيع؟', q_en: 'Why is scaling necessary?', a_ar: 'لئلا يسيطر عمود كبير الأرقام على القرار لمجرد مقياسه لا لأهميته.', a_en: 'So a large-numbered column does not dominate the decision by scale rather than importance.' },
          { q_ar: 'ما الترتيب الصحيح للتقسيم والتطبيع؟', q_en: 'What is the correct order for splitting and scaling?', a_ar: 'قسّم أولاً، ثم احسب مقاييس التطبيع من التدريب وحده، ثم طبّقها على الاختبار.', a_en: 'Split first, compute scaling statistics from training only, then apply them to the test set.' }
        ]
      }
    ],

    // ─────────── تعلّم الآلة ───────────
    2: [
      {
        title_ar: 'سير العمل وتقسيم البيانات',
        title_en: 'The Workflow and Data Splitting',
        lead_ar: 'مشروع التعلّم الآلي دورة لا خط مستقيم، وأول قرار فيه تقسيم البيانات — فمن يقيس نموذجه على ما تدرّب عليه يقيس حفظه لا فهمه.',
        lead_en: 'A machine-learning project is a cycle rather than a straight line, and its first decision is splitting the data, since measuring a model on what it trained on measures memorisation rather than understanding.',
        body_ar: [
          'سير العمل يبدأ بتحديد المشكلة ومقياس النجاح قبل أي كود: ما الذي نتنبأ به بالضبط، وما الرقم الذي يعني أن المشروع نجح، وما الكلفة التي يقبلها العمل مقابل الخطأ. ومشروع يبدأ بلا مقياس نجاح متفق عليه ينتهي بجدال لا ينقطع حول هل النتيجة جيدة أم لا.',
          'ثم تُجمع البيانات وتُستكشف وتُنظَّف، ثم تُختار السمات وتُهندَس، ثم يُدرَّب نموذج ويُقيَّم، ثم يُنشَر ويُراقَب. والمهم أن هذي دورة لا خط: نتيجة التقييم تعيدك لهندسة السمات أو لجمع بيانات أكثر، والمراقبة بعد النشر تعيدك للتدريب. ومن يظنها خطاً واحداً يُفاجأ.',
          'وتقسيم البيانات أهم قرار منهجي. فلو قِست أداء النموذج على البيانات نفسها التي تدرّب عليها، لكان كمن يمتحن طالباً بالأسئلة التي حفظ حلولها: النتيجة عالية وبلا دلالة. ولهذا تُحجز بيانات لم يرها النموذج تُقاس عليها قدرته على التعميم.',
          'والتقسيم ثلاثة أجزاء لا اثنان: تدريب يتعلّم منه النموذج، وتحقق تُضبط به الخيارات كعدد الطبقات ومعدل التعلّم، واختبار لا يُلمس إلا مرة واحدة في النهاية. وسبب فصل التحقق عن الاختبار دقيق: إن ضبطت خياراتك مراراً على مجموعة الاختبار، فأنت تسرّبها تدريجياً وتصير نتيجتها متفائلة كذباً.',
          'ونسبة شائعة: ٧٠٪ تدريب و١٥٪ تحقق و١٥٪ اختبار. لكن مع البيانات الصغيرة يصير التقسيم مبدّداً، فيُستخدم التحقق المتقاطع: تُقسَّم البيانات إلى أجزاء، ويُدرَّب النموذج مرات كل مرة على كل الأجزاء إلا واحداً يُقاس عليه، ثم يُؤخذ متوسط النتائج. فيُستفاد من كل البيانات في التدريب والقياس معاً.',
          'وشرط لا يُغفَل: التقسيم العشوائي لا يصلح دائماً. ففي البيانات الزمنية يجب أن يكون الاختبار متأخراً زمنياً عن التدريب، وإلا تدرّب النموذج على المستقبل وقيس على الماضي فبدا نبيّاً. وفي البيانات غير المتوازنة يجب أن يحفظ التقسيم نسبة الفئات في كل جزء، وإلا خلا الاختبار من الفئة النادرة أصلاً.'
        ],
        body_en: [
          'The workflow begins by defining the problem and success metric before any code: what exactly is predicted, what number means the project succeeded, and what error cost the business accepts. A project starting with no agreed metric ends in endless argument over whether the result is good.',
          'Then data is gathered, explored and cleaned, features are selected and engineered, a model is trained and evaluated, then deployed and monitored. Crucially this is a cycle rather than a line: evaluation sends you back to feature engineering or more data, and post-deployment monitoring sends you back to training. Whoever treats it as one straight line is surprised.',
          'Data splitting is the most important methodological decision. Measuring a model on the same data it trained on is like examining a student with the questions whose answers they memorised: a high and meaningless score. So data the model never saw is held back to measure generalisation.',
          'The split has three parts rather than two: training the model learns from, validation for tuning choices such as layer count and learning rate, and a test set touched only once at the end. The precise reason for separating validation from test: tuning repeatedly against the test set leaks it gradually, making its result falsely optimistic.',
          'A common ratio is 70 percent training, 15 validation and 15 test. But with small data such splitting wastes too much, so cross-validation is used: the data is divided into folds and the model trained several times, each time on all folds but one held for measurement, then results are averaged. Every sample serves in both training and measurement.',
          'One condition is never overlooked: random splitting is not always valid. In time-series data the test set must come later in time than training, or the model trains on the future and is measured on the past and looks prophetic. In imbalanced data the split must preserve class proportions in every part, or the test set contains none of the rare class at all.'
        ],
        table: {
          head_ar: ['الجزء', 'غرضه', 'كم مرة يُستخدم'],
          head_en: ['Split', 'Purpose', 'How often used'],
          rows: [
            ['التدريب', 'يتعلّم منه النموذج', 'كل دورة تدريب'],
            ['التحقق', 'ضبط الخيارات والمقارنة', 'مرات كثيرة'],
            ['الاختبار', 'تقدير الأداء الحقيقي', 'مرة واحدة في النهاية'],
            ['التحقق المتقاطع', 'بديل عند قلة البيانات', 'عدة دورات بالتناوب']
          ]
        },
        keyPoints_ar: [
          'حدّد مقياس النجاح قبل الكود، وإلا انتهى المشروع بجدال بلا فيصل.',
          'سير العمل دورة لا خط: التقييم والمراقبة يعيدانك للخلف.',
          'القياس على بيانات التدريب يقيس الحفظ لا التعميم.',
          'ثلاثة أجزاء: تدريب وتحقق واختبار يُلمس مرة واحدة فقط.',
          'التحقق المتقاطع يعوّض قلة البيانات باستخدام كل عيّنة تدريباً وقياساً.',
          'البيانات الزمنية تُقسَّم زمنياً، وغير المتوازنة تُقسَّم بحفظ نسب الفئات.'
        ],
        keyPoints_en: [
          'Define the success metric before writing code, or the project ends in unresolvable argument.',
          'The workflow is a cycle: evaluation and monitoring send you back.',
          'Measuring on training data measures memorisation rather than generalisation.',
          'Three parts: training, validation, and a test set touched only once.',
          'Cross-validation compensates for small data by using every sample for both training and measurement.',
          'Time-series data splits by time and imbalanced data splits preserving class proportions.'
        ],
        analogy_ar: 'تخيّل معلّماً يمتحن طلابه بالأسئلة نفسها التي حلّها معهم في الحصة. الدرجات ممتازة ولا تخبره شيئاً عن فهمهم. ولهذا يحتفظ بأسئلة لم يروها. ومجموعة التحقق أشبه بامتحان تجريبي يعدّل عليه أسلوبه، ومجموعة الاختبار هي الامتحان النهائي المختوم الذي لا يُفتح إلا مرة — ومن يفتحه كل أسبوع ليعدّل به لم يعد امتحاناً.',
        analogy_en: 'Picture a teacher examining students with the same questions solved together in class. The marks are excellent and tell nothing about understanding, so unseen questions are held back. The validation set is like a mock exam used to adjust the teaching, and the test set is the sealed final opened only once, since whoever opens it weekly to tune has stopped having an exam.',
        terms: [
          { term: 'Training Set', def_ar: 'البيانات التي يتعلّم منها النموذج.', def_en: 'The data a model learns from.' },
          { term: 'Validation Set', def_ar: 'بيانات تُضبط عليها الخيارات وتُقارن النماذج.', def_en: 'Data used to tune choices and compare models.' },
          { term: 'Test Set', def_ar: 'بيانات محجوزة تُقاس مرة واحدة لتقدير الأداء الحقيقي.', def_en: 'Held-out data measured once to estimate true performance.' },
          { term: 'Cross-validation', def_ar: 'تدريب وقياس متناوب على أجزاء البيانات ثم أخذ المتوسط.', def_en: 'Rotating training and measurement over folds then averaging.' },
          { term: 'Stratified Split', def_ar: 'تقسيم يحفظ نسبة الفئات في كل جزء.', def_en: 'A split preserving class proportions in every part.' }
        ],
        cards: [
          { q_ar: 'لماذا يُفصل التحقق عن الاختبار؟', q_en: 'Why separate validation from test?', a_ar: 'لأن الضبط المتكرر على الاختبار يسرّبه تدريجياً فتصير نتيجته متفائلة كذباً.', a_en: 'Repeated tuning against the test set leaks it gradually, making its result falsely optimistic.' },
          { q_ar: 'متى يُستخدم التحقق المتقاطع؟', q_en: 'When is cross-validation used?', a_ar: 'عند قلة البيانات، فيستفيد من كل عيّنة في التدريب والقياس معاً.', a_en: 'With small data, so every sample serves in both training and measurement.' },
          { q_ar: 'كيف تُقسَّم البيانات الزمنية؟', q_en: 'How is time-series data split?', a_ar: 'زمنياً: الاختبار متأخر عن التدريب، وإلا تدرّب النموذج على المستقبل.', a_en: 'By time: the test set comes after training, or the model trains on the future.' },
          { q_ar: 'ما أول ما يُحدَّد في المشروع؟', q_en: 'What is defined first in a project?', a_ar: 'المشكلة ومقياس النجاح، قبل جمع البيانات وقبل أي كود.', a_en: 'The problem and the success metric, before gathering data and before any code.' }
        ]
      },
      {
        title_ar: 'الانحدار ودالة الخسارة',
        title_en: 'Regression and the Loss Function',
        lead_ar: 'الانحدار يتنبأ برقم متصل، ودالة الخسارة هي ما يخبر النموذج كم أخطأ — واختيارها يغيّر ما يتعلّمه النموذج فعلاً.',
        lead_en: 'Regression predicts a continuous number, and the loss function tells the model how wrong it was, and choosing it changes what the model actually learns.',
        body_ar: [
          'الانحدار الخطي أبسط نماذج التنبؤ بالأرقام: يفترض أن المخرج مجموع موزون للمدخلات مع ثابت. فسعر البيت = وزن١×المساحة + وزن٢×عدد الغرف + ثابت. ومهمة التدريب إيجاد الأوزان التي تجعل الخط أقرب ما يكون لكل النقاط.',
          'والوزن هنا له تفسير مباشر مفيد: يمثّل مقدار تغيّر المخرج عند زيادة السمة وحدة واحدة مع ثبات البقية. فوزن المساحة ٣٠٠٠ يعني أن كل متر إضافي يرفع السعر المتوقَّع ٣٠٠٠. وهذي القابلية للتفسير سبب بقاء الانحدار الخطي مستخدماً رغم بساطته.',
          'ودالة الخسارة تقيس بُعد التنبؤ عن الحقيقة. وأشهرها متوسط مربع الخطأ: يُطرح المتنبَّأ من الحقيقي ويُربَّع الفرق ثم يُؤخذ المتوسط. والتربيع له غرضان: يجعل الأخطاء موجبة فلا يلغي الخطأ الموجب السالب، ويعاقب الأخطاء الكبيرة أشد من الصغيرة.',
          'ولهذي العقوبة أثر عملي مهم: مربع الخطأ يجعل النموذج حسّاساً جداً للقيم الشاذة، لأن خطأ بمقدار عشرة يصير مئة في الحساب. فإن كانت بياناتك فيها شواذ حقيقية لا تريد أن ينجذب إليها النموذج، فمتوسط الخطأ المطلق أنسب لأنه لا يربّع.',
          'وهذا مثال على قاعدة أعم: اختيار دالة الخسارة قرار تصميمي لا تفصيل تقني، لأنها تحدد ما يعتبره النموذج خطأً فادحاً. فنموذج يتنبأ بالطلب على دواء، تكلفة نقص التقدير فيه (نفاد الدواء) ليست كتكلفة زيادته (تخزين زائد) — ودالة الخسارة المتماثلة تعاملهما سواء وهو غير مقصود.',
          'ومقياسان يُقرآن مع بعض عند تقييم الانحدار: جذر متوسط مربع الخطأ يعطيك حجم الخطأ بوحدة المخرج نفسها فيسهل فهمه، ومعامل التحديد يخبرك كم من تباين البيانات فسّره النموذج — وقيمة قريبة من صفر تعني أن النموذج لا يفسّر شيئاً وأنك لو تنبأت بالمتوسط دائماً لكنت مثله.'
        ],
        body_en: [
          'Linear regression is the simplest number-predicting model: it assumes the output is a weighted sum of inputs plus a constant. A house price equals weight one times area plus weight two times room count plus a constant. Training finds the weights placing the line as close as possible to all points.',
          'A weight here has a directly useful interpretation: how much the output changes when the feature rises by one unit with the rest fixed. An area weight of 3,000 means each extra square metre raises the expected price by 3,000. That interpretability is why linear regression endures despite its simplicity.',
          'The loss function measures how far a prediction is from truth. The best known is mean squared error: subtract the prediction from the truth, square the difference, then average. Squaring serves two purposes: it makes errors positive so a positive one does not cancel a negative, and it punishes large errors far more than small ones.',
          'That punishment has an important practical effect: squared error makes the model very sensitive to outliers, since an error of ten becomes a hundred in the calculation. If your data holds genuine outliers you do not want the model pulled toward, mean absolute error suits better because it does not square.',
          'This illustrates a broader rule: choosing a loss function is a design decision rather than a technical detail, because it defines what the model considers a grave error. A model predicting medicine demand faces asymmetric costs, since under-predicting means running out while over-predicting means excess storage, and a symmetric loss treats them alike, which is not what was intended.',
          'Two metrics are read together when evaluating regression: root mean squared error gives the error size in the output own unit so it is easy to grasp, and the coefficient of determination tells how much of the data variance the model explained, where a value near zero means the model explains nothing and predicting the mean every time would have matched it.'
        ],
        table: {
          head_ar: ['الدالة أو المقياس', 'ما يفعله', 'متى تختاره'],
          head_en: ['Function or metric', 'What it does', 'When to choose it'],
          rows: [
            ['متوسط مربع الخطأ', 'يربّع الفروق فيعاقب الكبير', 'حين تريد تجنّب الأخطاء الكبيرة'],
            ['متوسط الخطأ المطلق', 'لا يربّع فيقاوم الشواذ', 'حين توجد قيم شاذة حقيقية'],
            ['جذر متوسط المربع', 'حجم الخطأ بوحدة المخرج', 'لعرض النتيجة بلغة مفهومة'],
            ['معامل التحديد', 'نسبة التباين المفسَّر', 'لمعرفة هل النموذج أفضل من المتوسط']
          ]
        },
        keyPoints_ar: [
          'الانحدار الخطي مجموع موزون للمدخلات، ووزنه قابل للتفسير المباشر.',
          'التربيع يمنع تلاشي الأخطاء المتعاكسة ويعاقب الكبيرة أشد.',
          'مربع الخطأ حسّاس للشواذ، والخطأ المطلق أقاوم لها.',
          'اختيار الخسارة قرار تصميمي: يحدد ما يعدّه النموذج خطأً فادحاً.',
          'الكلفة غير المتماثلة تحتاج خسارة غير متماثلة، لا خسارة قياسية.',
          'معامل تحديد قريب من الصفر يعني أن التنبؤ بالمتوسط يعادل نموذجك.'
        ],
        keyPoints_en: [
          'Linear regression is a weighted sum of inputs, and its weights are directly interpretable.',
          'Squaring stops opposite errors cancelling and punishes large ones harder.',
          'Squared error is outlier-sensitive while absolute error resists them.',
          'Choosing the loss is a design decision: it defines what counts as a grave error.',
          'Asymmetric costs need an asymmetric loss rather than a standard one.',
          'A determination coefficient near zero means predicting the mean matches your model.'
        ],
        analogy_ar: 'تخيّل مدرّب رماية يقيس أداء متدرّبيه. لو حسب متوسط بُعد الطلقات عن المركز بلا تربيع، لتساوى من أخطأ عشر طلقات قليلاً مع من أصاب تسعاً وأخطأ واحدة بعيداً جداً. والتربيع يجعل الطلقة الشاردة تُحسب بثقل، فيتعلّم الرامي تجنّب الكوارث لا مجرد تحسين المعدل. وهذا نافع في الرماية، ومضرّ إن كانت الطلقة الشاردة خطأ في القياس لا في الرامي.',
        analogy_en: 'Picture a shooting coach measuring trainees. Averaging shot distance from centre without squaring makes someone who missed ten shots slightly equal to someone who hit nine and missed one wildly. Squaring weights the stray shot heavily, so the shooter learns to avoid disasters rather than merely improve the average. That helps in shooting and hurts when the stray shot is a measurement error rather than the shooter.',
        terms: [
          { term: 'Linear Regression', def_ar: 'نموذج يتنبأ برقم كمجموع موزون للمدخلات.', def_en: 'A model predicting a number as a weighted sum of inputs.' },
          { term: 'Loss Function', def_ar: 'دالة تقيس بُعد التنبؤ عن الحقيقة ويُقلَّل ناتجها بالتدريب.', def_en: 'A function measuring prediction distance from truth, minimised by training.' },
          { term: 'MSE', def_ar: 'متوسط مربع الخطأ، يعاقب الأخطاء الكبيرة أشد.', def_en: 'Mean squared error, punishing large errors harder.' },
          { term: 'MAE', def_ar: 'متوسط الخطأ المطلق، أقاوم للقيم الشاذة.', def_en: 'Mean absolute error, more resistant to outliers.' },
          { term: 'R²', def_ar: 'نسبة تباين البيانات التي فسّرها النموذج.', def_en: 'The share of data variance the model explained.' }
        ],
        cards: [
          { q_ar: 'لماذا تُربَّع الفروق في دالة الخسارة؟', q_en: 'Why square the differences in the loss?', a_ar: 'لمنع تلاشي الخطأ الموجب مع السالب، ولمعاقبة الأخطاء الكبيرة أشد من الصغيرة.', a_en: 'To stop positive and negative errors cancelling, and to punish large errors harder than small ones.' },
          { q_ar: 'متى تفضّل الخطأ المطلق على مربع الخطأ؟', q_en: 'When prefer absolute error over squared error?', a_ar: 'حين توجد قيم شاذة حقيقية لا تريد أن ينجذب إليها النموذج.', a_en: 'When genuine outliers exist that you do not want the model pulled toward.' },
          { q_ar: 'كيف يُفسَّر وزن السمة في الانحدار الخطي؟', q_en: 'How is a feature weight interpreted in linear regression?', a_ar: 'مقدار تغيّر المخرج عند زيادة السمة وحدة واحدة مع ثبات بقية السمات.', a_en: 'How much the output changes when the feature rises by one unit with the rest fixed.' },
          { q_ar: 'ماذا يعني معامل تحديد قريب من الصفر؟', q_en: 'What does a determination coefficient near zero mean?', a_ar: 'أن النموذج لا يفسّر تباين البيانات، فالتنبؤ بالمتوسط دائماً يعادله.', a_en: 'The model explains no variance, so always predicting the mean would match it.' }
        ]
      },
      {
        title_ar: 'التصنيف وأشجار القرار',
        title_en: 'Classification and Decision Trees',
        lead_ar: 'التصنيف يعطي فئة لا رقماً، ومخرجه احتمال يتحوّل لقرار بعتبة تختارها أنت — واختيار العتبة قرار عمل لا قرار تقني.',
        lead_en: 'Classification yields a category rather than a number, and its output is a probability turned into a decision by a threshold you choose, and that choice is a business decision rather than a technical one.',
        body_ar: [
          'نماذج التصنيف لا تعطي فئة مباشرة في الغالب، وإنما احتمالاً بين صفر وواحد: احتمال أن تكون هذي المعاملة احتيالاً ٠٫٧٣. ثم تُقارَن بعتبة لتصير قراراً. والعتبة الافتراضية ٠٫٥ ليست مقدسة، وتغييرها يغيّر سلوك النظام كله بلا إعادة تدريب.',
          'وضبط العتبة قرار عمل: خفضها يجعل النظام أكثر حساسية فيمسك احتيالاً أكثر ويزعج عملاء سليمين أكثر، ورفعها يقلل الإزعاج ويترك احتيالاً يمرّ. ولا يوجد جواب تقني صحيح — الجواب يأتي من كلفة كل نوع خطأ في مجالك.',
          'ولهذا لا تكفي الدقة مقياساً. فمصفوفة الالتباس تفصّل أربع حالات: إيجابي صحيح وسلبي صحيح وإيجابي كاذب وسلبي كاذب. ومنها يُشتق مقياسان متعاكسان: الضبط وهو نسبة الصحيح مما أنذر به النظام، والاستدعاء وهو نسبة ما أمسكه من الحالات الحقيقية.',
          'والعلاقة بينهما مقايضة حتمية: ارفع الاستدعاء ينخفض الضبط والعكس. ففي كشف السرطان نريد استدعاءً عالياً — فوات حالة كارثة، وإنذار كاذب يعني فحصاً إضافياً. وفي تصفية البريد نريد ضبطاً عالياً — رسالة مزعجة تمر مزعجة، لكن رسالة مهمة تذهب للمهملات كارثة.',
          'وشجرة القرار نموذج مختلف كلياً في طريقته: تطرح سلسلة أسئلة نعم أو لا، وكل سؤال يقسّم البيانات، حتى تصل لورقة فيها الفئة. وميزتها الكبرى الشفافية: تستطيع أن تقرأ مسار القرار وتشرحه لغير متخصص — وهذي ميزة نادرة تجعلها مفضّلة في المجالات التي تلزم فيها التبريرات.',
          'وعيبها الأشهر ميلها الشديد للحفظ: شجرة عميقة بلا قيد ستصنع فرعاً لكل عيّنة تقريباً فتحفظ التدريب وتفشل على الجديد. ويُعالَج بتحديد العمق أو بأقل عدد عيّنات للورقة، أو بجمع أشجار كثيرة مختلفة وأخذ تصويتها — وهذي فكرة الغابة العشوائية التي تجمع دقة عالية مع مقاومة للحفظ.'
        ],
        body_en: [
          'Classification models usually do not output a category directly but a probability between zero and one: a 0.73 chance this transaction is fraud. It is then compared against a threshold to become a decision. The default 0.5 is not sacred, and changing it alters the whole system behaviour with no retraining.',
          'Setting the threshold is a business decision: lowering it makes the system more sensitive, catching more fraud and disturbing more legitimate customers, while raising it reduces disturbance and lets fraud through. There is no technically correct answer; it comes from the cost of each error type in your domain.',
          'So accuracy alone is insufficient. The confusion matrix details four cases: true positive, true negative, false positive and false negative. From it come two opposing metrics: precision, the share of correct alarms among all alarms raised, and recall, the share of real cases the system caught.',
          'Their relationship is an inevitable trade-off: raising recall lowers precision and the reverse. In cancer detection we want high recall, since a missed case is a catastrophe while a false alarm means an extra scan. In spam filtering we want high precision, since a spam message getting through is annoying while an important message in the junk folder is a disaster.',
          'A decision tree is entirely different in method: it asks a series of yes-or-no questions, each splitting the data, until reaching a leaf holding the class. Its great merit is transparency: you can read the decision path and explain it to a non-specialist, a rare quality making it preferred in domains requiring justification.',
          'Its best-known flaw is a strong tendency to memorise: an unconstrained deep tree will create nearly a branch per sample, memorising the training set and failing on new data. It is treated by limiting depth or setting a minimum leaf sample count, or by growing many varied trees and taking their vote, which is the random forest idea combining high accuracy with memorisation resistance.'
        ],
        table: {
          head_ar: ['المقياس', 'ما يجيب عنه', 'يُفضَّل حين'],
          head_en: ['Metric', 'What it answers', 'Preferred when'],
          rows: [
            ['الدقة', 'نسبة التنبؤات الصحيحة كلها', 'الفئات متوازنة'],
            ['الضبط', 'كم من إنذاراتي كانت صحيحة', 'الإنذار الكاذب مكلف'],
            ['الاستدعاء', 'كم من الحالات الحقيقية أمسكت', 'فوات الحالة كارثي'],
            ['F1', 'توازن بين الضبط والاستدعاء', 'الخطآن متقاربا الكلفة']
          ]
        },
        keyPoints_ar: [
          'مخرج التصنيف احتمال، والعتبة هي ما يحوّله لقرار.',
          'ضبط العتبة قرار عمل يحدده كلفة كل نوع خطأ لا حساب تقني.',
          'الضبط والاستدعاء متعاكسان، ورفع أحدهما يخفض الآخر.',
          'كشف المرض يطلب استدعاءً عالياً، وتصفية البريد تطلب ضبطاً عالياً.',
          'شجرة القرار شفافة قابلة للشرح، وهذي ميزتها الكبرى.',
          'الشجرة العميقة بلا قيد تحفظ، والغابة العشوائية تعالج ذلك بالتصويت.'
        ],
        keyPoints_en: [
          'Classification output is a probability, and the threshold turns it into a decision.',
          'Setting the threshold is a business decision driven by error costs, not a technical computation.',
          'Precision and recall oppose each other: raising one lowers the other.',
          'Disease detection needs high recall; spam filtering needs high precision.',
          'A decision tree is transparent and explainable, which is its greatest merit.',
          'An unconstrained deep tree memorises, and a random forest fixes it by voting.'
        ],
        analogy_ar: 'تخيّل حارس أمن عند بوابة. لو شدّد كثيراً منع كل مشبوه ومعه عشرات الأبرياء — استدعاء عالٍ وضبط منخفض. ولو تساهل مرّ الأبرياء ومعهم بعض المخالفين — ضبط عالٍ واستدعاء منخفض. ولا يوجد ضبط «صحيح» للحارس؛ يعتمد على أي الخطأين أكلف: منع بريء أم دخول مخالف. وشجرة القرار حارس يشرح لك سبب منعه بجملة: «لأنك بلا بطاقة وفي وقت متأخر».',
        analogy_en: 'Picture a gate guard. Tightening stops every suspect along with dozens of innocents: high recall, low precision. Relaxing lets innocents through along with some violators: high precision, low recall. There is no correct setting for the guard; it depends on which error costs more, blocking an innocent or admitting a violator. A decision tree is a guard who explains the refusal in one sentence: because you have no badge and it is after hours.',
        terms: [
          { term: 'Threshold', def_ar: 'الحد الذي يتحوّل عنده الاحتمال إلى قرار فئة.', def_en: 'The cut-off turning a probability into a class decision.' },
          { term: 'Precision', def_ar: 'نسبة الصحيح مما أنذر به النظام.', def_en: 'The share of raised alarms that were correct.' },
          { term: 'Recall', def_ar: 'نسبة ما أمسكه النظام من الحالات الحقيقية.', def_en: 'The share of real cases the system caught.' },
          { term: 'Confusion Matrix', def_ar: 'جدول يفصّل الحالات الأربع للتنبؤ مقابل الحقيقة.', def_en: 'A table detailing four cases of prediction against truth.' },
          { term: 'Random Forest', def_ar: 'جمع أشجار كثيرة مختلفة وأخذ تصويتها لتقليل الحفظ.', def_en: 'Combining many varied trees and voting to reduce memorisation.' }
        ],
        cards: [
          { q_ar: 'ما الذي يحوّل احتمال النموذج إلى قرار؟', q_en: 'What turns a model probability into a decision?', a_ar: 'العتبة، وقيمتها الافتراضية ٠٫٥ ليست مقدسة وتغييرها يغيّر سلوك النظام بلا إعادة تدريب.', a_en: 'The threshold, whose default 0.5 is not sacred and changing it alters behaviour with no retraining.' },
          { q_ar: 'أي المقياسين يهم في كشف مرض خطير؟', q_en: 'Which metric matters in detecting a serious disease?', a_ar: 'الاستدعاء، لأن فوات حالة كارثة والإنذار الكاذب يعني فحصاً إضافياً فقط.', a_en: 'Recall, because a missed case is catastrophic while a false alarm only means an extra check.' },
          { q_ar: 'ما ميزة شجرة القرار الكبرى؟', q_en: 'What is a decision tree greatest merit?', a_ar: 'الشفافية: يمكن قراءة مسار القرار وشرحه لغير المتخصص.', a_en: 'Transparency: the decision path can be read and explained to a non-specialist.' },
          { q_ar: 'كيف تُعالَج ميل الشجرة للحفظ؟', q_en: 'How is a tree tendency to memorise treated?', a_ar: 'بتحديد العمق أو أقل عدد عيّنات للورقة، أو بجمع أشجار كثيرة والتصويت بينها.', a_en: 'By limiting depth or minimum leaf samples, or by growing many trees and voting.' }
        ]
      },
      {
        title_ar: 'التجميع وتقليل الأبعاد',
        title_en: 'Clustering and Dimensionality Reduction',
        lead_ar: 'التجميع يكتشف مجموعات بلا إجابات مسبقة، وتقليل الأبعاد يضغط السمات الكثيرة — وكلاهما استكشاف يحتاج تفسيراً بشرياً بعده.',
        lead_en: 'Clustering discovers groups with no prior answers and dimensionality reduction compresses many features, and both are exploration needing human interpretation afterwards.',
        body_ar: [
          'التجميع يقسّم البيانات إلى مجموعات متشابهة داخلياً متباينة فيما بينها، بلا أن تخبره ما المجموعات. وأشهر خوارزمياته تعمل هكذا: تختار عدداً من المراكز عشوائياً، ثم تنسب كل نقطة لأقرب مركز، ثم تحرّك كل مركز إلى متوسط نقاطه، وتكرر حتى تستقر المراكز.',
          'ومشكلتها الأولى أن عليك أن تحدد عدد المجموعات مسبقاً وهو ما لا تعرفه غالباً. وتُستخدم طرق مساعدة كرسم مقياس التماسك مقابل عدد المجموعات والبحث عن نقطة الانكسار حيث يتوقف التحسن الكبير. لكن هذي دلالة لا حكم، والقرار النهائي يظل بشرياً يوازن بين الرياضيات وقابلية الاستخدام: عشرون شريحة عملاء رياضياً أفضل وعملياً غير قابلة للإدارة.',
          'وحسّاسيتها للمقياس مسألة حاسمة: هي تعتمد المسافات، فعمود بأرقام كبيرة يسيطر على حساب المسافة. ولهذا التطبيع قبل التجميع ليس اختيارياً — وإهماله من أشهر أسباب نتائج تجميع بلا معنى.',
          'والنتيجة تحتاج تفسيراً: الخوارزمية تعطيك أن المجموعة الأولى فيها كذا نقطة، ولا تقول لك إن هذي «شريحة العملاء المتحفظين». والتفسير يتم بفحص خصائص كل مجموعة ومقارنتها، وهذا عمل بشري لا آلي، وهو ما يحوّل نتيجة تقنية إلى قرار عمل.',
          'وتقليل الأبعاد مسألة أخرى: حين تكون سماتك مئة، تظهر مشاكل تُعرف بلعنة الأبعاد — تتباعد النقاط كلها فتفقد المسافة معناها، ويزداد خطر الحفظ، ويثقل الحساب. فيُضغط الفضاء إلى أبعاد أقل تحفظ أكبر قدر من التباين.',
          'والاستخدام الأنفع لتقليل الأبعاد ليس دائماً تسريع التدريب، بل التصوير: ضغط بيانات بمئة سمة إلى بُعدين يجعل رسمها ممكناً على شاشة، فترى بعينك تجمّعات وقيماً شاذة وأنماطاً ما كنت لتلحظها في جدول. وحدّه أن الأبعاد الجديدة مركّبة لا معنى مباشر لها، فتخسر التفسير مقابل الوضوح البصري.'
        ],
        body_en: [
          'Clustering splits data into internally similar and mutually distinct groups without being told what the groups are. Its best-known algorithm works thus: pick several centres at random, assign each point to the nearest, move each centre to the average of its points, and repeat until the centres settle.',
          'Its first problem is that you must specify the number of groups in advance, which you usually do not know. Helper methods exist, such as plotting a cohesion measure against group count and finding the elbow where large improvement stops. But that is an indication rather than a verdict, and the final decision stays human, balancing mathematics against usability: twenty customer segments may be mathematically better and operationally unmanageable.',
          'Its scale sensitivity is decisive: it relies on distances, so a column with large numbers dominates the distance calculation. Scaling before clustering is therefore not optional, and neglecting it is among the most common causes of meaningless clustering results.',
          'The result needs interpretation: the algorithm tells you group one holds so many points, not that this is the conservative customer segment. Interpretation comes from inspecting and comparing each group characteristics, and that is human rather than machine work, and it is what turns a technical result into a business decision.',
          'Dimensionality reduction is a different matter: with a hundred features, problems known as the curse of dimensionality appear, as all points grow distant so distance loses meaning, memorisation risk rises, and computation gets heavy. So the space is compressed into fewer dimensions preserving as much variance as possible.',
          'Its most useful application is not always faster training but visualisation: compressing hundred-feature data into two dimensions makes plotting on a screen possible, so you see clusters, outliers and patterns you would never notice in a table. Its limit is that the new dimensions are composites with no direct meaning, so you trade interpretability for visual clarity.'
        ],
        table: {
          head_ar: ['الأسلوب', 'مدخله', 'مخرجه', 'قيده'],
          head_en: ['Method', 'Input', 'Output', 'Limitation'],
          rows: [
            ['التجميع', 'بيانات بلا إجابات', 'مجموعات بلا أسماء', 'تحديد العدد مسبقاً'],
            ['تقليل الأبعاد', 'سمات كثيرة', 'أبعاد أقل تحفظ التباين', 'أبعاد بلا معنى مباشر'],
            ['كشف الشذوذ', 'ما هو معتاد', 'إشارة لما يخالفه', 'يحتاج تعريف المعتاد'],
            ['التصوير ببعدين', 'بيانات عالية الأبعاد', 'رسم يُرى بالعين', 'تشويه بعض العلاقات']
          ]
        },
        keyPoints_ar: [
          'التجميع يشترط تحديد عدد المجموعات مسبقاً وهو ما لا تعرفه غالباً.',
          'نقطة الانكسار دلالة لا حكم، والقرار النهائي يوازن الرياضيات بقابلية الإدارة.',
          'التطبيع قبل التجميع ليس اختيارياً لأن الخوارزمية تعتمد المسافات.',
          'الخوارزمية تعطي المجموعات ولا تسمّيها، والتفسير عمل بشري.',
          'لعنة الأبعاد: كثرة السمات تُفقد المسافة معناها وترفع خطر الحفظ.',
          'أنفع استخدامات تقليل الأبعاد التصوير، وثمنه فقدان معنى الأبعاد الجديدة.'
        ],
        keyPoints_en: [
          'Clustering requires specifying the group count in advance, which you usually do not know.',
          'The elbow is an indication rather than a verdict; the final call balances maths with manageability.',
          'Scaling before clustering is not optional because the algorithm relies on distances.',
          'The algorithm produces groups without naming them; interpretation is human work.',
          'The curse of dimensionality: many features make distance meaningless and raise memorisation risk.',
          'The most useful reduction application is visualisation, at the price of meaningless new dimensions.'
        ],
        analogy_ar: 'تخيّل أنك دخلت قاعة فيها مئتا شخص وطُلب منك تقسيمهم لمجموعات متشابهة بلا أن يخبرك أحد على أي أساس. ستلاحظ من يقف مع من ومن يشبه من، ثم تعطي كل مجموعة حدوداً. لكن تسمية المجموعة — «هؤلاء المهندسون» — قرارك أنت بعد أن تنظر فيهم، لا نتيجة القسمة. وتقليل الأبعاد أن تصوّر القاعة من الأعلى بصورة واحدة: تخسر التفاصيل وترى التجمّعات فوراً.',
        analogy_en: 'Picture entering a hall of two hundred people asked to split them into similar groups with nobody telling you on what basis. You notice who stands with whom and who resembles whom, then draw boundaries. But naming a group, "these are the engineers", is your decision after looking at them, not the output of the split. Dimensionality reduction is photographing the hall from above in one image: you lose detail and see the clusters instantly.',
        terms: [
          { term: 'Clustering', def_ar: 'تقسيم البيانات لمجموعات متشابهة بلا إجابات مسبقة.', def_en: 'Splitting data into similar groups with no prior answers.' },
          { term: 'Centroid', def_ar: 'مركز المجموعة، وهو متوسط نقاطها.', def_en: 'A group centre, the average of its points.' },
          { term: 'Elbow Method', def_ar: 'طريقة تقترح عدد المجموعات بالبحث عن نقطة توقف التحسن الكبير.', def_en: 'A method suggesting group count by finding where large improvement stops.' },
          { term: 'Curse of Dimensionality', def_ar: 'تدهور المسافة والأداء مع كثرة السمات.', def_en: 'Distance and performance degrading as features multiply.' },
          { term: 'PCA', def_ar: 'ضغط السمات لأبعاد أقل تحفظ أكبر تباين ممكن.', def_en: 'Compressing features into fewer dimensions preserving maximum variance.' }
        ],
        cards: [
          { q_ar: 'ما أول ما يجب فعله قبل التجميع؟', q_en: 'What must be done before clustering?', a_ar: 'تطبيع السمات، لأن الخوارزمية تعتمد المسافات فيسيطر العمود كبير الأرقام.', a_en: 'Scale the features, because the algorithm relies on distances and a large-numbered column dominates.' },
          { q_ar: 'هل تحدد نقطة الانكسار عدد المجموعات نهائياً؟', q_en: 'Does the elbow settle the group count?', a_ar: 'لا، هي دلالة؛ والقرار النهائي يوازن بين الرياضيات وقابلية إدارة المجموعات عملياً.', a_en: 'No, it is an indication; the final call balances mathematics with practical manageability.' },
          { q_ar: 'ما لعنة الأبعاد؟', q_en: 'What is the curse of dimensionality?', a_ar: 'مع كثرة السمات تتباعد النقاط فتفقد المسافة معناها ويزداد خطر الحفظ ويثقل الحساب.', a_en: 'With many features points grow distant, distance loses meaning, memorisation risk rises and computation gets heavy.' },
          { q_ar: 'ما ثمن تقليل الأبعاد؟', q_en: 'What is the price of dimensionality reduction?', a_ar: 'الأبعاد الجديدة مركّبة بلا معنى مباشر، فتخسر التفسير مقابل الوضوح.', a_en: 'The new dimensions are composites with no direct meaning, trading interpretability for clarity.' }
        ]
      },
      {
        title_ar: 'التقييم وفرط التخصيص',
        title_en: 'Evaluation and Overfitting',
        lead_ar: 'فرط التخصيص أن يحفظ النموذج بدل أن يفهم، وعلامته الفارقة فجوة بين أداء التدريب والاختبار — وهو أشهر أسباب فشل النماذج في الإنتاج.',
        lead_en: 'Overfitting is memorising instead of understanding, marked by a gap between training and test performance, and it is the most common cause of model failure in production.',
        body_ar: [
          'فرط التخصيص أن يلتقط النموذج تفاصيل بيانات التدريب وضجيجها بدل النمط العام. فيبدو ممتازاً عليها وينهار على أي بيانات جديدة. وعلامته الفارقة واضحة ولا تخطئها: خطأ منخفض جداً على التدريب مع خطأ مرتفع على الاختبار.',
          'ونقيضه نقص التخصيص: نموذج أبسط من أن يلتقط النمط أصلاً، فأداؤه ضعيف على التدريب والاختبار معاً. والفرق بينهما مهم في التشخيص: النموذج السيء على الاثنين يحتاج قوة أكثر أو سمات أفضل، والنموذج الممتاز على التدريب فقط يحتاج تقييداً.',
          'وأسبابه ثلاثة: نموذج معقّد أكثر مما تحتمل البيانات، وبيانات قليلة لا تكفي لاستخلاص نمط عام، وتدريب طويل جداً يبدأ بعده النموذج بحفظ الأمثلة بعد أن استنفد النمط.',
          'وعلاجه بأربعة على الأقل: زيادة البيانات وهي الأنجع دائماً، وتبسيط النموذج، والتنظيم وهو عقوبة تُضاف للخسارة على الأوزان الكبيرة فتدفع النموذج لحلول أبسط، والإيقاف المبكر بمراقبة خطأ التحقق والتوقف حين يبدأ بالارتفاع ولو كان خطأ التدريب ما زال ينخفض.',
          'ومنحنى التعلّم أداة تشخيص ممتازة: ارسم خطأ التدريب وخطأ التحقق مقابل حجم البيانات. فإن كان الخطآن مرتفعين ومتقاربين فالمشكلة نقص تخصيص ولن تحلها بيانات إضافية. وإن كانت الفجوة بينهما واسعة فالمشكلة فرط تخصيص وزيادة البيانات ستنفع.',
          'وأخيراً تذكّر أن كل هذي المقاييس تقيس أداءً على بيانات جمعتها في الماضي. والعالم يتغيّر، فيقع ما يُسمّى انحراف البيانات: يتغيّر توزيع المدخلات فيتقادم النموذج بلا أن يتعطّل — يظل يعمل ويعطي أرقاماً وتنخفض دقته بصمت. ولهذا المراقبة بعد النشر جزء من التقييم لا خطوة تالية له.'
        ],
        body_en: [
          'Overfitting is a model capturing training data details and noise instead of the general pattern. It looks excellent on that data and collapses on anything new. Its signature is unmistakable: very low training error alongside high test error.',
          'Its opposite is underfitting: a model too simple to capture the pattern at all, performing poorly on both training and test. The distinction matters for diagnosis: poor on both needs more power or better features, while excellent on training only needs constraint.',
          'It has three causes: a model more complex than the data supports, data too scarce to yield a general pattern, and training run so long that the model begins memorising examples after exhausting the pattern.',
          'It has at least four treatments: more data, always the most effective; a simpler model; regularisation, a penalty added to the loss for large weights pushing the model toward simpler solutions; and early stopping, watching validation error and halting when it starts rising even while training error still falls.',
          'The learning curve is an excellent diagnostic: plot training and validation error against data size. If both are high and close, the problem is underfitting and extra data will not solve it. If the gap between them is wide, the problem is overfitting and more data will help.',
          'Finally, remember that all these metrics measure performance on data gathered in the past. The world changes, producing what is called data drift: the input distribution shifts so the model ages without breaking, continuing to run and produce numbers while its accuracy quietly declines. So post-deployment monitoring is part of evaluation rather than a step after it.'
        ],
        table: {
          head_ar: ['الحالة', 'خطأ التدريب', 'خطأ الاختبار', 'العلاج'],
          head_en: ['Case', 'Training error', 'Test error', 'Treatment'],
          rows: [
            ['فرط تخصيص', 'منخفض جداً', 'مرتفع', 'بيانات أكثر · تنظيم · تبسيط'],
            ['نقص تخصيص', 'مرتفع', 'مرتفع', 'نموذج أقوى · سمات أفضل'],
            ['ملائم', 'منخفض', 'منخفض قريب منه', 'أبقِ المراقبة'],
            ['انحراف بيانات', 'كان منخفضاً', 'يرتفع مع الزمن', 'إعادة تدريب على بيانات حديثة']
          ]
        },
        keyPoints_ar: [
          'فرط التخصيص: خطأ تدريب منخفض جداً مع خطأ اختبار مرتفع.',
          'نقص التخصيص: خطأ مرتفع على الاثنين، ويحتاج قوة أكثر لا تقييداً.',
          'التنظيم عقوبة على الأوزان الكبيرة تدفع النموذج لحلول أبسط.',
          'الإيقاف المبكر يتوقف حين يرتفع خطأ التحقق ولو استمر خطأ التدريب بالانخفاض.',
          'منحنى التعلّم يميّز الحالتين: تقارب مرتفع نقصٌ، وفجوة واسعة فرطٌ.',
          'انحراف البيانات يقادم النموذج بصمت، فالمراقبة جزء من التقييم لا تاليةٌ له.'
        ],
        keyPoints_en: [
          'Overfitting: very low training error with high test error.',
          'Underfitting: high error on both, needing more power rather than constraint.',
          'Regularisation penalises large weights, pushing the model toward simpler solutions.',
          'Early stopping halts when validation error rises even while training error still falls.',
          'The learning curve separates the two: high and close means underfitting, a wide gap means overfitting.',
          'Data drift ages a model silently, so monitoring is part of evaluation rather than after it.'
        ],
        analogy_ar: 'تخيّل طالبين. الأول حفظ أسئلة السنوات الماضية بحلولها حرفياً، فأخذ العلامة الكاملة في مراجعتها وسقط في امتحان بصياغة جديدة — هذا فرط التخصيص. والثاني لم يذاكر أصلاً فسقط في الاثنين — هذا نقص التخصيص. وانحراف البيانات أن يبقى الطالب متفوقاً سنوات ثم يتغيّر المنهج ولا أحد يخبره: يجيب بثقة بما تعلّمه وقد صار خطأً.',
        analogy_en: 'Picture two students. The first memorised past exam questions with their answers verbatim, scoring full marks reviewing them and failing an exam phrased anew: that is overfitting. The second never studied and failed both: that is underfitting. Data drift is a student excelling for years until the curriculum changes and nobody tells them: they answer confidently with what they learned, which is now wrong.',
        terms: [
          { term: 'Overfitting', def_ar: 'حفظ تفاصيل التدريب وضجيجه بدل النمط العام.', def_en: 'Memorising training details and noise instead of the general pattern.' },
          { term: 'Underfitting', def_ar: 'نموذج أبسط من أن يلتقط النمط فيفشل على الاثنين.', def_en: 'A model too simple to capture the pattern, failing on both sets.' },
          { term: 'Regularisation', def_ar: 'عقوبة على الأوزان الكبيرة تدفع لحلول أبسط.', def_en: 'A penalty on large weights pushing toward simpler solutions.' },
          { term: 'Early Stopping', def_ar: 'إيقاف التدريب حين يبدأ خطأ التحقق بالارتفاع.', def_en: 'Halting training when validation error starts rising.' },
          { term: 'Data Drift', def_ar: 'تغيّر توزيع البيانات مع الزمن فيتقادم النموذج بصمت.', def_en: 'The data distribution shifting over time so the model silently ages.' }
        ],
        cards: [
          { q_ar: 'ما العلامة الفارقة لفرط التخصيص؟', q_en: 'What is the signature of overfitting?', a_ar: 'خطأ منخفض جداً على التدريب مع خطأ مرتفع على الاختبار.', a_en: 'Very low training error alongside high test error.' },
          { q_ar: 'كيف يميّز منحنى التعلّم بين فرط التخصيص ونقصه؟', q_en: 'How does the learning curve tell the two apart?', a_ar: 'خطآن مرتفعان متقاربان يعني نقصاً، وفجوة واسعة بينهما تعني فرطاً.', a_en: 'Both high and close means underfitting; a wide gap means overfitting.' },
          { q_ar: 'ماذا يفعل التنظيم؟', q_en: 'What does regularisation do?', a_ar: 'يضيف عقوبة على الأوزان الكبيرة فيدفع النموذج نحو حلول أبسط أقل حفظاً.', a_en: 'It adds a penalty on large weights, pushing the model toward simpler, less memorising solutions.' },
          { q_ar: 'لماذا لا يكفي التقييم مرة واحدة قبل النشر؟', q_en: 'Why is one pre-deployment evaluation not enough?', a_ar: 'لأن انحراف البيانات يقادم النموذج بصمت، فيظل يعمل وتنخفض دقته دون إنذار.', a_en: 'Because data drift ages the model silently, so it keeps running while accuracy declines with no warning.' }
        ]
      }
    ],

    // ─────────── التعلّم العميق ───────────
    3: [
      {
        title_ar: 'العصبون والشبكة الأمامية',
        title_en: 'The Neuron and Feedforward Networks',
        lead_ar: 'العصبون الواحد ليس إلا مجموعاً موزوناً يمرّ بدالة، وقوة الشبكة تأتي من تكديس هذي الوحدات البسيطة في طبقات.',
        lead_en: 'A single neuron is no more than a weighted sum passed through a function, and network power comes from stacking these simple units in layers.',
        body_ar: [
          'العصبون الاصطناعي أبسط مما يوحي اسمه: يستقبل مدخلات، ويضرب كل مدخل في وزنه، ويجمع النواتج، ويضيف إزاحة، ثم يمرّر المجموع بدالة تفعيل. وهذي العملية كلها هي ما يجري ملايين المرات في أي شبكة عميقة.',
          'والوزن يحدد أهمية المدخل، والإزاحة تحرّك عتبة التفعيل فتسمح للعصبون بالاستجابة حتى لو كانت المدخلات صغيرة. وبدون الإزاحة تُقيَّد الشبكة بمرور دالتها من نقطة الأصل، وهو قيد يضعفها بلا سبب.',
          'وتُرتَّب العصبونات في طبقات: طبقة إدخال تستقبل السمات، وطبقات خفية تعالج، وطبقة إخراج تعطي النتيجة. وتُسمّى «خفية» لأنك لا ترى مخرجاتها مباشرة، لا لغموض فيها. والشبكة الأمامية تعني أن البيانات تسير في اتجاه واحد من الإدخال للإخراج بلا حلقات راجعة.',
          'وكلمة «عميق» تعني ببساطة وجود طبقات خفية كثيرة. وفائدة العمق أن كل طبقة تبني تمثيلاً أعقد مما قبلها: في الصور تتعلّم الأولى الحواف، والتالية أشكالاً بسيطة، والتالية أجزاء كوجه أو عجلة، والأخيرة الكائن كاملاً. وهذا التدرّج التلقائي هو ما يميّز التعلّم العميق.',
          'وعدد الطبقات وعدد العصبونات في كل طبقة قرارات تصميمية لا يوجد لها قانون: يُبدأ ببنية معروفة لمسائل مشابهة ثم تُعدَّل بالتجريب على مجموعة التحقق. والقاعدة الأولى: ابدأ بأصغر شبكة معقولة، فزيادة الحجم قبل الحاجة تجلب حفظاً وبطئاً بلا مكسب.',
          'وحدّ مهم يُغفَل: الشبكة الأمامية لا ذاكرة لها. فكل مدخل يُعالَج مستقلاً عمّا سبقه، فلا تصلح وحدها للبيانات المتسلسلة التي يعتمد معناها على الترتيب — كجملة أو سلسلة زمنية. وهذا القيد بالضبط هو ما وُجدت الشبكات المتكررة لعلاجه.'
        ],
        body_en: [
          'An artificial neuron is simpler than its name suggests: it takes inputs, multiplies each by its weight, sums the results, adds a bias, then passes the sum through an activation function. This entire operation is what runs millions of times in any deep network.',
          'The weight sets input importance while the bias shifts the activation threshold, letting a neuron respond even when inputs are small. Without a bias the network is forced through the origin, an unnecessary handicap.',
          'Neurons are arranged in layers: an input layer receiving features, hidden layers processing, and an output layer giving the result. They are called hidden because you do not see their outputs directly, not because anything is obscure. Feedforward means data flows one way from input to output with no return loops.',
          'The word deep simply means having many hidden layers. Depth helps because each layer builds a more complex representation than the one before: in images the first learns edges, the next simple shapes, the next parts such as a face or a wheel, and the last the whole object. That automatic progression is what distinguishes deep learning.',
          'Layer count and neurons per layer are design decisions with no governing law: start from a known architecture for similar problems then adjust by experiment on the validation set. The first rule: begin with the smallest reasonable network, since growing before need brings memorisation and slowness with no gain.',
          'An important overlooked limit: a feedforward network has no memory. Each input is processed independently of what came before, so alone it does not suit sequential data whose meaning depends on order, such as a sentence or a time series. That limitation is precisely what recurrent networks were created to address.'
        ],
        table: {
          head_ar: ['المكوّن', 'دوره', 'أثر إهماله'],
          head_en: ['Component', 'Its role', 'Effect of omitting it'],
          rows: [
            ['الوزن', 'يحدد أهمية المدخل', 'لا تعلّم أصلاً'],
            ['الإزاحة', 'تحرّك عتبة التفعيل', 'تقييد الشبكة بمرورها من الأصل'],
            ['دالة التفعيل', 'تدخل اللاخطية', 'الشبكة كلها تعادل طبقة واحدة'],
            ['الطبقة الخفية', 'تبني تمثيلاً أعقد', 'عجز عن الأنماط المركّبة']
          ]
        },
        keyPoints_ar: [
          'العصبون: ضرب المدخلات بأوزانها ثم جمعها مع إزاحة ثم تمريرها بدالة تفعيل.',
          'الإزاحة تحرّر الشبكة من قيد المرور بنقطة الأصل.',
          '«عميق» تعني كثرة الطبقات الخفية، وكل طبقة تبني تمثيلاً أعقد.',
          'لا قانون لعدد الطبقات: ابدأ بأصغر شبكة معقولة وجرّب على التحقق.',
          'الشبكة الأمامية بلا ذاكرة، فلا تصلح وحدها للبيانات المتسلسلة.'
        ],
        keyPoints_en: [
          'A neuron multiplies inputs by weights, sums with a bias, and passes through an activation.',
          'The bias frees the network from being forced through the origin.',
          'Deep simply means many hidden layers, each building a more complex representation.',
          'There is no law for layer count: start with the smallest reasonable network and tune on validation.',
          'A feedforward network has no memory, so alone it does not suit sequential data.'
        ],
        analogy_ar: 'تخيّل لجنة قبول متعددة المستويات. كل عضو في المستوى الأول ينظر لجزئية واحدة ويعطيها وزناً ثم يمرر رأيه. والمستوى الثاني لا يرى الملف الأصلي، وإنما يجمع آراء المستوى الأول ويبني عليها رأياً أعقد. وهكذا حتى القرار النهائي. والعمق هو عدد المستويات — ولاحظ أن كل عضو بسيط جداً، والذكاء كله في التركيب لا في الفرد.',
        analogy_en: 'Picture a multi-level admissions committee. Each member at the first level looks at one aspect, weights it, and passes an opinion on. The second level never sees the original file; it combines first-level opinions into a more complex judgement, and so on to the final decision. Depth is the number of levels, and note that each member is very simple: all the intelligence lies in the composition rather than the individual.',
        terms: [
          { term: 'Neuron', def_ar: 'وحدة تحسب مجموعاً موزوناً وتمرّره بدالة تفعيل.', def_en: 'A unit computing a weighted sum and passing it through an activation.' },
          { term: 'Bias', def_ar: 'قيمة تُضاف للمجموع فتحرّك عتبة التفعيل.', def_en: 'A value added to the sum shifting the activation threshold.' },
          { term: 'Hidden Layer', def_ar: 'طبقة بين الإدخال والإخراج لا تُرى مخرجاتها مباشرة.', def_en: 'A layer between input and output whose outputs are not directly seen.' },
          { term: 'Feedforward', def_ar: 'سير البيانات في اتجاه واحد بلا حلقات راجعة.', def_en: 'Data flowing one way with no return loops.' }
        ],
        cards: [
          { q_ar: 'ما الذي يفعله العصبون بالضبط؟', q_en: 'What exactly does a neuron do?', a_ar: 'يضرب كل مدخل بوزنه، ويجمع النواتج مع إزاحة، ثم يمرّر المجموع بدالة تفعيل.', a_en: 'It multiplies each input by its weight, sums with a bias, then passes the sum through an activation.' },
          { q_ar: 'لماذا تلزم الإزاحة؟', q_en: 'Why is a bias needed?', a_ar: 'لتحريك عتبة التفعيل، وبدونها تُقيَّد الشبكة بمرور دالتها من نقطة الأصل.', a_en: 'To shift the activation threshold; without it the network is forced through the origin.' },
          { q_ar: 'ماذا تعني كلمة «عميق»؟', q_en: 'What does deep mean?', a_ar: 'وجود طبقات خفية كثيرة، كل واحدة تبني تمثيلاً أعقد مما قبلها.', a_en: 'Having many hidden layers, each building a more complex representation than the previous.' },
          { q_ar: 'لماذا لا تصلح الشبكة الأمامية للجُمل؟', q_en: 'Why is a feedforward network unfit for sentences?', a_ar: 'لأنها بلا ذاكرة: تعالج كل مدخل مستقلاً، والجملة يعتمد معناها على ترتيب كلماتها.', a_en: 'It has no memory: each input is processed independently, while a sentence meaning depends on word order.' }
        ]
      },
      {
        title_ar: 'دوال التفعيل والانتشار العكسي',
        title_en: 'Activation Functions and Backpropagation',
        lead_ar: 'دالة التفعيل هي ما يمنح الشبكة قدرتها، فبدونها تنهار كل الطبقات إلى طبقة واحدة — والانتشار العكسي هو ما يجعل التدريب ممكناً أصلاً.',
        lead_en: 'The activation function is what gives a network its power, since without it every layer collapses into one, and backpropagation is what makes training possible at all.',
        body_ar: [
          'لو أزلت دوال التفعيل من شبكة بعشر طبقات، لصارت رياضياً معادلة عن طبقة واحدة مهما بلغ عمقها. والسبب أن تركيب عمليات خطية متتابعة ينتج عملية خطية واحدة. فدالة التفعيل هي التي تدخل اللاخطية وتجعل للعمق معنى — وهذي ليست تفصيلاً بل شرط وجود المجال.',
          'وأشهر دالة اليوم هي الوحدة الخطية المقوّمة: تُرجع القيمة كما هي إن كانت موجبة وصفراً إن كانت سالبة. وبساطتها سرّ انتشارها: سريعة الحساب، ولا تعاني تلاشي التدرّج في الجانب الموجب. وعيبها أن العصبون الذي يقع في الجانب السالب دائماً يتوقف عن التعلّم نهائياً، ويُسمّى العصبون الميت.',
          'ولطبقة الإخراج دوال خاصة تختلف بحسب المهمة: السيني يعطي رقماً بين صفر وواحد فيصلح لتصنيف ثنائي، والسوفت ماكس يوزّع الاحتمال على عدة فئات بحيث يكون مجموعها واحداً فيصلح للتصنيف متعدد الفئات، والانحدار لا يحتاج دالة تفعيل في الإخراج أصلاً لأن المخرج رقم حر.',
          'واختيار دالة إخراج خاطئة خطأ شائع مكلف: استخدام السيني لتصنيف عشر فئات يعطيك عشرة احتمالات مستقلة لا تجمع واحداً، فتفقد معنى «هذي الصورة واحدة من عشرة». والصحيح سوفت ماكس الذي يجعلها تتنافس.',
          'والانتشار العكسي هو الآلية التي تجعل تدريب الشبكات ممكناً: بعد حساب الخسارة عند المخرج، يُوزَّع اللوم على كل وزن في الشبكة رجوعاً من الطبقة الأخيرة للأولى. ويُحسب لكل وزن كم ساهم في الخطأ، فيُعدَّل بمقدار مساهمته.',
          'ومشكلته الشهيرة تلاشي التدرّج: كلما رجعت للطبقات الأولى، ضُربت المشتقات ببعضها فصغرت حتى تكاد تنعدم، فتتوقف الطبقات الأولى عن التعلّم. وقد عطّل هذا الشبكات العميقة سنوات، وحُلّ بمزيج من دوال تفعيل أنسب وتطبيع بين الطبقات ووصلات تخطّي تمرّر الإشارة مباشرة — وهذي الحلول هي ما جعل الشبكات العميقة جداً ممكنة.'
        ],
        body_en: [
          'Remove the activation functions from a ten-layer network and it becomes mathematically equivalent to one layer however deep it is. The reason is that composing consecutive linear operations yields one linear operation. The activation introduces non-linearity and gives depth meaning, and this is not a detail but the condition for the field to exist.',
          'The most common function today is the rectified linear unit: it returns the value unchanged when positive and zero when negative. Its simplicity explains its spread: fast to compute and free of vanishing gradients on the positive side. Its flaw is that a neuron permanently stuck on the negative side stops learning entirely, called a dead neuron.',
          'The output layer has special functions varying by task: sigmoid yields a number between zero and one suiting binary classification, softmax distributes probability across several classes so they sum to one suiting multi-class classification, and regression needs no output activation at all since the output is a free number.',
          'Choosing the wrong output function is a common and costly mistake: using sigmoid for ten classes gives ten independent probabilities that do not sum to one, losing the meaning of this image being one of ten. The correct choice is softmax, which makes them compete.',
          'Backpropagation is the mechanism making network training possible: after computing the loss at the output, blame is distributed to every weight in the network travelling back from the last layer to the first. Each weight contribution to the error is computed, and it is adjusted in proportion.',
          'Its famous problem is the vanishing gradient: travelling back toward the early layers, derivatives multiply together and shrink until they nearly vanish, so the early layers stop learning. This blocked deep networks for years and was solved by a mix of better activations, normalisation between layers, and skip connections passing the signal directly, and those solutions are what made very deep networks possible.'
        ],
        table: {
          head_ar: ['الدالة', 'مخرجها', 'أين تُستخدم'],
          head_en: ['Function', 'Its output', 'Where used'],
          rows: [
            ['ReLU', 'القيمة أو صفر', 'الطبقات الخفية'],
            ['Sigmoid', 'بين صفر وواحد', 'إخراج تصنيف ثنائي'],
            ['Softmax', 'احتمالات مجموعها واحد', 'إخراج تصنيف متعدد'],
            ['بلا دالة', 'رقم حر', 'إخراج الانحدار']
          ]
        },
        keyPoints_ar: [
          'بلا دالة تفعيل تنهار الشبكة كلها إلى ما يعادل طبقة واحدة.',
          'ReLU سريعة وشائعة، وعيبها العصبون الميت في الجانب السالب.',
          'سيني للتصنيف الثنائي، وسوفت ماكس للمتعدد، والانحدار بلا دالة إخراج.',
          'استخدام السيني لعشر فئات يعطي احتمالات مستقلة لا تتنافس — وهو خطأ.',
          'الانتشار العكسي يوزّع اللوم على الأوزان رجوعاً من المخرج للمدخل.',
          'تلاشي التدرّج يوقف تعلّم الطبقات الأولى، وحُلّ بالتفعيلات والتطبيع ووصلات التخطّي.'
        ],
        keyPoints_en: [
          'Without activations the whole network collapses to the equivalent of one layer.',
          'ReLU is fast and common, with the dead neuron flaw on the negative side.',
          'Sigmoid for binary, softmax for multi-class, and regression needs no output activation.',
          'Using sigmoid for ten classes gives independent non-competing probabilities, which is wrong.',
          'Backpropagation distributes blame to weights travelling back from output to input.',
          'Vanishing gradients stop early layers learning, solved by activations, normalisation and skip connections.'
        ],
        analogy_ar: 'تخيّل مصنعاً فيه عشر محطات، وكل محطة لا تفعل إلا ضرب الكمية في رقم. مهما زدت المحطات، الناتج النهائي ضرب واحد في رقم واحد — فلا فائدة من العشر. لكن لو أضافت كل محطة قراراً: «إن كانت الكمية أقل من كذا فاجعلها صفراً»، صار لكل محطة أثر لا يُختصر. هذي هي دالة التفعيل. وأما الانتشار العكسي فأشبه بتحقيق بعد خطأ في المنتج النهائي: يُرجع خطوة خطوة ليعرف كم ساهمت كل محطة في الخلل.',
        analogy_en: 'Picture a factory with ten stations where each only multiplies the quantity by a number. However many stations you add, the final result is one multiplication by one number, so the ten are pointless. But if each station adds a decision, "if the quantity is below this, set it to zero", each station has an effect that cannot be collapsed. That is the activation function. Backpropagation is like an investigation after a defect in the final product, walking back step by step to learn how much each station contributed.',
        terms: [
          { term: 'Activation Function', def_ar: 'دالة تُدخل اللاخطية فتجعل للعمق معنى.', def_en: 'A function introducing non-linearity, giving depth meaning.' },
          { term: 'ReLU', def_ar: 'ترجع القيمة إن كانت موجبة وصفراً إن كانت سالبة.', def_en: 'Returns the value when positive and zero when negative.' },
          { term: 'Softmax', def_ar: 'توزّع الاحتمال على فئات مجموعها واحد.', def_en: 'Distributes probability across classes summing to one.' },
          { term: 'Backpropagation', def_ar: 'توزيع اللوم على الأوزان رجوعاً من المخرج للمدخل.', def_en: 'Distributing blame to weights from output back to input.' },
          { term: 'Vanishing Gradient', def_ar: 'تضاؤل المشتقات حتى تتوقف الطبقات الأولى عن التعلّم.', def_en: 'Derivatives shrinking until early layers stop learning.' }
        ],
        cards: [
          { q_ar: 'ماذا يحدث لو أزلنا دوال التفعيل؟', q_en: 'What happens if activations are removed?', a_ar: 'تصير الشبكة مهما عمقت مكافئة رياضياً لطبقة واحدة، لأن تركيب الخطي خطي.', a_en: 'However deep, the network becomes mathematically equivalent to one layer, since composing linear operations stays linear.' },
          { q_ar: 'أي دالة إخراج لتصنيف عشر فئات؟', q_en: 'Which output function for ten classes?', a_ar: 'سوفت ماكس، لأنها تجعل الاحتمالات تتنافس ومجموعها واحداً، بخلاف السيني.', a_en: 'Softmax, because it makes probabilities compete and sum to one, unlike sigmoid.' },
          { q_ar: 'ما العصبون الميت؟', q_en: 'What is a dead neuron?', a_ar: 'عصبون وقع في الجانب السالب دائماً مع ReLU فتوقف عن التعلّم نهائياً.', a_en: 'A neuron permanently on the negative side with ReLU that stops learning entirely.' },
          { q_ar: 'ما تلاشي التدرّج وكيف عولج؟', q_en: 'What is the vanishing gradient and how was it solved?', a_ar: 'تضاؤل المشتقات رجوعاً فتتوقف الطبقات الأولى؛ وعولج بتفعيلات أنسب وتطبيع ووصلات تخطّي.', a_en: 'Derivatives shrink on the way back so early layers stall; solved by better activations, normalisation and skip connections.' }
        ]
      },
      {
        title_ar: 'الشبكات الالتفافية والصور',
        title_en: 'Convolutional Networks and Images',
        lead_ar: 'الالتفاف يمرّر مرشّحاً صغيراً على الصورة كلها، فيتعلّم النمط مرة واحدة ويكشفه أينما وقع — وهذي هي الفكرة التي فتحت الرؤية الحاسوبية.',
        lead_en: 'Convolution slides a small filter across the whole image, learning a pattern once and detecting it wherever it appears, and that idea opened computer vision.',
        body_ar: [
          'لو عاملت الصورة كصف أرقام ومررتها لشبكة أمامية، لواجهت مشكلتين قاتلتين. الأولى الحجم: صورة متواضعة بألف في ألف بكسل وثلاث قنوات لونية تعطي ثلاثة ملايين مدخل، وربطها بطبقة من ألف عصبون يعني ثلاثة مليارات وزن. والثانية أخطر: الشبكة الأمامية تعتبر البكسل في الزاوية اليسرى شيئاً مختلفاً كلياً عن نظيره في اليمنى، فلو تعلّمت شكل قطة في موضع لم تعرفها في موضع آخر.',
          'والالتفاف يحل الاثنين بفكرة واحدة: مرشّح صغير — مصفوفة أوزان ثلاثة في ثلاثة مثلاً — يمرّ على الصورة كلها موضعاً بعد موضع، ويحسب في كل موضع مجموعاً موزوناً. فتُستخدم الأوزان نفسها في كل المواضع، فينخفض العدد من مليارات إلى عشرات، ويصير النمط الذي تعلّمه قابلاً للكشف أينما وقع.',
          'وهذا يُسمّى مشاركة الأوزان، وهو جوهر الفكرة: المرشّح الذي تعلّم كشف حافة رأسية يكشفها في أي مكان من الصورة، لأنه هو نفسه يمرّ على الجميع. ولهذا تُوصف الشبكات الالتفافية بأنها ثابتة إزاء الانتقال.',
          'وطبقة التجميع تلي الالتفاف غالباً: تأخذ كل منطقة صغيرة وتستبقي أقوى استجابة فيها. فتصغّر الأبعاد وتقلل الحساب، وتزيد تحمّل النموذج للإزاحات الصغيرة — فتحرّك الكائن بضعة بكسلات لا يغيّر النتيجة.',
          'وتُكدَّس هذي الطبقات فيتكوّن التدرّج الشهير: الطبقات الأولى تتعلّم حوافّ وألواناً، والوسطى أشكالاً وأنماطاً، والعميقة أجزاء ذات معنى كعين أو عجلة. وهذا التدرّج لا يُبرمَج، وإنما ينشأ من التدريب نفسه — وهو من أجمل ما في المجال.',
          'والتعلّم بالنقل ثمرة عملية مهمة: بدل تدريب شبكة من الصفر — وهو يحتاج ملايين الصور وعتاداً باهظاً — تأخذ شبكة مدرَّبة على بيانات ضخمة وتعيد تدريب طبقاتها الأخيرة فقط على بياناتك القليلة. فتحصل على أداء ممتاز بمئات الصور بدل ملايين، وهذي الطريقة هي ما يستخدمه أغلب من يعمل في الرؤية اليوم.'
        ],
        body_en: [
          'Treating an image as a row of numbers fed to a feedforward network hits two fatal problems. First, size: a modest thousand-by-thousand image with three colour channels gives three million inputs, and connecting it to a thousand-neuron layer means three billion weights. Second and worse: a feedforward network treats a pixel in the left corner as something entirely different from its counterpart on the right, so a cat shape learned in one position is unrecognised in another.',
          'Convolution solves both with one idea: a small filter, a three-by-three weight matrix for instance, slides across the whole image position by position computing a weighted sum at each. The same weights serve every position, dropping the count from billions to dozens and making a learned pattern detectable wherever it appears.',
          'This is called weight sharing and is the heart of the idea: a filter that learned to detect a vertical edge detects it anywhere in the image, because the very same filter passes over all of it. Hence convolutional networks are described as translation invariant.',
          'A pooling layer usually follows convolution: it takes each small region and keeps the strongest response in it. This shrinks dimensions and reduces computation, and increases tolerance to small shifts, so moving an object a few pixels does not change the result.',
          'Stacking these layers produces the famous progression: early layers learn edges and colours, middle ones shapes and patterns, and deep ones meaningful parts such as an eye or a wheel. This progression is not programmed; it emerges from training itself, and it is among the most elegant things in the field.',
          'Transfer learning is an important practical fruit: instead of training a network from scratch, needing millions of images and expensive hardware, you take a network trained on massive data and retrain only its final layers on your small dataset. You gain excellent performance from hundreds of images rather than millions, and this is what most people working in vision use today.'
        ],
        table: {
          head_ar: ['الطبقة', 'ما تفعله', 'أثرها'],
          head_en: ['Layer', 'What it does', 'Its effect'],
          rows: [
            ['الالتفاف', 'تمرير مرشّح صغير على الصورة', 'كشف النمط أينما وقع بأوزان قليلة'],
            ['التجميع', 'استبقاء أقوى استجابة بمنطقة', 'تصغير الأبعاد وتحمّل الإزاحة'],
            ['التسطيح', 'تحويل الخرائط لصف أرقام', 'التهيئة لطبقة التصنيف'],
            ['الكثيفة', 'ربط كامل للتصنيف النهائي', 'إنتاج احتمالات الفئات']
          ]
        },
        keyPoints_ar: [
          'الشبكة الأمامية على الصور تنفجر عدداً وتعجز عن التعرّف عند تغيّر الموضع.',
          'المرشّح الصغير يمرّ على الصورة كلها بالأوزان نفسها — مشاركة الأوزان.',
          'مشاركة الأوزان تجعل النمط قابلاً للكشف أينما وقع.',
          'التجميع يصغّر الأبعاد ويمنح تحمّلاً للإزاحات الصغيرة.',
          'التدرّج من حواف لأشكال لأجزاء ينشأ من التدريب ولا يُبرمَج.',
          'التعلّم بالنقل يعطي أداءً ممتازاً بمئات الصور بدل ملايين.'
        ],
        keyPoints_en: [
          'A feedforward network on images explodes in parameters and fails when position shifts.',
          'A small filter slides across the whole image with the same weights: weight sharing.',
          'Weight sharing makes a pattern detectable wherever it appears.',
          'Pooling shrinks dimensions and grants tolerance to small shifts.',
          'The progression from edges to shapes to parts emerges from training and is not programmed.',
          'Transfer learning gives excellent performance from hundreds of images rather than millions.'
        ],
        analogy_ar: 'تخيّل مفتشاً يبحث عن ختم مزوّر في ألف مستند. الطريقة الساذجة أن تدرّب ألف مفتش، كل واحد يحفظ شكل الختم في موضع واحد من الورقة. والطريقة الالتفافية أن تدرّب مفتشاً واحداً يعرف شكل الختم، ثم تمرّره على كل مواضع كل ورقة. مفتش واحد بدل ألف، ويكشف الختم في أي موضع — حتى في موضع لم يره في التدريب.',
        analogy_en: 'Picture an inspector hunting a forged stamp across a thousand documents. The naive approach trains a thousand inspectors, each memorising the stamp shape at one position on the page. The convolutional approach trains one inspector who knows the stamp shape, then slides them across every position of every page. One inspector instead of a thousand, detecting the stamp anywhere, even at a position never seen in training.',
        terms: [
          { term: 'Convolution', def_ar: 'تمرير مرشّح صغير على المدخل لحساب استجابات موضعية.', def_en: 'Sliding a small filter over the input to compute local responses.' },
          { term: 'Filter', def_ar: 'مصفوفة أوزان صغيرة تتعلّم كشف نمط بعينه.', def_en: 'A small weight matrix learning to detect a specific pattern.' },
          { term: 'Weight Sharing', def_ar: 'استخدام الأوزان نفسها في كل مواضع المدخل.', def_en: 'Using the same weights at every input position.' },
          { term: 'Pooling', def_ar: 'تصغير الأبعاد باستبقاء أقوى استجابة في كل منطقة.', def_en: 'Shrinking dimensions by keeping the strongest response per region.' },
          { term: 'Transfer Learning', def_ar: 'إعادة تدريب الطبقات الأخيرة من نموذج جاهز على بياناتك.', def_en: 'Retraining the last layers of a ready model on your data.' }
        ],
        cards: [
          { q_ar: 'ما المشكلتان اللتان يحلهما الالتفاف؟', q_en: 'Which two problems does convolution solve?', a_ar: 'انفجار عدد الأوزان، وعجز الشبكة عن التعرّف على النمط حين يتغيّر موضعه.', a_en: 'The explosion of weight count, and failure to recognise a pattern when its position changes.' },
          { q_ar: 'ما مشاركة الأوزان ولماذا تهم؟', q_en: 'What is weight sharing and why does it matter?', a_ar: 'استخدام المرشّح نفسه في كل المواضع، فيقلّ عدد الأوزان ويصير النمط قابلاً للكشف أينما وقع.', a_en: 'Using the same filter at every position, cutting weight count and making a pattern detectable anywhere.' },
          { q_ar: 'ماذا تفعل طبقة التجميع؟', q_en: 'What does a pooling layer do?', a_ar: 'تستبقي أقوى استجابة في كل منطقة فتصغّر الأبعاد وتمنح تحمّلاً للإزاحات الصغيرة.', a_en: 'It keeps the strongest response per region, shrinking dimensions and tolerating small shifts.' },
          { q_ar: 'متى يُستخدم التعلّم بالنقل؟', q_en: 'When is transfer learning used?', a_ar: 'حين تكون بياناتك قليلة: تأخذ نموذجاً مدرَّباً وتعيد تدريب طبقاته الأخيرة فقط.', a_en: 'When your data is small: take a trained model and retrain only its final layers.' }
        ]
      },
      {
        title_ar: 'الشبكات المتكررة والبيانات المتسلسلة',
        title_en: 'Recurrent Networks and Sequential Data',
        lead_ar: 'البيانات المتسلسلة يعتمد معناها على الترتيب، والشبكة المتكررة تحمل حالة من خطوة لأخرى فتصير لها ذاكرة — لكنها ذاكرة قصيرة تحتاج علاجاً.',
        lead_en: 'Sequential data draws meaning from order, and a recurrent network carries state from step to step giving it memory, but a short memory needing treatment.',
        body_ar: [
          'بعض البيانات لا معنى لها بلا ترتيب: «الطالب ضرب المعلم» و«المعلم ضرب الطالب» فيهما الكلمات نفسها والمعنى معكوس. وكذلك السلاسل الزمنية: قراءة حرارة اليوم تُفهم في سياق الأيام السابقة. والشبكة الأمامية تعجز عن هذا لأنها تعالج كل مدخل مستقلاً.',
          'والشبكة المتكررة تعالج المتسلسلة عنصراً عنصراً، وتحتفظ بحالة داخلية تُمرَّر من خطوة للتالية. فحين تصل للكلمة الخامسة، تكون حاملة أثراً من الأربع قبلها. وهذي الحالة هي الذاكرة، وهي ما يجعل الترتيب مؤثراً في المخرج.',
          'ومشكلتها الأساسية أن ذاكرتها تضعف بسرعة مع طول التسلسل. والسبب تلاشي التدرّج نفسه: الإشارة الراجعة تُضرب في كل خطوة فتضمحل، فتفقد الشبكة أثر ما بعد عشرين أو ثلاثين خطوة. ولهذا تعجز عن ربط بداية فقرة طويلة بنهايتها.',
          'وشبكات الذاكرة طويلة المدى عولجت بها هذي المشكلة ببنية أذكى: تضيف بوابات تتعلّم ما الذي يُحتفظ به وما الذي يُنسى وما الذي يُخرَج. فتصير الشبكة قادرة على حمل معلومة مهمة عشرات الخطوات وإسقاط ما لا يفيد.',
          'والفكرة العميقة في البوابات أن النسيان قدرة مطلوبة لا عيب: شبكة تحتفظ بكل شيء تغرق في تفاصيل لا تفيد، والقدرة على تحديد ما يُنسى هي ما يجعل الذاكرة نافعة. وهذا مبدأ ينطبق على الأنظمة كما ينطبق على البشر.',
          'وحدّ بنيوي في المتكررة كلها: المعالجة متسلسلة بطبيعتها، فلا يمكن حساب الخطوة العاشرة قبل التاسعة. وهذا يمنع الاستفادة الكاملة من المعالجات المتوازية، ويجعل تدريبها بطيئاً على النصوص الطويلة — وهذا القيد بالذات هو ما دفع لظهور بنية الانتباه التي تعالج التسلسل كله دفعة واحدة.'
        ],
        body_en: [
          'Some data has no meaning without order: "the student hit the teacher" and "the teacher hit the student" share every word with reversed meaning. Time series are the same: today temperature reading is understood in the context of previous days. A feedforward network cannot do this because it processes each input independently.',
          'A recurrent network processes a sequence element by element while keeping an internal state passed from one step to the next. Reaching the fifth word it carries a trace of the four before. That state is the memory, and it is what makes order affect the output.',
          'Its core problem is that memory weakens quickly with sequence length, for the same vanishing gradient reason: the returning signal multiplies at every step and decays, so the network loses the trace of anything beyond twenty or thirty steps. Hence it cannot link the beginning of a long paragraph to its end.',
          'Long short-term memory networks addressed this with a smarter structure: adding gates that learn what to keep, what to forget and what to emit. The network becomes able to carry an important piece of information for dozens of steps while dropping what does not help.',
          'The deep idea in gating is that forgetting is a required capability rather than a flaw: a network keeping everything drowns in useless detail, and the ability to decide what to forget is what makes memory useful. This principle applies to systems as it does to people.',
          'One structural limit applies to all recurrent networks: processing is inherently sequential, so step ten cannot be computed before step nine. This prevents full use of parallel processors and makes training slow on long texts, and that very constraint drove the emergence of attention architectures processing the whole sequence at once.'
        ],
        table: {
          head_ar: ['البنية', 'ذاكرتها', 'قيدها'],
          head_en: ['Architecture', 'Its memory', 'Its limitation'],
          rows: [
            ['أمامية', 'لا ذاكرة', 'الترتيب بلا أثر'],
            ['متكررة بسيطة', 'قصيرة تضمحل', 'تفقد ما بعد عشرات الخطوات'],
            ['ذاكرة طويلة المدى', 'مضبوطة ببوابات', 'أبطأ وأعقد حساباً'],
            ['انتباه', 'وصول مباشر لكل التسلسل', 'كلفة ترتفع بمربع الطول']
          ]
        },
        keyPoints_ar: [
          'البيانات المتسلسلة معناها في الترتيب، والشبكة الأمامية تعجز عنها.',
          'المتكررة تحمل حالة من خطوة لأخرى، وهذي الحالة هي ذاكرتها.',
          'ذاكرتها تضمحل مع الطول بسبب تلاشي التدرّج نفسه.',
          'البوابات تتعلّم ما يُحتفظ به وما يُنسى، والنسيان قدرة مطلوبة لا عيب.',
          'المعالجة المتسلسلة تمنع التوازي وتُبطئ التدريب — ومنها جاء دافع الانتباه.'
        ],
        keyPoints_en: [
          'Sequential data draws meaning from order, and feedforward networks cannot handle it.',
          'A recurrent network carries state between steps, and that state is its memory.',
          'Its memory decays with length for the same vanishing gradient reason.',
          'Gates learn what to keep and what to forget, and forgetting is a needed capability.',
          'Sequential processing prevents parallelism and slows training, which motivated attention.'
        ],
        analogy_ar: 'تخيّل مترجماً فورياً يستمع لخطاب طويل. لو نسي كل جملة بمجرد ترجمتها، لعجز عن ترجمة ضمير يعود لاسم ذُكر قبل خمس دقائق. والشبكة المتكررة مترجم يحمل مذكرة صغيرة يحدّثها مع كل جملة. لكن مذكرته محدودة، فما كُتب في أولها يُمحى بآخرها. والبوابات مترجم يقرر بوعي: هذا الاسم مهم أبقيه، وهذي التفصيلة أهملها.',
        analogy_en: 'Picture a simultaneous interpreter listening to a long speech. If they forgot each sentence once translated, they could not render a pronoun referring to a name mentioned five minutes earlier. A recurrent network is an interpreter carrying a small notepad updated with each sentence. But the notepad is limited, so what was written at the start is erased by the end. Gating is an interpreter deciding consciously: this name matters so keep it, this detail can go.',
        terms: [
          { term: 'Sequence', def_ar: 'بيانات مرتبة يعتمد معناها على ترتيب عناصرها.', def_en: 'Ordered data whose meaning depends on element order.' },
          { term: 'Hidden State', def_ar: 'حالة داخلية تُمرَّر بين خطوات التسلسل فتكوّن الذاكرة.', def_en: 'An internal state passed between steps forming the memory.' },
          { term: 'LSTM', def_ar: 'شبكة ببوابات تتعلّم ما يُحتفظ به وما يُنسى.', def_en: 'A network with gates learning what to keep and what to forget.' },
          { term: 'Gate', def_ar: 'وحدة تتحكم في مرور المعلومة داخل الشبكة المتكررة.', def_en: 'A unit controlling information flow inside a recurrent network.' }
        ],
        cards: [
          { q_ar: 'لماذا تعجز الشبكة الأمامية عن الجُمل؟', q_en: 'Why do feedforward networks fail on sentences?', a_ar: 'لأنها تعالج كل مدخل مستقلاً بلا ذاكرة، ومعنى الجملة في ترتيب كلماتها.', a_en: 'They process each input independently with no memory, while sentence meaning lies in word order.' },
          { q_ar: 'ما سبب ضعف ذاكرة الشبكة المتكررة البسيطة؟', q_en: 'Why is simple RNN memory weak?', a_ar: 'تلاشي التدرّج: الإشارة تُضرب في كل خطوة فتضمحل بعد عشرات الخطوات.', a_en: 'Vanishing gradients: the signal multiplies each step and decays after dozens of steps.' },
          { q_ar: 'ما وظيفة البوابات؟', q_en: 'What do gates do?', a_ar: 'تتعلّم ما الذي يُحتفظ به وما الذي يُنسى وما الذي يُخرَج، فتصير الذاكرة نافعة.', a_en: 'They learn what to keep, forget and emit, making the memory useful.' },
          { q_ar: 'ما القيد البنيوي في الشبكات المتكررة؟', q_en: 'What is the structural limit of recurrent networks?', a_ar: 'المعالجة متسلسلة فلا يمكن التوازي، فيبطؤ التدريب على النصوص الطويلة.', a_en: 'Processing is sequential so it cannot parallelise, slowing training on long texts.' }
        ]
      },
      {
        title_ar: 'الانتباه والمحوّلات والتضمين',
        title_en: 'Attention, Transformers and Embeddings',
        lead_ar: 'الانتباه يتيح لكل كلمة أن تنظر لكل الكلمات دفعة واحدة، والتضمين يحوّل المعنى إلى موضع في فضاء — وعليهما تقوم كل النماذج اللغوية الحديثة.',
        lead_en: 'Attention lets every word look at every other word at once, and embeddings turn meaning into a position in space, and all modern language models rest on both.',
        body_ar: [
          'التضمين هو تمثيل الكلمة بمتجه أرقام يحمل معناها. وقبله كانت الكلمات تُرمَّز بأرقام اعتباطية أو متجهات طويلة بصفر وواحد، فيكون «ملك» و«ملكة» بعيدين تماماً كبُعد «ملك» و«طاولة» — لا علاقة بين التمثيل والمعنى.',
          'والتضمين يُتعلَّم من السياق: الكلمات التي ترد في سياقات متشابهة تحصل على متجهات متقاربة. فيصير القرب في الفضاء قرباً في المعنى. والنتيجة المدهشة أن العلاقات الدلالية تصير عمليات حسابية: متجه «ملك» ناقص «رجل» زائد «امرأة» يقع قرب «ملكة».',
          'وهذا التمثيل هو ما يجعل النموذج «يفهم» بمعنى محدود: لا فهم واعياً، وإنما موضع في فضاء يعكس علاقات الاستخدام. ومنه تأتي قدرات كالبحث الدلالي: تبحث عن «سيارة» فيجد نصوصاً عن «مركبة» لأن متجهيهما متقاربان.',
          'والانتباه آلية تجيب سؤالاً: عند معالجة هذي الكلمة، أي الكلمات الأخرى في الجملة يجب أن أنظر إليها وبأي قدر؟ ففي «الكتاب الذي اشتريته أمس كان ممتعاً»، يحتاج فهم «كان ممتعاً» النظر إلى «الكتاب» البعيد لا إلى «أمس» القريب. والانتباه يتعلّم هذي الأوزان بنفسه.',
          'وميزته الحاسمة على المتكررة أنه لا يمرّ بالتسلسل خطوة خطوة: كل كلمة تصل لكل كلمة مباشرة بخطوة واحدة مهما بعدت. فينحلّ مشكل الذاكرة الطويلة، ويصير الحساب قابلاً للتوازي فيتسارع التدريب هائلاً — وهذان السببان هما ما جعلا النماذج الضخمة ممكنة.',
          'والمحوّل بنية تقوم على الانتباه بالكامل، وثمنها أن كلفة الانتباه ترتفع بمربع طول النص: مضاعفة الطول تضاعف الكلفة أربع مرات. ومن هنا جاء مفهوم نافذة السياق: الحد الأقصى لما يستطيع النموذج النظر إليه دفعة واحدة، وهو قيد اقتصادي وحسابي لا مجرد رقم في المواصفات.'
        ],
        body_en: [
          'An embedding represents a word as a vector of numbers carrying its meaning. Before it, words were coded with arbitrary numbers or long zero-one vectors, so king and queen were as distant as king and table, with no relation between representation and meaning.',
          'Embeddings are learned from context: words appearing in similar contexts receive nearby vectors, so closeness in space becomes closeness in meaning. The striking result is that semantic relations become arithmetic: the vector for king minus man plus woman lands near queen.',
          'This representation is what lets a model understand in a limited sense: not conscious understanding but a position in space reflecting usage relations. From it come abilities such as semantic search: you search for car and it finds texts about vehicles because their vectors are close.',
          'Attention is a mechanism answering one question: while processing this word, which other words in the sentence should I look at and how much? In "the book I bought yesterday was enjoyable", understanding "was enjoyable" requires looking at the distant "book" rather than the nearby "yesterday". Attention learns those weights itself.',
          'Its decisive advantage over recurrence is not walking the sequence step by step: every word reaches every other directly in one step however far. The long memory problem dissolves and computation becomes parallelisable so training accelerates enormously, and those two reasons are what made huge models possible.',
          'A transformer is an architecture built entirely on attention, at the price of attention cost rising with the square of text length: doubling the length quadruples the cost. Hence the context window concept: the maximum a model can look at in one pass, an economic and computational constraint rather than merely a specification number.'
        ],
        table: {
          head_ar: ['المفهوم', 'ما يحله', 'ثمنه'],
          head_en: ['Concept', 'What it solves', 'Its price'],
          rows: [
            ['التضمين', 'تمثيل المعنى بموضع في فضاء', 'يحتاج تدريباً على نصوص ضخمة'],
            ['الانتباه', 'ربط بعيد مباشر بخطوة واحدة', 'كلفة بمربع طول النص'],
            ['التوازي', 'تسريع التدريب هائلاً', 'حاجة لعتاد متوازٍ قوي'],
            ['نافذة السياق', 'حد ما يُنظر إليه دفعة واحدة', 'قيد على طول المدخل']
          ]
        },
        keyPoints_ar: [
          'التضمين يجعل القرب في الفضاء قرباً في المعنى، فتصير العلاقات حسابية.',
          'الفهم هنا محدود: موضع يعكس علاقات الاستخدام لا وعياً بالمعنى.',
          'الانتباه يتعلّم أي الكلمات ينظر إليها وبأي وزن عند معالجة كل كلمة.',
          'كل كلمة تصل لكل كلمة بخطوة واحدة، فينحلّ مشكل الذاكرة الطويلة.',
          'قابلية التوازي هي ما سرّعت التدريب وجعلت النماذج الضخمة ممكنة.',
          'كلفة الانتباه بمربع الطول، ومنها جاء قيد نافذة السياق.'
        ],
        keyPoints_en: [
          'Embeddings make closeness in space closeness in meaning, turning relations into arithmetic.',
          'Understanding here is limited: a position reflecting usage relations rather than awareness of meaning.',
          'Attention learns which words to look at and how much while processing each word.',
          'Every word reaches every other in one step, dissolving the long memory problem.',
          'Parallelisability is what accelerated training and made huge models possible.',
          'Attention cost rises with the square of length, which is where the context window limit comes from.'
        ],
        analogy_ar: 'تخيّل قاعة اجتماع فيها عشرون شخصاً. الشبكة المتكررة أشبه بهمس متسلسل: يهمس الأول للثاني والثاني للثالث، فما يصل للعشرين مشوّه وناقص. والانتباه أن يرى كل شخص وجوه الجميع دفعة واحدة ويقرر لمن يصغي. أما التضمين فأشبه بترتيب الحضور في القاعة بحسب اهتماماتهم: من يشبهك في الاهتمام يجلس قربك، فيصير موضع الجلوس نفسه معلومة.',
        analogy_en: 'Picture a meeting room of twenty people. A recurrent network is like a whispered chain: the first whispers to the second, the second to the third, so what reaches the twentieth is distorted and incomplete. Attention is everyone seeing every face at once and deciding whom to listen to. An embedding is seating attendees by their interests: whoever shares your interests sits near you, so the seat itself becomes information.',
        terms: [
          { term: 'Embedding', def_ar: 'تمثيل الكلمة بمتجه يعكس معناها من سياقات استخدامها.', def_en: 'Representing a word as a vector reflecting its meaning from usage contexts.' },
          { term: 'Attention', def_ar: 'آلية تحدد أي أجزاء المدخل يُنظر إليها وبأي وزن.', def_en: 'A mechanism deciding which input parts to look at and how much.' },
          { term: 'Transformer', def_ar: 'بنية تقوم على الانتباه وتعالج التسلسل متوازياً.', def_en: 'An architecture built on attention processing sequences in parallel.' },
          { term: 'Context Window', def_ar: 'أقصى نص يستطيع النموذج النظر إليه دفعة واحدة.', def_en: 'The maximum text a model can consider in one pass.' }
        ],
        cards: [
          { q_ar: 'ما الذي يجعل التضمين أفضل من ترقيم الكلمات؟', q_en: 'Why is an embedding better than numbering words?', a_ar: 'لأن القرب في الفضاء يعكس قرب المعنى، فتصير العلاقات الدلالية عمليات حسابية.', a_en: 'Closeness in space reflects closeness in meaning, turning semantic relations into arithmetic.' },
          { q_ar: 'ما السؤال الذي يجيب عنه الانتباه؟', q_en: 'What question does attention answer?', a_ar: 'عند معالجة هذي الكلمة، أي الكلمات الأخرى أنظر إليها وبأي قدر.', a_en: 'While processing this word, which other words to look at and how much.' },
          { q_ar: 'لماذا سرّع المحوّل التدريب مقارنة بالمتكررة؟', q_en: 'Why did transformers speed training over recurrence?', a_ar: 'لأنه يعالج التسلسل دفعة واحدة قابلة للتوازي بدل خطوة بعد خطوة.', a_en: 'It processes the sequence at once in a parallelisable way instead of step after step.' },
          { q_ar: 'لماذا لنافذة السياق حد؟', q_en: 'Why does the context window have a limit?', a_ar: 'لأن كلفة الانتباه ترتفع بمربع طول النص، فمضاعفة الطول تضاعف الكلفة أربع مرات.', a_en: 'Attention cost rises with the square of length, so doubling the text quadruples the cost.' }
        ]
      }
    ]
  }
};
