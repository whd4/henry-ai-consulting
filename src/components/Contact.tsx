"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="section-divider mb-28 md:mb-40" />

      <div className="mx-auto max-w-2xl px-6">
        <div className="reveal text-center mb-14">
          <p className="label mb-4">Contact</p>
          <h2 className="heading-lg mb-4">
            Let&apos;s <span className="gradient-text">talk.</span>
          </h2>
          <p className="body-md">
            Free 30-minute discovery call. No commitment, no sales pitch.
          </p>
        </div>

        <div className="reveal reveal-delay-1 card p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="heading-md mb-2">Message received.</h3>
              <p className="body-md">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs text-muted mb-2 tracking-wide uppercase">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required className="input" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-muted mb-2 tracking-wide uppercase">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className="input" placeholder="you@company.com" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs text-muted mb-2 tracking-wide uppercase">
                  Company
                </label>
                <input id="company" name="company" type="text" className="input" placeholder="Company name" />
              </div>

              <div>
                <label htmlFor="interest" className="block text-xs text-muted mb-2 tracking-wide uppercase">
                  Interest
                </label>
                <select id="interest" name="interest" className="input">
                  <option value="assessment">AI Readiness Assessment</option>
                  <option value="automation">Workflow Automation</option>
                  <option value="agents">Agent Deployment</option>
                  <option value="retainer">Ongoing Optimization</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-muted mb-2 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input resize-none"
                  placeholder="Tell us about your operations..."
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-base mt-2">
                Send Message
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          )}
        </div>

        <p className="reveal text-center text-xs text-muted mt-8">
          Or reach us at{" "}
          <span className="text-zinc-400">hello@henryai.com</span>
        </p>
      </div>
    </section>
  );
}
