import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const saved = localStorage.getItem('registeredUsers');
    return saved ? JSON.parse(saved) : [
      { username: 'ahmed', password: '123', email: 'ahmed@sda.com' }
    ];
  });
  
  const tracksInfo = {
    SE: { 
      id: 'SE', name: 'Software Engineering', name_ar: 'هندسة البرمجيات', color: '#0d9488', 
      slogan: 'Master the art of building scalable systems', slogan_ar: 'أتقن فن بناء الأنظمة القابلة للتوسع',
      description: 'This track covers the full software development lifecycle, from requirements to deployment.',
      description_ar: 'يغطي هذا المسار دورة حياة تطوير البرمجيات كاملة، من المتطلبات إلى النشر.',
      sections: [
        { title: 'Software Engineering Basics', title_ar: 'أساسيات هندسة البرمجيات', desc: 'Comprehensive study of SDLC and Agile methodologies.', desc_ar: 'دراسة شاملة لدورة حياة تطوير البرمجيات ومنهجيات Agile.' },
        { title: 'Advanced Data Structures', title_ar: 'هياكل البيانات المتقدمة', desc: 'Analysis and application of complex data structures.', desc_ar: 'تحليل وتطبيق هياكل البيانات المعقدة لتحسين الأداء.' },
        { title: 'Algorithms and Complexity', title_ar: 'الخوارزميات والتعقيد الزمني', desc: 'Understanding Big O, sorting, and search algorithms.', desc_ar: 'فهم تحليل Big O، خوارزميات الفرز والبحث المتقدمة.' },
        { title: 'System Design and Architecture', title_ar: 'هندسة النظم والمعمارية', desc: 'Designing distributed systems and microservices.', desc_ar: 'تصميم الأنظمة الموزعة وأنماط التصميم SOLID.' },
        { title: 'Database Management', title_ar: 'إدارة قواعد البيانات', desc: 'Relational and Non-Relational DB design and optimization.', desc_ar: 'تصميم قواعد البيانات العلائقية وغير العلائقية.' },
        { title: 'Testing and Quality Assurance', title_ar: 'الاختبار وضمان الجودة', desc: 'TDD, integration testing, and CI/CD tools.', desc_ar: 'منهجيات الاختبار الآلي وأدوات CI/CD.' },
        { title: 'Cloud Application Development', title_ar: 'تطوير التطبيقات السحابية', desc: 'Deploying with Docker and Kubernetes on global platforms.', desc_ar: 'نشر وإدارة التطبيقات باستخدام Docker و Kubernetes.' }
      ] 
    },
    AI: { 
      id: 'AI', name: 'Artificial Intelligence', name_ar: 'الذكاء الاصطناعي', color: '#a855f7', 
      slogan: 'Building the intelligence of tomorrow', slogan_ar: 'بناء ذكاء الغد اليوم',
      description: 'Learn the foundations of machine learning, deep learning, and data science.',
      description_ar: 'تعلم أساسيات تعلم الآلة، التعلم العميق، وعلوم البيانات.',
      sections: [
        { title: 'Advanced Math for AI', title_ar: 'الرياضيات المتقدمة للذكاء الاصطناعي', desc: 'Linear Algebra, Probability, and Calculus.', desc_ar: 'الجبر الخطي، الاحتمالات، والتفاضل.' },
        { title: 'Data Exploration and Processing', title_ar: 'استكشاف ومعالجة البيانات', desc: 'Data Wrangling and Exploratory Data Analysis.', desc_ar: 'معالجة البيانات واستكشافها تقنياً.' },
        { title: 'Supervised Learning', title_ar: 'التعلم الخاضع للإشراف', desc: 'Linear Regression, SVM, Decision Trees.', desc_ar: 'نماذج الانحدار الخطي وأشجار القرار.' },
        { title: 'Unsupervised Learning', title_ar: 'التعلم غير الخاضع للإشراف', desc: 'Clustering, PCA, and Anomaly Detection.', desc_ar: 'تجميع البيانات وتقليل الأبعاد.' },
        { title: 'Neural Networks and Deep Learning', title_ar: 'الشبكات العصبية والتعلم العميق', desc: 'Deep Learning and Neural Networks architecture.', desc_ar: 'هندسة الشبكات العصبية والتعلم العميق.' },
        { title: 'Natural Language Processing', title_ar: 'معالجة اللغات الطبيعية', desc: 'NLP, Transformers, and LLMs.', desc_ar: 'معالجة اللغات، المحولات، والنماذج اللغوية الكبيرة.' },
        { title: 'Computer Vision', title_ar: 'رؤية الحاسوب', desc: 'Computer Vision and Image Processing.', desc_ar: 'رؤية الحاسوب ومعالجة الصور رقمياً.' }
      ] 
    },
    CS: { 
      id: 'CS', name: 'Cyber Security', name_ar: 'الأمن السيبراني', color: '#ef4444', 
      slogan: 'Protecting the digital world', slogan_ar: 'حماية العالم الرقمي',
      description: 'Master the techniques of defense and offense in the digital landscape.',
      description_ar: 'أتقن تقنيات الدفاع والهجوم في المشهد الرقمي.',
      sections: [
        { title: 'Information Security Basics', title_ar: 'أساسيات أمن المعلومات', desc: 'CIA Triad, Risk Management, and Security Frameworks.', desc_ar: 'مبادئ CIA وإدارة المخاطر السيبرانية.' },
        { title: 'Network Security and Protocols', title_ar: 'أمن الشبكات والبروتوكولات', desc: 'Firewalls, VPNs, and Network Traffic Analysis.', desc_ar: 'جدران الحماية وتحليل حركة الشبكة.' },
        { title: 'Advanced Cryptography', title_ar: 'التشفير المتقدم', desc: 'PKI, Hash Functions, and Encryption Algorithms.', desc_ar: 'البنية التحتية للمفاتيح العامة وخوارزميات التشفير.' },
        { title: 'Ethical Hacking', title_ar: 'الاختراق الأخلاقي', desc: 'Penetration Testing and Vulnerability Assessment.', desc_ar: 'اختبار الاختراق وتقييم الثغرات الأمنية.' },
        { title: 'Digital Forensics', title_ar: 'التحقيق الجنائي الرقمي', desc: 'Forensics and Incident Response.', desc_ar: 'التحقيق الرقمي والاستجابة للحوادث.' },
        { title: 'Application and Web Security', title_ar: 'أمن التطبيقات والويب', desc: 'OWASP Top 10 and Secure Coding.', desc_ar: 'أفضل ممارسات البرمجة الآمنة و OWASP.' },
        { title: 'Cloud Security', title_ar: 'أمن الأنظمة السحابية', desc: 'Cloud Security and IAM.', desc_ar: 'أمن السحابة وإدارة الهوية والوصول.' }
      ] 
    },
    NW: { 
      id: 'NW', name: 'Networking', name_ar: 'الشبكات', color: '#3b82f6', 
      slogan: 'Connecting the world securely', slogan_ar: 'ربط العالم بأمان',
      description: 'Learn to design, implement and secure modern network infrastructures.',
      description_ar: 'تعلم تصميم وتنفيذ وتأمين البنى التحتية للشبكات الحديثة.',
      sections: [
        { title: 'Fundamentals', title_ar: 'أساسيات الشبكات', desc: 'Introduction to OSI model and TCP/IP protocol suite.', desc_ar: 'مقدمة في نموذج OSI ومجموعة بروتوكولات TCP/IP.' },
        { title: 'Routing & Switching', title_ar: 'التوجيه والتبديل', desc: 'Understanding dynamic routing protocols and VLAN configurations.', desc_ar: 'فهم بروتوكولات التوجيه الديناميكية وتكوينات VLAN.' },
        { title: 'Network Security', title_ar: 'أمن الشبكات', desc: 'Implementing firewalls, VPNs, and access control lists.', desc_ar: 'تنفيذ جدران الحماية وشبكات VPN وقوائم التحكم في الوصول.' },
        { title: 'Wireless Networking', title_ar: 'الشبكات اللاسلكية', desc: 'Design and deployment of enterprise wireless solutions.', desc_ar: 'تصميم ونشر حلول الشبكات اللاسلكية للمؤسسات.' },
        { title: 'Cloud Networking', title_ar: 'شبكات السحاب', desc: 'Managing virtual private clouds and software-defined networking.', desc_ar: 'إدارة السحب الخاصة الافتراضية والشبكات المعرفة برمجياً.' }
      ] 
    },
    FI: { 
      id: 'FI', name: 'Finance', name_ar: 'المالية', color: '#38bdf8', // Sky Blue
      slogan: 'Mastering the language of money', slogan_ar: 'إتقان لغة المال',
      description: 'Master financial analysis, corporate investment strategies, and modern accounting practices.',
      description_ar: 'إتقان التحليل المالي، استراتيجيات الاستثمار في الشركات، والممارسات المحاسبية الحديثة.',
      sections: [
        { title: 'Financial Analysis', title_ar: 'التحليل المالي', desc: 'Understanding financial statements and performance ratios.', desc_ar: 'فهم القوائم المالية ونسب الأداء.' },
        { title: 'Accounting & Auditing', title_ar: 'المحاسبة والمراجعة', desc: 'Core principles of modern accounting and internal audit standards.', desc_ar: 'المبادئ الأساسية للمحاسبة الحديثة ومعايير المراجعة الداخلية.' },
        { title: 'Investment Strategies', title_ar: 'استراتيجيات الاستثمار', desc: 'Capital budgeting and evaluation of investment opportunities.', desc_ar: 'ميزانية رأس المال وتقييم الفرص الاستثمارية.' },
        { title: 'Corporate Finance', title_ar: 'مالية الشركات', desc: 'Managing capital structure and corporate valuation techniques.', desc_ar: 'إدارة هيكل رأس المال وتقنيات تقييم الشركات.' },
        { title: 'Portfolio Management', title_ar: 'إدارة المحافظ', desc: 'Asset allocation and risk management in diversified portfolios.', desc_ar: 'توزيع الأصول وإدارة المخاطر في المحافظ المتنوعة.' }
      ] 
    }
  };

  const registerUser = (userData) => {
    const updatedUsers = [...registeredUsers, userData];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    setUser(userData);
  };

  const loginUser = (username, password) => {
    const foundUser = registeredUsers.find(
      u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => { setUser(null); setCurrentTrack(null); };
  const selectTrack = (trackId) => setCurrentTrack(tracksInfo[trackId]);

  return (
    <AppContext.Provider value={{
      user, registerUser, loginUser, logout,
      currentTrack, selectTrack, tracksInfo,
      language, setLanguage, theme, setTheme, t,
      unlockedLevels, unlockLevel,
      userStats, addXP, updateStats
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
