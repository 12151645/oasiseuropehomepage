import { useEffect, useRef, useState } from "react";
import { Star, Shield, Rocket, Handshake } from "lucide-react";

const values = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "World-class marketing that captures the essence of your investment, ensuring every property stands out in a competitive market.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "Clear, fair processes with real-time insights you can trust. Full visibility into performance, costs, and decision-making.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Cutting-edge technology that frees your time for what you love. Automated systems that work around the clock for your portfolio.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Seamless communication in your language, as your global ally. We build long-term relationships that transcend transactions.",
  },
];

const AboutValues = () => {
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
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-padding">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-4">Our Values</p>
          <h2 className="heading-lg text-foreground">
            What Drives Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`group p-8 border border-border rounded-sm hover:border-accent transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 mb-5 border border-border rounded-sm group-hover:border-accent transition-colors">
                  <Icon size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-medium mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-[1.7]">
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
