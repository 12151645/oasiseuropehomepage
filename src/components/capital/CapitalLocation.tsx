import { useEffect, useRef, useState } from "react";
import ctaVilla from "@/assets/cta-villa.jpg";

const CapitalLocation = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <img
        src={ctaVilla}
        alt="Costa del Sol luxury property"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/65" />
      <div className="relative z-10 section-padding max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-primary-foreground/70 mb-6">Prime Location</p>
          <h2 className="heading-lg text-primary-foreground mb-8">Costa Del Sol</h2>
          <p className="body-lg text-primary-foreground/80 mb-6 leading-relaxed">
            Marbella has a rich history and a fantastic climate, making it one of the most
            sought-after real estate investment areas in Europe. Together with Estepona and
            Benahavis, the area is known as the Golden Triangle.
          </p>
          <p className="body-lg text-primary-foreground/70 leading-relaxed">
            The Costa Del Sol enjoys an average of 300 sunny days per year and welcomes
            tourists from over 150 different countries. New high-end developments by
            renowned architects are transforming the region into a modern paradise —
            providing an excellent opportunity for real estate investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CapitalLocation;
