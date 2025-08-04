'use client';

export default function ContactInfo() {
  const offices = [
    {
      name: 'Trụ sở chính',
      address: '30 Đường Kẻ Vẽ, Phường Đông Ngạc, Quận Bắc Từ Liêm, TP.Hà Nội',
      phone: '0388823884',
      email: 'evergreentransports@gmail.com',
      hours: 'Phục Vụ 24/7',
      services: ['Tư vấn trực tiếp', 'Ký hợp đồng', 'Khảo sát', 'Hỗ trợ khách hàng'],
      image: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/526544834_1278270804084847_1018898537043638059_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LtB7TKFxG7YQ7kNvwEbNeQ2&_nc_oc=Adkt8k5uyUWj5kqjXYarx2vpxEm-3ekiapLO8qvlT41qS-ge2XfJOjVGXuPfyDSEki19bdHxZWvkJ8X00xGJ3lWh&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=A-0NSljHBzLgxsV1Wh0LDA&oh=00_AfTpKBhHXqLBqoWzkEqL1Xf61aJYUJo-N_-WxwZGHBGgMQ&oe=6890E282'
    },
    {
      name: 'Chi nhánh Quận Nam Từ Liêm',
      address: 'Số 2 Đường Lê Đức Thọ, Phường Mỹ Đình 2, Quận Nam Từ Liêm, TP.Hà Nội',
      phone: '0388823884',
      email: 'evergreentransports@gmail.com',
      hours: 'Thứ 2 - Thứ 7: 8:00 - 18:00',
      services: ['Tư vấn dịch vụ', 'Nhận khiếu nại', 'Hỗ trợ kỹ thuật'],
      image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/525244398_1278685204043407_5577204317475879761_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3IF-2lNlPKsQ7kNvwGFie9Y&_nc_oc=AdncsAqqB30qR4x1eads2H8IJbBDFbUp0hPqkzsf8ePrv_HW9mZlbGD0HqTS3Dh2DgSXiRX3zvJ7PN8yOOnTq8pW&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=E5eJr7iQ6PqU6u_zTXHK7w&oh=00_AfQ6F-diDyhOU4dgz0aTRuxpoKQ9ra9ivqq96XwsQFwlBQ&oe=689173C7'
    },
    {
      name: 'Chi nhánh Quận Cầu Giấy',
      address: '133 Đường Nguyễn Phong Sắc, Phường Nghĩa Tân, Quận Cầu Giấy, TP.Hà Nội',
      phone: '0388823884',
      email: 'evergreentransports@gmail.com',
      hours: 'Thứ 2 - Thứ 7: 8:00 - 18:00',
      services: ['Tư vấn dịch vụ', 'Đặt lịch hẹn', 'Thanh toán'],
      image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/526395477_1278685134043414_1158685255892224230_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G2D8y35Ac14Q7kNvwHlGjbK&_nc_oc=AdlZ-eYm_eH76Pqpm0yLa5Swm5V6ARh1K-3o0iRe8ddoLBJI4ZsvD0Wpy4D40DxDlotp30Dcb1qNjwkhMq5fNGZs&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=2447srPIWkVdJRESqj7hhQ&oh=00_AfQgBGqAXecHPHA7Q9tgZwHdOR2UcfS696zDMoOITS-KDQ&oe=6891685A'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Địa điểm liên hệ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hệ thống văn phòng rộng khắp để phục vụ khách hàng tốt nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={office.image} 
                alt={office.name}
                className="w-full h-48 object-cover object-top"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{office.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <i className="ri-map-pin-line text-emerald-600 text-lg mt-1"></i>
                    <span className="text-gray-700 text-sm">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <i className="ri-phone-line text-emerald-600 text-lg"></i>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-gray-700 text-sm hover:text-emerald-600">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <i className="ri-mail-line text-emerald-600 text-lg"></i>
                    <a href={`mailto:${office.email}`} className="text-gray-700 text-sm hover:text-emerald-600">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <i className="ri-time-line text-emerald-600 text-lg"></i>
                    <span className="text-gray-700 text-sm">{office.hours}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Dịch vụ tại đây:</h4>
                  <ul className="space-y-1">
                    {office.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-emerald-600 mr-2"></i>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex-1 bg-emerald-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap">
                    Gọi ngay
                  </a>
                  <button className="flex-1 border border-emerald-600 text-emerald-600 py-2 rounded-lg text-center font-semibold hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                    Chỉ đường
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Hỗ trợ trực tuyến 24/7
          </h3>
          <p className="text-gray-600 mb-6">
            Ngoài các văn phòng, chúng tôi cũng hỗ trợ trực tuyến mọi lúc mọi nơi
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-message-line text-green-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Zalo</h4>
                <a href="https://zalo.me/0898510038" className="text-green-600 hover:text-green-700">
                  Chat ngay
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-facebook-fill text-blue-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Facebook</h4>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Messenger
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-mail-line text-red-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <a href="mailto:info@evergreentransport.vn" className="text-red-600 hover:text-red-700">
                  Gửi mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}