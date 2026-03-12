import { useEffect, useRef, useState } from "react";
import villaMarbesa57 from "@/assets/villa-marbesa-57.jpg";

const objectives = [
  {
    title: "Rental-Orientated Renovation",
    description:
      "Through our ecosystem, including our Rental Management service, we understand guest expectations, layout preferences, durability standards and yield optimization factors.",
  },
  {
    title: "Resale-Orientated Transformation",
    description:
      "When the objective is resale, we position the property strategically within its competitive set. The goal is to deliver a fully turnkey asset that commands premium positioning at exit.",
  },
  {
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
    <section ref={ref} className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ backgroundColor: 'rgb(247, 247, 247)' }}
        >
          <h2 className="heading-lg mb-10">What Is Your Objective?</h2>

          <div className="space-y-8">
            {objectives.map((obj) => (
              <div key={obj.title}>
                <h3 className="font-display text-xl font-medium mb-3 text-foreground">
                  {obj.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
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
