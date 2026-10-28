const jobs = [
  { current:true, role:"Sr. SEO Expert", company:"IZOC Solutions Pvt. Ltd.", place:"Rawalpindi / Islamabad", period:"Jun 2026 – Present", points:["Plan SEO across keyword/SERP research, technical, on-page, off-page, and competitor analysis.","Review content for intent, accuracy, user value, natural keyword use, headings, and internal links.","Build 200+ relevant backlinks per month through prospecting, guest posts, and link insertions.","Optimize for AEO, GEO, and AI Overviews with answer-first sections, FAQs, and schema.","Monitor Google updates and Search Console trends to guide compliant strategy changes.","Audit crawlability, indexation, sitemaps, robots.txt, canonicals, redirects, and broken links."] },
  { role:"SEO Specialist / WordPress Developer", company:"NexaSix", place:"Islamabad", period:"Nov 2024 – May 2026", points:["Executed on-page, off-page, and technical SEO strategies, keyword research, and audits.","Managed WordPress websites, customizations, plugins, site structure, backups, and migrations.","Improved site speed and addressed Core Web Vitals issues.","Tracked SEO and advertising KPIs with Semrush and Google Search Console; supported content, social, and basic Google Ads campaigns."] },
  { role:"SEO Expert", company:"Weboryx", place:"Islamabad", period:"Mar 2024 – Nov 2024", points:["Led and managed the off-page SEO team, task assignments, report reviews, and deliverables.","Ran link-building, guest-posting, and directory campaigns, building 200+ backlinks per month.","Conducted technical audits, keyword research, on-page optimization, and competitor analysis.","Supported social media marketing and Google Ads campaigns."] },
  { role:"SEO Executive", company:"All Star Technologies", place:"Rawalpindi", period:"Feb 2023 – Mar 2024", points:["Executed keyword research, on-page and off-page optimization, and technical SEO audits.","Analyzed competitors and backlinks to identify opportunities for organic visibility and authority.","Supported link building, business listings, backlink monitoring, and website/content improvements."] },
  { role:"SEO Executive", company:"Codiea.io", place:"Bahawalpur", period:"Mar 2022 – Feb 2023", points:["Executed off-page SEO including link building, guest posting, and directory submissions.","Built 200+ backlinks per month and analyzed competitor backlink profiles.","Supported outreach, backlink research, and ongoing campaign performance monitoring."] }
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="kicker">03 / Career journey</p><h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Where I’ve worked.</h2></div>
        <p className="max-w-md leading-7 text-slate-600">Across these roles, I’ve handled SEO campaigns, backlink work, content reviews, reporting, and WordPress updates.</p>
      </div>
      <div className="timeline relative mt-12 space-y-6 pl-9">
        {jobs.map(job => (
          <article key={job.company + job.period} className={`relative rounded-2xl border bg-white p-7 shadow-card sm:p-8 ${job.current ? "border-indigo-100" : "border-slate-200"}`}>
            <span className={`dot absolute -left-[34px] top-9 rounded-full border-4 border-white ${job.current ? "h-6 w-6 bg-brand" : "-left-[32px] h-5 w-5 bg-teal-500"}`} />
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                {job.current && <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand">Current role</span>}
                <h3 className={`font-display font-extrabold ${job.current ? "mt-3 text-2xl" : "text-xl"}`}>{job.role}</h3>
                <p className={`mt-1 font-bold ${job.current ? "text-brand" : "text-slate-700"}`}>{job.company}</p>
                <p className="mt-1 text-sm text-slate-500">{job.place}</p>
              </div>
              <span className="whitespace-nowrap rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">{job.period}</span>
            </div>
            <ul className={`grid gap-x-8 text-sm leading-6 text-slate-600 md:grid-cols-2 ${job.current ? "mt-6 gap-y-3" : "mt-5 gap-y-2"}`}>
              {job.points.map(p => <li key={p}>• {p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}