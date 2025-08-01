'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
const EMAILJS_SERVICE_ID = 'service_bdw8c6b';
const EMAILJS_TEMPLATE_ID = 'template_itwub78';
const EMAILJS_PUBLIC_KEY = 'oRqEh5mULFTsdjd2x';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    fromAddress: '',
    toAddress: '',
    serviceType: '',
    movingDate: '',
    movingTime: '',
    roomType: '',
    floors: '1',
    elevator: 'no',
    additionalServices: [],
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const serviceTypes = [
    { value: 'home-full', label: 'Chuyển nhà trọn gói' },
    { value: 'office', label: 'Chuyển văn phòng' },
    { value: 'intercity', label: 'Chuyển nhà liên tỉnh' },
    { value: 'truck-rental', label: 'Cho thuê xe tải' },
    { value: 'packing', label: 'Đóng gói chuyên nghiệp' },
    { value: 'furniture', label: 'Tháo lắp nội thất' }
  ];

  const roomTypes = [
    { value: 'studio', label: 'Phòng trọ/Studio' },
    { value: 'apartment1', label: 'Căn hộ 1-2 phòng' },
    { value: 'apartment2', label: 'Căn hộ 2-3 phòng' },
    { value: 'house', label: 'Nhà riêng/Căn hộ lớn' },
    { value: 'office', label: 'Văn phòng/Cửa hàng' }
  ];

  const additionalServices = [
    { value: 'packing', label: 'Đóng gói chuyên nghiệp' },
    { value: 'furniture', label: 'Tháo lắp nội thất' },
    { value: 'cleaning', label: 'Dọn dẹp sau chuyển' },
    { value: 'storage', label: 'Lưu trữ tạm thời' },
    { value: 'insurance', label: 'Bảo hiểm VIP' }
  ];

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

 const handleServiceChange = (serviceValue: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceValue)
        ? prev.additionalServices.filter(s => s !== serviceValue)
        : [...prev.additionalServices, serviceValue]
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('');

  try {
    // Kiểm tra các trường bắt buộc
    if (!formData.customerName || !formData.phone || !formData.fromAddress || !formData.toAddress) {
      setSubmitStatus('error');
      return;
    }

    // Chuẩn bị dữ liệu gửi email
    const templateParams = {
      customer_name: formData.customerName,
      phone: formData.phone,
      email: formData.email,
      from_address: formData.fromAddress,
      to_address: formData.toAddress,
      service_type: formData.serviceType,
      moving_date: formData.movingDate,
      moving_time: formData.movingTime,
      room_type: formData.roomType,
      floors: formData.floors,
      elevator: formData.elevator,
      additional_services: formData.additionalServices.join(', '),
      notes: formData.notes
    };

    // Gửi email qua EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    setSubmitStatus('success');

    // Reset form
    setFormData({
      customerName: '',
      phone: '',
      email: '',
      fromAddress: '',
      toAddress: '',
      serviceType: '',
      movingDate: '',
      movingTime: '',
      roomType: '',
      floors: '1',
      elevator: 'no',
      additionalServices: [],
      notes: ''
    });
  } catch (error) {
    console.error('EmailJS Error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="booking-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Đặt lịch dịch vụ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Điền thông tin chi tiết để chúng tôi có thể tư vấn và báo giá chính xác nhất
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form id="booking-form-submit" onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Nhập email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loại dịch vụ *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Chọn loại dịch vụ</option>
                  {serviceTypes.map(service => (
                    <option key={service.value} value={service.value}>{service.label}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Địa chỉ chuyển từ *
                </label>
                <input
                  type="text"
                  name="fromAddress"
                  value={formData.fromAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Nhập địa chỉ chuyển từ"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Địa chỉ chuyển đến *
                </label>
                <input
                  type="text"
                  name="toAddress"
                  value={formData.toAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Nhập địa chỉ chuyển đến"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ngày chuyển nhà
                </label>
                <input
                  type="date"
                  name="movingDate"
                  value={formData.movingDate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Giờ chuyển nhà
                </label>
                <select
                  name="movingTime"
                  value={formData.movingTime}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Chọn giờ</option>
                  <option value="morning">Buổi sáng (7h-11h)</option>
                  <option value="afternoon">Buổi chiều (13h-17h)</option>
                  <option value="evening">Buổi tối (18h-21h)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loại nhà/văn phòng
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
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
                  Số tầng
                </label>
                <select
                  name="floors"
                  value={formData.floors}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="1">1 tầng</option>
                  <option value="2">2 tầng</option>
                  <option value="3">3 tầng</option>
                  <option value="4">4 tầng</option>
                  <option value="5">5 tầng trở lên</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Có thang máy?
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="elevator"
                      value="yes"
                      checked={formData.elevator === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2 h-4 w-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">Có</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="elevator"
                      value="no"
                      checked={formData.elevator === 'no'}
                      onChange={handleInputChange}
                      className="mr-2 h-4 w-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">Không</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dịch vụ bổ sung
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {additionalServices.map(service => (
                    <label key={service.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(service.value)}
                        onChange={() => handleServiceChange(service.value)}
                        className="mr-2 h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-sm text-gray-700">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ghi chú thêm
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Nhập ghi chú về đồ đạc đặc biệt, yêu cầu khác..."
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formData.notes.length}/500 ký tự
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-emerald-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? 'Đang gửi...' : 'Đặt lịch ngay'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                  <span className="text-green-800">
                    Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn trong vòng 30 phút.
                  </span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                  <span className="text-red-800">
                    Có lỗi xảy ra. Vui lòng kiểm tra lại thông tin và thử lại.
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}