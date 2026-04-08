const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "30-minute call to understand your operations, pain points, and goals. No sales pitch — just diagnosis.",
  },
  {
    num: "02",
    title: "AI Audit",
    description:
      "We map your workflows and identify the highest-ROI automation opportunities. You get a concrete plan with projected savings.",
  },
  {
    num: "03",
    title: "Build & Deploy",
    description:
      "Our agent army builds your solution. AI agents handle development, testing, and deployment — faster than any traditional team.",
  },
  {
    num: "04",
    title: "Monitor & Optimize",
    description:
      "Your agents run 24/7. We monitor performance, ship improvements, and scale capabilities as your needs grow.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            From first call to live agents in under two weeks.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 md:gap-8 items-start">
                <div className="shrink-0 w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-accent font-mono font-bold text-lg">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
