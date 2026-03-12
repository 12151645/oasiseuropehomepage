import { useEffect, useRef, useState } from "react";
import devHero from "@/assets/dev-hero.jpg";
import devPlanning from "@/assets/dev-planning.jpg";
import devCompleted from "@/assets/dev-completed.jpg";
import devCtaBg from "@/assets/dev-cta-bg.jpg";

const steps = [
  {
    number: "01",
    label: "Starting Point",
    title: "How Do We Start?",
    bold: "Every project begins with a clear objective.",
    description:
      "Is the project a personal lifestyle upgrade? Designed to increase rental performance? A strategic resale or long-term capital appreciation? The strategy determines the scope.",
    italic: "Design decisions are guided by purpose — not preference alone.",
    image: devHero,
  },
  {
    number: "02",
    label: "Concept & Planning",
    title: "How Do We Plan?",
    bold: "Once aligned, we develop a structured renovation plan.",
    description:
      "Every element is considered in relation to value, performance and the owner's expectation. Materials, layout, systems — each decision reflects a balance of aesthetics and return.",
    italic: "We do not simply manage construction. We manage outcomes.",
    image: devPlanning,
  },
  {
    number: "03",
    label: "Budget & Cost Control",
    title: "How Do We Protect Value?",
    bold: "We prepare a detailed renovation framework.",
    description:
      "Execution without budget control erodes value. Structure protects margin. Every cost line is tracked, benchmarked, and managed against the project's financial objectives.",
    italic: "Discipline in cost is discipline in value creation.",
    image: devCtaBg,
  },
  {
    number: "04",
    label: "Execution Oversight",
    title: "How Do We Deliver?",
    bold: "Oasis Europe manages the project on-site.",
    description:
      "Our role is to ensure the finished result meets both design standards and financial expectations. From procurement to final handover, we oversee every detail.",
    italic: "The result speaks for itself.",
    image: devCompleted,
  },
];

const DevelopmentsModel = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background">
      <div
        className={`text-center py-20 md:py-28 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ backgroundColor: 'rgb(58, 64, 50)' }}
      >
        <p className="label-sm text-white/50 mb-4">The Development Process</p>
        <h2 className="heading-lg text-white">From Vision to Completion</h2>
      </div>

      <div className="space-y-0">
        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={step.number}
              className={`grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-t border-border transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div
                className={`relative min-h-[400px] lg:min-h-full overflow-hidden ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/10" />
              </div>

              <div
                className={`flex flex-col justify-center py-16 lg:py-24 px-6 lg:px-16 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <p className="label-sm text-muted-foreground mb-6">{step.label}</p>
                <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
                  {step.title}
                </h3>
                <p className="text-base font-medium text-foreground mb-4">
                  {step.bold}
                </p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                  {step.description}
                </p>
                <p className="italic font-display text-base text-foreground/70">
                  {step.italic}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DevelopmentsModel;
