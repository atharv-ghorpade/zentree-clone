import React, { useRef, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { gsap } from 'gsap';

export default function PricingSection() {
  const logosRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const logoAnimationRef = useRef(null);

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
      name: 'Basic',
      price: '$0',
      period: 'USD',
      description: '/ month',
      billing: 'no transaction fee, it\'s free.',
      billingBg: 'bg-green-100',
      subtitle: 'Free Forever',
      buttonText: 'Get Started',
      buttonStyle: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
      features: [
        'Automated member invites',
        'Unlimited free members',
        'One-click disable/enable signups',
        'Customizable invite page design',
        'Custom description',
        'Automated invites'
      ],
      includedText: 'Included in Basic:',
      background: 'bg-white',
      border: 'border-gray-200'
    },
    {
      name: 'Premium',
      price: '$29',
      period: 'USD',
      description: '/ month',
      billing: '+3.5% transaction fee',
      billingBg: 'bg-blue-100',
      subtitle: '14 days free trial',
      buttonText: 'Get Started',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      features: [
        'All features included from basic',
        'One-time & recurring billing options',
        'Offer free trials & coupons',
        'Multi-tiered level access',
        'Paid & free access in the same community',
        'Dashboard with activity feed',
        'Automated email subscriber invoicing',
        'Automated subscriber plan management',
        'Embeddable sign–up widget',
        'Auto kick or role removal (Discord) on cancel',
        'Powerful affiliate integration',
        'Track analytics and conversions',
        '24/7 live chat support for your team & subscribers',
        'Access to our Discord, Telegram & Slack configuration experts',
        'Access to our customer success & growth teams'
      ],
      includedText: 'Everything in Premium:',
      background: 'bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50',
      border: 'border-transparent',
      gradient: true,
      topBorder: 'bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400',
      featured: true
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current.children, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Cards animation
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.4,
        clearProps: "all"
      });

      // Logo strip animation
      if (logosRef.current) {
        const logoContainer = logosRef.current;
        const logoWidth = logoContainer.scrollWidth / 2;
        
        // Clone logos for seamless loop
        const clone = logoContainer.innerHTML;
        logoContainer.innerHTML += clone;
        
        logoAnimationRef.current = gsap.to(logoContainer, {
          x: -logoWidth,
          duration: 20,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % logoWidth)
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Pick a Plan
          </h1>
          <p className="text-gray-600 text-lg">
            Simple & honest pricing. If you need help deciding which plan is right for you, you can book a call with one of our experts.
          </p>
          <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
            Book a free call to learn more
          </button>
        </div>

        {/* Company Logos Strip */}
        <div className="text-center mb-16">
          <p className="text-gray-600 mb-6 font-medium">Transforming the Remote Working</p>
          <div className="relative overflow-hidden py-4">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-purple-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-pink-50 to-transparent z-10 pointer-events-none"></div>
            
            <div 
              ref={logosRef}
              className="flex items-center gap-12"
              onMouseEnter={() => {
                if (logoAnimationRef.current) {
                  gsap.to(logoAnimationRef.current, { timeScale: 0.3, duration: 0.5 });
                }
              }}
              onMouseLeave={() => {
                if (logoAnimationRef.current) {
                  gsap.to(logoAnimationRef.current, { timeScale: 1, duration: 0.5 });
                }
              }}
            >
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-gray-500 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity shrink-0"
                >
                  <span className="text-2xl">{logo.icon}</span>
                  <span className="font-medium text-lg">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`rounded-2xl ${plan.background} border ${plan.border} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative ${
                plan.featured ? 'md:scale-105 md:z-10' : ''
              }`}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -8,
                  scale: plan.featured ? 1.05 : 1.02,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  scale: plan.featured ? 1.05 : 1,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              {/* Gradient top border for Premium plan */}
              {plan.topBorder && (
                <div className={`h-1 ${plan.topBorder}`}></div>
              )}
              
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}
              
              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl font-semibold text-gray-600">
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
                  className={`w-full ${plan.buttonStyle} font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group`}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget.querySelector('.arrow'), {
                      x: 5,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget.querySelector('.arrow'), {
                      x: 0,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4 arrow" />
                </button>

                {/* Features List */}
                <div className="mt-8">
                  <p className="text-sm font-semibold text-gray-700 mb-4">
                    {plan.includedText}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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