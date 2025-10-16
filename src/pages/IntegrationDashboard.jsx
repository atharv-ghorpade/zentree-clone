import React from 'react';
import { Zap, Check, Plus, X, ChevronRight } from 'lucide-react';

export default function IntegrationDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 p-8 relative overflow-hidden">
      {/* Floating App Icons - Top Left */}
      <div className="absolute top-8 left-8 flex gap-4">
        <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
        <div className="w-24 h-24 bg-green-500 rounded-3xl flex items-center justify-center shadow-lg transform rotate-6">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Floating App Icons - Left Side */}
      <div className="absolute left-8 top-1/3 flex flex-col gap-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <Zap className="w-8 h-8 text-white" fill="white" />
        </div>
        <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-45">
          <div className="w-8 h-8 bg-white rounded transform -rotate-45"></div>
        </div>
      </div>

      {/* Floating App Icons - Right Side */}
      <div className="absolute right-12 top-1/4 flex flex-col gap-6">
        <div className="w-20 h-20 bg-cyan-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
          <div className="w-10 h-10 border-4 border-white rounded-lg"></div>
        </div>
        <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <div className="text-white text-3xl">*</div>
        </div>
        <div className="w-28 h-28 bg-black rounded-3xl flex items-center justify-center shadow-lg">
          <Zap className="w-16 h-16 text-white" fill="white" />
        </div>
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-12 border-b-white"></div>
        </div>
      </div>

      {/* Main Dashboard Container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Top Navigation Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <Zap className="w-5 h-5 text-purple-500" />
          <div className="flex-1 flex gap-2">
            <div className="h-2 bg-gray-200 rounded w-24"></div>
            <div className="h-2 bg-gray-200 rounded w-16"></div>
          </div>
          <div className="ml-auto flex gap-2">
            <div className="h-2 bg-gray-200 rounded w-32"></div>
            <div className="h-2 bg-gray-200 rounded w-24"></div>
            <div className="h-2 bg-gray-200 rounded w-20"></div>
          </div>
        </div>

        {/* Top Right Card */}
        <div className="absolute top-0 right-0 bg-white rounded-xl shadow-lg p-4 w-48 transform translate-x-8">
          <div className="h-8 bg-pink-100 rounded mb-2"></div>
          <div className="h-2 bg-pink-200 rounded"></div>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-4">
          {/* Left Sidebar */}
          <div className="w-80 bg-white rounded-2xl shadow-lg p-6">
            <div className="space-y-4">
              {/* Sidebar Items */}
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-gray-400" />
                <div className="flex-1 h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                </div>
                <div className="flex-1 h-2 bg-purple-200 rounded w-3/4"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
                <div className="flex-1 h-2 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full"></div>
                <div className="flex-1 h-2 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                <div className="flex-1 h-2 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full"></div>
                <div className="flex-1 h-2 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                <div className="flex-1 h-2 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-50 rounded-full"></div>
                <div className="flex-1 h-2 bg-gray-100 rounded w-2/3"></div>
              </div>
            </div>

            {/* Bottom Avatar Group */}
            <div className="mt-8 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
              <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Main Content Panel */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
            {/* Top Tabs */}
            <div className="flex gap-4 mb-6 border-b pb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <div className="h-2 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-12"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-14"></div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <div className="h-3 bg-blue-200 rounded"></div>
                <div className="h-3 bg-gray-100 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-blue-200 rounded"></div>
                <div className="h-3 bg-gray-100 rounded"></div>
              </div>
              <div className="h-3 bg-gray-200 rounded"></div>
            </div>

            {/* Task Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <div className="h-2 bg-purple-200 rounded w-24"></div>
              </div>
              <div className="space-y-3 ml-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-red-400 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                  <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-2 ml-6">
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                  <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded flex-1 w-3/4"></div>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>

            {/* Second Task Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <div className="h-3 bg-green-200 rounded w-20"></div>
                <div className="h-3 bg-yellow-200 rounded w-20"></div>
              </div>
              <div className="ml-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded flex-1"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tool & App Integration Card */}
        <div className="absolute bottom-0 right-0 bg-white rounded-2xl shadow-2xl p-6 w-96 transform translate-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tool & App Integration</h2>
          <div className="h-1 bg-gray-300 rounded mb-6 w-1/2"></div>
          
          <div className="flex gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shadow-md">
                <Zap className="w-8 h-8 text-green-600" fill="currentColor" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-md">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            </div>
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center shadow-md">
              <div className="text-orange-600 text-2xl">*</div>
            </div>
          </div>
        </div>

        {/* Top Right Purple Card */}
        <div className="absolute -top-8 right-32 bg-purple-100 rounded-xl shadow-lg p-3 w-40">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-purple-600 text-xl">*</div>
            <div className="h-2 bg-purple-300 rounded flex-1"></div>
          </div>
        </div>

        {/* Floating Green Dot */}
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
      </div>
    </div>
  );
}