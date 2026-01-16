import { motion } from "framer-motion";
import mosheBg from "@/assets/moshe-bg.jpg";

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
      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none -ml-[5px] text-white">
            MOSHE
          </h1>
          <p className="text-lg md:text-xl font-light tracking-widest uppercase text-accent animate-pulse-glow mt-2">
            IN MOTION OUT NOW!
          </p>
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
