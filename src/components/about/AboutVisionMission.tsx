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
          className={`max-w-2xl mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">Purpose</p>
          <h2 className="heading-lg text-foreground">Mission &amp; Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-5xl">
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border-t border-border pt-8">
              <p className="label-sm text-accent mb-5">Mission</p>
              <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85]">
                To simplify and improve residential real estate ownership in
                Southern Europe through disciplined management, clear processes,
                and long-term thinking.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-[400ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border-t border-border pt-8">
              <p className="label-sm text-accent mb-5">Vision</p>
              <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85]">
                To be a trusted real estate platform recognized for operational
                quality, reliability, and a more structured approach to property
                ownership across international markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
