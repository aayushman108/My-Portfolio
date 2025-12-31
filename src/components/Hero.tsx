"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 4 });

      gsap.set(".hero-fade", { opacity: 0, y: 30 });
      gsap.set(".hero-cta-btn", { opacity: 0, y: 20 });

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
        "-=0.5"
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
        "-=0.2"
      );

      // 4. OTA Buttons Stagger
      tl.to(
        ".hero-cta-btn",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.inOut",
        },
        "-=0.6"
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
        "-=0.6"
      );

      // Floating animation for scroll indicator
      gsap.to(".hero-scroll-icon", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white dark:bg-black px-6"
    >
      {/* Minimal background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />

      <div className="container mx-auto">
        {/* Main Content */}
        <div className="max-w-5xl">
          {/* Label */}
          <div className="hero-fade-label opacity-0 translate-y-5 mb-8">
            <span className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">
              Frontend Software Engineer
            </span>
          </div>

          {/* Main Title - Clipped Text Reveal */}
          <h1 className="mb-8">
            {/* Wrapper 1 */}
            <div
              className=""
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <p className=" hero-text-reveal translate-y-30 block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
                Hi, I'm
              </p>
            </div>

            {/* Wrapper 2 */}
            <div
              className=""
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <p className=" hero-text-reveal translate-y-30 block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] tracking-tight text-gray-400 dark:text-gray-600">
                Aayushman
              </p>
            </div>
          </h1>

          {/* Subtitle */}
          <div className="hero-fade-subtitle opacity-0 translate-y-8 max-w-4xl mb-12">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Frontend Software Engineer with{" "}
              <span className="text-gray-900 dark:text-white font-medium">
                2+ years of experience
              </span>{" "}
              building scalable web and mobile applications using React,
              Next.js, and React Native—focused on performance, usability, and
              clean UI animations.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="#projects"
              className="hero-cta-btn inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-base hover:bg-purple-600 dark:hover:bg-purple-400 transition-colors duration-300"
            >
              <span>View My Work</span>
              <svg
                className="w-4 h-4"
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
              className="hero-cta-btn group inline-flex items-center gap-4 text-base font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-colors duration-300">
                <svg
                  className="w-5 h-5 transition-all duration-300 group-hover:text-white"
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
        <div className="absolute bottom-12 left-6 right-6">
          <div className="container mx-auto">
            <div className="flex items-end justify-between">
              {/* Availability Status */}
              <div className="hero-fade-bottom opacity-0 translate-y-5 hidden md:flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Available for freelance work
                </span>
              </div>

              {/* Scroll Indicator */}
              <a
                href="#about"
                className="hero-fade-bottom opacity-0 translate-y-5 hero-scroll flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span className="text-xs font-medium tracking-widest uppercase">
                  Scroll
                </span>
                <FaArrowDown className="hero-scroll-icon text-sm" />
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
