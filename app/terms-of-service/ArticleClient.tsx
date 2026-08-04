"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "eligibility",
    title: "1. Eligibility",
    content: (
      <p className="text-base text-[#b8b8b8]">
        You must be legally capable of entering into a binding agreement in your
        jurisdiction to use our Services.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "2. Accounts",
    content: (
      <p className="text-base text-[#b8b8b8]">
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "3. Acceptable Use",
    content: (
      <>
        <p className="text-base text-[#b8b8b8]">
          You agree not to misuse the Services or attempt to interfere with
          their normal operation.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#b8b8b8]">
          <li>Using the Services for unlawful purposes.</li>
          <li>Attempting unauthorized access to systems or accounts.</li>
          <li>Distributing malware or malicious code.</li>
        </ul>
      </>
    ),
  },
  {
    id: "payments",
    title: "4. Subscription & Payments",
    content: (
      <p className="text-base text-[#b8b8b8]">
        Certain features may require a paid subscription. Fees are billed in
        advance and are non-refundable unless otherwise required by law.
      </p>
    ),
  },
  {
    id: "ip",
    title: "5. Intellectual Property",
    content: (
      <p className="text-base text-[#b8b8b8]">
        All intellectual property rights related to the Services remain the
        exclusive property of Silentra or its licensors.
      </p>
    ),
  },
  {
    id: "availability",
    title: "6. Availability",
    content: (
      <p className="text-base text-[#b8b8b8]">
        We strive to maintain reliable availability but do not guarantee
        uninterrupted service.
      </p>
    ),
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: (
      <p className="text-base text-[#b8b8b8]">
        To the maximum extent permitted by law, Silentra shall not be liable for
        indirect, incidental, consequential, or punitive damages.
      </p>
    ),
  },
  {
    id: "termination",
    title: "8. Termination",
    content: (
      <p className="text-base text-[#b8b8b8]">
        We reserve the right to suspend or terminate access if these Terms are
        violated or to protect the platform's security.
      </p>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to these Terms",
    content: (
      <p className="text-base text-[#b8b8b8]">
        We may update these Terms from time to time. Continued use after changes
        constitutes acceptance of the revised Terms.
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

export default function TermsArticleClient() {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const isDesktop =
      typeof window !== "undefined" && window.innerWidth >= 1024;
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
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-6"
      >
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          Terms of Service
        </h1>
        <p className="mt-1 text-xs text-[#7a7a7a]">Last updated: {updated}</p>
      </motion.header>

      <article className="col-span-1 lg:col-span-3 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] p-4 sm:p-8 shadow-lg">
        <p className="text-sm sm:text-base text-[#b8b8b8] mb-4">
          These Terms of Service ("Terms") govern your access to and use of
          Silentra's website, applications, and services (collectively, the
          "Services"). By accessing or using our Services, you agree to be bound
          by these Terms.
        </p>

        {sections.map((s) => (
          <SectionPanel
            key={s.id}
            id={s.id}
            title={s.title}
            expanded={!!expandedMap[s.id]}
            onToggle={toggle}
          >
            {s.content}
          </SectionPanel>
        ))}

        <section>
          <h2 className="mb-3 text-xl font-semibold text-white">Contact</h2>
          <p className="text-base text-[#b8b8b8]">
            If you have questions, contact{" "}
            <a href="mailto:hello@silentra.me" className="text-[#b8b8b8] hover:underline">hello@silentra.me</a>
            .
          </p>
        </section>
      </article>
    </>
  );
}
