'use client';

export default function TestimonialsStats() {
  const stats = [
    {
      number: '2,500+',
      label: 'Khách hàng hài lòng',
      icon: 'ri-user-smile-line'
    },
    {
      number: '99.8%',
      label: 'Tỷ lệ thành công',
      icon: 'ri-thumb-up-line'
    },
    {
      number: '4.9/5',
      label: 'Đánh giá trung bình',
      icon: 'ri-star-line'
    },
    {
      number: '98%',
      label: 'Khách hàng quay lại',
      icon: 'ri-repeat-line'
    }
  ];

  const awards = [
    {
      title: 'Đồng Phục Công Ty',
      organization: 'Mặt Trước',
      image: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/525016828_1278657644046163_5310365114791031519_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-tHF6au_hp8Q7kNvwFxZid4&_nc_oc=AdnPEVrrzL300TtOF7hFG-h4WIgp9OvmPDJgIvVFnZ46kZrS-OYN4qlMhTFmX3NVznSPlp0BlfeAhHIzRiWjjvhQ&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=EyMoYZjqdLVHhoUp7lkcNg&oh=00_AfQ4rnGhqzH5p30FOydFNiuz4Dd5NZMhrq73x5Eiyd2dag&oe=68917395'
    },
    {
      title: 'Đồng Phục Công Ty',
      organization: 'Mặt Sau',
      image: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/526589768_1278659734045954_6279101412463707175_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=t8ftPHzH5VsQ7kNvwHsmb5s&_nc_oc=AdlqaxQYVgeFmO31MqW_9Hj-UC1xB7JFSVcdXKZ6HOCrUt_a6gVAl4Sjde3SdN8PQjlSNs2EYMpkJyR1Ql-R8N_p&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=eUEWERqwM62ZMTBrxtavvQ&oh=00_AfS3SfCF0yfssLCAzjDpfg6qZU9nh4mcr2X1RXt4xFIyNQ&oe=68915DD1'
    },
    {
      title: 'Đồng Phục Công Ty',
      organization: 'Nhân Viên Mặc Đồng Phục',
      image: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/525488019_1278266120751982_1696023575749386267_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mn-IHbpFEvYQ7kNvwFDrNUF&_nc_oc=AdmjQ65ZyQat9uxFNPdqx3Wbl0MGMKl0BcUUWFA_NgeDTDW3FRpJvelbBvm-o5aHNG-3Dw9kDkqYl5mqcAUcO80J&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=NWs4T8ur5Su1RgQhrQvzWw&oh=00_AfQf4BIwPtfOTcnfq18VflXSe0jJ2OUdJhwiFZeGfPjFIA&oe=68915A20'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Thành tích đạt được
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những con số và giải thưởng minh chứng cho chất lượng dịch vụ
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-emerald-600 text-2xl`}></i>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Đồng Phục Của Công Ty Chúng Tôi
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-24 h-24 mx-auto mb-4 object-cover object-top"
                />
                <h4 className="font-semibold text-gray-800 mb-2">{award.title}</h4>
                <p className="text-sm text-gray-600">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Hãy trở thành khách hàng tiếp theo
          </h3>
          <p className="text-gray-600 mb-6">
            Tham gia cùng hàng nghìn khách hàng đã tin tưởng chọn Evergreen Transport
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer">
              Đặt lịch ngay
            </a>
            <a href="/pricing" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              Xem bảng giá
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}