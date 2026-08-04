"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Layers, Cpu, Zap, Code2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Discord Bots",
    description: "Custom bots for communities and businesses. Moderation, automation, analytics — built to scale.",
  },
  {
    icon: Globe,
    title: "Websites",
    description: "Modern websites focused on performance and precision. Fast, accessible, and built to last.",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "Conversion-driven landing pages designed with intent. Every pixel earns its place.",
  },
  {
    icon: Layers,
    title: "Full-Stack Apps",
    description: "Scalable software built for growth. From architecture to deployment, we own the entire stack.",
  },
  {
    icon: Cpu,
    title: "SaaS Products",
    description: "Product-grade SaaS from idea to launch. We handle the complexity so you can focus on growth.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "When off-the-shelf doesn't fit, we engineer the exact solution your business needs.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: "easeOut" as const,
    },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Services() {
  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden"
      aria-label="Services"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)] blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 max-w-xl"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">
            What we build
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl">
            Services
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[#7a7a7a]">
            We engineer products across every layer — from community tooling to
            production-grade software.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              className="group relative flex flex-col gap-5 p-7 bg-[#050505] transition-colors duration-300"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] group-hover:border-[rgba(255,255,255,0.14)] group-hover:bg-[rgba(255,255,255,0.07)] transition-all duration-300">
                <service.icon
                  size={18}
                  className="text-[#b8b8b8] group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#7a7a7a] group-hover:text-[#b8b8b8] transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Hover corner accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-16 h-16 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
