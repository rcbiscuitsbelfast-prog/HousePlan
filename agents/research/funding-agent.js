/**
 * FUNDING LANDSCAPE RESEARCH AGENT
 * ----------------------------------
 * Maps all available funding sources for the Fernhill restoration project.
 *
 * Outputs:
 *   research-output/funding/funding.json
 *   research-output/funding/funding.md
 *
 * Data targets:
 *   - National Lottery Heritage Fund (NI programmes)
 *   - Architectural Heritage Fund
 *   - Historic Environment Fund (NI Executive)
 *   - Belfast City Council grants
 *   - Tourism NI capital grants
 *   - SEUPB PEACE PLUS (cross-community)
 *   - UK Levelling Up / Shared Prosperity Fund
 *   - Philanthropic foundations (local and national)
 *   - Social investment / community shares
 *   - Eligibility criteria, amounts, timelines, match-funding requirements
 */

import fs from "fs/promises";
import path from "path";

const OUTPUT_DIR = "research-output/funding";

const RESEARCH_SCOPE = {
  topic: "Heritage Restoration Funding Landscape — NI & UK",
  geographicFocus: "Northern Ireland, UK-wide, and EU (cross-border)",
  dataPoints: [
    "Fund name, administering body, and website",
    "Maximum grant amount and typical award range",
    "Match-funding requirement (percentage)",
    "Eligible activities and project types",
    "Application windows and deadlines",
    "Assessment criteria",
    "Recent NI heritage awards (named projects, amounts)",
    "Stacking strategy — how to combine multiple funds",
  ],
};

const placeholderData = {
  meta: {
    agent: "funding-agent",
    version: "1.0.0",
    generated: new Date().toISOString(),
    status: "scaffold — populate via AI research run",
  },
  funds: [
    {
      name: "National Lottery Heritage Fund — Heritage Places",
      body: "NLHF",
      url: "https://www.heritagefund.org.uk",
      maxGrant: "TODO: up to £5m+",
      typicalAward: "TODO: £250k–£2m",
      matchRequired: "TODO: typically 10–50%",
      eligibleActivities: [
        "Restoration of heritage buildings",
        "Public access and learning",
        "Community engagement",
      ],
      applicationWindow: "TODO: rolling",
      notes: "Key funder for NI heritage projects. Strong track record.",
      source: "TODO",
    },
    {
      name: "Architectural Heritage Fund",
      body: "AHF",
      url: "https://www.ahfund.org.uk",
      maxGrant: "TODO: up to £500k (capital); smaller for feasibility",
      typicalAward: "TODO: £50k–£250k",
      matchRequired: "TODO: typically 25%",
      eligibleActivities: [
        "Feasibility studies",
        "Capital restoration",
        "Project development grants",
      ],
      applicationWindow: "TODO: rolling for smaller grants",
      notes: "Excellent for early-stage feasibility and development grants.",
      source: "TODO",
    },
    {
      name: "Historic Environment Fund — Historic Environment Division, NI",
      body: "Department for Communities NI",
      url: "https://www.communities-ni.gov.uk",
      maxGrant: "TODO: varies by programme",
      typicalAward: "TODO",
      matchRequired: "TODO",
      eligibleActivities: ["Listed building repair", "Conservation area works"],
      applicationWindow: "TODO",
      notes: "NI Executive programme. Important for listed building consent work.",
      source: "TODO",
    },
    {
      name: "Belfast City Council — Social Regeneration Grants",
      body: "Belfast City Council",
      url: "https://www.belfastcity.gov.uk",
      maxGrant: "TODO",
      typicalAward: "TODO: £10k–£100k",
      matchRequired: "TODO",
      eligibleActivities: ["Community development", "Heritage-led regeneration"],
      applicationWindow: "TODO: annual",
      notes: "Smaller grants; useful for community engagement and feasibility phases.",
      source: "TODO",
    },
    {
      name: "Tourism NI — Tourism Development Scheme",
      body: "Tourism NI",
      url: "https://www.tourismni.com",
      maxGrant: "TODO",
      typicalAward: "TODO",
      matchRequired: "TODO",
      eligibleActivities: ["Capital investment in tourism infrastructure"],
      applicationWindow: "TODO",
      notes: "Relevant if Fernhill develops visitor-facing programming.",
      source: "TODO",
    },
    {
      name: "SEUPB PEACE PLUS — Community-Led Local Development",
      body: "Special EU Programmes Body",
      url: "https://www.seupb.eu",
      maxGrant: "TODO",
      typicalAward: "TODO",
      matchRequired: "TODO: 20%",
      eligibleActivities: ["Cross-community projects", "Shared space development"],
      applicationWindow: "TODO",
      notes: "Strong fit given Fernhill's cross-community vision.",
      source: "TODO",
    },
  ],
  philanthropicFunders: [
    {
      name: "Community Foundation for Northern Ireland",
      focus: "Community benefit, social regeneration",
      url: "https://www.communityfoundationni.org",
      notes: "Manages multiple donor funds. Heritage and community alignment.",
      source: "TODO",
    },
    {
      name: "Belfast Harbour Commissioners Community Fund",
      focus: "Belfast-focused community projects",
      url: "TODO",
      notes: "Corporate philanthropy. Check eligibility.",
      source: "TODO",
    },
  ],
  stackingStrategy: {
    phase1Feasibility: [
      "AHF Project Development Grant (£30–80k)",
      "BCC Social Regeneration (£10–30k)",
      "CFNI donor-advised grant",
    ],
    phase2Capital: [
      "NLHF Heritage Places (£500k–£2m)",
      "Historic Environment Fund NI (£100–500k)",
      "Tourism NI Development Scheme",
      "SEUPB PEACE PLUS",
    ],
    notes: "Typical stacking ratio: 60% public grants / 20% private fundraising / 20% earned income or social investment",
  },
  citations: [],
};

async function run() {
  console.log("[funding-agent] Starting research run...");

  const jsonOutput = JSON.stringify(placeholderData, null, 2);
  const mdOutput = `# Heritage Restoration Funding Landscape — Research Report
*Generated by funding-agent v1.0.0 | ${new Date().toISOString()}*
*Status: scaffold — live data not yet populated*

---

## Available Funding Sources

${placeholderData.funds
  .map(
    (f) => `### ${f.name}
- **Body:** ${f.body}
- **URL:** ${f.url}
- **Maximum grant:** ${f.maxGrant}
- **Typical award:** ${f.typicalAward}
- **Match required:** ${f.matchRequired}
- **Eligible activities:** ${f.eligibleActivities.join(", ")}
- **Window:** ${f.applicationWindow}
- **Notes:** ${f.notes}
`
  )
  .join("\n")}

---

## Philanthropic Funders

${placeholderData.philanthropicFunders
  .map(
    (f) => `### ${f.name}
- **Focus:** ${f.focus}
- **URL:** ${f.url}
- **Notes:** ${f.notes}
`
  )
  .join("\n")}

---

## Recommended Funding Stacking Strategy

### Phase 1 — Feasibility & Development
${placeholderData.stackingStrategy.phase1Feasibility.map((f) => `- ${f}`).join("\n")}

### Phase 2 — Capital Restoration
${placeholderData.stackingStrategy.phase2Capital.map((f) => `- ${f}`).join("\n")}

**Stacking note:** ${placeholderData.stackingStrategy.notes}

---

## Citations

*TODO: Add numbered citations with URLs.*

---
*This report is a scaffold. Run the agent with live AI research enabled to populate all TODO fields.*
`;

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(path.join(OUTPUT_DIR, "funding.json"), jsonOutput, "utf8");
  await fs.writeFile(path.join(OUTPUT_DIR, "funding.md"), mdOutput, "utf8");

  console.log("[funding-agent] Outputs written to", OUTPUT_DIR);
  return placeholderData;
}

export { run, RESEARCH_SCOPE };
