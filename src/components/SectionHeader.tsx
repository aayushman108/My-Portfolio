"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle: string;
  description?: string;
  rightElement?: React.ReactNode;
  className?: string;
}

export const SectionHeader = ({
  label,
  title,
  subtitle,
  description,
  rightElement,
  className = "",
}: SectionHeaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".section-text-reveal", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
        markers: true,
        id: label,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={`mb-20 ${className}`}>
      <div className="flex items-end justify-between flex-wrap gap-8">
        <div>
          <span className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 block">
            {label}
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
            <div
              className="section-text-reveal"
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              {title}
            </div>
            <div
              className="section-text-reveal"
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              }}
            >
              <span className="text-gray-400 dark:text-gray-600">
                {subtitle}
              </span>
            </div>
          </h2>
        </div>

        {/* Right Side Content */}
        {description && (
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
            {description}
          </p>
        )}

        {rightElement}
      </div>
    </div>
  );
};
