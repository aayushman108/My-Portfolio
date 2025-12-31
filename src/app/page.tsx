"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Questions from "@/components/Questions";
import { usePathname } from "next/navigation";

export default function Home() {
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

  return (
    <>
      {typeof window !== "undefined" && createPortal(<Navbar />, document.body)}
      <main className="min-h-screen bg-background text-foreground selection:bg-purple-500/30">
        <Hero />
        <About />
        <Projects />
        <Questions />
        <Contact />
      </main>
    </>
  );
}
