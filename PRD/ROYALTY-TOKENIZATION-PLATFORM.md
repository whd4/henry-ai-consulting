# PRD — HENRY Royalty Tokenization Platform
**Status:** Draft v1 · written 2026-05-03
**Owner:** Wm. H. Dwyer IV
**Triggers:** Build starts when first paying client signs (estimated 30–60 days from outreach launch).
**Budget:** First $25K from initial pilots funds Phase 1.

---

## Why this exists

The advisory engagement (see `sales/royalty-tokenization/`) generates revenue and validates demand. But advisory doesn't scale — every engagement is custom, every client takes 30 days of senior time. **The platform is what scales the business from $50K/quarter advisory to $500K+/quarter recurring revenue.**

The platform is a SaaS / managed offering that takes a client from "I have a royalty interest" to "I have a regulated, fractional, on-chain offering live to qualified buyers" with HENRY as the rails and operator-side advisor.

---

## Goals (in priority order)

1. **End-to-end royalty tokenization in 14 days** (advisory engagement = 30, platform = 14)
2. **Recurring revenue** via 0.5–1.5% annual platform fee on assets-under-tokenization (AUT)
3. **Defensible moat** via operator-side data ingestion and disclosure automation that fintech competitors can't replicate
4. **Compliance-first** under SEC Innovation Exemption + applicable state securities frameworks

## Non-goals (Phase 1)

- Secondary market trading — out of scope, partner with existing platforms (Securitize, INX, etc.)
- Buyer-side discovery — operator-side only at first; buyers come through partner platforms
- Non-O&G asset classes — stay focused
- DAO governance — not Phase 1; centralized custodian model first
- Decentralized custody — Phase 2; partner with Anchorage / Erebor for Phase 1

---

## Phase 1 (Weeks 1–8 after first revenue) — MVP

### User: the issuing operator / mineral owner

### Core flows

**Flow 1: Onboarding**
- Self-serve sign-up at platform.henry-consulting.com
- KYC/AML via Persona or Plaid Identity
- Asset declaration: upload lease docs, production reports, royalty statements
- Auto-extract via HENRY ingestion pipeline (the same one we use in advisory)
- HENRY scores asset quality, surfaces risk flags
- Engagement: client books a 30-min advisory call → human + automated valuation hybrid

**Flow 2: Structuring**
- Auto-draft term sheet based on asset profile
- Side-by-side comparison: 3 standard structures (yield-pass-through, NPV-fractional, hybrid)
- Tax-structure plug-in: integrates with client's CPA via shared workspace
- Client confirms structure

**Flow 3: Issuance**
- HENRY produces the disclosure package (quasi-PPM under Reg D / Innovation Exemption)
- Smart contract deployed to chain (Base mainnet — low gas, EVM-compatible, growing institutional adoption)
- Tokens minted to escrow contract
- Client signs final issuance docs

**Flow 4: Distribution**
- Distribution via partner platforms (Securitize / Backed / Centrifuge — pick 1 for Phase 1)
- HENRY does NOT sell direct to buyers — partner does, HENRY collects platform fee
- Status dashboard for client: how many tokens distributed, to whom (anonymized), at what price

**Flow 5: Servicing (the recurring revenue)**
- Royalty payments flow through smart contract
- Auto-distribution to token holders pro rata
- Quarterly disclosure: HENRY auto-generates quarterly statement (production, payouts, any material changes)
- Annual: HENRY does an asset re-audit
- **Fee: 0.5%–1.5% annual on AUT, deducted from payout flow**

### Tech stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js 15 + Tailwind | Already on it for henry-consulting; reuse |
| Backend | Python (FastAPI) + PostgreSQL | HENRY infrastructure already Python-native |
| Auth | Clerk or Auth0 | Standard, fast |
| KYC/AML | Persona | Operator-facing, lower friction than Plaid |
| Document AI | HENRY ingestion pipeline (existing) | Our moat |
| Chain | Base mainnet | Low gas, EVM-compatible, Coinbase/regulated lineage |
| Smart contracts | OpenZeppelin ERC-1155 + custom escrow | Battle-tested |
| Distribution partner | Securitize (most likely) | Established broker-dealer + tokenization rails |
| Custody | Anchorage Digital | OCC-chartered, institutional-grade |
| Banking | Erebor (when available) | Stablecoin-native, Founders Fund backing |
| Hosting | Vercel (frontend) + Railway/Fly.io (backend) | Already on Vercel for henry-consulting |
| Monitoring | Sentry + Datadog (Datadog already in your Docker) | Reuse |
| Email | Resend or Postmark | Standard |

### Data model (sketch)

```
Operator (KYC'd entity)
  ↓ has many
Asset (royalty interest / mineral right)
  ↓ has one
Tokenization (the fractional offering)
  ↓ has many
TokenHolder (KYC'd buyer)

Plus: PayoutEvent, Disclosure, AuditLog, Engagement
```

### Compliance posture (Phase 1)

- All offerings under SEC Innovation Exemption + Reg D 506(c) for accredited investors only
- Texas state securities filed where applicable
- HENRY operates as advisor + technology provider, NOT broker-dealer (partner with broker-dealer for distribution)
- All offerings pre-cleared by retained Texas O&G + securities counsel
- Audit trail on every action, immutable storage on chain + off-chain backup

### What we do NOT build in Phase 1

- Mobile app (web only)
- Secondary trading (partner-routed)
- Multi-asset tokenization (stay royalty-only)
- Buyer-side onboarding (partner-routed)
- DAO governance
- Cross-chain (Base only)

### Phase 1 success criteria

- [ ] 3 issuers fully onboarded by end of week 8 (each from converted advisory pilots)
- [ ] $5M total AUT (assets-under-tokenization)
- [ ] 1 partner distribution platform integrated and live
- [ ] $25K–$50K MRR flowing from platform fees
- [ ] First quarterly disclosure cycle completed cleanly
- [ ] Zero compliance findings from external counsel review

---

## Phase 2 (Weeks 9–24) — Scale

- Onboard partner platform #2 + #3 (multi-platform routing)
- Add Anchorage custody integration
- Add Erebor banking rails when GA
- Auto-generate quarterly disclosures end-to-end (currently human-in-the-loop)
- Operator dashboard with predictive analytics (HENRY production-decline modeling, lease-expiry alerts)
- Add 10 more issuers; cross $50M AUT
- $100K MRR target

## Phase 3 (Months 7–12) — Defense

- Buyer-side dashboard (partner-permissioned, not direct sale)
- Secondary trading via partner network
- Mineral aggregator vertical (sell platform-as-a-service to small aggregators)
- O&G operator coalition for shared tokenization standards (be the convening body)
- $250K MRR target

---

## Cost model (high-level)

**Phase 1 build cost (8 weeks):**
- 1 senior dev (could be Whitt + me + 1 contractor) — $40K–$80K depending on contractor
- Legal review (securities + Texas O&G) — $15K–$25K
- KYC vendor + custody onboarding — $5K–$10K
- Smart contract audit (mandatory before mainnet) — $20K–$40K
- Hosting + infrastructure (year 1) — $5K–$10K
- **Total Phase 1: $85K–$165K**

**Funding source:**
- First $25K–$50K from advisory pilots (months 1–2)
- Next $50K–$100K from advisory pilots #3-#5 (months 3–4)
- Phase 1 ships month 5–6
- Self-funded through advisory revenue. NO outside capital required.

**Phase 1 break-even:**
- $25K MRR × 12 months = $300K ARR
- Break-even on Phase 1 build costs: month 8–10 of platform operation

---

## Risks + mitigations

| Risk | Severity | Mitigation |
|---|---|---|
| SEC posture changes | 🔴 HIGH | Stay tightly within Innovation Exemption + Reg D 506(c). Active counsel. Build tooling that adapts to rule changes. |
| Smart contract bug → loss of funds | 🔴 HIGH | Mandatory third-party audit (CertiK, Trail of Bits). Bug bounty program. Insurance via Nexus Mutual or similar. |
| Distribution partner fails / changes terms | 🟡 MED | Multi-partner from Phase 2. Don't single-source. |
| Operator data quality issues | 🟡 MED | HENRY ingestion pipeline catches most. Manual review on every Phase 1 issuer. |
| Competitor (NYC fintech) builds same thing faster | 🟡 MED | Operator-side moat is real; relationship moat is deeper. They have to acquire Houston operator network we already have. |
| Regulatory / state action | 🟡 MED | Texas-only at launch. Expand to other states only after first 3 deals close cleanly. |
| Funding gap (advisory revenue slower than expected) | 🟡 MED | Phase 1 is intentionally tied to advisory revenue. If advisory stalls, platform delays — no debt taken. |

---

## What needs to be true for this PRD to advance

1. **First advisory pilot closed** — proves demand at $5–25K price point
2. **First advisory pilot delivered cleanly** — proves we can execute the 30-day cycle
3. **At least 1 of those clients ASKS about an ongoing platform option** — proves recurring revenue thesis
4. **Texas O&G + securities counsel retained** — needed before any platform code touches mainnet

When all 4 are true: kick off Phase 1 build. Estimated: 60–90 days from outreach launch.

---

## How I (Claude) help across the lifecycle

**Pre-platform (now → first revenue):**
- Sales engine (already built)
- Engagement delivery support (templates + per-client AI assistance)
- Lead pipeline management (target list + outreach automation via Hermes)

**Phase 1 build:**
- Architect the system (Code Builder agent)
- Write the smart contracts + tests (with mandatory human + auditor review)
- Build the frontend (Next.js, reuse henry-consulting design language)
- Write the disclosure package generation pipeline
- QA + integration

**Phase 1 operations:**
- Per-client engagement folder management
- Auto-draft quarterly disclosures (human review before send)
- Operator-side data ingestion and validation
- Audit trail generation

**Phase 2+:**
- Whatever scaling pain emerges, I build the tooling for it.

---

*This PRD lives at `~/Development/henry-consulting/PRD/ROYALTY-TOKENIZATION-PLATFORM.md`. Re-read before any platform-related work.*
