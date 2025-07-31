
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20moving%20team%20carrying%20furniture%20and%20boxes%20from%20a%20house%20to%20a%20green%20moving%20truck%2C%20organized%20and%20efficient%20moving%20service%2C%20clean%20white%20background%20with%20green%20accents%2C%20modern%20realistic%20photography%20style%2C%20bright%20daylight%20setting%2C%20teamwork%20and%20professionalism%2C%20safe%20handling%20of%20household%20items&width=1920&height=1080&seq=hero-moving-team&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Đơn Vị Chuyển Nhà Văn Phòng <br />
            <span className="text-emerald-200">Uy Tín,Chất Lượng –</span><br />
            Không lo phát sinh!
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Dịch vụ chuyển nhà trọn gói chuyên nghiệp với đội ngũ giàu kinh nghiệm và cam kết bồi thường 100% nếu có hư hỏng.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/booking" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center whitespace-nowrap cursor-pointer">
              Báo giá ngay
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors text-center whitespace-nowrap cursor-pointer">
              Tư vấn miễn phí
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-speed-line text-2xl"></i>
              </div>
              <div>
                <p className="font-semibold">Nhanh chóng</p>
                <p className="text-sm text-white/80">Hoàn thành trong ngày</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <div>
                <p className="font-semibold">Đóng gói cẩn thận</p>
                <p className="text-sm text-white/80">Bảo vệ tối đa</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-2xl"></i>
              </div>
              <div>
                <p className="font-semibold">Giá cả minh bạch</p>
                <p className="text-sm text-white/80">Không phí ẩn</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-award-line text-2xl"></i>
              </div>
              <div>
                <p className="font-semibold">Bồi thường 100%</p>
                <p className="text-sm text-white/80">Nếu hư hỏng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
