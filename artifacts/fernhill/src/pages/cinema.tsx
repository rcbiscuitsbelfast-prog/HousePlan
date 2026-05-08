import { motion } from "framer-motion";
import cinemaImg from "@/assets/cinema.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Cinema() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-16 px-4 md:px-8 bg-[#2A2A2A] text-[#F7F4EB] text-center border-b-8 border-secondary">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-widest text-sm text-secondary mb-4 font-semibold">Proposed Concept</p>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-[#F7F4EB]">Heritage Cinema</h1>
          <p className="text-xl text-[#F7F4EB]/70 font-light max-w-2xl mx-auto leading-relaxed">
            An intimate screening room envisioned for community storytelling, history nights, and educational programming.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
            }}
            className="w-full aspect-video lg:aspect-square overflow-hidden border border-border bg-black"
          >
            <img src={cinemaImg} alt="Proposed Heritage Cinema" className="w-full h-full object-cover opacity-90" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-serif text-primary mb-6">A Window to the Past</h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
              Our vision for Fernhill House includes the creation of a small, bespoke screening room. Finished in dark woods, velvet seating, and warm vintage lighting, it would evoke the golden age of cinema on an intimate scale.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
              This space would serve as a vital educational tool, allowing local schools, historical societies, and community groups to screen documentaries, archive footage of Belfast, and independent films in a unique heritage environment.
            </p>
            
            <div className="bg-muted p-8 border-l-4 border-secondary">
              <h3 className="font-serif text-xl text-primary mb-3">Envisioned Programming</h3>
              <ul className="space-y-2 text-foreground/70 font-light">
                <li>• Local history documentary series</li>
                <li>• Educational sessions for Belfast schools</li>
                <li>• Archive footage screenings</li>
                <li>• Private community hires</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}