/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Mountain, 
  Users, 
  TreePine, 
  Waves, 
  Camera, 
  Heart,
  MapPin,
  Calendar,
  Star,
  ArrowRight,
  Leaf,
  Home,
  Globe,
  Award
} from 'lucide-react';

const CommunityEcotourism = () => {
  const [isVisible, setIsVisible] = useState({});
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const FloatingIcon = ({ icon: Icon, className = "" }) => (
    <div className={`absolute opacity-5 md:opacity-10 animate-pulse ${className} hidden sm:block`}>
      <Icon size={isMobile ? 24 : 40} className="text-[#6DAA44]" />
    </div>
  );

  return (
    <div className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="inset-0 pointer-events-none z-0">
        <FloatingIcon icon={Leaf} className="top-10 left-4 md:top-20 md:left-10 animate-bounce" />
        <FloatingIcon icon={TreePine} className="top-20 right-4 md:top-40 md:right-20 animate-pulse" />
        <FloatingIcon icon={Mountain} className="bottom-20 left-4 md:bottom-40 md:left-20 animate-bounce" />
        <FloatingIcon icon={Waves} className="bottom-10 right-4 md:bottom-20 md:right-10 animate-pulse" />
      </div>

      {/* Hero Introduction */}
      <section 
        id="hero" 
        className={`relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[#6DAA44] via-green-600 to-[#6DAA44] bg-clip-text text-transparent leading-tight">
            Community ecotourism
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Unique cultural learning opportunities and village home stays in the hill tribe regions of Bangladesh
          </p>
        </div>
      </section>

      {/* Section 1: Cultural Encounters */}
      <section 
        id="cultural" 
        className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 transition-all duration-1000 ${
          isVisible.cultural ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Grid */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 h-64 sm:h-80 md:h-96">
                <div className="space-y-3 sm:space-y-4">
                  <div 
                    className="h-20 sm:h-28 md:h-32 bg-cover bg-center rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                    style={{ backgroundImage: "url('https://newlinesmag.com/wp-content/uploads/GettyImages-2165952517-web.jpg')" }}
                  >
                    <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Users className="absolute top-1 right-1 sm:top-2 sm:right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={isMobile ? 16 : 20} />
                  </div>
                  <div 
                    className="h-32 sm:h-40 md:h-52 bg-cover bg-center rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                    style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/National_Assembly_of_Bangladesh_%2810%29.jpg/1200px-National_Assembly_of_Bangladesh_%2810%29.jpg')" }}
                  >
                    <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Heart className="absolute top-1 right-1 sm:top-2 sm:right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={isMobile ? 16 : 20} />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
                  <div 
                    className="h-32 sm:h-40 md:h-52 bg-cover bg-center rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                    style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/0/01/Dumlong_Haphong.jpg')" }}
                  >
                    <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Mountain className="absolute top-1 right-1 sm:top-2 sm:right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={isMobile ? 16 : 20} />
                  </div>
                  <div 
                    className="h-20 sm:h-28 md:h-32 bg-cover bg-center rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                    style={{ backgroundImage: "url('https://lawyersclubbangladesh.com/en/wp-content/uploads/2019/07/9dd65-boat_in_river_bangladesh.jpg')" }}
                  >
                    <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <TreePine className="absolute top-1 right-1 sm:top-2 sm:right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={isMobile ? 16 : 20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-white shadow-md px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                <Users className="text-[#6DAA44]" size={isMobile ? 16 : 18} />
                <span className="text-[#6DAA44] font-semibold text-sm sm:text-base">People-to-People Exchanges</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Get Off The
                <span className="text-[#6DAA44] block">Beaten Track</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Interact with indigenous and tribal folk to experience and learn about their unique completely nonviolent culture and lifestyle. These are 'people-meet-people' encounters at their very best.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Leaf, text: "Respecting environment and culture" },
                  { icon: Heart, text: "Genuine cultural immersion" },
                  { icon: Award, text: "Only Eco-cultural tour group in country" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 group hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-full flex items-center justify-center group-hover:bg-[#6DAA44]/20 group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <item.icon className="text-[#6DAA44]" size={isMobile ? 16 : 20} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Adventures */}
      <section 
        id="adventures" 
        className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#6DAA44]/5 to-transparent transition-all duration-1000 ${
          isVisible.adventures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 bg-white shadow-md px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                <Waves className="text-[#6DAA44]" size={isMobile ? 16 : 18} />
                <span className="text-[#6DAA44] font-semibold text-sm sm:text-base">Unique Adventures</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Float Down
                <span className="text-[#6DAA44] block">Shimmering Rivers</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Float down shimmering rivers in wooden country boats, trek through lush forests to discover hidden Mru villages on verdant hilltops. After lounging on palm-fringed beaches, explore ancient Buddhist and Hindu temples.
              </p>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Waves, title: "River Cruises", desc: "Wooden country boats" },
                  { icon: TreePine, title: "Forest Treks", desc: "Hidden villages" },
                  { icon: Camera, title: "Beach Relaxation", desc: "Palm-fringed shores" },
                  { icon: Mountain, title: "Temple Visits", desc: "Ancient sites" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                  >
                    <item.icon className="text-[#6DAA44] mb-1 sm:mb-2 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300" size={isMobile ? 20 : 24} />
                    <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-600 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 h-64 sm:h-80 md:h-96">
                <div 
                  className="col-span-2 bg-cover bg-center rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                  style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/tatulia-river-bauphal-coastal-patuakhali-600nw-2042462789.jpg')" }}
                >
                  <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Waves className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={isMobile ? 16 : 24} />
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <div 
                    className="h-16 sm:h-28 md:h-32 bg-cover bg-center rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                    style={{ backgroundImage: "url('https://plantlet.org/wp-content/uploads/2020/11/Sundarbans-national-park__1552155522220-550x330.jpg')" }}
                  >
                    <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div 
                    className="h-16 sm:h-28 md:h-32 bg-cover bg-center rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                    style={{ backgroundImage: "url('https://sandee.com/_next/image?url=https%3A%2F%2Fcdn.sandee.com%2F45579_1050_700.avif&w=3840&q=75')" }}
                  >
                    <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div 
                  className="col-span-3 h-32 sm:h-48 md:h-64 bg-cover bg-center rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                  style={{ backgroundImage: "url('https://www.travelandexplorebd.com/storage/app/public/posts/September2019/qd8qYEXetmx2dZ9mbmZr.jpg')" }}
                >
                  <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <TreePine className="absolute top-1 right-1 sm:top-2 sm:right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={isMobile ? 16 : 20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Personalized Experience */}
      <section 
        id="personalized" 
        className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 transition-all duration-1000 ${
          isVisible.personalized ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Mosaic */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-4 gap-1 sm:gap-2 h-48 sm:h-64 md:h-80">
                <div 
                  className="col-span-2 row-span-2 bg-cover bg-center rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                  style={{ backgroundImage: "url('https://i.pinimg.com/originals/a5/9e/cb/a59ecb65a81776382b77fadba9d211e2.jpg')" }}
                >
                  <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Home className="absolute top-1 right-1 sm:top-2 sm:right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={isMobile ? 16 : 20} />
                </div>
                
                {[
                  "https://wallpapers.com/images/featured/bangladesh-pictures-3klwpps1z4n9ujv0.jpg",
                  "https://images.pexels.com/photos/32485378/pexels-photo-32485378.jpeg?cs=srgb&dl=pexels-aminulislambulbul-32485378.jpg&fm=jpg",
                  "https://www.fao.org/images/newsroomlibraries/stories-images/630ad573306e8d1af0d977a68a1b812e.jpg?sfvrsn=445fe168_10",
                  "https://upload.wikimedia.org/wikipedia/commons/8/87/Land_Ploughing_with_Cows_in_Rural_Bangladesh.jpg",
                  "https://blog.brac.net/wp-content/uploads/2018/01/Sumon-Yusuf_BD_Winter_MG_4392B_Edited.jpg",
                  "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/64002/win.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/6/63/Ratargul_Swamp_Forest%2C_Sylhet..jpg",
                  "https://images.unsplash.com/photo-1599074914978-2946b69e5a4a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZ2xhZGVzaCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                ].slice(0, isMobile ? 4 : 8).map((img, index) => (
                  <div 
                    key={index}
                    className={`bg-cover bg-center rounded sm:rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                      index >= 4 && !isMobile ? 'row-span-2' : ''
                    }`}
                    style={{ backgroundImage: `url('${img}')` }}
                  >
                    <div className="absolute inset-0 bg-[#6DAA44]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-white shadow-md px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                <Star className="text-[#6DAA44]" size={isMobile ? 16 : 18} />
                <span className="text-[#6DAA44] font-semibold text-sm sm:text-base">Tailor-Made Experience</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Small Groups,
                <span className="text-[#6DAA44] block">Big Memories</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Tailor-made, personalized itineraries from two days to two weeks. Small groups of 2-6 people, flexible enough to minimize impact on traditional cultures while creating lasting friendships.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-xl md:rounded-2xl shadow-lg">
                <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <Award className="text-[#6DAA44]" size={isMobile ? 18 : 20} />
                  Our Hallmarks
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Local family accommodations & quaint lodges",
                    "Select vegetarian cuisine & great companionship", 
                    "Experienced caring guides & proven reliability",
                    "Living among the people we serve"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 text-gray-600">
                      <ChevronRight className="text-[#6DAA44] flex-shrink-0 mt-0.5" size={isMobile ? 14 : 16} />
                      <span className="text-xs sm:text-sm leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        id="cta" 
        className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#6DAA44]/10 to-[#6DAA44]/5 transition-all duration-1000 ${
          isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 sm:p-8 md:p-12 transform hover:scale-105 transition-all duration-500">
            {/* Mru People Images Grid */}
            <div className="mb-6 md:mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                <img
                  src="https://thumbs.dreamstime.com/b/bangladeshi-indigenous-artists-perform-dance-music-food-festival-dhaka-bangladesh-august-peoples-organize-two-days-287752348.jpg"
                  alt="Mru people 1"
                  className="h-20 sm:h-24 md:h-32 w-full object-cover rounded-lg sm:rounded-xl shadow-md border-2 border-[#6DAA44]"
                />
                <img
                  src="https://live.staticflickr.com/65535/52854000728_0f0a2f020c_b.jpg"
                  alt="Mru people 2"
                  className="h-20 sm:h-24 md:h-32 w-full object-cover rounded-lg sm:rounded-xl shadow-md border-2 border-[#6DAA44]"
                />
                <img
                  src="https://www.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/mro.jpg"
                  alt="Mru people 3"
                  className="h-20 sm:h-24 md:h-32 w-full object-cover rounded-lg sm:rounded-xl shadow-md border-2 border-[#6DAA44] hidden sm:block"
                />
              </div>
              <span className="block mt-2 text-xs sm:text-sm text-gray-500">Mru people of Bangladesh</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Join Us in a <span className="text-[#6DAA44]">Traditional Dance</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Come and join us in a traditional dance in honor of a banana leaf delivered by a cow, 
              with a special message from the creator to the Mru people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="group bg-[#6DAA44] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center">
                <Calendar size={isMobile ? 18 : 20} />
                Book Your Journey
                <ArrowRight size={isMobile ? 16 : 18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-[#6DAA44] text-[#6DAA44] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-[#6DAA44] hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center">
                <MapPin size={isMobile ? 18 : 20} />
                Explore Locations
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityEcotourism;