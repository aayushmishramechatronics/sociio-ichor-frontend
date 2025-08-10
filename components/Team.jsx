'use client';
import Image from 'next/image';
import { FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Dilshaad Uzair",
    position: "Founding Member",
    image: "/assets/img/team/dilshaad.jpg", 
    linkedinUrl: "https://www.linkedin.com/in/mohammed-dilshaad-uzair-b8114717b/"
  },
  {
    id: 2,
    name: "Prateek Shewkani",
    position: "Founding Member",
    image: "/assets/img/team/prateek.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pratik-shewkani/"
  },
  {
    id: 3,
    name: "Insha Manowar",
    position: "Founding Member",
    image: "/assets/img/team/insha.jpg",
    linkedinUrl: "https://linkedin.com/in/insha-manowar/"
  },
  {
    id: 4,
    name: "Amulya Kollipara",
    position: "Founding Member",
    image: "/assets/img/team/amulya.jpg",
    linkedinUrl: "https://www.linkedin.com/in/amulya-kollipara/"
  },
  {
    id: 5,
    name: "Manorath Khanna",
    position: "Founding Member",
    image: "/assets/img/team/manorath.jpg",
    linkedinUrl: "https://linkedin.com/in/manorath-khanna/"
  },
  // Add more team members as needed
];

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 text-center group flex-shrink-0 w-72 sm:w-80 mx-2">
      <div className="relative mb-4 sm:mb-6">
        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
          <Image
            src={member.image}
            alt={member.name}
            width={128}
            height={128}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -bottom-1 sm:-bottom-2 right-1/2 transform translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label={`${member.name}'s LinkedIn Profile`}
        >
          <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </div>
      
      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-primary font-medium text-sm sm:text-base">{member.position}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(320);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive cards per view and card width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
        setCardWidth(288); // w-72 = 288px
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
        setCardWidth(320); // w-80 = 320px
        setIsMobile(false);
      } else {
        setCardsPerView(3);
        setCardWidth(320); // w-80 = 320px
        setIsMobile(false);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-slide (disabled on mobile for better UX)
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [maxIndex, isMobile]);

  return (
    <section className="py-12 sm:py-16 px-2 sm:px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our Diverse Team brings together Expertise, Creativity, and Passion to Deliver Exceptional Results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile, show as overlay on larger screens */}
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === 0}
                aria-label="Previous team members"
              >
                <FaChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === maxIndex}
                aria-label="Next team members"
              >
                <FaChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </>
          )}

          {/* Carousel Track */}
          <div className={`overflow-hidden ${isMobile ? 'mx-0' : 'mx-12'}`}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`
              }}
            >
              {teamMembers.map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons - Only show on mobile */}
          {isMobile && (
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === 0}
                aria-label="Previous team member"
              >
                <FaChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === maxIndex}
                aria-label="Next team member"
              >
                <FaChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Team Counter */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-xs sm:text-sm text-gray-500">
            Showing {currentIndex * cardsPerView + 1}-{Math.min((currentIndex + 1) * cardsPerView, teamMembers.length)} of {teamMembers.length} team members
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
