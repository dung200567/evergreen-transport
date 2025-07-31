'use client';

import Link from 'next/link';

export default function ServicesList() {
  const services = [
    {
      icon: 'ri-home-4-line',
      title: 'Chuyển nhà trọn gói',
      description: 'Dịch vụ chuyển nhà hoàn chỉnh từ đóng gói đến bốc xếp, vận chuyển an toàn đến địa điểm mới.',
      features: ['Khảo sát tại nhà miễn phí', 'Đóng gói chuyên nghiệp', 'Tháo lắp nội thất', 'Vận chuyển an toàn', 'Bảo hiểm toàn diện', 'Dọn dẹp sau chuyển'],
      price: 'Từ 500.000đ',
      image: 'https://readdy.ai/api/search-image?query=Professional%20home%20moving%20service%20with%20workers%20packing%20furniture%20and%20boxes%20carefully%2C%20organized%20household%20items%20in%20clean%20modern%20house%20interior%2C%20green%20moving%20supplies%20and%20equipment%2C%20teamwork%20and%20efficiency%2C%20bright%20natural%20lighting&width=600&height=400&seq=home-moving-detail&orientation=landscape'
    },
    {
      icon: 'ri-building-line',
      title: 'Chuyển văn phòng',
      description: 'Chuyển dời văn phòng nhanh chóng, tối thiểu thời gian gián đoạn công việc của doanh nghiệp.',
      features: ['Lập kế hoạch chi tiết', 'Chuyển máy móc văn phòng', 'Thiết lập lại không gian', 'Hỗ trợ ngoài giờ', 'Đóng gói tài liệu', 'Vận chuyển thiết bị IT'],
      price: 'Từ 2.000.000đ',
      image: 'https://readdy.ai/api/search-image?query=Office%20relocation%20service%20with%20professional%20movers%20handling%20computers%20desks%20and%20office%20furniture%20carefully%2C%20modern%20office%20environment%2C%20organized%20business%20equipment%2C%20green%20moving%20team%20uniforms%2C%20efficient%20workplace%20transition&width=600&height=400&seq=office-moving-detail&orientation=landscape'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Chuyển nhà liên tỉnh',
      description: 'Vận chuyển đường dài an toàn với xe tải chuyên dụng và quy trình theo dõi chặt chẽ.',
      features: ['Xe tải chuyên dụng', 'Theo dõi hành trình GPS', 'Bảo hiểm hàng hóa', 'Giao hàng đúng hẹn', 'Hỗ trợ 24/7', 'Đóng gói chống sốc'],
      price: 'Từ 1.500.000đ',
      image: 'https://readdy.ai/api/search-image?query=Long%20distance%20moving%20truck%20on%20highway%20with%20professional%20driver%2C%20green%20moving%20vehicle%20loaded%20with%20household%20items%20securely%2C%20safe%20transportation%20service%2C%20clear%20road%20journey%2C%20reliable%20intercity%20moving%20operation&width=600&height=400&seq=long-distance-detail&orientation=landscape'
    },
    {
      icon: 'ri-truck-line',
      title: 'Cho thuê xe tải',
      description: 'Đa dạng loại xe tải từ 500kg đến 8 tấn với tài xế kinh nghiệm và giá cả hợp lý.',
      features: ['Xe tải 500kg - 8 tấn', 'Tài xế kinh nghiệm', 'Giá theo giờ/ngày', 'Hỗ trợ bốc xếp', 'Nhiên liệu bao gồm', 'Bảo hiểm xe'],
      price: 'Từ 200.000đ/giờ',
      image: 'https://readdy.ai/api/search-image?query=Various%20sizes%20of%20green%20moving%20trucks%20parked%20in%20organized%20fleet%2C%20professional%20truck%20rental%20service%2C%20different%20truck%20capacities%20from%20small%20to%20large%2C%20clean%20commercial%20vehicles%2C%20modern%20logistics%20operation&width=600&height=400&seq=truck-rental-detail&orientation=landscape'
    },
    {
      icon: 'ri-archive-line',
      title: 'Đóng gói chuyên nghiệp',
      description: 'Dịch vụ đóng gói đồ đạc chuyên nghiệp với vật liệu chất lượng cao, bảo vệ tối đa.',
      features: ['Vật liệu chất lượng cao', 'Kỹ thuật đóng gói chuyên nghiệp', 'Nhãn phân loại chi tiết', 'Bảo vệ đồ dễ vỡ', 'Hộp carton chuyên dụng', 'Giấy bubble wrap'],
      price: 'Từ 50.000đ/hộp',
      image: 'https://readdy.ai/api/search-image?query=Professional%20packing%20service%20with%20workers%20carefully%20wrapping%20furniture%20and%20fragile%20items%2C%20quality%20packing%20materials%20and%20supplies%2C%20organized%20packing%20process%2C%20protective%20packaging%20techniques%2C%20careful%20handling%20of%20valuables&width=600&height=400&seq=packing-detail&orientation=landscape'
    },
    {
      icon: 'ri-tools-line',
      title: 'Tháo lắp nội thất',
      description: 'Tháo lắp tủ, giường, bàn ghế một cách chuyên nghiệp, đảm bảo không hư hỏng.',
      features: ['Dụng cụ chuyên dụng', 'Kỹ thuật tháo lắp an toàn', 'Bảo quản linh kiện', 'Lắp đặt tại nơi mới', 'Kiểm tra chất lượng', 'Bảo hành dịch vụ'],
      price: 'Từ 100.000đ/món',
      image: 'https://readdy.ai/api/search-image?query=Furniture%20assembly%20and%20disassembly%20service%20with%20skilled%20workers%20using%20professional%20tools%2C%20wooden%20furniture%20pieces%2C%20organized%20hardware%20components%2C%20careful%20furniture%20handling%2C%20technical%20expertise%20in%20action&width=600&height=400&seq=furniture-detail&orientation=landscape'
    }
  ];

  return (
    <section id="services-list" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Danh sách dịch vụ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evergreen Transport cung cấp đa dạng dịch vụ chuyển nhà và vận chuyển chuyên nghiệp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover object-top"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <i className={`${service.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                      <p className="text-emerald-600 font-bold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-emerald-600 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/booking" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap inline-block">
                    Đặt lịch ngay
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}