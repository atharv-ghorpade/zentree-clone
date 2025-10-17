import React, { useRef, useEffect } from 'react';
import { Play, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorkflowHero() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const floatingIconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Cards entrance animation
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        rotation: 5,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Floating icons animation in the dark card
      floatingIconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.from(icon, {
            scale: 0,
            rotation: 180,
            duration: 1,
            ease: "back.out(1.7)",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: icon,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });

          // Continuous floating animation
          gsap.to(icon, {
            y: "random(-15, 15)",
            rotation: "random(-10, 10)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.5
          });
        }
      });

      // Parallax effect for cards
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.to(card, {
            y: -30,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Automate Workflow,<br />Customize Everything.
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Speed up your setup with flexible blocks, live controls,<br />
            and a workspace that adapts to how you work.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            <Play className="w-4 h-4" fill="currentColor" />
            See How It Works
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visual Task Editor Card */}
          <div ref={el => cardsRef.current[0] = el} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Visual Task Editor</h2>
            <p className="text-gray-600 mb-8">
              Drag, drop, and edit your task layout<br />
              in real time — no code or clutter.
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              {/* Top Tabs */}
              <div className="flex gap-3 mb-6">
                <div className="bg-cyan-50 rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm">
                  <div className="w-4 h-4 bg-cyan-400 rounded"></div>
                  <div className="h-2 w-16 bg-cyan-300 rounded"></div>
                </div>
                <div className="bg-pink-50 rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm">
                  <div className="w-4 h-4 bg-pink-400 rounded"></div>
                  <div className="h-2 w-16 bg-pink-300 rounded"></div>
                </div>
                <div className="bg-orange-50 rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm">
                  <div className="w-4 h-4 bg-orange-400 rounded"></div>
                  <div className="h-2 w-16 bg-orange-300 rounded"></div>
                </div>
              </div>

              {/* Window Controls */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <Zap className="w-4 h-4 text-purple-500" />
                <div className="flex gap-2 flex-1">
                  <div className="h-2 bg-gray-200 rounded w-20"></div>
                  <div className="h-2 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-24"></div>
                </div>
              </div>

              {/* Task Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded"></div>
                    </div>
                    <div className="h-2 bg-blue-300 rounded flex-1"></div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="h-1.5 bg-blue-200 rounded"></div>
                    <div className="h-1.5 bg-blue-200 rounded w-4/5"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                    <div className="h-1.5 bg-blue-200 rounded flex-1"></div>
                  </div>
                </div>

                <div className="bg-cyan-50 rounded-xl p-4 border-2 border-cyan-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="h-2 bg-cyan-300 rounded flex-1"></div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="h-1.5 bg-cyan-200 rounded"></div>
                    <div className="h-1.5 bg-cyan-200 rounded w-3/4"></div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-cyan-200 rounded"></div>
                    <div className="h-1.5 bg-cyan-200 rounded w-5/6"></div>
                    <div className="h-1.5 bg-cyan-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Automation Card */}
          <div ref={el => cardsRef.current[1] = el} className="bg-gradient-to-br from-purple-900 via-purple-800 to-orange-900 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <h2 className="text-3xl font-bold text-white mb-3">Workflow Automation</h2>
            <p className="text-gray-200 mb-12">
              Drag, drop, and edit your task layout<br />
              in real time — no code or clutter.
            </p>

            {/* Floating Icons with refs */}
            <div className="relative h-64">
              {/* Purple Icon - Top Left */}
              <div ref={el => floatingIconsRef.current[0] = el} className="absolute top-8 left-12 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-12">
                <div className="text-white text-2xl">*</div>
              </div>

              {/* Blue Icon - Left */}
              <div ref={el => floatingIconsRef.current[1] = el} className="absolute top-28 left-4 w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6">
                <Zap className="w-10 h-10 text-white" fill="white" />
              </div>

              {/* Center Logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
                <div ref={el => floatingIconsRef.current[2] = el} className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-45">
                  <Zap className="w-10 h-10 text-white transform -rotate-45" fill="white" />
                </div>
                <div className="text-4xl font-bold text-white">Zentree.</div>
              </div>

              {/* Red Icon - Top Right */}
              <div ref={el => floatingIconsRef.current[3] = el} className="absolute top-4 right-8 w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-45">
                <div className="w-10 h-10 bg-white rounded-xl transform -rotate-45"></div>
              </div>

              {/* Orange Icon - Bottom */}
              <div ref={el => floatingIconsRef.current[4] = el} className="absolute bottom-8 left-1/3 w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-6">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent"></div>
              </div>

              {/* Yellow Icon - Bottom Right */}
              <div ref={el => floatingIconsRef.current[5] = el} className="absolute bottom-12 right-12 w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}