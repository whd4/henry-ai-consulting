const protocol = [
  {
    num: "01",
    title: "Initial Contact",
    description:
      "30-minute briefing to assess your situation. We identify the threat landscape \u2014 where you\u2019re exposed, where competitors are gaining ground, and where AI operators can turn the tide.",
  },
  {
    num: "02",
    title: "Intelligence Gathering",
    description:
      "Deep recon on your workflows, data, and operations. We build a complete operational picture and deliver a classified action plan with projected impact.",
  },
  {
    num: "03",
    title: "Force Deployment",
    description:
      "Our agent army builds and deploys your solution. AI operators handle engineering, testing, and activation \u2014 faster than any traditional team could mobilize.",
  },
  {
    num: "04",
    title: "Sustained Operations",
    description:
      "Your operators run 24/7 without fatigue, without error. We maintain command and control \u2014 monitoring performance, deploying upgrades, and scaling the force as your mission expands.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal text-center mb-20">
          <p className="label mb-4">Deployment Protocol</p>
          <h2 className="heading-lg">
            From first contact to
            <br />
            <span className="gradient-text-warm">full operational status.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {protocol.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} flex gap-8 md:gap-12 items-start py-10 ${
                i < protocol.length - 1 ? "border-b border-white/[0.04]" : ""
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
