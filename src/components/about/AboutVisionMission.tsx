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
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="section-padding max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-accent mb-4">Purpose</p>
          <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground">
            Mission &amp; Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-5 font-body">
              Mission
            </h3>
            <p className="text-[15px] md:text-base font-body font-light text-muted-foreground leading-[1.85]">
              To simplify and improve residential real estate ownership in Southern Europe through disciplined management, clear processes, and long-term thinking.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-5 font-body">
              Vision
            </h3>
            <p className="text-[15px] md:text-base font-body font-light text-muted-foreground leading-[1.85]">
              To be a trusted real estate platform recognized for operational quality, reliability, and a more structured approach to property ownership across international markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
