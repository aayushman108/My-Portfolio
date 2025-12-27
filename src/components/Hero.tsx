"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 4 });

        // Animate elements in sequence
        tl.from(".hero-label", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".hero-title-line", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
        }, "-=0.4")
        .from(".hero-subtitle", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")
        .from(".hero-cta", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.3");
    }, { scope: heroRef });

    return (
        <section
            id="home"
            ref={heroRef}
            className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-white dark:bg-black"
        >
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Small Label */}
                <div className="hero-label mb-8 md:mb-12">
                    <span className="inline-block px-4 py-2 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-full">
                        Available for Freelance
                    </span>
                </div>

                {/* Massive Title */}
                <h1 className="mb-8 md:mb-12 overflow-hidden">
                    <div className="hero-title-line text-[14vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.9] tracking-tighter text-gray-900 dark:text-white">
                        Creative
                    </div>
                    <div className="hero-title-line text-[14vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.9] tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            Developer
                        </span>
                    </div>
                </h1>

                {/* Subtitle & Description */}
                <div className="hero-subtitle max-w-2xl mb-12 md:mb-16">
                    <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                        Crafting exceptional digital experiences through code, design, and innovation.
                    </p>
                </div>

                {/* CTA */}
                <div className="hero-cta flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:gap-5 transition-all duration-300"
                    >
                        <span>View Projects</span>
                        <FiArrowRight className="text-xl" />
                    </a>
                    
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                    >
                        <span>Get In Touch</span>
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600"></div>
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-12 right-12 hidden lg:block">
                <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-600">Based in</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">Nepal</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
