"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowLeft } from "react-icons/fa";
import { PROJECTS } from "@/data/projects";
import { ProjectCardForProjectsPage } from "@/components/ProjectCard";

const ProjectsPage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.8 });

      // Animate Back Link
      tl.fromTo(
        ".back-link-reveal",
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate projects sublabel
      tl.fromTo(
        ".projects-sublabel",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
        "-=0.6"
      );

      // Animate Headline text reveals
      tl.fromTo(
        ".header-text-reveal",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.5"
      );

      // Animate Description Paragraph
      tl.fromTo(
        ".projects-desc",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // Animate Project Cards
      tl.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.6"
      );
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#fbfcff] dark:bg-[#050509] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.08),transparent_30%),linear-gradient(300deg,rgba(244,63,94,0.08),transparent_34%)] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.1),transparent_30%),linear-gradient(300deg,rgba(251,113,133,0.1),transparent_34%)] pointer-events-none" />

      <div className="section-container px-6 pt-32 pb-20">
        {/* Page Header */}
        <div className="page-header pb-6 md:pb-8 mb-8 md:mb-10 border-b border-cyan-900/10 dark:border-white/10">
          {/* Back Link */}
          <div className="back-link-reveal opacity-0 -translate-x-4 mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 group-hover:border-cyan-600 dark:group-hover:border-cyan-300 transition-all duration-300">
                <FaArrowLeft className="text-sm group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Title */}
          <div className="pt-8 md:pt-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7">
              <div
                style={{
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                }}
                className="mb-6"
              >
                <span className="projects-sublabel opacity-0 translate-y-10 inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-cyan-700 dark:text-cyan-300">
                  <span className="h-px w-10 bg-linear-to-r from-cyan-500 via-violet-500 to-rose-500" />
                  Portfolio
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 dark:text-white leading-[1.02] tracking-tight">
                <div
                  style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                  }}
                >
                  <span className="header-text-reveal opacity-0 translate-y-20 block">
                    Selected
                  </span>
                </div>
                <div
                  style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                  }}
                >
                  <span className="header-text-reveal opacity-0 translate-y-20 text-gradient-hot block">
                    Work
                  </span>
                </div>
              </h1>
            </div>
            
              <div className="lg:col-span-5">
                <p className="projects-desc opacity-0 text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl leading-relaxed font-normal">
                  A focused archive of production apps, client systems, and
                  personal experiments across React, Next.js, TypeScript, and
                  interactive frontend engineering.
                </p>
                <div className="projects-desc opacity-0 mt-6 grid grid-cols-3 text-sm">
                  <div className="py-3">
                    <span className="block text-2xl font-black text-rose-600 dark:text-rose-300">
                      {PROJECTS.length}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Projects
                    </span>
                  </div>
                  <div className="py-3 px-4">
                    <span className="block text-2xl font-black text-rose-600 dark:text-rose-300">
                      {PROJECTS.filter((p) => p.type === "Personal").length}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Personal
                    </span>
                  </div>
                  <div className="py-3 px-4">
                    <span className="block text-2xl font-black text-rose-600 dark:text-rose-300">
                      {PROJECTS.filter((p) => p.type === "Company").length}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Company
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-14">
          {PROJECTS.map((project, index) => (
            <ProjectCardForProjectsPage project={project} key={index} />
          ))}
        </div>

        {/* Back to Top */}
        <div className="mt-20 pt-12 border-t border-cyan-900/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white mb-2">
                Like what you see?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Let&apos;s discuss your next project.
              </p>
            </div>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-4 px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-black rounded-full font-semibold text-base hover:bg-cyan-600 dark:hover:bg-cyan-300 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
