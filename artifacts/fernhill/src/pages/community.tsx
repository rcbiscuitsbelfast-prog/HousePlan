import { motion } from "framer-motion";
import communityImg from "@/assets/community-space.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Community() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-16 px-4 md:px-8 bg-muted text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-widest text-sm text-secondary mb-4 font-semibold">Proposed Concept</p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Community Events</h1>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
            The core purpose of the Fernhill Vision: returning the house to the people of Belfast.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}
          className="relative mb-20"
        >
          <div className="aspect-[21/9] overflow-hidden shadow-xl">
            <img src={communityImg} alt="Community gathering space concept" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-10 right-10 bg-white p-8 shadow-lg max-w-sm border border-border hidden md:block">
            <p className="font-serif text-xl text-primary italic">
              "A heritage space is only truly alive when it serves the community that surrounds it."
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-serif text-primary mb-6">Educational Outreach</h2>
            <p className="text-foreground/80 leading-relaxed font-light mb-4">
              We propose establishing Fernhill House as an active educational hub. Local schools would have access to the building and grounds to learn about Victorian life, Belfast's industrial history, and local heritage.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light">
              Dedicated learning spaces would be designed to host workshops, craft sessions, and historical re-enactments.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-serif text-primary mb-6">Local Groups & Arts</h2>
            <p className="text-foreground/80 leading-relaxed font-light mb-4">
              The grand rooms of the house are envisioned as meeting spaces for local historical societies, reading groups, and arts organizations.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light">
              By providing affordable, beautiful spaces, Fernhill House could become a catalyst for cultural activities in the Casement Park area, ensuring the building's preservation is intertwined with community flourishing.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}