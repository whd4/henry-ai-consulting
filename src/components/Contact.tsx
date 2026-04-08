"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h2>
          <p className="text-zinc-400">
            Book a free 30-minute discovery call or send us a message.
            No commitment, no sales pitch.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">&#10003;</div>
              <h3 className="text-xl font-semibold mb-2">Message Received</h3>
              <p className="text-zinc-400">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                // For now, log to console. Will wire to API endpoint.
                console.log(Object.fromEntries(data));
                setSubmitted(true);
              }}
              className="flex flex-col gap-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-zinc-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-zinc-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm text-zinc-400 mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm text-zinc-400 mb-2"
                >
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent/50 transition-colors"
                >
                  <option value="assessment">AI Readiness Assessment</option>
                  <option value="automation">Workflow Automation</option>
                  <option value="agents">Agent Deployment</option>
                  <option value="retainer">Ongoing Optimization</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-zinc-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="Tell us about your operations and what you're looking to improve..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold text-lg transition-colors"
              >
                Send Message
              </button>

              <p className="text-xs text-zinc-500 text-center">
                Or email us directly at{" "}
                <span className="text-zinc-400">hello@henryai.com</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
