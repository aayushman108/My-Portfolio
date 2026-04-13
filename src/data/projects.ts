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
  features?: {
    current: string[];
    inProgress: string[];
    planned: string[];
  };
}

export const PROJECTS: Project[] = [
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
    status: "In-Progress",
    features: {
      current: ["Interactive Quizzes", "Sustainability Tips"],
      inProgress: [],
      planned: ["Social Media Sharing", "Leaderboards", "Community Forums"],
    },
  },
 {
  id: 6,
  title: "Expensora",
  description: "Expensora is a smart expense management and bill-splitting platform designed for individuals and groups. It enables users to efficiently track personal and shared expenses, manage group finances, and simplify settlements through intelligent algorithms. With flexible splitting options and detailed monthly insights, Expensora helps users maintain financial clarity and accountability.",
  tech: ["Next.js", "TypeScript", "Redux", "GSAP", "Node.js", "Express", "PostgreSQL", "Knex.js"],
  github: "https://github.com/aayushman108/expense-routine-tracker",
  live: "https://expensora.netlify.app",
  year: "2026",
  category: "Web App",
  type: "Personal",
  image: "/images/expensora.png",
  status: "In-Progress",
  features: {
    current: [
      "User authentication and account management",
      "Create and manage expense groups",
      "Track personal and group expenses",
      "Flexible bill splitting (equal, percentage-based, and custom amounts)",
      "Smart settlement system to minimize transactions",
      "Monthly expense insights (overall, personal, and group-wise)"
    ],
    inProgress: [
      "Automated monthly settlement email notifications",
      "Admin-triggered email reminders for pending settlements"
    ],
    planned: [
      "Group chat for seamless communication",
      "Downloadable expense reports",
      "Email notifications and alerts",
      "Receipt scanning and expense extraction",
      "Multi-currency support"
    ],
  },
},
 {
  id: 7,
  title: "Annapurna",
  description: "A modern restaurant web application focused on delivering an immersive dining experience through a visually rich and responsive UI. Built as a frontend-first platform with a scalable architecture to support future backend integration and operational automation.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  github: "https://github.com/aayushman108/Restaurant-app",
  live: "https://annapurnafoodz.netlify.app",
  year: "2026",
  category: "Web App",
  type: "Personal",
  image: "/images/restaurant.png",
  status: "In-Progress",
  features: {
    current: [
      "Responsive UI across devices",
      "Interactive Digital Menu",
      "Smooth animations",
      "Multi-page navigation (Home, About, Contact, Book a Table)"
    ],
    inProgress: [],
    planned: [
      "Backend API Integration (Express + PostgreSQL)",
      "Table Reservation System",
      "Contact Form API",
      "Online Payment Gateway Integration",
      "Admin Dashboard for Restaurant Management",
      "Order Management System",
      "User Authentication & Roles"
    ],
  },
},
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
  id: 8,
  title: "Business Onboarding Platform",
  description:
    "A full-stack platform designed to help businesses onboard and grow through digital marketing services. It provides structured onboarding flows, service exploration, pricing plans, and seamless payment gateway integration.",
  tech: ["Next.js", "TypeScript", "Node.js", "Integrated APIs"],
  github: "#",
  live: "#",
  year: "2025",
  category: "Web App",
  type: "Company",
  image: undefined,
  status: "Completed",
  features: {
    current: [
      "Business onboarding workflow",
      "Landing and detailed service pages",
      "Dynamic pricing plans",
      "Payment gateway integration"
    ],
    inProgress: [],
    planned: [],
  },
},
{
  id: 9,
  title: "Matrimonial Platform",
  description:
    "A matchmaking platform enabling users to discover potential partners through intelligent suggestions, real-time chat, and advanced search capabilities.",
  tech: ["Next.js", "Node.js", "Express"],
  github: "#",
  live: "#",
  year: "2026",
  category: "Web App",
  type: "Company",
  image: undefined,
  status: "Completed",
  features: {
    current: [
      "User matchmaking system",
      "Real-time chat",
      "Profile-based suggestions",
      "Advanced search and filtering"
    ],
    inProgress: [],
    planned: [],
  },
}
];
