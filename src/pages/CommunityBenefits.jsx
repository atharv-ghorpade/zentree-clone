import React, { useRef, useEffect } from 'react';
import { Rocket, DollarSign, Users, Settings, CreditCard, Palette } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CommunityBenefits() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const benefitCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current.children,
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
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Benefit cards stagger animation
      gsap.fromTo(benefitCardsRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector('.benefits-grid'),
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Individual card hover enhancement
      benefitCardsRef.current.forEach((card) => {
        if (card) {
          // Parallax effect
          gsap.fromTo(card,
            { y: 0 },
            {
              y: -20,
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
              }
            }
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      bgColor: 'bg-blue-500',
      title: 'Get Started In Minutes',
      description: 'Creating a paid subscription community has never been easier. Connect your Discord, Telegram or Slack account, connect Stripe, set up your invite page and you\'re off! In minutes you can start charging for your paid chat community.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      bgColor: 'bg-green-500',
      title: 'Monetize Your Community',
      description: 'Whether you\'re just getting started with your Discord server, Telegram or Slack group, or you have an established community, OneTapay enables you to charge for access to Discord, Telegram and Slack - no coding required.'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      bgColor: 'bg-purple-500',
      title: 'Easily Manage Your Members',
      description: 'OneTapay makes member management a breeze. We handle everything from invites to member activity tracking so you can focus on building your paid Discord, Telegram or Slack community.'
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      bgColor: 'bg-orange-500',
      title: 'Flexible Subscription Options',
      description: 'Set your own subscription price and give your paid community members different subscription options with the click of a button. With our flexible subscription options you can offer free trials and select what frequency you want to charge customers (weekly, monthly, yearly, etc.)'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      bgColor: 'bg-green-600',
      title: 'Stress-free Billing',
      description: 'OneTapay is a verified Stripe Partner and all transactions are administered using the Stripe platform. Connect your bank account in seconds and get paid quickly and safely. Rest assured knowing you\'ll be paid on time, hassle-free.'
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      bgColor: 'bg-yellow-500',
      title: 'Your Community, Your Brand',
      description: 'With OneTapay you can create seamless experiences consistent with your brand. Create custom branded invite pages - no need to build a website. Already have a website? Embed our payment widget on any existing page on your domain within minutes.'
    }
  ];

  return (
    <div ref={containerRef} className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Build Your Paid<br />
            Community With OneTapay?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Built-in member management features like billing and community analytics make administration a breeze, 
            while your activity feed lets you keep your finger on the pulse of your community.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={el => benefitCardsRef.current[index] = el}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  {benefit.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
