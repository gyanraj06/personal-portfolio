export type Project = {
  id: string;
  title: string;
  category: string;
  services: string;
  tagline: string;
  description: string;
  tags: string[];
  sector: string;
  founded: string;
  stage: string;
  team: string;
  problem: string;
  solution: string;
  website: string;
  images: string[];
  cardImage: string;
};

export const projects: Project[] = [
  {
    id: "trippechalo",
    title: "Trip Pe Chalo",
    category: "SaaS Platform",
    services: "Product Design · Development · Strategy",
    tagline: "Empowering Businesses. Simplifying Ticketing. Maximizing Revenues.",
    description:
      "From local events to large-scale experiences, manage smarter bookings, streamline operations, and grow your events and adventure business with ease. Trip Pe Chalo is a full-stack event and ticketing management platform built for operators, not just attendees.",
    tags: ["React", "Node.js", "PostgreSQL", "Figma", "Razorpay", "Firebase"],
    sector: "Travel & Events",
    founded: "2024",
    stage: "Live",
    team: "Founder-led, 3 members",
    problem:
      "Event and adventure operators in India lacked an affordable, all-in-one platform to manage bookings, ticketing, and revenue — forcing them to juggle WhatsApp, spreadsheets, and cash.",
    solution:
      "Built a SaaS platform with a white-label booking engine, real-time seat management, QR-based check-in, and a revenue dashboard — giving operators a single command center for their business.",
    website: "",
    images: ["/experience-card-1.png"],
    cardImage: "/experience-card-1.png",
  },
  {
    id: "unity",
    title: "Unity",
    category: "Mobile App",
    services: "App Design · Flutter Development",
    tagline: "A production-grade app for UNITY's 4th anniversary.",
    description:
      "Production grade flutter app design and development for UNITY, an e-scooty brand based out of Bangalore, India. Built to celebrate their 4th anniversary with a feature-rich owner experience — range tracking, charge monitoring, live maps, and secure lock controls.",
    tags: ["Flutter", "Dart", "Figma", "Firebase", "Google Maps"],
    sector: "Electric Mobility",
    founded: "2024",
    stage: "Delivered",
    team: "Solo build",
    problem:
      "UNITY needed a polished companion app for their anniversary that showcased the smart features of their scooters while reflecting the brand's premium identity.",
    solution:
      "Designed and developed a full Flutter app with real-time range and charge data, sports mode toggle, GPS tracking, and a secure lock screen — delivered on time for the anniversary launch.",
    website: "",
    images: ["/Frame-5.png"],
    cardImage: "/Frame-5.png",
  },
  {
    id: "happyholidays",
    title: "Happy Holidays",
    category: "Web Platform",
    services: "Full Stack Development · UI Design",
    tagline: "A comprehensive Booking Management System for hospitality.",
    description:
      "A comprehensive Booking Management System (BMS) for managing property bookings, inventory, and guest experiences. Built with Next.js, Supabase, and Firebase — giving hospitality operators a clean admin interface with real-time availability and booking flows.",
    tags: ["Next.js", "Supabase", "Firebase", "TypeScript", "Tailwind CSS"],
    sector: "Hospitality",
    founded: "2024",
    stage: "Live",
    team: "2 members",
    problem:
      "Small hospitality businesses struggled with outdated booking systems that couldn't handle real-time inventory, multi-property management, or guest communication in one place.",
    solution:
      "Built a modern BMS with a live booking engine, room inventory management, guest experience flows, and an admin dashboard — all in a single Next.js + Supabase stack.",
    website: "",
    images: ["/hh1.png"],
    cardImage: "/hh1.png",
  },
  {
    id: "divyafal",
    title: "Divyafal",
    category: "E-Commerce",
    services: "Web Design · E-Commerce Development",
    tagline: "Website and e-commerce for a Bhopal-based designer studio.",
    description:
      "A full brand and e-commerce implementation for Divyafal, a designer studio based in Bhopal. The project covered brand identity through to a fully functional online store — blending editorial aesthetics with a seamless shopping experience.",
    tags: ["Shopify", "Figma", "Liquid", "CSS", "Brand Design"],
    sector: "Fashion & Design",
    founded: "2023",
    stage: "Live",
    team: "Solo build",
    problem:
      "Divyafal had a strong offline brand but no digital presence or way to sell their curated pieces to a wider audience.",
    solution:
      "Designed the full brand identity system and built an editorial-style e-commerce site that reflects the studio's aesthetic while making product discovery and checkout frictionless.",
    website: "",
    images: ["/Frame-39.png"],
    cardImage: "/Frame-39.png",
  },
  {
    id: "portfolios",
    title: "Personal Portfolios",
    category: "Web Design",
    services: "Design · Development · Personal Branding",
    tagline: "Turning people into brands, one portfolio at a time.",
    description:
      "Managed and delivered multiple personal portfolio websites across different niches — from designers and developers to writers and consultants. Each portfolio was tailored to the individual's voice, aesthetic, and goals, shaping their personal brand from scratch.",
    tags: ["React", "Next.js", "Figma", "Framer", "Tailwind CSS"],
    sector: "Creative Services",
    founded: "2022",
    stage: "Ongoing",
    team: "Solo",
    problem:
      "Professionals across fields had strong work but no compelling digital presence to showcase it — resulting in missed opportunities and weak first impressions.",
    solution:
      "Built bespoke portfolio sites that matched each person's personality and goals, with a clear narrative, curated case studies, and strong calls to action — resulting in better visibility and inbound leads.",
    website: "",
    images: ["/Frame-40.png"],
    cardImage: "/Frame-40.png",
  },
];
