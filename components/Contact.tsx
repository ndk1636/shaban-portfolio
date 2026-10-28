export default function Contact() {
  return (
    <section id="contact" className="px-5 pb-20 pt-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
        <div className="grid items-center gap-10 bg-gradient-to-br from-indigo-50 via-white to-teal-50 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_360px] lg:px-14">
          <div>
            <p className="kicker">Contact</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">Need a hand with your website’s SEO?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">Whether you need a technical issue resolved, content improved, or a link-building campaign planned, send a short note about your site and goals.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <p className="text-sm font-bold text-slate-500">Get in touch directly</p>
            <a href="mailto:khanshaban7172@gmail.com" className="btn-primary mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 font-bold text-white">Email Muhammad <span aria-hidden="true">↗</span></a>
            <a className="mt-4 block break-all text-sm font-semibold text-slate-700 hover:text-brand" href="mailto:khanshaban7172@gmail.com">khanshaban7172@gmail.com</a>
            <a className="mt-2 block text-sm text-slate-600 hover:text-brand" href="tel:+923156757811">+92 315 675 7811</a>
            <a className="mt-2 inline-block text-sm text-slate-600 hover:text-brand" href="https://pk.linkedin.com/in/muhammad-shaban-45b66b309" target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}