import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Music, 
  Home, 
  Leaf, 
  Flower, 
  Star, 
  Quote,
  MapPin,
  Camera,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OurPeople = () => {
  
  const [isPlaying, setIsPlaying] = useState(false);

  const culturalFeatures = [
    {
      icon: Music,
      title: "Musical Heritage",
      description: "Mystical music with bamboo flutes and mouth organs"
    },
    {
      icon: Flower,
      title: "Nature Connection",
      description: "Deep appreciation for hills, rivers, and flora"
    },
    {
      icon: Heart,
      title: "Egalitarian Society",
      description: "No castes, equal voice in village affairs"
    },
    {
      icon: Leaf,
      title: "Sustainable Living",
      description: "Jhoom agriculture and traditional crafts"
    }
  ];

  const genderRoles = [
    {
      gender: "Women",
      responsibilities: [
        "Agriculture & farming",
        "Cooking & firewood gathering",
        "Cotton thread making & weaving",
        "Embroidery & beadwork",
        "Carrying heavy burdens"
      ],
      image: "https://live.staticflickr.com/291/31438937194_e3d9aba86f_b.jpg"
    },
    {
      gender: "Men",
      responsibilities: [
        "Agriculture & farming",
        "Home-building & construction",
        "Hunting & gathering",
        "Basket-weaving & instruments",
        "Musical entertainment"
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ploong.jpg/250px-Ploong.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 xl:py-28 bg-gradient-to-r from-[#6DAA44] to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/19/Goodmorning_Keokaradang_%286830453822%29.jpg')" 
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-lg px-4 py-2 md:px-6 md:py-3 rounded-full mb-4 md:mb-6 border border-white/30">
            <span className="text-green-100 font-semibold text-sm md:text-base">👥 MEET THE PEOPLE</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 md:mb-6">
            Our People
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed px-4">
            Meet the indigenous people of the Chittagong Hill Tracts - 
            The Mru tribe and their unique way of life preserved for centuries
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="bg-white/20 backdrop-blur-lg px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/30">
              <div className="text-xl md:text-2xl font-bold">14+</div>
              <div className="text-xs md:text-sm text-green-100">Tribes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/30">
              <div className="text-xl md:text-2xl font-bold">500+</div>
              <div className="text-xs md:text-sm text-green-100">Years of Culture</div>
            </div>
            <div className="bg-white/20 backdrop-blur-lg px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border border-white/30">
              <div className="text-xl md:text-2xl font-bold">100%</div>
              <div className="text-xs md:text-sm text-green-100">Authentic</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mru Tribe Introduction */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block bg-[#6DAA44]/10 px-3 py-1 md:px-4 md:py-2 rounded-full mb-3 md:mb-4">
                <span className="text-[#6DAA44] font-semibold text-sm md:text-base">HIDDEN TRIBE</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 md:mb-6">
                The <span className="text-[#6DAA44]">Mru</span>: A Hidden Tribe
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  The solitary, independent and peace-loving Mru people have lived in the hill tracts of 
                  southeastern Bangladesh and western Burma for centuries – their small population split 
                  almost in half by the border. Many scholars believe them to be the original inhabitants of the region.
                </p>
                
                <p>
                  Mru prefer to live on the hilltops, remote from even other hill tribes. Their villages are 
                  easily distinguished by sacred bamboo totems, presided over by guardian spirits. They live 
                  in large and cozy thatch-roofed bamboo cottages raised on stilts, with large open decks.
                </p>
              </div>

              {/* Cultural Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                {culturalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#6DAA44]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-[#6DAA44]" size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base">{feature.title}</div>
                      <div className="text-gray-500 text-xs md:text-sm">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Mru_family_in_traditional_household.jpg"
                  alt="Mru Tribe"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#6DAA44] text-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl md:shadow-2xl">
                <div className="text-xl md:text-2xl font-black">Mru</div>
                <div className="text-xs md:text-sm font-semibold">Original Inhabitants</div>
                <div className="text-xs text-green-100">Centuries of Heritage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gender Roles Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 md:mb-6">
              Tender <span className="text-[#6DAA44]">Genders</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The primary duty of both genders is agriculture, with complementary roles that create 
              a balanced and harmonious society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {genderRoles.map((role, index) => (
              <div key={index} className="bg-gray-50 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${role.image})` }} />
                <div className="p-4 md:p-6 lg:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{role.gender}</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {role.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-center gap-2 md:gap-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#6DAA44] rounded-full flex-shrink-0" />
                        <span className="text-gray-600 text-sm md:text-base">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Context */}
          <div className="mt-8 md:mt-12 bg-amber-50 rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-amber-200">
            <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
              <strong>Both sexes acknowledge women work harder than men.</strong> Brides are a little older than the grooms 
              to ensure a strong woman to run their household. Both genders care and tend the children equally. 
              Of all the tribes, they are the most affectionate and caring and would not imagine disciplining their children in any way.
            </p>
          </div>
        </div>
      </section>

      {/* Gracious People Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-[#6DAA44] to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                <img
                  src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/02/24/ethnic_minority.jpg"
                  alt="Mru Community"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white text-[#6DAA44] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl md:shadow-2xl">
                <div className="text-xl md:text-2xl font-black">Equal</div>
                <div className="text-xs md:text-sm font-semibold">Voice for All</div>
                <div className="text-xs text-green-600">No Hierarchies</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
                A Gracious People
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-green-100 leading-relaxed text-base md:text-lg">
                <p>
                  Mru are very egalitarian and have no castes and few hereditary positions. They are extremely 
                  non-confrontational and take pride in being patient & peaceful. Each household has an equal 
                  voice in all village affairs.
                </p>
                
                <p>
                  They are one of the few indigenous peoples who have staunchly retain their own unique culture, 
                  rituals and beliefs. With no functional leadership or hierarchies, this lack of higher-level 
                  social organization makes it difficult for them to avail of, or cooperate in joint efforts for 
                  'development' or cultural preservation.
                </p>
                
                <p>
                  Mru value their independence above all else, just desiring to pursue a traditional lifestyle 
                  free from domination or exploitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music & Aesthetics Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 md:mb-6">
                A Sublime <span className="text-[#6DAA44]">Aesthetic</span>
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  The Mru fully enjoy the beauty of nature – hills, rivers, flora and fauna. They are especially 
                  fond of music, through which they express this love of all things beautiful.
                </p>
                
                <p>
                  They sing all day – while farming, cooking, to their children, to themselves, to the trees, 
                  mountains – about anything that is pleasing. Words are often ad-lib, made up at the moment 
                  about nature, love and day-to-day activities.
                </p>

                <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 mt-4 md:mt-6">
                  <h4 className="font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                    <Music className="text-[#6DAA44]" size={18} />
                    Traditional Instruments
                  </h4>
                  <ul className="space-y-1 md:space-y-2 text-gray-600 text-sm md:text-base">
                    <li>• Bamboo flutes (prui) played by young women</li>
                    <li>• Mouth organs (ploong) played by young men</li>
                    <li>• Drums and gongs for accompaniment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                <img
                  src="https://royalbengaltours.com/wp-content/uploads/2021/05/Mru-tribes-enchanting-flute-performance-at-their-Chittagong-Hill-Tract-festival-477x322.webp"
                  alt="Mru Music"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="text-[#6DAA44]" size={20} />
                ) : (
                  <Play className="text-[#6DAA44]" size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial & Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 md:mb-6">
                A True <span className="text-[#6DAA44]">Mru Welcome</span>
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  As part of their traditional culture, the Mru simply love to entertain guests – who will 
                  surely come away richer by the association of these unique and interesting people.
                </p>
                
                <p>
                  Come visit them and the other fourteen native peoples of the Chittagong Hill Tracts. Stay in 
                  a 'Bawm' village – on the fabulous lotus-filled Boga lake shore – then trek up to Keokeradang, 
                  the highest peak (around 4,500 ft. above sea level) in Bangladesh, and return to enjoy a 'guitar evening'.
                </p>
                
                <p>
                  Visit the Buddhist 'Marmas' while in Bandarban and sip their 'home-brew' slowly, while relaxing 
                  by the Sangu river. Only two more of the unlimited opportunities that await, as you discover this 
                  region and it's peoples for yourself.
                </p>
              </div>

              <Link to="https://en.wikipedia.org/wiki/Mru_people" className="mt-6 md:mt-8 bg-[#6DAA44] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 md:gap-3 text-sm md:text-base">
                <MapPin size={18} />
                Visit the Mru People
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 text-white mt-8 lg:mt-0">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Quote className="text-white" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Visitor Experience</h3>
              </div>
              
              <blockquote className="text-green-100 leading-relaxed text-base md:text-lg mb-4 md:mb-6">
                "We were both deeply moved by experiencing life among the Mru people. Truthfully, it was one of our 
                more profound and rewarding experiences ever (and we've traveled widely over the years). We enjoyed 
                ourselves tremendously all the while learning about an amazing culture and a truly wonderful people — 
                please thank all our dear, dear friends in Lusain village for us. We'll never forget them and their hospitality."
              </blockquote>
              
              <div className="border-t border-green-400 pt-3 md:pt-4">
                <p className="font-semibold text-base md:text-lg">Dr. & Mrs. Johnstone</p>
                <p className="text-green-200 text-sm md:text-base">Edmonton, Alberta, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;