"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -22]);

  return (
    <section id="home" ref={sectionRef} className="relative flex min-h-[92svh] items-center overflow-hidden bg-grid" aria-label="Silentra introduction">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_68%)]" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02)_0%,transparent_68%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-20 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:gap-10">
          <motion.div style={{ y: contentY }} variants={containerVariants} initial="hidden" animate="visible" className="flex max-w-2xl flex-col gap-7">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#a0a0a0]">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden="true" />
                Websites · Apps · Software
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="max-w-3xl text-balance text-[clamp(3.25rem,8vw,6.9rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-white">
                You have the idea.
                <br />
                <span className="text-[#6f6f6f]">We build it.</span>
              </h1>
              <p className="max-w-xl text-pretty text-base leading-7 text-[#8e8e8e] sm:text-lg sm:leading-8">
                Websites, online stores and custom software made for real businesses — clear, fast and built to help people contact you or buy.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:px-6">
                Falar connosco
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/silentra.dev/" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:px-6">
                <MessageCircle size={16} aria-hidden="true" />
                Instagram @silentra.dev
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid max-w-xl grid-cols-3 gap-3 border-t border-white/[0.07] pt-5 sm:gap-7">
              {[
                { value: "100%", label: "feito à medida" },
                { value: "Mobile", label: "desde o início" },
                { value: "Direct", label: "contacto simples" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-white sm:text-base">{stat.value}</span>
                  <span className="text-[9px] uppercase tracking-[0.12em] text-[#656565] sm:text-[10px]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }} style={{ y: logoY }} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 scale-125 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] blur-2xl" />
              <div className="relative h-[clamp(250px,56vw,420px)] w-[clamp(250px,56vw,420px)] overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#080808] shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                <Image src="/silentra-logo.png" alt="Silentra" fill className="object-cover" priority sizes="(max-width: 1024px) 56vw, 420px" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#666]">Scroll</span>
        <span className="h-7 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
