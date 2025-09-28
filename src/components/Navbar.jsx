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
        { name: "Visa Information", path: "/visa" },
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

  // Check if a menu item is active
  const isActiveItem = (itemPath, submenu) => {
    if (submenu) {
      // For items with submenu, check if any submenu item is active
      return submenu.some(subItem => location.pathname === subItem.path)
    }
    return location.pathname === itemPath
  }

  // Check if a path matches the current location
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src={logo || "/placeholder.svg"}
                alt="Bangladesh Ecotours"
                className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button 
                      className={`flex items-center px-4 py-2 transition-colors duration-200 font-medium group ${
                        isActiveItem(item.path, item.submenu) 
                          ? "text-[#6DAA44] font-semibold" 
                          : "text-gray-700 hover:text-[#6DAA44]"
                      }`}
                    >
                      {item.name}
                      <HiChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-green-50 rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="rounded-lg space-y-1 p-1 border border-green-200">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-4 py-3 transition-all duration-200 font-medium rounded-lg ${
                              isActivePath(subItem.path)
                                ? "text-white bg-[#6DAA44] font-semibold"
                                : "text-[#0E6C3A] hover:text-white hover:bg-[#0E6C3A]"
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
                    className={`px-4 py-2 transition-colors duration-200 font-medium relative group ${
                      isActivePath(item.path)
                        ? "text-[#6DAA44] font-semibold"
                        : "text-gray-700 hover:text-[#6DAA44]"
                    }`}
                  >
                    {item.name}
                    <span 
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#6DAA44] transition-transform duration-200 ${
                        isActivePath(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-[#6DAA44] hover:bg-[#6DAA44]/10 transition-all duration-200"
            >
              <div className="relative w-6 h-6">
                <HiMenu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`}
                />
                <HiX
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-t border-gray-100`}
      >
        <div className="px-4 py-4 space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <div className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                      isActiveItem(item.path, item.submenu)
                        ? "text-[#6DAA44] bg-[#6DAA44]/10 font-semibold"
                        : "text-gray-700 hover:text-[#6DAA44] hover:bg-[#6DAA44]/5"
                    }`}
                  >
                    {item.name}
                    <HiChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
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
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
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
    </nav>
  )
}

export default Navbar