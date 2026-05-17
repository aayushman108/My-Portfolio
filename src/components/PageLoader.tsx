"use client";

import { useEffect, useState } from "react";

const MIN_LOADER_MS = 0;
const EXIT_ANIMATION_MS = 1000;

export default function PageLoader() {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = performance.now();
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const finishLoading = () => {
      const elapsed = performance.now() - startTime;
      const remainingTime = Math.max(MIN_LOADER_MS - elapsed, 0);

      exitTimer = setTimeout(() => {
        setIsExiting(true);
        exitTimer = setTimeout(() => setIsVisible(false), EXIT_ANIMATION_MS);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      requestAnimationFrame(finishLoading);
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        html, body {
          overflow: hidden !important;
        }
      `}</style>
      <div
        className={`fixed inset-0 w-screen h-screen bg-[#050505] flex flex-col items-center justify-center z-[9999] overflow-hidden transition-all ease-in-out ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ 
          transitionDuration: `${EXIT_ANIMATION_MS}ms`,
          borderBottomLeftRadius: isExiting ? "50% 20%" : "0",
          borderBottomRightRadius: isExiting ? "50% 20%" : "0",
        }}
        role="status"
        aria-label="Loading page"
        aria-live="polite"
      >
        <div className="flex flex-col items-center justify-center">
          {/* Name */}
          <div className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 relative flex items-center">
            <span>Aayushman</span>
            <span className="text-purple-500">.</span>
          </div>

          {/* Animated loading bar */}
          <div className="w-48 h-[2px] bg-white/10 overflow-hidden relative rounded-full">
            <div className="w-full h-full bg-blue-500 absolute inset-0 animate-[loading_1.5s_ease-in-out_infinite]" />
          </div>

          <span className="mt-6 text-white/30 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase">
            Initializing...
          </span>
        </div>
      </div>
    </>
  );
}
