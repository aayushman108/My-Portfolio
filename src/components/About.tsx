"use client";

import { FaCode, FaRocket, FaUserSecret } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 relative z-20">
            {/* 
              Static Immersive Container
            */}
            <div
                className="w-full h-[100vh] relative bg-[#050505] dark:bg-black text-white overflow-hidden shadow-2xl flex flex-col justify-center items-center"
            >
                {/* Dynamic Background */}
                <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[80vw] h-[80vw] bg-blue-600/30 rounded-full blur-[150px] animate-blob" />
                    <div className="absolute bottom-[-50%] right-[-20%] w-[80vw] h-[80vw] bg-purple-600/30 rounded-full blur-[150px] animate-blob animation-delay-2000" />
                    <div className="absolute top-[50%] left-[50%] w-[60vw] h-[60vw] bg-pink-600/30 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000" />
                </div>

                {/* Abstract Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay pointer-events-none" />

                {/* Visual Content Wrapper */}
                <div className="relative z-10 container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center h-full">

                    {/* Left Column: Big Text */}
                    <div className="text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-blue-300">
                            <FaUserSecret />
                            <span>Who Am I?</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                            More than just <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                Code & Syntax.
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                            I'm Aayushman, a digital craftsman focused on creating immersive web experiences.
                            Merging clean code with stunning aesthetics is my signature.
                            I don't just build websites; I build <span className="text-white font-semibold">emotions on the web</span>.
                        </p>

                        <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                            Read My Story
                        </button>
                    </div>

                    {/* Right Column: Stats / Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group">
                            <FaCode className="text-4xl text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-3xl font-bold mb-2">2+</h3>
                            <p className="text-gray-400">Years of crafting pixel-perfect code.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 mt-0 md:mt-12 group">
                            <FaRocket className="text-4xl text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-3xl font-bold mb-2">15+</h3>
                            <p className="text-gray-400">Successful projects delivered.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
