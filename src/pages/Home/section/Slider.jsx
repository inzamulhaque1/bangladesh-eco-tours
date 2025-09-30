import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight, HiPlay, HiPause } from "react-icons/hi";
import tiger from "../../../assets/Images/banner/tiger.jpg";
import cox from "../../../assets/Images/banner/cox.jpg";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [textAnimation, setTextAnimation] = useState(false);

  // Sample slides data - replace with your actual content
  const slides = [
  {
    id: 1,
    image: "https://miro.medium.com/1*bZ-wbouQDCxKoLKRkGLcBQ.jpeg",
    title: "Beauty of Bangladesh",
    subtitle: "Experience Nature Like Never Before",
    description:
      "Explore the breathtaking landscapes, rich culture, and incredible wildlife that make Bangladesh a unique destination for eco-tourism.",
    buttonText: "Start Your Journey",
    buttonLink: "/our-tours",
  },
  {
    id: 2,
    image: tiger,
    title: "Sundarbans Mangrove Forest",
    subtitle: "World's Largest Mangrove Forest",
    description:
      "Journey through the mystical Sundarbans, home to the Royal Bengal Tiger and countless species of birds and marine life.",
    buttonText: "Explore Sundarbans",
    buttonLink: "/tours/sundarbans",
  },
  {
    id: 3,
    image: cox,
    title: "Serene Paradise Cox’s Bazar",
    subtitle: "World's Longest Natural Beach",
    description:
      "Relax on the pristine shores of Cox's Bazar, stretching over 120 kilometers of golden sand and crystal-clear waters.",
    buttonText: "Visit Cox's Bazar",
    buttonLink: "/tours/coxs-bazar",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1633450417381-e5fee241e4e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Chittagong Hill Tracts",
    subtitle: "Chittagong Hill Tracts Experience",
    description:
      "Discover the rolling hills, tribal cultures, and spectacular waterfalls of Bangladesh's most scenic region.",
    buttonText: "Adventure Awaits",
    buttonLink: "/tours/hill-tracts",
  },
  {
    id: 5,
    image:
      "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/8513198.webp",
    title: "Cultural Heritage Tours",
    subtitle: "Rich History & Traditions",
    description:
      "Immerse yourself in Bangladesh's rich cultural heritage, ancient architecture, and vibrant local traditions.",
    buttonText: "Explore Culture",
    buttonLink: "/tours/cultural",
  },
];


  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Text animation trigger
  useEffect(() => {
    setTextAnimation(false);
    const timer = setTimeout(() => {
      setTextAnimation(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (isLoading) {
    return (
      <div className="relative h-screen bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">
            Loading Amazing Experiences...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden bg-black ">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? "scale(1.02)" : "scale(1)",
              }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0  bg-opacity-40"></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6 p-4 sm:p-6 lg:p-8 rounded-3xl backdrop-blur-sm bg-gradient-to-br from-black/40 to-black/20 border border-white/10 shadow-2xl">
              <div className="overflow-hidden">
                <div
                  className={`transform transition-all duration-700 ease-out ${
                    textAnimation
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="h-px bg-green-400 w-12 mr-4"></div>
                    <p className="text-green-400 font-semibold text-lg tracking-wide">
                      {slides[currentSlide]?.subtitle}
                    </p>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    {slides[currentSlide]?.title}
                  </h1>
                </div>
              </div>

              <div className="overflow-hidden">
                <p
                  className={`text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed transform transition-all duration-700 ease-out delay-100 ${
                    textAnimation
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {slides[currentSlide]?.description}
                </p>
              </div>

              <div className="overflow-hidden pt-4">
                <div
                  className={`transform transition-all duration-700 ease-out delay-200 ${
                    textAnimation
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <a
                    href={slides[currentSlide]?.buttonLink}
                    className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold rounded-br-full rounded-tl-full hover:from-green-600 hover:to-lime-500 transform  transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    {slides[currentSlide]?.buttonText}
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                {["Guided Tours", "Eco-Friendly", "Local Guides"].map(
                  (feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-2 transform transition-all duration-700 ease-out delay-${
                        300 + idx * 100
                      } ${
                        textAnimation
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right side decoration */}
            <div className="hidden lg:block relative">
              <div className="absolute top-10 right-10 w-20 h-20 bg-green-500/20 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-20 right-0 w-32 h-32 bg-green-400/10 rounded-full animate-bounce"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-ping"
                style={{ animationDuration: "4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* desk */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute  left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 group z-10"
      >
        <HiChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 group z-10"
      >
        <HiChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
      </button>

      {/* mobile */}
      <button
        onClick={prevSlide}
        className=" md:hidden absolute  left-4 bottom-4  bg-white/20 backdrop-blur-sm text-white p-2 rounded-l-full"
      >
        <HiChevronLeft className="w-6 h-6 " />
      </button>
      
      <button
        onClick={nextSlide}
        className=" md:hidden absolute  right-4 bottom-4  bg-white/20 backdrop-blur-sm text-white p-2 rounded-r-full"
      >
        <HiChevronRight className="w-6 h-6 " />
      </button>

      

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-12 h-3 bg-lime-500"
                  : "w-3 h-3 bg-white hover:bg-lime-500"
              }`}
            >
              {index === currentSlide && (
                <div className="absolute top-0 left-0 h-full bg-white/30 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="hidden md:flex absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10"
      >
        {isPlaying ? (
          <HiPause className="w-5 h-5" />
        ) : (
          <HiPlay className="w-5 h-5 ml-0.5" />
        )}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        ></div>
      </div>

      
    </div>
  );
};

export default Slider;
