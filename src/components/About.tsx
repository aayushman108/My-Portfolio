"use client";

const About = () => {
    return (
        <section id="about" className="min-h-screen relative bg-gray-50 dark:bg-zinc-900 py-32 px-6 md:px-12 lg:px-24">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
            
            <div className="relative z-10 container mx-auto">
                {/* Section Number */}
                <div className="mb-16">
                    <span className="text-8xl md:text-9xl font-black text-gray-200 dark:text-gray-800 leading-none">
                        01
                    </span>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Title */}
                    <div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-8">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-black dark:bg-white"></div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        <p className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 leading-relaxed">
                            I'm <span className="font-medium text-black dark:text-white">Aayushman</span>, a frontend developer passionate about creating beautiful, functional web experiences.
                        </p>
                        
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            With over 2 years of experience in modern web development, I specialize in React, Next.js, and TypeScript. I believe in writing clean code, creating intuitive interfaces, and delivering pixel-perfect designs.
                        </p>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-300 dark:border-gray-700">
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2">2+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Years Exp.</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2">15+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Projects</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2">100%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
