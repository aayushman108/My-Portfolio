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
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGreensock,
} from "react-icons/si";
import { SectionHeader } from "./SectionHeader";

const skills = [
  { name: "React", icon: <FaReact size={24} /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} /> },
  { name: "TypeScript", icon: <SiTypescript size={24} /> },
  { name: "JavaScript", icon: <FaJs size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  { name: "GSAP", icon: <SiGreensock size={24} /> },
  { name: "HTML5", icon: <FaHtml5 size={24} /> },
  { name: "CSS3", icon: <FaCss3Alt size={24} /> },
  { name: "Git", icon: <FaGitAlt size={24} /> },
  { name: "Node.js", icon: <FaNodeJs size={24} /> },
  { name: "Figma", icon: <FaFigma size={24} /> },
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
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: aboutContentRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            id: "About Me",
          },
        }
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
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: aboutContentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: aboutContentRef }
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
        }
      );
    },
    { scope: aboutSkillsRef }
  );

  return (
    <section
      id="about"
      className="py-32 px-6 bg-gray-50 dark:bg-zinc-900 relative overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader
          key="About Me"
          label="About Me"
          title="Digital Craftsman"
          subtitle="& Problem Solver"
          className="about-content"
        />

        {/* Bio Section */}
        <div
          ref={aboutContentRef}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20"
        >
          {/* Left: Bio Text */}
          <div className="about-content lg:col-span-7 space-y-6">
            <p className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white leading-relaxed">
              I'm <span className="font-semibold">Aayushman</span>, a frontend
              developer passionate about creating beautiful, functional web
              experiences.
            </p>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              With expertise in React, Next.js, and modern animation libraries,
              I transform complex ideas into elegant, user-friendly interfaces.
              I believe in the power of clean code and thoughtful design.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 text-lg font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <span>Let's work together</span>
                <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-all duration-300">
                  <svg
                    className="w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
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
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="about-stat text-center lg:text-left p-4 rounded-2xl bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800"
                >
                  <span className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          ref={aboutSkillsRef}
          className="skills-section pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center justify-between flex-wrap gap-6 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Tech Stack
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Technologies I work with daily
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item group flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-400 bg-white dark:bg-zinc-900/50 transition-all duration-300 cursor-default"
              >
                <span className="text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
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
