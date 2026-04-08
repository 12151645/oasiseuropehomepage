import { useEffect, useRef, useState } from "react";

const AboutVisionMission = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState<"mission" | "vision" | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const data = {
    mission: {
      label: "Mission",
      text: "To bring structure, clarity, and long-term performance to residential real estate ownership through disciplined execution and transparent management.",
      details: [
        "Deliver operational excellence across every property we manage",
        "Create transparent systems that give owners confidence and control",
        "Build lasting value through disciplined, repeatable processes",
      ],
    },
    vision: {
      label: "Vision",
      text: "To define the benchmark for structured real estate ownership across Southern Europe and international markets.",
      details: [
        "Set the standard for professional residential asset management",
        "Expand our integrated platform across key international markets",
        "Empower a new generation of informed, strategic property owners",
      ],
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-36 bg-secondary">
      <div className="section-padding">
        <div
          className={`max-w-2xl mx-auto text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">Purpose</p>
          <h2 className="heading-lg text-foreground">Mission &amp; Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 max-w-5xl mx-auto">
          {(["mission", "vision"] as const).map((key, idx) => {
            const item = data[key];
            const isExpanded = expanded === key;
            return (
              <div
                key={key}
                onClick={() => setExpanded(isExpanded ? null : key)}
                className={`cursor-pointer group transition-all duration-1000 ${
                  idx === 0 ? "delay-200" : "delay-[400ms]"
                } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div
                  className={`border-t pt-8 pb-4 transition-all duration-300 ${
                    isExpanded
                      ? "border-accent bg-foreground/[0.03] -mx-6 px-6 rounded-sm"
                      : "border-border group-hover:border-accent/50"
                  }`}
                >
                  <p
                    className={`label-sm mb-5 transition-colors duration-300 ${
                      isExpanded ? "text-accent" : "text-accent group-hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85] mb-2 group-hover:text-foreground/70 transition-colors duration-300">
                    {item.text}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-60 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <div className="space-y-3">
                      {item.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                          <p className="text-sm font-body font-light text-muted-foreground leading-[1.7]">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p
                    className={`text-xs font-body text-accent/60 mt-4 tracking-wide uppercase transition-opacity duration-300 ${
                      isExpanded ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    Click to explore →
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
