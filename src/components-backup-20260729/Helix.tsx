"use client";

import { motion } from "motion/react";

const dimensions = [
  {
    num: "01",
    name: "Process Mapping",
    description:
      "Complete operational X-ray. Every workflow, every handoff, every bottleneck documented and scored for AI readiness.",
    color: "#2563eb",
    metric: "Automation Score",
  },
  {
    num: "02",
    name: "Cost Analysis",
    description:
      "Line-by-line cost decomposition. We find where you're burning money on manual work that AI eliminates overnight.",
    color: "#06b6d4",
    metric: "Waste Coefficient",
  },
  {
    num: "03",
    name: "Automation Scoring",
    description:
      "Every process rated 0–100 on automation feasibility. We prioritize by ROI, not complexity. Quick wins ship first.",
    color: "#8b5cf6",
    metric: "Feasibility Index",
  },
  {
    num: "04",
    name: "Integration Design",
    description:
      "Architecture blueprint for your AI stack. What connects to what, how data flows, and where agents deploy.",
    color: "#ec4899",
    metric: "Integration Density",
  },
  {
    num: "05",
    name: "Revenue Projection",
    description:
      "Hard numbers. We model the financial impact of every AI initiative — cost savings, revenue uplift, and payback period.",
    color: "#f97316",
    metric: "ROI Multiplier",
  },
  {
    num: "06",
    name: "Execution Plan",
    description:
      "90-day deployment roadmap with milestones, dependencies, and go/no-go checkpoints. You know exactly what happens when.",
    color: "#22c55e",
    metric: "Delivery Confidence",
  },
];

export default function Helix() {
  return (
    <section id="helix" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <p className="label mb-4">Proprietary Framework</p>
          <h2 className="heading-lg">
            The <span className="gradient-text">HELIX</span> Methodology&trade;
          </h2>
        </motion.div>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="body-lg max-w-2xl mx-auto text-center mb-6"
        >
          <span className="text-foreground font-medium">Holistic Enterprise Logic, Integration &amp; eXecution.</span>
          {" "}A six-dimension AI audit that spirals deeper with each pass — like DNA, each layer
          builds on the last. The result: the industry&apos;s lowest integration cost, guaranteed.
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6 mb-20"
        >
          <div className="flex items-center gap-2 text-xs text-muted font-mono">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Patent Pending
          </div>
          <div className="flex items-center gap-2 text-xs text-muted font-mono">
            <div className="w-2 h-2 rounded-full bg-accent" />
            6 Dimensions
          </div>
          <div className="flex items-center gap-2 text-xs text-muted font-mono">
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            2-Week Delivery
          </div>
        </motion.div>

        {/* 6 Dimensions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dimensions.map((d, i) => (
            <motion.div
              key={d.num}
              initial={false}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 },
              }}
              className="card p-8 group cursor-default"
            >
              {/* Dimension number + color bar */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono"
                  style={{ backgroundColor: `${d.color}20`, color: d.color }}
                >
                  {d.num}
                </div>
                <div
                  className="h-px flex-1 opacity-20"
                  style={{ backgroundColor: d.color }}
                />
              </div>

              <h3 className="heading-md mb-3 group-hover:text-accent-light transition-colors">
                {d.name}
              </h3>
              <p className="body-md mb-5 flex-1">{d.description}</p>

              <div className="pt-4 border-t border-white/[0.04]">
                <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: d.color }}>
                  Output: {d.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="card inline-flex items-center gap-6 px-10 py-6">
            <div className="text-left">
              <p className="text-sm font-medium mb-1">
                The HELIX Audit is <span className="text-accent-light">free</span> for qualified companies.
              </p>
              <p className="text-xs text-muted">
                If you&apos;re running 10+ employees and $1M+ revenue, you qualify.
              </p>
            </div>
            <a href="#contact" className="btn-primary text-sm px-6 py-3 shrink-0">
              Get Your HELIX Score
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
