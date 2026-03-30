import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 md:py-36 bg-background border-t border-border">
      <div
        className={`section-padding max-w-2xl mx-auto text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-gourmand text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.15] text-foreground mb-6">
          Real Estate Built on Structure
        </h2>
        <p className="text-sm md:text-base font-body font-light text-muted-foreground leading-[1.7] mb-12 max-w-lg mx-auto">
          A tailored, integrated platform designed to enhance and manage residential assets, creating long-term value for owners, investors, and stakeholders.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-3 bg-foreground text-[hsl(var(--sand))] text-sm uppercase tracking-[0.12em] font-medium hover:bg-foreground/90 transition-colors font-body"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-3 border border-foreground/20 text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-foreground/5 transition-colors font-body"
          >
            Explore Our Platform
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
