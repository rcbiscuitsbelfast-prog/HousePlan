# Heritage Restoration Cost Benchmarks — Research Prompt

## Agent: restoration-agent
## Section: 5 — Restoration Costs & Technical Assessment

---

## System Context

You are a heritage construction cost consultant with expertise in listed building restoration in Northern Ireland. You are producing cost research for the **Fernhill Heritage Vision Master Plan**.

Your research must be grounded in real NI and UK cost data. No generic construction benchmarks — heritage listed buildings carry significant cost premiums due to specialist materials, conservation officer requirements, and restricted working methods.

---

## Research Questions

### 1. NI Heritage Restoration Cost Benchmarks

For each building element, provide:
- Cost per m² or per unit (NI/Northern Ireland pricing, 2023–24)
- Heritage premium vs. standard construction
- Key specification notes (e.g., natural slate vs. concrete tile; lime mortar vs. sand/cement)
- Source (BCIS, RICS, named contractor, published project costs)

**Elements to cover:**

**Roofing**
- Natural slate re-roofing (traditional Belfast/Welsh slate)
- Lead flashings and valleys
- Chimney stack repair/rebuild
- Rainwater goods (cast iron)
- Structural timber repairs (rot, beetle)

**External Walls**
- Stone repointing (lime mortar)
- Brick repointing (lime mortar)
- Ashlar stonework repair/replacement
- Render repairs (lime-based)
- External damp-proofing (appropriate for listed buildings — often injection-free)

**Windows & Doors**
- Sash window overhaul (weights, cords, draught sealing)
- Sash window replacement (heritage spec, slim-profile secondary glazing)
- Hardwood external door repair/replacement

**Internal Works**
- Lime plaster repair (lath-and-plaster ceilings)
- Ornamental plasterwork repair (cornices, roses)
- Timber floor repair/restoration
- Joinery — skirting, architrave, shutters, panelling
- Structural timber — floor beams, lintels

**Building Services (M&E)**
- Full electrical rewire (listed building spec)
- Heating system (underfloor vs. radiator; heat pump suitability)
- Plumbing upgrade
- Fire detection and suppression (sympathetic installation in listed buildings)
- Accessibility provision (lift, ramp — in listed buildings)

**External Works**
- Walled garden restoration
- Garden walls repair
- Driveway and car parking
- Drainage and utilities

### 2. Listed Building Uplift
- What is the typical cost premium for working on a listed building vs. unlisted equivalent?
- What are the key drivers of this premium?
- How does Grade/Category of listing affect cost?

### 3. NI Case Studies
For each project, provide: building name, location, listing status, restoration scope, reported total cost, cost per m² (if calculable), funders, contractor, completion date, source.

**Target projects:**
- Clifton House, Belfast (NLHF restoration)
- Duncairn Centre, Belfast
- Roe Valley Arts Centre, Limavady
- The Playhouse, Derry/Londonderry
- Crumlin Road Gaol (partial restoration works)
- Mount Stewart (National Trust — for UK benchmark)
- Hillsborough Castle restoration works
- Any other published NI listed building restoration in the last 10 years

### 4. Project Timeline & Risk

- What is a typical timeline for a heritage restoration project of this scale (say £2–5m)?
- What are the most common causes of cost overrun in NI heritage projects?
- What contingency percentage is recommended?
- What are the key risk factors specific to vacant buildings with long-term water ingress?

### 5. Planning & Consent Costs
- Listed Building Consent process in NI (Historic Environment Division)
- Planning Application costs and timelines
- Conservation officer consultation
- Historic Environment Assessment requirements
- Typical professional fees (architect, QS, structural engineer, M&E) as % of construction cost

### 6. Fernhill-Specific Estimate
Based on your benchmarks, produce a parametric cost estimate for Fernhill assuming:
- Assumed GIA: [to be confirmed by survey — use 500–800 m² as working assumption for a Victorian country house of this type]
- Phase A: Urgent stabilisation (roof, masonry, water ingress)
- Phase B: Core restoration (windows, plaster, joinery, services, accessibility)
- Phase C: Commercial fit-out (kitchen, bar, cinema fit-out, AV)

Present as a range (low–high) with assumptions listed.

---

## Output Format

1. JSON: `research-output/restoration/restoration.json`
2. Markdown report (2,000+ words): `research-output/restoration/restoration.md`
   - Cost benchmark tables by element
   - NI case study summaries
   - Risk and contingency section
   - Fernhill parametric estimate table
   - Numbered citations (BCIS, RICS, published project accounts, news reports)
