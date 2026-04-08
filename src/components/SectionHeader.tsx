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

  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      t1.to(".section-text-reveal", {
        y: 0,
        duration: 1.5,
        // stagger: 0.2,
        ease: "power4.inOut",
      });

      if (description) {
        t1.to(".section-description", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (rightElement) {
        t1.to(
          ".section-right-element",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          description ? "-=0.5" : ">", // Overlap slightly with description if it exists, otherwise start after title
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={`mb-12 md:mb-20 ${className}`}>
      <div className="flex items-end justify-between flex-wrap gap-8">
        <div>
          <span className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 block">
            {label}
          </span>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.2] tracking-tight">
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className="section-text-reveal translate-y-40 block">
                {title}
              </span>
            </div>
            <div
              style={{
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              }}
            >
              <span className="section-text-reveal translate-y-40 text-gray-400 dark:text-gray-600 block">
                {subtitle}
              </span>
            </div>
          </h2>
        </div>

        {/* Right Side Content */}
        {description && (
          <p className="section-description opacity-0 translate-y-10 text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
            {description}
          </p>
        )}

        {rightElement && (
          <div className="section-right-element opacity-0 translate-y-10">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
};
