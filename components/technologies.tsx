"use client";

import { motion } from "framer-motion";
import { copy, useI18n } from "@/components/i18n";

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL", "Docker", "Vercel", "GitHub"];

export function Technologies() {
  const { locale } = useI18n(); const t = copy[locale].tech;
  return <section className="relative overflow-hidden py-24" aria-label={locale === "pt" ? "Tecnologias" : "Technologies"}><div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"/><div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"/><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="mb-12 text-center"><p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">{t.eyebrow}</p><h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">{t.title}</h2></motion.div><motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} className="flex flex-wrap items-center justify-center gap-2">{technologies.map((tech, i) => <motion.span key={tech} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} whileHover={{ scale: 1.04 }} className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-[#b8b8b8] transition-all hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white">{tech}</motion.span>)}</motion.div></div></section>;
}
