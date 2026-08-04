"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative py-40 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Layered background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_65%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_60%)]" />
      </div>

      {/* Faint grid */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-6 text-center lg:text-left max-w-xl"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">
              Ready to start?
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              Ready to build something exceptional?
            </h2>
            <p className="text-base leading-relaxed text-[#7a7a7a]">
              Tell us what you&apos;re building. We&apos;ll handle the rest — with precision, care, and
              the engineering quality your idea deserves.
            </p>

            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <a
                href="mailto:hello@silentra.io"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white rounded-full bg-white/10 border border-white/15 hover:bg-white/15 hover:border-white/25 backdrop-blur transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
              >
                {"Let's Talk"}
              </a>
              <a
                href="https://discord.gg/aKpwVrXgyx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-[#b8b8b8] rounded-full border border-[rgba(255,255,255,0.08)] hover:text-white hover:border-[rgba(255,255,255,0.15)] transition-all duration-300"
              >
                Join Discord
              </a>
            </div>
          </motion.div>

          {/* Floating glass sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="flex-shrink-0"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-52 h-52 sm:w-64 sm:h-64"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)] blur-xl scale-125" />
              {/* Sphere */}
              <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.1)] bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.02)_50%,rgba(0,0,0,0.3)_100%)] backdrop-blur-sm overflow-hidden">
                {/* Inner reflection arc */}
                <div className="absolute top-4 left-6 w-16 h-6 rounded-full bg-[rgba(255,255,255,0.12)] blur-sm rotate-[-20deg]" />
                <div className="absolute top-6 left-8 w-8 h-2 rounded-full bg-[rgba(255,255,255,0.18)] blur-[2px] rotate-[-20deg]" />
              </div>
              {/* Shadow beneath */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full bg-[rgba(255,255,255,0.04)] blur-lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
