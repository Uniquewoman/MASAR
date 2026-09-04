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
    ],
    1: [
      { t_ar: 'الدرس 1: ما الخوارزمية؟', t_en: 'Lesson 1: What Is an Algorithm?', d_ar: 'سلسلة خطوات محددة تحوّل مدخلاً إلى مخرج، ولماذا يسبق تصميمها كتابة أي سطر كود.', d_en: 'A definite sequence of steps turning an input into an output, and why designing it precedes writing any code.', videoUrl: '', duration: '08:20', level: 1 },
      { t_ar: 'الدرس 2: خصائص الخوارزمية الصحيحة', t_en: 'Lesson 2: Properties of a Valid Algorithm', d_ar: 'الخمس الواجب توفرها: مدخلات ومخرجات محددة، ووضوح كل خطوة، ومحدودية، وقابلية للتنفيذ.', d_en: 'The five required properties: defined inputs and outputs, unambiguous steps, finiteness, and effectiveness.', videoUrl: '', duration: '09:10', level: 1 },
      { t_ar: 'الدرس 3: تحليل المشكلة قبل حلّها', t_en: 'Lesson 3: Analysing the Problem First', d_ar: 'تحديد المطلوب والمعطى والقيود، والفرق بين فهم المشكلة والقفز إلى الحل.', d_en: 'Identifying what is required, what is given and the constraints, and the difference between understanding a problem and jumping to a solution.', videoUrl: '', duration: '10:00', level: 1 },
      { t_ar: 'الدرس 4: تجزئة المشكلة', t_en: 'Lesson 4: Decomposition', d_ar: 'تفكيك المشكلة الكبيرة إلى مسائل صغيرة يُحل كل منها وحده ثم تُركَّب الحلول.', d_en: 'Breaking a large problem into small ones, solving each alone, then composing the solutions.', videoUrl: '', duration: '08:45', level: 1 },
      { t_ar: 'الدرس 5: التجريد والتعرف على الأنماط', t_en: 'Lesson 5: Abstraction and Pattern Recognition', d_ar: 'إهمال التفاصيل غير المؤثرة، وملاحظة تكرار البنية نفسها في مسائل مختلفة.', d_en: 'Ignoring details that do not matter, and noticing the same structure repeating across different problems.', videoUrl: '', duration: '09:30', level: 1 },
      { t_ar: 'الدرس 6: تسلسل الخطوات وأثر ترتيبها', t_en: 'Lesson 6: Step Order Matters', d_ar: 'لماذا يغيّر تبديل خطوتين النتيجة كلياً، وكيف نتحقق من صحة الترتيب قبل التنفيذ.', d_en: 'Why swapping two steps changes the result entirely, and how to verify the order before executing.', videoUrl: '', duration: '07:50', level: 2 },
      { t_ar: 'الدرس 7: الكود الوهمي (Pseudocode)', t_en: 'Lesson 7: Pseudocode', d_ar: 'كتابة الخوارزمية بلغة قريبة من البشر لا تلتزم بقواعد لغة برمجة، ومتى تفيد.', d_en: 'Writing an algorithm in near-human language bound to no programming language, and when it helps.', videoUrl: '', duration: '09:20', level: 2 },
      { t_ar: 'الدرس 8: رموز المخطط الانسيابي', t_en: 'Lesson 8: Flowchart Symbols', d_ar: 'لكل شكل معنى ثابت: البداية والنهاية، والإدخال والإخراج، والمعالجة، والقرار.', d_en: 'Each shape has a fixed meaning: start and end, input and output, process, and decision.', videoUrl: '', duration: '08:15', level: 2 },
      { t_ar: 'الدرس 9: تمثيل الشرط في المخطط', t_en: 'Lesson 9: Conditions in a Flowchart', d_ar: 'المعيّن ومنه مساران: نعم ولا، وكيف يعبّر عن if وelse في صورة رسم.', d_en: 'The diamond with two paths, yes and no, and how it expresses if and else as a drawing.', videoUrl: '', duration: '08:40', level: 2 },
      { t_ar: 'الدرس 10: تمثيل التكرار في المخطط', t_en: 'Lesson 10: Loops in a Flowchart', d_ar: 'السهم الراجع الذي يصنع الحلقة، وموضع شرط الخروج الذي يمنع الدوران الأبدي.', d_en: 'The back arrow that forms the loop, and the exit condition placement that prevents endless cycling.', videoUrl: '', duration: '09:05', level: 2 },
      { t_ar: 'الدرس 11: التتبّع اليدوي بجدول المتغيرات', t_en: 'Lesson 11: Manual Tracing with a Variable Table', d_ar: 'تنفيذ الخوارزمية بالورقة والقلم سطراً سطراً لكشف الخطأ المنطقي قبل التشغيل.', d_en: 'Running the algorithm on paper line by line to expose logic errors before execution.', videoUrl: '', duration: '10:30', level: 3 },
      { t_ar: 'الدرس 12: البحث الخطي', t_en: 'Lesson 12: Linear Search', d_ar: 'فحص العناصر واحداً واحداً حتى العثور على المطلوب أو انتهاء القائمة.', d_en: 'Checking elements one by one until the target is found or the list ends.', videoUrl: '', duration: '08:35', level: 3 },
      { t_ar: 'الدرس 13: شرط البحث الثنائي', t_en: 'Lesson 13: The Binary Search Precondition', d_ar: 'لماذا يفشل البحث الثنائي على قائمة غير مرتبة، وما الذي يضمنه الترتيب.', d_en: 'Why binary search fails on an unsorted list, and what sorting guarantees.', videoUrl: '', duration: '07:55', level: 3 },
      { t_ar: 'الدرس 14: البحث الثنائي خطوة بخطوة', t_en: 'Lesson 14: Binary Search Step by Step', d_ar: 'تنصيف المجال في كل خطوة بمقارنة العنصر الأوسط، وتتبّع مثال كامل.', d_en: 'Halving the range each step by comparing the middle element, with a full traced example.', videoUrl: '', duration: '11:00', level: 3 },
      { t_ar: 'الدرس 15: مقارنة البحثين بعدد الخطوات', t_en: 'Lesson 15: Comparing the Two Searches', d_ar: 'ألف عنصر: البحث الخطي حتى ألف مقارنة، والثنائي عشر مقارنات — ولماذا.', d_en: 'A thousand elements: linear search up to a thousand comparisons, binary ten — and why.', videoUrl: '', duration: '09:40', level: 3 },
      { t_ar: 'الدرس 16: الترتيب الفقاعي', t_en: 'Lesson 16: Bubble Sort', d_ar: 'مقارنة كل عنصرين متجاورين وتبديلهما، فيطفو الأكبر إلى النهاية في كل مرور.', d_en: 'Comparing each adjacent pair and swapping, so the largest bubbles to the end each pass.', videoUrl: '', duration: '10:15', level: 4 },
      { t_ar: 'الدرس 17: ترتيب الاختيار', t_en: 'Lesson 17: Selection Sort', d_ar: 'إيجاد الأصغر في الجزء غير المرتب ووضعه في موضعه، مرة واحدة لكل موضع.', d_en: 'Finding the smallest in the unsorted part and placing it in position, once per position.', videoUrl: '', duration: '09:50', level: 4 },
      { t_ar: 'الدرس 18: ترتيب الإدراج', t_en: 'Lesson 18: Insertion Sort', d_ar: 'إدراج كل عنصر في موضعه الصحيح بين ما سبقه، كترتيب أوراق اللعب في اليد.', d_en: 'Inserting each element into its correct place among the previous ones, like sorting cards in hand.', videoUrl: '', duration: '10:05', level: 4 },
      { t_ar: 'الدرس 19: ترتيب الدمج', t_en: 'Lesson 19: Merge Sort', d_ar: 'تقسيم القائمة نصفين حتى تصير آحاداً، ثم دمج الأنصاف مرتبةً صعوداً.', d_en: 'Splitting the list in half until single elements remain, then merging the halves in order.', videoUrl: '', duration: '11:30', level: 4 },
      { t_ar: 'الدرس 20: الترتيب السريع', t_en: 'Lesson 20: Quick Sort', d_ar: 'اختيار محور وتقسيم القائمة حوله إلى أصغر وأكبر، ثم ترتيب كل جزء بالطريقة نفسها.', d_en: 'Picking a pivot, partitioning around it into smaller and larger, then sorting each part the same way.', videoUrl: '', duration: '11:45', level: 4 },
      { t_ar: 'الدرس 21: مقارنة خوارزميات الترتيب', t_en: 'Lesson 21: Comparing Sorting Algorithms', d_ar: 'أيها أسرع، وأيها يحتاج مساحة إضافية، وأيها يحافظ على ترتيب المتساويين.', d_en: 'Which is faster, which needs extra space, and which preserves the order of equal elements.', videoUrl: '', duration: '10:20', level: 4 },
      { t_ar: 'الدرس 22: لماذا نقيس تعقيد الخوارزمية', t_en: 'Lesson 22: Why Measure Complexity', d_ar: 'قياس عدد العمليات لا الثواني، لأن الثواني تتغيّر بتغيّر الجهاز والخوارزمية لا.', d_en: 'Counting operations rather than seconds, because seconds change with the machine while the algorithm does not.', videoUrl: '', duration: '09:15', level: 5 },
      { t_ar: 'الدرس 23: رموز Big-O الشائعة', t_en: 'Lesson 23: Common Big-O Notations', d_ar: 'من الثابت إلى الأسي: ما تعنيه كل مرتبة عملياً حين يتضاعف حجم المدخل.', d_en: 'From constant to exponential: what each order means in practice when the input size doubles.', videoUrl: '', duration: '10:40', level: 5 },
      { t_ar: 'الدرس 24: حساب التعقيد من الحلقات', t_en: 'Lesson 24: Deriving Complexity from Loops', d_ar: 'حلقة واحدة على n، وحلقتان متداخلتان، وحلقة تنصّف في كل دورة — وكيف نقرأ كلاً منها.', d_en: 'One loop over n, two nested loops, and a loop that halves each round, and how to read each.', videoUrl: '', duration: '11:10', level: 5 },
      { t_ar: 'الدرس 25: أفضل حالة وأسوأ حالة', t_en: 'Lesson 25: Best Case and Worst Case', d_ar: 'لماذا نصف الخوارزمية بأسوأ حالاتها عادة، ومتى يهم متوسط الحالة أكثر.', d_en: 'Why an algorithm is usually described by its worst case, and when the average case matters more.', videoUrl: '', duration: '09:25', level: 5 },
      { t_ar: 'الدرس 26: تعقيد المساحة', t_en: 'Lesson 26: Space Complexity', d_ar: 'الذاكرة الإضافية التي تطلبها الخوارزمية، والمقايضة بين السرعة والمساحة.', d_en: 'The extra memory an algorithm requires, and the trade-off between speed and space.', videoUrl: '', duration: '08:55', level: 5 },
      { t_ar: 'الدرس 27: اختيار الخوارزمية المناسبة', t_en: 'Lesson 27: Choosing the Right Algorithm', d_ar: 'حجم البيانات وحالتها الابتدائية وقيود الذاكرة: ثلاثة تحدد الاختيار الصحيح.', d_en: 'Data size, initial state, and memory constraints: three factors that decide the right choice.', videoUrl: '', duration: '10:50', level: 5 }
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
    ],
    1: [
      {
        t_ar: 'ما الخوارزمية؟',
        t_en: 'What Is an Algorithm?',
        details_ar: 'الخوارزمية سلسلة خطوات محددة ومرتبة تحوّل مدخلاً معلوماً إلى مخرج مطلوب. وهي ليست كوداً ولا لغة برمجة، بل هي الفكرة التي يُكتب الكود لتنفيذها؛ ولهذا يمكن كتابة الخوارزمية الواحدة بأي لغة. أنت تستخدم خوارزميات يومياً بلا أن تسميها: وصفة طبخ، وطريق من البيت إلى العمل، وترتيب أوراق بالتاريخ.',
        details_en: 'An algorithm is a definite, ordered sequence of steps turning a known input into a desired output. It is not code nor a language; it is the idea the code implements, which is why one algorithm can be written in any language. You use algorithms daily without naming them: a recipe, a route to work, sorting papers by date.',
        visual: 'algo_intro',
        code: '# خوارزمية: أوجد أكبر رقم في قائمة\n# المدخل: قائمة أرقام\n# المخرج: أكبر رقم فيها\n\n1. اعتبر الأول هو الأكبر مبدئياً\n2. مرّ على بقية الأرقام واحداً واحداً\n3. إن وجدت أكبر من المحفوظ، احفظه بدله\n4. عند انتهاء القائمة، المحفوظ هو الأكبر',
        level: 1
      },
      {
        t_ar: 'خصائص الخوارزمية الصحيحة',
        t_en: 'Properties of a Valid Algorithm',
        details_ar: 'لا يُسمى أي وصف خوارزمية حتى تتوفر فيه خمس خصائص: مدخلات محددة، ومخرجات محددة، ووضوح كل خطوة فلا تحتمل تفسيرين، ومحدودية بأن تنتهي بعد عدد منتهٍ من الخطوات، وقابلية للتنفيذ بوسائل متاحة. وأكثر ما يُخل به المبتدئ خاصيتان: الوضوح، بكتابة خطوة مثل «رتّب البيانات» دون بيان كيف؛ والمحدودية، بكتابة تكرار بلا شرط خروج.',
        details_en: 'A description is not an algorithm until it has five properties: defined inputs, defined outputs, unambiguous steps that admit no two readings, finiteness so it ends after a limited number of steps, and effectiveness with available means. Beginners most often break two: clarity, by writing a step like "sort the data" without saying how; and finiteness, by writing a repetition with no exit condition.',
        visual: 'algo_props',
        code: '# ✅ خطوة واضحة ومنتهية\nكرّر من 1 إلى 10: اطبع الرقم\n\n# ❌ غامضة: كيف نعرف أنه مناسب؟\nاختر الرقم المناسب\n\n# ❌ غير منتهية: لا شرط خروج\nكرّر إلى الأبد: اطبع "مرحباً"',
        level: 1
      },
      {
        t_ar: 'تحليل المشكلة قبل حلّها',
        t_en: 'Analysing the Problem First',
        details_ar: 'قبل كتابة خطوة واحدة، حدد ثلاثة: ما المعطى (المدخلات وأنواعها)، وما المطلوب (المخرج بالضبط)، وما القيود (حجم البيانات، الوقت المتاح، الحالات الاستثنائية). وأكثر الأخطاء كلفةً حلٌّ صحيح لمشكلة غير المطلوبة، وسببه القفز للكود قبل تحديد المطلوب. واسأل دائماً عن الحالات الحدّية: قائمة فارغة، قيمة سالبة، عناصر متساوية.',
        details_en: 'Before writing a single step, define three things: what is given (inputs and their types), what is required (the exact output), and the constraints (data size, time budget, edge cases). The costliest mistake is a correct solution to the wrong problem, caused by jumping to code before defining the requirement. Always ask about edge cases: an empty list, a negative value, equal elements.',
        visual: 'problem_analysis',
        code: '# المشكلة: أوجد متوسط درجات طالب\n\nالمعطى : قائمة درجات، كل درجة بين 0 و100\nالمطلوب: رقم واحد يمثل المتوسط\nالقيود : ماذا لو كانت القائمة فارغة؟\n         (القسمة على صفر — لا بد من معالجتها)',
        level: 1
      },
      {
        t_ar: 'تجزئة المشكلة',
        t_en: 'Decomposition',
        details_ar: 'المشكلة الكبيرة تُحل بتفكيكها إلى مسائل صغيرة، كل واحدة مفهومة وقابلة للاختبار وحدها، ثم تُركَّب الحلول. الفائدة ثلاثية: تختبر كل جزء منفرداً فتعرف موضع الخطأ بدقة، وتعيد استخدام الجزء في مكان آخر، وتوزّع الأجزاء على أكثر من شخص. والعلامة على تجزئة جيدة أن تصف كل جزء بجملة واحدة بلا كلمة «ثم».',
        details_en: 'A large problem is solved by breaking it into small ones, each understandable and testable alone, then composing the solutions. The benefit is threefold: you test each part separately and locate errors precisely, you reuse a part elsewhere, and you distribute parts across people. A good decomposition is signalled by being able to describe each part in one sentence without the word "then".',
        visual: 'decomposition',
        code: '# المشكلة: تقرير درجات صف كامل\n\n# بدل حلها دفعة واحدة، جزّئها:\n1. اقرأ الدرجات من الملف\n2. تحقق من صحة كل درجة\n3. احسب متوسط كل طالب\n4. رتّب الطلاب حسب المتوسط\n5. اطبع التقرير\n\n# كل خطوة تُكتب وتُختبر وحدها',
        level: 1
      },
      {
        t_ar: 'التجريد والتعرف على الأنماط',
        t_en: 'Abstraction and Pattern Recognition',
        details_ar: 'التجريد إهمال التفاصيل التي لا تؤثر في الحل والاحتفاظ بجوهر المشكلة. فحين ترتب طلاباً بالدرجات، لا يهم اسم الطالب ولا صفه، إنما يهم أن لكل عنصر قيمة تُقارن. ولهذا تصلح خوارزمية الترتيب نفسها للطلاب والمنتجات والملفات. والتعرف على الأنماط هو ملاحظة أن مشكلتين مختلفتين في الظاهر لهما البنية نفسها، فيُنقل الحل بينهما.',
        details_en: 'Abstraction means dropping details that do not affect the solution and keeping the essence. When ranking students by grade, neither the name nor the class matters; what matters is that each item has a comparable value. That is why the same sorting algorithm serves students, products and files. Pattern recognition is noticing that two seemingly different problems share the same structure, so the solution transfers.',
        visual: 'abstraction',
        code: '# ثلاث مشاكل مختلفة الظاهر\n1. رتّب الطلاب حسب الدرجة\n2. رتّب المنتجات حسب السعر\n3. رتّب الملفات حسب التاريخ\n\n# بنيتها واحدة بعد التجريد:\n# «رتّب عناصر لكل منها قيمة قابلة للمقارنة»\n# فخوارزمية واحدة تكفي الثلاث',
        level: 1
      },
      {
        t_ar: 'تسلسل الخطوات وأثر ترتيبها',
        t_en: 'Step Order Matters',
        details_ar: 'الخطوات في الخوارزمية مرتبة لا مجموعة: تبديل خطوتين قد يقلب النتيجة أو يفسدها كلياً. والسبب أن كل خطوة تفترض حالة أنتجتها الخطوة السابقة؛ فلا يمكن قسمة المجموع على العدد قبل حساب المجموع، ولا طباعة نتيجة قبل حسابها. وطريقة التحقق البسيطة: اسأل عن كل خطوة ما الذي تحتاجه جاهزاً قبلها.',
        details_en: 'Steps in an algorithm are ordered, not merely collected: swapping two may flip or ruin the result. Each step assumes a state produced by the previous one; you cannot divide the sum by the count before computing the sum, nor print a result before computing it. A simple check: for each step, ask what must already be ready before it.',
        visual: 'sequence',
        code: '# ✅ ترتيب صحيح\n1. اجمع الدرجات في المجموع\n2. اقسم المجموع على عددها\n3. اطبع الناتج\n\n# ❌ ترتيب خاطئ — يقسم قبل الجمع\n1. اقسم المجموع على عددها\n2. اجمع الدرجات في المجموع\n3. اطبع الناتج',
        level: 2
      },
      {
        t_ar: 'الكود الوهمي (Pseudocode)',
        t_en: 'Pseudocode',
        details_ar: 'الكود الوهمي كتابة الخوارزمية بلغة قريبة من البشر، منظمة كالكود لكنها لا تلتزم بقواعد لغة بعينها فلا فواصل منقوطة ولا أقواس تُحاسب عليها. فائدته أنه يفصل التفكير في الحل عن التفكير في قواعد اللغة، فتراجع منطقك قبل أن تكتب سطراً واحداً. ويُقرأ من غير المبرمجين أيضاً، فيصلح لمناقشة الفكرة مع فريق مختلط.',
        details_en: 'Pseudocode writes an algorithm in near-human language, structured like code but bound to no language rules, with no semicolons or brackets to answer for. Its value is separating thinking about the solution from thinking about syntax, so you review your logic before writing a single line. Non-programmers can read it too, making it suitable for discussing an idea with a mixed team.',
        visual: 'pseudocode',
        code: 'ابدأ\n  اقرأ العدد n\n  إذا كان n أكبر من صفر\n      اطبع "موجب"\n  وإلا إذا كان n يساوي صفر\n      اطبع "صفر"\n  وإلا\n      اطبع "سالب"\nانتهِ',
        level: 2
      },
      {
        t_ar: 'رموز المخطط الانسيابي',
        t_en: 'Flowchart Symbols',
        details_ar: 'المخطط الانسيابي يرسم الخوارزمية بأشكال لكل منها معنى متفق عليه: البيضاوي للبداية والنهاية، ومتوازي الأضلاع للإدخال والإخراج، والمستطيل للمعالجة والحساب، والمعيّن للقرار، والسهم لاتجاه التنفيذ. والالتزام بالمعاني شرط، فرسم القرار بمستطيل يجعل المخطط غير مقروء لمن يعرف الاصطلاح.',
        details_en: 'A flowchart draws an algorithm with shapes that carry agreed meanings: an oval for start and end, a parallelogram for input and output, a rectangle for processing, a diamond for a decision, and an arrow for flow direction. Respecting these meanings is required, since drawing a decision as a rectangle makes the chart unreadable to anyone who knows the convention.',
        visual: 'flowchart_symbols',
        code: 'بيضاوي   ⬭  البداية والنهاية\nمتوازي   ▱  إدخال أو إخراج\nمستطيل   ▭  معالجة أو حساب\nمعيّن     ◇  قرار (نعم / لا)\nسهم      →  اتجاه التنفيذ',
        level: 2
      },
      {
        t_ar: 'تمثيل الشرط في المخطط',
        t_en: 'Conditions in a Flowchart',
        details_ar: 'القرار يُرسم معيّناً يدخله سهم واحد ويخرج منه سهمان: نعم ولا. ولا يجوز أن يخرج من المعيّن سهم واحد، لأن الحالة الأخرى ستبقى بلا مسار. والمساران قد يلتقيان بعد المعيّن إن كان الاختلاف في خطوة واحدة، وقد يستمران منفصلين. وهذا التمثيل هو صورة if وelse نفسها.',
        details_en: 'A decision is drawn as a diamond with one arrow in and two out: yes and no. A diamond must not have a single outgoing arrow, or the other case is left with no path. The two paths may rejoin after the diamond when they differ in one step only, or may continue separately. This drawing is exactly the picture of if and else.',
        visual: 'flowchart_condition',
        code: '        ┌─────────────┐\n        │ اقرأ الدرجة │\n        └──────┬──────┘\n               ▼\n          ◇ درجة ≥ 60 ◇\n          ╱           ╲\n      نعم╱             ╲لا\n        ▼               ▼\n   ┌────────┐      ┌────────┐\n   │ ناجح   │      │ راسب   │\n   └────┬───┘      └───┬────┘\n        └──────┬───────┘\n               ▼  (يلتقيان)',
        level: 2
      },
      {
        t_ar: 'تمثيل التكرار في المخطط',
        t_en: 'Loops in a Flowchart',
        details_ar: 'الحلقة تُرسم بسهم راجع يعيد التنفيذ إلى نقطة سابقة، ولا بد قبل الرجوع من معيّن يفحص شرط الاستمرار. وموضع هذا المعيّن يحدد نوع الحلقة: إن كان قبل الجسم فقد لا يُنفَّذ الجسم ولا مرة، وإن كان بعده نُفِّذ مرة على الأقل. والخطأ الشائع رسم السهم الراجع بلا معيّن، فينتج دوران أبدي.',
        details_en: 'A loop is drawn with a back arrow returning execution to an earlier point, and before returning there must be a diamond checking the continue condition. That diamond position defines the loop type: before the body, the body may never run; after it, the body runs at least once. The common mistake is drawing the back arrow with no diamond, producing an endless cycle.',
        visual: 'flowchart_loop',
        code: '     ┌──────────┐\n     │  i = 1   │\n     └────┬─────┘\n          ▼\n     ◇ i ≤ 5 ◇ ──لا──▶ (اخرج)\n          │ نعم\n          ▼\n   ┌────────────┐\n   │ اطبع i     │\n   │ i = i + 1  │\n   └─────┬──────┘\n         └────────▲ سهم راجع',
        level: 2
      },
      {
        t_ar: 'التتبّع اليدوي بجدول المتغيرات',
        t_en: 'Manual Tracing with a Variable Table',
        details_ar: 'التتبّع اليدوي تنفيذ الخوارزمية بالورقة والقلم: ترسم عموداً لكل متغير وصفاً لكل خطوة، وتكتب القيم بعد كل سطر. وهو أقوى وسيلة لكشف الخطأ المنطقي، لأن البرنامج المنطقي الخاطئ يعمل بلا رسالة خطأ فلا يكشفه إلا التتبّع. وأهم ما يُكشف به: الشرط المعكوس، والحلقة التي تزيد أو تنقص دورة واحدة.',
        details_en: 'Manual tracing runs the algorithm on paper: draw a column per variable and a row per step, writing values after each line. It is the strongest way to expose logic errors, because a logically wrong program runs with no error message and only tracing reveals it. It most often catches an inverted condition, or a loop running one iteration too many or too few.',
        visual: 'trace_table',
        code: 'total = 0\nfor i in range(1, 4):\n    total = total + i\n\n# جدول التتبّع:\n# الخطوة │  i  │ total\n#   بداية │  -  │   0\n#    1    │  1  │   1\n#    2    │  2  │   3\n#    3    │  3  │   6   ← الناتج النهائي',
        level: 3
      },
      {
        t_ar: 'البحث الخطي',
        t_en: 'Linear Search',
        details_ar: 'البحث الخطي يفحص العناصر من الأول إلى الأخير حتى يجد المطلوب فيتوقف، أو تنتهي القائمة فيعلن عدم وجوده. ميزته أنه لا يشترط ترتيب القائمة ويصلح لأي بيانات، وعيبه أنه في أسوأ الحالات يفحص كل العناصر. وعدد المقارنات: واحدة في أفضل حالة إن كان المطلوب أول عنصر، وn في أسوأ حالة إن كان الأخير أو غير موجود.',
        details_en: 'Linear search checks elements from first to last until it finds the target and stops, or the list ends and it reports absence. Its advantage is requiring no sorting and working on any data; its drawback is that in the worst case it checks every element. Comparisons: one in the best case if the target is first, and n in the worst if it is last or absent.',
        visual: 'linear_search',
        code: 'def linear_search(items, target):\n    for i in range(len(items)):\n        if items[i] == target:\n            return i        # وجدناه، نتوقف فوراً\n    return -1               # لم نجده\n\nnums = [9, 3, 7, 1, 5]\nprint(linear_search(nums, 7))   # 2\nprint(linear_search(nums, 8))   # -1',
        level: 3
      },
      {
        t_ar: 'شرط البحث الثنائي',
        t_en: 'The Binary Search Precondition',
        details_ar: 'البحث الثنائي يشترط أن تكون القائمة مرتبة، وهذا الشرط ليس تفصيلاً بل هو أساس عمله. فهو حين يقارن بالعنصر الأوسط ويجده أصغر من المطلوب، يستبعد النصف الأيسر كله بناءً على أن الترتيب يضمن أن كل ما قبل الأوسط أصغر منه. فإن كانت القائمة غير مرتبة بطل هذا الضمان، وقد يستبعد النصف الذي فيه المطلوب فيعلن عدم وجوده وهو موجود.',
        details_en: 'Binary search requires a sorted list, and this is not a detail but the basis of how it works. When it compares with the middle element and finds it smaller than the target, it discards the entire left half relying on sorting to guarantee everything before the middle is smaller. On an unsorted list that guarantee is void, so it may discard the very half holding the target and report it missing while it is present.',
        visual: 'binary_precondition',
        code: '# قائمة مرتبة ✅ — الاستبعاد آمن\n[2, 5, 8, 12, 16, 23, 38]\n\n# قائمة غير مرتبة ❌ — الاستبعاد خاطئ\n[38, 2, 23, 5, 16, 8, 12]\n# البحث عن 2: الأوسط 5، و2 أصغر منه\n# فيستبعد اليمين… لكن 2 ليس بالضرورة يساراً!',
        level: 3
      },
      {
        t_ar: 'البحث الثنائي خطوة بخطوة',
        t_en: 'Binary Search Step by Step',
        details_ar: 'يحدد البحث الثنائي طرفي المجال ثم يقارن بعنصره الأوسط: فإن ساواه انتهى، وإن كان المطلوب أكبر نقل الطرف الأدنى إلى ما بعد الأوسط، وإن كان أصغر نقل الطرف الأعلى إلى ما قبله. فيتقلص المجال إلى نصفه في كل خطوة حتى يجد المطلوب أو يتقاطع الطرفان فينتهي بلا نتيجة.',
        details_en: 'Binary search sets the range bounds and compares with the middle element: if equal it is done; if the target is larger it moves the low bound past the middle; if smaller it moves the high bound before it. The range halves each step until the target is found or the bounds cross and it ends with no result.',
        visual: 'binary_search',
        code: 'def binary_search(items, target):\n    low, high = 0, len(items) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if items[mid] == target:\n            return mid\n        elif items[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\nnums = [2, 5, 8, 12, 16, 23, 38]\n# البحث عن 23:\n# low=0 high=6 mid=3 → 12 < 23 → low=4\n# low=4 high=6 mid=5 → 23 == 23 ✅\nprint(binary_search(nums, 23))   # 5',
        level: 3
      },
      {
        t_ar: 'مقارنة البحثين بعدد الخطوات',
        t_en: 'Comparing the Two Searches',
        details_ar: 'الفرق بين البحثين لا يظهر على عشرة عناصر، وإنما يظهر حين تكبر البيانات. فالبحث الخطي يفحص في أسوأ حالاته كل عنصر، والثنائي ينصّف المجال في كل خطوة فيحتاج عدد مرات التنصيف حتى يبقى عنصر واحد. لكن الثنائي يشترط الترتيب، وترتيب قائمة غير مرتبة أغلى من البحث الخطي نفسه — فلا يُلجأ إليه إلا إن كانت مرتبة أصلاً أو سيتكرر البحث فيها كثيراً.',
        details_en: 'The difference does not show on ten elements; it shows as data grows. Linear search checks every element in the worst case, while binary halves the range each step, needing as many steps as halvings until one element remains. But binary requires sorting, and sorting an unsorted list costs more than the linear search itself, so it is chosen only when the list is already sorted or will be searched many times.',
        visual: 'search_compare',
        code: '# أسوأ حالة، بعدد المقارنات\n\n# عدد العناصر │ خطي   │ ثنائي\n#      10     │   10   │   4\n#     100     │  100   │   7\n#   1,000     │ 1,000  │  10\n# 1,000,000   │ 1000000│  20\n\n# لأن 2^10 = 1024 ≈ ألف\n# و2^20 ≈ مليون',
        level: 3
      },
      {
        t_ar: 'الترتيب الفقاعي',
        t_en: 'Bubble Sort',
        details_ar: 'يقارن الترتيب الفقاعي كل عنصرين متجاورين ويبدّلهما إن كانا في غير ترتيبهما، فيطفو أكبر عنصر إلى نهاية القائمة في كل مرور كاملة. ويتكرر المرور حتى لا يحدث تبديل في مرور كاملة، وعندها تكون القائمة مرتبة. وهو أبسط خوارزميات الترتيب وأسهلها فهماً، وأبطؤها عملياً، ولذلك يُدرَّس ولا يُستخدم على بيانات كبيرة.',
        details_en: 'Bubble sort compares each adjacent pair and swaps them if out of order, so the largest element bubbles to the end on each full pass. Passes repeat until one full pass makes no swap, at which point the list is sorted. It is the simplest sorting algorithm to understand and the slowest in practice, so it is taught but not used on large data.',
        visual: 'bubble_sort',
        code: 'def bubble_sort(arr):\n    for i in range(len(arr) - 1):\n        for j in range(len(arr) - 1 - i):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\n# تتبّع [5, 1, 4, 2]:\n# مرور 1: [1,5,4,2] → [1,4,5,2] → [1,4,2,5]\n# مرور 2: [1,4,2,5] → [1,2,4,5]\n# مرور 3: لا تبديل → انتهى\nprint(bubble_sort([5, 1, 4, 2]))   # [1, 2, 4, 5]',
        level: 4
      },
      {
        t_ar: 'ترتيب الاختيار',
        t_en: 'Selection Sort',
        details_ar: 'يقسم ترتيب الاختيار القائمة ذهنياً إلى جزء مرتب في أولها وجزء غير مرتب في بقيتها. ثم يبحث في الجزء غير المرتب عن أصغر عنصر ويبدّله مع أول عنصر فيه، فيكبر الجزء المرتب عنصراً واحداً في كل جولة. وميزته على الفقاعي أن عدد التبديلات فيه قليل: تبديل واحد لكل موضع، بينما الفقاعي قد يبدّل كثيراً في المرور الواحد.',
        details_en: 'Selection sort mentally splits the list into a sorted part at the front and an unsorted rest. It then finds the smallest element in the unsorted part and swaps it with that part first element, growing the sorted part by one each round. Its advantage over bubble sort is few swaps: one per position, while bubble may swap many times in a single pass.',
        visual: 'selection_sort',
        code: 'def selection_sort(arr):\n    for i in range(len(arr)):\n        min_i = i\n        for j in range(i + 1, len(arr)):\n            if arr[j] < arr[min_i]:\n                min_i = j\n        arr[i], arr[min_i] = arr[min_i], arr[i]\n    return arr\n\n# تتبّع [64, 25, 12, 22]:\n# i=0: الأصغر 12 → [12, 25, 64, 22]\n# i=1: الأصغر 22 → [12, 22, 64, 25]\n# i=2: الأصغر 25 → [12, 22, 25, 64]\nprint(selection_sort([64, 25, 12, 22]))',
        level: 4
      },
      {
        t_ar: 'ترتيب الإدراج',
        t_en: 'Insertion Sort',
        details_ar: 'ترتيب الإدراج يعمل كما ترتب أوراق اللعب في يدك: تأخذ ورقة وتزحزح ما قبلها حتى تجد موضعها فتدسها فيه. يبدأ من العنصر الثاني ويقارنه بما قبله، فما دام السابق أكبر أزاحه خطوة يميناً حتى يبلغ موضعه الصحيح. وهو الأفضل عملياً بين الثلاثة البسيطة حين تكون القائمة شبه مرتبة أصلاً، لأنه لا يزيح شيئاً في هذه الحالة.',
        details_en: 'Insertion sort works the way you sort playing cards in hand: take a card and shift the earlier ones until you find its place and slot it in. It starts at the second element and compares backwards, shifting each larger predecessor one step right until the correct position is reached. It is the best of the three simple sorts in practice when the list is nearly sorted, since it shifts nothing in that case.',
        visual: 'insertion_sort',
        code: 'def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]     # أزح يميناً\n            j = j - 1\n        arr[j + 1] = key            # ضع في موضعه\n    return arr\n\n# تتبّع [5, 2, 4, 1]:\n# key=2 → [2, 5, 4, 1]\n# key=4 → [2, 4, 5, 1]\n# key=1 → [1, 2, 4, 5]\nprint(insertion_sort([5, 2, 4, 1]))',
        level: 4
      },
      {
        t_ar: 'ترتيب الدمج',
        t_en: 'Merge Sort',
        details_ar: 'ترتيب الدمج يقوم على مبدأ فرّق تسد: يقسم القائمة نصفين، ثم يقسم كل نصف نصفين، حتى تصير كل قطعة عنصراً واحداً — والعنصر الواحد مرتب بذاته. ثم يعكس المسار فيدمج كل قطعتين مرتبتين في قطعة واحدة مرتبة بمقارنة أولهما في كل خطوة. وهو أسرع بكثير من الثلاثة البسيطة على البيانات الكبيرة، لكنه يحتاج مساحة إضافية بحجم القائمة أثناء الدمج.',
        details_en: 'Merge sort applies divide and conquer: it splits the list in half, splits each half again, until every piece is a single element, and a single element is sorted by itself. Then it reverses course, merging each two sorted pieces into one sorted piece by comparing their fronts each step. It is far faster than the three simple sorts on large data, but needs extra space the size of the list while merging.',
        visual: 'merge_sort',
        code: 'def merge(left, right):\n    result, i, j = [], 0, 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    return result + left[i:] + right[j:]\n\ndef merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    return merge(merge_sort(arr[:mid]), merge_sort(arr[mid:]))\n\n# [38,27,43,3] → [38,27] | [43,3]\n#              → [27,38] | [3,43]\n#              → [3, 27, 38, 43]\nprint(merge_sort([38, 27, 43, 3]))',
        level: 4
      },
      {
        t_ar: 'الترتيب السريع',
        t_en: 'Quick Sort',
        details_ar: 'الترتيب السريع يختار عنصراً محوراً ثم يقسم القائمة حوله: ما هو أصغر منه في جهة، وما هو أكبر في الأخرى. فيستقر المحور في موضعه النهائي مباشرة، ثم تُرتَّب الجهتان بالطريقة نفسها. وهو أسرع الخوارزميات عملياً في المتوسط، لكن اختيار محور سيئ — كأصغر عنصر في كل مرة — يجعل التقسيم غير متوازن فيهبط أداؤه إلى مستوى الخوارزميات البسيطة.',
        details_en: 'Quick sort picks a pivot then partitions the list around it: smaller elements on one side, larger on the other. The pivot lands in its final position immediately, then both sides are sorted the same way. It is the fastest in practice on average, but a poor pivot choice, such as the smallest element every time, makes the partition unbalanced and drops its performance to the level of the simple sorts.',
        visual: 'quick_sort',
        code: 'def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[-1]              # المحور: الأخير\n    smaller = [x for x in arr[:-1] if x <= pivot]\n    larger  = [x for x in arr[:-1] if x >  pivot]\n    return quick_sort(smaller) + [pivot] + quick_sort(larger)\n\n# [7,2,9,4,1] محور 1 → [] + [1] + [7,2,9,4]\n# [7,2,9,4]   محور 4 → [2] + [4] + [7,9]\nprint(quick_sort([7, 2, 9, 4, 1]))   # [1, 2, 4, 7, 9]',
        level: 4
      },
      {
        t_ar: 'مقارنة خوارزميات الترتيب',
        t_en: 'Comparing Sorting Algorithms',
        details_ar: 'الخوارزميات الثلاث البسيطة — الفقاعي والاختيار والإدراج — تعمل بحلقتين متداخلتين فكلفتها ترتفع بمربع عدد العناصر، وميزتها البساطة وعدم حاجتها لمساحة إضافية. أما الدمج والسريع فيقسمان المسألة فتنخفض كلفتهما كثيراً، لكن الدمج يستهلك مساحة إضافية والسريع قد يسوء أداؤه بمحور رديء. وثمة فارق ثالث يهم عملياً: الاستقرار، وهو حفظ الترتيب النسبي للعناصر المتساوية.',
        details_en: 'The three simple sorts, bubble, selection and insertion, run two nested loops so their cost grows with the square of the element count, and their merit is simplicity and needing no extra space. Merge and quick divide the problem so their cost drops sharply, but merge consumes extra space and quick can degrade with a poor pivot. A third practical difference is stability: preserving the relative order of equal elements.',
        visual: 'sort_compare',
        code: '# الخوارزمية │ متوسط الحالة │ أسوأ حالة │ مساحة │ مستقرة\n# ───────────┼──────────────┼───────────┼───────┼────────\n# الفقاعي     │    n²        │    n²     │  1    │  نعم\n# الاختيار    │    n²        │    n²     │  1    │  لا\n# الإدراج     │    n²        │    n²     │  1    │  نعم\n# الدمج       │   n log n    │  n log n  │  n    │  نعم\n# السريع      │   n log n    │    n²     │ log n │  لا',
        level: 4
      },
      {
        t_ar: 'لماذا نقيس تعقيد الخوارزمية',
        t_en: 'Why Measure Complexity',
        details_ar: 'قياس زمن التنفيذ بالثواني لا يصلح للمقارنة، لأنه يتغيّر بتغيّر الجهاز واللغة وحمل النظام؛ فقد تبدو خوارزمية رديئة أسرع لأنها جُرِّبت على حاسوب أقوى. لذلك نقيس عدد العمليات الأساسية بدلالة حجم المدخل n، فنحصل على وصف مستقل عن الجهاز. ونهتم بسلوك الخوارزمية حين يكبر n كثيراً، لأن الفرق بين الخوارزميات لا يظهر على البيانات الصغيرة.',
        details_en: 'Measuring runtime in seconds is unfit for comparison, since it varies with machine, language and system load; a poor algorithm may look faster merely because it ran on a stronger computer. So we count basic operations as a function of input size n, yielding a machine-independent description. We care about behaviour as n grows large, because differences between algorithms do not show on small data.',
        visual: 'why_complexity',
        code: '# نفس الخوارزمية على جهازين\n# جهاز قديم: 4 ثوانٍ\n# جهاز حديث: 1 ثانية\n# الزمن اختلف والخوارزمية واحدة!\n\n# لكن عدد العمليات ثابت لا يتغيّر:\n# على 1000 عنصر → مليون عملية\n# مهما كان الجهاز',
        level: 5
      },
      {
        t_ar: 'رموز Big-O الشائعة',
        t_en: 'Common Big-O Notations',
        details_ar: 'رمز Big-O يصف كيف ينمو عدد العمليات مع كبر المدخل، ويُهمل الثوابت والحدود الأصغر لأنها لا تؤثر عند الأحجام الكبيرة. فـO(1) لا يتأثر بحجم المدخل، وO(log n) ينمو ببطء شديد لأنه ينصّف المسألة، وO(n) ينمو بالتناسب، وO(n log n) هو حد الترتيب الجيد، وO(n²) يتضاعف أربع مرات كلما تضاعف المدخل. والقاعدة العملية: انتقالك من n² إلى n log n يغيّر الممكن من المستحيل.',
        details_en: 'Big-O describes how operation count grows with input size, dropping constants and lower terms since they do not matter at large sizes. O(1) is unaffected by size, O(log n) grows very slowly by halving the problem, O(n) grows proportionally, O(n log n) is the bar for good sorting, and O(n²) quadruples whenever the input doubles. Practical rule: moving from n² to n log n turns the impossible into the possible.',
        visual: 'big_o',
        code: '# عدد العمليات عند n = 1000\n\n# O(1)        →           1\n# O(log n)    →          10\n# O(n)        →       1,000\n# O(n log n)  →      10,000\n# O(n²)       →   1,000,000\n# O(2ⁿ)       → رقم يفوق عدد ذرات الكون',
        level: 5
      },
      {
        t_ar: 'حساب التعقيد من الحلقات',
        t_en: 'Deriving Complexity from Loops',
        details_ar: 'أسرع طريقة لتقدير التعقيد قراءة الحلقات: حلقة واحدة تمر على n عنصراً تعطي O(n)، وحلقتان متداخلتان كل منهما على n تعطيان O(n²)، وحلقة تنصّف المتغير في كل دورة تعطي O(log n). والحلقات المتتابعة لا المتداخلة تُجمع لا تُضرب، ويبقى الأكبر: حلقة O(n) تليها حلقة O(n) تعطيان O(n) لا O(n²). وأي عمل بحجم ثابت داخل الحلقة لا يغيّر المرتبة.',
        details_en: 'The fastest way to estimate complexity is reading the loops: one loop over n gives O(n), two nested loops each over n give O(n²), and a loop halving its variable each round gives O(log n). Sequential rather than nested loops add instead of multiply, and the largest dominates: an O(n) loop followed by an O(n) loop gives O(n), not O(n²). Fixed-size work inside a loop does not change the order.',
        visual: 'loops_complexity',
        code: '# O(n) — حلقة واحدة\nfor i in range(n):\n    print(i)\n\n# O(n²) — متداخلة\nfor i in range(n):\n    for j in range(n):\n        print(i, j)\n\n# O(log n) — تنصّف في كل دورة\nwhile n > 1:\n    n = n // 2\n\n# O(n) لا O(n²) — متتابعة تُجمع\nfor i in range(n): pass\nfor j in range(n): pass',
        level: 5
      },
      {
        t_ar: 'أفضل حالة وأسوأ حالة',
        t_en: 'Best Case and Worst Case',
        details_ar: 'أداء الخوارزمية الواحدة يختلف باختلاف المدخل: فالبحث الخطي يجد المطلوب من أول مقارنة إن كان أول عنصر، ويحتاج n مقارنة إن كان الأخير أو غائباً. ولذلك نصف ثلاث حالات: أفضلها وأسوأها ومتوسطها. ويغلب وصف الخوارزمية بأسوأ حالاتها لأنه يعطي ضماناً لا يُخلف؛ أما متوسط الحالة فيهم حين تتكرر العملية كثيراً على مدخلات متنوعة، كالترتيب السريع الذي أسوأ حالاته نادرة عملياً.',
        details_en: 'One algorithm performs differently by input: linear search finds the target on the first comparison if it is first, and needs n comparisons if it is last or absent. So we describe three cases: best, worst and average. Algorithms are usually described by the worst case because it gives a guarantee that never fails; the average matters when the operation repeats often on varied inputs, like quick sort whose worst case is rare in practice.',
        visual: 'cases',
        code: '# البحث الخطي عن قيمة في [3, 8, 1, 9, 5]\n\n# أفضل حالة  : المطلوب 3 → مقارنة واحدة  → O(1)\n# أسوأ حالة  : المطلوب 5 → خمس مقارنات   → O(n)\n# متوسط الحالة: نصف القائمة تقريباً      → O(n)\n\n# لاحظ: المتوسط وأسوأ الحالة بالمرتبة نفسها هنا،\n# لأن n/2 وn ينموان بالتناسب ذاته',
        level: 5
      },
      {
        t_ar: 'تعقيد المساحة',
        t_en: 'Space Complexity',
        details_ar: 'التعقيد لا يقتصر على الزمن، فللذاكرة حساب أيضاً: تعقيد المساحة يقيس الذاكرة الإضافية التي تطلبها الخوارزمية فوق المدخل نفسه. فترتيب الإدراج يعمل داخل القائمة نفسها ولا يحتاج إلا متغيرات معدودة فمساحته O(1)، بينما ترتيب الدمج ينشئ قوائم مؤقتة للدمج فمساحته O(n). وهنا تظهر مقايضة أساسية: قد تشتري سرعة أعلى بذاكرة أكبر، والاختيار بينهما يتبع القيد الأشد في مشروعك.',
        details_en: 'Complexity is not only about time; memory counts too: space complexity measures the extra memory an algorithm needs beyond the input itself. Insertion sort works inside the list and needs only a few variables, so its space is O(1), while merge sort creates temporary lists for merging, so its space is O(n). Here a core trade-off appears: you may buy speed with memory, and the choice follows whichever constraint binds hardest in your project.',
        visual: 'space_complexity',
        code: '# O(1) مساحة — يعمل داخل القائمة نفسها\ndef swap_ends(arr):\n    arr[0], arr[-1] = arr[-1], arr[0]\n    return arr        # لم ننشئ قائمة جديدة\n\n# O(n) مساحة — ينشئ قائمة بحجم المدخل\ndef doubled(arr):\n    result = []\n    for x in arr:\n        result.append(x * 2)\n    return result',
        level: 5
      },
      {
        t_ar: 'اختيار الخوارزمية المناسبة',
        t_en: 'Choosing the Right Algorithm',
        details_ar: 'لا توجد خوارزمية أفضل مطلقاً، وإنما أفضل لحالة بعينها، والاختيار يتبع ثلاثة: حجم البيانات، فعلى عشرة عناصر لا يفرق شيء وعلى مليون يفرق كل شيء؛ وحالتها الابتدائية، فالقائمة شبه المرتبة تناسبها خوارزمية الإدراج؛ وقيود الذاكرة، فإن كانت ضيقة استُبعد ما يحتاج مساحة إضافية. وقبل هذا كله: لا تحسّن ما لم تقس، فالتحسين قبل القياس يعقّد الكود بلا فائدة مثبتة.',
        details_en: 'No algorithm is best absolutely, only best for a case, and the choice follows three factors: data size, since on ten elements nothing differs and on a million everything does; its initial state, since a nearly sorted list suits insertion sort; and memory constraints, which rule out anything needing extra space when memory is tight. Above all: do not optimise what you have not measured, since optimising before measuring complicates code with no proven gain.',
        visual: 'algo_choice',
        code: '# الحالة                     │ الاختيار المناسب\n# ───────────────────────────┼──────────────────\n# قائمة صغيرة (أقل من 20)     │ أي خوارزمية بسيطة\n# قائمة شبه مرتبة            │ الإدراج\n# قائمة كبيرة، الذاكرة متاحة  │ الدمج\n# قائمة كبيرة، الذاكرة ضيقة   │ السريع\n# بحث متكرر في قائمة ثابتة    │ رتّبها مرة ثم البحث الثنائي',
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
