// Real-world technical questions pool for Masar Platform
// Partitioned by section to ensure zero overlap.

const premiumQuestions = {
  finance: [
    {
      q: "ماذا يعني مصطلح 'Fintech'؟ (What does the term 'Fintech' stand for?)",
      options: ["التقنيات المالية (Financial Techniques)", "التكنولوجيا المالية (Financial Technology)", "فنية التمويل (Finance Technicality)", "التكنولوجيا النهائية (Final Technology)"],
      answer: 1,
      difficulty: "easy"
    },
    {
      q: "أي تكنولوجيا معروفة بإنشاء سجل غير قابل للتغيير ولا مركزي؟",
      options: ["الحوسبة السحابية", "الذكاء الاصطناعي", "البلوكشين (Blockchain)", "البيانات الضخمة"],
      answer: 2,
      difficulty: "easy"
    }
  ],
  ai: [
    {
      q: "ما هو الفرق الوظيفي الأساسي بين df.apply() و df.transform() في pandas؟",
      options: ["apply للأعمدة و transform للصفوف", "apply تعيد دائماً قيمة مفردة (scalar)", "transform تحافظ على شكل الإدخل (Shape)، بينما apply قد تغيره", "transform أسرع بفضل المعالجة المتوازية"],
      answer: 2,
      difficulty: "hard"
    }
  ]
};

const programmingQuestions = {
  // 0: Programming Basics (أساسيات البرمجة) - merges all 35 custom visual questions!
  0: [
    // --- 1. Variables and Data Types ---
    {
      q_ar: "ما هو المتغير (Variable) في البرمجة؟",
      q_en: "What is a Variable in programming?",
      options_ar: ["نوع من الدالات البرمجية", "عنوان بريد إلكتروني", "مساحة محجوزة في الذاكرة لتخزين البيانات باسم محدد", "جهاز داخل الحاسوب"],
      options_en: ["A type of function", "An email address", "A reserved space in memory to store data with a specific name", "A hardware device inside the computer"],
      answer: 2,
      difficulty: "easy"
    },
    {
      q_ar: "ما نوع البيانات المناسب لتخزين العمر (مثال: 25)؟",
      q_en: "What is the appropriate data type to store age (e.g., 25)?",
      options_ar: ["نص (String)", "رقم عشري (Float)", "قيمة منطقية (Boolean)", "رقم صحيح (Integer)"],
      options_en: ["String", "Float", "Boolean", "Integer"],
      answer: 3,
      difficulty: "easy"
    },
    {
      q_ar: "لماذا نحتاج أسماء للمتغيرات (Variable Names)؟",
      q_en: "Why do we need names for variables?",
      options_ar: ["لنشير إلى موقع البيانات في الذاكرة بسهولة دون كتابة العناوين المعقدة", "لجعل البرنامج يطبع ألواناً مختلفة", "لأن نظام التشغيل يطلب ذلك إجبارياً", "لا فائدة منها ويمكن الاستغناء عنها"],
      options_en: ["To easily refer to data memory locations without writing complex addresses", "To make the program print different colors", "Because the OS strictly requires it", "No benefit, they can be ignored"],
      answer: 0,
      difficulty: "easy"
    },
    {
      q_ar: "أي من أسماء المتغيرات التالية يعتبر اسماً صحيحاً في معظم لغات البرمجة؟",
      q_en: "Which of the following is a valid variable name in most languages?",
      options_ar: ["2user_name", "user-name", "user_name", "user name"],
      options_en: ["2user_name", "user-name", "user_name", "user name"],
      answer: 2,
      difficulty: "medium"
    },
    {
      q_ar: "ما هي القيمة التي يحتوي عليها صندوق الذاكرة الموضح بالأسفل؟",
      q_en: "What is the value stored in the memory cell shown below?",
      options_ar: ["0x7ffd", "x", "15", "Integer"],
      options_en: ["0x7ffd", "x", "15", "Integer"],
      answer: 2,
      difficulty: "medium",
      visualType: "memory",
      visualData: {
        address: "0x7ffd",
        name: "x",
        value: "15"
      }
    },
    {
      q_ar: "ما هي قيمة المتغير y بعد تشغيل هذا الكود؟",
      q_en: "What is the value of variable y after running this code?",
      code: "x = 5\ny = x + 3\nx = 10",
      options_ar: ["8", "13", "5", "10"],
      options_en: ["8", "13", "5", "10"],
      answer: 0,
      difficulty: "hard"
    },
    {
      q_ar: "صح أم خطأ: لا يمكن تغيير قيمة المتغير بعد تعريفه أول مرة في اللغات التي تدعم المتغيرات الديناميكية.",
      q_en: "True or False: A variable's value cannot be changed after declaration in dynamic-type languages.",
      options_ar: ["صح (True)", "خطأ (False)"],
      options_en: ["True", "False"],
      answer: 1,
      difficulty: "easy"
    },

    // --- 2. Arithmetic and Logical Operations ---
    {
      q_ar: "ما هي نتيجة العملية الحسابية الموضحة أدناه بناءً على أولويات العمليات الحسابية؟",
      q_en: "What is the result of the calculation below based on operator precedence?",
      code: "result = 10 - 2 * 3",
      options_ar: ["24", "4", "8", "16"],
      options_en: ["24", "4", "8", "16"],
      answer: 1,
      difficulty: "medium"
    },
    {
      q_ar: "أي معامل منطقي يعود بـ True فقط إذا كان كلا الشرطين صحيحين؟",
      q_en: "Which logical operator returns True only if both conditions are True?",
      options_ar: ["OR", "NOT", "AND", "XOR"],
      options_en: ["OR", "NOT", "AND", "XOR"],
      answer: 2,
      difficulty: "easy"
    },
    {
      q_ar: "ما هي نتيجة المقارنة التالية؟",
      q_en: "What is the result of the comparison below?",
      code: "a = 5\nb = 10\nresult = (a < b)",
      options_ar: ["True", "False", "None", "5"],
      options_en: ["True", "False", "None", "5"],
      answer: 0,
      difficulty: "easy"
    },
    {
      q_ar: "إذا كان (is_logged_in = True) و (has_balance = False)، ما نتيجة الشرط المركب التالي؟",
      q_en: "If (is_logged_in = True) and (has_balance = False), what is the result?",
      code: "condition = is_logged_in AND has_balance",
      options_ar: ["True", "False", "None", "خطأ في الكود"],
      options_en: ["True", "False", "None", "Syntax Error"],
      answer: 1,
      difficulty: "medium"
    },
    {
      q_ar: "ما هي نتيجة الكود التالي؟",
      q_en: "What is the output of the following code?",
      code: "x = 5\ny = 5\nprint(x != y)",
      options_ar: ["True", "False", "Error", "5"],
      options_en: ["True", "False", "Error", "5"],
      answer: 1,
      difficulty: "medium"
    },
    {
      q_ar: "ما قيمة result بعد تنفيذ الكود التالي؟",
      q_en: "What is the value of result after executing this code?",
      code: "x = 12\nresult = (x > 10) AND (x % 3 == 0)",
      options_ar: ["True", "False", "12", "Error"],
      options_en: ["True", "False", "12", "Error"],
      answer: 0,
      difficulty: "hard"
    },

    // --- 3. Input and Output ---
    {
      q_ar: "ما هي الدالة المستخدمة لعرض النتائج للمستخدم على الشاشة؟",
      q_en: "Which function is used to display outputs on the screen?",
      options_ar: ["input()", "print()", "read()", "write()"],
      options_en: ["input()", "print()", "read()", "write()"],
      answer: 1,
      difficulty: "easy"
    },
    {
      q_ar: "عند استقبال إدخال من لوحة المفاتيح باستخدام input()، ما هو نوع البيانات الافتراضي؟",
      q_en: "What is the default data type returned by input()?",
      options_ar: ["رقم صحيح (Integer)", "رقم عشري (Float)", "نص (String)", "قيمة منطقية (Boolean)"],
      options_en: ["Integer", "Float", "String", "Boolean"],
      answer: 2,
      difficulty: "medium"
    },
    {
      q_ar: "كيف نحول المدخل النصي (age_str = \"25\") إلى رقم صحيح؟",
      q_en: "How do we cast a text input (age_str = \"25\") to an integer?",
      options_ar: ["convert(age_str)", "int(age_str)", "str(age_str)", "toNum(age_str)"],
      options_en: ["convert(age_str)", "int(age_str)", "str(age_str)", "toNum(age_str)"],
      answer: 1,
      difficulty: "easy"
    },
    {
      q_ar: "ماذا ستظهر شاشة الكونسول بعد تنفيذ الكود التالي؟",
      q_en: "What will print on the terminal after running this code?",
      code: "name = \"أحمد\"\nprint(\"مرحباً \" + name)",
      options_ar: ["مرحباً name", "name", "مرحباً أحمد", "أحمد مرحباً"],
      options_en: ["Hello name", "name", "Hello Ahmad", "Ahmad Hello"],
      answer: 2,
      difficulty: "easy",
      visualType: "console",
      visualData: {
        lines: [
          "> name = \"أحمد\"",
          "> print(\"مرحباً \" + name)",
          "مرحباً أحمد"
        ]
      }
    },
    {
      q_ar: "ما المشكلة في الكود التالي الذي يستقبل رقمين ويجمعهما؟",
      q_en: "What is the bug in the following code which adds two numbers?",
      code: "num1 = input(\"أدخل الرقم الأول: \")\nnum2 = input(\"أدخل الرقم الثاني: \")\nprint(num1 + num2)",
      options_ar: ["الكود يحتوي على خطأ يمنعه من العمل", "سيقوم بدمج النصين بدلاً من جمعهما رياضياً (مثل: 5+5 يعطي 55)", "سيقوم بطرح الرقمين", "لا توجد أي مشكلة"],
      options_en: ["The code contains a syntax error", "It will concatenate the texts instead of adding them (e.g. 5+5 yields 55)", "It will subtract numbers", "No issue"],
      answer: 1,
      difficulty: "hard"
    },

    // --- 4. Program Structure and Syntax ---
    {
      q_ar: "لماذا تعتبر الفواصل والنقاط والأقواس مهمة جداً في كتابة الكود؟",
      q_en: "Why are commas, periods, and parentheses important in coding?",
      options_ar: ["لأنها تجعل الكود يبدو جميلاً فقط", "لإخبار المفسر بنهاية كل أمر وتحديد نطاق الكود ومنع أخطاء الـ Syntax", "لزيادة سرعة معالجة الكود", "لتشغيل البرنامج بأمان"],
      options_en: ["Just to make code look nice", "To tell interpreter where statements end, define blocks, and prevent Syntax Errors", "To speed up processing", "To run app securely"],
      answer: 1,
      difficulty: "easy"
    },
    {
      q_ar: "كيف ينفذ الحاسوب الأوامر البرمجية في لغة البرمجة المتتالية (Sequential)؟",
      q_en: "How does the computer execute commands in sequential programming?",
      options_ar: ["من الأسفل إلى الأعلى", "بشكل عشوائي", "من الأعلى إلى الأسفل سطراً بعد سطر بالتوالي", "جميع السطور في نفس الوقت"],
      options_en: ["From bottom to top", "Randomly", "From top to bottom line-by-line sequentially", "All lines at the same time"],
      answer: 2,
      difficulty: "easy"
    },
    {
      q_ar: "ما فائدة المسافات البادئة (Indentation) في كتابة الكود البرمجي؟",
      q_en: "What is the purpose of Indentation in writing code?",
      options_ar: ["لتحديد الكتل البرمجية التابعة لشرط أو دالة ولتنظيم الكود وجعله مقروءاً", "لتسريع عمل البرنامج", "لتخزين الأرقام العشرية", "لتفادي كتابة التعليقات"],
      options_en: ["To define block scopes belonging to conditions/functions and keep code readable", "To speed up execution", "To store decimal values", "To avoid writing comments"],
      answer: 0,
      difficulty: "medium"
    },
    {
      q_ar: "أي كود مما يلي يحتوي على خطأ في البادئة (Indentation Error)؟",
      q_en: "Which code block contains an Indentation Error?",
      code: "A:\nif True:\n    print(\"OK\")\n\nB:\nif True:\nprint(\"OK\")",
      options_ar: ["الخيار A", "الخيار B", "كلاهما صحيح", "كلاهما خاطئ"],
      options_en: ["Option A", "Option B", "Both are correct", "Both are wrong"],
      answer: 1,
      difficulty: "hard"
    },

    // --- 5. Comments and Documentation ---
    {
      q_ar: "ما هو التعليق (Comment) في الكود؟",
      q_en: "What is a Comment in code?",
      options_ar: ["كود يتم تنفيذه بسرعة فائقة", "سطر مكتوب يقرأه المبرمج ويتجاهله مترجم/مفسر الآلة تماماً أثناء التشغيل", "رسالة خطأ تظهر للمستخدم", "طريقة لتعريف المتغيرات"],
      options_en: ["Code executed super fast", "A line written for developers that is completely ignored by the compiler/interpreter", "Error message shown to user", "Way to define variables"],
      answer: 1,
      difficulty: "easy"
    },
    {
      q_ar: "أي رمز يُسخدم لكتابة تعليق من سطر واحد في لغة بايثون مثلاً؟",
      q_en: "Which symbol is used for a single-line comment in Python?",
      options_ar: ["//", "/*", "#", "--"],
      options_en: ["//", "/*", "#", "--"],
      answer: 2,
      difficulty: "easy"
    },
    {
      q_ar: "لماذا يعتبر توثيق الكود وكتابة التعليقات دليلاً على احترافية المبرمج؟",
      q_en: "Why is commenting and documenting code a sign of professional programming?",
      options_ar: ["لأنه يمنع البرنامج من التوقف تماماً", "لأنه يسهل صيانة الكود وتطويره وفهمه بواسطة زملائه أو المبرمج نفسه لاحقاً", "لأنه يزيد من حجم الذاكرة المستهلكة", "لأنه يمنع سرقة الكود"],
      options_en: ["It prevents the app from halting", "It facilitates maintenance, updates, and understanding for peers or yourself later", "It increases memory footprint", "It prevents code piracy"],
      answer: 1,
      difficulty: "easy"
    },
    {
      q_ar: "كيف يمكن استخدام التعليقات كأداة قوية أثناء تصحيح الأخطاء (Debugging)؟",
      q_en: "How can comments act as a powerful tool during debugging?",
      options_ar: ["بتحويل الأخطاء إلى تعليقات تلقائياً", "بتعطيل أسطر معينة من الكود مؤقتاً لاختبار سلوك البرنامج دون الحاجة لحذفها", "لتسريع عملية البحث في الإنترنت", "لإخفاء الكود عن المفسر البرمجي نهائياً"],
      options_en: ["By converting errors to comments automatically", "By temporarily disabling lines to test behaviors without deleting them", "To search faster on Google", "To hide code from interpreter permanently"],
      answer: 1,
      difficulty: "medium"
    },

    // --- 6. Lists ---
    {
      q_ar: "ما هي القائمة (List) أو المصفوفة في البرمجة؟",
      q_en: "What is a List/Array in programming?",
      options_ar: ["متغير واحد قادر على تخزين مجموعة من القيم والبيانات تحت اسم واحد", "طريقة لطباعة النتائج", "أداة لتشغيل البرامج عن بعد", "دالة لحساب الأرقام"],
      options_en: ["A single variable capable of storing multiple values under one name", "Method to print outputs", "Remote runner tool", "Math function"],
      answer: 0,
      difficulty: "easy"
    },
    {
      q_ar: "في معظم لغات البرمجة، ما هو فهرس (Index) أول عنصر في القائمة؟",
      q_en: "In most programming languages, what is the index of the first element?",
      options_ar: ["1", "-1", "0", "لا يوجد فهرس"],
      options_en: ["1", "-1", "0", "No index"],
      answer: 2,
      difficulty: "easy"
    },
    {
      q_ar: "ما هو العنصر الموجود في الفهرس [2] للمصفوفة الموضحة بالأسفل؟",
      q_en: "What element is at index [2] of the array shown below?",
      options_ar: ["Apple", "Orange", "Banana", "Grapes"],
      options_en: ["Apple", "Orange", "Banana", "Grapes"],
      answer: 2,
      difficulty: "medium",
      visualType: "list",
      visualData: {
        items: ["Apple", "Orange", "Banana", "Grapes"]
      }
    },
    {
      q_ar: "كيف نضيف عنصراً جديداً إلى نهاية القائمة برمجياً؟",
      q_en: "How do we append a new element to a list in code?",
      options_ar: ["list.add_new()", "list.push() أو list.append()", "list.insert_first()", "list.delete()"],
      options_en: ["list.add_new()", "list.push() or list.append()", "list.insert_first()", "list.delete()"],
      answer: 1,
      difficulty: "easy"
    },
    {
      q_ar: "ما هي مخرجات الكود التالي؟",
      q_en: "What is the output of the following code?",
      code: "fruits = ['Apple', 'Banana']\nfruits.append('Orange')\nprint(fruits[1])",
      options_ar: ["Apple", "Banana", "Orange", "Error"],
      options_en: ["Apple", "Banana", "Orange", "Error"],
      answer: 1,
      difficulty: "hard"
    },

    // --- 7. Errors and Debugging ---
    {
      q_ar: "ما هو خطأ البناء (Syntax Error)؟",
      q_en: "What is a Syntax Error?",
      options_ar: ["خطأ في منطق البرنامج يعطي نتائج غير صحيحة", "خطأ في إملاء وقواعد اللغة يمنع المفسر من فهم الكود وتشغيله", "توقف الخادم السحابي عن الاستجابة", "نفاد ذاكرة الوصول العشوائي"],
      options_en: ["Logic error giving wrong results", "Grammatical spelling error preventing interpreter from running", "Cloud server crash", "RAM overflow"],
      answer: 1,
      difficulty: "easy"
    },
    {
      q_ar: "إذا كان البرنامج يعمل بدون أي توقف ولكنه يعطي نتيجة حسابية خاطئة، فما نوع هذا الخطأ؟",
      q_en: "If the program runs without crashing but yields a wrong mathematical result, what is it?",
      options_ar: ["خطأ تركيب كود (Syntax Error)", "خطأ أثناء التشغيل (Runtime Error)", "خطأ منطقي (Logic Error)", "خطأ في الشبكة"],
      options_en: ["Syntax Error", "Runtime Error", "Logic Error", "Network Error"],
      answer: 2,
      difficulty: "medium"
    },
    {
      q_ar: "ما هو الإجراء الصحيح عندما تظهر لك رسالة خطأ باللون الأحمر في لوحة التحكم؟",
      q_en: "What is the correct action when a red error message displays in the terminal?",
      options_ar: ["إغلاق المحرر والبدء من جديد", "قراءة تفاصيل رسالة الخطأ ورقم السطر لتحديد المشكلة وحلها بعقلانية", "تجاهل الرسالة وتشغيل البرنامج مجدداً", "حذف الكود بالكامل"],
      options_en: ["Close editor and start over", "Read error message and line number to understand and fix it logically", "Ignore it and run again", "Delete entire code"],
      answer: 1,
      difficulty: "easy"
    },
    {
      q_ar: "ما الخطأ البرمجي (Bug) الموجود في هذا الكود البرمجي الموضح بالأسفل؟",
      q_en: "What is the bug inside the code shown below?",
      code: "x = 10\ny = 0\nresult = x / y",
      options_ar: ["خطأ قواعد إملاء (Syntax Error)", "خطأ القسمة على صفر (ZeroDivisionError) أثناء التشغيل", "خطأ منطقي (Logic Error)", "لا يوجد خطأ"],
      options_en: ["Syntax Error", "ZeroDivisionError at runtime", "Logic Error", "No error"],
      answer: 1,
      difficulty: "hard",
      visualType: "console",
      visualData: {
        lines: [
          "> x = 10",
          "> y = 0",
          "> result = x / y",
          "!ZeroDivisionError: division by zero"
        ]
      }
    }
  ]
};

const technicalTerms = {
  programming: [
    ["Variables", "Integers", "Strings", "Booleans", "RAM", "Declaration", "Assignment", "Memory Cells"],
    ["Operators", "Comparison", "Truth Values", "Logic Gates", "Precedence", "Conditions"],
    ["Inputs", "Outputs", "Casting", "Keyboards", "Console Outputs", "Standard Output"],
    ["Indentation", "Scope", "Parentheses", "Line Flow", "Syntax Structure"],
    ["Documentation", "Single Line", "Multi Line", "Disabled Blocks", "Code Maintenance"],
    ["Arrays", "Index Counts", "Append Functions", "Insertion Methods", "Element Extraction"],
    ["Syntax Errors", "Logic Flaws", "Runtime Bugs", "Console Trackbacks", "Problem Solving"]
  ],
  ai: [
    ["Linear Algebra", "Calculus", "Probability", "Statistics", "Optimization", "Vectors", "Matrices"],
    ["Data Cleaning", "Preprocessing", "EDA", "Feature Engineering", "Wrangling", "Outliers"],
    ["Supervised Learning", "Linear Regression", "SVM", "Decision Trees", "Random Forest", "Logistic Regression"],
    ["Unsupervised Learning", "Clustering", "K-Means", "PCA", "Dimensionality Reduction", "Anomaly Detection"],
    ["Neural Networks", "Deep Learning", "Backpropagation", "Activation Functions", "Layers", "Weights"],
    ["NLP", "Transformers", "LLM", "Tokenization", "Embeddings", "Sentiment Analysis", "NLTK"],
    ["Computer Vision", "CNN", "Image Recognition", "OCR", "Object Detection", "OpenCV"]
  ],
  cs: [
    ["Information Security", "CIA Triad", "Risk Management", "Compliance", "Governance", "Threats"],
    ["Network Security", "Firewall", "VPN", "IDS", "IPS", "Protocols", "TCP/IP", "Wireshark"],
    ["Cryptography", "Encryption", "Decryption", "AES", "RSA", "Hashing", "PKI", "Certificates"],
    ["Ethical Hacking", "Penetration Testing", "Vulnerability", "Exploits", "Metasploit", "Nmap"],
    ["Digital Forensics", "Incident Response", "Evidences", "Logs", "Malware Analysis", "SIEM"],
    ["Application Security", "OWASP", "XSS", "SQL Injection", "CSRF", "Secure Coding", "Fuzzing"],
    ["Cloud Security", "IAM", "VPC Security", "Serverless Security", "Containers Security"]
  ],
  network: [
    ["OSI Model", "Physical Layer", "Data Link", "Network Layer", "Transport Layer", "Application Layer"],
    ["BGP", "OSPF", "EIGRP", "RIP", "Routing", "Switching", "VLAN", "Trunking"],
    ["Administration", "Monitoring", "Configuration", "Troubleshooting", "SNMP", "Syslog"],
    ["IPS", "IDS", "WAF", "Network Security Design", "Access Control Lists", "Radius", "Tacacs+"],
    ["SDN", "NFV", "OpenFlow", "Control Plane", "Data Plane", "Network Automation"],
    ["Cloud Networking", "Hybrid Cloud", "Direct Connect", "Interconnect", "Virtual Private Cloud"],
    ["Diagnostics", "Packet Loss", "Latency", "Jitter", "Ping", "Traceroute", "Throughput"]
  ],
  finance: [
    ["Fintech Foundations", "Digital Transformation", "Payment Systems", "Open Banking", "APIs"],
    ["Blockchain Architecture", "Consensus", "Nodes", "Ledgers", "Smart Contracts", "EVM"],
    ["Digital Assets", "Cryptocurrency", "Tokens", "Stablecoins", "Wallets", "Custody"],
    ["DeFi", "Liquidity Pools", "Yield Farming", "AMM", "Lending Protocols", "Governance"],
    ["Digital Banking", "Neo-banks", "Mobile Payments", "Remittances", "E-wallets"],
    ["Financial Regulations", "Compliance", "AML", "KYC", "GDPR", "Financial Security"],
    ["Data Analysis", "Forecasting", "Quantitative Finance", "Market Analysis", "Trends"]
  ]
};

export const getSectionQuestions = (trackName, sectionIndex, count, lang = 'ar') => {
  const isprogramming = trackName.toLowerCase() === 'se' || trackName.toLowerCase() === 'programming';
  
  if (isprogramming) {
    const customList = programmingQuestions[sectionIndex] || [];
    if (customList.length > 0) {
      const result = [];
      for (let i = 0; i < count; i++) {
        const template = customList[i % customList.length];
        result.push({
          q: lang === 'ar' ? template.q_ar : template.q_en,
          options: lang === 'ar' ? template.options_ar : template.options_en,
          answer: template.answer,
          difficulty: template.difficulty,
          code: template.code || null,
          visualType: template.visualType || null,
          visualData: template.visualData || null
        });
      }
      return result;
    }
  }

  // Fallback dynamic generator for other tracks (or if no custom list)
  const terms = technicalTerms[trackName.toLowerCase()]?.[sectionIndex] || ["General", "Tech", "Concept"];
  const result = [];
  
  for (let i = 0; i < count; i++) {
    const term = terms[i % terms.length];
    const type = i % 5;
    let q = "";
    let options = [];
    
    if (lang === 'ar') {
      if (type === 0) {
        q = `ما هو الدور الأساسي لـ ${term} في هذا القسم؟`;
        options = [`تنظيم ومعالجة ${term}`, `تأمين بيانات ${term}`, `توفير واجهة لـ ${term}`, `تحليل مخرجات ${term}`];
      } else if (type === 1) {
        q = `كيف يؤثر الاستخدام الصحيح لـ ${term} على كفاءة العمل؟`;
        options = ["بتقليل زمن الاستجابة", "بتسهيل عملية الصيانة", "بزيادة درجة الأمان", "بكل ما ذكر أعلاه"];
      } else if (type === 2) {
        q = `في أي مرحلة من مراحل العمل نستخدم ${term} بشكل أساسي؟`;
        options = ["مرحلة التخطيط", "مرحلة التنفيذ الفعلي", "مرحلة الاختبار", "مرحلة الإطلاق"];
      } else if (type === 3) {
        q = `ما هي المشكلة الأكثر شيوعاً التي يحلها ${term} في هذا السياق؟`;
        options = ["تكرار البيانات", "بطء النظام", "عدم توافق المعايير", "صعوبة التحكم في الجودة"];
      } else {
        q = `أي من الخيارات التالية يصف ${term} بدقة عالية؟`;
        options = ["أداة لتقييم المخاطر", "منهجية لتطوير الأنظمة", "إطار عمل للحلول الذكية", "جميع ما سبق صحيح"];
      }
    } else {
      if (type === 0) {
        q = `What is the primary role of ${term} in this section?`;
        options = [`Organizing and processing ${term}`, `Securing ${term} data`, `Providing an interface for ${term}`, `Analyzing ${term} outputs`];
      } else if (type === 1) {
        q = `How does the correct use of ${term} affect work efficiency?`;
        options = ["By reducing latency", "By facilitating maintenance", "By increasing security level", "All of the above"];
      } else if (type === 2) {
        q = `At what stage of work is ${term} primarily used?`;
        options = ["Planning stage", "Actual execution stage", "Testing stage", "Deployment stage"];
      } else if (type === 3) {
        q = `What is the most common problem ${term} solves in this context?`;
        options = ["Data duplication", "System slowness", "Standards incompatibility", "Quality control difficulty"];
      } else {
        q = `Which of the following options describes ${term} with high accuracy?`;
        options = ["Risk assessment tool", "System development methodology", "Smart solutions framework", "All of the above are correct"];
      }
    }
    
    result.push({ q, options, answer: (i % 4), difficulty: i % 3 === 0 ? "hard" : "easy" });
  }
  return result;
};

export const trackQuestionsDB = {
  se: Array.from({ length: 7 }, (_, i) => getSectionQuestions('se', i, 400, 'ar')).flat(),
  ai: Array.from({ length: 7 }, (_, i) => getSectionQuestions('ai', i, 400, 'ar')).flat(),
  cs: Array.from({ length: 7 }, (_, i) => getSectionQuestions('cs', i, 400, 'ar')).flat(),
  network: Array.from({ length: 7 }, (_, i) => getSectionQuestions('network', i, 400, 'ar')).flat(),
  finance: Array.from({ length: 7 }, (_, i) => getSectionQuestions('finance', i, 400, 'ar')).flat(),
};
