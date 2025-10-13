import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/gyanendrarajvaidhya/",
      ariaLabel: "Visit my LinkedIn profile"
    },
    {
      id: "github",
      label: "Github",
      url: "https://github.com/gyanraj06",
      ariaLabel: "Visit my GitHub profile"
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://instagram.com/thus.ubermensch",
      ariaLabel: "Visit my Instagram profile"
    }
  ];

  return (
    <footer id="contact" className="w-full bg-[#111111]">
      {/* Top Section with Tagline */}
      <div className="min-h-[80px] sm:min-h-[96px] flex items-center justify-center border-b border-white/10 px-4 sm:px-8 md:px-12 lg:px-[60px] py-4 sm:py-6">
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-light text-center" style={{ letterSpacing: '-0.96px', lineHeight: '1.3' }}>
          A quiet footprint in the endless hum of the internet.
        </p>
      </div>

      {/* Decorative SVG Wave Border */}
      <div className="w-full overflow-visible h-[50px] sm:h-[60px] md:h-[70px] mb-4 sm:mb-6 md:mb-8">
        <svg width="100%" height="70" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q 180 0 360 30 T 720 30 T 1080 30 T 1440 30 V 60 H 0 Z" fill="#111111" />
          <path d="M0 30 Q 180 60 360 30 T 720 30 T 1080 30 T 1440 30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Social Media Links Section */}
      <div className="pt-2 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-[30px]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="footer-link bg-black rounded-xl h-[42px] sm:h-[46px] text-white font-normal text-sm sm:text-base transition-transform hover:scale-105 hover:bg-black/80 overflow-hidden"
              style={{ letterSpacing: '-0.48px' }}
            >
              <span className="flip-text">{link.label}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flip-arrow"
              >
                <path
                  d="M3 13L13 3M13 3H5M13 3V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Button */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-[30px] mb-10 sm:mb-12 md:mb-16">
        <div className="max-w-2xl mx-auto">
          <a
            href="https://tally.so/r/mek4VQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#3CDA64] rounded-xl h-[42px] sm:h-[46px] flex items-center justify-center text-black font-medium text-sm sm:text-base transition-transform hover:scale-[1.02] hover:bg-[#3CDA64]/90"
            style={{ letterSpacing: '-0.48px' }}
          >
            Pitch, Ask, or Just Say Hi 👋
          </a>
        </div>
      </div>

      {/* Bottom Section with Logo and Contact */}
      <div className="min-h-[120px] sm:min-h-[135px] md:min-h-[151px] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-[60px] py-6 sm:py-8">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img src="/Subtract.png" alt="Logo" className="h-5 sm:h-6 object-contain" />
          <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left" style={{ letterSpacing: '-0.96px' }}>
            Gyanendra Rajvaidhya
          </span>
        </div>

        {/* Right Side - Email */}
        <a
          href="mailto:rajvaidhyag@gmail.com"
          className="text-white/40 text-xs sm:text-sm md:text-[15px] font-semibold hover:text-white/60 transition-colors text-center sm:text-right"
          style={{ letterSpacing: '-0.45px' }}
        >
          rajvaidhyag@gmail.com
        </a>
      </div>

      {/* Very bottom - Made manually text */}
      <div className="border-t border-white/10 px-4 sm:px-8 md:px-12 lg:px-[60px] py-4">
        <p className="text-white/30 text-xs sm:text-sm font-light italic text-center">
          proudly made manually, no framer and stuffs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
