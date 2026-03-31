import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/about-hero.jpg";

const AboutHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Luxury Mediterranean villa overlooking the sea"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />

      {/* Bottom-left content */}
      <div className="relative z-10 section-padding pb-16 md:pb-24 pt-32">
        <div className="max-w-2xl">
          <p
            className={`text-xs uppercase tracking-[0.2em] font-body font-medium text-primary-foreground/60 mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            About Us
          </p>

          <h1
            className={`font-gourmand text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] mb-6 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Real Estate Built
            <br />
            on Structure
          </h1>

          <p
            className={`text-sm md:text-base font-body font-light text-primary-foreground/75 leading-[1.8] max-w-lg mb-10 transition-all duration-1000 delay-[400ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            A tailored, integrated platform designed to enhance and manage
            residential assets, creating long-term value for owners, investors,
            and stakeholders.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3 bg-primary-foreground text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-foreground/90 transition-colors font-body"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-3 border border-primary-foreground/30 text-primary-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-foreground/10 transition-colors font-body"
            >
              Explore Our Platform
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 right-8 md:bottom-10 md:right-12 flex flex-col items-center gap-2 text-primary-foreground/40 transition-all duration-1000 delay-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.15em] font-body">Scroll</span>
        <div className="w-px h-8 bg-primary-foreground/30 animate-pulse" />
      </div>
    </section>
  );
};

export default AboutHero;
