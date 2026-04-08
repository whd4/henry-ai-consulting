export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Glow effects */}
      <div className="hero-glow -top-40 -left-40 animate-pulse-slow" />
      <div
        className="hero-glow -bottom-40 -right-40 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-zinc-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Houston-Based AI Consulting
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          AI That Works
          <br />
          <span className="gradient-text">While You Sleep</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We deploy autonomous AI agents that handle your operations 24/7.
          Purpose-built for energy, oil & gas, and industrial companies
          in the Houston corridor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-accent hover:bg-accent-light text-white font-semibold text-lg transition-colors"
          >
            Get Your AI Assessment
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full glass hover:border-accent/30 text-zinc-300 font-medium text-lg transition-all"
          >
            See What We Build
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "60%", label: "Cost Reduction" },
            { value: "24/7", label: "Agent Uptime" },
            { value: "9", label: "AI Agents" },
            { value: "<14d", label: "Time to Deploy" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-5">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {s.value}
              </div>
              <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
