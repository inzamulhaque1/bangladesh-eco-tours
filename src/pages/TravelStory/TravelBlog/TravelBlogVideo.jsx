/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaPlay, FaCalendarAlt, FaUser, FaArrowRight, FaExternalLinkAlt, FaStar, FaQuoteLeft, FaMapMarkerAlt, FaVideo, FaNewspaper, FaBookOpen, FaGlobeAmericas, FaTimes, FaHeart, FaShare, FaDownload } from 'react-icons/fa';

const TravelBlogVideo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedItems, setLikedItems] = useState(new Set());

  const contentItems = [
    {
      id: 1,
      title: "Bradt Guide Comments",
      excerpt: "Chittagong's one & only local tour operator, this unique outfit specializes in Chittagong Hill Tracts tours & treks. Come recommended by international travel guides for authentic experiences.",
      fullContent: "Chittagong's premier local tour operator has been recognized by Bradt Travel Guides for its exceptional service in organizing tours and treks through the Chittagong Hill Tracts. With years of experience and deep local knowledge, we provide authentic cultural experiences that allow travelers to connect with indigenous communities while respecting their traditions and environment. Our guided tours include visits to remote tribal villages, traditional craft workshops, and breathtaking natural landscapes that few tourists ever get to see.",
      author: "Bradt Travel Guides",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "3 min read",
      type: "guide",
      icon: <FaBookOpen />,
      gradient: "from-emerald-500 to-green-600",
      featured: true,
      stats: "Featured in International Guide",
      externalLink: "https://www.bradtguides.com"
    },
    {
      id: 2,
      title: "Lonely Planet Feature",
      excerpt: "The world's largest travel guide book publisher Lonely Planet mentioned our company in their latest edition. Discover why we're recognized globally for sustainable tourism.",
      fullContent: "Lonely Planet, the world's most trusted travel guide publisher, has featured our company in their latest Bangladesh edition. We're recognized for our commitment to sustainable tourism practices that benefit local communities while preserving the natural environment. Our tours are designed to minimize environmental impact while maximizing cultural exchange and economic benefits for local residents.",
      author: "Lonely Planet",
      date: "2024-02-20",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      readTime: "4 min read",
      type: "publication",
      icon: <FaGlobeAmericas />,
      gradient: "from-green-500 to-emerald-600",
      featured: true,
      stats: "Global Recognition",
      externalLink: "https://www.lonelyplanet.com/bangladesh"
    },
    {
      id: 3,
      title: "Sundarbans Mangrove Forest",
      excerpt: "A travel story by Susannah Savage, a British travel writer who recently visited Sundarbans with our services. Experience the world's largest mangrove forest through her eyes.",
      fullContent: "British travel writer Susannah Savage embarked on an unforgettable journey through the Sundarbans, the world's largest mangrove forest. Her account captures the mystical beauty of this UNESCO World Heritage Site, where the Ganges, Brahmaputra, and Meghna rivers meet the Bay of Bengal.",
      author: "Susannah Savage",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "5 min read",
      type: "story",
      icon: <FaMapMarkerAlt />,
      gradient: "from-lime-500 to-green-600",
      featured: false,
      stats: "Wildlife Adventure"
    },
    {
      id: 4,
      title: "Beautiful Bangladesh - Land of Stories",
      excerpt: "Video production showcasing exotic nature and scenarios of Bangladesh. A visual journey through breathtaking landscapes and cultural richness.",
      fullContent: "Our latest video production takes viewers on an immersive visual journey through Bangladesh's most stunning landscapes and vibrant cultural scenes. From the tea gardens of Sreemangal to the river networks of Barisal.",
      author: "Production Team",
      date: "2024-02-14",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      readTime: "Watch Video",
      type: "video",
      icon: <FaVideo />,
      gradient: "from-teal-500 to-green-600",
      featured: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stats: "Visual Documentary"
    },
    {
      id: 5,
      title: "Stow on the Wold - Personal Journey",
      excerpt: "By Jeni Smith: A heartfelt story about family connections and heritage discovery. Experience the emotional journey of reconnecting with roots.",
      fullContent: "Jeni Smith's emotional journey back to her ancestral homeland in Bangladesh reveals the deep connections between family, heritage, and identity. Her story touches on the universal themes of belonging and self-discovery.",
      author: "Jeni Smith",
      date: "2024-01-28",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "6 min read",
      type: "story",
      icon: <FaQuoteLeft />,
      gradient: "from-emerald-400 to-green-500",
      featured: false,
      stats: "Personal Heritage"
    },
    {
      id: 6,
      title: "Visiting Roots by Ann",
      excerpt: "Ann Victoria's journey back to her homeland. A Bangladeshi raised in Denmark returns to discover her cultural heritage and personal identity.",
      fullContent: "Ann Victoria, raised in Denmark, returns to Bangladesh to explore her cultural roots and discover the homeland she only knew through family stories. Her journey is one of self-discovery and cultural reconnection.",
      author: "Ann Victoria",
      date: "2024-03-05",
      image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "4 min read",
      type: "story",
      icon: <FaStar />,
      gradient: "from-green-400 to-emerald-500",
      featured: false,
      stats: "Cultural Rediscovery"
    },
    {
      id: 7,
      title: "Bangladesh Discovery",
      excerpt: "By Aled Evans: An exploration of Dhaka and beyond. Discover the reality behind the expectations in this comprehensive travel account.",
      fullContent: "Aled Evans provides a comprehensive account of his travels through Bangladesh, exploring both the bustling capital of Dhaka and the serene countryside beyond.",
      author: "Aled Evans",
      date: "2024-01-22",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "7 min read",
      type: "story",
      icon: <FaNewspaper />,
      gradient: "from-teal-400 to-green-500",
      featured: false,
      stats: "Urban Exploration"
    },
    {
      id: 8,
      title: "Life Less Ordinary - Etihad Feature",
      excerpt: "Featured in Etihad Airways' in-flight magazine. Discover how our tours offer unique experiences that capture the essence of Bangladesh.",
      fullContent: "Featured in Etihad Airways' prestigious in-flight magazine, this article highlights how our tours capture the authentic essence of Bangladesh through unique, immersive experiences.",
      author: "Etihad Airways",
      date: "2024-02-18",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      readTime: "3 min read",
      type: "feature",
      icon: <FaStar />,
      gradient: "from-green-600 to-emerald-700",
      featured: true,
      stats: "Award Winning Feature",
      externalLink: "https://www.etihad.com/en-in/magazine"
    },
    {
      id: 9,
      title: "Time's Review - Facts and Tracts",
      excerpt: "Time Magazine's comprehensive review of Hill Tracts tourism. Essential reading for anyone planning to visit the tribal regions.",
      fullContent: "Time Magazine's comprehensive review provides essential insights for anyone planning to visit the tribal regions of the Hill Tracts, covering culture, logistics, and responsible tourism practices.",
      author: "Time Magazine",
      date: "2024-03-12",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "4 min read",
      type: "review",
      icon: <FaNewspaper />,
      gradient: "from-emerald-600 to-green-700",
      featured: false,
      stats: "Magazine Coverage",
      externalLink: "https://time.com"
    }
  ];

  const featuredItems = contentItems.filter(item => item.featured);
  const regularItems = contentItems.filter(item => !item.featured);

  // Handle Read More button click
  const handleReadMore = (item) => {
    setSelectedContent(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Handle Watch Video button click
  const handleWatchVideo = (item) => {
    if (item.videoUrl) {
      window.open(item.videoUrl, '_blank');
    } else {
      handleReadMore(item);
    }
  };

  // Handle external link clicks
  const handleExternalLink = (item) => {
    if (item.externalLink) {
      window.open(item.externalLink, '_blank');
    } else {
      handleReadMore(item);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContent(null);
    document.body.style.overflow = 'unset';
  };

  // Handle Share Story button
  const handleShareStory = () => {
    // In a real app, this would open a share dialog or form
    if (navigator.share) {
      navigator.share({
        title: 'Share Your Travel Story',
        text: 'I want to share my amazing travel experience with Bangladesh!',
        url: window.location.href,
      })
      .catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      window.open('/share-your-story', '_blank');
    }
  };

  // Handle Watch All Videos button
  const handleWatchAllVideos = () => {
    // Redirect to videos page or open video gallery
    window.open('/videos', '_blank');
  };

  // Handle like button
  const handleLike = (itemId, e) => {
    e.stopPropagation();
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  // Handle share button
  const handleShare = (item, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.excerpt,
        url: window.location.href + `?story=${item.id}`,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href + `?story=${item.id}`);
      alert('Link copied to clipboard!');
    }
  };

  // Handle download button (for images)
  const handleDownload = (item, e) => {
    e.stopPropagation();
    // In a real app, this would download the image
    const link = document.createElement('a');
    link.href = item.image;
    link.download = `${item.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle card click (opens modal or external link)
  const handleCardClick = (item) => {
    if (item.externalLink) {
      handleExternalLink(item);
    } else {
      handleReadMore(item);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50 py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto mt-16">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-20 px-2">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold mb-6 sm:mb-8 shadow-lg">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-bounce"></div>
              <span>Travel Chronicles</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-emerald-600 bg-clip-text text-transparent">
            Stories & Videos
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Immerse yourself in captivating travel stories, expert reviews, and breathtaking videos 
            from the heart of Bangladesh's most extraordinary destinations
          </p>
          
          <div className="w-32 sm:w-48 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto shadow-lg"></div>
        </div>

        {/* Featured Stories Section */}
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg">
              <FaStar className="text-lg sm:text-xl md:text-2xl" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Featured <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Highlights</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border border-green-100 cursor-pointer"
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(item)}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden h-60 sm:h-72 md:h-80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl font-semibold shadow-md flex items-center gap-2 border border-green-200 text-sm sm:text-base">
                    {item.icon}
                    <span className="capitalize">{item.type}</span>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/70 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-white/20">
                    {item.stats}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 sm:top-6 right-16 sm:right-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => handleLike(item.id, e)}
                      className={`p-2 rounded-full backdrop-blur-sm border ${
                        likedItems.has(item.id) 
                          ? 'bg-red-500 text-white border-red-600' 
                          : 'bg-white/20 text-white border-white/30'
                      } transition-colors duration-300`}
                    >
                      <FaHeart className={`text-sm ${likedItems.has(item.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button 
                      onClick={(e) => handleShare(item, e)}
                      className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 transition-colors duration-300 hover:bg-white/30"
                    >
                      <FaShare className="text-sm" />
                    </button>
                  </div>

                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-emerald-600 p-4 sm:p-5 md:p-6 rounded-full border border-emerald-200 transition-all duration-500 scale-90 group-hover:scale-100 shadow-lg">
                      <FaPlay className="text-lg sm:text-xl md:text-2xl ml-0.5 sm:ml-1" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 gap-2 sm:gap-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-1">
                        <FaUser className="text-green-500 text-xs sm:text-sm" />
                        <span className="truncate">{item.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-green-500 text-xs sm:text-sm" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs border border-green-200">
                      {item.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Animated Read More Button - NOW WORKING! */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      item.type === 'video' ? handleWatchVideo(item) : handleCardClick(item);
                    }}
                    className="group flex items-center gap-2 sm:gap-3 text-green-600 font-semibold hover:text-emerald-700 transition-all duration-300 transform hover:translate-x-1 text-sm sm:text-base"
                  >
                    <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                      {item.type === 'video' ? 'Watch Now' : (item.externalLink ? 'Read on Website' : 'Read More')}
                    </span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300 text-xs sm:text-sm" />
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className="absolute inset-[2px] rounded-2xl sm:rounded-3xl bg-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Stories Grid */}
        <div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg">
              <FaBookOpen className="text-lg sm:text-xl md:text-2xl" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
              More <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Travel Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {regularItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-green-100 h-full flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(item)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Image */}
                <div className="relative overflow-hidden h-40 sm:h-48 md:h-56 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Type Icon */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm text-gray-800 p-1.5 sm:p-2 rounded-lg border border-green-200">
                    {React.cloneElement(item.icon, { className: "text-sm sm:text-base" })}
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs border border-white/20">
                    {item.stats}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => handleLike(item.id, e)}
                      className={`p-1.5 rounded-full backdrop-blur-sm border text-xs ${
                        likedItems.has(item.id) 
                          ? 'bg-red-500 text-white border-red-600' 
                          : 'bg-white/20 text-white border-white/30'
                      } transition-colors duration-300`}
                    >
                      <FaHeart className={likedItems.has(item.id) ? 'fill-current' : ''} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2 sm:mb-3">
                    <div className="flex items-center gap-1 truncate">
                      <FaUser className="text-green-500 text-xs" />
                      <span className="truncate">{item.author}</span>
                    </div>
                    <div className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs border border-green-200 whitespace-nowrap">
                      {item.readTime}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-1">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-green-100">
                    <span className="text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        item.type === 'video' ? handleWatchVideo(item) : handleCardClick(item);
                      }}
                      className="group flex items-center gap-1 sm:gap-2 text-green-600 text-xs sm:text-sm font-semibold hover:text-emerald-700 transition-all duration-300"
                    >
                      <span>{item.type === 'video' ? 'Watch' : (item.externalLink ? 'Visit' : 'Read')}</span>
                      <FaArrowRight className="transform group-hover:translate-x-0.5 transition-transform duration-300 text-xs" />
                    </button>
                  </div>
                </div>

                {/* Hover Border */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className="absolute inset-[2px] rounded-xl sm:rounded-2xl bg-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-20">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-xl sm:shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full -translate-x-8 sm:-translate-x-12 -translate-y-8 sm:-translate-y-12"></div>
              <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full translate-x-8 sm:translate-x-12 translate-y-8 sm:translate-y-12"></div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 relative z-10">Share Your Journey</h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto relative z-10">
              Have an unforgettable travel story? Share your experience and inspire other adventurers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10">
              <button 
                onClick={handleShareStory}
                className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2 sm:gap-3 justify-center text-sm sm:text-base"
              >
                <FaExternalLinkAlt className="text-xs sm:text-sm" />
                Share Your Story
              </button>
              <button 
                onClick={handleWatchAllVideos}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Watch All Videos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Modal */}
      {isModalOpen && selectedContent && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-modalIn">
            {/* Modal Header */}
            <div className="relative p-6 border-b border-green-100">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition-colors duration-300 shadow-lg"
              >
                <FaTimes className="text-lg" />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`bg-gradient-to-r ${selectedContent.gradient} text-white p-3 rounded-xl`}>
                  {selectedContent.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedContent.title}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mt-2">
                    <span className="flex items-center gap-1">
                      <FaUser className="text-green-500" />
                      {selectedContent.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-green-500" />
                      {new Date(selectedContent.date).toLocaleDateString()}
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      {selectedContent.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {selectedContent.type === 'video' && selectedContent.videoUrl ? (
                <div className="mb-6">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedContent.videoUrl}
                      className="w-full h-64 sm:h-96"
                      title={selectedContent.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <img
                    src={selectedContent.image}
                    alt={selectedContent.title}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {selectedContent.fullContent}
                </p>
                
                {selectedContent.externalLink && (
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-600 mb-2">
                      This content is originally published on an external website.
                    </p>
                    <button
                      onClick={() => window.open(selectedContent.externalLink, '_blank')}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold text-sm flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Read Full Article on Website
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-green-100 bg-green-50 rounded-b-2xl sm:rounded-b-3xl">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  {selectedContent.stats} • Published on {new Date(selectedContent.date).toLocaleDateString()}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleLike(selectedContent.id, { stopPropagation: () => {} })}
                    className={`p-2 rounded-lg border ${
                      likedItems.has(selectedContent.id) 
                        ? 'bg-red-500 text-white border-red-600' 
                        : 'bg-white text-gray-700 border-green-200'
                    } transition-colors duration-300`}
                  >
                    <FaHeart className={likedItems.has(selectedContent.id) ? 'fill-current' : ''} />
                  </button>
                  <button
                    onClick={() => handleShare(selectedContent, { stopPropagation: () => {} })}
                    className="p-2 rounded-lg bg-white text-gray-700 border border-green-200 hover:bg-green-50 transition-colors duration-300"
                  >
                    <FaShare />
                  </button>
                  <button
                    onClick={() => handleDownload(selectedContent, { stopPropagation: () => {} })}
                    className="p-2 rounded-lg bg-white text-gray-700 border border-green-200 hover:bg-green-50 transition-colors duration-300"
                  >
                    <FaDownload />
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
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
          animation: fadeIn 0.3s ease-out;
        }
        .animate-modalIn {
          animation: modalIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default TravelBlogVideo;