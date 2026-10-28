const items: { path: string; title: string; desc: string; factors: string[] }[] = [
  { path: "/technical-seo", title: "Technical SEO", desc: "Help search engines discover, crawl, and index the right pages while strengthening technical foundations.", factors: ["Crawlability & indexation", "XML sitemaps & robots.txt", "Canonicals, redirects & broken links", "Schema markup & site structure"] },
  { path: "/on-page-content", title: "On-Page & Content SEO", desc: "Align pages with search intent and make content clearer, more useful, and easier to navigate.", factors: ["Keyword & SERP research", "Content-gap analysis", "Headings and internal linking", "Content quality review & briefs"] },
  { path: "/off-page-links", title: "Off-Page & Link Building", desc: "Build relevant authority through careful prospecting, outreach, and quality-led placement review.", factors: ["Guest posting & link insertions", "Outreach and prospecting", "Competitor backlink analysis", "Link quality & spam-risk checks"] },
  { path: "/aeo-geo-ai-search", title: "AEO, GEO & AI Search", desc: "Structure helpful information so search engines and answer experiences can understand it more easily.", factors: ["Answer-first content sections", "FAQ & entity-focused content", "Consistent brand information", "AI Overview visibility checks"] },
  { path: "/analytics-reporting", title: "Analytics & Reporting", desc: "Monitor organic performance and indexing, interpret changes, and keep campaigns accountable.", factors: ["Google Search Console & GA4", "Ranking and traffic monitoring", "Campaign tracking sheets", "Excel & PowerPoint reporting"] },
  { path: "/wordpress-site-health", title: "WordPress & Site Health", desc: "Put SEO recommendations into practice through hands-on website management and optimization.", factors: ["WordPress & Elementor", "HTML/CSS and plugin integration", "Speed & Core Web Vitals fixes", "Backups, migrations & hosting"] }
];

export default function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
      <div className="max-w-2xl">
        <p className="label">expertise</p>
        <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">What I can help with</h2>
        <p className="mt-5 leading-7 text-ink/60">From technical audits and content updates to backlink campaigns, reporting, and WordPress implementation.</p>
      </div>
      <div className="mt-12 border-t border-line">
        {items.map(item => (
          <article key={item.path} className="row grid gap-x-10 gap-y-3 px-1 py-7 lg:grid-cols-[14rem_1fr]">
            <div>
              <p className="font-mono text-xs text-signal">{item.path}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
            </div>
            <div>
              <p className="max-w-prose leading-7 text-ink/60">{item.desc}</p>
              <p className="mt-3 text-sm leading-7 text-ink/45">{item.factors.join(" · ")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
