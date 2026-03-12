import { useEffect, useRef, useState } from "react";
import { Settings, ShieldCheck, BarChart3 } from "lucide-react";
import postPurchaseImage from "@/assets/advisory-post-purchase.jpg";

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
    <section ref={ref} style={{ backgroundColor: 'rgb(250, 248, 245)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-6">After Purchase</p>
          <h2 className="heading-lg text-foreground mb-8">
            Post-Acquisition
            <br />
            <em className="italic font-light">Management</em>
          </h2>
          <p className="body-lg text-muted-foreground mb-12 leading-relaxed">
            Our advisory doesn't end at closing. We accompany owners through the
            critical post-purchase phase — ensuring the property is set up,
            protected, and performing from the start.
          </p>

          <div className="space-y-0">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
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
                      <h3 className="font-display text-lg font-medium text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={postPurchaseImage}
            alt="Luxury villa interior being professionally managed"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default AdvisoryPostPurchase;
