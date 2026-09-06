"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { Menu, X, Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

const instagramUrl = "https://www.instagram.com/silentra.dev/";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerScale = useSpring(useTransform(scrollY, [0, 120], [1, 0.985]), { stiffness: 170, damping: 26 });

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 16));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ scale: headerScale }}
        className={`fixed inset-x-0 top-0 z-50 origin-top transition-all duration-300 ${scrolled ? "border-b border-[rgba(255,255,255,0.07)] bg-[rgba(5,5,5,0.9)] shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl" : "bg-transparent"}`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-4">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }} className="group flex min-w-0 items-center gap-2.5 rounded-full py-2 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" aria-label="Silentra home">
              <motion.div whileHover={{ rotate: -5, scale: 1.06 }} className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md">
                <Image src="/silentra-logo.png" alt="Silentra" fill className="object-cover" sizes="28px" />
              </motion.div>
              <span className="text-sm font-semibold tracking-wide text-white transition-colors group-hover:text-[#b8b8b8]">Silentra</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} className="relative rounded-md px-3 py-2 text-sm text-[#7a7a7a] transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
                  {link.label}
                  <span aria-hidden="true" className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-white/50 transition-transform duration-300 hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#7a7a7a] transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white" aria-label="Instagram @silentra.dev" title="Instagram @silentra.dev"><Instagram size={16} aria-hidden="true" /></a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }} className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">Let&apos;s talk<ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></a>
            </div>

            <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#b8b8b8] transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>{mobileOpen ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="fixed inset-x-0 top-16 z-40 border-b border-white/[0.07] bg-[rgba(5,5,5,0.98)] backdrop-blur-xl md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.045 }} className="rounded-xl px-4 py-3.5 text-base text-[#b8b8b8] transition hover:bg-white/[0.05] hover:text-white">{link.label}</motion.a>
              ))}
              <div className="mt-3 grid grid-cols-[1fr_auto] gap-2 border-t border-white/[0.06] pt-4">
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }} className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90">Let&apos;s talk</a>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-[#b8b8b8] transition hover:bg-white/[0.05] hover:text-white" aria-label="Instagram @silentra.dev"><Instagram size={18} aria-hidden="true" /></a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
