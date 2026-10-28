import type { Metadata } from "next";
import { Source_Serif_4, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Muhammad Shaban | SEO Specialist",
  description: "Muhammad Shaban is an SEO professional in Rawalpindi, Pakistan, with 4+ years of experience in technical SEO, content optimization, link building, and WordPress.",
  openGraph: { type: "website", title: "Muhammad Shaban | SEO Specialist", description: "Technical SEO, content optimization, link building, WordPress, and AI search." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
