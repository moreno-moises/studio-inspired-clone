import { motion } from "framer-motion";
import { Download } from "lucide-react";

const VSTSection = () => {
  return (
    <section id="vst" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Exclusive Release
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Custom VST
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Get the exact sounds from "In Motion" with my custom-built VST plugin. 
          Designed for producers who want to create that signature sound.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block mb-12"
        >
          {/* VST Preview Box */}
          <div className="bg-card border border-border p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-cyan/10" />
            <div className="relative z-10">
              <div className="font-display text-2xl md:text-3xl font-bold mb-2">
                <span className="text-neon-pink">MOSHE</span>
                <span className="text-foreground"> // </span>
                <span className="text-neon-cyan">MOTION</span>
              </div>
              <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">
                VST Plugin v1.0
              </p>
              
              {/* Fake Knobs UI */}
              <div className="flex justify-center gap-8 mb-6">
                {["DRIVE", "SPACE", "GRIT"].map((label) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-foreground/30 bg-background flex items-center justify-center mb-2">
                      <div className="w-1 h-4 bg-neon-pink rounded-full transform -rotate-45" />
                    </div>
                    <span className="text-xs tracking-widest text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground">
                Compatible with DAWs • macOS & Windows
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-neon-pink hover:text-foreground transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Free
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-foreground font-display text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-muted-foreground mt-8"
        >
          Releasing with the EP • Be the first to know
        </motion.p>
      </div>
    </section>
  );
};

export default VSTSection;
