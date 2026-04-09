const operators = [
  { name: "Task Router", role: "Routes work to the right agent, tracks completion", color: "#3b82f6" },
  { name: "Strategy Advisor", role: "Market analysis, business decisions, opportunity scoring", color: "#a855f7" },
  { name: "Code Builder", role: "Builds, deploys, tests, and maintains all software", color: "#f97316" },
  { name: "Research Compiler", role: "Finds data, compiles reports, grows the knowledge base", color: "#06b6d4" },
  { name: "Content Marketer", role: "Writes content, manages social, runs outreach campaigns", color: "#ec4899" },
  { name: "Sales Prospector", role: "Finds leads, researches prospects, drafts proposals", color: "#22c55e" },
  { name: "Deal Modeler", role: "Financial modeling, invoicing, ROI calculations", color: "#eab308" },
  { name: "Compliance Checker", role: "Legal research, contract review, regulatory compliance", color: "#ef4444" },
  { name: "Ops Manager", role: "Sprint management, task tracking, system health monitoring", color: "#10b981" },
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
              <p className="label mb-4">Chain of Command</p>
              <h2 className="heading-lg mb-8">
                Not consultants.
                <br />
                <span className="gradient-text-warm">Operators.</span>
              </h2>
            </div>

            <div className="reveal reveal-delay-1 flex flex-col gap-5 body-md max-w-lg">
              <p>
                Most AI firms send you a chatbot and call it a solution. That&apos;s
                sending a private where you need a strike team.
              </p>
              <p>
                We deploy nine specialized AI operators &mdash; each trained for
                its role, each running autonomous missions around the clock.
                Command and orchestration. Strategic intelligence. Combat
                engineering. Recon. Psyops. Forward engagement. Logistics.
                Legal cover. Field ops.
              </p>
              <p>
                They coordinate without human intervention. They learn from
                every engagement. They never sleep, never quit, never ask
                for a raise.
              </p>
              <p>
                Based in Houston. Forged for energy. We don&apos;t just understand
                your industry &mdash; we&apos;re in the trenches with you.
              </p>
            </div>
          </div>

          {/* Right operator roster — 2 cols */}
          <div className="md:col-span-2">
            <div className="reveal card p-6">
              <p className="label mb-5 px-2 font-mono">AI Team — What Each Agent Does</p>
              <div className="flex flex-col">
                {operators.map((op, i) => (
                  <div
                    key={op.name}
                    className={`reveal reveal-delay-${(i % 4) + 1} flex items-center gap-4 py-3 px-3 rounded-xl hover:bg-white/[0.02] transition-colors`}
                  >
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: op.color }}
                    />
                    <span className="font-mono text-xs font-semibold tracking-wide whitespace-nowrap">
                      {op.name}
                    </span>
                    <span className="text-xs text-muted flex-1">{op.role}</span>
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
