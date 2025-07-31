'use client';

export default function TestimonialsHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url('https://readdy.ai/api/search-image?query=Happy%20customers%20giving%20testimonials%20and%20reviews%2C%20satisfied%20people%20smiling%20and%20giving%20thumbs%20up%2C%20positive%20feedback%20concept%2C%20green%20business%20theme%2C%20customer%20satisfaction%2C%20testimonial%20background&width=1920&height=600&seq=testimonials-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Khách hàng nói gì
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ chuyển nhà chuyên nghiệp của Evergreen Transport
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#testimonials-grid" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Xem đánh giá
          </a>
          <a href="/booking" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors whitespace-nowrap cursor-pointer">
            Đặt lịch ngay
          </a>
        </div>
      </div>
    </section>
  );
}