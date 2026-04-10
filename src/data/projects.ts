export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  year: string;
  category: string;
  type: "Company" | "Personal";
  image?: string;
  status: "Completed" | "In-Progress";
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Government Welfare Management System",
    description:
      "Government-led web application designed to digitize and manage data related to poor households across Nepal, supporting large-scale surveys, data processing, and household-level queries for inclusive welfare monitoring.",
    tech: [
      "React",
      "Redux Toolkit",
      "Recharts",
      "Leaflet",
      "React Testing Library",
      "Vitest",
    ],
    github: "#",
    live: "#",
    year: "2025",
    category: "Web App",
    type: "Company",
    image: undefined,
    status: "Completed",
  },
  {
    id: 2,
    title: "Engineering Consultancy Website",
    description:
      "Corporate website for an engineering consultancy firm showcasing company information, services, projects, milestones, and interactive map-based project visualization.",
    tech: ["Next.js", "Redux Toolkit", "Recharts", "Leaflet", "Strapi CMS"],
    github: "#",
    live: "#",
    year: "2024",
    category: "Website",
    type: "Company",
    image: undefined,
    status: "Completed",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "E-commerce platform offering online shopping features, promotional sections, community forums, and content-driven experiences for users.",
    tech: ["Next.js", "Redux Toolkit"],
    github: "#",
    live: "#",
    year: "2024",
    category: "Web App",
    type: "Company",
    image: undefined,
    status: "Completed",
  },
  {
    id: 4,
    title: "AI Financial Analysis Platform",
    description:
      "AI-powered financial analysis platform that extracts insights from financial documents, enabling intelligent queries related to revenue, statements, and risk assessment.",
    tech: ["Next.js", "Redux Toolkit", "Clerk Authentication"],
    github: "#",
    live: "#",
    year: "2024",
    category: "Web App",
    type: "Company",
    image: undefined,
    status: "Completed",
  },
  {
    id: 5,
    title: "Envoware",
    description:
      "A premium, interactive web application promoting environmental awareness and healthy living through engaging eco-quizzes, daily sustainability tips, and rich, fluid animations.",
    tech: ["Next.js", "React", "Typescript", "SCSS", "GSAP"],
    github: "https://github.com/aayushman108/EcoAware",
    live: "https://envoware.netlify.app",
    year: "2025",
    category: "Web App",
    type: "Personal",
    image: "/images/eco.png",
    status: "Completed",
  },
  {
    id: 6,
    title: "Expensora",
    description: "A smart expense tracker and bill splitter for individuals and groups. Track personal finances, split bills with custom ratios, and seamlessly settle monthly debts.",
    tech: ["Next.js", "TypeScript", "Redux", "GSAP", "Express", "PostgreSQL", "Knex.js"],
    github: "https://github.com/aayushman108/expense-routine-tracker",
    live: "https://expensora.netlify.app",
    year: "2026",
    category: "Web App",
    type: "Personal",
    image: "/images/expensora.png",
    status: "In-Progress",
  },
 {
    id: 7, 
    title: "Annapurna | Taste of Himalayas",
    description: "A full-scale restaurant platform featuring interactive digital menus, automated table reservations, dynamic ordering capabilities, and seamless dining operations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Express", "PostgreSQL", "Knex.js"],
    github: "https://github.com/aayushman108/Restaurant-app",
    live: "#",
    year: "2026",
    category: "Web App",
    type: "Personal",
    image: "/images/restaurant.png",
    status: "In-Progress",
  },
];
