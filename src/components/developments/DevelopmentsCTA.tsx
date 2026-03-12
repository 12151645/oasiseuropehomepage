import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DevelopmentsCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-primary-foreground">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="label-sm text-muted-foreground mb-4">Project Management</p>
        <h2 className="heading-lg mb-6">Interested in Our Services?</h2>
        <p className="body-lg text-muted-foreground mb-12 leading-relaxed">
          We create a tailored plan for every individual project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="gap-3">
            Start Your Project
            <ArrowRight size={16} />
          </Button>
          <Button variant="hero-outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentsCTA;
