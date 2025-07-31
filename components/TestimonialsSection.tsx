
'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Chị Nguyễn Thị Lan',
      role: 'Khách hàng cá nhân',
      content: 'Dịch vụ chuyển nhà của Evergreen Transport thực sự tuyệt vời! Đội ngũ làm việc rất chuyên nghiệp, cẩn thận. Đồ đạc được đóng gói kỹ lưỡng và không bị hư hỏng gì. Giá cả cũng rất hợp lý. Tôi sẽ giới thiệu cho bạn bè.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20in%20her%2030s%20smiling%20confidently%20in%20modern%20home%20setting%2C%20friendly%20and%20satisfied%20customer%2C%20natural%20lighting%2C%20professional%20portrait%20style%2C%20clean%20background%2C%20trustworthy%20appearance&width=150&height=150&seq=customer-lan&orientation=squarish'
    },
    {
      name: 'Anh Trần Văn Minh',
      role: 'Giám đốc công ty ABC',
      content: 'Chúng tôi đã sử dụng dịch vụ chuyển văn phòng và rất hài lòng. Evergreen Transport đã lập kế hoạch chi tiết, thực hiện đúng tiến độ và không làm gián đoạn công việc. Đặc biệt, tất cả thiết bị văn phòng đều được bảo quản tốt.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20businessman%20in%20suit%20smiling%20confidently%20in%20modern%20office%20environment%2C%20executive%20appearance%2C%20business%20professional%2C%20natural%20lighting%2C%20corporate%20setting%2C%20trustworthy%20leader&width=150&height=150&seq=customer-minh&orientation=squarish'
    },
    {
      name: 'Cô Lê Thị Hương',
      role: 'Chủ shop thời trang',
      content: 'Tôi cần chuyển cửa hàng gấp và Evergreen Transport đã hỗ trợ rất tốt. Họ làm việc nhanh chóng, cẩn thận với những món hàng dễ vỡ. Giá dịch vụ minh bạch, không phát sinh thêm chi phí. Rất đáng tin cậy!',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20fashion%20shop%20owner%20in%20stylish%20clothing%2C%20confident%20smile%2C%20modern%20retail%20environment%2C%20entrepreneur%20appearance%2C%20natural%20lighting%2C%20business%20owner%20portrait&width=150&height=150&seq=customer-huong&orientation=squarish'
    },
    {
      name: 'Gia đình Phạm Văn Đức',
      role: 'Chuyển nhà liên tỉnh',
      content: 'Gia đình tôi chuyển từ Hà Nội vào Sài Gòn, khoảng cách xa nhưng Evergreen Transport đã vận chuyển rất an toàn. Đồ đạc đến nơi đúng hẹn, nguyên vẹn 100%. Đội ngũ tư vấn nhiệt tình, hỗ trợ từ A đến Z.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Happy%20Asian%20family%20of%20four%20including%20parents%20and%20children%2C%20smiling%20together%20in%20new%20home%20setting%2C%20moving%20day%20celebration%2C%20warm%20family%20atmosphere%2C%20natural%20lighting%2C%20joyful%20moment&width=150&height=150&seq=customer-duc-family&orientation=squarish'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của Evergreen Transport
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex space-x-1">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-2xl"></i>
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentSlide].content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentSlide].image} 
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover object-top"
              />
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 text-lg">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-gray-600">{testimonials[currentSlide].role}</p>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentSlide ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">1000+</div>
            <div className="text-gray-600">Khách hàng hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">5+</div>
            <div className="text-gray-600">Năm kinh nghiệm</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
            <div className="text-gray-600">Tỷ lệ thành công</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
            <div className="text-gray-600">Hỗ trợ khách hàng</div>
          </div>
        </div>
      </div>
    </section>
  );
}
