"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { getLenis } from "./SmoothScroll";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (pathname === "/projects") return;
    const onScroll = () => {
      if (!isHome) {
        setScrolled(true);
        return;
      }
      const hero = document.getElementById("home");
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome, pathname]);

  if (pathname === "/projects") return null;

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!isHome) return;
    e.preventDefault();
    setIsOpen(false);
    const target = href.split("#")[1];
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(`#${target}`, { duration: 1.2 });
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        aria-label="Main navigation"
      >
        <div
          className="pointer-events-auto w-full bg-transparent py-8 px-6 border-transparent"
          style={{
            willChange: "background-color",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="flex justify-between items-center section-container">
            {/* Logo */}
            <Link
              href="/"
              className={`text-xl font-black tracking-tight flex items-center gap-1 transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              } group`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors duration-300 group-hover:bg-emerald-600 ${
                  scrolled ? "bg-gray-900" : "bg-white"
                }`}
              />
              Aayushman.
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <div
                className={`flex items-center rounded-full p-1 pr-2 mr-2 transition-colors duration-300 bg-transparent border border-transparent`}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      scrolled
                        ? "text-gray-600 hover:text-gray-900 hover:bg-white"
                        : "text-emerald-100 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                className={`focus:outline-none p-2 transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center space-y-8 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-3xl font-bold text-gray-900 hover:text-emerald-600 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
