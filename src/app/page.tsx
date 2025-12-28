"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Questions from "@/components/Questions";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on page load/reload
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

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
