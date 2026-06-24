import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

const ContactPage = () => {
  usePageTitle("Contact");
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
