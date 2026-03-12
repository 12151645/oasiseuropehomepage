import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import devHero from "@/assets/dev-hero.jpg";

const DevelopmentsHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden bg-developments">

      <div className="relative z-10 section-padding py-24 md:py-32 max-w-3xl mx-auto">
        <p
          className={`label-sm font-lora text-primary-foreground/70 mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Project Management
        </p>

        <h1
          className={`heading-xl font-sans-pro text-primary-foreground mb-6 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Developments
        </h1>

        <p
          className={`font-display text-xl md:text-2xl font-light text-primary-foreground/80 mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Oasis Europe Project Management oversees high-end renovations and
          repositioning projects to deliver a finished product that enhances
          value, performance and long-term positioning.
          <br />
          <em className="italic">We do not simply manage construction. We manage outcomes.</em>
        </p>
      </div>

      <a
        href="#contact"
        className={`absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground transition-all duration-1000 delay-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-xs uppercase tracking-[0.15em] font-body">Start Your Project</span>
        <ArrowRight size={16} strokeWidth={1.5} />
      </a>
    </section>
  );
};

export default DevelopmentsHero;
