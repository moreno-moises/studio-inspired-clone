import { motion } from "framer-motion";
import merchImage from "@/assets/new-merch-image.jpg";

const MerchSection = () => {
  return (
    <section id="merch" className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square overflow-hidden order-2 lg:order-1"
          >
            <img
              src={merchImage}
              alt="In Motion Merch"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Merch
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              In Motion isn't just music. It's wearable now.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-neon-pink hover:text-foreground transition-all duration-300"
            >
              Shop Now!
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
