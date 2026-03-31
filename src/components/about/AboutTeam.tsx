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
    <section ref={ref} className="py-28 md:py-36 bg-secondary">
      <div className="section-padding">
        <div
          className={`max-w-2xl mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-6">People</p>
          <h2 className="heading-lg text-foreground mb-6">Our Team</h2>
          <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85]">
            We are a multidisciplinary team with experience across property
            operations, management, and residential asset improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-5xl">
          {departments.map((dept, i) => (
            <div
              key={dept.title}
              className={`border-t border-border pt-8 pb-6 pr-8 transition-all duration-700 ${
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
