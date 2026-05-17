"use client";

import { useRef } from "react";
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

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

      // Animate summary description
      introTl.fromTo(
        ".header-description",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
        },
        "-=0.8"
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
        "-=0.6"
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

      // 4. ScrollTrigger for Quick Stats Section Header
      gsap.fromTo(
        ".stats-header-text-reveal",
        { y: "100%" },
        {
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // ScrollTrigger for Quick Stats Cards
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // 5. ScrollTrigger for Connect CTA Section
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
        ".cta-links > *",
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
      className="min-h-screen bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Minimal background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />

      <div className="section-container px-4 sm:px-6 pt-32 pb-20">
        {/* Page Header */}
        <div className="page-header mb-16 md:mb-20">
          {/* Back Link */}
          <div className="back-link-reveal opacity-0 -translate-x-4 mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-all duration-300">
                <FaArrowLeft className="text-sm group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Title with Masked Reveal Animation */}
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div>
              <div
                style={{
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                }}
                className="mb-4"
              >
                <span className="about-sublabel opacity-0 translate-y-10 text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 block">
                  About Me
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                <div
                  style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                  }}
                >
                  <span className="header-text-reveal opacity-0 translate-y-20 block">
                    Hi, I&apos;m
                  </span>
                </div>
                <div
                  style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                  }}
                >
                  <span className="header-text-reveal opacity-0 translate-y-20 text-gray-400 dark:text-gray-600 block">
                    Aayushman 👋
                  </span>
                </div>
              </h1>
            </div>
            
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <p className="header-description opacity-0 translate-y-15 text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
                Frontend Engineer & React/Next.js Specialist with 2+ years of
                professional experience.
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-16 md:mb-24 max-w-4xl">
          <div
            style={{
              clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            }}
            className="mb-8"
          >
            <p className="about-intro-text opacity-0 translate-y-20 text-xl md:text-2xl lg:text-3xl font-light text-gray-900 dark:text-white leading-relaxed">
              I bridge the gap between{" "}
              <span className="font-semibold">robust engineering</span> and{" "}
              <span className="font-semibold">intuitive UI</span>. I specialize in
              building high-performance, production-ready web applications that
              turn complex data into seamless user experiences.
            </p>
          </div>
          
          <div className="about-intro-badge opacity-0 translate-y-5 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Open to global & remote opportunities — Based in Kathmandu, Nepal
            </span>
          </div>
        </div>

        {/* Expertise & Experience Section */}
        <div className="expertise-section mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className="expertise-header-text-reveal translate-y-10 block text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">
                Expertise & Experience
              </span>
            </div>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          </div>

          <div className="expertise-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="expertise-card opacity-0 group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 bg-white dark:bg-zinc-900/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-gray-200 dark:text-gray-800 group-hover:text-purple-300 dark:group-hover:text-purple-700 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-section mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className="tech-header-text-reveal translate-y-10 block text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">
                Tech Stack
              </span>
            </div>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {Object.entries(techStack).map(
              ([category, skills], categoryIndex) => (
                <div key={categoryIndex} className="tech-category">
                  <h3 className="tech-category-title opacity-0 text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-6">
                    {category}
                  </h3>
                  <div className="space-y-0">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="skill-row opacity-0 group flex items-center gap-4 py-4 border-t border-gray-200 dark:border-gray-800 last:border-b cursor-default"
                      >
                        <span className="text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
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

        {/* Quick Stats Section */}
        <div className="stats-section mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className="stats-header-text-reveal translate-y-10 block text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">
                Quick Stats
              </span>
            </div>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          </div>

          <div className="stats-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="stat-card opacity-0 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900/50"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 mb-4">
                  {stat.icon}
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 block mb-2">
                  {stat.label}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Connect CTA Section */}
        <div className="cta-section pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="cta-title opacity-0 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Let&apos;s Connect
              </h3>
              <p className="cta-desc opacity-0 text-gray-600 dark:text-gray-400 text-lg max-w-xl">
                I&apos;m always open to discussing frontend architecture,
                performance optimization, or remote collaborations.
              </p>
            </div>
            <div className="cta-links flex items-center gap-3">
              <a
                href="https://github.com/aayushman108"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aayushman-sharma-a8abbb277"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:dev.aayushmansharma@gmail.com"
                className="opacity-0 w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-purple-600 dark:hover:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <Link
                href="/#contact"
                className="opacity-0 group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm md:text-base hover:bg-purple-600 dark:hover:bg-purple-400 transition-all duration-300 ml-2"
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
