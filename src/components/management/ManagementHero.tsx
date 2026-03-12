import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ManagementHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center bg-secondary">
      <div className="section-padding py-24 md:py-32 max-w-3xl mx-auto">
        <p
          className={`label-sm font-lora text-muted-foreground mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Management
        </p>

        <h1
          className={`heading-xl font-sans-pro text-foreground mb-6 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Hospitality Asset Management
        </h1>

        <p
          className={`font-display text-xl md:text-2xl font-light text-muted-foreground mb-6 leading-relaxed transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A property is more than a listing.
          <br />
          <em className="italic">It is a performing asset.</em>
        </p>

        <p
          className={`body-lg text-muted-foreground max-w-xl mx-auto mb-10 transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Oasis Europe manages luxury villas and apartments through a performance-driven
          hospitality model combining dynamic pricing systems, global distribution,
          hotel-level guest experience, and full operational oversight.
        </p>

      </div>

      {/* Discrete arrow at bottom right */}
      <a
        href="#contact"
        className={`absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-2 text-muted-foreground/50 hover:text-foreground transition-all duration-1000 delay-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-xs uppercase tracking-[0.15em] font-body">List Your Property</span>
        <ArrowRight size={16} strokeWidth={1.5} />
      </a>
    </section>
  );
};

export default ManagementHero;
