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
      { t_ar: 'الدرس 21: استراتيجية حل المشكلات (Debugging)', t_en: 'Lesson 21: Debugging Strategies', d_ar: 'خطوات عملية وتفكير علمي لحل أي مشكلة برمجية: تقسيم الكود، فحص قيم المتغيرات بالتفصيل، والبحث في المجتمعات البرمجية.', d_en: 'Practical steps for debugging: isolating code sections, inspecting variables print statements, and searching developer communities.', videoUrl: '', duration: '10:05' },
      { t_ar: 'الدرس 22: التكرار المعدود (حلقة for)', t_en: 'Lesson 22: Counted Repetition (for loop)', d_ar: 'كيف نكرر أمراً عدداً محدداً من المرات بدل نسخه يدوياً، وكيف تولّد range سلسلة الأرقام.', d_en: 'How to repeat a statement a fixed number of times instead of copying it, and how range generates the number sequence.', videoUrl: '', duration: '09:30', level: 4 },
      { t_ar: 'الدرس 23: التكرار بشرط (حلقة while)', t_en: 'Lesson 23: Conditional Repetition (while loop)', d_ar: 'متى نستخدم while بدل for، وكيف نضمن أن الشرط سينتهي حتى لا تدور الحلقة إلى ما لا نهاية.', d_en: 'When to use while instead of for, and how to guarantee the condition ends so the loop does not run forever.', videoUrl: '', duration: '10:20', level: 4 },
      { t_ar: 'الدرس 24: المرور على عناصر القائمة', t_en: 'Lesson 24: Iterating Over a List', d_ar: 'قراءة عناصر القائمة واحداً واحداً بلا فهارس يدوية، والحصول على الفهرس والقيمة معاً عند الحاجة.', d_en: 'Reading list elements one by one without manual indexes, and getting index and value together when needed.', videoUrl: '', duration: '08:15', level: 4 },
      { t_ar: 'الدرس 25: الخروج والتخطي (break و continue)', t_en: 'Lesson 25: break and continue', d_ar: 'إيقاف الحلقة فور تحقق هدفها بـbreak، وتخطي دورة واحدة فقط بـcontinue، والفرق العملي بينهما.', d_en: 'Stopping a loop as soon as its goal is met with break, skipping a single iteration with continue, and the practical difference.', videoUrl: '', duration: '07:45', level: 4 },
      { t_ar: 'الدرس 26: الحلقات المتداخلة', t_en: 'Lesson 26: Nested Loops', d_ar: 'حلقة داخل حلقة: كم مرة ينفَّذ الجسم الداخلي فعلاً، ولماذا يرتفع عدد الخطوات بسرعة.', d_en: 'A loop inside a loop: how many times the inner body actually runs, and why the step count grows fast.', videoUrl: '', duration: '09:00', level: 4 },
      { t_ar: 'الدرس 27: المصفوفات ثنائية الأبعاد', t_en: 'Lesson 27: Two-Dimensional Arrays', d_ar: 'تمثيل الجداول والشبكات بقائمة داخل قائمة، والوصول لخلية بصفها ثم عمودها.', d_en: 'Representing tables and grids as a list inside a list, and reaching a cell by its row then its column.', videoUrl: '', duration: '08:40', level: 4 },
      { t_ar: 'الدرس 28: الدوال — لماذا وكيف', t_en: 'Lesson 28: Functions - Why and How', d_ar: 'تجميع خطوات متكررة تحت اسم واحد يُستدعى وقت الحاجة، والفرق بين تعريف الدالة واستدعائها.', d_en: 'Grouping repeated steps under one name called when needed, and the difference between defining and calling.', videoUrl: '', duration: '10:05', level: 5 },
      { t_ar: 'الدرس 29: المعاملات والوسائط', t_en: 'Lesson 29: Parameters and Arguments', d_ar: 'تمرير قيم مختلفة للدالة في كل استدعاء، والقيمة الافتراضية التي تُستخدم عند غياب الوسيط.', d_en: 'Passing different values on each call, and the default value used when an argument is omitted.', videoUrl: '', duration: '09:25', level: 5 },
      { t_ar: 'الدرس 30: قيمة الإرجاع (return)', t_en: 'Lesson 30: Return Values', d_ar: 'الفرق الجوهري بين دالة تطبع نتيجتها ودالة ترجعها، ولماذا لا يمكن استخدام ناتج الطباعة في حساب لاحق.', d_en: 'The core difference between a function that prints and one that returns, and why a printed result cannot be reused.', videoUrl: '', duration: '10:40', level: 5 },
      { t_ar: 'الدرس 31: نطاق المتغيرات (Scope)', t_en: 'Lesson 31: Variable Scope', d_ar: 'لماذا لا يرى الكود الخارجي متغيراً عُرِّف داخل دالة، وكيف يختفي المتغير المحلي بانتهاء الاستدعاء.', d_en: 'Why outside code cannot see a variable defined inside a function, and how a local variable disappears when the call ends.', videoUrl: '', duration: '08:50', level: 5 },
      { t_ar: 'الدرس 32: العودية (Recursion)', t_en: 'Lesson 32: Recursion', d_ar: 'دالة تستدعي نفسها على مسألة أصغر، وحالة التوقف التي بدونها يستمر الاستدعاء حتى ينهار البرنامج.', d_en: 'A function calling itself on a smaller problem, and the base case without which calls continue until the program crashes.', videoUrl: '', duration: '11:15', level: 5 },
      { t_ar: 'الدرس 33: معالجة الأخطاء (try / except)', t_en: 'Lesson 33: Exception Handling (try/except)', d_ar: 'التقاط الخطأ المتوقَّع ومعالجته بدل توقف البرنامج، والتفريق بين أنواع الأخطاء في المعالجة.', d_en: 'Catching an expected error and handling it instead of crashing, and distinguishing error types while handling.', videoUrl: '', duration: '10:30', level: 5 },
      { t_ar: 'الدرس 34: الوحدات والاستيراد (import)', t_en: 'Lesson 34: Modules and Imports', d_ar: 'الاستفادة من دوال جاهزة كتبها غيرك، والفرق بين استيراد الوحدة كاملة واستيراد اسم واحد منها.', d_en: 'Using ready-made functions written by others, and the difference between importing a whole module and one name from it.', videoUrl: '', duration: '09:10', level: 5 }
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
      },
      {
        t_ar: 'التكرار المعدود (حلقة for)',
        t_en: 'Counted Repetition (for loop)',
        details_ar: 'حلقة for تكرر كتلة من الكود عدداً معروفاً من المرات. الدالة range(n) تولّد أرقاماً تبدأ من 0 وتنتهي قبل n، فـrange(3) تعطي 0 و1 و2 — ثلاث دورات لا أربع. المتغير بعد كلمة for يأخذ قيمة جديدة في كل دورة. وانتبه للمسافة البادئة: كل سطر مزاح للداخل ينتمي للحلقة، وأول سطر يعود لليسار يخرج منها.',
        details_en: 'A for loop repeats a block a known number of times. range(n) generates numbers from 0 up to but not including n, so range(3) yields 0, 1, 2 — three iterations, not four. The variable after for takes a new value each round. Watch the indentation: every indented line belongs to the loop, and the first line back at the left is outside it.',
        visual: 'loop_for',
        code: 'for i in range(3):\n    print("الدورة رقم", i)\n\n# الناتج:\n# الدورة رقم 0\n# الدورة رقم 1\n# الدورة رقم 2',
        level: 4
      },
      {
        t_ar: 'التكرار بشرط (حلقة while)',
        t_en: 'Conditional Repetition (while loop)',
        details_ar: 'حلقة while تكرر ما دام الشرط صحيحاً، وتُستخدم حين لا نعرف عدد الدورات مسبقاً. وخطرها الأشهر الحلقة اللانهائية: إذا لم يتغيّر المتغيّر الداخل في الشرط، بقي الشرط صحيحاً إلى الأبد. القاعدة العملية: تأكد أن شيئاً داخل الحلقة يقرّب الشرط من أن يصير خاطئاً.',
        details_en: 'A while loop repeats as long as its condition is true, and is used when the number of iterations is not known in advance. Its most common danger is the infinite loop: if the variable in the condition never changes, the condition stays true forever. Practical rule: make sure something inside the loop moves the condition toward false.',
        visual: 'loop_while',
        code: 'count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1   # بدونه تدور للأبد\nprint("انطلق!")\n\n# الناتج: 3 ثم 2 ثم 1 ثم انطلق!',
        level: 4
      },
      {
        t_ar: 'المرور على عناصر القائمة',
        t_en: 'Iterating Over a List',
        details_ar: 'بدل الوصول لكل عنصر بفهرسه يدوياً، تمرّ حلقة for على القائمة عنصراً عنصراً. وإذا احتجت الفهرس والقيمة معاً استخدم enumerate فتعطيك الاثنين في كل دورة. هذا الأسلوب أقصر وأقل عرضة لخطأ تجاوز حدود القائمة.',
        details_en: 'Instead of accessing each element by index manually, a for loop walks the list element by element. If you need index and value together, enumerate gives both each round. This style is shorter and less prone to going out of bounds.',
        visual: 'loop_list',
        code: 'fruits = ["تفاح", "موز", "مانجو"]\n\nfor fruit in fruits:\n    print(fruit)\n\nfor i, fruit in enumerate(fruits):\n    print(i, fruit)   # 0 تفاح · 1 موز · 2 مانجو',
        level: 4
      },
      {
        t_ar: 'الخروج والتخطي (break و continue)',
        t_en: 'break and continue',
        details_ar: 'الأمر break يوقف الحلقة كلها فوراً ويكمل البرنامج بعدها، ويُستخدم حين يتحقق الهدف فلا معنى لمواصلة البحث. أما continue فيتخطى بقية الدورة الحالية فقط وينتقل للدورة التالية. والخلط بينهما شائع: break يخرج، وcontinue يقفز.',
        details_en: 'break stops the entire loop immediately and continues after it, used when the goal is met and searching further is pointless. continue skips only the rest of the current iteration and moves to the next. Confusing them is common: break exits, continue jumps.',
        visual: 'loop_break',
        code: 'for n in [4, 7, 10, 13]:\n    if n == 10:\n        break\n    print(n)\n# يطبع 4 ثم 7 ويتوقف\n\nfor n in range(5):\n    if n % 2 == 0:\n        continue\n    print(n)\n# يطبع 1 ثم 3 فقط',
        level: 4
      },
      {
        t_ar: 'الحلقات المتداخلة',
        t_en: 'Nested Loops',
        details_ar: 'حلقة داخل حلقة: مع كل دورة للحلقة الخارجية تدور الداخلية دورتها كاملة. فلو دارت الخارجية ثلاث مرات والداخلية ثلاثاً، نُفِّذ الجسم الداخلي تسع مرات لا ستاً. ولهذا ترتفع كلفة الحلقات المتداخلة بسرعة كلما كبر حجم البيانات.',
        details_en: 'A loop inside a loop: for each pass of the outer loop, the inner loop runs its full course. If the outer runs three times and the inner three, the inner body executes nine times, not six. This is why nested loops get expensive quickly as data grows.',
        visual: 'loop_nested',
        code: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print(i * j, end=" ")\n    print()\n\n# الناتج:\n# 1 2 3\n# 2 4 6\n# 3 6 9',
        level: 4
      },
      {
        t_ar: 'المصفوفات ثنائية الأبعاد',
        t_en: 'Two-Dimensional Arrays',
        details_ar: 'الجدول أو الشبكة يُمثَّل بقائمة عناصرها قوائم: كل قائمة داخلية صف. وللوصول لخلية نكتب فهرس الصف أولاً ثم فهرس العمود. وكلا الفهرسين يبدأ من الصفر، فالخلية الأولى هي [0][0].',
        details_en: 'A table or grid is represented as a list whose elements are lists: each inner list is a row. To reach a cell, write the row index first, then the column index. Both indexes start at zero, so the first cell is [0][0].',
        visual: 'grid_2d',
        code: 'grid = [[1, 2, 3],\n        [4, 5, 6]]\n\nprint(grid[0][2])   # 3  (الصف الأول، العمود الثالث)\nprint(grid[1][0])   # 4  (الصف الثاني، العمود الأول)\nprint(len(grid))    # 2  (عدد الصفوف)',
        level: 4
      },
      {
        t_ar: 'الدوال — لماذا وكيف',
        t_en: 'Functions - Why and How',
        details_ar: 'الدالة تجمع خطوات متكررة تحت اسم واحد، فتكتبها مرة وتستدعيها متى شئت. وتعريف الدالة بكلمة def لا ينفّذ شيئاً بذاته، إنما يسجّل الخطوات فقط؛ والتنفيذ يحدث عند الاستدعاء بكتابة اسمها متبوعاً بقوسين. ونسيان القوسين يعني الإشارة للدالة لا تشغيلها.',
        details_en: 'A function groups repeated steps under one name: write once, call whenever needed. Defining with def does not execute anything by itself, it only records the steps; execution happens on the call, writing the name followed by parentheses. Forgetting the parentheses references the function instead of running it.',
        visual: 'func_def',
        code: 'def greet():\n    print("أهلاً بك في مسار")\n\ngreet()   # هنا ينفّذ فعلاً\ngreet()   # ومرة أخرى بلا تكرار الكود',
        level: 5
      },
      {
        t_ar: 'المعاملات والوسائط',
        t_en: 'Parameters and Arguments',
        details_ar: 'المعامل هو الاسم المكتوب بين قوسي التعريف، والوسيط هو القيمة الفعلية الممرَّرة وقت الاستدعاء. ويمكن إعطاء المعامل قيمة افتراضية تُستخدم إذا لم يُمرَّر وسيط، فيصير الاستدعاء ممكناً بوسيط وبدونه.',
        details_en: 'A parameter is the name written between the parentheses at definition; an argument is the actual value passed at call time. A parameter can have a default value used when no argument is passed, so the call works with or without it.',
        visual: 'func_params',
        code: 'def greet(name):\n    print("أهلاً", name)\n\ngreet("سارة")   # أهلاً سارة\n\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(5))      # 25  (استُخدمت القيمة الافتراضية)\nprint(power(5, 3))   # 125',
        level: 5
      },
      {
        t_ar: 'قيمة الإرجاع (return)',
        t_en: 'Return Values',
        details_ar: 'الفرق بين print وreturn من أكثر ما يلتبس على المبتدئ. فـprint يعرض النص على الشاشة فقط ولا يعطي البرنامج قيمة يمكن استخدامها، أما return فيسلّم القيمة لمن استدعى الدالة فتُخزَّن في متغيّر أو تدخل في حساب. والدالة التي لا تحوي return ترجع None ضمناً.',
        details_en: 'The difference between print and return trips up most beginners. print only displays text on screen and gives the program no usable value, while return hands the value back to the caller so it can be stored or used in a computation. A function without return implicitly returns None.',
        visual: 'func_return',
        code: 'def area(w, h):\n    return w * h\n\nresult = area(3, 4)\nprint(result)          # 12\nprint(area(3, 4) * 2)  # 24  (استُخدمت القيمة في حساب)\n\ndef bad_area(w, h):\n    print(w * h)       # يعرض فقط\nvalue = bad_area(3, 4)\nprint(value)           # None',
        level: 5
      },
      {
        t_ar: 'نطاق المتغيرات (Scope)',
        t_en: 'Variable Scope',
        details_ar: 'المتغيّر المعرَّف داخل دالة محلي: يولد عند الاستدعاء ويختفي بانتهائه، ولا يراه الكود خارجها. ولو تصادف اسمه مع اسم متغيّر خارجي، فالإسناد داخل الدالة يُنشئ نسخة محلية جديدة ولا يمسّ الخارجي. وهذا العزل مقصود، فهو يمنع دالة من إفساد بيانات دالة أخرى.',
        details_en: 'A variable defined inside a function is local: it is born at call time and disappears when the call ends, invisible to code outside. If its name matches an outer variable, assignment inside the function creates a new local copy and leaves the outer one untouched. This isolation is deliberate: it stops one function from corrupting another one data.',
        visual: 'func_scope',
        code: 'x = 10\n\ndef show():\n    x = 5              # متغيّر محلي جديد\n    print("داخل:", x)\n\nshow()                 # داخل: 5\nprint("خارج:", x)      # خارج: 10  (لم يتأثر)',
        level: 5
      },
      {
        t_ar: 'العودية (Recursion)',
        t_en: 'Recursion',
        details_ar: 'الدالة العودية تستدعي نفسها على نسخة أصغر من المسألة حتى تبلغ حالة التوقف. ولكل دالة عودية جزآن لا غنى عنهما: حالة التوقف التي ترجع نتيجة مباشرة بلا استدعاء، والخطوة العودية التي تقترب منها. وإسقاط حالة التوقف يجعل الاستدعاءات تتراكم حتى يمتلئ المكدس وينهار البرنامج.',
        details_en: 'A recursive function calls itself on a smaller version of the problem until it reaches the base case. Every recursive function needs two parts: a base case returning a direct result without recursing, and a recursive step moving toward it. Omitting the base case piles up calls until the stack overflows and the program crashes.',
        visual: 'func_recursion',
        code: 'def factorial(n):\n    if n == 1:          # حالة التوقف\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(4))     # 24\n\n# التتبّع: 4*factorial(3) = 4*3*factorial(2)\n#        = 4*3*2*factorial(1) = 4*3*2*1 = 24',
        level: 5
      },
      {
        t_ar: 'معالجة الأخطاء (try / except)',
        t_en: 'Exception Handling (try/except)',
        details_ar: 'بعض الأخطاء متوقَّعة ولا ذنب للمبرمج فيها: مستخدم يكتب حرفاً مكان رقم، أو ملف غير موجود. فبدل أن يتوقف البرنامج، نضع الكود المعرَّض للخطأ في try ونعالج الحالة في except. ويُفضَّل تحديد نوع الخطأ لكل حالة، لأن except العام يبتلع أخطاء لم تكن تقصدها ويخفي عيوباً حقيقية.',
        details_en: 'Some errors are expected and are not the programmer fault: a user typing a letter instead of a number, or a missing file. Instead of crashing, put the risky code in try and handle the case in except. Naming the error type per case is preferred, because a bare except swallows errors you did not intend and hides real defects.',
        visual: 'try_except',
        code: 'try:\n    age = int(input("عمرك: "))\n    print(100 / age)\nexcept ValueError:\n    print("أدخل رقماً صحيحاً")\nexcept ZeroDivisionError:\n    print("لا يمكن القسمة على صفر")',
        level: 5
      },
      {
        t_ar: 'الوحدات والاستيراد (import)',
        t_en: 'Modules and Imports',
        details_ar: 'الوحدة ملف فيه دوال جاهزة تستفيد منها بلا إعادة كتابتها. فـimport math يستورد الوحدة كاملة فتُستخدم دوالها مسبوقة باسمها، أما from math import sqrt فيستورد اسماً واحداً يُستخدم مباشرة. والأول أوضح في القراءة لأنه يبيّن مصدر الدالة، والثاني أقصر.',
        details_en: 'A module is a file of ready-made functions you use without rewriting them. import math imports the whole module, so its functions are used prefixed by its name, while from math import sqrt imports a single name used directly. The first reads clearer because it shows the function source; the second is shorter.',
        visual: 'imports',
        code: 'import math\nprint(math.sqrt(16))   # 4.0\nprint(math.pi)         # 3.141592653589793\n\nfrom random import randint\nprint(randint(1, 6))   # رقم عشوائي بين 1 و6',
        level: 5
      }
    ]
  }
};

// توزيع الدروس الأصلية (0–20) على مستويات القسم الخمسة كما في خطة المنهج.
// الدروس المضافة (21+) تحمل مستواها داخلها، وهذا الجدول للأصلية فقط
// حتى لا يُمسّ محتواها. المستويات: 1 التعليقات والمتغيرات · 2 أنواع البيانات
// والإدخال والإخراج · 3 العمليات والمنطق · 4 التكرار والمصفوفات · 5 الدوال والأخطاء.
export const legacyLessonLevels = {
  Programming: {
    0: [1, 2, 1, 3, 3, 3, 2, 2, 2, 1, 3, 3, 1, 1, 1, 4, 4, 4, 5, 5, 5]
  }
};

// عناوين مستويات كل قسم كما تظهر فوق مجموعات الدروس
export const sectionLevelTitles = {
  Programming: {
    0: [
      { ar: 'التعليقات والمتغيرات', en: 'Comments and Variables' },
      { ar: 'أنواع البيانات والإدخال والإخراج', en: 'Data Types, Input and Output' },
      { ar: 'العمليات الحسابية والمنطق', en: 'Operators and Logic' },
      { ar: 'التكرار والمصفوفات', en: 'Loops and Arrays' },
      { ar: 'الدوال والأخطاء والوحدات', en: 'Functions, Errors and Modules' }
    ]
  }
};
