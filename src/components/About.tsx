"use client";

import { motion } from "motion/react";

const systems = [
  { id: "SYS-01", capability: "Anomaly Detection Engine" },
  { id: "SYS-02", capability: "Production Data Cross-Reference" },
  { id: "SYS-03", capability: "Multi-Jurisdiction Compliance" },
  { id: "SYS-04", capability: "Financial Pattern Recognition" },
  { id: "SYS-05", capability: "Document Forensic Analysis" },
  { id: "SYS-06", capability: "Real-Time Market Correlation" },
  { id: "SYS-07", capability: "Trust & Estate Computation" },
  { id: "SYS-08", capability: "Adversarial Validation" },
  { id: "SYS-09", capability: "Confidence-Rated Reporting" },
  { id: "SYS-10", capability: "Continuous Learning Pipeline" },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — the pitch */}
          <div>
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="label mb-6">The System</p>
              <h2 className="heading-lg mb-8" style={{ color: "#d4c5a0" }}>
                Not a team.<br />
                <span className="gradient-text">A machine.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="flex flex-col gap-5"
            >
              <p className="body-md" style={{ color: "#6b5d48" }}>
                Dwyer Financial Security is powered by a proprietary cluster of
                specifically-trained AI models. The same class of high-frequency,
                quant-based mathematical modeling used by institutional trading desks
                &mdash; now applied to forensic financial analysis.
              </p>
              <p className="body-md" style={{ color: "#6b5d48" }}>
                Our algorithms process production data, tax filings, and payout
                records at computational speeds that surface anomalies no human
                auditor would catch. Patterns of deception that compound over
                years are identified in hours.
              </p>
              <p className="body-md" style={{ color: "#6b5d48" }}>
                The accuracy and speed of our mathematical computation is built
                on the same foundational technology recently demonstrated in
                frontier AI research &mdash; adapted and privately trained for
                one domain: your money.
              </p>
            </motion.div>
          </div>

          {/* Right — black box system cards (NO NAMES) */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="card p-6"
          >
            <p className="label mb-5 px-2">Active Systems</p>
            <div className="flex flex-col">
              {systems.map((sys, i) => (
                <motion.div
                  key={sys.id}
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-4 py-3 px-3"
                  style={{ borderBottom: i < systems.length - 1 ? "1px solid rgba(184, 151, 90, 0.04)" : "none" }}
                >
                  <span
                    className="font-mono text-[10px] tracking-widest shrink-0"
                    style={{ color: "#4a3f30" }}
                  >
                    {sys.id}
                  </span>
                  <span className="text-xs" style={{ color: "#6b5d48" }}>
                    {sys.capability}
                  </span>
                  <span className="ml-auto">
                    <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "#b8975a" }} />
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
