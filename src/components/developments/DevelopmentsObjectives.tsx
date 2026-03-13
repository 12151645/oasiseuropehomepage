import { useEffect, useRef, useState } from "react";
import { Home, TrendingUp, Gem } from "lucide-react";
import villaMarbesa57 from "@/assets/villa-marbesa-57.jpg";

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
    <section ref={ref} style={{ backgroundColor: 'rgb(247, 247, 247)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Left - Image */}
        <div className="relative min-h-[450px] lg:min-h-full overflow-hidden">
          <img
            src={villaMarbesa57}
            alt="Luxury villa development"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>

        {/* Right - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-28 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-4">Project Objectives</p>
          <h2 className="heading-lg text-foreground mb-4">What Is Your Objective?</h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed mb-12 max-w-md">
            The strategy determines the scope. Every project begins with a clear objective.
          </p>

          <div className="space-y-0">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.title}
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
                      <h3 className="font-sans-pro text-lg font-medium text-foreground mb-2">
                        {obj.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentsObjectives;
