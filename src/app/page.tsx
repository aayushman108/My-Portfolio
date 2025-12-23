import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <div id="about" className="py-20 px-6 container mx-auto">
         <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
                I am a passionate Frontend React Developer with a keen eye for design and a drive for creating seamless user experiences. 
                With over two years of hands-on experience, I specialize in building responsive, accessible, and performant web applications 
                using the modern React ecosystem. I love turning complex problems into simple, beautiful, and intuitive interface designs.
            </p>
         </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
