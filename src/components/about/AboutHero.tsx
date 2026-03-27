import { useEffect, useState } from "react";
import heroImage from "@/assets/about-hero-cliffs.jpg";

const AboutHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "70vh" }}>
      <img
        src={heroImage}
        alt="Marbella golden cliffs at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 text-center px-6">
        <h1
          className={`font-gourmand text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-sand mb-5 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our Story
        </h1>
        <p
          className={`text-sm md:text-base font-body font-light text-sand/70 max-w-md mx-auto leading-[1.7] transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Built on insight. Focused on opportunity.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
