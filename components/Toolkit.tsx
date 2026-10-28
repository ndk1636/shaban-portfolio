const tools = [["Search Console", "Indexing & performance"], ["Google Analytics 4", "Traffic & engagement"], ["Semrush", "Research & tracking"], ["Ahrefs", "Backlink analysis"], ["Screaming Frog", "Technical audits"], ["WordPress", "Site implementation"]];

export default function Toolkit() {
  return (
    <section id="toolkit" className="bg-ink py-24 text-white lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="font-mono text-sm text-signal">tools-&-reach</p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">The right tools.<br />A global mindset.</h2>
          <p className="mt-5 max-w-lg leading-8 text-white/60">I've worked on SEO for websites targeting several markets, using research, auditing, and reporting tools to guide work and track progress.</p>
          <div className="mt-9">
            <p className="text-sm font-medium text-white/80">Markets</p>
            <p className="mt-2.5 text-[15px] leading-7 text-white/55">United States · United Kingdom · UAE · Australia · Canada · Pakistan</p>
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium text-white/80">Focus areas</p>
            <p className="mt-2.5 text-[15px] leading-7 text-white/55">Technical audits · Content optimization · Link building · WordPress · Search performance reporting</p>
          </div>
        </div>
        <div>
          <p className="font-mono text-xs text-white/40">seo-&-analytics-stack</p>
          <div className="mt-3 border-t border-white/15">
            {tools.map(([name, desc]) => (
              <div key={name} className="flex items-baseline justify-between border-b border-white/15 py-3.5">
                <p className="font-display font-semibold">{name}</p>
                <p className="text-xs text-white/40">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-white/15 p-6">
            <p className="font-display font-semibold">Additional skills</p>
            <p className="mt-2 text-sm leading-7 text-white/55">Google Keyword Planner, Rank Math, Excel, PowerPoint, Meta Ads, social media marketing, content writing, and basic Google Ads.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
