import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function PricingSection() {
  const logos = [
    { name: 'goipsum', icon: '🌐' },
    { name: 'treva', icon: '🎯' },
    { name: 'velocity', icon: '⚡' },
    { name: 'Logoipsum', icon: '☁️' },
    { name: 'stari', icon: '⭐' },
    { name: 'goldline', icon: '🏆' },
  ];

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'USD',
      description: 'Free for up to 10 collaborators per Workspace',
      subtitle: 'Perfect for small teams and personal projects.',
      buttonText: 'Get Started Free',
      buttonStyle: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
      features: [
        'Unlimited cards',
        'Up to 10 boards per Workspace',
        'Unlimited Power-Ups per board',
        'Unlimited storage (10MB/file)',
        '250 Workspace command runs',
        'Custom backgrounds & stickers',
        '2-factor authentication'
      ],
      includedText: 'Included in Free:',
      background: 'bg-white',
      border: 'border-gray-200'
    },
    {
      name: 'Premium',
      price: '$10',
      period: 'USD',
      description: 'Per user/month',
      billing: '+If billed annually ($12.50 billed annual)',
      billingBg: 'bg-green-100',
      subtitle: 'Add AI features, advanced views, and more control over your workspace.',
      buttonText: 'Start 14 Day Free Trial',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      features: [
        'Zentree Intelligence (AI)',
        'Workspace views',
        'Admin and security features',
        'Workspace-level templates',
        'Simple data export'
      ],
      includedText: 'Everything in Standard, plus:',
      background: 'bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50',
      border: 'border-transparent',
      gradient: true,
      topBorder: 'bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400'
    },
    {
      name: 'Enterprise',
      price: '$17.50',
      period: 'USD',
      description: 'Per user/month',
      billing: 'If billed annually ($210.00 billed annual)',
      billingBg: 'bg-green-100',
      subtitle: 'Enterprise-grade security, 24/7 support, and admin controls for large teams.',
      buttonText: 'Contact for Demo',
      buttonStyle: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-50',
      features: [
        'Unlimited Workspaces',
        'Organization-visible boards',
        'Public board management',
        'Multi-board guests',
        'Workspace-level templates',
        'Power-Up administration'
      ],
      includedText: 'Everything in Premium, plus:',
      background: 'bg-white',
      border: 'border-gray-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Pick the best Plan
          </h1>
          <p className="text-gray-600 text-lg">
            We've got a plan to help you stay organized and on track.
          </p>
        </div>

        {/* Company Logos */}
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-6">Transforming the Remote Working</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-500">
                <span className="text-xl">{logo.icon}</span>
                <span className="font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl ${plan.background} border ${plan.border} overflow-hidden shadow-sm hover:shadow-lg transition-shadow`}
            >
              {/* Gradient top border for Premium plan */}
              {plan.topBorder && (
                <div className={`h-1 ${plan.topBorder}`}></div>
              )}
              
              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {plan.description}
                  </p>
                  
                  {/* Billing info */}
                  {plan.billing && (
                    <div className={`${plan.billingBg} text-green-800 text-xs font-medium px-3 py-2 rounded-lg inline-block mb-4`}>
                      {plan.billing}
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-700 mt-4">
                    {plan.subtitle}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full ${plan.buttonStyle} font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors mb-6`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Features List */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4">
                    {plan.includedText}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}