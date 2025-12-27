"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const questions = [
  {
    question: "What's your experience?",
    answer: "Two years building production interfaces with React, JavaScript, and GSAP. I focus on clean code and smooth user experiences."
  },
  {
    question: "Do you work remotely?",
    answer: "Yes. I work with teams across time zones and handle projects entirely online."
  },
  {
    question: "What's your typical process?",
    answer: "I start by understanding the problem, then design and build solutions that balance aesthetics with performance."
  },
  {
    question: "Can you handle animations?",
    answer: "Absolutely. GSAP is my tool of choice for creating performant, intentional motion design."
  },
  {
    question: "What about responsive design?",
    answer: "Every project I build works beautifully on mobile, tablet, and desktop. It's non-negotiable."
  },
  {
    question: "How do we get started?",
    answer: "Reach out through the contact section. We'll discuss your project and see if we're a good fit."
  }
];

const Questions = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".questions-header",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".questions-header",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".question-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".questions-list",
          start: "top 75%",
        },
      }
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
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden">
      {/* Minimal background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />

      <div className="container mx-auto">
        {/* Header */}
        <div className="questions-header mb-20">
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 block">
                FAQ
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                Common
                <br />
                <span className="text-gray-400 dark:text-gray-600">Questions</span>
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
              Everything you need to know about working together.
            </p>
          </div>
        </div>

        {/* Questions Accordion */}
        <div className="questions-list mb-20">
          {questions.map((item, index) => (
            <div
              key={index}
              className="question-item group border-t border-gray-200 dark:border-gray-800 last:border-b"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 md:py-10 flex items-start gap-6 md:gap-12 text-left cursor-pointer"
              >
                {/* Number */}
                <span className={`text-4xl md:text-5xl font-black leading-none transition-colors duration-300 min-w-[60px] md:min-w-[80px] ${activeIndex === index ? 'text-purple-500 dark:text-purple-400' : 'text-gray-200 dark:text-gray-800 group-hover:text-purple-500 dark:group-hover:text-purple-400'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400'}`}>
                      {item.question}
                    </h3>
                    
                    {/* Toggle Icon */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${activeIndex === index ? 'bg-purple-500 dark:bg-purple-400 border-purple-500 dark:border-purple-400 rotate-45' : 'border-gray-200 dark:border-gray-700 group-hover:border-purple-500 dark:group-hover:border-purple-400 group-hover:bg-purple-500 dark:group-hover:bg-purple-400'}`}>
                      <svg 
                        className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Answer - Expandable */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${activeIndex === index ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
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
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-12 border-t border-gray-200 dark:border-gray-800">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Let's start a conversation.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 text-lg font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-all duration-300">
                <svg 
                  className="w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
