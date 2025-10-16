import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Feature', href: '#' },
    { name: 'Use Case', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQs', href: '#' }
  ];

  const bottomLinks = [
    { name: 'Style Guide', href: '#' },
    { name: 'Licenses', href: '#' },
    { name: 'Changelog', href: '#' }
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Zentree.</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Threads"
            >
              <span className="text-white text-sm font-bold">@</span>
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div className="flex flex-wrap justify-center gap-4">
            <span>© 2025. All rights reserved.</span>
            <span>•</span>
            <span>
              Designed by <span className="font-medium">Flowcub Design</span> / Powered by{' '}
              <span className="font-medium">Webflow</span>.
            </span>
          </div>

          <div className="flex gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}