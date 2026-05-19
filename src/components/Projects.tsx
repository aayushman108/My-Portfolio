"use client";

import { useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/data/projects";
import { ProjectCardForHomePage } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: ctaRef },
  );

  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="section-padding bg-[#fbfcff] dark:bg-[#050509] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.08),transparent_32%),linear-gradient(300deg,rgba(245,158,11,0.08),transparent_34%)] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.1),transparent_32%),linear-gradient(300deg,rgba(251,191,36,0.08),transparent_34%)] pointer-events-none" />

      <div className="section-container">
        {/* Section Header - Awwwards Style */}
        <SectionHeader
          key="Selected Work"
          label="Selected Work"
          title="Featured"
          subtitle="Projects"
          rightElement={
            <Link
              href="/projects"
              className="group inline-flex items-center gap-4 text-lg font-medium text-slate-950 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300 mb-2"
            >
              <span>View All</span>
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center bg-white/70 dark:bg-white/10 shadow-[0_12px_30px_rgba(14,165,233,0.18)] group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 group-hover:border-cyan-600 dark:group-hover:border-cyan-300 transition-all duration-300">
                <FaArrowRight className="text-sm group-hover:text-white transition-colors" />
              </div>
            </Link>
          }
        />

        {/* Projects List - Editorial Layout */}
        <div className="space-y-0">
          {PROJECTS.slice(0, 4).map((project, index) => (
            <ProjectCardForHomePage project={project} key={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className="pt-12 border-t border-cyan-900/10 dark:border-white/10"
        >
          <div className="cta-content flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-slate-950 dark:text-white mb-2">
                Want to see more?
              </h3>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
                Explore the complete collection of my work.
              </p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 bg-slate-950 dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm md:text-base shadow-[0_18px_45px_rgba(14,165,233,0.24)] hover:bg-cyan-600 dark:hover:bg-cyan-300 hover:shadow-[0_22px_60px_rgba(14,165,233,0.36)] transition-all duration-300"
            >
              <span>All Projects</span>
              <FaArrowRight className="text-sm md:text-base transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
