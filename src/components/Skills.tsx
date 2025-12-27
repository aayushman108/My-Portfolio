"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiGreensock } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={28} /> },
      { name: "Next.js", icon: <SiNextdotjs size={28} /> },
      { name: "TypeScript", icon: <SiTypescript size={28} /> },
      { name: "JavaScript", icon: <FaJs size={28} /> },
    ]
  },
  {
    title: "Styling",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
      { name: "CSS3", icon: <FaCss3Alt size={28} /> },
      { name: "HTML5", icon: <FaHtml5 size={28} /> },
    ]
  },
  {
    title: "Animation",
    skills: [
      { name: "GSAP", icon: <SiGreensock size={28} /> },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={28} /> },
      { name: "Node.js", icon: <FaNodeJs size={28} /> },
      { name: "Figma", icon: <FaFigma size={28} /> },
    ]
  },
];

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".skills-header",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".skill-category",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden">
      {/* Minimal background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />

      <div className="container mx-auto">
        {/* Header */}
        <div className="skills-header mb-20">
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 block">
                Expertise
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                Tech
                <br />
                <span className="text-gray-400 dark:text-gray-600">Stack</span>
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-black text-gray-200 dark:text-gray-800">
                  {String(categoryIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-0">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex items-center gap-4 py-4 border-t border-gray-200 dark:border-gray-800 last:border-b cursor-default"
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
          ))}
        </div>

        {/* Bottom Stats/Experience */}
        <div className="skills-header mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "15+", label: "Projects Completed" },
              { value: "10+", label: "Technologies" },
              { value: "100%", label: "Code Quality" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <span className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
