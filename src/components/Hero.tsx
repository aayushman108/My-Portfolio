const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="flex flex-col relative overflow-hidden bg-[#064e3b] px-6 py-20 md:py-24 lg:py-0 lg:min-h-screen"
    >
      <div className="section-container flex flex-col lg:min-h-screen">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-5xl relative z-10">
            {/* Label */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-3 text-base font-semibold text-emerald-100">
                <span className="h-px w-8 bg-emerald-400/70" />
                Software Engineer &amp; React Specialist
              </span>
            </div>

            {/* Main Title */}
            <h1 className="mb-4 md:mb-8">
              <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
                Hi, I&apos;m
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight">
                Aayushman
                <span className="text-emerald-400">.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-4xl mb-6 md:mb-12">
              <p className="text-xl md:text-2xl text-emerald-100/90 leading-relaxed">
                Software Engineer with{" "}
                <span className="text-white font-bold">
                  2.5+ years of experience
                </span>{" "}
                building scalable, production-ready web applications. I bring
                deep frontend expertise in{" "}
                <span className="text-white font-bold">
                  React, Next.js, and TypeScript{" "}
                </span>
                along with solid backend experience in{" "}
                <span className="text-white font-bold">
                  Node.js, Express, and PostgreSQL{" "}
                </span>
                — delivering end-to-end features for international clients.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-transparent text-white border-2 border-white/40 rounded-full font-semibold text-sm md:text-base hover:bg-white/10 hover:border-white transition-colors duration-300"
              >
                <span>View My Work</span>
                <svg
                  className="w-3.5 h-3.5 md:w-4 md:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 md:gap-4 text-sm md:text-base font-semibold text-white hover:text-emerald-300 transition-colors duration-300"
              >
                <span>Get in Touch</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-current flex items-center justify-center bg-transparent group-hover:bg-emerald-400 group-hover:border-emerald-400 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:text-emerald-950"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
