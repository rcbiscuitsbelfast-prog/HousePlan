/**
 * GOVERNANCE MODELS RESEARCH AGENT
 * ----------------------------------
 * Researches governance structures suitable for the Fernhill Heritage Vision.
 *
 * Outputs:
 *   research-output/governance/governance.json
 *   research-output/governance/governance.md
 *
 * Data targets:
 *   - Charity model (Charitable Incorporated Organisation or Company Limited by Guarantee)
 *   - Community Interest Company (CIC)
 *   - Development Trust model
 *   - Hybrid public/private/community models
 *   - NI-specific governance considerations (Charity Commission NI)
 *   - Case studies from NI heritage organisations
 */

import fs from "fs/promises";
import path from "path";

const OUTPUT_DIR = "research-output/governance";

const RESEARCH_SCOPE = {
  topic: "Governance Models for Heritage Venues — NI",
  geographicFocus: "Northern Ireland",
  dataPoints: [
    "Charity model — CCNI registration, trustee duties, gift aid eligibility",
    "CIC model — asset lock, dividend cap, reporting requirements",
    "Development Trust / Community Benefit Society",
    "Hybrid structures — trading subsidiary under a charity",
    "Public/private partnership models",
    "NI-specific considerations (Charity Commission NI vs OSCR vs Charity Commission England)",
    "Named NI heritage organisations and their governance models",
  ],
};

const placeholderData = {
  meta: {
    agent: "governance-agent",
    version: "1.0.0",
    generated: new Date().toISOString(),
    status: "scaffold — populate via AI research run",
  },
  models: [
    {
      name: "Charitable Company Limited by Guarantee",
      regulators: ["Charity Commission NI", "Companies House"],
      keyFeatures: [
        "Full charity status — gift aid, public benefit",
        "Trustees have fiduciary duties",
        "Can have trading subsidiary for commercial income",
        "Eligible for most heritage and community grants",
      ],
      pros: ["Maximum grant eligibility", "Gift aid on donations", "Public trust"],
      cons: ["Governance requirements", "Restrictions on profit distribution"],
      suitabilityForFernhill: "HIGH — recommended primary vehicle",
      niCaseStudy: "TODO: Named NI charity using this model",
      source: "TODO",
    },
    {
      name: "Community Interest Company (CIC)",
      regulators: ["CIC Regulator", "Companies House"],
      keyFeatures: [
        "Asset lock — assets cannot be distributed to private benefit",
        "Community interest test required",
        "Can pay dividends (capped)",
        "Less grant-eligible than charities",
      ],
      pros: ["More flexible than charity", "Can attract social investment"],
      cons: ["Fewer grants available", "Not eligible for gift aid"],
      suitabilityForFernhill: "MEDIUM — better as trading subsidiary",
      niCaseStudy: "TODO",
      source: "TODO",
    },
    {
      name: "Development Trust (Community Benefit Society)",
      regulators: ["Financial Conduct Authority"],
      keyFeatures: [
        "Mutual/co-operative structure",
        "Community shares model",
        "Democratic governance",
      ],
      pros: ["Community ownership model", "Can raise community shares", "Democratic legitimacy"],
      cons: ["Complex to establish", "Less common in NI heritage sector"],
      suitabilityForFernhill: "MEDIUM — consider for community investment tranche",
      niCaseStudy: "TODO",
      source: "TODO",
    },
    {
      name: "Hybrid: Charity Parent + CIC Trading Subsidiary",
      regulators: ["Charity Commission NI", "Companies House", "CIC Regulator"],
      keyFeatures: [
        "Charity holds the building and receives grants/donations",
        "CIC or Ltd Company runs commercial operations (weddings, wakes, tea room)",
        "Profits gift-aided up to charity",
        "Clean separation of charitable and commercial activity",
      ],
      pros: [
        "Maximum grant eligibility via charity",
        "Commercial flexibility via subsidiary",
        "HMRC-efficient structure",
        "Standard model for UK heritage venues",
      ],
      cons: ["Dual governance overhead", "Intercompany agreements required"],
      suitabilityForFernhill: "VERY HIGH — recommended structure",
      niCaseStudy: "TODO: Named NI venue using this hybrid",
      source: "TODO",
    },
  ],
  recommendation: {
    primaryStructure: "Charitable Company Limited by Guarantee (CCNI registered)",
    tradingSubsidiary: "Private Limited Company wholly owned by the charity",
    rationale: [
      "Maximises grant eligibility across all major heritage funders",
      "Enables gift aid on all donations",
      "Commercial operations ring-fenced in subsidiary — protects charitable status",
      "Standard model trusted by funders (NLHF, AHF, HED NI)",
    ],
    nextSteps: [
      "Draft governing document (Articles of Association)",
      "Identify 3–5 founding trustees with heritage, legal, financial, community expertise",
      "Register with CCNI and Companies House",
      "Establish trading subsidiary once charitable registration complete",
    ],
  },
  citations: [],
};

async function run() {
  console.log("[governance-agent] Starting research run...");

  const jsonOutput = JSON.stringify(placeholderData, null, 2);
  const mdOutput = `# Governance Models for Heritage Venues — Research Report
*Generated by governance-agent v1.0.0 | ${new Date().toISOString()}*
*Status: scaffold — live data not yet populated*

---

## Governance Models Assessed

${placeholderData.models
  .map(
    (m) => `### ${m.name}
- **Regulators:** ${m.regulators.join(", ")}
- **Key features:** ${m.keyFeatures.join("; ")}
- **Pros:** ${m.pros.join("; ")}
- **Cons:** ${m.cons.join("; ")}
- **Suitability for Fernhill:** **${m.suitabilityForFernhill}**
- **NI Case Study:** ${m.niCaseStudy}
`
  )
  .join("\n")}

---

## Recommendation

**Recommended structure:** ${placeholderData.recommendation.primaryStructure}
**Trading subsidiary:** ${placeholderData.recommendation.tradingSubsidiary}

**Rationale:**
${placeholderData.recommendation.rationale.map((r) => `- ${r}`).join("\n")}

**Next steps:**
${placeholderData.recommendation.nextSteps.map((s) => `- ${s}`).join("\n")}

---

## Citations

*TODO: Add numbered citations with URLs.*

---
*This report is a scaffold. Run the agent with live AI research enabled to populate all TODO fields.*
`;

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(path.join(OUTPUT_DIR, "governance.json"), jsonOutput, "utf8");
  await fs.writeFile(path.join(OUTPUT_DIR, "governance.md"), mdOutput, "utf8");

  console.log("[governance-agent] Outputs written to", OUTPUT_DIR);
  return placeholderData;
}

export { run, RESEARCH_SCOPE };
