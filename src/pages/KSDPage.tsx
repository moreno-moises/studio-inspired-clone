import { motion } from "framer-motion";
import Header from "@/components/Header";

const KSDPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/90 italic">
            "This is me. This is everything. All that you see, the dream. KSD"
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default KSDPage;
