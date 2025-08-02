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
      image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/527906995_1280136007231660_3700058596509193589_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hNFKfAMn9-4Q7kNvwHBUzKG&_nc_oc=AdlarxSCTt708kYy81wAplm3tOPV30i5WI1Xog9oxOE_vci7RDrvevgz0Ns5SAIEPtXd2c38hIDRmA2wO1OlTrQu&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=GAFjPp7yHg-3zxYraQewDA&oh=00_AfSGbDs-lR25o2ajrfLjVAqLIK2u1kNoIqwFbNaDK--8qg&oe=6893C3FE'
    }
    ,
    {
      name: 'Anh Trần Văn Minh',
      role: 'Giám đốc công ty hữu thịnh',
      location: 'Quận Hai Bà Trưng, TP.Hà Nội',
      content: 'Chúng tôi đã sử dụng dịch vụ chuyển văn phòng và rất hài lòng. Evergreen Transport đã lập kế hoạch chi tiết, thực hiện đúng tiến độ và không làm gián đoạn công việc. Đặc biệt, tất cả thiết bị văn phòng đều được bảo quản tốt.',
      rating: 5,
      service: 'Chuyển văn phòng',
      image: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/526970140_1280136017231659_1630586000550352926_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=R1JG5Kx-LzcQ7kNvwFSB0m5&_nc_oc=AdmzILFCDBd4CGlXeOXszVecgLTUQfAtIF-JpZGsbTOhxY6t7C1dsZ8oqaXOBXy_MGOGtjIrRhIDzwecKeC5dAPI&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=iIPN97AEFl5pMIb_VEYllg&oh=00_AfQyrGtZkO302huJEJH1nT4CMMvu6bEt4teD3p30zYq6mQ&oe=6893C1E5'
    }
    ,
    {
      name: 'Cô Lê Thị Hương',
      role: 'Chủ shop thời trang',
      location: 'Quận Đống Đa, TP.Hà Nội',
      content: 'Tôi cần chuyển cửa hàng gấp và Evergreen Transport đã hỗ trợ rất tốt. Họ làm việc nhanh chóng, cẩn thận với những món hàng dễ vỡ. Giá dịch vụ minh bạch, không phát sinh thêm chi phí. Rất đáng tin cậy!',
      rating: 5,
      service: 'Chuyển cửa hàng',
      image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/526555052_1280135813898346_1221922432610735292_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0JeO90dByJ0Q7kNvwGpl1KI&_nc_oc=AdlannlGzTbVN_uAhImRFIveRWaWe4UatvMs9RPTP-HqRRrEnH-4J3KQ4F2Mwe4nZ42UY_Wi-_gvHVfcp-XRKRG9&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=fKIurMOU8G9Ro3qiLyse_g&oh=00_AfSWaikcD8YKNjNRkHYwrb-Ac2ROrJB2gWEix-ZrAv7fkw&oe=6893B7D4'
    }
    ,
    {
      name: 'Gia đình Phạm Văn Đức',
      role: 'Chuyển nhà liên tỉnh',
      location: 'Hà Nội - TP.HCM',
      content: 'Gia đình tôi chuyển từ Hà Nội vào Sài Gòn, khoảng cách xa nhưng Evergreen Transport đã vận chuyển rất an toàn. Đồ đạc đến nơi đúng hẹn, nguyên vẹn 100%. Đội ngũ tư vấn nhiệt tình, hỗ trợ từ A đến Z.',
      rating: 5,
      service: 'Chuyển nhà liên tỉnh',
      image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/526950694_1280135827231678_4720581328236234905_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5NeZcfa7_H8Q7kNvwHJweSJ&_nc_oc=AdmAYymI2vCjX8zvGYaAqd0yvTsdiVdGK4iOFfwCEa9_H86X3hgxfpcoRCKaoaw4RQBEKjJ2Tc2fIz5jwGX7Eme3&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=zIqvHtr9bSnba67hBKXmAA&oh=00_AfSzbaD2g96md1wyETsQtiABttunOxx6tC_5FCzXjaGZSg&oe=6893A1F4'
    }
    ,
    {
      name: 'Anh Hoàng Minh Tuấn',
      role: 'Sinh viên',
      location: 'Quận Hoàng Mai, TP.Hà Nội',
      content: 'Là sinh viên nên tôi khá lo về chi phí, nhưng Evergreen Transport có gói dịch vụ phù hợp với túi tiền. Đội ngũ rất thân thiện, giúp đỡ nhiệt tình. Dịch vụ nhanh gọn, chất lượng tốt.',
      rating: 5,
      service: 'Chuyển phòng trọ',
      image: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/527364048_1280136020564992_4925591677401554530_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GmyHHryY2NQQ7kNvwH27M4r&_nc_oc=AdmI_-u8umh--IkanMaKp_rE3Sube70yqLDtYqgkslPojQJw3Zr_i_wumrupGjZQ3uSW19Lb5yV36y6OQji4LLWe&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=XA0z6j4HOGoNtYye63AwCg&oh=00_AfTtELcA4vZ0_kxaOwYVq0lx3WHtImxQtZysFZ92SRJVVQ&oe=6893C150'
    }
    ,
    {
      name: 'Chị Võ Thị Mai',
      role: 'Nhân viên văn phòng',
      location: 'Quận Nam Từ Liêm, TP.Hà Nội',
      content: 'Tôi đã sử dụng dịch vụ tháo lắp nội thất và rất ấn tượng. Các anh thợ làm việc khéo léo, cẩn thận. Tủ bếp phức tạp mà vẫn tháo lắp được hoàn hảo. Giá cả hợp lý, dịch vụ chuyên nghiệp.',
      rating: 5,
      service: 'Tháo lắp nội thất',
      image: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/526430859_1280136103898317_8092999315203396657_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=KXoUGYMmlloQ7kNvwHgVNpp&_nc_oc=AdmLYiXxjVIvCznnjxx99FV5F0l_wBu0rol4egtaxkeQ3TYsd8S-LEFW4_841qpRuR-3sRHPZVcfGDzXE3CpStGn&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=ekGulhEqdIkt5qDPo9vqJQ&oh=00_AfSbGgNMjUnjue_pcguMbs7gCHPkKxSSPv2LYBFciPVFPg&oe=6893D0D1'
    }
    ,
    {
      name: 'Anh Nguyễn Thanh Sơn',
      role: 'Kỹ sư xây dựng',
      location: 'Quận Cầu Giấy, TP.',
      content: 'Dịch vụ cho thuê xe tải rất tiện lợi. Xe mới, sạch sẽ, tài xế kinh nghiệm. Giá theo giờ rất rõ ràng, không phát sinh. Đặc biệt hỗ trợ bốc xếp rất tốt. Tôi sẽ sử dụng lại dịch vụ này.',
      rating: 5,
      service: 'Cho thuê xe tải',
      image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/527817206_1280136140564980_1404250082344640522_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p3dwXqL5gHkQ7kNvwEewXsE&_nc_oc=AdnVNM08sHWu-nJaB2dCZ12oRuTCsfjlZy94RgnYSfHF_GvOwlTPeF8iN_trEnqoP9j0JxvcA2pF8_qOAsYH08Ub&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=gi6-RAPdm_Lg5Z0HDKVpHw&oh=00_AfQYX1ljEI_bqMboRCMQ85C4eLccwaPhjlU-NuXxmjwUvQ&oe=6893A4EE'
    }
    ,
    {
      name: 'Chị Trần Thị Hạnh',
      role: 'Giáo viên',
      location: 'Quận Ba Đình, TP.Hà Nội',
      content: 'Tôi chuyển nhà trong mùa mưa và rất lo lắng. Nhưng Evergreen Transport đã chuẩn bị rất kỹ, che chắn tốt cho đồ đạc. Mọi thứ đều khô ráo khi đến nơi. Dịch vụ chu đáo, nhân viên thân thiện.',
      rating: 5,
      service: 'Chuyển nhà mùa mưa',
      image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/526571718_1280136127231648_8430636101666603864_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dLZhtqNtvX4Q7kNvwG2tDVe&_nc_oc=AdkhaSbYURUehTDD01Ze0tPpUS02ISzHrl93AY1KD96wrjSydsTs3i-EjV9HGIGH81FAKAuDfmKktdTjQjSqhY-x&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=MKQBBWestJZfdjDIPEJosg&oh=00_AfRPhz722M3aGI87wJ-K9CmcadRveaL8ID2iKpLtyn9aHg&oe=6893D206'
    }
    ,
    {
      name: 'Anh Lê Văn Thành',
      role: 'Chủ nhà hàng',
      location: 'Quận Hà Đông, TP.Hà Nội',
      content: 'Chuyển nhà hàng là việc rất phức tạp với nhiều thiết bị nặng. Evergreen Transport đã xử lý rất chuyên nghiệp. Từ bàn ghế đến thiết bị bếp đều được vận chuyển an toàn. Mở cửa đúng hẹn nhờ dịch vụ tốt.',
      rating: 5,
      service: 'Chuyển nhà hàng',
      image: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/528047782_1280135823898345_4898235151593813741_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wvGDTjmAo_MQ7kNvwGgqBCf&_nc_oc=AdnuOo1Duq6U_Q3dF2qZ_s8wnuq6TzTrHqr1ZkraBr3dXkzS0tZ0OPZ1ayV8xewXzPpdiXS9xH17xlC7pqNu1sZ3&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=oYPufU1JNXUcGQsZ2HOE9w&oh=00_AfQroIb1jasVyb3Qy_gNntCCKfjYrdinuFq8ONnIiUHEhg&oe=6893CDA6'
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