import Header from "@/components/Header";
import FeaturedAlbumSection from "@/components/FeaturedAlbumSection";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

const InMotionPage = () => {
  usePageTitle("In Motion");
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <FeaturedAlbumSection />
      </main>
      <Footer />
    </div>
  );
};

export default InMotionPage;
