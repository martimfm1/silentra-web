import BackButton from "../../components/BackButton";

export const metadata = {
  title: "Terms of Service",
};

const sections = [
  { id: "eligibility", title: "1. Eligibility" },
  { id: "accounts", title: "2. Accounts" },
  { id: "acceptable-use", title: "3. Acceptable Use" },
  { id: "payments", title: "4. Subscription & Payments" },
  { id: "ip", title: "5. Intellectual Property" },
  { id: "availability", title: "6. Availability" },
  { id: "liability", title: "7. Limitation of Liability" },
  { id: "termination", title: "8. Termination" },
  { id: "changes", title: "9. Changes to these Terms" },
];

export default function TermsOfService() {
  const updated = new Date().toLocaleDateString();

  return (
    <main className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:pl-52">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 bg-[#0b1220] px-3 py-2 rounded-md text-sm text-[#b8b8b8]">Pular para o conteúdo</a>
      <div className="mb-6 flex justify-end">
        <BackButton />
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-white">Terms of Service</h1>
        <p className="mt-2 text-sm text-[#7a7a7a]">Last updated: {updated}</p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        <aside className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 w-44">
          <nav role="navigation" aria-label="Seções da página" className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-[#7a7a7a] mb-3">Sections</p>
            <ul className="flex flex-col gap-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm text-[#b8b8b8] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#9ca3af] rounded-sm px-1">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:hidden">
          <nav className="rounded-md bg-[rgba(255,255,255,0.02)] p-3 mb-4" aria-label="Seções da página">
            <label className="sr-only">Sections</label>
            <div className="flex gap-2 overflow-x-auto">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-sm whitespace-nowrap text-[#b8b8b8] px-3 py-2 rounded-md bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(255,255,255,0.03)] focus:outline-none focus:ring-2 focus:ring-[#9ca3af]">
                  {s.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
        </div>

        <div id="main-content">
          <article className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] p-8 shadow-lg">
          <p className="text-base text-[#b8b8b8] mb-6">
            These Terms of Service ("Terms") govern your access to and use of Silentra's website, applications,
            and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound
            by these Terms.
          </p>

          <section id="eligibility" className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">1. Eligibility</h2>
            <p className="text-base text-[#b8b8b8]">You must be legally capable of entering into a binding agreement in your jurisdiction to use our Services.</p>
          </section>

          <section id="accounts" className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">2. Accounts</h2>
            <p className="text-base text-[#b8b8b8]">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          </section>

          <section id="acceptable-use" className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">3. Acceptable Use</h2>
            <p className="text-base text-[#b8b8b8]">You agree not to misuse the Services or attempt to interfere with their normal operation. This includes:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#b8b8b8]">
              <li>Using the Services for unlawful purposes.</li>
              <li>Attempting unauthorized access to systems or accounts.</li>
              <li>Distributing malware or malicious code.</li>
            </ul>
          </section>

          <section id="payments" className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">4. Subscription & Payments</h2>
            <p className="text-base text-[#b8b8b8]">Certain features may require a paid subscription. Fees are billed in advance and are non-refundable unless otherwise required by law.</p>
          </section>

          <section id="ip" className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p className="text-base text-[#b8b8b8]">All intellectual property rights related to the Services remain the exclusive property of Silentra or its licensors.</p>
          </section>

          <section id="availability" className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">6. Availability</h2>
            <p className="text-base text-[#b8b8b8]">We strive to maintain reliable availability but do not guarantee uninterrupted service.</p>
          </section>

          <section id="liability" className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p className="text-base text-[#b8b8b8]">To the maximum extent permitted by law, Silentra shall not be liable for indirect, incidental, consequential, or punitive damages.</p>
          </section>

          <section id="termination" className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
            <p className="text-base text-[#b8b8b8]">We reserve the right to suspend or terminate access if these Terms are violated or to protect the platform's security.</p>
          </section>

          <section id="changes" className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to these Terms</h2>
            <p className="text-base text-[#b8b8b8]">We may update these Terms from time to time. Continued use after changes constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">Contact</h2>
            <p className="text-base text-[#b8b8b8]">If you have questions, contact <a href="mailto:silentra.contact@gmail.com" className="text-white hover:underline">silentra.contact@gmail.com</a>.</p>
          </section>
        </article>
      </div>
    </main>
  );
}