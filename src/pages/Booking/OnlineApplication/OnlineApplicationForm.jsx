import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaGlobe, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaMapMarkedAlt, FaComment, FaPaperPlane, FaCheckCircle, FaBars, FaTimes } from 'react-icons/fa';

const OnlineApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    address: '',
    arrivalDate: '',
    departureDate: '',
    tourInterest: '',
    specialInstructions: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const tours = [
    "Archeological and Heritage Tour",
    "Beach and Offshore Island Tours",
    "Hilltract and Tribal Tours",
    "Rainforest and Sundarban",
    "Tea & Rubber Plantations",
    "Photography Tour",
    "Filming Tour",
    "Cultural Tour",
    "Ride the Rocket",
    "Living Experiences tour",
    "Others Tour"
  ];

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
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.arrivalDate) newErrors.arrivalDate = 'Arrival date is required';
    if (!formData.departureDate) newErrors.departureDate = 'Departure date is required';
    if (!formData.tourInterest) newErrors.tourInterest = 'Please select a tour';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-md w-full text-center animate-scaleIn">
          <FaCheckCircle className="text-5xl sm:text-6xl text-[#6DAA44] mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Thank you for your interest in our eco-tours! We've received your application and will contact you within 24 hours to discuss your adventure.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#6DAA44] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  const MobileSidebar = () => (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setShowMobileSidebar(false)}
      />
      
      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-gradient-to-br from-[#6DAA44] to-green-600 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-white">Application Guide</h3>
          <button 
            onClick={() => setShowMobileSidebar(false)}
            className="text-white p-2"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="bg-white/20 p-3 rounded-2xl">
              <FaUser className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold">Personal Information</h3>
              <p className="text-white/80 text-sm">Basic details to get started</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="bg-white/20 p-3 rounded-2xl">
              <FaCalendarAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold">Travel Dates</h3>
              <p className="text-white/80 text-sm">When you want to visit</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="bg-white/20 p-3 rounded-2xl">
              <FaMapMarkedAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold">Tour Selection</h3>
              <p className="text-white/80 text-sm">Choose your adventure</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="bg-white/20 p-3 rounded-2xl">
              <FaComment className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold">Special Requests</h3>
              <p className="text-white/80 text-sm">Tell us about your preferences</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
          <p className="text-sm text-white/90">
            💡 <strong>Pro Tip:</strong> The more details you provide, the better we can customize your experience!
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 sm:py-12 px-3 sm:px-4">
      {showMobileSidebar && <MobileSidebar />}
      
      <div className="max-w-4xl mx-auto mt-14">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Start Your <span className="text-[#6DAA44]">Adventure</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and let's create your perfect eco-tour experience in Bangladesh
          </p>
          <div className="w-24 h-1 bg-[#6DAA44] rounded-full mx-auto mt-4 sm:mt-6"></div>
        </div>

        {/* Mobile Help Button */}
        <div className="lg:hidden text-center mb-6">
          <button
            onClick={() => setShowMobileSidebar(true)}
            className="bg-[#6DAA44] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-green-700 transition-colors"
          >
            <FaBars />
            Application Guide
          </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Illustration Sidebar - Desktop */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="bg-gradient-to-br from-[#6DAA44] to-green-600 rounded-3xl p-6 lg:p-8 h-full text-white shadow-2xl">
              <div className="space-y-6">
                <div className="text-center mb-6 lg:mb-8">
                  <FaPaperPlane className="text-5xl lg:text-6xl mx-auto mb-3 lg:mb-4 opacity-80" />
                  <h2 className="text-xl lg:text-2xl font-bold">Quick & Easy Application</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="bg-white/20 p-2 lg:p-3 rounded-2xl">
                      <FaUser className="text-lg lg:text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm lg:text-base">Personal Information</h3>
                      <p className="text-white/80 text-xs lg:text-sm">Basic details to get started</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="bg-white/20 p-2 lg:p-3 rounded-2xl">
                      <FaCalendarAlt className="text-lg lg:text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm lg:text-base">Travel Dates</h3>
                      <p className="text-white/80 text-xs lg:text-sm">When you want to visit</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="bg-white/20 p-2 lg:p-3 rounded-2xl">
                      <FaMapMarkedAlt className="text-lg lg:text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm lg:text-base">Tour Selection</h3>
                      <p className="text-white/80 text-xs lg:text-sm">Choose your adventure</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="bg-white/20 p-2 lg:p-3 rounded-2xl">
                      <FaComment className="text-lg lg:text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm lg:text-base">Special Requests</h3>
                      <p className="text-white/80 text-xs lg:text-sm">Tell us about your preferences</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 lg:mt-8 p-3 lg:p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-xs lg:text-sm text-white/90">
                    💡 <strong>Pro Tip:</strong> The more details you provide, the better we can customize your experience!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8  ">
              {/* Personal Information Section */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <div className="bg-[#6DAA44] text-white p-1 sm:p-2 rounded-lg sm:rounded-xl">
                    <FaUser className="text-sm sm:text-base" />
                  </div>
                  Personal Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                      <span>First Name</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className={`relative rounded-xl border-2 transition-all duration-300 ${
                      errors.firstName ? 'border-red-300' : 'border-gray-200 focus-within:border-[#6DAA44]'
                    }`}>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none text-sm sm:text-base"
                        placeholder="Enter your first name"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-xs sm:text-sm">{errors.firstName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                      <span>Last Name</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className={`relative rounded-xl border-2 transition-all duration-300 ${
                      errors.lastName ? 'border-red-300' : 'border-gray-200 focus-within:border-[#6DAA44]'
                    }`}>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none text-sm sm:text-base"
                        placeholder="Enter your last name"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 text-xs sm:text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                      <FaEnvelope className="text-[#6DAA44] text-sm sm:text-base" />
                      <span>Email</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className={`relative rounded-xl border-2 transition-all duration-300 ${
                      errors.email ? 'border-red-300' : 'border-gray-200 focus-within:border-[#6DAA44]'
                    }`}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm">{errors.email}</p>
                    )}
                    <p className="text-gray-500 text-xs">We'll never share your email with anyone else.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                      <FaGlobe className="text-[#6DAA44] text-sm sm:text-base" />
                      <span>Country</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className={`relative rounded-xl border-2 transition-all duration-300 ${
                      errors.country ? 'border-red-300' : 'border-gray-200 focus-within:border-[#6DAA44]'
                    }`}>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none text-sm sm:text-base"
                        placeholder="Your country"
                      />
                    </div>
                    {errors.country && (
                      <p className="text-red-500 text-xs sm:text-sm">{errors.country}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                      <FaPhone className="text-[#6DAA44] text-sm sm:text-base" />
                      <span>Phone Number</span>
                    </label>
                    <div className="relative rounded-xl border-2 border-gray-200 focus-within:border-[#6DAA44] transition-all duration-300">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none text-sm sm:text-base"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                      <FaMapMarkerAlt className="text-[#6DAA44] text-sm sm:text-base" />
                      <span>Your Address</span>
                    </label>
                    <div className="relative rounded-xl border-2 border-gray-200 focus-within:border-[#6DAA44] transition-all duration-300">
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none text-sm sm:text-base"
                        placeholder="Your complete address"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Dates Section */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <div className="bg-[#6DAA44] text-white p-1 sm:p-2 rounded-lg sm:rounded-xl">
                    <FaCalendarAlt className="text-sm sm:text-base" />
                  </div>
                  Travel Dates
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                      <span>Arrival Date</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className={`relative rounded-xl border-2 transition-all duration-300 ${
                      errors.arrivalDate ? 'border-red-300' : 'border-gray-200 focus-within:border-[#6DAA44]'
                    }`}>
                      <input
                        type="date"
                        name="arrivalDate"
                        value={formData.arrivalDate}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none text-sm sm:text-base"
                      />
                    </div>
                    {errors.arrivalDate && (
                      <p className="text-red-500 text-xs sm:text-sm">{errors.arrivalDate}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                      <span>Departure Date</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className={`relative rounded-xl border-2 transition-all duration-300 ${
                      errors.departureDate ? 'border-red-300' : 'border-gray-200 focus-within:border-[#6DAA44]'
                    }`}>
                      <input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none text-sm sm:text-base"
                      />
                    </div>
                    {errors.departureDate && (
                      <p className="text-red-500 text-xs sm:text-sm">{errors.departureDate}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Tour Selection */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <div className="bg-[#6DAA44] text-white p-1 sm:p-2 rounded-lg sm:rounded-xl">
                    <FaMapMarkedAlt className="text-sm sm:text-base" />
                  </div>
                  Tour Selection
                </h2>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                    <span>Tours Interested in</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <div className={`rounded-xl border-2 transition-all duration-300 ${
                    errors.tourInterest ? 'border-red-300' : 'border-gray-200 focus-within:border-[#6DAA44]'
                  }`}>
                    <select
                      name="tourInterest"
                      value={formData.tourInterest}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none bg-white text-sm sm:text-base"
                    >
                      <option value="">Select a tour...</option>
                      {tours.map((tour, index) => (
                        <option key={index} value={tour}>
                          {tour}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.tourInterest && (
                    <p className="text-red-500 text-xs sm:text-sm">{errors.tourInterest}</p>
                  )}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <div className="bg-[#6DAA44] text-white p-1 sm:p-2 rounded-lg sm:rounded-xl">
                    <FaComment className="text-sm sm:text-base" />
                  </div>
                  Additional Information
                </h2>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                    <span>Special Instructions</span>
                  </label>
                  <div className="relative rounded-xl border-2 border-gray-200 focus-within:border-[#6DAA44] transition-all duration-300">
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none resize-none text-sm sm:text-base"
                      placeholder="Tell us about any special requirements, dietary restrictions, or specific interests you have..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#6DAA44] to-green-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2 sm:gap-3 mx-auto w-full sm:w-auto justify-center"
                >
                  <FaPaperPlane />
                  Submit Application
                </button>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
                  We'll get back to you within 24 hours to discuss your adventure!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default OnlineApplicationForm;