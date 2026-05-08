import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Questions from "@/components/Questions";
import HomeScrollManager from "@/components/HomeScrollManager";

export default function Home() {
  return (
    <>
      <HomeScrollManager />
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
