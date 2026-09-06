"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSyncExternalStore, useState, type ReactNode } from "react";

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
        violated or to protect the platform&apos;s security.
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

type SectionPanelProps = {
  id: string;
  title: string;
  children: ReactNode;
  expanded: boolean;
  onToggle: (id: string) => void;
};

function SectionPanel({ id, title, children, expanded, onToggle }: SectionPanelProps) {
  return (
    <section className="mb-6" id={id}>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between gap-4 py-3 px-2 rounded-md hover:bg-[rgba(255,255,255,0.01)] transition"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-sm text-[#7a7a7a]" aria-hidden="true">{expanded ? "−" : "+"}</span>
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

export default function TermsArticleClient() {
  const isDesktop = useSyncExternalStore(subscribeToViewport, getDesktopSnapshot, getServerDesktopSnapshot);
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
          Terms of Service
        </h1>
        <p className="mt-1 text-xs text-[#7a7a7a]">Last updated: {updated}</p>
      </motion.header>

      <article className="col-span-1 lg:col-span-3 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] p-4 sm:p-8 shadow-lg">
        <p className="text-sm sm:text-base text-[#b8b8b8] mb-4">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of
          Silentra&apos;s website, applications, and services (collectively, the
          &quot;Services&quot;). By accessing or using our Services, you agree to be bound
          by these Terms.
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
