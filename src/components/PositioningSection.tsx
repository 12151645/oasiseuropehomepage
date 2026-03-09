import { useEffect, useRef, useState } from "react";
import architecturalImage from "@/assets/architectural-detail.jpg";

const PositioningSection = () => {
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
    <section ref={ref} className="bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Text */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-8">Our Position</p>
          <h2 className="heading-lg mb-8">
            We are not brokers.
            <br />
            <em className="italic">We are asset architects.</em>
          </h2>
          <p className="body-lg text-muted-foreground max-w-lg">
            Oasis Europe manages the full lifecycle of luxury real estate — from 
            acquisition and transformation to rental performance and structured exit.
          </p>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={architecturalImage}
            alt="Mediterranean architectural detail"
            className={`w-full h-full object-cover transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
