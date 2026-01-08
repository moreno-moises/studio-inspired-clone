import Header from "@/components/Header";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";

const MusicPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <MusicSection />
      </main>
      <Footer />
    </div>
  );
};

export default MusicPage;
