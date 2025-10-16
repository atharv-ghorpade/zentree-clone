import React from 'react';
import { Check, ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Decorative dots */}
      <div className="absolute top-24 left-48 w-3 h-3 bg-lime-400 rounded-full"></div>
      <div className="absolute top-80 left-48 w-3 h-3 bg-lime-400 rounded-full"></div>
      <div className="absolute top-96 right-64 w-3 h-3 bg-orange-300 rounded-full"></div>
      <div className="absolute top-96 right-48 w-3 h-3 bg-pink-300 rounded-full"></div>
      <div className="absolute top-1/2 right-32 w-3 h-3 bg-blue-300 rounded-full"></div>
      <div className="absolute bottom-32 right-12 w-4 h-4 bg-green-400 rounded-full"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Feature Tags */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />
            </div>
            <span className="text-gray-900 font-medium">Huge Template Library</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />
            </div>
            <span className="text-gray-900 font-medium">Live Customizer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />
            </div>
            <span className="text-gray-900 font-medium">24/7× Live Support</span>
          </div>
        </div>

        {/* Hero Heading */}
        <div className="text-center mb-8 relative">
          <div className="absolute top-0 right-1/4 bg-yellow-300 text-gray-900 px-4 py-1 rounded-full text-sm font-medium transform translate-x-20 shadow-sm">
            eComm manager
          </div>
          <div className="absolute top-32 left-1/4 bg-green-300 text-gray-900 px-4 py-1 rounded-full text-sm font-medium transform -translate-x-20 shadow-sm">
            Head of Payments
          </div>
          <div className="absolute top-2 left-1/3 w-2 h-2 bg-lime-400 rounded-full"></div>
          
          <h1 className="text-7xl font-black leading-tight">
            <div className="text-black mb-2">Manage Your Work.</div>
            <div className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                No overwhelm.
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 700 10" fill="none" preserveAspectRatio="none">
                <path d="M0 5 Q 175 0, 350 5 T 700 5" stroke="url(#gradient)" strokeWidth="6" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="33%" stopColor="#A855F7" />
                    <stop offset="66%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#FB923C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-center text-gray-600 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          No messy code. No cluttered design. Just an<br />
          easy, effective way to stay on top of your tasks.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg">
            Sign Up Free <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
            <Play className="w-5 h-5 fill-blue-600" /> Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}