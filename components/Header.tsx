
'use client';

import Link from 'next/link';
import { useState } from 'react';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/525565653_1277900300788564_8440638675950887710_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RnG9_NDhnFgQ7kNvwHW6Gj5&_nc_oc=Adl3HtfgIRECI2ASDEMv5IykPmXDfnakVOUM7pcPEvNBtzfpKnAX6RuXf36sltgb4LTxoDb4lEe9W2uiYBnT3MBb&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=wzgwLW2KXFoEcwZCeFWFSg&oh=00_AfTWfSQzFl2vGRmWR_2WzFpcBuQjiR7JHeoFoNyxUfWSXA&oe=6890204C" className="w-10 h-auto object-contain" />            
            <span className="text-xl font-bold text-emerald-600" style={{ fontFamily: 'sans-serif' }}>
              EVERGREEN TRANSPORT
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Trang chủ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Giới thiệu
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Dịch vụ
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Bảng giá
            </Link>
            <Link href="/booking" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Đặt lịch
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Khách hàng
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Liên hệ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0123456789" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
              <i className="ri-phone-line"></i>
              <span className="font-semibold">0388 823 884</span>
            </a>
            <Link href="/booking" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer">
              Báo giá ngay
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Trang chủ
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Giới thiệu
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Dịch vụ
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Bảng giá
              </Link>
              <Link href="/booking" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Đặt lịch
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Khách hàng
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Liên hệ
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:0388 823 884" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-4">
                  <i className="ri-phone-line"></i>
                  <span className="font-semibold">0388 823 884</span>
                </a>
                <Link href="/booking" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer inline-block">
                  Báo giá ngay
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </div>
  </header>
);
}
