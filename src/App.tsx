import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InMotionPage from "./pages/InMotionPage";
import MusicPage from "./pages/MusicPage";
import TourPage from "./pages/TourPage";
import MerchPage from "./pages/MerchPage";
import VSTPage from "./pages/VSTPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import VSTLearnMorePage from "./pages/VSTLearnMorePage";
import KSDPage from "./pages/KSDPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/in-motion" element={<InMotionPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/vst" element={<VSTPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/vst-learn-more" element={<VSTLearnMorePage />} />
          <Route path="/ksd" element={<KSDPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
