// الأمن السيبراني · S3 أمن الأنظمة · L5 السجلات والمراقبة
// ثلاثة مواضيع مترابطة: مصادر السجلات · حماية السجل وسلامته · الكشف والتنبيه
//
// آخر مستويات القسم، ويجمع ما سبقه: من دخل (L3) وما الذي قُوِّي (L4)
// لا يُعرَف أثره إلا بسجل. ولا يستبق S6 (التحقيق الجنائي والاستجابة)
// ولا S7 (مراكز العمليات وSIEM) — هنا السجل على المضيف لا منصّة الربط.
//
// مستوى خامس: البدائل كلها صحيحة في ذاتها، وواحدة فقط تجيب السؤال المطروح.

const T = 'CyberSecurity';
const S = 'System and Operating System Security';
const L = 5;

const SRC = 'Log Sources';
const INT = 'Log Integrity';
const DET = 'Detection and Alerting';

const raw = [

// ═══════════ اختيار من متعدد · ٣٠ ═══════════

// ── مصادر السجلات (١٠) ──
{ topic: SRC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجيب عنه سجل النظام دون غيره؟',
  options: ['ما الذي جرى ومتى وبأي هوية', 'ما الذي يجب تقويته في النظام', 'ما الثغرات القائمة في البرمجيات', 'ما الصلاحيات الممنوحة للحسابات'],
  correct_answer: 0,
  explanation: 'الضوابط الأخرى تصف الحال، والسجل وحده يحفظ ما وقع فعلاً.' },

{ topic: SRC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يميّز سجل التدقيق عن سجل التطبيق؟',
  options: ['يسجّل الأحداث الأمنية للنظام', 'يسجّل أخطاء البرنامج وقت وقوعها', 'يسجّل استهلاك الموارد لحظياً', 'يسجّل رسائل المستخدم للدعم'],
  correct_answer: 0,
  explanation: 'الأول يخدم المساءلة، والثاني يخدم تشخيص عطل البرنامج.' },

{ topic: SRC, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا لا يكفي تسجيل الدخول الناجح وحده؟',
  options: ['الفشل المتكرر يكشف محاولة تخمين', 'الناجح يستهلك مساحة أكبر بكثير', 'الناجح لا يحمل طابعاً زمنياً دقيقاً', 'الفشل يُسجَّل تلقائياً في كل نظام'],
  correct_answer: 0,
  explanation: 'خمسون فشلاً ثم نجاح واحد نمط لا يظهر إن سُجِّل الناجح فقط.' },

{ topic: SRC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجب تسجيله عند تغيير صلاحية حساب؟',
  options: ['من غيّرها ومتى وما القيمة السابقة', 'اسم الحساب المتأثر بالتغيير فقط', 'وقت التغيير دون هوية من نفّذه', 'القيمة الجديدة دون ما سبقها'],
  correct_answer: 0,
  explanation: 'بلا القيمة السابقة وهوية المنفّذ لا يُعرَف ما تغيّر ولا من غيّره.' },

{ topic: SRC, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا يُوحَّد التوقيت بين كل الأنظمة؟',
  options: ['لترتيب الأحداث عبر الأجهزة معاً', 'لتقليل حجم ملفات السجل كثيراً', 'لتسريع كتابة السجل على القرص', 'لمنع تكرار السطر نفسه مرتين'],
  correct_answer: 0,
  explanation: 'اختلاف الساعات دقيقتين يقلب ترتيب سلسلة الأحداث كلها.' },

{ topic: SRC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يفقده التسجيل المفرط في التفصيل؟',
  options: ['يغرق المهم في كمّ لا يُقرأ', 'يمنع النظام من الإقلاع لاحقاً', 'يوقف كتابة السجلات الأمنية', 'يمنع توحيد التوقيت بين الأجهزة'],
  correct_answer: 0,
  explanation: 'سجل يكتب كل شيء يساوي سجلاً لا يقرؤه أحد.' },

{ topic: SRC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يحدد مدة الاحتفاظ بالسجلات؟',
  options: ['متوسط زمن اكتشاف الاختراق', 'المساحة المتاحة على الخادم', 'عدد المستخدمين في النظام', 'عدد الأحداث في اليوم الواحد'],
  correct_answer: 0,
  explanation: 'مدة أقصر من زمن الاكتشاف تعني ضياع دليل الحادثة قبل بدء البحث.' },

{ topic: SRC, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا تُجمَع السجلات على خادم منفصل؟',
  options: ['لتبقى بعد سقوط الجهاز أو العبث به', 'لتقليل استهلاك القرص المحلي', 'لتسريع البحث في السجل المحلي', 'لتوحيد صيغة السجل بين الأنظمة'],
  correct_answer: 0,
  explanation: 'أول ما يفعله المهاجم مسح سجل الجهاز الذي دخله.' },

{ topic: SRC, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي لا يجوز أن يظهر في السجل إطلاقاً؟',
  options: ['كلمة المرور التي حاول بها', 'اسم الحساب الذي حاول الدخول', 'عنوان الجهاز مصدر المحاولة', 'وقت المحاولة ونتيجتها'],
  correct_answer: 0,
  explanation: 'السجل يُقرأ على نطاق أوسع من قاعدة البيانات، فتسريبه يكشف الاعتماد.' },

{ topic: SRC, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يكشفه غياب حدث متوقّع من السجل؟',
  options: ['احتمال تعطيل التسجيل أو حذفه', 'أن الحدث لم يقع في النظام قطعاً', 'أن السجل ممتلئ ولا يقبل كتابة', 'أن التوقيت غير موحّد بين الأجهزة'],
  correct_answer: 0,
  explanation: 'الفجوة في سجل يعمل دليل بذاتها، ولذلك يُراقَب انقطاع التسجيل.' },

// ── حماية السجل وسلامته (١٠) ──
{ topic: INT, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا يُمنع مسؤول النظام من تعديل سجل التدقيق؟',
  options: ['ليصلح السجل دليلاً على فعله هو', 'ليقل حجم السجل على القرص', 'ليتمكن من قراءته بسرعة أكبر', 'ليوحَّد شكله بين كل الأنظمة'],
  correct_answer: 0,
  explanation: 'سجل يستطيع المراقَب تعديله لا يُثبِت شيئاً ضده.' },

{ topic: INT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجعل السجل قابلاً للإضافة دون التعديل؟',
  options: ['صلاحية كتابة بلا صلاحية تغيير', 'تشفير الملف بمفتاح المسؤول', 'ضغط الملف بعد كل كتابة', 'نسخه دورياً إلى قرص آخر'],
  correct_answer: 0,
  explanation: 'الإضافة فقط تمنع محو سطر سابق وإن بقيت الكتابة ممكنة.' },

{ topic: INT, difficulty: 'hard', type: 'multiple-choice',
  question: 'كيف تُكشَف محاولة تعديل سطر في سجل محفوظ؟',
  options: ['ببصمة تُحسب على المحتوى وتُقارَن', 'بمقارنة حجم الملف بحجمه أمس', 'بعدّ الأسطر في نهاية كل يوم', 'بمراجعة وقت آخر تعديل للملف'],
  correct_answer: 0,
  explanation: 'تغيير حرف واحد يقلب البصمة، بخلاف الحجم ووقت التعديل فيسهل تزويرهما.' },

{ topic: INT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يمنع المهاجم من محو أثره بعد الدخول؟',
  options: ['نقل السجل فور كتابته لخادم آخر', 'زيادة حجم ملف السجل المحلي', 'تشفير السجل على الجهاز نفسه', 'تقليل عدد الأحداث المسجّلة'],
  correct_answer: 0,
  explanation: 'ما غادر الجهاز لا يبلغه من سيطر عليه بعد ذلك.' },

{ topic: INT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما خطر امتلاء مساحة السجل على الجهاز؟',
  options: ['تتوقف كتابة الأحداث الجديدة', 'يُعاد ترتيب الأحداث القديمة', 'تتغيّر صيغة الأسطر المكتوبة', 'يفقد السجل طابعه الزمني'],
  correct_answer: 0,
  explanation: 'ولذلك يُراقَب امتلاء المساحة كحدث أمني لا كمسألة تشغيلية.' },

{ topic: INT, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا تُراقَب عملية إيقاف خدمة التسجيل نفسها؟',
  options: ['إيقافها يسبق إخفاء بقية النشاط', 'إيقافها يوفّر موارد على الجهاز', 'إيقافها يسرّع إقلاع النظام', 'إيقافها يمنع امتلاء القرص'],
  correct_answer: 0,
  explanation: 'من أراد ألا يُرى يطفئ العين أولاً، فالإطفاء نفسه حدث يستحق تنبيهاً.' },

{ topic: INT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما وظيفة تدوير ملفات السجل؟',
  options: ['يغلق الملف دورياً ويبدأ غيره', 'يحذف الأحداث الأقل أهمية', 'يعيد ترتيب الأسطر بالتوقيت', 'يدمج سجلات الأجهزة في ملف'],
  correct_answer: 0,
  explanation: 'الملف المغلق أسهل أرشفة وتوقيعاً وأقل عرضة للتلف عند الامتلاء.' },

{ topic: INT, difficulty: 'medium', type: 'multiple-choice',
  question: 'من يجب أن يملك صلاحية قراءة سجل التدقيق؟',
  options: ['من يحتاجه لمهمته لا كل إداري', 'كل من يملك حساباً على النظام', 'مسؤول النظام وحده دون سواه', 'المستخدمون المذكورون فيه فقط'],
  correct_answer: 0,
  explanation: 'السجل يحوي أسماء وعناوين وأنماط عمل، فقراءته تخضع لأقل صلاحية أيضاً.' },

{ topic: INT, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يفقده السجل إن لم يُحفَظ خارج متناول من يراقبه؟',
  options: ['قيمته كدليل عند النزاع', 'قابليته للبحث السريع', 'توحيد صيغته بين الأنظمة', 'دقة طابعه الزمني'],
  correct_answer: 0,
  explanation: 'الدليل الذي يملك المتهم تعديله لا يصلح إثباتاً في أي مراجعة.' },

{ topic: INT, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا يُوقَّع أرشيف السجل بعد إغلاقه؟',
  options: ['ليثبت أنه لم يتغيّر بعد ذلك', 'ليصغر حجمه قبل التخزين', 'ليُقرأ بأدوات التحليل مباشرة', 'ليُفهرَس بحسب نوع الحدث'],
  correct_answer: 0,
  explanation: 'التوقيع يربط المحتوى بلحظة إغلاقه فيكشف أي تعديل لاحق.' },

// ── الكشف والتنبيه (١٠) ──
{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الفرق بين حدث في السجل وتنبيه؟',
  options: ['التنبيه حدث استوجب نظراً بشرياً', 'التنبيه يُكتب في ملف منفصل', 'التنبيه لا يُحفَظ بعد قراءته', 'التنبيه يخص الشبكة دون النظام'],
  correct_answer: 0,
  explanation: 'كل تنبيه حدث، وليس كل حدث يستحق أن يُوقظ أحداً.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يجعل قاعدة التنبيه صالحة للعمل؟',
  options: ['أن يترتب على كل تنبيه فعل ممكن', 'أن تغطي أكبر عدد من الأحداث', 'أن تعمل بلا حاجة لخط أساس', 'أن تُطلق تنبيهاً لكل خطأ دخول'],
  correct_answer: 0,
  explanation: 'تنبيه لا يعرف قارئه ما يفعل به يُغلَق بلا نظر بعد أسبوع.' },

{ topic: DET, difficulty: 'hard', type: 'multiple-choice',
  question: 'لماذا تُضبَط عتبة التنبيه من خط أساس النظام؟',
  options: ['الطبيعي يختلف من نظام لآخر', 'العتبة الثابتة أدق في كل الحالات', 'خط الأساس يقلّل حجم السجل', 'العتبة تُشتق من حجم القرص'],
  correct_answer: 0,
  explanation: 'خمسون فشل دخول عادية على بوابة، وشاذة تماماً على خادم إداري.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما أثر كثرة التنبيهات الكاذبة على الفريق؟',
  options: ['يعتاد الإغلاق فيمر الحقيقي بينها', 'يزيد دقة الفرز مع التكرار', 'يقلّل حجم السجلات المخزّنة', 'يرفع أولوية التنبيهات الحقيقية'],
  correct_answer: 0,
  explanation: 'العلاج ضبط القاعدة لا زيادة عدد من يقرؤها.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يكشفه ربط حدثين من سجلين مختلفين؟',
  options: ['نمطاً لا يظهر في أيهما وحده', 'خطأ في توقيت أحد الجهازين', 'تكرار الحدث نفسه مرتين', 'امتلاء مساحة أحد السجلين'],
  correct_answer: 0,
  explanation: 'إنشاء حساب ثم منحه صلاحية إدارية بعد دقيقة: كل حدث وحده عادي.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'لماذا يُنبَّه عند إنشاء حساب إداري جديد؟',
  options: ['لأنه إجراء نادر عالي الأثر', 'لأنه يستهلك ترخيصاً إضافياً', 'لأنه يبطئ خادم الدليل', 'لأنه يغيّر صيغة السجل'],
  correct_answer: 0,
  explanation: 'القاعدة الجيدة تنبّه على النادر عالي الأثر لا على المتكرر العادي.' },

{ topic: DET, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يميّز الكشف بخط الأساس عن الكشف بالقاعدة؟',
  options: ['يكشف الشاذ الذي لا قاعدة له', 'ينتج إنذارات كاذبة أقل بكثير', 'لا يحتاج فترة تعلّم مسبقة', 'يعمل على سجل واحد فقط'],
  correct_answer: 0,
  explanation: 'القاعدة تمسك المعروف بدقة، وخط الأساس يمسك الجديد بضجيج أكثر.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما خطر بناء خط الأساس في فترة اختراق قائم؟',
  options: ['يصير نشاط المهاجم هو الطبيعي', 'يزيد حجم السجل المخزّن كثيراً', 'يمنع تشغيل قواعد التنبيه', 'يوقف جمع السجلات مؤقتاً'],
  correct_answer: 0,
  explanation: 'فلا يُنبَّه عنه أبداً لأنه صار جزءاً من المعتاد المسجَّل.' },

{ topic: DET, difficulty: 'medium', type: 'multiple-choice',
  question: 'ما الذي يقيس فاعلية المراقبة فعلاً؟',
  options: ['زمن كشف الحادثة الحقيقية', 'عدد التنبيهات المعالَجة يومياً', 'حجم السجلات المجموعة شهرياً', 'عدد القواعد المفعّلة في النظام'],
  correct_answer: 0,
  explanation: 'ألف تنبيه مغلق يومياً قد يعني غرقاً في الضجيج لا أماناً.' },

{ topic: DET, difficulty: 'hard', type: 'multiple-choice',
  question: 'ما الذي يجب فعله بقاعدة تنبيه لم تُطلق شيئاً منذ سنة؟',
  options: ['اختبارها للتأكد أنها تعمل', 'حذفها فوراً لعدم فائدتها', 'خفض عتبتها إلى أدنى قيمة', 'نسخها على بقية الأنظمة'],
  correct_answer: 0,
  explanation: 'الصمت قد يعني سلامة البيئة وقد يعني قاعدة معطّلة، ولا يُعرَف إلا باختبارها.' },

// ═══════════ كود · ١٠ ═══════════
{ topic: SRC, difficulty: 'medium', type: 'code',
  question: 'ما النمط الذي يكشفه هذا المقطع من السجل؟',
  code_snippet: '10:02:11 auth failure user=admin\n10:02:12 auth failure user=admin\n10:02:14 auth failure user=admin\n10:02:19 auth success user=admin',
  options: ['تخمين متتابع انتهى بنجاح', 'دخول عادي بعد خطأ طباعي', 'انقطاع شبكة أعاد المحاولة', 'خطأ في توحيد التوقيت'],
  correct_answer: 0,
  explanation: 'ثلاث محاولات في ثوانٍ ثم نجاح نمط تخمين لا خطأ إدخال.' },

{ topic: SRC, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في سطر السجل هذا؟',
  code_snippet: 'login attempt user=sara pass=Summer2024! result=failed',
  options: ['السطر يسجّل كلمة المرور نصاً', 'السطر يفتقر للطابع الزمني', 'السطر لا يذكر نتيجة المحاولة', 'السطر لا يحدد اسم الحساب'],
  correct_answer: 0,
  explanation: 'من يقرأ السجل يحصل على اعتماد صالح لحساب آخر ربما.' },

{ topic: SRC, difficulty: 'hard', type: 'code',
  question: 'ما الذي يمنع ترتيب هذي الأحداث بثقة؟',
  code_snippet: 'srv-a  09:15:03  session opened\nsrv-b  09:13:47  file accessed\nملاحظة: ساعة srv-b متأخرة دقيقتين',
  options: ['اختلاف الساعات يقلب التسلسل', 'السجلان بصيغتين مختلفتين', 'أحد السطرين بلا هوية مستخدم', 'الحدثان من نوعين مختلفين'],
  correct_answer: 0,
  explanation: 'بتصحيح الفارق يصير الوصول للملف بعد فتح الجلسة لا قبلها.' },

{ topic: INT, difficulty: 'hard', type: 'code',
  question: 'ما الذي تكشفه هذي الفجوة في السجل؟',
  code_snippet: '02:10:00 heartbeat ok\n02:11:00 heartbeat ok\n04:47:00 heartbeat ok\nlogging service: restarted 04:46:59',
  options: ['توقف التسجيل مدة طويلة ثم عاد', 'انقطاع الشبكة عن خادم السجل', 'امتلاء القرص ثم تفريغه', 'تغيّر التوقيت الصيفي للنظام'],
  correct_answer: 0,
  explanation: 'الفجوة مع إعادة تشغيل الخدمة نمط إخفاء أثر لا عطل عابر.' },

{ topic: INT, difficulty: 'hard', type: 'code',
  question: 'ما الذي يثبته اختلاف البصمة هنا؟',
  code_snippet: 'archive: auth-2026-08.log\nبصمة عند الإغلاق: a91f...\nبصمة اليوم:        c47d...',
  options: ['محتوى الأرشيف تغيّر بعد إغلاقه', 'الأرشيف نُسخ إلى موقع آخر', 'الأرشيف ضُغِط بخوارزمية جديدة', 'الأرشيف قُرئ بأداة مختلفة'],
  correct_answer: 0,
  explanation: 'القراءة والنسخ لا يغيّران البصمة، والتعديل وحده يقلبها.' },

{ topic: INT, difficulty: 'medium', type: 'code',
  question: 'ما الخلل في أذونات ملف السجل هذا؟',
  code_snippet: '-rw-rw-rw-  1 root root  /var/log/auth.log',
  options: ['كل مستخدم يستطيع تعديله', 'الجذر وحده يقرأ الملف', 'الملف بلا صلاحية قراءة', 'المجموعة تقرأ ولا تكتب'],
  correct_answer: 0,
  explanation: 'سجل يعدّله أي مستخدم لا يصلح دليلاً على أحد.' },

{ topic: DET, difficulty: 'hard', type: 'code',
  question: 'ما الذي يستوجب تنبيهاً في هذا التسلسل؟',
  code_snippet: '11:20 user=hr01 created account=tmp_svc\n11:21 user=hr01 added tmp_svc to domain-admins\n11:23 user=tmp_svc login from 10.0.4.9',
  options: ['حساب جديد نال صلاحية إدارية فوراً', 'موظف الموارد البشرية سجّل دخوله', 'الدخول جاء من شبكة داخلية', 'الأحداث الثلاثة في دقائق متتابعة'],
  correct_answer: 0,
  explanation: 'كل حدث وحده عادي، واجتماعها في دقيقتين نمط تصعيد صلاحية.' },

{ topic: DET, difficulty: 'hard', type: 'code',
  question: 'أي قاعدة تنبيه أنفع بحسب هذا الوصف؟',
  code_snippet: 'البيئة: بوابة عامة\nالمعتاد: ٤٠٠ فشل دخول يومياً\nالقاعدة الحالية: نبّه عند ١٠ حالات فشل',
  options: ['رفع العتبة بحسب معتاد البوابة', 'خفض العتبة لخمس حالات فشل', 'إلغاء التنبيه على الفشل نهائياً', 'نقل القاعدة لخادم آخر كما هي'],
  correct_answer: 0,
  explanation: 'عتبة أدنى من المعتاد تنتج ضجيجاً يومياً يُغلق بلا نظر.' },

{ topic: DET, difficulty: 'medium', type: 'code',
  question: 'ما الذي يميّز هذي المحاولة عن فشل عادي؟',
  code_snippet: '03:14 failed login user=admin  src=203.0.113.9\n03:14 failed login user=root   src=203.0.113.9\n03:14 failed login user=oracle src=203.0.113.9',
  options: ['مصدر واحد يجرّب حسابات مختلفة', 'حساب واحد يفشل من مصادر عدة', 'المحاولات في وقت الدوام الرسمي', 'الحسابات الثلاثة غير موجودة'],
  correct_answer: 0,
  explanation: 'تعداد الحسابات من مصدر واحد استطلاع لا خطأ مستخدم.' },

{ topic: SRC, difficulty: 'hard', type: 'code',
  question: 'ما الناقص في هذا السطر لسجل تدقيق؟',
  code_snippet: 'permission changed on /etc/shadow at 14:02',
  options: ['هوية من نفّذ التغيير وما سبقه', 'وقت التغيير بالدقيقة والثانية', 'اسم الملف الذي جرى تغييره', 'نوع العملية التي جرت عليه'],
  correct_answer: 0,
  explanation: 'بلا الفاعل والقيمة السابقة لا يفيد السطر في مساءلة ولا تحقيق.' },

// ═══════════ صح وخطأ · ١٠ ═══════════
{ topic: SRC, difficulty: 'medium', type: 'true-false',
  question: 'تسجيل محاولات الدخول الفاشلة يكشف أنماطاً لا يكشفها الناجح وحده.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'خمسون فشلاً ثم نجاح واحد نمط تخمين ظاهر.' },

{ topic: SRC, difficulty: 'medium', type: 'true-false',
  question: 'كلما زاد تفصيل السجل زادت قدرة الفريق على الكشف.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'التفصيل المفرط يغرق المهم في كمّ لا يُقرأ.' },

{ topic: SRC, difficulty: 'medium', type: 'true-false',
  question: 'مدة احتفاظ أقصر من زمن اكتشاف الاختراق تضيّع دليل الحادثة.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'يبدأ البحث بعد أن يكون السجل قد حُذِف بالفعل.' },

{ topic: INT, difficulty: 'medium', type: 'true-false',
  question: 'سجل يستطيع مسؤول النظام تعديله يصلح دليلاً على فعله.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الدليل الذي يملك المتهم تغييره لا يثبت شيئاً ضده.' },

{ topic: INT, difficulty: 'medium', type: 'true-false',
  question: 'نقل السجل فور كتابته لخادم منفصل يحدّ من قدرة المهاجم على محو أثره.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'ما غادر الجهاز لا يبلغه من سيطر عليه بعد ذلك.' },

{ topic: INT, difficulty: 'hard', type: 'true-false',
  question: 'مقارنة حجم ملف السجل بحجمه أمس تكفي لكشف التعديل.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'استبدال سطر بآخر بالطول نفسه لا يغيّر الحجم، والبصمة وحدها تكشفه.' },

{ topic: INT, difficulty: 'medium', type: 'true-false',
  question: 'إيقاف خدمة التسجيل حدث أمني يستحق تنبيهاً بذاته.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'من أراد ألا يُرى يطفئ العين أولاً.' },

{ topic: DET, difficulty: 'hard', type: 'true-false',
  question: 'عتبة تنبيه ثابتة تصلح لكل الأنظمة ما دامت محسوبة بدقة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'الطبيعي يختلف بين بوابة عامة وخادم إداري، فتُشتق العتبة من خط الأساس.' },

{ topic: DET, difficulty: 'medium', type: 'true-false',
  question: 'خط أساس بُني أثناء اختراق قائم يجعل نشاط المهاجم طبيعياً.',
  options: ['صح', 'خطأ'], correct_answer: 0,
  explanation: 'فلا يُنبَّه عنه لأنه صار جزءاً من المعتاد المسجَّل.' },

{ topic: DET, difficulty: 'medium', type: 'true-false',
  question: 'عدد التنبيهات المعالَجة يومياً مقياس صادق لفاعلية المراقبة.',
  options: ['صح', 'خطأ'], correct_answer: 1,
  explanation: 'كثرتها قد تعني ضجيجاً، والمقياس زمن كشف الحادثة الحقيقية.' },

// ═══════════ توصيل · ١٠ ═══════════
{ topic: SRC, difficulty: 'medium', type: 'matching',
  question: 'صل كل سجل بما يجيب عنه',
  pairs: [ { left: 'سجل التدقيق', right: 'من فعل ماذا ومتى' }, { left: 'سجل التطبيق', right: 'أين أخفق البرنامج' }, { left: 'سجل النظام', right: 'ما حدث في الخدمات' }, { left: 'سجل الوصول', right: 'من بلغ أي مورد' } ],
  explanation: 'التحقيق يبدأ باختيار السجل الذي يجيب سؤالك لا بقراءة الكل.' },

{ topic: SRC, difficulty: 'medium', type: 'matching',
  question: 'صل كل عنصر في سطر السجل بدوره',
  pairs: [ { left: 'الطابع الزمني', right: 'ترتيب الحدث في السلسلة' }, { left: 'هوية الفاعل', right: 'نسبة الفعل إلى صاحبه' }, { left: 'نوع العملية', right: 'ما الذي جرى فعلاً' }, { left: 'القيمة السابقة', right: 'ما الذي تغيّر عمّا كان' } ],
  explanation: 'سقوط أي عنصر يفقد السطر قيمته في المساءلة.' },

{ topic: INT, difficulty: 'hard', type: 'matching',
  question: 'صل كل ضابط سلامة بما يمنعه',
  pairs: [ { left: 'الإضافة دون التعديل', right: 'محو سطر سابق' }, { left: 'البصمة على الأرشيف', right: 'تغيير خفي بعد الإغلاق' }, { left: 'النقل الفوري للخادم', right: 'مسح السجل بعد السيطرة' }, { left: 'تقييد صلاحية القراءة', right: 'اطلاع لا تقتضيه المهمة' } ],
  explanation: 'الأربعة تحمي أبعاداً مختلفة، والسلامة تحتاجها مجتمعة.' },

{ topic: INT, difficulty: 'medium', type: 'matching',
  question: 'صل كل مؤشر بما يرجّحه',
  pairs: [ { left: 'فجوة زمنية في السجل', right: 'تعطيل التسجيل أو حذفه' }, { left: 'بصمة أرشيف مختلفة', right: 'تعديل بعد الإغلاق' }, { left: 'إعادة تشغيل خدمة السجل', right: 'محاولة إخفاء نشاط' }, { left: 'امتلاء مساحة السجل', right: 'توقف تسجيل الجديد' } ],
  explanation: 'ثلاثة منها تُقرأ كنشاط مقصود لا كعطل تشغيلي.' },

{ topic: DET, difficulty: 'medium', type: 'matching',
  question: 'صل كل حدث بأولوية التنبيه المناسبة',
  pairs: [ { left: 'إنشاء حساب إداري', right: 'تنبيه فوري عالي الأولوية' }, { left: 'فشل دخول واحد', right: 'تسجيل بلا تنبيه' }, { left: 'إيقاف خدمة التسجيل', right: 'تنبيه فوري عالي الأولوية' }, { left: 'تسجيل خروج معتاد', right: 'تسجيل بلا تنبيه' } ],
  explanation: 'التنبيه للنادر عالي الأثر، والباقي يُسجَّل ولا يُوقظ أحداً.' },

{ topic: DET, difficulty: 'hard', type: 'matching',
  question: 'صل كل أسلوب كشف في السجلات بحدّه',
  pairs: [ { left: 'الكشف بالقاعدة', right: 'يعجز عن الجديد بلا قاعدة' }, { left: 'الكشف بخط الأساس', right: 'ينتج إنذارات كاذبة أكثر' }, { left: 'الربط بين السجلات', right: 'يحتاج توقيتاً موحّداً' } ],
  explanation: 'لكل أسلوب ثمنه، ولذلك تُستخدم مجتمعة لا بديلاً عن بعضها.' },

{ topic: DET, difficulty: 'hard', type: 'matching',
  question: 'صل كل مقياس بما يقيسه فعلاً',
  pairs: [ { left: 'زمن الكشف', right: 'من الاختراق إلى ملاحظته' }, { left: 'زمن الفرز', right: 'من التنبيه إلى القرار' }, { left: 'عدد التنبيهات', right: 'حجم الضجيج غالباً' }, { left: 'نسبة الكاذب', right: 'جودة ضبط القواعد' } ],
  explanation: 'أول اثنين يُحكَم بهما، والثالث مضلّل وحده.' },

{ topic: SRC, difficulty: 'medium', type: 'matching',
  question: 'صل كل قرار تسجيل بمبرره',
  pairs: [ { left: 'توحيد التوقيت', right: 'ترتيب الأحداث عبر الأجهزة' }, { left: 'الجمع المركزي', right: 'بقاء السجل بعد سقوط الجهاز' }, { left: 'تحديد مدة الاحتفاظ', right: 'تجاوز زمن اكتشاف الاختراق' }, { left: 'حجب الاعتماد', right: 'منع تسريبه عبر السجل' } ],
  explanation: 'كل قرار يعالج خطراً بعينه في دورة حياة السجل.' },

{ topic: INT, difficulty: 'medium', type: 'matching',
  question: 'صل كل مرحلة من عمر السجل بضابطها',
  pairs: [ { left: 'الكتابة', right: 'إضافة دون تعديل' }, { left: 'النقل', right: 'قناة مؤمَّنة فور الكتابة' }, { left: 'الأرشفة', right: 'توقيع يثبت عدم التغيّر' }, { left: 'الإتلاف', right: 'بعد انتهاء مدة الاحتفاظ' } ],
  explanation: 'السلامة تُحفظ في كل مرحلة أو تسقط في أضعفها.' },

{ topic: DET, difficulty: 'hard', type: 'matching',
  question: 'صل كل نمط في السجل بدلالته',
  pairs: [ { left: 'فشل متكرر ثم نجاح', right: 'تخمين انتهى ببلوغ الحساب' }, { left: 'مصدر واحد وحسابات كثيرة', right: 'تعداد حسابات واستطلاع' }, { left: 'إنشاء حساب ثم رفع صلاحيته', right: 'تصعيد صلاحية مقصود' } ],
  explanation: 'كل نمط يجتمع من أحداث كل واحد منها عادي وحده.' },

// ═══════════ تيرمنال · ١٠ ═══════════
{ topic: SRC, difficulty: 'medium', type: 'terminal', prompt_label: 'الإجراء',
  question: 'اكتب اسم الإجراء الذي يوحّد ساعات الأنظمة ليصح ترتيب الأحداث',
  expected_answers: ['توحيد التوقيت', 'مزامنة الوقت', 'time synchronization', 'مزامنة الساعة', 'توحيد الساعة'],
  explanation: 'اختلاف دقيقتين يقلب تسلسل سلسلة الأحداث كلها.' },

{ topic: SRC, difficulty: 'medium', type: 'terminal', prompt_label: 'المعيار',
  question: 'اكتب المعيار الذي تُقاس به مدة الاحتفاظ بالسجلات',
  expected_answers: ['زمن اكتشاف الاختراق', 'زمن الكشف', 'متوسط زمن الاكتشاف', 'مدة اكتشاف الاختراق', 'زمن الكشف عن الاختراق'],
  explanation: 'مدة أقصر منه تعني ضياع الدليل قبل بدء البحث.' },

{ topic: SRC, difficulty: 'hard', type: 'terminal', prompt_label: 'الممارسة',
  question: 'اكتب اسم ممارسة جمع سجلات الأجهزة على خادم منفصل',
  expected_answers: ['الجمع المركزي', 'التجميع المركزي', 'central logging', 'centralized logging', 'السجل المركزي', 'المركزية'],
  explanation: 'أول ما يفعله المهاجم مسح سجل الجهاز الذي دخله.' },

{ topic: INT, difficulty: 'medium', type: 'terminal', prompt_label: 'الخاصية',
  question: 'اكتب اسم الخاصية التي تسمح بالكتابة في السجل وتمنع تعديل ما كُتِب',
  expected_answers: ['الإضافة فقط', 'append only', 'append-only', 'الإلحاق فقط', 'الكتابة بالإضافة فقط'],
  explanation: 'تمنع محو سطر سابق وإن بقيت الكتابة ممكنة.' },

{ topic: INT, difficulty: 'hard', type: 'terminal', prompt_label: 'الأداة',
  question: 'اكتب اسم القيمة التي تُحسب على محتوى الأرشيف لكشف أي تعديل لاحق',
  expected_answers: ['البصمة', 'بصمة التلبيد', 'hash', 'قيمة التلبيد', 'البصمة الرقمية'],
  explanation: 'تغيير حرف واحد يقلبها، بخلاف الحجم ووقت التعديل.' },

{ topic: INT, difficulty: 'medium', type: 'terminal', prompt_label: 'العملية',
  question: 'اكتب اسم العملية التي تغلق ملف السجل دورياً وتبدأ غيره',
  expected_answers: ['تدوير السجلات', 'التدوير', 'log rotation', 'تدوير ملفات السجل', 'دوران السجلات'],
  explanation: 'الملف المغلق أسهل أرشفة وتوقيعاً وأقل عرضة للتلف.' },

{ topic: DET, difficulty: 'hard', type: 'terminal', prompt_label: 'المرجع',
  question: 'اكتب اسم المرجع الذي تُشتق منه عتبة التنبيه في كل نظام',
  expected_answers: ['خط الأساس', 'الخط الأساسي', 'baseline', 'خط أساس النظام', 'المعتاد'],
  explanation: 'الطبيعي يختلف بين بوابة عامة وخادم إداري.' },

{ topic: DET, difficulty: 'hard', type: 'terminal', prompt_label: 'الظاهرة',
  question: 'اكتب اسم الظاهرة التي يعتاد فيها الفريق إغلاق التنبيهات بلا نظر',
  expected_answers: ['إرهاق التنبيهات', 'إرهاق الإنذارات', 'alert fatigue', 'تعب التنبيهات', 'إجهاد التنبيهات'],
  explanation: 'العلاج ضبط القواعد لا زيادة عدد من يقرؤها.' },

{ topic: DET, difficulty: 'hard', type: 'terminal', prompt_label: 'العملية',
  question: 'اكتب اسم العملية التي تجمع حدثين من سجلين لتكشف نمطاً واحداً',
  expected_answers: ['الربط', 'ربط الأحداث', 'correlation', 'الارتباط', 'ربط السجلات'],
  explanation: 'إنشاء حساب ثم رفع صلاحيته: كل حدث وحده عادي.' },

{ topic: DET, difficulty: 'medium', type: 'terminal', prompt_label: 'المقياس',
  question: 'اكتب اسم المقياس الذي يحكم فاعلية المراقبة لا عدد التنبيهات',
  expected_answers: ['زمن الكشف', 'زمن كشف الحادثة', 'time to detect', 'مدة الكشف', 'زمن الاكتشاف'],
  explanation: 'ألف تنبيه مغلق يومياً قد يعني غرقاً في الضجيج لا أماناً.' },

// ═══════════ اختيار متعدد الإجابات · ١٠ ═══════════
{ topic: SRC, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يجب أن يحمله سطر سجل التدقيق؟',
  options: ['هوية من نفّذ العملية', 'الطابع الزمني الموحّد', 'كلمة المرور المستخدمة', 'حجم ملف السجل الحالي'],
  correct_answers: [0, 1],
  explanation: 'الاعتماد لا يُسجَّل إطلاقاً، وحجم الملف ليس خاصية للحدث.' },

{ topic: SRC, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يبرّر الجمع المركزي للسجلات؟',
  options: ['تقليل مساحة القرص المحلي فقط', 'إلغاء الحاجة لتوحيد التوقيت', 'بقاء السجل بعد العبث بالجهاز', 'إتاحة الربط بين أجهزة مختلفة'],
  correct_answers: [2, 3],
  explanation: 'المركزية تزيد الحاجة لتوحيد التوقيت ولا تلغيها.' },

{ topic: INT, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يحفظ سلامة السجل؟',
  options: ['الكتابة بالإضافة دون تعديل', 'منح كل إداري صلاحية تحريره', 'توقيع الأرشيف بعد إغلاقه', 'حذف الأسطر القديمة أسبوعياً'],
  correct_answers: [0, 2],
  explanation: 'التحرير والحذف يهدمان قيمة السجل كدليل.' },

{ topic: INT, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يُقرأ كمؤشر على إخفاء أثر؟',
  options: ['تدوير السجل في موعده المعتاد', 'فجوة زمنية في سجل يعمل', 'أرشفة السجل الشهري المعتادة', 'إعادة تشغيل خدمة التسجيل فجأة'],
  correct_answers: [1, 3],
  explanation: 'التدوير والأرشفة إجراءان مجدولان، والفجوة والإطفاء ليسا كذلك.' },

{ topic: DET, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يستحق تنبيهاً فورياً؟',
  options: ['إنشاء حساب إداري جديد', 'تسجيل خروج مستخدم عادي', 'قراءة ملف عام مشترك', 'إيقاف خدمة التسجيل'],
  correct_answers: [0, 3],
  explanation: 'التنبيه للنادر عالي الأثر لا للمتكرر العادي.' },

{ topic: DET, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي صحيح عن الإنذارات الكاذبة؟',
  options: ['وجودها دليل على دقة الكشف', 'تُعالَج بضبط القواعد', 'كثرتها تُمرِّر التنبيه الحقيقي', 'تُعالَج بزيادة عدد المحللين'],
  correct_answers: [1, 2],
  explanation: 'زيادة القارئين تؤجّل المشكلة ولا تحلّها.' },

{ topic: DET, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي يقيس فاعلية المراقبة؟',
  options: ['زمن كشف الحادثة', 'زمن الفرز حتى القرار', 'حجم السجلات المخزّنة', 'عدد القواعد المفعّلة'],
  correct_answers: [0, 1],
  explanation: 'الحجم وعدد القواعد يصفان الجهد لا النتيجة.' },

{ topic: SRC, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي يجب تسجيله عند تغيير صلاحية؟',
  options: ['سرعة تنفيذ العملية', 'حجم قاعدة الحسابات', 'هوية من نفّذ التغيير', 'القيمة قبل التغيير'],
  correct_answers: [2, 3],
  explanation: 'بلا الفاعل والقيمة السابقة لا يفيد السطر في مساءلة.' },

{ topic: INT, difficulty: 'medium', type: 'multi-select',
  question: 'أي مما يلي خطر في ترك السجل على الجهاز وحده؟',
  options: ['يمحوه من سيطر على الجهاز', 'يصعب توحيد صيغته لاحقاً', 'يضيع بسقوط قرص الجهاز', 'يستهلك ذاكرة الجهاز كلها'],
  correct_answers: [0, 2],
  explanation: 'الخطران يمسّان بقاء الدليل نفسه لا شكله ولا أداء الجهاز.' },

{ topic: DET, difficulty: 'hard', type: 'multi-select',
  question: 'أي مما يلي شرط في قاعدة تنبيه صالحة؟',
  options: ['تغطية أكبر عدد من الأحداث', 'عتبة مشتقة من خط الأساس', 'تنبيه على كل خطأ دخول', 'فعل ممكن يترتب على التنبيه'],
  correct_answers: [1, 3],
  explanation: 'التغطية الشاملة والتنبيه على كل خطأ ينتجان ضجيجاً يُغلَق بلا نظر.' },

// ═══════════ ترتيب · ١٠ ═══════════
{ topic: SRC, difficulty: 'medium', type: 'ordering',
  question: 'رتّب مراحل دورة حياة السجل',
  options: ['كتابة الحدث على المضيف', 'نقله للخادم المركزي', 'أرشفته بعد إغلاق الملف', 'إتلافه بعد مدة الاحتفاظ'],
  explanation: 'الإتلاف مرحلة مخطَّطة لا إهمال، وتسبقها الأرشفة الموقَّعة.' },

{ topic: SRC, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات إعداد التسجيل على نظام جديد',
  options: ['تحديد الأحداث الواجب تسجيلها', 'توحيد توقيت النظام', 'توجيه السجل للخادم المركزي', 'تحديد مدة الاحتفاظ'],
  explanation: 'توحيد التوقيت قبل التوجيه وإلا وصلت الأحداث بترتيب خاطئ.' },

{ topic: INT, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التحقق من سلامة أرشيف سجل',
  options: ['جلب البصمة المحفوظة عند الإغلاق', 'حساب بصمة الأرشيف الحالي', 'مقارنة القيمتين', 'التحقيق عند اختلافهما'],
  explanation: 'البصمة المحفوظة تُجلب أولاً لأنها المرجع الذي يُقاس عليه.' },

{ topic: INT, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التعامل مع فجوة مكتشفة في السجل',
  options: ['تحديد بداية الفجوة ونهايتها', 'مراجعة حالة خدمة التسجيل', 'البحث عن مصدر بديل للفترة', 'توثيق الفجوة في التقرير'],
  explanation: 'المصدر البديل يعوّض ما ضاع، والتوثيق يثبت حدود ما لا يُعوَّض.' },

{ topic: DET, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات بناء قاعدة تنبيه جديدة',
  options: ['تحديد السلوك المراد كشفه', 'قياس معتاده من خط الأساس', 'ضبط العتبة والاختبار', 'تفعيلها مع فعل مترتب عليها'],
  explanation: 'التفعيل قبل قياس المعتاد ينتج ضجيجاً يومياً بلا فائدة.' },

{ topic: DET, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات معالجة تنبيه وارد',
  options: ['قراءة التنبيه وسياقه', 'مراجعة الأحداث المرتبطة به', 'تحديد كاذب أم حقيقي', 'التصعيد أو الإغلاق بالتوثيق'],
  explanation: 'الإغلاق يُوثَّق أيضاً، وإلا تكرر التنبيه بلا تعلّم.' },

{ topic: DET, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات علاج كثرة الإنذارات الكاذبة',
  options: ['حصر القواعد الأكثر ضجيجاً', 'مراجعة سبب إطلاقها', 'ضبط عتبتها أو شرطها', 'قياس الأثر بعد الضبط'],
  explanation: 'القياس بعد الضبط يمنع أن يخفي التحسين قاعدة صارت لا تعمل.' },

{ topic: SRC, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات ترتيب حدث عبر عدة أجهزة',
  options: ['التحقق من توحيد ساعاتها', 'تصحيح الفوارق المعروفة', 'دمج الأحداث في خط زمني', 'قراءة التسلسل الناتج'],
  explanation: 'الدمج قبل تصحيح الفوارق ينتج تسلسلاً مقلوباً يبدو سليماً.' },

{ topic: INT, difficulty: 'medium', type: 'ordering',
  question: 'رتّب خطوات تأمين سجل على مضيف',
  options: ['تقييد أذونات ملف السجل', 'جعله قابلاً للإضافة فقط', 'توجيهه لخادم منفصل', 'التنبيه عند إيقاف خدمته'],
  explanation: 'التنبيه آخراً لأنه يحرس الضوابط الثلاثة التي سبقته.' },

{ topic: DET, difficulty: 'hard', type: 'ordering',
  question: 'رتّب خطوات التحقق من قاعدة صامتة منذ مدة',
  options: ['مراجعة أنها ما زالت مفعّلة', 'توليد الحدث الذي تكشفه عمداً', 'التحقق من وصول التنبيه', 'إصلاحها أو توثيق صحتها'],
  explanation: 'الصمت قد يعني سلامة البيئة وقد يعني قاعدة معطّلة.' }

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
