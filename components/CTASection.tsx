
'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20moving%20team%20working%20together%20loading%20boxes%20and%20furniture%20into%20green%20truck%2C%20teamwork%20and%20efficiency%2C%20modern%20moving%20service%20operation%2C%20organized%20logistics%2C%20bright%20daylight%20setting%2C%20successful%20moving%20completion&width=1920&height=600&seq=cta-background&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Bạn đã sẵn sàng chuyển nhà?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Liên hệ ngay với chúng tôi để nhận tư vấn miễn phí và báo giá chi tiết cho dịch vụ chuyển nhà của bạn
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/booking" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Đặt lịch ngay
          </Link>
          <div className="flex items-center text-white">
            <span className="mr-2">hoặc gọi:</span>
            <a href="tel:03883823884" className="font-bold text-xl hover:text-emerald-200 transition-colors">
              03883823884
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-2-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Tư vấn miễn phí</h3>
            <p className="text-white/80">Đội ngũ chuyên viên sẵn sàng hỗ trợ 24/7</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-calendar-check-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Đặt lịch linh hoạt</h3>
            <p className="text-white/80">Chọn thời gian phù hợp với lịch trình của bạn</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Báo giá minh bạch</h3>
            <p className="text-white/80">Không phí ẩn, cam kết giá tốt nhất</p>
          </div>
        </div>
      </div>
    </section>
  );
}
