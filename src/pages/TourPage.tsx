import Header from "@/components/Header";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const TourPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default TourPage;
