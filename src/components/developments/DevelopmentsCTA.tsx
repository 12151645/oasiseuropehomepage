import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaVilla from "@/assets/cta-villa.jpg";

const DevelopmentsCTA = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src={ctaVilla}
        alt="Luxury villa project"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 section-padding max-w-3xl mx-auto text-center py-24 md:py-32">
        <p className="label-sm text-primary-foreground/70 mb-4">Project Management</p>
        <h2 className="heading-lg text-primary-foreground mb-6">Interested in Our Services?</h2>
        <p className="body-lg text-primary-foreground/70 mb-12 leading-relaxed">
          We create a tailored plan for every individual project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="gap-3 bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
            Start Your Project
            <ArrowRight size={16} />
          </Button>
          <Button variant="hero-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentsCTA;
