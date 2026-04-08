export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
              <span className="text-white text-[10px] font-bold font-mono">H</span>
            </div>
            <span className="text-sm font-medium tracking-tight">
              HENRY AI
            </span>
          </div>

          <div className="flex items-center gap-8 text-xs text-muted font-mono tracking-wide">
            <span>Houston, TX</span>
            <span>command@henryai.com</span>
          </div>

          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} HENRY AI Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}
