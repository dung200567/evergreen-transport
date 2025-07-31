'use client';

export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'Liên hệ và tư vấn',
      description: 'Khách hàng liên hệ qua hotline hoặc website. Chúng tôi tư vấn miễn phí và lắng nghe nhu cầu cụ thể.',
      icon: 'ri-phone-line'
    },
    {
      number: '02',
      title: 'Khảo sát và báo giá',
      description: 'Đội ngũ chuyên viên đến khảo sát thực tế, đánh giá khối lượng công việc và đưa ra báo giá chi tiết.',
      icon: 'ri-search-line'
    },
    {
      number: '03',
      title: 'Ký hợp đồng',
      description: 'Thống nhất điều khoản, ký hợp đồng rõ ràng với cam kết chất lượng và bảo hiểm hàng hóa.',
      icon: 'ri-file-text-line'
    },
    {
      number: '04',
      title: 'Chuẩn bị và thực hiện',
      description: 'Chuẩn bị đầy đủ nhân lực, vật tư và tiến hành chuyển nhà theo đúng kế hoạch đã thống nhất.',
      icon: 'ri-truck-line'
    },
    {
      number: '05',
      title: 'Giao hàng và nghiệm thu',
      description: 'Giao hàng đúng hẹn, hỗ trợ sắp xếp tại nơi mới và nghiệm thu cùng khách hàng.',
      icon: 'ri-checkbox-circle-line'
    },
    {
      number: '06',
      title: 'Hỗ trợ sau dịch vụ',
      description: 'Theo dõi và hỗ trợ khách hàng sau khi hoàn thành, đảm bảo sự hài lòng tuyệt đối.',
      icon: 'ri-customer-service-2-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Quy trình làm việc
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quy trình làm việc chuyên nghiệp và có hệ thống đảm bảo chất lượng dịch vụ tốt nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <i className={`${step.icon} text-white text-xl`}></i>
                </div>
                <div className="text-3xl font-bold text-emerald-600">{step.number}</div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}