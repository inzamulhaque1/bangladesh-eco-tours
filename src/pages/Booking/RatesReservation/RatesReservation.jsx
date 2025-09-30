import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  DollarSign,
  Star,
  Users,
  Heart,
  Clock,
  Shield,
  Mail,
  FileText,
  Compass,
  Sparkles,
  ChevronRight,
  Backpack,
  Crown,
  MapPin,
  Globe,
  CheckCircle
} from 'lucide-react';

const RatesReservation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 md:mt-12">
      {/* Hero Section with spacing for navbar */}
      <section className="relative pt-20 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6DAA44]/50 via-transparent to-[#6DAA44]/50" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://www.travelopro.com/public/images/contact/banner-7.png')" }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-none">
            <span className="bg-gradient-to-r from-[#6DAA44] via-green-600 to-emerald-600 bg-clip-text text-transparent">
              RATES &
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 md:mt-4 text-gray-700">
              RESERVATION
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Simple booking process for your unforgettable Bangladeshi adventure
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Information Section */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg md:shadow-2xl border border-green-100 transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-800">INFORMATION</h2>
                    <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#6DAA44] to-green-600 rounded-full mt-1 md:mt-2"></div>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  <p className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-[#6DAA44] flex-shrink-0 mt-0.5 md:mt-1" size={16} />
                    We recommend you make your booking as early as possible to ensure you get your desired time slot and allow us time to arrange your trip.
                  </p>
                  <p className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-[#6DAA44] flex-shrink-0 mt-0.5 md:mt-1" size={16} />
                    To avoid undue pressure on the environment and local culture, our tours are limited to very small groups and are well-spaced out. You are never arriving while another group is leaving.
                  </p>
                  <p className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="text-[#6DAA44] flex-shrink-0 mt-0.5 md:mt-1" size={16} />
                    We recommend that you plan ahead and make your booking 60 days in advance (our normal reservation period). A month advance is often possible, so don't despair. We try to be flexible to your needs.
                  </p>
                </div>
              </div>

              {/* Booking Deposit Section */}
              <div className="bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-lg md:shadow-2xl transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <DollarSign className="text-white" size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black">BOOKING DEPOSIT</h2>
                    <div className="w-16 md:w-20 h-1 bg-white/50 rounded-full mt-1 md:mt-2"></div>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-green-50 leading-relaxed">
                  <p className="text-lg sm:text-xl md:text-xl font-semibold">
                    A deposit of <span className="text-white font-bold text-xl sm:text-2xl">US$100-200 per guest</span> is needed to book your tour.
                  </p>
                  <p>
                    The remainder is payable 30 days before your tour begins. For further details and to read our terms and conditions along with a booking form, please go to our reservations page.
                  </p>
                  <p className="font-semibold">
                    To request a personalized or custom tour, just email us.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                    <Link 
                      to="/reservations"
                      className="bg-white text-[#6DAA44] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
                    >
                      <FileText size={16} />
                      RESERVATIONS
                    </Link>
                    
                    <a 
                      href="mailto:info@bangladeshtours.com"
                      className="border border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-[#6DAA44] transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Mail size={16} />
                      EMAIL US
                    </a>
                  </div>
                </div>
              </div>

              {/* Budget Travel Section */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg md:shadow-2xl border border-amber-200 transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Backpack className="text-white" size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-800">Travelling on a budget?</h2>
                    <div className="w-16 md:w-20 h-1 bg-amber-500 rounded-full mt-1 md:mt-2"></div>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  <p>
                    Are you backpacking or traveling on a budget? Don't be scared by the basic rates shown above. Contact us to find out what we can do. If you're willing to rough it a bit, we are perhaps the only tour company in Bangladesh who love to work with backpackers and help you in any way we can.
                  </p>
                  <p>
                    We can almost always work something out together and provide you with help and plenty of free advice. We can also assist in putting you in contact with like-minded individuals to join into small groups, whether they booked our tours or not.
                  </p>
                  
                  <div className="bg-amber-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-200 mt-4 md:mt-6">
                    <div className="flex items-center gap-2 md:gap-3 text-amber-800 font-bold text-base sm:text-lg">
                      <Heart className="text-amber-500" size={18} />
                      We love helping backpackers explore Bangladesh authentically!
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Services Section */}
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-lg md:shadow-2xl transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <Crown className="text-white" size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black">Extra Pampering?</h2>
                    <div className="w-16 md:w-20 h-1 bg-white/50 rounded-full mt-1 md:mt-2"></div>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-purple-50 leading-relaxed">
                  <p>
                    Alternatively, if you need just that little extra pampering – a few extra options or upgrades, or are doing some research project, searching for a long-lost friend (or legend), or have some new idea of any kind, we're only too willing and able to coordinate it.
                  </p>
                  <p className="font-semibold">
                    This is our specialty and where we excel – being flexible and happy to work around your individual needs, we love a good challenge.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 md:space-y-8">
              {/* Quick Facts */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg md:shadow-2xl border border-green-100">
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Star className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-800">Quick Facts</h3>
                  <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[#6DAA44] to-green-600 rounded-full mx-auto mt-1 md:mt-2"></div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 md:gap-4">
                  <div className="bg-green-50 rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-green-200">
                    <Clock className="text-[#6DAA44] mx-auto mb-1 md:mb-2" size={18} />
                    <div className="font-bold text-gray-800 text-sm md:text-base">Booking Period</div>
                    <div className="text-gray-600 text-xs md:text-sm">60 days recommended</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-green-200">
                    <DollarSign className="text-[#6DAA44] mx-auto mb-1 md:mb-2" size={18} />
                    <div className="font-bold text-gray-800 text-sm md:text-base">Deposit</div>
                    <div className="text-gray-600 text-xs md:text-sm">US$100-200 per guest</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-green-200">
                    <Users className="text-[#6DAA44] mx-auto mb-1 md:mb-2" size={18} />
                    <div className="font-bold text-gray-800 text-sm md:text-base">Group Size</div>
                    <div className="text-gray-600 text-xs md:text-sm">Small, intimate groups</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-green-200">
                    <Shield className="text-[#6DAA44] mx-auto mb-1 md:mb-2" size={18} />
                    <div className="font-bold text-gray-800 text-sm md:text-base">Flexibility</div>
                    <div className="text-gray-600 text-xs md:text-sm">Custom options available</div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-center shadow-lg md:shadow-2xl">
                <Compass className="text-white mx-auto mb-3 md:mb-4" size={32} />
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 md:mb-4 text-white">Ready to Explore?</h3>
                <p className="text-green-100 mb-4 md:mb-6 text-sm md:text-base">
                  Start your Bangladeshi adventure today.
                </p>
                
                <Link 
                  to="/tours"
                  className="bg-white text-[#6DAA44] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 shadow-lg w-full justify-center text-sm sm:text-base"
                >
                  <span>View All Tours</span>
                  <ChevronRight size={14} />
                </Link>
              </div>

              {/* Support Card */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl md:rounded-3xl p-4 sm:p-6 text-center text-white shadow-lg md:shadow-2xl">
                <Heart className="text-white mx-auto mb-2 md:mb-3" size={24} />
                <h3 className="text-base sm:text-lg md:text-xl font-black mb-1 md:mb-2">Personal Support</h3>
                <p className="text-blue-100 text-xs sm:text-sm md:text-sm">
                  We treat every guest like family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#6DAA44] via-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="text-white mx-auto mb-4 md:mb-6" size={32} />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-white">
            READY TO START YOUR JOURNEY?
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            We're here to help you plan the perfect Bangladeshi adventure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a 
              href="mailto:info@bangladeshtours.com"
              className="bg-white text-[#6DAA44] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg text-base sm:text-lg w-full sm:w-auto text-center"
            >
               GET IN TOUCH
            </a>
            
            <Link 
              to="/contact"
              className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white hover:text-[#6DAA44] transform hover:scale-105 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto text-center"
            >
              CONTACT FORM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RatesReservation;