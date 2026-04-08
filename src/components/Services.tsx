const operations = [
  {
    label: "RECON",
    title: "Threat Assessment",
    description:
      "We infiltrate your operations, map every workflow, and identify where you\u2019re losing ground. You get a classified briefing with prioritized targets and projected ROI.",
    price: "$5K \u2013 $15K",
    timeline: "1\u20132 weeks",
  },
  {
    label: "STRIKE",
    title: "Tactical Automation",
    description:
      "Surgical strikes on your biggest inefficiencies. We deploy AI operators to eliminate manual processes \u2014 document handling, report generation, anomaly detection, pipeline management.",
    price: "$15K \u2013 $50K",
    timeline: "4\u20138 weeks",
  },
  {
    label: "DEPLOY",
    title: "Full Force Deployment",
    description:
      "Your own strike team of autonomous AI operators. Nine agents monitoring, analyzing, and executing on your behalf \u2014 around the clock, at a fraction of headcount cost.",
    price: "$25K \u2013 $100K",
    timeline: "6\u201312 weeks",
  },
  {
    label: "COMMAND",
    title: "Ongoing Command & Control",
    description:
      "Monthly retainer for continuous mission optimization. We monitor operator performance, deploy new capabilities, and scale your force as the battlefield evolves.",
    price: "$5K \u2013 $10K/mo",
    timeline: "Ongoing",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center mb-20">
          <p className="label mb-4">Operations</p>
          <h2 className="heading-lg">
            Four levels of
            <br />
            <span className="gradient-text-warm">engagement.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {operations.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} card p-8 md:p-10 flex flex-col`}
            >
              <span className="label mb-5 font-mono">{s.label}</span>
              <h3 className="heading-md mb-3">{s.title}</h3>
              <p className="body-md flex-1 mb-6">{s.description}</p>
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.04]">
                <span className="text-sm font-medium text-accent-light">
                  {s.price}
                </span>
                <span className="text-xs text-muted font-mono">{s.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
