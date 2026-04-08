"use client";

import { useState } from "react";

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
          subject: "New Inquiry — Henry AI Consulting",
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
    <section id="contact" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal text-center mb-14">
          <p className="label mb-4">Get Started</p>
          <h2 className="heading-lg mb-4">
            Book a free <span className="gradient-text">strategy call.</span>
          </h2>
          <p className="body-md">
            30-minute call. No obligation. No sales pitch.
            Just a situation assessment and honest recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="reveal reveal-delay-1 card p-8 md:p-10">
            <h3 className="heading-md mb-6">Send a message</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="heading-md mb-2">Message received.</h3>
                <p className="body-md">
                  We&apos;ll reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-muted mb-2 tracking-widest font-mono uppercase">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required className="input" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-muted mb-2 tracking-widest font-mono uppercase">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className="input" placeholder="you@company.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs text-muted mb-2 tracking-widest font-mono uppercase">
                    Organization
                  </label>
                  <input id="company" name="company" type="text" className="input" placeholder="Company name" />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs text-muted mb-2 tracking-widest font-mono uppercase">
                    Budget Range
                  </label>
                  <select id="budget" name="budget" className="input">
                    <option value="5k-25k">$5K – $25K</option>
                    <option value="25k-75k">$25K – $75K</option>
                    <option value="75k+">$75K+</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-muted mb-2 tracking-widest font-mono uppercase">
                    What are you trying to solve?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input resize-none"
                    placeholder="Describe your current challenge..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-base mt-2 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Get Free Strategy Call"}
                  {!loading && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Calendly Embed */}
          <div className="reveal reveal-delay-2 card p-8 md:p-10 flex flex-col">
            <h3 className="heading-md mb-6">Or book directly</h3>
            <p className="body-md mb-6">
              Pick a time that works for you. 30-minute discovery call.
            </p>
            <div className="flex-1 min-h-[400px] rounded-xl overflow-hidden bg-white/[0.02] flex items-center justify-center">
              {/* Replace YOUR_USERNAME with your Calendly username */}
              <div
                className="calendly-inline-widget w-full h-full"
                data-url="https://calendly.com/YOUR_USERNAME/discovery?hide_gdpr_banner=1&primary_color=2563eb&background_color=0a0a0f&text_color=f0f0f3"
                style={{ minWidth: "280px", minHeight: "400px" }}
              />
              <script src="https://assets.calendly.com/assets/external/widget.js" async />
            </div>
          </div>
        </div>

        <p className="reveal text-center text-xs text-muted mt-8">
          Direct line:{" "}
          <span className="text-zinc-400">command@henryai.com</span>
        </p>
      </div>
    </section>
  );
}
