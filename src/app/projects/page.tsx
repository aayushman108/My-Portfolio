import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { PROJECTS } from "@/data/projects";
import { ProjectCardForProjectsPage } from "@/components/ProjectCard";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-[#f8fcf9] dark:bg-[#050509] relative overflow-hidden">

      <div className="section-container px-6 pt-32 pb-20">
        {/* Page Header */}
        <div className="page-header pb-6 md:pb-8 mb-8 md:mb-10 border-b border-emerald-900/10 dark:border-white/10">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-emerald-600 dark:group-hover:bg-emerald-300 group-hover:border-emerald-600 dark:group-hover:border-emerald-300 transition-all duration-300">
                <FaArrowLeft className="text-sm group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Title */}
          <div className="pt-8 md:pt-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="inline-flex items-center gap-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="h-px w-8 bg-emerald-400/60" />
                  Portfolio
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 dark:text-white leading-[1.02] tracking-tight">
                <span className="block">
                  Selected
                </span>
                <span className="text-slate-950 dark:text-white block">
                  Work
                </span>
              </h1>
            </div>
            
              <div className="lg:col-span-5">
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl leading-relaxed font-normal">
                  A focused archive of production apps, client systems, and
                   personal experiments across React, Next.js, TypeScript, and
                   full-stack web development.
                </p>
                <div className="mt-6 grid grid-cols-3 text-sm">
                  <div className="py-3">
                    <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-300">
                      {PROJECTS.length}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Projects
                    </span>
                  </div>
                  <div className="py-3 px-4">
                    <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-300">
                      {PROJECTS.filter((p) => p.type === "Personal").length}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Personal
                    </span>
                  </div>
                  <div className="py-3 px-4">
                    <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-300">
                      {PROJECTS.filter((p) => p.type === "Company").length}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Company
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12">
          {PROJECTS.map((project, index) => (
            <ProjectCardForProjectsPage project={project} key={index} />
          ))}
        </div>

        {/* Back to Top */}
        <div className="mt-20 pt-12 border-t border-emerald-900/10 dark:border-white/10">
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
              className="group inline-flex items-center gap-4 px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-black rounded-full font-semibold text-base hover:bg-emerald-600 dark:hover:bg-emerald-300 transition-all duration-300"
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
