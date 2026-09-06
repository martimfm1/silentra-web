"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSyncExternalStore, useState, type ReactNode } from "react";

const sections = [
  {
    id: "information",
    title: "Information We Collect",
    content: (
      <p className="text-base text-[#b8b8b8]">
        We may collect personal information you provide (name, email), usage
        data, and technical data (IP address, browser, device). We also use
        cookies and similar technologies to enhance your experience.
      </p>
    ),
  },
  {
    id: "use",
    title: "How We Use Information",
    content: (
      <p className="text-base text-[#b8b8b8]">
        We use information to provide and improve services, analyze usage,
        communicate with you, and comply with legal obligations. We minimize
        data collection and retain only what is necessary for the purpose it was
        collected.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: (
      <p className="text-base text-[#b8b8b8]">
        We may share data with third-party service providers for analytics,
        hosting, and other operations. We review providers for security and only
        share the minimal data required for them to perform their services.
      </p>
    ),
  },
  {
    id: "choices",
    title: "Your Choices",
    content: (
      <p className="text-base text-[#b8b8b8]">
        You can opt out of marketing communications and control cookies via
        browser settings. Contact us for data access, correction, or deletion
        requests.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p className="text-base text-[#b8b8b8]">
        For questions about this policy, email{" "}
        <a
          href="mailto:silentra.contact@gmail.com"
          className="text-white hover:underline"
        >
          silentra.contact@gmail.com
        </a>
        .
      </p>
    ),
  },
];

type SectionPanelProps = {
  id: string;
  title: string;
  children: ReactNode;
  expanded: boolean;
  onToggle: (id: string) => void;
};

function SectionPanel({
  id,
  title,
  children,
  expanded,
  onToggle,
}: SectionPanelProps) {
  return (
    <section className="mb-6" id={id}>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between gap-4 py-3 px-2 rounded-md hover:bg-[rgba(255,255,255,0.01)] transition"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-sm text-[#7a7a7a]" aria-hidden="true">
          {expanded ? "−" : "+"}
        </span>
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

function subscribeToViewport(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getDesktopSnapshot() {
  return window.innerWidth >= 1024;
}

function getServerDesktopSnapshot() {
  return false;
}

export default function PrivacyArticleClient() {
  const isDesktop = useSyncExternalStore(
    subscribeToViewport,
    getDesktopSnapshot,
    getServerDesktopSnapshot,
  );
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

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
          Privacy Policy
        </h1>
        <p className="mt-1 text-xs text-[#7a7a7a]">Last updated: {updated}</p>
      </motion.header>

      <article className="col-span-1 lg:col-span-3 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] p-4 sm:p-8 shadow-lg">
        <p className="text-sm sm:text-base text-[#b8b8b8] mb-4">
          This Privacy Policy explains how Silentra (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, and discloses
          information when you use our website and services.
        </p>

        {sections.map((s) => (
          <SectionPanel
            key={s.id}
            id={s.id}
            title={s.title}
            expanded={isDesktop || !!expandedMap[s.id]}
            onToggle={toggle}
          >
            {s.content}
          </SectionPanel>
        ))}
      </article>
    </>
  );
}
