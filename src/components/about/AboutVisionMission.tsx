import { useEffect, useRef, useState } from "react";
import { Eye, Target } from "lucide-react";

const AboutVisionMission = () => {
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
    <section ref={ref} style={{ backgroundColor: 'rgb(250, 248, 245)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        {/* Vision */}
        <div
          className={`flex flex-col justify-center section-padding py-20 md:py-28 border-b md:border-b-0 md:border-r border-border transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-6">
              <Eye size={24} className="text-accent" strokeWidth={1.5} />
            </div>
            <p className="label-sm text-muted-foreground mb-4">Our Vision</p>
            <h2 className="heading-lg text-foreground mb-6">
              Redefining Luxury
              <br />
              <em className="italic font-light">Property Ownership</em>
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              To become the reference point for structured luxury property
              ownership in Southern Europe — where every acquisition, renovation,
              and exit is guided by intelligence, transparency, and long-term
              value creation.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div
          className={`flex flex-col justify-center section-padding py-20 md:py-28 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-6">
              <Target size={24} className="text-accent" strokeWidth={1.5} />
            </div>
            <p className="label-sm text-muted-foreground mb-4">Our Mission</p>
            <h2 className="heading-lg text-foreground mb-6">
              Integrated Excellence
              <br />
              <em className="italic font-light">at Every Stage</em>
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              To provide private investors and property owners with a fully
              integrated ecosystem — from acquisition and development to
              management and exit — ensuring every asset reaches its full
              potential through structured oversight and market-driven strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
