const services = [
  {
    label: "ASSESS",
    title: "AI Readiness Assessment",
    description:
      "We audit your workflows, data, and operations to identify where AI agents deliver the highest ROI. You get a prioritized roadmap with projected savings.",
    price: "$5K \u2013 $15K",
    timeline: "1\u20132 weeks",
  },
  {
    label: "AUTOMATE",
    title: "Workflow Automation",
    description:
      "AI-powered automations that replace manual processes. Document processing, report generation, data pipeline management, anomaly detection.",
    price: "$15K \u2013 $50K",
    timeline: "4\u20138 weeks",
  },
  {
    label: "DEPLOY",
    title: "Agent Deployment",
    description:
      "Full-stack AI agent infrastructure. Your own team of autonomous agents monitoring, analyzing, and acting on your behalf \u2014 24/7 at a fraction of headcount cost.",
    price: "$25K \u2013 $100K",
    timeline: "6\u201312 weeks",
  },
  {
    label: "OPTIMIZE",
    title: "Ongoing Optimization",
    description:
      "Monthly retainer for continuous AI improvement. We monitor agent performance, add new capabilities, and ensure your systems evolve with your business.",
    price: "$5K \u2013 $10K/mo",
    timeline: "Ongoing",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center mb-20">
          <p className="label mb-4">Services</p>
          <h2 className="heading-lg">
            Everything you need.
            <br />
            <span className="gradient-text-warm">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} card p-8 md:p-10 flex flex-col`}
            >
              <span className="label mb-5">{s.label}</span>
              <h3 className="heading-md mb-3">{s.title}</h3>
              <p className="body-md flex-1 mb-6">{s.description}</p>
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.04]">
                <span className="text-sm font-medium text-accent-light">
                  {s.price}
                </span>
                <span className="text-xs text-muted">{s.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
