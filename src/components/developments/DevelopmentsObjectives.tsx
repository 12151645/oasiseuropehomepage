import { useEffect, useRef, useState } from "react";
import { Home, TrendingUp, Gem } from "lucide-react";
import villaMarbesa57 from "@/assets/villa-marbesa-57.jpg";

const objectives = [
  {
    icon: Home,
    number: "01",
    title: "Rental-Orientated Renovation",
    description:
      "Through our ecosystem, including our Rental Management service, we understand guest expectations, layout preferences, durability standards and yield optimization factors.",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Resale-Orientated Transformation",
    description:
      "When the objective is resale, we position the property strategically within its competitive set. The goal is to deliver a fully turnkey asset that commands premium positioning at exit.",
  },
  {
    icon: Gem,
    number: "03",
    title: "Value-Driven Transformation",
    description:
      "Our renovation philosophy is grounded in market logic. We align transformation with the expectations of high-end buyers. The result is a property positioned at the top of its segment.",
  },
];

const DevelopmentsObjectives = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
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
    <section ref={ref} className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ backgroundColor: 'rgb(247, 247, 247)' }}
        >
          <p className="label-sm text-muted-foreground mb-4">Project Objectives</p>
          <h2 className="heading-lg mb-12">What Is Your Objective?</h2>

          <div className="space-y-0">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              const isActive = active === i;
              return (
                <button
                  key={obj.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left group transition-all duration-500 border-l-2 pl-6 py-6 ${
                    isActive
                      ? "border-foreground"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className={`transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-muted-foreground/50"
                      }`}
                    />
                    <span
                      className={`font-display text-lg md:text-xl font-medium transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {obj.title}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground font-light leading-relaxed pl-9">
                      {obj.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={villaMarbesa57}
            alt="Luxury villa development"
            className={`w-full h-full object-cover transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentsObjectives;
