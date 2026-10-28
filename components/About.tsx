export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div><p className="kicker">01 / About me</p><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">SEO built around real people.</h2></div>
        <div>
          <p className="font-display text-xl leading-9 text-slate-700">I have more than four years of hands-on SEO experience, covering technical fixes, on-page work, link building, keyword research, and competitor analysis. I start by understanding what a page needs, then make changes that support both users and search visibility.</p>
          <p className="mt-5 leading-8 text-slate-600">Before content goes live, I check whether it answers the searcher’s question, reads clearly, and has a sensible structure. I use Google Search Console to monitor performance and keep link-building work aligned with Google’s guidelines. I’m also testing ways to make content easier for AI-powered search experiences to interpret.</p>
          <div className="mt-8 flex flex-wrap gap-2">{["People-first content","E-E-A-T principles","Search intent","Guideline-led SEO"].map(x => <span key={x} className="chip rounded-full px-4 py-2 text-sm font-semibold text-slate-700">{x}</span>)}</div>
        </div>
      </div>
    </section>
  );
}