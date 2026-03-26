import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/about-hero-cliffs.jpg";

const AboutHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToStory = () => {
    const el = document.getElementById("story-journey");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Marbella golden cliffs at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/40 to-foreground/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          className={`font-gourmand text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[-0.01em] text-sand mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our Oasis Story
        </h1>

        <p
          className={`text-sm md:text-base font-body font-light text-sand/70 max-w-lg mx-auto leading-[1.7] transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          From a visionary moment to Spain's premier real estate partner
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToStory}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-sand/50 hover:text-sand/80 transition-all duration-1000 delay-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[0.65rem] font-body uppercase tracking-[0.12em]">
          Scroll to discover
        </span>
        <ChevronDown size={18} strokeWidth={1} className="animate-bounce" />
      </button>
    </section>
  );
};

export default AboutHero;
