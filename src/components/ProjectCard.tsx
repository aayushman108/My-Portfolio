"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle, FaSpinner, FaRocket, FaInfoCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import { Modal } from "./Modal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type IProjectCardProps = {
  project: Project;
};

export function ProjectCardForHomePage({ project }: IProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60},
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
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
      className="project-card group block border-t border-gray-200 dark:border-gray-800 relative opacity-0"
    >
      <Link
        href={project.live}
        className="absolute inset-0 z-20"
        aria-label={`View ${project.title}`}
      />

      <div className="py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-linear-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-900/20 dark:to-blue-900/20" />
              )}

              {/* Project Number */}
              <span className="absolute top-4 left-4 text-5xl md:text-6xl font-black text-white/30 leading-none z-10 transition-colors duration-500 group-hover:text-white/50">
                {String(project.id).padStart(2, "0")}
              </span>

              {/* Year Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 dark:text-white z-10">
                {project.year}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="text-xs font-medium tracking-wider uppercase text-purple-600 dark:text-purple-400">
                {project.type} Project
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              <span className="text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
                {project.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border flex items-center gap-1.5 ${
                project.status === "Completed" 
                  ? "bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30" 
                  : "bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/30"
              }`}>
                {project.status === "In-Progress" && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                  </span>
                )}
                {project.status === "In-Progress" ? "In Progress" : project.status}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-xl line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
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
            {project.type === "Personal" && (
              <div className="flex items-center gap-3 mt-4 relative z-30">
                <Link
                  href={project.github}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-base" />
                  <span>Code</span>
                </Link>
                <Link
                  href={project.live}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-black transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Live Demo</span>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-black transition-all duration-300 cursor-pointer"
                >
                  <FaInfoCircle className="text-base" />
                  <span>Details</span>
                </button>
              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex col-span-2 items-center justify-end">
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
      <ProjectDetailsModal project={project} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export function ProjectCardForProjectsPage({ project }: IProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-900/20 dark:to-blue-900/20" />
        )}

        {/* Year Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 dark:text-white">
          {project.year}
        </div>

        {/* Project Number */}
        <span className="absolute top-4 left-4 text-5xl font-black text-white/30 leading-none">
          {String(project.id).padStart(2, "0")}
        </span>

        {/* Hover Actions */}
        {project.type === "Personal" && (
          <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors border border-white/20 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-white text-lg" />
            </Link>
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors border border-white/20 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-white text-lg" />
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors border border-white/20 cursor-pointer"
            >
              <FaInfoCircle className="text-white text-lg" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Meta */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-2 py-1 rounded-md bg-purple-100 dark:bg-purple-900/30 text-[10px] font-bold tracking-wider uppercase text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
            {project.type}
          </span>
          <span className="text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400">
            {project.category}
          </span>
          <span className={`px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border flex items-center gap-1.5 ${
            project.status === "Completed" 
              ? "bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30" 
              : "bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/30"
          }`}>
            {project.status === "In-Progress" && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
            )}
            {project.status === "In-Progress" ? "In Progress" : project.status}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed line-clamp-3">
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
        {project.type === "Personal" && (
          <div className="flex items-center gap-3 pt-4">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
            >
              <FaGithub className="text-base" />
              <span>Code</span>
            </Link>
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-black transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>Live Demo</span>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-black transition-all duration-300 cursor-pointer"
            >
              <FaInfoCircle className="text-base" />
              <span>Details</span>
            </button>
          </div>
        )}
      </div>
      <ProjectDetailsModal project={project} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function ProjectDetailsModal({ project, isOpen, onClose }: { project: Project; isOpen: boolean; onClose: () => void }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle="Project Features"
      headerRight={
        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border flex items-center gap-1.5 ${
          project.status === "Completed" 
            ? "bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30" 
            : "bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/30"
        }`}>
          {project.status === "In-Progress" && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
            </span>
          )}
          {project.status === "In-Progress" ? "In Progress" : project.status}
        </span>
      }
    >
      {/* Description and Links Top Section */}
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg mb-6">
          {project.description}
        </p>

        {project.type === "Personal" && (
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 bg-white dark:bg-zinc-800/50 cursor-pointer"
            >
              <FaGithub className="text-lg" />
              <span>Source Code</span>
            </Link>
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-black transition-all duration-300 bg-purple-50 dark:bg-purple-900/10 cursor-pointer"
            >
              <FaExternalLinkAlt className="text-base" />
              <span>Live Demo</span>
            </Link>
          </div>
        )}
      </div>

      <hr className="border-gray-200 dark:border-zinc-800/80 mb-8" />

      {!project.features ? (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-xl">
          <FaInfoCircle className="text-4xl text-gray-300 dark:text-zinc-700 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400 font-medium">Detailed feature list is currently being updated.</p>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* Current Features */}
          {project.features.current && project.features.current.length > 0 && (
            <section>
              <h3 className="flex items-center gap-2 text-base md:text-lg font-bold text-gray-900 dark:text-white mb-4">
                <FaCheckCircle className="text-emerald-500 text-lg" />
                Available Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.current.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800/80 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* In Progress Features */}
          {project.features.inProgress && project.features.inProgress.length > 0 && (
            <section>
              <h3 className="flex items-center gap-2 text-base md:text-lg font-bold text-gray-900 dark:text-white mb-4">
                <FaSpinner className="text-amber-500 text-lg animate-spin-slow" />
                Currently Building
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.inProgress.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/30 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 hover:border-amber-200 dark:hover:border-amber-900/40 transition-colors">
                    <span className="relative flex h-2 w-2 mt-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Planned Features */}
          {project.features.planned && project.features.planned.length > 0 && (
            <section>
              <h3 className="flex items-center gap-2 text-base md:text-lg font-bold text-gray-900 dark:text-white mb-4">
                <FaRocket className="text-purple-500 text-lg" />
                Planned / Ideation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.planned.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/30 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/20 hover:border-purple-200 dark:hover:border-purple-900/40 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      )}
    </Modal>
  );
}
