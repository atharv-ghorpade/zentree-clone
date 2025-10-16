import React, { useState } from 'react';
import { Phone, Mail, User, AtSign, Check } from 'lucide-react';

export default function ContactCTASection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    subscribeEmail: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleSubscribe = () => {
    console.log('Subscription submitted:', formData.subscribeEmail);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Contact Info */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Send a<br />message
            </h1>
            <p className="text-gray-600 mb-12">
              We're here to answer any question you may have.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Contact Number</p>
                  <p className="text-xl font-bold text-gray-900">(017) 816-1999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email Address</p>
                  <p className="text-xl font-bold text-gray-900">info@office.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  placeholder="Example Text"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-full hover:bg-blue-700 transition-colors"
              >
                Submit a message
              </button>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative bg-gradient-to-r from-black via-amber-900 to-rose-900 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - CTA Content */}
            <div className="p-12 lg:p-16">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-white text-sm">The</span>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xs">⚡</span>
                  </div>
                  <span className="text-white font-bold">Zentree</span>
                </div>
                <span className="text-white text-sm">is Flexible platform, for work!</span>
              </div>

              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                Businesses with<br />cutting-edge SaaS
              </h2>

              {/* Email Subscribe Form */}
              <div className="mb-8">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.subscribeEmail}
                    onChange={(e) => setFormData({...formData, subscribeEmail: e.target.value})}
                    className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">Weekly updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">Secure and compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">99.9% uptime</span>
                </div>
              </div>
            </div>

            {/* Right Side - Mockup */}
            <div className="relative h-full flex items-center justify-center p-8">
              {/* Floating Icons */}
              <div className="absolute top-20 left-12 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                <span className="text-2xl">💡</span>
              </div>
              <div className="absolute top-40 left-8 w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
                <span className="text-2xl">🎯</span>
              </div>
              <div className="absolute top-56 left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
                <span className="text-xl">📊</span>
              </div>
              <div className="absolute bottom-32 left-6 w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>
                <span className="text-2xl">🚀</span>
              </div>

              {/* Browser Mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 flex-1 bg-white rounded px-3 py-1 text-xs text-gray-400">
                    ⚡ zentree.app
                  </div>
                </div>

                {/* Browser Content */}
                <div className="p-6 space-y-4">
                  {/* Task List Items */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-200 rounded"></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-purple-200 rounded w-3/4"></div>
                        <div className="h-2 bg-purple-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/3"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-400"></div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                        <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-blue-300 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-pink-300 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom colored bars */}
                  <div className="flex gap-2 pt-4">
                    <div className="h-2 bg-green-300 rounded flex-1"></div>
                    <div className="h-2 bg-yellow-300 rounded flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}