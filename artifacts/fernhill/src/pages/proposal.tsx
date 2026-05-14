import { proposedUses, siteFacts } from "@/lib/proposal-data";

export default function Proposal() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-16 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-secondary mb-4 font-semibold">The proposal</p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">A community-led heritage venue for Fernhill House</h1>
          <p className="text-xl text-foreground/70 font-light max-w-3xl leading-relaxed">
            The proposal is to restore Fernhill House as a public-facing heritage asset that can generate enough earned income to help maintain the building, while remaining rooted in community benefit.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto grid lg:grid-cols-[.8fr_1.2fr] gap-12">
        <div>
          <h2 className="text-3xl font-serif text-primary mb-6">Project facts</h2>
          <div className="space-y-4">
            {siteFacts.map((fact) => (
              <div key={fact.label} className="bg-card border border-border p-5">
                <p className="text-sm uppercase tracking-widest text-secondary font-semibold">{fact.label}</p>
                <p className="mt-2 text-foreground/75 leading-relaxed">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:text-foreground/75 max-w-none">
          <h2>What is being proposed?</h2>
          <p>
            Fernhill House would be developed as a multi-use heritage house: part public amenity, part community venue, part carefully managed events space. This mixed model matters because a listed building needs a long-term maintenance income stream, not just a one-off restoration grant.
          </p>
          <h2>What is not being proposed?</h2>
          <p>
            This is not a hotel, not a private estate conversion, and not a high-volume function venue. Any future proposal would need to respect the listed building, the parkland setting, local residents, access constraints, and public benefit.
          </p>
          <h2>Why this model?</h2>
          <p>
            A purely charitable or museum-only model may struggle to fund ongoing maintenance. A purely commercial model could undermine trust and funding eligibility. The proposed route is a charitable trust with a trading subsidiary so commercial activity supports the building and community mission.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-primary mb-10">Proposed use mix</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proposedUses.map((use) => (
              <div key={use.title} className="border border-border bg-card p-6">
                <h3 className="font-serif text-2xl text-primary mb-3">{use.title}</h3>
                <p className="text-foreground/70 leading-relaxed font-light">{use.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
