import { useEffect, useRef, useState } from "react";

const AboutStory = () => {
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
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
          {/* Text column — 3/5 */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="label-sm text-accent mb-4">How It Started</p>
            <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground leading-[1.2] mb-10">
              A Vision Takes Root
            </h2>

            <div className="space-y-6 text-[15px] md:text-base font-body font-light text-muted-foreground leading-[1.85]">
              <p>Oasis Europe was founded from first-hand experience.</p>
              <p>
                It began as a rental management business built by Dutch entrepreneurs investing in Southern Europe, initially managing our own residential properties across the region.
              </p>
              <p>
                Through this work, we gained direct insight into the realities of cross-border property ownership — where strong market potential was often met with fragmented services, inconsistent execution, and a lack of integrated management standards.
              </p>
              <p>
                What started as a practical solution for our own properties gradually evolved into a broader platform.
              </p>
              <p>
                We built systems to improve clarity, consistency, and operational control — first for ourselves, and later for others facing the same challenges.
              </p>
              <p>
                Today, Oasis Europe operates as a structured real estate platform focused on managing and improving residential assets across Southern Europe.
              </p>
            </div>
          </div>

          {/* Breathing space — 2/5 */}
          <div
            className={`hidden lg:block lg:col-span-2 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-full w-full rounded-sm bg-card" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
