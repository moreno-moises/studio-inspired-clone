import Header from "@/components/Header";
import VSTSection from "@/components/VSTSection";
import Footer from "@/components/Footer";

const VSTPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <VSTSection />
      </main>
      <Footer />
    </div>
  );
};

export default VSTPage;
