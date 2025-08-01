'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = 'service_bdw8c6b';
const EMAILJS_TEMPLATE_ID = 'template_q94dio2';
const EMAILJS_PUBLIC_KEY = 'oRqEh5mULFTsdjd2x';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const subjects = [
    { value: 'quote', label: 'Yêu cầu báo giá' },
    { value: 'booking', label: 'Đặt lịch dịch vụ' },
    { value: 'complaint', label: 'Khiếu nại' },
    { value: 'feedback', label: 'Góp ý' },
    { value: 'other', label: 'Khác' }
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('');

  try {
    if (!formData.name || !formData.phone || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    if (formData.message.length > 500) {
      setSubmitStatus('error');
      return;
    }

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    setSubmitStatus('success');
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  } catch (error) {
    console.error('EmailJS Error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gửi tin nhắn cho chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong thời gian sớm nhất
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Thông tin liên hệ nhanh
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-emerald-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Hotline</h4>
                    <p className="text-gray-600">Hỗ trợ 24/7</p>
                    <a href="tel:0123456789" className="text-emerald-600 font-bold text-lg hover:text-emerald-700">
                      0388 823 884
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">Phản hồi trong 1 giờ</p>
                    <a href="mailto:evergreentransports@gmail.com" className="text-blue-600 font-semibold hover:text-blue-700">
                      evergreentransports@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-message-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Zalo</h4>
                    <p className="text-gray-600">Chat trực tiếp</p>
                    <a href="https://zalo.me/0898510038" className="text-green-600 font-semibold hover:text-green-700">
                      Chat ngay
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Địa chỉ</h4>
                    <p className="text-gray-600">Trụ sở chính</p>
                    <p className="text-gray-700">
                      28 Đường Kẻ Vẽ, Phường Đông Ngạc<br />
                      Quận Bắc Từ Liêm, TP.HN
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form id="contact-form-submit" onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
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
                      Chủ đề
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Chọn chủ đề</option>
                      {subjects.map(subject => (
                        <option key={subject.value} value={subject.value}>{subject.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tin nhắn *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Nhập tin nhắn..."
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.message.length}/500 ký tự
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50"
                  >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                      <span className="text-green-800">
                        Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.
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
        </div>
      </div>
    </section>
  );
}