import { useEffect, useRef, useState } from "react";
import { Settings, ShieldCheck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Property Setup & Onboarding",
    description:
      "From furnishing coordination to utility setup, we ensure your property is fully operational and guest-ready from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Asset Protection",
    description:
      "We oversee maintenance schedules, insurance reviews, and compliance requirements to safeguard your investment long-term.",
  },
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    description:
      "Regular reporting on rental yield, occupancy rates, and market positioning keeps you informed and in control of your asset.",
  },
];

const AdvisoryPostPurchase = () => {
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
    <section ref={ref} className="py-24 md:py-32" style={{ backgroundColor: 'rgb(250, 248, 245)' }}>
      <div className="section-padding">
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-4">After Purchase</p>
          <h2 className="heading-lg text-foreground mb-6">
            Post-Acquisition
            <br />
            <em className="italic font-light">Management</em>
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Our advisory doesn't end at closing. We accompany owners through the
            critical post-purchase phase — ensuring the property is set up,
            protected, and performing from the start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`text-center transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6">
                  <Icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium mb-4 text-foreground">
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

export default AdvisoryPostPurchase;
