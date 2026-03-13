import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Project Evaluation",
    description:
      "We assess the property's current condition, potential improvements and market positioning. Before any work begins, the objective is defined.",
  },
  {
    number: "02",
    title: "Concept & Planning",
    description:
      "Once aligned, we develop a structured renovation plan. Every element is considered in relation to value, performance and the owner's expectation.",
  },
  {
    number: "03",
    title: "Budget & Cost Control",
    description:
      "We prepare a detailed renovation framework. Execution without budget control erodes value. Structure protects margin.",
  },
  {
    number: "04",
    title: "Execution Oversight",
    description:
      "Oasis Europe manages the project on-site. Our role is to ensure the finished result meets both design standards and financial expectations.",
  },
];

const DevelopmentsModel = () => {
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
    <section ref={ref} className="py-24 md:py-32" style={{ backgroundColor: 'rgb(249, 249, 249)' }}>
      <div className="section-padding">
        <div className="text-center mb-16 md:mb-20">
          <p className="label-sm text-muted-foreground mb-4">The Development Process</p>
          <h2 className="heading-lg text-foreground">From Vision to Completion</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="label-sm text-accent-foreground mb-4">{step.number}</p>
              <h3 className="font-sans-pro text-xl font-medium mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center italic font-sans-pro text-lg text-foreground/70">
          We do not simply manage construction. We manage outcomes.
        </p>
      </div>
    </section>
  );
};

export default DevelopmentsModel;
