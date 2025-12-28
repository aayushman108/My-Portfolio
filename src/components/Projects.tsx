"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import { PROJECTS } from "@/data/projects";
import { ProjectCardForHomePage } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
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
    },
    { scope: containerRef }
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Minimal background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />

      <div className="container mx-auto">
        {/* Section Header - Awwwards Style */}
        <SectionHeader
          key="Selected Work"
          label="Selected Work"
          title="Featured"
          subtitle="Projects"
          rightElement={
            <Link
              href="/projects"
              className="group inline-flex items-center gap-4 text-lg font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 mb-2"
            >
              <span>View All</span>
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-all duration-300">
                <FaArrowRight className="text-sm group-hover:text-white transition-colors" />
              </div>
            </Link>
          }
        />

        {/* Projects List - Editorial Layout */}
        <div className="space-y-0">
          {PROJECTS.map((project, index) => (
            <ProjectCardForHomePage project={project} key={index} />
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
