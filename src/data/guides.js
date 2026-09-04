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
    ]
  }
};
