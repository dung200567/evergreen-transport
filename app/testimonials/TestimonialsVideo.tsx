'use client';

import 'remixicon/fonts/remixicon.css'; 

export default function TestimonialsVideo() {
  const videoTestimonials = [
    {
      name: 'Quy Trình Chuyển Nhà Của Chúng Tôi',
      role: 'Dịch Vụ: Chuyển Nhà Trọn Gói',
      content: 'Chuyển Nhà Tại Xuân Đỉnh, Căn Nhà 3 Tầng',
      videoUrl: 'https://www.facebook.com/share/v/1FNayLLRU4/',
      thumbnail: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/527922280_1280172737227987_3216941294888750523_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gW5qpEQj4oIQ7kNvwH6UhyR&_nc_oc=AdkSxb9z3N-GQrr1SrNHOm9Q_IRLX225UKnLqgNCPYP8aau2Z4hUnb6V2OC7saRC2hW7_zXhArOVr33Ewy6thoCD&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=C6jN96Tep1kIwe2uSHm5DQ&oh=00_AfSyfLwUpBy23sEDFqNELew-d6KdeZ5bWNITjJ8nvTpncQ&oe=6894080C'
    },
    {
      name: 'Quy Trình Chuyển Nhà Của Chúng Tôi',
      role: 'Dịch Vụ: Cho Thuê Xe Tải',
      content: 'Chuyển nhà hàng với đầy đủ thiết bị, mở cửa đúng hẹn',
      videoUrl: 'https://www.facebook.com/share/v/1CNxYeAsZp/',
      thumbnail: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/526657637_1280172603894667_6320365141136326021_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TdNy-IjoR48Q7kNvwHiAv-Y&_nc_oc=AdkgwFjp70tFY_yWz8XslDyOR2QS7ZqBzyhdswUqgclo7FxShJd_BeuDwlyE0TcAd5JpYXW1RRWGbQPWHzPXkLLs&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=7RB6q4uxyxAuDxrtiCvMQA&oh=00_AfQnDSaRN7q-biBV0lMkthpFXMgB-uHWAhuwoo55jE6aig&oe=689401AD'
    },
    {
      name: 'Giới Thiệu Về Dịch Vụ Của Chúng Tôi',
      role: 'Dịch Vụ Chuyển Nhà Uy Tín Chất Lượng',
      content: 'Bảo Đảm Tuyệt Đối Đồ Của Khách Hàng',
      videoUrl: 'https://m.facebook.com/story.php?story_fbid=pfbid02SagMrzftsKdXDfd7nVed1qLJY2Z1PvQioneZ2Nb1uP3TAEXtcSC1iuBrXohtzDeUl&id=61578642998278&mibextid=ZbWKwL',
      thumbnail: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/525754768_1280172670561327_4582625391832697437_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TZ5_KbOi_d4Q7kNvwFjNVUN&_nc_oc=Adk5WOaVE8DtEBYpvDfxKIXZDIJWfM4RBljqL0RlU-SZC4-NVYx1jYGNyIC2Y9czE4eu77JFZD9nIj1cbjBRlY7A&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=EGyr7Nll9pvj6ksY_4HRSw&oh=00_AfT4Z3o1Iqh8LHlhiO_sjExCZ11nRm8U_Z3gQZpqjSRHIA&oe=68940491'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Video Về Quy Trình Làm Việc Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giải Đáp Thắc Mắc Về Quá Trình Làm Việc Của Chúng Tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <img 
                  src={video.thumbnail} 
                  alt={video.name}
                  className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                    aria-label={`Xem video của ${video.name}`}
                  >
                    <i className="ri-play-fill text-emerald-600 text-2xl ml-1"></i>
                  </a>
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
            <a href="tel:0388823884" className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              Gọi chia sẻ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}