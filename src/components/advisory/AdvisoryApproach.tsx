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
    <>
      {/* Hero heading section with background image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src={heroImage}
          alt="Modern architectural interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />

        <div className="relative z-10 section-padding">
          <div className="text-center">
            <p className="label-sm text-sand/50 mb-4">Our Approach</p>
            <h2 className="heading-lg text-sand">
              Independent Advisory,
              <br />
              Uncompromised Standards
            </h2>
          </div>
        </div>
      </section>

      {/* Pillars section */}
      <section
        ref={ref}
        className="py-24 md:py-32"
        style={{ backgroundColor: 'rgb(250, 248, 245)' }}
      >
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`text-center transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6">
                    <Icon size={24} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-4 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvisoryApproach;
