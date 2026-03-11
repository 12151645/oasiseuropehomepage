import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ManagementHero from "@/components/management/ManagementHero";
import ManagementPositioning from "@/components/management/ManagementPositioning";
import ManagementModel from "@/components/management/ManagementModel";
import ManagementListings from "@/components/management/ManagementListings";
import ManagementPhilosophy from "@/components/management/ManagementPhilosophy";
import ManagementOwnerExperience from "@/components/management/ManagementOwnerExperience";
import ManagementTestimonials from "@/components/management/ManagementTestimonials";
import ManagementCTA from "@/components/management/ManagementCTA";

const Management = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ManagementHero />
      <ManagementPositioning />
      <ManagementModel />
      <ManagementListings />
      <ManagementPhilosophy />
      <ManagementOwnerExperience />
      <ManagementTestimonials />
      <ManagementCTA />
      <Footer />
    </main>
  );
};

export default Management;
