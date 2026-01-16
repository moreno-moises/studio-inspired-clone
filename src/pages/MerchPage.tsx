import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MerchPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-glassure text-6xl md:text-8xl font-bold mb-4">Merch</h1>
          <p className="text-2xl md:text-4xl text-muted-foreground">TBA</p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default MerchPage;