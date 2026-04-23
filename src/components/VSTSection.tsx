import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import vstImage from "@/assets/in-motion-vst.png";

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
          <h2 className="font-glassure text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            In Motion VST
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Get the exact sounds from "In Motion" with my custom-built VST plugin. Stay in motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block mb-12"
        >
          {/* VST Preview Image */}
          <div className="relative overflow-hidden">
            <img
              src={vstImage}
              alt="In Motion VST Plugin"
              className="w-full max-w-sm mx-auto"
            />
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
          <Link
            to="/vst-learn-more"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-foreground font-display text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default VSTSection;
