import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const services = [
  "Revenue management",
  "Multi-platform marketing distribution",
  "Guest communication & concierge",
  "Cleaning and maintenance coordination",
  "Property supervision",
  "Monthly performance reporting",
];

const ManagementOwnerExperience = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-4">Owner Experience</p>
          <h2 className="heading-lg mb-4">Effortless Ownership</h2>
          <p className="font-display text-xl text-muted-foreground italic mb-16">
            You retain ownership. We manage everything else.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 text-left max-w-xl mx-auto">
            {services.map((service, i) => (
              <div
                key={service}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <Check size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-foreground font-light">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementOwnerExperience;
