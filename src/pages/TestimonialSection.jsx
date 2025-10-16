import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      company: 'stari',
      logo: '⭐',
      rating: 5,
      quote: '"The platform lets us manage projects exactly the way we want. It adapts perfectly to our workflow."',
      author: 'Emily King',
      role: 'Operations Lead at Stari',
      avatar: '👩'
    },
    {
      company: 'circle',
      logo: '⭕',
      rating: 5,
      quote: '"The platform lets us manage projects exactly the way we want. It adapts perfectly to our workflow."',
      author: 'Joshua Davis',
      role: 'Head of Product Development at Circle',
      avatar: '👨'
    },
    {
      company: 'velocity',
      logo: '⚡',
      rating: 5,
      quote: '"We\'ve been able to stay on top of every project without missing a beat. The workflow tools are a game-changer."',
      author: 'Chris Walker',
      role: 'Product Manager at Velocity',
      avatar: '👨‍💼'
    },
    {
      company: 'goldline',
      logo: '🏆',
      rating: 5,
      quote: '"No more juggling between different tools. Now everything\'s in one place — from task assignments to real-time updates."',
      author: 'Michael Parker',
      role: 'Project Director at Goldline',
      avatar: '👔'
    },
    {
      company: 'treva',
      logo: '🎯',
      rating: 5,
      quote: '"What used to take us hours to organize now takes just minutes. We\'re more efficient than ever."',
      author: 'Sara Lee',
      role: 'Marketing Coordinator at Treva',
      avatar: '👩‍💼'
    }
  ];

  const totalSlides = 5;

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Trusted by Teams<br />Around the World
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join thousands of users who've<br />streamlined their workflow with fast setup.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-16 items-start">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10m+</div>
              <div className="text-sm text-gray-600 mb-2">Installations</div>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-blue-600" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 mb-2">App Rating</div>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-blue-600" viewBox="0 0 20 20">
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
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 20}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-[20%] px-2"
                >
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex flex-col">
                    {/* Company Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center text-white text-sm">
                          {testimonial.logo}
                        </div>
                        <span className="font-semibold text-gray-900">{testimonial.company}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-green-600" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
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

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeSlide 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-gray-300'
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