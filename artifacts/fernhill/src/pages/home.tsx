import { Link } from "wouter";
import { motion } from "framer-motion";
import exteriorImg from "@/assets/manor-exterior.png";
import ceremonyImg from "@/assets/ceremony-room.png";
import memorialImg from "@/assets/memorial-garden.png";
import teaRoomImg from "@/assets/tea-room.png";
import cinemaImg from "@/assets/cinema.png";
import communityImg from "@/assets/community-space.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={exteriorImg} 
            alt="Fernhill House proposed exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            A Future Vision for Fernhill House
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl font-light tracking-wide opacity-90 max-w-2xl mx-auto"
          >
            Reimagining a dignified, community-rooted heritage space in the heart of Belfast.
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-background px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">The Dream We Share</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6 font-light">
              This project presents a conceptual vision—a dream of what Fernhill House could become. 
              Currently closed and awaiting restoration, we envision returning this historic Victorian manor 
              to the community as a place of dignity, remembrance, and shared heritage.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              A place not driven by profit, but by a reverence for the past and a commitment to the future of Belfast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proposed Concepts Grid */}
      <section className="py-24 bg-muted px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Proposed Uses</h2>
            <p className="text-foreground/70 uppercase tracking-widest text-sm">Imagining the future spaces</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ConceptCard 
              href="/weddings"
              image={ceremonyImg}
              title="Weddings & Ceremonies"
              description="An elegant heritage setting for life's most meaningful moments, surrounded by mature gardens."
            />
            <ConceptCard 
              href="/wakes"
              image={memorialImg}
              title="Wakes & Remembrance"
              description="Dignified, quiet spaces offering a respectful environment for families and community."
            />
            <ConceptCard 
              href="/tea-room"
              image={teaRoomImg}
              title="Heritage Tea Room"
              description="A warm, homely space for daily community connection amidst period interiors."
            />
            <ConceptCard 
              href="/cinema"
              image={cinemaImg}
              title="Community Cinema"
              description="An intimate screening room for heritage programming and local storytelling."
            />
            <ConceptCard 
              href="/community"
              image={communityImg}
              title="Community Events"
              description="Educational programs, local gatherings, and a shared space for the Casement Park area."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ConceptCard({ href, image, title, description }: { href: string, image: string, title: string, description: string }) {
  return (
    <Link href={href}>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        className="group cursor-pointer block h-full bg-card hover:bg-card/90 transition-colors border border-border"
        data-testid={`card-concept-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-8">
          <h3 className="font-serif text-2xl text-primary mb-3">{title}</h3>
          <p className="text-foreground/70 font-light leading-relaxed">
            {description}
          </p>
          <div className="mt-6 flex items-center text-secondary uppercase tracking-widest text-xs font-semibold">
            <span>Explore Concept</span>
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}