const stats = [["4+", "Years of SEO experience"], ["200+", "Backlinks placed / month"], ["6", "Markets worked across"], ["360°", "Technical to off-page"]];
const checkpoints = [["Week 1", 54], ["Week 4", 31], ["Week 9", 12], ["Week 14", 3]];

export default function Hero() {
  return (
    <section id="home" className="pt-28">
      <div className="mx-auto grid max-w-6xl items-start gap-16 px-5 pb-16 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:pb-20">
        <div>
          <p className="font-mono text-sm text-signal">shaban.dev › seo-specialist › rawalpindi-pk</p>
          <h1 className="mt-5 max-w-2xl font-display text-[2.75rem] font-semibold leading-[1.08] sm:text-6xl">
            SEO work that makes a measurable difference.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-ink/65">
            I help websites become easier to find, understand, and trust through technical SEO, useful content, and relevant link building — then I track what actually moved.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#experience" className="btn-primary inline-flex items-center justify-center px-7 py-3.5 font-medium">View experience →</a>
            <a href="mailto:khanshaban7172@gmail.com" className="btn-ghost inline-flex items-center justify-center px-7 py-3.5 font-medium">Get in touch</a>
          </div>
          <p className="mt-10 text-sm text-ink/50">4+ years hands-on SEO, based in Rawalpindi, Pakistan</p>
        </div>

        <div className="border border-line bg-white">
          <div className="border-b border-line px-5 py-4">
            <p className="label">rank tracker — sample query</p>
            <p className="mt-1.5 font-display text-base font-semibold">&ldquo;best running shoes for flat feet&rdquo;</p>
          </div>
          <div>
            {checkpoints.map(([label, rank], i) => (
              <div key={label as string} className="row flex items-center justify-between px-5 py-3.5">
                <span className="font-mono text-xs text-ink/50">{label}</span>
                <span className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-semibold">#{rank}</span>
                  {i > 0 && <span className="font-mono text-xs text-signal">↓ {(checkpoints[i - 1][1] as number) - (rank as number)}</span>}
                </span>
              </div>
            ))}
          </div>
          <p className="border-t border-line px-5 py-3 text-xs leading-5 text-ink/40">Illustrative example of a ranking improvement, not live data.</p>
        </div>
      </div>

      <div className="rule border-b border-line bg-mist">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 lg:px-8">
          {stats.map(([n, d]) => (
            <div key={d}>
              <p className="font-display text-3xl font-semibold">{n}</p>
              <p className="mt-1 text-sm text-ink/55">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
