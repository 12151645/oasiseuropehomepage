import { useEffect, useRef, useState } from "react";
import { Shield, Compass, Users, Gem } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Independence",
    description:
      "We act solely in our clients' interest. No commissions from third parties, no conflicted advice — only transparent, aligned counsel.",
  },
  {
    icon: Compass,
    title: "Strategic Rigour",
    description:
      "Every decision is grounded in data, market intelligence, and structured analysis. We don't follow trends — we follow logic.",
  },
  {
    icon: Gem,
    title: "Uncompromised Quality",
    description:
      "From the properties we manage to the renovations we deliver, we hold ourselves to the highest standards of design and execution.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "We build relationships that extend beyond single transactions. Our clients return because we protect and grow their assets over time.",
  },
];

const AboutValues = () => {
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
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-4">Our Values</p>
          <h2 className="heading-lg text-foreground">
            What Guides Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`text-center transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6">
                  <Icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans-pro text-xl font-medium mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
