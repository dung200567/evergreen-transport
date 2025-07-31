'use client';

export default function BookingSteps() {
  const steps = [
    {
      number: '1',
      title: 'Điền thông tin',
      description: 'Cung cấp thông tin chi tiết về nhu cầu chuyển nhà của bạn',
      icon: 'ri-file-text-line'
    },
    {
      number: '2',
      title: 'Chúng tôi liên hệ',
      description: 'Đội ngũ tư vấn sẽ liên hệ trong vòng 30 phút để xác nhận',
      icon: 'ri-phone-line'
    },
    {
      number: '3',
      title: 'Khảo sát và báo giá',
      description: 'Chuyên viên đến khảo sát và đưa ra báo giá chi tiết',
      icon: 'ri-search-line'
    },
    {
      number: '4',
      title: 'Thực hiện dịch vụ',
      description: 'Tiến hành chuyển nhà theo đúng lịch trình đã thống nhất',
      icon: 'ri-truck-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Quy trình đặt lịch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chỉ cần 4 bước đơn giản để đặt lịch dịch vụ chuyển nhà chuyên nghiệp
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
                    <span className="text-emerald-800 font-bold text-sm">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-20 w-full h-0.5 bg-emerald-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Cam kết của chúng tôi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-emerald-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phản hồi nhanh</h4>
                <p className="text-gray-600 text-sm">Liên hệ trong 30 phút</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-emerald-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Đảm bảo chất lượng</h4>
                <p className="text-gray-600 text-sm">Dịch vụ chuyên nghiệp</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-emerald-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Giá cả minh bạch</h4>
                <p className="text-gray-600 text-sm">Không phí ẩn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}