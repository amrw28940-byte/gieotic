export default function AboutPage() {
  return (
    <main style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', direction: 'rtl', textAlign: 'justify' }}>
      
      {/* عنوان الصفحة اللي بيشوفه القارئ */}
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#fbbf24', marginBottom: '30px' }}>
        من نحن - شركة جيوتك (Gieotic)
      </h1>

      {/* الفقرة الأولى من مقالك */}
      <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#e5e7eb', marginBottom: '25px' }}>
        امسح السطر ده، واكتب هنا أول جزء من الـ 1000 كلمة بتاعتك...
      </p>

      {/* عنوان فرعي أول */}
      <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#f59e0b', marginTop: '40px', marginBottom: '20px' }}>
        رؤيتنا وأهدافنا
      </h2>

      {/* الفقرة الثانية من مقالك */}
      <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#e5e7eb', marginBottom: '25px' }}>
        اكتب هنا الجزء الثاني من كلامك عن الرؤية والأهداف الخاصة بالموقع والخدمات...
      </p>

      {/* عنوان فرعي ثاني */}
      <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#f59e0b', marginTop: '40px', marginBottom: '20px' }}>
        لماذا نحن خيارك الأفضل؟
      </h2>

      {/* الفقرة الثالثة وباقي المقال */}
      <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#e5e7eb', marginBottom: '25px' }}>
        اكتب هنا باقي كلامك ومميزاتك بالتفصيل لحد ما تكمل المقال بالكامل.
      </p>

    </main>
  );
}