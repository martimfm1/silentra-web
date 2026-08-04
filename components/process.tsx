"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We listen, ask the right questions, and map out exactly what you need — no assumptions.",
  },
  {
    number: "02",
    title: "Design",
    description: "Every interface decision is intentional. We design with engineering constraints in mind from day one.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Clean, typed, tested code. We build for maintainability as much as functionality.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Zero-downtime deployments. We handle the infrastructure so launch day is quiet.",
  },
  {
    number: "05",
    title: "Support",
    description: "After launch, we stay close. Monitoring, updates, and iteration whenever you need it.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      className="relative py-32 overflow-hidden"
      aria-label="Our process"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 max-w-xl"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">
            How we work
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl">
            Our Process
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[#7a7a7a]">
            A disciplined, repeatable process that delivers consistent quality — every time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-[rgba(255,255,255,0.06)]"
            aria-hidden="true"
          >
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.08)] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex flex-col gap-5"
              >
                {/* Step node */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] backdrop-blur">
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-[#7a7a7a]">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#7a7a7a]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
