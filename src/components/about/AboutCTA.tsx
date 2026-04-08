import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import coastImg from "@/assets/about-coast.jpg";

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
    <section ref={ref} className="relative py-24 md:py-40 overflow-hidden">
      <img
        src={coastImg}
        alt="Marbella coastline"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-foreground/65" />

      <div
        className={`relative z-10 section-padding max-w-2xl mx-auto text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-gourmand text-2xl md:text-4xl text-primary-foreground mb-5 md:mb-6 leading-[1.2]">
          Real Estate Built on Structure
        </h2>
        <p className="text-sm md:text-base font-body font-light text-primary-foreground/75 leading-[1.8] max-w-lg mx-auto mb-12">
          Partner with a team focused on clarity, execution, and sustained performance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-3 bg-primary-foreground text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-foreground/90 transition-colors font-body"
          >
            Partner With Us
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-3 border border-primary-foreground/30 text-primary-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-primary-foreground/10 transition-colors font-body"
          >
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
