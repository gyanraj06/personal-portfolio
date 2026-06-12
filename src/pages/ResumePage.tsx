import React, { useEffect } from 'react';
import Footer from '../components/Footer';

const experiences = [
  {
    role: 'Product Manager',
    company: 'Mounterra Innovations',
    duration: "Jul '25 – Present",
    description: [
      'Drove the 0-to-1 MVP launch of Trippechalo Experience OS, defining and prioritizing core flows for QR ticketing, live attendee tracking, and payment reconciliation — cutting event-ops turnaround time by 30%.',
      'Led GTM execution for Trippechalo, onboarding the first 3 anchor vendors and processing 100+ tickets across pilot events — validating product-market fit and converting early feedback into the next release cycle.',
      'Drove end-to-end development of a B2B sports-facility platform across iOS, Android & web — from use case definition to multi-city deployment, driving active adoption across 15+ facility owners.',
      'Conceived and delivered a hospitality management system for a government client, owning the full product cycle from requirements to delivery using AI-assisted development to ship on an accelerated timeline.',
      'Scoped multiple payment gateway integrations (Razorpay, Easebuzz, PhonePe) — owning requirements through delivery to enable secure in-platform transactions.',
      'Streamlined the engineering delivery pipeline — introduced structured PRDs, sprint rituals, and a tracking flow that improved on-time release rate and cut dev rework in half.',
    ],
    skills: ['Product Roadmapping', 'PRD/BRD', 'GTM Strategy', 'Figma', 'Wireframing', 'Google Analytics', 'Flutter', 'NextJS', 'React', 'Firebase', 'Notion', 'N8N'],
  },
  {
    role: 'Business Analyst',
    company: 'Shipsy',
    duration: "Apr '24 – Jul '25",
    description: [
      'Led end-to-end product implementations across multiple international markets, securing $250K+ in deal value through delivery of complex logistics ecosystems under strict deadlines.',
      "Engineered a full TMS platform implementation for Hellmann (Germany) — scaling operations from 1 to 5 countries with international integration workflows.",
      'Automated rate-card digitization to replace a manual process, cutting go-live time by 20–30 days per rollout and accelerating multiple client launches.',
      'Accelerated rollout of an on-demand delivery solution for a high-priority international client — completing it in 2 months against a 6-month timeline while enabling 90-minute SLA fulfillment.',
      'Owned end-to-end technical integration of 3PL carriers (FedEx, DHL Express, UPS, DX Delivery) — from scoping to delivery — expanding platform shipping coverage and giving clients multi-carrier flexibility.',
      'Designed and implemented primary replenishment solutions, leveraging route-optimization algorithms to drive a 30% reduction in client operational costs.',
      'Conducted on-site POC implementations for Samsonite and Aramex that led to major deal closures.',
      "Conceived and led a route-optimization initiative built on Uber's H3 geospatial indexing — owning problem framing, scope, delivery, and engineering alignment.",
      'Executed a portfolio of 7 implementation projects and 2 high-stakes POCs over 12 months with an 80% delivery success rate across varied geographies.',
      'Translated client logistics needs into structured BRD/PRD documents and KPI dashboards (On-Time Delivery, Rider Efficiency) that drove post-implementation product adoption.',
    ],
    skills: ['BRD / PRD', 'Data Analysis', 'SQL', 'KPI Definition', 'Excel / Google Sheets', 'Lucidchart', 'Jira', 'Confluence', 'Postman', 'Elastic Search', 'Automations'],
  },
];

const ResumePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full max-w-5xl mx-auto pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24 px-5 sm:px-8 md:px-12 lg:px-16">

        {/* Top row */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <div>
            <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-2">Work Experience</p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              Professional<br className="sm:hidden" /> <span className="text-[#3CDA64]">Timeline</span>
            </h1>
          </div>

          <a
            href="/Gyanendra Rajvaidhya Resume.pdf"
            download="Gyanendra_Rajvaidhya_Resume.pdf"
            className="group flex items-center gap-2 text-white/40 text-xs border border-white/10 px-4 py-2 rounded hover:text-white/80 hover:border-white/25 transition-all duration-200"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 15V3M12 15L8 11M12 15L16 11" />
              <path d="M4 19H20" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-0 md:gap-6 mb-14 sm:mb-16 md:mb-20 last:mb-0">

              {/* Left column — date (desktop only) */}
              <div className="hidden md:flex flex-col items-end pt-[5px] w-36 flex-shrink-0">
                <span className="text-white/30 text-xs text-right leading-relaxed">{exp.duration}</span>
              </div>

              {/* Spine column */}
              <div className="flex flex-col items-center mx-4 md:mx-5 flex-shrink-0">
                <div
                  className="w-[9px] h-[9px] rounded-full flex-shrink-0 mt-[5px] relative z-10"
                  style={{ background: '#3CDA64', boxShadow: '0 0 0 3px rgba(60,218,100,0.12)' }}
                />
                <div className="flex-1 w-px bg-white/8 mt-2" />
              </div>

              {/* Right column — content */}
              <div className="flex-1 min-w-0 pb-2">
                {/* Mobile date */}
                <span className="md:hidden block text-white/30 text-[11px] mb-2 tracking-wide">{exp.duration}</span>

                <h2 className="text-white text-lg sm:text-xl font-normal leading-snug">{exp.role}</h2>
                <p className="text-[#3CDA64] text-sm font-light mt-0.5 mb-5">{exp.company}</p>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                      <span className="text-white/20 mt-[6px] flex-shrink-0 w-1 h-1 rounded-full bg-white/20 block" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-white/35 border border-white/8 px-2.5 py-[5px] rounded-sm tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResumePage;
