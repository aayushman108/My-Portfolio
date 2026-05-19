"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowDown } from "react-icons/fa";
import Globe from "./Globe";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      gsap.set(".hero-cta-btn", { opacity: 0, y: 20 });
      gsap.set(".hero-globe", { opacity: 0, scale: 0.8 });

      // 1. Label Fade In
      tl.to(".hero-fade-label", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "none",
      });

      // 2. Main Title Text Reveal (Clip Path Animation)
      tl.to(
        ".hero-text-reveal",
        {
          y: 0,
          duration: 1.5,
          // stagger: 0.5,
          ease: "power4.inOut",
        },
        "-=0.5",
      );

      // 2.5. Globe Reveal
      tl.to(
        ".hero-globe",
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.2",
      );

      // 3. Subtitle Fade In
      tl.to(
        ".hero-fade-subtitle",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      );

      // 4. OTA Buttons (Synchronous with Subtitle)
      tl.to(
        ".hero-cta-btn",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      );

      // 5. Bottom Info Bar Fade In
      tl.to(
        ".hero-fade-bottom",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.6",
      );

      // Floating animation for scroll indicator
      gsap.to(".hero-scroll-icon", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      const playAnimation = () => {
        setTimeout(() => tl.play(), 1000);
      };

      if (document.readyState === "complete") {
        playAnimation();
      } else {
        window.addEventListener("load", playAnimation, { once: true });
      }
    },
    { scope: heroRef },
  );

  return (
    <section
      id="home"
      ref={heroRef}
      aria-label="Introduction"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#fbfcff] dark:bg-[#050509] px-6"
    >
      {/* Layered prism background */}
      <div className="hero-prism absolute inset-0 opacity-90 dark:opacity-80" />
      <div className="hero-beam absolute inset-y-0 left-1/4 w-1/3 bg-white/35 dark:bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,transparent_0,transparent_22%,rgba(251,252,255,0.72)_48%,#fbfcff_78%)] dark:bg-[radial-gradient(circle_at_72%_45%,transparent_0,transparent_24%,rgba(5,5,9,0.72)_50%,#050509_78%)]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e926_1px,transparent_1px),linear-gradient(to_bottom,#f43f5e1f_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#22d3ee1f_1px,transparent_1px),linear-gradient(to_bottom,#fb71851f_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />


      {/* 3D Globe - Positioned on the right */}
      <div className="hero-globe absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] opacity-0 pointer-events-auto hidden md:block drop-shadow-[0_35px_90px_rgba(14,165,233,0.38)] dark:drop-shadow-[0_35px_110px_rgba(167,139,250,0.32)]">
        <Globe className="w-full h-full" />
      </div>

      <div className="section-container">
        {/* Main Content */}
        <div className="max-w-5xl relative z-10">
          {/* Label */}
          <div className="hero-fade-label opacity-0 translate-y-5 mb-8">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-white/70 px-4 py-2 text-sm font-bold tracking-widest uppercase text-slate-700 shadow-[0_12px_35px_rgba(14,165,233,0.16)] backdrop-blur-md dark:border-cyan-300/20 dark:bg-white/10 dark:text-cyan-50">
              Frontend Software Engineer & React Expert
            </span>
          </div>

          {/* Main Title - Clipped Text Reveal */}
          <h1 className="mb-4 md:mb-8">
            {/* Wrapper 1 */}
            <div
              className=""
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className=" hero-text-reveal translate-y-30 block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-950 dark:text-white leading-[0.9] tracking-tight drop-shadow-[0_12px_42px_rgba(15,23,42,0.14)]">
                Hi, I&apos;m
              </span>
            </div>

            {/* Wrapper 2 */}
            <div
              className=""
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className=" hero-text-reveal translate-y-30 block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-gradient-hot">
                Aayushman
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <div className="hero-fade-subtitle opacity-0 translate-y-8 max-w-4xl mb-6 md:mb-12">
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Frontend Software Engineer with{" "}
              <span className="text-slate-950 dark:text-white font-bold decoration-cyan-400/50 underline underline-offset-4">
                2+ years of experience
              </span>{" "}
              building scalable and reliable web applications. Specialist in{" "}
              <span className="text-slate-950 dark:text-white font-bold decoration-rose-400/50 underline underline-offset-4">
                React, Next.js, and TypeScript
              </span>
              —focused on delivering production-ready features for international
              clients.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 md:gap-6">
            <a
              href="#projects"
              className="hero-cta-btn inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-slate-950 dark:bg-white text-white dark:text-black rounded-full font-semibold text-sm md:text-base shadow-[0_18px_45px_rgba(14,165,233,0.28)] hover:bg-cyan-600 dark:hover:bg-cyan-300 hover:shadow-[0_22px_60px_rgba(14,165,233,0.42)] transition-[background-color,box-shadow] duration-300"
            >
              <span>View My Work</span>
              <svg
                className="w-3.5 h-3.5 md:w-4 md:h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="hero-cta-btn group inline-flex items-center gap-3 md:gap-4 text-sm md:text-base font-semibold text-slate-950 dark:text-white hover:text-rose-600 dark:hover:text-rose-300 transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-current flex items-center justify-center bg-white/60 dark:bg-white/10 backdrop-blur-md group-hover:bg-rose-600 dark:group-hover:bg-rose-400 group-hover:border-rose-600 dark:group-hover:border-rose-400 transition-colors duration-300">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute  bottom-6 md:bottom-12 left-6 right-6">
          <div className="section-container">
            <div className="flex items-end justify-center md:justify-between">
              {/* Availability Status */}
              <div className="hero-fade-bottom opacity-0 translate-y-5 hidden md:flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)] animate-pulse" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Available for freelance work
                </span>
              </div>

              {/* Scroll Indicator */}
              <a
                href="#about"
                className="hero-fade-bottom opacity-0 translate-y-5 hero-scroll flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase">
                  Scroll
                </span>
                <FaArrowDown className="hero-scroll-icon text-[10px] md:text-sm" />
              </a>

              {/* Location */}
              <div className="hero-fade-bottom opacity-0 translate-y-5 hidden md:block text-right">
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
