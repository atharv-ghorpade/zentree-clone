import React, { useRef, useEffect } from 'react';
import { Check, ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const decorativeDotsRef = useRef([]);
  const featureTagsRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Decorative dots floating animation
      decorativeDotsRef.current.forEach((dot, index) => {
        if (dot) {
          gsap.fromTo(dot, 
            {
              y: 0,
              x: 0,
              rotation: 0
            },
            {
              y: "random(-20, 20)",
              x: "random(-10, 10)",
              rotation: "random(-15, 15)",
              duration: "random(3, 5)",
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
              delay: index * 0.2,
            }
          );
        }
      });

      // Hero content entry animations
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(featureTagsRef.current.children, 
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }
      )
      .fromTo(headingRef.current.children, 
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }, "-=0.3")
      .fromTo(subheadingRef.current, 
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5")
      .fromTo(buttonsRef.current.children, 
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.3");

      // Continuous subtle floating for decorative elements
      decorativeDotsRef.current.forEach((dot, index) => {
        if (dot) {
          gsap.fromTo(dot, 
            {
              y: 0
            },
            {
              y: 15,
              duration: 2 + index * 0.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: index * 0.3
            }
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-80 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden flex items-center justify-center pb-0 pt-20">
      {/* Decorative elements */}
      <div ref={el => decorativeDotsRef.current[0] = el} className="absolute top-20 left-1/6 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
      <div ref={el => decorativeDotsRef.current[1] = el} className="absolute top-40 left-1/5 w-3 h-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div ref={el => decorativeDotsRef.current[2] = el} className="absolute top-96 right-1/4 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div ref={el => decorativeDotsRef.current[3] = el} className="absolute top-96 right-1/6 w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div ref={el => decorativeDotsRef.current[4] = el} className="absolute top-1/2 right-32 w-3 h-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div ref={el => decorativeDotsRef.current[5] = el} className="absolute bottom-20 right-12 w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center transform -translate-y-8">
        {/* Feature Tags */}
        <div ref={featureTagsRef} className="flex items-center justify-center gap-6 mb-12 flex-wrap">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-gray-900 font-semibold text-sm">Connect Discord</span>
          </div>
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-gray-900 font-semibold text-sm">Connect Telegram</span>
          </div>
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-gray-900 font-semibold text-sm">Connect Slack</span>
          </div>
        </div>

        {/* Hero Heading */}
        <div ref={headingRef} className="mb-8 relative w-full max-w-4xl">
          <div className="absolute -top-4 left-4 bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg hidden sm:inline-block transform -rotate-3">
            Discord
          </div>
          <div className="absolute -top-4 right-4 bg-gradient-to-r from-green-300 to-green-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg hidden sm:inline-block transform rotate-3">
            Telegram
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <div className="text-gray-900 mb-2">Launch a paid chat</div>
            <div className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                community in minutes
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 700 12" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q 175 0, 350 6 T 700 6" stroke="url(#gradient)" strokeWidth="8" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="33%" stopColor="#A855F7" />
                    <stop offset="66%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </h1>
        </div>

        {/* Subheading */}
        <p ref={subheadingRef} className="text-gray-600 text-base sm:text-lg mb-12 max-w-xl leading-relaxed">
          OneTapay makes it easy for you to charge for access to<br className="hidden sm:inline" />
          Discord, Telegram & Slack communities.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex items-center justify-center gap-4 mb-8 flex-col sm:flex-row w-full">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-lg">
            Try for free <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/80 backdrop-blur-sm text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all duration-300 shadow-lg mt-3 sm:mt-0">
            <Play className="w-5 h-5" strokeWidth={2} /> <span>Book a demo</span>
          </button>
        </div>
      </div>
    </div>
  );
}