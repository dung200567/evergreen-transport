'use client';

export default function ServiceBenefits() {
  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Bảo hiểm toàn diện',
      description: 'Mọi hàng hóa đều được bảo hiểm 100% giá trị, khách hàng hoàn toàn yên tâm về tài sản.'
    },
    {
      icon: 'ri-time-line',
      title: 'Đúng giờ hẹn',
      description: 'Cam kết thực hiện đúng lịch trình đã thống nhất, không làm ảnh hưởng đến kế hoạch của khách hàng.'
    },
    {
      icon: 'ri-team-line',
      title: 'Đội ngũ chuyên nghiệp',
      description: 'Nhân viên được đào tạo bài bản, có kinh nghiệm và kỹ năng xử lý mọi tình huống.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Giá cả minh bạch',
      description: 'Báo giá chi tiết, rõ ràng, không phí ẩn. Cam kết giá cả cạnh tranh nhất thị trường.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ mọi lúc, mọi nơi khi cần thiết.'
    },
    {
      icon: 'ri-truck-line',
      title: 'Phương tiện hiện đại',
      description: 'Xe tải và thiết bị vận chuyển được bảo dưỡng định kỳ, đảm bảo an toàn tuyệt đối.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tại sao chọn chúng tôi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evergreen Transport mang đến những giá trị vượt trội và cam kết chất lượng hàng đầu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <i className={`${benefit.icon} text-3xl text-emerald-600 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Sẵn sàng sử dụng dịch vụ của chúng tôi?
          </h3>
          <p className="text-gray-600 mb-6">
            Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer">
              Đặt lịch ngay
            </a>
            <a href="tel:0388823884" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              Gọi ngay: 0388 823 884
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}