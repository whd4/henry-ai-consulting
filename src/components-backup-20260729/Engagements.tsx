"use client";

import { motion } from "motion/react";

/**
 * Productized engagements — fixed scope, fixed price, fixed timeline.
 *
 * This is the Week-1 deliverable for the "Build real income with AI" goal. Before this,
 * the site named six capabilities but published no price, no scope, and no way to book.
 * A prospect who wanted to buy had one option: a contact form that (until today) posted to
 * a placeholder key and told them "we'll be in touch" while the message went nowhere.
 *
 * PRICES BELOW ARE A PROPOSAL, NOT A DECISION. They are anchored on the $5K/$15K/$25K ladder
 * in the income playbook and on the fact that a contingency-fee royalty audit typically runs
 * 25-33% of recovery. Whitt sets the real numbers — every one of them is in this single
 * array, so changing them is a one-line edit with no other consequence.
 */

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
const MAILTO = "whittdwyer@gmail.com";

type Engagement = {
  id: string;
  name: string;
  price: string;
  timeline: string;
  forWhom: string;
  scope: string[];
  deliverable: string;
  featured?: boolean;
};

const engagements: Engagement[] = [
  {
    id: "royalty-audit",
    name: "Royalty Statement Audit",
    price: "$4,500",
    timeline: "2 weeks",
    forWhom: "Mineral and royalty owners who suspect their checks are short.",
    scope: [
      "Up to 24 months of payout statements",
      "Up to 10 leases or wells",
      "Line-item recomputation against RRC production records",
      "Deduction review — post-production costs, marketing, gathering",
    ],
    deliverable:
      "A discrepancy report naming every underpaid line, the dollar amount, and the lease clause it violates — plus a drafted recovery demand ready for your attorney.",
    featured: true,
  },
  {
    id: "production-recon",
    name: "Production & Run-Ticket Reconciliation",
    price: "$12,500",
    timeline: "4 weeks",
    forWhom:
      "Operators and larger mineral positions where volumes, tickets, and payouts have never been tied out.",
    scope: [
      "Operator production reports vs. run tickets vs. payout statements",
      "Volume and price reconciliation across the full chain",
      "Severance tax verification against state filings",
      "Anomaly detection across the period — pattern, not just totals",
    ],
    deliverable:
      "A reconciliation package showing where volume or value went missing between the tank and the check, with the supporting documents indexed.",
  },
  {
    id: "trust-audit",
    name: "Trust & Estate Disbursement Audit",
    price: "$18,000",
    timeline: "6 weeks",
    forWhom:
      "Beneficiaries and trustees of estates holding mineral interests.",
    scope: [
      "Full beneficiary payout verification across all mineral holdings",
      "Fee and administrative deduction review",
      "Distribution calculation audit against the trust instrument",
      "Multi-year drift analysis",
    ],
    deliverable:
      "A beneficiary-by-beneficiary accounting with every calculation error, undisclosed fee, and distribution anomaly identified and quantified.",
  },
];

export default function Engagements() {
  return (
    <section id="engagements" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="label mb-6">Engagements</p>
          <h2 className="heading-lg gradient-text-warm">Fixed Scope. Fixed Fee.</h2>
          <p className="body-md mt-6 max-w-2xl mx-auto" style={{ color: "#6b5d48" }}>
            No hourly billing, no open-ended discovery. You know the price, the timeline, and
            exactly what lands on your desk before you commit a dollar.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {engagements.map((e, i) => (
            <motion.div
              key={e.id}
              id={e.id}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card p-8 flex flex-col"
              style={
                e.featured
                  ? { borderColor: "rgba(184, 151, 90, 0.35)" }
                  : undefined
              }
            >
              {e.featured && (
                <p
                  className="text-[9px] tracking-[0.25em] uppercase mb-4"
                  style={{ color: "#b8975a" }}
                >
                  Most requested
                </p>
              )}

              <h3 className="heading-md mb-3" style={{ color: "#d4c5a0" }}>
                {e.name}
              </h3>

              <div className="flex items-baseline gap-3 mb-5">
                <span
                  className="text-3xl"
                  style={{
                    fontFamily: "var(--font-cinzel), Cinzel, serif",
                    color: "#b8975a",
                  }}
                >
                  {e.price}
                </span>
                <span
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "#6b5d48" }}
                >
                  {e.timeline}
                </span>
              </div>

              <p className="body-md mb-6" style={{ color: "#6b5d48" }}>
                {e.forWhom}
              </p>

              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-3"
                style={{ color: "#4a3f30" }}
              >
                Included
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {e.scope.map((s) => (
                  <li
                    key={s}
                    className="body-md flex gap-3"
                    style={{ color: "#6b5d48" }}
                  >
                    <span style={{ color: "#b8975a" }}>—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-3"
                style={{ color: "#4a3f30" }}
              >
                You receive
              </p>
              <p className="body-md mb-8 flex-1" style={{ color: "#6b5d48" }}>
                {e.deliverable}
              </p>

              <a
                href={
                  BOOKING_URL
                    ? BOOKING_URL
                    : `mailto:${MAILTO}?subject=${encodeURIComponent(e.name)}%20—%20scoping%20call`
                }
                target={BOOKING_URL ? "_blank" : undefined}
                rel={BOOKING_URL ? "noopener noreferrer" : undefined}
                className="btn-primary w-full py-3.5 text-sm text-center"
              >
                Book a scoping call
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="body-md max-w-2xl mx-auto mb-4" style={{ color: "#6b5d48" }}>
            Larger positions are scoped individually. For owners who would rather not pay
            up front, select engagements can be structured on recovery — we are paid a share
            of what we find, and nothing if we find nothing.
          </p>
          <p
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "#4a3f30" }}
          >
            50% on engagement · balance on delivery · invoiced, payable by ACH or wire
          </p>
        </motion.div>
      </div>
    </section>
  );
}
