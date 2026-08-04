"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Silentra for Barbers",
    description: "A full SaaS platform for barbershops — appointments, clients, professionals, and business settings in one seamless experience.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    category: "SaaS Product",
    image: "/work-silentra-barbers.png",
    url: "https://barbers.silentra.me/",
  },
  {
    name: "Silentra Ticket Bot",
    description: "Advanced Discord ticketing system with custom workflows, staff management, and analytics built for large communities.",
    tags: ["Discord.py", "Python", "Supabase", "PostgreSQL"],
    category: "Discord Bot",
    image: "/work-silentra-discord-bot.png",
    url: "https://ticketbot.silentra.me/",
  },
  {
    name: "Lab Customs Clipper Landing Page",
    description: "High-converting landing page engineered for a product launch — copy, motion design, and performance optimised to perfection.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    category: "Landing Page",
    image: "https://image.thum.io/get/https://lab-customs-clipper.vercel.app/",
    url: "https://lab-customs-clipper.vercel.app/",
  },
  {
    name: "62Degrees Project",
    description: "A Full-stack website for a clothing brand, featuring a product catalog, shopping cart, and checkout flow with Stripe integration.",
    tags: ["Html", "CSS", "JavaScript", "Python", "Django", "Stripe"],
    category: "Full-Stack Development",
    image: "/work-silentra-62degrees.png",
    url: "https://six2degrees-web.onrender.com/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function Work() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedProject(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="work"
      className="relative py-32 overflow-hidden"
      aria-label="Featured work"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.008),transparent)]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 flex items-end justify-between gap-8"
        >
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">
              Our work
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[#7a7a7a]">
              A selection of products we&apos;ve built — each one a result of
              disciplined engineering and thoughtful design.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/martimfm1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-full bg-white/6 border border-white/10 hover:bg-white/10 transition"
            >
              Ver GitHub
            </a>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col gap-6 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] p-7 backdrop-blur overflow-hidden transition-all duration-500 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              {/* Gradient image placeholder */}
              <div className="relative h-0 pb-[56.25%] w-full rounded-xl overflow-hidden bg-[#0a0a0a] border border-[rgba(255,255,255,0.06)]">
                {project.image ? (
                  <Image src={project.image} alt={project.name} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#3a3a3a]">{project.category}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_50%,rgba(255,255,255,0.02)_100%)]" />
                <div className="absolute inset-0 bg-grid opacity-50" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#7a7a7a] mb-1.5">
                      {project.category}
                    </p>
                    <h3 className="text-base font-semibold text-white">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight size={14} className="text-[#b8b8b8]" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#7a7a7a]">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-[#7a7a7a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner reflection */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              />
            </motion.article>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/60" onClick={() => setSelectedProject(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl bg-[#060606] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)] shadow-lg"
            >
              <div className="absolute top-3 right-3 z-10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/6 hover:bg-white/10 transition"
                  aria-label="Close preview"
                >
                  ✕
                </button>
              </div>

              {selectedProject.url ? (
                <iframe
                  src={selectedProject.url}
                  className="w-full h-full"
                  title={selectedProject.name}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-[#b8b8b8]">Preview not available</p>
                </div>
              )}

              <div className="absolute bottom-3 left-3 z-10 text-sm text-[#7a7a7a]">
                If the site blocks embedding, <a href={selectedProject.url} target="_blank" rel="noreferrer" className="underline">open in new tab</a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
