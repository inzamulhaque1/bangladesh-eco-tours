/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Map,
  Camera,
  Mountain,
  Waves,
  TreePine,
  Users,
  Clock,
  Star,
  MapPin,
  Compass,
  Ship,
  Coffee,
  Landmark,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const OurTours = () => {
  const [hoveredTour, setHoveredTour] = useState(null);

  const tours = [
    {
      id: 'archeological',
      title: 'Archeological & Heritage',
      slug: 'archeological-heritage-tour',
      tagline: 'Journey Through Time',
      description: 'Ancient ruins, historic sites, and cultural treasures',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/%E0%A6%AA%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%AC%E0%A7%8C%E0%A6%A6%E0%A7%8D%E0%A6%A7_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0_22.jpg/1200px-%E0%A6%AA%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%AC%E0%A7%8C%E0%A6%A6%E0%A7%8D%E0%A6%A7_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0_22.jpg',
      icon: Landmark,
      color: 'from-amber-500 to-orange-600',
      duration: '5-7 Days'
    },
    {
      id: 'beach',
      title: 'Beach & Islands',
      slug: 'beach-offshore-island-tours',
      tagline: 'Coastal Paradise',
      description: 'Pristine beaches and offshore island adventures',
      image: 'https://img.freepik.com/premium-photo/mabul-island-aerial-shot_1048944-16211031.jpg?semt=ais_hybrid&w=740&q=80',
      icon: Waves,
      color: 'from-cyan-500 to-blue-600',
      duration: '4-6 Days'
    },
    {
      id: 'hilltract',
      title: 'Hilltract & Tribal',
      slug: 'hilltract-tribal-tours',
      tagline: 'Authentic Village Life',
      description: 'Indigenous communities and mountain homestays',
      image: 'https://live.staticflickr.com/65535/53376255337_486bb38239_b.jpg',
      icon: Mountain,
      color: 'from-green-500 to-emerald-600',
      duration: '6-10 Days'
    },
    {
      id: 'rainforest',
      title: 'Rainforest & Sundarban',
      slug: 'rainforest-sundarban',
      tagline: 'Wild Bangladesh',
      description: 'Mangrove forests and Royal Bengal Tigers',
      image: 'https://media.istockphoto.com/id/1890258882/photo/the-bengal-tiger-from-mangroves-of-sundarbans.jpg?s=612x612&w=0&k=20&c=8DegBp1rzYDNFCsP4mPm9mV7X1mJvT6DQ_8ZnatMlpA=',
      icon: TreePine,
      color: 'from-lime-500 to-green-700',
      duration: '3-5 Days'
    },
    {
      id: 'tea',
      title: 'Tea & Plantations',
      slug: 'tea-rubber-plantations',
      tagline: 'Green Landscapes',
      description: 'Lush tea gardens and rubber estates',
      image: 'https://img.freepik.com/premium-vector/tea-plantation-with-house-top-it_1123160-11511.jpg?semt=ais_hybrid&w=740&q=80',
      icon: Coffee,
      color: 'from-teal-500 to-cyan-600',
      duration: '3-4 Days'
    },
    {
      id: 'photography',
      title: 'Photography Tour',
      slug: 'photography-tour',
      tagline: 'Capture The Moment',
      description: 'Perfect shots of landscapes and culture',
      image: 'https://bdscenictours.b-cdn.net/wp-content/uploads/2019/11/Dhaka-Photography-Tour.jpg',
      icon: Camera,
      color: 'from-purple-500 to-pink-600',
      duration: '7-14 Days'
    },
    {
      id: 'cultural',
      title: 'Cultural Tour',
      slug: 'cultural-tour',
      tagline: 'Living Traditions',
      description: 'Festivals, crafts, and local customs',
      image: 'https://i.pinimg.com/564x/e1/8a/09/e18a09a6b62d9dee34e08c91aaf10d13.jpg',
      icon: Users,
      color: 'from-rose-500 to-red-600',
      duration: '5-8 Days'
    },
    {
      id: 'rocket',
      title: 'Ride the Rocket',
      slug: 'ride-the-rocket',
      tagline: 'Iconic River Journey',
      description: 'Historic paddle steamer adventure',
      image: 'https://taabutour.com/wp-content/uploads/2016/01/rocket.jpg',
      icon: Ship,
      color: 'from-indigo-500 to-blue-700',
      duration: '2-3 Days'
    },
    {
      id: 'others',
      title: 'Custom Adventures',
      slug: 'others-tour',
      tagline: 'Your Way',
      description: 'Tailored experiences for unique interests',
      image: 'https://fantasykingdom.net/wp-content/uploads/2024/12/Water-875x1024.jpg',
      icon: Compass,
      color: 'from-[#6DAA44] to-green-700',
      duration: 'Flexible'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6DAA44]/20 via-black to-black" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://www.william-russell.com/wp-content/uploads/Dhaka-City-Bangladesh-William-Russell.jpg')" }}
          />
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6DAA44]/10 via-transparent to-purple-600/10 animate-pulse" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 leading-none">
            <span className="bg-gradient-to-r from-white via-[#6DAA44] to-white bg-clip-text text-transparent">
              EXPLORE
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 sm:mt-4 text-[#6DAA44]">
              BANGLADESH
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto px-4">
            Nine extraordinary journeys. One unforgettable destination.
          </p>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronRight className="text-[#6DAA44] mx-auto rotate-90" size={32} />
          </div>
        </div>
      </section>

      {/* Tours Grid - Masonry Style */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* First Row - 2 Large Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {tours.slice(0, 2).map((tour) => (
              <Link
                key={tour.id}
                to={`/tours/${tour.slug}`}
                className="group relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer block"
                onMouseEnter={() => setHoveredTour(tour.id)}
                onMouseLeave={() => setHoveredTour(null)}
              >
                {/* Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${tour.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-white/30">
                      <span className="text-xs sm:text-sm font-semibold">{tour.duration}</span>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <tour.icon size={20} />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="transform group-hover:translate-y-0 translate-y-2 sm:translate-y-4 transition-transform duration-500">
                    <div className="text-xs sm:text-sm font-bold text-white/80 mb-1 sm:mb-2">{tour.tagline}</div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-4">{tour.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-md">{tour.description}</p>
                    
                    <div className="group/btn bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#6DAA44] hover:text-white transition-all duration-300 w-fit text-sm sm:text-base">
                      <span>Discover More</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 sm:border-4 border-gray-700 opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-300 pointer-events-none" />
              </Link>
            ))}
          </div>

          {/* Second Row - 3 Medium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {tours.slice(2, 5).map((tour) => (
              <Link
                key={tour.id}
                to={`/tours/${tour.slug}`}
                className="group relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer block"
                onMouseEnter={() => setHoveredTour(tour.id)}
                onMouseLeave={() => setHoveredTour(null)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t ${tour.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold border border-white/30">
                      {tour.duration}
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-all duration-300">
                      <tour.icon size={18} />
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-white/80 mb-1 sm:mb-2">{tour.tagline}</div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-3">{tour.title}</h3>
                    <p className="text-xs sm:text-sm text-white/90 mb-3 sm:mb-4">{tour.description}</p>
                    
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300">
                      <span>Explore</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 sm:border-4 border-gray-700 opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-300 pointer-events-none" />
              </Link>
            ))}
          </div>

          {/* Third Row - 4 Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {tours.slice(5, 9).map((tour) => (
              <Link
                key={tour.id}
                to={`/tours/${tour.slug}`}
                className="group relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block"
                onMouseEnter={() => setHoveredTour(tour.id)}
                onMouseLeave={() => setHoveredTour(null)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t ${tour.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center ml-auto border border-white/30 group-hover:scale-110 transition-all duration-300">
                    <tour.icon size={16} />
                  </div>

                  <div>
                    <div className="text-xs font-bold text-white/80 mb-1">{tour.tagline}</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-1 sm:mb-2">{tour.title}</h3>
                    <div className="text-xs text-white/80">{tour.duration}</div>
                    
                    <div className="mt-2 sm:mt-4 flex items-center gap-1 sm:gap-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Tour</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 sm:border-4 border-gray-700 opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl md:rounded-3xl transition-opacity duration-300 pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-[#6DAA44] via-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <Compass className="mx-auto mb-3 sm:mb-4" size={48} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            CAN'T CHOOSE?
            <span className="block text-white/80 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-4">We'll Help You Decide</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Every journey is unique. Let us craft a personalized experience that matches your dreams, schedule, and adventure style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
            <Link 
              to="/custom-tour"
              className="bg-white text-[#6DAA44] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl text-center"
            >
              CREATE CUSTOM TOUR
            </Link>
            
            <Link 
              to="/contact"
              className="border-2 sm:border-4 border-white text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-black hover:bg-white hover:text-[#6DAA44] transform hover:scale-105 transition-all duration-300 text-center"
            >
              TALK TO EXPERT
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">9+</div>
              <div className="text-green-100 font-medium text-xs sm:text-sm md:text-base">Tour Options</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">20+</div>
              <div className="text-green-100 font-medium text-xs sm:text-sm md:text-base">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">4-6</div>
              <div className="text-green-100 font-medium text-xs sm:text-sm md:text-base">Group Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">100%</div>
              <div className="text-green-100 font-medium text-xs sm:text-sm md:text-base">Authentic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Strip */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto text-center">
          <Star className="text-[#6DAA44] mx-auto mb-4 sm:mb-6" size={32} fill="currentColor" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 italic mb-4 sm:mb-6 px-4">
            "An adventure that changed my perspective on travel. Authentic, respectful, and absolutely unforgettable."
          </blockquote>
          <div className="text-[#6DAA44] font-bold text-lg sm:text-xl md:text-2xl">— Happy Traveler, 2024</div>
        </div>
      </section>
    </div>
  );
};

export default OurTours;