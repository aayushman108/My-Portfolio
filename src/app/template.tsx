"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pageName = pathname === "/" ? "Home" : pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2);
  const containerRef = useRef(null);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";
    document.body.style.cursor = "wait";

    const ctx = gsap.context(() => {
        const overlay = document.getElementById("transition-overlay");
        const logo = document.getElementById("transition-logo");
        const content = document.getElementById("page-content");
        const counterText = document.getElementById("loading-counter");
        const progressBar = document.getElementById("progress-bar");
        const progressContainer = document.getElementById("progress-container");

        if (overlay && logo) {
            const tl = gsap.timeline({
                onComplete: () => {
                    document.body.style.overflow = "";
                    document.body.style.cursor = "default";
                }
            });
            const counter = { val: 0 };
            
            // Reset states for a clean start
            tl.set(overlay, { yPercent: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 })
              .set(logo, { opacity: 0, y: 50 })
              .set(content, { opacity: 0, y: 100, scale: 0.9 })
              .set([progressBar, progressContainer], { opacity: 1, scaleX: 0, transformOrigin: "left" })
              .set(progressContainer, { scaleX: 1 });

            // 1. Premium Entrance
            tl.to(logo, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out"
            })
            
            // 2. Loading Progress (3s Simulation)
            .to(counter, {
                val: 100,
                duration: 3.0, 
                ease: "power2.inOut",
                onUpdate: () => {
                    if (counterText) counterText.innerText = Math.floor(counter.val).toString().padStart(3, '0');
                }
            })
            .to(progressBar, {
                scaleX: 1,
                duration: 3.0,
                ease: "power2.inOut"
            }, "<")
            
            // 3. Exit Animations (Text)
            .to([logo, counterText, progressContainer], {
                opacity: 0,
                y: -30,
                duration: 0.5,
                ease: "power2.in"
            }, ">-0.5")
            
            // 4. Fluid Curved Exit (The "Bad" Out Transition Fixed)
            .to(overlay, {
                yPercent: -100,
                borderBottomLeftRadius: "50% 20%",
                borderBottomRightRadius: "50% 20%",
                duration: 1.2,
                ease: "power4.inOut",
            }, "-=0.3")
            
            // 5. Content Reveal
            .to(content, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power4.out"
            }, "-=1.0");
        }
    }, containerRef);

    return () => {
        ctx.revert();
        document.body.style.overflow = "";
        document.body.style.cursor = "default";
    };
  }, [pathname]);

  return (
    <div ref={containerRef}>
      <div 
        id="transition-overlay"
        className="fixed inset-0 z-100 bg-[#050505] pointer-events-none flex flex-col items-center justify-center font-sans px-6"
      >
        <div id="transition-logo" className="flex flex-col items-center w-full max-w-2xl">
            {/* Modern Display Typography */}
            <div className="flex flex-col items-center mb-12 mix-blend-difference">
                <span className="text-sm md:text-base text-white/40 uppercase tracking-[0.3em] mb-4">
                    Destination
                </span>
                <span className="text-7xl md:text-9xl font-black text-white tracking-tighter">
                    {pageName}
                </span>
            </div>
            
            {/* Tech Info Row */}
            <div className="w-full flex justify-between items-end mb-4 text-white/50 font-mono text-xs uppercase">
               <span className="tracking-widest">System Loading...</span>
               <div className="flex items-end gap-2">
                   <span className="text-5xl font-light text-white" id="loading-counter">000</span>
                   <span className="text-xl mb-1">%</span>
               </div>
            </div>
            
            {/* Ultra-thin Progress */}
            <div id="progress-container" className="w-full h-px bg-white/10 relative overflow-hidden">
                <div id="progress-bar" className="absolute top-0 left-0 w-full h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </div>
        </div>
      </div>

      <div id="page-content" className="w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
