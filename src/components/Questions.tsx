"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  },
  {
    question: "Are you available for freelance work?",
    answer: "Yes! I'm currently available for freelance projects and consulting. Feel free to reach out through the contact section to discuss your project needs."
  }
];

const Questions = () => {
    const containerRef = useRef(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".questions-header", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".question-card", {
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
        <section ref={containerRef} className="py-32 px-6 bg-gray-50 dark:bg-zinc-900/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

            <div className="relative z-10 container mx-auto px-3">
                {/* Section Header - Same as Projects */}
                <div className="questions-header text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-6">
                        <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
                        <span>FAQ</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
                        Common Questions
                    </h2>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-6"></div>
                    
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        Everything you need to know about working with me
                    </p>
                </div>

                {/* FAQ Grid with Previous Card Design */}
                <div className="questions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="question-card group cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 overflow-hidden">
                                {/* Animated Border Loop Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl animate-spin-slow"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all">
                                        {faq.question}
                                    </h3>
                                    
                                    <p className={`text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-300 ${
                                        openIndex === index ? 'line-clamp-none' : 'line-clamp-3'
                                    }`}>
                                        {faq.answer}
                                    </p>

                                    {/* Expand Indicator */}
                                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                                        <span>{openIndex === index ? 'Show less' : 'Read more'}</span>
                                        <svg 
                                            className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="questions-footer text-center max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl border border-blue-200 dark:border-blue-500/20">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Still have questions?
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        Feel free to reach out, I'd love to hear from you!
                    </p>
                    <a 
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Questions;
