export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Muhammad Shaban <span className="text-slate-400">· SEO Specialist</span></p>
        <a href="#home" className="font-semibold text-slate-700 transition hover:text-brand">Back to top ↑</a>
      </div>
    </footer>
  );
}