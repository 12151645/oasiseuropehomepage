import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterBand from "@/components/NewsletterBand";
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
      <Navbar dark />
      <ManagementHero />
      <ManagementPositioning />
      <ManagementModel />
      <ManagementPhilosophy />
      <ManagementListings />
      <ManagementOwnerExperience />
      <ManagementTestimonials />
      <ManagementCTA />
      <NewsletterBand />
      <Footer />
    </main>
  );
};

export default Management;
