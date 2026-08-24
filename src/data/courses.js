export const trackLessons = {
  Programming: {
    0: [
      { t_ar: 'الدرس 1: صناديق التخزين (المتغيرات)', t_en: 'Lesson 1: Storage Boxes (Variables)', d_ar: 'لماذا نحتاج "أسماء" للمساحات في الذاكرة؟ وكيف تُستخدم لحفظ البيانات المؤقتة وكيف يقرأها المعالج.', d_en: 'Why do we need "names" for memory spaces? How temporary data is stored and read by the CPU.', videoUrl: '', duration: '10:15' },
      { t_ar: 'الدرس 2: هوية البيانات (أنواعها)', t_en: 'Lesson 2: Data Identity (Types)', d_ar: 'الفرق بين الرقم (Integer) والنص (String) وكيف يراهما الحاسوب داخل خلايا الذاكرة بنظام الثنائي (Binary).', d_en: 'The difference between numbers (Integer) and text (String) and how the computer represents them in binary.', videoUrl: '', duration: '08:45' },
      { t_ar: 'الدرس 3: قواعد التسمية (Naming Conventions)', t_en: 'Lesson 3: Naming Conventions', d_ar: 'طريقة اختيار اسم برمجية ذكي ومنسق (مثل camelCase أو snake_case) لا يسبب أخطاء أثناء التشغيل ويجعل الكود مقروءاً.', d_en: 'How to choose smart, clean variable names (like camelCase or snake_case) that prevent errors and keep code readable.', videoUrl: '', duration: '06:30' },
      { t_ar: 'الدرس 4: الحساب الآلي (+, -, *, /)', t_en: 'Lesson 4: Automated Arithmetic (+, -, *, /)', d_ar: 'شرح كيفية قيام وحدة المعالجة المركزية (ALU) بالعمليات الحسابية الأساسية وترتيب الأولويات الرياضية (BODMAS).', d_en: 'How the CPU (ALU) performs basic mathematical operations and handles operator precedence (BODMAS).', videoUrl: '', duration: '07:20' },
      { t_ar: 'الدرس 5: ميزان المقارنة (==, !=, >, <)', t_en: 'Lesson 5: Comparison Scales (==, !=, >, <)', d_ar: 'استخدام علامات المقارنة لاتخاذ قرارات برمجية والحصول على قيم منطقية (True/False).', d_en: 'Using comparison operators to make branching decisions and generate boolean values (True/False).', videoUrl: '', duration: '09:10' },
      { t_ar: 'الدرس 6: المنطق المركب (AND, OR, NOT)', t_en: 'Lesson 6: Compound Logic (AND, OR, NOT)', d_ar: 'كيف نربط شرطين أو أكثر معاً لاتخاذ قرارات معقدة، مثل: "إذا كان المستخدم مسجلاً ولديه رصيد كافٍ".', d_en: 'How to combine multiple conditions for complex logic, e.g., "If the user is logged in AND has sufficient balance".', videoUrl: '', duration: '11:05' },
      { t_ar: 'الدرس 7: صوت البرنامج (print)', t_en: 'Lesson 7: Program Voice (print)', d_ar: 'استخدام دالة الطباعة (print) لإخراج المخرجات وعرض النتائج والنصوص على الشاشة للمستخدم.', d_en: 'Using the output print function to display results, values, and status messages on the terminal screen.', videoUrl: '', duration: '05:40' },
      { t_ar: 'الدرس 8: سماع المستخدم (Input)', t_en: 'Lesson 8: Listening to the User (Input)', d_ar: 'كيفية جعل البرنامج تفاعلياً عن طريق استقبال مدخلات المستخدم وقراءتها من لوحة المفاتيح وتخزينها في متغير.', d_en: 'How to make programs interactive by receiving user keyboard inputs and storing them in variables.', videoUrl: '', duration: '08:15' },
      { t_ar: 'الدرس 9: تحويل البيانات (Type Casting)', t_en: 'Lesson 9: Type Casting', d_ar: 'كيف نقوم بتحويل مدخلات المستخدم النصية (String) إلى أرقام صحيحة (Integer) أو عشرية للقيام بالعمليات الحسابية.', d_en: 'How to safely convert text inputs (Strings) into numbers (Integers or Floats) to perform math.', videoUrl: '', duration: '07:50' },
      { t_ar: 'الدرس 10: لغة الآلة والفواصل والرموز', t_en: 'Lesson 10: Syntax and Symbols', d_ar: 'أهمية الفواصل والرموز الخاصة والأقواس في إخبار المفسّر البرمجي بنهاية كل أمر أو بداية هيكل جديد.', d_en: 'The critical role of semicolons, parenthesis, and special characters in telling the interpreter where statements end.', videoUrl: '', duration: '06:10' },
      { t_ar: 'الدرس 11: ترتيب الأفكار (التسلسل)', t_en: 'Lesson 11: Flow and Sequential Order', d_ar: 'فهم كيف يقوم الكمبيوتر بقراءة وتنفيذ السطور البرمجية بشكل تسلسلي من الأعلى إلى الأسفل خطوة بخطوة.', d_en: 'Understanding how computers read and execute code lines sequentially from top to bottom, step-by-step.', videoUrl: '', duration: '07:30' },
      { t_ar: 'الدرس 12: المسافات والبادئات (Indentation)', t_en: 'Lesson 12: Code Indentation', d_ar: 'أهمية المسافات البادئة في لغات البرمجة (مثل Python) لتحديد نطاق الكود والكتل الشرطية والتكرارية وتنسيق الكود.', d_en: 'The absolute importance of indentation in defining block scopes (e.g. in Python) and keeping code readable.', videoUrl: '', duration: '09:00' },
      { t_ar: 'الدرس 13: رسائل للمبرمجين (التعليقات)', t_en: 'Lesson 13: Messages for Developers (Comments)', d_ar: 'كيف تكتب ملاحظات وتوضيحات برمجية يتجاهلها الحاسوب تماماً أثناء التشغيل ولكنها تساعد زملائك على الفهم.', d_en: 'How to write explanatory notes ignored by the computer but extremely helpful for developers reading the code.', videoUrl: '', duration: '05:20' },
      { t_ar: 'الدرس 14: الكود النظيف والتوثيق المتميز', t_en: 'Lesson 14: Clean Code and Documentation', d_ar: 'أفضل الممارسات لكتابة تعليقات مفيدة ووصفية والابتعاد عن التعليقات المزعجة أو البديهية.', d_en: 'Best practices for writing self-documenting code and clear comments without cluttering your codebase.', videoUrl: '', duration: '06:40' },
      { t_ar: 'الدرس 15: تعطيل الأكواد لأغراض الاختبار', t_en: 'Lesson 15: Commenting Out Code', d_ar: 'طريقة استخدام التعليقات كأداة قوية لتعطيل كود معين مؤقتاً لتجربة جزء آخر أو اكتشاف الأخطاء وتسهيل الصيانة.', d_en: 'Using comments to temporarily disable code blocks for testing alternative solutions and isolating bugs.', videoUrl: '', duration: '04:50' },
      { t_ar: 'الدرس 16: قوائم التسوق (Lists)', t_en: 'Lesson 16: Introduction to Lists', d_ar: 'كيف نجمع عناصر وبيانات متعددة في متغير واحد منظم بدلاً من تعريف عشرات المتغيرات المستقلة.', d_en: 'How to gather multiple elements and data points inside a single structured collection variable instead of declaring dozens of separate variables.', videoUrl: '', duration: '08:30' },
      { t_ar: 'الدرس 17: فهرس القائمة (Indexing)', t_en: 'Lesson 17: Indexing from Zero (0)', d_ar: 'لماذا يبدأ العد في لغات البرمجة من الصفر (0) وكيف نصل لأي عنصر من عناصر المصفوفة باستخدام موقعه الفهرسي.', d_en: 'Why computer science counting starts at zero, and how to access specific elements in a list using index notation.', videoUrl: '', duration: '07:15' },
      { t_ar: 'الدرس 18: إدارة القائمة (الإضافة والحذف)', t_en: 'Lesson 18: List Manipulation', d_ar: 'طريقة تعديل محتوى القائمة برمجياً مثل إضافة عناصر جديدة (Append/Insert) أو مسح عناصر موجودة (Remove/Pop).', d_en: 'How to dynamically edit a list in code, such as appending/inserting new values, or removing/popping existing items.', videoUrl: '', duration: '09:40' },
      { t_ar: 'الدرس 19: أنواع الأخطاء (Syntax vs Logic)', t_en: 'Lesson 19: Syntax Errors vs. Logic Errors', d_ar: 'الفرق بين الأخطاء الإملائية والتركيبية التي توقف البرنامج تماماً، وبين الأخطاء المنطقية التي تعطي نتائج غير متوقعة.', d_en: 'The difference between grammatical coding mistakes (Syntax Errors) that halt the app and logical errors that output wrong results.', videoUrl: '', duration: '08:50' },
      { t_ar: 'الدرس 20: قراءة وفك شفرة رسائل الخطأ', t_en: 'Lesson 20: Decoding Error Messages', d_ar: 'تعلم كيف تقرأ وتفهم "اللون الأحمر" وتتتبع سطر الخطأ (Traceback) لمعرفة أين تكمن المشكلة بالضبط وكيفية البحث عنها.', d_en: 'Learn how to read stack traces and error messages, understand warning highlights, and find exact line numbers where bugs occur.', videoUrl: '', duration: '09:20' },
      { t_ar: 'الدرس 21: استراتيجية حل المشكلات (Debugging)', t_en: 'Lesson 21: Debugging Strategies', d_ar: 'خطوات عملية وتفكير علمي لحل أي مشكلة برمجية: تقسيم الكود، فحص قيم المتغيرات بالتفصيل، والبحث في المجتمعات البرمجية.', d_en: 'Practical steps for debugging: isolating code sections, inspecting variables print statements, and searching developer communities.', videoUrl: '', duration: '10:05' }
    ]
  }
};

export const trackDocuments = {
  Programming: {
    0: [
      {
        t_ar: 'صناديق التخزين (المتغيرات)',
        t_en: 'Storage Boxes (Variables)',
        details_ar: 'المتغير هو مكان محجوز في ذاكرة الوصول العشوائي (RAM) نُخصصه لتخزين قيمة معينة تحت اسم فريد يمكننا الرجوع إليه لاحقاً. تخيله كصندوق كرتوني عليه ملصق، داخله المعلومة. عندما تكتب (x = 5) فأنت تقول للحاسوب: "احجز صندوقاً اسمه x واحفظ فيه الرقم 5". يمكنك تغيير محتواه في أي وقت.',
        details_en: 'A variable is a reserved slot in RAM holding a value under a unique name. Think of it as a labeled cardboard box. When you write (x = 5), you are telling the computer: "Reserve a box called x and store the value 5 inside it." You can update its contents anytime.',
        visual: 'memory',
        code: 'x = 5\nname = "أحمد"\nis_active = True'
      },
      {
        t_ar: 'هوية البيانات (أنواع البيانات)',
        t_en: 'Data Identity (Data Types)',
        details_ar: 'ليست كل البيانات متشابهة! الحاسوب يتعامل مع كل نوع بشكل مختلف. الأرقام الصحيحة (int) للحسابات الرياضية، النصوص (str) للكلمات، الأرقام العشرية (float) للكسور، والقيم المنطقية (bool) للأجوبة الثنائية صح/خطأ.',
        details_en: 'Not all data is the same! The computer treats each type differently. Integers (int) for math, Strings (str) for words, Floats for decimals, and Booleans (bool) for yes/no logic.',
        visual: 'types',
        code: 'age = 25         # int\nprice = 9.99     # float\nname = "مسار"    # str\nactive = True    # bool'
      },
      {
        t_ar: 'قواعد التسمية الذكية',
        t_en: 'Smart Naming Conventions',
        details_ar: 'أسماء المتغيرات يجب أن تبدأ بحرف أو شرطة سفلية، لا تحتوي على مسافات أو رموز خاصة، ولا تبدأ برقم. يُفضّل استخدام snake_case للمتغيرات أو camelCase للدوال. الاسم الجيد يوضح الغرض.',
        details_en: 'Variable names must start with a letter or underscore, contain no spaces or special characters, and not begin with a number. Use snake_case for variables or camelCase for functions. Good names reveal the purpose.',
        visual: 'naming',
        code: '# ✅ أسماء صحيحة\nuser_age = 25\ntotal_score = 100\n\n# ❌ أسماء خاطئة\n2score = 10\nuser name = "أحمد"'
      },
      {
        t_ar: 'الحساب الآلي وترتيب الأولويات',
        t_en: 'Arithmetic & Operator Precedence',
        details_ar: 'الحاسوب يطبق قواعد رياضية صارمة في تنفيذ العمليات. الأقواس أولاً، ثم الضرب والقسمة، ثم الجمع والطرح. يعني: 2 + 3 * 4 = 14 وليس 20. دائماً استخدم الأقواس لتوضيح ما تريد.',
        details_en: 'The computer applies strict mathematical rules. Parentheses first, then multiplication/division, then addition/subtraction. So: 2 + 3 * 4 = 14 not 20. Always use parentheses to clarify intent.',
        visual: 'arithmetic',
        code: 'result1 = 2 + 3 * 4   # = 14\nresult2 = (2 + 3) * 4 # = 20\nmod = 10 % 3           # = 1 (الباقي)'
      },
      {
        t_ar: 'ميزان المقارنة واتخاذ القرارات',
        t_en: 'Comparison Operators & Decisions',
        details_ar: 'مقارنة قيمتين دائماً تعود بنتيجة إما True (صحيح) أو False (خطأ). هذه النتيجة هي ما يستخدمه الحاسوب لاتخاذ قرار: "هل أُكمل هذا الكود أم أتخطاه؟"',
        details_en: 'Comparing two values always yields True or False. This result is what the computer uses to decide: "Should I execute this block or skip it?"',
        visual: 'comparison',
        code: 'x = 10\nprint(x == 10)  # True\nprint(x > 20)   # False\nprint(x != 5)   # True'
      },
      {
        t_ar: 'المنطق المركب (AND, OR, NOT)',
        t_en: 'Compound Logic (AND, OR, NOT)',
        details_ar: 'نستخدم AND عندما يجب أن يكون كلا الشرطين صحيحاً. OR يكفي أن يكون أحدهما صحيحاً. NOT يعكس النتيجة. مثال: "منح الوصول إذا كان المستخدم مسجلاً ولديه رصيد" يستخدم AND.',
        details_en: 'Use AND when both conditions must be true. OR when at least one must be true. NOT inverts the result. Example: "Grant access if user is logged in AND has balance" uses AND.',
        visual: 'logic',
        code: 'logged_in = True\nhas_balance = False\n\n# AND: كلاهما True؟\nprint(logged_in and has_balance) # False\n\n# OR: أحدهما True؟\nprint(logged_in or has_balance)  # True'
      },
      {
        t_ar: 'صوت البرنامج (أمر الطباعة print)',
        t_en: 'Program Voice (print command)',
        details_ar: 'دالة print() هي الطريقة الوحيدة لرؤية ما يحدث داخل برنامجك. تستخدمها لعرض النتائج، مراقبة قيم المتغيرات، وإخبار المستخدم بحالة البرنامج.',
        details_en: 'The print() function is your window into the program. Use it to display results, monitor variable values, and communicate program status to users.',
        visual: 'console_out',
        code: 'name = "مسار"\nprint("مرحباً،", name)\nprint("عدد الدروس:", 21)\nprint(10 + 5)  # يطبع 15'
      },
      {
        t_ar: 'سماع المستخدم (استقبال مدخلات input)',
        t_en: 'Listening to User (input reception)',
        details_ar: 'دالة input() تجعل برنامجك يتوقف وينتظر. المستخدم يكتب شيئاً ويضغط Enter، والبرنامج يأخذ ما كتبه ويُخزنه في متغير. هذا ما يجعل برامجك تفاعلية وذكية.',
        details_en: 'The input() function pauses your program and waits. The user types something and presses Enter, and the program stores it in a variable. This is what makes programs interactive.',
        visual: 'input_flow',
        code: 'name = input("ما اسمك؟ ")\nprint("مرحباً،", name)\n\nage = input("كم عمرك؟ ")\nprint("أنت في عمر", age)'
      },
      {
        t_ar: 'تحويل البيانات (Type Casting)',
        t_en: 'Type Casting',
        details_ar: 'كل ما يُدخله المستخدم عبر input() يصل كنص (String)، حتى لو كتب رقماً! إذا أردت إجراء عمليات حسابية، يجب تحويله أولاً إلى رقم باستخدام int() أو float().',
        details_en: 'Everything that comes from input() arrives as a String, even if the user typed a number! To do math, you must convert it using int() or float() first.',
        visual: 'casting',
        code: 'age_str = input("أدخل عمرك: ")\n# age_str = "25"  ← نص!\n\nage_num = int(age_str)\n# age_num = 25    ← رقم!\n\nprint("بعد 10 سنوات:", age_num + 10)'
      },
      {
        t_ar: 'لغة الآلة وأهمية الرموز (Syntax)',
        t_en: 'Machine Language & Syntax Rules',
        details_ar: 'المترجم البرمجي حساس جداً للكتابة. نسيان قوس، أو إضافة حرف زائد، أو مسافة في مكان خاطئ يُوقف البرنامج تماماً. اقرأ رسائل الخطأ بتأنٍّ لأنها تُشير لمكان المشكلة.',
        details_en: 'The compiler is extremely sensitive to spelling. A forgotten bracket, extra character, or wrong space halts the program. Read error messages carefully—they point directly to the problem.',
        visual: 'syntax',
        code: '# ✅ صحيح\nprint("مرحباً")\n\n# ❌ أخطاء شائعة\nprintt("مرحباً")  # خطأ إملائي\nprint("مرحباً"    # قوس ناقص'
      },
      {
        t_ar: 'ترتيب الأفكار والتنفيذ التسلسلي',
        t_en: 'Sequential Flow & Execution Order',
        details_ar: 'الكمبيوتر يقرأ الكود من أعلى الملف إلى أسفله، سطراً بعد سطر، بالترتيب. لا يمكنك استخدام متغير قبل تعريفه، ولا استدعاء دالة قبل كتابتها.',
        details_en: 'The computer reads code from the top of the file to the bottom, line by line, in order. You cannot use a variable before defining it, or call a function before writing it.',
        visual: 'sequential',
        code: '# السطر 1 → ينفذ أولاً\nx = 10\n# السطر 2 → ينفذ ثانياً\ny = x + 5\n# السطر 3 → ينفذ ثالثاً\nprint(y)  # 15'
      },
      {
        t_ar: 'المسافات والبادئات (Indentation)',
        t_en: 'Spaces & Code Indentation',
        details_ar: 'في بعض اللغات مثل Python، المسافات البادئة ليست للزينة، بل هي جزء من قواعد اللغة! إذا كان الكود يتبع شرطاً (if) أو حلقة، يجب أن يكون مسافةً بادئةً بمقدار 4 مسافات أو Tab.',
        details_en: 'In languages like Python, indentation is not decoration—it is part of the language rules! Code that belongs inside an if-block or loop must be indented by exactly 4 spaces or one Tab.',
        visual: 'indentation',
        code: 'if True:\n    print("هذا داخل الشرط")  # مسافة بادئة\n    x = 10                    # مسافة بادئة\nprint("هذا خارج الشرط")      # بدون مسافة'
      },
      {
        t_ar: 'رسائل للمبرمجين (التعليقات Comments)',
        t_en: 'Developer Notes (Comments)',
        details_ar: 'التعليق هو سطر تكتبه لنفسك أو لزملائك لشرح ما يفعله الكود. يبدأ بعلامة (#) في Python، ويتجاهله المترجم تماماً أثناء التشغيل.',
        details_en: 'A comment is a line you write for yourself or your team to explain what the code does. It starts with (#) in Python and is completely ignored by the interpreter during execution.',
        visual: 'comment',
        code: '# هذا تعليق - لا ينفذه الحاسوب\nx = 5  # هذا متغير يحتوي 5\n\n# الكود أدناه يجمع رقمين\nresult = x + 10'
      },
      {
        t_ar: 'الكود النظيف والتوثيق المتميز',
        t_en: 'Clean Code & Quality Documentation',
        details_ar: 'الفرق بين المبرمج المبتدئ والمحترف ليس في أن كوده يعمل، بل في أن كوده مقروء ومفهوم. أسماء واضحة، تعليقات في المكان المناسب، وتنظيم منطقي للكود.',
        details_en: 'The difference between a beginner and a professional is not that code works, but that it is readable and clear. Clear names, comments in the right places, and logical organization.',
        visual: 'cleancode',
        code: '# ❌ كود رديء\ndef f(a, b):\n    return a*b+a\n\n# ✅ كود نظيف\ndef calculate_total(price, quantity):\n    # السعر الكلي = السعر × الكمية\n    return price * quantity'
      },
      {
        t_ar: 'تعطيل الأكواد لأغراض الاختبار',
        t_en: 'Commenting Out Code for Testing',
        details_ar: 'عند البحث عن خطأ، يمكنك إضافة # في بداية أي سطر لتعطيله مؤقتاً دون حذفه. هذا يساعدك على عزل المشكلة واختبار أجزاء الكود بشكل منفصل.',
        details_en: 'When debugging, you can add # at the start of any line to disable it temporarily without deleting. This helps isolate problems and test code sections independently.',
        visual: 'debug_comment',
        code: 'x = 10\n# y = x / 0  ← معطل مؤقتاً للاختبار\ny = x + 5\nprint(y)'
      },
      {
        t_ar: 'قوائم التسوق (المصفوفات Lists)',
        t_en: 'Shopping Lists (Arrays/Lists)',
        details_ar: 'القائمة (List) تُمثَّل بأقواس مربعة [] وتحتوي على عناصر مفصولة بفواصل. يمكنها تخزين أي نوع بيانات: أرقام، نصوص، أو حتى قوائم أخرى داخلها.',
        details_en: 'A list is represented with square brackets [] and contains comma-separated elements. It can store any data type: numbers, strings, or even other lists.',
        visual: 'list_intro',
        code: 'fruits = ["تفاح", "برتقال", "موز"]\nscores = [95, 87, 92, 78]\nprint(fruits)\nprint(len(fruits))  # عدد العناصر = 3'
      },
      {
        t_ar: 'فهرس القائمة والعد من الصفر (0)',
        t_en: 'List Index: Counting from Zero',
        details_ar: 'كل عنصر في القائمة له رقم تعريفي يُسمى الفهرس (Index). الفهارس تبدأ من 0 وليس من 1! للوصول لعنصر معين، اكتب اسم القائمة متبوعاً برقمه بين قوسين مربعين.',
        details_en: 'Each element in a list has an ID called an Index. Indexes start from 0 not 1! To access a specific element, write the list name followed by its index in square brackets.',
        visual: 'list_index',
        code: 'fruits = ["تفاح", "برتقال", "موز"]\n#           [0]      [1]      [2]\n\nprint(fruits[0])  # تفاح\nprint(fruits[2])  # موز\nprint(fruits[-1]) # موز (من النهاية)'
      },
      {
        t_ar: 'إدارة القائمة (إضافة وحذف)',
        t_en: 'List Management (add & remove)',
        details_ar: 'القوائم ديناميكية وقابلة للتعديل في أي وقت. استخدم .append() لإضافة عنصر في النهاية، و.insert() لإضافته في موضع محدد، و.remove() لحذف عنصر بقيمته.',
        details_en: 'Lists are dynamic and editable anytime. Use .append() to add at the end, .insert() at a specific position, and .remove() to delete an element by its value.',
        visual: 'list_ops',
        code: 'fruits = ["تفاح", "موز"]\nfruits.append("مانجو")   # أضف للنهاية\nprint(fruits)  # [تفاح, موز, مانجو]\n\nfruits.remove("موز")     # احذف موز\nprint(fruits)  # [تفاح, مانجو]'
      },
      {
        t_ar: 'أنواع الأخطاء (Syntax vs Logic)',
        t_en: 'Bug Types: Syntax vs Logic',
        details_ar: 'خطأ البناء (Syntax Error) يمنع البرنامج من التشغيل ويظهر فوراً مع رقم السطر. أما الخطأ المنطقي (Logic Error) فالبرنامج يعمل لكن يعطي إجابة خاطئة وهو الأصعب اكتشافاً.',
        details_en: 'A Syntax Error prevents the program from running and appears immediately with a line number. A Logic Error lets the program run but gives wrong answers—it is the hardest to find.',
        visual: 'error_types',
        code: '# Syntax Error - البرنامج لا يعمل\nprint("مرحباً"   # قوس ناقص\n\n# Logic Error - البرنامج يعمل لكن الجواب غلط\ndef area(w, h):\n    return w + h  # خطأ! يجب w * h'
      },
      {
        t_ar: 'قراءة وفك شفرة رسائل الخطأ',
        t_en: 'Reading Red Error Messages',
        details_ar: 'رسائل الخطأ ليست عدوك، هي مساعدك! القسم الأول يخبرك باسم ملف الكود، القسم الثاني يُشير لرقم السطر المشكل، والقسم الأخير (بعد النقطتين) يشرح نوع الخطأ.',
        details_en: 'Error messages are not your enemy, they are your guide! The first part names the code file, the second indicates the problematic line number, and the last part explains the error type.',
        visual: 'traceback',
        code: 'Traceback (most recent call last):\n  File "main.py", line 3, in <module>\n    print(x)\nNameError: name "x" is not defined'
      },
      {
        t_ar: 'استراتيجية حل المشكلات (Debugging)',
        t_en: 'Problem-Solving Strategy (Debugging)',
        details_ar: 'اتبع هذا الترتيب: 1) اقرأ رسالة الخطأ كاملة. 2) انتقل لرقم السطر. 3) أضف print() قبل السطر لرؤية قيم المتغيرات. 4) ابحث عن رسالة الخطأ في Google. 5) اطلب المساعدة من المجتمع.',
        details_en: 'Follow this order: 1) Read the full error message. 2) Go to the line number. 3) Add print() before the line to see variable values. 4) Search the error on Google. 5) Ask the community for help.',
        visual: 'debug_steps',
        code: '# خطوة 3: أضف print لمراقبة المتغيرات\ndef calculate(x, y):\n    print("x =", x, "y =", y)  # ← للتشخيص\n    result = x / y\n    return result'
      }
    ]
  }
};
