import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import mosheBg from "@/assets/moshe-bg.jpg";

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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mosheBg}
          alt="Moshe"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content - Bottom Left */}
      <div className="relative z-10 px-6 md:px-12 pb-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
            MOSHE
          </h1>
          <p className="text-lg md:text-xl font-light tracking-widest uppercase text-neon-pink animate-pulse-glow">
            IN MOTION OUT NOW!
          </p>
        </motion.div>

        {/* Song List with Scramble Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 space-y-1"
        >
          {songs.map((song, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="font-display text-sm md:text-base tracking-wider text-foreground/70"
            >
              <ScrambleText text={song} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground to-foreground animate-float" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
