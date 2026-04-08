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
    <section className="relative min-h-[85svh] md:min-h-[90vh] flex flex-col justify-end overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury Mediterranean villa overlooking the sea"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />

      <div className="relative z-10 section-padding pb-10 md:pb-24 pt-32">
        <div className="max-w-2xl">
          <p
            className={`text-[0.6rem] md:text-xs uppercase tracking-[0.2em] font-body font-medium text-primary-foreground/60 mb-4 md:mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            About Us
          </p>

          <h1
            className={`font-gourmand text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] mb-4 md:mb-6 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Built on Structure.
            <br />
            Driven by Results.
          </h1>

          <p
            className={`text-sm md:text-base font-body font-light text-primary-foreground/75 leading-[1.8] max-w-lg mb-8 md:mb-10 transition-all duration-1000 delay-[400ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            A disciplined approach to residential real estate.
          </p>

          <div
            className={`transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 bg-primary-foreground text-foreground text-xs md:text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-foreground/90 transition-colors font-body"
            >
              Book a Private Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-4 right-6 md:bottom-10 md:right-12 flex flex-col items-center gap-2 text-primary-foreground/40 transition-all duration-1000 delay-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-body">Scroll</span>
        <div className="w-px h-6 md:h-8 bg-primary-foreground/30 animate-pulse" />
      </div>
    </section>
  );
};

export default AboutHero;
