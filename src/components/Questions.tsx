"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const questions = [
  {
    question: "What's your experience?",
    answer:
      "I have over two years of professional experience as a Frontend Software Engineer, specializing in React, Next.js, and TypeScript to build scalable and reliable web applications for international clients.",
  },
  {
    question: "Are you available for freelance or remote work?",
    answer:
      "I’m currently working full-time, but I’m open to discussing freelance or remote opportunities if they’re a good fit.",
  },
  {
    question: "What kind of projects have you worked on?",
    answer:
      "I’ve worked on government systems, AI-powered platforms, dashboards, and e-commerce applications, ranging from large-scale data-driven systems to customer-facing websites.",
  },
  {
    question: "How do you approach development?",
    answer:
      "I start by understanding the problem and requirements, then focus on building clean, maintainable code with strong attention to performance, accessibility, and user experience.",
  },
  {
    question: "Do you work with animations and interactions?",
    answer:
      "Yes. I regularly use GSAP, Framer Motion, and other modern animation libraries to create smooth, performant, and purposeful UI interactions.",
  },
  {
    question: "How can we collaborate?",
    answer:
      "You can reach out through the contact section. We can discuss your project, timeline, and see how I can contribute.",
  },
];

const Questions = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".question-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.8, // Wait for header to finish animating
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".questions-list",
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".questions-footer",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".questions-footer",
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="faq"
      ref={containerRef}
      aria-label="Frequently asked questions"
      className="section-padding bg-slate-50 dark:bg-[#08080d] relative overflow-hidden"
    >
      <div className="section-sheen absolute inset-0 pointer-events-none" />

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

        {/* Questions Accordion */}
        <div className="questions-list mb-8 md:mb-12">
          {questions.map((item, index) => (
            <div
              key={index}
              className="question-item group border-t border-cyan-900/10 dark:border-white/10 transition-colors duration-300"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full py-4 md:py-6 flex items-start gap-2 md:gap-8 text-left cursor-pointer"
              >
                {/* Number */}
                <span
                  className={`text-base md:text-3xl font-black leading-none transition-colors duration-300 min-w-[24px] md:min-w-[48px] ${
                    activeIndex === index
                      ? "text-cyan-500 dark:text-cyan-300"
                      : "text-slate-200 dark:text-white/10 group-hover:text-cyan-500 dark:group-hover:text-cyan-300"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`text-sm md:text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-cyan-600 dark:text-cyan-300"
                          : "text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
                      }`}
                    >
                      {item.question}
                    </h3>

                    {/* Toggle Icon */}
                    <div
                      className={`w-6 h-6 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-cyan-500 dark:bg-cyan-300 border-cyan-500 dark:border-cyan-300 rotate-45 shadow-[0_14px_32px_rgba(14,165,233,0.32)]"
                          : "border-cyan-900/10 dark:border-white/15 bg-white/70 dark:bg-white/[0.06] group-hover:border-cyan-500 dark:group-hover:border-cyan-300 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-300"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 md:w-5 md:h-5 transition-all duration-300 ${
                          activeIndex === index
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Answer - Expandable */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      activeIndex === index
                        ? "max-h-60 opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-slate-600 dark:text-slate-300 text-xs md:text-base leading-relaxed max-w-3xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="questions-footer">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-cyan-900/10 dark:border-white/10">
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
              className="group inline-flex items-center gap-3 text-base md:text-lg font-semibold text-slate-950 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-current flex items-center justify-center bg-white/70 dark:bg-white/[0.06] shadow-[0_12px_30px_rgba(14,165,233,0.18)] group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 group-hover:border-cyan-600 dark:group-hover:border-cyan-300 transition-all duration-300">
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
      </div>
    </section>
  );
};

export default Questions;
