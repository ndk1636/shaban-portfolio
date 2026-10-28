export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Muhammad Shaban — SEO Specialist</p>
        <a href="#home" className="text-ink/70 transition hover:text-signal">Back to top</a>
      </div>
    </footer>
  );
}
