import React from 'react';
import { Zap, Download } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center transform rotate-45">
              <Zap className="w-5 h-5 text-white transform -rotate-45" fill="white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-gray-900">Zentree.</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </a>
            <a href="#use-case" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Use Case
            </a>
            <a href="#feature" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Feature
            </a>
            <a href="#solutions" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Solutions
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </a>
            <a href="#faqs" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              FAQs
            </a>
          </nav>

          {/* App Download Button */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-400 rounded"></div>
            <Download className="w-5 h-5 text-gray-900" />
            <span className="text-gray-900 font-medium">App Download</span>
          </div>
        </div>
      </div>
    </header>
  );
}