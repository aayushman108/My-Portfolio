"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiHappyBeaming } from "react-icons/bi";
import { FaLaptopHouse, FaTools, FaFileContract } from "react-icons/fa";
import { MdAnimation, MdDevices } from "react-icons/md";

const questions = [
  {
    icon: <BiHappyBeaming size={32} />,
    question: "What's your experience?",
    answer: "Two years building production interfaces with React, JavaScript, and GSAP. I focus on clean code and smooth user experiences."
  },
  {
    icon: <FaLaptopHouse size={32} />,
    question: "Do you work remotely?",
    answer: "Yes. I work with teams across time zones and handle projects entirely online."
  },
  {
    icon: <FaTools size={32} />,
    question: "What's your typical process?",
    answer: "I start by understanding the problem, then design and build solutions that balance aesthetics with performance."
  },
  {
    icon: <MdAnimation size={32} />,
    question: "Can you handle animations?",
    answer: "Absolutely. GSAP is my tool of choice for creating performant, intentional motion design."
  },
  {
    icon: <MdDevices size={32} />,
    question: "What about responsive design?",
    answer: "Every project I build works beautifully on mobile, tablet, and desktop. It's non-negotiable."
  },
  {
    icon: <FaFileContract size={32} />,
    question: "How do we get started?",
    answer: "Reach out through the contact section. We'll discuss your project and see if we're a good fit."
  }
];

const Questions = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.fromTo(
      ".questions-header",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".questions-header",
          start: "top 85%",
        },
      }
    );

    // Cards animation with stagger
    gsap.fromTo(
      ".question-card",
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.in",
        scrollTrigger: {
          trigger: ".questions-grid",
          start: "top 75%",
        },
      }
    );

    // Footer animation
    gsap.fromTo(
      ".questions-footer",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".questions-footer",
          start: "top 90%",
        },
      }
    );
  }, { scope: containerRef });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="py-32 px-6 bg-gray-50 dark:bg-zinc-900/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl px-3">
        <div className="questions-header text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            Common Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            Everything you need to know about my workflow, experience, and how we can create something amazing together.
          </p>
        </div>

        <div className="questions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {questions.map((item, index) => (
            <div
              key={index}
              className="question-card group relative rounded-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Animated Border Gradient Layer - Visible on Hover */}
              <div className="absolute -inset-[2px] rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,#9333ea_100%)] blur-[2px]" />
              </div>

              {/* Card Content */}
              <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 group-hover:border-transparent dark:group-hover:border-transparent transition-all duration-300">
                <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-zinc-800 w-fit group-hover:bg-purple-500/10 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-500">
                  <div className="text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="questions-footer text-center bg-gray-50 dark:bg-zinc-900/50 rounded-3xl p-12 max-w-4xl mx-auto border border-gray-100 dark:border-zinc-800">
          <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            I'm always open to discussing new projects and ideas.
          </p>
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 dark:bg-white dark:text-black rounded-full hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="relative z-10 flex items-center dark:group-hover:text-white transition-colors duration-200">
              Let's Talk
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
