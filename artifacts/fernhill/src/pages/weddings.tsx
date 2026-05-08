import { motion } from "framer-motion";
import ceremonyImg from "@/assets/ceremony-room.png";
import gardenImg from "@/assets/walled-garden.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Weddings() {
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
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Weddings & Ceremonies</h1>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
            Imagining an elegant heritage setting where history and romance meet, providing a deeply memorable start to life together.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-serif text-primary mb-6">The Ceremony Room</h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
              Our vision includes the restoration of the principal reception rooms into magnificent spaces for ceremonies. With original wooden panelling, tall sash windows bathing the room in natural amber light, and the quiet dignity of a historic home.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              This space would be designed to feel both grand and intimately personal—a far cry from commercial hotel function rooms.
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
            className="aspect-[4/5] md:aspect-square overflow-hidden border-8 border-white shadow-xl"
          >
            <img src={ceremonyImg} alt="Proposed ceremony room" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
            }}
            className="order-2 md:order-1 aspect-[4/5] md:aspect-square overflow-hidden border-8 border-white shadow-xl"
          >
            <img src={gardenImg} alt="Mature walled gardens" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl font-serif text-primary mb-6">Photography in the Grounds</h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
              The proposed restoration of the mature walled gardens and Victorian landscaping would provide a breathtaking backdrop for wedding photography.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Misty Belfast mornings or golden hour afternoons—the grounds of Fernhill House could become one of the city's most sought-after hidden gems for capturing lasting memories.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 px-4 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-4 text-secondary">A Note on the Future</h3>
          <p className="font-light leading-relaxed opacity-90">
            Fernhill House is currently a concept for restoration. We are sharing these ideas to build community support and present a vision of what this magnificent building could once again offer to the people of Belfast.
          </p>
        </div>
      </section>
    </div>
  );
}