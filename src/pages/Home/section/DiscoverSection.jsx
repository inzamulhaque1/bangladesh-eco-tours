/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  MapPin, 
  Calendar,
  ArrowRight,
  Heart,
  Star,
  Camera
} from 'lucide-react';

const DiscoverSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    {
      id: 'people',
      title: 'OUR PEOPLE',
      description: 'Meet the indigenous communities and local guides who make your journey unforgettable',
      image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKKkPvWzgzaA/v1/-1x-1.webp',
      icon: Users,
      accent: 'from-[#6DAA44] to-green-600',
      stats: '50+ Local Guides'
    },
    {
      id: 'tours',
      title: 'OUR TOURS',
      description: 'Discover carefully crafted experiences that showcase authentic Bangladesh culture',
      image: 'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2022/12/06/new_project_1.jpg',
      icon: MapPin,
      accent: 'from-green-500 to-[#6DAA44]',
      stats: '25+ Destinations'
    },
    {
      id: 'reservation',
      title: 'RESERVATION',
      description: 'Book your personalized eco-adventure with flexible dates and custom itineraries',
      image: 'https://www.freetour.com/images/tours/70293/draft-15-01.jpg',
      icon: Calendar,
      accent: 'from-[#6DAA44] to-emerald-600',
      stats: 'Available Year Round'
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-[#6DAA44]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-24 h-24 sm:w-48 sm:h-48 bg-[#6DAA44]/3 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#6DAA44]/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg mb-4 sm:mb-6">
            <Star className="text-[#6DAA44]" size={isMobile ? 18 : 20} />
            <span className="text-[#6DAA44] font-semibold text-sm sm:text-base">Discover with Us</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            Your Gateway to
            <span className="text-[#6DAA44] block">Authentic Bangladesh</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Choose your adventure path and immerse yourself in genuine cultural experiences
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative"
              onMouseEnter={() => !isMobile && setHoveredCard(category.id)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onTouchStart={() => isMobile && setHoveredCard(hoveredCard === category.id ? null : category.id)}
            >
              {/* Main Card */}
              <div className={`
                relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden cursor-pointer
                transform transition-all duration-500 ease-out
                ${hoveredCard === category.id 
                  ? 'scale-105 shadow-2xl -translate-y-2 sm:-translate-y-4' 
                  : 'hover:scale-102 hover:-translate-y-1 sm:hover:-translate-y-2'
                }
                ${isMobile ? 'active:scale-95' : ''}
              `}>
                {/* Image Container */}
                <div className="relative h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
                  <div 
                    className={`
                      absolute inset-0 bg-cover bg-center transition-transform duration-700
                      ${hoveredCard === category.id ? 'scale-110' : 'scale-100'}
                    `}
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  
                  {/* Image Overlay */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                    transition-opacity duration-500
                    ${hoveredCard === category.id ? 'opacity-100' : 'opacity-70'}
                  `} />
                  
                  {/* Floating Icon */}
                  <div className={`
                    absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                    bg-white/20 backdrop-blur-sm rounded-full 
                    flex items-center justify-center transition-all duration-500
                    ${hoveredCard === category.id ? 'scale-110 bg-white/30' : ''}
                  `}>
                    <category.icon className="text-white" size={isMobile ? 18 : 20} />
                  </div>
                  
                  {/* Stats Badge */}
                  <div className={`
                    absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-sm 
                    px-2 py-1 sm:px-4 sm:py-2 rounded-full
                    transition-all duration-500 transform
                    ${hoveredCard === category.id ? 'translate-y-0 opacity-100' : 'translate-y-1 sm:translate-y-2 opacity-80'}
                  `}>
                    <span className="text-[#6DAA44] font-semibold text-xs sm:text-sm">{category.stats}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <div className={`w-6 sm:w-8 h-0.5 sm:h-1 bg-gradient-to-r ${category.accent} rounded-full`} />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {category.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className={`
                    group/btn flex items-center gap-1 sm:gap-2 text-[#6DAA44] font-semibold text-sm sm:text-base
                    transition-all duration-300 hover:gap-2 sm:hover:gap-3
                  `}>
                    <span>Explore More</span>
                    <ArrowRight 
                      size={isMobile ? 16 : 18} 
                      className={`
                        transition-transform duration-300
                        ${hoveredCard === category.id ? 'translate-x-1' : ''}
                      `}
                    />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t ${category.accent} opacity-0 rounded-2xl sm:rounded-3xl
                  transition-opacity duration-500 pointer-events-none
                  ${hoveredCard === category.id ? 'opacity-5' : ''}
                `} />
              </div>

              {/* Floating Elements - Hidden on mobile */}
              {!isMobile && (
                <>
                  <div className={`
                    absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#6DAA44] rounded-full opacity-0
                    transition-all duration-500 animate-pulse
                    ${hoveredCard === category.id ? 'opacity-30' : ''}
                  `} />
                  
                  <div className={`
                    absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#6DAA44] rounded-full opacity-0
                    transition-all duration-700 animate-bounce
                    ${hoveredCard === category.id ? 'opacity-20' : ''}
                  `} />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Action Section */}
        <div className="text-center">
          <div className={`
            inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 
            bg-white/80 hover:bg-gray-100 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 
            rounded-2xl sm:rounded-full shadow-lg hover:shadow-xl 
            transition-all duration-300 group cursor-pointer w-full sm:w-auto
          `}>
            <Heart className="text-[#6DAA44] group-hover:scale-110 transition-transform duration-300" 
                   size={isMobile ? 18 : 20} />
            <span className="text-gray-700 font-semibold text-sm sm:text-base text-center sm:text-left">
              Ready to start your journey?
            </span>
            <button className="bg-[#6DAA44] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold 
                             hover:bg-green-600 transform hover:scale-105 transition-all duration-300 
                             flex items-center gap-1 sm:gap-2 text-sm sm:text-base w-full sm:w-auto justify-center">
              Get Started
              <ArrowRight size={isMobile ? 14 : 16} 
                         className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        /* Touch device improvements */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:scale-102:hover {
            transform: scale(1);
          }
          .hover\\:-translate-y-2:hover {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DiscoverSection;