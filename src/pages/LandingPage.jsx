import React from 'react';
import { Zap, MessageCircle, CheckSquare, Users, Calendar, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-200 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
    

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              One-Click<br />Customization
            </h2>
            <p className="text-gray-600 mb-8">
              Update colors, layouts, and components to match your brand.
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex justify-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <CheckSquare className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</div>
                </div>
                <div className="relative">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</div>
                </div>
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-gray-200 rounded"></div>
                  <div className="w-20 h-1 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-1 bg-red-300 rounded"></div>
                    <div className="w-20 h-1 bg-red-300 rounded"></div>
                  </div>
                  <div className="w-10 h-6 bg-red-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-1 bg-gray-200 rounded"></div>
                    <div className="w-20 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-1 bg-green-300 rounded"></div>
                    <div className="w-20 h-1 bg-green-300 rounded"></div>
                  </div>
                  <div className="w-10 h-6 bg-green-500 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Flexible<br />Task Views
            </h2>
            <p className="text-gray-600 mb-8">
              list, board, or timeline views. Work the way that fits your flow.
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-lg min-h-[280px] relative overflow-hidden">
              <div className="absolute top-4 left-4 right-4 flex gap-2">
                <div className="flex-1 h-2 bg-blue-200 rounded"></div>
                <div className="flex-1 h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="absolute top-12 left-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-4 w-32 shadow-md transform -rotate-3">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-orange-400" fill="currentColor" />
                  <div className="h-1 bg-orange-200 rounded flex-1"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-orange-200 rounded"></div>
                  <div className="h-1 bg-orange-200 rounded w-3/4"></div>
                </div>
              </div>
              <div className="absolute top-20 right-6 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg p-4 w-24 shadow-md transform rotate-6">
                <div className="h-1 bg-pink-300 rounded mb-2"></div>
                <div className="h-1 bg-pink-300 rounded w-2/3"></div>
              </div>
              <div className="absolute bottom-8 left-6 right-6 bg-purple-100 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 h-1 bg-purple-200 rounded"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-gray-300 rounded"></div>
                  <div className="h-1 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              With Team<br />Collaboration
            </h2>
            <p className="text-gray-600 mb-8">
              Share updates, add comments, and keep everyone on the same page.
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-lg min-h-[280px] relative">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-6 h-3 bg-blue-600 rounded-t-full"></div>
                  </div>
                  <div className="flex-1 bg-blue-100 rounded-lg p-3 h-12"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-400 rounded-full"></div>
                  <div className="flex-1 bg-orange-100 rounded-lg p-3 h-12"></div>
                </div>
                <div className="flex gap-4 text-sm text-gray-600 mt-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">👍</span>
                    <span>16</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-500">💬</span>
                    <span>150</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-red-500">❤️</span>
                    <span>42.6k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Easy Task<br />Assignment
            </h2>
            <p className="text-gray-600 mb-8">
              Assign work's, set deadlines, and track status in real time.
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-lg min-h-[280px] relative">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <CheckSquare className="w-4 h-4 text-gray-400" />
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1 h-1 bg-gray-200 rounded"></div>
                    <div className="w-16 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-8 h-1 bg-gray-200 rounded"></div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1 h-1 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1 h-1 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="h-8"></div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-gray-200 rounded"></div>
                    <div className="w-1 h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1 h-1 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center relative">
                    <Zap className="w-4 h-4 text-white" fill="white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-sm"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-700 text-sm text-left">Explore our premium templates</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg px-4 py-2 shadow-lg">
                <div className="text-xs text-white font-semibold">Premium Webflow Templates</div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}