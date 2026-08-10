"use client";

import { useState } from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { HeroMascot } from "./mascots";

const OilBackground = dynamic(() => import("./OilBackground"), { ssr: false });

// Same key and same fix as Contact.tsx. This is the ABOVE-THE-FOLD form — the primary
// conversion path on the live site — and it shipped with the literal placeholder
// "YOUR_ACCESS_KEY_HERE" while swallowing every failure into a success screen. Any prospect
// who filled it in was told "a representative will contact you within 48 hours" and no
// message was ever delivered. Set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel to arm it.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const MAILTO = "whittdwyer@gmail.com";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFailed(false);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!WEB3FORMS_KEY) {
      setFailed(true);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Assessment Inquiry — Dwyer Financial Security",
          ...data,
        }),
      });
      if (res.ok) setSubmitted(true);
      else setFailed(true);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <OilBackground />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-5 gap-12 items-center">

          {/* LEFT — Identity (2 cols) */}
          <div className="md:col-span-2 text-center md:text-left">
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center md:justify-start mb-8"
            >
              <HeroMascot size={140} />
            </motion.div>

            <motion.div
              initial={false}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="h-px mb-6 origin-left"
              style={{
                background: "linear-gradient(90deg, #b8975a, transparent)",
              }}
            />

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="heading-xl gradient-text mb-3"
            >
              Dwyer
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-xs tracking-[0.35em] uppercase mb-6"
              style={{
                fontFamily: "var(--font-cinzel), Cinzel, serif",
                color: "#6b5d48",
              }}
            >
              Financial Security
            </motion.p>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#8a7a60" }}
            >
              {/* Was: "Powered by HENRY — a privately trained group of AI models."
                  Leading with AI loses this buyer. A mineral owner who thinks their check
                  is short does not want an algorithm deciding it — they want someone who
                  has read a division order before. The lineage IS the differentiator and it
                  was nowhere on the page. */}
              Four generations in the Texas oil business. Two decades reading
              production data. We audit royalty and payout records for the people
              they belong to.
            </motion.p>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-base md:text-lg mb-8"
              style={{
                fontFamily: "var(--font-cinzel), Cinzel, serif",
                color: "#d4c5a0",
                letterSpacing: "0.02em",
              }}
            >
              If your check is short, we find it.
            </motion.p>

            {/* Capability list */}
            <motion.ul
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="space-y-2 mb-8"
            >
              {[
                "Royalty & Production Payout Verification",
                "Forensic Accounting",
                "County, State & Federal Tax Compliance",
                "Will & Trust Disbursement Audits",
              ].map((cap) => (
                <li
                  key={cap}
                  className="text-xs tracking-[0.1em] flex items-center gap-3"
                  style={{
                    fontFamily: "var(--font-cinzel), Cinzel, serif",
                    color: "#6b5d48",
                  }}
                >
                  <span
                    className="inline-block w-3 h-px"
                    style={{ background: "#b8975a", opacity: 0.5 }}
                  />
                  {cap}
                </li>
              ))}
            </motion.ul>

            {/* Client login link */}
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              <a
                href="/portal"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase transition-colors"
                style={{
                  fontFamily: "var(--font-cinzel), Cinzel, serif",
                  color: "#6b5d48",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#b8975a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b5d48")}
              >
                Existing client?
                <span style={{ textDecoration: "underline" }}>Access portal →</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Application Form (3 cols) */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3"
          >
            <div
              className="p-8 md:p-10"
              style={{
                background: "rgba(10, 6, 4, 0.7)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(184, 151, 90, 0.2)",
              }}
            >
              {/* Form Header */}
              <div className="mb-8">
                <p className="label mb-3">Confidential Assessment</p>
                <h2
                  className="heading-md mb-3"
                  style={{ color: "#d4c5a0" }}
                >
                  Request a Review
                </h2>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#6b5d48" }}
                >
                  Complete the fields below. A representative responds within 48
                  hours. All inquiries are held in strict confidence and covered
                  under our engagement NDA from first contact.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div
                    className="w-14 h-14 mx-auto mb-6 flex items-center justify-center"
                    style={{
                      border: "1px solid rgba(184, 151, 90, 0.4)",
                    }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: "#b8975a" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="heading-md mb-3" style={{ color: "#d4c5a0" }}>
                    Inquiry Received
                  </h3>
                  <p className="text-xs mb-2" style={{ color: "#8a7a60" }}>
                    A representative will contact you within 48 hours.
                  </p>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: "#4a3f30" }}
                  >
                    Reference: DFS-{Date.now().toString().slice(-6)}
                  </p>
                </motion.div>
              ) : failed ? (
                <motion.div
                  initial={false}
                  animate={{ opacity: 1 }}
                  className="text-center py-10"
                >
                  <h3 className="heading-md mb-3" style={{ color: "#d4c5a0" }}>
                    This form isn&apos;t reaching us right now.
                  </h3>
                  <p className="text-xs mb-6" style={{ color: "#8a7a60" }}>
                    We would rather tell you than let your message disappear. Email us
                    directly — it will be read today, and the same confidentiality applies.
                  </p>
                  <a
                    href={`mailto:${MAILTO}?subject=Confidential%20Assessment%20Request`}
                    className="btn-primary inline-flex py-3 px-8 text-sm"
                  >
                    {MAILTO}
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] mb-2 tracking-[0.2em] uppercase"
                        style={{ color: "#6b5d48" }}
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="input"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[10px] mb-2 tracking-[0.2em] uppercase"
                        style={{ color: "#6b5d48" }}
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="input"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] mb-2 tracking-[0.2em] uppercase"
                      style={{ color: "#6b5d48" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="input"
                      placeholder=""
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="concern"
                        className="block text-[10px] mb-2 tracking-[0.2em] uppercase"
                        style={{ color: "#6b5d48" }}
                      >
                        Nature of Concern
                      </label>
                      <select
                        id="concern"
                        name="concern"
                        required
                        className="input"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select…
                        </option>
                        <option value="royalty">Royalty / Production Payout</option>
                        <option value="forensic">Forensic Accounting</option>
                        <option value="tax">Tax Compliance</option>
                        <option value="trust">Will & Trust Disbursement</option>
                        <option value="security">Network / Financial Security</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="referral"
                        className="block text-[10px] mb-2 tracking-[0.2em] uppercase"
                        style={{ color: "#6b5d48" }}
                      >
                        How Did You Hear of Us?
                      </label>
                      <select
                        id="referral"
                        name="referral"
                        required
                        className="input"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select…
                        </option>
                        <option value="attorney">Attorney Referral</option>
                        <option value="cpa">CPA / Accountant</option>
                        <option value="naro">NARO Member</option>
                        <option value="peer">Peer / Family</option>
                        <option value="search">Web Search</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] mb-2 tracking-[0.2em] uppercase"
                      style={{ color: "#6b5d48" }}
                    >
                      Brief Description (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="input resize-none"
                      placeholder="The more we know, the faster we can help. Never required."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-primary w-full py-4 text-sm mt-3 disabled:opacity-50"
                  >
                    {loading ? "Sending…" : "Request Confidential Assessment"}
                  </motion.button>

                  <p
                    className="text-center text-[9px] tracking-[0.2em] uppercase mt-1"
                    style={{ color: "#4a3f30" }}
                  >
                    Protected by engagement NDA · No obligation
                  </p>
                </form>
              )}
            </div>

            {/* Trust bar below form */}
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2"
            >
              {/* REPLACED 2026-07-29. These previously read "CPA · CFF · CFE",
                  "Texas Licensed", "NARO Partner". Those are real issued credentials —
                  CPA is licensed by the Texas State Board of Public Accountancy, CFF
                  requires an active CPA, CFE is issued by the ACFE, NARO partnership is a
                  membership status. Displaying one you don't hold is a serious problem on a
                  site selling audit services, so they're out until Whitt confirms which he
                  actually has. Restore them the moment he does — they're worth having.

                  What replaced them isn't a downgrade: risk reversal and lineage
                  out-convert credential alphabet soup with this buyer, and every line
                  below is defensible. */}
              {[
                "Fourth-Generation Texas Operator",
                "Fixed Fee · Quoted Before Work Begins",
                "Confidential From First Contact",
                "Houston, Texas",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-[9px] tracking-[0.25em] uppercase"
                  style={{
                    fontFamily: "var(--font-cinzel), Cinzel, serif",
                    color: "#4a3f30",
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
