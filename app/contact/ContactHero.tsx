'use client';

export default function ContactHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20and%20communication%20concept%2C%20modern%20office%20with%20phone%20and%20computer%2C%20contact%20support%20center%2C%20green%20business%20theme%2C%20communication%20technology&width=1920&height=600&seq=contact-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Liên hệ với chúng tôi
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ bạn 24/7. Liên hệ ngay để được tư vấn miễn phí về dịch vụ chuyển nhà
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:03883823884" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Gọi ngay: 03883823884
          </a>
          <a href="#contact-form" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors whitespace-nowrap cursor-pointer">
            Gửi tin nhắn
          </a>
        </div>
      </div>
    </section>
  );
}