"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "information",
    title: "Information We Collect",
    content: (
      <p className="text-base text-[#b8b8b8]">
        We may collect personal information you provide (name, email), usage data,
        and technical data (IP address, browser, device). We also use cookies and
        similar technologies to enhance your experience.
      </p>
    ),
  },
  {
    id: "use",
    title: "How We Use Information",
    content: (
      <p className="text-base text-[#b8b8b8]">
        We use information to provide and improve services, analyze usage, communicate
        with you, and comply with legal obligations. We minimize data collection and
        retain only what is necessary for the purpose it was collected.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: (
      <p className="text-base text-[#b8b8b8]">
        We may share data with third-party service providers for analytics, hosting,
        and other operations. We review providers for security and only share the
        minimal data required for them to perform their services.
      </p>
    ),
  },
  {
    id: "choices",
    title: "Your Choices",
    content: (
      <p className="text-base text-[#b8b8b8]">
        You can opt out of marketing communications and control cookies via browser
        settings. Contact us for data access, correction, or deletion requests.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p className="text-base text-[#b8b8b8]">
        For questions about this policy, email <a href="mailto:silentra.contact@gmail.com" className="text-white hover:underline">silentra.contact@gmail.com</a>.
      </p>
    ),
  },
];

function SectionPanel({ id, title, children, expanded, onToggle }: any) {
  return (
    <section className="mb-6" id={id}>
      <button
        aria-expanded={expanded}
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between gap-4 py-3 px-2 rounded-md hover:bg-[rgba(255,255,255,0.01)] transition"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-sm text-[#7a7a7a]">{expanded ? "-" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.22 }}
            className="mt-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default function PrivacyArticleClient() {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    const initial: Record<string, boolean> = {};
    sections.forEach((s) => (initial[s.id] = isDesktop));
    setExpandedMap(initial);

    function onResize() {
      if (window.innerWidth >= 1024) {
        const allOpen: Record<string, boolean> = {};
        sections.forEach((s) => (allOpen[s.id] = true));
        setExpandedMap(allOpen);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function toggle(id: string) {
    setExpandedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const updated = new Date().toLocaleDateString();

  return (
    <>
      <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-1 text-xs text-[#7a7a7a]">Last updated: {updated}</p>
      </motion.header>

      <article className="col-span-1 lg:col-span-3 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] p-4 sm:p-8 shadow-lg">
        <p className="text-sm sm:text-base text-[#b8b8b8] mb-4">
          This Privacy Policy explains how Silentra ("we", "us", or "our") collects,
          and discloses information when you use our website and services.
        </p>

        {sections.map((s) => (
          <SectionPanel key={s.id} id={s.id} title={s.title} expanded={!!expandedMap[s.id]} onToggle={toggle}>
            {s.content}
          </SectionPanel>
        ))}
      </article>
    </>
  );
}
