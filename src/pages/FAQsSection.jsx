import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do I need a credit card to sign up?',
      answer: 'No, you don\'t need a credit card to sign up for our free plan. You can start using our service immediately without any payment information. Credit card details are only required when you decide to upgrade to a paid plan.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade your plan at any time. Simply go to your account settings and choose the plan that best fits your needs. The upgrade will take effect immediately, and you\'ll be charged on a pro-rated basis for the remainder of your billing cycle.'
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes, we offer a 14-day free trial for our Premium plan. During the trial period, you\'ll have access to all premium features without any charges. You can cancel anytime during the trial period without being charged.'
    },
    {
      question: 'Do you offer discounts for teams or yearly billing?',
      answer: 'Yes, we offer significant discounts for annual billing. When you choose to pay annually, you can save up to 20% compared to monthly billing. We also offer special pricing for teams and enterprise customers. Contact our sales team for more information.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We take data security very seriously. All data is encrypted in transit and at rest using industry-standard encryption protocols. We regularly conduct security audits and comply with major data protection regulations including GDPR and SOC 2.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you\'ll continue to have access to your paid features until the end of your current billing period.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-12">
          FAQs
        </h1>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}