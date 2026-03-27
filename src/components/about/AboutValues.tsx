import { useEffect, useRef, useState } from "react";

const values = [
  {
    title: "Clarity",
    description: "Clear thinking. Direct advice.",
  },
  {
    title: "Discretion",
    description: "Trust and confidentiality at every stage.",
  },
  {
    title: "Discipline",
    description: "Selective, considered decision-making.",
  },
  {
    title: "Partnership",
    description: "Working closely with our clients, with aligned interests over the long term.",
  },
];

const AboutValues = () => {
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
    <section ref={ref} className="py-24 md:py-28 bg-card">
      <div className="section-padding max-w-4xl mx-auto">
        <div
          className={`mb-14 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-accent mb-4">What We Stand For</p>
          <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <h3 className="text-lg font-medium text-foreground mb-2 font-body">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-[1.7] font-body">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
