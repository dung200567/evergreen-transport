'use client';

export default function ContactMap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Vị trí trên bản đồ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trụ sở chính và các chi nhánh của Evergreen Transport
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.613872205577!2d105.78200317584248!3d21.08807878573748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aab48ec6fbb1%3A0xed9cf265cb8f74ba!2zMzAgUC4gS-G6uyBW4bq9LCDEkMO0bmcgTmfhuqFjLCBC4bqvYyBU4burIExpw6ptLCBIw6AgTuG7mWkgMTAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1753094707165!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Thông tin liên hệ nhanh</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-emerald-600"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Hotline</p>
                    <a href="tel:0388 823 884" className="text-emerald-600 hover:text-emerald-700">
                      0388 823 884
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a href="mailto:evergreentransports@gmail.com" className="text-blue-600 hover:text-blue-700">
                      evergreentransports@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-purple-600"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Địa chỉ</p>
                    <p className="text-gray-600 text-sm">
                      30 Đường Kẻ Vẽ, Quận Bắc Từ Liêm, TP.Hà Nội
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-time-line text-green-600"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Giờ làm việc</p>
                    <p className="text-gray-600 text-sm">
                      Phục Vụ 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semnpibold text-gray-800 mb-4">Cách đến văn phòng</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <i className="ri-bus-line text-emerald-600 mt-0.5"></i>
                  <span>Xe buýt: Tuyến 14, 58 (Dừng tại 33 Kẻ Vẽ)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="ri-train-line text-emerald-600 mt-0.5"></i>
                  <span>Metro: Chưa Có</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="ri-car-line text-emerald-600 mt-0.5"></i>
                  <span>Ô tô: Có bãi đậu xe miễn phí</span>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="ri-motorbike-line text-emerald-600 mt-0.5"></i>
                  <span>Xe máy: Bãi gửi xe an toàn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}