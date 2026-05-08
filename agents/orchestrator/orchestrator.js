/**
 * FERNHILL MASTER PLAN ORCHESTRATOR
 * -----------------------------------
 * Runs all research agents in sequence, collects their outputs,
 * passes them to the writer agents, and produces the final master plan.
 *
 * Usage:
 *   node --experimental-vm-modules agents/orchestrator/orchestrator.js
 *
 * Or with an npm script:
 *   pnpm run masterplan
 *
 * Environment variables required for LLM mode:
 *   OPENAI_API_KEY or ANTHROPIC_API_KEY
 *   RESEARCH_MODE=live   (set to 'scaffold' for dry-run without LLM calls)
 */

import { run as runWeddings } from "../research/wedding-agent.js";
import { run as runWakes } from "../research/wake-agent.js";
import { run as runRestoration } from "../research/restoration-agent.js";
import { run as runFunding } from "../research/funding-agent.js";
import { run as runGovernance } from "../research/governance-agent.js";
import { run as runInvestors } from "../research/investor-agent.js";
import { run as runCaseStudies } from "../research/case-study-agent.js";
import { run as runOperations } from "../research/operations-agent.js";
import { assembleMasterPlan } from "../writer/masterplan-writer.js";

const RESEARCH_MODE = process.env.RESEARCH_MODE || "scaffold";

// ---------------------------------------------------------------------------
// ORCHESTRATOR PIPELINE
// ---------------------------------------------------------------------------

async function runPipeline() {
  console.log("╔═══════════════════════════════════════════════════════╗");
  console.log("║     FERNHILL MASTER PLAN RESEARCH ENGINE v1.0.0      ║");
  console.log("╚═══════════════════════════════════════════════════════╝");
  console.log(`Mode: ${RESEARCH_MODE.toUpperCase()}`);
  console.log(`Started: ${new Date().toISOString()}`);
  console.log("");

  const results = {};
  const errors = [];

  // -------------------------------------------------------------------------
  // PHASE 1: RUN ALL RESEARCH AGENTS
  // -------------------------------------------------------------------------

  console.log("━━━ PHASE 1: RESEARCH AGENTS ━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("");

  const agents = [
    { key: "weddings", name: "Wedding Market", fn: runWeddings },
    { key: "wakes", name: "Wakes & Remembrance", fn: runWakes },
    { key: "restoration", name: "Restoration Costs", fn: runRestoration },
    { key: "funding", name: "Funding Landscape", fn: runFunding },
    { key: "governance", name: "Governance Models", fn: runGovernance },
    { key: "investors", name: "Investor Mapping", fn: runInvestors },
    { key: "case-studies", name: "Case Studies", fn: runCaseStudies },
    { key: "operations", name: "Operations & Revenue", fn: runOperations },
  ];

  for (const agent of agents) {
    try {
      console.log(`  ▶ Running ${agent.name} agent...`);
      const startTime = Date.now();
      results[agent.key] = await agent.fn();
      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`  ✓ ${agent.name} complete (${duration}s)`);
    } catch (err) {
      console.error(`  ✗ ${agent.name} FAILED: ${err.message}`);
      errors.push({ agent: agent.key, error: err.message });
      results[agent.key] = null;
    }
  }

  console.log("");

  if (errors.length > 0) {
    console.warn(`  ⚠ ${errors.length} agent(s) failed — master plan will have gaps.`);
    errors.forEach((e) => console.warn(`    - ${e.agent}: ${e.error}`));
    console.log("");
  }

  // -------------------------------------------------------------------------
  // PHASE 2: ASSEMBLE MASTER PLAN
  // -------------------------------------------------------------------------

  console.log("━━━ PHASE 2: MASTER PLAN ASSEMBLY ━━━━━━━━━━━━━━━━━━━━");
  console.log("");

  try {
    console.log("  ▶ Running master plan writer...");
    const { outputFile, wordCount } = await assembleMasterPlan(results);
    console.log(`  ✓ Master plan complete`);
    console.log(`    File: ${outputFile}`);
    console.log(`    Words: ~${wordCount.toLocaleString()}`);
    console.log(`    Pages: ~${Math.round(wordCount / 300)}`);
  } catch (err) {
    console.error(`  ✗ Master plan assembly FAILED: ${err.message}`);
    errors.push({ agent: "masterplan-writer", error: err.message });
  }

  // -------------------------------------------------------------------------
  // SUMMARY
  // -------------------------------------------------------------------------

  console.log("");
  console.log("━━━ PIPELINE COMPLETE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`Finished: ${new Date().toISOString()}`);
  console.log(`Agents run: ${agents.length}`);
  console.log(`Failures: ${errors.length}`);
  console.log(`Output: research-output/masterplan/masterplan.md`);
  console.log("");

  if (errors.length === 0) {
    console.log("✓ All agents completed successfully.");
  } else {
    console.log(`⚠ Completed with ${errors.length} error(s). Check logs above.`);
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
// ENTRY POINT
// ---------------------------------------------------------------------------

runPipeline().catch((err) => {
  console.error("[orchestrator] Fatal error:", err);
  process.exit(1);
});
