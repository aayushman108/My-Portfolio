"use client";

import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type IProjectCardProps = {
  project: (typeof PROJECTS)[number];
};

export function ProjectCardForHomePage({ project }: IProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      key={project.id}
      className="project-card group block border-t border-gray-200 dark:border-gray-800 last:border-b relative opacity-0"
    >
      <a
        href={project.live}
        className="absolute inset-0 z-20"
        aria-label={`View ${project.title}`}
      />

      <div className="py-10 md:py-16">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Number */}
          <div className="col-span-12 md:col-span-1">
            <span className="text-4xl md:text-5xl font-black text-gray-200 dark:text-gray-800 leading-none transition-colors duration-500 group-hover:text-purple-500 dark:group-hover:text-purple-400">
              {String(project.id).padStart(2, "0")}
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

            {/* PROJECT LINKS */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCardForProjectsPage({ project }: IProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      key={project.id}
      className="project-card group opacity-0"
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

        {/* Year Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 dark:text-white">
          {project.year}
        </div>

        {/* Project Number */}
        <span className="absolute top-4 left-4 text-5xl font-black text-white/30 leading-none">
          {String(project.id).padStart(2, "0")}
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
  );
}
