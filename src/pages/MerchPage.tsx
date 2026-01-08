import Header from "@/components/Header";
import MerchSection from "@/components/MerchSection";
import Footer from "@/components/Footer";

const MerchPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <MerchSection />
      </main>
      <Footer />
    </div>
  );
};

export default MerchPage;
