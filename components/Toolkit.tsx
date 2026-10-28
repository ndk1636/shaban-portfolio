const tools = [["G","Search Console","Indexing & performance",""],["◒","Google Analytics 4","Traffic & engagement","text-orange-300"],["S","Semrush","Research & tracking","text-orange-300"],["A","Ahrefs","Backlink analysis","text-sky-300"],["⌕","Screaming Frog","Technical audits","text-emerald-300"],["W","WordPress","Site implementation","text-violet-300"]];

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative overflow-hidden bg-ink py-24 text-white lg:py-28">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal-300">04 / Tools & reach</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">The right tools.<br /><span className="text-teal-300">A global mindset.</span></h2>
          <p className="mt-5 max-w-lg leading-8 text-slate-300">I’ve worked on SEO for websites targeting several markets, using research, auditing, and reporting tools to guide work and track progress.</p>
          <div className="mt-9"><p className="text-sm font-bold text-slate-200">Markets</p>
            <div className="mt-3 flex flex-wrap gap-2">{["United States","United Kingdom","UAE","Australia","Canada","Pakistan"].map(m => <span key={m} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">{m}</span>)}</div>
          </div>
          <div className="mt-8"><p className="text-sm font-bold text-slate-200">Focus areas</p><p className="mt-3 text-sm leading-7 text-slate-400">Technical audits · Content optimization · Link building · WordPress · Search performance reporting</p></div>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-300">SEO & analytics stack</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tools.map(([icon,name,desc,color]) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-white/[.06] p-5 transition hover:border-white/25 hover:bg-white/[.09]">
                <span className={`text-xl ${color}`}>{icon}</span>
                <p className="mt-3 font-display font-extrabold">{name}</p><p className="mt-1 text-xs text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-r from-brand/25 to-teal-400/10 p-6">
            <p className="font-display font-extrabold">Additional skills</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">Google Keyword Planner · Rank Math · Excel · PowerPoint · Meta Ads · Social Media Marketing · Content Writing · Basic Google Ads</p>
          </div>
        </div>
      </div>
    </section>
  );
}