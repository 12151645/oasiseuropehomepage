import { useEffect, useRef, useState } from "react";

const departments = [
  {
    title: "Operations",
    body: "Responsible for day-to-day property management and execution quality.",
  },
  {
    title: "Client Management",
    body: "Focused on communication, coordination, and owner relations.",
  },
  {
    title: "Platform",
    body: "Focused on systems, structure, and long-term operational development.",
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
    <section ref={ref} className="py-24 md:py-28 bg-card">
      <div className="section-padding max-w-6xl mx-auto">
        <div
          className={`mb-14 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-accent mb-4">People</p>
          <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-[15px] md:text-base font-body font-light text-muted-foreground leading-[1.85] max-w-2xl">
            We are a multidisciplinary team with experience across property operations, management, and residential asset improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {departments.map((dept, i) => (
            <div
              key={dept.title}
              className={`transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-4 font-body">
                {dept.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-[1.7] font-body">
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
