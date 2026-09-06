import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silentra — Websites e software à medida",
  description:
    "A Silentra cria websites, landing pages, web apps e software à medida para negócios que querem vender mais, simplificar processos e crescer.",
  metadataBase: new URL("https://silentra.me"),
  keywords: [
    "Silentra",
    "websites",
    "landing pages",
    "web apps",
    "software à medida",
    "desenvolvimento web",
    "UX UI",
    "sites para empresas",
  ],
  authors: [{ name: "Silentra" }],
  openGraph: {
    title: "Silentra — Websites e software à medida",
    description:
      "Websites, landing pages e software feitos à medida para negócios reais.",
    url: "https://silentra.me",
    siteName: "Silentra",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Silentra — Websites e software à medida" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silentra — Websites e software à medida",
    description: "Websites, landing pages e software feitos à medida.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className="bg-[#050505]">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
