"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".contact-container", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <section id="contact" ref={containerRef} className="min-h-screen bg-white dark:bg-black py-32 px-6 md:px-12 lg:px-24 relative">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="contact-container relative z-10 container mx-auto">
                {/* Section Number */}
                <div className="mb-16">
                    <span className="text-8xl md:text-9xl font-black text-gray-200 dark:text-gray-800 leading-none">
                        04
                    </span>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Title & Description */}
                    <div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-8">
                            Let's Work<br />Together
                        </h2>
                        <div className="w-24 h-1 bg-black dark:bg-white mb-8"></div>
                        
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                            Have a project in mind? Let's create something amazing together.
                        </p>

                        {/* Email CTA */}
                        <a 
                            href="mailto:hello@aayushman.dev"
                            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                        >
                            <FaEnvelope className="group-hover:scale-110 transition-transform" />
                            <span>hello@aayushman.dev</span>
                        </a>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex flex-col justify-end">
                        <div className="space-y-6">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-8">
                                Connect With Me
                            </p>

                            <a 
                                href="#" 
                                className="group flex items-center justify-between py-6 border-b border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors"
                            >
                                <span className="text-xl font-medium text-gray-900 dark:text-white">LinkedIn</span>
                                <FaLinkedin className="text-2xl text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            </a>

                            <a 
                                href="#" 
                                className="group flex items-center justify-between py-6 border-b border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors"
                            >
                                <span className="text-xl font-medium text-gray-900 dark:text-white">GitHub</span>
                                <FaGithub className="text-2xl text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            </a>

                            <a 
                                href="#" 
                                className="group flex items-center justify-between py-6 border-b border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors"
                            >
                                <span className="text-xl font-medium text-gray-900 dark:text-white">Twitter</span>
                                <FaTwitter className="text-2xl text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                            </a>
                        </div>

                        {/* Footer Note */}
                        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                © 2024 Aayushman. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
