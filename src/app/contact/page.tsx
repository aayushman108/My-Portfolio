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
import { sendContactEmail } from "./actions";

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
  const [serverError, setServerError] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");
    setServerError(null);

    try {
      const response = await sendContactEmail(formData);
      if (response.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setServerError(response.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerError("An unexpected network error occurred. Please try again.");
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/aayushman108",
      color: "hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aayushman-sharma-a8abbb277/",
      color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20",
    },
    {
      icon: <FaTwitter size={20} />,
      label: "Twitter",
      href: "#",
      color: "hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/20",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#fbfcff] dark:bg-[#050509] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.08),transparent_30%),linear-gradient(300deg,rgba(244,63,94,0.08),transparent_34%)] dark:bg-[linear-gradient(120deg,rgba(34,211,238,0.1),transparent_30%),linear-gradient(300deg,rgba(251,113,133,0.1),transparent_34%)] pointer-events-none" />

      <div className="section-container px-4 sm:px-6 pt-32 pb-20">
        {/* Page Header */}
        <section className="page-header pb-6 md:pb-8 mb-8 md:mb-10 border-b border-cyan-900/10 dark:border-white/10">
          <div className="back-link-reveal opacity-0 -translate-x-4 mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 group-hover:border-cyan-600 dark:group-hover:border-cyan-300 transition-all duration-300">
                <FaArrowLeft className="text-sm group-hover:text-white transition-colors" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="pt-8 md:pt-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <div
                  style={{
                    clipPath:
                      "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                  }}
                  className="mb-6"
                >
                  <span className="contact-sublabel opacity-0 translate-y-10 inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-cyan-700 dark:text-cyan-300">
                    <span className="h-px w-10 bg-linear-to-r from-cyan-500 via-violet-500 to-rose-500" />
                    Contact
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 dark:text-white leading-[1.02] tracking-tight">
                  <div
                    style={{
                      clipPath:
                        "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    }}
                  >
                    <span className="header-text-reveal opacity-0 translate-y-20 block">
                      Start
                    </span>
                  </div>
                  <div
                    style={{
                      clipPath:
                        "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    }}
                  >
                    <span className="header-text-reveal opacity-0 translate-y-20 text-gradient-hot block">
                      a conversation.
                    </span>
                  </div>
                </h1>
              </div>

              <div className="lg:col-span-5">
                <p className="header-text-reveal opacity-0 translate-y-20 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tell me what you are building, where the product is stuck, or
                  what kind of frontend help you need. I read every message and
                  reply with clear next steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact Strip */}
        <section className="pb-6 md:pb-8 mb-8 md:mb-10 border-b border-cyan-900/10 dark:border-white/10">
          <div className="grid md:grid-cols-3">
            <a
              href="mailto:dev.aayushmansharma@gmail.com"
              className="contact-info-card opacity-0 group py-5 md:py-6 md:pr-6"
            >
              <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-300 mb-3">
                <FaEnvelope size={18} />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                  Email
                </span>
              </div>
              <span className="text-sm md:text-base font-bold text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors break-all">
                dev.aayushmansharma@gmail.com
              </span>
            </a>

            <a
              href="tel:+9779810478691"
              className="contact-info-card opacity-0 group py-5 md:py-6 md:px-6"
            >
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-300 mb-3">
                <FaPhoneAlt size={16} />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                  Phone
                </span>
              </div>
              <span className="text-sm md:text-base font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                +977 9810478691
              </span>
            </a>

            <div className="contact-info-card opacity-0 py-5 md:py-6 md:pl-6">
              <div className="flex items-center gap-3 text-rose-600 dark:text-rose-300 mb-3">
                <FaMapMarkerAlt size={16} />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                  Location
                </span>
              </div>
              <span className="text-sm md:text-base font-bold text-slate-950 dark:text-white">
                Kathmandu, Nepal
              </span>
              <span className="block text-sm text-slate-500 dark:text-slate-400">
                Open to global, local & remote options
              </span>
            </div>
          </div>
        </section>

        {/* Main Work Brief */}
        <section className="contact-form-card opacity-0 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <aside className="lg:pr-12">
            <span className="text-sm font-bold tracking-widest uppercase text-cyan-700 dark:text-cyan-300">
              Project Brief
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-950 dark:text-white leading-tight tracking-tight">
              Send context. I&apos;ll reply with a clear path forward.
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Scope, timeline, budget range, and main problem are enough. Keep
              it short if project is still early.
            </p>

            <div className="mt-10 border-y border-cyan-900/10 dark:border-white/10 py-8">
              <p className="max-w-xl text-lg md:text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                Share a short note about your idea, product, or team. I&apos;m
                open to new builds, frontend improvements, collaboration, and
                technical conversations.
              </p>
              <p className="mt-5 max-w-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                No need to over-prepare. A few lines are enough to start.
              </p>
            </div>

            <div className="mt-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
                Available for freelance & remote
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full border border-cyan-900/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 transition-colors duration-300 ${link.color}`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:pl-2">
              {status === "success" ? (
                <div className="py-16 text-center flex flex-col items-center justify-center space-y-6">
                  <FaCheckCircle className="text-6xl text-emerald-500" />
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                    Message sent.
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed text-sm">
                    Thank you for reaching out. Aayushman will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 dark:bg-white text-white dark:text-black hover:bg-cyan-600 dark:hover:bg-cyan-300 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {status === "error" && serverError && (
                    <div className="p-4 rounded-2xl border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-semibold flex items-center gap-2.5">
                      <span className="shrink-0">!</span>
                      <span>{serverError}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name field */}
                    <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
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
                      className={`w-full px-5 py-4 bg-white/80 dark:bg-white/[0.04] border ${
                        errors.name
                          ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/10"
                          : "border-cyan-900/10 dark:border-white/10 hover:border-cyan-300 dark:hover:border-cyan-300/50 focus:border-cyan-500 dark:focus:border-cyan-300 focus:ring-4 focus:ring-cyan-500/10"
                      } rounded-2xl text-slate-950 dark:text-white text-sm focus:outline-none transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600`}
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
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
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
                      className={`w-full px-5 py-4 bg-white/80 dark:bg-white/[0.04] border ${
                        errors.email
                          ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/10"
                          : "border-cyan-900/10 dark:border-white/10 hover:border-cyan-300 dark:hover:border-cyan-300/50 focus:border-cyan-500 dark:focus:border-cyan-300 focus:ring-4 focus:ring-cyan-500/10"
                      } rounded-2xl text-slate-950 dark:text-white text-sm focus:outline-none transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block font-medium">
                        {errors.email}
                      </span>
                    )}
                    </div>
                  </div>

                  {/* Subject field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
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
                      className={`w-full px-5 py-4 bg-white/80 dark:bg-white/[0.04] border ${
                        errors.subject
                          ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/10"
                          : "border-cyan-900/10 dark:border-white/10 hover:border-cyan-300 dark:hover:border-cyan-300/50 focus:border-cyan-500 dark:focus:border-cyan-300 focus:ring-4 focus:ring-cyan-500/10"
                      } rounded-2xl text-slate-950 dark:text-white text-sm focus:outline-none transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600`}
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
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
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
                      className={`w-full px-5 py-4 bg-white/80 dark:bg-white/[0.04] border ${
                        errors.message
                          ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/10"
                          : "border-cyan-900/10 dark:border-white/10 hover:border-cyan-300 dark:hover:border-cyan-300/50 focus:border-cyan-500 dark:focus:border-cyan-300 focus:ring-4 focus:ring-cyan-500/10"
                      } rounded-2xl text-slate-950 dark:text-white text-sm focus:outline-none transition-all duration-300 resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600`}
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
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:bg-cyan-600 dark:hover:bg-cyan-300 hover:shadow-[0_18px_45px_rgba(14,165,233,0.24)] transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
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
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
