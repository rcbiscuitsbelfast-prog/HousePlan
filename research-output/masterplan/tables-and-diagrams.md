# Tables and Diagrams Pack

**Purpose:** Reusable tables and diagrams for briefings, consultant packs, and funding applications.

---

## 1. Project Logic Diagram

```mermaid
flowchart TD
  A[Listed heritage asset at risk] --> B[Development phase]
  B --> C[Surveys, options, costs, consultation]
  C --> D[Capital funding package]
  D --> E[Stabilisation and restoration]
  E --> F[Public access and earned income]
  F --> G[Maintenance reserve and community benefit]
```

---

## 2. Workstream Map

| Workstream | Lead | Next output |
|---|---|---|
| Governance | R.C. / interim chair | Steering group and legal route |
| Council relations | R.C. | Officer meeting |
| Heritage/planning | Conservation architect | Pre-app strategy |
| Technical | Surveyor/engineer/QS | Condition and cost plan |
| Funding | Fundraising lead | AHF eligibility and NLHF enquiry |
| Community | Engagement lead | Listening log |
| Operations | Venue adviser | Use/zoning/catering model |
| Finance | Treasurer | Scenario model |

---

## 3. Decision Gate Diagram

```mermaid
flowchart LR
  G1[Gate 1: Is governance credible?] --> G2[Gate 2: Is council/HED route clear?]
  G2 --> G3[Gate 3: Is condition/cost understood?]
  G3 --> G4[Gate 4: Is funding route viable?]
  G4 --> G5[Gate 5: Is community support evidenced?]
  G5 --> G6[Gate 6: Proceed to capital application]
```

---

## 4. Capital Cost Structure

| Cost block | Contents | Current range / basis |
|---|---|---|
| Phase A stabilisation | Roof, drainage, urgent weatherproofing, safety | GBP 250k-450k |
| Phase B restoration | Fabric, M&E, access, windows, interiors | GBP 600k-1.1m |
| Phase C fit-out | Kitchen, tea room, event spaces, FF&E | GBP 250k-400k |
| Contingency | Unknowns, inflation, heritage risk | 25-35% recommended |
| Professional fees | Architect, QS, engineers, consultants | 12-18% indicative |

---

## 5. Operating Model Diagram

```mermaid
flowchart TD
  Charity[Fernhill Heritage Trust] --> Public[Public benefit: heritage, education, community]
  Charity --> Asset[Building stewardship and maintenance]
  Charity --> Trading[Fernhill House Trading Ltd]
  Trading --> W[Weddings]
  Trading --> Wake[Wakes / funeral teas]
  Trading --> Tea[Tea room]
  Trading --> Hire[Room hire and events]
  W --> Surplus[Operating surplus]
  Wake --> Surplus
  Tea --> Surplus
  Hire --> Surplus
  Surplus --> Charity
```

---

## 6. Stakeholder Matrix

| Stakeholder | Interest | What they need from R.C. | Timing |
|---|---|---|---|
| Councillors | Local mandate and political cover | One-page brief and clear ask | Weeks 1-3 |
| BCC Parks | Park operation and access | Site/access questions | Weeks 2-6 |
| BCC Planning | Consent route | Pre-app scope | Weeks 4-10 |
| HED | Listed building protection | Heritage significance and method | Weeks 4-12 |
| AHF | Development funding | Eligible vehicle and project scope | Weeks 4-12 |
| NLHF | Heritage outcomes and deliverability | Project enquiry and evidence plan | Months 3-9 |
| Community groups | Trust and local fit | Listening process | From Week 4 |
| Clergy/funeral directors | Wake/referral feasibility | Dignity protocol and offer | Months 2-6 |
| Schools | Learning programme | Safeguarding and curriculum fit | Months 3-9 |
| Suppliers | Deliverability | Clear scopes and procurement route | Months 2-12 |

---

## 7. 90-Day Roadmap

```mermaid
gantt
  title Fernhill First 90 Days
  dateFormat  YYYY-MM-DD
  axisFormat  %d %b
  section Governance
  Steering group shortlist      :a1, 2026-05-13, 14d
  Legal route scoping           :a2, after a1, 14d
  section Council
  Councillor briefings          :b1, 2026-05-20, 14d
  Officer meeting request       :b2, after b1, 21d
  section Funding
  AHF eligibility check         :c1, 2026-06-03, 14d
  NLHF early conversation       :c2, 2026-06-17, 21d
  section Evidence
  Survey brief drafted          :d1, 2026-06-03, 21d
  Community listening starts    :d2, 2026-06-10, 45d
```

---

## 8. Consultant Dependency Diagram

```mermaid
flowchart TD
  A[Conservation architect] --> B[Survey brief]
  B --> C[Condition survey]
  C --> D[Structural engineer]
  C --> E[QS cost plan]
  A --> F[Planning/HED pre-app]
  F --> G[Options appraisal]
  D --> H[Capital scope]
  E --> H
  G --> I[Funding-ready development report]
```

