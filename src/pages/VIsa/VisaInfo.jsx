import React from 'react';
import { 
  Plane, FileText, DollarSign, Clock, AlertTriangle, Heart, Volume2, Shirt, Backpack,
  Camera, Sun, Shield, CheckCircle, Info, Zap, MapPin, Gift, Users, Mail, Phone
} from 'lucide-react';

const whatToBring = [
  { icon: Sun, item: 'Sunscreen lotion', description: 'Protect from tropical sun' },
  { icon: Shield, item: 'Insect repellent', description: 'Essential for outdoor activities' },
  { icon: Sun, item: 'Broad hat', description: 'Sun protection for treks' },
  { icon: Camera, item: 'Small binoculars', description: 'Great for wildlife viewing' },
  { icon: Gift, item: 'Small gifts', description: 'Pens, candy, postcards for locals' },
  { icon: Users, item: 'Family photos', description: 'Share your story with hosts' }
];

const dressCodeRules = [
  { place: 'Mosques', rule: 'No shorts, cover shoulders & arms', icon: MapPin },
  { place: 'Temples', rule: 'Modest dress, no bare shoulders', icon: MapPin },
  { place: 'Churches', rule: 'Cover knees and shoulders', icon: MapPin },
  { place: 'Villages', rule: 'Respectful, modest clothing', icon: MapPin }
];

const VisaInfo = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    {/* Hero Section */}
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=600&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6DAA44]/20 to-blue-500/20" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
          <FileText className="text-[#6DAA44]" size={24} />
          <span className="text-[#6DAA44] font-bold text-lg">Travel Information</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-black text-gray-800 mb-6">
          VISA & OTHER
          <span className="text-[#6DAA44] block">INFORMATION</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know before traveling to Bangladesh
        </p>
      </div>
    </section>

    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-24">

      {/* VISA ON ARRIVAL SECTION */}
      <section id="visa" className="space-y-12 animate-fadeIn">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className="h-96 bg-cover bg-center rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#6DAA44]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Easy Entry</h3>
              <p className="text-lg opacity-90">Visa on Arrival Available</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#6DAA44] rounded-full flex items-center justify-center">
                <Plane className="text-white" size={24} />
              </div>
              <h2 className="text-4xl font-bold text-gray-800">Visa on Arrival (VOA)</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Info className="text-[#6DAA44]" size={20} />
                Key Information
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#6DAA44] flex-shrink-0 mt-1" size={18} />
                  <span>Valid for <strong>six months</strong> from date of issue</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#6DAA44] flex-shrink-0 mt-1" size={18} />
                  <span>Good for stays of <strong>one to three months</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#6DAA44] flex-shrink-0 mt-1" size={18} />
                  <span>Available for most <strong>European, American, Australian and Canadian</strong> passport holders</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <DollarSign size={20} />
                Official Visa Fees
              </h3>
              <div className="text-3xl font-black mb-2">US$ 51</div>
              <p className="text-green-100 text-sm">Plus our service charges</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our VOA Service Includes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-[#6DAA44]/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="text-[#6DAA44]" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Letter of Invitation</h4>
              <p className="text-gray-600 text-sm">Required LOI provided by us</p>
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-[#6DAA44]/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-[#6DAA44]" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Full Assistance</h4>
              <p className="text-gray-600 text-sm">We handle immigration & customs</p>
            </div>
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-[#6DAA44]/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Backpack className="text-[#6DAA44]" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Baggage Collection</h4>
              <p className="text-gray-600 text-sm">We collect & escort you outside</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
            <p className="text-gray-700 text-center">
              <strong>No photos needed!</strong> No forms to fill! Our representative handles everything on your behalf.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Reciprocal Arrangements</h3>
              <p className="text-gray-600 leading-relaxed">
                The government generally charges visitors whatever their respective country charges for Bangladesh nationals. 
                Visa costs can be expensive in your own country rather than visa on arrival here at Bangladesh airports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL ADVICE SECTION */}
      <section id="medical" className="space-y-12 animate-fadeIn">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              <h2 className="text-4xl font-bold text-gray-800">Medical Advice</h2>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">Important Notice</h3>
                  <p className="text-red-700 leading-relaxed">
                    Please note that the <strong>Chittagong Hill Tracts is a malarial zone</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-4">Our Recommendation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Since we are not qualified to offer you any medical advice, you will have to get 
                medical advice from your own doctor before traveling to Bangladesh.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <CheckCircle className="text-blue-600" size={20} />
                  <span className="text-gray-700">Consult your doctor before travel</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <CheckCircle className="text-blue-600" size={20} />
                  <span className="text-gray-700">Discuss malaria prevention options</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <CheckCircle className="text-blue-600" size={20} />
                  <span className="text-gray-700">Get recommended vaccinations</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div 
              className="h-64 bg-cover bg-center rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop')" }}
            />
            <div 
              className="h-64 bg-cover bg-center rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop')" }}
            />
          </div>
        </div>
      </section>

      {/* NOISE & POWER SECTION */}
      <section id="noise" className="space-y-12 animate-fadeIn">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className="h-96 bg-cover bg-center rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <Volume2 size={48} className="mb-2" />
              <h3 className="text-2xl font-bold">Cultural Context</h3>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Volume2 className="text-white" size={24} />
              </div>
              <h2 className="text-4xl font-bold text-gray-800">Noise Issue</h2>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Noise Sensitivity is Relative!</h3>
              <p className="text-purple-800 leading-relaxed mb-4">
                <strong>Bangladesh is not a quiet country!</strong> Even in the remotest places there might be:
              </p>
              <div className="space-y-3">
                {[
                  'Temple or mosque events',
                  'Dogs howling at the moon',
                  'Normal conversations in top volume'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-purple-700">
                    <Volume2 size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Info className="text-[#6DAA44]" size={20} />
                Our Recommendation
              </h3>
              <p className="text-gray-600 mb-4">
                We recommend you bring <strong>earplugs</strong> should you be sensitive to noise.
              </p>
              <div className="flex items-center gap-4 p-4 bg-[#6DAA44]/10 rounded-xl">
                <Shield className="text-[#6DAA44]" size={24} />
                <span className="text-gray-700 font-medium">Pack earplugs for better sleep</span>
              </div>
            </div>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <Zap className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-orange-900 mb-2">Power Supply</h3>
                  <p className="text-orange-800 leading-relaxed">
                    If using electronic devices, please be aware that <strong>electricity in Bangladesh 
                    is temperamental</strong> and power fluctuations may occur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRESS CODE SECTION */}
      <section id="dress" className="space-y-12 animate-fadeIn">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#6DAA44] rounded-full flex items-center justify-center">
              <Shirt className="text-white" size={24} />
            </div>
            <h2 className="text-4xl font-bold text-gray-800">Dress Code</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respect places of worship and local customs
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center">General Guidelines</h3>
          <p className="text-xl text-green-100 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Mosques, Temples, churches and synagogues are places of worship. 
            Visitors should be <strong>modestly dressed</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <h4 className="font-bold text-white mb-4 text-xl">❌ Not Permitted</h4>
              <div className="space-y-3 text-green-100">
                <div className="flex items-center gap-3">
                  <AlertTriangle size={16} />
                  <span>Short pants/skirts</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle size={16} />
                  <span>Sleeveless t-shirts/blouses</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle size={16} />
                  <span>Bare shoulders</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle size={16} />
                  <span>Exposed mid-riffs</span>
                </div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <h4 className="font-bold text-white mb-4 text-xl">✓ Recommended</h4>
              <div className="space-y-3 text-green-100">
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} />
                  <span>Cover shoulders & arms</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} />
                  <span>Long pants or skirts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} />
                  <span>Bring shawls for coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} />
                  <span>Modest, respectful attire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dressCodeRules.map((rule, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#6DAA44]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <rule.icon className="text-[#6DAA44]" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{rule.place}</h4>
              <p className="text-gray-600 text-sm">{rule.rule}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <p className="text-blue-800 leading-relaxed">
              <strong>Important:</strong> Admission might be denied to men and women not following 
              these guidelines. Bare shoulders and mid-riffs are not permitted in some places and 
              should be covered with shawls.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO BRING SECTION */}
      <section id="bring" className="space-y-12 animate-fadeIn">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#6DAA44] rounded-full flex items-center justify-center">
              <Backpack className="text-white" size={24} />
            </div>
            <h2 className="text-4xl font-bold text-gray-800">What to Bring</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential items for your Bangladesh adventure
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatToBring.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <item.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.item}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        {/* Special Gifts Section */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12 border-2 border-pink-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="text-pink-600" size={32} />
              <h3 className="text-3xl font-bold text-gray-800">Gift Ideas for Locals</h3>
            </div>
            <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
              Pens, candy, postcards or other small, inexpensive and light gift items are a nice idea 
              (especially if your home region is printed or pictured on them).
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">🖊️</div>
                <h4 className="font-bold text-gray-800 mb-2">Pens</h4>
                <p className="text-gray-600 text-sm">Always appreciated</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">🍬</div>
                <h4 className="font-bold text-gray-800 mb-2">Candy</h4>
                <p className="text-gray-600 text-sm">Great for children</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">📮</div>
                <h4 className="font-bold text-gray-800 mb-2">Postcards</h4>
                <p className="text-gray-600 text-sm">From your hometown</p>
              </div>
            </div>
          </div>
        </div>
        {/* Photo Sharing */}
        <div className="bg-[#6DAA44] rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Camera className="mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">Share Your Story</h3>
            <p className="text-xl text-green-100 leading-relaxed">
              Local people will be delighted to see pictures of your family, home, workplace 
              or friends if you think this is appropriate. It's a wonderful way to connect 
              and share cultures!
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* Contact CTA */}
    <section className="py-20 px-6 bg-gradient-to-r from-[#6DAA44] to-green-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Need More Information?</h2>
        <p className="text-xl text-green-100 mb-8">
          Our team is here to help you prepare for your journey
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group bg-white text-[#6DAA44] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 justify-center">
            <Mail size={20} />
            Email Us
          </button>
          <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#6DAA44] transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center">
            <Phone size={20} />
            Call Us
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default VisaInfo;