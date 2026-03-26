import { useEffect, useRef, useState } from "react";
import { Star, Shield, Rocket, Handshake } from "lucide-react";

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "World-class execution",
    detail:
      "Premium marketing and management that captures the full potential of every investment, setting new standards in the industry.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "Total clarity always",
    detail:
      "Real-time insights, fair processes, and full visibility into performance, costs, and decision-making at every stage.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Cutting-edge solutions",
    detail:
      "Automated systems and bespoke technology that work around the clock, freeing your time for what matters most.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Your global ally",
    detail:
      "Multilingual communication, long-term relationships, and seamless support that transcends borders and transactions.",
  },
];

const AboutValues = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-padding">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-4">Our Values</p>
          <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground">
            What Drives Us
          </h2>
        </div>

        {/* Interactive orbs layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central oasis icon */}
          <div
            className={`hidden md:flex items-center justify-center mx-auto w-20 h-20 rounded-full border border-accent/30 mb-16 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <span className="font-gourmand text-sm text-accent tracking-wider">
              OASIS
            </span>
          </div>

          {/* Orb grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              const isActive = activeIndex === i;

              return (
                <button
                  key={value.title}
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`group relative text-left p-8 rounded-full border transition-all duration-700 cursor-pointer ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } ${
                    isActive
                      ? "border-accent bg-accent/10 rounded-2xl"
                      : "border-border hover:border-accent/50 rounded-2xl"
                  }`}
                  style={{ transitionDelay: `${400 + i * 120}ms` }}
                >
                  {/* Orb circle */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-500 mb-4 ${
                      isActive
                        ? "border-accent bg-accent/20 scale-110"
                        : "border-border group-hover:border-accent/40"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`transition-colors duration-500 ${
                        isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-base font-medium text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    {value.description}
                  </p>

                  {/* Expanded detail */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground font-light leading-[1.7] border-t border-border pt-4">
                      {value.detail}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
