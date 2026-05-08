import { motion } from "framer-motion";
import memorialImg from "@/assets/memorial-garden.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Wakes() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-muted text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-widest text-sm text-secondary mb-4 font-semibold">Proposed Concept</p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Wakes & Remembrance</h1>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
            A vision for a deeply respectful, quiet environment where families can gather to honour loved ones in a setting of profound dignity.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif text-primary mb-6">A Space for Compassion</h2>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
            In our vision for Fernhill House, we recognise the profound need within the community for spaces of remembrance that offer both scale and sensitivity. 
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed font-light">
            The proposed quiet rooms would provide families with private, heritage-appointed spaces away from the bustle of commercial venues. With soft amber lighting, period furnishings, and a deeply peaceful atmosphere, it would be a place where the community can support each other through grief.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
          }}
          className="w-full aspect-[21/9] md:aspect-[21/9] overflow-hidden mb-16 border border-border"
        >
          <img src={memorialImg} alt="Proposed memorial garden" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-serif text-primary mb-4">The Memorial Garden</h3>
            <p className="text-foreground/80 leading-relaxed font-light">
              Part of the restoration vision includes a dedicated memorial garden. A walled, quiet sanctuary planted with heritage varieties, providing a physical place of reflection within the grounds of the manor.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-primary mb-4">Community Sensitivity</h3>
            <p className="text-foreground/80 leading-relaxed font-light">
              This concept is rooted in the belief that heritage spaces belong to the people. Providing a dignified venue for wakes ensures that the house serves the community during its most vulnerable times, not just its celebrations.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}