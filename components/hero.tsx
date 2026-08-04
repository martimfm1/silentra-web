"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" as const, delay: 0.4 },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      aria-label="Hero"
    >
      {/* Radial glow layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_65%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.015)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.01)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">

          {/* Left — content */}
          <motion.div
            style={{ y: contentY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b8b8b8] opacity-70" />
                Premium Software Engineering
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="text-balance text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                you think.
                <br />
                <span className="text-[#7a7a7a]">we do.</span>
              </h1>
            </motion.div>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              className="text-pretty text-base leading-relaxed text-[#7a7a7a] sm:text-lg"
            >
              Silentra builds software, digital products and experiences that
              help businesses grow — with precision, quality, and engineering
              excellence at every layer.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white rounded-full bg-white/10 border border-white/15 hover:bg-white/15 hover:border-white/25 backdrop-blur transition-all duration-300 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]"
              >
                {"Let's Talk"}
              </a>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#b8b8b8] rounded-full border border-[rgba(255,255,255,0.08)] hover:text-white hover:border-[rgba(255,255,255,0.15)] transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            {/* Subtle stats row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              {[
                { value: "6+", label: "Service types" },
                { value: "100%", label: "Custom built" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-lg font-semibold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-[#7a7a7a]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — floating logo */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            style={{ y: logoY, rotate: logoRotate }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full scale-125 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)] blur-xl"
              />

              {/* Glass plate */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden glass glow-md"
              >
                {/* Inner reflection gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_50%,rgba(255,255,255,0.02)_100%)] z-10"
                />
                <Image
                  src="/silentra-logo.png"
                  alt="Silentra logo — premium metallic mark"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 420px"
                />
              </motion.div>

              {/* Reflection beneath */}
              <div
                aria-hidden="true"
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full bg-[rgba(255,255,255,0.04)] blur-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#7a7a7a]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
