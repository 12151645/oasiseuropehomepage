import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaVilla from "@/assets/cta-villa.jpg";

const ManagementCTA = () => {
  return (
    <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={ctaVilla}
        alt="Luxury Mediterranean villa at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 section-padding max-w-3xl mx-auto text-center py-24 md:py-32">
        <p className="body-lg text-primary-foreground/80 mb-10 leading-relaxed font-display text-xl md:text-2xl font-light">
          Join a network of international property owners who trust Oasis Europe
          to manage their assets.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="gap-3 bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
            List Your Property
            <ArrowRight size={16} />
          </Button>
          <Button variant="hero-outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
            Download Owner Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ManagementCTA;
