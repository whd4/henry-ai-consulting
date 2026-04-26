# CrudeToken / TankPass — Product Research Brief

**Date:** 2026-04-24
**Origin:** Whitt's voice idea — traveling digital identification for oil/water haul cargo, validated at origin + transit + destination, on a chain so discrepancies are auto-flagged
**Status:** Research complete · Provisional patent recommended · Pilot candidates identified

---

## TL;DR

Your idea is **genuinely under-built**. Existing blockchain-in-O&G solutions (VAKT, Komgo, PermianChain) cover trading/finance. Existing cargo-tracking solutions (Overhaul SecureBOL, HaulerHub eBOL) are generic, not oilfield-specific. **No incumbent owns the physical-haul + chain-of-custody + RRC-compliant + uses-existing-equipment intersection.**

Market signal:
- $52B/yr global shipping fraud (1/4 from BOL tampering)
- Crude haul theft: $150K–$2M per operator per month (per intel)
- March 2026 OK case: drivers charged with oilfield larceny → criminal precedent exists

---

## Existing players + gap analysis

| EXISTING | WHAT THEY DO | WHY THEY DON'T FIT |
|---|---|---|
| VAKT (BP/Shell-backed) | Post-trade settlement on blockchain, reduces paper in oil-trading finance | Trading layer only — doesn't touch the physical truck |
| Komgo | Geneva trade-finance platform, digital letters of credit | Same as VAKT — finance, not physical |
| PermianChain | Tokenizes undeveloped O&G resources for trading | Trades the asset, not the physical haul |
| Overhaul SecureBOL | Tamper-evident QR on paper BOL, scan at delivery | Generic cargo, no crude-oil specific logic (volume, water cut, gauging) |
| HaulerHub eBOL | Electronic BOL for general trucking with crypto signing | No oilfield workflow + no chain-of-custody for theft |
| Texas RRC Form P-18 | Monthly skim oil/condensate reporting to regulator | Compliance-only, not real-time anti-theft |
| Tank-farm cameras (Pelco, Gato) | Physical surveillance at origin/destination | Watches stationary tank, NOT the haul |

---

## The product — 3-stage chain-of-custody token

```
STAGE 1 — ORIGIN (lease tank battery)
─────────────────────────────────────
Pumper opens app → scans tank battery QR (one-time install per site)
→ enters: volume gauged · water cut % · API gravity · BS&W
→ app mints token (NFT-style) with cargo metadata + timestamp + GPS
→ token signed by pumper's biometric/PIN
                  │
                  ▼ token attached to truck via QR sticker on cab
                  │
STAGE 2 — TRANSIT (truck on road)
─────────────────────────────────
Truck telematics (existing fleet GPS) reports position every 5 min
→ token tracks deviations from declared route
→ unauthorized stops > 15 min flag for review
→ token immutable on chain — can't be edited mid-haul
                  │
                  ▼
STAGE 3 — DESTINATION (disposal well / refinery / terminal)
──────────────────────────────────────────────────────────
Receiver gauges incoming cargo
→ enters: volume received · water cut · API gravity
→ app cross-checks vs token's origin data
→ variance > X% (default 2%) → AUTO-FLAG to operator + (optional) RRC
→ if clean, token closes, settlement triggered
```

On-chain audit trail (likely Hyperledger Fabric — private chain, oilfield doesn't need pseudonymity):
- Every event hashed + timestamped
- Disputes resolved by reading the chain (not arguing paper BOLs)
- Insurance + regulator + counterparty all see same truth

---

## Why this beats every existing player

| | Existing | CrudeToken |
|---|---|---|
| Coverage | Origin OR destination | End-to-end (origin + transit + destination) |
| Equipment needed | New cameras, sensors, hardware | **Zero new hardware** — existing gauges + phone + truck GPS |
| Data captured | Volume only | Volume + water cut + API gravity + GPS + biometric |
| Compliance | Requires separate filing | **Auto-generates RRC P-18 + state filings** |
| Industry fit | Generic | **Oilfield-native** |
| Price point | $1K–10K/mo enterprise | **$200/mo per truck** — accessible to 8-truck haulers |

---

## The wedge (Garry Tan's "narrowest specific desperate" rule)

```
WEDGE 1 (start here)
────────────────────
Permian saltwater haulers (frac flowback + produced water)
  • ~$3B/yr Texas market
  • Theft = misclassified loads (high-API as low-API for cheaper disposal)
  • 200+ small/mid haulers in West Texas, no incumbent
  • Pain: operators get audited and can't prove what they hauled
  • Pilot target: 3 mid-size haulers (8–30 trucks) in Midland/Odessa

WEDGE 2 (expand to)
────────────────────
Crude lease haulers (oil from lease tank → terminal/refinery)
  • Bigger $$ per load (~$50K vs $850 water)
  • Higher theft incentive
  • More regulatory pressure (RRC + CBP for cross-state)

WEDGE 3 (later)
────────────────────
Midstream gathering verification
NGL trucking
LNG specialty haul
```

---

## TAM math (sanity check, conservative)

```
US oil/water haul trucks:           ~50,000
$200/mo × 50,000 trucks =            $120M ARR ceiling US trucking alone
Plus: Mexico cross-border, Canada Bakken, Mideast opt-in
Plus: aggregated theft-pattern data resale to insurers, refiners
Plausible 5-yr ARR:                  $500M – $1B
```

---

## Garry-playbook fit check

```
✅ DESPERATE SPECIFICITY: Permian operators bleeding $1M+/mo to theft
✅ STATUS QUO IS BAD:    Paper BOLs that get forged
✅ NARROWEST WEDGE:      Saltwater haulers in 1 county = 30 customers in 30 days
✅ OBSERVATION:          Whitt has watched the actual paper-BOL workflow
✅ FUTURE-FIT:           Once trust established, expand to all hydrocarbons
                          + cross-border (US/Mexico crude haul = huge market)
✅ SEARCH BEFORE:        VAKT/Overhaul/HaulerHub all looked at this space and
                          built the wrong thing — confirms the gap
✅ BOIL THE LAKE:        AI + blockchain make complete custody chain affordable
                          — what used to need $50K/site now needs an app
```

---

## Recommended next steps

```
1. PROVISIONAL PATENT (this week)
   File a $300 USPTO provisional now — locks in priority date.
   Whitt drafts the claims based on this brief, or HENRY drafts.

2. TALK TO 3 PERMIAN HAULERS (next 2 weeks)
   Use existing oil-services contacts.
   Ask: "If I gave you a $200/mo app that proved every load you hauled
   was clean, would you pay for it?"
   If 2 of 3 say yes → move to MVP.

3. MVP BUILD (3 weeks)
   Mobile app (React Native) + Hyperledger Fabric chain
   Integrate w/ Samsara / Geotab GPS (existing fleet telematics)

4. PILOT (60 days, free)
   Run free pilot with 3 haulers, 30 days each.
   Prove: catch ≥1 theft event OR demonstrate ≥$5K savings/truck/mo.

5. PRICING + LAUNCH
   $200/truck/mo · 12-mo contract · 14-day free trial
   First 100 customers: founding member rate ($150/truck)
```

---

## Risks + open questions

```
❓ Patent: needs novelty search — is the 3-stage gauge-cross-check method
   covered by anyone's existing IP? (Hire a patent search firm, ~$1.5K)

❓ Regulatory acceptance: will Texas RRC accept on-chain audit trail as
   compliant submission? (Schedule informal meeting with RRC tech committee)

❓ Hauler adoption: drivers historically resist apps (saw this in your
   small-prospect intake example). Need a 5-second app — phone scan, done.

❓ Insurance partnership: if insurers DISCOUNT premiums for CrudeToken-
   verified loads, that's a forcing function for haulers to adopt.
   Aggressively pursue this from day 1.

❓ Cyber threat surface: chain validators must be hardened — single
   compromised origin pumper = poisoned chain. Use multi-sig (origin +
   trucking dispatcher both sign).
```

---

## Sources (research conducted 2026-04-24)

- Texas RRC Summary of Requirements: https://www.rrc.texas.gov/oil-and-gas/requirements-and-responsibilities/summary-of-requirements/
- RRC Form P-18 Instructions: https://www.rrc.texas.gov/media/2qydjm0d/p-18-instructions-02-2023_updated.pdf
- VAKT Blockchain Oil Trading: https://www.vakt.com/
- Komgo Trade Finance: https://www.ledgerinsights.com/oil-blockchain-vakt-launching/
- Overhaul SecureBOL Launch: https://www.prnewswire.com/news-releases/overhaul-launches-securebol-to-verify-bills-of-lading-and-detect-shipping-fraud-302681691.html
- HaulerHub Smart BOL: https://haulerhub.com/blog/smart-bol-for-cargo-theft-prevention-how-electronic-bill-of-lading-systems-reduce-risk-across-your-supply-chain
- Cargo Theft 2026 Tech: https://contguard.com/cargo-theft-2026-technology-problem/
- OK Oilfield Theft Charges (March 2026): https://cdllife.com/2026/contract-employee-and-truck-driver-charged-with-theft-of-oilfield-equipment-in-oklahoma/
- Tive Cargo Security: https://www.tive.com/blog/cargo-security-basics-how-to-protect-shipments-from-theft-and-tampering
- Blockchain in O&G Market 2025-2034: https://www.gminsights.com/industry-analysis/blockchain-in-oil-and-gas-market

---

**Status:** Brief complete. Ready for patent draft + first hauler conversations.
