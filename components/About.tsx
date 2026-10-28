export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="label">about</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">SEO built around real people.</h2>
        </div>
        <div>
          <p className="font-display text-xl leading-9 text-ink/80">
            I have more than four years of hands-on SEO experience, covering technical fixes, on-page work, link building, keyword research, and competitor analysis. I start by understanding what a page needs, then make changes that support both users and search visibility.
          </p>
          <p className="mt-5 max-w-prose leading-8 text-ink/60">
            Before content goes live, I check whether it answers the searcher's question, reads clearly, and has a sensible structure. I use Google Search Console to monitor performance and keep link-building work aligned with Google's guidelines. I'm also testing ways to make content easier for AI-powered search experiences to interpret.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/50">
            {["People-first content", "E-E-A-T principles", "Search intent", "Guideline-led SEO"].map(x => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
