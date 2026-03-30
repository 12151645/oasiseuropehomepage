import { useEffect, useRef, useState } from "react";

const points = [
  {
    title: "Better Managed Homes",
    body: "We improve the day-to-day experience of residential property ownership.",
  },
  {
    title: "Stronger Asset Performance",
    body: "We enhance operational efficiency and long-term property stability.",
  },
  {
    title: "Reduced Complexity",
    body: "We simplify cross-border ownership through structured management and clear communication.",
  },
  {
    title: "Long-Term Asset Care",
    body: "We extend the lifecycle and quality of residential assets through consistent oversight.",
  },
];

const AboutImpact = () => {
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
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-padding max-w-6xl mx-auto">
        <div
          className={`mb-14 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-accent mb-4">Results</p>
          <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground">
            Our Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
          {/* Left — intro */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[15px] md:text-base font-body font-light text-muted-foreground leading-[1.85]">
              We measure impact through the quality, stability, and long-term performance of the assets we manage.
            </p>
          </div>

          {/* Right — stacked points */}
          <div className="space-y-8">
            {points.map((point, i) => (
              <div
                key={point.title}
                className={`transition-all duration-1000 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${400 + i * 120}ms` }}
              >
                <h3 className="text-base font-medium text-foreground mb-1 font-body">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-[1.7] font-body">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImpact;
