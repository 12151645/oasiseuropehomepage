import { useEffect, useRef, useState } from "react";
import devHero from "@/assets/dev-hero.jpg";

const DevelopmentsBreak = () => {
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
    <section ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        src={devHero}
        alt="Luxury development detail"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full section-padding text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="label-sm text-primary-foreground/50 mb-6">Our Approach</p>
        <p className="font-display text-2xl md:text-4xl font-light text-primary-foreground leading-relaxed max-w-2xl italic">
          "Structure protects margin. Design protects value."
        </p>
      </div>
    </section>
  );
};

export default DevelopmentsBreak;
