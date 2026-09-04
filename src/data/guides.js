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
    ]
  }
};
