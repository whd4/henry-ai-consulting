export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="hero-mesh" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-10">
          <span className="pulse-dot" />
          <span className="text-xs text-muted tracking-wide">
            Houston &middot; AI Consulting
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal heading-xl mb-8">
          AI that works
          <br />
          <span className="gradient-text">while you sleep</span>
        </h1>

        {/* Sub */}
        <p className="reveal reveal-delay-1 body-lg max-w-xl mx-auto mb-12">
          We deploy autonomous AI agents that run your operations 24/7.
          Purpose-built for energy, oil&nbsp;&amp;&nbsp;gas, and industrial
          companies in the Houston corridor.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Get Your AI Assessment
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#services" className="btn-secondary text-base px-8 py-4">
            See What We Build
          </a>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {[
            { value: "60%", label: "Cost Reduction" },
            { value: "24/7", label: "Agent Uptime" },
            { value: "9", label: "AI Agents" },
            { value: "<14d", label: "Time to Deploy" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-delay-${i + 1} bg-background p-6 md:p-8`}
            >
              <div className="text-2xl md:text-3xl font-bold tracking-tight gradient-text">
                {s.value}
              </div>
              <div className="text-xs text-muted mt-2 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
