"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects } from "@/data/projects";



const Projects = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
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
    <section id="projects" ref={containerRef} className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg dark:shadow-none hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              <div className={`h-48 w-full bg-linear-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                  <span className="text-4xl font-bold text-white/50 dark:text-white/20">Preview</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            View All Projects <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
