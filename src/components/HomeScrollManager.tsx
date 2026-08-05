"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLenis } from "./SmoothScroll";

/**
 * Client-only component that handles scroll behavior on the home page.
 * Extracted from page.tsx to allow the home page to be a server component.
 */
const HomeScrollManager = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on the home page
    if (pathname !== "/") return;

    const hash = window.location.hash;

    // No hash: scroll to top
    if (!hash) {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      return;
    }

    // Hash present (e.g. navigated from /#projects): scroll to the section
    const target = hash.slice(1);
    let attempts = 0;

    const tryScroll = () => {
      const lenis = getLenis();
      const el = document.getElementById(target);
      if (lenis && el) {
        lenis.scrollTo(`#${target}`, { duration: 1.2 });
      } else if (attempts++ < 30) {
        setTimeout(tryScroll, 100);
      } else if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    tryScroll();
  }, [pathname]);

  return null;
};

export default HomeScrollManager;
