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
    ]
  }
};
