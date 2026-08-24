/**
 * Masar Platform — Database Seed Script
 * Seeds: Tracks, Sections, Levels, 300+ Questions, Lessons
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

// ─── Helper ───────────────────────────────────────────────────────────────────
const j = (arr) => JSON.stringify(arr);

// ─── Tracks Data ─────────────────────────────────────────────────────────────
const TRACKS = [
  {
    id: 'Programming',
    name: 'Programming',
    name_ar: 'البرمجة',
    color: '#0d9488',
    slogan: 'Building robust systems from abstract thoughts.',
    slogan_ar: 'بناء أنظمة برمجية متينة من أفكار مجردة.',
    desc: 'Full software development lifecycle from requirements to deployment.',
    desc_ar: 'دورة حياة تطوير البرمجيات كاملة من المتطلبات إلى النشر.',
  },
  {
    id: 'ArtificialIntelligence',
    name: 'Artificial Intelligence',
    name_ar: 'الذكاء الاصطناعي',
    color: '#a855f7',
    slogan: 'Simulating neural pathways to evolve technology.',
    slogan_ar: 'محاكاة المسارات العصبية لتطوير التكنولوجيا.',
    desc: 'Machine learning, deep learning, and data science foundations.',
    desc_ar: 'أساسيات تعلم الآلة والتعلم العميق وعلوم البيانات.',
  },
  {
    id: 'CyberSecurity',
    name: 'Cyber Security',
    name_ar: 'الأمن السيبراني',
    color: '#ef4444',
    slogan: 'Protecting the digital frontier.',
    slogan_ar: 'حماية الحدود الرقمية.',
    desc: 'Defense and offense techniques in the digital landscape.',
    desc_ar: 'تقنيات الدفاع والهجوم في المشهد الرقمي.',
  },
  {
    id: 'Networking',
    name: 'Networking',
    name_ar: 'الشبكات',
    color: '#3b82f6',
    slogan: 'Connecting the world through neural infrastructures.',
    slogan_ar: 'ربط العالم من خلال البنى التحتية العصبية.',
    desc: 'Design, implement and secure modern network infrastructures.',
    desc_ar: 'تصميم وتنفيذ وتأمين البنى التحتية للشبكات الحديثة.',
  },
  {
    id: 'FinTech',
    name: 'Digital Finance',
    name_ar: 'المالية الرقمية',
    color: '#38bdf8',
    slogan: 'Decoding the future of decentralized economy.',
    slogan_ar: 'فك تشفير مستقبل الاقتصاد اللامركزي.',
    desc: 'Financial analysis, corporate investment strategies, and modern accounting.',
    desc_ar: 'التحليل المالي واستراتيجيات الاستثمار والممارسات المحاسبية الحديثة.',
  },
];

// ─── SE Sections ─────────────────────────────────────────────────────────────
const SE_SECTIONS = [
  {
    index: 0,
    title: 'Programming Fundamentals',
    title_ar: 'أساسيات البرمجة',
    desc: 'Core programming concepts from variables to debugging.',
    desc_ar: 'المفاهيم البرمجية الأساسية من المتغيرات حتى تصحيح الأخطاء.',
  },
  {
    index: 1,
    title: 'Advanced Data Structures',
    title_ar: 'هياكل البيانات المتقدمة',
    desc: 'Analysis and application of complex data structures.',
    desc_ar: 'تحليل وتطبيق هياكل البيانات المعقدة لتحسين الأداء.',
  },
  {
    index: 2,
    title: 'Algorithms and Complexity',
    title_ar: 'الخوارزميات والتعقيد الزمني',
    desc: 'Big O, sorting, and search algorithms.',
    desc_ar: 'فهم تحليل Big O وخوارزميات الفرز والبحث المتقدمة.',
  },
  {
    index: 3,
    title: 'System Design and Architecture',
    title_ar: 'هندسة النظم والمعمارية',
    desc: 'Distributed systems and microservices.',
    desc_ar: 'تصميم الأنظمة الموزعة وأنماط التصميم SOLID.',
  },
  {
    index: 4,
    title: 'Database Management',
    title_ar: 'إدارة قواعد البيانات',
    desc: 'Relational and Non-Relational DB design and optimization.',
    desc_ar: 'تصميم قواعد البيانات العلائقية وغير العلائقية.',
  },
  {
    index: 5,
    title: 'Testing and Quality Assurance',
    title_ar: 'الاختبار وضمان الجودة',
    desc: 'TDD, integration testing, and CI/CD tools.',
    desc_ar: 'منهجيات الاختبار الآلي وأدوات CI/CD.',
  },
  {
    index: 6,
    title: 'Cloud Application Development',
    title_ar: 'تطوير التطبيقات السحابية',
    desc: 'Docker and Kubernetes on global platforms.',
    desc_ar: 'نشر وإدارة التطبيقات باستخدام Docker وKubernetes.',
  },
];

// ─── SE Section 0 — 5 Levels ─────────────────────────────────────────────────
const SE0_LEVELS = [
  {
    number: 1,
    title: 'What is Programming?',
    title_ar: 'ما هي البرمجة؟',
    topics: j(['Variables', 'Data Types', 'Code Basics', 'Memory', 'Syntax']),
  },
  {
    number: 2,
    title: 'Logic & Control Flow',
    title_ar: 'المنطق والتحكم في التدفق',
    topics: j(['Operators', 'Input/Output', 'if/else', 'Conditions', 'Boolean Logic']),
  },
  {
    number: 3,
    title: 'Loops & Iteration',
    title_ar: 'الحلقات والتكرار',
    topics: j(['for loops', 'while loops', 'Code Reading', 'Output Prediction', 'Error Spotting']),
  },
  {
    number: 4,
    title: 'Functions & Scope',
    title_ar: 'الدوال والنطاق',
    topics: j(['Functions', 'Parameters', 'Return Values', 'Scope', 'Concept Combining']),
  },
  {
    number: 5,
    title: 'Debugging & Problem Solving',
    title_ar: 'تصحيح الأخطاء وحل المشاكل',
    topics: j(['Debugging', 'Code Analysis', 'Real Scenarios', 'Best Practices', 'Programming Mindset']),
  },
];

// ─── Questions: Level 1 (60 questions) ───────────────────────────────────────
const LEVEL1_QUESTIONS = [
  // --- Conceptual: What is Programming ---
  { type: 'mcq', q_ar: 'ما هي البرمجة؟', q_en: 'What is programming?', options_ar: j(['لعبة كمبيوتر', 'إعطاء الحاسوب تعليمات محددة لحل مشكلة أو تنفيذ مهمة', 'نوع من أنواع الرياضيات', 'جهاز إلكتروني']), options_en: j(['A computer game', 'Giving the computer specific instructions to solve a problem or perform a task', 'A type of mathematics', 'An electronic device']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'ماذا يسمى الشخص الذي يكتب الكود؟', q_en: 'What is a person who writes code called?', options_ar: j(['محاسب', 'مبرمج (Programmer)', 'مهندس ميكانيكي', 'طبيب']), options_en: j(['Accountant', 'Programmer', 'Mechanical Engineer', 'Doctor']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'true_false', q_ar: 'صح أم خطأ: الكمبيوتر يمكنه فهم اللغة البشرية مباشرةً دون أي ترجمة.', q_en: 'True or False: A computer can understand human language directly without any translation.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'ما الفرق بين الكود المصدري (Source Code) والبرنامج المُنفَّذ؟', q_en: 'What is the difference between Source Code and an Executed Program?', options_ar: j(['لا فرق بينهما', 'الكود المصدري هو ما يكتبه المبرمج، والبرنامج المُنفَّذ هو النتيجة بعد الترجمة', 'البرنامج المُنفَّذ هو ما يكتبه المبرمج', 'الكود المصدري هو مجلد الملفات فقط']), options_en: j(['No difference', 'Source code is what the programmer writes; the executed program is the result after compilation', 'The executed program is what the programmer writes', 'Source code is just a folder of files']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'mcq', q_ar: 'أيٌّ مما يلي مثال على لغة برمجة؟', q_en: 'Which of the following is an example of a programming language?', options_ar: j(['HTML', 'Python', 'كلاهما لغات برمجة', 'لا شيء مما ذكر']), options_en: j(['HTML', 'Python', 'Both are programming languages', 'None of the above']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'scenario', q_ar: 'تريد بناء تطبيق يحسب فاتورة مطعم. ما الخطوة الأولى كمبرمج؟', q_en: 'You want to build an app to calculate a restaurant bill. What is the first step as a programmer?', options_ar: j(['كتابة الكود مباشرةً', 'تحليل المشكلة وتحديد المدخلات والمخرجات المطلوبة', 'شراء جهاز كمبيوتر جديد', 'البحث في الإنترنت فقط']), options_en: j(['Write code immediately', 'Analyze the problem and define required inputs and outputs', 'Buy a new computer', 'Only search the internet']), answer: 1, difficulty: 'medium', lang: 'general' },

  // --- Variables ---
  { type: 'mcq', q_ar: 'ما هو المتغير (Variable) في البرمجة؟', q_en: 'What is a Variable in programming?', options_ar: j(['نوع من الدوال البرمجية', 'عنوان بريد إلكتروني', 'مساحة محجوزة في الذاكرة لتخزين البيانات باسم محدد', 'جهاز داخل الحاسوب']), options_en: j(['A type of function', 'An email address', 'A reserved space in memory to store data with a specific name', 'A hardware device']), answer: 2, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما قيمة المتغير y بعد تشغيل هذا الكود؟', q_en: 'What is the value of y after running this code?', code: 'x = 5\ny = x + 3\nx = 10', options_ar: j(['8', '13', '5', '10']), options_en: j(['8', '13', '5', '10']), answer: 0, difficulty: 'hard', lang: 'python' },
  { type: 'true_false', q_ar: 'صح أم خطأ: يمكن تغيير قيمة المتغير بعد تعريفه في معظم لغات البرمجة.', q_en: 'True or False: A variable\'s value can be changed after declaration in most languages.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'أيٌّ من أسماء المتغيرات التالية صحيح في معظم لغات البرمجة؟', q_en: 'Which of the following is a valid variable name in most languages?', options_ar: j(['2user_name', 'user-name', 'user_name', 'user name']), options_en: j(['2user_name', 'user-name', 'user_name', 'user name']), answer: 2, difficulty: 'medium', lang: 'general' },
  { type: 'bug_find', q_ar: 'ما المشكلة في تعريف المتغير التالي؟', q_en: 'What is wrong with this variable declaration?', code: 'int 2score = 10;', options_ar: j(['لا توجد مشكلة', 'اسم المتغير يبدأ برقم وهذا غير مسموح', 'نوع البيانات خاطئ', 'القيمة خاطئة']), options_en: j(['No problem', 'Variable name starts with a number which is not allowed', 'Wrong data type', 'Wrong value']), answer: 1, difficulty: 'medium', lang: 'java' },
  { type: 'code_output', q_ar: 'ماذا يطبع هذا الكود؟', q_en: 'What does this code print?', code: 'name = "Masar"\nprint(name)\nname = "مسار"\nprint(name)', options_ar: j(['Masar\nMasar', 'مسار\nمسار', 'Masar\nمسار', 'خطأ']), options_en: j(['Masar\nMasar', 'مسار\nمسار', 'Masar\nمسار', 'Error']), answer: 2, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'لماذا نستخدم أسماء وصفية للمتغيرات مثل (totalPrice) بدلاً من (x)؟', q_en: 'Why use descriptive names like totalPrice instead of x?', options_ar: j(['لأن الحاسوب يفهمها أسرع', 'لجعل الكود مقروءاً وسهل الصيانة من قِبل أي مبرمج', 'لتوفير مساحة في الذاكرة', 'لا فرق بينهما']), options_en: j(['Computer understands them faster', 'Makes code readable and maintainable by any programmer', 'Saves memory space', 'No difference']), answer: 1, difficulty: 'easy', lang: 'general' },

  // --- Data Types ---
  { type: 'mcq', q_ar: 'ما نوع البيانات المناسب لتخزين العمر (مثال: 25)؟', q_en: 'What data type is best for storing age (e.g., 25)?', options_ar: j(['String', 'Float', 'Boolean', 'Integer']), options_en: j(['String', 'Float', 'Boolean', 'Integer']), answer: 3, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'ما نوع البيانات المناسب لتخزين السعر (مثال: 9.99)؟', q_en: 'What data type is appropriate for a price like 9.99?', options_ar: j(['Integer', 'Float', 'Boolean', 'String']), options_en: j(['Integer', 'Float', 'Boolean', 'String']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'أيٌّ من القيم التالية هي من نوع Boolean؟', q_en: 'Which of the following is a Boolean value?', options_ar: j(['"مرحبا"', '3.14', 'True', '42']), options_en: j(['"Hello"', '3.14', 'True', '42']), answer: 2, difficulty: 'easy', lang: 'general' },
  { type: 'true_false', q_ar: 'صح أم خطأ: النص "123" والرقم 123 هما نوع بيانات واحد.', q_en: 'True or False: The string "123" and the number 123 are the same data type.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما نوع البيانات للمتغير x في الكود التالي؟', q_en: 'What is the data type of x in this code?', code: 'x = "Hello World"', options_ar: j(['Integer', 'Float', 'String', 'Boolean']), options_en: j(['Integer', 'Float', 'String', 'Boolean']), answer: 2, difficulty: 'easy', lang: 'python' },
  { type: 'mcq', q_ar: 'ما نوع البيانات المناسب لتخزين حالة "هل المستخدم مسجل دخول؟"', q_en: 'What data type stores "Is the user logged in?" status?', options_ar: j(['String', 'Integer', 'Boolean', 'Float']), options_en: j(['String', 'Integer', 'Boolean', 'Float']), answer: 2, difficulty: 'easy', lang: 'general' },
  { type: 'scenario', q_ar: 'تبني برنامج لتسجيل بيانات طالب. أيٌّ من الأنواع التالية ستستخدم لتخزين اسمه؟', q_en: 'Building a student record app. Which type stores the student name?', options_ar: j(['Integer', 'Boolean', 'String', 'Float']), options_en: j(['Integer', 'Boolean', 'String', 'Float']), answer: 2, difficulty: 'easy', lang: 'general' },

  // --- Memory & How Computers Work ---
  { type: 'mcq', q_ar: 'أين يتم تخزين المتغيرات أثناء تشغيل البرنامج؟', q_en: 'Where are variables stored during program execution?', options_ar: j(['على القرص الصلب (Hard Drive)', 'في ذاكرة الوصول العشوائي (RAM)', 'على الإنترنت', 'في وحدة المعالجة المركزية CPU']), options_en: j(['On the Hard Drive', 'In RAM (Random Access Memory)', 'On the internet', 'In the CPU']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'true_false', q_ar: 'صح أم خطأ: بيانات المتغيرات في RAM تُفقد عند إغلاق البرنامج.', q_en: 'True or False: Variable data in RAM is lost when the program closes.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'medium', lang: 'general' },
  { type: 'mcq', q_ar: 'ما الذي يفعله المُفسِّر (Interpreter) في لغات مثل Python؟', q_en: 'What does an Interpreter do in languages like Python?', options_ar: j(['يحول الكود لملف PDF', 'يترجم ويُنفِّذ الكود سطراً بسطر مباشرةً', 'يصمم واجهة المستخدم', 'يحفظ الكود على الإنترنت']), options_en: j(['Converts code to PDF', 'Translates and executes code line-by-line directly', 'Designs the user interface', 'Saves code to the internet']), answer: 1, difficulty: 'medium', lang: 'general' },

  // --- Syntax & Code Structure ---
  { type: 'mcq', q_ar: 'ما هو خطأ البناء (Syntax Error)؟', q_en: 'What is a Syntax Error?', options_ar: j(['خطأ في منطق البرنامج', 'خطأ في إملاء وقواعد اللغة يمنع المفسر من تشغيل الكود', 'توقف الخادم', 'نفاد ذاكرة RAM']), options_en: j(['Logic error', 'Grammatical error preventing the interpreter from running the code', 'Server crash', 'RAM overflow']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'bug_find', q_ar: 'ما الخطأ في هذا الكود؟', q_en: 'What is wrong with this code?', code: 'print("Hello World"', options_ar: j(['الكود صحيح تماماً', 'القوس المغلق ناقص ")"', 'خطأ في كلمة print', 'يجب استخدام مزدوجة "Hello"']), options_en: j(['Code is correct', 'Missing closing parenthesis ")"', 'Error in the word print', 'Must use single quotes']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'mcq', q_ar: 'كيف ينفذ الحاسوب أوامر برنامجك؟', q_en: 'How does the computer execute your program instructions?', options_ar: j(['من الأسفل إلى الأعلى', 'بشكل عشوائي', 'من الأعلى إلى الأسفل سطراً بعد سطر بالترتيب', 'كل السطور في نفس الوقت']), options_en: j(['Bottom to top', 'Randomly', 'Top to bottom line-by-line in order', 'All lines simultaneously']), answer: 2, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'ما أهمية المسافات البادئة (Indentation) في Python؟', q_en: 'Why is Indentation important in Python?', options_ar: j(['للزينة فقط', 'جزء من قواعد اللغة لتحديد الكتل البرمجية', 'لتسريع الكود', 'لا أهمية لها']), options_en: j(['Just for decoration', 'Part of language rules to define code blocks', 'To speed up code', 'Not important']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'bug_find', q_ar: 'أيٌّ من الكودَين التاليَين يحتوي على خطأ في البادئة؟', q_en: 'Which of these code blocks has an indentation error?', code: 'A:\nif True:\n    print("OK")\n\nB:\nif True:\nprint("OK")', options_ar: j(['الكود A', 'الكود B', 'كلاهما صحيح', 'كلاهما خاطئ']), options_en: j(['Code A', 'Code B', 'Both are correct', 'Both are wrong']), answer: 1, difficulty: 'hard', lang: 'python' },

  // --- Comments ---
  { type: 'mcq', q_ar: 'ما هو التعليق (Comment) في الكود؟', q_en: 'What is a Comment in code?', options_ar: j(['كود يُنفَّذ بسرعة عالية', 'سطر للمبرمج يتجاهله المُفسِّر أثناء التشغيل', 'رسالة خطأ للمستخدم', 'طريقة لتعريف متغير']), options_en: j(['Code executed at high speed', 'A line for the developer, ignored by the interpreter', 'An error message to the user', 'A way to define a variable']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'ما الرمز المستخدم للتعليق في Python؟', q_en: 'Which symbol is used for comments in Python?', options_ar: j(['//', '/*', '#', '--']), options_en: j(['//', '/*', '#', '--']), answer: 2, difficulty: 'easy', lang: 'python' },
  { type: 'best_practice', q_ar: 'أيٌّ من التعليقات التالية أفضل ممارسة؟', q_en: 'Which of the following is the best comment practice?', code: '# A:\n# x = x + 1  # زيادة x بمقدار 1\n\n# B:\n# x = x + 1  # هذا السطر يزيد المتغير x بواحد لأن المبرمج قرر ذلك', options_ar: j(['A: تعليق موجز ومفيد', 'B: تعليق مطول وواضح', 'لا يوجد فرق', 'لا يجب كتابة تعليقات أبداً']), options_en: j(['A: Concise and useful comment', 'B: Detailed and clear comment', 'No difference', 'Never write comments']), answer: 0, difficulty: 'medium', lang: 'python' },

  // --- Input / Output Basic ---
  { type: 'mcq', q_ar: 'ما الدالة المستخدمة لعرض نتيجة على الشاشة في Python؟', q_en: 'Which function displays output on screen in Python?', options_ar: j(['input()', 'print()', 'read()', 'write()']), options_en: j(['input()', 'print()', 'read()', 'write()']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'code_output', q_ar: 'ماذا يطبع الكود التالي؟', q_en: 'What does this code print?', code: 'print("مسار")\nprint(2 + 3)', options_ar: j(['مسار\n5', '5\nمسار', 'مسار5', 'خطأ']), options_en: j(['مسار\n5', '5\nمسار', 'مسار5', 'Error']), answer: 0, difficulty: 'easy', lang: 'python' },
  { type: 'mcq', q_ar: 'ما نوع البيانات الذي تُرجعه دالة input() في Python دائماً؟', q_en: 'What data type does Python\'s input() always return?', options_ar: j(['Integer', 'Float', 'String', 'Boolean']), options_en: j(['Integer', 'Float', 'String', 'Boolean']), answer: 2, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'كيف نحول المدخل النصي "25" إلى رقم صحيح في Python؟', q_en: 'How do we convert string input "25" to an integer in Python?', options_ar: j(['convert("25")', 'int("25")', 'str("25")', 'toNum("25")']), options_en: j(['convert("25")', 'int("25")', 'str("25")', 'toNum("25")']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'bug_find', q_ar: 'ما المشكلة في هذا الكود الذي يجمع رقمين من المستخدم؟', q_en: 'What is the bug in this code that sums two numbers from the user?', code: 'a = input("Enter first: ")\nb = input("Enter second: ")\nprint(a + b)', options_ar: j(['لا توجد مشكلة', 'سيدمج النصين (مثلاً 5 و 3 يصير "53" وليس 8)', 'خطأ في اسم الدالة input', 'يجب استخدام read() بدلاً من input()']), options_en: j(['No problem', 'Will concatenate strings (e.g., 5 and 3 becomes "53" not 8)', 'Error in function name input', 'Must use read() instead of input()']), answer: 1, difficulty: 'hard', lang: 'python' },

  // --- Lists intro ---
  { type: 'mcq', q_ar: 'ما هي القائمة (List) في البرمجة؟', q_en: 'What is a List in programming?', options_ar: j(['متغير واحد يخزن قيمة واحدة', 'مجموعة من القيم تُخزَّن في متغير واحد بترتيب محدد', 'نوع من الشروط', 'دالة تطبع النتائج']), options_en: j(['Single variable with one value', 'A collection of values stored in one variable in order', 'A type of condition', 'Function that prints results']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'في معظم لغات البرمجة، ما فهرس أول عنصر في القائمة؟', q_en: 'In most languages, what is the index of the first list element?', options_ar: j(['1', '-1', '0', 'لا يوجد فهرس']), options_en: j(['1', '-1', '0', 'No index']), answer: 2, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما مخرجات هذا الكود؟', q_en: 'What is the output of this code?', code: 'fruits = ["apple", "banana", "mango"]\nprint(fruits[1])', options_ar: j(['apple', 'banana', 'mango', 'خطأ']), options_en: j(['apple', 'banana', 'mango', 'Error']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'كيف تضيف عنصراً لنهاية قائمة في Python؟', q_en: 'How do you add an element to the end of a Python list?', options_ar: j(['list.add()', 'list.append()', 'list.insert(0, x)', 'list.push()']), options_en: j(['list.add()', 'list.append()', 'list.insert(0, x)', 'list.push()']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'code_output', q_ar: 'ما طول هذه القائمة؟', q_en: 'What is the length of this list?', code: 'items = [10, 20, 30, 40, 50]\nprint(len(items))', options_ar: j(['4', '5', '50', 'خطأ']), options_en: j(['4', '5', '50', 'Error']), answer: 1, difficulty: 'easy', lang: 'python' },

  // --- Naming Conventions ---
  { type: 'best_practice', q_ar: 'أيٌّ من الأسلوبَين التاليَين أفضل لتسمية المتغيرات؟', q_en: 'Which naming style is better for variables?', options_ar: j(['camelCase مثل: totalPrice', 'snake_case مثل: total_price', 'كلاهما جيد حسب اللغة المستخدمة', 'الأحرف الكبيرة دائماً']), options_en: j(['camelCase like: totalPrice', 'snake_case like: total_price', 'Both are fine depending on the language', 'Always uppercase']), answer: 2, difficulty: 'medium', lang: 'general' },
  { type: 'true_false', q_ar: 'صح أم خطأ: يمكن تسمية متغير بكلمة محجوزة مثل "if" أو "for".', q_en: 'True or False: You can name a variable with a reserved keyword like "if" or "for".', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 1, difficulty: 'medium', lang: 'general' },

  // --- Clean Code ---
  { type: 'best_practice', q_ar: 'أيٌّ من الكودَين التاليَين يعكس مبدأ الكود النظيف؟', q_en: 'Which code reflects the Clean Code principle?', code: 'A: def f(a,b): return a*b+a\nB: def calculate_total(price, qty):\n    return price * qty', options_ar: j(['الكود A أفضل لأنه أقصر', 'الكود B أفضل لأنه أوضح وأسهل للفهم', 'كلاهما متساوٍ', 'لا يوجد فرق في الأداء']), options_en: j(['Code A is better because it\'s shorter', 'Code B is better because it\'s clearer and easier to understand', 'Both are equal', 'No performance difference']), answer: 1, difficulty: 'medium', lang: 'python' },

  // --- More conceptual ---
  { type: 'mcq', q_ar: 'ما معنى كلمة "Algorithm" (خوارزمية)؟', q_en: 'What does "Algorithm" mean?', options_ar: j(['نوع من أجهزة الحاسوب', 'سلسلة محددة من الخطوات لحل مشكلة معينة', 'لغة برمجة قديمة', 'قاعدة بيانات']), options_en: j(['A type of computer hardware', 'A specific sequence of steps to solve a particular problem', 'An old programming language', 'A database']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'true_false', q_ar: 'صح أم خطأ: الخوارزمية الجيدة يجب أن تنتهي في عدد محدود من الخطوات.', q_en: 'True or False: A good algorithm must terminate in a finite number of steps.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'medium', lang: 'general' },
  { type: 'mcq', q_ar: 'ما الفرق بين الخطأ المنطقي (Logic Error) وخطأ البناء (Syntax Error)؟', q_en: 'What is the difference between a Logic Error and a Syntax Error?', options_ar: j(['لا فرق بينهما', 'خطأ البناء يمنع الكود من التشغيل، أما الخطأ المنطقي فالكود يعمل لكن بنتيجة خاطئة', 'الخطأ المنطقي أسهل إصلاحاً', 'خطأ البناء يسبب نتائج خاطئة']), options_en: j(['No difference', 'Syntax Error prevents code from running; Logic Error runs but gives wrong results', 'Logic Error is easier to fix', 'Syntax Error causes wrong results']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'mcq', q_ar: 'إذا كان برنامجك يعمل لكن يعطي نتيجة خاطئة، ما نوع الخطأ الأرجح؟', q_en: 'If your program runs but gives wrong results, what type of error is most likely?', options_ar: j(['Syntax Error', 'Runtime Error', 'Logic Error', 'لا يوجد خطأ']), options_en: j(['Syntax Error', 'Runtime Error', 'Logic Error', 'No error']), answer: 2, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'ما أفضل خطوة أولى عند ظهور رسالة خطأ؟', q_en: 'What is the best first step when an error message appears?', options_ar: j(['إغلاق البرنامج وإعادة فتحه', 'قراءة رسالة الخطأ بتأنٍّ وفهم ما تقوله', 'حذف الكود كله والبدء من جديد', 'تجاهل الخطأ']), options_en: j(['Close and reopen the program', 'Read the error message carefully and understand it', 'Delete all code and start over', 'Ignore the error']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output of this code?', code: 'x = 10\ny = 3\nprint(x % y)', options_ar: j(['3', '3.33', '1', '13']), options_en: j(['3', '3.33', '1', '13']), answer: 2, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما الذي يفعله عامل القسمة الكاملة // في Python؟', q_en: 'What does the // floor division operator do in Python?', options_ar: j(['يقسم ويعيد الناتج العشري', 'يقسم ويعيد أكبر عدد صحيح أصغر من أو يساوي الناتج', 'يعيد باقي القسمة', 'يرفع رقم لقوة']), options_en: j(['Divides and returns decimal result', 'Divides and returns the largest integer ≤ result', 'Returns the remainder', 'Raises to a power']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'scenario', q_ar: 'مبرمج يكتب كوداً لحساب متوسط درجات الطلاب. ما أنسب نوع بيانات للناتج؟', q_en: 'A programmer writes code to calculate student grade average. What data type suits the result?', options_ar: j(['Boolean', 'String', 'Float', 'List']), options_en: j(['Boolean', 'String', 'Float', 'List']), answer: 2, difficulty: 'medium', lang: 'general' },
  { type: 'mcq', q_ar: 'ما الناتج عند طباعة نوع البيانات التالي في Python؟', q_en: 'What is the result of printing the type of this value in Python?', code: 'print(type(3.14))', options_ar: j(["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"]), options_en: j(["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"]), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'true_false', q_ar: 'صح أم خطأ: في Python يمكن للمتغير أن يغير نوعه في أي وقت.', q_en: 'True or False: In Python, a variable can change its type at any time.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What does this code output?', code: 'x = "5"\ny = "3"\nprint(x + y)', options_ar: j(['8', '"8"', '53', '"53"']), options_en: j(['8', '"8"', '53', '"53"']), answer: 2, difficulty: 'hard', lang: 'python' },
  { type: 'mcq', q_ar: 'كيف تحذف عنصراً من قائمة Python بناءً على قيمته؟', q_en: 'How do you remove an element from a Python list by its value?', options_ar: j(['list.delete(value)', 'list.remove(value)', 'del list[value]', 'list.pop(value)']), options_en: j(['list.delete(value)', 'list.remove(value)', 'del list[value]', 'list.pop(value)']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما ناتج len("Hello") في Python؟', q_en: 'What is len("Hello") in Python?', options_ar: j(['4', '5', '6', 'خطأ']), options_en: j(['4', '5', '6', 'Error']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'true_false', q_ar: 'صح أم خطأ: الـ String في البرمجة هو تسلسل من الأحرف.', q_en: 'True or False: A String in programming is a sequence of characters.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'easy', lang: 'general' },
  { type: 'scenario', q_ar: 'تريد تخزين قائمة بأسماء 5 طلاب. أيٌّ من الخيارات التالية أكثر كفاءة؟', q_en: 'You want to store names of 5 students. Which approach is more efficient?', options_ar: j(['تعريف 5 متغيرات منفصلة: name1, name2...', 'تخزينهم في قائمة (List) واحدة', 'تخزينهم في متغير String واحد مفصولين بفواصل', 'لا فرق']), options_en: j(['Define 5 separate variables: name1, name2...', 'Store them in one List', 'Store in one String separated by commas', 'No difference']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What does this code output?', code: 'nums = [1, 2, 3]\nnums.append(4)\nprint(nums[-1])', options_ar: j(['1', '3', '4', 'خطأ']), options_en: j(['1', '3', '4', 'Error']), answer: 2, difficulty: 'medium', lang: 'python' },
];

// ─── Questions: Level 2 (60 questions) ───────────────────────────────────────
const LEVEL2_QUESTIONS = [
  // --- Operators ---
  { type: 'mcq', q_ar: 'ما نتيجة العملية: 10 - 2 * 3؟', q_en: 'What is the result of: 10 - 2 * 3?', options_ar: j(['24', '4', '8', '16']), options_en: j(['24', '4', '8', '16']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'mcq', q_ar: 'أيٌّ من المعاملات المنطقية يعيد True فقط إذا كان كلا الشرطين صحيحاً؟', q_en: 'Which logical operator returns True only if both conditions are True?', options_ar: j(['OR', 'NOT', 'AND', 'XOR']), options_en: j(['OR', 'NOT', 'AND', 'XOR']), answer: 2, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the result of this code?', code: 'a = 5\nb = 10\nprint(a < b)', options_ar: j(['True', 'False', 'None', '5']), options_en: j(['True', 'False', 'None', '5']), answer: 0, difficulty: 'easy', lang: 'python' },
  { type: 'code_output', q_ar: 'ما نتيجة هذا الكود؟', q_en: 'What is the result?', code: 'x = 5\ny = 5\nprint(x != y)', options_ar: j(['True', 'False', 'Error', '5']), options_en: j(['True', 'False', 'Error', '5']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما قيمة result؟', q_en: 'What is the value of result?', code: 'x = 12\nresult = (x > 10) and (x % 3 == 0)', options_ar: j(['True', 'False', '12', 'Error']), options_en: j(['True', 'False', '12', 'Error']), answer: 0, difficulty: 'hard', lang: 'python' },
  { type: 'mcq', q_ar: 'ما العامل المستخدم للحصول على باقي القسمة؟', q_en: 'Which operator gives the remainder of division?', options_ar: j(['/', '//', '%', '**']), options_en: j(['/', '//', '%', '**']), answer: 2, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج 2 ** 3 في Python؟', q_en: 'What is the result of 2 ** 3 in Python?', options_ar: j(['6', '8', '5', '9']), options_en: j(['6', '8', '5', '9']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'mcq', q_ar: 'ما ناتج NOT True في البرمجة؟', q_en: 'What is NOT True in programming?', options_ar: j(['True', 'False', 'None', 'Error']), options_en: j(['True', 'False', 'None', 'Error']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'x = 7\nprint(x > 5 or x < 3)', options_ar: j(['True', 'False', '7', 'Error']), options_en: j(['True', 'False', '7', 'Error']), answer: 0, difficulty: 'medium', lang: 'python' },
  { type: 'true_false', q_ar: 'صح أم خطأ: == يتحقق من تساوي القيمتين، بينما = يُعيِّن قيمة للمتغير.', q_en: 'True or False: == checks equality while = assigns a value.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'easy', lang: 'general' },

  // --- if / else ---
  { type: 'mcq', q_ar: 'ما الكلمة المفتاحية المستخدمة للشرط الأساسي في معظم لغات البرمجة؟', q_en: 'What keyword is used for the basic condition in most languages?', options_ar: j(['when', 'if', 'check', 'condition']), options_en: j(['when', 'if', 'check', 'condition']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ماذا يطبع هذا الكود إذا كانت x = 5؟', q_en: 'What does this code print if x = 5?', code: 'x = 5\nif x > 10:\n    print("كبير")\nelse:\n    print("صغير")', options_ar: j(['كبير', 'صغير', 'لا يطبع شيئاً', 'خطأ']), options_en: j(['كبير', 'صغير', 'Nothing', 'Error']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'score = 75\nif score >= 90:\n    print("Excellent")\nelif score >= 70:\n    print("Good")\nelse:\n    print("Try again")', options_ar: j(['Excellent', 'Good', 'Try again', 'خطأ']), options_en: j(['Excellent', 'Good', 'Try again', 'Error']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما الكلمة المفتاحية الإضافية لإضافة شرط آخر في Python؟', q_en: 'What keyword adds another condition branch in Python?', options_ar: j(['else if', 'elseif', 'elif', 'otherwise']), options_en: j(['else if', 'elseif', 'elif', 'otherwise']), answer: 2, difficulty: 'easy', lang: 'python' },
  { type: 'true_false', q_ar: 'صح أم خطأ: يمكن أن يكون لديك if بدون else.', q_en: 'True or False: You can have an if without an else.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج الكود إذا كان age = 17؟', q_en: 'What is the output if age = 17?', code: 'age = 17\nif age >= 18:\n    print("بالغ")\nelse:\n    print("قاصر")', options_ar: j(['بالغ', 'قاصر', 'لا شيء', 'خطأ']), options_en: j(['Adult', 'Minor', 'Nothing', 'Error']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'bug_find', q_ar: 'ما الخطأ في هذا الكود؟', q_en: 'What is wrong with this code?', code: 'x = 10\nif x > 5\n    print("كبير")', options_ar: j(['لا خطأ', 'نقطتان ":" ناقصتان بعد الشرط', 'print خاطئ', 'المقارنة خاطئة']), options_en: j(['No error', 'Missing colon ":" after the condition', 'print is wrong', 'Wrong comparison']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'scenario', q_ar: 'مبرمج يريد التحقق من أن الدرجة بين 60 و 100. أي شرط صحيح؟', q_en: 'A programmer wants to check that a grade is between 60 and 100. Which condition is correct?', options_ar: j(['if grade > 60', 'if grade >= 60 and grade <= 100', 'if grade >= 60 or grade <= 100', 'if grade == 60']), options_en: j(['if grade > 60', 'if grade >= 60 and grade <= 100', 'if grade >= 60 or grade <= 100', 'if grade == 60']), answer: 1, difficulty: 'medium', lang: 'python' },

  // --- Input/Output deeper ---
  { type: 'mcq', q_ar: 'في JavaScript، أيٌّ من الدوال التالية تعرض رسالة في المتصفح؟', q_en: 'In JavaScript, which function shows a message in the browser?', options_ar: j(['print()', 'console.log()', 'display()', 'output()']), options_en: j(['print()', 'console.log()', 'display()', 'output()']), answer: 1, difficulty: 'easy', lang: 'javascript' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود JavaScript؟', q_en: 'What is the output of this JavaScript code?', code: 'let x = 10;\nconsole.log(x > 5 ? "big" : "small");', options_ar: j(['big', 'small', '10', 'Error']), options_en: j(['big', 'small', '10', 'Error']), answer: 0, difficulty: 'medium', lang: 'javascript' },
  { type: 'mcq', q_ar: 'ما الفرق بين System.out.println() في Java و print() في Python؟', q_en: 'What is the difference between Java\'s System.out.println() and Python\'s print()?', options_ar: j(['لا فرق وظيفياً', 'Java تطبع مع سطر جديد تلقائياً، Python لها خيار end=', 'Python أسرع دائماً', 'Java لا تستطيع الطباعة']), options_en: j(['No functional difference', 'Java prints with newline by default, Python has end= option', 'Python is always faster', 'Java cannot print']), answer: 0, difficulty: 'hard', lang: 'java' },

  // --- Compound Conditions ---
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'logged_in = True\nhas_balance = False\nprint(logged_in and has_balance)', options_ar: j(['True', 'False', 'None', 'Error']), options_en: j(['True', 'False', 'None', 'Error']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'a = True\nb = False\nprint(a or b)', options_ar: j(['True', 'False', 'None', 'Error']), options_en: j(['True', 'False', 'None', 'Error']), answer: 0, difficulty: 'easy', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'x = 15\nif x % 2 == 0:\n    print("even")\nelse:\n    print("odd")', options_ar: j(['even', 'odd', '15', 'Error']), options_en: j(['even', 'odd', '15', 'Error']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'scenario', q_ar: 'نظام تسجيل دخول: المستخدم يدخل إذا كان اسمه "admin" وكلمة المرور "1234". أيٌّ من الشروط صحيح؟', q_en: 'Login system: user enters if username is "admin" AND password is "1234". Which condition is correct?', options_ar: j(['if name == "admin" or password == "1234"', 'if name == "admin" and password == "1234"', 'if name != "admin"', 'if password > 1234']), options_en: j(['if name == "admin" or password == "1234"', 'if name == "admin" and password == "1234"', 'if name != "admin"', 'if password > 1234']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما ناتج العبارة: not (5 > 3)?', q_en: 'What is the result of: not (5 > 3)?', options_ar: j(['True', 'False', '5', 'Error']), options_en: j(['True', 'False', '5', 'Error']), answer: 1, difficulty: 'medium', lang: 'python' },

  // --- Type Casting & Comparison ---
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'x = int("42")\nprint(x + 8)', options_ar: j(['428', '50', '"428"', 'Error']), options_en: j(['428', '50', '"428"', 'Error']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما الذي يحدث عند تنفيذ int("abc") في Python؟', q_en: 'What happens when you execute int("abc") in Python?', options_ar: j(['يعيد 0', 'يعيد None', 'يرمي ValueError', 'يعيد "abc"']), options_en: j(['Returns 0', 'Returns None', 'Raises ValueError', 'Returns "abc"']), answer: 2, difficulty: 'hard', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'print(str(100) + " students")', options_ar: j(['100 students', '"100 students"', 'Error', '100students']), options_en: j(['100 students', '"100 students"', 'Error', '100students']), answer: 0, difficulty: 'easy', lang: 'python' },

  // --- Practical Scenarios ---
  { type: 'scenario', q_ar: 'تكتب برنامج حاسبة. المستخدم أدخل "10" و "5". كيف تحسب مجموعهما كأرقام؟', q_en: 'Writing a calculator. User entered "10" and "5". How do you add them as numbers?', options_ar: j(['print("10" + "5")', 'print(int("10") + int("5"))', 'print("10" - "5")', 'لا يمكن ذلك']), options_en: j(['print("10" + "5")', 'print(int("10") + int("5"))', 'print("10" - "5")', 'Impossible']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'scenario', q_ar: 'تريد التحقق من أن رقم مدخل يقع بين 1 و 10. أيٌّ من الشروط التالية صحيح؟', q_en: 'You want to check a number is between 1 and 10. Which condition is correct?', options_ar: j(['if n > 0 or n < 11', 'if 1 <= n <= 10', 'if n == 1 or n == 10', 'if n > 1 and n < 9']), options_en: j(['if n > 0 or n < 11', 'if 1 <= n <= 10', 'if n == 1 or n == 10', 'if n > 1 and n < 9']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'best_practice', q_ar: 'مبرمج كتب: if temperature > 100 and temperature > 50. ما المشكلة؟', q_en: 'A programmer wrote: if temperature > 100 and temperature > 50. What is wrong?', options_ar: j(['لا مشكلة', 'الشرط الثاني زائد لأن > 100 يضمن بالفعل > 50', 'يجب استخدام or بدلاً من and', 'خطأ في بناء الجملة']), options_en: j(['No problem', 'Second condition is redundant since > 100 already implies > 50', 'Should use or instead of and', 'Syntax error']), answer: 1, difficulty: 'hard', lang: 'general' },

  // --- More operators and expressions ---
  { type: 'code_output', q_ar: 'ما ناتج هذه العبارة في Python؟', q_en: 'What is the result in Python?', code: 'print(10 // 3)', options_ar: j(['3.33', '3', '4', '1']), options_en: j(['3.33', '3', '4', '1']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'x = 5\nx += 3\nprint(x)', options_ar: j(['5', '3', '8', '53']), options_en: j(['5', '3', '8', '53']), answer: 2, difficulty: 'easy', lang: 'python' },
  { type: 'mcq', q_ar: 'ما معنى العامل += في البرمجة؟', q_en: 'What does the += operator mean?', options_ar: j(['مقارنة', 'طرح وتخزين', 'جمع القيمة الحالية مع الجديدة وتخزينها', 'قسمة']), options_en: j(['Comparison', 'Subtract and store', 'Add current value with new and store', 'Division']), answer: 2, difficulty: 'easy', lang: 'general' },
  { type: 'true_false', q_ar: 'صح أم خطأ: x = x + 1 و x += 1 متكافئتان تماماً.', q_en: 'True or False: x = x + 1 and x += 1 are exactly equivalent.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'a = 10\nb = 3\nprint(a // b, a % b)', options_ar: j(['3 1', '3.33 1', '4 1', '3 0']), options_en: j(['3 1', '3.33 1', '4 1', '3 0']), answer: 0, difficulty: 'medium', lang: 'python' },
  { type: 'scenario', q_ar: 'تريد معرفة إذا كان رقم زوجياً. أيٌّ من الشروط يستخدم؟', q_en: 'You want to check if a number is even. Which condition to use?', options_ar: j(['if n / 2 == 0', 'if n % 2 == 0', 'if n // 2 == 0', 'if n > 2']), options_en: j(['if n / 2 == 0', 'if n % 2 == 0', 'if n // 2 == 0', 'if n > 2']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'x = 100\nif x == 100:\n    if x > 50:\n        print("both true")', options_ar: j(['both true', 'لا شيء', 'خطأ', 'True']), options_en: j(['both true', 'Nothing', 'Error', 'True']), answer: 0, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'في JavaScript، كيف تتحقق من تساوي القيمة والنوع معاً؟', q_en: 'In JavaScript, how do you check both value AND type equality?', options_ar: j(['==', '===', '=', '>=']), options_en: j(['==', '===', '=', '>=']), answer: 1, difficulty: 'medium', lang: 'javascript' },
  { type: 'code_output', q_ar: 'ما ناتج الكود JavaScript؟', q_en: 'What is the output of this JavaScript code?', code: 'console.log(5 == "5");  // A\nconsole.log(5 === "5"); // B', options_ar: j(['A: true, B: false', 'A: false, B: true', 'A: true, B: true', 'A: false, B: false']), options_en: j(['A: true, B: false', 'A: false, B: true', 'A: true, B: true', 'A: false, B: false']), answer: 0, difficulty: 'hard', lang: 'javascript' },
  { type: 'best_practice', q_ar: 'أيٌّ من الطرق التالية أفضل لمقارنة قيمتين من نفس النوع؟', q_en: 'Which method is better for comparing values of the same type?', options_ar: j(['دائماً استخدم ==', 'دائماً استخدم ===', 'الأمر سيّان', 'استخدم >= دائماً']), options_en: j(['Always use ==', 'Always use ===', 'Does not matter', 'Always use >=']), answer: 1, difficulty: 'medium', lang: 'javascript' },
  { type: 'true_false', q_ar: 'صح أم خطأ: يمكن تداخل شروط if داخل بعضها البعض (nested if).', q_en: 'True or False: if conditions can be nested inside each other.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'easy', lang: 'general' },
  { type: 'scenario', q_ar: 'متجر يعطي خصم 20% للطلاب وخصم 15% لكبار السن. المستخدم طالب وكبير في السن. ما الخصم النهائي إذا كان النظام يطبق الخصمَين؟', q_en: 'A store gives 20% to students and 15% to seniors. User is both. What is the final discount if both apply?', options_ar: j(['20%', '15%', '35%', 'لا خصم']), options_en: j(['20%', '15%', '35%', 'No discount']), answer: 2, difficulty: 'hard', lang: 'general' },
];

// ─── Questions: Level 3 (60 questions) ───────────────────────────────────────
const LEVEL3_QUESTIONS = [
  // --- for loops ---
  { type: 'mcq', q_ar: 'ما الغرض من حلقة التكرار (Loop) في البرمجة؟', q_en: 'What is the purpose of a Loop in programming?', options_ar: j(['تعريف متغيرات', 'تكرار كتلة من الكود عدداً محدداً من المرات أو حتى تحقق شرط', 'طباعة نتيجة مرة واحدة', 'تعريف دالة']), options_en: j(['Define variables', 'Repeat a code block a specific number of times or until a condition', 'Print result once', 'Define a function']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'for i in range(3):\n    print(i)', options_ar: j(['1 2 3', '0 1 2', '0 1 2 3', '1 2']), options_en: j(['1 2 3', '0 1 2', '0 1 2 3', '1 2']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'code_output', q_ar: 'ماذا يطبع هذا الكود؟', q_en: 'What does this code print?', code: 'total = 0\nfor i in range(1, 4):\n    total += i\nprint(total)', options_ar: j(['3', '6', '10', '0']), options_en: j(['3', '6', '10', '0']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما نطاق range(2, 8, 2) في Python؟', q_en: 'What values does range(2, 8, 2) generate in Python?', options_ar: j(['2, 4, 6, 8', '2, 4, 6', '1, 3, 5, 7', '0, 2, 4, 6']), options_en: j(['2, 4, 6, 8', '2, 4, 6', '1, 3, 5, 7', '0, 2, 4, 6']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'fruits = ["apple", "banana", "cherry"]\nfor f in fruits:\n    print(f)', options_ar: j(['apple banana cherry (في سطر واحد)', 'apple\nbanana\ncherry', 'fruits\nfruits\nfruits', 'خطأ']), options_en: j(['apple banana cherry (one line)', 'apple\nbanana\ncherry', 'fruits\nfruits\nfruits', 'Error']), answer: 1, difficulty: 'easy', lang: 'python' },

  // --- while loops ---
  { type: 'mcq', q_ar: 'متى تُستخدم حلقة while بدلاً من for؟', q_en: 'When do you use a while loop instead of a for loop?', options_ar: j(['عندما تعرف عدد التكرارات مسبقاً', 'عندما لا تعرف عدد التكرارات وتريد الاستمرار حتى شرط', 'دائماً', 'أبداً']), options_en: j(['When you know the number of iterations', 'When you don\'t know iterations and want to continue until a condition', 'Always', 'Never']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'x = 0\nwhile x < 3:\n    print(x)\n    x += 1', options_ar: j(['0\n1\n2\n3', '0\n1\n2', '1\n2\n3', 'حلقة لانهائية']), options_en: j(['0\n1\n2\n3', '0\n1\n2', '1\n2\n3', 'Infinite loop']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'bug_find', q_ar: 'ما المشكلة في هذا الكود؟', q_en: 'What is the problem with this code?', code: 'x = 0\nwhile x < 5:\n    print(x)', options_ar: j(['لا مشكلة', 'حلقة لا نهائية لأن x لا تتغير', 'الشرط خاطئ', 'print خاطئ']), options_en: j(['No problem', 'Infinite loop because x never changes', 'Wrong condition', 'Wrong print']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما الذي تفعله كلمة break داخل حلقة؟', q_en: 'What does the break statement do inside a loop?', options_ar: j(['تتخطى التكرار الحالي فقط', 'تخرج من الحلقة فوراً', 'تعيد تشغيل الحلقة من البداية', 'لا تأثير لها']), options_en: j(['Skips current iteration only', 'Exits the loop immediately', 'Restarts loop from beginning', 'No effect']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'mcq', q_ar: 'ما الذي تفعله كلمة continue داخل حلقة؟', q_en: 'What does continue do inside a loop?', options_ar: j(['تخرج من الحلقة كلياً', 'تتخطى باقي كود التكرار الحالي وتنتقل للتالي', 'تعيد تشغيل الحلقة', 'تطبع القيمة الحالية']), options_en: j(['Exits the loop completely', 'Skips remaining code in current iteration and moves to next', 'Restarts the loop', 'Prints current value']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'for i in range(5):\n    if i == 3:\n        break\n    print(i)', options_ar: j(['0\n1\n2\n3', '0\n1\n2', '1\n2\n3', '0\n1\n2\n3\n4']), options_en: j(['0\n1\n2\n3', '0\n1\n2', '1\n2\n3', '0\n1\n2\n3\n4']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'for i in range(5):\n    if i == 3:\n        continue\n    print(i)', options_ar: j(['0\n1\n2\n3\n4', '0\n1\n2\n4', '0\n1\n2', '1\n2\n4']), options_en: j(['0\n1\n2\n3\n4', '0\n1\n2\n4', '0\n1\n2', '1\n2\n4']), answer: 1, difficulty: 'medium', lang: 'python' },

  // --- Code Reading ---
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'result = []\nfor i in range(1, 6):\n    if i % 2 == 0:\n        result.append(i)\nprint(result)', options_ar: j(['[1, 3, 5]', '[2, 4]', '[1, 2, 3, 4, 5]', '[2, 4, 6]']), options_en: j(['[1, 3, 5]', '[2, 4]', '[1, 2, 3, 4, 5]', '[2, 4, 6]']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'count = 0\nfor i in range(10):\n    if i % 3 == 0:\n        count += 1\nprint(count)', options_ar: j(['3', '4', '10', '2']), options_en: j(['3', '4', '10', '2']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'code_output', q_ar: 'كم مرة يطبع هذا الكود "Hello"؟', q_en: 'How many times does this code print "Hello"?', code: 'for i in range(2):\n    for j in range(3):\n        print("Hello")', options_ar: j(['2', '3', '5', '6']), options_en: j(['2', '3', '5', '6']), answer: 3, difficulty: 'hard', lang: 'python' },
  { type: 'bug_find', q_ar: 'ما خطأ هذا الكود الذي يجمع الأرقام 1 إلى 5؟', q_en: 'What is the bug in this code that sums 1 to 5?', code: 'total = 0\nfor i in range(1, 5):\n    total += i\nprint(total)', options_ar: j(['لا خطأ، الناتج 15', 'range يجب أن يكون (1, 6) لتشمل 5', 'total يجب أن يبدأ من 1', 'يجب استخدام while بدلاً من for']), options_en: j(['No bug, result is 15', 'range should be (1, 6) to include 5', 'total should start from 1', 'Must use while instead of for']), answer: 1, difficulty: 'medium', lang: 'python' },

  // --- JavaScript loops ---
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود JavaScript؟', q_en: 'What is the output of this JavaScript code?', code: 'for (let i = 0; i < 3; i++) {\n    console.log(i);\n}', options_ar: j(['0\n1\n2\n3', '0\n1\n2', '1\n2\n3', '0']), options_en: j(['0\n1\n2\n3', '0\n1\n2', '1\n2\n3', '0']), answer: 1, difficulty: 'easy', lang: 'javascript' },
  { type: 'mcq', q_ar: 'ما الفرق بين for...of وfor...in في JavaScript؟', q_en: 'What is the difference between for...of and for...in in JavaScript?', options_ar: j(['لا فرق', 'for...of يمر على القيم، for...in يمر على المفاتيح', 'for...in يمر على القيم', 'for...of أبطأ']), options_en: j(['No difference', 'for...of iterates values, for...in iterates keys', 'for...in iterates values', 'for...of is slower']), answer: 1, difficulty: 'hard', lang: 'javascript' },

  // --- Java loops ---
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود Java؟', q_en: 'What is the output of this Java code?', code: 'int sum = 0;\nfor (int i = 1; i <= 3; i++) {\n    sum += i;\n}\nSystem.out.println(sum);', options_ar: j(['3', '6', '9', '0']), options_en: j(['3', '6', '9', '0']), answer: 1, difficulty: 'medium', lang: 'java' },

  // --- Pattern Recognition ---
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'n = 4\nfor i in range(1, n+1):\n    print("*" * i)', options_ar: j(['*\n**\n***\n****', '****\n***\n**\n*', '1\n2\n3\n4', '**** (مرة واحدة)']), options_en: j(['*\n**\n***\n****', '****\n***\n**\n*', '1\n2\n3\n4', '**** (once)']), answer: 0, difficulty: 'hard', lang: 'python' },
  { type: 'scenario', q_ar: 'تريد مجموع الأرقام الزوجية من 1 إلى 100. أيٌّ من الحلول التالية صحيح؟', q_en: 'You want the sum of even numbers from 1 to 100. Which solution is correct?', options_ar: j(['for i in range(100): total += i', 'for i in range(0, 101, 2): total += i', 'for i in range(1, 101): if i % 2: total += i', 'while i <= 100: total += i; i += 1']), options_en: j(['for i in range(100): total += i', 'for i in range(0, 101, 2): total += i', 'for i in range(1, 101): if i % 2: total += i', 'while i <= 100: total += i; i += 1']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'best_practice', q_ar: 'أيٌّ من الحلقتين التاليتين أكثر كفاءة لتكرار 10 مرات بالضبط؟', q_en: 'Which loop is more efficient for exactly 10 repetitions?', options_ar: j(['while loop', 'for loop', 'كلاهما متساوٍ', 'لا يمكن معرفة ذلك']), options_en: j(['while loop', 'for loop', 'Both are equal', 'Cannot be determined']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'true_false', q_ar: 'صح أم خطأ: يمكن أن تكون هناك حلقة تكرار لا نهائية مقصودة في البرمجة.', q_en: 'True or False: An intentional infinite loop is sometimes valid in programming.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'medium', lang: 'general' },

  // --- Error spotting in loops ---
  { type: 'bug_find', q_ar: 'ما الخطأ في هذا الكود؟', q_en: 'What is the bug?', code: 'i = 10\nwhile i > 0:\n    print(i)\n    i += 1', options_ar: j(['لا خطأ', 'حلقة لا نهائية: i يزداد بدلاً من أن ينقص', 'الشرط خاطئ', 'print خاطئ']), options_en: j(['No bug', 'Infinite loop: i increases instead of decreasing', 'Wrong condition', 'Wrong print']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'x = 5\nwhile x > 0:\n    x -= 2\nprint(x)', options_ar: j(['0', '1', '-1', '5']), options_en: j(['0', '1', '-1', '5']), answer: 2, difficulty: 'hard', lang: 'python' },
  { type: 'mcq', q_ar: 'في Python، ماذا تفعل جملة else بعد for loop؟', q_en: 'In Python, what does an else after a for loop do?', options_ar: j(['تُنفَّذ إذا كان الـ loop فارغاً', 'تُنفَّذ عند اكتمال الحلقة بدون break', 'تُنفَّذ عند كل تكرار', 'لا معنى لها']), options_en: j(['Executes if loop is empty', 'Executes when loop completes without break', 'Executes every iteration', 'Meaningless']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'nums = [1, 2, 3, 4, 5]\nprint(sum(nums))', options_ar: j(['15', '10', '5', 'Error']), options_en: j(['15', '10', '5', 'Error']), answer: 0, difficulty: 'easy', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'words = ["hi", "hello", "hey"]\nfor w in words:\n    if w.startswith("h"):\n        print(w)', options_ar: j(['hi', 'hi\nhello\nhey', 'hello', 'hey']), options_en: j(['hi', 'hi\nhello\nhey', 'hello', 'hey']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما ناتج range(5, 0, -1) في Python؟', q_en: 'What does range(5, 0, -1) produce in Python?', options_ar: j(['5, 4, 3, 2, 1', '0, 1, 2, 3, 4', '5, 4, 3, 2, 1, 0', '1, 2, 3, 4, 5']), options_en: j(['5, 4, 3, 2, 1', '0, 1, 2, 3, 4', '5, 4, 3, 2, 1, 0', '1, 2, 3, 4, 5']), answer: 0, difficulty: 'medium', lang: 'python' },
  { type: 'scenario', q_ar: 'نظام يفحص قائمة كلمات المرور المسربة. هل كلمة المرور موجودة؟', q_en: 'A system checks a list of leaked passwords. Is the password in the list?', code: 'leaked = ["123456", "password", "abc123"]\nmy_pass = "abc123"\nfound = False\nfor p in leaked:\n    if p == my_pass:\n        found = True\n        break\nprint(found)', options_ar: j(['False', 'True', 'None', 'Error']), options_en: j(['False', 'True', 'None', 'Error']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود بعد الحلقة؟', q_en: 'What is the output after the loop?', code: 'total = 1\nfor i in range(1, 4):\n    total *= i\nprint(total)', options_ar: j(['6', '3', '9', '24']), options_en: j(['6', '3', '9', '24']), answer: 0, difficulty: 'hard', lang: 'python' },
  { type: 'true_false', q_ar: 'صح أم خطأ: يمكن تداخل حلقات داخل حلقات (nested loops).', q_en: 'True or False: Loops can be nested inside each other.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'easy', lang: 'general' },
];

// ─── Questions: Level 4 (60 questions) ───────────────────────────────────────
const LEVEL4_QUESTIONS = [
  // --- Functions basics ---
  { type: 'mcq', q_ar: 'ما هي الدالة (Function) في البرمجة؟', q_en: 'What is a Function in programming?', options_ar: j(['نوع من المتغيرات', 'كتلة من الكود يمكن استدعاؤها وإعادة استخدامها بأي وقت', 'حلقة تكرار', 'نوع بيانات']), options_en: j(['A type of variable', 'A reusable block of code that can be called at any time', 'A loop', 'A data type']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'ما الكلمة المفتاحية لتعريف دالة في Python؟', q_en: 'What keyword defines a function in Python?', options_ar: j(['function', 'def', 'fun', 'define']), options_en: j(['function', 'def', 'fun', 'define']), answer: 1, difficulty: 'easy', lang: 'python' },
  { type: 'mcq', q_ar: 'ما الكلمة المفتاحية لتعريف دالة في JavaScript؟', q_en: 'What keyword defines a function in JavaScript?', options_ar: j(['def', 'func', 'function', 'define']), options_en: j(['def', 'func', 'function', 'define']), answer: 2, difficulty: 'easy', lang: 'javascript' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'def greet(name):\n    return "Hello " + name\n\nprint(greet("Masar"))', options_ar: j(['Hello', 'Masar', 'Hello Masar', 'Error']), options_en: j(['Hello', 'Masar', 'Hello Masar', 'Error']), answer: 2, difficulty: 'easy', lang: 'python' },
  { type: 'mcq', q_ar: 'ما الفرق بين المعامل (Parameter) والوسيط (Argument)؟', q_en: 'What is the difference between a Parameter and an Argument?', options_ar: j(['لا فرق', 'Parameter في تعريف الدالة، Argument القيمة المُمررة عند الاستدعاء', 'Argument في تعريف الدالة', 'Parameter هو نوع بيانات']), options_en: j(['No difference', 'Parameter in function definition, Argument is the passed value at call time', 'Argument in function definition', 'Parameter is a data type']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'def add(a, b):\n    return a + b\n\nresult = add(3, 4)\nprint(result)', options_ar: j(['3', '4', '7', 'ab']), options_en: j(['3', '4', '7', 'ab']), answer: 2, difficulty: 'easy', lang: 'python' },
  { type: 'true_false', q_ar: 'صح أم خطأ: الدالة يجب أن يكون لها return دائماً.', q_en: 'True or False: A function must always have a return statement.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'def say_hi():\n    print("Hi!")\n\nresult = say_hi()\nprint(result)', options_ar: j(['Hi!\nNone', 'Hi!\nHi!', 'None', 'Error']), options_en: j(['Hi!\nNone', 'Hi!\nHi!', 'None', 'Error']), answer: 0, difficulty: 'hard', lang: 'python' },

  // --- Return values ---
  { type: 'mcq', q_ar: 'ما الذي تفعله جملة return في دالة؟', q_en: 'What does the return statement do in a function?', options_ar: j(['تطبع النتيجة', 'تُنهي الدالة وتُرجع قيمة للمستدعي', 'تُعيد تشغيل الدالة', 'تحذف الدالة']), options_en: j(['Prints the result', 'Ends the function and returns a value to the caller', 'Restarts the function', 'Deletes the function']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'def square(n):\n    return n * n\n\nprint(square(5) + square(2))', options_ar: j(['25', '29', '10', '7']), options_en: j(['25', '29', '10', '7']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'def check(n):\n    if n > 0:\n        return "positive"\n    return "non-positive"\n\nprint(check(-5))', options_ar: j(['positive', 'non-positive', 'None', 'Error']), options_en: j(['positive', 'non-positive', 'None', 'Error']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'هل يمكن لدالة أن تُرجع أكثر من قيمة في Python؟', q_en: 'Can a Python function return more than one value?', options_ar: j(['لا، دالة مقتصرة على قيمة واحدة', 'نعم، باستخدام tuple ضمني', 'فقط باستخدام قائمة', 'نعم ولكن فقط إذا كانت قيم متماثلة']), options_en: j(['No, limited to one value', 'Yes, using implicit tuple', 'Only using a list', 'Yes but only identical values']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'def min_max(lst):\n    return min(lst), max(lst)\n\na, b = min_max([3, 1, 4, 1, 5])\nprint(a, b)', options_ar: j(['1 5', '5 1', '3 4', 'Error']), options_en: j(['1 5', '5 1', '3 4', 'Error']), answer: 0, difficulty: 'hard', lang: 'python' },

  // --- Scope ---
  { type: 'mcq', q_ar: 'ما هو الـ Scope (النطاق) في البرمجة؟', q_en: 'What is Scope in programming?', options_ar: j(['حجم الملف البرمجي', 'منطقة الكود التي يمكن فيها الوصول لمتغير معين', 'نوع الدالة', 'مدة تشغيل البرنامج']), options_en: j(['Size of code file', 'The code region where a specific variable can be accessed', 'Function type', 'Program runtime']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'x = 10\ndef show():\n    print(x)\nshow()', options_ar: j(['10', 'Error: x not defined', 'None', '0']), options_en: j(['10', 'Error: x not defined', 'None', '0']), answer: 0, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'def show():\n    y = 20\nshow()\nprint(y)', options_ar: j(['20', 'None', 'NameError: y is not defined', '0']), options_en: j(['20', 'None', 'NameError: y is not defined', '0']), answer: 2, difficulty: 'hard', lang: 'python' },
  { type: 'true_false', q_ar: 'صح أم خطأ: المتغير المحلي (Local) داخل دالة لا يمكن الوصول إليه من خارجها.', q_en: 'True or False: A local variable inside a function cannot be accessed outside it.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'x = "global"\ndef test():\n    x = "local"\n    print(x)\ntest()\nprint(x)', options_ar: j(['local\nglobal', 'global\nlocal', 'local\nlocal', 'global\nglobal']), options_en: j(['local\nglobal', 'global\nlocal', 'local\nlocal', 'global\nglobal']), answer: 0, difficulty: 'hard', lang: 'python' },

  // --- Default parameters ---
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'def greet(name, msg="Hello"):\n    return msg + " " + name\n\nprint(greet("Ahmed"))', options_ar: j(['Hello Ahmed', 'Ahmed Hello', 'msg Ahmed', 'Error']), options_en: j(['Hello Ahmed', 'Ahmed Hello', 'msg Ahmed', 'Error']), answer: 0, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))\nprint(power(2, 3))', options_ar: j(['9\n8', '6\n8', '9\n6', '3\n8']), options_en: j(['9\n8', '6\n8', '9\n6', '3\n8']), answer: 0, difficulty: 'hard', lang: 'python' },

  // --- Higher order concepts ---
  { type: 'mcq', q_ar: 'ما مزايا تقسيم الكود إلى دوال؟', q_en: 'What are the benefits of organizing code into functions?', options_ar: j(['يجعل الكود أبطأ', 'يعيد الاستخدام، يسهّل الصيانة، ويُبسِّط التصحيح', 'لا مزايا', 'يزيد تعقيد الكود فقط']), options_en: j(['Makes code slower', 'Reusability, easier maintenance, and simplified debugging', 'No advantages', 'Only adds complexity']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'best_practice', q_ar: 'مبرمج كتب دالة بطول 200 سطر. ما أفضل توصية؟', q_en: 'A programmer wrote a 200-line function. What is the best recommendation?', options_ar: j(['ممتاز، الدالة الطويلة أفضل', 'يجب تقسيمها لدوال أصغر كل منها مسؤولة عن مهمة واحدة', 'إضافة المزيد من المنطق', 'حذف بعض الأسطر بشكل عشوائي']), options_en: j(['Excellent, long functions are better', 'Should be split into smaller functions each with one responsibility', 'Add more logic', 'Delete some lines randomly']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'scenario', q_ar: 'تحتاج نفس العملية الحسابية في 5 أماكن مختلفة في برنامجك. ما الحل الأمثل؟', q_en: 'You need the same calculation in 5 different places in your program. What is the optimal solution?', options_ar: j(['نسخ الكود 5 مرات', 'كتابة الكود في دالة واحدة واستدعاؤها 5 مرات', 'استخدام 5 متغيرات مختلفة', 'لا يوجد حل مثالي']), options_en: j(['Copy code 5 times', 'Write code in one function and call it 5 times', 'Use 5 different variables', 'No optimal solution']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(4))', options_ar: j(['4', '12', '24', 'Error']), options_en: j(['4', '12', '24', 'Error']), answer: 2, difficulty: 'hard', lang: 'python' },
  { type: 'true_false', q_ar: 'صح أم خطأ: الدالة يمكنها استدعاء نفسها (recursion).', q_en: 'True or False: A function can call itself (recursion).', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'medium', lang: 'general' },

  // --- JavaScript functions ---
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود JavaScript؟', q_en: 'What is the output of this JavaScript code?', code: 'const multiply = (a, b) => a * b;\nconsole.log(multiply(3, 4));', options_ar: j(['7', '12', '34', 'Error']), options_en: j(['7', '12', '34', 'Error']), answer: 1, difficulty: 'medium', lang: 'javascript' },
  { type: 'mcq', q_ar: 'ما هو الـ Arrow Function في JavaScript؟', q_en: 'What is an Arrow Function in JavaScript?', options_ar: j(['دالة لطباعة الأسهم', 'صيغة مختصرة لكتابة الدوال', 'دالة للتنقل في الصفحة', 'نوع من حلقات التكرار']), options_en: j(['Function that prints arrows', 'Shorter syntax for writing functions', 'Navigation function', 'A type of loop']), answer: 1, difficulty: 'medium', lang: 'javascript' },
  { type: 'code_output', q_ar: 'ما ناتج الكود JavaScript؟', q_en: 'What is the JavaScript output?', code: 'function greet(name = "World") {\n    return `Hello, ${name}!`;\n}\nconsole.log(greet());', options_ar: j(['Hello, World!', 'Hello, name!', 'Hello, !', 'Error']), options_en: j(['Hello, World!', 'Hello, name!', 'Hello, !', 'Error']), answer: 0, difficulty: 'medium', lang: 'javascript' },

  // --- More combining concepts ---
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'def is_even(n):\n    return n % 2 == 0\n\nnums = [1, 2, 3, 4, 5]\nfor n in nums:\n    if is_even(n):\n        print(n)', options_ar: j(['1\n3\n5', '2\n4', '1\n2\n3\n4\n5', 'Error']), options_en: j(['1\n3\n5', '2\n4', '1\n2\n3\n4\n5', 'Error']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'scenario', q_ar: 'تريد دالة تأخذ قائمة أرقام وتُرجع مجموع الأرقام الزوجية فيها فقط. أيٌّ من الخيارات صحيح؟', q_en: 'You want a function that takes a list and returns only the sum of even numbers. Which is correct?', options_ar: j(['def sum_even(lst): return sum(lst)', 'def sum_even(lst): return sum(x for x in lst if x % 2 == 0)', 'def sum_even(lst): return len(lst)', 'def sum_even(lst): return lst[0]']), options_en: j(['def sum_even(lst): return sum(lst)', 'def sum_even(lst): return sum(x for x in lst if x % 2 == 0)', 'def sum_even(lst): return len(lst)', 'def sum_even(lst): return lst[0]']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'mcq', q_ar: 'ما الفرق بين global scope وlocal scope؟', q_en: 'What is the difference between global and local scope?', options_ar: j(['global أسرع من local', 'global يمكن الوصول إليه من أي مكان، local فقط داخل كتلة الكود', 'local يمكن الوصول إليه من أي مكان', 'لا فرق']), options_en: j(['global is faster than local', 'global is accessible anywhere, local only within its code block', 'local is accessible anywhere', 'No difference']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'bug_find', q_ar: 'ما الخطأ في هذا الكود؟', q_en: 'What is wrong with this code?', code: 'def calculate(price, tax):\n    total = price + (price * tax)\n\nresult = calculate(100, 0.15)\nprint(result)', options_ar: j(['لا خطأ', 'الدالة لا تُرجع total، لذا result ستكون None', 'tax خاطئ', 'print خاطئ']), options_en: j(['No error', 'Function doesn\'t return total, so result will be None', 'Wrong tax', 'Wrong print']), answer: 1, difficulty: 'hard', lang: 'python' },
];

// ─── Questions: Level 5 (60 questions) ───────────────────────────────────────
const LEVEL5_QUESTIONS = [
  // --- Debugging strategies ---
  { type: 'mcq', q_ar: 'ما هو Debugging في البرمجة؟', q_en: 'What is Debugging in programming?', options_ar: j(['كتابة كود جديد', 'عملية البحث عن الأخطاء وتصحيحها في البرنامج', 'تثبيت برامج', 'تصميم واجهة مستخدم']), options_en: j(['Writing new code', 'The process of finding and fixing errors in a program', 'Installing software', 'Designing UI']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'mcq', q_ar: 'أيٌّ من الخطوات التالية يجب أن تكون الأولى عند مواجهة خطأ؟', q_en: 'Which step should be first when encountering an error?', options_ar: j(['حذف الكود كله', 'قراءة رسالة الخطأ بعناية', 'إعادة تشغيل الحاسوب', 'البحث عشوائياً في الكود']), options_en: j(['Delete all code', 'Read the error message carefully', 'Restart the computer', 'Randomly search code']), answer: 1, difficulty: 'easy', lang: 'general' },
  { type: 'scenario', q_ar: 'برنامجك يعطي NameError: name "score" is not defined. ما السبب الأرجح؟', q_en: 'Your program gives: NameError: name "score" is not defined. What is the most likely cause?', options_ar: j(['الحاسوب معطل', 'استخدمت score قبل تعريفه أو أخطأت في كتابة الاسم', 'score محجوز بواسطة Python', 'يجب استيراد مكتبة خاصة']), options_en: j(['Computer malfunction', 'Used score before defining it or misspelled the name', 'score is reserved by Python', 'Need to import a library']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'best_practice', q_ar: 'ما أفضل طريقة لعزل خطأ في كود طويل؟', q_en: 'What is the best way to isolate a bug in long code?', options_ar: j(['حذف نصف الكود', 'إضافة print() بعد كل سطر لمشاهدة قيم المتغيرات', 'إعادة كتابة الكود من الصفر', 'طلب مساعدة فورية']), options_en: j(['Delete half the code', 'Add print() after each line to observe variable values', 'Rewrite code from scratch', 'Ask for help immediately']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'mcq', q_ar: 'ما هو خطأ IndexError في Python؟', q_en: 'What is IndexError in Python?', options_ar: j(['خطأ في اسم المتغير', 'محاولة الوصول لفهرس خارج نطاق القائمة', 'خطأ في عملية القسمة', 'خطأ في النوع']), options_en: j(['Wrong variable name', 'Trying to access an index outside the list range', 'Division error', 'Type error']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'bug_find', q_ar: 'ما الخطأ في هذا الكود؟', q_en: 'What is the bug in this code?', code: 'def divide(a, b):\n    return a / b\n\nresult = divide(10, 0)\nprint(result)', options_ar: j(['لا خطأ', 'ZeroDivisionError: القسمة على صفر غير مسموحة', 'a وb غير معرّفان', 'return خاطئ']), options_en: j(['No bug', 'ZeroDivisionError: division by zero is not allowed', 'a and b are undefined', 'Wrong return']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'try:\n    x = int("abc")\nexcept ValueError:\n    print("Invalid input")', options_ar: j(['abc', 'ValueError', 'Invalid input', 'None']), options_en: j(['abc', 'ValueError', 'Invalid input', 'None']), answer: 2, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما الغرض من كتلة try...except في البرمجة؟', q_en: 'What is the purpose of try...except in programming?', options_ar: j(['زيادة سرعة الكود', 'معالجة الأخطاء المتوقعة بدلاً من تعطل البرنامج', 'تعريف دوال', 'تكرار كود']), options_en: j(['Speed up code', 'Handle expected errors instead of crashing the program', 'Define functions', 'Repeat code']), answer: 1, difficulty: 'medium', lang: 'general' },

  // --- Complex code analysis ---
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'def mystery(n):\n    result = 0\n    for i in range(1, n+1):\n        result += i\n    return result\n\nprint(mystery(5))', options_ar: j(['5', '10', '15', '25']), options_en: j(['5', '10', '15', '25']), answer: 2, difficulty: 'hard', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج هذا الكود؟', q_en: 'What is the output?', code: 'data = [3, 1, 4, 1, 5, 9, 2, 6]\ndata.sort()\nprint(data[0], data[-1])', options_ar: j(['3 6', '1 9', '9 1', '3 9']), options_en: j(['3 6', '1 9', '9 1', '3 9']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'bug_find', q_ar: 'ما الخطأ في هذا الكود الذي يُفترض أنه يجد أكبر عنصر في قائمة؟', q_en: 'What is the bug in this code that should find the largest element?', code: 'def find_max(lst):\n    max_val = 0\n    for x in lst:\n        if x > max_val:\n            max_val = x\n    return max_val\n\nprint(find_max([-5, -3, -1]))', options_ar: j(['لا خطأ', 'البداية بـ 0 تُخطئ مع القوائم السالبة بالكامل', 'for loop خاطئ', 'return خاطئ']), options_en: j(['No bug', 'Starting with 0 fails for all-negative lists', 'Wrong for loop', 'Wrong return']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'def process(items):\n    return [x**2 for x in items if x % 2 == 0]\n\nprint(process([1, 2, 3, 4, 5]))', options_ar: j(['[1, 4, 9, 16, 25]', '[4, 16]', '[2, 4]', '[1, 9, 25]']), options_en: j(['[1, 4, 9, 16, 25]', '[4, 16]', '[2, 4]', '[1, 9, 25]']), answer: 1, difficulty: 'hard', lang: 'python' },

  // --- Real-world scenarios ---
  { type: 'scenario', q_ar: 'تبني نظام صراف آلي. المستخدم طلب 500 ريال والرصيد 300. ما الكود الصحيح؟', q_en: 'Building an ATM. User requested 500 SAR, balance is 300. What is the correct code?', options_ar: j(['if amount <= balance: process_withdrawal()', 'if amount > balance: process_withdrawal()', 'if amount == balance: process_withdrawal()', 'process_withdrawal() دائماً']), options_en: j(['if amount <= balance: process_withdrawal()', 'if amount > balance: process_withdrawal()', 'if amount == balance: process_withdrawal()', 'process_withdrawal() always']), answer: 0, difficulty: 'medium', lang: 'general' },
  { type: 'scenario', q_ar: 'موقع يقبل كلمات مرور من 8 إلى 20 حرفاً فقط. أيٌّ من الشروط يُطبِّق هذا؟', q_en: 'A website accepts passwords from 8 to 20 characters. Which condition implements this?', options_ar: j(['if len(pwd) == 8', 'if 8 <= len(pwd) <= 20', 'if len(pwd) > 8 or len(pwd) < 20', 'if len(pwd) == 20']), options_en: j(['if len(pwd) == 8', 'if 8 <= len(pwd) <= 20', 'if len(pwd) > 8 or len(pwd) < 20', 'if len(pwd) == 20']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'scenario', q_ar: 'تريد البحث عن كلمة في قائمة 1000 كلمة. أيٌّ من الحلول أكثر كفاءة؟', q_en: 'You want to search for a word in a list of 1000 words. Which solution is most efficient?', options_ar: j(['حلقة for مع == لكل عنصر', 'استخدام in operator أو dict/set للبحث الفوري', 'فحص العنصر الأول فقط', 'حذف القائمة وإنشاؤها من جديد']), options_en: j(['for loop with == for each element', 'Use in operator or dict/set for instant lookup', 'Check only first element', 'Delete list and recreate']), answer: 1, difficulty: 'hard', lang: 'general' },
  { type: 'best_practice', q_ar: 'مبرمج كتب دالة بدون التحقق من المدخلات. ما المشكلة؟', q_en: 'A programmer wrote a function without validating inputs. What is the problem?', options_ar: j(['لا مشكلة', 'مدخلات خاطئة قد تُسبب أخطاء غير متوقعة أو ثغرات أمنية', 'الكود سيكون أبطأ', 'يستهلك ذاكرة أكثر']), options_en: j(['No problem', 'Wrong inputs may cause unexpected errors or security vulnerabilities', 'Code will be slower', 'Consumes more memory']), answer: 1, difficulty: 'medium', lang: 'general' },

  // --- Code review and best practices ---
  { type: 'best_practice', q_ar: 'أيٌّ من مبادئ البرمجة هذا يعني "لا تكرر نفسك"؟', q_en: 'Which programming principle means "Don\'t Repeat Yourself"?', options_ar: j(['SOLID', 'DRY', 'OOP', 'REST']), options_en: j(['SOLID', 'DRY', 'OOP', 'REST']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'mcq', q_ar: 'ما معنى مبدأ KISS في البرمجة؟', q_en: 'What does the KISS principle mean in programming?', options_ar: j(['Keep It Super Safe', 'Keep It Simple, Stupid — ابقِ الحل بسيطاً', 'Keep Integrating Smart Systems', 'Keep In Secure State']), options_en: j(['Keep It Super Safe', 'Keep It Simple, Stupid — keep the solution simple', 'Keep Integrating Smart Systems', 'Keep In Secure State']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'scenario', q_ar: 'كودك يعمل بشكل صحيح في البيئة المحلية لكن يتعطل على السيرفر. ما الخطوة الأولى للتشخيص؟', q_en: 'Your code works locally but crashes on the server. What is the first diagnostic step?', options_ar: j(['حذف السيرفر', 'مقارنة إصدارات المكتبات والبيئات بين المحلي والسيرفر', 'إعادة كتابة الكود كاملاً', 'تجاهل المشكلة']), options_en: j(['Delete the server', 'Compare library versions and environments between local and server', 'Rewrite all code', 'Ignore the problem']), answer: 1, difficulty: 'hard', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return f"{self.name} says Woof!"\n\nd = Dog("Max")\nprint(d.bark())', options_ar: j(['Woof!', 'Max says Woof!', 'Dog says Woof!', 'Error']), options_en: j(['Woof!', 'Max says Woof!', 'Dog says Woof!', 'Error']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'mcq', q_ar: 'ما هو OOP (البرمجة الكائنية)؟', q_en: 'What is OOP (Object-Oriented Programming)?', options_ar: j(['نمط برمجي يعتمد على الدوال فقط', 'نمط برمجي يُنظِّم الكود في كائنات تجمع البيانات والسلوك', 'نوع قواعد بيانات', 'لغة برمجة محددة']), options_en: j(['A pattern that uses only functions', 'A pattern that organizes code into objects combining data and behavior', 'A database type', 'A specific programming language']), answer: 1, difficulty: 'hard', lang: 'general' },
  { type: 'scenario', q_ar: 'تعمل في فريق على مشروع. زميلك غيّر كوداً كتبتَه وأحدث خطأ. ما أفضل أداة لإدارة هذا؟', q_en: 'Working in a team. Your colleague changed your code and caused a bug. What is the best tool?', options_ar: j(['إرسال بريد إلكتروني للزميل', 'استخدام نظام تحكم بالإصدارات مثل Git', 'حفظ نسخ يدوية', 'لا يوجد حل']), options_en: j(['Send email to colleague', 'Use version control like Git', 'Save manual copies', 'No solution']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'true_false', q_ar: 'صح أم خطأ: Git يتيح لك العودة لإصدار سابق من الكود.', q_en: 'True or False: Git allows you to revert to a previous version of your code.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 0, difficulty: 'medium', lang: 'general' },
  { type: 'bug_find', q_ar: 'ما الخطأ المنطقي في هذا الكود لحساب الفاتورة؟', q_en: 'What is the logic error in this billing code?', code: 'def calculate_bill(price, qty, discount):\n    total = price + qty  # المبلغ الإجمالي\n    return total - discount', options_ar: j(['لا خطأ', 'يجب ضرب price * qty وليس جمعهما', 'discount يجب أن يُطرح من qty', 'return خاطئ']), options_en: j(['No error', 'Should multiply price * qty not add them', 'discount should subtract from qty', 'Wrong return']), answer: 1, difficulty: 'medium', lang: 'python' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'def is_palindrome(s):\n    return s == s[::-1]\n\nprint(is_palindrome("madam"))\nprint(is_palindrome("hello"))', options_ar: j(['True\nFalse', 'False\nTrue', 'True\nTrue', 'False\nFalse']), options_en: j(['True\nFalse', 'False\nTrue', 'True\nTrue', 'False\nFalse']), answer: 0, difficulty: 'hard', lang: 'python' },
  { type: 'scenario', q_ar: 'برنامجك يتعطل أحياناً بشكل عشوائي. ما أصعب نوع خطأ تشخيصاً؟', q_en: 'Your program crashes randomly sometimes. What is the hardest type of bug to diagnose?', options_ar: j(['Syntax Error', 'Logic Error', 'Race Condition / Intermittent Bug', 'TypeError']), options_en: j(['Syntax Error', 'Logic Error', 'Race Condition / Intermittent Bug', 'TypeError']), answer: 2, difficulty: 'hard', lang: 'general' },
  { type: 'best_practice', q_ar: 'أيٌّ من الممارسات التالية يساعد في منع الأخطاء مستقبلاً؟', q_en: 'Which practice helps prevent future bugs?', options_ar: j(['كتابة كود معقد يصعب فهمه', 'كتابة اختبارات آلية (Unit Tests) للكود', 'عدم التوثيق لتوفير الوقت', 'تجنب استخدام الدوال']), options_en: j(['Write complex unreadable code', 'Write automated Unit Tests for code', 'Skip documentation to save time', 'Avoid using functions']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'import math\nprint(math.sqrt(16))\nprint(math.ceil(4.3))', options_ar: j(['4.0\n5', '4\n4', '4.0\n4', '16\n4.3']), options_en: j(['4.0\n5', '4\n4', '4.0\n4', '16\n4.3']), answer: 0, difficulty: 'medium', lang: 'python' },
  { type: 'mcq', q_ar: 'ما هو Unit Testing؟', q_en: 'What is Unit Testing?', options_ar: j(['اختبار البرنامج كاملاً', 'اختبار وحدات صغيرة من الكود بشكل مستقل', 'اختبار واجهة المستخدم', 'اختبار قاعدة البيانات فقط']), options_en: j(['Testing the entire program', 'Testing small independent units of code', 'Testing the user interface', 'Testing only the database']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'scenario', q_ar: 'دالتك تُرجع قيمة خاطئة أحياناً. ما أفضل طريقة للتحقق؟', q_en: 'Your function returns wrong values sometimes. What is the best verification method?', options_ar: j(['تشغيل البرنامج وتأمل النتيجة', 'كتابة test cases بمدخلات مختلفة والتحقق من الناتج', 'حذف الدالة', 'إضافة تعليقات فقط']), options_en: j(['Run and observe', 'Write test cases with different inputs and verify output', 'Delete the function', 'Only add comments']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'code_output', q_ar: 'ما ناتج الكود؟', q_en: 'What is the output?', code: 'numbers = list(range(1, 6))\nprint(list(filter(lambda x: x > 3, numbers)))', options_ar: j(['[1, 2, 3]', '[4, 5]', '[3, 4, 5]', '[1, 2, 3, 4, 5]']), options_en: j(['[1, 2, 3]', '[4, 5]', '[3, 4, 5]', '[1, 2, 3, 4, 5]']), answer: 1, difficulty: 'hard', lang: 'python' },
  { type: 'mcq', q_ar: 'ما هو Stack Overflow في سياق البرمجة؟', q_en: 'What is Stack Overflow in the context of programming?', options_ar: j(['موقع للمبرمجين', 'حدث عند تجاوز حد مكدس الاستدعاءات عادةً بسبب recursion لا تنتهي', 'نوع من قواعد البيانات', 'أداة تطوير']), options_en: j(['A website for programmers', 'Occurs when call stack limit is exceeded usually by infinite recursion', 'A database type', 'A development tool']), answer: 1, difficulty: 'hard', lang: 'general' },
  { type: 'true_false', q_ar: 'صح أم خطأ: اختبار الكود يستغرق وقتاً ثميناً ويمكن تجنبه في المشاريع الصغيرة.', q_en: 'True or False: Code testing wastes time and can be skipped in small projects.', options_ar: j(['صح', 'خطأ']), options_en: j(['True', 'False']), answer: 1, difficulty: 'medium', lang: 'general' },
  { type: 'scenario', q_ar: 'كيف تتعامل مع خطأ TypeError: unsupported operand type في Python؟', q_en: 'How do you handle: TypeError: unsupported operand type in Python?', options_ar: j(['تجاهل الخطأ', 'التحقق من أنواع البيانات والتأكد من تحويلها بشكل صحيح قبل العملية', 'حذف السطر', 'إعادة تشغيل Python']), options_en: j(['Ignore the error', 'Check data types and ensure proper conversion before the operation', 'Delete the line', 'Restart Python']), answer: 1, difficulty: 'hard', lang: 'python' },
];

// ─── Lessons Data ─────────────────────────────────────────────────────────────
const SE0_LESSONS = [
  // Level 1 lessons
  {
    levelNum: 1, order: 1,
    title: 'What is Programming?', title_ar: 'ما هي البرمجة؟',
    body_ar: 'البرمجة هي عملية إعطاء الحاسوب مجموعة من التعليمات المحددة والمنظمة لحل مشكلة ما أو تنفيذ مهمة معينة. تماماً كما تعطي شخصاً وصفة طبخ خطوة بخطوة، تعطي الحاسوب خطوات محددة ليتبعها بالترتيب.',
    body_en: 'Programming is the process of giving the computer a set of specific, organized instructions to solve a problem or perform a task. Just like giving someone a step-by-step recipe, you give the computer specific steps to follow in order.',
    code: '# مثال بسيط\nprint("مرحباً بالعالم!")\nprint("هذا برنامجي الأول")',
    commonErr: 'الخطأ الشائع: الاعتقاد بأن البرمجة صعبة للغاية. الحقيقة: البرمجة منطقية وتتعلمها خطوة بخطوة.',
    summary_ar: 'البرمجة = تعليمات منظمة للحاسوب لحل مشكلة.',
    summary_en: 'Programming = organized instructions for the computer to solve problems.',
    videoUrl: '',
    duration: '08:30',
  },
  {
    levelNum: 1, order: 2,
    title: 'Variables & Data Types', title_ar: 'المتغيرات وأنواع البيانات',
    body_ar: 'المتغير هو مكان في الذاكرة نُسميه ونخزّن فيه بيانات. أنواع البيانات الأساسية: Integer (أرقام صحيحة)، Float (أرقام عشرية)، String (نصوص)، Boolean (صح/خطأ).',
    body_en: 'A variable is a named memory location where we store data. Basic data types: Integer (whole numbers), Float (decimal numbers), String (text), Boolean (True/False).',
    code: 'age = 25          # Integer\nheight = 1.75     # Float\nname = "Ahmed"    # String\nis_active = True  # Boolean',
    commonErr: 'الأخطاء الشائعة: \n1. استخدام مسافات في أسماء المتغيرات (خطأ: user name)\n2. بدء الاسم برقم (خطأ: 2score)\n3. نسيان تحويل النوع قبل العمليات الحسابية.',
    summary_ar: 'المتغير = صندوق مُسمَّى في الذاكرة. الأنواع الأساسية: int, float, str, bool.',
    summary_en: 'Variable = named box in memory. Basic types: int, float, str, bool.',
    videoUrl: '',
    duration: '10:15',
  },
  // Level 2 lessons
  {
    levelNum: 2, order: 1,
    title: 'Operators & Expressions', title_ar: 'العوامل والتعبيرات',
    body_ar: 'العوامل الحسابية: +، -، *، /، //، %، **. العوامل المنطقية: and، or، not. عوامل المقارنة: ==، !=، >، <، >=، <=.',
    body_en: 'Arithmetic operators: +, -, *, /, //, %, **. Logical operators: and, or, not. Comparison operators: ==, !=, >, <, >=, <=.',
    code: '# عوامل حسابية\nresult = 10 + 5   # 15\nremainder = 10 % 3  # 1\npower = 2 ** 4    # 16\n\n# مقارنة\nprint(10 > 5)   # True\nprint(5 == 5)   # True',
    commonErr: 'الخطأ الشائع: استخدام = للمقارنة بدلاً من ==. \nالخطأ: if x = 5 ← يجب: if x == 5',
    summary_ar: 'العوامل تُجري الحسابات والمقارنات. تذكر: = للتعيين، == للمقارنة.',
    summary_en: 'Operators perform calculations and comparisons. Remember: = for assignment, == for comparison.',
    videoUrl: '',
    duration: '09:00',
  },
  {
    levelNum: 2, order: 2,
    title: 'Conditional Statements', title_ar: 'الجمل الشرطية',
    body_ar: 'الجمل الشرطية تسمح للبرنامج باتخاذ قرارات. if تُنفِّذ الكود إذا كان الشرط صحيحاً، else عند عدم صحته، elif لإضافة شروط إضافية.',
    body_en: 'Conditional statements allow programs to make decisions. if executes code when condition is true, else when false, elif for additional conditions.',
    code: 'score = 85\nif score >= 90:\n    print("Excellent")\nelif score >= 70:\n    print("Good")\nelif score >= 50:\n    print("Pass")\nelse:\n    print("Fail")',
    commonErr: 'الخطأ الشائع: نسيان النقطتين ":" بعد الشرط.\nالخطأ: if x > 5\nالصواب: if x > 5:',
    summary_ar: 'if/elif/else = أداة اتخاذ القرار في البرنامج.',
    summary_en: 'if/elif/else = the decision-making tool of your program.',
    videoUrl: '',
    duration: '11:20',
  },
  // Level 3 lessons
  {
    levelNum: 3, order: 1,
    title: 'For Loops', title_ar: 'حلقات for',
    body_ar: 'حلقة for تُكرِّر تنفيذ كتلة من الكود لكل عنصر في تسلسل (قائمة، نطاق، نص...). تستخدمها حين تعرف عدد التكرارات مسبقاً.',
    body_en: 'A for loop repeats a code block for each element in a sequence (list, range, string...). Use it when you know the number of iterations ahead of time.',
    code: '# مع range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# مع قائمة\nfruits = ["apple", "banana", "mango"]\nfor fruit in fruits:\n    print(fruit)',
    commonErr: 'الخطأ الشائع: range(5) يُنتج 0 إلى 4 وليس 1 إلى 5.\nللأرقام 1-5 استخدم: range(1, 6)',
    summary_ar: 'for = تكرار لكل عنصر في تسلسل.',
    summary_en: 'for = repeat for each element in a sequence.',
    videoUrl: '',
    duration: '10:45',
  },
  {
    levelNum: 3, order: 2,
    title: 'While Loops', title_ar: 'حلقات while',
    body_ar: 'حلقة while تُكرِّر تنفيذ الكود طالما الشرط صحيح. تستخدمها حين لا تعرف عدد التكرارات مسبقاً.',
    body_en: 'A while loop repeats code execution as long as a condition is true. Use it when you don\'t know the number of iterations in advance.',
    code: 'count = 0\nwhile count < 5:\n    print(count)\n    count += 1  # مهم جداً!\n\n# مثال واقعي\npassword = ""\nwhile password != "1234":\n    password = input("Enter password: ")',
    commonErr: 'الخطأ الأكثر شيوعاً: نسيان تحديث متغير الشرط داخل الحلقة مما يؤدي لحلقة لا نهائية!',
    summary_ar: 'while = استمر طالما الشرط صحيح. احذر الحلقة اللانهائية!',
    summary_en: 'while = continue as long as condition is true. Beware infinite loops!',
    videoUrl: '',
    duration: '09:30',
  },
  // Level 4 lessons
  {
    levelNum: 4, order: 1,
    title: 'Functions - Basics', title_ar: 'الدوال — الأساسيات',
    body_ar: 'الدالة هي كتلة من الكود قابلة لإعادة الاستخدام تؤدي مهمة محددة. تُعرِّفها مرة واحدة وتستدعيها أي عدد من المرات.',
    body_en: 'A function is a reusable block of code that performs a specific task. Define it once and call it any number of times.',
    code: 'def calculate_area(width, height):\n    """احسب مساحة المستطيل"""\n    area = width * height\n    return area\n\n# استدعاء الدالة\nroom1 = calculate_area(5, 4)  # 20\nroom2 = calculate_area(3, 6)  # 18\nprint(room1, room2)',
    commonErr: 'الخطأ: نسيان return يجعل الدالة تعيد None.\nالخطأ: استدعاء دالة قبل تعريفها.',
    summary_ar: 'الدالة = كتلة كود مُعادة الاستخدام. def اسم(مدخلات): ... return نتيجة',
    summary_en: 'Function = reusable code block. def name(params): ... return result',
    videoUrl: '',
    duration: '12:00',
  },
  {
    levelNum: 4, order: 2,
    title: 'Scope - Local vs Global', title_ar: 'النطاق — محلي مقابل عام',
    body_ar: 'النطاق المحلي (Local Scope): المتغيرات المُعرَّفة داخل دالة. لا يمكن الوصول إليها من الخارج. النطاق العام (Global Scope): المتغيرات المُعرَّفة خارج أي دالة. يمكن الوصول إليها من أي مكان.',
    body_en: 'Local Scope: Variables defined inside a function. Cannot be accessed from outside. Global Scope: Variables defined outside any function. Accessible from anywhere.',
    code: 'global_var = "I am global"\n\ndef test():\n    local_var = "I am local"\n    print(global_var)   # ✅ يعمل\n    print(local_var)    # ✅ يعمل\n\ntest()\nprint(global_var)   # ✅ يعمل\nprint(local_var)    # ❌ NameError!',
    commonErr: 'الخطأ: تعديل متغير عام داخل دالة بدون كلمة global.\nيجب كتابة: global var_name قبل تعديله.',
    summary_ar: 'Local = داخل الدالة فقط. Global = في كل مكان.',
    summary_en: 'Local = inside function only. Global = accessible everywhere.',
    videoUrl: '',
    duration: '10:00',
  },
  // Level 5 lessons
  {
    levelNum: 5, order: 1,
    title: 'Debugging Strategies', title_ar: 'استراتيجيات تصحيح الأخطاء',
    body_ar: 'التصحيح هو مهارة أساسية. الخطوات:\n1. اقرأ رسالة الخطأ كاملة\n2. انتقل لرقم السطر\n3. أضف print() للمراقبة\n4. ابحث في Google عن رسالة الخطأ\n5. اطلب المساعدة من المجتمع',
    body_en: 'Debugging is a core skill. Steps:\n1. Read the full error message\n2. Go to the line number\n3. Add print() for monitoring\n4. Search Google for the error message\n5. Ask the community for help',
    code: '# تقنية print debugging\ndef calculate(x, y):\n    print(f"x={x}, y={y}")  # مراقبة المدخلات\n    result = x / y\n    print(f"result={result}")  # مراقبة النتيجة\n    return result\n\n# try/except للتعامل مع الأخطاء\ntry:\n    val = calculate(10, 0)\nexcept ZeroDivisionError:\n    print("لا يمكن القسمة على صفر!")',
    commonErr: 'الخطأ: التخلي عند أول خطأ. التصحيح يتطلب صبراً ومنهجية.',
    summary_ar: 'Debugging = منهجية علمية لتحديد الخطأ وإصلاحه.',
    summary_en: 'Debugging = a scientific methodology to find and fix errors.',
    videoUrl: '',
    duration: '13:00',
  },
  {
    levelNum: 5, order: 2,
    title: 'Programming Mindset & Best Practices', title_ar: 'عقلية المبرمج وأفضل الممارسات',
    body_ar: 'عقلية المبرمج الناجح:\n• تقسيم المشكلة الكبيرة لمشاكل صغيرة\n• DRY: لا تكرر نفسك، اكتب دالة\n• KISS: ابقِ الحل بسيطاً\n• كتابة كود مقروء وموثق\n• اختبار كودك دائماً',
    body_en: 'Successful programmer mindset:\n• Break big problems into small ones\n• DRY: Don\'t Repeat Yourself, write a function\n• KISS: Keep It Simple\n• Write readable and documented code\n• Always test your code',
    code: '# ❌ كود رديء\ndef f(x,y,z):\n    return x*y+z\n\n# ✅ كود نظيف\ndef calculate_total_price(unit_price, quantity, tax):\n    """احسب السعر الإجمالي شاملاً الضريبة"""\n    subtotal = unit_price * quantity\n    return subtotal + tax',
    commonErr: 'الخطأ الأكبر: الاستعجال في الكتابة دون تحليل المشكلة أولاً.',
    summary_ar: 'المبرمج الجيد يفكر أولاً، يكتب ثانياً، ويختبر دائماً.',
    summary_en: 'A good programmer thinks first, writes second, and always tests.',
    videoUrl: '',
    duration: '11:45',
  },
];

// ─── Main Seed Function ───────────────────────────────────────────────────────
async function main() {
  console.log('🌱 Starting Masar database seed...\n');

  // 1. Create demo user
  const hashedPassword = await bcrypt.hash('masar2026', 10);
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@masar.sa' },
    update: {},
    create: {
      username: 'demo',
      email: 'demo@masar.sa',
      passwordHash: hashedPassword,
      xp: 0,
      language: 'ar',
    },
  });
  console.log('✅ Demo user created:', demoUser.username);

  // 2. Create Tracks
  for (const track of TRACKS) {
    await prisma.track.upsert({
      where: { id: track.id },
      update: track,
      create: track,
    });
  }
  console.log(`✅ ${TRACKS.length} Tracks seeded`);

  // 3. Create SE Sections
  const createdSections = {};
  for (const sec of SE_SECTIONS) {
    const section = await prisma.section.upsert({
      where: { id: `SE-${sec.index}` },
      update: { ...sec, trackId: 'SE' },
      create: { id: `SE-${sec.index}`, ...sec, trackId: 'SE' },
    });
    createdSections[sec.index] = section;
  }
  console.log(`✅ ${SE_SECTIONS.length} SE Sections seeded`);

  // 4. Create 5 Levels for SE Section 0
  const section0 = createdSections[0];
  const createdLevels = {};
  for (const lvl of SE0_LEVELS) {
    const level = await prisma.level.upsert({
      where: { sectionId_number: { sectionId: section0.id, number: lvl.number } },
      update: { ...lvl, sectionId: section0.id },
      create: { ...lvl, sectionId: section0.id },
    });
    createdLevels[lvl.number] = level;
  }
  console.log(`✅ 5 Levels seeded for Programming Fundamentals`);

  // 5. Seed Questions
  const questionSets = [
    { num: 1, questions: LEVEL1_QUESTIONS },
    { num: 2, questions: LEVEL2_QUESTIONS },
    { num: 3, questions: LEVEL3_QUESTIONS },
    { num: 4, questions: LEVEL4_QUESTIONS },
    { num: 5, questions: LEVEL5_QUESTIONS },
  ];

  for (const { num, questions } of questionSets) {
    const levelId = createdLevels[num].id;
    // Delete existing questions for this level
    await prisma.question.deleteMany({ where: { levelId } });
    // Bulk create
    await prisma.question.createMany({
      data: questions.map((q) => ({ ...q, levelId })),
    });
    console.log(`✅ Level ${num}: ${questions.length} questions seeded`);
  }

  // 6. Seed Lessons
  await prisma.lesson.deleteMany({ where: { sectionId: section0.id } });
  await prisma.lesson.createMany({
    data: SE0_LESSONS.map((l) => ({ ...l, sectionId: section0.id })),
  });
  console.log(`✅ ${SE0_LESSONS.length} Lessons seeded for Programming Fundamentals`);

  // 7. Create initial progress for demo user (Level 1 unlocked)
  const level1 = createdLevels[1];
  await prisma.userProgress.upsert({
    where: { userId_levelId: { userId: demoUser.id, levelId: level1.id } },
    update: { unlocked: true },
    create: { userId: demoUser.id, levelId: level1.id, unlocked: true },
  });
  console.log(`✅ Level 1 unlocked for demo user`);

  console.log('\n🎉 Seed completed successfully!');
  console.log('📊 Summary:');
  console.log(`   • Users: 1 (demo@masar.sa / masar2026)`);
  console.log(`   • Tracks: ${TRACKS.length}`);
  console.log(`   • Sections: ${SE_SECTIONS.length} (SE)`);
  console.log(`   • Levels: 5 (Programming Fundamentals)`);
  const totalQ = LEVEL1_QUESTIONS.length + LEVEL2_QUESTIONS.length + LEVEL3_QUESTIONS.length + LEVEL4_QUESTIONS.length + LEVEL5_QUESTIONS.length;
  console.log(`   • Questions: ${totalQ}`);
  console.log(`   • Lessons: ${SE0_LESSONS.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
