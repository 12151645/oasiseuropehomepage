import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Property Evaluation",
    items: [
      "Revenue potential analysis",
      "Market positioning",
      "Operational feasibility",
    ],
  },
  {
    number: "02",
    title: "Asset Optimisation",
    items: [
      "Interior improvement recommendations",
      "Professional photography",
      "Luxury brand positioning",
    ],
  },
  {
    number: "03",
    title: "Revenue Performance",
    items: [
      "Dynamic pricing algorithms",
      "Multi-platform distribution",
      "Demand forecasting",
    ],
  },
  {
    number: "04",
    title: "Full Hospitality Operations",
    items: [
      "Guest relations",
      "Housekeeping coordination",
      "Maintenance oversight",
      "Monthly owner reporting",
    ],
  },
];

const ManagementModel = () => {
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
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="section-padding">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="label-sm text-muted-foreground mb-4">The Oasis Model</p>
          <h2 className="heading-lg mb-6">A Structured Management System</h2>
          <p className="body-lg text-muted-foreground">
            Unlike traditional agencies, Oasis Europe operates through a structured
            asset management model designed to maximise long-term property performance.
          </p>
        </div>

        {/* 4-Step Vertical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative p-8 border border-border transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <p className="label-sm text-accent mb-6">{step.number}</p>
              <h3 className="font-display text-xl font-medium mb-6 text-foreground">
                {step.title}
              </h3>
              <ul className="space-y-3">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground font-light leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-4 h-px bg-accent" />
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12 italic font-display text-lg">
          You are not a listing agency. You are an asset manager.
        </p>
      </div>
    </section>
  );
};

export default ManagementModel;
