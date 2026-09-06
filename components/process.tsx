"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { number: "01", title: "Falamos", description: "Percebemos o teu negócio, o que precisas e o que queres conseguir." },
  { number: "02", title: "Planeamos", description: "Definimos o que vai ser feito e qual é a forma mais simples de chegar ao resultado." },
  { number: "03", title: "Construímos", description: "Tratamos do design e do desenvolvimento, com foco no que realmente vai ser usado." },
  { number: "04", title: "Publicamos", description: "Colocamos tudo online e confirmamos que funciona como deve em computador e telemóvel." },
  { number: "05", title: "Continuamos", description: "Depois do lançamento, continuamos disponíveis para melhorias, alterações e suporte." },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.08, 0.92], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0.08, 0.2, 0.8, 0.92], [0.2, 1, 1, 0.2]);

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32" aria-label="Como trabalhamos">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#767676]">Como trabalhamos</p>
          <h2 className="text-balance text-[clamp(2.35rem,6vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">Simples de perceber. <span className="text-[#686868]">Simples de começar.</span></h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          <motion.div style={{ opacity: lineOpacity }} className="absolute left-7 right-0 top-7 hidden h-px bg-white/[0.06] lg:block" aria-hidden="true">
            <motion.div style={{ width: lineWidth }} className="h-full origin-left bg-gradient-to-r from-white/10 via-white/45 to-white/10" />
          </motion.div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {steps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative flex flex-col gap-4">
                <motion.div whileInView={{ scale: [0.86, 1], boxShadow: ["0 0 0 rgba(255,255,255,0)", "0 0 28px rgba(255,255,255,0.08)"] }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65, delay: i * 0.08 }} className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#090909]">
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-[#777]">{step.number}</span>
                </motion.div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-6 text-[#777]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
