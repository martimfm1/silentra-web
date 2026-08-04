import PrivacyArticleClient from "./ArticleClient";
import BackButton from "../../components/BackButton";

export const metadata = {
  title: "Privacy Policy",
};

const toc = [
  { id: "overview", label: "Overview" },
  { id: "information", label: "Information We Collect" },
  { id: "use", label: "How We Use Information" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "choices", label: "Your Choices" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:pl-52">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 bg-[#0b1220] px-3 py-2 rounded-md text-sm text-[#b8b8b8]">Pular para o conteúdo</a>

      <div className="mb-6 flex justify-end">
        <BackButton />
      </div>

      <aside className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 w-44">
        <nav role="navigation" aria-label="Navegação da página" className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-[#7a7a7a] mb-3">On this page</p>
          <ul className="flex flex-col gap-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-[#b8b8b8] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#9ca3af] rounded-sm px-1">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="grid grid-cols-1 gap-8">
        <div id="main-content" className="col-span-1">
          <div className="lg:hidden col-span-1">
            <nav className="rounded-md bg-[rgba(255,255,255,0.02)] p-3 mb-4" aria-label="Navegação da página">
              <label className="sr-only">On this page</label>
              <div className="flex gap-2 overflow-x-auto">
                {toc.map((t) => (
                  <a key={t.id} href={`#${t.id}`} className="text-sm whitespace-nowrap text-[#b8b8b8] px-3 py-2 rounded-md bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(255,255,255,0.03)] focus:outline-none focus:ring-2 focus:ring-[#9ca3af]">
                    {t.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <PrivacyArticleClient />
        </div>
      </div>
    </main>
  );
}