import { useEffect, useRef, useState } from "react";

const AboutVisionMission = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<"mission" | "vision">("mission");
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

  const content = {
    mission:
      "To bring structure, clarity, and long-term performance to residential real estate ownership through disciplined execution and transparent management.",
    vision:
      "To define the benchmark for structured real estate ownership across Southern Europe and international markets.",
  };

  return (
    <section ref={ref} className="py-28 md:py-36 bg-secondary">
      <div className="section-padding">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">Purpose</p>
          <h2 className="heading-lg text-foreground mb-12">Mission &amp; Vision</h2>

          {/* Toggle */}
          <div className="inline-flex border border-border rounded-sm mb-12">
            <button
              onClick={() => setActive("mission")}
              className={`px-8 py-3 text-xs uppercase tracking-[0.15em] font-body font-medium transition-colors ${
                active === "mission"
                  ? "bg-foreground text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mission
            </button>
            <button
              onClick={() => setActive("vision")}
              className={`px-8 py-3 text-xs uppercase tracking-[0.15em] font-body font-medium transition-colors ${
                active === "vision"
                  ? "bg-foreground text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Vision
            </button>
          </div>

          <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85] max-w-lg mx-auto transition-opacity duration-500">
            {content[active]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
