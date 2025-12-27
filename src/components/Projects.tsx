"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden">
      {/* Minimal background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />
      
      <div className="container mx-auto">
        {/* Section Header - Awwwards Style */}
        <div className="mb-20">
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 block">
                Selected Work
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                Featured
                <br />
                <span className="text-gray-400 dark:text-gray-600">Projects</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-4 text-lg font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 mb-2"
            >
              <span>View All</span>
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-all duration-300">
                <FaArrowRight className="text-sm group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>

        {/* Projects List - Editorial Layout */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group block border-t border-gray-200 dark:border-gray-800 last:border-b relative"
            >
              <a href={project.live} className="absolute inset-0 z-20" aria-label={`View ${project.title}`} />

              <div className="py-10 md:py-16">
                <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
                  {/* Number */}
                  <div className="col-span-12 md:col-span-1">
                    <span className="text-4xl md:text-5xl font-black text-gray-200 dark:text-gray-800 leading-none transition-colors duration-500 group-hover:text-purple-500 dark:group-hover:text-purple-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="col-span-12 md:col-span-5 lg:col-span-4">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-12 md:col-span-4 lg:col-span-5">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-3 mt-2 relative z-30">
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-base" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-black transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex col-span-2 items-center justify-end">
                    <div className="w-14 h-14 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-500 group-hover:border-purple-500 dark:group-hover:border-purple-400 group-hover:bg-purple-500 dark:group-hover:bg-purple-400">
                      <svg 
                        className="w-5 h-5 text-gray-400 transition-all duration-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Want to see more?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Explore the complete collection of my work.
              </p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-base hover:bg-purple-600 dark:hover:bg-purple-400 transition-all duration-300"
            >
              <span>All Projects</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
