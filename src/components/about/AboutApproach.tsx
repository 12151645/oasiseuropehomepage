import { useEffect, useRef, useState } from "react";
import { Gem, Lightbulb, BarChart3, Handshake } from "lucide-react";

const commitments = [
  {
    icon: Gem,
    title: "Quality",
    body: "We uphold a consistent standard across every asset, process, and interaction—executed with precision and attention to detail.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We apply modern thinking and refined systems to enhance performance, efficiency, and long-term asset value.",
  },
  {
    icon: BarChart3,
    title: "Insight",
    body: "Our decisions are grounded in market knowledge, experience, and a deep understanding of local and international dynamics.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnership",
    body: "We work closely with our clients, aligning interests to build lasting relationships and sustainable outcomes.",
  },
];

const AboutApproach = () => {
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
    <section ref={ref} className="py-28 md:py-36 bg-card">
      <div className="section-padding">
        <div
          className={`max-w-2xl mx-auto text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">Our Commitment</p>
          <h2 className="heading-lg text-foreground mb-6">Our Commitment</h2>
          <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85] max-w-lg mx-auto">
            The principles that define our approach to real estate ownership and long-term value creation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto">
          {commitments.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group border-t border-border pt-8 pb-6 pr-6 transition-all duration-700 ${
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
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-[1.7]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;
