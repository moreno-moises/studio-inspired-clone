import { motion } from "framer-motion";

const cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-card overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            In Motion
          </h2>
        </motion.div>

        {/* Artistic Typography Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-relaxed text-muted-foreground mb-12">
            Part <span className="text-neon-pink font-semibold">heart</span>, 
            part <span className="text-neon-cyan font-semibold">chaos</span>.
          </p>
          
          <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold letter-spacing-extreme text-center py-12 border-y border-border">
            <span className="text-neon-pink">I</span>
            <span className="text-foreground">n</span>
            <span className="text-foreground mx-4">&nbsp;</span>
            <span className="text-neon-cyan">M</span>
            <span className="text-foreground">o</span>
            <span className="text-neon-yellow">t</span>
            <span className="text-foreground">i</span>
            <span className="text-neon-green">o</span>
            <span className="text-foreground">n</span>
          </div>
        </motion.div>

        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground"
        >
          <p>
            "In Motion" is more than an album—it's a raw, emotional journey through the 
            veils of the heart. Each track peels back another layer, revealing vulnerability, 
            passion, and the beautiful chaos of human emotion.
          </p>
          <p>
            Born from late nights in the studio and early morning reflections, this project 
            captures the essence of what it means to feel deeply in a world that often asks 
            us to feel nothing at all.
          </p>
        </motion.div>

        {/* Cities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {cities.map((city, index) => (
            <span
              key={city}
              className={`font-display text-2xl md:text-3xl font-bold ${
                index % 2 === 0 ? "text-neon-pink" : "text-neon-cyan"
              } opacity-50 hover:opacity-100 transition-opacity cursor-default`}
              style={{
                transform: `rotate(${(index - 2) * 5}deg)`,
              }}
            >
              {city}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
