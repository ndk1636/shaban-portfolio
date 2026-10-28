import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["400","500","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  title: "Muhammad Shaban | SEO Specialist",
  description: "Muhammad Shaban is an SEO professional in Rawalpindi, Pakistan, with 4+ years of experience in technical SEO, content optimization, link building, and WordPress.",
  openGraph: { type: "website", title: "Muhammad Shaban | SEO Specialist", description: "Technical SEO, content optimization, link building, WordPress, and AI search." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}