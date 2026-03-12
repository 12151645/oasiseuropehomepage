import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CapitalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="label-sm text-muted-foreground mb-4">Private Capital</p>
        <h2 className="heading-lg mb-6">Interested in Investing?</h2>
        <p className="body-lg text-muted-foreground mb-12 leading-relaxed">
          Contact us for more information about our Private Capital Fund
          and current investment opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="gap-3">
            Contact Us
            <ArrowRight size={16} />
          </Button>
          <Button variant="hero-outline" size="lg">
            Download Investor Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CapitalCTA;
