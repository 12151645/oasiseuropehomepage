import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/about-hero-cliffs.jpg";

const AboutHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden" style={{ height: "95vh" }}>
      <img
        src={heroImage}
        alt="Marbella architectural real estate"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/55" />

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-xl">
          <h1
            className={`font-gourmand text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] text-[hsl(var(--sand))] mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Real Estate Built
            <br />
            on Structure
          </h1>
          <p
            className={`text-[15px] md:text-base font-body font-light text-[hsl(var(--sand))]/70 max-w-lg leading-[1.7] mb-10 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            A tailored, integrated platform designed to enhance and manage residential assets, creating long-term value for owners, investors, and stakeholders.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3 bg-[hsl(var(--sand))] text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-[hsl(var(--sand))]/90 transition-colors font-body"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-3 border border-[hsl(var(--sand))]/40 text-[hsl(var(--sand))] text-sm uppercase tracking-[0.12em] font-medium hover:bg-[hsl(var(--sand))]/10 transition-colors font-body"
            >
              Explore Our Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
