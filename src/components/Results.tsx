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
          <p className="label mb-4">Theater of Operations</p>
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
              stat: "24/7",
              label: "Always On Duty",
              detail: "Operators don\u2019t sleep, don\u2019t take leave",
            },
            {
              stat: "14 days",
              label: "Rapid Deployment",
              detail: "From first contact to live operators",
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
