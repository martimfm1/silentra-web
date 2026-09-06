"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Globe, Layers, Cpu, Zap, Code2, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { copy, useI18n } from "@/components/i18n";

const icons = [Globe, Zap, Layers, Cpu, Bot, Code2];
const cardVariants = { hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: (i: number) => ({ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const } }) };

export function Services() {
  const { locale } = useI18n();
  const t = copy[locale].services;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const gridY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return <section id="services" ref={sectionRef} className="relative overflow-hidden py-24 sm:py-28 lg:py-32" aria-label={locale === "pt" ? "Serviços" : "Services"}>
    <motion.div style={{ y: glowY }} aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_70%)] blur-3xl" />
    <motion.div style={{ y: gridY }} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-20 h-[420px] opacity-40 bg-grid" />
    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-10 max-w-2xl sm:mb-14">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#767676]">{t.eyebrow}</p><h2 className="text-balance text-[clamp(2.35rem,6vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">{t.title}</h2><p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-[#808080] sm:text-base sm:leading-7">{t.body}</p>
      </motion.div>
      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035]"><div className="grid grid-cols-1 gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">{t.cards.map(([title, description], i) => { const Icon = icons[i]; return <motion.a key={title} href="#contact" custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} whileHover={{ y: -5, transition: { duration: 0.25 } }} className="group relative flex min-h-[245px] flex-col gap-5 bg-[#050505] p-6 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/50 sm:p-7"><div className="flex items-center justify-between"><motion.div whileHover={{ rotate: 5, scale: 1.05 }} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] transition group-hover:border-white/[0.16] group-hover:bg-white/[0.07]"><Icon size={18} className="text-[#b8b8b8] transition-colors group-hover:text-white" aria-hidden="true" /></motion.div><ArrowUpRight size={16} className="text-[#555] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" /></div><div className="mt-auto flex flex-col gap-2"><h3 className="text-base font-semibold text-white">{title}</h3><p className="text-sm leading-6 text-[#777] transition-colors group-hover:text-[#a0a0a0]">{description}</p></div><div aria-hidden="true" className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-white/30 transition-transform duration-500 group-hover:scale-x-100" /></motion.a>; })}</div></div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-5 text-center text-[11px] text-[#555]">{t.note} <a href="#contact" className="text-[#b8b8b8] underline decoration-white/20 underline-offset-4 transition hover:text-white">{t.link}</a></motion.p>
    </div>
  </section>;
}
