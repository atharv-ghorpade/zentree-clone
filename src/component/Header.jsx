import React from 'react';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-250">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-16">
          {/* Logo only */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center transform rotate-45">
              <Zap className="w-5 h-5 text-white transform -rotate-45" fill="white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-gray-900">Zentree.</span>
          </div>
        </div>
      </div>
    </header>
  );
}