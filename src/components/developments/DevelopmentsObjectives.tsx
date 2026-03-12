import { useEffect, useRef, useState } from "react";
import { Home, TrendingUp, Gem } from "lucide-react";

const objectives = [
  {
    icon: Home,
    title: "Rental-Orientated Renovation",
    description:
      "Through our ecosystem, including our Rental Management service, we understand guest expectations, layout preferences, durability standards and yield optimization factors.",
  },
  {
    icon: TrendingUp,
    title: "Resale-Orientated Transformation",
    description:
      "When the objective is resale, we position the property strategically within its competitive set. The goal is to deliver a fully turnkey asset that commands premium positioning at exit.",
  },
  {
    icon: Gem,
    title: "Value-Driven Transformation",
    description:
      "Our renovation philosophy is grounded in market logic. We align transformation with the expectations of high-end buyers. The result is a property positioned at the top of its segment.",
  },
];

const DevelopmentsObjectives = () => {
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
    <section ref={ref} className="py-24 md:py-32 bg-black text-primary-foreground">
      <div className="section-padding">
        <div className="text-center mb-16 md:mb-20">
          <p className="label-sm text-primary-foreground/50 mb-4">Project Objectives</p>
          <h2 className="heading-lg text-primary-foreground">What Is Your Objective?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {objectives.map((obj, i) => {
            const Icon = obj.icon;
            return (
              <div
                key={obj.title}
                className={`text-center transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6">
                  <Icon size={28} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium mb-4 text-foreground">
                  {obj.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {obj.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentsObjectives;
