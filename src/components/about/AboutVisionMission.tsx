import { useEffect, useRef, useState } from "react";

const AboutVisionMission = () => {
  const [visible, setVisible] = useState(false);
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

  return (
    <section ref={ref} className="py-28 md:py-36 bg-secondary">
      <div className="section-padding">
        <div
          className={`max-w-2xl mx-auto text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">Purpose</p>
          <h2 className="heading-lg text-foreground">Mission &amp; Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-5xl mx-auto">
          {/* Mission */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border-t border-border pt-8">
              <p className="label-sm text-accent mb-5">Mission</p>
              <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85] mb-8">
                To bring structure, clarity, and long-term performance to residential real estate ownership through disciplined execution and transparent management.
              </p>
              <div className="space-y-3">
                {[
                  "Deliver operational excellence across every property we manage",
                  "Create transparent systems that give owners confidence and control",
                  "Build lasting value through disciplined, repeatable processes",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="text-sm font-body font-light text-muted-foreground leading-[1.7]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`transition-all duration-1000 delay-[400ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border-t border-border pt-8">
              <p className="label-sm text-accent mb-5">Vision</p>
              <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85] mb-8">
                To define the benchmark for structured real estate ownership across Southern Europe and international markets.
              </p>
              <div className="space-y-3">
                {[
                  "Set the standard for professional residential asset management",
                  "Expand our integrated platform across key international markets",
                  "Empower a new generation of informed, strategic property owners",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="text-sm font-body font-light text-muted-foreground leading-[1.7]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
