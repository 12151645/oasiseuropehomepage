import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="label-sm text-muted-foreground mb-4">Get in Touch</p>
        <h2 className="heading-lg text-foreground mb-6">
          Let's Build Something Together
        </h2>
        <p className="body-lg text-muted-foreground mb-12 leading-relaxed">
          Whether you're exploring an acquisition, planning a renovation, or
          seeking structured management for your property — we're here to help.
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

export default AboutCTA;
