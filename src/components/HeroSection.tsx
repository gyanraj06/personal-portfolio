import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-background.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/grid.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay for better text readability */}

      {/* Main content container */}
      <div className="relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[95px]">
        {/* Hero content */}
        <div className="max-w-5xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {/* Main headline with highlighted text */}
          <h1 className="text-[#D7E5FF] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-[1.15] tracking-tight">
            I am Gyanendra — I build products from{" "}
            <span className="text-[#3CDA64] italic">concept to code</span>,
            where strategy meets execution.
          </h1>

          {/* Description paragraph */}
          <div className="max-w-3xl pt-2 sm:pt-4 md:pt-6 lg:pt-8 space-y-3 sm:space-y-4">
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
              I got into product through implementation spending 15 months at
              Shipsy getting logistics systems live for enterprise clients
              across different geographies. That's where I learned the real
              distance between what's planned and what actually ships.
            </p>

            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
              Now I build products at{" "}
              <span className="text-[#3CDA64]">Mounterra Innovations</span> :
              solving on-ground operational problems through custom SaaS. I've
              owned full product cycles from the first blank doc to post
              production, writing solutions, designing in Figma, and writing
              code when it's the fastest way to move.
            </p>
          </div>

          {/* Arrow below paragraph - visible only on mobile */}
          <div className="flex md:hidden justify-center pt-8 pb-4">
            <div className="arrow-bounce">
              <img src="/arrow.svg" alt="Scroll down" className="h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Arrow down on right side - visible only on tablet and desktop */}
      <div className="hidden md:block absolute right-4 sm:right-6 md:right-8 lg:right-12 z-20 arrow-bounce bottom-[15%] sm:bottom-[18%] md:bottom-[20%]">
        <img
          src="/arrow.svg"
          alt="Scroll down"
          className="h-2 sm:h-2.5 md:h-3"
        />
      </div>

      {/* Subtle bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
