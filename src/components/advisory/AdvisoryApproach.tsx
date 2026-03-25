import { useEffect, useRef, useState } from "react";
import { Search, Shield, TrendingUp, Handshake } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Search,
    title: "Market Intelligence",
    description:
      "Deep analysis of micro-markets, comparable transactions, and emerging opportunities across the Golden Triangle.",
  },
  {
    number: "02",
    icon: Shield,
    title: "Due Diligence",
    description:
      "Comprehensive legal, fiscal, and structural review of every asset before any commitment is made.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Value Optimisation",
    description:
      "Strategic positioning and timing to ensure maximum value capture on both acquisition and exit.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Trusted Network",
    description:
      "Access to off-market opportunities and a curated network of legal, fiscal, and design professionals.",
  },
];

const AdvisoryApproach = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="section-padding">
        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">Our Approach</p>
          <h2 className="heading-lg text-foreground mb-6">
            Independent Advisory,
            <br />
            <em className="italic font-normal">Uncompromised Standards</em>
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-[1.7] max-w-lg mx-auto">
            Our advisory is built on four pillars that ensure every decision is informed, protected, and optimised.
          </p>
        </div>

        {/* Four-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`relative border-t border-border pt-8 pb-6 pr-6 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-light tracking-[0.1em] text-muted-foreground/50">
                    {pillar.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Icon size={16} strokeWidth={1.3} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-base font-medium text-foreground mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-[1.7]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryApproach;