"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const btnRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const { left, top, width, height } = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 50, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power4.out" }
        )
            .fromTo(
                subtitleRef.current,
                { opacity: 0, y: 30, filter: "blur(5px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" },
                "-=0.8"
            )
            .fromTo(
                btnRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
                "-=0.5"
            );
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-background"
        >
            {/* Dynamic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
             {/* Mouse Spotlight */}
            <div 
                className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`
                }}
            />

            {/* Glowing Orbs */}
            <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-purple-600/20 dark:bg-purple-600/30 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-blue-600/20 dark:bg-blue-600/30 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

            <h1
                ref={titleRef}
                className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-foreground relative z-10"
            >
                Hi, I'm <br className="md:hidden"/>
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 cursor-default hover:tracking-widest transition-all duration-500">
                    Aayushman
                </span>
            </h1>
            
            <p
                ref={subtitleRef}
                className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mb-12 font-light leading-relaxed relative z-10"
            >
                <span className="font-semibold text-foreground">Frontend Architect</span> & <span className="font-semibold text-foreground">React Specialist</span>.
                <br />
                Building digital experiences that are pixel-perfect and performant.
            </p>

            <div ref={btnRef} className="relative z-10">
                <a
                    href="#projects"
                    className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-8 py-4 bg-foreground text-background font-bold transition-all hover:bg-foreground hover:scale-105"
                >
                    <span className="absolute inset-0 z-0 h-full w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                     <span className="relative z-10 transition-colors group-hover:text-white">Explore My Work</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
