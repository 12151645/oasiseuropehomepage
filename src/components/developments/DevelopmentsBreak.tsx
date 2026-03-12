import { useEffect, useRef, useState } from "react";

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
    <section ref={ref} className="bg-black py-24 md:py-32 overflow-hidden">
      <div
        className={`flex flex-col items-center justify-center section-padding text-center transition-all duration-1000 ${
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
