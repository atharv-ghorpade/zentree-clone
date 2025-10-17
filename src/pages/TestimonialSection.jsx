import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  const testimonials = [
    {
      company: 'Imperial',
      logo: '🏛️',
      rating: 5,
      source: 'Trustpilot',
      quote: '"I love OneTapay!! OneTapay manages everything perfectly and flawlessly. If you run any type of business with recurring subs and have dealt with the frustration of removing and adding members yourself, you need OneTapay ASAP. My business grew exponentially after teaming up with them, absolutely love OneTapay and their team!"',
      author: 'Brandon',
      role: 'Imperial',
      avatar: '�'
    },
    {
      company: 'Blueville Capital',
      logo: '🏢',
      rating: 5,
      source: 'Trustpilot',
      quote: '"The support team here is amazing! OneTapay has helped streamline my business & allowed me to focus on creating content for my subscribers. I\'m able to create multiple channels for the various subscription packages I offer with ease. The support team here is amazing! They\'re always available & respond to any query within minutes."',
      author: 'Richard',
      role: 'Blueville Capital LLC',
      avatar: '👨‍💼'
    },
    {
      company: 'Convert.ai',
      logo: '🤖',
      rating: 5,
      source: 'ProductHunt',
      quote: '"OneTapay helped us build and commercialize a 500+ community within a few days. Behind their powerful product is an amazing team that gave us the insights we needed to keep growing."',
      author: 'Chris',
      role: 'Convert.ai',
      avatar: '👨‍�'
    },
    {
      company: 'Money Heist',
      logo: '💰',
      rating: 5,
      source: 'Trustpilot',
      quote: '"A simple yet powerful way to monetize your chat group, automate payments and manage members. Amazing customer support as well!"',
      author: 'Moe',
      role: 'Moneyheist',
      avatar: '�‍🎭'
    },
    {
      company: 'Origin Trading',
      logo: '📈',
      rating: 5,
      source: 'Trustpilot',
      quote: '"Using OneTapay to monetize and manage the discord community has made my job easy! Setup and configuration are simplified to a few clicks of your mouse and a couple of lines of text. If you\'re looking for the best solution to manage your Discord or Slack server, then look no further, you found it with OneTapay!"',
      author: 'Ryan',
      role: 'Origin Trading',
      avatar: '�‍💼'
    }
  ];

  const totalSlides = 5;

  // Initial animations on mount with ScrollTrigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with ScrollTrigger
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Stats animation with ScrollTrigger
      gsap.from(statsRef.current.children, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Cards entrance animation
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Parallax effect for testimonial cards
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.to(card, {
            y: -20,
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

  // Smooth slide transition with enhanced easing
  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -activeSlide * (window.innerWidth * 0.3),
        duration: 1,
        ease: "power2.inOut"
      });
    }
  }, [activeSlide]);

  const handleSlideChange = (newSlide) => {
    if (newSlide >= 0 && newSlide < totalSlides) {
      setActiveSlide(newSlide);
    }
  };

  return (
    <div ref={containerRef} className="bg-gray-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16 gap-8">
          <div ref={headerRef} className="text-left">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              See why our users<br />❤️ OneTapay 🚀
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Join thousands of creators who've<br />monetized their communities with OneTapay.
            </p>
          </div>
          
          {/* Stats */}
          <div ref={statsRef} className="flex gap-16 items-start">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-sm text-gray-600 mb-2">Community Members</div>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-blue-600" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 mb-2">Trustpilot Rating</div>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-green-600" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                  className="px-2"
                  style={{ minWidth: '30vw' }}
                >
                  <div 
                    className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        y: -8,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        y: 0,
                        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                  >
                    {/* Company Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center text-white text-sm">
                          {testimonial.logo}
                        </div>
                        <span className="font-semibold text-gray-900">{testimonial.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 fill-green-600" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">from {testimonial.source}</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 mb-6 flex-grow text-sm leading-relaxed">
                      {testimonial.quote}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                        <div className="text-xs text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleSlideChange(activeSlide - 1)}
            disabled={activeSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-transform duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => handleSlideChange(activeSlide + 1)}
            disabled={activeSlide === totalSlides - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-transform duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}