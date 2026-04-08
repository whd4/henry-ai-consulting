const operations = [
  {
    label: "AI AUDIT",
    title: "Find Your Highest-ROI Opportunity",
    description:
      "We infiltrate your operations, map every workflow, and identify where AI delivers the biggest impact. You get a prioritized roadmap with projected ROI for each initiative.",
    price: "$5K",
    timeline: "2 weeks",
    outcome: "Know exactly where to invest in AI",
  },
  {
    label: "AI SPRINT",
    title: "Working AI Solution, Guaranteed",
    description:
      "Pick one high-value problem from the audit. We build, deploy, and validate a production AI solution in 90 days — document automation, anomaly detection, pipeline management, or custom agents.",
    price: "$25K",
    timeline: "90 days",
    outcome: "Live AI system delivering measurable ROI",
  },
  {
    label: "AI TRANSFORMATION",
    title: "Enterprise-Wide Implementation",
    description:
      "Your own strike team of autonomous AI operators. Nine agents monitoring, analyzing, and executing across your organization — around the clock, at a fraction of headcount cost.",
    price: "$75K+",
    timeline: "3–6 months",
    outcome: "Full AI operations across your business",
  },
  {
    label: "RETAINER",
    title: "Ongoing Optimization & Support",
    description:
      "Monthly engagement for continuous improvement. We monitor AI performance, deploy new capabilities, retrain models, and scale your systems as your business evolves.",
    price: "$5K–$10K/mo",
    timeline: "Ongoing",
    outcome: "AI that gets smarter every month",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center mb-20">
          <p className="label mb-4">Services &amp; Pricing</p>
          <h2 className="heading-lg">
            Four levels of
            <br />
            <span className="gradient-text-warm">engagement.</span>
          </h2>
          <p className="body-lg max-w-lg mx-auto mt-5">
            Fixed-price. Defined scope. Measurable outcomes.
            No open-ended consulting bills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {operations.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} card p-8 md:p-10 flex flex-col`}
            >
              <span className="label mb-5 font-mono">{s.label}</span>
              <h3 className="heading-md mb-3">{s.title}</h3>
              <p className="body-md flex-1 mb-4">{s.description}</p>
              <div className="text-xs text-accent-light font-medium mb-6">
                {s.outcome}
              </div>
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
