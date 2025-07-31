'use client';

export default function TestimonialsVideo() {
  const videoTestimonials = [
    {
      name: 'Anh Nguyễn Văn Hưng',
      role: 'Giám đốc công ty XYZ',
      content: 'Chuyển văn phòng 200 nhân viên trong 1 ngày, không gián đoạn công việc',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20businessman%20in%20modern%20office%20giving%20video%20testimonial%2C%20confident%20presentation%2C%20business%20setting%2C%20video%20recording%20setup%2C%20professional%20appearance&width=400&height=250&seq=video-testimonial-1&orientation=landscape'
    },
    {
      name: 'Chị Phạm Thị Linh',
      role: 'Chủ nhà hàng',
      content: 'Chuyển nhà hàng với đầy đủ thiết bị, mở cửa đúng hẹn',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20restaurant%20owner%20in%20her%20restaurant%20giving%20video%20testimonial%2C%20warm%20smile%2C%20restaurant%20background%2C%20video%20interview%20setup%2C%20business%20owner%20appearance&width=400&height=250&seq=video-testimonial-2&orientation=landscape'
    },
    {
      name: 'Gia đình chị Hoa',
      role: 'Chuyển nhà liên tỉnh',
      content: 'Chuyển từ Hà Nội vào TP.HCM, đồ đạc nguyên vẹn 100%',
      thumbnail: 'https://readdy.ai/api/search-image?query=Happy%20Asian%20family%20giving%20video%20testimonial%20in%20their%20new%20home%2C%20parents%20and%20children%20together%2C%20warm%20family%20atmosphere%2C%20home%20setting%2C%20video%20recording%20setup&width=400&height=250&seq=video-testimonial-3&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Video cảm nhận khách hàng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nghe khách hàng chia sẻ trực tiếp về trải nghiệm dịch vụ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-play-fill text-emerald-600 text-2xl ml-1"></i>
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                  Video
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{video.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{video.role}</p>
                <p className="text-gray-700 text-sm">{video.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Bạn muốn chia sẻ trải nghiệm?
          </h3>
          <p className="text-gray-600 mb-6">
            Chúng tôi luôn trân trọng những phản hồi từ khách hàng để cải thiện dịch vụ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap">
              Gửi phản hồi
            </a>
            <a href="tel:0123456789" className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              Gọi chia sẻ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}