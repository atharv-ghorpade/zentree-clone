import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Use cases', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Help', href: '#' },
    { name: 'Book a demo', href: '#' }
  ];

  const bottomLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🚀</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">OneTapay</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Threads"
            >
              <span className="text-white text-sm font-bold">@</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
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
              ❤️ Love OneTapay? <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Join our partner program and earn 50%</span> 🚀
            </span>
          </div>

          <div className="flex gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
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