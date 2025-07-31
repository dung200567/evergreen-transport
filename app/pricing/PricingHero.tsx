'use client';

export default function PricingHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20pricing%20and%20cost%20calculation%20concept%20with%20calculator%20calculator%20money%20and%20documents%20on%20desk%2C%20financial%20planning%20for%20moving%20services%2C%20transparent%20pricing%2C%20organized%20business%20materials&width=1920&height=600&seq=pricing-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Bảng giá dịch vụ
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Giá cả minh bạch, cạnh tranh và không có phí ẩn. Chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing-plans" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Xem bảng giá
          </a>
          <a href="#pricing-calculator" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors whitespace-nowrap cursor-pointer">
            Tính giá online
          </a>
        </div>
      </div>
    </section>
  );
}