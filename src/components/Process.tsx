"use client";

import { motion } from "motion/react";

const protocol = [
  {
    num: "01",
    title: "HELIX Audit",
    description:
      "We deploy the HELIX Methodology across your operations. Six dimensions analyzed. Every workflow scored. You receive your HELIX Score and a prioritized AI roadmap in 2 weeks.",
  },
  {
    num: "02",
    title: "Architecture Design",
    description:
      "We blueprint the exact AI integration — what connects to what, how data flows, where agents deploy. No guesswork. Every decision backed by your HELIX data.",
  },
  {
    num: "03",
    title: "Rapid Deployment",
    description:
      "Our agent army builds and deploys your solution. AI operators handle engineering, testing, and activation — faster than any traditional team could mobilize.",
  },
  {
    num: "04",
    title: "Continuous Evolution",
    description:
      "Your AI operators run 24/7 without fatigue. We monitor performance, deploy upgrades, and scale systems. Each month, your HELIX Score improves.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="label mb-4">Deployment Protocol</p>
          <h2 className="heading-lg">
            From HELIX Audit to
            <br />
            <span className="gradient-text-warm">full operational status.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {protocol.map((step, i) => (
            <motion.div
              key={step.num}
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`flex gap-8 md:gap-12 items-start py-10 ${
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
