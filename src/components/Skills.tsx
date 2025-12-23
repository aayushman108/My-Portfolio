"use client";

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiGreensock } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-blue-500 dark:text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600 dark:text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-500 dark:text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-500 dark:text-cyan-300" /> },
  { name: "GSAP", icon: <SiGreensock size={40} className="text-green-600 dark:text-green-500" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-600 dark:text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600 dark:text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-600 dark:text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-700 dark:text-green-600" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-black/30">
        <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-none hover:border-blue-500/50 dark:hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">{skill.name}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
