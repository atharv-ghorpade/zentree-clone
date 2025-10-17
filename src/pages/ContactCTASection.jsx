import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, User, AtSign, Check, ChevronDown, TrendingUp, Users, DollarSign, Zap, Star, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTASection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    subscribeEmail: ''
  });

  const [selectedPlatform, setSelectedPlatform] = useState('discord');
  const [subscribers, setSubscribers] = useState(250);
  const [price, setPrice] = useState(45);
  const [period, setPeriod] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const containerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const calculatorRef = useRef(null);
  const floatingIconsRef = useRef([]);
  const platformCardsRef = useRef([]);
  const buttonsRef = useRef([]);
  const earningsRef = useRef(null);
  const statsRef = useRef([]);
  const backgroundRef = useRef(null);

  // Platform configurations
  const platforms = {
    discord: { 
      name: 'Discord', 
      icon: '💬', 
      color: 'bg-gradient-fromto indigo',
      features: ['Voice & Video Chat', 'Screen Sharing', 'Custom Bots', 'Role Management']
    },
    telegram: { 
      name: 'Telegram', 
      icon: '📱', 
      color: 'bg-gradient-fromto blue',
      features: ['End-to-End Encryption', 'File Sharing', 'Bot Integration', 'Channel Broadcasting']
    },
    slack: { 
      name: 'Slack', 
      icon: '💼', 
      color: 'bg-gradient-fromto green',
      features: ['Workspace Organization', 'App Integration', 'Thread Conversations', 'File Collaboration']
    }
  };

  // Success stats
  const stats = [
    { label: 'Active Communities', value: '10K+', icon: Users },
    { label: 'Monthly Revenue', value: '$2.5M+', icon: DollarSign },
    { label: 'Success Rate', value: '95%', icon: TrendingUp },
    { label: 'Average Setup Time', value: '5 min', icon: Zap }
  ];

  // Calculate earnings with more detailed breakdown
  const calculateEarnings = () => {
    const revenue = subscribers * price;
    const stripeFee = revenue * 0.029 + (subscribers * 0.3); // Stripe fees
    const onetapayFee = revenue * 0.05; // 5% OneTapay fee
    const netEarnings = revenue - stripeFee - onetapayFee;
    
    return {
      revenue: revenue.toFixed(2),
      fees: (stripeFee + onetapayFee).toFixed(2),
      net: Math.max(0, netEarnings).toFixed(2)
    };
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced background animation
      gsap.to(backgroundRef.current, {
        backgroundPosition: '100% 100%',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });

      // Staggered entrance animations
      gsap.from(leftSectionRef.current.children, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Platform cards with enhanced animations
      gsap.from(platformCardsRef.current, {
        scale: 0.7,
        opacity: 0,
        y: 80,
        rotationY: 45,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: rightSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Stats animation
      gsap.from(statsRef.current, {
        scale: 0.5,
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: calculatorRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

      // Calculator entrance
      gsap.from(calculatorRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: calculatorRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Enhanced floating icons
      floatingIconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.from(icon, {
            scale: 0,
            rotation: 720,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            delay: 0.8 + index * 0.3,
            scrollTrigger: {
              trigger: calculatorRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          });

          // More dynamic floating animation
          gsap.to(icon, {
            y: gsap.utils.random(-30, 30),
            x: gsap.utils.random(-20, 20),
            rotation: gsap.utils.random(-25, 25),
            scale: gsap.utils.random(0.8, 1.2),
            duration: gsap.utils.random(4, 7),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.7
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Enhanced earnings animation
  useEffect(() => {
    if (earningsRef.current) {
      gsap.fromTo(earningsRef.current, 
        { scale: 0.8, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }
      );
    }
  }, [subscribers, price, period]);

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    gsap.to(platformCardsRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-soft"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)
          `,
          backgroundSize: '150% 150%'
        }}
      />
      
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Success Stats Section */}
          <div className="text-center mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  ref={el => statsRef.current[index] = el}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-fromto blue-purple rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Side - Enhanced Content */}
            <div ref={leftSectionRef} className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 10,000+ creators
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-tight">
                Turn your 
                <span className="bg-gradient-text blue-purple-pink"> community</span> into revenue
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                The most powerful platform to monetize your Discord, Telegram, or Slack community. 
                Setup takes less than 5 minutes, no coding required.
              </p>

              {/* Feature highlights */}
              <div className="space-y-4">
                {[
                  'Instant setup with one-click integration',
                  'Automated member management',
                  'Secure payment processing',
                  'Real-time analytics dashboard'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  ref={el => buttonsRef.current[0] = el}
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="relative px-8 py-4 bg-gradient-fromto blue-purple text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 group overflow-hidden disabled:opacity-70"
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      gsap.to(e.currentTarget, {
                        scale: 1.05,
                        y: -2,
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      y: 0,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : showSuccess ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Success!
                      </>
                    ) : (
                      <>
                        Get Started Free
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-fromto purple-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button 
                  ref={el => buttonsRef.current[1] = el}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.05,
                      borderColor: '#3b82f6',
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      borderColor: '#d1d5db',
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Side - Enhanced Platform Selection */}
            <div ref={rightSectionRef} className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Platform</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Seamless integration with your favorite communication platform
                </p>
              </div>

              <div className="grid gap-6">
                {Object.entries(platforms).map(([key, platform], index) => (
                  <div 
                    key={key}
                    ref={el => platformCardsRef.current[index] = el}
                    onClick={() => handlePlatformSelect(key)}
                    className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      selectedPlatform === key 
                        ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-blue-50/80' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        y: -8,
                        scale: 1.02,
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        y: 0,
                        scale: 1,
                        boxShadow: '0 0 0 0 rgba(0,0,0,0)',
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-3xl">{platform.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {platform.features.slice(0, 2).map((feature, i) => (
                            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      {selectedPlatform === key && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 ${platforms[selectedPlatform].color} hover:shadow-lg`}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    y: -2,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
              >
                Connect {platforms[selectedPlatform].name}
              </button>
            </div>
          </div>

          {/* Enhanced Calculator Section */}
          <div ref={calculatorRef} className="relative bg-gradient-fromto dark rounded-3xl overflow-hidden shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" 
                   style={{
                     backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                     animation: 'shimmer 3s infinite'
                   }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 p-12 lg:p-16">
              {/* Calculator Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                    Revenue Calculator
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed">
                    See your earning potential with our transparent fee structure
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-3 text-lg">Number of Members</label>
                    <input
                      type="number"
                      value={subscribers}
                      onChange={(e) => setSubscribers(Math.max(1, Number(e.target.value)))}
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white text-xl font-bold placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 backdrop-blur-sm transition-all duration-300"
                      min="1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-3 text-lg">Price</label>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Math.max(1, Number(e.target.value)))}
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white text-xl font-bold placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 backdrop-blur-sm transition-all duration-300"
                        min="1"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-3 text-lg">Period</label>
                      <div className="relative">
                        <select 
                          value={period}
                          onChange={(e) => setPeriod(e.target.value)}
                          className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white font-bold focus:outline-none focus:ring-2 focus:ring-white/40 appearance-none backdrop-blur-sm transition-all duration-300"
                        >
                          <option value="weekly" className="text-gray-900">Weekly</option>
                          <option value="monthly" className="text-gray-900">Monthly</option>
                          <option value="yearly" className="text-gray-900">Yearly</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Results */}
                  <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md border border-white/20 space-y-6">
                    <div className="text-center">
                      <p className="text-white/80 text-lg mb-2">Your Net Earnings</p>
                      <p ref={earningsRef} className="text-6xl font-black text-white mb-4">
                        ${Number(calculateEarnings().net).toLocaleString()}
                      </p>
                      <p className="text-white/80 text-xl">per {period}</p>
                    </div>
                    
                    {/* Breakdown */}
                    <div className="grid grid-cols-3 gap-4 text-center border-t border-white/20 pt-6">
                      <div>
                        <p className="text-white/60 text-sm">Gross Revenue</p>
                        <p className="text-white font-bold text-lg">${Number(calculateEarnings().revenue).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Total Fees</p>
                        <p className="text-white font-bold text-lg">${Number(calculateEarnings().fees).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">You Keep</p>
                        <p className="text-green-400 font-bold text-lg">{((Number(calculateEarnings().net) / Number(calculateEarnings().revenue)) * 100).toFixed(1)}%</p>
                      </div>
                    </div>

                    <button 
                      className="w-full bg-white text-gray-900 font-bold py-4 px-6 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                      onMouseEnter={(e) => {
                        gsap.to(e.currentTarget, {
                          scale: 1.05,
                          y: -3,
                          duration: 0.3,
                          ease: "power2.out"
                        });
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.currentTarget, {
                          scale: 1,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out"
                        });
                      }}
                    >
                      <span className="flex items-center justify-center">
                        Start Earning Today
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed text-center">
                    Transparent pricing: 5% OneTapay fee + standard payment processing fees. No hidden costs.
                  </p>
                </div>
              </div>

              {/* Enhanced Visual Section */}
              <div className="relative h-full min-h-[600px] flex items-center justify-center">
                {/* Enhanced Floating Elements */}
                <div ref={el => floatingIconsRef.current[0] = el} className="absolute top-16 left-8 w-24 h-24 bg-gradient-fromto emerald rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">
                  <span className="text-4xl">💰</span>
                </div>
                <div ref={el => floatingIconsRef.current[1] = el} className="absolute top-32 right-12 w-20 h-20 bg-gradient-fromto yellow-orange rounded-2xl flex items-center justify-center shadow-2xl rotate-12 border border-white/20">
                  <span className="text-3xl">💎</span>
                </div>
                <div ref={el => floatingIconsRef.current[2] = el} className="absolute bottom-24 left-12 w-20 h-20 bg-gradient-fromto pink-rose rounded-2xl flex items-center justify-center shadow-2xl -rotate-12 border border-white/20">
                  <span className="text-3xl">🚀</span>
                </div>
                <div ref={el => floatingIconsRef.current[3] = el} className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-fromto blue-indigo rounded-full flex items-center justify-center shadow-2xl border border-white/20">
                  <span className="text-2xl">⭐</span>
                </div>
                <div ref={el => floatingIconsRef.current[4] = el} className="absolute bottom-40 right-8 w-14 h-14 bg-gradient-fromto purple-violet rounded-xl flex items-center justify-center shadow-2xl rotate-45 border border-white/20">
                  <span className="text-xl">🎯</span>
                </div>

                {/* Central Dashboard Mockup */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-white/40">
                  <div className="bg-gradient-fromto blue-purple p-6 text-center">
                    <h3 className="text-white font-bold text-xl mb-2">Community Dashboard</h3>
                    <p className="text-white/90 text-sm">Real-time analytics & insights</p>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📊</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Track Everything</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Monitor revenue, member growth, and engagement in real-time</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-sm font-medium text-gray-600">Active Members</span>
                        <span className="font-bold text-green-600">+12.5%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-sm font-medium text-gray-600">Monthly Revenue</span>
                        <span className="font-bold text-blue-600">$8,450</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 flex items-center space-x-2">
          <Check className="w-5 h-5" />
          <span>Success! We'll be in touch soon.</span>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        /* Custom gradient classes */
        .bg-gradient-soft {
          background: linear-gradient(to bottom right, #f8fafc, #e0f2fe, #f3e8ff, #fce7f3);
        }
        
        .bg-gradient-fromto.blue-purple {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
        }
        
        .bg-gradient-fromto.purple-pink {
          background: linear-gradient(to right, #8b5cf6, #ec4899);
        }
        
        .bg-gradient-fromto.blue-purple-pink {
          background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
        }
        
        .bg-gradient-fromto.emerald {
          background: linear-gradient(to bottom right, #34d399, #059669);
        }
        
        .bg-gradient-fromto.yellow-orange {
          background: linear-gradient(to bottom right, #facc15, #f97316);
        }
        
        .bg-gradient-fromto.pink-rose {
          background: linear-gradient(to bottom right, #f472b6, #e11d48);
        }
        
        .bg-gradient-fromto.blue-indigo {
          background: linear-gradient(to bottom right, #60a5fa, #6366f1);
        }
        
        .bg-gradient-fromto.purple-violet {
          background: linear-gradient(to bottom right, #a78bfa, #8b5cf6);
        }
        
        .bg-gradient-fromto.indigo {
          background: linear-gradient(to bottom right, #6366f1, #4f46e5);
        }
        
        .bg-gradient-fromto.blue {
          background: linear-gradient(to bottom right, #3b82f6, #2563eb);
        }
        
        .bg-gradient-fromto.green {
          background: linear-gradient(to bottom right, #22c55e, #16a34a);
        }
        
        .bg-gradient-fromto.dark {
          background: linear-gradient(to bottom right, #111827, #1e3a8a, #4c1d95);
        }
        
        .bg-gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .bg-gradient-text.blue-purple-pink {
          background-image: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
        }
      `}</style>
    </div>
  );
}