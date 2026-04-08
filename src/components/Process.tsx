const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "30-minute call to understand your operations, pain points, and goals. No sales pitch \u2014 just diagnosis.",
  },
  {
    num: "02",
    title: "Audit & Plan",
    description:
      "We map your workflows and identify the highest-ROI automation targets. You get a concrete plan with projected savings.",
  },
  {
    num: "03",
    title: "Build & Deploy",
    description:
      "Our agent army builds your solution. AI agents handle development, testing, and deployment \u2014 faster than any traditional team.",
  },
  {
    num: "04",
    title: "Monitor & Scale",
    description:
      "Your agents run 24/7. We monitor performance, ship improvements, and scale capabilities as your needs grow.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal text-center mb-20">
          <p className="label mb-4">Process</p>
          <h2 className="heading-lg">
            From call to live agents
            <br />
            <span className="gradient-text-warm">in under two weeks.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} flex gap-8 md:gap-12 items-start py-10 ${
                i < steps.length - 1 ? "border-b border-white/[0.04]" : ""
              }`}
            >
              <span className="text-3xl md:text-4xl font-bold gradient-text font-mono shrink-0 w-16 text-right">
                {step.num}
              </span>
              <div>
                <h3 className="heading-md mb-2">{step.title}</h3>
                <p className="body-md max-w-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
