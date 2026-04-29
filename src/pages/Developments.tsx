import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterBand from "@/components/NewsletterBand";
import DevelopmentsHero from "@/components/developments/DevelopmentsHero";
import DevelopmentsPositioning from "@/components/developments/DevelopmentsPositioning";

import DevelopmentsModel from "@/components/developments/DevelopmentsModel";
import DevelopmentsObjectives from "@/components/developments/DevelopmentsObjectives";
import DevelopmentsShowcase from "@/components/developments/DevelopmentsShowcase";
import DevelopmentsCTA from "@/components/developments/DevelopmentsCTA";

const Developments = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <DevelopmentsHero />
      <DevelopmentsPositioning />
      
      <DevelopmentsModel />
      <DevelopmentsObjectives />
      <DevelopmentsShowcase />
      <DevelopmentsCTA />
      <NewsletterBand />
      <Footer />
    </main>
  );
};

export default Developments;
