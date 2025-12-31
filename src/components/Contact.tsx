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

const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".contact-link",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-links",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
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
      href: "mailto:aayushmansharma108@gmail.com",
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
      className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Minimal background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />

      <div className="container mx-auto">
        {/* Header */}
        <SectionHeader
          key="Get In Touch"
          label="Get In Touch"
          title="Let's Work"
          subtitle="Together"
          className="contact-content"
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left: Message */}
          <div className="contact-content space-y-8">
            <p className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white leading-relaxed">
              Have a project in mind? I'd love to hear about it.
            </p>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm currently available for freelance work and exciting
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            {/* Email CTA */}
            <div className="pt-4">
              <a
                href="mailto:aayushmansharma108@gmail.com"
                className="group inline-flex items-center gap-4"
              >
                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 underline underline-offset-8 decoration-2 decoration-gray-300 dark:decoration-gray-700 hover:decoration-purple-600 dark:hover:decoration-purple-400">
                  aayushmansharma108@gmail.com
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:rotate-45"
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
                  className={`contact-link group flex items-center justify-between py-6 border-t border-gray-200 dark:border-gray-800 last:border-b transition-colors duration-300 ${link.color}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 group-hover:text-current transition-colors duration-300">
                      {link.icon}
                    </span>
                    <span className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-current transition-colors duration-300">
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
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Aayushman Sharma. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
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
