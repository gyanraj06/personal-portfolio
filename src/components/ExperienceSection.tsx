import React, { useState } from "react";
import { projects, type Project } from "../data/projects";
import ProjectDrawer from "./ProjectDrawer";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CardArrow = ({ size = "sm" }: { size?: "sm" | "md" }) => (
  <div
    className={`
      bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110
      ${size === "md"
        ? "w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] md:w-[44px] md:h-[44px] bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6"
        : "w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[38px] md:h-[38px] bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-4 md:left-4"
      }
      absolute
    `}
  >
    <ArrowIcon />
  </div>
);

const ExperienceSection: React.FC = () => {
  const marqueeText = " PROJECTS * CASE STUDIES * WORKS * SHOWCASE ";
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const closeDrawer = () => setDrawerOpen(false);

  const [tpc, unity, hh, divyafal, portfolio] = projects;

  return (
    <div id="work" className="relative w-full bg-black py-10 sm:py-12 md:py-16">
      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="marquee-container mb-1">
          <div className="marquee-content marquee-ltr">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            ))}
          </div>
        </div>
        <div className="marquee-container mb-1">
          <div className="marquee-content marquee-rtl">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="marquee-text marquee-text-white text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            ))}
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee-content marquee-ltr">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="marquee-text text-xl sm:text-2xl md:text-3xl">{marqueeText}</span>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>

      {/* Cards */}
      <div className="w-full mt-8 sm:mt-10 md:mt-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[85px]">

        {/* Card 1 — Trip Pe Chalo (full width) */}
        <div className="experience-card w-full">
          <div className="relative group cursor-pointer" onClick={() => openProject(tpc)}>
            <img
              src={tpc.cardImage}
              alt={tpc.title}
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover rounded-[16px] sm:rounded-[22px] md:rounded-[28px]"
            />
            <CardArrow size="md" />
          </div>
          <div className="mt-3 sm:mt-4 md:mt-5">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-light mb-1 sm:mb-2">{tpc.title}</h3>
            <p className="text-white/70 text-xs sm:text-sm md:text-base font-light leading-relaxed">{tpc.tagline}</p>
          </div>
        </div>

        {/* Cards 2 & 3 — Unity + Happy Holidays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
          {[unity, hh].map((project) => (
            <div key={project.id} className="experience-card w-full">
              <div className="relative group cursor-pointer" onClick={() => openProject(project)}>
                <img
                  src={project.cardImage}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-[16px] sm:rounded-[22px] md:rounded-[28px]"
                />
                <CardArrow size="sm" />
              </div>
              <div className="mt-3 sm:mt-4 md:mt-5">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-light mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm md:text-base font-light leading-relaxed">{project.description.split(".")[0]}.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cards 4 & 5 — Divyafal + Personal Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
          {[divyafal, portfolio].map((project) => (
            <div key={project.id} className="experience-card w-full">
              <div className="relative group cursor-pointer" onClick={() => openProject(project)}>
                <img
                  src={project.cardImage}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-[16px] sm:rounded-[22px] md:rounded-[28px]"
                />
                <CardArrow size="sm" />
              </div>
              <div className="mt-3 sm:mt-4 md:mt-5">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-light mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm md:text-base font-light leading-relaxed">{project.tagline}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ProjectDrawer project={selectedProject} isOpen={drawerOpen} onClose={closeDrawer} />
    </div>
  );
};

export default ExperienceSection;
