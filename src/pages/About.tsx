import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutValues from "@/components/about/AboutValues";
import AboutApproach from "@/components/about/AboutApproach";
import AboutImpact from "@/components/about/AboutImpact";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  useEffect(() => {
    document.title = "About Oasis Europe | Marbella Real Estate Services";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Advisory, private capital, development, property management for global investors on Spain's South Coast.");
    }
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />
      <AboutValues />
      <AboutApproach />
      <AboutImpact />
      <AboutTeam />
      <AboutCTA />
      <Footer />
    </main>
  );
};

export default About;
