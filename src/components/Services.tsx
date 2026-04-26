"use client";

import { motion } from "motion/react";

const capabilities = [
  {
    title: "Royalty & Production Verification",
    brief:
      "High-frequency quantitative analysis of production records, run tickets, and payout statements. Our proprietary models cross-reference operator data against independent measurements to surface discrepancies invisible to manual audit.",
  },
  {
    title: "Forensic Accounting",
    brief:
      "Mathematical modeling trained to detect patterns of financial anomaly — skimming, misallocation, unreported deductions. The same computational precision used in institutional quantitative finance, applied to your books.",
  },
  {
    title: "County, State & Federal Tax Compliance",
    brief:
      "Automated compliance verification across all jurisdictions. Severance tax, property tax, income tax — every filing cross-checked against production data and regulatory requirements in real time.",
  },
  {
    title: "Will & Trust Disbursement Audit",
    brief:
      "Beneficiary payout verification using forensic-grade analysis. We identify calculation errors, undisclosed fees, and distribution anomalies that erode estate value over time.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="label mb-6">Capabilities</p>
          <h2 className="heading-lg gradient-text-warm">
            Proprietary Analysis
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {capabilities.map((s, i) => (
            <motion.div
              key={s.title}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-10 border-b"
              style={{ borderColor: "rgba(184, 151, 90, 0.06)" }}
            >
              <h3 className="heading-md mb-4" style={{ color: "#d4c5a0" }}>
                {s.title}
              </h3>
              <p className="body-md max-w-2xl" style={{ color: "#6b5d48" }}>
                {s.brief}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={false}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mt-16 text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "#4a3f30" }}
        >
          Methodology details are disclosed under NDA only
        </motion.p>
      </div>
    </section>
  );
}
