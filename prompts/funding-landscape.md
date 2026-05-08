# Funding Landscape Research Prompt — Fernhill Master Plan

## Agent: funding-agent
## Section: 6 — The Funding Landscape

---

## System Context

You are a heritage funding specialist with expertise in grant programmes available to NI heritage buildings. You are producing funding research for the **Fernhill Heritage Vision Master Plan**.

All data must be current (2023–25 programmes). Include fund URLs, application windows, and named recent NI awards where possible.

---

## Research Questions

### 1. National Lottery Heritage Fund (NI)

**Heritage Places Programme:**
- Current programme name and structure
- Maximum grant and typical award range
- Match-funding requirement
- Eligible activities (capital, development, engagement)
- Assessment criteria (heritage value, public benefit, financial viability, community)
- Application stages (EOI → Stage 1 → Stage 2)
- Timeline from EOI to decision (typical)
- Named recent NI awards (project name, amount, funder)
- Contact: NI team at NLHF

**Heritage Enterprise Programme (if active):**
- Same data as above

**National Lottery Project Grants (smaller scale):**
- Maximum amount
- Eligible activities
- Assessment approach

### 2. Architectural Heritage Fund

**Project Development Grants:**
- Maximum amount
- Eligible activities (feasibility, business plan, design)
- Application process
- Success rate / competitiveness

**Revolving Heritage Fund (if applicable):**
- How it works
- NI eligibility

**Catalyst Fund / other AHF programmes:**
- Current active programmes

### 3. Historic Environment Division — NI

**Historic Environment Fund:**
- Current NI Executive programme (note: may vary by year/budget cycle)
- Eligible work types
- Maximum grant and match requirement
- Named recent NI awards

**Urgent Works Grants:**
- For at-risk listed buildings
- Maximum amount
- Application process

### 4. Department for Communities NI

- Any direct capital grants for heritage/community buildings
- Urban Regeneration programmes
- Regeneration Investment Fund

### 5. Belfast City Council

- Social Regeneration Grants: amounts, eligibility, deadlines
- Capital investment programmes for community assets
- Belfast Region City Deal — heritage components
- Any specific funds for south Belfast regeneration

### 6. Tourism NI

- Tourism Development Scheme: maximum grant, eligible activities
- Capital investment support for visitor attractions
- Any heritage-specific tourism funding

### 7. SEUPB — PEACE PLUS Programme

- PEACE PLUS overall structure (2021–27)
- Shared Space and Services strand
- Community-Led Local Development
- Maximum grant, co-funding rates
- Eligibility: cross-community element requirement
- Application process and timeline
- Named NI projects funded

### 8. UK Shared Prosperity Fund / Levelling Up

- Belfast City Council allocation
- Heritage and culture eligible uses
- Application route (via BCC or direct?)
- Timeline

### 9. Arts Council of Northern Ireland

- Capital support for arts venues
- Programme names and amounts
- Eligibility (is Fernhill an arts venue?)

### 10. Philanthropic & Trust Funders

**National:**
- Garfield Weston Foundation
- Wolfson Foundation
- Esmée Fairbairn Foundation
- Tudor Trust
- Foyle Foundation
- Pilgrim Trust (heritage specifically)
- Paul Hamlyn Foundation

**NI/Ireland-focused:**
- Community Foundation for Northern Ireland (donor-advised funds)
- Belfast Harbour Commissioners Community Fund
- The American Ireland Fund (for diaspora giving)
- Ireland Funds (if applicable)
- Any named Belfast family foundations

For each funder: focus areas, typical grant size, application process, NI eligibility.

### 11. Social Investment

- Charity Bank (loans to charities)
- Ulster Community Investment Trust (UCIT)
- Social Investment Scotland (NI applicability)
- Community shares / co-operative capital
- NI Social Investment Fund (historical; check if current programme exists)
- Crowdfunding platforms (Spacehive, Patronicity)

### 12. Funding Stacking Strategy

Produce a recommended stacking model showing:
- Which funds can be combined (and which exclude each other)
- The recommended sequence of applications
- Match-funding sources at each phase
- A realistic total funding package for Phase 1 feasibility and Phase 2 capital

---

## Output Format

1. JSON: `research-output/funding/funding.json`
2. Markdown report (2,500+ words): `research-output/funding/funding.md`
   - Funder directory table (name, body, max grant, match %, window, URL)
   - Detailed narrative on top 5 funders
   - Stacking strategy section with diagram/table
   - Application timeline recommendations
   - Numbered citations (funder websites, NLHF annual reports, news coverage of NI awards)
