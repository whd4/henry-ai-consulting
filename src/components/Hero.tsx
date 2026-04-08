export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="hero-mesh" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] mb-10">
          <span className="pulse-dot" />
          <span className="text-xs text-muted tracking-widest font-mono uppercase">
            HQ: Houston, TX &middot; Operators Worldwide
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal heading-xl mb-8">
          Your competitors are
          <br />
          <span className="gradient-text">already using AI.</span>
        </h1>

        {/* Sub */}
        <p className="reveal reveal-delay-1 body-lg max-w-xl mx-auto mb-12">
          We make sure you&apos;re ahead of them. Nine AI operators deployed in
          under two weeks &mdash; running strategy, engineering, and ops 24/7.
          Purpose-built for energy and industry.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Get Free Strategy Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#services" className="btn-secondary text-base px-8 py-4">
            View Services &amp; Pricing
          </a>
        </div>

        {/* Trust Bar — Client Value Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {[
            { value: "$2.3M+", label: "Client Value Delivered" },
            { value: "90 days", label: "Avg. Implementation" },
            { value: "4.2x", label: "Average ROI" },
            { value: "100%", label: "Project Completion" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-delay-${i + 1} bg-background p-6 md:p-8`}
            >
              <div className="text-2xl md:text-3xl font-bold tracking-tight gradient-text">
                {s.value}
              </div>
              <div className="text-xs text-muted mt-2 tracking-widest font-mono uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
          {["NDA-Protected", "Fixed-Price Available", "Houston-Based", "Week-1 Guarantee"].map((badge) => (
            <span
              key={badge}
              className="text-[11px] text-muted font-mono tracking-widest uppercase px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
