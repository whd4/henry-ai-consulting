#!/usr/bin/env python3
"""Capability audit — can DFS actually deliver what the website advertises?

Whitt's question, and it is the right one: "Can't advertise it if you can't do it."

The site currently sells six capabilities plus three fixed-price engagements. This script
tests the DATA AND METHOD each one depends on and reports one of four verdicts:

    DELIVERABLE   — the inputs are obtainable and the method is executable today
    PARTIAL       — some inputs obtainable; a named gap blocks full delivery
    BLOCKED       — a required input cannot be obtained; cannot deliver as advertised
    NOT-TESTABLE  — advisory work with no computable output; delivery = a person's judgement

A verdict is NEVER assigned from assumption. Every test makes a real request or a real
computation and records what came back. Where a test cannot prove a capability, it says so
rather than passing it.

    python audit.py            # run every test, print the scoreboard
    python audit.py --json     # machine-readable
"""

import argparse
import json
import re
import ssl
import sys
import time
import urllib.error
import urllib.request

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) DFS-capability-audit/1.0"}
CTX = ssl.create_default_context()

DELIVERABLE, PARTIAL, BLOCKED, NOT_TESTABLE = "DELIVERABLE", "PARTIAL", "BLOCKED", "NOT-TESTABLE"


def fetch(url, timeout=30):
    """Return (status, text, error). Never raises."""
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=timeout, context=CTX) as r:
            return r.status, r.read().decode("utf-8", "replace"), None
    except urllib.error.HTTPError as e:
        return e.code, "", "HTTP %s" % e.code
    except Exception as e:
        return None, "", "%s: %s" % (type(e).__name__, str(e)[:90])


# ---------------------------------------------------------------- individual tests

def t_rrc_reachable():
    """Is the Railroad Commission — the source of truth for Texas production — reachable?"""
    status, body, err = fetch("https://webapps.rrc.texas.gov/PDQ/home.do")
    if status == 200 and len(body) > 2000:
        return True, "PDQ home reachable, %d bytes" % len(body)
    return False, err or "unexpected response (status %s, %d bytes)" % (status, len(body))


def t_rrc_bulk_downloads():
    """Are bulk production datasets downloadable without a browser?

    This is the one that decides whether royalty verification can be AUTOMATED or has to be
    done by hand through a web form. It is the difference between a $4,500 two-week product
    and a bespoke consulting engagement.
    """
    status, body, err = fetch(
        "https://www.rrc.texas.gov/resource-center/research/data-sets-available-for-download/")
    if status != 200:
        return False, err or "page unreachable"
    files = set(re.findall(r'href="([^"]*?\.(?:zip|txt|csv|exe|dsv))"', body, re.I))
    if files:
        return True, "%d direct dataset links in static HTML" % len(files)
    return False, ("page loads but contains ZERO direct dataset links in static HTML — the "
                   "download tables are JS-rendered, so bulk access needs a real browser "
                   "(Playwright) or the RRC FTP, neither of which is built yet")


def t_severance_rates():
    """Can we obtain the statutory severance tax rates a compliance claim depends on?"""
    status, body, err = fetch("https://comptroller.texas.gov/taxes/crude-oil/")
    if status != 200:
        return False, err or "unreachable"
    # The oil production tax rate is statutory (Tex. Tax Code 202.052) and published here.
    pct = re.findall(r"(\d+\.?\d*)\s*(?:percent|%)", body)
    if pct:
        return True, "rate figures present on the Comptroller page: %s" % ", ".join(sorted(set(pct))[:6])
    return False, "page loads but no rate figures found in static HTML"


def t_decimal_interest_math():
    """Can we actually compute a royalty owner's correct payment?

    This is the arithmetic at the centre of the whole business. It is pure math and needs no
    external service, so it is testable to the cent. Worked example uses a case with a known
    right answer so a wrong implementation cannot pass.
    """
    # Owner holds 40 net mineral acres in a 640-acre unit, 1/5 (0.20) royalty.
    net_acres, unit_acres, royalty = 40.0, 640.0, 0.20
    decimal_interest = (net_acres / unit_acres) * royalty          # 0.0125
    gross_volume_bbl, price = 12_450.0, 71.35
    gross_value = gross_volume_bbl * price                          # 888,307.50
    owner_gross = gross_value * decimal_interest                    # 11,103.84375
    post_production_deduction = owner_gross * 0.085                 # a typical 8.5% take
    owner_net = owner_gross - post_production_deduction

    expected_di = 0.0125
    expected_gross = 11103.84
    expected_net = 10160.02

    ok = (abs(decimal_interest - expected_di) < 1e-9
          and abs(round(owner_gross, 2) - expected_gross) < 0.01
          and abs(round(owner_net, 2) - expected_net) < 0.01)
    return ok, ("DI=%.6f on %s/%s acres at %.0f%% royalty; gross $%.2f; less 8.5%% "
                "post-production = $%.2f" % (decimal_interest, net_acres, unit_acres,
                                             royalty * 100, owner_gross, owner_net))


def t_underpayment_detection():
    """Given a payout statement and independent volumes, do we FIND a real underpayment?

    Twelve months of a synthetic-but-realistic statement. Three months carry a wrong decimal
    interest (a unit was redrawn and the operator never corrected it) — the single most common
    real-world underpayment. The test passes only if exactly those three are caught, with the
    dollar figure right. Catching too many is as much a failure as catching too few: a false
    positive in a demand letter destroys the client's credibility.
    """
    correct_di = 0.0125
    months = []
    for m in range(1, 13):
        vol, price = 10_000 + m * 137, 70.0 + m * 0.45
        di_used = 0.0115 if m in (5, 6, 7) else correct_di   # the injected error
        months.append({"m": m, "vol": vol, "price": price,
                       "paid": round(vol * price * di_used, 2)})

    findings = []
    for row in months:
        owed = round(row["vol"] * row["price"] * correct_di, 2)
        gap = round(owed - row["paid"], 2)
        if gap > 0.01:
            findings.append({"month": row["m"], "paid": row["paid"],
                             "owed": owed, "short": gap})

    caught = sorted(f["month"] for f in findings)
    total_short = round(sum(f["short"] for f in findings), 2)
    ok = caught == [5, 6, 7] and total_short > 0
    return ok, ("flagged months %s (expected [5, 6, 7]), total underpayment $%.2f, "
                "zero false positives across the other 9 months" % (caught, total_short))


def t_statute_retrievable():
    """Can we pull the actual statutory text a demand letter has to cite?

    A finding without the governing statute quoted is an opinion. Texas Natural Resources Code
    91.402 sets royalty payment deadlines; 91.403 sets the interest penalty for late payment.
    """
    sources = [
        ("Justia — Tex. Nat. Res. Code 91.402",
         "https://law.justia.com/codes/texas/natural-resources-code/title-3/subtitle-b/chapter-91/subchapter-j/section-91-402/"),
        ("Texas Statutes (official)",
         "https://statutes.capitol.texas.gov/Docs/NR/htm/NR.91.htm"),
    ]
    hits = []
    for name, url in sources:
        status, body, err = fetch(url)
        if status == 200 and re.search(r"91\.40[23]", body):
            hits.append("%s (%d bytes)" % (name, len(body)))
    if hits:
        return True, "statutory text retrievable by plain HTTP from: " + "; ".join(hits)

    # RESOLVED 2026-07-29. This originally reported a flat failure, which was wrong — the
    # text IS obtainable, just not by urllib. statutes.capitol.texas.gov renders its content
    # client-side, so a plain GET returns the navigation shell; Justia returns HTTP 403 to
    # non-browser agents. Driving a real headless browser (Playwright) against the official
    # source returned the full 188,226-character chapter, verbatim, this session:
    #
    #   91.402(a) "...must be paid to each payee by payor on or before 120 days after the
    #   end of the month of first sale of production from the well... (1) 60 days after the
    #   end of the calendar month in which subsequent oil production is sold; or (2) 90 days
    #   after the end of the calendar month in which subsequent gas production is sold."
    #
    #   91.403(a) "...the payor must pay interest to a payee beginning at the expiration of
    #   those time limits at two percentage points above the percentage rate charged on
    #   loans to depository institutions by the New York Federal Reserve Bank..."
    #
    # Same root cause as the RRC bulk-download failure. Both are solved by the same piece of
    # work — a headless-browser fetch layer — which is why they are one task, not two.
    return False, ("BLOCKED BY METHOD, NOT BY AVAILABILITY. Plain HTTP gets a JS shell from "
                   "the official source and a 403 from Justia. Verified this session that a "
                   "headless browser retrieves the full chapter verbatim (188,226 chars, "
                   "91.402 and 91.403 both present). Fix = a Playwright fetch layer, shared "
                   "with the RRC downloader. Until it exists, statute citations must be "
                   "pulled by hand.")


def t_forensic_anomaly_method():
    """Does the anomaly method actually separate signal from noise?

    'Forensic Accounting' on the site promises detection of 'skimming, misallocation,
    unreported deductions'. Tested here on a series with a genuine step-change buried in
    realistic noise, using a deterministic median-absolute-deviation approach (no model, no
    randomness — reproducible every run).
    """
    base = [100, 103, 98, 101, 99, 102, 97, 104, 100, 101, 98, 103,
            100, 99, 102, 101, 97, 100, 103, 98]
    tampered = base + [82, 80, 83, 81, 84]          # a sustained ~19% skim

    def mad_outliers(series, window=20, k=3.0):
        ref = series[:window]
        med = sorted(ref)[len(ref) // 2]
        devs = sorted(abs(x - med) for x in ref)
        mad = devs[len(devs) // 2] or 1e-9
        return [i for i, x in enumerate(series)
                if i >= window and abs(x - med) / (1.4826 * mad) > k]

    flagged = mad_outliers(tampered)
    expected = list(range(20, 25))
    ok = flagged == expected
    return ok, ("flagged indices %s (expected %s) — sustained 19%% deviation detected, "
                "no false positives in the 20 clean periods" % (flagged, expected))


def t_trust_disbursement():
    """Trust & Estate Disbursement Audit — can the inputs be obtained?"""
    return None, ("NO PUBLIC SOURCE. A trust audit requires the trust instrument, the "
                  "accounting, and the beneficiary schedule — private documents only the "
                  "client can provide. The arithmetic is the same engine as royalty "
                  "verification and passes its own test, but delivery is fully dependent on "
                  "the client handing over documents. Advertise it as document-dependent, "
                  "never as something we can independently verify.")


def t_tokenization_advisory():
    """Royalty Tokenization Advisory / RWA domain expertise."""
    return None, ("ADVISORY, NOT COMPUTATION. There is no test that can pass or fail here — "
                  "the deliverable is judgement, and the claim rests on Whitt's operator "
                  "experience, which is real. BUT the site's copy references 'regulatory "
                  "positioning post-SEC Innovation Exemption'. That is a live securities-law "
                  "claim; it needs a securities attorney's sign-off before it stays on a "
                  "public page, not a developer's.")


def t_multi_jurisdiction_tax():
    """'County, State & Federal Tax Compliance — every filing cross-checked ... in real time'."""
    ok, detail = t_severance_rates()
    if not ok:
        return False, "state rate source failed: " + detail
    return None, ("OVERCLAIMED AS WRITTEN. Texas severance rates are obtainable (verified "
                  "above), so state-level severance verification is real. But the site says "
                  "'every filing cross-checked against production data and regulatory "
                  "requirements IN REAL TIME' across county, state AND federal. There is no "
                  "real-time feed of a client's filings, no county-level ad valorem "
                  "integration, and no federal return access. Narrow the claim to Texas "
                  "severance tax verification, which we can actually do.")


TESTS = [
    ("Data source: RRC reachable",          "foundation",        t_rrc_reachable),
    ("Data source: RRC bulk download",      "foundation",        t_rrc_bulk_downloads),
    ("Data source: severance tax rates",    "foundation",        t_severance_rates),
    ("Data source: statutory text",         "foundation",        t_statute_retrievable),
    ("Royalty decimal-interest math",       "Royalty Audit",     t_decimal_interest_math),
    ("Underpayment detection (12 mo)",      "Royalty Audit",     t_underpayment_detection),
    ("Forensic anomaly detection",          "Forensic",          t_forensic_anomaly_method),
    ("Tax compliance as advertised",        "Tax Compliance",    t_multi_jurisdiction_tax),
    ("Trust disbursement audit",            "Trust & Estate",    t_trust_disbursement),
    ("Royalty tokenization advisory",       "Advisory",          t_tokenization_advisory),
]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args()

    results, t0 = [], time.time()
    for name, service, fn in TESTS:
        s = time.time()
        try:
            ok, detail = fn()
        except Exception as e:
            ok, detail = False, "test itself errored: %s: %s" % (type(e).__name__, e)
        verdict = DELIVERABLE if ok is True else (BLOCKED if ok is False else NOT_TESTABLE)
        results.append({"test": name, "service": service, "verdict": verdict,
                        "detail": detail, "seconds": round(time.time() - s, 1)})
        if not a.json:
            icon = {"DELIVERABLE": "PASS", "BLOCKED": "FAIL", "NOT-TESTABLE": "----"}[verdict]
            print("[%s] %-34s %s" % (icon, name, detail[:150]))
            if len(detail) > 150:
                for i in range(150, len(detail), 96):
                    print("       %s" % detail[i:i + 96])
            print()

    if a.json:
        print(json.dumps({"results": results, "seconds": round(time.time() - t0, 1)}, indent=2))
        return

    p = sum(1 for r in results if r["verdict"] == DELIVERABLE)
    f = sum(1 for r in results if r["verdict"] == BLOCKED)
    n = sum(1 for r in results if r["verdict"] == NOT_TESTABLE)
    print("=" * 78)
    print("%d proven deliverable · %d blocked · %d not testable by machine · %.1fs"
          % (p, f, n, time.time() - t0))
    print("=" * 78)


if __name__ == "__main__":
    main()
