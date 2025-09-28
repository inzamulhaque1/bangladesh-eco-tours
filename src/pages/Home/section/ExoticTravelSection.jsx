
import React, { useState, useEffect, useRef } from 'react';
import { 
  HiLocationMarker, 
  HiCamera, 
  HiGlobeAlt, 
  HiStar,
  HiChevronRight,
  HiSparkles,
  HiHeart,
  HiEye
} from 'react-icons/hi';

const ExoticTravelSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: HiLocationMarker,
      image: "https://png.pngtree.com/png-vector/20221216/ourmid/pngtree-national-monument-of-bangladesh-jatiyo-sriti-shoudho-png-image_6525276.png",
      title: "Hidden Gems",
      description: "Undiscovered places waiting for you",
      color: "from-green-400 to-emerald-500",
      useIcon: false
    },
    {
      icon: HiCamera,
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/6ff871224371615.Y3JvcCw1MDAwLDM5MTAsMCw1NDQ.png",
      title: "Authentic Experiences",
      description: "Capture moments that last forever",
      color: "from-emerald-400 to-teal-500",
      useIcon: false
    },
    {
      icon: HiGlobeAlt,
      title: "Off The Beaten Path",
      description: "Where tourists haven't been yet",
      color: "from-teal-400 to-cyan-500",
      useIcon: true
    },
    {
      icon: HiStar,
      image: "https://cdn.pixabay.com/photo/2013/07/12/14/09/bangladesh-147853_1280.png",
      title: "Exclusive Adventures",
      description: "Premium experiences just for you",
      color: "from-cyan-400 to-blue-500",
      useIcon: false
    }
  ];

  const stats = [
    { number: "500+", label: "Hidden Locations", icon: HiLocationMarker },
    { number: "95%", label: "Satisfaction Rate", icon: HiHeart },
    { number: "10K+", label: "Happy Travelers", icon: HiSparkles },
    { number: "15+", label: "Years Experience", icon: HiStar }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 animate-pulse"
             style={{ backgroundColor: '#6DAA44' }}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 animate-bounce"
             style={{ backgroundColor: '#6DAA44', animationDuration: '6s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20 animate-float"
            style={{
              backgroundColor: '#6DAA44',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border border-green-100">
              <HiSparkles className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Discover The Undiscovered</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">EXOTIC TRAVEL &</span>
                <span 
                  className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                  style={{ color: '#6DAA44' }}
                >
                  ADVENTURES
                </span>
                <span className="block">IN BANGLADESH</span>
              </h2>
              
              {/* Animated Underline */}
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transform origin-left transition-transform duration-1000"
                   style={{ 
                     backgroundColor: '#6DAA44',
                     transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
                   }}></div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="transform transition-all duration-1000 delay-300"
                 style={{ 
                   transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                   opacity: isVisible ? 1 : 0
                 }}>
                Bangladesh is rarely considered a tourist destination. What people know of it generally comes from news reports: floods, cyclones, political strife, tragedies in garment factories.
              </p>
              
              <p className="transform transition-all duration-1000 delay-500"
                 style={{ 
                   transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                   opacity: isVisible ? 1 : 0
                 }}>
                It's way off most travelers' radar screen. <span className="font-semibold text-green-600">"Come before the tourists visit"</span> is an old slogan but it couldn't be more true.
              </p>
              
              <p className="transform transition-all duration-1000 delay-700"
                 style={{ 
                   transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                   opacity: isVisible ? 1 : 0
                 }}>
                How many places are there left in the world that is not swarming with tourists? Off the beaten track, yet Bangladesh has all sorts of treats to offer the discerning tourist.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-green-200 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <HiEye className="w-5 h-5 mr-2" />
                  Explore Now
                  <HiChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ backgroundColor: '#6DAA44' }}></div>
                <div className="absolute inset-0 bg-white group-hover:bg-opacity-0 transition-all duration-300"></div>
              </button>
              
              <button className="px-8 py-4 bg-transparent text-green-600 font-semibold rounded-xl border-2 border-green-200 hover:bg-green-50 transform hover:-translate-y-1 transition-all duration-300 hover:border-green-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Interactive Cards */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-green-200 ${
                    activeCard === index ? 'scale-105 shadow-2xl border-green-300' : ''
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                  
                  {/* Icon or Image */}
                  <div className="relative mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                         style={{ backgroundColor: activeCard === index ? '#6DAA44' : undefined }}>
                      {feature.useIcon ? (
                        <feature.icon 
                          className={`w-6 h-6 transition-colors duration-300 ${
                            activeCard === index ? 'text-white' : 'text-green-600'
                          }`} 
                        />
                      ) : (
                        <img 
                          src={feature.image}
                          alt="Bangladesh Flag"
                          className="w-8 h-6 object-contain transition-all duration-300"
                          style={{
                            filter: activeCard === index ? 'brightness(1.2) contrast(1.1)' : 'none'
                          }}
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                       style={{
                         background: `radial-gradient(circle at center, #6DAA44 0%, transparent 70%)`
                       }}></div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                  style={{
                    animationDelay: `${1000 + index * 100}ms`
                  }}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold text-gray-900" style={{ color: '#6DAA44' }}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default ExoticTravelSection;