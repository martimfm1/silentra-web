import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silentra — Coming Soon",
  description: "You Think, We Do.",
  metadataBase: new URL("https://silentra.vercel.app"),
  openGraph: {
    title: "Silentra — Coming Soon",
    description: "You Think, We Do.",
    url: "https://silentra.vercel.app",
    siteName: "Silentra",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Silentra — Coming Soon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silentra — Coming Soon",
    description: "You Think, We Do.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
