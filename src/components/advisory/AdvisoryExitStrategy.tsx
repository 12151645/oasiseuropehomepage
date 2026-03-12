import { useEffect, useRef, useState } from "react";
import exitImage from "@/assets/advisory-exit.jpg";

const AdvisoryExitStrategy = () => {
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
    <section ref={ref} className="bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left - Content */}
        <div
          className={`flex flex-col justify-center section-padding py-20 lg:py-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-6">Sales Management</p>
          <h2 className="heading-lg text-foreground mb-8">
            Exit
            <br />
            <em className="italic font-light">Strategy</em>
          </h2>
          <p className="body-lg text-muted-foreground mb-6 leading-relaxed">
            Selling luxury property in Marbella requires more than listing
            exposure. It requires positioning. We oversee the transaction
            through to completion — and can advise on reinvestment.
          </p>
          <div className="space-y-3 mt-4">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground font-light">
                Strategic market positioning and timing analysis
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground font-light">
                Targeted buyer network and off-market opportunities
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground font-light">
                Full transaction management from valuation to closing
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground font-light">
                Reinvestment advisory and portfolio restructuring
              </p>
            </div>
          </div>

          <p className="mt-10 font-display text-lg italic text-foreground/70">
            Private Consultations by Appointment Only.
          </p>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={exitImage}
            alt="Luxury Mediterranean villa at sunset representing successful exit strategy"
            className={`w-full h-full object-cover transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default AdvisoryExitStrategy;
