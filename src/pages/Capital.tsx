import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CapitalHero from "@/components/capital/CapitalHero";
import CapitalPositioning from "@/components/capital/CapitalPositioning";
import CapitalModel from "@/components/capital/CapitalModel";
import CapitalExpectations from "@/components/capital/CapitalExpectations";
import CapitalLocation from "@/components/capital/CapitalLocation";
import CapitalCTA from "@/components/capital/CapitalCTA";

const Capital = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <CapitalHero />
      <CapitalPositioning />
      <CapitalModel />
      <CapitalExpectations />
      <CapitalLocation />
      <CapitalCTA />
      <Footer />
    </main>
  );
};

export default Capital;
