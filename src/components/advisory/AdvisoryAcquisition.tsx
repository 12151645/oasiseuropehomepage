import { useEffect, useRef, useState } from "react";
import acquisitionImage from "@/assets/advisory-acquisition.jpg";

const AdvisoryAcquisition = () => {
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
    <section ref={ref} className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={acquisitionImage}
            alt="Private advisory consultation for luxury property acquisition"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>

        {/* Right - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-6">Purchase Management</p>
          <h2 className="heading-lg text-foreground mb-8">
            Intelligent
            <br />
            <em className="italic font-light">Acquisition</em>
          </h2>
          <p className="body-lg text-muted-foreground mb-6 leading-relaxed">
            Entering the Marbella market requires more than identifying a
            beautiful property. We guide clients through structured acquisition
            decisions grounded in data and market intelligence.
          </p>
          <div className="space-y-4 mt-4">
            <p className="font-sans-pro text-lg italic text-foreground/80">
              We do not operate as traditional brokers.
            </p>
            <p className="font-sans-pro text-lg italic text-foreground/80">
              We act as independent long-term asset advisors.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-border">
            <div>
              <p className="font-sans-pro text-3xl font-light text-foreground">€500M+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                Transaction Volume
              </p>
            </div>
            <div>
              <p className="font-sans-pro text-3xl font-light text-foreground">120+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                Acquisitions Advised
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryAcquisition;
