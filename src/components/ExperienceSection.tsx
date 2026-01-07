import React from 'react';

const ExperienceSection: React.FC = () => {
  const marqueeText = " PROJECTS * CASE STUDIES * WORKS * SHOWCASE ";

  return (
    <div id="work" className="relative w-full bg-black py-10 sm:py-12 md:py-16">
      {/* Marquee Container with overflow hidden and gradients */}
      <div className="relative overflow-hidden">
        {/* First Marquee - Left to Right (Grey) */}
        <div className="marquee-container mb-1">
          <div className="marquee-content marquee-ltr">
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
          </div>
        </div>

        {/* Middle Marquee - Right to Left (White) */}
        <div className="marquee-container mb-1">
          <div className="marquee-content marquee-rtl">
            <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
          </div>
        </div>

        {/* Bottom Marquee - Left to Right (Grey) */}
        <div className="marquee-container">
          <div className="marquee-content marquee-ltr">
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            <span className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
          </div>
        </div>

        {/* Left gradient overlay - only for marquees */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />

        {/* Right gradient overlay - only for marquees */}
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>

      {/* Experience Cards Section */}
      <div className="w-full mt-12 sm:mt-16 md:mt-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[85px]">
        {/* Card 1 - Full width */}
        <div className="experience-card w-full">
          <div className="relative group cursor-pointer">
            <img
              src="/experience-card-1.png"
              alt="Experience project"
              className="w-full h-auto object-cover rounded-[25px] sm:rounded-[35px] md:rounded-[50px]"
            />
            {/* Arrow in bottom left corner */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Description below card */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3">Trip Pe Chalo</h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              From local events to large-scale experiences, manage smarter bookings, streamline operations, and grow your events and adventure business with ease.
            </p>
          </div>
        </div>

        {/* Cards 2 & 3 - Two column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          {/* Card 2 - Unity */}
          <div className="experience-card w-full">
            <div className="relative group cursor-pointer">
              <img
                src="/Frame-5.png"
                alt="Unity project"
                className="w-full h-auto object-cover rounded-[25px] sm:rounded-[35px] md:rounded-[50px]"
              />
              {/* Arrow in bottom left corner */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-5 sm:h-5 md:w-6 md:h-6"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description below card */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3">Unity</h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Production grade flutter app design and development for UNITY, an e-scooty brand based out of Bangalore, India on their 4th anniversary.
              </p>
            </div>
          </div>

          {/* Card 3 - Happy Holidays */}
          <div className="experience-card w-full">
            <div className="relative group cursor-pointer">
              <img
                src="/hh1.png"
                alt="Happy Holidays project"
                className="w-full h-auto object-cover rounded-[25px] sm:rounded-[35px] md:rounded-[50px]"
              />
              {/* Arrow in bottom left corner */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-5 sm:h-5 md:w-6 md:h-6"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description below card */}
            <div className="mt-4 sm:mt-6 md:mt-8">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3">Happy Holidays</h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                A comprehensive Booking Management System (BMS) for managing property bookings, inventory, and guest experiences. Built with Next.js, Supabase, and Firebase.
              </p>
            </div>
          </div>
        </div>

        {/* Cards 5 & 6 - Two column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          {/* Card 5 - Divyafal */}
          <div className="experience-card w-full">
            <div className="relative group cursor-pointer">
              <img
                src="/Frame-39.png"
                alt="Divyafal project"
                className="w-full h-auto object-cover rounded-[25px] sm:rounded-[35px] md:rounded-[50px]"
              />
              {/* Arrow in bottom left corner */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-5 sm:h-5 md:w-6 md:h-6"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description below card */}
            <div className="mt-8">
              <h3 className="text-white text-2xl md:text-3xl font-light mb-3">Divyafal</h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Website and E-commerce implementation for Bhopal based designer studio.
              </p>
            </div>
          </div>

          {/* Card 6 - Personal Portfolio */}
          <div className="experience-card w-full">
            <div className="relative group cursor-pointer">
              <img
                src="/Frame-40.png"
                alt="Personal Portfolio project"
                className="w-full h-auto object-cover rounded-[25px] sm:rounded-[35px] md:rounded-[50px]"
              />
              {/* Arrow in bottom left corner */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform -rotate-45 transition-transform group-hover:rotate-[-5deg] sm:w-5 sm:h-5 md:w-6 md:h-6"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description below card */}
            <div className="mt-8">
              <h3 className="text-white text-2xl md:text-3xl font-light mb-3">Personal Portfolio</h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Managed multiple personal portfolios from different niches and ideologies, bringing ideas and shaping them into personal brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
