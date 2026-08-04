"use client";

import { motion } from "framer-motion";
import { Layers, TrendingUp, Gauge, Sparkles, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Modern Technology",
    description: "Every project is built on a modern, battle-tested stack. No legacy debt.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "We design systems that grow with your business — not ones you'll need to rebuild in 12 months.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    description: "Speed is non-negotiable. We optimise at every layer — from database queries to render pipelines.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "The quality you see on the surface reflects rigorous work underneath. We sweat the details.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    description: "We don't disappear after launch. Ongoing support, maintenance, and iteration are part of how we work.",
  },
];

export function Why() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      aria-label="Why Silentra"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_65%)]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 max-w-xl"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">
            Why choose us
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl">
            Why Silentra
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[#7a7a7a]">
            We are not an agency. Not freelance. We are a precision engineering
            team that treats every product like it&apos;s our own.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative flex flex-col gap-5 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] p-7 backdrop-blur overflow-hidden transition-colors duration-300 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)] ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Top light reflection */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] group-hover:border-[rgba(255,255,255,0.15)] group-hover:bg-[rgba(255,255,255,0.07)] transition-all duration-300">
                <reason.icon
                  size={18}
                  className="text-[#b8b8b8] group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#7a7a7a] group-hover:text-[#b8b8b8] transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
