import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Check, ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PlatformSelection() {
  const [activeTab, setActiveTab] = useState('Discord');
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current.children,
        {
          y: -60,
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

      // Tabs animation
      gsap.fromTo(tabsRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content sections animation
      gsap.fromTo(contentRef.current.children,
        {
          x: -100,
          opacity: 0,
          y: 50
        },
        {
          x: 0,
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA section animation
      gsap.fromTo(ctaRef.current.children,
        {
          y: 50,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Platform content animation on tab change
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          x: 20
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out"
        }
      );
    }
  }, [activeTab]);

  const platforms = {
    Discord: {
      color: 'bg-indigo-500',
      bgGradient: 'from-indigo-50 to-purple-50',
      description: 'Discord enables super flexible configuration and scalability. Roles allow you to set different permissions and access to channels within a server, making organization and management easy.',
      features: [
        {
          title: 'Simple Set up',
          description: 'Connect your Discord account to OneTapay and start building your pay-to-access community. Launch in minutes!'
        },
        {
          title: 'Community Management',
          description: 'Charge for access to specific roles and channels - new or existing - within your Discord community. Robust role and permission management enabling easy community management.'
        },
        {
          title: 'Features',
          description: 'Text chat, voice chat, video calls, file sharing, cross-platform compatibility, auto-kick or role removal on cancel.'
        },
        {
          title: 'Integrations',
          description: 'Seamless integration with Google Analytics, Rewardful and affiliate programs, YouTube, Twitch, Twitter, GitHub, and more.'
        }
      ],
      buttonText: 'Connect Discord'
    },
    Telegram: {
      color: 'bg-blue-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      description: 'Telegram offers excellent privacy features and bot capabilities. Perfect for communities that value security and want automated member management with powerful bot integrations.',
      features: [
        {
          title: 'Privacy Focused',
          description: 'Connect your Telegram group and leverage its strong privacy features while monetizing your community effectively.'
        },
        {
          title: 'Bot Integration',
          description: 'Powerful bot capabilities for automated member management, payments, and community interactions.'
        },
        {
          title: 'Features',
          description: 'Secret chats, file sharing up to 2GB, voice messages, video calls, channels for broadcasting, and groups up to 200,000 members.'
        },
        {
          title: 'Automation',
          description: 'Advanced bot features for welcome messages, payment processing, and automated member verification.'
        }
      ],
      buttonText: 'Connect Telegram'
    },
    Slack: {
      color: 'bg-purple-500',
      bgGradient: 'from-purple-50 to-pink-50',
      description: 'Slack is perfect for professional communities and business-focused groups. Great for mastermind groups, professional networks, and business coaching communities.',
      features: [
        {
          title: 'Professional Setup',
          description: 'Connect your Slack workspace and create professional paid communities for business networking and coaching.'
        },
        {
          title: 'Workspace Management',
          description: 'Organize different subscription tiers into separate channels and workspaces with advanced permission controls.'
        },
        {
          title: 'Features',
          description: 'Thread conversations, file sharing, video calls, screen sharing, app integrations, and professional communication tools.'
        },
        {
          title: 'Business Integration',
          description: 'Integration with business tools like Google Drive, Trello, Zoom, and hundreds of other productivity apps.'
        }
      ],
      buttonText: 'Connect Slack'
    }
  };

  return (
    <div ref={containerRef} className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Choose your platform
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            OneTapay integrates seamlessly with Discord, Telegram and Slack, giving you the flexibility to pick the platform that's best to grow your membership business.
          </p>
        </div>

        {/* Platform Tabs */}
        <div ref={tabsRef} className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-2xl p-2">
            {Object.keys(platforms).map((platform) => (
              <button
                key={platform}
                onClick={() => setActiveTab(platform)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === platform
                    ? 'bg-white text-gray-900 shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* Platform Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Platform Info */}
          <div>
            <div className="mb-8">
              <div className={`w-16 h-16 ${platforms[activeTab].color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeTab}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {platforms[activeTab].description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {platforms[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className={`mt-8 ${platforms[activeTab].color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2`}>
              {platforms[activeTab].buttonText}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${platforms[activeTab].bgGradient} rounded-3xl p-8 min-h-96 shadow-xl`}>
              <div className="text-center">
                <div className={`w-32 h-32 ${platforms[activeTab].color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                  <MessageCircle className="w-16 h-16 text-white" />
                </div>
                <div className="text-gray-600 text-lg font-medium">
                  {activeTab === 'Discord' && 'Discord community interface'}
                  {activeTab === 'Telegram' && 'Telegram group setup'}
                  {activeTab === 'Slack' && 'Slack workspace management'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Bubbles Decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center mt-16">
          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg">
              Try for free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
              <Play className="w-5 h-5" strokeWidth={2} /> <span>Book a demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
