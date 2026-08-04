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
  title: "Silentra — You Think. We Do.",
  description:
    "Silentra builds premium digital products — Discord bots, modern websites, landing pages, full-stack apps, and custom software for businesses that care about quality.",
  metadataBase: new URL("https://silentra.vercel.app"),
  keywords: ["Silentra", "software", "digital products", "Discord bots", "websites", "full-stack", "SaaS"],
  authors: [{ name: "Silentra" }],
  openGraph: {
    title: "Silentra — You Think. We Do.",
    description:
      "Premium digital products built with engineering precision. Discord bots, websites, landing pages, and custom software.",
    url: "https://silentra.vercel.app",
    siteName: "Silentra",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Silentra — You Think. We Do.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silentra — You Think. We Do.",
    description:
      "Premium digital products built with engineering precision.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#050505]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
