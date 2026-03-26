import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="text-xs font-body font-medium uppercase tracking-[0.08em] text-primary-foreground/40 mb-4">
          Ready to Begin?
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-medium leading-[1.15] text-primary-foreground mb-6">
          Find Your Oasis
        </h2>
        <p className="text-sm font-body font-light text-primary-foreground/60 leading-[1.7] mb-10 max-w-lg mx-auto">
          At Oasis Europe, we're not just managing properties — we're building
          legacies under the Spanish sun. Ready to find your oasis?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-8 py-3 bg-primary-foreground text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-foreground/90 transition-colors"
        >
          Contact Us Today
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;
