import { useEffect, useRef, useState } from "react";
import devCompleted from "@/assets/dev-completed.jpg";

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
    <section ref={ref} className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-8">Our Philosophy</p>

          <h2 className="heading-lg text-foreground mb-8">
            Design With
            <br />
            <em className="italic font-light">Market Logic</em>
          </h2>

          <div className="space-y-5 text-sm text-primary-foreground/60 font-light leading-relaxed">
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
            <p className="italic font-display text-lg text-primary-foreground">
              We create a tailored plan for every individual project.
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={devCompleted}
            alt="Completed luxury villa development"
            className={`w-full h-full object-cover transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentsShowcase;
