import { useEffect, useRef, useState } from "react";
import { Home, Key, Wrench, Clock, PieChart, FileText } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Marketing",
    description:
      "We optimise the interior to create stunning pictures and showcase the holiday home on all major platforms.",
  },
  {
    icon: Key,
    title: "Booking Management",
    description:
      "We are online at any time to respond, handle and take care of all services related to the booking of our guests.",
  },
  {
    icon: Wrench,
    title: "Property Management",
    description:
      "Our team takes excellent care of all our homes. This guarantees a high quality experience to both guests and owners.",
  },
  {
    icon: Clock,
    title: "Great Response Rate",
    description:
      "Our response rate ensures clients are kept satisfied and positive during their stay.",
  },
  {
    icon: PieChart,
    title: "Smart Teams",
    description:
      "We have excellent connections with well-established local cleaning teams, laundry services and maintenance personnel.",
  },
  {
    icon: FileText,
    title: "We Are Compliant",
    description:
      "Our company is committed to be compliant and operate within all current local rules and regulations.",
  },
];

const ManagementOwnerExperience = () => {
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
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="section-padding">
        <div className="mb-16">
          <p className="label-sm text-muted-foreground mb-4">Owner Experience</p>
          <h2 className="heading-lg">Effortless Ownership</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Icon size={40} className="text-foreground mb-5" strokeWidth={1.2} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManagementOwnerExperience;
