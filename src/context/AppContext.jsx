import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
const [userProgress, setUserProgress] = useState([]);
const [journeyLogs, setJourneyLogs] = useState([]);
const [userAchievements, setUserAchievements] = useState([]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      console.log("GET USER:", data.user);
      setUser(data.user || null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("AUTH EVENT:", event);
      console.log("SESSION USER:", session?.user);

      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);
  useEffect(() => {

  if(!user?.id) return;


  const loadUserJourney = async () => {


    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();


    setProfile(profileData);



    const { data: progressData } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", user.id);


    setUserProgress(progressData || []);




    const { data: logsData } = await supabase
      .from("journey_logs")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", {
        ascending:false
      })
      .limit(10);


    setJourneyLogs(logsData || []);




    const { data: achievementsData } = await supabase
      .from("user_achievements")
      .select(`
        *,
        achievements(*)
      `)
      .eq("user_id", user.id);


    setUserAchievements(achievementsData || []);


  };


  loadUserJourney();


}, [user]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('appLanguage');
    return saved || 'ar'; // Default to Arabic as requested
  });
  const [theme, setTheme] = useState('dark');

  const [unlockedLevels, setUnlockedLevels] = useState(() => {
    const saved = localStorage.getItem('unlockedLevels');
    return saved ? JSON.parse(saved) : {};
  });

  const [userStats, setUserStats] = useState(() => {
    const saved = localStorage.getItem('userStats');
    return saved ? JSON.parse(saved) : {
      xp: 2500,
      level: 14,
      rank: 'Gold Specialist',
      totalQuestions: 1250,
      correctAnswers: 1100,
      streak: 15,
      badges: ['First Step', 'Code Master', 'Speed Runner']
    };
  });

  const t = (ar, en) => language === 'ar' ? ar : en;

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const addXP = (amount) => {
    setUserStats(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 1000) + 1;
      const ranks_ar = ['مبتدئ', 'مطور', 'مستشار', 'خبير', 'عالم', 'أسطورة'];
      const ranks_en = ['Novice', 'Developer', 'Consultant', 'Expert', 'Scientist', 'Legend'];
      const rankIdx = Math.min(newLevel - 1, ranks_ar.length - 1);
      const newRank = t(ranks_ar[rankIdx], ranks_en[rankIdx]);

      const updated = { ...prev, xp: newXP, level: newLevel, rank: newRank };
      localStorage.setItem('userStats', JSON.stringify(updated));
      return updated;
    });
  };

  const updateStats = (statsUpdate) => {
    setUserStats(prev => {
      const updated = { ...prev, ...statsUpdate };
      localStorage.setItem('userStats', JSON.stringify(updated));
      return updated;
    });
  };

  const unlockLevel = (trackId, sectionId, level) => {
    setUnlockedLevels(prev => {
      const updated = {
        ...prev,
        [`${trackId}-${sectionId}`]: Math.max(prev[`${trackId}-${sectionId}`] || 1, level)
      };
      localStorage.setItem('unlockedLevels', JSON.stringify(updated));
      return updated;
    });
    addXP(100);
  };

  const tracksInfo = {
   Programming: {
      id: 'Programming', name: 'Programming', name_ar: 'البرمجة', color: '#0d9488',
      slogan: 'Master the art of building scalable systems', slogan_ar: 'أتقن فن بناء الأنظمة القابلة للتوسع',
      description: 'This track covers the full software development lifecycle, from requirements to deployment.',
      description_ar: 'يغطي هذا المسار دورة حياة تطوير البرمجيات كاملة، من المتطلبات إلى النشر.',
      sections: [
        { title: 'Programming Basics', title_ar: 'أساسيات البرمجة', desc: 'Comments and variables, data types and I/O, operators and logic, loops and arrays, functions, errors, recursion, exception handling and modules.', desc_ar: 'التعليقات والمتغيرات · أنواع البيانات والإدخال والإخراج · العمليات والمنطق · التكرار والمصفوفات · الدوال والأخطاء والعودية ومعالجة الأخطاء والوحدات.' },
        { title: 'Computational Thinking and Algorithms', title_ar: 'التفكير البرمجي والخوارزميات', desc: 'Algorithm concepts and problem analysis, pseudocode and flowcharts, tracing and search, simple and advanced sorting, then Big-O complexity.', desc_ar: 'مفهوم الخوارزمية وتحليل المشكلة · الكود الوهمي والمخططات الانسيابية · التتبّع والبحث الخطي والثنائي · الترتيب البسيط والمتقدم · تعقيد Big-O ومقارنة الخوارزميات.' },
        { title: 'Object-Oriented and Advanced Programming', title_ar: 'البرمجة الكائنية والمتقدمة', desc: 'Why OOP, classes and attributes, methods and constructors, encapsulation and access modifiers, inheritance and polymorphism, then abstraction, SOLID and design patterns.', desc_ar: 'لماذا الكائنية والكلاس والخصائص · الدوال والباني · التغليف ومحددات الوصول · الوراثة وتعدد الأشكال · التجريد والواجهات وSOLID وأنماط التصميم.' },
        { title: 'Data Structures', title_ar: 'هياكل البيانات', desc: 'Arrays and multi-dimensional arrays, dynamic and linked lists, stacks and queues, trees and binary search trees, then graphs, hash tables and structure comparison.', desc_ar: 'المصفوفات ومتعددة الأبعاد · القوائم الديناميكية والمترابطة · المكدسات والطوابير · الأشجار وأشجار البحث الثنائي · الرسوم وجداول التقطيع ومقارنة الهياكل.' },
        { title: 'Software Development', title_ar: 'تطوير البرمجيات', desc: 'Dev environment and the command line, version control and Git, repositories, databases and SQL, database integration and REST APIs, then automated testing and deployment.', desc_ar: 'بيئة التطوير وسطر الأوامر · التحكم بالإصدارات وGit · المستودعات وقواعد البيانات وSQL · ربط قاعدة البيانات وAPI وREST · الاختبار الآلي والنشر.' },
        { title: 'Software Engineering', title_ar: 'هندسة البرمجيات', desc: 'Engineering concepts and the SDLC, development models and requirements, analysis, architecture and UML, architectural patterns, QA and testing types, then maintenance and Agile.', desc_ar: 'مفهوم الهندسة ودورة الحياة SDLC · نماذج التطوير وجمع المتطلبات · التحليل والتصميم المعماري وUML · الأنماط المعمارية وضمان الجودة والاختبارات · الصيانة وAgile وScrum.' },
        { title: 'Programming Specializations', title_ar: 'التخصصات البرمجية', desc: 'Specialization map, frontend and async programming, backend and full-stack, mobile and games, embedded, cloud and DevOps, then applied AI and career paths.', desc_ar: 'خريطة التخصصات والواجهات الأمامية والبرمجة غير المتزامنة · الخلفية والتطوير المتكامل · الجوال والألعاب · الأنظمة المدمجة والسحابة وDevOps · الذكاء الاصطناعي التطبيقي واختيار المسار المهني.' }
      ]
    },
ArtificialIntelligence: {
      id: 'ArtificialIntelligence', name: 'Artificial Intelligence', name_ar: 'الذكاء الاصطناعي', color: '#a855f7',
      slogan: 'Building the intelligence of tomorrow', slogan_ar: 'بناء ذكاء الغد اليوم',
      description: 'Learn the foundations of Artificial Intelligence, Machine Learning, Deep Learning, and modern AI technologies.',
      description_ar: 'تعلم أساسيات الذكاء الاصطناعي، تعلم الآلة، التعلم العميق، وأحدث تقنيات الذكاء الاصطناعي.',
      sections: [
        { title: 'Artificial Intelligence Fundamentals', title_ar: 'أساسيات الذكاء الاصطناعي', desc: 'What AI is and its history, how a system works from data to inference, the three learning types, the AI/ML/DL map and the neural network idea, then limits, ethics and bias.', desc_ar: 'ما هو الذكاء الاصطناعي وتاريخه · كيف يعمل النظام من البيانات إلى الاستدلال · أنواع التعلّم الثلاثة · خريطة AI وML وDL وفكرة الشبكة العصبية · حدود الأنظمة والأخلاقيات والتحيّز.' },
        { title: 'Mathematics and Data for AI', title_ar: 'الرياضيات والبيانات للذكاء الاصطناعي', desc: 'Python and its AI libraries, vectors and matrices, descriptive statistics and probability, derivatives and gradient descent, then practical data cleaning and normalization.', desc_ar: 'بايثون ومكتبات المجال NumPy وPandas وMatplotlib · المتجهات والمصفوفات · الإحصاء الوصفي والاحتمالات · الاشتقاق ومفهوم التدرّج · تنظيف البيانات والقيم المفقودة والتطبيع.' },
        { title: 'Machine Learning', title_ar: 'تعلم الآلة', desc: 'Project workflow and the train/test split, regression and loss, classification and trees, clustering and dimensionality reduction, then evaluation and overfitting.', desc_ar: 'سير عمل المشروع وتقسيم تدريب واختبار · الانحدار ودالة الخسارة · التصنيف وأشجار القرار · التجميع وتقليل الأبعاد · التقييم وOverfitting والتحقق المتقاطع.' },
        { title: 'Deep Learning', title_ar: 'التعلم العميق', desc: 'The neuron and feedforward networks, activations and backpropagation, CNNs for images, RNNs and LSTMs for sequences, then attention, Transformers and embeddings.', desc_ar: 'العصبون والشبكة الأمامية · دوال التفعيل والانتشار العكسي · الشبكات الالتفافية CNN للصور · RNN وLSTM للبيانات المتسلسلة · الانتباه والمحوّلات والتضمين.' },
        { title: 'Generative AI, NLP and Computer Vision', title_ar: 'الذكاء الاصطناعي التوليدي ومعالجة اللغة والرؤية الحاسوبية', desc: 'NLP basics and text representation, large language models, computer vision, generative models, then prompt engineering, RAG and fine-tuning.', desc_ar: 'معالجة اللغة والتمثيل النصي · النماذج اللغوية الكبيرة والهلوسة · الرؤية الحاسوبية · النماذج التوليدية GAN وDiffusion · هندسة الأوامر وRAG والضبط الدقيق.' },
        { title: 'AI Development and Deployment', title_ar: 'تطوير ونشر تطبيقات الذكاء الاصطناعي', desc: 'TensorFlow and PyTorch, building and training a model end to end, saving it and serving it via API, MLOps and monitoring, then performance and scaling.', desc_ar: 'أطر العمل TensorFlow وPyTorch · بناء نموذج وتدريبه كاملاً · حفظ النموذج ومفهوم API وتقديمه كخدمة · MLOps والمراقبة وانحراف البيانات · الأداء والتوسّع والتكلفة.' },
        { title: 'AI Specializations', title_ar: 'التخصصات والاتجاهات المتقدمة', desc: 'Reinforcement learning, robotics and embodied systems, Edge AI and small models, model security and adversarial attacks, then agents, tools and career paths.', desc_ar: 'التعلّم المعزّز: الوكيل والبيئة والمكافأة · الروبوتات والأنظمة المجسّدة · الذكاء على الأطراف والنماذج المصغّرة · أمن النماذج والهجمات الخصومية · الوكلاء والاتجاهات واختيار المسار.' }
      ]
    },
   CyberSecurity: {
  id: 'CyberSecurity', name: 'Cyber Security', name_ar: 'الأمن السيبراني', color: '#ef4444',
  slogan: 'Protecting the digital world', slogan_ar: 'حماية العالم الرقمي',
  description: 'Master the techniques of defense and offense in the digital landscape.',
  description_ar: 'أتقن تقنيات الدفاع والهجوم في العالم الرقمي.',
  sections: [
    { title: 'Cyber Security Basics', title_ar: 'أساسيات الأمن السيبراني', desc: 'Core concepts and the CIA triad, threats and social engineering, malware, cryptography, then policies and risk management.', desc_ar: 'المفاهيم ومثلث CIA · التهديدات والهندسة الاجتماعية · البرمجيات الخبيثة · التشفير · السياسات وإدارة المخاطر.' },
    { title: 'Networking for Security', title_ar: 'الشبكات للأمن السيبراني', desc: 'Networking concepts, the OSI model and TCP/IP, protocols and ports, network attacks, then VPN and TLS.', desc_ar: 'مفاهيم الشبكات · نموذج OSI وTCP/IP · البروتوكولات والمنافذ · هجمات الشبكات · VPN وTLS.' },
    { title: 'System and Operating System Security', title_ar: 'أمن الأنظمة وأنظمة التشغيل', desc: 'Linux security, Windows and Active Directory, permissions and identity, system hardening, then logging and monitoring.', desc_ar: 'أمن لينكس · ويندوز وActive Directory · الصلاحيات والهوية · تقوية الأنظمة Hardening · السجلات والمراقبة.' },
    { title: 'Application and Web Security', title_ar: 'أمن التطبيقات والويب', desc: 'Web architecture and its security, injection flaws such as SQLi and XSS, authentication and authorization, secure coding, then application security testing.', desc_ar: 'بنية الويب وأمنها · الحقن SQLi وXSS · المصادقة والصلاحيات · البرمجة الآمنة · اختبار أمن التطبيقات.' },
    { title: 'Ethical Hacking and Penetration Testing', title_ar: 'الاختراق الأخلاقي واختبار الاختراق', desc: 'Methodology and legal boundaries, reconnaissance, scanning and vulnerability analysis, exploitation, then post-exploitation and reporting.', desc_ar: 'المنهجية والإطار القانوني · الاستطلاع Reconnaissance · الفحص وتحليل الثغرات · الاستغلال Exploitation · ما بعد الاستغلال والتقارير.' },
    { title: 'Digital Forensics and Incident Response', title_ar: 'التحقيق الجنائي الرقمي والاستجابة للحوادث', desc: 'Evidence principles, file analysis, network and memory forensics, malware analysis, then incident response.', desc_ar: 'مبادئ الأدلة الرقمية · تحليل الملفات · تحليل الشبكة والذاكرة · تحليل البرمجيات الخبيثة · الاستجابة للحوادث.' },
    { title: 'Cloud Security and Advanced Cyber Defense', title_ar: 'أمن السحابة والدفاع السيبراني المتقدم', desc: 'Cloud service models, identity and access management, SOC and SIEM operations, threat hunting, then Zero Trust.', desc_ar: 'نماذج الخدمات السحابية · إدارة الهوية IAM · مراكز العمليات SOC وSIEM · صيد التهديدات · Zero Trust.' }
  ]
},
  Networking: {
  id: 'Networking', name: 'Networking', name_ar: 'الشبكات', color: '#3b82f6',
  slogan: 'Connecting the world securely', slogan_ar: 'ربط العالم بأمان',
  description: 'Learn to design, implement, manage, and secure modern computer networks.',
  description_ar: 'تعلم تصميم وإدارة وتأمين شبكات الحاسب الحديثة.',
  sections: [
    { title: 'Networking Basics', title_ar: 'أساسيات الشبكات', desc: 'What a network is and its types, network devices, topology and transmission media, IP addressing, then the client-server model.', desc_ar: 'مفهوم الشبكة وأنواعها · أجهزة الشبكة · الطوبولوجيا ووسائط النقل · عناوين IP · نموذج العميل والخادم.' },
    { title: 'Network Protocols', title_ar: 'بروتوكولات الشبكات', desc: 'The OSI layers, TCP and UDP, IPv4 and subnetting, IPv6, then application-layer protocols.', desc_ar: 'طبقات OSI · TCP وUDP · IPv4 وتقسيم الشبكات Subnetting · IPv6 · بروتوكولات طبقة التطبيقات.' },
    { title: 'Routing and Switching', title_ar: 'التوجيه والتبديل', desc: 'Switching and the MAC table, VLANs and trunking, routing fundamentals, static and dynamic routing, then OSPF, EIGRP and BGP.', desc_ar: 'التبديل وجدول MAC · شبكات VLAN وTrunking · أساسيات التوجيه · التوجيه الثابت والديناميكي · OSPF وEIGRP وBGP.' },
    { title: 'Network Services', title_ar: 'خدمات الشبكات', desc: 'DNS, DHCP, NAT and PAT, VPN, then monitoring and service integration.', desc_ar: 'خدمة DNS · خدمة DHCP · ترجمة العناوين NAT وPAT · الشبكات الافتراضية الخاصة VPN · المراقبة والتكامل.' },
    { title: 'Wireless and Cloud Networking', title_ar: 'الشبكات اللاسلكية والسحابية', desc: 'Wireless fundamentals, WiFi standards and their security, coverage planning, cloud networking, then virtualization and SDN.', desc_ar: 'أساسيات الاتصال اللاسلكي · معايير WiFi وأمنها · تخطيط التغطية · الشبكات السحابية · الافتراضية وSDN.' },
    { title: 'Network Security', title_ar: 'أمن الشبكات', desc: 'Principles and threats, firewalls, IDS and IPS, ACLs and segmentation, then designing a secure network.', desc_ar: 'المبادئ والتهديدات · جدران الحماية · أنظمة IDS وIPS · قوائم التحكم ACL وتقسيم الشبكة · تصميم شبكة آمنة.' },
    { title: 'Network Administration and Troubleshooting', title_ar: 'إدارة الشبكات واستكشاف الأعطال', desc: 'Monitoring tools, a troubleshooting methodology, lower-layer problems, upper-layer problems, then performance tuning.', desc_ar: 'أدوات المراقبة · منهجية استكشاف الأعطال · مشاكل الطبقات الدنيا · مشاكل الطبقات العليا · تحسين الأداء.' }
  ]
},
FinTech: {
  id: 'FinTech', name: 'FinTech', name_ar: 'التقنية المالية', color: '#38bdf8',
  slogan: 'Transforming finance through technology', slogan_ar: 'إعادة تشكيل عالم المال بالتقنية',
  description: 'Learn financial technology, digital payments, blockchain, and modern financial systems.',
  description_ar: 'تعلم التقنية المالية، المدفوعات الرقمية، البلوكشين، والأنظمة المالية الحديثة.',
  sections: [
    { title: 'FinTech Fundamentals', title_ar: 'أساسيات التقنية المالية', desc: 'The concept and its evolution, the digital ecosystem and its players, business models, regulation, then current trends.', desc_ar: 'المفهوم والتطور · النظام الرقمي واللاعبون فيه · نماذج الأعمال · التنظيم والتشريعات · الاتجاهات الحديثة.' },
    { title: 'Digital Payments', title_ar: 'أنظمة الدفع الرقمية', desc: 'Payment systems and their parties, cards and the transaction cycle, payment gateways, wallets and instant payments, then payment security and PCI-DSS.', desc_ar: 'أنظمة الدفع وأطرافها · البطاقات ودورة المعاملة · بوابات الدفع · المحافظ والمدفوعات الفورية · أمن المدفوعات وPCI-DSS.' },
    { title: 'Digital Banking', title_ar: 'الخدمات المصرفية الرقمية', desc: 'Digital banks, Open Banking, banking APIs, customer experience, then digital transformation.', desc_ar: 'البنوك الرقمية · المصرفية المفتوحة Open Banking · واجهات API المصرفية · تجربة العميل · التحول الرقمي.' },
    { title: 'Blockchain & Digital Assets', title_ar: 'البلوكشين والأصول الرقمية', desc: 'The concept and block structure, consensus and mining, cryptocurrencies, smart contracts, then wallets and security.', desc_ar: 'المفهوم وبنية الكتل · الإجماع والتعدين · العملات الرقمية · العقود الذكية · المحافظ والأمن.' },
    { title: 'Financial Data & Analytics', title_ar: 'البيانات والتحليل المالي', desc: 'Data sources, analysis and indicators, reports and dashboards, forecasting and modeling, then business intelligence.', desc_ar: 'مصادر البيانات المالية · التحليل والمؤشرات · التقارير واللوحات · التنبؤ والنمذجة · ذكاء الأعمال.' },
    { title: 'Financial Security & Compliance', title_ar: 'الأمن والامتثال المالي', desc: 'Fraud and its indicators, anti-money laundering, KYC, financial cybersecurity, then compliance and auditing.', desc_ar: 'الاحتيال ومؤشراته · مكافحة غسل الأموال AML · اعرف عميلك KYC · الأمن السيبراني المالي · الامتثال والتدقيق.' },
    { title: 'Advanced FinTech', title_ar: 'التقنية المالية المتقدمة', desc: 'AI in finance, decentralized finance, embedded finance, InsurTech and RegTech, then central bank digital currencies.', desc_ar: 'الذكاء الاصطناعي في التمويل · التمويل اللامركزي DeFi · التمويل المدمج · InsurTech وRegTech · العملات الرقمية للبنوك المركزية.' }
  ]
}
  };

 const logout = () => {
  setUser(null); 
  setCurrentTrack(null);

  window.dispatchEvent(
    new CustomEvent('changeView', {
      detail: 'landing'
    })
  );
};
  const updateProfileProgress = async (updates) => {
    console.log("UPDATE PROFILE:", updates);
    console.log("USER ID:", user?.id);

    if (!user?.id) {
      console.log("NO USER ID");
      return;
    }

    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);
    console.log("UPDATE ERROR:", error);
  };
const selectTrack = async (trackId) => {
  console.log("TRACK CLICK:", trackId);

  const selectedTrack = tracksInfo[trackId];

  setCurrentTrack(selectedTrack);

 await updateProfileProgress({
  current_path: selectedTrack.name_ar,
  current_path_id: selectedTrack.id
});
};

  const loadUnlockedLevel = async (trackId, sectionId) => {
    if (!user?.id) return 1;

    const { data, error } = await supabase
      .from("user_progress")
      .select("unlocked_level")
      .eq("user_id", user.id)
      .eq("track_id", trackId)
      .eq("section_id", sectionId)
      .maybeSingle();


    // إذا السجل موجود يرجع المستوى
    if (data) {
      return data.unlocked_level;
    }


    // إذا أول مرة يدخل القسم ننشئ سجل مستوى 1
    const { data: newProgress, error: insertError } = await supabase
      .from("user_progress")
      .insert({
        user_id: user.id,
        track_id: trackId,
        section_id: sectionId,
        unlocked_level: 1,
      })
      .select()
      .single();


    if (insertError) {
      console.log("Progress create error:", insertError);
      return 1;
    }


    return newProgress.unlocked_level;
  };

  const saveUnlockedLevel = async (trackId, sectionId, level) => {
    if (!user?.id) return;

    await supabase
      .from("user_progress")
      .upsert(
        {
          user_id: user.id,
          track_id: trackId,
          section_id: sectionId,
          unlocked_level: level,
        },
        {
          onConflict: "user_id,track_id,section_id",
        }
      );
  };return (
  <AppContext.Provider value={{
    loadUnlockedLevel,
    saveUnlockedLevel,

    user,

    profile,
    userProgress,
    journeyLogs,
    userAchievements,

    logout,

    currentTrack,
    selectTrack,
    tracksInfo,

    language,
      setLanguage,
      theme,
      setTheme,
      t,

      unlockedLevels,
      unlockLevel,

      updateProfileProgress,

      userStats,
      addXP,
      updateStats
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);