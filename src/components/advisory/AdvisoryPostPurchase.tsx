import { useEffect, useRef, useState } from "react";
import { Settings, ShieldCheck, BarChart3, Compass } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Settings,
    title: "Property Setup & Onboarding",
    description:
      "From furnishing coordination to utility setup, we ensure your property is fully operational and guest-ready from day one.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Ongoing Asset Protection",
    description:
      "We oversee maintenance schedules, insurance reviews, and compliance requirements to safeguard your investment long-term.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Performance Monitoring",
    description:
      "Regular reporting on rental yield, occupancy rates, and market positioning keeps you informed and in control of your asset.",
  },
  {
    number: "04",
    icon: Compass,
    title: "Strategic Repositioning",
    description:
      "Continuous market analysis and proactive adjustments ensure your property evolves with demand and maximises long-term value.",
  },
];

const AdvisoryPostPurchase = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="section-padding">
        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">After Purchase</p>
          <h2 className="heading-lg text-foreground mb-6">
            Post-Acquisition
            <br />
            <em className="italic font-normal">Management</em>
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-[1.7] max-w-lg mx-auto">
            Our advisory doesn't end at closing. We accompany owners through the
            critical post-purchase phase — ensuring the property is set up,
            protected, and performing from the start.
          </p>
        </div>

        {/* Four-column grid with top border accent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`relative border-t border-border pt-8 pb-6 pr-6 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-light tracking-[0.1em] text-muted-foreground/50">
                    {service.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Icon size={16} strokeWidth={1.3} className="text-accent" />
                  </div>
                </div>

                <h3 className="text-base font-medium text-foreground mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-[1.7]">
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