/**
 * SECTION WRITER AGENT
 * ---------------------
 * Takes a single research output (JSON + MD) and expands it into a
 * fully-written, long-form master plan section.
 *
 * Each section should be 4–8 pages when printed (1,500–3,000 words).
 * Tone: professional, evidence-based, heritage-sensitive, Belfast-specific.
 * No generic filler. Real numbers, real venues, real grants. Cited.
 *
 * Usage:
 *   import { writeSection } from './section-writer.js';
 *   const markdown = await writeSection('weddings', researchData, options);
 */

import fs from "fs/promises";
import path from "path";

/**
 * Section configuration — maps topic keys to titles and narrative guidance.
 */
const SECTION_CONFIG = {
  weddings: {
    title: "The Wedding Market — Competitive Analysis & Fernhill's Opportunity",
    sectionNumber: 3,
    narrativeGuidance: `
      - Open with a vivid scene-setting paragraph about what a wedding at Fernhill could feel like.
      - Present the NI wedding market size and growth trends with cited statistics.
      - Map every named Belfast heritage wedding venue with capacity, pricing, and positioning.
      - Identify the geographic gap in south/west Belfast for heritage wedding venues.
      - Model Fernhill's competitive positioning — price point, capacity, differentiators.
      - Close with a paragraph about why couples choosing a heritage venue are choosing a story, not just a building.
    `,
  },
  wakes: {
    title: "Wakes & Remembrance — A Dignified Community Service",
    sectionNumber: 4,
    narrativeGuidance: `
      - Open with a sensitive, respectful framing of the role of the wake in Belfast community life.
      - Present the market data on funeral reception venues in Belfast.
      - Map named venues with proximity to crematoria and cemeteries.
      - Articulate how Fernhill's setting — garden, quiet rooms, community ownership — is distinct.
      - Address cultural sensitivities and how Fernhill can serve all communities.
      - Revenue modelling for wake reception income.
    `,
  },
  restoration: {
    title: "Restoration Costs & Technical Assessment",
    sectionNumber: 5,
    narrativeGuidance: `
      - Open with the condition challenge facing Fernhill — what needs to be done.
      - Present NI heritage restoration cost benchmarks per m² and per element.
      - Walk through Phase A (stabilisation), Phase B (restoration), Phase C (fit-out).
      - Present the Fernhill-specific cost estimate with assumptions.
      - Discuss risk factors, contingency, and typical heritage project overruns.
      - Reference named NI restoration case studies with comparable costs.
    `,
  },
  funding: {
    title: "The Funding Landscape — Grants, Philanthropy & Investment",
    sectionNumber: 6,
    narrativeGuidance: `
      - Open with the opportunity: Fernhill sits at the intersection of heritage, community, and cross-community — a strong position for funders.
      - Map every major funder with amounts, eligibility, and application windows.
      - Present the recommended stacking strategy.
      - Discuss timing — which funds to pursue in which order.
      - Address match-funding requirements and how to meet them.
      - Close with a funding roadmap timeline.
    `,
  },
  governance: {
    title: "Governance & Legal Structure",
    sectionNumber: 7,
    narrativeGuidance: `
      - Open with why governance structure matters for funders, credibility, and long-term sustainability.
      - Present the four models assessed (charity, CIC, development trust, hybrid).
      - Make the case for the recommended hybrid structure.
      - Describe the founding trustee profile needed.
      - Outline the registration process and timeline.
      - Reference NI-specific requirements (CCNI, Companies House).
    `,
  },
  investors: {
    title: "Investor & Philanthropic Engagement",
    sectionNumber: 8,
    narrativeGuidance: `
      - Open with the compelling case for private investment in Fernhill.
      - Map the investor landscape by category.
      - Present engagement strategies for each tier.
      - Discuss named giving opportunities (rooms, garden, cinema).
      - Address diaspora fundraising potential.
      - Outline the donor stewardship programme.
    `,
  },
  "case-studies": {
    title: "Case Studies — Lessons from NI & UK Heritage Venues",
    sectionNumber: 9,
    narrativeGuidance: `
      - Open with a synthesis: what do the most successful heritage venue restorations have in common?
      - Present each case study with narrative richness — not just data tables.
      - Draw explicit lessons for Fernhill from each.
      - Compare governance models, funding approaches, and operational structures.
      - Close with a transferable framework distilled from all case studies.
    `,
  },
  operations: {
    title: "Operational Model & Revenue Projections",
    sectionNumber: 10,
    narrativeGuidance: `
      - Open with the day-in-the-life of Fernhill at maturity.
      - Walk through each revenue stream with pricing, volume, margin.
      - Present the staffing model and team structure.
      - Show the 5-year revenue projection with assumptions.
      - Discuss the break-even point and path to sustainability.
      - Address seasonal variation and how to smooth income.
    `,
  },
};

/**
 * Writes a single master plan section.
 *
 * @param {string} topic - Research topic key (e.g. 'weddings')
 * @param {object} researchData - The parsed JSON output from the research agent
 * @param {object} options
 * @param {boolean} options.useLLM - If true, call an LLM to expand the content
 * @returns {string} - Fully written markdown section
 */
async function writeSection(topic, researchData, options = { useLLM: false }) {
  const config = SECTION_CONFIG[topic];
  if (!config) {
    throw new Error(`Unknown topic: ${topic}. Valid topics: ${Object.keys(SECTION_CONFIG).join(", ")}`);
  }

  console.log(`[section-writer] Writing section: ${config.title}`);

  if (options.useLLM) {
    // TODO: Implement LLM call here.
    // Suggested approach:
    //   1. Load the prompt from /prompts/<topic>-research.md
    //   2. Combine with researchData JSON
    //   3. Send to OpenAI/Anthropic with system prompt from /prompts/masterplan-structure.md
    //   4. Return the generated markdown
    throw new Error("LLM mode not yet implemented. Set useLLM: false to use scaffold output.");
  }

  // Scaffold output — replace with LLM-generated content
  const section = `
## Section ${config.sectionNumber}: ${config.title}

*[This section is a scaffold placeholder. Run the section writer with \`useLLM: true\` and a configured AI provider to generate the full 1,500–3,000 word narrative.]*

### Narrative Guidance for AI Writer

${config.narrativeGuidance.trim()}

### Research Data Summary

\`\`\`json
${JSON.stringify(researchData?.meta || { status: "no data" }, null, 2)}
\`\`\`

*Full research data available in /research-output/${topic}/${topic}.json*

---
`;

  return section;
}

/**
 * Writes all sections and saves to individual files.
 */
async function writeAllSections(researchOutputs = {}) {
  const sections = {};
  for (const [topic, config] of Object.entries(SECTION_CONFIG)) {
    const researchData = researchOutputs[topic] || null;
    sections[topic] = await writeSection(topic, researchData);
    await fs.writeFile(
      path.join("research-output/masterplan", `section-${config.sectionNumber}-${topic}.md`),
      sections[topic],
      "utf8"
    );
    console.log(`[section-writer] Section ${config.sectionNumber} saved.`);
  }
  return sections;
}

export { writeSection, writeAllSections, SECTION_CONFIG };
