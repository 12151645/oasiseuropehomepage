import { useEffect, useRef, useState } from "react";
import { Eye, RefreshCw, ShieldCheck, Clock } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Clarity",
    description:
      "We reduce complexity and bring structure to every aspect of property management.",
  },
  {
    icon: RefreshCw,
    title: "Consistency",
    description:
      "We believe reliable outcomes come from disciplined, repeatable execution.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "We take ownership of performance and maintain transparency with owners and partners.",
  },
  {
    icon: Clock,
    title: "Long-Term Thinking",
    description:
      "We prioritize stability, asset quality, and sustainable performance over short-term gains.",
  },
];

const AboutValues = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="section-padding">
        <div
          className={`max-w-2xl mb-20 md:mb-24 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">What We Stand For</p>
          <h2 className="heading-lg text-foreground">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`group relative border-t border-border pt-8 pb-6 pr-6 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                  <Icon
                    size={18}
                    strokeWidth={1.3}
                    className="text-accent transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-base font-medium text-foreground mb-3 leading-snug">
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
