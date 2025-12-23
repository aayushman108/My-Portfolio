"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
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
        {/* Background gradient blob */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground"
      >
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">Aayushman Sharma</span>
      </h1>
      <p
        ref={subtitleRef}
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10"
      >
        Frontend React Developer crafting beautiful, high-performance web experiences.
      </p>
      
      <div ref={btnRef}>
        <a
          href="#projects"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
