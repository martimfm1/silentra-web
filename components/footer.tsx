"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { copy, useI18n } from "@/components/i18n";

const instagramUrl = "https://www.instagram.com/silentra.dev/";
function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const { locale } = useI18n();
  const t = copy[locale].footer;
  const links = [
    {
      category: t.company,
      items: [
        [locale === "pt" ? "Início" : "Home", "#home"],
        [locale === "pt" ? "Serviços" : "Services", "#services"],
        [locale === "pt" ? "Projetos" : "Work", "#work"],
        [t.contact, "#contact"],
      ],
    },
    {
      category: t.services,
      items: [
        ["Websites", "#services"],
        [locale === "pt" ? "Landing pages" : "Landing pages", "#services"],
        ["Web apps", "#services"],
        [
          locale === "pt" ? "Software à medida" : "Custom software",
          "#services",
        ],
      ],
    },
    {
      category: t.projects,
      items: [
        ["Silentra for Barbers", "#work"],
        ["Lab Customs", "#work"],
        [locale === "pt" ? "Tattoo Studio" : "Tattoo Studio", "#work"],
      ],
    },
    {
      category: t.legal,
      items: [
        [t.privacy, "/privacy-policy"],
        [t.terms, "/terms-of-service"],
      ],
    },
  ];
  const handleNav = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <footer
      className="relative border-t border-white/[0.06] bg-white/[0.015]"
      aria-label={locale === "pt" ? "Rodapé" : "Site footer"}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,minmax(0,1fr))] lg:gap-8">
          <div className="flex flex-col gap-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#home");
              }}
              className="inline-flex w-fit items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <div className="relative h-7 w-7 overflow-hidden rounded-md">
                <Image
                  src="/silentra-logo.png"
                  alt="Silentra"
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white">
                Silentra
              </span>
            </a>
            <p className="max-w-sm text-sm leading-6 text-[#777]">
              {t.description}
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-2 text-sm text-[#999] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <InstagramIcon />
              @silentra.dev
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
          {links.map(({ category, items }) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#666]">
                {category}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {items.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={
                        href.startsWith("#")
                          ? (e) => {
                              e.preventDefault();
                              handleNav(href);
                            }
                          : undefined
                      }
                      className="text-sm text-[#777] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] text-[#555] sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Silentra. {t.rights}
          </p>
          <p>you think. we do.</p>
        </div>
      </div>
    </footer>
  );
}
