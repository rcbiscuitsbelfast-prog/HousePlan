import { Link } from "wouter";
import { motion } from "framer-motion";
import { evidencePoints, proposedUses, siteFacts } from "@/lib/proposal-data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-[680px] flex items-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,white,transparent_28%),linear-gradient(120deg,transparent,rgba(255,255,255,.18),transparent)]" />
        </div>

        <div className="relative z-10 px-4 md:px-8 max-w-6xl mx-auto pt-20 grid lg:grid-cols-[1.2fr_.8fr] gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
            >
              A public proposal for Fernhill House
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl font-light leading-relaxed opacity-90 max-w-2xl"
            >
              A feasibility-stage plan to restore Fernhill House in Glencairn Park as a community-led heritage venue with public access, learning, remembrance, and carefully managed earned income.
            </motion.p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/proposal" className="bg-secondary text-secondary-foreground px-6 py-4 uppercase tracking-widest text-xs font-semibold">
                Read the Proposal
              </Link>
              <Link href="/evidence" className="border border-primary-foreground/50 px-6 py-4 uppercase tracking-widest text-xs font-semibold">
                Inspect the Evidence
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-background text-foreground p-8 border border-primary-foreground/20"
          >
            <p className="uppercase tracking-widest text-xs text-secondary font-semibold mb-6">At a glance</p>
            <div className="space-y-5">
              {siteFacts.map((fact) => (
                <div key={fact.label} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                  <p className="font-serif text-xl text-primary">{fact.label}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mt-1">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">What this website is for</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6 font-light">
              This site introduces the proposal, shares the evidence gathered so far, and sets out the next steps needed before any funding application or architectural design can be finalised.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              The aim is to let councillors, council officers, funders, consultants, local residents, and potential supporters inspect the idea and understand what still needs professional validation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Proposed uses</h2>
            <p className="text-foreground/70 uppercase tracking-widest text-sm">A mixed model for public benefit and long-term upkeep</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proposedUses.map((use) => (
              <ConceptCard key={use.title} title={use.title} description={use.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[.85fr_1.15fr] gap-12">
          <div>
            <p className="uppercase tracking-widest text-sm text-secondary font-semibold mb-4">Evidence-led</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">The proposal is promising, but it must be tested properly.</h2>
            <p className="text-foreground/75 leading-relaxed font-light">
              The next stage is not a public fundraising campaign for final works. It is a development phase: survey, options appraisal, pre-application advice, community engagement, and a costed business plan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {evidencePoints.map((point) => (
              <div key={point.title} className="border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-primary mb-3">{point.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ConceptCard({ title, description }: { title: string, description: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeIn}
      className="h-full bg-card border border-border p-8"
      data-testid={`card-concept-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <h3 className="font-serif text-2xl text-primary mb-3">{title}</h3>
      <p className="text-foreground/70 font-light leading-relaxed">{description}</p>
    </motion.div>
  );
}