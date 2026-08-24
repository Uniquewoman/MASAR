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
        { title: 'Programming Basics', title_ar: 'أساسيات البرمجة', desc: 'Learn programming fundamentals, variables, data types, operators, and input/output.', desc_ar: 'تعلم أساسيات البرمجة والمتغيرات وأنواع البيانات والعمليات والإدخال والإخراج.' },
        { title: 'Computational Thinking and Algorithms', title_ar: 'التفكير البرمجي والخوارزميات', desc: 'Learn problem solving, algorithm design, and computational thinking.', desc_ar: 'تعلم التفكير البرمجي وحل المشكلات وتصميم الخوارزميات.' },
        { title: 'Data Structures', title_ar: 'هياكل البيانات', desc: 'Study arrays, linked lists, stacks, queues, trees, and graphs.', desc_ar: 'دراسة هياكل البيانات مثل المصفوفات والقوائم والمكدسات والأشجار.' },
        { title: 'Object-Oriented and Advanced Programming', title_ar: 'البرمجة الكائنية والمتقدمة', desc: 'Master OOP concepts and advanced programming techniques.', desc_ar: 'إتقان البرمجة الكائنية والمفاهيم البرمجية المتقدمة.' },
        { title: 'Software Development', title_ar: 'تطوير البرمجيات', desc: 'Build software projects using modern development practices.', desc_ar: 'تطوير البرمجيات باستخدام أفضل الممارسات والأدوات الحديثة.' },
        { title: 'Software Engineering', title_ar: 'هندسة البرمجيات', desc: 'Learn software architecture, design, testing, and maintenance.', desc_ar: 'تعلم هندسة البرمجيات والتصميم والاختبارات وصيانة الأنظمة.' },
        { title: 'Programming Specializations', title_ar: 'التخصصات البرمجية', desc: 'Explore web, mobile, game, AI, embedded, and cloud development.', desc_ar: 'استكشف تخصصات البرمجة مثل الويب والجوال والألعاب والذكاء الاصطناعي والسحابة.' }
      ]
    },
ArtificialIntelligence: {
      id: 'ArtificialIntelligence', name: 'Artificial Intelligence', name_ar: 'الذكاء الاصطناعي', color: '#a855f7',
      slogan: 'Building the intelligence of tomorrow', slogan_ar: 'بناء ذكاء الغد اليوم',
      description: 'Learn the foundations of Artificial Intelligence, Machine Learning, Deep Learning, and modern AI technologies.',
      description_ar: 'تعلم أساسيات الذكاء الاصطناعي، تعلم الآلة، التعلم العميق، وأحدث تقنيات الذكاء الاصطناعي.',
      sections: [
        { title: 'Artificial Intelligence Fundamentals', title_ar: 'أساسيات الذكاء الاصطناعي', desc: 'Learn AI concepts, history, applications, and programming foundations.', desc_ar: 'تعلم مفاهيم الذكاء الاصطناعي وتاريخه وتطبيقاته وأساسيات البرمجة الخاصة به.' },
        { title: 'Mathematics and Data for AI', title_ar: 'الرياضيات والبيانات للذكاء الاصطناعي', desc: 'Study mathematics, statistics, probability, and data preparation for AI.', desc_ar: 'دراسة الرياضيات والإحصاء والاحتمالات وتجهيز البيانات للذكاء الاصطناعي.' },
        { title: 'Machine Learning', title_ar: 'تعلم الآلة', desc: 'Build and evaluate Machine Learning models using modern techniques.', desc_ar: 'بناء وتقييم نماذج تعلم الآلة باستخدام الأساليب الحديثة.' },
        { title: 'Deep Learning', title_ar: 'التعلم العميق', desc: 'Learn neural networks, CNNs, RNNs, and Transformer architectures.', desc_ar: 'تعلم الشبكات العصبية وCNN وRNN وبنية المحولات (Transformers).' },
        { title: 'Generative AI, NLP and Computer Vision', title_ar: 'الذكاء الاصطناعي التوليدي ومعالجة اللغة والرؤية الحاسوبية', desc: 'Explore Large Language Models, Natural Language Processing, Computer Vision, and Generative AI.', desc_ar: 'استكشف النماذج اللغوية الكبيرة ومعالجة اللغة الطبيعية والرؤية الحاسوبية والذكاء الاصطناعي التوليدي.' },
        { title: 'AI Development and Deployment', title_ar: 'تطوير ونشر تطبيقات الذكاء الاصطناعي', desc: 'Develop, deploy, and manage AI applications using modern frameworks and MLOps.', desc_ar: 'تطوير ونشر وإدارة تطبيقات الذكاء الاصطناعي باستخدام الأطر الحديثة وMLOps.' },
        { title: 'AI Specializations', title_ar: 'التخصصات والاتجاهات المتقدمة', desc: 'Explore advanced AI fields such as Robotics, Reinforcement Learning, Edge AI, and AI Security.', desc_ar: 'استكشف التخصصات المتقدمة مثل الروبوتات والتعلم المعزز وEdge AI وأمن الذكاء الاصطناعي.' }
      ]
    },
   CyberSecurity: {
  id: 'CyberSecurity', name: 'Cyber Security', name_ar: 'الأمن السيبراني', color: '#ef4444',
  slogan: 'Protecting the digital world', slogan_ar: 'حماية العالم الرقمي',
  description: 'Master the techniques of defense and offense in the digital landscape.',
  description_ar: 'أتقن تقنيات الدفاع والهجوم في العالم الرقمي.',
  sections: [
    { title: 'Cyber Security Basics', title_ar: 'أساسيات الأمن السيبراني', desc: 'Introduction to cybersecurity, threats, and security principles.', desc_ar: 'مقدمة في الأمن السيبراني، التهديدات، والمبادئ الأساسية للحماية.' },
    { title: 'Networking for Security', title_ar: 'الشبكات للأمن السيبراني', desc: 'Networking concepts, protocols, and secure communication.', desc_ar: 'أساسيات الشبكات، البروتوكولات، وآليات الاتصال الآمن.' },
    { title: 'System and Operating System Security', title_ar: 'أمن الأنظمة وأنظمة التشغيل', desc: 'Securing Windows, Linux, permissions, and system hardening.', desc_ar: 'حماية أنظمة التشغيل، الصلاحيات، وتقوية الأنظمة.' },
    { title: 'Ethical Hacking and Penetration Testing', title_ar: 'الاختراق الأخلاقي واختبار الاختراق', desc: 'Reconnaissance, vulnerability assessment, and penetration testing.', desc_ar: 'جمع المعلومات، تحليل الثغرات، واختبار الاختراق الأخلاقي.' },
    { title: 'Application and Web Security', title_ar: 'أمن التطبيقات والويب', desc: 'Secure coding, OWASP Top 10, and web application security.', desc_ar: 'البرمجة الآمنة، أشهر ثغرات OWASP، وأمن تطبيقات الويب.' },
    { title: 'Digital Forensics and Incident Response', title_ar: 'التحقيق الجنائي الرقمي والاستجابة للحوادث', desc: 'Digital investigations, malware analysis, and incident response.', desc_ar: 'التحقيقات الرقمية، تحليل البرمجيات الخبيثة، والاستجابة للحوادث.' },
    { title: 'Cloud Security and Advanced Cyber Defense', title_ar: 'أمن السحابة والدفاع السيبراني المتقدم', desc: 'Cloud security, identity management, threat hunting, and SOC operations.', desc_ar: 'أمن الحوسبة السحابية، إدارة الهوية، صيد التهديدات، وعمليات مركز الأمن SOC.' }
  ]
},
  Networking: {
  id: 'Networking', name: 'Networking', name_ar: 'الشبكات', color: '#3b82f6',
  slogan: 'Connecting the world securely', slogan_ar: 'ربط العالم بأمان',
  description: 'Learn to design, implement, manage, and secure modern computer networks.',
  description_ar: 'تعلم تصميم وإدارة وتأمين شبكات الحاسب الحديثة.',
  sections: [
    { title: 'Networking Basics', title_ar: 'أساسيات الشبكات', desc: 'Introduction to networking concepts, devices, and communication.', desc_ar: 'مقدمة في مفاهيم الشبكات، الأجهزة، وآلية الاتصال.' },
    { title: 'Network Protocols', title_ar: 'بروتوكولات الشبكات', desc: 'OSI Model, TCP/IP, IPv4, IPv6, and common protocols.', desc_ar: 'نموذج OSI، TCP/IP، IPv4، IPv6، والبروتوكولات الأساسية.' },
    { title: 'Routing and Switching', title_ar: 'التوجيه والتبديل', desc: 'Routers, switches, VLANs, and routing protocols.', desc_ar: 'الموجهات، المبدلات، VLAN، وبروتوكولات التوجيه.' },
    { title: 'Network Services', title_ar: 'خدمات الشبكات', desc: 'DNS, DHCP, NAT, VPN, and network services.', desc_ar: 'خدمات DNS وDHCP وNAT وVPN وخدمات الشبكات المختلفة.' },
    { title: 'Wireless and Cloud Networking', title_ar: 'الشبكات اللاسلكية والسحابية', desc: 'Wireless networking and cloud network infrastructure.', desc_ar: 'الشبكات اللاسلكية والبنية التحتية للشبكات السحابية.' },
    { title: 'Network Security', title_ar: 'أمن الشبكات', desc: 'Firewalls, IDS/IPS, access control, and secure network design.', desc_ar: 'جدران الحماية، IDS/IPS، التحكم بالوصول، وتصميم الشبكات الآمنة.' },
    { title: 'Network Administration and Troubleshooting', title_ar: 'إدارة الشبكات واستكشاف الأعطال', desc: 'Monitoring, troubleshooting, optimization, and network management.', desc_ar: 'مراقبة الشبكات، استكشاف الأعطال، تحسين الأداء، وإدارة الشبكات.' }
  ]
},
FinTech: {
  id: 'FinTech', name: 'FinTech', name_ar: 'التقنية المالية', color: '#38bdf8',
  slogan: 'Transforming finance through technology', slogan_ar: 'إعادة تشكيل عالم المال بالتقنية',
  description: 'Learn financial technology, digital payments, blockchain, and modern financial systems.',
  description_ar: 'تعلم التقنية المالية، المدفوعات الرقمية، البلوكشين، والأنظمة المالية الحديثة.',
  sections: [
    { title: 'FinTech Fundamentals', title_ar: 'أساسيات التقنية المالية', desc: 'Introduction to financial technology and the digital financial ecosystem.', desc_ar: 'مقدمة في التقنية المالية والنظام المالي الرقمي.' },
    { title: 'Digital Payments', title_ar: 'أنظمة الدفع الرقمية', desc: 'Payment gateways, cards, wallets, and banking transactions.', desc_ar: 'بوابات الدفع، البطاقات، المحافظ الرقمية، والتحويلات البنكية.' },
    { title: 'Blockchain & Digital Assets', title_ar: 'البلوكشين والأصول الرقمية', desc: 'Blockchain architecture, cryptocurrencies, and smart contracts.', desc_ar: 'تقنية البلوكشين، العملات الرقمية، والعقود الذكية.' },
    { title: 'Digital Banking', title_ar: 'الخدمات المصرفية الرقمية', desc: 'Open Banking, APIs, digital banks, and financial services.', desc_ar: 'الخدمات البنكية الرقمية، Open Banking، وواجهات API.' },
    { title: 'Financial Data & Analytics', title_ar: 'البيانات والتحليل المالي', desc: 'Financial data analysis, reporting, forecasting, and business intelligence.', desc_ar: 'تحليل البيانات المالية، التقارير، التنبؤ، وذكاء الأعمال.' },
    { title: 'Financial Security & Compliance', title_ar: 'الأمن والامتثال المالي', desc: 'Fraud prevention, AML, KYC, cybersecurity, and regulations.', desc_ar: 'مكافحة الاحتيال، AML، KYC، الأمن السيبراني، والأنظمة.' },
    { title: 'Advanced FinTech', title_ar: 'التقنية المالية المتقدمة', desc: 'AI in finance, DeFi, embedded finance, and future financial technologies.', desc_ar: 'الذكاء الاصطناعي المالي، التمويل اللامركزي، والاتجاهات المستقبلية.' }
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