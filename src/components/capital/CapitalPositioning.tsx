import { useEffect, useRef, useState } from "react";
import architecturalDetail from "@/assets/architectural-detail.jpg";

const stats = [
  { value: "12–24", label: "Month Project Lifecycle" },
  { value: "100%", label: "Asset-Backed Security" },
  { value: "Prime", label: "Mediterranean Locations" },
];

const CapitalPositioning = () => {
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
    <section ref={ref} className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Stats */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-8">The Concept</p>

          <div className="space-y-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-border pb-6">
                <p className="font-display text-4xl md:text-5xl font-light text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm text-muted-foreground font-light leading-relaxed">
            <p>Invest in a curated project. Acquire a prime villa below optimised value.</p>
            <p>Transform it into a premium turnkey residence. Sell strategically at enhanced market positioning.</p>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={architecturalDetail}
            alt="Architectural detail of luxury development"
            className={`w-full h-full object-cover transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default CapitalPositioning;
