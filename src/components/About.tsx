"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGreensock,
  SiExpress,
  SiPostgresql,
  SiFramer,
  SiRedux,
} from "react-icons/si";
import { SectionHeader } from "./SectionHeader";

const skills = [
  { name: "React", icon: <FaReact size={24} /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} /> },
  { name: "React Native", icon: <FaReact size={24} /> },
  { name: "TypeScript", icon: <SiTypescript size={24} /> },
  { name: "JavaScript", icon: <FaJs size={24} /> },
  { name: "Redux Toolkit", icon: <SiRedux size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  { name: "GSAP", icon: <SiGreensock size={24} /> },
  { name: "Framer Motion", icon: <SiFramer size={24} /> },
  { name: "HTML5", icon: <FaHtml5 size={24} /> },
  { name: "CSS3", icon: <FaCss3Alt size={24} /> },
  { name: "Git", icon: <FaGitAlt size={24} /> },
  { name: "Node.js", icon: <FaNodeJs size={24} /> },
  { name: "Express", icon: <SiExpress size={24} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutContentRef = useRef(null);
  const aboutSkillsRef = useRef(null);

  useGSAP(
    () => {
      // Bio Content Animation
      gsap.fromTo(
        ".about-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.8, // Wait for header to finish animating
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: aboutContentRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            id: "About Me",
          },
        },
      );

      // Stats Animation
      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 1.0, // Wait for header to finish animating
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: aboutContentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: aboutContentRef },
  );

  useGSAP(
    () => {
      // Skills Animation
      gsap.fromTo(
        ".skill-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: aboutSkillsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
            id: "Skills",
          },
        },
      );
    },
    { scope: aboutSkillsRef },
  );

  return (
    <section
      id="about"
      aria-label="About Aayushman Sharma"
      className="section-padding bg-slate-50 dark:bg-[#08080d] relative overflow-hidden"
    >
      <div className="section-sheen absolute inset-0 pointer-events-none" />
      <div className="section-container">
        {/* Header */}
        <SectionHeader
          key="About Me"
          label="About Me"
          title="Frontend Engineer"
          subtitle="Crafting Seamless Web Experiences"
          className=""
        />

        {/* Bio Section */}
        <div
          ref={aboutContentRef}
          className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-8 md:mb-12"
        >
          {/* Left: Bio Text */}
          <div className="about-content lg:col-span-7 space-y-4 grid">
            <p className="text-xl md:text-2xl font-light text-slate-950 dark:text-white leading-relaxed">
              I&apos;m <span className="font-semibold">Aayushman Sharma</span>,
              a Frontend Software Engineer with over{" "}
              <span className="font-semibold">
                2 years of professional experience{" "}
              </span>
              building modern, scalable web applications.
            </p>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in React and Next.js, with strong experience in
              TypeScript, state management, testing, and interactive UI
              development. I’ve worked on government systems, AI-powered
              platforms, dashboards, and e-commerce applications—focusing on
              clean code, performance, and user experience.
            </p>

            {/* CTA */}
            <div className="pt-4 hidden md:block">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 text-lg font-semibold text-slate-950 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300"
              >
                <span>Let&apos;s work together</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-current flex items-center justify-center bg-white/70 dark:bg-white/10 shadow-[0_10px_28px_rgba(14,165,233,0.16)] group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 group-hover:border-cyan-600 dark:group-hover:border-cyan-300 transition-all duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="about-stats lg:col-span-5">
            <div className="flex flex-wrap gap-2 lg:gap-3 xl:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="about-stat flex-1 min-w-max text-center lg:text-left p-3 xl:p-4 rounded-2xl bg-white/85 dark:bg-white/[0.06] border border-white/80 dark:border-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-md"
                >
                  <span className="text-2xl md:text-3xl xl:text-4xl font-black text-gradient-hot block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-[11px] xl:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide whitespace-nowrap block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* CTA */}
          <div className="pt-4 block md:hidden">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 text-lg font-semibold text-slate-950 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300"
            >
              <span>Let&apos;s work together</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-current flex items-center justify-center bg-white/70 dark:bg-white/10 shadow-[0_10px_28px_rgba(14,165,233,0.16)] group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 group-hover:border-cyan-600 dark:group-hover:border-cyan-300 transition-all duration-300">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div
          ref={aboutSkillsRef}
          className="skills-section pt-8 border-t border-cyan-900/10 dark:border-white/10"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white">
              Tech Stack
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Technologies I work with daily
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item group flex items-center gap-2 px-3 py-2 rounded-xl border border-white/80 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-300 bg-white/85 dark:bg-white/[0.06] shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_18px_44px_rgba(14,165,233,0.18)] transition-all duration-300 cursor-default backdrop-blur-md"
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
      </div>
    </section>
  );
};

export default About;
