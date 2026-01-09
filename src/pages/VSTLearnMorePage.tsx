import { motion } from "framer-motion";
import { Download, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vstImage from "@/assets/in-motion-vst.png";

const features = [
  "Custom multi-tap reverse delay with tempo-synced motion",
  "KSD spatial warp mode for phasey, psychedelic width",
  "Minimal, performance-focused interface with animated feedback",
  "Optimized DSP for low CPU usage",
  "Compatible with major Ableton and FL Studio",
  "Available for Windows",
  "Free updates",
];

const VSTLearnMorePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                Exclusive Release
              </p>
              <h1 className="font-glassure text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
                In Motion VST
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                The In Motion VST is a custom-built audio plugin designed to create evolving stereo motion, 
                rhythmic space, and psychedelic depth inspired by the "In Motion" EP. Built for producers 
                seeking expressive movement and motion.
              </p>
            </motion.div>

            {/* VST Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-16"
            >
              <img
                src={vstImage}
                alt="In Motion VST Plugin"
                className="w-full max-w-2xl mx-auto"
              />
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
                Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <Check className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center py-12 border-t border-border"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Ready to create?
              </h2>
              <p className="text-muted-foreground mb-8">
                The In Motion VST will be available for free download with the EP release.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-neon-pink hover:text-foreground transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Coming Soon
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VSTLearnMorePage;
