const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI Readiness Assessment",
    description:
      "We audit your workflows, data, and operations to identify where AI agents deliver the highest ROI. You get a prioritized roadmap with projected savings.",
    price: "$5K - $15K",
    timeline: "1-2 weeks",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "We build AI-powered automations that replace manual processes. Document processing, report generation, data pipeline management, anomaly detection.",
    price: "$15K - $50K",
    timeline: "4-8 weeks",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Agent Deployment",
    description:
      "Full-stack AI agent infrastructure. Your own team of autonomous agents monitoring, analyzing, and acting on your behalf — running 24/7 at a fraction of headcount cost.",
    price: "$25K - $100K",
    timeline: "6-12 weeks",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Ongoing Optimization",
    description:
      "Monthly retainer for continuous AI improvement. We monitor agent performance, add new capabilities, and ensure your systems evolve with your business.",
    price: "$5K - $10K/mo",
    timeline: "Ongoing",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            From assessment to deployment, we handle the full AI stack so you
            can focus on running your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-zinc-400 leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                <span className="text-sm font-medium text-accent">
                  {s.price}
                </span>
                <span className="text-sm text-zinc-500">{s.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
