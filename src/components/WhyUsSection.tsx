import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "All in One Platform",
    description:
      "Oasis Europe offers an all-in-one platform that integrates management, development, scaling, and operations, creating a unified ecosystem for managing every stage of the investment lifecycle.",
  },
  {
    title: "Integrated Value Creation",
    description:
      "A comprehensive approach covering acquisition, development, hospitality operations, and asset management — minimizing intermediaries and enhancing long-term value.",
  },
  {
    title: "Full Transparency",
    description:
      "We adhere to governance standards for institutional investment, ensuring investors receive full reporting, independent valuations, and clear updates throughout the process.",
  },
  {
    title: "Aligned Capital",
    description:
      "Each investment is designed to synchronize capital, strategy, and the objectives of long-term partners, ensuring disciplined governance and alignment during the investment lifecycle.",
  },
];

const WhyUsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="section-padding">
        <div className="mb-16">
          <p className="label-sm text-muted-foreground mb-4">Why Us</p>
          <h2 className="heading-lg">Why Partners Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`bg-secondary p-10 md:p-12 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="label-sm text-accent mb-4">0{i + 1}</p>
              <h3 className="heading-md mb-4">{reason.title}</h3>
              <p className="body-lg text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
