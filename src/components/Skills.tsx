"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiGreensock } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={50} className="text-blue-500 dark:text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} className="text-black dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript size={50} className="text-blue-600 dark:text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-500 dark:text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-cyan-500 dark:text-cyan-300" /> },
  { name: "GSAP", icon: <SiGreensock size={50} className="text-green-600 dark:text-green-500" /> },
  { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-600 dark:text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-600 dark:text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt size={50} className="text-red-600 dark:text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-700 dark:text-green-600" /> },
];

const Skills = () => {
    const wrapperRef = useRef(null);
    const marqueeRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Intro animation
        gsap.fromTo(wrapperRef.current, 
            { opacity: 0, y: 50 },
            {
                opacity: 1, 
                y: 0, 
                duration: 1, 
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 80%"
                }
            }
        );

        // Infinite Marquee Loop
        // Important: The track contains two identical sets of items.
        // We move from x: 0% to x: -50%.
        // Because the two sets are identical, x: -50% looks exactly like x: 0%.
        const duration = 30;

        gsap.to(marqueeRef.current, {
            xPercent: -50, // Use xPercent for better responsiveness
            ease: "none",
            duration: duration,
            repeat: -1,
        });
    }, { scope: wrapperRef });

  return (
    <section id="skills" className="py-24 overflow-hidden bg-gray-50 dark:bg-black/30 w-full relative">
       {/* Gradient Masks */}
       <div className="absolute top-0 left-0 w-32 h-full z-10 bg-gradient-to-r from-gray-50 to-transparent dark:from-black dark:to-transparent pointer-events-none" />
       <div className="absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-gray-50 to-transparent dark:from-black dark:to-transparent pointer-events-none" />

       <div ref={wrapperRef} className="container mx-auto px-6 mb-12 text-center">
            <h2 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent mb-6">
                Tech Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
                My arsenal of modern web technologies.
            </p>
       </div>

       {/* Marquee Track */}
       <div className="w-full overflow-hidden">
           <div 
                ref={marqueeRef}
                className="flex w-max"
           >
                {/* Chunk 1 */}
               <div className="flex gap-16 px-8 items-center shrink-0">
                   {[...skills, ...skills].map((skill, i) => (
                       <div 
                            key={`c1-${skill.name}-${i}`} 
                            className="flex flex-col items-center gap-4 group cursor-default"
                       >
                            <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <span className="font-bold text-lg text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {skill.name}
                            </span>
                       </div>
                   ))}
               </div>

               {/* Chunk 2 (Identical Copy) */}
               <div className="flex gap-16 px-8 items-center shrink-0">
                   {[...skills, ...skills].map((skill, i) => (
                       <div 
                            key={`c2-${skill.name}-${i}`} 
                            className="flex flex-col items-center gap-4 group cursor-default"
                       >
                            <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <span className="font-bold text-lg text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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

export default Skills;
