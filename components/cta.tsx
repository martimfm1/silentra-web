"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";

const email = "mailto:silentra.contact@gmail.com";
const instagram = "https://www.instagram.com/silentra.dev/";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-28 lg:py-32" aria-label="Contactar a Silentra">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.045)_0%,transparent_68%)]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.24)] sm:p-9 lg:p-12">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#777]">Vamos falar</p>
              <h2 className="text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
                Tens uma ideia?
                <br />
                <span className="text-[#707070]">Vamos fazê-la.</span>
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-sm leading-6 text-[#888] sm:text-base sm:leading-7">
                Diz-nos o que precisas, mesmo que ainda não tenhas tudo definido. Respondemos, percebemos o problema e vemos contigo o melhor caminho.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-3">
              <a href={email} className="group inline-flex min-h-12 items-center justify-between gap-4 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                <span className="inline-flex items-center gap-2"><Mail size={16} aria-hidden="true" /> Enviar email</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a href={instagram} target="_blank" rel="noreferrer" className="group inline-flex min-h-12 items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                <span className="inline-flex items-center gap-2"><Instagram size={16} aria-hidden="true" /> @silentra.dev</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <p className="pt-2 text-center text-[10px] uppercase tracking-[0.12em] text-[#555]">Sem formulários longos. Sem complicar.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
