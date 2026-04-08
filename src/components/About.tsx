const agents = [
  { name: "NEXUS", role: "Orchestrator", color: "#3b82f6" },
  { name: "ATLAS", role: "Strategy", color: "#a855f7" },
  { name: "FORGE", role: "Engineering", color: "#f97316" },
  { name: "ORACLE", role: "Research", color: "#06b6d4" },
  { name: "PULSE", role: "Marketing", color: "#ec4899" },
  { name: "CLOSER", role: "Sales", color: "#22c55e" },
  { name: "LEDGER", role: "Finance", color: "#eab308" },
  { name: "SHIELD", role: "Legal", color: "#ef4444" },
  { name: "ENGINE", role: "Operations", color: "#10b981" },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Left copy — 3 cols */}
          <div className="md:col-span-3">
            <div className="reveal">
              <p className="label mb-4">Why HENRY AI</p>
              <h2 className="heading-lg mb-8">
                Not another chatbot.
                <br />
                <span className="gradient-text-warm">An agent army.</span>
              </h2>
            </div>

            <div className="reveal reveal-delay-1 flex flex-col gap-5 body-md max-w-lg">
              <p>
                Most AI consultants sell you a chatbot and call it innovation.
                We build autonomous agent systems that actually run your
                operations.
              </p>
              <p>
                Nine specialized AI agents &mdash; strategy, engineering,
                research, sales, operations, legal, marketing, finance, and a
                master orchestrator &mdash; each purpose-built for its role.
                They coordinate, learn, and improve without human intervention.
              </p>
              <p>
                Based in Houston. Built for energy. We speak your language
                because we&apos;re in your industry.
              </p>
            </div>
          </div>

          {/* Right agent list — 2 cols */}
          <div className="md:col-span-2">
            <div className="reveal card p-6">
              <p className="label mb-5 px-2">The Agent Stack</p>
              <div className="flex flex-col">
                {agents.map((agent, i) => (
                  <div
                    key={agent.name}
                    className={`reveal reveal-delay-${(i % 4) + 1} flex items-center gap-4 py-3 px-3 rounded-xl hover:bg-white/[0.02] transition-colors`}
                  >
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: agent.color }}
                    />
                    <span className="font-mono text-xs font-semibold w-16 tracking-wide">
                      {agent.name}
                    </span>
                    <span className="text-sm text-muted">{agent.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
