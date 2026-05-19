"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { SectionHeader } from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8, // Wait for header to finish animating
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".contact-link",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 1.0, // Wait for header and left content to finish animating
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-links",
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/aayushman108",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aayushman-sharma-a8abbb277/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: <FaTwitter size={20} />,
      label: "Twitter",
      href: "#",
      color: "hover:text-sky-500 dark:hover:text-sky-400",
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      href: "mailto:dev.aayushmansharma@gmail.com",
      color: "hover:text-purple-600 dark:hover:text-purple-400",
    },
    {
      icon: <FaPhoneAlt size={20} />,
      label: "Phone",
      href: "tel:+9779810478691",
      color: "hover:text-green-600 dark:hover:text-green-400",
    },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      aria-label="Contact information"
      className="section-padding bg-[#fbfcff] dark:bg-[#050509] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(14,165,233,0.08),transparent_30%),linear-gradient(305deg,rgba(244,63,94,0.09),transparent_34%)] dark:bg-[linear-gradient(125deg,rgba(34,211,238,0.1),transparent_30%),linear-gradient(305deg,rgba(251,113,133,0.1),transparent_34%)] pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <SectionHeader
          key="Get In Touch"
          label="Get In Touch"
          title="Let's Work"
          subtitle="Together"
          className=""
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Left: Message */}
          <div className="contact-content space-y-6 md:space-y-8">
            <p className="text-xl md:text-3xl font-light text-slate-950 dark:text-white leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it.
            </p>

            <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m currently available for freelance work and exciting
              opportunities. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>

            {/* Email CTA */}
            <div className="pt-4">
              <a
                href="mailto:dev.aayushmansharma@gmail.com"
                className="group inline-flex items-center gap-4 max-w-full"
              >
                <span className="text-base md:text-2xl font-bold text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300 underline underline-offset-8 decoration-2 decoration-cyan-300/60 dark:decoration-cyan-700/60 group-hover:decoration-cyan-600 dark:group-hover:decoration-cyan-300 break-all md:break-normal">
                  dev.aayushmansharma@gmail.com
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-cyan-300 dark:border-cyan-700 flex items-center justify-center group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 group-hover:border-cyan-600 dark:group-hover:border-cyan-300 transition-all duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:rotate-45"
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

          {/* Right: Social Links */}
          <div className="contact-links">
            <h3 className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-8">
              Connect With Me
            </h3>

            <div className="space-y-0">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-link group flex items-center justify-between py-6 border-t border-cyan-900/10 dark:border-white/10 last:border-b transition-colors duration-300 hover:bg-cyan-50/70 dark:hover:bg-cyan-950/20 ${link.color}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 group-hover:text-current transition-colors duration-300">
                      {link.icon}
                    </span>
                    <span className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-current transition-colors duration-300">
                      {link.label}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-300 dark:text-gray-700 group-hover:text-current group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="contact-content pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                © {new Date().getFullYear()} Aayushman Sharma. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)] animate-pulse" />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Available for freelance work
              </span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
