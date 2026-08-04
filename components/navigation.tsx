"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(5,5,5,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-2.5 group"
              aria-label="Silentra home"
            >
              <div className="relative h-7 w-7 overflow-hidden rounded-md">
                <Image
                  src="/silentra-logo.png"
                  alt="Silentra"
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white group-hover:text-[#b8b8b8] transition-colors duration-300">
                Silentra
              </span>
            </a>

            {/* Center nav links */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-3.5 py-1.5 text-sm text-[#7a7a7a] hover:text-white transition-colors duration-300 rounded-md hover:bg-[rgba(255,255,255,0.04)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] backdrop-blur-md hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300"
              >
                {"Let's Talk"}
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="flex md:hidden items-center justify-center w-9 h-9 rounded-md text-[#7a7a7a] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-colors duration-300"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[rgba(5,5,5,0.96)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-3 py-3 text-sm text-[#b8b8b8] hover:text-white transition-colors duration-300 rounded-md hover:bg-[rgba(255,255,255,0.04)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="mt-3 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
              >
                {"Let's Talk"}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
