import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const songs = [
  "Far Away",
  "Afterglow",
  "Somewhere Higher",
  "City Light Night (2AM)",
  "See My Face",
  "BLEED ON",
  "For What Has Come To Be",
  "Until I D.I.E.",
  "at the hour of my death call me",
];

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  const scramble = useCallback(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );
      iterations += 1 / 2;
      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (isHovering) {
      const cleanup = scramble();
      return cleanup;
    } else {
      setDisplayText(text);
    }
  }, [isHovering, scramble, text]);

  return (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="cursor-pointer hover:text-neon-pink transition-colors"
    >
      {displayText}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              About <br />
              <span className="font-glassure text-neon-pink">In Motion EP</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              "In Motion" is a journey through sound and emotion. An EP that captures the essence of movement, growth, and spiritual transformation.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Each track tells a story, weaving together moments of introspection and religious experiences into a cohesive sound.
            </p>
          </motion.div>

          {/* Songs List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative text-center lg:text-left"
          >
            <div className="grid grid-cols-1 gap-3">
              {songs.map((song, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="font-display text-xl md:text-2xl lg:text-3xl font-light tracking-wider whitespace-nowrap"
                >
                  <ScrambleText text={song} />
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
