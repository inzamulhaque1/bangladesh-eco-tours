import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook,
  Globe,
  Heart,
  ArrowUp,
  Send,
  Star,
  Leaf
} from 'lucide-react';
import logo from "../assets/Images/logo/eco-tours-logo.png"

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#6DAA44]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#6DAA44]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#6DAA44]/8 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Floating Icons */}
        <Leaf className="absolute top-20 right-1/4 text-[#6DAA44]/20 animate-spin-slow" size={32} style={{ animationDuration: '8s' }} />
        <Star className="absolute bottom-32 left-1/3 text-[#6DAA44]/15 animate-pulse" size={28} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Company Info & Logo */}
          <div 
            className="lg:col-span-1 space-y-6"
            onMouseEnter={() => setHoveredSection('company')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="" />
            </div>

            <p className="text-gray-300 leading-relaxed">
              Experience authentic cultural exchanges and pristine natural beauty in Bangladesh's hidden treasures with our community-focused ecotourism adventures.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              <a 
                href="https://www.facebook.com/bd.ecotours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#6DAA44] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={18} className="group-hover:text-white transition-colors duration-300" />
              </a>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#6DAA44] transition-all duration-300 transform hover:scale-110 cursor-pointer group">
                <Globe size={18} className="group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Address */}
          <div 
            className="space-y-6"
            onMouseEnter={() => setHoveredSection('address')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-[#6DAA44]" size={24} />
              <h4 className="text-lg font-semibold text-white">Address</h4>
            </div>
            
            <div className={`
              bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-300
              ${hoveredSection === 'address' ? 'border-[#6DAA44]/50 bg-gray-800/70 transform -translate-y-1' : ''}
            `}>
              <div className="space-y-2 text-gray-300">
                <p className="font-medium text-white">BANGLADESH ECOTOURS</p>
                <p>Suite # 6C, Label # 5 Tower</p>
                <p>263 Tin Pool, 263 Jubilee Road</p>
                <p>Chittagong 4000, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div 
            className="space-y-6"
            onMouseEnter={() => setHoveredSection('contact')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-[#6DAA44]" size={24} />
              <h4 className="text-lg font-semibold text-white">Contact</h4>
            </div>
            
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className={`
                bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all duration-300 group cursor-pointer
                ${hoveredSection === 'contact' ? 'border-[#6DAA44]/50 bg-gray-800/70' : ''}
              `}>
                <p className="text-gray-400 text-sm mb-2">Mobile:</p>
                <div className="space-y-1">
                  <a href="tel:+8801819318345" className="block text-white hover:text-[#6DAA44] transition-colors duration-300">
                    +88 01819 318 345
                  </a>
                  <a href="tel:+8801703299023" className="block text-white hover:text-[#6DAA44] transition-colors duration-300">
                    +88 01703 299 023
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className={`
                bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all duration-300
                ${hoveredSection === 'contact' ? 'border-[#6DAA44]/50 bg-gray-800/70' : ''}
              `}>
                <p className="text-gray-400 text-sm mb-2">Email:</p>
                <div className="space-y-1">
                  <a href="mailto:mail@bangladeshecotours.com" className="block text-white hover:text-[#6DAA44] transition-colors duration-300 text-sm">
                    mail@bangladeshecotours.com
                  </a>
                  <a href="mailto:ecobangla@yahoo.com" className="block text-white hover:text-[#6DAA44] transition-colors duration-300 text-sm">
                    ecobangla@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className="space-y-6"
            onMouseEnter={() => setHoveredSection('links')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-[#6DAA44]" size={24} />
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            </div>
            
            <div className={`
              bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-300
              ${hoveredSection === 'links' ? 'border-[#6DAA44]/50 bg-gray-800/70 transform -translate-y-1' : ''}
            `}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Our Tours', icon: MapPin },
                  { name: 'Our People', icon: Phone },
                  { name: 'Reservations', icon: Mail },
                  { name: 'Contact Us', icon: Heart }
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-[#6DAA44]/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2024 <span className="text-[#6DAA44] font-semibold">Bangladesh Ecotours</span>. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group bg-[#6DAA44] text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="hidden md:inline text-sm font-semibold">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;