import React from 'react';

const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[95px] bg-black">
      {/* About Me heading centered */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white text-center mb-16 md:mb-20 lg:mb-24">
        About Me
      </h2>

      {/* Grid layout for content and image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start max-w-7xl mx-auto">
        {/* Text content */}
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
          <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            I'm Gyanendra, and I've been building things that make life a little simpler fueled by late-night coding sessions, endless cups of coffee, and a stubborn love for figuring out messy problems. What started as small side projects quickly snowballed into real-world experiments: working and designing interfaces, and figuring out what actually makes users smile.
          </p>

          <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            I've worn many hats along the way. From streamlining workflows at Shipsy to leading product experiences in my current project. I thrive on turning complexity into clarity, building patterns that scale, and shipping products with teams that move fast and think smarter.
          </p>

          <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            I like to think of myself as part coder, part designer, full-time problem solver. Always curious, always building, and always trying to leave things just a little bit better than I found them.
          </p>
        </div>

        {/* Image and contact info */}
        <div className="flex flex-col lg:items-end order-1 lg:order-2">
          <div className="mx-auto lg:mx-0 w-64 sm:w-72 md:w-80 lg:w-96">
            <div className="w-full aspect-square bg-gray-700 rounded-2xl overflow-hidden">
              <img
                src="/images/me.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white/40 text-xs italic mt-2 text-center">man, i really need a better photo</p>

            <div className="flex flex-col gap-4 text-center lg:text-left mt-6">
              <div>
                <p className="text-white/40 text-xs sm:text-sm font-light mb-1">Email</p>
                <a
                  href="mailto:nalaprasaddesigns@gmail.com"
                  className="text-white text-xs sm:text-sm md:text-base font-light hover:text-[#3CDA64] transition-colors"
                >
                  nalaprasaddesigns@gmail.com
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs sm:text-sm font-light mb-1">Location</p>
                <p className="text-white text-xs sm:text-sm md:text-base font-light">Bhopal, MP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;