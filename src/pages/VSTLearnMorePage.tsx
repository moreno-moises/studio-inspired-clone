import { motion } from "framer-motion";
import { Download, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  "Custom-designed presets used in the In Motion EP",
  "Unique analog-modeled saturation algorithm",
  "Spatial reverb designed for atmospheric textures",
  "Intuitive interface with real-time visualization",
  "Low CPU usage for smooth performance",
  "Compatible with all major DAWs (Ableton, FL Studio, Logic, Pro Tools, etc.)",
  "Available for both macOS and Windows",
  "Free updates for life",
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
                The In Motion VST is a custom-built audio plugin that captures the exact sonic 
                character of the "In Motion" EP. Designed for producers who want to create 
                that signature atmospheric, emotional sound.
              </p>
            </motion.div>

            {/* VST Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-16"
            >
              <div className="bg-card border border-border p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-cyan/10" />
                <div className="relative z-10">
                  <div className="font-display text-3xl md:text-4xl font-bold mb-2">
                    <span className="text-neon-pink">MOSHE</span>
                    <span className="text-foreground"> // </span>
                    <span className="text-neon-cyan">MOTION</span>
                  </div>
                  <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8">
                    VST Plugin v1.0
                  </p>
                  
                  {/* Fake Knobs UI */}
                  <div className="flex justify-center gap-8 md:gap-12 mb-8">
                    {["DRIVE", "SPACE", "GRIT", "DEPTH", "MIX"].map((label) => (
                      <div key={label} className="flex flex-col items-center">
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-foreground/30 bg-background flex items-center justify-center mb-2">
                          <div className="w-1 h-5 bg-neon-pink rounded-full transform -rotate-45" />
                        </div>
                        <span className="text-xs tracking-widest text-muted-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
