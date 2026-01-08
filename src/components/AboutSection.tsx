import { motion } from "framer-motion";

const songs = [
  "Far Away",
  "Afterglow",
  "Somewhere Higher",
  "2AM",
  "(empty space)",
  "BLEED ON",
  "for what has come to be",
  "at the hour of my death call me",
  "UNTIL I DIE",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              About <br />
              <span className="font-glassure text-neon-pink">In Motion EP</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              "In Motion" is a journey through sound and emotion—an EP that captures 
              the essence of movement, growth, and transformation.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Each track tells a story, weaving together moments of introspection 
              and energy into a cohesive sonic experience.
            </p>
          </motion.div>

          {/* Songs List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-3">
              {songs.map((song, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="font-display text-xl md:text-2xl lg:text-3xl font-light tracking-wider hover:text-neon-pink transition-colors cursor-default"
                >
                  {song}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
