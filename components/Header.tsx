"use client";
import { useState } from "react";

const links = [["About","#about"],["Expertise","#expertise"],["Experience","#experience"],["Tools","#toolkit"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-slate-200/70">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Muhammad Shaban home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink font-display text-sm font-extrabold text-white shadow-lg">MS<span className="text-teal-300">.</span></span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-extrabold tracking-tight">Muhammad Shaban</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[.14em] text-slate-500">SEO Specialist</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-brand">{label}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 md:hidden">{open ? "Close" : "Menu"}</button>
          <a href="#contact" className="btn-primary hidden items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white sm:inline-flex">Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="grid gap-3 text-sm font-semibold text-slate-700">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a href="#contact" className="text-brand" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}