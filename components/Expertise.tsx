const items: [string, string, string, string, string[]][] = [
  ["⌘","Technical SEO","bg-indigo-50 text-brand","Help search engines discover, crawl, and index the right pages while strengthening technical foundations.",["Crawlability & indexation","XML sitemaps & robots.txt","Canonicals, redirects & broken links","Schema markup & site structure"]],
  ["✎","On-Page & Content SEO","bg-teal-50 text-teal-700","Align pages with search intent and make content clearer, more useful, and easier to navigate.",["Keyword & SERP research","Content-gap analysis","Headings and internal linking","Content quality review & briefs"]],
  ["↗","Off-Page & Link Building","bg-amber-50 text-amber-700","Build relevant authority through careful prospecting, outreach, and quality-led placement review.",["Guest posting & link insertions","Outreach and prospecting","Competitor backlink analysis","Link quality & spam-risk checks"]],
  ["✧","AEO, GEO & AI Search","bg-violet-50 text-violet-700","Structure helpful information so search engines and answer experiences can understand it more easily.",["Answer-first content sections","FAQ & entity-focused content","Consistent brand information","AI Overview visibility checks"]],
  ["⌁","Analytics & Reporting","bg-rose-50 text-rose-700","Monitor organic performance and indexing, interpret changes, and keep campaigns accountable.",["Google Search Console & GA4","Ranking and traffic monitoring","Campaign tracking sheets","Excel & PowerPoint reporting"]],
  ["▦","WordPress & Site Health","bg-sky-50 text-sky-700","Put SEO recommendations into practice through hands-on website management and optimization.",["WordPress & Elementor","HTML/CSS and plugin integration","Speed & Core Web Vitals fixes","Backups, migrations & hosting"]]
];

export default function Expertise() {
  return (
    <section id="expertise" className="border-y border-slate-200/70 bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl"><p className="kicker">02 / What I do</p><h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">What I can help with</h2><p className="mt-5 leading-7 text-slate-600">From technical audits and content updates to backlink campaigns, reporting, and WordPress implementation.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map(([icon,title,color,desc,points]) => (
            <article key={title} className="card p-7">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${color}`}>{icon}</div>
              <h3 className="mt-6 font-display text-xl font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-700">{points.map(p => <li key={p}>✓ {p}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}