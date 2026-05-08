import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pb-24 min-h-[80vh] flex flex-col items-center justify-center">
      <section className="pt-24 pb-12 px-4 md:px-8 text-center w-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-foreground/70 font-light max-w-xl mx-auto leading-relaxed">
            Get in touch to discuss the proposed vision for Fernhill House.
          </p>
        </motion.div>
      </section>

      <section className="w-full max-w-5xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
          }}
        >
          <div className="bg-white p-8 border border-border shadow-sm">
            <h2 className="text-2xl font-serif text-primary mb-6">Send an Inquiry</h2>
            
            {isSubmitted ? (
              <div className="bg-muted p-6 text-center border border-secondary/30">
                <h3 className="font-serif text-xl text-primary mb-2">Thank You</h3>
                <p className="font-light text-foreground/80">Your message regarding the Fernhill Vision has been received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow"
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow"
                    data-testid="input-contact-email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-secondary transition-shadow resize-none"
                    data-testid="input-contact-message"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-none py-6 uppercase tracking-widest text-sm"
                  data-testid="button-contact-submit"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
          }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-serif text-primary mb-6">Proposed Location</h2>
            <p className="font-light text-foreground/80 leading-relaxed mb-8">
              Fernhill House is located in the Casement Park area of south Belfast. While the grounds are currently not open for public viewing, we look forward to the day we can welcome the community back through its doors.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-lg text-primary">Email</h4>
                <p className="font-light text-foreground/70">vision@fernhillheritage.org</p>
              </div>
              <div>
                <h4 className="font-serif text-lg text-primary">Press & Media</h4>
                <p className="font-light text-foreground/70">press@fernhillheritage.org</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-muted w-full aspect-video flex items-center justify-center border border-border">
            <p className="text-foreground/50 font-light uppercase tracking-widest text-sm text-center px-4">
              [ Future Map Integration Placeholder ]
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}