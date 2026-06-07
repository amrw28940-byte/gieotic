"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا مستقبلاً تقدر تربط الـ Form بسيرفر أو إيميل
    alert('تم استقبال رسالتك بنجاح! سنقوم بالرد عليك قريباً ✨');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="relative min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      
      {/* تأثير الفضاء والنجوم المتحركة بالـ CSS السحري */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping duration-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full animate-pulse duration-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse duration-1000"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-white rounded-full animate-ping duration-500"></div>
        {/* شهاب طائر يمر سريعا */}
        <div className="absolute top-10 left-0 w-40 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rotate-45 transform animate-pulse"></div>
      </div>

      {/* المحتوى الرئيسي فوق الخلفية */}
      <div className="relative z-10 w-full max-w-xl bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-2xl direction-rtl" style={{ direction: 'rtl' }}>
        
        {/* العناوين والإيموجي الفضائي */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-3 flex items-center justify-center gap-2">
            تواصل معنا 🚀
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            يسعدنا استقبال استفساراتكم ورسائلكم في أي وقت. دعنا نبني شيئاً رائعاً معاً! 🌌
          </p>
        </div>

        {/* الـ Form بتصميم احترافي */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* خانة الاسم */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">الاسم بالكامل👤</label>
            <input
              type="text"
              required
              placeholder="اكتب اسمك الكريم هنا..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-850/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200 text-right"
            />
          </div>

          {/* خانة الإيميل */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">البريد الإلكتروني ✉️</label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-850/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200 text-left"
              style={{ direction: 'ltr' }}
            />
          </div>

          {/* خانة الرسالة */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">رسالتك 💬</label>
            <textarea
              rows={4}
              required
              placeholder="اكتب تفاصيل رسالتك أو طلبك هنا..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-850/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition duration-200 text-right"
            />
          </div>

          {/* زر الإرسال المتحرك بحركة إيموجي لطيفة */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-950 font-bold rounded-xl shadow-lg hover:shadow-amber-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition duration-150 flex items-center justify-center gap-2"
          >
            <span>إرسال الرسالة</span>
            <span className="animate-bounce">✨</span>
          </button>

        </form>

        {/* وسائل التواصل السريعة بأسفل الكارد */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs md:text-sm text-gray-500 flex flex-wrap justify-center gap-6">
          <span className="hover:text-amber-400 cursor-pointer transition">📞 واتساب: +96650000000</span>
          <span className="hover:text-amber-400 cursor-pointer transition">✉️ info@gieotic.com</span>
        </div>

      </div>
    </main>
  );
}