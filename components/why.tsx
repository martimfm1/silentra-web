"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, TrendingUp, Gauge, Sparkles, ShieldCheck } from "lucide-react";
import { copy, useI18n } from "@/components/i18n";

const icons = [Layers, TrendingUp, Gauge, Sparkles, ShieldCheck];
export function Why() {
  const { locale } = useI18n();
  const t = copy[locale].why;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const orbScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 1.08, 0.9],
  );
  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
      aria-label={
        locale === "pt" ? "Porque escolher a Silentra" : "Why choose Silentra"
      }
    >
      <motion.div
        style={{ y: orbY, scale: orbScale }}
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.025),transparent_68%)] blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-2xl sm:mb-14"
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#767676]">
            {t.eyebrow}
          </p>
          <h2 className="text-balance text-[clamp(2.35rem,6vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-[#808080] sm:text-base sm:leading-7">
            {t.body}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map(([title, description], i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative flex min-h-[210px] flex-col justify-between gap-7 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur transition-colors duration-300 hover:border-white/[0.13] hover:bg-white/[0.04] sm:p-7 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]"
                >
                  <Icon
                    size={18}
                    className="text-[#b8b8b8] group-hover:text-white"
                    aria-hidden="true"
                  />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-[#777] transition-colors group-hover:text-[#a0a0a0]">
                    {description}
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-white/25 transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
