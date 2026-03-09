import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    label: "Acquire",
    title: "Buy & Sales Advisory",
    description: "Strategic acquisition and sales advisory for luxury real estate in prime Marbella locations.",
    link: "#",
  },
  {
    label: "Transform",
    title: "Project Management",
    description: "End-to-end design and development management, transforming properties into exceptional assets.",
    link: "#",
  },
  {
    label: "Optimize",
    title: "Rental Management",
    description: "Hospitality-grade operations maximizing yield through RNTLS Ibiza and Marbella platforms.",
    link: "#",
  },
  {
    label: "Structure",
    title: "Investment Platform",
    description: "Institutional-grade capital structuring for high-net-worth property portfolios.",
    link: "#",
  },
  {
    label: "Exit",
    title: "Brands",
    description: "Curated brand portfolio and strategic positioning for maximum asset value at exit.",
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
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-padding">
        <div className="text-center mb-16 md:mb-20">
          <p className="label-sm text-muted-foreground mb-4">The Oasis Model</p>
          <h2 className="heading-lg mb-4">One Ecosystem. Total Control.</h2>
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
              
              <h3 className="font-display text-lg font-medium mb-1 text-foreground">
                {step.label}
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-4">
                {step.title}
              </p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="flex items-center gap-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs uppercase tracking-wider">Explore</span>
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
