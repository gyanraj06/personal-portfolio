import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle header hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Only show header when at the top
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen, lastScrollY]);

  return (
    <div id="home" className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/hero-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/grid.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Dark overlay for better text readability */}
      

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 md:hidden transition-all duration-300 ease-in-out rounded-b-3xl ${
          isMobileMenuOpen ? 'translate-y-0 z-50 opacity-100' : '-translate-y-full z-[-1] opacity-0'
        }`}
        style={{
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          background: 'rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-6 py-5">
          <img src="/Subtract.png" alt="Logo" className="h-8" />
          <button
            onClick={toggleMobileMenu}
            className="text-white text-3xl hover:text-[#3CDA64] transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center justify-start space-y-6 px-6 py-8 pb-10">
          <a
            href="#home"
            onClick={toggleMobileMenu}
            className="text-white text-xl font-light hover:text-[#3CDA64] transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMobileMenu}
            className="text-white text-xl font-light hover:text-[#3CDA64] transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={toggleMobileMenu}
            className="text-white text-xl font-light hover:text-[#3CDA64] transition-colors"
          >
            Contact
          </a>
          <a
            href="#work"
            onClick={toggleMobileMenu}
            className="bg-[#3CDA64] text-white text-xl font-semibold hover:bg-[#34c257] transition-colors px-6 py-2 rounded-lg"
          >
            Work
          </a>
        </nav>
      </div>

      {/* Header with Logo and Navigation */}
      <div
        className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[95px] py-4 sm:py-6 md:py-8 transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Logo in top left */}
        <div>
          <img src="/Subtract.png" alt="Substract" className="h-8 sm:h-10 md:h-12" />
        </div>

        {/* Navigation menu in top right - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          <a href="#home" className="nav-link text-white text-sm lg:text-base font-normal">
            <span data-text="Home">Home</span>
          </a>
          <a href="#about" className="nav-link text-white text-sm lg:text-base font-normal">
            <span data-text="About">About</span>
          </a>
          <a href="#contact" className="nav-link text-white text-sm lg:text-base font-normal">
            <span data-text="Contact">Contact</span>
          </a>
          <a href="#work" className="bg-[#3CDA64] text-black text-sm lg:text-base font-semibold px-4 lg:px-5 py-1.5 rounded-lg hover:bg-[#34c257] transition-colors">
            Work
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl z-50 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[95px]">
        {/* Hero content */}
        <div className="max-w-5xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {/* Main headline with highlighted text */}
          <h1 className="text-[#D7E5FF] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-[1.15] tracking-tight">
            I am Gyanendra — I build products from <span className="text-[#3CDA64] italic">concept to code</span>, where strategy meets execution.
          </h1>

          {/* Description paragraph */}
          <div className="max-w-3xl pt-2 sm:pt-4 md:pt-6 lg:pt-8 space-y-3 sm:space-y-4">
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
              Currently working on my favorite project - <span className="text-[#3CDA64]">TripPeChalo</span>. Previously at Shipsy, where I spent 15 months shipping logistics products across global markets, from concept to production.
            </p>

            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
              Above this, as a freelancer, I've been crafting design and user experience for native products, blending aesthetic vision with <span className="text-[#3CDA64]">user-centered strategies</span> to create digital experiences that engage and resonate deeply.
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
        <img src="/arrow.svg" alt="Scroll down" className="h-2 sm:h-2.5 md:h-3" />
      </div>

      {/* Subtle bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
        }}
      ></div>
    </div>
  );
};

export default HeroSection;