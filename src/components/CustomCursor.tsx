"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches || 
        window.innerWidth < 1024
      );
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle dynamic document body cursor styles based on hover state
  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = "auto";
      return;
    }
    
    document.body.style.cursor = hovered ? "auto" : "none";
    
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered, isMobile]);

  useGSAP(() => {
    if (isMobile) return;

    // Center the cursor elements initially
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
        // Direct updates - fail-safe tracking
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1, 
            ease: "power2.out" 
        });
        
        gsap.to(followerRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.6, // Physics lag
            ease: "power3.out"
        });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Deep detection check for clickable elements or those with cursor: pointer
    const checkClickable = (el: HTMLElement): boolean => {
      if (!el) return false;
      const tag = el.tagName;
      if (tag === "A" || tag === "BUTTON" || tag === "INPUT" || tag === "TEXTAREA") return true;
      if (el.classList && (el.classList.contains("clickable") || el.classList.contains("cursor-pointer"))) return true;
      
      // Check inline style
      if (el.style && (el.style.cursor === "pointer" || el.style.cursor === "default")) return true;
      
      // Check computed style
      try {
        const computed = window.getComputedStyle(el).cursor;
        if (computed === "pointer") return true;
      } catch (err) {
        // Safe fallback
      }
      return false;
    };

    const handleMouseOver = (e: MouseEvent) => {
      let current = e.target as HTMLElement | null;
      let isClickable = false;
      
      while (current && current !== document.documentElement) {
        if (checkClickable(current)) {
          isClickable = true;
          break;
        }
        current = current.parentElement;
      }
      
      setHovered(isClickable);
    };

    const handleMouseLeaveWindow = () => {
      setHovered(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Center Dot / Spotlight Lens */}
      <div
        ref={cursorRef}
        style={{ zIndex: 100000 }}
        className={`fixed top-0 left-0 pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out rounded-full bg-white
            ${hovered 
                ? "w-0 h-0 opacity-0" // Hide completely on hover to allow browser pointer to show
                : "w-2 h-2 opacity-100" // Small dot normally
            }
            ${clicked ? "scale-90" : "scale-100"}
        `}
      />

      {/* Rotating Text Ring - Follows Smoothly */}
      <div
        ref={followerRef}
        style={{ zIndex: 99999 }}
        className={`fixed top-0 left-0 pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out
            ${hovered ? "scale-150 opacity-0" : "scale-100 opacity-100"} 
        `}
      >
        <div className="w-28 h-28 animate-[spin_12s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <defs>
                <path
                  id="textCircle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="font-light uppercase tracking-[4px] text-[11px] fill-white opacity-90">
                <textPath href="#textCircle" startOffset="50%" textAnchor="middle">
                  AAYUSHMAN • PORTFOLIO •
                </textPath>
              </text>
            </svg>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
