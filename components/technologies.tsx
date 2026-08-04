"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Framer Motion" },
  { name: "Supabase" },
  { name: "PostgreSQL" },
  { name: "Docker" },
  { name: "Vercel" },
  { name: "GitHub" },
];

export function Technologies() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      aria-label="Technologies we use"
    >
      {/* Separator line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.07)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.07)] to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">
            Built with
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
            Technologies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {technologies.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-xs font-medium text-[#b8b8b8] hover:border-[rgba(255,255,255,0.16)] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all duration-300 cursor-default"
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
