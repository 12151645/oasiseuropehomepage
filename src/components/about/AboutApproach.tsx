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
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="section-padding max-w-3xl mx-auto">
        <div
          className={`mb-14 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-accent mb-4">Process</p>
          <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground">
            How We Work
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`py-8 border-t border-border transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="pl-6">
                <h3 className="text-base font-medium text-foreground mb-2 font-body">
                  {step.label}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-[1.7] font-body max-w-xl">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;
