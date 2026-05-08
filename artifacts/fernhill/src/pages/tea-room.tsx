import { motion } from "framer-motion";
import teaRoomImg from "@/assets/tea-room.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function TeaRoom() {
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
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">The Heritage Tea Room</h1>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
            Imagined as the daily beating heart of the restored house — a warm, homely space for connection.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-serif text-primary mb-6">A Daily Gathering Place</h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
              We envision the ground floor of Fernhill House transformed into a beautiful, period-appropriate tea room. It would not be an exclusive dining experience, but an accessible, welcoming space for the local Casement Park community and visitors alike.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
              Imagine the scent of polished wood and fresh baking. Antique tables, the glow of a period fireplace in winter, and the warm amber light of a Belfast afternoon filtering through restored Victorian windows.
            </p>
            <ul className="space-y-4 mt-8 font-light text-foreground/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                Locally sourced baking and traditional teas
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                Accessible meeting space for local groups
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                A living showcase of Victorian domestic history
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } }
            }}
            className="w-full aspect-[4/5] overflow-hidden border border-border shadow-md p-4 bg-white"
          >
            <img src={teaRoomImg} alt="Proposed Tea Room" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}