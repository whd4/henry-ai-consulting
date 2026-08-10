"use client";

import { motion } from "motion/react";

/**
 * REWRITTEN 2026-07-29 for trust and conversion.
 *
 * WHAT WAS HERE AND WHY IT WAS COSTING SALES
 *
 * Headline: "Not a team. A machine." — precisely backwards for this buyer. A mineral owner
 * who suspects their royalty check is short is worried that a faceless system already took
 * their money. Answering "don't worry, we're also a faceless system" removes the one thing
 * they're shopping for: a person who is accountable for the number.
 *
 * Body: three paragraphs about "proprietary clusters of specifically-trained AI models,"
 * "the same class of high-frequency quant modeling used by institutional trading desks,"
 * and "foundational technology recently demonstrated in frontier AI research." None of it
 * says what the client receives. It's a technology brochure for a service nobody buys on
 * technology.
 *
 * Right column: SYS-01 through SYS-10 — "Anomaly Detection Engine," "Adversarial
 * Validation," "Continuous Learning Pipeline" — with blinking status dots. Invented system
 * names dressed as an operations console. A skeptical buyer reads that as theater, and this
 * buyer is skeptical by definition; they came here because they think they were deceived.
 *
 * WHAT REPLACED IT
 * The lineage (his actual moat, previously absent from the entire site), a plain-language
 * four-step process so the buyer knows exactly what happens after they pay, and explicit
 * risk reversal. Nothing here claims a credential or a result that hasn't been earned.
 */

const process = [
  {
    step: "01",
    title: "You send what you have",
    detail:
      "Payout statements, division orders, lease copies, check stubs. Whatever you've got, however it's organized. Most people send a shoebox and an apology. That's normal.",
  },
  {
    step: "02",
    title: "We rebuild the math independently",
    detail:
      "Your decimal interest, the reported volumes, the price received, and every deduction taken — recomputed from public production records rather than from the operator's own summary.",
  },
  {
    step: "03",
    title: "We show you every difference",
    detail:
      "Line by line: what you were paid, what the records say you were owed, the gap, and the specific lease or statutory provision that governs it. Including the months where nothing was wrong.",
  },
  {
    step: "04",
    title: "You decide what to do",
    detail:
      "You receive a demand letter drafted and ready for your attorney. We don't file anything, we don't contact your operator, and we don't take a position on your behalf unless you ask us to.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — who is actually doing this work */}
          <div>
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="label mb-6">Who You&apos;re Hiring</p>
              <h2 className="heading-lg mb-8" style={{ color: "#d4c5a0" }}>
                Four generations
                <br />
                <span className="gradient-text">in this business.</span>
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
                The Dwyer family has worked Texas oil since the industry was young.
                Four generations of operators — people who have signed division
                orders, argued over run tickets, and watched what happens to a
                royalty check when nobody is checking it.
              </p>
              <p className="body-md" style={{ color: "#6b5d48" }}>
                That matters here for one reason. Underpayment rarely looks like
                theft. It looks like a decimal interest that was never corrected
                after a unit was redrawn, a post-production deduction the lease
                never permitted, or a price that quietly stopped matching the
                index. You have to know the business to see it.
              </p>
              <p className="body-md" style={{ color: "#6b5d48" }}>
                We use modern analytical tools to do in hours what used to take an
                accountant a month. The tools do the arithmetic. A person who
                knows what a division order is decides what it means — and signs
                the report that reaches your desk.
              </p>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-10 pl-5"
              style={{ borderLeft: "2px solid rgba(184, 151, 90, 0.35)" }}
            >
              <p
                className="text-base mb-2"
                style={{
                  fontFamily: "var(--font-cinzel), Cinzel, serif",
                  color: "#d4c5a0",
                }}
              >
                If we find nothing, we tell you that.
              </p>
              <p className="body-md" style={{ color: "#6b5d48" }}>
                A clean audit is a real result — it&apos;s the answer to a question
                that was costing you sleep. We would rather hand you a short report
                than manufacture a finding.
              </p>
            </motion.div>
          </div>

          {/* Right — what actually happens, in order */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="card p-8"
          >
            <p className="label mb-8">How An Engagement Runs</p>
            <div className="flex flex-col gap-8">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <span
                    className="font-mono text-[11px] tracking-widest shrink-0 pt-1"
                    style={{ color: "#b8975a" }}
                  >
                    {p.step}
                  </span>
                  <div>
                    <h3
                      className="text-sm mb-2"
                      style={{
                        fontFamily: "var(--font-cinzel), Cinzel, serif",
                        color: "#d4c5a0",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "#6b5d48", lineHeight: 1.7 }}
                    >
                      {p.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(184, 151, 90, 0.08)" }}
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "#4a3f30" }}
              >
                Your documents are never shared, sold, or used to train anything
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
