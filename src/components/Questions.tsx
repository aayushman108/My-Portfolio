"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in frontend development, focusing on React, Next.js, and TypeScript. I create responsive websites, web applications, and custom UI components with a strong emphasis on performance and user experience."
  },
  {
    question: "What's your development process?",
    answer: "I follow an agile approach: understanding requirements, creating wireframes, developing iteratively, testing thoroughly, and deploying with proper documentation. Communication is key throughout the process."
  },
  {
    question: "How long does a project take?",
    answer: "Timeline varies based on project complexity. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I provide detailed estimates after understanding your requirements."
  },
  {
    question: "Do you work with teams?",
    answer: "Absolutely! I collaborate well with designers, backend developers, and project managers. I'm experienced with Git workflows, code reviews, and agile methodologies."
  },
  {
    question: "What's your tech stack?",
    answer: "My primary stack includes React, Next.js, TypeScript, Tailwind CSS, and GSAP for animations. I'm also proficient in Node.js, Git, and various modern development tools."
  }
];

const Questions = () => {
    const containerRef = useRef(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".faq-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%"
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-32 px-6 md:px-12 lg:px-24 relative">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Number */}
                <div className="mb-16">
                    <span className="text-8xl md:text-9xl font-black text-gray-200 dark:text-gray-800 leading-none">
                        05
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-8">
                    FAQ
                </h2>
                <div className="w-24 h-1 bg-black dark:bg-white mb-20"></div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="faq-item border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pr-4">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700">
                                    {openIndex === index ? (
                                        <FiMinus className="text-gray-900 dark:text-white" />
                                    ) : (
                                        <FiPlus className="text-gray-900 dark:text-white" />
                                    )}
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 md:px-8 pb-6 md:pb-8">
                                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Questions;
