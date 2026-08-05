import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { PROJECTS } from "@/data/projects";
import { ProjectCardForProjectsPage } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="section-padding bg-[#f8fcf9] dark:bg-[#050509] relative overflow-hidden"
    >

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
              className="group inline-flex items-center gap-4 text-lg font-medium text-slate-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-300 mb-2"
            >
              <span>View All</span>
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center bg-white/70 dark:bg-white/10 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-300 group-hover:border-emerald-600 dark:group-hover:border-emerald-300 transition-colors duration-300">
                <FaArrowRight className="text-sm group-hover:text-white transition-colors" />
              </div>
            </Link>
          }
        />

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12">
          {PROJECTS.slice(0, 6).map((project, index) => (
            <ProjectCardForProjectsPage project={project} key={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 pt-12 border-t border-emerald-900/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
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
              className="group inline-flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 bg-slate-950 dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm md:text-base hover:bg-emerald-600 dark:hover:bg-emerald-300 transition-colors duration-300"
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
