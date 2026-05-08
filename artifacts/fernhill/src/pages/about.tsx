import { motion } from "framer-motion";
import exteriorImg from "@/assets/manor-exterior.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-16 px-4 md:px-8 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">About The Vision</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
            Understanding the history of Fernhill House and the ambition driving its proposed restoration.
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-p:font-light prose-p:text-foreground/80 max-w-none"
        >
          <img src={exteriorImg} alt="Fernhill exterior" className="w-full aspect-video object-cover mb-12 shadow-lg" />
          
          <h2>A Victorian Legacy in Belfast</h2>
          <p>
            Fernhill House stands as a testament to Belfast's complex and rich Victorian history. Situated in the broader Casement Park area, it represents a period of significant architectural and social change in the city. However, like many heritage buildings, it requires vision and dedication to secure its future.
          </p>

          <h2>The Current Status</h2>
          <p>
            <strong>Fernhill House is currently closed to the public and is not restored.</strong> The concepts, images, and services outlined on this website represent a <em>proposed vision</em> for what the site could achieve with the right backing, community support, and funding.
          </p>

          <h2>Why Restore Fernhill?</h2>
          <p>
            We believe that historic buildings should not be preserved merely as static museums, nor should they be exclusively privatised. The Fernhill Heritage Vision proposes a middle path: a sustainable, community-focused enterprise. By offering services like weddings and a tea room, the house could generate the necessary revenue to maintain its fabric, while simultaneously offering free or low-cost access to community groups, schools, and families seeking a dignified space for wakes.
          </p>

          <blockquote>
            "Heritage is not just about preserving the past; it is about providing anchor points for a community's future."
          </blockquote>

          <h2>Join the Conversation</h2>
          <p>
            This vision requires champions. Whether you are a local resident, a heritage enthusiast, or someone who believes in the power of community-led restoration, we invite you to imagine the possibilities with us.
          </p>
        </motion.div>
      </section>
    </div>
  );
}