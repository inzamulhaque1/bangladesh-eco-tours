/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
    <div className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#6DAA44]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#6DAA44]/3 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#6DAA44]/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <Star className="text-[#6DAA44]" size={20} />
            <span className="text-[#6DAA44] font-semibold">Discover with Us</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Your Gateway to
            <span className="text-[#6DAA44] block">Authentic Bangladesh</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose your adventure path and immerse yourself in genuine cultural experiences
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className={`
                relative bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer
                transform transition-all duration-700 ease-out
                ${hoveredCard === category.id 
                  ? 'scale-105 shadow-2xl -translate-y-4' 
                  : 'hover:scale-102 hover:-translate-y-2'
                }
              `}>
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
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
                    absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full 
                    flex items-center justify-center transition-all duration-500
                    ${hoveredCard === category.id ? 'scale-110 bg-white/30' : ''}
                  `}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  
                  {/* Stats Badge */}
                  <div className={`
                    absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full
                    transition-all duration-500 transform
                    ${hoveredCard === category.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}
                  `}>
                    <span className="text-[#6DAA44] font-semibold text-sm">{category.stats}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-1 bg-gradient-to-r ${category.accent} rounded-full`} />
                    <h3 className="text-2xl font-bold text-gray-800 tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className={`
                    group/btn flex items-center gap-2 text-[#6DAA44] font-semibold
                    transition-all duration-300 hover:gap-3
                  `}>
                    <span>Explore More</span>
                    <ArrowRight 
                      size={18} 
                      className={`
                        transition-transform duration-300
                        ${hoveredCard === category.id ? 'translate-x-1' : ''}
                      `}
                    />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t ${category.accent} opacity-0 rounded-3xl
                  transition-opacity duration-500 pointer-events-none
                  ${hoveredCard === category.id ? 'opacity-5' : ''}
                `} />
              </div>

              {/* Floating Elements */}
              <div className={`
                absolute -top-2 -right-2 w-6 h-6 bg-[#6DAA44] rounded-full opacity-0
                transition-all duration-500 animate-pulse
                ${hoveredCard === category.id ? 'opacity-30' : ''}
              `} />
              
              <div className={`
                absolute -bottom-2 -left-2 w-4 h-4 bg-[#6DAA44] rounded-full opacity-0
                transition-all duration-700 animate-bounce
                ${hoveredCard === category.id ? 'opacity-20' : ''}
              `} />
            </div>
          ))}
        </div>

        {/* Bottom Action Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <Heart className="text-[#6DAA44] group-hover:scale-110 transition-transform duration-300" size={20} />
            <span className="text-gray-700 font-semibold">Ready to start your journey?</span>
            <button className="bg-[#6DAA44] text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;