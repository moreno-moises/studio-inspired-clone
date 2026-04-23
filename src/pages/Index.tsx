import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import MerchSection from "@/components/MerchSection";
import FeaturedAlbumSection from "@/components/FeaturedAlbumSection";
import VSTSection from "@/components/VSTSection";
import MusicSection from "@/components/MusicSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingCrosses from "@/components/FloatingCrosses";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingCrosses />
      <Header />
      <main>
        <HeroSection />
        <FeaturedAlbumSection />
        <MusicSection />
        
        <MerchSection />
        <VSTSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
