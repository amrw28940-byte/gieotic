"use client";
import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollX, setScrollX] = useState(0);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // 🌟 هنا تم إصلاح وتعريف المتغير المفقود
  const containerRef = useRef<HTMLDivElement>(null);

  // متغيرات للتحكم في اللمس على الموبايل لضمان عمل السكرول الأفقي باليد
  const touchStartX = useRef(0);
  const touchStartScrollY = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    // دالة لفحص مقاس الشاشة وتحديد هل هو موبايل أم لا
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice(); // فحص عند التحميل
    window.addEventListener("resize", checkDevice); // فحص عند تغيير حجم الشاشة

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      const scrollPercent = maxScroll > 0 ? currentScroll / maxScroll : 0;
      setScrollYProgress(scrollPercent);

      const totalWidthToScroll = window.innerWidth * 5;
      const moveAmount = -totalWidthToScroll + (scrollPercent * totalWidthToScroll);
      setScrollX(moveAmount);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartScrollY.current = window.scrollY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartX.current) return;
      const touchCurrentX = e.touches[0].clientX;
      const diffX = touchStartX.current - touchCurrentX;
      
      if (Math.abs(diffX) > 10) {
        window.scrollTo(0, touchStartScrollY.current + diffX * 1.5);
      }
    };

    handleScroll();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const services = [
    "تصميم مواقع الكترونية",
    "تحسين محركات البحث SEO",
    "تحسين الظهور في الذكاء الاصطناعي (GEO)",
    "خطط باك لينك",
    "كتابة المحتوي",
    "إدارة صفحات السوشيال ميديا",
    "تصميم فيديوهات AI"
  ];

  const ourServicesInfo = [
    { id: 1, title: "تصميم مواقع الكترونية", image: "/تصميم مواقع الكترونية.webp", color: "hover:border-amber-400/40" },
    { id: 2, title: "تحسين محركات البحث SEO", image: "/seo.webp", color: "hover:border-cyan-400/40" },
    { id: 3, title: "تحسين الظهور في الذكاء الاصطناعي (GEO)", image: "/geo.jpg", color: "hover:border-purple-400/40" },
    { id: 4, title: "كتابة المحتوي", image: "/كتابة المحتوي.webp", color: "hover:border-emerald-400/40" },
    { id: 5, title: "إدارة صفحات السوشيال ميديا", image: "/ادارة مواقع السوشيال ميديا.jpg", color: "hover:border-rose-400/40" },
    { id: 6, title: "تصميم فيديوهات AI", image: "/تصميم فيديوهات ai.webp", color: "hover:border-pink-400/40" },
  ];

  const myProjects = [ 
    { id: 1, title: "شركة كوبرا بلاست", category: "تصميم موقع منتجات", url: "https://cobra-plast.com/", image: "/تعديل-300x300.jpg" }, 
    { id: 2, title: "سطحة الرياض", category: "موقع خدمات نقل وسحب", url: "https://sathaway.com/", image: "/سطحة-الرياض-1.webp" }, 
    { id: 3, title: "riseupbh", category: "قريباً", url: "", image: "" }, 
    { id: 4, title: "مشروع رقم ٤", category: "قريباً", url: "", image: "" }, 
    { id: 5, title: "مشروع رقم ٥", category: "قريباً", url: "", image: "" }, 
  ];

  return (
    <main className="h-[600vh] bg-[#020306] text-white relative selection:bg-amber-500 selection:text-black font-sans overflow-x-hidden">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }

        @keyframes moonFlash {
          0%, 100% {
            background: linear-gradient(to top right, #171717, #404040, #a3a3a3);
            box-shadow: inset -5px -5px 15px rgba(0,0,0,0.85), 0 0 20px rgba(255,255,255,0.05);
          }
          45%, 55% {
            background: #ffffff;
            box-shadow: inset -2px -2px 10px rgba(0,0,0,0.2), 0 0 60px #ffffff, 0 0 100px #ffffff;
          }
        }
        @keyframes glowFlash {
          0%, 100% { opacity: 0; transform: scale(1); }
          45%, 55% { opacity: 0.8; transform: scale(1.4); }
        }
        @keyframes planetRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes nebulaPulse {
          0%, 100% { transform: scale(1) translate(0px, 0px); opacity: 0.4; }
          50% { transform: scale(1.15) translate(-10px, 15px); opacity: 0.7; }
        }
        @keyframes robotFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes loaderOrbit {
          0% { transform: rotate(0deg) translateX(35px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(35px) rotate(-360deg); }
        }

        @keyframes container3DReveal {
          0% {
            transform: translateZ(-300px) rotateX(20deg) scale(0.6);
            opacity: 0;
            filter: blur(15px);
            text-shadow: 0 0 0 rgba(6, 182, 212, 0);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
            text-shadow: 0 0 40px rgba(6, 182, 212, 1), 0 0 70px rgba(245, 158, 11, 0.8);
            transform: translateZ(30px) rotateX(-5deg) scale(1.05);
          }
          85% {
            text-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
          }
          100% {
            transform: translateZ(0) rotateX(0deg) scale(1);
            opacity: 1;
            filter: blur(0);
            text-shadow: 0 2px 4px rgba(0,0,0,0.6);
          }
        }

        @keyframes verticalMarquee {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }

        .animate-moon { animation: moonFlash 5s infinite ease-in-out; }
        .animate-glow { animation: glowFlash 5s infinite ease-in-out; }
        .animate-planet { animation: planetRotate 40s linear infinite; }
        .animate-nebula { animation: nebulaPulse 15s infinite ease-in-out; }
        .animate-robot { animation: robotFloat 4s infinite ease-in-out; }
        .animate-orbit { animation: loaderOrbit 2s linear infinite; }
        .animate-3d-reveal {
          transform-style: preserve-3d;
          animation: container3DReveal 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-vertical-marquee {
          animation: verticalMarquee 25s linear infinite;
        }
        .vertical-text-mode {
          writing-mode: vertical-rl;
          text-orient: mixed;
          transform: rotate(180deg);
        }
      `}</style>

      {/* ==================== ⏳ شاشة الـ LOADER ==================== */}
      <div className={`fixed inset-0 bg-[#020306] z-[100] flex flex-col items-center justify-center font-cairo transition-all duration-700 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative w-24 h-24 flex items-center justify-center mb-6">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.5)] animate-pulse" />
          <div className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] animate-orbit" />
          <div className="absolute w-16 h-16 border border-white/5 rounded-full" />
        </div>
        <h2 className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400 animate-pulse">
          GIOTEC DIGITAL
        </h2>
        <p className="text-xs text-gray-500 mt-2 tracking-widest uppercase">جاري تهيئة خيالك الرقمي...</p>
      </div>

      {/* ==================== 🌌 طبقات الفضاء الـ 3D PARALLAX ==================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-[-15%] animate-nebula transition-all duration-700 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
            background: `
              radial-gradient(circle at 25% 35%, rgba(139, 92, 246, ${0.05 + scrollYProgress * 0.45}), transparent 50%),
              radial-gradient(circle at 75% 65%, rgba(219, 39, 119, ${0.02 + scrollYProgress * 0.40}), transparent 55%),
              radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.06), transparent 65%)
            `,
            filter: "blur(40px)"
          }}
        />

        <div
          className="absolute inset-0 opacity-80 transition-transform duration-300 ease-out"
          style={{ transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)` }}
        >
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(1.5px 1.5px at 20px 30px, #00f0ff, transparent), radial-gradient(1.5px 1.5px at 75px 130px, #00f0ff, transparent), radial-gradient(1px 1px at 150px 60px, #00f0ff, transparent), radial-gradient(2px 2px at 220px 180px, #00f0ff, transparent), radial-gradient(1.5px 1.5px at 310px 240px, #00f0ff, transparent), radial-gradient(1px 1px at 400px 350px, #00f0ff, transparent), radial-gradient(2px 2px at 480px 90px, #00f0ff, transparent)`, backgroundSize: "180px 180px" }} />
        </div>

        <div
          className="absolute inset-[-5%] opacity-90 animate-[pulse_2.5s_infinite] transition-transform duration-200 ease-out"
          style={{ transform: `translate3d(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px, 0)` }}
        >
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(2px 2px at 40px 80px, #00f0ff, transparent), radial-gradient(2.5px 2.5px at 110px 40px, #00f0ff, transparent), radial-gradient(2px 2px at 190px 270px, #00f0ff, transparent), radial-gradient(3px 3px at 290px 150px, #00f0ff, transparent), radial-gradient(2px 2px at 380px 50px, #00f0ff, transparent), radial-gradient(2.5px 2.5px at 450px 290px, #00f0ff, transparent)`, backgroundSize: "350px 350px" }} />
        </div>
        
        <div className="absolute top-[15%] right-[5%] w-[350px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-950/15 blur-[100px] md:blur-[140px] rounded-full" />
        <div className="absolute bottom-[5%] left-[2%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-950/15 blur-[100px] md:blur-[160px] rounded-full" />
      </div>

      {/* 🌙 القمر المضيء الأصلي */}
      <div
        className="fixed top-[12%] md:top-[14%] right-[4%] md:right-[8%] w-16 h-16 md:w-28 md:h-28 rounded-full pointer-events-none z-10 transition-all duration-300"
        style={{
          opacity: scrollYProgress >= 0.23 ? 0 : (1 - scrollYProgress * 2),
          transform: `translate3d(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0) scale(${1 - scrollYProgress})`
        }}
      >
        <div className="absolute inset-[-20px] rounded-full bg-white blur-[25px] md:blur-[35px] opacity-0 animate-glow" />
        <div className="absolute inset-0 rounded-full border border-white/10 animate-moon" />
      </div>

      {/* 🪐 كوكب المشتري البرتقالي */}
      <div
        className="fixed top-[14%] md:top-[16%] right-[5%] md:right-[9%] w-24 h-24 md:w-32 md:h-32 rounded-full pointer-events-none z-10 transition-all duration-300"
        style={{
          opacity: scrollYProgress > 0.23 && scrollYProgress < 0.55 ? 1 : 0,
          transform: `translate3d(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px, 0) scale(${0.5 + scrollYProgress * 0.5})`
        }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,_#fcd34d,_#b45309,_#78350f)] shadow-[0_0_25px_rgba(0,240,255,0.25),_inset_-10px_-10px_25px_rgba(0,0,0,0.95)] animate-planet relative">
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[15px] md:blur-[20px] -z-10" />
        </div>
      </div>

      {/* 🧭 الهيدر الثابت متوافق للموبايل */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#020306]/40 backdrop-blur-md border-b border-b-white/5 font-cairo">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex justify-between items-center">
          <div className="cursor-pointer group">
            <span className="text-xl md:text-2xl font-black tracking-[0.2em] bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent group-hover:from-amber-400 group-hover:to-white transition-all duration-500">
              GIOTEC
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-xs font-semibold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">مشاريعنا</a>
<a href="/about" className="hover:text-amber-400 transition-colors duration-300">من نحن</a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">اتصل بنا</a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">الرئيسية</a>
          </nav>
          <button className="border border-amber-500/30 hover:border-amber-400 bg-amber-500/5 text-amber-400 hover:bg-amber-400 hover:text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-sm">
            Launch Project
          </button>
        </div>
      </header>

      {/* 📱 الأيقونات الجانبية */}
      <aside className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4">
        {[
          { name: "Fc", link: "#" },
          { name: "yu", link: "#" },
          { name: "IG", link: "#" },
          { name: "LN", link: "#" }
        ].map((item, index) => (
          <a key={index} href={item.link} title={item.name} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-lg shadow-amber-500/10 hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-x-1.5 hover:scale-110 group relative text-[10px] md:text-xs font-bold">
            <span className="group-hover:scale-110 transition-transform duration-300">{item.name}</span>
            <div className="absolute inset-0 rounded-xl bg-amber-400 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
          </a>
        ))}
      </aside>

      {/* 🔄 الحاوية الأفقية المتحركة بعرض إجمالي 600vw لتسع الـ 6 سكاشن كاملة */}
      <div ref={containerRef} className="fixed top-0 left-0 h-screen flex overflow-hidden z-20" style={{ width: "600vw" }}>
        <div
          className="flex h-full w-full items-center"
          style={{ transform: `translate3d(${scrollX}px, 0, 0)`, transition: "transform 0.25s cubic-bezier(0.2, 1, 0.3, 1)" }}
        >
          
          {/* ==================== 🛠 السكشن السادس والأخير: اتصل بنا ==================== */}
          <section className="w-[100vw] h-full flex flex-col md:flex-row items-center justify-center px-[6vw] md:px-[8vw] gap-6 md:gap-[5vw] shrink-0 font-cairo perspective-[1200px] pt-16 md:pt-28">
            <div 
              className="w-full md:w-1/2 text-right select-none"
              style={{ direction: "rtl", transform: `rotateY(${mousePos.x * 0.2}deg) rotateX(${-mousePos.y * 0.2}deg)` }}
            >
              <h2 className="text-3xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400 mb-2 md:mb-4 tracking-wide drop-shadow-[0_4px_12px_rgba(245,158,11,0.15)]">
                تواصل معنا
              </h2>
              <p className="text-xs md:text-lg text-gray-400 leading-relaxed max-w-md font-medium">
                نحن هنا لنستمع لأفكارك ونحولها إلى واقع ملموس. املأ بياناتك وسيقوم فريقنا البرمجي بالتواصل معك في أقرب وقت ممكن.
              </p>
            </div>

            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="w-full md:w-1/2 flex flex-col gap-3 md:gap-4 max-w-lg" 
              style={{ direction: "rtl", transform: `rotateY(${mousePos.x * 0.15}deg) rotateX(${-mousePos.y * 0.15}deg)` }}
            >
              <div className="p-3 md:p-4 rounded-xl border border-white/5 bg-[#05070f]/80 backdrop-blur-md focus-within:border-amber-400/40 transition-all duration-300 group shadow-xl flex flex-col gap-1">
                <label className="text-[10px] md:text-xs font-bold text-gray-500 group-focus-within:text-amber-400 transition-colors">الاسم بالكامل</label>
                <input type="text" placeholder="أدخل اسمك هنا..." className="w-full bg-transparent border-none outline-none text-xs md:text-sm text-white placeholder-gray-700 font-medium" />
              </div>

              <div className="p-3 md:p-4 rounded-xl border border-white/5 bg-[#05070f]/80 backdrop-blur-md focus-within:border-cyan-400/40 transition-all duration-300 group shadow-xl flex flex-col gap-1">
                <label className="text-[10px] md:text-xs font-bold text-gray-500 group-focus-within:text-cyan-400 transition-colors">البريد الإلكتروني</label>
                <input type="email" placeholder="name@example.com" className="w-full bg-transparent border-none outline-none text-xs md:text-sm text-white placeholder-gray-700 font-medium text-right" />
              </div>

              <div className="p-3 md:p-4 rounded-xl border border-white/5 bg-[#05070f]/80 backdrop-blur-md focus-within:border-purple-400/40 transition-all duration-300 group shadow-xl flex flex-col gap-1">
                <label className="text-[10px] md:text-xs font-bold text-gray-500 group-focus-within:text-purple-400 transition-colors">وصف الخدمة المطلوبة</label>
                <textarea rows={isMobile ? 2 : 3} placeholder="اشرح لنا باختصار تفاصيل مشروعك..." className="w-full bg-transparent border-none outline-none text-xs md:text-sm text-white placeholder-gray-700 font-medium resize-none leading-relaxed" />
              </div>

              <div className="w-full mt-1">
                <button type="submit" className="w-full py-3 md:py-4 rounded-xl font-bold text-black bg-gradient-to-r from-white via-amber-200 to-amber-500 text-xs md:text-sm tracking-wide shadow-lg">
                  تأكيد وإرسال الطلب الآن 🚀
                </button>
              </div>
            </form>
          </section>

          {/* ==================== ✨ السكشن الخامس: مشاريعنا ==================== */}
          <section className="w-[100vw] h-full flex flex-col items-center justify-center px-[4vw] shrink-0 font-cairo perspective-[1200px] pt-12 md:pt-0">
            <div className="text-center mb-4 md:mb-8 select-none">
              <h2 className="text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-500 mb-1 tracking-wide">
                معرض مشاريعنا الإبداعية
              </h2>
              <p className="text-[10px] md:text-sm text-amber-400 font-bold tracking-widest uppercase">
                شاهد أعمالنا الحية التي تدمج روعة التصميم مع قوة الأداء
              </p>
            </div>

            <div className="max-h-[65vh] md:max-h-none overflow-y-auto md:overflow-visible grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 w-full max-w-7xl px-2" style={{ direction: "rtl" }}>
              {myProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative h-[180px] md:h-[320px] rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-amber-400/50 shadow-2xl flex flex-col justify-end p-3 md:p-4 bg-[#05070f]"
                  style={{ transform: `rotateY(${mousePos.x * 0.12}deg) rotateX(${-mousePos.y * 0.12}deg)` }}
                >
                  {project.image ? (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-50 md:opacity-60 group-hover:opacity-80" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-amber-500/[0.02]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020306] via-[#020306]/70 to-transparent z-10" />
                  <div className="relative z-20 flex flex-col h-full justify-between items-start">
                    <span className="text-[8px] md:text-[9px] font-bold text-cyan-400 tracking-wider bg-cyan-400/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
                      {project.category}
                    </span>
                    <div className="w-full">
                      <h3 className="text-xs md:text-sm font-black text-white mb-2 md:mb-3 group-hover:text-amber-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-2 text-[10px] md:text-[11px] font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl transition-all">
                          تصفح المشروع  ↗
                        </a>
                      ) : (
                        <div className="w-full text-center py-2 text-[9px] md:text-[10px] font-semibold text-gray-600 bg-white/[0.02] border border-white/5 rounded-xl">
                          قريباً ...
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* ==================== 🟣 السكشن الرابع: خدماتنا الرقمية ==================== */}
          <section className="w-[100vw] h-full flex flex-col items-center justify-center px-[4vw] md:px-[6vw] shrink-0 font-cairo perspective-[1200px] pt-12 md:pt-28">
            <div className="text-center mb-4 md:mb-6 select-none">
              <h2 className="text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400 mb-1 tracking-wide">
                خدماتنا الرقمية المتكاملة
              </h2>
              <p className="text-[10px] md:text-sm text-amber-400 font-bold tracking-widest uppercase">
                حلول تقنية متطورة مصممة باحترافية لتلبية طموحات مشروعك
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-5xl px-2" style={{ direction: "rtl" }}>
              {ourServicesInfo.map((service) => (
                <div
                  key={service.id}
                  className={`group relative h-[100px] md:h-[180px] rounded-xl border border-white/5 overflow-hidden bg-[#05070f] transition-all duration-500 ${service.color} shadow-xl flex flex-col justify-end p-3 md:p-4`}
                  style={{ transform: `rotateY(${mousePos.x * 0.15}deg) rotateX(${-mousePos.y * 0.15}deg)` }}
                >
                  {service.image && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-30 md:opacity-40 group-hover:opacity-60" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020306] via-[#020306]/60 to-transparent z-10" />
                  <div className="relative z-20 w-full">
                    <h3 className="text-sm md:text-xl font-black text-white group-hover:text-amber-300 transition-colors duration-300 tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== 🔵 السكشن الثالث: لماذا تتعامل معنا؟ ==================== */}
          <section className="w-[100vw] h-full flex items-center justify-between shrink-0 font-cairo perspective-[1200px] relative overflow-hidden pt-12 md:pt-28">
            <div className="w-[50px] md:w-[75px] h-full border-r border-white/10 bg-[#06070d]/60 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden rounded-none shadow-[5px_0_30px_rgba(0,0,0,0.5)] relative shrink-0">
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#020306] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#020306] to-transparent z-10 pointer-events-none" />
              
              <div className="flex flex-col animate-vertical-marquee">
                {[...services, ...services, ...services].map((service, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center py-4 md:py-6 gap-2 md:gap-3 shrink-0">
                    <span className="vertical-text-mode text-[8px] md:text-[11px] font-bold text-center tracking-wide bg-gradient-to-l from-white via-amber-200 to-cyan-300 bg-clip-text text-transparent select-none whitespace-nowrap">
                      {service}
                    </span>
                    <span className="text-amber-400 text-[6px] md:text-[8px] opacity-70">✦</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center h-full px-3 md:px-[6vw] overflow-hidden">
              <div className="text-center mb-4 md:mb-5 select-none">
                <h2 className="text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400 mb-1 tracking-wide">
                  لماذا تتعامل معنا؟
                </h2>
                <p className="text-[10px] md:text-sm text-cyan-400 font-bold tracking-widest uppercase">
                  بنية برمجية ذكية وهندسة متكاملة تصنع الفارق الرقمي لمشروعك
                </p>
              </div>

              <div className="max-h-[65vh] md:max-h-none overflow-y-auto md:overflow-visible grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3 w-full max-w-6xl px-1" style={{ direction: "rtl" }}>
                {[
                  { num: "01", title: "خبرة ممتدة واحترافية", text: "نمتلك فريق عمل بخبرة تزيد عن 5 سنوات في السوق العربي, قدمنا خلالها عشرات الحلول التقنية المتكاملة." },
                  { num: "02", title: "تصدّر محركات البحث والخرائط", text: "لا نقوم ببناء كود برمجى صامت، بل ندمج تقنيات الـ SEO والـ GEO المتقدمة لضمان ظهور موقعك في الصدارة." },
                  { num: "03", title: "تطوير مستمر ودعم متكامل", text: "نحن شركاء نجاحك؛ نتابع مشروعك بالتحديث والتطوير الدوري المستمر لنضمن مواكبة أحدث صيحات التكنولوجيا." },
                  { num: "04", title: "بنية برمجية فائقة السرعة", text: "نعتمد على أحدث التقنيات البرمجية الصارمة والـ Clean Code لإنتاج مواقع وتطبيقات تفتح بلمحة بصر." },
                  { num: "05", title: "واجهات تفاعلية مبتكرة", text: "نهتم بأدق تفاصيل الـ UI/UX؛ نصنع واجهات فريدة تجذب الزائر وتعكس فخامة هويتك البصرية لتجربة مثالية." },
                  { num: "06", title: "تحليلات دقيقة للأداء", text: "نزودك بلوحات تحكم متطورة لمتابعة نمو موقعك وزوارك بشكل يومي دقيق، مما يتيح لك مضاعفة مبيعاتك." }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 md:p-4 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.03] transition-all duration-300 group shadow-xl"
                    style={{ transform: `rotateY(${mousePos.x * 0.2}deg) rotateX(${-mousePos.y * 0.2}deg)` }}
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-amber-400/10 flex items-center justify-center mb-2 text-amber-400 font-black text-xs md:text-sm">{item.num}</div>
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-[10px] md:text-[11px] leading-relaxed group-hover:text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== 🔵 السكشن الثاني: من نحن ==================== */}
          <section className="w-[100vw] h-full flex flex-col md:flex-row items-center justify-center px-[6vw] md:px-[8vw] gap-6 md:gap-[6vw] shrink-0 relative perspective-[1000px] font-cairo pt-12 md:pt-0">
            <div
              className="w-full md:max-w-2xl text-right animate-3d-reveal p-5 md:p-8 rounded-3xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm shadow-2xl"
              style={{
                direction: "rtl",
                transform: `rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg)`
              }}
            >
              <h2 className="text-3xl md:text-6xl font-black text-white mb-1 md:mb-4 tracking-wide">من نحن؟</h2>
              <h3 className="text-lg md:text-3xl font-extrabold text-amber-400 mb-3 md:mb-6 tracking-wide">GIOTEC</h3>
              <p className="text-sm md:text-xl text-gray-300 font-normal leading-relaxed md:leading-loose tracking-wide">
                شركة تصميم مواقع وتطبيقات اندرويد كما تقدم خدمة <span className="text-cyan-400 font-bold">SEO</span> و <span className="text-cyan-400 font-bold">GEO</span> نعمل في السوق العربي منذ <span className="text-white font-semibold border-b border-white/20 pb-0.5">5 سنوات</span> وقدمنا عشرات الأعمال بااحترافية من خلال فريق عمل مميز.
              </p>
            </div>

            <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-white/5 bg-white/[0.01] rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0 shadow-xl relative overflow-hidden">
              <div className="animate-robot flex flex-col items-center justify-center w-full">
                <img src="/image-removebg-preview.png" alt="GIOTEC Cyber Robot" className="w-28 md:w-44 h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(6,182,212,0.2)]" />
                <h4 className="text-[8px] md:text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-3 md:mt-4">INTELLIGENT FUTURE</h4>
              </div>
            </div>
          </section>

          {/* ==================== 🔴 السكشن الأول: الرئيسية ==================== */}
          <section className="w-[100vw] h-full flex flex-col items-center justify-center text-center px-4 md:px-6 shrink-0 select-none pt-12">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-amber-400 font-bold mb-4 bg-amber-400/5 px-4 py-1.5 rounded-full border border-amber-400/10 backdrop-blur-sm animate-pulse">
              نرسم هويتك البصرية بابداع واحترافية
            </span>
            
            <div className="flex flex-col text-white" style={{ textShadow: `0 1px 0 #d9d9d9, 0 2px 0 #bfbfbf, 0 3px 0 #b3b3b3, 0 4px 0 #999999, 0 5px 0 #808080, 0 6px 1px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3)` }}>
              <h1 className="text-5xl md:text-9xl font-black tracking-widest uppercase mb-3 md:mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-300 to-amber-500">GIOTEC</span>
              </h1>
              <h2 className="text-xl md:text-5xl font-extrabold text-white tracking-wide !leading-tight px-2 max-w-5xl mx-auto font-cairo" style={{ direction: "rtl" }}>
                نرسم أحلامك لتكون حقيقة وخيالك ليكون واقع ونبنى لك المستقبل
              </h2>
            </div>

            <p className="mt-4 md:mt-6 text-amber-100/70 text-sm md:text-xl max-w-3xl font-medium tracking-wide border-t border-white/5 pt-4 mb-8 md:mb-10" style={{ direction: "rtl" }}>
              نحن نبني لك موقع الكتروني احترافي ونضعك في المقدمة
            </p>

            <div className="flex gap-3 md:gap-4">
              <button className="px-5 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-black bg-gradient-to-r from-white via-amber-200 to-amber-500 hover:scale-105 transition-all flex items-center gap-2 text-xs md:text-sm">
                احسب سعر خدمتك ↗
              </button>
              <button className="px-5 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-white border border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10 transition-all flex items-center gap-2 text-xs md:text-sm">
                تواصل معنا ↘
              </button>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
