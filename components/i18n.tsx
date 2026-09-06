"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

type Locale = "pt" | "en";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const localeListeners = new Set<() => void>();

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "pt";

  const stored = window.localStorage.getItem("silentra-locale");
  if (stored === "pt" || stored === "en") return stored;

  return window.navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

let currentLocale: Locale = getInitialLocale();

function subscribeToLocale(callback: () => void) {
  localeListeners.add(callback);
  return () => localeListeners.delete(callback);
}

function getLocaleSnapshot() {
  return currentLocale;
}

function getServerLocaleSnapshot() {
  return "pt" as const;
}

function updateDocumentLanguage(locale: Locale) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale === "pt" ? "pt-PT" : "en";
  }
}

function setStoredLocale(next: Locale) {
  currentLocale = next;
  window.localStorage.setItem("silentra-locale", next);
  updateDocumentLanguage(next);
  localeListeners.forEach((listener) => listener());
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  useEffect(() => {
    updateDocumentLanguage(locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: setStoredLocale,
      toggleLocale: () => setStoredLocale(locale === "pt" ? "en" : "pt"),
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}

export const copy = {
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      work: "Projetos",
      about: "Sobre",
      contact: "Contacto",
      talk: "Falar connosco",
      instagram: "Instagram @silentra.dev",
    },
    hero: {
      badge: "Websites · Apps · Software",
      title: (
        <>
          Tens a ideia.
          <br />
          <span>O resto é connosco.</span>
        </>
      ),
      body: "Websites, lojas online e software à medida para negócios reais — rápidos, claros e feitos para gerar contactos ou vendas.",
      contact: "Falar connosco",
      instagram: "Instagram @silentra.dev",
      stats: [
        ["100%", "feito à medida"],
        ["Mobile", "desde o início"],
        ["Direct", "contacto simples"],
      ],
    },
    services: {
      eyebrow: "O que fazemos",
      title: "Construímos o que o teu negócio precisa.",
      body: "Sem complicar. Escolhemos a solução certa para o objetivo e fazemos tudo para ela ser fácil de usar.",
      note: "Não sabes exatamente do que precisas?",
      link: "Explica-nos a ideia.",
      cards: [
        [
          "Websites",
          "Sites rápidos e claros que mostram o teu negócio, explicam o que fazes e facilitam o contacto.",
        ],
        [
          "Landing pages",
          "Páginas feitas para uma ação: pedir contacto, marcar, comprar ou apresentar um serviço.",
        ],
        [
          "Web apps",
          "Ferramentas online para gerir clientes, reservas, dinheiro, equipas ou processos do dia a dia.",
        ],
        [
          "SaaS",
          "Produtos completos, desde a primeira ideia até à versão que os teus clientes podem usar.",
        ],
        [
          "Automação & bots",
          "Tarefas repetitivas passam a acontecer sozinhas, poupando tempo à tua equipa.",
        ],
        [
          "Software à medida",
          "Quando uma solução pronta não chega, construímos exatamente o que o teu negócio precisa.",
        ],
      ],
    },
    work: {
      eyebrow: "Projetos selecionados",
      title: (
        <>
          Sites que as pessoas <span>usam de verdade.</span>
        </>
      ),
      body: "Projetos reais feitos para ter bom aspeto, funcionar bem no telemóvel e tornar o próximo passo óbvio.",
      more: "Ver mais no GitHub",
      categories: [
        "Site para negócio",
        "Landing page",
        "Site para negócio",
        "Web app",
      ],
      descriptions: [
        "Plataforma SaaS completa para gestão de barbearias, desenvolvida para centralizar marcações, clientes, equipa e operação num único sistema. Inclui reservas online, agenda e disponibilidade, gestão de clientes, fidelização, automações, analytics e ferramentas de crescimento, com uma experiência simples para o cliente e controlo total para a barbearia.",
        "Website focado num negócio real, pensado para explicar rapidamente o serviço e transformar visitas em contactos.",
        "Site visual para um estúdio de tattoo, feito para mostrar os trabalhos, transmitir o estilo do estúdio e facilitar o contacto.",
        "Produto completo de gestão financeira pessoal, com dashboard, despesas recorrentes, objetivos e organização do dinheiro do dia a dia.",
      ],
      tags: [
        ["Next.js", "UX/UI", "Conversão", "SEO"],
        ["Next.js", "Motion", "SEO", "UX/UI", "Landing Page"],
        ["Next.js", "UX/UI", "Mobile", "Discord Bot", "Ticket System"],
        ["Next.js", "TypeScript", "Supabase", "Web App", "Gestão Financeira"],
      ],
    },
    why: {
      eyebrow: "Porque a Silentra",
      title: (
        <>
          Um site bonito <span>não chega.</span>
        </>
      ),
      body: "Tem de ser fácil de usar, rápido e levar as pessoas a fazer aquilo que procuras.",
      cards: [
        [
          "Feito à medida",
          "Nada de modelos iguais para toda a gente. Construímos a solução de acordo com o teu negócio.",
        ],
        [
          "Pensado para vender",
          "Cada página tem um objetivo claro: explicar, gerar confiança e levar a pessoa ao próximo passo.",
        ],
        [
          "Rápido",
          "Sites leves e rápidos, pensados para funcionar bem tanto no computador como no telemóvel.",
        ],
        [
          "Boa experiência",
          "Informação fácil de encontrar, botões claros e menos passos desnecessários para o utilizador.",
        ],
        [
          "Acompanhamento",
          "Depois de publicar, continuamos disponíveis para corrigir, melhorar e acrescentar o que for preciso.",
        ],
      ],
    },
    process: {
      eyebrow: "Como trabalhamos",
      title: (
        <>
          Simples de perceber. <span>Simples de começar.</span>
        </>
      ),
      steps: [
        [
          "01",
          "Falamos",
          "Percebemos o teu negócio, o que precisas e o que queres conseguir.",
        ],
        [
          "02",
          "Planeamos",
          "Definimos o que vai ser feito e qual é a forma mais simples de chegar ao resultado.",
        ],
        [
          "03",
          "Construímos",
          "Tratamos do design e do desenvolvimento, com foco no que realmente vai ser usado.",
        ],
        [
          "04",
          "Publicamos",
          "Colocamos tudo online e confirmamos que funciona como deve em computador e telemóvel.",
        ],
        [
          "05",
          "Continuamos",
          "Depois do lançamento, continuamos disponíveis para melhorias, alterações e suporte.",
        ],
      ],
    },
    tech: {
      eyebrow: "Tecnologia",
      title: "Ferramentas certas para cada projeto.",
    },
    cta: {
      eyebrow: "Vamos falar",
      title: (
        <>
          Tens uma ideia?
          <br />
          <span>Vamos fazê-la.</span>
        </>
      ),
      body: "Diz-nos o que precisas, mesmo que ainda não tenhas tudo definido. Respondemos, percebemos o problema e vemos contigo o melhor caminho.",
      email: "Enviar email",
      instagram: "@silentra.dev",
      note: "Sem formulários longos. Sem complicar.",
    },
    footer: {
      description:
        "Websites e software feitos à medida para negócios que querem vender, crescer e trabalhar melhor.",
      company: "Empresa",
      services: "Serviços",
      projects: "Projetos",
      legal: "Legal",
      contact: "Contacto",
      privacy: "Política de privacidade",
      terms: "Termos de serviço",
      rights: "Todos os direitos reservados.",
    },
    language: "Idioma",
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      work: "Work",
      about: "About",
      contact: "Contact",
      talk: "Let's talk",
      instagram: "Instagram @silentra.dev",
    },
    hero: {
      badge: "Websites · Apps · Software",
      title: (
        <>
          You have the idea.
          <br />
          <span>We build the rest.</span>
        </>
      ),
      body: "Websites, online stores and custom software for real businesses — fast, clear and built to generate enquiries or sales.",
      contact: "Let's talk",
      instagram: "Instagram @silentra.dev",
      stats: [
        ["100%", "made to fit"],
        ["Mobile", "from day one"],
        ["Direct", "simple contact"],
      ],
    },
    services: {
      eyebrow: "What we do",
      title: "We build what your business needs.",
      body: "No unnecessary complexity. We choose the right solution for the goal and make it easy to use.",
      note: "Not sure exactly what you need?",
      link: "Tell us the idea.",
      cards: [
        [
          "Websites",
          "Fast, clear sites that show your business, explain what you do and make contact easy.",
        ],
        [
          "Landing pages",
          "Pages built for one action: get a lead, book, buy or present a service.",
        ],
        [
          "Web apps",
          "Online tools for managing customers, bookings, money, teams or day-to-day processes.",
        ],
        [
          "SaaS",
          "Complete products, from the first idea to a version your customers can actually use.",
        ],
        [
          "Automation & bots",
          "Repetitive tasks happen automatically, saving time for your team.",
        ],
        [
          "Custom software",
          "When off-the-shelf is not enough, we build exactly what your business needs.",
        ],
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: (
        <>
          Sites people <span>actually use.</span>
        </>
      ),
      body: "Real projects built to look right, work well on mobile and make the next step obvious.",
      more: "See more on GitHub",
      categories: [
        "Business website",
        "Landing page",
        "Business website",
        "Web app",
      ],
      descriptions: [
        "A comprehensive SaaS platform for barbershop management, designed to centralize appointments, clients, staff, and operations into a single system. It includes online booking, scheduling and availability management, client management, loyalty programs, automation, analytics, and growth tools—offering a seamless experience for clients and total control for the barbershop.",
        "A focused website for a real business, designed to explain the service quickly and turn visits into enquiries.",
        "A visual-first tattoo studio site built to showcase the work, communicate the studio's style and make contact simple.",
        "A complete personal finance product with dashboards, recurring expenses, goals and a cleaner way to manage everyday money.",
      ],
      tags: [
        ["Next.js", "UX/UI", "Conversion", "SEO"],
        ["Next.js", "Motion", "SEO", "UX/UI", "Landing Page"],
        ["Next.js", "UX/UI", "Mobile", "Discord Bot", "Ticket System"],
        ["Next.js", "TypeScript", "Supabase", "Web App", "Personal Finance"],
      ],
    },
    why: {
      eyebrow: "Why Silentra",
      title: (
        <>
          A good-looking site <span>isn&apos;t enough.</span>
        </>
      ),
      body: "It needs to be easy to use, fast and guide people to the action you actually want.",
      cards: [
        [
          "Made to fit",
          "No one-size-fits-all templates. We build around your business and its needs.",
        ],
        [
          "Built to sell",
          "Every page has a clear job: explain, build trust and move people to the next step.",
        ],
        [
          "Fast",
          "Lightweight, fast sites designed to work well on both desktop and mobile.",
        ],
        [
          "Good experience",
          "Information is easy to find, buttons are clear and there are fewer unnecessary steps.",
        ],
        [
          "Ongoing support",
          "After launch, we stay available to fix, improve and add what you need.",
        ],
      ],
    },
    process: {
      eyebrow: "How we work",
      title: (
        <>
          Simple to understand. <span>Simple to start.</span>
        </>
      ),
      steps: [
        [
          "01",
          "Talk",
          "We understand your business, what you need and what you want to achieve.",
        ],
        [
          "02",
          "Plan",
          "We define what needs to be built and the simplest way to reach the result.",
        ],
        [
          "03",
          "Build",
          "We handle design and development with focus on what people will actually use.",
        ],
        [
          "04",
          "Launch",
          "We put everything online and make sure it works properly on desktop and mobile.",
        ],
        [
          "05",
          "Stay close",
          "After launch, we remain available for improvements, changes and support.",
        ],
      ],
    },
    tech: { eyebrow: "Technology", title: "The right tools for each project." },
    cta: {
      eyebrow: "Let's talk",
      title: (
        <>
          Have an idea?
          <br />
          <span>Let&apos;s build it.</span>
        </>
      ),
      body: "Tell us what you need, even if you have not figured everything out yet. We listen, understand the problem and help find the best path.",
      email: "Send email",
      instagram: "@silentra.dev",
      note: "No long forms. No unnecessary steps.",
    },
    footer: {
      description:
        "Websites and custom software for businesses that want to sell, grow and work better.",
      company: "Company",
      services: "Services",
      projects: "Projects",
      legal: "Legal",
      contact: "Contact",
      privacy: "Privacy policy",
      terms: "Terms of service",
      rights: "All rights reserved.",
    },
    language: "Language",
  },
} as const;
