"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loading() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        const logo = document.getElementById("loader-logo");
        const bar = document.getElementById("loader-bar");
        
        // Continuous Loading Animation
        gsap.to(logo, {
            opacity: 0.5,
            duration: 0.8,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });

        gsap.to(bar, {
            xPercent: 100,
            duration: 0.75,
            repeat: -1,
            ease: "power2.inOut",
            yoyo: true
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-screen h-screen bg-[#050505] flex flex-col items-center justify-center z-[200] overflow-hidden">
      <div className="flex flex-col items-center">
        <span 
            id="loader-logo" 
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 opacity-100"
        >
            Aayushman.
        </span>
        
        <div className="w-48 h-[2px] bg-white/10 overflow-hidden relative">
            <div 
                id="loader-bar" 
                className="w-full h-full bg-blue-500 absolute -left-full" 
            />
        </div>
        
        <span className="mt-4 text-white/30 text-xs font-mono tracking-[0.2em] uppercase animate-pulse">
            Initializing
        </span>
      </div>
    </div>
  );
}
