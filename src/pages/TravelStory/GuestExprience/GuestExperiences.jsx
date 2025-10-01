/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { 
  Star,
  Quote,
  MapPin,
  Heart,
  Users,
  Globe
} from 'lucide-react';

const GuestExperiences = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Hannu & Jaana',
      location: 'Finland',
      image: 'https://bangladeshecotours.com/wp-content/uploads/2019/02/Hannu-Jaana-300x200.jpg',
      flag: '🇫🇮',
      quote: `Bangladesh Ecotours made an excellent tailoring for our week in Bangladesh in autumn of 2017. We are a couple from Finland, focused on active cultural and nature journeys around all continents, mostly outside of tourist centers. We prefer local agents and use public transport for to get near of actual life. In one week we can't imagine to get more experiences in a state, which is more known as an under developed, than a tourist country.

Other as important factor was our well educated guide Nirupaum. Our journey was busy, but Niru always made it flexible for our hopes. We can't praise too much Bangladesh cuisine, remembering especially mustard oil-tasting breakfasts, what easily reached the world class.

Our route was started from Dhaka to Southeast via Bandarban and Chittagong Hill tracks up to Ruma. On return we were introduced on Chittagong's ship breaking industry and salt refining. In the Ganges delta we sailed by a paddle steamer to Mongla and in Sundarban mangrove area by boat. If we ever in future get a new possibility travel in Bangladesh again, we certainly ask Didar to organize it. We warmly recommend the secure services for real originality focused travelers.

Namoshkar!`,
      scenicImage: 'https://bangladeshecotours.com/wp-content/uploads/2019/02/Hannu-Jaana-300x200.jpg'
    },
    {
      id: 2,
      name: 'Pamela & Nigel Jennings',
      location: 'London, UK',
      image: 'https://bangladeshecotours.com/wp-content/uploads/2018/03/20180121_153651-300x169.jpg',
      flag: '🇬🇧',
      quote: `Bangladesh is a fascinating country with a lot to offer to those who are looking for something a bit out of the ordinary. The culture and people were a particular highlight for us and to see how the people live and eat was extremely interesting. We are great wildlife fans and the Sundarbans were also a particular highlight.

The trip was largely made by our guide Mostafa, who was interesting and enthusiastic and worked extremely hard. There are also some wonderful antiquities in Bangladesh but our enjoyment of them was hampered by the fact that the associated museums are of very low quality by European standards with the quality of display and explanation being particularly poor. However, this drawback was more than compensated for by the high quality of the sights and experiences and the high ability of our guide. I can say is that we had an excellent trip.`,
      scenicImage: 'https://bangladeshecotours.com/wp-content/uploads/2018/03/20180121_153651-300x169.jpg'
    },
    {
      id: 3,
      name: 'Dr. William Johnson',
      location: 'Seattle USA',
      image: 'https://img.freepik.com/free-vector/no-people-sign_78370-7014.jpg?semt=ais_hybrid&w=740&q=80',
      flag: '🇺🇸',
      quote: `"What you offer was definitely one of the most memorable and deeply moving travel experiences of my life, and I've been to far too many places to enumerate here. I do hope you'll be able to assist the indigenous people in their quest for a sustainable and fair existence. They certainly deserve it. Whatever we can learn from them will certainly make the planet a better place for all of us."`,
      scenicImage: 'https://freedomdestinations.co.uk/wp-content/uploads/AmericaTravellerwithflag.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 text-center bg-gray-50 mt-8 md:mt-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 px-2">
            Our Guests <span className="text-green-600">Experiences</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
            Real stories from travelers who discovered the authentic Bangladesh
          </p>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonials */}
      <section className="py-8 md:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="mb-12 md:mb-20 pb-8 md:pb-10 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md">
                  <div 
                    className="h-64 sm:h-72 md:h-80 lg:h-96 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.scenicImage})` }}
                  />
                </div>
                
                {/* Profile Card */}
                <div className="flex items-center mt-4 md:mt-6 p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 bg-cover bg-center rounded-full border-4 border-white shadow-md"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div className="ml-3 md:ml-4">
                    <div className="flex items-center">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mr-2">{testimonial.name}</h3>
                      <span className="text-xl md:text-2xl">{testimonial.flag}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1 text-sm md:text-base">
                      <MapPin className="text-green-600 w-3 h-3 md:w-4 md:h-4 mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2">
                <div className="h-full flex flex-col">
                  <Quote className="text-green-600 w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4" />
                  <div className="flex-grow">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line max-h-96 md:max-h-none overflow-y-auto">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex gap-1 mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div className="p-2 md:p-4">
            <Users className="mx-auto mb-2 md:mb-3 w-8 h-8 md:w-10 md:h-10" />
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">1000+</div>
            <div className="text-sm md:text-lg">Happy Travelers</div>
          </div>
          
          <div className="p-2 md:p-4">
            <Globe className="mx-auto mb-2 md:mb-3 w-8 h-8 md:w-10 md:h-10" />
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">50+</div>
            <div className="text-sm md:text-lg">Countries</div>
          </div>
          
          <div className="p-2 md:p-4">
            <Star className="mx-auto mb-2 md:mb-3 w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">5.0</div>
            <div className="text-sm md:text-lg">Average Rating</div>
          </div>
          
          <div className="p-2 md:p-4">
            <Heart className="mx-auto mb-2 md:mb-3 w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">100%</div>
            <div className="text-sm md:text-lg">Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12 px-4">
            Moments <span className="text-green-600">Captured</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0e?w=800&h=600&fit=crop'
            ].map((img, i) => (
              <div 
                key={i}
                className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 px-4 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4">
            Ready to Create Your <span className="text-green-400">Own Story?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Join our community of satisfied travelers and experience authentic Bangladesh
          </p>
          <button className="bg-green-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-green-700 transition-colors duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default GuestExperiences;