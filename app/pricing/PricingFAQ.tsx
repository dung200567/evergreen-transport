'use client';

import { useState } from 'react';

export default function PricingFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Giá cả có bao gồm thuế VAT không?',
      answer: 'Tất cả giá niêm yết đã bao gồm thuế VAT 10%. Chúng tôi sẽ cung cấp hóa đơn đầy đủ theo quy định.'
    },
    {
      question: 'Có phí phát sinh thêm không?',
      answer: 'Không có phí ẩn. Mọi chi phí đều được thông báo rõ ràng trong báo giá. Chỉ phát sinh thêm nếu khách hàng yêu cầu dịch vụ bổ sung ngoài hợp đồng.'
    },
    {
      question: 'Làm thế nào để được giảm giá?',
      answer: 'Chúng tôi có nhiều chương trình khuyến mãi: giảm 10% cho khách hàng đặt trước 1 tuần, giảm 5% cho khách hàng giới thiệu, và các gói combo tiết kiệm.'
    },
    {
      question: 'Có cần đặt cọc trước không?',
      answer: 'Cần đặt cọc 30% giá trị hợp đồng để xác nhận lịch hẹn. Số tiền còn lại thanh toán sau khi hoàn thành dịch vụ.'
    },
    {
      question: 'Hình thức thanh toán nào được chấp nhận?',
      answer: 'Chúng tôi chấp nhận thanh toán tiền mặt, chuyển khoản ngân hàng, ví điện tử (MoMo, ZaloPay) và quẹt thẻ tại chỗ.'
    },
    {
      question: 'Quy định về hoàn hủy dịch vụ?',
      answer: 'Hủy trước 48h: hoàn 100% tiền cọc. Hủy trước 24h: hoàn 50%. Hủy trong ngày: không hoàn tiền cọc nhưng có thể dời lịch.'
    },
    {
      question: 'Giá có khác biệt theo thời gian không?',
      answer: 'Giá cơ bản không đổi. Tuy nhiên, dịch vụ ngoài giờ hành chính (sau 18h, cuối tuần) có thể phụ thu 20-30%.'
    },
    {
      question: 'Có bảo hiểm cho hàng hóa không?',
      answer: 'Có. Tất cả hàng hóa được bảo hiểm 100% giá trị. Phí bảo hiểm đã bao gồm trong giá dịch vụ.'
    }
  ];

const toggleFAQ = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những câu hỏi phổ biến về giá cả và chính sách dịch vụ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <i className={`ri-${activeIndex === index ? 'subtract' : 'add'}-line text-emerald-600 text-xl`}></i>
                </button>
                
                {activeIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Còn thắc mắc gì khác? Liên hệ với chúng tôi để được tư vấn chi tiết
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0388823884" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer">
              Gọi ngay: 0388 823 884
            </a>
            <a href="/contact" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              Liên hệ online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}