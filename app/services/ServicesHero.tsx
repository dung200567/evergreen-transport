'use client';

export default function ServicesHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20moving%20truck%20with%20professional%20moving%20team%20in%20green%20uniforms%20working%20efficiently%2C%20organized%20moving%20equipment%20and%20boxes%2C%20professional%20logistics%20service%2C%20bright%20daylight%2C%20teamwork%20and%20reliability&width=1920&height=600&seq=services-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Dịch vụ chuyển nhà
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Chúng tôi cung cấp đa dạng dịch vụ chuyển nhà và vận chuyển chuyên nghiệp, từ chuyển nhà trọn gói đến cho thuê xe tải, đáp ứng mọi nhu cầu của khách hàng
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services-list" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Xem dịch vụ
          </a>
          <a href="tel:0388823884" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors whitespace-nowrap cursor-pointer">
            Liên hệ ngay
          </a>
        </div>
      </div>
    </section>
  );
}