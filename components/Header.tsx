"use client";
import { useState } from "react";

const links = [["About", "#about"], ["Expertise", "#expertise"], ["Experience", "#experience"], ["Tools", "#toolkit"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-line">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-baseline gap-2.5" aria-label="Muhammad Shaban home">
          <span className="font-display text-lg font-semibold">Muhammad Shaban</span>
          <span className="hidden font-mono text-xs text-signal sm:inline">/seo-specialist</span>
        </a>
        <div className="hidden items-center gap-8 text-[15px] text-ink/70 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-ink">{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" className="inline-flex items-center border border-line px-3.5 py-2 text-sm text-ink md:hidden">{open ? "Close" : "Menu"}</button>
          <a href="#contact" className="btn-primary hidden items-center px-5 py-2.5 text-sm font-medium sm:inline-flex">Let's talk</a>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white px-5 py-4 md:hidden">
          <div className="grid gap-4 text-[15px] text-ink/80">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a href="#contact" className="text-signal" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
