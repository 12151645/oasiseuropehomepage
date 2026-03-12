import { useEffect, useRef, useState } from "react";
import devPlanning from "@/assets/dev-planning.jpg";

const ManagementPositioning = () => {
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
    <section ref={ref} className="bg-black text-primary-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-primary-foreground/50 mb-8">Starting Point</p>

          <h2 className="heading-lg text-primary-foreground mb-8">How Do We Start?</h2>

          <div className="space-y-5 text-sm text-primary-foreground/70 font-light leading-relaxed">
            <p className="body-lg text-primary-foreground font-normal">
              Every project begins with a clear objective.
            </p>
            <p>
              Is the project a personal lifestyle upgrade? Designed to increase
              rental performance? A strategic resale or long-term capital
              appreciation? The strategy determines the scope.
            </p>
            <p className="italic font-display text-lg text-primary-foreground">
              Design decisions are guided by purpose — not preference alone.
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={devPlanning}
            alt="Luxury renovation planning"
            className={`w-full h-full object-cover transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default ManagementPositioning;
