import { useEffect, useRef, useState, useCallback } from "react";
import modelInterior from "@/assets/model-interior.jpg";
import modelTerrace from "@/assets/model-terrace.jpg";

const steps = [
  {
    number: "01",
    title: "Property Evaluation",
    items: ["Revenue potential analysis", "Market positioning", "Operational feasibility"],
    image: modelInterior,
  },
  {
    number: "02",
    title: "Asset Optimisation",
    items: ["Interior improvement recommendations", "Professional photography", "Luxury brand positioning"],
    image: modelTerrace,
  },
  {
    number: "03",
    title: "Revenue Performance",
    items: ["Dynamic pricing algorithms", "Multi-platform distribution", "Demand forecasting"],
    image: modelInterior,
  },
  {
    number: "04",
    title: "Full Hospitality Operations",
    items: ["Guest relations", "Housekeeping coordination", "Maintenance oversight", "Monthly owner reporting"],
    image: modelTerrace,
  },
];

const ManagementModel = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % steps.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section ref={ref} className="bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Text + Auto-sliding Steps */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-28 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-4">The Oasis Model</p>
          <h2 className="heading-lg mb-6">A Structured Management System</h2>
          <p className="body-lg text-muted-foreground mb-12">
            Unlike traditional agencies, Oasis Europe operates through a structured
            asset management model designed to maximise long-term property performance.
          </p>

          {/* Step indicators */}
          <div className="flex items-center gap-3 mb-10">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-0.5 transition-all duration-500 ${
                  i === current ? "w-10 bg-foreground" : "w-5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* Active Step Content */}
          <div className="relative min-h-[200px]">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  i === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <p className="label-sm text-accent mb-4">{step.number}</p>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-6 text-foreground">
                  {step.title}
                </h3>
                <ul className="space-y-3">
                  {step.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground font-light leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 italic font-display text-lg text-muted-foreground">
            We are not a listing agency. We are an asset manager.
          </p>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          {steps.map((step, i) => (
            <img
              key={i}
              src={step.image}
              alt={step.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementModel;
