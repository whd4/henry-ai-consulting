# HENRY AI — Discovery Examples

**For prospects who want to know "what should I send you?"**

Pick the example below closest to your size. Use it as a template — change the names, swap your real numbers, send back. Or just send what you have in any format and we'll structure it. We'll generate the diagrams. You provide the inputs.

---

## SMALL — 5 to 25 employees · $1M – $10M revenue

**Example persona:** Permian frac-water hauling company · 8 trucks · 12 employees · ~$3M revenue

### 1. Current-state flow

```
Customer call comes in (operator's procurement)
   ↓
Dispatcher checks truck availability on whiteboard
   ↓
Dispatcher texts driver assignment
   ↓
Driver picks up at frac site, hauls to disposal well
   ↓
Driver writes down ticket number on paper, drops at office EOD
   ↓
Office manager enters ticket into QuickBooks (next day)
   ↓
Bookkeeper invoices customer (weekly, on Fridays)
   ↓
Customer pays Net 60
```

**Where it stalls:**
- Whiteboard truck status — overbookings happen 2-3x/month
- Paper tickets get lost (~5% never get billed)
- Bookkeeper waits until Friday, customers wait 60+ days to pay

### 2. Org map

```
Owner / Operator (1)
├── Dispatcher / Office Manager (1, also handles AP/AR)
├── Drivers (8 — split across 12-hr day/night shifts)
└── Bookkeeper (1, contractor, 10 hrs/week)
```

### 3. Three top repetitive tasks

| Team | Task | Hours/week | Current tool |
|---|---|---|---|
| Office | Manual ticket entry from paper | 15 hrs | QuickBooks Desktop |
| Office | Cross-checking dispatch vs invoiced loads | 6 hrs | Excel |
| Owner | Calling customers about late payments | 4 hrs | phone, email, gut |

### 4. Money flow

**Revenue (in):**
- Top 5 customers: 4 operators (Pioneer, Diamondback, ConocoPhillips, EOG) + 1 saltwater disposal field
- Avg deal: $850/load · ~120 loads/week · ~$3.0M annual

**Cost (out):**
- Driver wages + benefits: $1.4M (47%)
- Truck fuel + maintenance: $620K (21%)
- Insurance: $180K (6%)
- Office + bookkeeping + software: $90K (3%)
- Net margin: ~$700K/yr (~23%)

### 5. Sacred cows + blockers

**Can't change:**
- Owner does final approval on every invoice (trust issue with bookkeeper)
- DOT compliance logs must be kept on paper as legal backup

**Past blockers:**
- Tried a $400/mo fleet GPS app in 2024 — drivers wouldn't use it
- Vendor lock with QuickBooks Desktop — moving off is a 6-month project

**HENRY recommendation for this profile:**
> Engagement: **AI Audit ($15K)** + **Sprint ($45K)**
> Highest-ROI agent: AR-Chaser (handles late payment outreach, replaces 4 hrs/wk owner time, recovers ~$60K/yr in faster collections). Dispatch-Optimizer is the second pick. Total payback < 90 days.

---

## MEDIUM — 25 to 150 employees · $10M – $100M revenue

**Example persona:** Independent E&P operator in Eagle Ford · 180 producing wells · 45 employees · ~$35M revenue

### 1. Current-state flow

```
LANDMAN identifies new lease → Title search (outsourced to title co)
   ↓
RESERVOIR ENG models well economics → presents to CEO for AFE approval
   ↓
DRILLING dept hires contractor, drills + completes well (~$5M / well)
   ↓
PRODUCTION dept monitors via SCADA (1 engineer per 60 wells)
   ↓
FIELD techs handle daily checks, paper logbooks at well sites
   ↓
ACCOUNTING runs JIB statements monthly (revenue-distrib to royalty owners)
   ↓
LAND dept files division orders, manages 1,200 active royalty owners
   ↓
HSE / COMPLIANCE files quarterly + annual reports w/ Texas RRC + EPA
```

**Where it stalls:**
- Title search → AFE: 3-6 weeks (outside legal bottleneck)
- SCADA alerts produce 200+ false positives/day, real issues missed
- Royalty owner inquiries: 30+ phone calls/week, no central log
- Compliance reports: 80 hrs/quarter manual data assembly

### 2. Org map

```
CEO + CFO (2)
├── VP Operations
│   ├── Drilling Manager (+ 4 staff)
│   ├── Production Manager (+ 3 reservoir engineers)
│   └── Field Superintendent (+ 18 field techs)
├── VP Land
│   ├── Land Manager (+ 4 landmen)
│   └── Division Order Analyst (+ 2)
├── Controller
│   ├── Sr Accountant (JIB) (+ 2 staff accountants)
│   ├── AP/AR specialist (1)
│   └── Royalty owner relations (1)
└── HSE/Compliance Manager (+ 1 specialist)
```

### 3. Three top repetitive tasks

| Team | Task | Hours/week | Current tool |
|---|---|---|---|
| Production | Triage SCADA alerts (mostly false positives) | 50 hrs across team | Wonderware + Excel |
| Land | Royalty owner inquiries (where's my check?) | 25 hrs | Phone + paper file |
| Compliance | Aggregating production data for RRC/EPA filings | 80 hrs / quarter | Excel + WolfePak |
| Accounting | JIB statement prep + reconciliation | 45 hrs / month | WolfePak + Excel |

### 4. Money flow

**Revenue (in):**
- Net oil + gas + NGL sales: ~$33M/yr (split 70/20/10)
- Marketed via 2 midstream partners
- Hedged ~60% of production 18 months out

**Cost (out):**
- LOE (lease operating expense): $9M (27%) — labor + chemicals + power
- G&A: $4.2M (13%) — mostly staff salaries
- Capex (drilling/completion): $14M (40%)
- Severance + ad valorem tax: $2.6M (8%)
- Net margin: ~$3M (~9%) — typical for current price deck

### 5. Sacred cows + blockers

**Can't change:**
- All AFE approvals require CEO physical signature (board mandate)
- WolfePak ERP is the system of record (5-year contract, 2 yrs left)
- Field techs must do physical well rounds daily (insurance requirement)

**Past blockers:**
- Tried OspreyData ML alarms in 2024 — production team distrusted black-box, abandoned after 4 months
- Reservoir team uses SAS for forecasting — won't move to Python

**HENRY recommendation for this profile:**
> Engagement: **Transformation ($150K, 90-day)** + **Retainer ($25K/mo)**
> Highest-ROI agents:
> 1. SCADA-Triage (filters 200 alerts/day → 5 actionable, saves 30 hrs/wk production time, catches 2-3 missed events/yr worth $400K+)
> 2. Royalty-Concierge (auto-answers 80% of "where's my check?" calls, frees 20 hrs/wk land team)
> 3. Compliance-Filer (automates RRC/EPA report assembly, 80 hrs/quarter → 6 hrs)
> Combined: 130 hrs/wk freed = ~3.5 FTE equivalent. Payback < 6 months.

---

## LARGE — 150 to 1,000+ employees · $100M – $1B+ revenue

**Example persona:** Regional midstream company · gathering + processing + storage · 6 states · 600 employees · ~$420M revenue

### 1. Current-state flow

```
COMMERCIAL TEAM contracts with producers (gathering agreements, 5-15 yr)
   ↓
ENGINEERING designs gathering line + processing + connecting interstate pipeline
   ↓
LANDS / R-O-W dept secures right-of-way (avg 8 months per project)
   ↓
CONSTRUCTION builds (in-house crews + contractors)
   ↓
OPERATIONS runs the asset:
   ├── Field Ops (190 techs across 6 states, on-call rotations)
   ├── Control Center (24/7 SCADA, 3 ops per shift, 18 ops total)
   ├── Measurement (custody transfer, 12 staff)
   └── Maintenance (planned + reactive, 90 staff)
   ↓
COMMERCIAL settles monthly volumes with shippers (200+ counterparties)
   ↓
ACCOUNTING revenue accounting + JIB-equiv (state royalty calcs)
   ↓
COMPLIANCE: PHMSA + state PUC + DOT + EPA + 3 SCADA-related cyber rules
```

**Where it stalls:**
- R-O-W acquisition: 8-month avg, project IRR sensitive to slippage
- Control Center alarm flood: 800+ alarms/shift, ops fatigued
- Settlements: monthly close takes 14 days, shipper disputes ~$2M/mo in question
- Cyber compliance (TSA security directives): 200+ controls tracked manually
- Capex governance: 40+ active projects tracked across 6 spreadsheets

### 2. Org map

```
CEO
├── CFO
│   ├── Controller (+ 12 accounting staff)
│   ├── Treasurer (+ 4 staff)
│   └── FP&A (+ 6 staff)
├── COO
│   ├── VP Operations (190 field + 18 control center + 12 measurement + 90 maint)
│   ├── VP Engineering (40 staff)
│   ├── VP HSE (+ 25 staff)
│   └── VP Procurement (+ 22 staff)
├── Chief Commercial Officer
│   ├── Marketing (+ 18 staff)
│   ├── Settlements (+ 14 staff)
│   └── Business Development (+ 12 staff)
├── General Counsel
│   ├── Lands / R-O-W (+ 28 staff)
│   ├── Regulatory (+ 8 staff)
│   └── Litigation (+ 4 staff)
├── CIO / CISO
│   ├── IT (+ 24 staff)
│   ├── OT / Control Systems (+ 12 staff)
│   └── Cyber (+ 6 staff)
└── CHRO (+ 18 staff across HR + benefits + payroll)
```

### 3. Three top repetitive tasks

| Team | Task | Hours/week | Current tool |
|---|---|---|---|
| Control Center | Alarm triage (800+/shift, mostly noise) | 380 hrs across 18 ops | OSI Soft PI + custom dashboards |
| Settlements | Volume reconciliation w/ 200+ counterparties | 220 hrs | Quorum + Excel |
| Lands / R-O-W | Title research + landowner correspondence | 180 hrs | Custom CRM + Word |
| Cyber Compliance | TSA SD evidence collection + report writing | 60 hrs/wk | SharePoint + manual |
| FP&A | Capex project status + variance | 80 hrs/wk | Excel + 12 PM tools |
| Procurement | RFP cycles for $30M+/yr in maint contracts | 90 hrs/wk | Coupa + email |

### 4. Money flow

**Revenue (in):**
- Gathering fees: $240M (57%) — fee-based, MVCs in place
- Processing margins (frac spread + NGL): $110M (26%)
- Storage + transport tariffs: $55M (13%)
- Other (interruptible, parking, lending): $15M (4%)

**Cost (out):**
- Operating costs: $190M (45%) — 60% labor, 25% power, 15% chemicals/supplies
- G&A: $42M (10%)
- Capex: $80M growth + $35M maintenance = $115M
- Interest + tax: $48M (11%)
- Net income: ~$25M (~6%)

### 5. Sacred cows + blockers

**Can't change:**
- Board approves any single Capex item > $5M (slows mid-size projects)
- TSA cybersecurity directives mandate human-in-the-loop for all OT control changes (no autonomous remediation)
- Quorum (settlements ERP) is corporate standard — no replacing
- Union (in 2 of 6 states) controls field tech work rules — automation that "replaces" people is politically toxic

**Past blockers:**
- $4M alarm-management consulting engagement in 2023 reduced alarm count 30% but ops still report fatigue — data not flowing to right humans
- AI vendor RFP in 2024 — every responder pitched generic LLM wrappers, none understood midstream operations. Procurement froze the cycle.
- Internal "data lake" project — 18 months in, $12M spent, only 30% adoption

**HENRY recommendation for this profile:**
> Engagement: **Transformation ($350K, 6-month)** + **Retainer ($60K/mo)** + **Embedded co-build with internal IT**
> Highest-ROI agents (deploy 9-operator HENRY suite tailored):
> 1. Alarm-Sage (filters 800/shift → 40 actionable, learns per-asset patterns) — saves 200 hrs/wk control center, prevents 1-2 incidents/yr worth $5M+
> 2. Settlements-Reconciler (auto-matches volume + price by counterparty, flags only true disputes) — saves 150 hrs/wk, recovers $400K+/yr in dispute leakage
> 3. R-O-W-Researcher (auto-pulls title + land records + correspondence templates) — cuts R-O-W cycle from 8 mo → 5 mo, accelerates project IRR by 200-400 bps
> 4. Cyber-Evidence (auto-collects TSA SD evidence from existing systems) — saves 50 hrs/wk
> 5. Capex-Tracker (single source of truth for 40 active projects, predicts overruns) — recovers $3M+/yr in slippage
>
> Combined: ~600 hrs/wk freed = ~15 FTE equivalent without layoffs (re-deploys to higher-value work). Payback < 9 months on $620K/yr engagement.

---

## What we deliver in return (after we get your inputs)

```
Day 1-3:   We process your inputs through HENRY's intake skill →
           draft BEFORE diagram (your current state, machine-readable)
           
Day 4-7:   Council review (4 specialist agents vote on highest-ROI wedges)
           → AFTER diagram (the post-deployment state)
           → AI agent shortlist (which of our 9 operators fit you)
           → 90-day deployment plan w/ payback math
           
Day 8-10:  Live walkthrough w/ you. We answer "why this not that."
           You get the full deck + a take-home action plan.

If you sign:  Sprint kicks off Day 14. First agent in production within 30 days.
If you pass:  Keep the deck. We keep the contact open. No pressure.
```

---

## If you have NOTHING and just want to start

Send us this minimum viable packet (10-min effort):

```
1. One-paragraph description of what your company does
2. Headcount + annual revenue (rough is fine)
3. Top 3 things you wish someone could automate
4. Worst recurring problem in the business
5. Any budget framing (or "no idea — need help thinking about it")
```

We'll come back with a list of follow-up questions and a rough fit assessment within 48 hours.

---

**Send completed packets to:** command@henryai.com
**Or schedule a 30-min discovery call:** henry-consulting.vercel.app/#contact
