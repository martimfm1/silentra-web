"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Bot, Code2, Cpu, Globe, Layers, Menu, X } from "lucide-react";
import Image from "next/image";
import { RadialNav, type RadialNavItem } from "@/components/animate-ui/components/community/radial-nav";
import { copy, useI18n } from "@/components/i18n";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Navigation() {
  const { locale, toggleLocale } = useI18n();
  const t = copy[locale].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerScale = useSpring(useTransform(scrollY, [0, 120], [1, 0.985]), { stiffness: 170, damping: 26 });

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 16));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    document.body.style.overflow = "";
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (mobileMenuOpen) {
        window.setTimeout(() => {
          document.body.style.overflow = "hidden";
        }, 450);
      }
    });
  };

  const radialHrefs = ["#home", "#services", "#work", "#about", "#contact"] as const;
  const radialItems: RadialNavItem[] = [
    { id: 0, icon: Globe, label: t.home, angle: 0 },
    { id: 1, icon: Layers, label: t.services, angle: 72 },
    { id: 2, icon: Code2, label: t.work, angle: 144 },
    { id: 3, icon: Cpu, label: t.about, angle: 216 },
    { id: 4, icon: Bot, label: t.contact, angle: 288 },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ scale: headerScale }}
        className={`fixed inset-x-0 top-0 z-50 origin-top transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "border-b border-[rgba(255,255,255,0.07)] bg-[rgba(5,5,5,0.9)] shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-3">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="group flex min-w-0 items-center gap-2.5 rounded-full py-2 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Silentra home"
            >
              <motion.div whileHover={{ rotate: -5, scale: 1.06 }} className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md">
                <Image src="/silentra-logo.png" alt="Silentra" fill className="object-cover" sizes="28px" />
              </motion.div>
              <span className="text-sm font-semibold tracking-wide text-white transition-colors group-hover:text-[#b8b8b8]">Silentra</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex" aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}>
              {[
                { label: t.home, href: "#home" },
                { label: t.services, href: "#services" },
                { label: t.work, href: "#work" },
                { label: t.about, href: "#about" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="group relative rounded-md px-3 py-2 text-sm text-[#7a7a7a] transition-colors hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {link.label}
                  <span aria-hidden="true" className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-white/50 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={toggleLocale}
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#888] transition hover:border-white/20 hover:text-white"
                aria-label={`${copy[locale].language}: ${locale === "pt" ? "English" : "Português"}`}
              >
                <span className={locale === "pt" ? "text-white" : ""}>PT</span>
                <span className="text-[#444]">/</span>
                <span className={locale === "en" ? "text-white" : ""}>EN</span>
              </button>
              <a
                href="https://www.instagram.com/silentra.dev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#7a7a7a] transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                aria-label={t.instagram}
              >
                <InstagramIcon />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {t.talk}
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleLocale}
                className="inline-flex h-10 items-center rounded-full border border-white/10 px-2.5 text-[10px] font-semibold tracking-[0.1em] text-white transition hover:border-white/20"
                aria-label={copy[locale].language}
              >
                {locale === "pt" ? "EN" : "PT"}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label={mobileMenuOpen ? (locale === "pt" ? "Fechar menu" : "Close menu") : (locale === "pt" ? "Abrir menu" : "Open menu")}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-radial-menu"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.span
                    key={mobileMenuOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-radial-menu"
            role="dialog"
            aria-modal="true"
            aria-label={locale === "pt" ? "Menu principal" : "Main menu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-[#050505] px-5 pt-16 md:hidden"
          >
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute h-[82vw] w-[82vw] max-h-[460px] max-w-[460px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_65%)] blur-3xl"
            />

            <motion.div
              initial={{ scale: 0.82, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.82, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-[min(82vw,420px)] w-[min(82vw,420px)] items-center justify-center"
            >
              <RadialNav
                size={Math.min(420, typeof window !== "undefined" ? window.innerWidth - 48 : 320)}
                items={radialItems}
                menuButtonConfig={{ iconSize: 18, buttonSize: 44, buttonPadding: 9 }}
                onActiveChange={(id) => handleNavClick(radialHrefs[id] ?? "#home")}
              />
            </motion.div>

            <div className="pointer-events-none absolute bottom-7 left-0 right-0 text-center">
              <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#555]">
                {locale === "pt" ? "Seleciona uma secção" : "Select a section"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
