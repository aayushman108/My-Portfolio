"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with Next.js",
    tech: ["Next.js", "TypeScript", "Stripe"],
    year: "2024"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics platform for businesses",
    tech: ["React", "D3.js", "Node.js"],
    year: "2024"
  },
  {
    title: "Portfolio Website",
    description: "Award-winning creative portfolio",
    tech: ["Next.js", "GSAP", "Tailwind"],
    year: "2023"
  },
  {
    title: "Mobile App",
    description: "Cross-platform fitness tracker",
    tech: ["React Native", "Firebase"],
    year: "2023"
  },
  {
    title: "Blog Platform",
    description: "Content management system",
    tech: ["Next.js", "MDX", "Vercel"],
    year: "2023"
  },
  {
    title: "Design System",
    description: "Component library for teams",
    tech: ["React", "Storybook", "CSS"],
    year: "2024"
  }
];

const Projects = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%"
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });
    }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-32 px-6 md:px-12 lg:px-24 relative">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Number */}
        <div className="mb-16">
            <span className="text-8xl md:text-9xl font-black text-gray-200 dark:text-gray-800 leading-none">
                03
            </span>
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-8">
            Selected Work
        </h2>
        <div className="w-24 h-1 bg-black dark:bg-white mb-20"></div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group cursor-pointer"
            >
              <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-black dark:hover:border-white transition-all duration-300 h-full flex flex-col">
                {/* Year */}
                <div className="text-xs font-medium text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-6">
                  {project.year}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
