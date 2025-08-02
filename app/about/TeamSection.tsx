
'use client';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Nguyễn Văn Đức',
      experience: '8 năm kinh nghiệm',
      description: 'Chuyên gia về logistics và quản lý vận tải, dẫn dắt đội ngũ với tầm nhìn phát triển bền vững.',
      image: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/525488019_1278266120751982_1696023575749386267_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mn-IHbpFEvYQ7kNvwHQ1k0B&_nc_oc=Adn3yzddsemGaQMRa0GLvGZx4wmrgJ8e--R-OMduDnHGuQai12vK2Cc5704GC9_HxDjPzfnz9XJlo36449XDs0VB&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=T8EuDYHoZoQafDlk04Dbgg&oh=00_AfR-B6E03lXmofGXeG_3yQydSgHBcqY5qp9D25xfBL4zHQ&oe=6890E9A0'
    },
    {
      name: 'Nguyễn Phương Anh',
      experience: '6 năm kinh nghiệm',
      description: 'Chuyên về tư vấn khách hàng và phát triển dịch vụ, cam kết mang đến trải nghiệm tốt nhất.',
      image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/528043633_1280135903898337_8496146474720292352_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gb016HCBhMYQ7kNvwF4Pqel&_nc_oc=Admh7Awwv2k99BL8UT0cFZA1JlnqdMkMTo78MRAgdY1OK7bNkiYhTv5kKHmOwyp-AzmGoMfWJ-QILKxdkUOSqseU&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=of1J2PCNSSdKZW_ehEQBrg&oh=00_AfRcK5kgcezzaqoGM4k1VxraAwrk4Z_ikd7-wbrNC31MQw&oe=6893CEA4'
    },
    {
      name: 'Lưu Quang Vinh',
      experience: '7 năm kinh nghiệm',
      description: 'Chuyên gia về tháo lắp nội thất và kỹ thuật đóng gói, đảm bảo an toàn tuyệt đối cho hàng hóa.',
      image: 'https://static.readdy.ai/image/0a23ecdabcf5bed08d32b4e165bba5fb/16954b033f3c359432bd2beb542d8231.jfif'
    },
    {
      name: 'Nguyễn Quang Dũng',
      experience: '5 năm kinh nghiệm',
      description: 'Chuyên về hỗ trợ khách hàng và giải quyết khiếu nại, luôn đặt sự hài lòng của khách hàng lên hàng đầu.',
      image: 'https://his.ussh.vnu.edu.vn/uploads/his/gioi-thieu/2022_03/pgs-pham-duc-anh.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Đội Ngũ Nhân Viên
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những con người tận tâm và giàu kinh nghiệm là nền tảng cho sự thành công của Evergreen Transport
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <div className="text-sm text-gray-500 mb-3">{member.experience}</div>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Tại sao chọn đội ngũ của chúng tôi?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-star-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Chuyên nghiệp</h4>
                <p className="text-gray-600">Được đào tạo bài bản và có chứng chỉ hành nghề</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Tận tâm</h4>
                <p className="text-gray-600">Luôn đặt lợi ích khách hàng lên hàng đầu</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Đáng tin cậy</h4>
                <p className="text-gray-600">Cam kết chất lượng và bảo mật thông tin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
