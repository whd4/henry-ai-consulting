"use client";

import { motion } from "motion/react";

export default function Results() {
  return (
    <section id="results" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="label mb-6">The Question</p>
          <h2 className="heading-lg" style={{ color: "#d4c5a0" }}>
            Are you getting what<br />
            <span className="gradient-text">you&apos;re owed?</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {[
            "Are your royalty checks reflecting actual production volumes?",
            "Is someone skimming off the top before you see the numbers?",
            "Are post-production deductions eroding your payout?",
            "Is your trust being disbursed according to the terms?",
            "Are your tax filings aligned with what was actually produced?",
            "Is your network secure from those trying to access your financials?",
          ].map((question, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex items-start gap-5 py-4"
              style={{ borderBottom: "1px solid rgba(184, 151, 90, 0.04)" }}
            >
              <span
                className="text-lg font-mono shrink-0 mt-0.5"
                style={{ color: "#b8975a" }}
              >
                ?
              </span>
              <p className="text-base" style={{ color: "#8a7a60", lineHeight: 1.7 }}>
                {question}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="body-md mb-8" style={{ color: "#6b5d48" }}>
            If you answered yes to any of these &mdash; or you&apos;re not sure
            &mdash; that uncertainty is costing you money right now.
          </p>
          <a href="#inquiry" className="btn-primary text-sm px-10 py-4">
            Request Confidential Assessment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
