import { useState, useEffect, useRef } from "react";

// Иконки как SVG компоненты
// GithubIcon removed

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const LayoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Build icons
const BuildIcon = ({ type, className = "w-10 h-10" }: { type: string; className?: string }) => {
  switch (type) {
    case "flame":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "circle":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "crown":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
          <path d="M3 20h18" />
        </svg>
      );
    case "diamond":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 3h12l4 6-10 13L2 9z" />
          <path d="M2 9h20" />
          <path d="M12 22L6 9" />
          <path d="M12 22l6-13" />
        </svg>
      );
    case "gamepad":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="6" y1="12" x2="10" y2="12" />
          <line x1="8" y1="10" x2="8" y2="14" />
          <circle cx="15" cy="13" r="1" />
          <circle cx="18" cy="11" r="1" />
          <rect x="2" y="6" width="20" height="12" rx="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </svg>
      );
  }
};

// Animated counter component
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div ref={ref} className="text-4xl font-bold gradient-text">
      {count}{suffix}
    </div>
  );
};

// Particle background
const ParticleField = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/[0.06]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.06; }
          50% { opacity: 0.12; }
          100% { transform: translateY(-60px) translateX(30px); opacity: 0.03; }
        }
      `}</style>
    </div>
  );
};

// Glowing orb background effect
const GlowingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl" />
    <div className="absolute top-1/3 -right-20 w-60 h-60 bg-gray-400/[0.02] rounded-full blur-3xl" />
    <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-white/[0.02] rounded-full blur-3xl" />
  </div>
);

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  // Form removed - contacts only
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
    setMobileMenuOpen(false);
  };

  const builds = [
    {
      title: "Calamity RP",
      type: "RolePlay",
      description: "Полноценная RolePlay сборка с проработанной экономикой, системой фракций, бизнесов, домов и транспорта. Включает все необходимые системы для запуска сервера.",
      tags: ["RolePlay", "C#", "React", "MySQL", "Full Systems"],
      icon: "flame",
      gradient: "from-white/10 to-gray-500/10",
      accentColor: "white",
      stats: { systems: "50+", players: "500+", rating: 5.0 },
      downloadLink: "https://drive.google.com/file/d/1IAGHMSve-4sDToiO8ZhhQJqFT2feh7h2/view",
    },
    {
      title: "Planet DM",
      type: "DeathMatch",
      description: "Динамичная DeathMatch сборка с уникальными режимами игры, системой рангов, кастомным оружием и картами. Оптимизирована для высокого онлайна.",
      tags: ["DeathMatch", "C#", "TypeScript", "Fast-Paced", "PvP"],
      icon: "globe",
      gradient: "from-gray-400/10 to-white/10",
      accentColor: "gray",
      stats: { modes: "15+", maps: "30+", rating: 4.9 },
      downloadLink: "https://www.mediafire.com/folder/f3igohdfre05o/Planet+DM",
    },
    {
      title: "RedAge V3",
      type: "RolePlay",
      description: "Продвинутая версия RedAge с улучшенной оптимизацией, новыми системами и полным рефакторингом кода. Стабильная работа на высоком онлайне.",
      tags: ["RolePlay", "C#", "React", "Redux", "Optimized"],
      icon: "circle",
      gradient: "from-white/10 to-gray-400/10",
      accentColor: "white",
      stats: { version: "V3", uptime: "99.9%", rating: 5.0 },
      downloadLink: "https://github.com/ragemp-pro/redage_v3",
    },
    {
      title: "Storm DM",
      type: "DeathMatch",
      description: "Новейшая DeathMatch сборка с полным фиксом всех багов. Включает уникальные режимы, систему турниров и продвинутую античит защиту.",
      tags: ["DeathMatch", "NEW", "Full Fix", "Anti-Cheat", "Tournaments"],
      icon: "bolt",
      gradient: "from-gray-500/10 to-white/10",
      accentColor: "gray",
      stats: { fixes: "100%", features: "NEW", rating: 5.0 },
      downloadLink: "https://www.mediafire.com/folder/l6o9y6ahinpsr/storm+dm+(new,+full+fix)",
    },
    {
      title: "Astra Fix",
      type: "RolePlay",
      downloadLink: "https://drive.google.com/file/d/13HFt7YFp6uodb5rk-KhpZBY6EG73CRM3/view?usp=sharing",
      description: "Полностью исправленная и оптимизированная RolePlay сборка. Все баги устранены, добавлены новые системы и улучшена производительность. Идеальна для стабильного сервера.",
      tags: ["RolePlay", "Full Fix", "C#", "Optimized", "Stable"],
      icon: "star",
      gradient: "from-white/10 to-gray-500/10",
      accentColor: "white",
      stats: { fixes: "100%", stability: "MAX", rating: 5.0 },
    },
  ];

  const dlcPacks = [
    {
      title: "Dlcpacks Majestic",
      date: "01.07.2024",
      description: "Полный пак DLC контента от Majestic. Включает эксклюзивные модели транспорта, одежды и аксессуаров для вашего сервера.",
      icon: "crown",
      gradient: "from-white/10 to-gray-500/10",
      tags: ["Vehicles", "Clothes", "Accessories", "Premium"],
      downloads: [
        { label: "Скачать", url: "https://disk.yandex.ru/d/VCiHOtpbSprWHA" }
      ],
    },
    {
      title: "CrystalRP-DLC",
      date: "2024",
      description: "DLC пак от CrystalRP с уникальным контентом. Качественные модели и текстуры для улучшения визуальной составляющей сервера.",
      icon: "diamond",
      gradient: "from-gray-400/10 to-white/10",
      tags: ["Models", "Textures", "Quality", "Unique"],
      downloads: [
        { label: "Скачать", url: "https://cloud.mail.ru/public/3xS4/yeMtAgL3t" }
      ],
    },
    {
      title: "GTA 5 RP DLC",
      date: "2024",
      description: "Масштабный DLC пак для GTA 5 RP серверов. Разделён на 3 части для удобства скачивания. Содержит огромное количество контента.",
      icon: "gamepad",
      gradient: "from-white/10 to-gray-400/10",
      tags: ["Massive", "3 Parts", "RP Content", "Full Pack"],
      downloads: [
        { label: "Часть 1", url: "https://drive.usercontent.google.com/download?id=1GSYOi93KIOAq3sceUaihLnZMGgAXq8wg&export=download&authuser=0" },
        { label: "Часть 2", url: "https://drive.usercontent.google.com/download?id=1viizJbdBUDA9PH0T6TTWAPkhhjWACtsP&export=download&authuser=0" },
        { label: "Часть 3", url: "https://drive.usercontent.google.com/download?id=15w8IkpwsaDsYtqrH6pDl1Wl5CIoXxbBT&export=download&authuser=0" },
      ],
    },
  ];

  const reviews = [
    { name: "Alex K.", role: "Owner Eclipse RP", text: "Лучший разработчик, с которым я работал. Код чистый, сроки соблюдает, всегда на связи.", rating: 5 },
    { name: "Dmitry S.", role: "Owner Storm RP", text: "Сделал нам полную систему домов за 2 недели. Качество на высшем уровне, рекомендую!", rating: 5 },
    { name: "Mark V.", role: "Co-Owner Nova RP", text: "Профессиональный подход к каждому проекту. Оптимизация на высоте, баги фиксит моментально.", rating: 5 },
  ];

  // Form submit removed

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 selection:text-white">
      <style>{`
        * {
          scroll-behavior: smooth;
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2); }
        }
        @keyframes tab-switch {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,255,255,0.1)); }
          50% { filter: drop-shadow(0 0 25px rgba(255,255,255,0.3)); }
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-slide-up-delay { animation: slide-up 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-slide-up-delay2 { animation: slide-up 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-tab-switch { animation: tab-switch 0.4s ease-out forwards; }
        .gradient-text {
          background: linear-gradient(90deg, #ffffff, #a0a0a0, #ffffff, #c0c0c0, #ffffff);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .gradient-text-static {
          background: linear-gradient(135deg, #ffffff 0%, #888888 50%, #ffffff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
        }
        .card-hover { 
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .card-hover:hover { 
          transform: translateY(-5px); 
          border-color: rgba(255, 255, 255, 0.2); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.5); 
        }
        .glass { 
          background: rgba(10, 10, 10, 0.9); 
          backdrop-filter: blur(20px); 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-shine {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transition: left 0.6s ease;
          pointer-events: none;
        }
        .btn-shine:hover::after {
          left: 120%;
        }
        .btn-download {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 25%, #1a1a1a 50%, #333333 75%, #ffffff 100%);
          background-size: 300% 300%;
          animation: download-gradient 4s ease infinite;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .btn-download::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          pointer-events: none;
          transition: left 0.6s ease;
        }
        .btn-download:hover::before {
          left: 120%;
        }
        @keyframes download-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        /* download-shine removed - hover only */
        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, white, transparent);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .project-tab {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-tab:hover {
          transform: translateX(5px);
        }
        .project-details {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-menu {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .section-fade {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .section-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrollY > 50 ? "glass border-b border-white/5" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text cursor-pointer transition-all duration-300 hover:scale-105">
            kally.dev
          </h1>
          <div className="space-x-8 hidden md:flex items-center">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-link text-gray-500 hover:text-white text-sm uppercase tracking-wider">Услуги</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="nav-link text-gray-500 hover:text-white text-sm uppercase tracking-wider">Сборки</a>
            <a href="#dlc" onClick={(e) => handleNavClick(e, 'dlc')} className="nav-link text-gray-500 hover:text-white text-sm uppercase tracking-wider">DLC</a>
            <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="nav-link text-gray-500 hover:text-white text-sm uppercase tracking-wider">Отзывы</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 btn-shine hover:shadow-lg hover:shadow-white/10">
              Связаться
            </a>
          </div>
          <button className="md:hidden text-gray-400 hover:text-white transition-all duration-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden glass border-t border-white/5 mobile-menu overflow-hidden ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 space-y-4">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Услуги</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Сборки</a>
            <a href="#dlc" onClick={(e) => handleNavClick(e, 'dlc')} className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">DLC</a>
            <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Отзывы</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block bg-white text-black text-center py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200">Связаться</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <ParticleField />
        <GlowingOrbs />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">Доступен для заказов</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-slide-up leading-tight">
            Создаю будущее
            <br />
            <span className="gradient-text">RAGE:MP</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl mb-10 animate-slide-up-delay leading-relaxed">
            Профессиональная разработка игровых систем, интерфейсов и серверной логики.
            Чистый код, высокая оптимизация и внимание к деталям.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up-delay2">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="group relative bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 btn-shine hover:shadow-xl hover:shadow-white/10 hover:scale-105">
              <span>Заказать проект</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="border border-white/20 hover:border-white/40 hover:bg-white/5 px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
              <span>Мои работы</span>
              <ChevronDownIcon />
            </a>
          </div>

{/* scroll indicator removed */}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="transition-all duration-300 hover:scale-105">
            <AnimatedCounter target={50} suffix="+" />
            <p className="text-gray-600 mt-2">Проектов</p>
          </div>
          <div className="transition-all duration-300 hover:scale-105">
            <AnimatedCounter target={3} suffix="+" />
            <p className="text-gray-600 mt-2">Года опыта</p>
          </div>
          <div className="transition-all duration-300 hover:scale-105">
            <AnimatedCounter target={100} suffix="K+" />
            <p className="text-gray-600 mt-2">Строк кода</p>
          </div>
          <div className="transition-all duration-300 hover:scale-105">
            <AnimatedCounter target={30} suffix="+" />
            <p className="text-gray-600 mt-2">Клиентов</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-4 scroll-mt-20">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Что я делаю</h3>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-static">Стек технологий</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 card-hover group">
            <div className="text-white/80 mb-6 group-hover:scale-110 transition-transform duration-500">
              <LayoutIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">Frontend (CEF)</h3>
            <p className="text-gray-500 leading-relaxed mb-4">React, TypeScript, Redux. Современные интерфейсы с плавной анимацией и высокой производительностью.</p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Redux", "SCSS"].map((t) => (
                <span key={t} className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 card-hover group">
            <div className="text-white/80 mb-6 group-hover:scale-110 transition-transform duration-500">
              <CodeIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">Backend</h3>
            <p className="text-gray-500 leading-relaxed mb-4">C#, .NET Core, Node.js. Сложная серверная логика, API, высокая производительность и масштабируемость.</p>
            <div className="flex flex-wrap gap-2">
              {["C#", ".NET", "Node.js", "REST API"].map((t) => (
                <span key={t} className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 card-hover group">
            <div className="text-white/80 mb-6 group-hover:scale-110 transition-transform duration-500">
              <DatabaseIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">Базы данных</h3>
            <p className="text-gray-500 leading-relaxed mb-4">MySQL, PostgreSQL, Redis. Проектирование структур данных, оптимизация запросов, кэширование.</p>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "PostgreSQL", "Redis", "ORM"].map((t) => (
                <span key={t} className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Builds */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-4 scroll-mt-20">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Портфолио</h3>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-static">Готовые сборки</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Build selector */}
          <div className="space-y-4">
            {builds.map((build, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`project-tab w-full text-left p-6 rounded-2xl border transition-all duration-500 ${
                  activeProject === index
                    ? `bg-gradient-to-r ${build.gradient} border-white/20 shadow-lg shadow-white/5`
                    : "bg-[#0a0a0a] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`transition-all duration-500 ${activeProject === index ? 'scale-125 drop-shadow-lg text-white' : 'grayscale-[30%] text-gray-500'}`}>
                    <BuildIcon type={build.icon} className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold">{build.title}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${
                        build.type === "RolePlay" 
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}>
                        {build.type}
                      </span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {build.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs text-gray-500 transition-all duration-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-5 h-5 transition-all duration-500 ${activeProject === index ? "rotate-90 text-white" : ""}`}>
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Build details */}
          <div className={`project-details rounded-2xl border border-white/5 p-8 lg:sticky lg:top-24 h-fit overflow-hidden relative bg-gradient-to-br ${builds[activeProject].gradient} bg-[#0a0a0a]`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm"></div>
            
            <div key={activeProject} className="animate-tab-switch relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="drop-shadow-2xl animate-bounce-slow text-white">
                  <BuildIcon type={builds[activeProject].icon} className="w-16 h-16" />
                </div>
                <span className={`text-sm px-4 py-1.5 rounded-full font-medium ${
                  builds[activeProject].type === "RolePlay" 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}>
                  {builds[activeProject].type}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold mb-2 gradient-text">{builds[activeProject].title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{builds[activeProject].description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {builds[activeProject].tags.map((tag, idx) => (
                  <span 
                    key={tag} 
                    className="text-sm bg-white/5 text-gray-300 px-4 py-1.5 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-[#050505]/80 rounded-xl p-4 text-center border border-white/5 transition-all duration-300 hover:border-white/20 hover:scale-105">
                  <div className="text-xl font-bold gradient-text">
                    {Object.values(builds[activeProject].stats)[0]}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {Object.keys(builds[activeProject].stats)[0] === 'systems' ? 'Систем' : 
                     Object.keys(builds[activeProject].stats)[0] === 'modes' ? 'Режимов' :
                     Object.keys(builds[activeProject].stats)[0] === 'version' ? 'Версия' : 'Фиксов'}
                  </div>
                </div>
                <div className="bg-[#050505]/80 rounded-xl p-4 text-center border border-white/5 transition-all duration-300 hover:border-white/20 hover:scale-105">
                  <div className="text-xl font-bold gradient-text">
                    {Object.values(builds[activeProject].stats)[1]}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {Object.keys(builds[activeProject].stats)[1] === 'players' ? 'Игроков' : 
                     Object.keys(builds[activeProject].stats)[1] === 'maps' ? 'Карт' :
                     Object.keys(builds[activeProject].stats)[1] === 'uptime' ? 'Uptime' : 
                     Object.keys(builds[activeProject].stats)[1] === 'stability' ? 'Стабильность' : 'Функции'}
                  </div>
                </div>
                <div className="bg-[#050505]/80 rounded-xl p-4 text-center border border-white/5 transition-all duration-300 hover:border-white/20 hover:scale-105">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-white/80"><StarIcon /></span>
                    <span className="text-xl font-bold gradient-text">{builds[activeProject].stats.rating}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Оценка</div>
                </div>
              </div>

              {builds[activeProject].downloadLink ? (
                <div>
                  <a 
                    href={builds[activeProject].downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full btn-download text-black py-4 rounded-xl font-medium transition-all duration-500 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-white/20 hover:scale-[1.02] hover:border-white/40"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Скачать</span>
                  </a>
                </div>
              ) : (
                <div>
                  <a 
                    href="https://t.me/patrickharris12" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white text-black hover:bg-gray-100 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 btn-shine hover:shadow-lg hover:shadow-white/20 hover:scale-[1.02]"
                  >
                    <SendIcon />
                    <span>Заказать сборку</span>
                    <ExternalLinkIcon />
                  </a>
                  <p className="text-center text-gray-500 text-sm mt-3">
                    Discord: <span className="text-gray-300">aurawalls</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DLC Section */}
      <section id="dlc" className="py-24 bg-[#030303] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Дополнительный контент</h3>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-static">DLC Паки</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dlcPacks.map((dlc, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${dlc.gradient} bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden card-hover relative`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-[#0a0a0a]/90"></div>
                
                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-500 text-white/80">
                      <BuildIcon type={dlc.icon} className="w-12 h-12" />
                    </div>
                    <span className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10">
                      {dlc.date}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2 gradient-text">{dlc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{dlc.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {dlc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Download Buttons */}
                  <div className={`grid gap-2 ${dlc.downloads.length > 1 ? 'grid-cols-3' : 'grid-cols-1'}`}>
                    {dlc.downloads.map((download, idx) => (
                      <a
                        key={idx}
                        href={download.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 btn-download text-black py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-white/20 hover:border-white/40"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span>{download.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Преимущества</h3>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-static">Почему выбирают меня</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Чистый код", desc: "Поддерживаемый и документированный код по лучшим практикам" },
              { title: "Быстрые сроки", desc: "Чёткое соблюдение дедлайнов без потери качества" },
              { title: "Оптимизация", desc: "Минимальная нагрузка на сервер, максимальная производительность" },
              { title: "Поддержка", desc: "Бесплатная поддержка и фикс багов после сдачи проекта" },
              { title: "Безопасность", desc: "Защита от читов, инъекций и других уязвимостей" },
              { title: "Масштабируемость", desc: "Архитектура, готовая к росту и расширению функционала" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 card-hover">
                <div className="bg-white/5 p-2 rounded-lg text-white/80 flex-shrink-0 mt-0.5 border border-white/10 transition-all duration-300 group-hover:bg-white/10">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 max-w-6xl mx-auto px-4 scroll-mt-20">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Отзывы</h3>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-static">Что говорят клиенты</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 card-hover">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-white/70 transition-all duration-300 hover:text-white hover:scale-110"><StarIcon /></span>
                ))}
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center text-sm font-bold border border-white/10 transition-all duration-300 hover:scale-105">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-gray-600 text-xs">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#030303] scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Контакты</h3>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-static">Давайте работать вместе</h2>
          </div>

          <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-gray-400 leading-relaxed">
                Свяжитесь со мной для обсуждения вашего проекта
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="https://t.me/InternetPanic1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:translate-x-2 group bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-xl text-white/80 border border-white/10 transition-all duration-300 group-hover:scale-110">
                  <SendIcon />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Telegram</div>
                  <div className="text-white text-lg font-medium">@InternetPanic1</div>
                </div>
                <div className="text-gray-600 group-hover:text-white transition-colors">
                  <ExternalLinkIcon />
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-gray-400 transition-all duration-300 hover:translate-x-2 group bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10">
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-4 rounded-xl text-white/80 border border-white/10 transition-all duration-300 group-hover:scale-110">
                  <MessageIcon />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">Discord</div>
                  <div className="text-white text-lg font-medium">aurawalls</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-xl font-bold gradient-text transition-all duration-300 hover:scale-105 cursor-pointer">kally.dev</h2>
            <div className="flex gap-4">
              <a href="https://t.me/InternetPanic1" target="_blank" rel="noopener noreferrer" className="bg-[#0a0a0a] p-3 rounded-xl border border-white/5 text-gray-500 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-105">
                <SendIcon />
              </a>
              <div className="bg-[#0a0a0a] p-3 rounded-xl border border-white/5 text-gray-500 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-default">
                <MessageIcon />
              </div>
            </div>
            <p className="text-gray-700 text-sm">© 2024 kally.dev. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
