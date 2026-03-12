import { useEffect, useRef, useState } from "react";
import rentalVilla from "@/assets/rental-villa.jpg";
import listing1 from "@/assets/listing-1.jpg";
import capitalTransformation from "@/assets/capital-transformation.jpg";

const objectives = [
  {
    image: rentalVilla,
    title: "Rental-Orientated Renovation",
    description:
      "Through our ecosystem, including our Rental Management service, we understand guest expectations, layout preferences, durability standards and yield optimization factors.",
  },
  {
    image: listing1,
    title: "Resale-Orientated Transformation",
    description:
      "When the objective is resale, we position the property strategically within its competitive set. The goal is to deliver a fully turnkey asset that commands premium positioning at exit.",
  },
  {
    image: capitalTransformation,
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
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-padding">
        <div className="text-center mb-16 md:mb-20">
          <p className="label-sm text-muted-foreground mb-4">Project Objectives</p>
          <h2 className="heading-lg">What Is Your Objective?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((obj, i) => (
            <div
              key={obj.title}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={obj.image}
                  alt={obj.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl font-medium mb-4 text-foreground">
                {obj.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentsObjectives;
