import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="label-sm mb-6">Get in Touch</p>
        <h2 className="heading-lg text-foreground mb-6">
          Let's Build Something Together
        </h2>
        <p className="body-lg mb-12 leading-[1.7]">
          Whether you're exploring an acquisition, planning a renovation, or
          seeking structured management for your property — we're here to help.
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

export default AboutCTA;