import { ArrowRight } from "lucide-react";

const CapitalCTA = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="label-sm mb-6">Private Capital</p>
        <h2 className="heading-lg text-foreground mb-6">
          Interested in Investing?
        </h2>
        <p className="body-lg mb-12 leading-[1.7]">
          Contact us for more information about our Private Investment Fund
          and current investment opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:stefano@oasiseurope.nl"
            className="inline-flex items-center gap-3 px-8 py-3 bg-capital text-capital-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-capital-light transition-colors"
          >
            Contact Us
            <ArrowRight size={16} />
          </a>
          <button className="px-8 py-3 border border-foreground/30 text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:border-foreground/60 transition-colors">
            Download Investor Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default CapitalCTA;