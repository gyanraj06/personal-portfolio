import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
    <>
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
          <Link to="/">
            <img src="/Subtract.png" alt="Logo" className="h-8" />
          </Link>
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
            href="/#home"
            onClick={toggleMobileMenu}
            className="text-white text-xl font-light hover:text-[#3CDA64] transition-colors"
          >
            Home
          </a>
          <a
            href="/#work"
            onClick={toggleMobileMenu}
            className="text-white text-xl font-light hover:text-[#3CDA64] transition-colors"
          >
            Work
          </a>
          <a
            href="/#about"
            onClick={toggleMobileMenu}
            className="text-white text-xl font-light hover:text-[#3CDA64] transition-colors"
          >
            About
          </a>
          <a
            href="/#contact"
            onClick={toggleMobileMenu}
            className="text-white text-xl font-light hover:text-[#3CDA64] transition-colors"
          >
            Contact
          </a>
          <Link
            to="/resume"
            onClick={toggleMobileMenu}
            className="text-white text-xl font-light hover:text-[#3CDA64] transition-colors"
          >
            Resume
          </Link>
        </nav>
      </div>

      {/* Header with Logo and Navigation */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[95px] py-4 sm:py-6 md:py-8 transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Logo in top left */}
        <Link to="/">
          <img src="/Subtract.png" alt="Logo" className="h-8 sm:h-10 md:h-12" />
        </Link>

        {/* Navigation menu in top right - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
          <a href="/#home" className="nav-link text-white text-sm lg:text-base font-normal">
            <span data-text="Home">Home</span>
          </a>
          <a href="/#work" className="nav-link text-white text-sm lg:text-base font-normal">
            <span data-text="Work">Work</span>
          </a>
          <a href="/#about" className="nav-link text-white text-sm lg:text-base font-normal">
            <span data-text="About">About</span>
          </a>
          <a href="/#contact" className="nav-link text-white text-sm lg:text-base font-normal">
            <span data-text="Contact">Contact</span>
          </a>
          <Link to="/resume" className="nav-link text-white text-sm lg:text-base font-normal">
            <span data-text="Resume">Resume</span>
          </Link>
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
    </>
  );
};

export default Header;
