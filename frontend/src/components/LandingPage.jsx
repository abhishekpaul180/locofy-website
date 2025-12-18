import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, Play, Download, Star, Users, TrendingUp, MapPin, Phone, Eye } from 'lucide-react';

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [userType, setUserType] = useState('business'); // 'business' or 'user'
  
  const testimonials = {
    business: [
      {
        name: "Rajesh Kumar",
        business: "Zam Zam Bakery",
        avatar: "/api/placeholder/60/60",
        quote: "Locofy increased our foot traffic by 40% in just 2 months. The story format really connects with customers!",
        rating: 5
      },
      {
        name: "Priya Sharma",
        business: "Team Rare Rabbit",
        avatar: "/api/placeholder/60/60", 
        quote: "Amazing reach! Our fashion stories get 2x more engagement than traditional ads. Game changer for local retail.",
        rating: 5
      },
      {
        name: "Arjun Menon",
        business: "Pickle Ball Arena",
        avatar: "/api/placeholder/60/60",
        quote: "The AI-driven personalization brought us exactly the right customers. Revenue up 60% since joining Locofy.",
        rating: 5
      }
    ],
    user: [
      {
        name: "Ananya Krishnan",
        location: "Koramangala Resident",
        avatar: "/api/placeholder/60/60",
        quote: "I discovered 5 amazing local cafes within walking distance! Locofy shows me authentic stories that make me want to visit.",
        rating: 5
      },
      {
        name: "Vikram Shetty",
        location: "Indiranagar Explorer",
        avatar: "/api/placeholder/60/60", 
        quote: "Finally, an app that shows real local gems! I found the best pickle ball courts and cocktail bars through genuine stories.",
        rating: 5
      },
      {
        name: "Meera Patel",
        location: "HSR Layout Foodie",
        avatar: "/api/placeholder/60/60",
        quote: "Love the swipeable format! I spend hours discovering local businesses I never knew existed in my neighborhood.",
        rating: 5
      }
    ]
  };

  const features = {
    business: [
      {
        icon: <Eye className="h-6 w-6" />,
        title: "Short-Form Stories",
        description: "Create swipeable content that customers love to discover"
      },
      {
        icon: <MapPin className="h-6 w-6" />,
        title: "Hyperlocal Targeting", 
        description: "Reach customers within walking distance of your business"
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "AI-Driven Rankings",
        description: "Smart algorithms match you with ideal customers"
      }
    ],
    user: [
      {
        icon: <Eye className="h-6 w-6" />,
        title: "Discover Local Gems",
        description: "Swipe through authentic stories from nearby businesses"
      },
      {
        icon: <MapPin className="h-6 w-6" />,
        title: "Walk-Distance Filter", 
        description: "Find amazing places you can actually visit easily"
      },
      {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Personalized Feed",
        description: "AI learns your preferences for perfect recommendations"
      }
    ]
  };

  const heroContent = {
    business: {
      title: "Every Local Business Has a",
      highlightText: " Story",
      subtitle: "Discover Yours.",
      description: "Join 300+ Bengaluru businesses using Locofy to tell their story through engaging short-form content and connect with local customers.",
      primaryButton: "List My Business",
      secondaryButton: "Watch Demo"
    },
    user: {
      title: "Discover Amazing Local",
      highlightText: " Stories",
      subtitle: "Around You.",
      description: "Swipe through authentic stories from 300+ local businesses in Bengaluru. Find hidden gems, amazing food, and unique experiences in your neighborhood.",
      primaryButton: "Download App",
      secondaryButton: "Explore Stories"
    }
  };

  const problemContent = {
    business: {
      title: "Local Businesses Are Fighting an",
      highlightText: " Uphill Battle",
      description: "While big brands dominate digital marketing with massive budgets, local businesses struggle to get noticed. Traditional advertising feels impersonal, and social media algorithms make it harder than ever to reach your community."
    },
    user: {
      title: "Finding Great Local Places Is",
      highlightText: " Surprisingly Hard",
      description: "Generic review sites show the same popular chains everywhere. You walk past amazing local businesses daily without knowing what makes them special. Social media is cluttered with ads, not authentic local stories."
    }
  };

  const solutionContent = {
    business: {
      title: "How",
      highlightText: " Locofy",
      subtitle: " Solves It",
      description: "We've reimagined local discovery through engaging, swipeable stories that make your business impossible to ignore."
    },
    user: {
      title: "How",
      highlightText: " Locofy",
      subtitle: " Works for You", 
      description: "We've created the most engaging way to discover authentic local businesses through swipeable stories that show you exactly what makes each place special."
    }
  };

  const ctaContent = {
    business: {
      title: "Join 300+ Bengaluru businesses thriving with Locofy today.",
      description: "Don't let your business remain invisible. Start telling your story and watch your local customer base grow exponentially.",
      primaryButton: "Get Started Free",
      secondaryButton: "Schedule Demo"
    },
    user: {
      title: "Join thousands discovering amazing local stories daily.",
      description: "Stop settling for chain restaurants and generic experiences. Discover the authentic local businesses that make your neighborhood special.",
      primaryButton: "Download for iOS",
      secondaryButton: "Get on Android"
    }
  };

  const stats = [
    { number: "300+", label: "Active Businesses", growth: "+40%" },
    { number: "1.5M", label: "Story Views", growth: "+120%" },
    { number: "2x", label: "Customer Growth", growth: "avg." },
    { number: "8.1%", label: "Engagement Rate", growth: "+2%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials[userType].length);
    }, 5000);
    return () => clearInterval(interval);
  }, [userType]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials[userType].length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials[userType].length) % testimonials[userType].length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFB300]/10 via-transparent to-[#FFB300]/5 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#FFB300]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFB300]/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FFB300]/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FFB300] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#111111] font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-white">Locofy</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-[#FFB300] transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-[#FFB300] transition-colors font-medium">Stories</a>
              <a href="#stats" className="text-gray-300 hover:text-[#FFB300] transition-colors font-medium">Impact</a>
            </nav>
            <Button className="glass-button text-[#111111] font-semibold hover:scale-105 transition-all duration-300">
              {userType === 'business' ? 'Get Started' : 'Download App'}
            </Button>
          </div>
        </div>
      </header>

      {/* User Type Toggle */}
      <section className="fixed top-16 w-full z-30 glass-tab-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-4">
            <div className="glass-toggle-container">
              <button
                onClick={() => {
                  setUserType('business');
                  setCurrentTestimonial(0);
                }}
                className={`glass-toggle-button ${
                  userType === 'business' ? 'active' : ''
                }`}
              >
                <Users className="h-5 w-5 mr-2" />
                I'm a Business
              </button>
              <button
                onClick={() => {
                  setUserType('user');
                  setCurrentTestimonial(0);
                }}
                className={`glass-toggle-button ${
                  userType === 'user' ? 'active' : ''
                }`}
              >
                <Eye className="h-5 w-5 mr-2" />
                I'm a User
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 lg:order-1">
              <div className="space-y-6">
                <Badge className="glass-badge relative z-20">
                  ✨ {userType === 'business' ? 'Grow Your Business' : 'Discover Local Stories'}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {heroContent[userType].title}
                  <span className="text-[#FFB300] glow-text">{heroContent[userType].highlightText}</span>
                  <br />{heroContent[userType].subtitle}
                </h1>
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  {heroContent[userType].description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glass-button-primary text-[#111111] font-semibold hover:scale-105 transition-all duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  {heroContent[userType].primaryButton}
                </Button>
                <Button size="lg" className="glass-button-secondary text-white font-medium hover:scale-105 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  {heroContent[userType].secondaryButton}
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FFB300] text-[#FFB300]" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">4.8</span>
                  <span>(2.3k reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-[#FFB300]" />
                  <span>{userType === 'business' ? '300+ businesses trust us' : '10K+ users love it'}</span>
                </div>
              </div>
            </div>

            <div className="relative lg:order-2">
              <div className="glass-card p-6 transform hover:scale-105 transition-all duration-500 mx-auto max-w-sm lg:max-w-none">
                <img
                  src="/api/placeholder/320/600"
                  alt="Locofy App Screenshot"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-[#FFB300]/20 rounded-3xl blur-2xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-section p-12 rounded-3xl">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                {problemContent[userType].title}
                <span className="text-[#FFB300] glow-text">{problemContent[userType].highlightText}</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {problemContent[userType].description}
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="glass-stat-card group">
                  <div className="text-4xl font-bold text-[#FFB300] mb-4 group-hover:scale-110 transition-transform">73%</div>
                  <p className="text-gray-300 leading-relaxed">of local customers never discover nearby businesses</p>
                </div>
                <div className="glass-stat-card group">
                  <div className="text-4xl font-bold text-[#FFB300] mb-4 group-hover:scale-110 transition-transform">5x</div>
                  <p className="text-gray-300 leading-relaxed">more expensive than it should be to reach local customers</p>
                </div>
                <div className="glass-stat-card group">
                  <div className="text-4xl font-bold text-[#FFB300] mb-4 group-hover:scale-110 transition-transform">80%</div>
                  <p className="text-gray-300 leading-relaxed">of small businesses feel invisible online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              {solutionContent[userType].title}<span className="text-[#FFB300] glow-text">{solutionContent[userType].highlightText}</span>{solutionContent[userType].subtitle}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {solutionContent[userType].description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features[userType].map((feature, index) => (
                <div key={index} className="glass-feature-card group cursor-pointer">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#FFB300] rounded-2xl flex items-center justify-center text-[#111111] group-hover:scale-110 transition-transform shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FFB300] transition-colors">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-4 hover:scale-105 transition-transform">
                <img
                  src="/api/placeholder/280/500" 
                  alt="App Screenshot 1"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="glass-card p-4 hover:scale-105 transition-transform mt-8">
                <img
                  src="/api/placeholder/280/500"
                  alt="App Screenshot 2" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Real Stories, <span className="text-[#FFB300] glow-text">Real Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {userType === 'business' 
                ? 'Hear from local business owners who\'ve transformed their customer reach with Locofy stories.'
                : 'See what other users are saying about discovering amazing local places through Locofy.'
              }
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="glass-testimonial-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="glass-avatar">
                  <img
                    src={testimonials[userType][currentTestimonial].avatar}
                    alt={testimonials[userType][currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">{testimonials[userType][currentTestimonial].name}</h4>
                  <p className="text-[#FFB300] font-medium">
                    {testimonials[userType][currentTestimonial][userType === 'business' ? 'business' : 'location']}
                  </p>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(testimonials[userType][currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FFB300] text-[#FFB300]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-300 italic leading-relaxed">"{testimonials[userType][currentTestimonial].quote}"</p>
            </div>

            <button
              onClick={prevTestimonial}
              className="glass-nav-button left-4"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="glass-nav-button right-4"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            <div className="flex justify-center space-x-3 mt-8">
              {testimonials[userType].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#FFB300] scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Proven <span className="text-[#FFB300] glow-text">Impact</span> for Local Businesses
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Numbers that matter to investors and business owners alike.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-stat-card group text-center cursor-pointer">
                <div className="text-4xl font-bold text-[#FFB300] mb-3 group-hover:scale-110 transition-transform glow-text">
                  {stat.number}
                </div>
                <div className="text-gray-300 mb-3 font-medium">{stat.label}</div>
                <Badge className="glass-badge-sm text-[#FFB300]">
                  {stat.growth}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-cta-section">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-[#FFB300] glow-text">{ctaContent[userType].title}</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {ctaContent[userType].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="glass-button-primary text-[#111111] font-semibold hover:scale-105 transition-all duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  {ctaContent[userType].primaryButton}
                </Button>
                <Button size="lg" className="glass-button-secondary text-white font-medium hover:scale-105 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  {ctaContent[userType].secondaryButton}
                </Button>
              </div>

              <p className="text-gray-400 text-sm">
                Free to download • No setup fees • Start sharing stories in minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#111111]/50 backdrop-blur-xl border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#FFB300] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-[#111111] font-bold text-lg">L</span>
                </div>
                <span className="text-2xl font-bold text-white">Locofy</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering local businesses through engaging storytelling and hyperlocal discovery.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#FFB300] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#FFB300] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#FFB300] transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#FFB300] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FFB300] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#FFB300] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#FFB300] transition-colors">Help Center</a></li>
                <li><a href="/terms-of-service" className="hover:text-[#FFB300] transition-colors">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="hover:text-[#FFB300] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Locofy. All rights reserved. Made with ❤️ for local businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;