import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import MerchSection from "@/components/MerchSection";
import FeaturedAlbumSection from "@/components/FeaturedAlbumSection";
import VSTSection from "@/components/VSTSection";
import MusicSection from "@/components/MusicSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeaturedAlbumSection />
        <MusicSection />
        <EventsSection />
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
