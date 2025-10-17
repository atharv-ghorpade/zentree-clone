import React, { useRef, useEffect } from 'react';
import { Zap, Download, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ZentreeLanding() {
  const heroRef = useRef(null);
  const aiSectionRef = useRef(null);
  const searchSectionRef = useRef(null);
  const floatingCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current.children,
        {
          y: 60,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // AI section animations
      gsap.fromTo(aiSectionRef.current.querySelector('.ai-content'),
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aiSectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(aiSectionRef.current.querySelector('.ai-visual'),
        {
          x: 100,
          opacity: 0,
          rotation: 5
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aiSectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating cards animation
      floatingCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              y: 30,
              opacity: 0,
              rotation: "random(-10, 10)"
            },
            {
              y: 0,
              opacity: 1,
              rotation: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );

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

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
          Smarter Tools.<br />Better Workflow.
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Work 10x faster with AI built for real<br />
          tasks — not just buzzwords.
        </p>
      </section>

      {/* AI Everything Section */}
      <section ref={aiSectionRef} className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="ai-content">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              AI that work<br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Everything
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              One AI to power your entire workspace.<br />
              Search, sync, and streamline across all<br />
              your tools — in one click.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative ai-visual">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-xl relative overflow-hidden min-h-96">
              {/* Top Card */}
              <div ref={el => floatingCardsRef.current[0] = el} className="absolute top-8 left-8 bg-white rounded-xl shadow-lg p-4 w-48 transform -rotate-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-pink-400 rounded"></div>
                  <div className="h-2 bg-pink-200 rounded flex-1"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded mb-2"></div>
              </div>

              {/* Center Card with Logo */}
              <div ref={el => floatingCardsRef.current[1] = el} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 w-72">
                <div className="flex flex-wrap gap-3 justify-center items-center mb-4">
                  <span className="text-pink-500 font-semibold text-sm">integration</span>
                  <span className="text-orange-500 font-semibold text-sm">build</span>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center transform rotate-45 shadow-lg">
                    <Zap className="w-12 h-12 text-white transform -rotate-45" fill="white" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  <span className="text-red-500 font-semibold text-sm">connect</span>
                  <span className="text-orange-400 font-semibold text-sm">workspace</span>
                </div>
              </div>

              {/* Bottom Left Card */}
              <div ref={el => floatingCardsRef.current[2] = el} className="absolute bottom-12 left-12 bg-white rounded-xl shadow-lg p-3 w-40 transform rotate-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-200 rounded flex items-center justify-center">
                    <div className="text-purple-600 text-xs">*</div>
                  </div>
                  <div className="h-2 bg-purple-200 rounded flex-1"></div>
                </div>
              </div>

              {/* Bottom Right Card */}
              <div ref={el => floatingCardsRef.current[3] = el} className="absolute bottom-16 right-12 bg-white rounded-xl shadow-lg p-3 w-32">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-cyan-400 rounded-full"></div>
                  <div className="h-2 bg-cyan-200 rounded flex-1"></div>
                </div>
              </div>

              {/* Top Right Indicator */}
              <div ref={el => floatingCardsRef.current[4] = el} className="absolute top-12 right-12 flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="h-1 bg-gray-300 rounded w-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Search Section */}
      <section ref={searchSectionRef} className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl relative overflow-hidden min-h-96">
              {/* App Icons */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-8 h-8 text-white" fill="white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-white text-2xl font-bold">*</div>
                </div>
              </div>

              {/* Browser Window Mockup */}
              <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl shadow-2xl p-4">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <Zap className="w-4 h-4 text-gray-400" />
                  <div className="flex gap-2 flex-1">
                    <div className="h-2 bg-gray-200 rounded w-20"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <X className="w-4 h-4 text-gray-400" />
                    <div className="h-2 bg-gray-200 rounded flex-1"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-orange-200 rounded"></div>
                    <div className="h-2 bg-orange-100 rounded w-32"></div>
                    <div className="ml-auto flex gap-2">
                      <div className="h-2 bg-gray-200 rounded w-16"></div>
                      <div className="h-2 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="h-2 bg-blue-100 rounded w-full"></div>
                    <div className="h-2 bg-blue-100 rounded w-3/4"></div>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="h-2 bg-blue-100 rounded w-full"></div>
                    <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Unified
              </span>{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Search
              </span>
              <br />
              <span className="text-gray-900">Across Tools</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Instantly search across Google Drive, GitHub,<br />
              Slack, and more from one place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}