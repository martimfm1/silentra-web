"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const email = "mailto:silentra.contact@gmail.com";
const instagram = "https://www.instagram.com/silentra.dev/";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const panelY = useTransform(scrollYProgress, [0, 1], [55, -55]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.9]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-28 lg:py-32" aria-label="Contactar a Silentra">
      <motion.div style={{ scale: glowScale, x: glowX }} aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.045)_0%,transparent_68%)] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div style={{ y: panelY }} className="overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.24)] sm:p-9 lg:p-12">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }} className="max-w-2xl">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#777]">Vamos falar</p>
              <h2 className="text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">Tens uma ideia?<br /><span className="text-[#707070]">Vamos fazê-la.</span></h2>
              <p className="mt-5 max-w-xl text-pretty text-sm leading-6 text-[#888] sm:text-base sm:leading-7">Diz-nos o que precisas, mesmo que ainda não tenhas tudo definido. Respondemos, percebemos o problema e vemos contigo o melhor caminho.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: 0.12 }} className="flex flex-col gap-3">
              <a href={email} className="group inline-flex min-h-12 items-center justify-between gap-4 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                <span className="inline-flex items-center gap-2"><Mail size={16} aria-hidden="true" /> Enviar email</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a href={instagram} target="_blank" rel="noreferrer" className="group inline-flex min-h-12 items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                <span className="inline-flex items-center gap-2"><InstagramIcon /> @silentra.dev</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <p className="pt-2 text-center text-[10px] uppercase tracking-[0.12em] text-[#555]">Sem formulários longos. Sem complicar.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
