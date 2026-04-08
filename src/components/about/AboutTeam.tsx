import { useEffect, useRef, useState } from "react";

const departments = [
  {
    title: "Operations",
    body: "Managing assets with precision through structured execution and on-the-ground expertise.",
  },
  {
    title: "Client Management",
    body: "Building long-term relationships through clarity, communication, and trust.",
  },
  {
    title: "Platform",
    body: "Developing systems and infrastructure that enable scalable and efficient real estate ownership.",
  },
];

const AboutTeam = () => {
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
    <section ref={ref} className="py-20 md:py-36 bg-secondary">
      <div className="section-padding">
        <div
          className={`max-w-2xl mx-auto text-center mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">People</p>
          <h2 className="heading-lg text-foreground mb-6">Our Team</h2>
          <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85]">
            A multidisciplinary team combining operational expertise, market insight, and structured execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 max-w-5xl mx-auto">
          {departments.map((dept, i) => (
            <div
              key={dept.title}
              className={`border-t border-border pt-8 pb-6 pr-8 text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <p className="label-sm text-accent mb-4">{dept.title}</p>
              <p className="text-sm text-muted-foreground font-light leading-[1.7]">
                {dept.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
