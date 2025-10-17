import React from 'react';

export default function Header() {
  const navigation = [
    { name: 'Use cases', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Help', href: '#' },
    { name: 'Book a demo', href: '#' },
    { name: 'Login', href: '#' }
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-150 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🚀</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">OneTapay</span>
          </div>
          
          {/* Navigation */}
          {/* <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </nav> */}
          
          {/* Get Started Button */}
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}