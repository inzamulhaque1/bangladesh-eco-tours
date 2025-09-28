/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Heart, 
  TreePine, 
  Globe,
  Award,
  Camera,
  MapPin,
  Leaf,
  Star,
  ArrowRight,
  Mountain,
  Waves,
  BookOpen,
  Shield,
  Target,
  Coffee,
  Home,
  Compass,
  Eye,
  Lightbulb,
  Handshake,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('who');
  const [imageIndex, setImageIndex] = useState(0);
  const [hoveredGoal, setHoveredGoal] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const heroImages = [
    'https://www.shutterstock.com/image-photo/moonlit-night-buildings-bangladesh-600nw-1433973968.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/National_Martyrs%27_Monument_of_Bangladesh_at_night.jpg/2560px-National_Martyrs%27_Monument_of_Bangladesh_at_night.jpg',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goals = [
    'Study alternatives to traditional agriculture',
    'Balance new and traditional healthcare, education & economics',
    'Respect village life through controlled tourism',
    'Provide sustainable supplementary income sources',
    'Value and promote indigenous skills and knowledge',
    'Work for protection of indigenous land rights',
    'Provide tourism benefits directly to local communities',
    'Provide intimate visits without burdening village resources',
    'Encourage recognition of indigenous land & human rights',
    'Encourage interactive forum of all stakeholders'
  ];

  const threats = [
    {
      title: 'Accelerated Logging',
      description: 'Threatening ecosystems in hill tracts and Sundarbans',
      image: 'https://dialogue.earth/content/uploads/2023/08/A-Bengal-tiger-swims-in-a-river-in-Sundarbans_Sushil-Chikane_Alamy_2FT4N6P.jpg',
      icon: TreePine
    },
    {
      title: 'Tobacco Cultivation',
      description: 'Leading to land erosion and pollution',
      image: 'https://ubinig.org/uploads/1538279383106.jpg',
      icon: Leaf
    },
    {
      title: 'Unrestricted Hunting',
      description: 'Endangering species crucial for forest regeneration',
      image: 'https://www.undp.org/sites/g/files/zskgke326/files/styles/scaled_image_large/public/2023-10/undp_bd_17a6108_0.jpg?itok=icDuXCDa',
      icon: Shield
    }
  ];

  return (
    <div className="bg-white">
      

      {/* Dynamic Hero Section */}
      <section className="relative h-screen overflow-hidden pt-16 lg:pt-0">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
                index === imageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Floating Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 sm:px-6">
          <div className="max-w-4xl space-y-6 lg:space-y-8">
            <div className="transform animate-fadeInUp">
              <div className="inline-block bg-white/20 backdrop-blur-lg px-4 py-2 lg:px-8 lg:py-4 rounded-full mb-4 lg:mb-6 border border-white/30">
                <span className="text-[#6DAA44] font-bold text-sm lg:text-lg">🌿 WHO WE ARE</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black leading-tight lg:leading-none mb-4 lg:mb-6 text-shadow-lg lg:text-shadow-2xl">
                <span className="block bg-gradient-to-r from-white via-[#6DAA44] to-white bg-clip-text text-transparent">
                  ABOUT US
                </span>
              </h1>
            </div>
            
            <div className="transform animate-fadeInUp delay-300">
              <p className="text-sm md:text-base font-light text-white/90 leading-relaxed max-w-3xl mx-auto px-2">
                Bangladesh Ecotours is made up from an experienced group of tribal leaders, ecotour operators, local guides, ecologists, social activists and other personalities dedicated to real and authentic ecotourism in every sense. We are the very first and the pioneer ecotour adventure tour & trek organization in Bangladesh.
              </p>
            </div>

            {/* Floating Stats */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 lg:gap-8 mt-8 lg:mt-12 transform animate-fadeInUp delay-500">
              <div className="bg-white/20 backdrop-blur-lg px-4 py-3 lg:px-6 lg:py-4 rounded-2xl border border-white/30 min-w-[120px]">
                <div className="text-xl lg:text-3xl font-bold text-[#6DAA44]">#1</div>
                <div className="text-xs lg:text-sm text-white/80">Pioneer in Bangladesh</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg px-4 py-3 lg:px-6 lg:py-4 rounded-2xl border border-white/30 min-w-[120px]">
                <div className="text-xl lg:text-3xl font-bold text-[#6DAA44]">20+</div>
                <div className="text-xs lg:text-sm text-white/80">Years of Experience</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg px-4 py-3 lg:px-6 lg:py-4 rounded-2xl border border-white/30 min-w-[120px]">
                <div className="text-xl lg:text-3xl font-bold text-[#6DAA44]">100%</div>
                <div className="text-xs lg:text-sm text-white/80">Authentic Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Tabbed Why Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-100 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 mb-4 lg:mb-6">
              WHY WE'RE <span className="text-[#6DAA44]">HERE</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Principle Card */}
            <div className="lg:col-span-2 bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg lg:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#6DAA44] rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">Our Principle</h3>
              </div>
              
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6">
                We are established on the principle that <span className="font-bold text-[#6DAA44]">sensitive tourism</span> under 
                the guidance of enlightened indigenous people may prove a viable, sustainable alternative resource 
                to local people to help <span className="font-bold text-[#6DAA44]">protect the environment</span> and their 
                traditional and diverse cultures.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Shield className="text-[#6DAA44]" size={16} />
                  <span className="text-sm lg:text-base text-gray-700 font-medium">Environmental Protection</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <Users className="text-[#6DAA44]" size={16} />
                  <span className="text-sm lg:text-base text-gray-700 font-medium">Cultural Preservation</span>
                </div>
              </div>
            </div>

            {/* Image Stack */}
            <div className="space-y-3 lg:space-y-4">
              <div 
                className="h-24 lg:h-32 bg-cover bg-center rounded-xl lg:rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-500"
                style={{ backgroundImage: "url('https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2025/09/27/world_tourism_day_bangladesh_file_photo_mohiuddin_26092025_8d18_myt.jpg')" }}
              />
              <div 
                className="h-24 lg:h-32 bg-cover bg-center rounded-xl lg:rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=400&h=300&fit=crop')" }}
              />
              <div 
                className="h-24 lg:h-32 bg-cover bg-center rounded-xl lg:rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-500"
                style={{ backgroundImage: "url('https://www.treehugger.com/thmb/F18mrsF253VAVCj3_QNZEXYuyfk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1050959030-654143af4f7a4f4eaff98cbc1b9fc7a2.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Focus Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 bg-[#6DAA44] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://uzbangla.com/wp-content/uploads/2019/05/13987729_10204820026499748_730179063_o-e1473333272353-1440x564_c.jpg')" }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6">OUR FOCUS</h2>
            <p className="text-lg lg:text-xl xl:text-2xl text-green-100 max-w-3xl mx-auto px-2">
              Real-time learning experiences that blend adventure with comfort, 
              culture with conservation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 h-full border border-white/20 hover:bg-white/20 transition-all duration-500">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users size={24} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">People & Culture</h3>
                <p className="text-green-100 leading-relaxed text-sm lg:text-base">
                  Close interaction with host families through eco-cottages and homestays. 
                  Local guides and experts lead every trek and special interest tour.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 h-full border border-white/20 hover:bg-white/20 transition-all duration-500">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TreePine size={24} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Environment</h3>
                <p className="text-green-100 leading-relaxed text-sm lg:text-base">
                  Pocketbook-friendly rates that help preserve the environment. 
                  Most profits stay in villages, directly supporting local initiatives.
                </p>
              </div>
            </div>

            <div className="group md:col-span-2 lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 h-full border border-white/20 hover:bg-white/20 transition-all duration-500">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Experience</h3>
                <p className="text-green-100 leading-relaxed text-sm lg:text-base">
                  Ideal blend of adventure and exploration with comfort and relaxation. 
                  Perfect for 'off-the-beaten-path' travelers who appreciate authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Philosophy */}
      <section className="py-12 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Main Image */}
                <div 
                  className="h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl relative overflow-hidden group"
                  style={{ backgroundImage: "url('https://bangladeshadventure.club/wp-content/uploads/2021/05/nikseng-1.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 group-hover:from-[#6DAA44]/60 transition-all duration-500" />
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white">
                    <p className="text-base lg:text-lg font-semibold">Small Groups, Big Impact</p>
                    <p className="text-xs lg:text-sm opacity-80">4-6 people ideal • Up to 12 welcome</p>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg lg:shadow-xl border-2 lg:border-4 border-[#6DAA44]">
                  <div className="text-xl lg:text-3xl font-black text-[#6DAA44]">4-6</div>
                  <div className="text-xs lg:text-sm text-gray-600">Perfect Group Size</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
              <div>
                <div className="inline-block bg-[#6DAA44]/10 px-4 py-2 lg:px-6 lg:py-3 rounded-full mb-3 lg:mb-4">
                  <span className="text-[#6DAA44] font-bold text-sm lg:text-base">Our Tours</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-800 leading-tight mb-4 lg:mb-6">
                  CUSTOM
                  <span className="text-[#6DAA44] block">ADVENTURES</span>
                </h2>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  We offer both <span className="font-bold text-[#6DAA44]">standard and customized tours</span>, 
                  with customization being our specialty and passion. Perfect for nature and culture enthusiasts 
                  who are 'off-the-beaten-path' types.
                </p>

                <div className="bg-gray-50 rounded-xl lg:rounded-2xl p-4 lg:p-6">
                  <h3 className="font-bold text-gray-800 mb-3 lg:mb-4 flex items-center gap-2">
                    <Compass className="text-[#6DAA44]" size={18} />
                    You're On The Right Track If You:
                  </h3>
                  <div className="space-y-2 lg:space-y-3">
                    {[
                      'Love nature, culture and unique experiences',
                      'Travel alone or with small groups',
                      'Are an \'off-the-beaten-path\' type',
                      'Can laugh when things get \'interesting\''
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 lg:gap-3">
                        <CheckCircle className="text-[#6DAA44] flex-shrink-0" size={14} />
                        <span className="text-gray-700 text-sm lg:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threats & Solutions */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 mb-3 lg:mb-4">
              LOCAL <span className="text-red-600">THREATS</span>
            </h2>
            <p className="text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the challenges helps us create solutions through sustainable ecotourism
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12">
            {threats.map((threat, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl lg:rounded-3xl shadow-lg hover:shadow-xl lg:hover:shadow-2xl transform hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="relative h-40 lg:h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${threat.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-3 lg:top-4 right-3 lg:right-4 w-8 h-8 lg:w-12 lg:h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <threat.icon className="text-white" size={14} />
                    </div>
                  </div>
                  
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 lg:mb-2">{threat.title}</h3>
                    <p className="text-gray-600 text-xs lg:text-sm">{threat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div className="bg-[#6DAA44] rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4">The Solution: Ecotourism</h3>
            <p className="text-base lg:text-lg xl:text-xl text-green-100 mb-4 lg:mb-6 max-w-4xl mx-auto">
              The government recently created a Heritage Area in the Sundarbans and signed agreements 
              with hill tract indigenous people. Ecotourism may well prove to be the only way to preserve 
              the region's unique cultural and vital biological diversity.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 lg:px-6 lg:py-3 rounded-full">
              <Shield className="text-white" size={16} />
              <span className="font-semibold text-sm lg:text-base">Preservation Through Tourism</span>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Grid */}
      <section className="py-12 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-center text-gray-800 mb-8 lg:mb-16">
            WHAT WE <span className="text-[#6DAA44]">SEEK TO DO</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4">
            {goals.map((goal, index) => (
              <div 
                key={index}
                className={`group p-4 lg:p-6 rounded-xl lg:rounded-2xl cursor-pointer transition-all duration-300 ${
                  index % 5 === 0 ? 'sm:col-span-2 lg:col-span-2 bg-[#6DAA44] text-white' :
                  index % 3 === 0 ? 'sm:col-span-2 lg:col-span-2 bg-gray-100 hover:bg-gray-200' :
                  'bg-white border border-gray-200 hover:border-[#6DAA44]'
                }`}
                onMouseEnter={() => setHoveredGoal(index)}
                onMouseLeave={() => setHoveredGoal(null)}
              >
                <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center mb-3 lg:mb-4 ${
                  index % 5 === 0 ? 'bg-white/20' : 'bg-[#6DAA44]/10'
                }`}>
                  <span className={`font-bold text-xs lg:text-sm ${
                    index % 5 === 0 ? 'text-white' : 'text-[#6DAA44]'
                  }`}>
                    {index + 1}
                  </span>
                </div>
                <p className={`text-xs lg:text-sm leading-relaxed font-medium ${
                  index % 5 === 0 ? 'text-white' : 
                  index % 3 === 0 ? 'text-gray-800' : 'text-gray-700'
                }`}>
                  {goal}
                </p>
              </div>
            ))}
          </div>

          {/* Investment Highlight */}
          <div className="mt-8 lg:mt-12 bg-gradient-to-r from-[#6DAA44] to-green-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6">Community Investment</h3>
              <p className="text-base lg:text-lg xl:text-xl text-green-100 mb-6 lg:mb-8">
                About <span className="font-bold text-white">10% of all our profits</span> stay in the villages and go toward 
                village health & education, cultural development and conservation projects – from tortoise hatcheries, 
                reforestation and single teacher village schools to traditional healthcare research and handicrafts development.
              </p>
              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                <div className="bg-white/20 rounded-xl lg:rounded-2xl px-4 py-3 lg:px-6 lg:py-4 min-w-[120px]">
                  <div className="text-2xl lg:text-3xl font-bold">10%</div>
                  <div className="text-xs lg:text-sm text-green-100">Profit to Villages</div>
                </div>
                <div className="bg-white/20 rounded-xl lg:rounded-2xl px-4 py-3 lg:px-6 lg:py-4 min-w-[120px]">
                  <div className="text-2xl lg:text-3xl font-bold">100%</div>
                  <div className="text-xs lg:text-sm text-green-100">Community Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 lg:mb-4">
              MEET THE <span className="text-[#6DAA44]">CREW</span>
            </h2>
            <p className="text-base lg:text-lg xl:text-xl text-gray-300">
              Serious about developing sustainable, interactive community-based ecotourism
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-16">
            {/* Didar */}
            <div className="group">
              <div className="relative">
                <div 
                  className="h-60 sm:h-80 w-full max-w-sm mx-auto rounded-2xl lg:rounded-3xl relative overflow-hidden group-hover:shadow-xl lg:group-hover:shadow-2xl transition-all duration-500 flex items-end justify-start bg-gray-800"
                >
                  <img
                    src="https://bangladeshecotours.com/wp-content/uploads/2018/02/DidarulAbsar-150x150.jpg"
                    alt="Didar"
                    className="object-contain h-full w-full"
                    style={{ background: "#222" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-1">DIDAR</h3>
                    <p className="text-[#6DAA44] font-semibold text-sm lg:text-base">"Khokan" • Founder</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-8 mt-4 lg:-mt-3 lg:ml-8 lg:mr-4 relative z-10 border border-gray-700">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <MapPin className="text-[#6DAA44]" size={16} />
                      <span className="text-gray-300 text-sm lg:text-base">Maheskhali Island</span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3">
                      <Award className="text-[#6DAA44]" size={16} />
                      <span className="text-gray-300 text-sm lg:text-base">Post Graduate, National University</span>
                    </div>
                    <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                      Founded Bangladesh's first ecotour organization. Passionate world traveler and 
                      coin collector with one of the finest ancient coin collections in the country.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mostafa */}
            <div className="group">
              <div className="relative">
                <div 
                  className="h-60 sm:h-80 w-full max-w-sm mx-auto rounded-2xl lg:rounded-3xl relative overflow-hidden group-hover:shadow-xl lg:group-hover:shadow-2xl transition-all duration-500 flex items-end justify-start bg-gray-800"
                >
                  <img
                    src="https://bangladeshecotours.com/wp-content/uploads/2018/02/MostafaChowdhury-150x150.jpg"
                    alt="Mostafa"
                    className="object-contain h-full w-full"
                    style={{ background: "#222" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-1">MOSTAFA</h3>
                    <p className="text-[#6DAA44] font-semibold text-sm lg:text-base">Senior Guide • Since 2001</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl lg:rounded-2xl p-4 lg:p-8 mt-4 lg:-mt-3 lg:ml-8 lg:mr-4 relative z-10 border border-gray-700">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <MapPin className="text-[#6DAA44]" size={16} />
                      <span className="text-gray-300 text-sm lg:text-base">Coastal Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3">
                      <Award className="text-[#6DAA44]" size={16} />
                      <span className="text-gray-300 text-sm lg:text-base">Bachelor of Commerce</span>
                    </div>
                    <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                      Expert trekker across South Asia. Passionate about walking, cooking, singing, 
                      photography, and meeting new people. Specializes in Chittagong Hill Tracts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Extended Network */}
          <div className="bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 border border-gray-700">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-8">Our Extended Network</h3>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <p className="text-gray-300 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                  We have a large network of experienced Bengali and Indigenous women and men who act as 
                  part or full-time tour managers, local guides, caretakers, teachers and office staff. 
                  Most importantly, we work with wonderful host families and communities who teach us 
                  how to do things the right way.
                </p>
                
                <div className="flex items-center gap-3 lg:gap-4">
                  <Users className="text-[#6DAA44]" size={20} />
                  <span className="text-lg font-semibold text-white">Community Partners</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 lg:gap-3">
                {[
                  'https://floodresilience.net/wp-content/uploads/2023/04/Rehana-explaining-the-DA-app_pA-1024x683.jpg',
                  'https://www.undp.org/sites/g/files/zskgke326/files/migration/bd/1-cover.jpg',
                  'https://media.licdn.com/dms/image/v2/C4D12AQEJVyZAxwMp2g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520126115682?e=2147483647&v=beta&t=VUOZGJBzVuTlsxjf0szuC6lDGj_Eu0u4-pEGNuNCLL4',
                  'https://www.dskbangladesh.org/wp-content/uploads/2024/12/CBO.jpg'
                ].map((img, index) => (
                  <div 
                    key={index}
                    className="h-16 lg:h-20 bg-cover bg-center rounded-lg lg:rounded-xl hover:scale-105 transition-all duration-300 border border-[#6DAA44]/20 hover:border-[#6DAA44]"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Enterprise Philosophy */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 mb-4 lg:mb-6">
              SOCIAL <span className="text-[#6DAA44]">ENTERPRISE</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 italic">
              "We think like a business, but act like a nonprofit – or is it the other way around?"
            </p>
          </div>

          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 lg:p-8 xl:p-12 bg-gradient-to-br from-[#6DAA44] to-green-600 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Our Reality</h3>
                <div className="space-y-4 lg:space-y-6">
                  <p className="text-green-100 leading-relaxed text-sm lg:text-base">
                    Bangladesh Ecotours is registered as a business and run like one, but in reality 
                    we are an association of dedicated tribal & village leaders, ecotourism professionals, 
                    indigenous activists, and conservationists.
                  </p>
                  
                  <div className="bg-white/20 rounded-xl lg:rounded-2xl p-4 lg:p-6">
                    <h4 className="font-bold text-white mb-2 lg:mb-3 text-sm lg:text-base">We Are:</h4>
                    <div className="grid grid-cols-2 gap-2 lg:gap-3 text-xs lg:text-sm text-green-100">
                      <div className="flex items-center gap-1 lg:gap-2">
                        <Heart size={12} />
                        <span>Caring</span>
                      </div>
                      <div className="flex items-center gap-1 lg:gap-2">
                        <Shield size={12} />
                        <span>Ethical</span>
                      </div>
                      <div className="flex items-center gap-1 lg:gap-2">
                        <Users size={12} />
                        <span>Social</span>
                      </div>
                      <div className="flex items-center gap-1 lg:gap-2">
                        <Lightbulb size={12} />
                        <span>Conscious</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8 xl:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">Our Mission</h3>
                <div className="space-y-4 lg:space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Cooperating to allow you to experience and enjoy the pristine wonders of Bangladesh – 
                    its natural beauty and good-natured people.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div className="bg-gray-50 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#6DAA44]/10 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <TreePine className="text-[#6DAA44]" size={16} />
                      </div>
                      <p className="text-xs lg:text-sm font-semibold text-gray-800">Conservation</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#6DAA44]/10 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <Users className="text-[#6DAA44]" size={16} />
                      </div>
                      <p className="text-xs lg:text-sm font-semibold text-gray-800">Community</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#6DAA44]/10 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <Heart className="text-[#6DAA44]" size={16} />
                      </div>
                      <p className="text-xs lg:text-sm font-semibold text-gray-800">Culture</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#6DAA44]/10 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <Camera className="text-[#6DAA44]" size={16} />
                      </div>
                      <p className="text-xs lg:text-sm font-semibold text-gray-800">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop')" }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 lg:mb-8">
            JOIN US TO
            <span className="text-[#6DAA44] block">EXPLORE</span>
          </h2>
          
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 lg:mb-12 leading-relaxed">
            Learn about and experience unique lifestyles and explore nature 
            in and around secluded hilltop tribal villages
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-white/20">
              <Mountain className="text-[#6DAA44] mx-auto mb-3 lg:mb-4" size={32} />
              <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2">Unique Lifestyles</h3>
              <p className="text-gray-300 text-xs lg:text-sm">Experience authentic tribal culture</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-white/20">
              <TreePine className="text-[#6DAA44] mx-auto mb-3 lg:mb-4" size={32} />
              <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2">Pristine Nature</h3>
              <p className="text-gray-300 text-xs lg:text-sm">Explore untouched landscapes</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-white/20 sm:col-span-2 lg:col-span-1">
              <Users className="text-[#6DAA44] mx-auto mb-3 lg:mb-4" size={32} />
              <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2">Village Communities</h3>
              <p className="text-gray-300 text-xs lg:text-sm">Connect with hilltop tribes</p>
            </div>
          </div>
          
          <div className="space-y-4 lg:space-y-6">
            <button className="bg-[#6DAA44] text-white px-8 py-3 lg:px-12 lg:py-4 rounded-full text-lg lg:text-xl font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-xl lg:shadow-2xl flex items-center gap-2 lg:gap-3 mx-auto">
              <Compass size={20} />
              Start Your Journey
              <ArrowRight size={16} />
            </button>
            
            <p className="text-gray-400 text-xs lg:text-sm">
              Experience Bangladesh like never before • Authentic • Sustainable • Unforgettable
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;