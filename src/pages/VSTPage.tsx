import Header from "@/components/Header";
import VSTSection from "@/components/VSTSection";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

const VSTPage = () => {
  usePageTitle("VST");
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
