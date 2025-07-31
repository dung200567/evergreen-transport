'use client';

export default function BookingContact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Liên hệ trực tiếp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hoặc liên hệ trực tiếp với chúng tôi qua các kênh sau để được tư vấn ngay lập tức
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hotline</h3>
              <p className="text-gray-600 mb-4">Hỗ trợ 24/7</p>
              <a href="tel:0388823884" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700">
                0388 823 884
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Email</h3>
              <p className="text-gray-600 mb-4">Phản hồi trong 1 giờ</p>
              <a href="mailto:evergreentransports@gmail.com" className="text-lg font-semibold text-blue-600 hover:text-blue-700">
                evergreentransports@gmail.com
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-message-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Zalo</h3>
              <p className="text-gray-600 mb-4">Chat trực tiếp</p>
              <a href="https://zalo.me/0388823884" className="text-lg font-semibold text-green-600 hover:text-green-700">
                Chat ngay
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Cần hỗ trợ khẩn cấp?
              </h3>
              <p className="text-gray-600 mb-6">
                Đội ngũ chuyên viên của chúng tôi sẵn sàng hỗ trợ 24/7 cho các trường hợp khẩn cấp hoặc cần chuyển nhà gấp
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:03883823884" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap text-center">
                  Gọi ngay
                </a>
                <a href="https://zalo.me/0388823884" className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap text-center">
                  Chat Zalo
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20customer%20service%20team%20ready%20to%20help%2C%20friendly%20support%20staff%20with%20headsets%2C%20modern%20call%20center%20environment%2C%2024%2F7%20support%20concept%2C%20green%20business%20theme%2C%20helpful%20service%20representatives&width=400&height=300&seq=customer-support&orientation=landscape"
                alt="Đội ngũ hỗ trợ khách hàng"
                className="w-full h-64 object-cover object-top rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}