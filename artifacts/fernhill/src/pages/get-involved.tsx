const audiences = [
  {
    title: "Local residents and community groups",
    ask: "Share concerns, priorities and possible community uses before the proposal is fixed.",
  },
  {
    title: "Councillors and public bodies",
    ask: "Help open the correct officer conversations and clarify the feasibility route.",
  },
  {
    title: "Architects and consultants",
    ask: "Review the brief, identify risks, and help define the professional survey package.",
  },
  {
    title: "Funders and donors",
    ask: "Support the development phase: surveys, options appraisal, community engagement and cost planning.",
  },
];

export default function GetInvolved() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-16 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-secondary mb-4 font-semibold">Get involved</p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Help test the future of Fernhill House</h1>
          <p className="text-xl text-foreground/70 font-light max-w-3xl leading-relaxed">
            The proposal needs practical feedback, professional input, local insight and careful support. The immediate ask is for feasibility help, not final approval of a fixed scheme.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {audiences.map((audience) => (
            <div key={audience.title} className="bg-card border border-border p-8">
              <h2 className="font-serif text-2xl text-primary mb-4">{audience.title}</h2>
              <p className="text-foreground/75 leading-relaxed font-light">{audience.ask}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground p-8 md:p-12 grid lg:grid-cols-[1fr_.8fr] gap-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">What happens next?</h2>
            <p className="text-primary-foreground/85 leading-relaxed font-light">
              The project lead will use the proposal pack to speak with councillors, council officers, AHF/NLHF, heritage consultants, local groups, clergy, funeral directors, schools and potential trustees.
            </p>
          </div>
          <div className="bg-background text-foreground p-6">
            <h3 className="font-serif text-2xl text-primary mb-4">Contact placeholder</h3>
            <p className="text-foreground/70 leading-relaxed mb-4">
              This public proposal site is ready for a real project email or form once the steering group decides how enquiries should be managed.
            </p>
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold">Suggested next step: create an engagement register.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
