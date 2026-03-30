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
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="section-padding">
        <div
          className={`max-w-2xl mx-auto text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">Results</p>
          <h2 className="heading-lg text-foreground mb-6">Our Impact</h2>
          <p className="body-md max-w-lg mx-auto">
            We measure impact through the quality, stability, and long-term
            performance of the assets we manage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-5xl mx-auto">
          {points.map((point, i) => (
            <div
              key={point.title}
              className={`border-t border-border pt-8 pb-6 pr-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <h3 className="text-base font-medium text-foreground mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-[1.7]">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutImpact;
