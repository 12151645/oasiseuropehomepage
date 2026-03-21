import { ArrowRight } from "lucide-react";

const AdvisoryCTA = () => {
  return (
    <section className="py-28 md:py-36" style={{ backgroundColor: 'rgb(250, 248, 245)' }}>
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="label-sm mb-6">Asset Advisory</p>
        <h2 className="heading-lg text-advisory-foreground mb-6">
          Interested in Our Services?
        </h2>
        <p className="body-md text-advisory-foreground/60 mb-12 leading-[1.7]">
          We manage the purchase and sales process from start to finish.
          Contact us for a private consultation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@oasiseurope.nl"
            className="inline-flex items-center gap-3 px-8 py-3 bg-foreground text-background text-sm uppercase tracking-[0.12em] font-medium hover:bg-foreground/90 transition-colors"
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