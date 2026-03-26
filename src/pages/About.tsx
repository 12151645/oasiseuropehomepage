import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutVisionMission from "@/components/about/AboutVisionMission";
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
      <AboutValues />
      <AboutVisionMission />
      <AboutCTA />
      <Footer />
    </main>
  );
};

export default About;
