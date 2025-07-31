'use client';

export default function TestimonialsGrid() {
  const testimonials = [
    {
      name: 'Chị Nguyễn Thị Lan',
      role: 'Khách hàng cá nhân',
      location: 'Quận Cầu Giấy, TP.Hà Nội',
      content: 'Dịch vụ chuyển nhà của Evergreen Transport thực sự tuyệt vời! Đội ngũ làm việc rất chuyên nghiệp, cẩn thận. Đồ đạc được đóng gói kỹ lưỡng và không bị hư hỏng gì. Giá cả cũng rất hợp lý. Tôi sẽ giới thiệu cho bạn bè.',
      rating: 5,
      service: 'Chuyển nhà trọn gói',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20in%20her%2030s%20smiling%20confidently%20in%20modern%20home%20setting%2C%20friendly%20and%20satisfied%20customer%2C%20natural%20lighting%2C%20professional%20portrait%20style%2C%20clean%20background%2C%20trustworthy%20appearance&width=150&height=150&seq=customer-lan-detail&orientation=squarish'
    },
    {
      name: 'Anh Trần Văn Minh',
      role: 'Giám đốc công ty ABC',
      location: 'Quận 3, TP.HCM',
      content: 'Chúng tôi đã sử dụng dịch vụ chuyển văn phòng và rất hài lòng. Evergreen Transport đã lập kế hoạch chi tiết, thực hiện đúng tiến độ và không làm gián đoạn công việc. Đặc biệt, tất cả thiết bị văn phòng đều được bảo quản tốt.',
      rating: 5,
      service: 'Chuyển văn phòng',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20businessman%20in%20suit%20smiling%20confidently%20in%20modern%20office%20environment%2C%20executive%20appearance%2C%20business%20professional%2C%20natural%20lighting%2C%20corporate%20setting%2C%20trustworthy%20leader&width=150&height=150&seq=customer-minh-detail&orientation=squarish'
    },
    {
      name: 'Cô Lê Thị Hương',
      role: 'Chủ shop thời trang',
      location: 'Quận Đống Đa, TP.Hà Nội',
      content: 'Tôi cần chuyển cửa hàng gấp và Evergreen Transport đã hỗ trợ rất tốt. Họ làm việc nhanh chóng, cẩn thận với những món hàng dễ vỡ. Giá dịch vụ minh bạch, không phát sinh thêm chi phí. Rất đáng tin cậy!',
      rating: 5,
      service: 'Chuyển cửa hàng',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20fashion%20shop%20owner%20in%20stylish%20clothing%2C%20confident%20smile%2C%20modern%20retail%20environment%2C%20entrepreneur%20appearance%2C%20natural%20lighting%2C%20business%20owner%20portrait&width=150&height=150&seq=customer-huong-detail&orientation=squarish'
    },
    {
      name: 'Gia đình Phạm Văn Đức',
      role: 'Chuyển nhà liên tỉnh',
      location: 'Hà Nội - TP.HCM',
      content: 'Gia đình tôi chuyển từ Hà Nội vào Sài Gòn, khoảng cách xa nhưng Evergreen Transport đã vận chuyển rất an toàn. Đồ đạc đến nơi đúng hẹn, nguyên vẹn 100%. Đội ngũ tư vấn nhiệt tình, hỗ trợ từ A đến Z.',
      rating: 5,
      service: 'Chuyển nhà liên tỉnh',
      image: 'https://readdy.ai/api/search-image?query=Happy%20Asian%20family%20of%20four%20including%20parents%20and%20children%2C%20smiling%20together%20in%20new%20home%20setting%2C%20moving%20day%20celebration%2C%20warm%20family%20atmosphere%2C%20natural%20lighting%2C%20joyful%20moment&width=150&height=150&seq=customer-duc-detail&orientation=squarish'
    },
    {
      name: 'Anh Hoàng Minh Tuấn',
      role: 'Sinh viên',
      location: 'Quận Bình Thạnh, TP.HCM',
      content: 'Là sinh viên nên tôi khá lo về chi phí, nhưng Evergreen Transport có gói dịch vụ phù hợp với túi tiền. Đội ngũ rất thân thiện, giúp đỡ nhiệt tình. Dịch vụ nhanh gọn, chất lượng tốt.',
      rating: 5,
      service: 'Chuyển phòng trọ',
      image: 'https://readdy.ai/api/search-image?query=Young%20Asian%20male%20student%20smiling%20happily%20in%20university%20campus%20setting%2C%20casual%20clothing%2C%20friendly%20appearance%2C%20student%20lifestyle%2C%20natural%20lighting%2C%20youth%20portrait&width=150&height=150&seq=customer-tuan&orientation=squarish'
    },
    {
      name: 'Chị Võ Thị Mai',
      role: 'Nhân viên văn phòng',
      location: 'Quận Nam Từ Liêm, TP.Hà Nội',
      content: 'Tôi đã sử dụng dịch vụ tháo lắp nội thất và rất ấn tượng. Các anh thợ làm việc khéo léo, cẩn thận. Tủ bếp phức tạp mà vẫn tháo lắp được hoàn hảo. Giá cả hợp lý, dịch vụ chuyên nghiệp.',
      rating: 5,
      service: 'Tháo lắp nội thất',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20office%20worker%20in%20business%20attire%2C%20smiling%20confidently%2C%20modern%20workplace%20background%2C%20professional%20appearance%2C%20natural%20lighting%2C%20office%20environment&width=150&height=150&seq=customer-mai&orientation=squarish'
    },
    {
      name: 'Anh Nguyễn Thanh Sơn',
      role: 'Kỹ sư xây dựng',
      location: 'Quận 9, TP.HCM',
      content: 'Dịch vụ cho thuê xe tải rất tiện lợi. Xe mới, sạch sẽ, tài xế kinh nghiệm. Giá theo giờ rất rõ ràng, không phát sinh. Đặc biệt hỗ trợ bốc xếp rất tốt. Tôi sẽ sử dụng lại dịch vụ này.',
      rating: 5,
      service: 'Cho thuê xe tải',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20engineer%20in%20safety%20helmet%20and%20work%20clothes%2C%20confident%20smile%2C%20construction%20site%20background%2C%20technical%20expert%20appearance%2C%20natural%20lighting%2C%20professional%20portrait&width=150&height=150&seq=customer-son&orientation=squarish'
    },
    {
      name: 'Chị Trần Thị Hạnh',
      role: 'Giáo viên',
      location: 'Quận Ba Đình, TP.Hà Nội',
      content: 'Tôi chuyển nhà trong mùa mưa và rất lo lắng. Nhưng Evergreen Transport đã chuẩn bị rất kỹ, che chắn tốt cho đồ đạc. Mọi thứ đều khô ráo khi đến nơi. Dịch vụ chu đáo, nhân viên thân thiện.',
      rating: 5,
      service: 'Chuyển nhà mùa mưa',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20teacher%20in%20elegant%20attire%2C%20warm%20smile%2C%20classroom%20or%20educational%20setting%20background%2C%20educator%20appearance%2C%20natural%20lighting%2C%20professional%20portrait&width=150&height=150&seq=customer-hanh&orientation=squarish'
    },
    {
      name: 'Anh Lê Văn Thành',
      role: 'Chủ nhà hàng',
      location: 'Quận 5, TP.HCM',
      content: 'Chuyển nhà hàng là việc rất phức tạp với nhiều thiết bị nặng. Evergreen Transport đã xử lý rất chuyên nghiệp. Từ bàn ghế đến thiết bị bếp đều được vận chuyển an toàn. Mở cửa đúng hẹn nhờ dịch vụ tốt.',
      rating: 5,
      service: 'Chuyển nhà hàng',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20restaurant%20owner%20in%20chef%20attire%2C%20confident%20smile%2C%20modern%20restaurant%20kitchen%20background%2C%20culinary%20professional%20appearance%2C%20natural%20lighting%2C%20business%20owner%20portrait&width=150&height=150&seq=customer-thanh&orientation=squarish'
    }
  ];

  return (
    <section id="testimonials-grid" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Đánh giá từ khách hàng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những phản hồi chân thực từ khách hàng đã sử dụng dịch vụ của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-emerald-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({testimonial.rating}/5)</span>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.service}
                </span>
              </div>

              <blockquote className="text-gray-700 italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Bạn cũng muốn trải nghiệm dịch vụ chuyên nghiệp như họ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer">
              Đặt lịch ngay
            </a>
            <a href="tel:0123456789" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              Gọi tư vấn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}