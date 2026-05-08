"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Client-only component that handles scroll restoration on the home page.
 * Extracted from page.tsx to allow the home page to be a server component.
 */
const HomeScrollManager = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Only scroll to top for `/` without hash
    if (pathname === "/" && !window.location.hash) {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default HomeScrollManager;
