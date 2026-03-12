import { useEffect, useRef, useState } from "react";
import { Shield, Search, TrendingUp, Handshake } from "lucide-react";
import heroImage from "@/assets/advisory-hero.jpg";

const pillars = [
  {
    icon: Search,
    title: "Market Intelligence",
    description:
      "Deep analysis of micro-markets, comparable transactions, and emerging opportunities across the Golden Triangle.",
  },
  {
    icon: Shield,
    title: "Due Diligence",
    description:
      "Comprehensive legal, fiscal, and structural review of every asset before any commitment is made.",
  },
  {
    icon: TrendingUp,
    title: "Value Optimisation",
    description:
      "Strategic positioning and timing to ensure maximum value capture on both acquisition and exit.",
  },
  {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: 'rgb(250, 248, 245)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Left - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-28 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-4">Our Approach</p>
          <h2 className="heading-lg text-foreground mb-4">
            Independent Advisory,
            <br />
            Uncompromised Standards
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed mb-12 max-w-md">
            Our advisory is built on four pillars that ensure every decision is informed, protected, and optimised.
          </p>

          <div className="space-y-0">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`group border-t border-border last:border-b py-7 transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center mt-0.5">
                      <Icon size={18} strokeWidth={1.3} className="text-foreground/70" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[450px] lg:min-h-full overflow-hidden">
          <img
            src={heroImage}
            alt="Modern architectural interior"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default AdvisoryApproach;
