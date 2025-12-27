"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef(null);
    const spotlightRef = useRef(null);

    useGSAP(() => {
        // Mouse Spotlight Effect with quickTo for performance
        const xTo = gsap.quickTo(spotlightRef.current, "x", { duration: 0.1, ease: "power3" });
        const yTo = gsap.quickTo(spotlightRef.current, "y", { duration: 0.1, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const { left, top, width, height } = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                
                xTo(x * 50);
                yTo(y * 50);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Clip Path Animation
        const tl = gsap.timeline({delay: 4});
        const lines = gsap.utils.toArray(".clip-line");

        // 1. Initial State for lines
        gsap.set(lines, { 
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            y: 80,
            opacity: 0
        });

        // 2. Animate Clip Path Reveal for Title lines
        tl.to(lines, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out"
        })
        // 3. Animate Button separately
        .fromTo(
            btnRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
            "-=0.5"
        );

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, { scope: heroRef });

    return (
        <section
            id="home"
            ref={heroRef}
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 relative overflow-hidden bg-background"
        >
            {/* Refined Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
            
             {/* Mouse Spotlight */}
            <div 
                ref={spotlightRef}
                className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"
            />

            {/* Glowing Orbs - More Subtle */}
            <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="relative z-10 container mx-auto">
                {/* Title with Better Spacing */}
                <div className="mb-8 font-black tracking-tighter text-foreground">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl flex flex-col items-center gap-4">
                        <span className="clip-line block">Hi, I'm</span>
                        <span className="clip-line block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 cursor-default hover:tracking-widest transition-all duration-500">
                            Aayushman
                        </span>
                    </h1>
                </div>
                
                {/* Subtitle with Better Hierarchy */}
                <div className="relative z-10 text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-16 font-light leading-relaxed flex flex-col items-center gap-3">
                    <span className="clip-line block">
                         <span className="font-semibold text-foreground">Frontend Architect</span> & <span className="font-semibold text-foreground">React Specialist</span>
                    </span>
                    <span className="clip-line block">
                        Building digital experiences that are pixel-perfect and performant
                    </span>
                </div>

                {/* Refined CTA Buttons */}
                <div ref={btnRef} className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center gap-3 justify-center overflow-hidden rounded-full px-8 py-4 bg-foreground text-background font-bold transition-all hover:scale-105 hover:shadow-2xl"
                    >
                        <span className="absolute inset-0 z-0 h-full w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                         <span className="relative z-10 transition-colors group-hover:text-white">Explore My Work</span>
                         <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground/20 text-foreground font-medium rounded-full hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
                    >
                        <span>Get In Touch</span>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 animate-bounce">
                <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600"></div>
            </div>
        </section>
    );
};

export default Hero;
