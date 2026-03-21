import { useEffect, useRef, useState } from "react";

const DevelopmentsShowcase = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 md:py-36" style={{ backgroundColor: 'rgb(250, 248, 245)' }}>
      <div
        className={`section-padding max-w-2xl mx-auto text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="label-sm mb-10">Our Philosophy</p>

        <h2 className="heading-lg text-foreground mb-8">
          Design With Market Logic
        </h2>

        <div className="space-y-5 text-sm text-muted-foreground font-light leading-[1.7]">
          <p>
            Every element is considered in relation to value, performance
            and the owner's expectation. Execution without budget control
            erodes value.
          </p>
          <p>
            Structure protects margin. We prepare a detailed renovation
            framework and manage the project on-site to ensure the finished
            result meets both design standards and financial expectations.
          </p>
          <p className="italic font-display text-base text-foreground pt-2">
            We create a tailored plan for every individual project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentsShowcase;