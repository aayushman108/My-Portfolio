"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      ".page-header",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      ".project-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Minimal background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />

      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* Page Header */}
        <div className="page-header mb-20">
          {/* Back Link */}
          <Link 
            href="/" 
            className="group inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
          >
            <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-all duration-300">
              <FaArrowLeft className="text-sm group-hover:text-white transition-colors" />
            </div>
            <span className="font-medium">Back to Home</span>
          </Link>

          {/* Title */}
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 block">
                Portfolio
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                All
                <br />
                <span className="text-gray-400 dark:text-gray-600">Projects</span>
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
              A complete collection of my works, from web applications to creative experiments.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
            >
              {/* Image Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-800 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 dark:text-white">
                  {project.year}
                </div>

                {/* Project Number */}
                <span className="absolute top-4 left-4 text-5xl font-black text-white/30 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Hover Actions */}
                <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors border border-white/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-white text-lg" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors border border-white/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt className="text-white text-lg" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-purple-500 dark:hover:border-purple-400 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
                  >
                    <FaGithub className="text-base" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-black transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Like what you see?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Let's discuss your next project.
              </p>
            </div>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-base hover:bg-purple-600 dark:hover:bg-purple-400 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
