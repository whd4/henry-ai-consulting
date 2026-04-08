export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="gradient-text">HENRY AI</span>
            </h2>
            <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed">
              <p>
                Most AI consultants sell you a chatbot and call it innovation.
                We build autonomous agent armies that actually run your
                operations.
              </p>
              <p>
                Our system runs on 9 specialized AI agents — strategy,
                engineering, research, sales, operations, legal, marketing,
                finance, and a master orchestrator — each purpose-built for
                its role. They coordinate, learn, and improve without human
                intervention.
              </p>
              <p>
                Based in Houston. Built for energy. We speak your language
                because we&apos;re in your industry.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="font-semibold text-lg mb-6">
              The HENRY Agent Stack
            </h3>
            <div className="flex flex-col gap-3">
              {[
                {
                  name: "NEXUS",
                  role: "Master Orchestrator",
                  color: "text-blue-400",
                },
                {
                  name: "ATLAS",
                  role: "Strategy & Decisions",
                  color: "text-purple-400",
                },
                {
                  name: "FORGE",
                  role: "Engineering & Deployment",
                  color: "text-orange-400",
                },
                {
                  name: "ORACLE",
                  role: "Research & Intelligence",
                  color: "text-cyan-400",
                },
                {
                  name: "PULSE",
                  role: "Marketing & Content",
                  color: "text-pink-400",
                },
                {
                  name: "CLOSER",
                  role: "Sales & Outreach",
                  color: "text-green-400",
                },
                {
                  name: "LEDGER",
                  role: "Finance & Deal Modeling",
                  color: "text-yellow-400",
                },
                {
                  name: "SHIELD",
                  role: "Legal & Compliance",
                  color: "text-red-400",
                },
                {
                  name: "ENGINE",
                  role: "Operations & Sprint Mgmt",
                  color: "text-emerald-400",
                },
              ].map((agent) => (
                <div
                  key={agent.name}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <span
                    className={`font-mono font-bold text-sm w-20 ${agent.color}`}
                  >
                    {agent.name}
                  </span>
                  <span className="text-sm text-zinc-400">{agent.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
