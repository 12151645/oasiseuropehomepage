import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OasisModelSection from "@/components/OasisModelSection";
import PositioningSection from "@/components/PositioningSection";
import RentalAndCollectionSection from "@/components/RentalAndCollectionSection";
import WhyUsSection from "@/components/WhyUsSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import NewsletterBand from "@/components/NewsletterBand";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <OasisModelSection />
      <PositioningSection />
      <RentalAndCollectionSection />
      <WhyUsSection />
      <NewsSection />
      <CTASection />
      <NewsletterBand />
      <Footer />
      <FloatingCTABar />
    </main>
  );
};

export default Index;
