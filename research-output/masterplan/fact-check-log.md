# Fernhill Master Plan Fact-Check Log

Status: Active  
Date: 2026-05-08  
Purpose: Track factual validation, corrections, and confidence for masterplan claims.

---

## Method

- Confidence scale:
  - High: primary official source directly confirms claim.
  - Medium: credible source but needs direct primary confirmation.
  - Low: currently unverified or inferred.
- Claim status:
  - Confirmed
  - Corrected
  - Needs Revalidation
  - Assumption (not a factual claim)

---

## Core Corrections

### FC-001 Fernhill geography

- Claim in current draft: Fernhill is in "south Belfast."
- Corrected finding: Fernhill House is listed at `Glencairn Park, Glencairn Road, Belfast BT13 3PT` (Ballygomartin), i.e. west/northwest Belfast context.
- Status: Corrected
- Confidence: High
- Source:
  - [S01] NI Buildings Register (nidirect), HB26/38/004A. Accessed 2026-05-08.  
    https://apps.communities-ni.gov.uk/Buildings/buildview.aspx?id=17657&js=false

### FC-002 Belfast Castle wedding package pricing

- Claim: 10-hour package is GBP 1,071 (2025-26).
- Finding: Confirmed on Belfast City Council page.
- Status: Confirmed
- Confidence: High
- Source:
  - [S02] Belfast City Council, Belfast Castle wedding packages. Accessed 2026-05-08.  
    https://www.belfastcity.gov.uk/belfastcastle/your-wedding/your-day/wedding-packages

### FC-003 Belfast Castle catering model wording

- Claim in draft: Belfast Castle uses external caterers.
- Finding: BCC page states in-house hospitality and catering provider.
- Status: Corrected
- Confidence: High
- Source:
  - [S02] Belfast City Council, Belfast Castle wedding packages. Accessed 2026-05-08.  
    https://www.belfastcity.gov.uk/belfastcastle/your-wedding/your-day/wedding-packages

### FC-004 Malone House wedding package pricing

- Claim: 10-hour package GBP 1,044 (2025-26).
- Finding: Confirmed on Belfast City Council page.
- Status: Confirmed
- Confidence: High
- Source:
  - [S03] Belfast City Council, Malone House wedding packages. Accessed 2026-05-08.  
    https://www.belfastcity.gov.uk/malonehouse/your-wedding/your-day/wedding-packages

### FC-005 Malone House room hire rates

- Claim: Harberton room GBP 105/hr before 6pm, GBP 115/hr after 6pm, ten-hour block GBP 1,075 (2026-27).
- Finding: Confirmed on BCC room rates page.
- Status: Confirmed
- Confidence: High
- Source:
  - [S04] Belfast City Council, Malone House room hire rates 2026-27. Accessed 2026-05-08.  
    http://www.belfastcity.gov.uk/malonehouse/meetings-events/room-hire-rates

### FC-006 Historic Environment Fund NI existence and timing

- Claim: HEF NI is active and relaunched in 2025 by Communities Minister.
- Finding: Confirmed on Department for Communities release (23 July 2025).
- Status: Confirmed
- Confidence: High
- Source:
  - [S05] Department for Communities NI, HEF launch news release. Accessed 2026-05-08.  
    https://communities-ni.gov.uk/news/communities-minister-lyons-launches-historic-environment-fund

### FC-007 NLHF NI headline total

- Claim: Over GBP 290m to almost 2,000 projects in NI since 1994.
- Finding: Matches NLHF NI area summary.
- Status: Confirmed
- Confidence: High
- Source:
  - [S06] National Lottery Heritage Fund, Northern Ireland area page. Accessed 2026-05-08.  
    https://www.hlf.org.uk/in-your-area/northern-ireland

### FC-008 Belfast PEACEPLUS local allocation

- Claim: Belfast awarded GBP 15.1m (EUR 17.4m) for Local Community Action Plan.
- Finding: Supported by BCC/SEUPB references; keep as confirmed with direct council citation in v3 body.
- Status: Confirmed
- Confidence: Medium-High
- Source:
  - [S07] Belfast City Council PEACEPLUS page. Accessed 2026-05-08.  
    https://www.belfastcity.gov.uk/Council/Equality-and-diversity/PEACEPLUS

---

## Claims Requiring Revalidation (Before Funding Submission)

### FC-009 "Routinely booked months in advance"

- Problem: strong market assertion but no cited dataset in current draft.
- Status: Needs Revalidation
- Confidence: Low
- Action: replace with directly evidenced claim or convert to assumption.

### FC-010 Unmet demand estimate "185-225 couples/year"

- Problem: derived from assumptions not clearly documented in current draft.
- Status: Needs Revalidation
- Confidence: Low
- Action: provide formula and explicit assumptions, or downgrade to scenario range.

### FC-011 Drive-time claims to cemeteries/crematoria

- Problem: approximate times are uncited and time-dependent.
- Status: Needs Revalidation
- Confidence: Low
- Action: re-measure with a documented method, timestamp, and traffic profile assumptions.

### FC-012 Catchment population estimates

- Problem: current draft uses broad population ranges without explicit source citation.
- Status: Needs Revalidation
- Confidence: Low
- Action: cite NISRA small-area or local authority dataset and show aggregation method.

### FC-013 Restoration unit-cost benchmark ranges

- Problem: some values are benchmark-style and may be plausible but need named publishable references.
- Status: Needs Revalidation
- Confidence: Medium-Low
- Action: confirm with current BCIS/QS references and date-adjust indices.

---

## Repo Impact Notes

- The existing `masterplan.md` currently includes repeated south Belfast references that should be treated as materially incorrect for v3.
- The section writer/orchestrator pipeline is scaffold-first and not currently enforcing citation completeness; v3 should add a validation step that fails output if uncited factual claims remain.

---

## Next Update Protocol

When adding a new claim to v3:

1. Add claim to this log with ID.
2. Record source URL + accessed date.
3. Mark confidence and status.
4. Only then promote claim into masterplan body text.

