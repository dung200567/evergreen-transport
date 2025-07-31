
'use client';

export default function CompanyHistory() {
  const milestones = [
    {
      year: '2019',
      title: 'Thành lập công ty',
      description: 'Evergreen Transport được thành lập với tầm nhìn trở thành doanh nghiệp hàng đầu về dịch vụ chuyển nhà.',
      icon: 'ri-building-line'
    },
    {
      year: '2020',
      title: 'Mở rộng dịch vụ',
      description: 'Bổ sung thêm dịch vụ chuyển văn phòng và vận chuyển liên tỉnh, đầu tư thêm đội xe chuyên dụng.',
      icon: 'ri-truck-line'
    },
    {
      year: '2021',
      title: 'Đội ngũ 30 nhân viên',
      description: 'Mở rộng đội ngũ lên 30 nhân viên chuyên nghiệp, đào tạo kỹ năng chuyên sâu.',
      icon: 'ri-team-line'
    },
    {
      year: '2022',
      title: 'Chứng nhận chất lượng',
      description: 'Đạt các chứng nhận về chất lượng dịch vụ và quy trình quản lý chuyên nghiệp.',
      icon: 'ri-award-line'
    },
    {
      year: '2023',
      title: 'Mở chi nhánh',
      description: 'Mở rộng với chi nhánh tại Hà Nội và Đà Nẵng, phục vụ khách hàng toàn quốc.',
      icon: 'ri-map-pin-line'
    },
    {
      year: '2024',
      title: 'Dịch vụ số hóa',
      description: 'Ra mắt ứng dụng mobile và website mới, tối ưu trải nghiệm khách hàng.',
      icon: 'ri-smartphone-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Lịch sử phát triển
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hành trình 5 năm xây dựng và phát triển của Evergreen Transport
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-600"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full mb-4 mx-auto">
                      <i className={`${milestone.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
