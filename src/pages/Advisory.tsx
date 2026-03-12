import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdvisoryHero from "@/components/advisory/AdvisoryHero";
import AdvisoryAcquisition from "@/components/advisory/AdvisoryAcquisition";
import AdvisoryExitStrategy from "@/components/advisory/AdvisoryExitStrategy";
import AdvisoryApproach from "@/components/advisory/AdvisoryApproach";
import AdvisoryCTA from "@/components/advisory/AdvisoryCTA";

const Advisory = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <AdvisoryHero />
      <AdvisoryApproach />
      <AdvisoryAcquisition />
      <AdvisoryExitStrategy />
      <AdvisoryCTA />
      <Footer />
    </main>
  );
};

export default Advisory;
