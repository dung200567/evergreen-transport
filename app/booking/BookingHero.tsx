'use client';

export default function BookingHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20booking%20and%20scheduling%20concept%20with%20calendar%20appointment%20time%20planning%2C%20modern%20office%20desk%20setup%2C%20organized%20planning%20materials%2C%20green%20business%20theme%2C%20efficient%20service%20booking&width=1920&height=600&seq=booking-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Đặt lịch chuyển nhà
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Đặt lịch dịch vụ chuyển nhà chỉ trong vài phút. Chúng tôi sẽ liên hệ xác nhận và tư vấn chi tiết cho bạn
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#booking-form" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Đặt lịch ngay
          </a>
          <a href="tel:0388823884 " className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors whitespace-nowrap cursor-pointer">
            Gọi ngay: 0388823884
          </a>
        </div>
      </div>
    </section>
  );
}