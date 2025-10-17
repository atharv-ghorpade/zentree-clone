import React, { useRef, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LaunchCTA() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        {
          y: 50,
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
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Buttons animation
      gsap.fromTo(buttonsRef.current.children,
        {
          y: 30,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 ref={headingRef} className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Launch your paid chat community today!
        </h2>
        
        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex items-center justify-center gap-4 flex-col sm:flex-row">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg text-lg">
            <Play className="w-5 h-5" strokeWidth={2} />
            Book a demo
          </button>
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors text-lg">
            Get started for free <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
