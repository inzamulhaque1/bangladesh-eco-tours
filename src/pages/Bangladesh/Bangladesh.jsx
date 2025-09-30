import React from 'react';
import { 
  MapPin, 
  Users, 
  Calendar, 
  TreePine, 
  Mountain, 
  Sun, 
  CloudRain,
  BookOpen,
  Award,
  Globe,
  Zap,
  Ruler
} from 'lucide-react';

const Bangladesh = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 xl:py-28 bg-gradient-to-r from-[#6DAA44] to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: "url('https://wallpapercat.com/w/full/7/f/a/1562213-2560x1440-desktop-hd-dhaka-bangladesh-background.jpg')" 
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg px-4 py-2 md:px-6 md:py-3 rounded-full mb-4 md:mb-6 border border-white/30">
            <span className="text-green-100 font-semibold text-sm md:text-base">🌍 ABOUT OUR COUNTRY</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 md:mb-6">
            Bangladesh
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed px-4">
            Earth's greenest country? Discover the land of rivers, rich culture, and warm hospitality 
            nestled in the crook of the Bay of Bengal.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="bg-white/20 backdrop-blur-lg px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/30">
              <div className="text-xl md:text-2xl font-bold">164M+</div>
              <div className="text-xs md:text-sm text-green-100">Population</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/30">
              <div className="text-xl md:text-2xl font-bold">144K</div>
              <div className="text-xs md:text-sm text-green-100">Sq. Km Area</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/30">
              <div className="text-xl md:text-2xl font-bold">85%</div>
              <div className="text-xs md:text-sm text-green-100">Rural Living</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 md:mb-6">
                EARTH'S <span className="text-[#6DAA44]">GREENEST COUNTRY</span>?
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Despite being considered one of the world's more crowded countries, well over 85% of the people live in small villages surrounded by nature. 'Daffy' Dhaka (the overstuffed capital) and Chittagong (the largest seaport) aside, rural Bangladesh feels relaxed, uncrowded and friendly.
                </p>
                
                <p>
                  Bangladesh is nestled in the crook of the Bay of Bengal, sharing borders with India and Myanmar, fronting onto the Bay of Bengal. Except for the hill tract regions, the country is largely flat and dominated by the braided strands of the Ganges, Brahmaputra, Jamuna and Karnaphuli rivers.
                </p>
                
                <p>
                  Although almost ignored as a tourist spot in the South Asian region, it offers much more than being just a 'tourist-free' destination.
                </p>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/db/Landscapes_of_Bangladesh_%2826878358979%29.jpg"
                  alt="Bangladesh Landscape"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#6DAA44] text-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl md:shadow-2xl">
                <div className="text-xl md:text-2xl font-black">85%</div>
                <div className="text-xs md:text-sm font-semibold">Rural Living</div>
                <div className="text-xs text-green-100">In Nature</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 md:mb-6">
              A FEW <span className="text-[#6DAA44]">BASIC STATS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <Globe className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Area</h3>
              <p className="text-gray-600 text-sm md:text-base">About 144,000 sq. km.</p>
              <p className="text-gray-500 text-xs md:text-sm">(about the size of Wisconsin)</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <Users className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Population</h3>
              <p className="text-gray-600 text-sm md:text-base">Over 164 million</p>
              <p className="text-gray-500 text-xs md:text-sm">(World's 8th most populous country)</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <MapPin className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Capital City</h3>
              <p className="text-gray-600 text-sm md:text-base">Dhaka</p>
              <p className="text-gray-500 text-xs md:text-sm">(8.5 million - one of the most densely populated areas)</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <Users className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">People</h3>
              <p className="text-gray-600 text-sm md:text-base">95% Bengali, 2% Bihari, 3% Indigenous</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <BookOpen className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Languages</h3>
              <p className="text-gray-600 text-sm md:text-base">Bengali, English (Binglish) and several tribal languages</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <Award className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Religion</h3>
              <p className="text-gray-600 text-sm md:text-base">85% Islam, 12% Hindu, 2% Buddhist and 1% Christian and Animist</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <Award className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Government</h3>
              <p className="text-gray-600 text-sm md:text-base">Constitutional Republic</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <Calendar className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Time</h3>
              <p className="text-gray-600 text-sm md:text-base">GMT/UTC plus six hours</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <Zap className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Electricity</h3>
              <p className="text-gray-600 text-sm md:text-base">220 volts, 50Hz</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <Ruler className="text-[#6DAA44]" size={20} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Weights and Measures</h3>
              <p className="text-gray-600 text-sm md:text-base">Metric</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bangladesh Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-[#6DAA44] to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
            WHY <span className="text-white">BANGLADESH</span>?
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
            Bangladesh enjoys a unique position. It is easily accessible from many popular destinations 
            in South Asia but it is still virtually ignored by commercial tourism.
          </p>
          
          <p className="text-base md:text-lg text-green-100 max-w-3xl mx-auto leading-relaxed px-4">
            To many, this a real advantage, and is particularly true of the Chittagong Hill Tracts (our specialty), 
            which until recently was a restricted zone. With the signing of an internationally acclaimed Peace Accord, 
            it now provides a truly pristine and exciting destination.
          </p>
        </div>
      </section>

      {/* Flora & Fauna Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 md:mb-6">
                FLORA & <span className="text-[#6DAA44]">FAUNA</span>
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Roughly two-thirds of Bangladesh is fertile arable land. The country is home to the Royal Bengal Tiger, leopards, Asiatic elephants (mostly migratory herds from Bihar), and a few remaining black bears.
                </p>
                
                <p>
                  There are also plenty of monkeys, langurs, gibbons (the only ape on the subcontinent), otters and mongooses. Reptiles include the sea tortoise, mud turtle, river tortoise, pythons, crocodiles and a variety of snakes.
                </p>
                
                <p>
                  There are more than 600 species of birds: the best known is the mynah but the most spectacular are the kingfishers and fishing eagles.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative mb-8 lg:mb-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                <img
                  src="https://www.remotelands.com/travelogues/app/uploads/2017/11/shutterstock_280866503.jpg"
                  alt="Bangladesh Wildlife"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-[#6DAA44] text-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl md:shadow-2xl">
                <div className="text-xl md:text-2xl font-black">600+</div>
                <div className="text-xs md:text-sm font-semibold">Bird Species</div>
                <div className="text-xs text-green-100">Rich Biodiversity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 md:mb-6">
              <span className="text-[#6DAA44]">CLIMATE</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The climate of Bangladesh is subtropical and tropical with temperatures ranging from an average daytime low of 21°C in the cold season to a top of 35°C in the hot season.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center shadow-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CloudRain className="text-blue-600" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">Monsoon Season</h3>
              <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">Late May to Early October</p>
              <p className="text-xs md:text-sm text-gray-500">'Wet' season - experience the country at its greenest</p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center shadow-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Calendar className="text-green-600" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">Cold Season</h3>
              <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">Mid-October to End February</p>
              <p className="text-xs md:text-sm text-gray-500">Best time to visit - dry and fresh weather</p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center shadow-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Sun className="text-orange-600" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">Hot Season</h3>
              <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">Mid-March to Mid-May</p>
              <p className="text-xs md:text-sm text-gray-500">'Little rainy season' - high humidity and heat</p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center shadow-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Zap className="text-red-600" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">Cyclone Season</h3>
              <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">May-June & Oct-Nov</p>
              <p className="text-xs md:text-sm text-gray-500">Exercise caution during these periods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 md:mb-6">
                <span className="text-[#6DAA44]">CULTURE</span>
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  The Bengal region has a multifaceted folk heritage, enriched by its ancient animist, Buddhist, Hindu, and Muslim roots. Weaving, pottery and terracotta sculpture are some of the earliest forms of artistic expression.
                </p>
                
                <p>
                  The best known literature of Bangladesh is the work of the great Bengali poets Rabindranath Tagore and Nasrul Islam. Folk theater is common at the village level and usually takes place during harvest time or at melas (village fairs).
                </p>
                
                <p>
                  The various tribal indigenous cultures have been largely undisturbed by foreign or 'modern' influences and provide a unique opportunity to experience.
                </p>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                <img
                  src="https://english.news.cn/20220504/f20e26a9cd3a495e8b60d7ce0e5f3fab/20220504f20e26a9cd3a495e8b60d7ce0e5f3fab_58d9b009-cbd1-4369-bb02-c3189aa53af1.jpg"
                  alt="Bangladesh Culture"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#6DAA44] text-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl md:shadow-2xl">
                <div className="text-xl md:text-2xl font-black">Rich</div>
                <div className="text-xs md:text-sm font-semibold">Heritage</div>
                <div className="text-xs text-green-100">Ancient Roots</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
            Ready to Explore Bangladesh?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
            Discover the hidden gem of South Asia - from vibrant cities to pristine nature, 
            rich culture to warm hospitality.
          </p>

          <button className="bg-[#6DAA44] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 md:gap-3 justify-center mx-auto text-sm md:text-base">
            <MapPin size={18} />
            Start Your Bangladesh Adventure
          </button>
        </div>
      </section>
    </div>
  );
};

export default Bangladesh;