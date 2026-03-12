import { useEffect, useRef, useState } from "react";
import { Home, TrendingUp, Gem } from "lucide-react";
import villaMarbesa57 from "@/assets/villa-marbesa-57.jpg";

const objectives = [
  {
    icon: Home,
    title: "Rental-Orientated Renovation",
    description:
      "We understand guest expectations, layout preferences, durability standards and yield optimization factors.",
  },
  {
    icon: TrendingUp,
    title: "Resale-Orientated Transformation",
    description:
      "We position the property strategically to deliver a fully turnkey asset that commands premium positioning at exit.",
  },
  {
    icon: Gem,
    title: "Value-Driven Transformation",
    description:
      "We align transformation with the expectations of high-end buyers — positioned at the top of its segment.",
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
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={villaMarbesa57}
        alt="Luxury villa development"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/70" />

      {/* Content */}
      <div className="relative z-10 section-padding py-24 md:py-32 w-full">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-primary-foreground/50 mb-4">Project Objectives</p>
          <h2 className="heading-lg text-primary-foreground mb-16">
            What Is Your Objective?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {objectives.map((obj, i) => {
            const Icon = obj.icon;
            return (
              <div
                key={obj.title}
                className={`border-t border-primary-foreground/20 pt-8 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                <Icon
                  size={24}
                  strokeWidth={1.2}
                  className="text-primary-foreground/60 mb-5"
                />
                <h3 className="font-display text-lg md:text-xl font-medium text-primary-foreground mb-4">
                  {obj.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">
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
