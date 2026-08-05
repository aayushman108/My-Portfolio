import {
  FaMedal,
  FaGlobe,
  FaFolderOpen,
  FaCode,
  FaBolt,
  FaHandshake,
} from "react-icons/fa";
import { SectionHeader } from "./SectionHeader";

const questions = [
  {
    question: "What's your experience?",
    icon: <FaMedal size={26} />,
    answer:
      "I have over two years of professional experience as a Software Engineer, specializing in React, Next.js, TypeScript, Node.js, Express, PostgreSQL, and MongoDB to build scalable and reliable web applications for international clients.",
  },
  {
    question: "Are you available for freelance or remote work?",
    icon: <FaGlobe size={26} />,
    answer:
      "I’m currently working full-time, but I’m open to discussing freelance or remote opportunities if they’re a good fit.",
  },
  {
    question: "What kind of projects have you worked on?",
    icon: <FaFolderOpen size={26} />,
    answer:
      "I’ve worked on government systems, AI-powered platforms, dashboards, and e-commerce applications, ranging from large-scale data-driven systems to customer-facing websites.",
  },
  {
    question: "How do you approach development?",
    icon: <FaCode size={26} />,
    answer:
      "I start by understanding the problem and requirements, then focus on building clean, maintainable code with strong attention to performance, accessibility, and user experience.",
  },
  {
    question: "Do you work with animations and interactions?",
    icon: <FaBolt size={26} />,
    answer:
      "Yes. I regularly use GSAP, Framer Motion, and other modern animation libraries to create smooth, performant, and purposeful UI interactions.",
  },
  {
    question: "How can we collaborate?",
    icon: <FaHandshake size={26} />,
    answer:
      "You can reach out through the contact section. We can discuss your project, timeline, and see how I can contribute.",
  },
];

const Questions = () => {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="section-padding bg-[#f2f9f4] dark:bg-[#08080d] relative overflow-hidden"
    >

      <div className="section-container">
        {/* Header */}
        <SectionHeader
          key="FAQ"
          label="FAQ"
          title="Common"
          subtitle="Questions"
          description="Everything you need to know about working together."
          className=""
        />

        {/* Questions Grid */}
        <div className="questions-list grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-8 md:mb-12">
          {questions.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border backdrop-blur-md p-6 md:p-7 overflow-hidden bg-white/85 dark:bg-white/[0.06] border-white/80 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-300/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-5 text-emerald-600 dark:text-emerald-300 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Question */}
              <h3 className="relative text-base md:text-lg font-bold text-slate-950 dark:text-white leading-snug mb-3">
                {item.question}
              </h3>

              {/* Answer */}
              <p className="relative text-sm md:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-emerald-900/10 dark:border-white/10">
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-slate-950 dark:text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
                Let&apos;s start a conversation.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-base md:text-lg font-semibold text-slate-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-current flex items-center justify-center bg-white/70 dark:bg-white/[0.06] group-hover:bg-emerald-600 dark:group-hover:bg-emerald-300 group-hover:border-emerald-600 dark:group-hover:border-emerald-300 transition-colors duration-300">
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
    </section>
  );
};

export default Questions;
