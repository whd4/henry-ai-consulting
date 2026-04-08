export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold tracking-tight">
              <span className="gradient-text">HENRY</span>
              <span className="text-zinc-400 font-light ml-1">AI</span>
            </span>
            <p className="text-sm text-zinc-500 mt-1">
              AI Consulting for Energy & Industry
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <span>Houston, TX</span>
            <span className="hidden md:inline">|</span>
            <span>hello@henryai.com</span>
          </div>

          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} HENRY AI Corporation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
