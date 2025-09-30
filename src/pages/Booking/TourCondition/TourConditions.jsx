import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText,
  Shield,
  DollarSign,
  Users,
  Calendar,
  Heart,
  CheckCircle,
  Clock,
  MapPin,
  Globe,
  AlertCircle,
  Send,
  Banknote,
  Building,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Scale,
  Phone,
  Mail,
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

const TourConditions = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const conditions = [
    {
      id: 1,
      title: "CONTRACT VALIDITY",
      icon: CheckCircle,
      color: "from-[#6DAA44] to-green-600",
      content: "This tour contract is valid only when the completed Online Booking Form along with the appropriate reservation deposit (or full tour price if the reservation is made within 30 days of the tour date) has been received by Bangladesh Ecotours and a confirmation issued."
    },
    {
      id: 2,
      title: "GROUP RESERVATIONS",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      content: "If your reservation is made for a group, the person submitting the reservation form must have authorization from all participants listed."
    },
    {
      id: 3,
      title: "RESERVATION DEPOSIT",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-500",
      content: "A minimum deposit of US$100 per person is due at the time of reserving your tour."
    },
    {
      id: 4,
      title: "TOUR PRICE",
      icon: Banknote,
      color: "from-amber-500 to-orange-500",
      content: "Full payment of the balance (tour cost less the reservation deposit) is due 30 days before your tour date. Until full payment is received, we reserve the right to adjust tour prices and the tour itinerary."
    },
    {
      id: 5,
      title: "AMENDMENTS",
      icon: AlertCircle,
      color: "from-purple-500 to-pink-500",
      content: "As your tour coordinators, we incur nonrefundable expenses in booking your accommodation, travel arrangements and other tour costs. Thus changes made by you to your reservation after the deposit is received may incur an amendment fee of US$25 per amendment, and cancellation fees may also be applicable."
    },
    {
      id: 6,
      title: "TRAVEL INSURANCE",
      icon: Shield,
      color: "from-indigo-500 to-blue-500",
      content: "Tour participants will provide their own travel insurance. We recommend comprehensive insurance cover. You understand and accept that your proposed tour may expose you to inherent dangers and you may be traveling through remote areas which can be subject to, among other things, unfavorable political, physical, health or climatic conditions."
    },
    {
      id: 7,
      title: "HEALTH & FITNESS",
      icon: Heart,
      color: "from-rose-500 to-red-500",
      content: "We recommend you visit your doctor and dentist before your tour. Older participants or those with preexisting medical conditions may require a letter from a doctor, and must supply full details at the time of booking. We reserve the right to cancel and refund your deposit at our discretion. On tour, you are under the authority of the tour leader, who has the right to determine your suitability to continue or your level of activity."
    },
    {
      id: 8,
      title: "CANCELLATION CHARGES",
      icon: Clock,
      color: "from-orange-500 to-amber-500",
      content: "We treat all cancellations sympathetically, however, due to the nature of these ecotours, we reserve the right to apply the following maximum charges if the tour is canceled by the participants for any reason: More than 60 days before tour: Full booking deposit. 30 to 60 days before tour: Up to 50% of tour price. Less than 30 days before tour: Up to 100% of tour price."
    },
    {
      id: 9,
      title: "LIABILITY",
      icon: Globe,
      color: "from-gray-600 to-gray-800",
      content: "Bangladesh Ecotours accepts no liability for cancellations, delays or changes that are caused by war, threat of war, airport closures, civil strife, industrial action, natural disaster, technical transport problems, staff cancellations, negligence or other events or acts and omissions by others (including our tour guides and accommodation providers) beyond our control; participants' medical or psychiatric conditions which may develop during or subsequent to the tour; loss of or damage to any personal property of the participants."
    },
    {
      id: 10,
      title: "TOUR MODIFICATIONS",
      icon: MapPin,
      color: "from-teal-500 to-cyan-500",
      content: "Bangladesh Ecotours reserves the right to modify or substitute appropriate alternative tour itineraries or arrangements that may become necessary due to circumstances beyond our control."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#6DAA44] via-green-600 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-white/10 rounded-full -translate-y-24 sm:-translate-y-28 md:-translate-y-36 translate-x-24 sm:translate-x-28 md:translate-x-36" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/5 rounded-full -translate-x-32 sm:-translate-x-40 md:-translate-x-48 translate-y-32 sm:translate-y-40 md:translate-y-48" />
        
        <div className="relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Tour
              <span className="block text-green-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Conditions</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-2xl mx-auto leading-relaxed px-4">
              Clear guidelines for a seamless adventure. Your safety and satisfaction are our top priorities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Quick Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <DollarSign className="text-white" size={18} />
            </div>
            <div className="font-bold text-gray-800 text-sm sm:text-lg">US$100</div>
            <div className="text-gray-600 text-xs sm:text-sm">Deposit Required</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Calendar className="text-white" size={18} />
            </div>
            <div className="font-bold text-gray-800 text-sm sm:text-lg">60 Days</div>
            <div className="text-gray-600 text-xs sm:text-sm">Advance Booking</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Shield className="text-white" size={18} />
            </div>
            <div className="font-bold text-gray-800 text-sm sm:text-lg">Insurance</div>
            <div className="text-gray-600 text-xs sm:text-sm">Mandatory</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Users className="text-white" size={18} />
            </div>
            <div className="font-bold text-gray-800 text-sm sm:text-lg">Small Groups</div>
            <div className="text-gray-600 text-xs sm:text-sm">Intimate Experience</div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="bg-gradient-to-r from-[#6DAA44] to-green-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                <BookOpen className="text-white" size={18} />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg">Need Help Understanding?</h3>
                <p className="text-green-100 text-xs sm:text-sm">Our team is here to clarify any conditions</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <a href="mailto:mail@bangladeshecotours.com" className="bg-white text-[#6DAA44] px-3 sm:px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-xs sm:text-sm flex items-center gap-2">
                <Mail size={14} />
                Email Us
              </a>
              <a href="tel:+8801819318345" className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-colors text-xs sm:text-sm flex items-center gap-2 backdrop-blur-sm">
                <Phone size={14} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {conditions.map((condition) => (
            <div
              key={condition.id}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#6DAA44]/30 transition-all duration-300 hover:shadow-xl overflow-hidden group"
            >
              <button
                onClick={() => toggleSection(condition.id)}
                className="w-full p-4 sm:p-6 text-left flex items-start gap-3 sm:gap-4 group"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${condition.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <condition.icon className="text-white" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <span className="text-xs font-bold text-[#6DAA44] bg-green-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {condition.id}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 group-hover:text-[#6DAA44] transition-colors break-words">
                      {condition.title}
                    </h3>
                  </div>
                  {openSections[condition.id] ? (
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      {condition.content}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-2">
                      {condition.content.substring(0, 80)}...
                    </p>
                  )}
                </div>
                <div className="text-gray-400 group-hover:text-[#6DAA44] transition-colors flex-shrink-0 mt-1">
                  {openSections[condition.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              
              {openSections[condition.id] && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="pl-0 sm:pl-14 md:pl-18">
                    <div className="h-px bg-gray-200 mb-3 sm:mb-4" />
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      {condition.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bank Details & Declaration Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Bank Details */}
          <div className="bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                <Building className="text-white" size={18} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Bank Transfer Details</h2>
                <p className="text-green-100 text-xs sm:text-sm">Secure payment information</p>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {[
                { label: "Bank", value: "Bank Asia Limited" },
                { label: "Branch", value: "Agrabad" },
                { label: "Address", value: "Chittagong, Bangladesh" },
                { label: "SWIFT Code", value: "BALBBDDH 005" },
                { label: "Account Name", value: "Bangladesh Ecotours" },
                { label: "Account Number", value: "00536001355" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 sm:py-3 border-b border-white/20 last:border-b-0">
                  <span className="font-semibold text-green-100 text-xs sm:text-sm">{item.label}</span>
                  <span className="font-medium text-white text-right text-xs sm:text-sm break-words max-w-[50%]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Declaration */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 text-center shadow-lg">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <BadgeCheck className="text-white" size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Ready to Proceed?</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              By accepting, you confirm that you have read, understood, and agree to all the terms and conditions outlined above.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <button className="w-full bg-gradient-to-r from-[#6DAA44] to-green-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3">
                <CheckCircle size={16} />
                I Accept & Continue to Booking
              </button>
              <Link 
                to="/tours"
                className="inline-flex items-center gap-2 text-[#6DAA44] font-semibold hover:text-green-600 transition-colors text-xs sm:text-sm"
              >
                <ArrowRight size={14} />
                Browse Available Tours
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
            <Shield className="text-[#6DAA44] mx-auto mb-2 sm:mb-3" size={24} />
            <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Trust & Safety</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Your security and satisfaction are our highest priorities in all operations.
            </p>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
            <Heart className="text-[#6DAA44] mx-auto mb-2 sm:mb-3" size={24} />
            <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Personal Support</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Dedicated assistance throughout your booking process and journey.
            </p>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
            <AlertCircle className="text-[#6DAA44] mx-auto mb-2 sm:mb-3" size={24} />
            <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Important Notes</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Always read conditions carefully and keep travel insurance handy.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#6DAA44] via-green-600 to-emerald-600 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Send className="text-white mx-auto mb-4 sm:mb-6" size={32} />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
            Start Your Adventure Today
          </h2>
          <p className="text-green-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            With clear conditions and dedicated support, your unforgettable Bangladeshi journey begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              to="/tours"
              className="bg-white text-[#6DAA44] px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <MapPin size={16} />
              Explore All Tours
            </Link>
            
            <Link 
              to="/contact"
              className="border border-white text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-white hover:text-[#6DAA44] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <Phone size={16} />
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourConditions;