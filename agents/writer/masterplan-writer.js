/**
 * MASTER PLAN WRITER AGENT
 * -------------------------
 * Assembles all section outputs into a single, complete
 * Fernhill Heritage Vision Master Plan document (40+ pages).
 *
 * The masterplan.md output is the primary deliverable of the entire system.
 *
 * Structure:
 *   - Cover page
 *   - Executive Summary (2–3 pages)
 *   - Table of Contents
 *   - Section 1: Introduction & Vision
 *   - Section 2: Fernhill House — History & Significance
 *   - Section 3: Wedding Market Analysis
 *   - Section 4: Wakes & Remembrance
 *   - Section 5: Restoration Costs
 *   - Section 6: Funding Landscape
 *   - Section 7: Governance
 *   - Section 8: Investor Engagement
 *   - Section 9: Case Studies
 *   - Section 10: Operational Model & Revenue
 *   - Section 11: Community Benefit
 *   - Section 12: Funding Roadmap
 *   - Section 13: Recommendations & Next Steps
 *   - Appendices
 */

import fs from "fs/promises";
import path from "path";
import { writeAllSections, SECTION_CONFIG } from "./section-writer.js";

const OUTPUT_FILE = "research-output/masterplan/masterplan.md";

const MASTERPLAN_META = {
  title: "Fernhill Heritage Vision — Master Plan",
  subtitle: "A Proposed Restoration and Community Activation Plan for Fernhill House, Belfast",
  version: "1.0 (Draft for Review)",
  date: new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" }),
  confidentiality: "Draft — Not for public circulation",
  preparedBy: "Fernhill Heritage Vision Research Engine v1.0",
};

// ---------------------------------------------------------------------------
// STATIC SECTIONS (front matter, introduction, history)
// These are written directly. Research-based sections come from section-writer.
// ---------------------------------------------------------------------------

function buildCoverPage() {
  return `# ${MASTERPLAN_META.title}

## ${MASTERPLAN_META.subtitle}

---

**Version:** ${MASTERPLAN_META.version}
**Date:** ${MASTERPLAN_META.date}
**Status:** ${MASTERPLAN_META.confidentiality}
**Prepared by:** ${MASTERPLAN_META.preparedBy}

---

> *"Fernhill House has stood silent for too long. This plan imagines what it could become — not as a commercial project, but as an act of community restoration."*

---

*This document is a proposed future-state concept. Fernhill House is not currently restored or open. All content represents a community-led vision for what could be achieved with appropriate funding, governance, and community support.*

\\newpage
`;
}

function buildExecutiveSummary() {
  return `## Executive Summary

*[This section is a scaffold placeholder. The executive summary should be 600–900 words and written last, after all research sections are complete. It should summarise: the opportunity, the proposed restoration, the funding strategy, the governance recommendation, and the projected community and financial impact.]*

**Key points to cover:**

- Fernhill House: what it is, where it is, why it matters
- The proposed restoration: scope, cost, phasing
- The business case: wedding, wake, tea room, cinema, community revenue streams
- The funding strategy: primary grant funders, philanthropic giving, social investment
- The governance recommendation: charitable company + trading subsidiary
- The community benefit: jobs, heritage, cross-community use, legacy
- The call to action: what needs to happen next

---

\\newpage
`;
}

function buildTableOfContents() {
  return `## Table of Contents

1. Introduction & Vision
2. Fernhill House — History & Significance
3. The Wedding Market — Competitive Analysis & Opportunity
4. Wakes & Remembrance — A Dignified Community Service
5. Restoration Costs & Technical Assessment
6. The Funding Landscape
7. Governance & Legal Structure
8. Investor & Philanthropic Engagement
9. Case Studies — Lessons from NI & UK Heritage Venues
10. Operational Model & Revenue Projections
11. Community Benefit Framework
12. Funding Roadmap
13. Recommendations & Next Steps

**Appendices:**
- A. Named Belfast Wedding Venues — Full Dataset
- B. Named Belfast Wake Reception Venues — Full Dataset
- C. Heritage Restoration Cost Benchmarks — Full Data
- D. Funding Sources — Full Directory
- E. Governance Comparison Matrix
- F. Financial Model — Full Assumptions

---

\\newpage
`;
}

function buildIntroduction() {
  return `## Section 1: Introduction & Vision

*[Scaffold placeholder — expand to 800–1,200 words.]*

Fernhill House sits at the edge of south Belfast, its stone façade visible through mature trees from the road below. For decades it has been vacant — a listed building of significant heritage value, waiting. This document asks a simple question: **what could Fernhill become?**

The answer proposed here is not a hotel development or a private residential conversion. It is something rarer and more valuable: a **community-led heritage venue** that serves Belfast's families at their most important moments — weddings, wakes, community gatherings — while preserving a piece of the city's architectural and social history for future generations.

This Master Plan sets out the evidence base, the financial model, the governance structure, and the funding pathway that could make that vision real. It is written as a proposed future-state concept. Fernhill is not currently restored or open. Every projection, every recommendation, and every estimate is conditional on further work, community engagement, professional assessment, and funding secured.

**What this plan proposes:**

- A phased restoration of Fernhill House to a high heritage standard
- A multi-revenue operational model centred on weddings, wakes, tea room, cinema, and community events
- Governance through a charitable trust with a commercial trading subsidiary
- A funding strategy stacking public heritage grants, philanthropic giving, and social investment
- A community benefit framework placing local people at the heart of ownership and governance

**What this plan does not propose:**

- Commercial development incompatible with the building's heritage character
- Privatisation of a community asset
- Any use that would exclude any part of Belfast's community

---

\\newpage
`;
}

function buildHeritageHistory() {
  return `## Section 2: Fernhill House — History & Significance

*[Scaffold placeholder — expand to 1,000–1,500 words with fully researched historical content.]*

### 2.1 Origins & Architectural Character

*TODO: Research and write the full history of Fernhill House — construction date, original owner, architectural style, notable features, grounds and gardens. Include any historical photographs or records available.*

### 2.2 Historical Significance to Belfast

*TODO: Research the house's role in Belfast's social and political history. Who lived here? What events took place here? What connection does it have to the surrounding community?*

### 2.3 Heritage Listing & Planning Status

*TODO: Confirm heritage listing (grade/category), article 4 directions, conservation area status. Reference Historic Environment Division (NI) records.*

### 2.4 Current Condition

*TODO: Describe the current physical condition of the building based on any available survey data, planning applications, or visual assessment. What are the most urgent structural issues?*

### 2.5 Why Fernhill Matters

*TODO: Write a compelling, evidence-based argument for why this building deserves restoration — heritage value, community connection, architectural significance, and the gap it would fill in Belfast's cultural landscape.*

---

\\newpage
`;
}

function buildCommunityBenefit() {
  return `## Section 11: Community Benefit Framework

*[Scaffold placeholder — expand to 1,200–1,800 words.]*

### 11.1 Defining Community Benefit

A heritage restoration is only truly successful if it delivers lasting benefit to the community it serves. For Fernhill, community benefit is not an add-on — it is the core purpose.

**Proposed community benefit outcomes:**

- **Jobs:** TODO direct FTE jobs at maturity; TODO indirect/supply chain jobs
- **Apprenticeships:** TODO heritage craft apprenticeships during restoration
- **Cross-community use:** Programming and governance designed to serve all communities
- **Educational access:** School visits, heritage education, community archive
- **Remembrance garden:** Public space for quiet reflection and memorial planting
- **Affordable community hire:** Subsidised rates for local community groups
- **Local supplier preference:** Procurement policy favouring Belfast SMEs

### 11.2 Social Return on Investment

*TODO: Model the SROI ratio for Fernhill. Heritage venues typically generate £4–£8 of social value per £1 invested. Calculate Fernhill's SROI based on the proposed operational model.*

### 11.3 Cross-Community Dimensions

*TODO: Research and articulate how Fernhill's location, history, and proposed programming can serve both communities in Belfast. Reference SEUPB shared space criteria.*

---

\\newpage
`;
}

function buildFundingRoadmap() {
  return `## Section 12: Funding Roadmap

*[Scaffold placeholder — expand to 1,000–1,500 words with a visual timeline.]*

### 12.1 Phase 1: Feasibility & Development (Months 1–18)

**Objective:** Establish governance, complete technical survey, secure feasibility funding.

| Action | Owner | Funding Source | Target Amount | Timeline |
|--------|-------|----------------|---------------|----------|
| Register charity (CCNI) | Founding trustees | N/A | £0 | Month 1–3 |
| Commission condition survey | Trustees | AHF PDG | £30–50k | Month 2–6 |
| Develop business plan | Trustees + consultant | AHF / BCC | £20–40k | Month 4–12 |
| Community engagement programme | Community | BCC / CFNI | £10–20k | Month 3–18 |
| Secure planning/LBC pre-application | Architects | Internal | £5–10k | Month 6–12 |

### 12.2 Phase 2: Capital Campaign (Months 12–36)

**Objective:** Secure primary capital funding for restoration works.

| Fund | Application Window | Target Amount |
|------|-------------------|---------------|
| NLHF Heritage Places | TODO | £500k–£2m |
| Historic Environment Fund NI | TODO | £100–500k |
| Tourism NI Capital | TODO | £100–300k |
| SEUPB PEACE PLUS | TODO | £100–500k |
| Lead philanthropic gift | Campaign | £100–500k |

### 12.3 Phase 3: Construction & Opening (Months 30–60)

**Objective:** Complete Phase A and B restoration. Soft-open tea room and community spaces. Full opening at month 54–60.

*TODO: Detailed construction programme with milestones.*

---

\\newpage
`;
}

function buildRecommendations() {
  return `## Section 13: Recommendations & Next Steps

*[Scaffold placeholder — expand to 800–1,200 words.]*

### Immediate Actions (Next 90 Days)

1. **Form a founding steering group** — identify 5–7 individuals with legal, financial, heritage, community, and property expertise.
2. **Commission a professional condition survey** — establish the true structural condition of Fernhill House and the scope of Phase A works.
3. **Engage a heritage architect** — appoint a QS/architect with listed building experience in NI.
4. **Apply to AHF for a Project Development Grant** — to fund feasibility work.
5. **Begin community engagement** — public meeting, website, social media presence.
6. **Register with CCNI** — begin charitable registration process.

### Medium-Term Actions (3–18 Months)

1. Complete full feasibility study and business plan.
2. Secure planning and listed building consent.
3. Submit NLHF Stage 1 application.
4. Launch public fundraising campaign.
5. Establish trading subsidiary.

### Long-Term Vision (18 Months–5 Years)

1. Complete Phase A and B restoration works.
2. Open tea room and community spaces.
3. Host first weddings and wake receptions.
4. Open heritage cinema.
5. Achieve financial sustainability.

---

## Appendices

*TODO: Populate appendices with full datasets from research agent outputs.*

- **Appendix A:** Full Belfast wedding venue dataset
- **Appendix B:** Full Belfast wake reception venue dataset
- **Appendix C:** Heritage restoration cost benchmark data
- **Appendix D:** Full funding directory with contact details
- **Appendix E:** Governance model comparison matrix
- **Appendix F:** Financial model — full assumptions and sensitivity analysis

---

*End of Fernhill Heritage Vision Master Plan — Version ${MASTERPLAN_META.version}*
*Generated: ${MASTERPLAN_META.date}*
*This is a proposed future concept. Fernhill House is not currently restored or open.*
`;
}

// ---------------------------------------------------------------------------
// MAIN ASSEMBLY FUNCTION
// ---------------------------------------------------------------------------

async function assembleMasterPlan(researchOutputs = {}) {
  console.log("[masterplan-writer] Assembling master plan...");

  await fs.mkdir("research-output/masterplan", { recursive: true });

  // Write all research-based sections
  const sections = await writeAllSections(researchOutputs);

  // Assemble the full document
  const fullDocument = [
    buildCoverPage(),
    buildExecutiveSummary(),
    buildTableOfContents(),
    buildIntroduction(),
    buildHeritageHistory(),
    sections.weddings,
    sections.wakes,
    sections.restoration,
    sections.funding,
    sections.governance,
    sections.investors,
    sections["case-studies"],
    sections.operations,
    buildCommunityBenefit(),
    buildFundingRoadmap(),
    buildRecommendations(),
  ].join("\n\n");

  await fs.writeFile(OUTPUT_FILE, fullDocument, "utf8");

  const wordCount = fullDocument.split(/\s+/).length;
  console.log(`[masterplan-writer] Master plan written: ${OUTPUT_FILE}`);
  console.log(`[masterplan-writer] Approximate word count: ${wordCount.toLocaleString()} words`);
  console.log(`[masterplan-writer] Approximate pages: ~${Math.round(wordCount / 300)} pages (at 300 words/page)`);

  return { outputFile: OUTPUT_FILE, wordCount };
}

export { assembleMasterPlan, MASTERPLAN_META };
