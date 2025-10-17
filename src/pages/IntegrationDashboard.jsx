import React, { useRef, useEffect } from 'react';
import { Zap, Check, Plus, X, ChevronRight, Star, Users } from 'lucide-react';
import { gsap } from 'gsap';

// Logo Item Component
const LogoItem = ({ icon, name }) => (
  <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer">
    {icon}
    <span className="font-semibold text-gray-700 text-lg whitespace-nowrap">{name}</span>
  </div>
);

export default function IntegrationDashboard() {
  const logoStripRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const logoStrip = logoStripRef.current;
    if (!logoStrip) return;

    // Calculate the width of one set of logos
    const firstSet = logoStrip.children[0];
    const scrollWidth = firstSet.offsetWidth + 64; // 64px is the gap (gap-16 = 4rem = 64px)

    // Create seamless infinite scroll
    animationRef.current = gsap.to(logoStrip, {
      x: -scrollWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 p-8 relative overflow-hidden">
      {/* Floating App Icons - Top Left */}
      <div className="absolute top-8 left-[22%] flex gap-4 z-40">
        <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
        <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center shadow-lg transform rotate-6">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Floating App Icons - Left Side */}
      <div className="absolute left-[22%] top-1/3 flex flex-col gap-4 z-40">
        <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <Zap className="w-6 h-6 text-white" fill="white" />
        </div>
        <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-45">
          <div className="w-6 h-6 bg-white rounded transform -rotate-45"></div>
        </div>
      </div>

      {/* Floating App Icons - Right Side */}
      <div className="absolute right-[22%] top-1/4 flex flex-col gap-6 z-50">
        <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
          <div className="w-8 h-8 border-3 border-white rounded-lg"></div>
        </div>
        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <div className="text-white text-2xl">*</div>
        </div>
        <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center shadow-lg">
          <Zap className="w-12 h-12 text-white" fill="white" />
        </div>
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-8 border-b-white"></div>
        </div>
      </div>

      {/* Main Dashboard Container */}
      <div className="max-w-4xl mx-auto relative px-6 sm:px-8 lg:px-12">
        {/* Back screen to give depth behind the dashboard */}
        <div className="-z-10 absolute inset-0 flex justify-center items-start pointer-events-none">
          <div className="w-full max-w-5xl h-[620px] bg-white/20 rounded-3xl transform scale-105 rotate-3 blur-md" />
        </div>
        {/* "Screen" moved further back and scaled down for smaller appearance */}
        <div className="transform scale-90 translate-y-4 z-10" aria-hidden="true" />

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
        <div className="absolute top-8 right-[22%] bg-white rounded-xl shadow-lg p-3 w-36 z-40">
          <div className="h-6 bg-pink-100 rounded mb-2"></div>
          <div className="h-1.5 bg-pink-200 rounded"></div>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-4 items-start">
          {/* Left Sidebar */}
          <div className="w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <div className="space-y-4 flex-1">
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
            <div className="mt-6 flex items-center gap-2">
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
        <div className="absolute bottom-8 right-[22%] bg-white rounded-2xl shadow-2xl p-4 w-64 z-50">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Tool & App Integration</h2>
          <div className="h-0.5 bg-gray-300 rounded mb-4 w-1/2"></div>
          
          <div className="flex gap-3 mb-4">
            <div className="relative">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 text-green-600" fill="currentColor" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shadow-md">
              <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shadow-md">
              <div className="text-orange-600 text-lg">*</div>
            </div>
          </div>
        </div>

        {/* Top Right Purple Card */}
        <div className="absolute top-4 right-[24%] bg-purple-100 rounded-xl shadow-lg p-2 w-32 z-50">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-purple-600 text-lg">*</div>
            <div className="h-1.5 bg-purple-300 rounded flex-1"></div>
          </div>
        </div>

        {/* Floating Green Dot */}
        <div className="absolute bottom-8 right-[22%] w-3 h-3 bg-green-400 rounded-full shadow-lg z-50"></div>
      </div>

      {/* Logo Strip Section */}
      <div className="text-center mb-16 mt-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12">
          Transforming Remote Working
        </h1>
        
        {/* Logo Strip with GSAP Animation */}
        <div className="relative overflow-hidden py-8 max-w-6xl mx-auto">
          
          {/* Scrolling container */}
          <div 
            ref={logoStripRef}
            className="flex items-center gap-16"
            onMouseEnter={() => {
              if (animationRef.current) {
                gsap.to(animationRef.current, { timeScale: 0.3, duration: 0.5 });
              }
            }}
            onMouseLeave={() => {
              if (animationRef.current) {
                gsap.to(animationRef.current, { timeScale: 1, duration: 0.5 });
              }
            }}
          >
            {/* First set */}
            <div className="flex items-center gap-16 shrink-0">
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded"></div>} name="Logoipsum" />
              <LogoItem icon={<Star className="w-8 h-8 text-amber-500" fill="currentColor" />} name="stari" />
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>} name="goldline" />
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded"></div>} name="Logoipsum" />
              <LogoItem icon={<Users className="w-8 h-8 text-indigo-500" />} name="treva." />
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full"></div>} name="ve" />
            </div>
            
            {/* Duplicate set */}
            <div className="flex items-center gap-16 shrink-0">
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded"></div>} name="Logoipsum" />
              <LogoItem icon={<Star className="w-8 h-8 text-amber-500" fill="currentColor" />} name="stari" />
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>} name="goldline" />
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded"></div>} name="Logoipsum" />
              <LogoItem icon={<Users className="w-8 h-8 text-indigo-500" />} name="treva." />
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full"></div>} name="ve" />
            </div>
            
            {/* Third set for extra smoothness */}
            <div className="flex items-center gap-16 shrink-0">
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded"></div>} name="Logoipsum" />
              <LogoItem icon={<Star className="w-8 h-8 text-amber-500" fill="currentColor" />} name="stari" />
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>} name="goldline" />
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded"></div>} name="Logoipsum" />
              <LogoItem icon={<Users className="w-8 h-8 text-indigo-500" />} name="treva." />
              <LogoItem icon={<div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full"></div>} name="ve" />
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mt-6">Trusted by industry leaders worldwide</p>
      </div>
    </div>
  );
}