import { useEffect, useRef, useState } from "react";
import capitalLocation from "@/assets/capital-prime-location.png";

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
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <img
        src={capitalLocation}
        alt="Costa del Sol coastline panoramic view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-capital/70" />
      <div className="relative z-10 section-padding max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-capital-foreground/50 mb-8">Prime Location</p>
          <h2 className="heading-lg text-capital-foreground mb-8">Costa Del Sol</h2>
          <p className="body-md text-capital-foreground/80 mb-6 leading-[1.7]">
            Marbella has a rich history and a fantastic climate, making it one of the most
            sought-after real estate investment areas in Europe. Together with Estepona and
            Benahavis, the area is known as the Golden Triangle.
          </p>
          <p className="body-md text-capital-foreground/70 leading-[1.7]">
            The real estate market is highly active, with new urbanisations and high-end
            properties being developed by renowned architects, taking inspiration from areas
            such as Dubai and Beverly Hills — transforming the region into a modern paradise
            and providing an excellent opportunity for real estate investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CapitalLocation;