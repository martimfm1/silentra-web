"use client";

import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Empresa: [
    { label: "Home", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#work" },
    { label: "Contacto", href: "#contact" },
  ],
  Serviços: [
    { label: "Websites", href: "#services" },
    { label: "Landing pages", href: "#services" },
    { label: "Web apps", href: "#services" },
    { label: "Software à medida", href: "#services" },
  ],
  Projetos: [
    { label: "GB Barbershop", href: "#work" },
    { label: "Lab Customs", href: "#work" },
    { label: "Tattoo Studio", href: "#work" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const instagramUrl = "https://www.instagram.com/silentra.dev/";

function handleFooterNavClick(href: string) {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-white/[0.015]" aria-label="Site footer">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,minmax(0,1fr))] lg:gap-8">
          <div className="flex flex-col gap-5">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleFooterNavClick("#home"); }} className="inline-flex w-fit items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
              <div className="relative h-7 w-7 overflow-hidden rounded-md">
                <Image src="/silentra-logo.png" alt="Silentra" fill className="object-cover" sizes="28px" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white">Silentra</span>
            </a>
            <p className="max-w-sm text-sm leading-6 text-[#777]">Websites e software feitos à medida para negócios que querem vender, crescer e trabalhar melhor.</p>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="group inline-flex w-fit items-center gap-2 text-sm text-[#999] transition hover:text-white">
              <Instagram size={15} aria-hidden="true" />
              @silentra.dev
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#666]">{category}</h3>
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={link.href.startsWith("#") ? (e) => { e.preventDefault(); handleFooterNavClick(link.href); } : undefined} className="text-sm text-[#777] transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] text-[#555] sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Silentra. Todos os direitos reservados.</p>
          <p>you think. we do.</p>
        </div>
      </div>
    </footer>
  );
}
