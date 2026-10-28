export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-28">
      <div className="grid gap-10 border border-line lg:grid-cols-[1fr_22rem]">
        <div className="px-6 py-10 sm:px-10">
          <p className="label">contact</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">Need a hand with your website's SEO?</h2>
          <p className="mt-4 max-w-xl leading-7 text-ink/60">Whether you need a technical issue resolved, content improved, or a link-building campaign planned, send a short note about your site and goals.</p>
        </div>
        <div className="border-t border-line px-6 py-10 sm:px-10 lg:border-l lg:border-t-0">
          <p className="text-sm text-ink/50">Get in touch directly</p>
          <a href="mailto:khanshaban7172@gmail.com" className="btn-primary mt-4 inline-flex w-full items-center justify-center px-4 py-3.5 font-medium">Email Muhammad</a>
          <a className="mt-5 block break-all text-sm text-ink/70 hover:text-signal" href="mailto:khanshaban7172@gmail.com">khanshaban7172@gmail.com</a>
          <a className="mt-2 block text-sm text-ink/70 hover:text-signal" href="tel:+923156757811">+92 315 675 7811</a>
          <a className="mt-2 inline-block text-sm text-ink/70 hover:text-signal" href="https://pk.linkedin.com/in/muhammad-shaban-45b66b309" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>
        </div>
      </div>
    </section>
  );
}
