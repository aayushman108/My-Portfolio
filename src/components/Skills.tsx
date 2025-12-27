"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiGreensock } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "GSAP", icon: <SiGreensock size={40} /> },
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
];

const Skills = () => {
    const wrapperRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".skill-item", {
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top 80%"
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, { scope: wrapperRef });

  return (
    <section id="skills" ref={wrapperRef} className="min-h-screen bg-white dark:bg-black py-32 px-6 md:px-12 lg:px-24 relative">
       {/* Subtle Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

       <div className="relative z-10 container mx-auto">
            {/* Section Number */}
            <div className="mb-16">
                <span className="text-8xl md:text-9xl font-black text-gray-200 dark:text-gray-800 leading-none">
                    02
                </span>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-8">
                Tech Stack
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mb-20"></div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                {skills.map((skill, i) => (
                    <div 
                        key={i}
                        className="skill-item group"
                    >
                        <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                            <div className="text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                {skill.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    </section>
  );
};

export default Skills;
