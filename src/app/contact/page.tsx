"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.8 });

      // Animate Back Link
      tl.fromTo(
        ".back-link-reveal",
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate Sublabel
      tl.fromTo(
        ".contact-sublabel",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
        "-=0.6"
      );

      // Animate Title Reveals
      tl.fromTo(
        ".header-text-reveal",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.5"
      );

      // Animate Form Panel
      tl.fromTo(
        ".contact-form-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Animate Right Info Columns
      tl.fromTo(
        ".contact-info-card",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.8"
      );
    },
    { scope: containerRef }
  );

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/aayushman108",
      color: "hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aayushman-sharma-a8abbb277/",
      color: "hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20",
    },
    {
      icon: <FaTwitter size={20} />,
      label: "Twitter",
      href: "#",
      color: "hover:text-sky-500 hover:border-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/20",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Minimal background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 dark:bg-zinc-900/30 -z-10" />

      <div className="section-container px-4 sm:px-6 pt-32 pb-20">
        {/* Page Header */}
        <div className="page-header mb-16 md:mb-20">
          {/* Back Link */}
          <div className="back-link-reveal opacity-0 -translate-x-4 mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-all duration-300">
                <FaArrowLeft className="text-sm group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Title */}
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div>
              <div
                style={{
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                }}
                className="mb-4"
              >
                <span className="contact-sublabel opacity-0 translate-y-10 text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 block">
                  Contact
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                <div
                  style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                  }}
                >
                  <span className="header-text-reveal opacity-0 translate-y-20 block">
                    Let&apos;s build
                  </span>
                </div>
                <div
                  style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                  }}
                >
                  <span className="header-text-reveal opacity-0 translate-y-20 text-gray-400 dark:text-gray-600 block">
                    together.
                  </span>
                </div>
              </h1>
            </div>
          </div>
        </div>

        {/* Main Columns Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 contact-form-card opacity-0">
            <div className="p-6 sm:p-10 rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xl shadow-lg relative overflow-hidden">
              {status === "success" ? (
                <div className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-6">
                  <FaCheckCircle className="text-6xl text-green-500 animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed text-sm">
                    Thank you for reaching out. Aayushman will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-150 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                      Send a Message
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      Fill out the form below and I will reply as soon as possible.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-5 py-4 bg-gray-50/50 dark:bg-zinc-900/30 border ${
                        errors.name
                          ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 dark:border-gray-800/80 hover:border-purple-300 dark:hover:border-purple-800/60 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-500/5 dark:focus:ring-purple-400/5"
                      } rounded-2xl text-gray-950 dark:text-white text-sm focus:outline-none transition-all duration-300 placeholder:text-gray-350 dark:placeholder:text-gray-650`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1 block font-medium">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-5 py-4 bg-gray-50/50 dark:bg-zinc-900/30 border ${
                        errors.email
                          ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 dark:border-gray-800/80 hover:border-purple-300 dark:hover:border-purple-800/60 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-500/5 dark:focus:ring-purple-400/5"
                      } rounded-2xl text-gray-955 dark:text-white text-sm focus:outline-none transition-all duration-300 placeholder:text-gray-355 dark:placeholder:text-gray-655`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block font-medium">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Project Collaboration"
                      className={`w-full px-5 py-4 bg-gray-50/50 dark:bg-zinc-900/30 border ${
                        errors.subject
                          ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 dark:border-gray-800/80 hover:border-purple-300 dark:hover:border-purple-800/60 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-500/5 dark:focus:ring-purple-400/5"
                      } rounded-2xl text-gray-955 dark:text-white text-sm focus:outline-none transition-all duration-300 placeholder:text-gray-355 dark:placeholder:text-gray-655`}
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-500 mt-1 block font-medium">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and timeline..."
                      className={`w-full px-5 py-4 bg-gray-50/50 dark:bg-zinc-900/30 border ${
                        errors.message
                          ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 dark:border-gray-800/80 hover:border-purple-300 dark:hover:border-purple-800/60 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-500/5 dark:focus:ring-purple-400/5"
                      } rounded-2xl text-gray-955 dark:text-white text-sm focus:outline-none transition-all duration-300 resize-none placeholder:text-gray-355 dark:placeholder:text-gray-655`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 mt-1 block font-medium">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white dark:hover:text-white hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <FaSpinner className="animate-spin text-sm" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="space-y-6">
              {/* Direct Info list */}
              <div className="contact-info-card opacity-0 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <a
                  href="mailto:dev.aayushmansharma@gmail.com"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900/50 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
                      Email Me
                    </span>
                    <span className="text-sm font-bold text-gray-950 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors break-all">
                      dev.aayushmansharma@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+9779810478691"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900/50 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
                      Call Me
                    </span>
                    <span className="text-sm font-bold text-gray-950 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      +977 9810478691
                    </span>
                  </div>
                </a>
              </div>

              {/* Location Card */}
              <div className="contact-info-card opacity-0 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
                      Current Location
                    </span>
                    <span className="text-sm font-bold text-gray-950 dark:text-white">
                      Kathmandu, Nepal
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1 font-medium">
                      Open to global, local & remote options
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-info-card opacity-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-4">
                  Social Channels
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900/50 text-gray-600 dark:text-gray-400 font-bold text-sm transition-all duration-300 ${link.color}`}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
