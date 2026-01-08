import React, { useState } from 'react';

interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

const MyApproachSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const approachItems: AccordionItem[] = [
    {
      id: 1,
      title: 'User Research',
      description: 'I conduct thorough researchs, using methods like interviews, surveys, and analytics to gather qualitative and quantitative data. This guides design decisions, ensuring the final output.'
    },
    {
      id: 2,
      title: 'Prototyping & User Testing',
      description: 'I create interactive prototypes, facilitating user feedback through usability testing and iterative refinement for a user-friendly and intuitive product.'
    },
    {
      id: 3,
      title: 'User-Centered Design',
      description: 'I apply User-Centered Design principles, involving users from ideation to validation to ensure a positive and seamless experience throughout the process.'
    },
    {
      id: 4,
      title: 'Responsive & Accessible',
      description: 'I prioritize responsive and accessible design, ensuring the digital product is user-friendly across devices and abilities. This approach enhances the overall user experience.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="relative w-full bg-black py-12 sm:py-16 md:py-20">
      {/* Heading bar */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[85px]">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {/* Subheading */}
          <p className="text-[#3CDA64] text-xs sm:text-sm md:text-base font-light">My Approach</p>

          {/* Heading */}
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight">
            My all-encompassing approach and checklist that builds impactful brand outcomes.
          </h2>
        </div>
      </div>

      {/* Accordion List - Mobile Only */}
      <div className="md:hidden w-full mt-10 sm:mt-12 px-4 sm:px-8">
        <div className="flex flex-col gap-4 sm:gap-5">
          {approachItems.map((item) => (
            <div key={item.id}>
              {/* Accordion Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between py-4 sm:py-5 text-left hover:bg-white/5 transition-colors rounded-lg"
              >
                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                  <h3 className="text-white text-lg sm:text-xl font-light">
                    {item.title}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <div className="ml-4 flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-[#3CDA64] transition-transform duration-300 ${
                      openItem === item.id ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-4 sm:pb-5 px-4 sm:px-6 pt-2">
                  <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2x2 Grid - Desktop/Tablet */}
      <div className="hidden md:block w-full mt-10 sm:mt-12 md:mt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[85px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {approachItems.map((item) => (
            <div key={item.id} className="flex gap-4 sm:gap-5 md:gap-6">
              <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">{item.id}.</div>
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light">{item.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyApproachSection;
