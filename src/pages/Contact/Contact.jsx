import React, { useState } from 'react';
import { 
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
  Globe,
  Navigation,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate form submission
    setFormStatus('submitting');
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'BANGLADESH ECOTOURS',
        'Riad Center (4th Floor)',
        '4508/A Arkan Road',
        '(Opposite RAB – 7)',
        'Chandgaon, Chittagong 4212',
        'Bangladesh'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+88 031 2573257',
        '+88 01819 318 345',
        '+88 01711-264827'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'info@bangladeshecotours.com'
      ],
      color: 'from-[#6DAA44] to-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden mt-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6DAA44]/5 via-transparent to-emerald-400/5" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1600&h=600&fit=crop')" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm px-4 py-2 md:px-5 md:py-2.5 rounded-full mb-6 md:mb-8 border border-emerald-100">
            <MessageSquare className="text-[#6DAA44] w-4 h-4 md:w-5 md:h-5" />
            <span className="text-[#6DAA44] font-semibold text-sm md:text-base">Get In Touch</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
            CONTACT
            <span className="text-[#6DAA44] block mt-1 md:mt-2">US</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 font-light">
            Reach out to us for personalized travel planning and expert guidance
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Form - Made taller and more balanced */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 md:p-8 lg:p-10 relative overflow-hidden border border-gray-100 h-fit lg:sticky lg:top-8">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6DAA44]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                    Send Us A <span className="text-[#6DAA44]">Message</span>
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">We typically respond within 24 hours</p>
                </div>

                {formStatus === 'success' && (
                  <div className="mb-6 p-3 md:p-4 bg-green-50 border border-green-200 rounded-xl md:rounded-2xl flex items-center gap-3 animate-fadeIn">
                    <CheckCircle className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    <p className="text-green-800 font-medium text-sm md:text-base">Message sent successfully! We'll contact you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-3 md:px-4 py-3 md:py-4 pl-10 md:pl-12 border rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6DAA44]/20 focus:border-[#6DAA44] transition-all duration-300 text-sm md:text-base ${
                            errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                          }`}
                          placeholder="John"
                        />
                        <User className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 md:mt-2 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-3 md:px-4 py-3 md:py-4 pl-10 md:pl-12 border rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6DAA44]/20 focus:border-[#6DAA44] transition-all duration-300 text-sm md:text-base ${
                            errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                          }`}
                          placeholder="Doe"
                        />
                        <User className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 md:mt-2 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 md:px-4 py-3 md:py-4 pl-10 md:pl-12 border rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6DAA44]/20 focus:border-[#6DAA44] transition-all duration-300 text-sm md:text-base ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                        }`}
                        placeholder="john.doe@example.com"
                      />
                      <Mail className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    {errors.email && (
                      <p className="mt-1 md:mt-2 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className={`w-full px-3 md:px-4 py-3 md:py-4 pl-10 md:pl-12 border rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6DAA44]/20 focus:border-[#6DAA44] transition-all duration-300 resize-none text-sm md:text-base ${
                          errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                        }`}
                        placeholder="Tell us about your travel plans, questions, or how we can help you..."
                      />
                      <MessageSquare className="absolute left-3 md:left-4 top-3 md:top-4 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    {errors.message && (
                      <p className="mt-1 md:mt-2 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full bg-gradient-to-r from-[#6DAA44] to-emerald-600 text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 ${
                      formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information - Made more compact */}
            <div className="space-y-6 md:space-y-8">
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                  Get In <span className="text-[#6DAA44]">Touch</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">Multiple ways to connect with our travel experts</p>
              </div>

              {/* Contact Info Cards - Made more compact */}
              <div className="grid gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`group ${info.bgColor} border ${info.borderColor} rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-500`}
                  >
                    <div className="flex items-start gap-4 md:gap-5">
                      <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${info.color} rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                        <info.icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 leading-relaxed text-sm md:text-base">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Operating Hours - Made more compact */}
              <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-2xl md:rounded-3xl p-5 md:p-6 text-white shadow-lg">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#6DAA44]" />
                  <h3 className="text-lg md:text-xl font-bold">Operating Hours</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between items-center py-1 border-b border-gray-700/50">
                    <span className="text-sm">Sunday - Thursday</span>
                    <span className="font-semibold text-white text-sm">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-700/50">
                    <span className="text-sm">Saturday</span>
                    <span className="font-semibold text-white text-sm">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Friday</span>
                    <span className="font-semibold text-red-400 text-sm">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions - Made more compact */}
              <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Quick Connect</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <a 
                    href="tel:+8801819318345"
                    className="bg-[#6DAA44] text-white px-3 py-3 rounded-xl text-center hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-xs md:text-sm font-semibold">Call Now</span>
                  </a>
                  <a 
                    href="mailto:info@bangladeshecotours.com"
                    className="bg-gray-900 text-white px-3 py-3 rounded-xl text-center hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-xs md:text-sm font-semibold">Email Us</span>
                  </a>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-gradient-to-r from-[#6DAA44] to-emerald-600 rounded-2xl md:rounded-3xl p-5 md:p-6 text-white shadow-lg">
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Why Choose Us?</h3>
                  <p className="text-sm md:text-base opacity-90 mb-4">
                    Expert travel consultants with local knowledge and personalized service
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                    <div className="flex items-center gap-1 justify-center">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Local Experts</span>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Best Prices</span>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Custom Tours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-100 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm px-4 py-2 rounded-full mb-4 md:mb-6 border border-gray-200">
              <Navigation className="text-[#6DAA44] w-4 h-4 md:w-5 md:h-5" />
              <span className="text-[#6DAA44] font-semibold text-sm md:text-base">Visit Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Find Our <span className="text-[#6DAA44]">Office</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">Conveniently located in the heart of Chittagong</p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl overflow-hidden border border-gray-200">
            {/* Map Container */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.142858467892!2d91.83007931495658!3d22.3569207852607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8ea6e6c6d3d%3A0x7c1f9f5b4e5d5d5d!2sChandgaon%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bangladesh Ecotours Office Location"
              />
            </div>

            {/* Map Footer */}
            <div className="p-4 md:p-6 lg:p-8 bg-gradient-to-r from-white to-gray-50 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6DAA44] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">Our Location</h3>
                    <p className="text-gray-600 text-sm md:text-base">Chandgaon, Chittagong 4212, Bangladesh</p>
                  </div>
                </div>
                
                <a 
                  href="https://maps.app.goo.gl/My4NENA3zZcE2qfR8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-5 py-3 md:px-6 md:py-4 rounded-xl font-semibold hover:bg-[#6DAA44] transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
                >
                  <Globe className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">Open in Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Need Immediate <span className="text-[#6DAA44]">Help?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
            Our travel experts are ready to assist you with planning your perfect Bangladesh adventure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center">
            <a 
              href="tel:+8801819318345"
              className="bg-[#6DAA44] text-white px-6 py-4 md:px-8 md:py-5 rounded-xl font-semibold text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 flex-1 sm:flex-none"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span>Call +88 01819 318 345</span>
            </a>
            
            <a 
              href="mailto:info@bangladeshecotours.com"
              className="border-2 border-white text-white px-6 py-4 md:px-8 md:py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 flex-1 sm:flex-none"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;