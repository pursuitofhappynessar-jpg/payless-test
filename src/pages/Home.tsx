import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Star, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Shield,
  Globe,
  Clock,
  Download,
  Gift,
  TrendingUp,
  UserCheck,
  Zap,
  Percent,
  Award,
  Heart,
  Target,
  Compass,
  Ticket,
  CreditCard,
  Hotel,
  Plane,
  FileText,
  Building,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import AnimationWrapper from '../components/AnimationWrapper';
import PaylessCard from '../components/PaylessCard';

const Home: React.FC = () => {
  const [showAllVouchers, setShowAllVouchers] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const destinations = [
+    {
+      name: 'North Coast',
+      description: 'Pristine beaches and luxury resorts',
+      discount: '20%',
+      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
+      originalPrice: '3000',
+      discountedPrice: '2400'
+    },
+    {
+      name: 'Sharm El Sheikh',
+      description: 'World-class diving and coral reefs',
+      discount: '18%',
+      image: 'https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&w=800',
+      originalPrice: '2500',
+      discountedPrice: '2050'
+    },
+    {
+      name: 'El Gouna',
+      description: 'Modern lagoon town paradise',
+      discount: '15%',
+      image: 'https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=800',
+      originalPrice: '2800',
+      discountedPrice: '2380'
+    },
+    {
+      name: 'Dahab',
+      description: 'Bohemian vibe and Blue Hole',
+      discount: '12%',
+      image: 'https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=800',
+      originalPrice: '2000',
+      discountedPrice: '1760'
+    },
+    {
+      name: 'Luxor',
+      description: 'Ancient temples and royal tombs',
+      discount: '10%',
+      image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=800',
+      originalPrice: '1800',
+      discountedPrice: '1620'
+    },
+    {
+      name: 'Aswan',
+      description: 'Nubian culture and Nile cruises',
+      discount: '8%',
+      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
+      originalPrice: '2200',
+      discountedPrice: '2024'
+    }
+  ];
+
+  const whyPaylessReasons = [
+    {
+      icon: <TrendingUp className="h-8 w-8" />,
+      title: 'Unbeatable Discounts',
+      description: 'Save up to 20% on your entire trip - hotels, dining, activities, and more across Egypt',
+      color: 'from-emerald-400 to-emerald-600',
+      bgColor: 'from-emerald-50 to-emerald-100'
+    },
+    {
+      icon: <Shield className="h-8 w-8" />,
+      title: 'Verified Partners',
+      description: 'Over 500 trusted partners across Egypt\'s top destinations with guaranteed savings',
+      color: 'from-blue-400 to-blue-600',
+      bgColor: 'from-blue-50 to-blue-100'
+    },
+    {
+      icon: <Zap className="h-8 w-8" />,
+      title: 'Instant Activation',
+      description: 'Get your digital card within 24 hours and start saving immediately on your travels',
+      color: 'from-orange-400 to-orange-600',
+      bgColor: 'from-orange-50 to-orange-100'
+    },
+    {
+      icon: <Award className="h-8 w-8" />,
+      title: 'Exclusive Access',
+      description: 'Member-only deals, special experiences, and VIP treatment at premium locations',
+      color: 'from-purple-400 to-purple-600',
+      bgColor: 'from-purple-50 to-purple-100'
+    }
+  ];
+
+  const services = [
+    {
+      icon: <Hotel className="h-12 w-12" />,
+      title: 'Hotels',
+      description: 'Up to 20% off hotels inside and outside Egypt. We help find top-quality accommodation at the best price.',
+      color: 'from-blue-500 to-blue-600',
+      bgColor: 'from-blue-50 to-blue-100'
+    },
+    {
+      icon: <Plane className="h-12 w-12" />,
+      title: 'Flight Tickets',
+      description: 'Up to 10% discount on global flights.',
+      color: 'from-sky-500 to-sky-600',
+      bgColor: 'from-sky-50 to-sky-100'
+    },
+    {
+      icon: <FileText className="h-12 w-12" />,
+      title: 'Visa',
+      description: 'We assist with visa applications worldwide. Just a passport and a photo needed.',
+      color: 'from-green-500 to-green-600',
+      bgColor: 'from-green-50 to-green-100'
+    },
+    {
+      icon: <Building className="h-12 w-12" />,
+      title: 'Umrah',
+      description: 'Tailored Umrah packages with full service including hotels, flights, visas, and barcode.',
+      color: 'from-purple-500 to-purple-600',
+      bgColor: 'from-purple-50 to-purple-100'
+    }
+  ];
+
+  const vouchers = [
+    {
+      title: 'Free Nile Cruise Night',
+      description: 'Enjoy a free night when you book three or more nights on the Nile Cruise between Luxor and Aswan.',
+      image: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=800'
+    },
+    {
+      title: '30% Dinner Discount',
+      description: 'Enjoy a 30% discount on an open buffet dinner invitation for 2 persons at selected locations along the Nile.',
+      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800'
+    },
+    {
+      title: 'Extended Umrah Trip',
+      description: 'Experience a 14-night Umrah trip at the cost of only 11 nights.',
+      image: 'https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=800'
+    },
+    {
+      title: 'Umrah Discount',
+      description: 'Receive a discount ranging from 2,500 to 5,000 EGP per person on your Umrah trip.',
+      image: 'https://images.pexels.com/photos/4254557/pexels-photo-4254557.jpeg?auto=compress&cs=tinysrgb&w=800'
+    },
+    {
+      title: 'Free Visa Processing',
+      description: 'Visa issuance fees are waived if you book 6+ nights outside Egypt.',
+      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800'
+    },
+    {
+      title: 'Premium Residence Visa',
+      description: 'A premium residence visa for professionals is now available at a discounted rate of $30,000 (was $35,000).',
+      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800'
+    },
+    {
+      title: 'Complimentary International Night',
+      description: 'Enjoy a complimentary night when you book six nights outside Egypt, while keeping your cost under $100.',
+      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'
+    },
+    {
+      title: 'Free $50 Credit',
+      description: 'Get a cool $50 absolutely free!',
+      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800'
+    },
+    {
+      title: 'Flight Discount',
+      description: 'Get a fabulous 250 EGP off your flight tickets!',
+      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800'
+    },
+    {
+      title: 'Free Day Use',
+      description: 'Day use without spending a dime!',
+      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800'
+    }
+  ];
+
+  const testimonials = [
+    {
+      name: 'Sarah Ahmed',
+      location: 'Cairo',
+      text: 'Saved over 2000 EGP on my North Coast vacation! This card is absolutely amazing.',
+      rating: 5,
+      savings: '2000 EGP'
+    },
+    {
+      name: 'Mohamed Hassan',
+      location: 'Alexandria',
+      text: 'Perfect for weekend getaways. The discounts are real and substantial every time.',
+      rating: 5,
+      savings: '1500 EGP'
+    },
+    {
+      name: 'Nour El-Din',
+      location: 'Giza',
+      text: 'Best travel investment I\'ve ever made. Highly recommended for all Egypt travelers!',
+      rating: 5,
+      savings: '3200 EGP'
+    }
+  ];
+
+  const faqs = [
+    {
+      question: 'How do I get my Payless card?',
+      answer: 'Simply fill out our registration form with your name, phone number, and governorate. You\'ll receive your digital card within 24 hours via email and SMS.'
+    },
+    {
+      question: 'Where can I use my Payless card?',
+      answer: 'Your Payless card works at over 500 partner locations across Egypt, including hotels, restaurants, tourist attractions, and service providers in all major destinations.'
+    },
+    {
+      question: 'Are there any hidden fees or annual charges?',
+      answer: 'No, there are no hidden fees or annual charges. You pay once for your card and enjoy discounts throughout your travels in Egypt.'
+    },
+    {
+      question: 'Can I use the card for international travel?',
+      answer: 'Yes! Our card offers discounts on international flights, visa processing, and select international hotel bookings through our global partners.'
+    },
+    {
+      question: 'How much can I save with the Payless card?',
+      answer: 'Our members typically save between 10-20% on regular bookings, with special vouchers offering even greater savings. Many members save over 20,000 EGP annually!'
+    }
+  ];
+
+  const displayedVouchers = showAllVouchers ? vouchers : vouchers.slice(0, 6);
+
+  return (
+    <div className="min-h-screen">
+      {/* Hero Section */}
+      <section className="relative bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white overflow-hidden">
+        <div className="absolute inset-0 bg-black/20"></div>
+        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
+        
+        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
+          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
+            <div className="text-center lg:text-left">
+              <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up border border-orange-300/30">
+                <Sparkles className="h-4 w-4 mr-2" />
+                <span className="text-sm font-medium">Egypt's #1 Travel Discount Card</span>
+              </div>
+              
+              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up stagger-1">
+                Wherever You Want to
+                <span className="block bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
+                  Travel in Egypt...
+                </span>
+                <span className="block text-3xl md:text-4xl mt-2 font-manrope">
+                  Our Card Gives You an 
+                  <span className="text-orange-300"> Unbeatable Discount</span>
+                </span>
+              </h1>
+              
+              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl animate-fade-in-up stagger-2 font-manrope">
+                From the pristine beaches of the North Coast to the ancient wonders of Luxor - 
+                save up to 20% on hotels, dining, and experiences everywhere in Egypt.
+              </p>
+              
+              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up stagger-3">
+                <Link
+                  to="/get-your-card"
+                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center space-x-2 animate-pulse-slow"
+                >
+                  <span>Unlock Your Discount</span>
+                  <ArrowRight className="h-5 w-5" />
+                </Link>
+                <div className="flex items-center space-x-2 text-blue-100">
+                  <Heart className="h-5 w-5 text-red-400" />
+                  <span className="text-sm font-medium">Loved by 50,000+ travelers</span>
+                </div>
+              </div>
+            </div>
+
+            {/* Payless Card Display */}
+            <div className="flex justify-center lg:justify-end animate-fade-in-right">
+              <PaylessCard size="large" />
+            </div>
+          </div>
+        </div>
+      </section>
+
+      {/* About Us Section */}
+      <section id="about" className="py-20 bg-white">
+        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
+            <AnimationWrapper animationType="slide-in-left">
+              <div>
+                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
+                  About Us
+                </h2>
+                <h3 className="text-2xl md:text-3xl font-semibold text-sky-600 mb-6 font-manrope">
+                  Discover the World with Payless...
+                </h3>
+                <p className="text-lg text-gray-600 leading-relaxed font-manrope">
+                  Payless card is your ultimate pass to incredible discounts of up to 50% on all your travel adventures! 
+                  Whether you're envisioning luxurious hotels, thrilling cruises, or serene yacht retreats, 
+                  Payless is your reliable companion for maximizing savings on every aspect of your journey!
+                </p>
+              </div>
+            </AnimationWrapper>
+            
+            <AnimationWrapper animationType="slide-in-right">
+              <div className="flex justify-center">
+                <PaylessCard size="large" />
+              </div>
+            </AnimationWrapper>
+          </div>
+        </div>
+      </section>
+
+      {/* Our Services Section */}
+      <section id="services" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
+        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+          <AnimationWrapper animationType="fade-in">
+            <div className="text-center mb-16">
+              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
+                Our Services
+              </h2>
+              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
+                Comprehensive travel solutions designed to make your journey seamless and affordable
+              </p>
+            </div>
+          </AnimationWrapper>
+
+          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
+            {services.map((service, index) => (
+              <AnimationWrapper 
+                key={index}
+                animationType="scale-in"
+                delay={index * 150}
+              >
+                <div className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group text-center`}>
+                  <div className={`bg-gradient-to-r ${service.color} text-white p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
+                    {service.icon}
+                  </div>
+                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
+                    {service.title}
+                  </h3>
+                  <p className="text-gray-700 leading-relaxed font-manrope">
+                    {service.description}
+                  </p>
+                </div>
+              </AnimationWrapper>
+            ))}
+          </div>
+        </div>
+      </section>
+
+      {/* Our Vouchers Section */}
+      <section id="vouchers" className="py-20 bg-white">
+        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+          <AnimationWrapper animationType="fade-in">
+            <div className="text-center mb-16">
+              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
+                Our Vouchers
+              </h2>
+              <h3 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-6 font-manrope">
+                Unlock exclusive vouchers that can save you over 20,000 EGP each year!
+              </h3>
+              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
+                Discover amazing deals and exclusive offers available only to Payless cardholders
+              </p>
+            </div>
+          </AnimationWrapper>
+
+          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
+            {displayedVouchers.map((voucher, index) => (
+              <AnimationWrapper 
+                key={index}
+                animationType="scale-in"
+                delay={index * 100}
+              >
+                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-200 group">
+                  <div className="relative h-48 overflow-hidden">
+                    <img 
+                      src={voucher.image} 
+                      alt={voucher.title}
+                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
+                    />
+                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
+                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
+                      <Gift className="h-3 w-3 inline mr-1" />
+                      VOUCHER
+                    </div>
+                  </div>
+                  
+                  <div className="p-6">
+                    <h3 className="text-xl font-bold text-gray-900 mb-3">
+                      {voucher.title}
+                    </h3>
+                    <p className="text-gray-700 leading-relaxed font-manrope">
+                      {voucher.description}
+                    </p>
+                  </div>
+                </div>
+              </AnimationWrapper>
+            ))}
+          </div>
+
+          {!showAllVouchers && (
+            <div className="text-center">
+              <button
+                onClick={() => setShowAllVouchers(true)}
+                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
+              >
+                <span>Show More Vouchers</span>
+                <ChevronDown className="h-5 w-5" />
+              </button>
+            </div>
+          )}
+
+          {showAllVouchers && (
+            <div className="text-center">
+              <button
+                onClick={() => setShowAllVouchers(false)}
+                className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
+              >
+                <span>Show Less</span>
+                <ChevronUp className="h-5 w-5" />
+              </button>
+            </div>
+          )}
+        </div>
+      </section>
+
+      {/* Why Choose Payless Section */}
+      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
+        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+          <AnimationWrapper animationType="fade-in">
+            <div className="text-center mb-16">
+              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
+                Why Choose Payless?
+              </h2>
+              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
+                More than just a discount card - it's your gateway to experiencing Egypt like never before
+              </p>
+            </div>
+          </AnimationWrapper>
+
+          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
+            {whyPaylessReasons.map((reason, index) => (
+              <AnimationWrapper 
+                key={index}
+                animationType={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
+                delay={index * 200}
+              >
+                <div className={`bg-gradient-to-br ${reason.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group`}>
+                  <div className={`bg-gradient-to-r ${reason.color} text-white p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
+                    {reason.icon}
+                  </div>
+                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
+                    {reason.title}
+                  </h3>
+                  <p className="text-gray-700 text-lg leading-relaxed font-manrope">
+                    {reason.description}
+                  </p>
+                </div>
+              </AnimationWrapper>
+            ))}
+          </div>
+        </div>
+      </section>
+
+      {/* Destinations Section */}
+      <section className="py-20 bg-gray-50">
+        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+          <AnimationWrapper animationType="fade-in">
+            <div className="text-center mb-16">
+              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
+                Exclusive Travel Deals
+              </h2>
+              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
+                Real savings at Egypt's most popular destinations. These aren't just discounts - they're your ticket to affordable luxury.
+              </p>
+            </div>
+          </AnimationWrapper>
+
+          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
+            {destinations.map((destination, index) => (
+              <AnimationWrapper 
+                key={index}
+                animationType="scale-in"
+                delay={index * 150}
+              >
+                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
+                  <div className="relative h-48 overflow-hidden">
+                    <img 
+                      src={destination.image} 
+                      alt={destination.name}
+                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
+                    />
+                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
+                    
+                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse-slow">
+                      <Ticket className="h-3 w-3 inline mr-1" />
+                      {destination.discount} OFF
+                    </div>
+                    
+                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center space-x-1 shadow-lg">
+                      <CreditCard className="w-3 h-3 text-sky-600" />
+                      <span className="text-xs font-bold text-gray-800">PAYLESS</span>
+                    </div>
+                    
+                    <div className="absolute bottom-4 left-4 right-4">
+                      <h3 className="text-2xl font-bold text-white mb-1">
+                        {destination.name}
+                      </h3>
+                      <p className="text-white/90 text-sm font-manrope">
+                        {destination.description}
+                      </p>
+                    </div>
+                  </div>
+                  
+                  <div className="p-6">
+                    <div className="flex items-center justify-between mb-4">
+                      <div className="flex items-center space-x-2">
+                        <MapPin className="h-4 w-4 text-gray-400" />
+                        <span className="text-sm text-gray-600 font-manrope">Egypt</span>
+                      </div>
+                      <div className="flex items-center space-x-1">
+                        {[...Array(5)].map((_, i) => (
+                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
+                        ))}
+                      </div>
+                    </div>
+                    
+                    <div className="flex items-center justify-between">
+                      <div>
+                        <p className="text-sm text-gray-500 line-through font-manrope">{destination.originalPrice} EGP</p>
+                        <p className="text-2xl font-bold text-green-600">{destination.discountedPrice} EGP</p>
+                      </div>
+                      <div className="text-right">
+                        <p className="text-sm text-sky-600 font-semibold">With Payless</p>
+                        <p className="text-xs text-gray-500 font-manrope">Per night average</p>
+                      </div>
+                    </div>
+                  </div>
+                </div>
+              </AnimationWrapper>
+            ))}
+          </div>
+        </div>
+      </section>
+
+      {/* Testimonials Section */}
+      <section className="py-20 bg-white">
+        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+          <AnimationWrapper animationType="fade-in">
+            <div className="text-center mb-16">
+              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
+                Real Savings, Real Stories
+              </h2>
+              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-manrope">
+                See how much our travelers have saved with their Payless cards
+              </p>
+            </div>
+          </AnimationWrapper>
+
+          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
+            {testimonials.map((testimonial, index) => (
+              <AnimationWrapper 
+                key={index}
+                animationType="slide-in-left"
+                delay={index * 200}
+              >
+                <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border border-sky-100 hover:shadow-lg transition-shadow duration-300 group">
+                  <div className="flex items-center justify-between mb-4">
+                    <div className="flex items-center">
+                      {[...Array(testimonial.rating)].map((_, i) => (
+                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
+                      ))}
+                    </div>
+                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
+                      Saved {testimonial.savings}
+                    </div>
+                  </div>
+                  
+                  <p className="text-gray-700 mb-6 italic text-lg font-manrope">
+                    "{testimonial.text}"
+                  </p>
+                  
+                  <div className="flex items-center space-x-3">
+                    <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
+                      <Users className="h-6 w-6 text-white" />
+                    </div>
+                    <div>
+                      <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
+                      <p className="text-sm text-gray-600 font-manrope">{testimonial.location}</p>
+                    </div>
+                  </div>
+                </div>
+              </AnimationWrapper>
+            ))}
+          </div>
+        </div>
+      </section>
+
+      {/* FAQ Section */}
+      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
+        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
+          <AnimationWrapper animationType="fade-in">
+            <div className="text-center mb-16">
+              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
+                Frequently Asked Questions
+              </h2>
+              <p className="text-xl text-gray-600 font-manrope">
+                Everything you need to know about your Payless card
+              </p>
+            </div>
+          </AnimationWrapper>
+
+          <div className="space-y-4">
+            {faqs.map((faq, index) => (
+              <AnimationWrapper 
+                key={index}
+                animationType="fade-in"
+                delay={index * 100}
+              >
+                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
+                  <button
+                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
+                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
+                  >
+                    <div className="flex items-center space-x-4">
+                      <div className="bg-sky-100 p-2 rounded-lg">
+                        <HelpCircle className="h-5 w-5 text-sky-600" />
+                      </div>
+                      <h3 className="text-lg font-semibold text-gray-900">
+                        {faq.question}
+                      </h3>
+                    </div>
+                    <div className="text-sky-600">
+                      {openFaq === index ? (
+                        <ChevronUp className="h-5 w-5" />
+                      ) : (
+                        <ChevronDown className="h-5 w-5" />
+                      )}
+                    </div>
+                  </button>
+                  
+                  {openFaq === index && (
+                    <div className="px-8 pb-6">
+                      <div className="pl-12">
+                        <p className="text-gray-600 leading-relaxed font-manrope">
+                          {faq.answer}
+                        </p>
+                      </div>
+                    </div>
+                  )}
+                </div>
+              </AnimationWrapper>
+            ))}
+          </div>
+        </div>
+      </section>
+
+      {/* Enhanced CTA Section */}
+      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
+        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
+          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
+            <AnimationWrapper animationType="slide-in-left">
+              <div className="text-center lg:text-left">
+                <h2 className="text-4xl md:text-5xl font-bold mb-6">
+                  Ready to Start Your Journey with Payless?
+                </h2>
+                <p className="text-xl text-blue-100 mb-8 font-manrope">
+                  Join thousands of smart travelers who've already discovered the power of Payless. 
+                  Your Egyptian adventure awaits - for less!
+                </p>
+                
+                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
+                  <Link
+                    to="/get-your-card"
+                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 animate-glow"
+                  >
+                    <Gift className="h-5 w-5" />
+                    <span>Get Your Card Now</span>
+                  </Link>
+                  
+                  <div className="flex items-center space-x-4 text-blue-100">
+                    <div className="flex items-center space-x-1">
+                      <CheckCircle className="h-4 w-4" />
+                      <span className="text-sm font-manrope">24-hour activation</span>
+                    </div>
+                    <div className="flex items-center space-x-1">
+                      <CheckCircle className="h-4 w-4" />
+                      <span className="text-sm font-manrope">No hidden fees</span>
+                    </div>
+                  </div>
+                </div>
+              </div>
+            </AnimationWrapper>
+
+            <AnimationWrapper animationType="slide-in-right">
+              <div className="flex justify-center lg:justify-end">
+                <PaylessCard size="large" />
+              </div>
+            </AnimationWrapper>
+          </div>
+        </div>
+      </section>
+
+      {/* Final CTA Before Footer */}
+      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
+        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
+          <AnimationWrapper animationType="scale-in">
+            <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200">
+              <Compass className="h-12 w-12 mx-auto mb-4 text-orange-500" />
+              <h3 className="text-3xl font-bold text-gray-900 mb-4">
+                Don't Miss Out on Egypt's Best Deals
+              </h3>
+              <p className="text-lg text-gray-600 mb-6 font-manrope">
+                Every day you wait is money you could be saving. Get your Payless card today!
+              </p>
+              <Link
+                to="/get-your-card"
+                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg space-x-2"
+              >
+                <span>Start Your Journey with Payless</span>
+                <ArrowRight className="h-5 w-5" />
+              </Link>
+            </div>
+          </AnimationWrapper>
+        </div>
+      </section>
+    </div>
+  );
+};
+
+export default Home;