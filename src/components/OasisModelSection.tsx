import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    label: "Acquire",
    description: "Access and secure high-potential real estate opportunities in prime locations.",
    tags: "Investment Advisory · Deal Sourcing · Acquisition Management · Due Diligence",
    link: "#",
  },
  {
    label: "Transform",
    description: "Reposition properties into refined, high-performing assets.",
    tags: "Project Management · Development Management · Design & Architecture · Asset Repositioning",
    link: "#",
  },
  {
    label: "Optimize",
    description: "Maximize income and desirability through operations, rentals, and brand positioning.",
    tags: "Rental Management · Revenue Management · Hospitality Operations · Asset positioning and exposure",
    link: "#",
  },
  {
    label: "Structure",
    description: "Engineer capital structures that enhance returns and protect downside.",
    tags: "Investment Structuring · Capital Advisory · Financial Modeling · Portfolio Structuring",
    link: "#",
  },
  {
    label: "Exit",
    description: "Execute strategic dispositions to realize full asset value.",
    tags: "Asset Advisory · Disposition Strategy · Sales Execution · Buyer Representation",
    link: "#",
  },
];

const OasisModelSection = () => {
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
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="section-padding">
        <div className="text-center mb-20 md:mb-24">
          <p className="label-sm mb-6">The Oasis Model</p>
          <h2 className="heading-lg">One Ecosystem. Total Control.</h2>
        </div>

        {/* Horizontal Flow */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {steps.map((step, i) => (
            <a
              key={step.label}
              href={step.link}
              className={`group flex-1 relative p-8 border border-border hover:bg-secondary/50 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Step Number */}
              <p className="label-sm text-accent mb-6">0{i + 1}</p>
              
              <h3 className="text-lg font-medium mb-1 text-foreground">
                {step.label}
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-4">
                {step.title}
              </p>
              <p className="text-sm text-muted-foreground font-light leading-[1.7] mb-6">
                {step.description}
              </p>

              <div className="flex items-center gap-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs uppercase tracking-[0.08em]">Explore</span>
                <ArrowRight size={14} />
              </div>

              {/* Connector Arrow (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                  <ArrowRight size={16} className="text-accent" />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OasisModelSection;