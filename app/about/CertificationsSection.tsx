
'use client';

export default function CertificationsSection() {
  const certifications = [
    {
      title: 'Giấy phép kinh doanh',
      description: 'Giấy phép kinh doanh vận tải hàng hóa bằng ô tô',
      icon: 'ri-file-text-line'
    },
    {
      title: 'Chứng nhận an toàn',
      description: 'Chứng nhận đạt tiêu chuẩn an toàn lao động',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Bảo hiểm trách nhiệm',
      description: 'Bảo hiểm trách nhiệm nghề nghiệp cho hoạt động vận tải',
      icon: 'ri-shield-star-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Chứng nhận chất lượng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evergreen Transport được công nhận bởi các tổ chức uy tín với đầy đủ chứng nhận chất lượng
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${cert.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-emerald-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Cam kết của chúng tôi
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Evergreen Transport cam kết mang đến dịch vụ chuyển nhà chất lượng cao nhất, 
            với sự chuyên nghiệp và tận tâm trong từng chi tiết.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90">Bồi thường nếu hư hỏng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/90">Hỗ trợ khách hàng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/90">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
