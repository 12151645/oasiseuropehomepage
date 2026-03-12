import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
      <Footer />
    </main>
  );
};

export default About;
