"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
  FaSpinner,
  FaRocket,
  FaInfoCircle,
  FaBuilding,
  FaLandmark,
  FaDraftingCompass,
  FaShoppingCart,
  FaChartLine,
  FaUserPlus,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { useState } from "react";
import { Modal } from "./Modal";
type IProjectCardProps = {
  project: Project;
};

const PROJECT_ICONS: Record<string, IconType> = {
  "MIS - Government of Nepal": FaLandmark,
  "Engineering Consultancy Website": FaDraftingCompass,
  "E-Commerce Platform": FaShoppingCart,
  "AI Financial Analysis Platform": FaChartLine,
  "Business Onboarding Platform": FaUserPlus,
  "Matrimonial Platform": FaHeart,
  "Human Resource Management Platform": FaUsers,
};

export function ProjectCardForProjectsPage({ project }: IProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const PlaceholderIcon = PROJECT_ICONS[project.title] ?? FaBuilding;

  return (
    <div key={project.id} className="group">
      {/* Image Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/80 dark:bg-white/[0.04] border border-emerald-900/10 dark:border-white/10 mb-6 transition-colors duration-500 group-hover:border-emerald-300 dark:group-hover:border-emerald-300/40">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-white/80 dark:bg-white/[0.04] flex items-center justify-center">
            <PlaceholderIcon className="text-5xl md:text-6xl text-emerald-600/30 dark:text-emerald-300/20" />
          </div>
        )}

        {/* Year Badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full text-[10px] font-bold text-slate-950 dark:text-white border border-white/60 dark:border-white/10">
          {project.year}
        </div>

        {/* Project Number */}
        <span className="absolute top-4 left-4 text-3xl font-black text-white/35 leading-none">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Meta */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/25 text-[9px] font-bold tracking-wider uppercase text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-700/40">
            {project.type}
          </span>
          <span className="text-[9px] font-medium tracking-wider uppercase text-slate-500 dark:text-slate-400">
            {project.category}
          </span>
          <span
            className={`px-1.5 py-0.5 rounded-md text-[9px] font-bold tracking-wider uppercase border flex items-center gap-1.5 ${
              project.status === "Completed"
                ? "bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30"
                : "bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/30"
            }`}
          >
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
        <h2 className="text-xl md:text-2xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-emerald-900/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 hover:border-emerald-400 dark:hover:border-emerald-300 transition-colors cursor-default"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.type === "Personal" ? (
          <div className="flex items-center gap-2 pt-4">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 p-1.5 sm:px-3 sm:py-1 text-[11px] font-medium rounded-full border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:border-slate-950 dark:hover:border-white hover:bg-slate-950 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
            >
              <FaGithub className="text-xs" />
              <span className="hidden sm:inline">Code</span>
            </Link>
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 p-1.5 sm:px-3 sm:py-1 text-[11px] font-medium rounded-full border border-emerald-500 dark:border-emerald-300 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-600 dark:hover:bg-emerald-300 hover:text-white dark:hover:text-black transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-[9px]" />
              <span className="hidden sm:inline">Live Demo</span>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-1.5 p-1.5 sm:px-3 sm:py-1 text-[11px] font-medium rounded-full bg-emerald-600 dark:bg-emerald-300 text-white dark:text-black hover:bg-emerald-700 dark:hover:bg-emerald-200 transition-all duration-300 cursor-pointer"
            >
              <FaInfoCircle className="text-xs" />
              <span className="hidden sm:inline">Details</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 pt-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="inline-flex items-center justify-center gap-1.5 p-1.5 sm:px-3 sm:py-1 text-[11px] font-medium rounded-full bg-emerald-600 dark:bg-emerald-300 text-white dark:text-black hover:bg-emerald-700 dark:hover:bg-emerald-200 transition-all duration-300 cursor-pointer"
            >
              <FaInfoCircle className="text-xs" />
              <span className="hidden sm:inline">Details</span>
            </button>
          </div>
        )}
      </div>
      <ProjectDetailsModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={
        project.type === "Company" ? "Project Overview" : "Project Features"
      }
      headerRight={
        <span
          className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border flex items-center gap-1.5 ${
            project.status === "Completed"
              ? "bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30"
              : "bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/30"
          }`}
        >
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
      {project.type === "Company" ? (
        <div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
            {project.description}
          </p>
        </div>
      ) : (
        <>
          {/* Description and Links Top Section */}
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg mb-6">
              {project.description}
            </p>

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
          </div>

          <hr className="border-gray-200 dark:border-zinc-800/80 mb-8" />

          {!project.features ? (
            <div className="text-center py-10 border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-xl">
              <FaInfoCircle className="text-4xl text-gray-300 dark:text-zinc-700 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Detailed feature list is currently being updated.
              </p>
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
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800/80 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* In Progress Features */}
          {project.features.inProgress &&
            project.features.inProgress.length > 0 && (
              <section>
                <h3 className="flex items-center gap-2 text-base md:text-lg font-bold text-gray-900 dark:text-white mb-4">
                  <FaSpinner className="text-amber-500 text-lg animate-spin-slow" />
                  Currently Building
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.inProgress.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/30 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 hover:border-amber-200 dark:hover:border-amber-900/40 transition-colors"
                    >
                      <span className="relative flex h-2 w-2 mt-1.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {feature}
                      </span>
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
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/30 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/20 hover:border-purple-200 dark:hover:border-purple-900/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
        </>
      )}
    </Modal>
  );
}
