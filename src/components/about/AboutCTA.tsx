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
    <section
      ref={ref}
      className="py-24 md:py-32"
      style={{
        background: "linear-gradient(135deg, hsl(30 10% 12%), hsl(38 50% 35%))",
      }}
    >
      <div
        className={`section-padding max-w-3xl mx-auto text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="label-sm text-accent/60 mb-6">Your Journey Begins</p>
        <h2 className="font-gourmand text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.15] text-sand mb-6">
          Ready to write your
          <br />
          <em className="italic">Oasis story?</em>
        </h2>
        <p className="text-sm font-body font-light text-sand/60 leading-[1.7] mb-12 max-w-lg mx-auto">
          Advisory, private capital, development, and property management — all
          through one seamless, world-class platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-3 bg-sand text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-sand/90 transition-colors"
          >
            Start Your Journey
            <ArrowRight size={16} />
          </Link>

          <Link
            to="/management"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 uppercase tracking-[0.08em] font-medium transition-colors border-b border-accent/30 pb-1"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
