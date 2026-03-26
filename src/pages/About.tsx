import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  useEffect(() => {
    document.title = "About Oasis Europe | Luxury Property Management Marbella";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Trusted partner for international investors on Spain's South Coast — Automated, seamless property management.");
    }
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />
      <AboutValues />
      <AboutTeam />
      <AboutTestimonials />
      <AboutCTA />
      <Footer />
    </main>
  );
};

export default About;
