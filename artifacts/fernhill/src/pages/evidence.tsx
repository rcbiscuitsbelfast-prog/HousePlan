import { evidencePoints, sourceLinks } from "@/lib/proposal-data";

const assumptions = [
  "Parking capacity and event-day access must be measured by survey.",
  "Wedding, wake and tea room revenue should be tested through a formal demand study.",
  "Capital costs must be replaced by a survey-led QS cost plan.",
  "All planning and listed building consent requirements need pre-application advice.",
];

export default function Evidence() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-16 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-secondary mb-4 font-semibold">Evidence base</p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">What we know, and what still needs testing</h1>
          <p className="text-xl text-foreground/70 font-light max-w-3xl leading-relaxed">
            The plan separates verified facts from assumptions. This page gives readers the evidence basis and the remaining professional checks required before a funding application.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {evidencePoints.map((point) => (
            <div key={point.title} className="bg-card border border-border p-8">
              <h2 className="font-serif text-2xl text-primary mb-4">{point.title}</h2>
              <p className="text-foreground/75 leading-relaxed font-light">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif text-primary mb-6">Key assumptions to validate</h2>
            <ul className="space-y-4">
              {assumptions.map((item) => (
                <li key={item} className="border-l-4 border-secondary bg-muted p-5 text-foreground/75 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-serif text-primary mb-6">Reference links</h2>
            <div className="space-y-3">
              {sourceLinks.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-border bg-card p-5 text-primary hover:bg-muted transition-colors"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
