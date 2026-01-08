import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import merchImage from "@/assets/new-merch-image.jpg";

const MerchSection = () => {
  return (
    <section 
      id="merch" 
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12"
      style={{
        backgroundImage: `url(${merchImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-glassure text-5xl md:text-6xl lg:text-8xl font-bold mb-6">
            Merch
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            In Motion isn't just music. It's wearable now.
          </p>
          <Link
            to="/merch"
            className="inline-block px-8 py-4 bg-foreground text-background font-display text-sm tracking-widest uppercase hover:bg-neon-pink hover:text-foreground transition-all duration-300"
          >
            Shop Now!
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchSection;
