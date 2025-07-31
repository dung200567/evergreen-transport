
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-home-4-line',
      title: 'Chuyển nhà trọn gói',
      description: 'Dịch vụ chuyển nhà hoàn chỉnh từ đóng gói đến bốc xếp, vận chuyển an toàn đến địa điểm mới.',
      features: ['Đóng gói chuyên nghiệp', 'Tháo lắp nội thất', 'Vận chuyển an toàn', 'Bảo hiểm toàn diện'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20home%20moving%20service%20with%20workers%20packing%20furniture%20and%20boxes%2C%20organized%20household%20items%2C%20clean%20modern%20house%20interior%2C%20green%20moving%20supplies%20and%20equipment%2C%20teamwork%20and%20efficiency%2C%20bright%20natural%20lighting&width=600&height=400&seq=home-moving-service&orientation=landscape'
    },
    {
      icon: 'ri-building-line',
      title: 'Chuyển văn phòng',
      description: 'Chuyển dời văn phòng nhanh chóng, tối thiểu thời gian gián đoạn công việc của doanh nghiệp.',
      features: ['Lập kế hoạch chi tiết', 'Chuyển máy móc văn phòng', 'Thiết lập lại không gian', 'Hỗ trợ ngoài giờ'],
      image: 'https://readdy.ai/api/search-image?query=Office%20relocation%20service%20with%20professional%20movers%20handling%20computers%20desks%20and%20office%20furniture%2C%20modern%20office%20environment%2C%20organized%20business%20equipment%2C%20green%20moving%20team%20uniforms%2C%20efficient%20workplace%20transition&width=600&height=400&seq=office-moving-service&orientation=landscape'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Chuyển nhà liên tỉnh',
      description: 'Vận chuyển đường dài an toàn với xe tải chuyên dụng và quy trình theo dõi chặt chẽ.',
      features: ['Xe tải chuyên dụng', 'Theo dõi hành trình', 'Bảo hiểm hàng hóa', 'Giao hàng đúng hẹn'],
      image: 'https://readdy.ai/api/search-image?query=Long%20distance%20moving%20truck%20on%20highway%20with%20professional%20driver%2C%20green%20moving%20vehicle%20loaded%20with%20household%20items%2C%20safe%20transportation%20service%2C%20clear%20road%20journey%2C%20reliable%20intercity%20moving&width=600&height=400&seq=long-distance-moving&orientation=landscape'
    },
    {
      icon: 'ri-truck-line',
      title: 'Cho thuê xe tải',
      description: 'Đa dạng loại xe tải từ 500kg đến 8 tấn với tài xế kinh nghiệm và giá cả hợp lý.',
      features: ['Nhiều loại xe tải', 'Tài xế kinh nghiệm', 'Giá theo giờ/ngày', 'Hỗ trợ bốc xếp'],
      image: 'https://readdy.ai/api/search-image?query=Various%20sizes%20of%20green%20moving%20trucks%20parked%20in%20organized%20fleet%2C%20professional%20truck%20rental%20service%2C%20different%20truck%20capacities%20from%20small%20to%20large%2C%20clean%20commercial%20vehicles%2C%20modern%20logistics%20operation&width=600&height=400&seq=truck-rental-fleet&orientation=landscape'
    },
    {
      icon: 'ri-archive-line',
      title: 'Đóng gói chuyên nghiệp',
      description: 'Dịch vụ đóng gói đồ đạc chuyên nghiệp với vật liệu chất lượng cao, bảo vệ tối đa.',
      features: ['Vật liệu chất lượng', 'Kỹ thuật đóng gói', 'Nhãn phân loại', 'Bảo vệ đặc biệt'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20packing%20service%20with%20workers%20carefully%20wrapping%20furniture%20and%20fragile%20items%2C%20quality%20packing%20materials%2C%20organized%20packing%20supplies%2C%20protective%20packaging%20techniques%2C%20careful%20handling%20of%20valuables&width=600&height=400&seq=professional-packing&orientation=landscape'
    },
    {
      icon: 'ri-tools-line',
      title: 'Tháo lắp nội thất',
      description: 'Tháo lắp tủ, giường, bàn ghế một cách chuyên nghiệp, đảm bảo không hư hỏng.',
      features: ['Dụng cụ chuyên dụng', 'Kỹ thuật tháo lắp', 'Bảo quản linh kiện', 'Lắp đặt tại nơi mới'],
      image: 'https://readdy.ai/api/search-image?query=Furniture%20assembly%20and%20disassembly%20service%20with%20skilled%20workers%20using%20professional%20tools%2C%20wooden%20furniture%20pieces%2C%20organized%20hardware%20components%2C%20careful%20furniture%20handling%2C%20technical%20expertise%20in%20action&width=600&height=400&seq=furniture-assembly&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đa dạng dịch vụ chuyển nhà và vận chuyển để đáp ứng mọi nhu cầu của khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <i className="ri-check-line text-emerald-600 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/services" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors cursor-pointer">
                  Xem chi tiết
                  <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap">
            Xem tất cả dịch vụ
          </Link>
        </div>
      </div>
    </section>
  );
}
