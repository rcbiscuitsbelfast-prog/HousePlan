/**
 * CASE STUDY RESEARCH AGENT
 * --------------------------
 * Researches comparable heritage venue case studies relevant to Fernhill.
 *
 * Outputs:
 *   research-output/case-studies/case-studies.json
 *   research-output/case-studies/case-studies.md
 *
 * Data targets:
 *   - Belfast heritage venues (Belfast Castle, Malone House, Clifton House, Duncairn)
 *   - NI heritage regeneration projects (Sailortown, Cathedral Quarter)
 *   - UK comparable projects (heritage houses converted to community venues)
 *   - Ireland comparable projects
 *   - Key lessons: governance, funding, operations, community engagement
 */

import fs from "fs/promises";
import path from "path";

const OUTPUT_DIR = "research-output/case-studies";

const RESEARCH_SCOPE = {
  topic: "Heritage Venue Case Studies — NI, UK & Ireland",
  geographicFocus: "Belfast, NI, UK, Ireland",
  dataPoints: [
    "Named venue, location, building type, heritage listing",
    "Restoration cost and funding sources",
    "Governance model adopted",
    "Revenue streams and operational model",
    "Community benefit outcomes",
    "Timeline from acquisition to opening",
    "Key lessons and transferable insights for Fernhill",
  ],
};

const placeholderData = {
  meta: {
    agent: "case-study-agent",
    version: "1.0.0",
    generated: new Date().toISOString(),
    status: "scaffold — populate via AI research run",
  },
  caseStudies: [
    {
      name: "Belfast Castle",
      location: "Cave Hill, Belfast",
      type: "Victorian Baronial Castle",
      listing: "Grade B+ listed",
      owner: "Belfast City Council",
      governance: "Local authority managed",
      restorationCost: "TODO: ~£2m restoration in 1988; ongoing investment",
      fundingSources: "TODO: BCC capital; NLHF; Tourism NI",
      revenueStreams: ["Weddings", "Events", "Restaurant", "Visitor attraction"],
      annualVisitors: "TODO",
      communityBenefit: "TODO",
      keyLessons: [
        "Local authority ownership provides stability but limits commercial agility",
        "Wedding income is the primary revenue driver",
        "Heritage narrative is a strong marketing asset",
      ],
      source: "TODO",
    },
    {
      name: "Malone House",
      location: "Barnett Demesne, south Belfast",
      type: "Georgian country house",
      listing: "Grade B1 listed",
      owner: "Belfast City Council",
      governance: "Local authority managed",
      restorationCost: "TODO",
      fundingSources: "TODO",
      revenueStreams: ["Weddings", "Events", "Art gallery", "Community use"],
      annualVisitors: "TODO",
      communityBenefit: "TODO",
      keyLessons: [
        "South Belfast location — closest comparator to Fernhill geographically",
        "Community gallery function builds local goodwill",
        "Capacity constraints limit revenue ceiling",
      ],
      source: "TODO",
    },
    {
      name: "Clifton House (Poor House), Belfast",
      location: "North Queen Street, Belfast",
      type: "18th century poorhouse (1774)",
      listing: "Grade A listed",
      owner: "Clifton House Trust",
      governance: "Independent charitable trust",
      restorationCost: "TODO: major NLHF-funded restoration ~£3–4m",
      fundingSources: "TODO: NLHF, AHF, Historic Environment Fund",
      revenueStreams: ["Events", "Tours", "Community use", "Grants"],
      annualVisitors: "TODO",
      communityBenefit: "Strong — care home history, north Belfast community",
      keyLessons: [
        "Independent charitable trust model gives governance credibility",
        "NLHF funding essential for major capital restoration",
        "Community history narrative drives fundraising and public support",
      ],
      source: "TODO",
    },
    {
      name: "Duncairn Arts Centre, Belfast",
      location: "Duncairn Gardens, north Belfast",
      type: "Former Presbyterian church (1862)",
      listing: "TODO",
      owner: "Duncairn Community Partnership",
      governance: "Community partnership / charity",
      restorationCost: "TODO: ~£4m total project",
      fundingSources: "TODO: NLHF, SEUPB, BCC, Arts Council NI",
      revenueStreams: ["Arts events", "Rehearsal space", "Community hire", "Café"],
      annualVisitors: "TODO",
      communityBenefit: "Very high — cross-community arts in interface area",
      keyLessons: [
        "Cross-community narrative is powerful for SEUPB and NLHF funding",
        "Multi-use programming maximises building utilisation",
        "Café as community anchor — low margin but high footfall value",
      ],
      source: "TODO",
    },
    {
      name: "Wilton's Music Hall, London",
      location: "Whitechapel, London",
      type: "Victorian music hall (1858)",
      listing: "Grade II* listed",
      owner: "Wilton's Music Hall Trust",
      governance: "Independent charitable trust",
      restorationCost: "TODO: ~£4m phased restoration",
      fundingSources: "TODO: NLHF, Arts Council England, private donations",
      revenueStreams: ["Theatre", "Events", "Tours", "Bar", "Hire"],
      annualVisitors: "TODO",
      communityBenefit: "Strong local engagement; major cultural draw",
      keyLessons: [
        "Phased restoration allows early opening and revenue generation",
        "Controlled 'ruin aesthetic' became a brand asset",
        "Early community engagement built the donor base",
      ],
      source: "TODO",
    },
  ],
  summaryInsights: [
    "Charitable trust governance is the dominant model among successful heritage venues",
    "NLHF is the anchor funder in virtually every major UK heritage restoration",
    "Multi-revenue streams (weddings + events + community + F&B) are essential for viability",
    "South Belfast is underserved compared to north and east — Fernhill fills a geographic gap",
    "Cross-community narrative amplifies funding eligibility significantly in NI context",
  ],
  citations: [],
};

async function run() {
  console.log("[case-study-agent] Starting research run...");

  const jsonOutput = JSON.stringify(placeholderData, null, 2);
  const mdOutput = `# Heritage Venue Case Studies — Research Report
*Generated by case-study-agent v1.0.0 | ${new Date().toISOString()}*
*Status: scaffold — live data not yet populated*

---

## Case Studies

${placeholderData.caseStudies
  .map(
    (c) => `### ${c.name}
- **Location:** ${c.location}
- **Type:** ${c.type}
- **Listing:** ${c.listing}
- **Owner/Governance:** ${c.owner} — ${c.governance}
- **Restoration cost:** ${c.restorationCost}
- **Funding:** ${c.fundingSources}
- **Revenue streams:** ${c.revenueStreams.join(", ")}
- **Community benefit:** ${c.communityBenefit}

**Key lessons:**
${c.keyLessons.map((l) => `- ${l}`).join("\n")}
`
  )
  .join("\n---\n")}

---

## Cross-Case Insights

${placeholderData.summaryInsights.map((s) => `- ${s}`).join("\n")}

---

## Citations

*TODO: Add numbered citations with URLs.*

---
*This report is a scaffold. Run the agent with live AI research enabled to populate all TODO fields.*
`;

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(path.join(OUTPUT_DIR, "case-studies.json"), jsonOutput, "utf8");
  await fs.writeFile(path.join(OUTPUT_DIR, "case-studies.md"), mdOutput, "utf8");

  console.log("[case-study-agent] Outputs written to", OUTPUT_DIR);
  return placeholderData;
}

export { run, RESEARCH_SCOPE };
