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
    <section ref={ref} className="py-24 md:py-28 bg-background">
      <div
        className={`mx-auto max-w-[680px] px-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="label-sm text-accent mb-4">Purpose</p>
        <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground mb-10">
          Vision &amp; Mission
        </h2>

        <div className="space-y-6 text-[15px] md:text-base font-body font-light text-muted-foreground leading-[1.85]">
          <p>
            We aim to be a trusted partner for investors seeking access to high-quality real estate opportunities in Southern Europe.
          </p>
          <p>
            Our role is to identify, structure, and deliver opportunities with precision, discipline, and care—focusing not on volume, but on lasting value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
