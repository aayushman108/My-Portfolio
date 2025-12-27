"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate header elements
    tl.fromTo(
      ".hero-label",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(
      ".hero-title-line",
      { opacity: 0, y: 80, skewY: 3 },
      { 
        opacity: 1, 
        y: 0, 
        skewY: 0,
        duration: 1, 
        stagger: 0.1,
        ease: "power4.out" 
      },
      "-=0.4"
    )
    .fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      ".hero-cta",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(
      ".hero-scroll",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    );

    // Floating animation for scroll indicator
    gsap.to(".hero-scroll", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, { scope: heroRef });

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white dark:bg-black px-6"
    >
      {/* Minimal background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />

      <div className="container mx-auto">
        {/* Main Content */}
        <div className="max-w-5xl">
          {/* Label */}
          <div className="hero-label mb-8">
            <span className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">
              Frontend Developer & Digital Craftsman
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mb-8">
            <span className="hero-title-line block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
              Hi, I'm
            </span>
            <span className="hero-title-line block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight text-gray-400 dark:text-gray-600">
              Aayushman
            </span>
          </h1>

          {/* Subtitle */}
          <div className="hero-subtitle max-w-2xl mb-12">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I craft <span className="text-gray-900 dark:text-white font-medium">pixel-perfect</span> digital experiences with modern technologies. Specializing in React, Next.js, and thoughtful UI animations.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-cta flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-base hover:bg-purple-600 dark:hover:bg-purple-400 transition-all duration-300"
            >
              <span>View My Work</span>
              <svg 
                className="w-4 h-4"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 text-base font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-all duration-300">
                <svg 
                  className="w-5 h-5 transition-all duration-300 group-hover:text-white"
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

        {/* Bottom Info Bar */}
        <div className="absolute bottom-12 left-6 right-6">
          <div className="container mx-auto">
            <div className="flex items-end justify-between">
              {/* Availability Status */}
              <div className="hidden md:flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Available for freelance work
                </span>
              </div>

              {/* Scroll Indicator */}
              <a href="#about" className="hero-scroll flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                <FaArrowDown className="text-sm" />
              </a>

              {/* Location */}
              <div className="hidden md:block text-right">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Based in Nepal 🇳🇵
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
