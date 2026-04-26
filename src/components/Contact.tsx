"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          subject: "Assessment Inquiry — Dwyer Financial Security",
          ...data,
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="inquiry" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-lg px-6">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="label mb-6">Inquiry</p>
          <h2 className="heading-lg mb-4 gradient-text-warm">
            Request Assessment
          </h2>
          <p className="body-md" style={{ color: "#6b5d48" }}>
            All inquiries are confidential. We respond within 48 hours
            to qualified submissions.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="card p-8 md:p-10"
        >
          {submitted ? (
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div
                className="w-12 h-12 mx-auto mb-5 flex items-center justify-center"
                style={{ border: "1px solid rgba(184, 151, 90, 0.3)" }}
              >
                <svg className="w-5 h-5" style={{ color: "#b8975a" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="heading-md mb-2">Inquiry received.</h3>
              <p className="body-md" style={{ color: "#6b5d48" }}>
                A representative will contact you within 48 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-[10px] mb-2 tracking-[0.2em] uppercase" style={{ color: "#6b5d48" }}>
                  Name
                </label>
                <input id="name" name="name" type="text" required className="input" placeholder="" />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] mb-2 tracking-[0.2em] uppercase" style={{ color: "#6b5d48" }}>
                  Email
                </label>
                <input id="email" name="email" type="email" required className="input" placeholder="" />
              </div>

              <div>
                <label htmlFor="concern" className="block text-[10px] mb-2 tracking-[0.2em] uppercase" style={{ color: "#6b5d48" }}>
                  Nature of Concern
                </label>
                <select id="concern" name="concern" className="input">
                  <option value="">Select...</option>
                  <option value="royalty">Royalty / Production Payout</option>
                  <option value="forensic">Forensic Accounting</option>
                  <option value="tax">Tax Compliance</option>
                  <option value="trust">Will & Trust Disbursement</option>
                  <option value="security">Network / Financial Security</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] mb-2 tracking-[0.2em] uppercase" style={{ color: "#6b5d48" }}>
                  Brief Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="btn-primary w-full py-4 text-sm mt-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </motion.button>

              <p className="text-center text-[9px] tracking-[0.2em] uppercase" style={{ color: "#4a3f30" }}>
                All information is held in strict confidence
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
