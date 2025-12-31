export const PROJECTS = [
  {
    id: 1,
    title: "PHMIS - Poor Household Management Information System",
    description:
      "Government-led web application designed to digitize and manage data related to poor households across Nepal, supporting large-scale surveys, data processing, and household-level queries for inclusive welfare monitoring.",
    tech: ["React", "Redux Toolkit", "React Testing Library", "Vitest"],
    github: "#",
    live: "https://phmis.molcpa.gov.np/",
    year: "2025",
    category: "Web App",
    image: "/images/PHMIS.png",
  },
  {
    id: 2,
    title: "Rajdevi Engineering Consultancy Website",
    description:
      "Corporate website for an engineering consultancy firm showcasing company information, services, projects, milestones, and interactive map-based project visualization.",
    tech: ["Next.js", "Redux Toolkit", "Recharts", "Leaflet", "Strapi CMS"],
    github: "#",
    live: "https://rajdevi.com.np/",
    year: "2024",
    category: "Website",
    image: "/images/rajdevi.png",
  },
  {
    id: 3,
    title: "Online Sewa",
    description:
      "E-commerce platform offering online shopping features, promotional sections, community forums, and content-driven experiences for users.",
    tech: ["Next.js", "Redux Toolkit"],
    github: "#",
    live: "https://onlinesewa.com/",
    year: "2024",
    category: "Web App",
    image: "/images/onlinesewa.png",
  },
  {
    id: 4,
    title: "Dafinchi.ai",
    description:
      "AI-powered financial analysis platform that extracts insights from financial documents, enabling intelligent queries related to revenue, statements, and risk assessment.",
    tech: ["Next.js", "Redux Toolkit", "Clerk Authentication"],
    github: "#",
    live: "https://dafinchi.ai/",
    year: "2024",
    category: "Web App",
    image: "/images/dafinchi.png",
  },
] as const;
