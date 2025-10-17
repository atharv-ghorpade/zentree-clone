import React, { useState, useRef, useEffect } from 'react';
import { Calculator, DollarSign, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EarningsCalculator() {
  const [subscribers, setSubscribers] = useState(250);
  const [price, setPrice] = useState(45);
  const [billingType, setBillingType] = useState('Monthly');

  const containerRef = useRef(null);
  const calculatorRef = useRef(null);
  const quickStartRef = useRef(null);
  const communityTypesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculator section animation
      gsap.fromTo(calculatorRef.current.children,
        {
          y: 60,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: calculatorRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Quick start section animation
      gsap.fromTo(quickStartRef.current.children,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quickStartRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Community types cards animation
      gsap.fromTo(communityTypesRef.current,
        {
          y: 80,
          opacity: 0,
          rotationX: 15
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector('.community-types-grid'),
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const calculateEarnings = () => {
    const revenue = subscribers * price;
    return revenue.toLocaleString();
  };

  const communityTypes = [
    {
      title: 'OneTapay for Podcasts',
      icon: '🎙️',
      description: 'Set up a paid podcast community on Discord, Telegram or Slack.'
    },
    {
      title: 'OneTapay for Resellers',
      icon: '💼',
      description: 'Build a monetized reseller community with exclusive access.'
    },
    {
      title: 'Membership Site',
      icon: '🏠',
      description: 'Create premium membership experiences across platforms.'
    },
    {
      title: 'Finance & Stock Alerts',
      icon: '📈',
      description: 'Share trading insights and financial advice with subscribers.'
    },
    {
      title: 'OneTapay for Youtubers & Content Creators',
      icon: '🎬',
      description: 'Monetize your audience with exclusive content communities.'
    },
    {
      title: 'Crypto & NFT groups',
      icon: '₿',
      description: 'Build communities around cryptocurrency and NFT trading.'
    },
    {
      title: 'Sport picks',
      icon: '⚽',
      description: 'Share sports betting tips and analysis with members.'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Earnings Calculator Section */}
        <div ref={calculatorRef} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Estimate what you could make on OneTapay.
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Subscribers Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter number of subscribers
                </label>
                <input
                  type="number"
                  value={subscribers}
                  onChange={(e) => setSubscribers(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-semibold"
                />
              </div>

              {/* Price Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500 text-lg">$</span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Billing Type */}
            <div className="mb-6">
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setBillingType('Monthly')}
                  className={`px-6 py-2 rounded-l-lg font-medium ${
                    billingType === 'Monthly'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingType('Yearly')}
                  className={`px-6 py-2 rounded-r-lg font-medium ${
                    billingType === 'Yearly'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-2">You receive:</p>
              <div className="text-4xl font-bold text-green-600 mb-2">
                ${calculateEarnings()}
              </div>
              <p className="text-lg text-gray-600">/{billingType.toLowerCase()}</p>
              
              <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            You keep all revenue after any applicable OneTapay and Stripe fees.
          </p>
        </div>

        {/* Quick Start Section */}
        <div ref={quickStartRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <div className="text-white text-2xl">💰</div>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start earning from your community in a few clicks.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            OneTapay is the easiest way to charge for access to your Discord, Telegram or Slack community. 
            Create your account in minutes and start earning money for the value you offer.
          </p>
        </div>

        {/* Community Types Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            All types of paid chat<br />
            communities thrive on LaunchPass
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            From startups to content creators to finance and trade, thousands of people use OneTapay to power their paid chat communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 community-types-grid">
            {communityTypes.map((type, index) => (
              <div
                key={index}
                ref={el => communityTypesRef.current[index] = el}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
