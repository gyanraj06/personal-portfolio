import React from 'react';

const NumberExperienceSection: React.FC = () => {
  return (
    <div className="relative w-full bg-black py-12 sm:py-16 md:py-20">
      {/* Heading bar */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[85px]">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {/* Subheading */}
          <p className="text-[#3CDA64] text-2xs sm:text-sm md:text-base font-light">Experience</p>

          {/* Heading */}
          <h2 className="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight">
            It's not just about existence. Its about impact and cultivating a legacy that transcends
          </h2>
        </div>
      </div>

      {/* Experience stats grid - wavy layout */}
      <div className="w-full mt-10 sm:mt-12 md:mt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[85px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-7 md:p-8 flex flex-col justify-between h-[180px] sm:h-[200px] md:h-[220px]">
            <h3 className="text-white text-4xl sm:text-5xl md:text-6xl font-light">10+</h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Client projects for different industries and niche
            </p>
          </div>

          {/* Card 2 - offset down */}
          <div className="bg-[#1a1a1a] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-7 md:p-8 flex flex-col justify-between h-[180px] sm:h-[200px] md:h-[220px] lg:mt-12">
            <h3 className="text-white text-4xl sm:text-5xl md:text-6xl font-light">15+</h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Logo & Branding projects, from startups to MNCs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-7 md:p-8 flex flex-col justify-between h-[180px] sm:h-[200px] md:h-[220px]">
            <h3 className="text-white text-4xl sm:text-5xl md:text-6xl font-light">7+</h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Products use cases achieved from 0 to 1
            </p>
          </div>

          {/* Card 4 - offset down */}
          <div className="bg-[#1a1a1a] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-7 md:p-8 flex flex-col justify-between h-[180px] sm:h-[200px] md:h-[220px] lg:mt-12">
            <h3 className="text-white text-4xl sm:text-5xl md:text-6xl font-light">5+</h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Years of technical and coding experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberExperienceSection;
