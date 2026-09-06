"use client";

import { motion } from "framer-motion";
import { Layers, TrendingUp, Gauge, Sparkles, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Layers, title: "Feito à medida", description: "Nada de modelos iguais para toda a gente. Construímos a solução de acordo com o teu negócio." },
  { icon: TrendingUp, title: "Pensado para vender", description: "Cada página tem um objetivo claro: explicar, gerar confiança e levar a pessoa ao próximo passo." },
  { icon: Gauge, title: "Rápido", description: "Sites leves e rápidos, pensados para funcionar bem tanto no computador como no telemóvel." },
  { icon: Sparkles, title: "Boa experiência", description: "Informação fácil de encontrar, botões claros e menos passos desnecessários para o utilizador." },
  { icon: ShieldCheck, title: "Acompanhamento", description: "Depois de publicar, continuamos disponíveis para corrigir, melhorar e acrescentar o que for preciso." },
];

export function Why() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28 lg:py-32" aria-label="Porque escolher a Silentra">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_65%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#767676]">Porque a Silentra</p>
          <h2 className="text-balance text-[clamp(2.35rem,6vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">Um site bonito não chega.</h2>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-[#808080] sm:text-base sm:leading-7">Tem de ser fácil de usar, rápido e levar as pessoas a fazer aquilo que procuras.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div key={reason.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.55, delay: i * 0.07 }} whileHover={{ y: -4 }} className={`group relative flex min-h-[210px] flex-col justify-between gap-7 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur transition-colors hover:border-white/[0.13] hover:bg-white/[0.04] sm:p-7 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] transition group-hover:border-white/[0.15] group-hover:bg-white/[0.07]">
                <reason.icon size={18} className="text-[#b8b8b8] group-hover:text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-white">{reason.title}</h3>
                <p className="text-sm leading-6 text-[#777] transition-colors group-hover:text-[#a0a0a0]">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
