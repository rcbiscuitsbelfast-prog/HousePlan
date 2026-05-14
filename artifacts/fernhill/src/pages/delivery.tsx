import { deliverySteps } from "@/lib/proposal-data";

const phases = [
  {
    title: "Phase 0: Organise",
    text: "Form a steering group, confirm the legal route, prepare briefings, and open council/funder conversations.",
  },
  {
    title: "Phase 1: Test feasibility",
    text: "Commission condition, access, heritage, planning and cost work so the proposal is based on professional evidence.",
  },
  {
    title: "Phase 2: Build the funding case",
    text: "Prepare community engagement, options appraisal, QS cost plan, financial model, and match funding strategy.",
  },
  {
    title: "Phase 3: Restore and open in stages",
    text: "Stabilise the building first, then restore core fabric, fit out viable uses, and soft-open before full operation.",
  },
];

export default function Delivery() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-16 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-secondary mb-4 font-semibold">Delivery route</p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">From proposal to fundable project</h1>
          <p className="text-xl text-foreground/70 font-light max-w-3xl leading-relaxed">
            The next stage is a professional development phase. It should prove what is possible before any final capital works or public fundraising campaign.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {phases.map((phase) => (
            <div key={phase.title} className="border border-border bg-card p-6">
              <h2 className="font-serif text-2xl text-primary mb-4">{phase.title}</h2>
              <p className="text-foreground/70 leading-relaxed font-light">{phase.text}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl font-serif text-primary mb-6">Immediate development sequence</h2>
            <p className="text-foreground/75 font-light leading-relaxed">
              These steps should happen in order. Each one reduces risk and makes the proposal more useful to architects, funders and public bodies.
            </p>
          </div>
          <ol className="space-y-4">
            {deliverySteps.map((step, index) => (
              <li key={step} className="flex gap-4 bg-muted p-5 border border-border">
                <span className="font-serif text-3xl text-secondary w-10">{index + 1}</span>
                <span className="text-foreground/75 leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
