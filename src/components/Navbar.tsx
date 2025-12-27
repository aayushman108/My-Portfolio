"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  if (!mounted) {
    return null; 
  }

  return (
    <>
      <nav
      className={`fixed z-50 transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${
        scrolled
          ? "top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] py-3 px-6"
          : "top-0 left-0 w-full bg-transparent py-8 px-6 border-transparent"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" // Expo ease out for premium feel
      }}
    >
        <div className={`flex justify-between items-center ${scrolled ? "w-full" : "container mx-auto"}`}>
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-black tracking-tight flex items-center gap-1 text-gray-900 dark:text-white group"
          >
            <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white group-hover:bg-purple-600 dark:group-hover:bg-purple-400 transition-colors duration-300" />
            Aayushman.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-gray-100/50 dark:bg-white/5 rounded-full p-1 pr-2 mr-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-all focus:outline-none"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            
            <button
              className="text-gray-900 dark:text-white focus:outline-none p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center space-y-8 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-3xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
