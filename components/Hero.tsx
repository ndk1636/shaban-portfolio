const stats = [["4+","Years","SEO experience"],["200+","Backlinks / month","Relevant placements"],["6","Markets","International exposure"],["360°","SEO approach","Technical to off-page"]];

export default function Hero() {
  return (
    <section className="hero-bg relative isolate overflow-hidden pt-32">
      <div className="grid-lines absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.12em] text-slate-700 shadow-sm">
            <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" /><span className="relative h-2 w-2 rounded-full bg-teal-500" /></span>
            Technical SEO · Content · Link Building
          </div>
          <p className="mb-4 text-sm font-semibold text-slate-500">Hello, I’m Muhammad Shaban</p>
          <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-[4.5rem]">SEO work that <span className="gradient-text">makes a difference.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">I help websites become easier to find, understand, and trust through technical SEO, useful content, and relevant link building. I also implement improvements in WordPress and monitor their impact.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#experience" className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-bold text-white">View experience <span aria-hidden="true">↘</span></a>
            <a href="mailto:khanshaban7172@gmail.com" className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-bold text-slate-800">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-500">
            <span className="inline-flex items-center gap-2"><span className="text-teal-600">✦</span> 4+ years hands-on SEO</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
            <span className="inline-flex items-center gap-2"><span className="text-teal-600">✦</span> Rawalpindi, Pakistan</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-teal-200/50 blur-3xl" />
          <div className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-indigo-200/50 blur-3xl" />
          <div className="relative rounded-[1.75rem] border border-slate-200 bg-white/90 p-4 shadow-soft backdrop-blur sm:p-6">
            <div className="flex items-center justify-between border-b border-slate-100 px-1 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-lg text-brand">⌕</span>
                <div><p className="font-display text-sm font-extrabold">How I approach SEO</p><p className="text-xs text-slate-500">Research · Implementation · Review</p></div>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-600">Workflow</span>
            </div>
            <div className="relative mt-5 overflow-hidden rounded-2xl bg-ink p-6 text-white">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand/30 blur-3xl" />
              <div className="relative flex items-start justify-between">
                <div><p className="text-[11px] font-bold uppercase tracking-[.18em] text-slate-400">The strategy</p><h2 className="mt-2 font-display text-2xl font-extrabold">Start with the basics.</h2></div>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-teal-300">↗</span>
              </div>
              <div className="relative mt-6 grid grid-cols-3 gap-2">
                {[["01","Technical checks","text-teal-300"],["02","Content quality","text-indigo-300"],["03","Relevant links","text-amber-300"]].map(([n,t,c]) => (
                  <div key={n} className="rounded-xl border border-white/10 bg-white/[.06] p-3"><span className={`font-display text-xl font-extrabold ${c}`}>{n}</span><span className="mt-1 block text-xs text-slate-300">{t}</span></div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="card p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-500">Link building</span><span className="text-teal-600">↗</span></div><p className="mt-2 font-display text-3xl font-extrabold">200<span className="text-brand">+</span></p><p className="mt-1 text-xs leading-5 text-slate-500">Monthly relevant placements reported in my experience</p></div>
              <div className="card p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-500">Search evolution</span><span className="text-brand">✧</span></div><p className="mt-2 font-display text-2xl font-extrabold">SEO <span className="text-slate-300">+</span> AI</p><p className="mt-1 text-xs leading-5 text-slate-500">AEO, GEO & AI Overviews readiness</p><div className="mt-3 flex flex-wrap gap-1.5"><span className="rounded-md bg-indigo-50 px-2 py-1 text-[10px] font-extrabold text-indigo-700">AEO</span><span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-extrabold text-teal-700">GEO</span><span className="rounded-md bg-amber-50 px-2 py-1 text-[10px] font-extrabold text-amber-700">AIO</span></div></div>
            </div>
            <p className="mt-4 px-1 text-[11px] leading-5 text-slate-400">A visual summary of focus areas—not a live analytics dashboard or performance report.</p>
          </div>
        </div>
      </div>
      <div className="border-y border-slate-100 bg-white/75">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 sm:grid-cols-4 lg:px-8">
          {stats.map(([n,t,d]) => (
            <div key={t} className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 font-display font-extrabold text-brand">{n}</span><div><p className="font-display text-sm font-extrabold">{t}</p><p className="text-xs text-slate-500">{d}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  );
}