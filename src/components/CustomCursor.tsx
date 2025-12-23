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

  return (
    <>
        <div 
             className={cursorClasses}
             style={{ 
                 transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${linkHovered ? 1.5 : clicked ? 0.9 : 1})`,
             }}
        />
        <div 
            className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{ 
                transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
                opacity: hidden ? 0 : 1
            }}
        />
    </>
  );
};

export default CustomCursor;
