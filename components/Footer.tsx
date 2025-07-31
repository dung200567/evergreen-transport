
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-600"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <i className="ri-truck-line text-white text-xl"></i>
                  <div className="absolute top-1 right-1">
                    <i className="ri-leaf-line text-white text-xs"></i>
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold text-emerald-400" style={{ fontFamily: 'sans-serif' }}>
                EVERGREEN TRANSPORT
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Dịch vụ chuyển nhà trọn gói uy tín, chuyên nghiệp. Cam kết nhanh chóng, an toàn và giá cả minh bạch.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578642998278" className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="https://tiktok.com/@chuyennha_evergreen" className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer">
                <i className="ri-tiktok-line text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer">
                <i className="ri-youtube-line text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Chuyển nhà trọn gói
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Chuyển văn phòng
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Chuyển nhà liên tỉnh
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Cho thuê xe tải
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Đóng gói chuyên nghiệp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Bảng giá
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Khách hàng nói gì
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <i className="ri-phone-line text-emerald-400"></i>
                <span className="text-gray-400">0388 823 884</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-mail-line text-emerald-400"></i>
                <span className="text-gray-400">evergreentransports@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-map-pin-line text-emerald-400"></i>
                <span className="text-gray-400">30 Đường Kẻ Vẽ, Quận Bắc Từ Liêm, TP.Hà Nội</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-time-line text-emerald-400"></i>
                <span className="text-gray-400">24/7 - Hỗ trợ mọi lúc</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            2024 Evergreen Transport. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
