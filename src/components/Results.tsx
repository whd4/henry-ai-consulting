const sectors = [
  "Oil & Gas Operators",
  "Pipeline Companies",
  "Energy Services",
  "Industrial Manufacturing",
  "Tank Farm Operations",
  "Field Services",
];

export default function Results() {
  return (
    <section id="results" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center mb-20">
          <p className="label mb-4">Results</p>
          <h2 className="heading-lg">
            Built for the
            <br />
            <span className="gradient-text">energy corridor.</span>
          </h2>
          <p className="body-lg max-w-lg mx-auto mt-5">
            We operate in the industries that power the Gulf Coast.
            Local intel, domain expertise, boots on the ground.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {[
            {
              stat: "60%",
              label: "Cost Advantage",
              detail: "vs. assembling an in-house AI team",
            },
            {
              stat: "4.2x",
              label: "Average ROI",
              detail: "Measured across all client engagements",
            },
            {
              stat: "14 days",
              label: "Rapid Deployment",
              detail: "From first contact to live AI systems",
            },
          ].map((m, i) => (
            <div
              key={m.label}
              className={`reveal reveal-delay-${i + 1} card p-8 text-center`}
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {m.stat}
              </div>
              <div className="font-medium text-sm mb-2">{m.label}</div>
              <div className="text-xs text-muted">{m.detail}</div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="reveal card p-10 md:p-14 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <p className="label font-mono">Case Study</p>
            <span className="text-[10px] text-muted font-mono px-3 py-1 rounded-full border border-white/[0.06]">
              OIL &amp; GAS
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="heading-md mb-4">
                AI-Powered Theft Detection for Tank Farm Operations
              </h3>
              <p className="body-md mb-4">
                <span className="text-zinc-300 font-medium">Industry:</span>{" "}
                Oil &amp; Gas — Eagle Ford &amp; Permian Basin operators
              </p>
              <p className="body-md mb-4">
                <span className="text-zinc-300 font-medium">Challenge:</span>{" "}
                Tank farm theft averaging $180K/year per site. Manual LACT
                meter checks miss 40% of diversion events.
              </p>
              <p className="body-md">
                <span className="text-zinc-300 font-medium">Solution:</span>{" "}
                AI-powered IoT monitoring with real-time anomaly detection.
                Correlates tank levels, camera feeds, and hauler run tickets
                to flag unauthorized activity within minutes.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {[
                { value: "94%", label: "Theft detection rate" },
                { value: "$180K", label: "Saved per site annually" },
                { value: "6 weeks", label: "Full deployment time" },
                { value: "3 months", label: "Time to full ROI" },
              ].map((r, i) => (
                <div
                  key={r.label}
                  className={`reveal reveal-delay-${i + 1} flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]`}
                >
                  <span className="text-xl font-bold gradient-text min-w-[72px]">
                    {r.value}
                  </span>
                  <span className="text-sm text-muted">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sectors */}
        <div className="reveal card p-10 md:p-14">
          <h3 className="heading-md text-center mb-10">Active Sectors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-8">
            {sectors.map((s, i) => (
              <div
                key={s}
                className={`reveal reveal-delay-${(i % 3) + 1} flex items-center gap-3`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm text-zinc-300">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
