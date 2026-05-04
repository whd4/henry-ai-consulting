# 30-Day Delivery Playbook

**For:** Whitt — when first paying client signs.
**Use:** treat as a checklist. Tick boxes daily. Adapt timing to the actual client.

This is what you do once a pilot is signed and 50% paid. Below is the day-by-day plan.

---

## Pre-engagement (the hour the engagement is signed)

- [ ] Send signed proposal back to client (countersigned PDF)
- [ ] Send invoice for 50% deposit (Stripe link or wire instructions)
- [ ] Send NDA countersigned PDF
- [ ] Send a "what to expect" email with the Week-1 intake list (see template below)
- [ ] Block a 60-minute kickoff slot in the next 5 business days (suggest 3 specific times)
- [ ] Tell me (Claude) the client name + scope — I'll spin up a working folder structure + brief template

**Working folder structure I'll create:**
```
~/Development/henry-consulting/clients/[client-slug]/
├── 00-engagement/    (signed proposal, NDA, invoice)
├── 01-intake/        (their docs — production reports, leases, etc.)
├── 02-valuation/     (your work — NPV models, risk flags)
├── 03-platforms/     (mapping, term sheet, platform notes)
├── 04-deliverable/   (final brief, recommendation memo)
└── 05-comms/         (email log, call recordings, meeting notes)
```

---

## WEEK 1 — Intake + initial valuation

### Day 1 (kickoff day)
- [ ] 60-minute kickoff call (in person if possible, Teams if not)
- [ ] On the call: confirm scope, confirm timeline, confirm primary contact, confirm CPA contact
- [ ] On the call: walk through what data you need (use the intake checklist below)
- [ ] **End of call**: "I'll send the data request in writing within 2 hours, with deadlines per item."
- [ ] Within 2 hours: send the data request email (template below)

### Day 2–3
- [ ] Receive client data (production reports, leases, royalty statements)
- [ ] Acknowledge receipt within 1 hour of each item
- [ ] Begin NPV valuation per interest (use HENRY models — I'll walk you through if you've never done this in HENRY)
- [ ] First-pass risk flag scan: lease integrity, operator concerns, regulatory exposure

### Day 4–5
- [ ] Complete NPV valuation worksheet (Excel)
- [ ] Complete first-pass risk flag report
- [ ] Send "Week 1 wrap" email to client: short summary + preview of Week 2 plan
- [ ] Schedule Week 2 sync call (60 min, mid-week)

**Week 1 deliverable:** NPV worksheet + risk flag report. Internal only — these inform Week 2.

---

## WEEK 2 — Platform mapping + structure design

### Day 6–7
- [ ] Map viable tokenization platforms for THIS client's interests (size + asset class fit):
  - **Ondo Finance** — institutional-grade, treasury & RWA, higher minimum
  - **Securitize** — flexible, broker-dealer integration, mid-market fit
  - **Centrifuge** — DeFi-native, smaller deals, faster
  - **Backed** — newer, more experimental
  - **Custom rails via Erebor Bank or Anchorage** — for the largest interests, white-glove
- [ ] For each: contact name, recent oil & gas deals (if any), pricing model, minimum deal size, regulatory positioning

### Day 8 (mid-week sync call)
- [ ] 60-minute sync call with client
- [ ] Walk through NPV findings + risk flags
- [ ] Walk through platform map
- [ ] Get client's gut reaction: which platforms feel right?
- [ ] Confirm: which 2 should we broker conversations with in Week 3?

### Day 9–10
- [ ] Draft term sheet for proposed fractional offering (Word doc)
  - Number of tokens / fractions
  - Price per fraction
  - Distribution mechanism (royalty payment flow)
  - Holder rights (voting? pro-rata? data access?)
  - Buyback provisions
  - Lock-up periods
- [ ] Coordinate with client's CPA — initial tax structure call (30 min)

**Week 2 deliverable:** draft term sheet + platform comparison matrix.

---

## WEEK 3 — Platform brokering

### Day 11–12
- [ ] Reach out to 2 selected platforms
- [ ] Use the Variant C cold-email template adapted for this specific deal
- [ ] Aim for two 45-minute introductory calls with the platforms in Week 3

### Day 13–15
- [ ] Run platform call #1 with client present
  - You drive the agenda
  - Platform pitches; you ask the operator-side questions
  - Client listens, asks their own questions
- [ ] Run platform call #2 with client present
- [ ] Document each call: what they said, what they offered, follow-up actions

**Week 3 deliverable:** structured comparison of the 2 platforms based on real conversations.

---

## WEEK 4 — Final brief + recommendation

### Day 16–18
- [ ] Write the Tokenization Readiness Brief (15–20 pages)
  - Section 1: Executive summary (1 page)
  - Section 2: Asset profile (per-interest detail)
  - Section 3: Valuation (NPV with assumptions)
  - Section 4: Regulatory positioning (Innovation Exemption fit)
  - Section 5: Platform analysis (the 2 you brokered)
  - Section 6: Term sheet
  - Section 7: Recommendation with confidence score
  - Section 8: Risks + mitigations
  - Section 9: Next steps if proceeding
  - Section 10: Appendices (data, models, contacts)

### Day 19
- [ ] Internal QA pass (let me — Claude — review the brief; I'll catch holes)
- [ ] Convert to PDF
- [ ] Send to client 24 hours before final call so they have time to read

### Day 20
- [ ] 60-minute final recommendation call (in person preferred)
- [ ] Walk through the brief
- [ ] Final recommendation: tokenize / wait / sell whole — with confidence score
- [ ] Discuss: if tokenize, what's the next 90-day execution plan?
- [ ] Discuss: if wait, what triggers a re-evaluation?
- [ ] Discuss: if sell whole, who are the buyers?

### Day 21
- [ ] Send invoice for 50% balance
- [ ] Send all deliverables in a transfer folder (Dropbox / Google Drive / encrypted USB)
- [ ] Send "engagement closeout" email — 30-day post-delivery support clock starts
- [ ] Ask for written testimonial / case study permission

**Week 4 deliverable:** final brief + recommendation + signed engagement closeout.

---

## Day 22–30 — Closeout + next-action

- [ ] Confirm 50% balance received
- [ ] Within 7 days of close: ask for referral. Specific ask: "Who do you know in your network with a similar situation?"
- [ ] Update the henry-consulting site with anonymized case study (with client permission)
- [ ] Internal: log lessons learned, update templates, refine the process for client #2

---

## Templates inside this template

### Template — Data request email (send within 2 hours of kickoff)

> **Subject:** [Client Name] · Royalty Tokenization Engagement · Week 1 data request
>
> Hi [First name],
>
> Following up on our kickoff. To complete Week 1 valuation, I need the following items by [date 5 business days out]. Each can be PDF, Excel, or scanned image — whatever you have on hand.
>
> 1. Production reports for last 12 months per interest
> 2. Lease documents (most recent versions, including any amendments)
> 3. Royalty statements for last 12 months
> 4. Decimal interest summary per well (if you have a working spreadsheet, that's perfect)
> 5. Operator names + contacts per well (so I can verify status with RRC)
> 6. Any prior valuations or buyer offers (last 3 years)
> 7. Your CPA's name + contact (I'll coordinate the tax-structure call directly)
>
> All documents will be handled under our signed NDA. I use a secure transfer folder — link below.
>
> Secure transfer link: [Dropbox / Google Drive folder link, with edit access]
>
> Questions on any of the above, just reply.
>
> Whitt

### Template — Week 1 wrap email (send Day 5)

> **Subject:** [Client Name] · Week 1 wrap + Week 2 plan
>
> Hi [First name],
>
> Quick update.
>
> **Week 1 done:**
> - NPV valuation completed for all [N] interests. Range: $[low]–$[high] per interest.
> - First-pass risk flag scan: [N] items requiring discussion (none deal-breaking).
>
> **Week 2 plan:**
> - I'm mapping 3–5 viable tokenization platforms against your specific interests.
> - Drafting the term sheet for the proposed fractional offering.
> - I'll coordinate with [CPA name] on tax structure mid-week.
>
> Mid-week sync: I'd like 60 minutes [day, time options]. Pick one.
>
> Whitt

### Template — Engagement closeout email (Day 21)

> **Subject:** [Client Name] · Engagement Closeout · Final Brief Delivered
>
> Hi [First name],
>
> Final brief and all deliverables transferred to [folder link]. Highlights:
>
> - **Recommendation:** [tokenize / wait / sell] with [N]% confidence
> - **Suggested platform:** [name] based on [reason]
> - **Estimated capital available:** $[amount] from [N]% fractional offering
> - **Next 90 days:** [3 bullet roadmap if proceeding]
>
> 50% balance invoice attached. Net 7 terms.
>
> 30-day post-delivery support clock starts today — questions, coordination with platforms, or follow-up analysis included at no charge through [date].
>
> One ask: if this engagement met or exceeded expectations, would you be open to a brief written testimonial I can use (with your approval and any redactions)? And — who in your network is in a similar position?
>
> Thank you for trusting me with this.
>
> Whitt

---

## What I (Claude) do alongside you in the engagement

When you tell me "starting engagement with [client]", I will:
- Spin up the working folder structure
- Generate the NPV calculation workbook (you fill in production data)
- Draft each weekly email for your review (you edit + send)
- Build the platform comparison matrix as you bring back call notes
- Draft each section of the final brief as we go (you bring the operator judgment, I bring the structuring + writing speed)
- QA the brief before delivery
- Track the entire engagement in a per-client log

**You do the human work** (calls, judgment calls, relationships).
**I do the structuring, writing, and tracking work.**

Together = 30-day delivery instead of 60.
