const jobs = [
  { current: true, role: "Sr. SEO Expert", company: "IZOC Solutions Pvt. Ltd.", place: "Rawalpindi / Islamabad", period: "Jun 2026 – Present", points: ["Plan SEO across keyword/SERP research, technical, on-page, off-page, and competitor analysis.", "Review content for intent, accuracy, user value, natural keyword use, headings, and internal links.", "Build 200+ relevant backlinks per month through prospecting, guest posts, and link insertions.", "Optimize for AEO, GEO, and AI Overviews with answer-first sections, FAQs, and schema.", "Monitor Google updates and Search Console trends to guide compliant strategy changes.", "Audit crawlability, indexation, sitemaps, robots.txt, canonicals, redirects, and broken links."] },
  { role: "SEO Specialist / WordPress Developer", company: "NexaSix", place: "Islamabad", period: "Nov 2024 – May 2026", points: ["Executed on-page, off-page, and technical SEO strategies, keyword research, and audits.", "Managed WordPress websites, customizations, plugins, site structure, backups, and migrations.", "Improved site speed and addressed Core Web Vitals issues.", "Tracked SEO and advertising KPIs with Semrush and Google Search Console; supported content, social, and basic Google Ads campaigns."] },
  { role: "SEO Expert", company: "Weboryx", place: "Islamabad", period: "Mar 2024 – Nov 2024", points: ["Led and managed the off-page SEO team, task assignments, report reviews, and deliverables.", "Ran link-building, guest-posting, and directory campaigns, building 200+ backlinks per month.", "Conducted technical audits, keyword research, on-page optimization, and competitor analysis.", "Supported social media marketing and Google Ads campaigns."] },
  { role: "SEO Executive", company: "All Star Technologies", place: "Rawalpindi", period: "Feb 2023 – Mar 2024", points: ["Executed keyword research, on-page and off-page optimization, and technical SEO audits.", "Analyzed competitors and backlinks to identify opportunities for organic visibility and authority.", "Supported link building, business listings, backlink monitoring, and website/content improvements."] },
  { role: "SEO Executive", company: "Codiea.io", place: "Bahawalpur", period: "Mar 2022 – Feb 2023", points: ["Executed off-page SEO including link building, guest posting, and directory submissions.", "Built 200+ backlinks per month and analyzed competitor backlink profiles.", "Supported outreach, backlink research, and ongoing campaign performance monitoring."] }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="label">experience</p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Where I've worked.</h2>
          </div>
          <p className="max-w-md leading-7 text-ink/60">Across these roles, I've handled SEO campaigns, backlink work, content reviews, reporting, and WordPress updates.</p>
        </div>

        <div className="mt-12 border-t border-line">
          {jobs.map(job => (
            <article key={job.company + job.period} className={`border-b border-line px-1 py-8 ${job.current ? "border-l-2 border-l-flag pl-6" : ""}`}>
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl font-semibold">{job.role}</h3>
                  {job.current && <span className="font-mono text-xs text-flag">current</span>}
                </div>
                <span className="font-mono text-sm text-ink/45">{job.period}</span>
              </div>
              <p className="mt-1.5 text-ink/60">{job.company} — {job.place}</p>
              <ul className="mt-5 grid gap-x-8 gap-y-2.5 text-[15px] leading-7 text-ink/60 md:grid-cols-2">
                {job.points.map(p => <li key={p} className="before:mr-2 before:text-signal before:content-['—']">{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
