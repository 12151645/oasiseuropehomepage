import { ArrowRight } from "lucide-react";

const AdvisoryCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-advisory">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="label-sm text-advisory-foreground/50 mb-4">Asset Advisory</p>
        <h2 className="heading-lg text-advisory-foreground mb-6">
          Interested in Our Services?
        </h2>
        <p className="body-lg text-advisory-foreground/60 mb-12 leading-relaxed">
          We manage the purchase and sales process from start to finish.
          Contact us for a private consultation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@oasiseurope.nl"
            className="inline-flex items-center gap-3 px-8 py-3 bg-foreground text-background font-body text-sm uppercase tracking-[0.15em] hover:bg-foreground/90 transition-colors"
          >
            Contact Us
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCTA;
