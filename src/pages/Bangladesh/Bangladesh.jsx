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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-r from-[#6DAA44] to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1582578481740-c74e7ac4a61f?w=1600&h=900&fit=crop')" 
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full mb-6 border border-white/30">
            <span className="text-green-100 font-semibold">🌍 ABOUT OUR COUNTRY</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
            Bangladesh
          </h1>
          
          <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Earth's greenest country? Discover the land of rivers, rich culture, and warm hospitality 
            nestled in the crook of the Bay of Bengal.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/30">
              <div className="text-2xl font-bold">164M+</div>
              <div className="text-sm text-green-100">Population</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/30">
              <div className="text-2xl font-bold">144K</div>
              <div className="text-sm text-green-100">Sq. Km Area</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/30">
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm text-green-100">Rural Living</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6">
                EARTH'S <span className="text-[#6DAA44]">GREENEST COUNTRY</span>?
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
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

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1545562342-70b8e27ec6e9?w=800&h=600&fit=crop"
                  alt="Bangladesh Landscape"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#6DAA44] text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-2xl font-black">85%</div>
                <div className="text-sm font-semibold">Rural Living</div>
                <div className="text-xs text-green-100">In Nature</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6">
              A FEW <span className="text-[#6DAA44]">BASIC STATS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Area</h3>
              <p className="text-gray-600">About 144,000 sq. km.</p>
              <p className="text-gray-500 text-sm">(about the size of Wisconsin)</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Population</h3>
              <p className="text-gray-600">Over 164 million</p>
              <p className="text-gray-500 text-sm">(World's 8th most populous country)</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Capital City</h3>
              <p className="text-gray-600">Dhaka</p>
              <p className="text-gray-500 text-sm">(8.5 million - one of the most densely populated areas)</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">People</h3>
              <p className="text-gray-600">95% Bengali, 2% Bihari, 3% Indigenous</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Languages</h3>
              <p className="text-gray-600">Bengali, English (Binglish) and several tribal languages</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Religion</h3>
              <p className="text-gray-600">85% Islam, 12% Hindu, 2% Buddhist and 1% Christian and Animist</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Government</h3>
              <p className="text-gray-600">Constitutional Republic</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Time</h3>
              <p className="text-gray-600">GMT/UTC plus six hours</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Electricity</h3>
              <p className="text-gray-600">220 volts, 50Hz</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-xl flex items-center justify-center mb-4">
                <Ruler className="text-[#6DAA44]" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Weights and Measures</h3>
              <p className="text-gray-600">Metric</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bangladesh Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#6DAA44] to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            WHY <span className="text-white">BANGLADESH</span>?
          </h2>
          
          <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Bangladesh enjoys a unique position. It is easily accessible from many popular destinations 
            in South Asia but it is still virtually ignored by commercial tourism.
          </p>
          
          <p className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
            To many, this a real advantage, and is particularly true of the Chittagong Hill Tracts (our specialty), 
            which until recently was a restricted zone. With the signing of an internationally acclaimed Peace Accord, 
            it now provides a truly pristine and exciting destination.
          </p>
        </div>
      </section>

      {/* Flora & Fauna Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6">
                FLORA & <span className="text-[#6DAA44]">FAUNA</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
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

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1545562342-70b8e27ec6e9?w=800&h=600&fit=crop"
                  alt="Bangladesh Wildlife"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#6DAA44] text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-2xl font-black">600+</div>
                <div className="text-sm font-semibold">Bird Species</div>
                <div className="text-xs text-green-100">Rich Biodiversity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6">
              <span className="text-[#6DAA44]">CLIMATE</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              The climate of Bangladesh is subtropical and tropical with temperatures ranging from an average daytime low of 21°C in the cold season to a top of 35°C in the hot season.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CloudRain className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Monsoon Season</h3>
              <p className="text-gray-600 mb-2">Late May to Early October</p>
              <p className="text-sm text-gray-500">'Wet' season - experience the country at its greenest</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cold Season</h3>
              <p className="text-gray-600 mb-2">Mid-October to End February</p>
              <p className="text-sm text-gray-500">Best time to visit - dry and fresh weather</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sun className="text-orange-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Hot Season</h3>
              <p className="text-gray-600 mb-2">Mid-March to Mid-May</p>
              <p className="text-sm text-gray-500">'Little rainy season' - high humidity and heat</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-red-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Cyclone Season</h3>
              <p className="text-gray-600 mb-2">May-June & Oct-Nov</p>
              <p className="text-sm text-gray-500">Exercise caution during these periods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6">
                <span className="text-[#6DAA44]">CULTURE</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
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

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555854871-d4b5c3dfafea?w=800&h=600&fit=crop"
                  alt="Bangladesh Culture"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#6DAA44] text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-2xl font-black">Rich</div>
                <div className="text-sm font-semibold">Heritage</div>
                <div className="text-xs text-green-100">Ancient Roots</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Ready to Explore Bangladesh?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover the hidden gem of South Asia - from vibrant cities to pristine nature, 
            rich culture to warm hospitality.
          </p>

          <button className="bg-[#6DAA44] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center mx-auto">
            <MapPin size={20} />
            Start Your Bangladesh Adventure
          </button>
        </div>
      </section>
    </div>
  );
};

export default Bangladesh;