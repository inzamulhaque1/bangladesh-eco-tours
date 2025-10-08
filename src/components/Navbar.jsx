"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi"
import logo from "../assets/Images/logo/eco-tours-logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Prevent body scroll when navbar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      submenu: [
        { name: "About Us", path: "/about-us" },
        { name: "Places of Interest", path: "/places" },
        { name: "Visa Information", path: "/visa-info" },
      ],
    },
    { name: "Bangladesh", path: "/bangladesh" },
    { name: "Our People", path: "/our-people" },
    { name: "Our Tours", path: "/tours" },
    {
      name: "Booking",
      path: "/booking",
      submenu: [
        { name: "Rates & Reservation", path: "/rates" },
        { name: "Tour Conditions", path: "/conditions" },
        { name: "Online Order Form", path: "/order" },
      ],
    },
    {
      name: "Travel Story",
      path: "/travel-story",
      submenu: [
        { name: "Photo Gallery", path: "/gallery" },
        { name: "Travel Blog & Video", path: "/blog" },
        { name: "Our Guests Experiences", path: "/experiences" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ]

  const isActiveItem = (itemPath, submenu) => {
    if (submenu) {
      return submenu.some(subItem => location.pathname === subItem.path)
    }
    return location.pathname === itemPath
  }

  const isActivePath = (path) => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const closeAllMenus = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Main Navbar - Always visible */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-alan ${
          scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center group">
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Bangladesh Ecotours"
                  className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-[#6DAA44] hover:bg-[#6DAA44]/10 transition-all duration-200 border border-gray-200"
            >
              <span className="font-semibold text-sm lg:text-base">Menu</span>
              <div className="relative w-5 h-5 lg:w-6 lg:h-6">
                <HiMenu
                  className={`absolute inset-0 w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <HiX
                  className={`absolute inset-0 w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Navigation Menu Fixed for mobile */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ease-in-out font-alan ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isOpen ? "opacity-30" : "opacity-0"
          }`}
          onClick={closeAllMenus}
        />

        {/* Navigation Panel Full height on mobile */}
        <div
          className={`absolute top-0 left-0 h-full w-80 lg:w-96 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header - Fixed at top */}
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-100 bg-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <img
                src={logo || "/placeholder.svg"}
                alt="Bangladesh Ecotours"
                className="h-8 w-auto"
              />
            </div>
            <button
              onClick={closeAllMenus}
              className="p-2 rounded-full text-white bg-red-600 border cursor-pointer hover:rotate-180 hover:scale-110 transition-all duration-200"
            >
              <HiX className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Navigation Items - Flexible scrollable area */}
          <div className="flex-1 overflow-y-auto py-2">
            <div className="px-4 lg:px-6 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index} className="group">
                  {item.submenu ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`flex items-center justify-between w-full px-3 py-3 lg:py-4 rounded-lg transition-all duration-200 font-medium ${
                          isActiveItem(item.path, item.submenu)
                            ? "text-[#6DAA44] bg-[#6DAA44]/10 font-semibold"
                            : "text-gray-700 hover:text-[#6DAA44] hover:bg-[#6DAA44]/5"
                        }`}
                      >
                        <span className="text-sm lg:text-lg text-left">{item.name}</span>
                        <HiChevronDown
                          className={`h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-200 flex-shrink-0 ${
                            activeDropdown === index ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeDropdown === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 space-y-1 mt-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              onClick={closeAllMenus}
                              className={`block px-3 py-2 lg:py-3 rounded-lg transition-all duration-200 text-sm lg:text-base ${
                                isActivePath(subItem.path)
                                  ? "text-[#6DAA44] bg-[#6DAA44]/10 font-semibold"
                                  : "text-gray-600 hover:text-[#6DAA44] hover:bg-[#6DAA44]/5"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeAllMenus}
                      className={`block px-3 py-3 lg:py-4 rounded-lg transition-all duration-200 font-medium text-sm lg:text-lg ${
                        isActivePath(item.path)
                          ? "text-[#6DAA44] bg-[#6DAA44]/10 font-semibold"
                          : "text-gray-700 hover:text-[#6DAA44] hover:bg-[#6DAA44]/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section - Fixed at bottom */}
          <div className="p-4 lg:p-6 bg-gray-50 border-t border-gray-200 flex-shrink-0">
            <div className="text-center">
              <Link
                to="/contact"
                onClick={closeAllMenus}
                className="inline-flex items-center justify-center gap-2 bg-[#6DAA44] text-white px-6 py-3 lg:py-4 rounded-lg font-semibold hover:bg-emerald-600 transform hover:scale-105 transition-all duration-200 w-full text-sm lg:text-lg"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding to main content to account for fixed navbar */}
      <div className="pt-16 lg:pt-20"></div>
    </>
  )
}

export default Navbar