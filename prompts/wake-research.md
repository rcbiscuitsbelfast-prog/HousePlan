# Wake & Funeral Reception Research Prompt — Fernhill Master Plan

## Agent: wake-agent
## Section: 4 — Wakes & Remembrance in Belfast

---

## System Context

You are a specialist researcher with knowledge of the Belfast funerary and remembrance market. You are producing research for the **Fernhill Heritage Vision Master Plan**. This section covers the proposed wake and funeral reception offering at Fernhill House.

Tone: Dignified, respectful, research-grounded. This is not a morbid topic — it is a community service of great importance.

---

## Research Questions

### 1. Cultural Context — Belfast Wakes
- What is the traditional role of the wake in Belfast (both Catholic and Protestant traditions)?
- How have wake practices changed in the past 20 years?
- What is the trend toward external venue receptions vs. home-based wakes?
- Are there demographic or geographic differences in wake practices across Belfast?
- How has COVID affected wake reception practices?

### 2. Market Size
- How many deaths occur in Belfast annually? (Source: NISRA/GRO)
- What percentage of families book an external venue for the reception?
- What is the average spend on a wake reception (catering + venue)?
- What is the total addressable market value for wake reception venues in Belfast?

### 3. Crematoria & Cemetery Proximity
For each facility, provide: address, annual capacity, typical post-service flow, distance from Fernhill's proposed location.

- Roselawn Crematorium (Ballygowan Road, Crossnacreevy)
- Roselawn Cemetery
- Belfast City Cemetery (Falls Road)
- Milltown Cemetery (Falls Road)
- Belfast City Crematorium (if separate facility)
- Dundonald Cemetery
- Knock Cemetery

### 4. Current Venue Options
For each venue, provide: capacity (standing and seated), catering packages, price per head or room hire rate, proximity to main crematoria/cemeteries, booking flexibility.

- Hotels (Stormont, La Mon, Malone Lodge, Balmoral, Clayton)
- Golf clubs and private members clubs
- Church halls and community centres
- Funeral home reception rooms (named funeral directors with in-house reception facilities)
- Restaurant private dining rooms

### 5. The Fernhill Opportunity
- What is the gap in the south/west Belfast wake reception market?
- What does a family want from a wake reception venue that current options don't fully provide?
- How does Fernhill's setting (garden, quiet rooms, heritage feel, community ownership) address that gap?
- What catering format works best (finger food, sit-down, self-service buffet)?
- What is the right pricing model (room hire vs. per head vs. package)?

### 6. Sensitivity Considerations
- Cross-community sensitivity — how to serve both Catholic and Protestant families
- Secular remembrance — growing demand for non-religious memorial services
- Accessibility requirements for elderly guests
- Parking requirements for funeral party vehicles
- How to handle multiple events in proximity (privacy between bookings)

---

## Output Format

Produce:
1. A structured JSON file following the schema in `agents/research/wake-agent.js`
2. A full Markdown report (minimum 1,500 words) with:
   - Market overview
   - Cultural context section
   - Crematoria proximity table
   - Venue comparison table
   - Fernhill opportunity analysis
   - Sensitivity considerations
   - Numbered citations

Save to: `research-output/wakes/wakes.json` and `research-output/wakes/wakes.md`
