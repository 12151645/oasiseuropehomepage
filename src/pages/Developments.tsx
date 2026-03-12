import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevelopmentsHero from "@/components/developments/DevelopmentsHero";
import DevelopmentsPositioning from "@/components/developments/DevelopmentsPositioning";
import DevelopmentsBreak from "@/components/developments/DevelopmentsBreak";
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
      <DevelopmentsBreak />
      <DevelopmentsModel />
      <DevelopmentsObjectives />
      <DevelopmentsShowcase />
      <DevelopmentsCTA />
      <Footer />
    </main>
  );
};

export default Developments;
