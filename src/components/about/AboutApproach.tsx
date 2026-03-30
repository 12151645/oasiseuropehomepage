import { useEffect, useRef, useState } from "react";

const steps = [
  {
    label: "Assess",
    body: "We begin by understanding each property in depth — its condition, context, and operational needs.",
  },
  {
    label: "Stabilize",
    body: "We ensure consistent management, occupancy stability, and operational control.",
  },
  {
    label: "Improve",
    body: "We implement targeted improvements to enhance asset quality and performance.",
  },
  {
    label: "Maintain",
    body: "We focus on long-term consistency through proactive management and oversight.",
  },
];

const AboutApproach = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 md:py-36 bg-card">
      <div className="section-padding">
        <div
          className={`max-w-2xl mx-auto text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">Process</p>
          <h2 className="heading-lg text-foreground">How We Work</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 border-t border-border py-8 md:py-10 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <h3 className="text-base font-medium text-foreground font-body">
                {step.label}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-[1.7] font-body">
                {step.body}
              </p>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;
