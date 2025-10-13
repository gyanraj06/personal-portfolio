import React from 'react';

const ZeroToOneSection: React.FC = () => {
  return (
    <div className="relative w-full bg-black py-12 sm:py-16 md:py-20">
      {/* Heading bar */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {/* Subtitle */}
          <p className="text-[#3CDA64] text-2xs sm:text-sm md:text-base font-light">0 to 1</p>

          {/* Title */}
          <h2 className="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight">
            Strategize products, design and implement. Converting visions and ideas into products → 0 to 1.
          </h2>
        </div>
      </div>

      {/* Design and Strategy Section */}
      <div className="w-full mt-10 sm:mt-12 md:mt-16">
        {/* Section Heading */}
        <h3 className="text-white text-base sm:text-lg md:text-xl font-light text-center mb-6 sm:mb-8">
          Design and Strategy
        </h3>

        {/* Logos in one line */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 flex-wrap px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/Vector.png" alt="Figma" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">Figma</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/Group 9.png" alt="Photoshop" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">Photoshop</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/Group 10.png" alt="InDesign" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">InDesign</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/Group 11.png" alt="Jira" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">Jira</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/Vector-1.png" alt="n8n" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">n8n</span>
          </div>
        </div>
      </div>

      {/* Development Section */}
      <div className="w-full mt-10 sm:mt-12 md:mt-16">
        {/* Section Heading */}
        <h3 className="text-white text-base sm:text-lg md:text-xl font-light text-center mb-6 sm:mb-8">
          Development
        </h3>

        {/* Logos in one line */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 flex-wrap px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/dev-react.png" alt="React" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">React</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/dev-python.png" alt="Python" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">Python</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/dev-javascript.png" alt="Javascript" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">Javascript</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/dev-flutter.png" alt="Flutter" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">Flutter</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/dev-sql.png" alt="SQL" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">SQL</span>
          </div>
        </div>
      </div>

      {/* Tools and Platform Section */}
      <div className="w-full mt-10 sm:mt-12 md:mt-16">
        {/* Section Heading */}
        <h3 className="text-white text-base sm:text-lg md:text-xl font-light text-center mb-6 sm:mb-8">
          Tools and Platform
        </h3>

        {/* Logos in one line */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 flex-wrap px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/tools-vscode.png" alt="VS Code" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">VS Code</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/tools-postman.png" alt="Postman" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">Postman</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/tools-docker.png" alt="Docker" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">Docker</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/tools-firebase.png" alt="Firebase" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">Firebase</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-12 sm:w-14 md:w-16">
            <img src="/tools-github.png" alt="GitHub" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain" />
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-light">GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroToOneSection;
