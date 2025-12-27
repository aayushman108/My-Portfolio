"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, full-featured shopping experience built with Next.js, featuring real-time inventory, secure payments, and an intuitive admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics platform for businesses with real-time data visualization, custom reports, and team collaboration features.",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Creative Portfolio",
    description: "Award-winning portfolio website with stunning animations, smooth page transitions, and an immersive user experience.",
    tech: ["Next.js", "GSAP", "Tailwind", "Framer"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and progress with social features and AI-powered recommendations.",
    tech: ["React Native", "Firebase", "TensorFlow"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Blog Platform",
    description: "Modern content management system with MDX support, SEO optimization, and a beautiful reading experience.",
    tech: ["Next.js", "MDX", "Vercel", "Sanity"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Design System",
    description: "Comprehensive component library with documentation, accessibility features, and theming support for enterprise teams.",
    tech: ["React", "Storybook", "CSS-in-JS"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    color: "from-pink-500 to-rose-500"
  }
];

const Projects = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%"
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });
    }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="min-h-screen bg-gray-50 dark:bg-zinc-900/50 py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="relative z-10 container mx-auto">
        {/* Section Header - Compact Inline Design */}
        <div className="flex items-end gap-4 md:gap-6 mb-10">
          <span className="text-5xl md:text-6xl font-black text-gray-300 dark:text-gray-700 leading-none">
            02
          </span>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Selected Work
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1">
              Crafted with passion, built with precision
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex gap-4">
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <FiArrowUpRight className="text-white text-xl" />
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <FiGithub className="text-white text-xl" />
                      </button>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 dark:text-white">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
          >
            <span>View All Projects</span>
            <FiArrowUpRight className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
