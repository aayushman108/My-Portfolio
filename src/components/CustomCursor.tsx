"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useGSAP(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

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

    const handleLinkHover = () => setHovered(true);
    const handleLinkLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const addHoverListeners = () => {
        document.querySelectorAll("a, button, input, textarea, .clickable").forEach((el) => {
            el.addEventListener("mouseenter", handleLinkHover);
            el.addEventListener("mouseleave", handleLinkLeave);
        });
    };
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Center Dot / Spotlight Lens */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out rounded-full bg-white
            ${hovered 
                ? "w-20 h-20 opacity-100 mix-blend-difference" // Large spotlight on hover
                : "w-2 h-2 opacity-100" // Small dot normally
            }
            ${clicked ? "scale-90" : "scale-100"}
        `}
      />

      {/* Rotating Text Ring - Follows Smoothly */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-9998 mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out
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
