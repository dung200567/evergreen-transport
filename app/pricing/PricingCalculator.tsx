'use client';

import { useState } from 'react';

export default function PricingCalculator() {
  interface FormData {
  roomType: string;
  distance: string;
  services: string[];
  floors: string;
}
const [formData, setFormData] = useState<FormData>({
  roomType: '',
  distance: '',
  services: [],
  floors: '1'
});
  
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const roomTypes = [
    { value: 'studio', label: 'Phòng trọ/Studio', basePrice: 500000},
    { value: 'apartment1', label: 'Căn hộ 1-2 phòng', basePrice: 800000 },
    { value: 'apartment2', label: 'Căn hộ 2-3 phòng', basePrice: 1200000 },
    { value: 'house', label: 'Nhà riêng/Căn hộ lớn', basePrice: 2500000 },
    { value: 'office', label: 'Văn phòng/Cửa hàng', basePrice: 5000000 }
  ];

  const distances = [
    { value: 'inner', label: 'Nội thành (< 15km)', multiplier: 1 },
    { value: 'suburb', label: 'Ngoại thành (15-30km)', multiplier: 1.3 },
    { value: 'intercity', label: 'Liên tỉnh (> 30km)', multiplier: 2 }
  ];

  const additionalServices = [
    { value: 'packing', label: 'Đóng gói chuyên nghiệp', price: 200000 },
    { value: 'furniture', label: 'Tháo lắp nội thất', price: 300000 },
    { value: 'cleaning', label: 'Dọn dẹp sau chuyển', price: 150000 },
    { value: 'storage', label: 'Lưu trữ tạm thời', price: 100000 }
  ];

  const calculatePrice = () => {
    const roomType = roomTypes.find(r => r.value === formData.roomType);
    const distance = distances.find(d => d.value === formData.distance);
    
    if (!roomType || !distance) return;

    let basePrice = roomType.basePrice;
    let totalPrice = basePrice * distance.multiplier;

    // Add floor charge
    if (parseInt(formData.floors) > 3) {
      totalPrice += (parseInt(formData.floors) - 3) * 100000;
    }

    // Add additional services
    formData.services.forEach(serviceValue => {
      const service = additionalServices.find(s => s.value === serviceValue);
      if (service) {
        totalPrice += service.price;
      }
    });

    setEstimatedPrice(totalPrice);
  };

  const handleServiceChange = (serviceValue: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter(s => s !== serviceValue)
        : [...prev.services, serviceValue]
    }));
  };

  return (
    <section id="pricing-calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tính giá dịch vụ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ước tính chi phí dịch vụ chuyển nhà của bạn ngay tại đây
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Thông tin chuyển nhà</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loại nhà/văn phòng
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData(prev => ({ ...prev, roomType: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Chọn loại nhà</option>
                    {roomTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Khoảng cách vận chuyển
                  </label>
                  <select
                    value={formData.distance}
                    onChange={(e) => setFormData(prev => ({ ...prev, distance: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Chọn khoảng cách</option>
                    {distances.map(distance => (
                      <option key={distance.value} value={distance.value}>{distance.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số tầng (nếu là nhà riêng)
                  </label>
                  <select
                    value={formData.floors}
                    onChange={(e) => setFormData(prev => ({ ...prev, floors: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="1">1 tầng</option>
                    <option value="2">2 tầng</option>
                    <option value="3">3 tầng</option>
                    <option value="4">4 tầng</option>
                    <option value="5">5 tầng trở lên</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dịch vụ bổ sung
                  </label>
                  <div className="space-y-2">
                    {additionalServices.map(service => (
                      <label key={service.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.value)}
                          onChange={() => handleServiceChange(service.value)}
                          className="mr-3 h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">{service.label}</span>
                        <span className="ml-auto text-sm text-emerald-600 font-semibold">
                          +{service.price.toLocaleString('vi-VN')}đ
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ước tính chi phí</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Loại nhà:</span>
                  <span className="font-semibold">
                    {formData.roomType ? roomTypes.find(r => r.value === formData.roomType)?.label : 'Chưa chọn'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Khoảng cách:</span>
                  <span className="font-semibold">
                    {formData.distance ? distances.find(d => d.value === formData.distance)?.label : 'Chưa chọn'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Số tầng:</span>
                  <span className="font-semibold">{formData.floors} tầng</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Dịch vụ bổ sung:</span>
                  <span className="font-semibold">{formData.services.length} dịch vụ</span>
                </div>
              </div>

              <div className="border-t border-emerald-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Tổng chi phí ước tính:</span>
                  <span className="text-2xl font-bold text-emerald-600">
                    {estimatedPrice > 0 ? `${estimatedPrice.toLocaleString('vi-VN')}đ` : '0đ'}
                  </span>
                </div>
              </div>

              <button
                onClick={calculatePrice}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap mb-4"
              >
                Tính giá dịch vụ
              </button>

              <p className="text-sm text-gray-600 text-center mb-4">
                * Giá trên chỉ mang tính chất tham khảo
              </p>

              <a href="/booking" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap block text-center">
                Đặt lịch ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}