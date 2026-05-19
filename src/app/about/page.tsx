"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaBolt,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiVitest,
  SiJest,
  SiTestinglibrary,
  SiVite,
  SiGit,
} from "react-icons/si";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const expertise = [
  {
    title: "Complex Systems & Dashboards",
    description:
      "Architecting data-heavy CRM systems and internal dashboards with a focus on performance, state management, and clear data visualization.",
  },
  {
    title: "Real-time & Interactive Features",
    description:
      "Implementing real-time data streaming and push notification systems to create highly responsive, \"living\" interfaces.",
  },
  {
    title: "Secure Service Integration",
    description:
      "Integrating OAuth-based authentication, payment gateway workflows, and RESTful APIs into seamless, secure user journeys.",
  },
  {
    title: "UI/UX Fidelity",
    description:
      "Translating Figma designs into pixel-perfect, accessible (a11y) interfaces with fluid motion and high design fidelity.",
  },
  {
    title: "Engineering Quality",
    description:
      "Writing clean, testable code (Vitest/RTL) that scales in large, collaborative production codebases.",
  },
  {
    title: "Backend Foundation",
    description:
      "Working knowledge of Node.js, Express, and PostgreSQL, facilitating smooth integration and effective communication with backend teams.",
  },
];

const techStack = {
  "Frontend & UI Specialization": [
    { name: "JavaScript (ES6+)", icon: <SiJavascript size={20} /> },
    { name: "TypeScript", icon: <SiTypescript size={20} /> },
    { name: "React", icon: <SiReact size={20} /> },
    { name: "Next.js", icon: <SiNextdotjs size={20} /> },
    { name: "Redux Toolkit", icon: <SiRedux size={20} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
    { name: "GSAP", icon: <SiGreensock size={20} /> },
    { name: "Framer Motion", icon: <SiFramer size={20} /> },
  ],
  "Backend (Working Knowledge)": [
    { name: "Node.js", icon: <SiNodedotjs size={20} /> },
    { name: "Express", icon: <SiExpress size={20} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
  ],
  "Testing & Tooling": [
    { name: "Vitest", icon: <SiVitest size={20} /> },
    { name: "Jest", icon: <SiJest size={20} /> },
    { name: "React Testing Library", icon: <SiTestinglibrary size={20} /> },
    { name: "Vite", icon: <SiVite size={20} /> },
    { name: "Git", icon: <SiGit size={20} /> },
  ],
};

const quickStats = [
  {
    icon: <FaBriefcase size={20} />,
    label: "Current Role",
    value: "Associate Frontend Software Engineer",
    sub: "Codniv Innovations",
  },
  {
    icon: <FaGraduationCap size={20} />,
    label: "Background",
    value: "Engineering Graduate",
    sub: "Pulchowk Campus (IOE)",
  },
  {
    icon: <FaBolt size={20} />,
    label: "Philosophy",
    value: "Precise, Balanced & Efficient",
    sub: "UI as engineering",
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    label: "Location",
    value: "Kathmandu, Nepal",
    sub: "Open to remote & global",
  },
];

const numericalStats = [
  {
    number: "2+",
    label: "Years of Experience",
    description: "Building scalable, high-performance web applications using React & Next.js.",
  },
  {
    number: "15+",
    label: "Projects Completed",
    description: "From large-scale corporate systems to personal web apps and experiments.",
  },
  {
    number: "9+",
    label: "Production Apps",
    description: "Robust architectures deployed in live customer environments.",
  },
  {
    number: "100%",
    label: "Commitment to Quality",
    description: "Pixel-perfect fidelity, accessibility (a11y), and top performance.",
  },
];

const timelineData = [
  {
    type: "experience",
    role: "Associate Frontend Software Engineer",
    company: "Codniv Innovations Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Feb 2024 – Present",
    description: "Spearheading frontend development of scalable CRM systems, HR dashboards, real-time communication modules, and automated billing workflows.",
    details: [
      "Built scalable survey and data entry systems using React and Redux Toolkit, handling large datasets with a focus on performance, reliability, and data accuracy.",
      "Developed reusable, component-driven UI architecture, improving consistency and maintainability across multiple modules.",
      "Implemented responsive and accessible interfaces using semantic HTML and modern CSS practices, ensuring cross-device compatibility.",
      "Wrote unit and integration tests using React Testing Library and Vitest, reducing regressions and improving overall application stability.",
      "Collaborated closely with backend engineers to design and integrate REST APIs, ensuring robust data flow and error handling.",
      "Developed internal dashboards for HR workflows, contracts, and timesheets, improving operational efficiency and usability.",
      "Built and maintained Stripe-based subscription and billing workflows, handling recurring payments, upgrades, cancellations, and webhook-based event synchronization.",
      "Contributed to a multi-platform ecosystem (Next.js web + React Native mobile), delivering consistent user experiences across platforms.",
      "Developed real-time communication features using Socket.IO, enabling reliable bidirectional messaging and connection handling.",
    ],
  },
  {
    type: "experience",
    role: "Software Engineer Intern",
    company: "Leapfrog Technology Inc.",
    location: "Kathmandu, Nepal",
    period: "Nov 2023 – Jan 2024",
    description: "Built a strong foundation in full-stack web development, shipping responsive frontends, server REST APIs, and database schemas.",
    details: [
      "Gained hands-on experience in full-stack web development using HTML, CSS, JavaScript, TypeScript, Node.js, Express, and PostgreSQL.",
      "Built multiple projects including browser-based games, landing pages, and full-stack Todo and E-commerce applications.",
      "Collaborated in a team environment following Agile/Scrum methodologies, conducting code reviews and sprint retrospectives.",
    ],
  },
  {
    type: "education",
    role: "Bachelor of Mechanical Engineering",
    company: "Pulchowk Campus, Institute of Engineering (IOE)",
    location: "Tribhuvan University, Nepal",
    period: "2018 – 2023",
    description: "Leveraged computational methods, systems architecture, and mathematical frameworks to transition into frontend and software engineering.",
    details: [
      "Engaged in extensive analytical studies including mathematics, fluid dynamics, and automated systems control.",
      "Applied structured logical models and procedural algorithms directly to frontend application state management and computational layouts."
    ],
  },
];

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedTimelineItems, setExpandedTimelineItems] = useState<{
    [key: number]: boolean;
  }>({ 0: true });

  const toggleTimelineItem = (index: number) => {
    setExpandedTimelineItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useGSAP(
    () => {
      // 1. Initial Page Load Animation for Hero / Header
      const introTl = gsap.timeline({ delay: 0.8 });

      // Animate Back Link
      introTl.fromTo(
        ".back-link-reveal",
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate "About Me" Sublabel
      introTl.fromTo(
        ".about-sublabel",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
        "-=0.6"
      );

      // Animate Headline text reveals
      introTl.fromTo(
        ".header-text-reveal",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.5"
      );

      // Animate main intro bio paragraph
      introTl.fromTo(
        ".about-intro-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // Animate availability status badge
      introTl.fromTo(
        ".about-intro-badge",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

      gsap.set(".metric-number", { textContent: 0 });

      introTl.fromTo(
        ".metric-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.25",
      );

      introTl.to(
        ".metric-number",
        {
          textContent: (_index: number, el: HTMLElement) =>
            `${el.dataset.value}${el.dataset.suffix}`,
          duration: 1.0,
          ease: "power3.out",
          snap: { textContent: 1 },
          stagger: 0.08,
        },
        "<",
      );

      // 2. ScrollTrigger for Expertise Section Header
      gsap.fromTo(
        ".expertise-header-text-reveal",
        { y: "100%" },
        {
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".expertise-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // ScrollTrigger for Expertise Section Grid Cards
      gsap.fromTo(
        ".expertise-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".expertise-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // ScrollTrigger for Professional Timeline Section Header
      gsap.fromTo(
        ".timeline-header-text-reveal",
        { y: "100%" },
        {
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".timeline-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // ScrollTrigger for Timeline Cards
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // 3. ScrollTrigger for Tech Stack Section Header
      gsap.fromTo(
        ".tech-header-text-reveal",
        { y: "100%" },
        {
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".tech-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // ScrollTrigger for Tech Stack Columns & Staggered Row Elements
      const techColumns = gsap.utils.toArray<HTMLElement>(".tech-category");
      techColumns.forEach((col) => {
        const colTl = gsap.timeline({
          scrollTrigger: {
            trigger: col,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        colTl.fromTo(
          col.querySelector(".tech-category-title"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        );

        colTl.fromTo(
          col.querySelectorAll(".skill-row"),
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.2",
        );
      });

      // 4. ScrollTrigger for Connect CTA Section
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      ctaTl.fromTo(
        ".cta-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );

      ctaTl.fromTo(
        ".cta-desc",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );

      ctaTl.fromTo(
        ".cta-links a",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.5)",
        },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#fbfcff] dark:bg-[#050509] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.08),transparent_30%),linear-gradient(300deg,rgba(244,63,94,0.08),transparent_34%)] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.1),transparent_30%),linear-gradient(300deg,rgba(251,113,133,0.1),transparent_34%)] pointer-events-none" />

      <div className="section-container px-4 sm:px-6 pt-32 pb-20">
        {/* Editorial Hero */}
        <section className="page-header pb-6 md:pb-8 mb-8 md:mb-10 border-b border-cyan-900/10 dark:border-white/10">
          <div className="back-link-reveal opacity-0 -translate-x-4 mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 group-hover:border-cyan-600 dark:group-hover:border-cyan-300 transition-all duration-300">
                <FaArrowLeft className="text-sm group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="pt-8 md:pt-10">
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
              className="mb-6"
            >
              <span className="about-sublabel opacity-0 translate-y-10 inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-cyan-700 dark:text-cyan-300">
                <span className="h-px w-10 bg-linear-to-r from-cyan-500 via-violet-500 to-rose-500" />
                About Me
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 dark:text-white leading-[1.02] tracking-tight">
                  <div
                    style={{
                      clipPath:
                        "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    }}
                  >
                    <span className="header-text-reveal opacity-0 translate-y-20 block">
                      Aayushman
                    </span>
                  </div>
                  <div
                    style={{
                      clipPath:
                        "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    }}
                  >
                    <span className="header-text-reveal opacity-0 translate-y-20 text-gradient-hot block">
                      Sharma
                    </span>
                  </div>
                </h1>
              </div>

              <div className="lg:col-span-5">
                <div
                  style={{
                    clipPath:
                      "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                  }}
                >
                  <div className="about-intro-text opacity-0 translate-y-20 space-y-5 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                    <p>
                      Frontend software engineer building high-performance,
                      production-ready web applications for complex workflows,
                      dashboards, and product teams.
                    </p>
                    <p>
                      I care about clean architecture, responsive interaction,
                      accessible UI, and details that make software feel sharp
                      and trustworthy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="quick-stats-section pb-6 md:pb-8 mb-8 md:mb-10 border-b border-cyan-900/10 dark:border-white/10">
          <div className="about-intro-badge opacity-0 translate-y-5 grid sm:grid-cols-2 lg:grid-cols-4">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="py-5 sm:pr-5 sm:[&:nth-child(n+2)]:pl-5"
              >
                <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-300 mb-3">
                  {stat.icon}
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-bold text-slate-950 dark:text-white">
                  {stat.value}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Numerical Metrics */}
        <section className="pb-6 md:pb-8 mb-8 md:mb-10 border-b border-cyan-900/10 dark:border-white/10">
          <div className="metrics-grid grid grid-cols-2 lg:grid-cols-4">
            {numericalStats.map((stat, index) => (
              <div
                key={index}
                className="metric-card opacity-0 group py-6 pr-4 md:py-8 md:pr-8 [&:nth-child(2n)]:pl-4 md:[&:nth-child(2n)]:pl-8 lg:[&:nth-child(n+2)]:pl-8 lg:[&:nth-child(2n)]:pl-8"
              >
                <div
                  className="metric-number text-4xl md:text-5xl font-black text-rose-600 dark:text-rose-300 mb-2"
                  data-value={stat.number.replace(/\D/g, "")}
                  data-suffix={stat.number.replace(/\d/g, "")}
                >
                  {stat.number}
                </div>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise Section */}
        <div className="expertise-section pb-6 md:pb-8 mb-8 md:mb-10 border-b border-cyan-900/10 dark:border-white/10">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className="expertise-header-text-reveal translate-y-10 block text-sm font-bold tracking-widest uppercase text-cyan-700 dark:text-cyan-300">
                Core Expertise
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-cyan-500/50 via-violet-500/30 to-transparent" />
          </div>

          <div className="expertise-grid grid lg:grid-cols-2">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="expertise-card opacity-0 group py-6 lg:py-8 lg:pr-8 lg:even:pl-8"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-slate-300 dark:text-white/15 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-slate-950 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Journey / Timeline Section */}
        <div className="timeline-section pb-6 md:pb-8 mb-8 md:mb-10 border-b border-cyan-900/10 dark:border-white/10">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className="timeline-header-text-reveal translate-y-10 block text-sm font-bold tracking-widest uppercase text-cyan-700 dark:text-cyan-300">
                Professional Journey
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-cyan-500/50 via-violet-500/30 to-transparent" />
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-200/80 dark:border-cyan-900/50 ml-4 sm:ml-6 space-y-10 timeline-container">
            {timelineData.map((item, index) => {
              const isExpanded = expandedTimelineItems[index] ?? false;
              return (
                <div
                  key={index}
                  className="timeline-item opacity-0 relative"
                >
                  {/* Timeline node */}
                  <div className={`absolute -left-[39px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full border-2 ${
                    item.type === "experience"
                      ? "border-cyan-500 text-cyan-600 dark:text-cyan-300"
                      : "border-rose-500 text-rose-600 dark:text-rose-300"
                  } bg-[#fbfcff] dark:bg-[#050509] flex items-center justify-center z-10`}
                  >
                    {item.type === "experience" ? (
                      <FaBriefcase className="text-xs" />
                    ) : (
                      <FaGraduationCap className="text-sm" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="group pb-8 border-b border-cyan-900/10 dark:border-white/10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {item.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {item.company}
                          </span>
                          <span className="text-slate-300 dark:text-white/20 hidden sm:inline">&bull;</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <FaMapMarkerAlt className="text-[10px]" /> {item.location}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-cyan-50/80 dark:bg-cyan-950/25 px-3 py-1.5 rounded-full font-semibold border border-cyan-200/80 dark:border-cyan-700/40">
                        <FaCalendarAlt size={10} className="text-cyan-500" />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Expandable Details */}
                    {item.details && item.details.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-cyan-900/10 dark:border-white/10">
                        <button
                          onClick={() => toggleTimelineItem(index)}
                          className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-300 hover:text-cyan-800 dark:hover:text-cyan-200 transition-colors focus:outline-none cursor-pointer"
                        >
                          <span>{isExpanded ? "Hide Details" : "View Key Contributions & Achievements"}</span>
                          {isExpanded ? (
                            <FaChevronUp size={10} />
                          ) : (
                            <FaChevronDown size={10} />
                          )}
                        </button>

                        <div
                          className={`mt-4 space-y-2.5 overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          {item.details.map((detail, detailIdx) => (
                            <div key={detailIdx} className="flex items-start gap-3">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                              <span className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal font-sans">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-section pb-6 md:pb-8 mb-8 md:mb-10 border-b border-cyan-900/10 dark:border-white/10">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className="tech-header-text-reveal translate-y-10 block text-sm font-bold tracking-widest uppercase text-cyan-700 dark:text-cyan-300">
                Tech Stack
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-cyan-500/50 via-violet-500/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {Object.entries(techStack).map(
              ([category, skills], categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="tech-category"
                >
                  <h3 className="tech-category-title opacity-0 text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-5">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="skill-row opacity-0 group inline-flex items-center gap-2 rounded-full border border-cyan-900/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] px-3 py-2 cursor-default transition-colors duration-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/20"
                      >
                        <span className="text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Connect CTA Section */}
        <div className="cta-section pt-12">
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left justify-between gap-8 rounded-[1.5rem] bg-slate-950 dark:bg-white/[0.06] p-6 sm:p-10 lg:p-12 text-white dark:text-white">
            <div className="w-full lg:w-auto">
              <h3 className="cta-title opacity-0 text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Let&apos;s Connect
              </h3>
              <p className="cta-desc opacity-0 text-white/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                I&apos;m always open to discussing frontend architecture,
                performance optimization, or remote collaborations.
              </p>
            </div>
            <div className="cta-links flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 sm:gap-6 w-full lg:w-auto">
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://github.com/aayushman108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 w-12 h-12 rounded-full border-2 border-white/15 bg-white/10 flex items-center justify-center text-white/70 hover:border-white hover:bg-white hover:text-slate-950 transition-all duration-300 shrink-0"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aayushman-sharma-a8abbb277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 w-12 h-12 rounded-full border-2 border-white/15 bg-white/10 flex items-center justify-center text-white/70 hover:border-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 shrink-0"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:dev.aayushmansharma@gmail.com"
                  className="opacity-0 w-12 h-12 rounded-full border-2 border-white/15 bg-white/10 flex items-center justify-center text-white/70 hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950 transition-all duration-300 shrink-0"
                  aria-label="Email"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
              <Link
                href="/#contact"
                className="opacity-0 group inline-flex items-center justify-center gap-3 px-5 py-3.5 sm:px-8 sm:py-4 bg-white text-slate-950 rounded-full font-semibold text-sm sm:text-base hover:bg-cyan-300 transition-all duration-300 w-full sm:w-auto shrink-0"
              >
                <span>Get in Touch</span>
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
