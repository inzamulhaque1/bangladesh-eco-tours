import React from 'react';
import { MapPin, Users, Mountain, Waves, TreePine, Camera, Compass, Heart, ArrowRight } from 'lucide-react';

const PlacesOfInterest = () => {
  const places = [
    {
      id: 1,
      name: "DHAKA",
      description: "The rather crowded capital city of Bangladesh sits on the bustling north bank of the Buriganga River, roughly in the center of the country. Here the lights are as bright as they get in Bangladesh, and there's a range of goods and services lacking elsewhere in the country.",
      highlights: [
        "Lalbagh Fort - unfinished fort dating from 1678",
        "Ahsan Manzil - pink baroque-style palace museum",
        "Sadarghat waterfront - fascinating river life panorama",
        "Rickshaw capital of the world with 300,000 colorful rickshaws"
      ],
      image: "https://images.unsplash.com/photo-1582578481740-c74e7ac4a61f?w=800&h=600&fit=crop",
      type: "city",
      icon: Users
    },
    {
      id: 2,
      name: "SUNDARBAN MANGROVES",
      description: "The Sundarbans are the largest mangrove forest in the world, stretching 80km into the Bangladeshi hinterland from the coast. They cover an area of 38,500 sq. km, of which about one-third is water.",
      highlights: [
        "Largest mangrove forest in the world",
        "Home to 400 Royal Bengal tigers",
        "Thousands of spotted deer",
        "Arrive via colonial 'Rocket' paddle-wheeler"
      ],
      image: "https://images.unsplash.com/photo-1545562342-70b8e27ec6e9?w=800&h=600&fit=crop",
      type: "nature",
      icon: TreePine
    },
    {
      id: 3,
      name: "CHITTAGONG",
      description: "The second largest city in Bangladesh sits on the bank of the Karnaphuli River and has an interesting old waterfront area known as Sadarghat which reflects the importance of river trade to the city's growth.",
      highlights: [
        "Sadarghat old waterfront area",
        "Portuguese enclave of Paterghata",
        "Shahi Jama-e-Masjid and Qadam Mubarak Mosque",
        "Ethnological Museum with tribal displays"
      ],
      image: "https://images.unsplash.com/photo-1573459914912-990b6fa6b033?w=800&h=600&fit=crop",
      type: "city",
      icon: Compass
    },
    {
      id: 4,
      name: "COX'S BAZAR",
      description: "Bangladesh's main beach resort is near the Myanmar border in an area where Rohingya refugees have settled. It has a slight Burmese Buddhist flavor and has basic amenities to service visitors.",
      highlights: [
        "World's longest natural sea beach",
        "Maheskhali Island with ancient Hindu temple",
        "Secluded southern beaches",
        "Tribal handloom cloth weaving"
      ],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      type: "beach",
      icon: Waves
    },
    {
      id: 5,
      name: "MAINAMATI",
      description: "This 8th-century Buddhist Vihara was formerly one of the biggest Buddhist monasteries south of the Himalayas. Although in decay, the overall plan of the temple complex is easy to figure out.",
      highlights: [
        "8th-century Buddhist monastery",
        "Large quadrangle with monks' cells",
        "Well-preserved terra-cotta bas-reliefs",
        "Small museum with religious objects"
      ],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      type: "historical",
      icon: Heart
    },
    {
      id: 6,
      name: "ST. MARTIN'S ISLAND",
      description: "This small coral island is about 14km southwest of Teknaf. It is a quaint tropical paradise with coconut palm fringed beaches and bountiful marine life.",
      highlights: [
        "Small coral island paradise",
        "Clean and peaceful - no mosquitoes",
        "Walk around island in few hours",
        "Local fishing community"
      ],
      image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=600&fit=crop",
      type: "island",
      icon: Waves
    },
    {
      id: 7,
      name: "CHITTAGONG HILL TRACTS",
      description: "In the far southeastern corner, bordering Myanmar, the Chittagong Hill Tracts cover three distinct districts. Decidedly untypical of Bangladesh in topography and culture.",
      highlights: [
        "Steep jungle hills and Buddhist tribal peoples",
        "Home to 14 unique tribes",
        "Traditional tribal kings and village headmen",
        "Pristine foothill ecological environment"
      ],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      type: "hills",
      icon: Mountain
    },
    {
      id: 8,
      name: "RANGAMATI",
      description: "A lush and verdant rural area belonging to the Chakma tribe, visitors are welcome here to see Kaptai Lake ringed by thick tropical and semi-evergreen forests.",
      highlights: [
        "Kaptai Lake with tropical forests",
        "Thatched fishing villages on lake shore",
        "Chakma tribal area",
        "Boating and swimming opportunities"
      ],
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
      type: "lake",
      icon: Waves
    },
    {
      id: 9,
      name: "BANDARBAN",
      description: "The capital of the hill district of the same name and home to the Bohmong tribal king, this place is much smaller and quainter than Rangamati.",
      highlights: [
        "Home to Bohmong tribal king",
        "Base for Sangu river journeys",
        "Weekly Tuesday tribal market",
        "Buddhist water festival every April"
      ],
      image: "https://images.unsplash.com/photo-1464822759849-e41ac67e5d73?w=800&h=600&fit=crop",
      type: "hills",
      icon: Mountain
    },
    {
      id: 10,
      name: "ALIKADAM",
      description: "A very small market town where you can take a boat up the Matamurhi river and hike to visit interior tribal villages. Bangladesh Ecotours runs a small ecolodge here.",
      highlights: [
        "Monday weekly market",
        "Matamurhi river boat journeys",
        "Ecolodge and tribal homestays",
        "Tripuri, Tanchangya, Marma and Mru villages"
      ],
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop",
      type: "village",
      icon: Users
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      city: 'bg-blue-100 text-blue-800',
      nature: 'bg-green-100 text-green-800',
      beach: 'bg-cyan-100 text-cyan-800',
      historical: 'bg-amber-100 text-amber-800',
      island: 'bg-purple-100 text-purple-800',
      hills: 'bg-orange-100 text-orange-800',
      lake: 'bg-sky-100 text-sky-800',
      village: 'bg-emerald-100 text-emerald-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-r from-[#6DAA44] to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&h=900&fit=crop')" 
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full mb-6 border border-white/30">
            <span className="text-green-100 font-semibold">🌍 EXPLORE BANGLADESH</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
            Places of
            <span className="block text-white mt-2">Interest</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Discover the diverse landscapes, rich culture, and hidden gems of Bangladesh - 
            from bustling cities to pristine natural wonders and tribal communities
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/30">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-green-100">Unique Destinations</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/30">
              <div className="text-2xl font-bold">14</div>
              <div className="text-sm text-green-100">Tribal Communities</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/30">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-green-100">Authentic Experiences</div>
            </div>
          </div>
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6">
              Discover <span className="text-[#6DAA44]">Bangladesh</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From the world's largest mangrove forest to ancient Buddhist monasteries and tribal hill tracts, 
              Bangladesh offers unparalleled diversity for the adventurous traveler
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {places.map((place) => (
              <div 
                key={place.id}
                className="group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(place.type)}`}>
                      {place.type.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <place.icon className="text-white" size={20} />
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">{place.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm lg:text-base flex-1">
                    {place.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                      <MapPin className="text-[#6DAA44]" size={16} />
                      Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {place.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#6DAA44] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - Fixed at bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <button className="w-full bg-[#6DAA44] text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                      <Compass size={18} />
                      Explore {place.name.split(' ')[0]}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Focus Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sundarban Focus */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1545562342-70b8e27ec6e9?w=800&h=600&fit=crop"
                  alt="Sundarban Mangroves"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#6DAA44] text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-2xl font-black">#1</div>
                <div className="text-sm font-semibold">Largest Mangrove</div>
                <div className="text-xs text-green-100">In the World</div>
              </div>
            </div>
            
            <div>
              <div className="inline-block bg-[#6DAA44]/10 px-4 py-2 rounded-full mb-4">
                <span className="text-[#6DAA44] font-semibold">NATURE WONDER</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6">
                Explore <span className="text-[#6DAA44]">SUNDARBAN MANGROVES</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Sundarbans are the largest mangrove forest in the world, stretching 80km into the 
                Bangladeshi hinterland from the coast. Home to the Royal Bengal tiger and countless 
                species of wildlife.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <TreePine className="text-[#6DAA44]" size={20} />
                  <span className="font-semibold text-gray-800">38,500 sq. km</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-[#6DAA44]" size={20} />
                  <span className="font-semibold text-gray-800">400+ Tigers</span>
                </div>
              </div>

              <button className="bg-[#6DAA44] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <Compass size={20} />
                Discover Sundarbans
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Chittagong Focus */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-[#6DAA44]/10 px-4 py-2 rounded-full mb-4">
                <span className="text-[#6DAA44] font-semibold">COASTAL CITY</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6">
                Explore <span className="text-[#6DAA44]">CHITTAGONG</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The second largest city in Bangladesh sits on the bank of the Karnaphuli River with 
                an interesting old waterfront area that reflects the importance of river trade to 
                the city's growth and history.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#6DAA44]" size={20} />
                  <span className="font-semibold text-gray-800">Sadarghat Waterfront</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="text-[#6DAA44]" size={20} />
                  <span className="font-semibold text-gray-800">Portuguese Heritage</span>
                </div>
              </div>

              <button className="bg-[#6DAA44] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <Camera size={20} />
                Explore Chittagong
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573459914912-990b6fa6b033?w=800&h=600&fit=crop"
                  alt="Chittagong"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#6DAA44] text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-2xl font-black">#2</div>
                <div className="text-sm font-semibold">Largest Port</div>
                <div className="text-xs text-green-100">In Bangladesh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Ready to Explore?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join us on an unforgettable journey through Bangladesh's most fascinating destinations. 
            Experience authentic culture, pristine nature, and warm hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#6DAA44] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center">
              <Compass size={20} />
              Start Your Adventure
              <ArrowRight size={18} />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center">
              <Camera size={20} />
              View All Tours
            </button>
          </div>
          
          <p className="text-gray-400 mt-6 text-sm">
            Custom tours available • Small groups • Expert local guides • Sustainable tourism
          </p>
        </div>
      </section>
    </div>
  );
};

export default PlacesOfInterest;