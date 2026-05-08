# Operations Modelling Research Prompt — Fernhill Master Plan

## Agent: operations-agent
## Section: 10 — Operational Model & Revenue Projections

---

## System Context

You are a specialist heritage venue operations consultant with experience running mixed-use cultural and event venues in Northern Ireland. You are producing operational and financial modelling research for the **Fernhill Heritage Vision Master Plan**.

All financial projections must be grounded in real market data from the wedding, hospitality, and events sectors in NI. Reference your findings from the wedding-agent and wake-agent outputs where available.

---

## Research Questions

### 1. Capacity Planning

For each proposed revenue stream at Fernhill, define:
- Maximum seated capacity (ceremony, dining, reception formats)
- Maximum standing capacity
- Realistic utilisation rate (% of available days booked)
- Available days per year per stream (accounting for setup/breakdown time)
- Seasonal variation (peaks: April–September for weddings; year-round for wakes)

**Streams:**
- Wedding ceremonies (licensed for civil ceremonies: yes/no requirements)
- Wedding receptions (dinner-dance format)
- Wake/funeral receptions (standing or seated)
- Tea room (daily service: lunch + afternoon tea)
- Heritage cinema (community screening programme)
- Private hire / community events
- Educational visits (school groups, heritage tours)

### 2. Pricing Model

For each stream, define:
- Pricing structure (day rate, per head, ticket, season)
- Low, mid, and high pricing scenarios
- Comparison to NI market rates (cite from wedding-agent / market research)
- Recommended launch pricing (conservative: 10–15% below market to build bookings)
- Target pricing at maturity (Year 3+)

### 3. Revenue Projections

Build a 5-year revenue model:

**Year 1 (Ramp-up: limited capacity, operational teething)**
- Weddings: X events at £Y average = £Z
- Wakes: X events at £Y average = £Z
- Tea Room: X covers × X days at £Y average = £Z
- Cinema: X screenings × X tickets at £Y = £Z
- Events/hire: X days at £Y = £Z
- Total Year 1 Revenue

**Year 3 (Growth: approaching market capacity)**
- Repeat above with higher volume and slightly higher pricing

**Year 5 (Maturity: full operational capacity)**
- Repeat above at full utilisation

Show assumptions clearly. Include a sensitivity table showing revenue if key assumptions change (±20% on weddings, ±20% on pricing).

### 4. Cost Model

**Direct Costs (variable — scale with revenue):**
- Catering costs (food, drink, staff) as % of catering revenue
- Event staff (casual) costs per event
- Licensing costs (alcohol, entertainment)
- Event materials and consumables

**Fixed Costs (year-round regardless of events):**
- Core staffing (salaries — use NI Living Wage as floor)
  - Venue Manager
  - Events Coordinator
  - Tea Room Manager / Head Server
  - Maintenance/Grounds
- Utilities (electricity, gas, water) — estimate for a Victorian house of ~600–800 m²
- Insurance (building, public liability, employers liability)
- Building maintenance fund (annual allowance for ongoing repairs)
- IT and booking systems
- Marketing and website
- Audit/legal/professional fees
- Charitable company compliance costs

**Capital Expenditure (one-off):**
- Commercial kitchen fit-out
- Cinema AV equipment
- Furniture, fixtures and fittings
- Accessibility provisions
- Signage and wayfinding
- POS and booking systems

### 5. Break-Even Analysis

Calculate:
- Total fixed cost per year (Year 1, Year 3, Year 5)
- Contribution margin per wedding, per wake, per tea room day
- Break-even number of weddings per year
- Break-even total revenue
- Sensitivity: how many weddings does Fernhill need to cover fixed costs assuming wakes and tea room cover their own variable costs?

### 6. Staffing Model

**Core Team (employment contracts):**
- Define each role: responsibilities, required skills, contracted hours, salary range (NI market rates)
- Total employment cost (salary + NIC + pension)

**Casual/Event Staff:**
- Average headcount per wedding
- Average headcount per wake
- Tea room and kitchen casual
- Pay rate (NLW/NMW + premium for hospitality)
- Annual casual staff spend estimate

**Volunteer Programme:**
- Is there a role for heritage volunteers (tours, archive, garden)?
- Management overhead of volunteer programme

### 7. Booking & Operations Systems

- Recommended venue management software (e.g., Tripleseat, Priava, Boomset)
- Online booking and inquiry management
- Payment processing (Stripe, Square)
- Accounting system (Xero recommended for charities)
- CRM for repeat clients and donors

### 8. Seasonal Strategy

- How to maximise off-peak revenue (January–March)
- Winter programming ideas (cinema, community events, heritage talks)
- Christmas events potential
- Corporate hire potential (January–March quieter for weddings)

---

## Output Format

1. JSON: `research-output/operations/operations.json`
2. Markdown report (2,500+ words): `research-output/operations/operations.md`
   - Capacity planning table
   - Pricing model table
   - 5-year revenue projection (table + narrative)
   - Cost model (fixed + variable breakdown)
   - Break-even analysis
   - Staffing model table
   - Systems recommendations
   - Numbered citations (NI wage data, hospitality benchmarks, utility cost data)
