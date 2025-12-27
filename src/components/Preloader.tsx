"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const logo = document.getElementById("loader-logo-pre");
    const bar = document.getElementById("loader-bar-pre");
    
    // Animations
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

    // Exit Sequence after 3s
    gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        delay: 3,
        ease: "power4.inOut",
        onComplete: onComplete
    });
  }, { scope: containerRef, dependencies: [onComplete] });

  return (
    <div ref={containerRef} className="fixed inset-0 w-screen h-screen bg-[#050505] flex flex-col items-center justify-center z-99999 overflow-hidden">
      <div className="flex flex-col items-center">
        <span 
            id="loader-logo-pre" 
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 opacity-100"
        >
            Aayushman.
        </span>
        
        <div className="w-48 h-[2px] bg-white/10 overflow-hidden relative">
            <div 
                id="loader-bar-pre" 
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
