'use client';

import Link from 'next/link';

export default function PricingPlans() {
  const pricingPlans = [
    {
      name: 'Gói Cơ Bản',
      price: '1.200.000đ',
      unit: 'Phòng trọ/Căn hộ 1-2 phòng',
      description: 'Phù hợp cho sinh viên, người độc thân',
      features: [
        'Xe tải 500kg - 1 tấn',
        '2 nhân viên bốc xếp',
        'Đóng gói chuyên nghiệp',
        'Vận chuyển trong nội thành',
        'Thời Gian:Chỉ 2-3 giờ',
        'Bảo hiểm cơ bản'
      ],
      popular: false,
      color: 'emerald'
    },
    {
      name: 'Gói Tiêu Chuẩn',
      price: '3.000.000đ',
      unit: 'Căn hộ 2-3 phòng',
      description: 'Dành cho gia đình nhỏ',
      features: [
        'Xe tải 1.5 - 2.5 tấn',
        '3-4 nhân viên bốc xếp',
        'Đóng gói chuyên nghiệp',
        'Tháo lắp nội thất cơ bản',
        'Vận chuyển trong thành phố',
        'Thời gian: 4-5 giờ',
        'Bảo hiểm toàn diện'
      ],
      popular: true,
      color: 'blue'
    },
    {
      name: 'Gói Cao Cấp',
      price: '5.000.000đ',
      unit: 'Nhà riêng/Căn hộ lớn',
      description: 'Dành cho gia đình có nhiều đồ đạc',
      features: [
        'Xe tải 3.5 - 5 tấn',
        '5-6 nhân viên bốc xếp',
        'Đóng gói hoàn toàn',
        'Tháo lắp nội thất phức tạp',
        'Vận chuyển liên quận',
        'Thời gian: 6-8 giờ',
        'Bảo hiểm VIP',
        'Dọn dẹp sau chuyển'
      ],
      popular: false,
      color: 'purple'
    },
    {
      name: 'Gói Doanh Nghiệp',
      price: '10.000.000đ',
      unit: 'Văn phòng/Cửa hàng',
      description: 'Chuyên dụng cho doanh nghiệp',
      features: [
        'Xe tải 5 - 8 tấn',
        '8-10 nhân viên chuyên nghiệp',
        'Đóng gói thiết bị IT',
        'Tháo lắp hệ thống văn phòng',
        'Vận chuyển liên tỉnh',
        'Làm việc ngoài giờ',
        'Thời gian: 1-2 ngày',
        'Bảo hiểm doanh nghiệp',
        'Thiết lập lại không gian'
      ],
      popular: false,
      color: 'emerald'
    }
  ];

  return (
    <section id="pricing-plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Bảng giá dịch vụ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                  Phổ biến nhất
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">{plan.unit}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-emerald-600 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/booking" className={`w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap block text-center`}>
                  Chọn gói này
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Cần tư vấn gói dịch vụ phù hợp? Liên hệ ngay với chúng tôi
          </p>
          <a href="tel:0388823884" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer">
            Gọi tư vấn: 0388823884
          </a>
        </div>
      </div>
    </section>
  );
}