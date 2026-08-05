import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNodeJs,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGreensock,
  SiExpress,
  SiPostgresql,
  SiFramer,
  SiRedux,
  SiMongodb,
  SiGitlab,
} from "react-icons/si";
import { SectionHeader } from "./SectionHeader";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={24} /> },
      { name: "Next.js", icon: <SiNextdotjs size={24} /> },
      { name: "React Native", icon: <FaReact size={24} /> },
      { name: "Redux Toolkit", icon: <SiRedux size={24} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
      { name: "GSAP", icon: <SiGreensock size={24} /> },
      { name: "Framer Motion", icon: <SiFramer size={24} /> },
      { name: "HTML5", icon: <FaHtml5 size={24} /> },
      { name: "CSS3", icon: <FaCss3Alt size={24} /> },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={24} /> },
      { name: "Express", icon: <SiExpress size={24} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
      { name: "MongoDB", icon: <SiMongodb size={24} /> },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", icon: <SiTypescript size={24} /> },
      { name: "JavaScript", icon: <FaJs size={24} /> },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={24} /> },
      { name: "Docker", icon: <FaDocker size={24} /> },
      { name: "GitHub", icon: <FaGithub size={24} /> },
      { name: "GitLab", icon: <SiGitlab size={24} /> },
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-label="About Aayushman Sharma"
      className="section-padding bg-[#f2f9f4] dark:bg-[#08080d] relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Header */}
        <SectionHeader
          key="About Me"
          label="About Me"
          title="Software Engineer"
          subtitle="Building modern, scalable web applications"
          className=""
        />

        {/* Bio Section */}
        <div className="mb-8 md:mb-12">
          {/* Bio Text */}
          <div className="space-y-6 grid content-start max-w-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-950 dark:text-white leading-relaxed max-w-2xl">
              I&apos;m{" "}
              <span className="font-bold text-emerald-600 dark:text-emerald-300">
                Aayushman Sharma
              </span>
              , a Software Engineer with over{" "}
              <span className="font-bold">
                2 years of professional experience{" "}
              </span>
              building modern, scalable web applications.
            </p>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I specialize in React and Next.js on the frontend, with working
              knowledge of Node.js, Express, and PostgreSQL on the backend.
              I&apos;ve worked on government systems, AI-powered platforms,
              dashboards, and e-commerce applications—focusing on clean code,
              performance, and user experience.
            </p>

            {/* CTA */}
            <div className="pt-4 hidden md:block">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 text-lg font-semibold text-slate-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-300"
              >
                <span>Let&apos;s work together</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-current flex items-center justify-center bg-white/70 dark:bg-white/10 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-300 group-hover:border-emerald-600 dark:group-hover:border-emerald-300 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
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
                </div>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 block md:hidden">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 text-lg font-semibold text-slate-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-300"
            >
              <span>Let&apos;s work together</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-current flex items-center justify-center bg-white/70 dark:bg-white/10 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-300 group-hover:border-emerald-600 dark:group-hover:border-emerald-300 transition-colors duration-300">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
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
              </div>
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section pt-8 border-t border-emerald-900/10 dark:border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white">
              Tech Stack
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Technologies I work with daily
            </span>
          </div>

          {/* Skills by Category */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-white/80 dark:border-white/10 hover:border-emerald-400 dark:hover:border-emerald-300 bg-white/85 dark:bg-white/[0.06] shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-colors duration-300 cursor-default backdrop-blur-md"
                    >
                      <span className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
