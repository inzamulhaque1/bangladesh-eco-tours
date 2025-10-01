/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaDownload, FaHeart, FaShare, FaFilter, FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imagesPerPage = 12;

  // Enhanced sample images with more details
  const allImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Hill Tribe Village Sunrise",
      category: "Cultural",
      photographer: "H M Kabir Kanak",
      location: "Chittagong Hill Tracts",
      tags: ["village", "sunrise", "traditional", "mountains"],
      likes: 142,
      date: "2024-01-15"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Pristine Beach Sunset",
      category: "Beach",
      photographer: "Jahangir Alam",
      location: "Cox's Bazar",
      tags: ["beach", "sunset", "ocean", "waves"],
      likes: 98,
      date: "2024-02-20"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Traditional Dance Festival",
      category: "Cultural",
      photographer: "Mostafa Chowdhury",
      location: "Bandarban",
      tags: ["dance", "festival", "colorful", "celebration"],
      likes: 215,
      date: "2024-03-10"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Mangrove Forest Mystique",
      category: "Nature",
      photographer: "H M Kabir Kanak",
      location: "Sundarbans",
      tags: ["mangrove", "forest", "wildlife", "river"],
      likes: 167,
      date: "2024-01-28"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      title: "Tea Plantations Morning",
      category: "Landscape",
      photographer: "Jahangir Alam",
      location: "Sylhet",
      tags: ["tea", "plantation", "green", "hills"],
      likes: 134,
      date: "2024-02-14"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Ancient Temple Architecture",
      category: "Heritage",
      photographer: "Mostafa Chowdhury",
      location: "Paharpur",
      tags: ["temple", "ancient", "architecture", "history"],
      likes: 189,
      date: "2024-03-05"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "River Cruise Adventure",
      category: "Adventure",
      photographer: "H M Kabir Kanak",
      location: "Sangu River",
      tags: ["river", "boat", "adventure", "water"],
      likes: 156,
      date: "2024-01-22"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Golden Sunset Islands",
      category: "Beach",
      photographer: "Jahangir Alam",
      location: "St. Martin's Island",
      tags: ["island", "sunset", "golden", "beach"],
      likes: 178,
      date: "2024-02-18"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Tribal Crafts Workshop",
      category: "Cultural",
      photographer: "Mostafa Chowdhury",
      location: "Rangamati",
      tags: ["crafts", "workshop", "traditional", "artisan"],
      likes: 123,
      date: "2024-03-12"
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Wildlife Safari Moment",
      category: "Wildlife",
      photographer: "H M Kabir Kanak",
      location: "Sundarbans",
      tags: ["wildlife", "safari", "nature", "animals"],
      likes: 201,
      date: "2024-01-30"
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      title: "Mountain Trekking Path",
      category: "Adventure",
      photographer: "Jahangir Alam",
      location: "Bandarban",
      tags: ["mountain", "trekking", "hiking", "adventure"],
      likes: 145,
      date: "2024-02-25"
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Traditional Festival Colors",
      category: "Cultural",
      photographer: "Mostafa Chowdhury",
      location: "Dhaka",
      tags: ["festival", "colors", "celebration", "culture"],
      likes: 198,
      date: "2024-03-08"
    },
  ];

  const categories = [
    { name: "All", icon: "🌍", count: allImages.length },
    { name: "Cultural", icon: "🎭", count: allImages.filter(img => img.category === "Cultural").length },
    { name: "Beach", icon: "🏖️", count: allImages.filter(img => img.category === "Beach").length },
    { name: "Nature", icon: "🌿", count: allImages.filter(img => img.category === "Nature").length },
    { name: "Adventure", icon: "🧗", count: allImages.filter(img => img.category === "Adventure").length },
    { name: "Heritage", icon: "🏛️", count: allImages.filter(img => img.category === "Heritage").length },
    { name: "Wildlife", icon: "🐅", count: allImages.filter(img => img.category === "Wildlife").length },
    { name: "Landscape", icon: "🏞️", count: allImages.filter(img => img.category === "Landscape").length }
  ];

  // Filter images based on category and search term
  const filteredImages = allImages.filter(image => {
    const matchesCategory = activeCategory === "All" || image.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      image.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setImageLoaded(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (e) => {
    // Close modal if clicking on backdrop (not the image itself)
    if (e.target === e.currentTarget || e.target.closest('.close-button')) {
      setIsModalOpen(false);
      setTimeout(() => setSelectedImage(null), 400);
      document.body.style.overflow = 'unset';
    }
  };

  const goToNext = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setImageLoaded(false);
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  const goToPrevious = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setImageLoaded(false);
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal(e);
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen, selectedImage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto mt-12 sm:mt-14">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <div className="inline-block bg-gradient-to-r from-[#6DAA44] to-green-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
            📸 Photography Gallery
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-[#6DAA44] bg-clip-text text-transparent">
            Visual Journey
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
            Explore the breathtaking beauty of Bangladesh through the lenses of our talented photographers
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#6DAA44] to-green-600 rounded-full mx-auto shadow-lg"></div>
        </div>

        {/* Enhanced Search and Filter Bar */}
        <div className="bg-green-50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 w-full max-w-lg">
              <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-green-700 text-base sm:text-lg" />
              <input
                type="text"
                placeholder="Search here.."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/50 border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6DAA44] focus:border-transparent backdrop-blur-sm text-base sm:text-lg shadow-inner"
              />
            </div>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden bg-[#6DAA44] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow-lg text-sm sm:text-base"
            >
              <FaFilter />
              Filters
            </button>

            {/* Enhanced Category Filter - Desktop */}
            <div className="hidden lg:flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setCurrentPage(1);
                  }}
                  className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 text-sm sm:text-base ${
                    activeCategory === category.name
                      ? 'bg-gradient-to-r from-[#6DAA44] to-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {category.name}
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeCategory === category.name ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filter Dropdown */}
          {isFilterOpen && (
            <div className="lg:hidden mt-3 sm:mt-4 p-3 sm:p-4 bg-white/90 rounded-xl sm:rounded-2xl shadow-inner">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {categories.map(category => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setActiveCategory(category.name);
                      setCurrentPage(1);
                      setIsFilterOpen(false);
                    }}
                    className={`p-2 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      activeCategory === category.name
                        ? 'bg-[#6DAA44] text-white shadow-inner'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {currentImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 bg-white"
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 leading-tight">{image.title}</h3>
                  <div className="flex items-center justify-between text-xs sm:text-sm mb-2 sm:mb-3">
                    <span className="bg-[#6DAA44] px-2 sm:px-3 py-1 rounded-full font-semibold">
                      {image.category}
                    </span>
                    <span className="flex items-center gap-1">
                      ❤️ {image.likes}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span>by {image.photographer}</span>
                    <span className="text-right">{image.location}</span>
                  </div>
                </div>

                {/* Enhanced Hover Actions */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="bg-black/50 text-white p-1 sm:p-2 rounded-full backdrop-blur-sm transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                    <FaExpand className="text-sm sm:text-base" />
                  </div>
                </div>
              </div>

              {/* Quick Info Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-8 sm:mb-12 px-2">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transform hover:-translate-y-1 flex items-center gap-2 font-semibold text-sm sm:text-base"
            >
              <FaArrowLeft className="text-[#6DAA44] text-sm sm:text-base" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <div className="flex items-center space-x-1 sm:space-x-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 text-xs sm:text-sm ${
                        currentPage === pageNumber
                          ? 'bg-gradient-to-r from-[#6DAA44] to-green-600 text-white shadow-xl sm:shadow-2xl scale-110'
                          : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md sm:shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                  return (
                    <span key={pageNumber} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-500 font-bold text-xs sm:text-sm">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <button
              onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transform hover:-translate-y-1 flex items-center gap-2 font-semibold text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Next</span>
              <FaArrowRight className="text-[#6DAA44] text-sm sm:text-base" />
            </button>
          </div>
        )}

        {/* Enhanced Image Counter */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 sm:gap-4 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg text-xs sm:text-sm">
            <span className="text-gray-700">
              Page <span className="font-bold text-[#6DAA44]">{currentPage}</span> of <span className="font-bold">{totalPages}</span>
            </span>
            <span className="w-1 h-4 sm:h-6 bg-gray-300"></span>
            <span className="text-gray-600">
              Images <span className="font-bold">{indexOfFirstImage + 1}-{Math.min(indexOfLastImage, filteredImages.length)}</span> of <span className="font-bold">{filteredImages.length}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl lg:max-w-6xl w-full max-h-[85vh] sm:max-h-[90vh] animate-modalIn">
            {/* Enhanced Red Close Button */}
            <button
              onClick={closeModal}
              className="close-button absolute -top-10 sm:-top-12 right-0 sm:right-2 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-2xl border-2 border-red-300"
            >
              <FaTimes className="text-lg sm:text-xl md:text-2xl" />
            </button>

            {/* Enhanced Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 text-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group"
            >
              <FaChevronLeft className="text-lg sm:text-xl md:text-2xl group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 text-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 group"
            >
              <FaChevronRight className="text-lg sm:text-xl md:text-2xl group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Enhanced Image Container */}
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#6DAA44] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  onLoad={handleImageLoad}
                  className={`max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-xl sm:rounded-2xl transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>

            
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalIn {
          from { 
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        .animate-modalIn {
          animation: modalIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;