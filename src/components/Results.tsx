const metrics = [
  {
    stat: "60%",
    label: "Lower Cost",
    detail: "vs. hiring an in-house AI team",
  },
  {
    stat: "9",
    label: "Specialized Agents",
    detail: "strategy, engineering, research, sales, ops, legal, marketing, finance, orchestration",
  },
  {
    stat: "24/7",
    label: "Autonomous Operation",
    detail: "agents work nights, weekends, and holidays",
  },
  {
    stat: "14 Days",
    label: "To First Deployment",
    detail: "from discovery call to live agents",
  },
];

const industries = [
  "Oil & Gas Operators",
  "Pipeline Companies",
  "Energy Services",
  "Industrial Manufacturing",
  "Tank Farm Operations",
  "Field Services",
];

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="gradient-text">Houston</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            We understand the energy corridor. Our AI solutions are
            purpose-built for the industries that power the Gulf Coast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m) => (
            <div key={m.label} className="glass-card p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">
                {m.stat}
              </div>
              <div className="font-medium mb-2">{m.label}</div>
              <div className="text-sm text-zinc-500">{m.detail}</div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div
                key={ind}
                className="flex items-center gap-3 text-zinc-300"
              >
                <svg
                  className="w-5 h-5 text-accent shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {ind}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
