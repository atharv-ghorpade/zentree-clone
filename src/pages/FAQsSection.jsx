import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const faqItemsRef = useRef([]);

  const faqs = [
    {
      question: 'What is OneTapay?',
      answer: 'OneTapay is a platform that makes it easy to charge for access to Discord, Telegram & Slack communities. We handle member management, billing, and invites so you can focus on creating great content for your community.'
    },
    {
      question: 'Is OneTapay secure?',
      answer: 'Yes, OneTapay is extremely secure. All transactions are processed through Stripe, and we never store your payment information. We use industry-standard encryption and security practices to protect your data and your community members\' information.'
    },
    {
      question: 'Is OneTapay free?',
      answer: 'Yes, we offer a free Basic plan that includes automated member invites, unlimited free members, and customizable invite pages. Our Premium plan starts at $29/month with additional features and a 3.5% transaction fee.'
    },
    {
      question: 'What kind of Communities Use OneTapay?',
      answer: 'All types of paid chat communities thrive on OneTapay - from podcasts and content creators to finance & stock alerts, crypto & NFT groups, membership sites, resellers, and sport picks. We support any community that wants to monetize their Discord, Telegram, or Slack.'
    },
    {
      question: 'How Much Does OneTapay Cost?',
      answer: 'Our Basic plan is free forever with no transaction fees. Our Premium plan is $29/month plus a 3.5% transaction fee, and includes a 14-day free trial. We also offer custom Enterprise pricing for larger organizations.'
    },
    {
      question: 'How do you process membership fees?',
      answer: 'We process all payments through Stripe, a trusted and secure payment processor. We support all major credit cards, Apple Pay, Google Pay, and a wide range of cryptocurrencies. Payments are processed instantly and securely.'
    },
    {
      question: 'What if I want to change plans?',
      answer: 'You can upgrade or downgrade your plan at any time through your dashboard. Changes take effect immediately, and we\'ll prorate any billing differences. There are no long-term contracts or cancellation fees.'
    },
    {
      question: 'Can I charge a one-time fee instead of a recurring fee? What about free trials?',
      answer: 'Yes! Our Premium plan supports both one-time and recurring billing options. You can also offer free trials and discount coupons to new members. You have full control over your pricing structure and can change it anytime.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        {
          y: -50,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // FAQ items stagger animation
      gsap.fromTo(faqItemsRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 ref={headerRef} className="text-5xl font-bold text-gray-900 text-center mb-12">
          FAQs
        </h1>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={el => faqItemsRef.current[index] = el}
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