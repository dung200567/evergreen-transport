
'use client';

export default function AboutHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20logistics%20company%20building%20exterior%20with%20green%20moving%20trucks%20parked%20in%20front%2C%20professional%20business%20headquarters%2C%20clean%20architecture%2C%20successful%20transportation%20company%2C%20corporate%20environment%2C%20bright%20daylight&width=1920&height=800&seq=about-hero-building&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Về Evergreen Transport
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
          Với hơn 5 năm kinh nghiệm trong lĩnh vực chuyển nhà và vận chuyển, chúng tôi cam kết mang đến dịch vụ tốt nhất cho khách hàng
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-white/90">Khách hàng tin tưởng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-white/90">Năm kinh nghiệm</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/90">Nhân viên chuyên nghiệp</div>
          </div>
        </div>
      </div>
    </section>
  );
}
