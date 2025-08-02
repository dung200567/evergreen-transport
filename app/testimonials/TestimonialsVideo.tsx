'use client';

export default function TestimonialsVideo() {
  const videoTestimonials = [
    {
      name: 'Quy Trình Chuyển Nhà Của Chúng Tôi',
      role: 'Dịch Vụ:Chuyển Nhà Trọn Gói',
      content: 'Chuyển Nhà Tại Xuân Đỉnh,Căn Nhà 3 Tầng',
      videoUrl: 'https://www.facebook.com/share/v/1FNayLLRU4/'
      thumbnail: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/527922280_1280172737227987_3216941294888750523_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gW5qpEQj4oIQ7kNvwEXfNGf&_nc_oc=AdmCRqEMbRLwc2RB-8okla08pWiwus0w7dAoOGKRcON5w0qe_0f6qQspgkbFXjDfP4OD5IWzdZ3LpE-R8x3OEgP0&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=IlyNOcNrIdVjkOqq2c0Ajg&oh=00_AfRS1WN9XV6Yb-9RqDjbg9Xfj0IRKwpoG4NQ0vrjnOjbHg&oe=6893CFCC'
    },
    {
      name: 'Quy Trình Chuyển Nhà Của Chúng Tôi',
      role: 'Dịch Vụ:Cho Thuê Xe Tải',
      content: 'Chuyển nhà hàng với đầy đủ thiết bị, mở cửa đúng hẹn',
      thumbnail: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/526657637_1280172603894667_6320365141136326021_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TdNy-IjoR48Q7kNvwHS0TX_&_nc_oc=AdkA7Oul4P9zXVfxz2P4vyMIomupkAMEQRbpB1EppLJi5bcgISETG9RWCFnCo2w4s0stTZlcvxdSDFKUplJuJqiI&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=k6F8RzIBpxzhuIxVL6f9mg&oh=00_AfQyjNxGsPDo6CIE1hX0ofIgY_86uOKBMCQPYFcyk08JTg&oe=6893C96D'
      videoUrl: 'https://www.facebook.com/share/v/1CNxYeAsZp/'
    },
    {
      name: 'Giới Thiệu Về Dịch Vụ Của Chúng Tôi',
      role: 'Dịch Vụ Chuyển Nhà Uy Tín Chất Lượng',
      content: 'Bảo Đảm Tuyệt Đối Đồ Của Khách Hàng',
      thumbnail: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/525754768_1280172670561327_4582625391832697437_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TZ5_KbOi_d4Q7kNvwHz0O_A&_nc_oc=AdmHDfNZ_6uU-qRIe2Q2BmAV0n_eLovKliytIkh4lTS16-EE-qzuoyvYmb9gUd0vYCRg_MzpaP6Arh-iU9gw1jq0&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=R9Uww_p7IBXkVicGeiQesQ&oh=00_AfQHYBwwkDZcNTd3ICFvsoyq8AFPcMCSpfNDYbcKsFtX1g&oe=6893CC51'
      videoUrl: 'https://m.facebook.com/story.php?story_fbid=pfbid02SagMrzftsKdXDfd7nVed1qLJY2Z1PvQioneZ2Nb1uP3TAEXtcSC1iuBrXohtzDeUl&id=61578642998278&mibextid=ZbWKwL'
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