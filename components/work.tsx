"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  { name: "GB Barbershop", description: "Landing page built around the barbershop's style, with services, team, reviews, location and booking brought together in one clear flow.", tags: ["Next.js", "UX/UI", "Conversion"], category: "Business Website", image: "/work-silentra-barbers.png", url: "https://barbers.silentra.me/" },
  { name: "Lab Customs Clipper", description: "A focused website for a real service business, designed to explain the offer quickly and turn visits into enquiries.", tags: ["Next.js", "Motion", "SEO"], category: "Landing Page", image: "/work-silentra-landing-page.png", url: "https://lab-customs-clipper.vercel.app/" },
  { name: "Cabra Cega Tattoo Studio", description: "A visual-first tattoo studio website built to showcase the work, communicate the studio's style and make contacting the team simple.", tags: ["Next.js", "UX/UI", "Mobile"], category: "Business Website", image: undefined, url: "https://github.com/martimfm1/cabra-cega-tattoo-studio" },
  { name: "MoneyFlow", description: "A complete personal finance product with dashboards, recurring expenses, goals and a cleaner way to manage everyday money.", tags: ["Next.js", "TypeScript", "Supabase"], category: "Web App", image: undefined, url: "https://github.com/martimfm1/MoneyFlow" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98, filter: "blur(7px)" },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as const } }),
};

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const accentX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden py-24 sm:py-28 lg:py-32" aria-label="Selected work">
      <motion.div aria-hidden="true" style={{ y: mediaY, x: accentX }} className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_68%)] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.008),transparent)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">Selected work</p>
            <h2 className="text-balance text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">Sites people <span className="text-[#686868]">actually use.</span></h2>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-[#808080] sm:text-base sm:leading-7">Real projects built to look right, work well on mobile and make the next step obvious.</p>
          </div>
          <a href="https://github.com/martimfm1" target="_blank" rel="noreferrer" className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-[#a5a5a5] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
            Ver mais no GitHub <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a key={project.name} href={project.url} target="_blank" rel="noreferrer" custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -6 }} className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.04] hover:shadow-[0_24px_80px_rgba(0,0,0,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:p-5">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative min-h-[225px] overflow-hidden rounded-xl border border-white/[0.06] bg-[#090909] sm:min-h-[250px]">
                {project.image ? <Image src={project.image} alt={project.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /> : <div className="absolute inset-0 flex items-end bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_42%),linear-gradient(135deg,#151515,#070707)] p-6"><span className="text-[11px] uppercase tracking-[0.18em] text-[#555]">Preview available on project</span></div>}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" aria-hidden="true" />
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#d1d1d1] backdrop-blur">{project.category}</span>
                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition group-hover:bg-white group-hover:text-black" aria-hidden="true"><ExternalLink size={15} /></span>
              </motion.div>
              <div className="flex flex-1 flex-col gap-4 px-1 pb-1 pt-5">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">{project.name}</h3>
                <p className="max-w-xl text-sm leading-6 text-[#808080]">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.08em] text-[#767676]">{tag}</span>)}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
