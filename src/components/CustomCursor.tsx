"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, .clickable").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();
    
    // Re-attach listeners when DOM changes (optimistic approach for SPAs)
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  const cursorClasses = `fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 transition-transform duration-150 ease-out flex items-center justify-center mix-blend-difference
    ${clicked ? "scale-75 bg-primary" : "scale-100"}
    ${linkHovered ? "scale-150 bg-white/20 border-transparent" : ""}
    ${hidden ? "opacity-0" : "opacity-100"}
  `;

  // Separate movement and styling to avoid transform conflicts
  // Outer div tracks position with partial smoothing
  // Inner div handles scaling and visual changes
  return (
    <>
        <div 
             className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
             style={{ 
                 transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
             }}
        >
             <div 
                className={`flex items-center justify-center -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 transition-all duration-300 ease-out
                    ${linkHovered ? "bg-white/20 border-transparent scale-150" : "border-primary scale-100"}
                    ${clicked ? "scale-75 bg-primary" : ""}
                    ${hidden ? "opacity-0" : "opacity-100"}
                `}
             />
        </div>
        
        {/* Center Dot (Independent) */}
        <div 
            className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference transition-opacity duration-300"
            style={{ 
                transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
                opacity: hidden ? 0 : 1
            }}
        />
    </>
  );
};

export default CustomCursor;
