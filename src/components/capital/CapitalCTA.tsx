import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CapitalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-capital">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="label-sm text-capital-foreground/50 mb-4">Private Capital</p>
        <h2 className="heading-lg text-capital-foreground mb-6">
          Interested in Investing?
        </h2>
        <p className="body-lg text-capital-foreground/70 mb-12 leading-relaxed">
          Contact us for more information about our Private Investment Fund
          and current investment opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:stefano@oasiseurope.nl"
            className="inline-flex items-center gap-3 px-8 py-3 bg-capital-foreground text-capital font-body text-sm uppercase tracking-[0.15em] hover:bg-capital-foreground/90 transition-colors"
          >
            Contact Us
            <ArrowRight size={16} />
          </a>
          <button className="px-8 py-3 border border-capital-foreground/30 text-capital-foreground font-body text-sm uppercase tracking-[0.15em] hover:border-capital-foreground/60 transition-colors">
            Download Investor Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default CapitalCTA;
