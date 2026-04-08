import { useEffect, useRef, useState } from "react";
import textureImg from "@/assets/about-texture.jpg";

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
    <section ref={ref} className="py-20 md:py-36 bg-background">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-24 max-w-6xl mx-auto items-start">
          {/* Text column */}
          <div>
            <div
              className={`mb-8 md:mb-12 transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="label-sm mb-4 md:mb-6">Our Beginning</p>
              <h2 className="heading-lg text-foreground">How It Started</h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-5 md:space-y-6 text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85]">
                <p>Oasis Europe was founded from first-hand experience.</p>
                <p>
                  It began as a rental management business built by Dutch entrepreneurs
                  investing in Southern Europe, initially managing our own residential
                  properties across the region.
                </p>
                <p>
                  Through this work, we gained direct insight into the realities of
                  cross-border property ownership — where strong market potential was
                  often met with fragmented services, inconsistent execution, and a
                  lack of integrated management standards.
                </p>
                <p>
                  What started as a practical solution for our own properties gradually
                  evolved into a broader platform.
                </p>
                <p>
                  We built systems to improve clarity, consistency, and operational
                  control — first for ourselves, and later for others facing the same
                  challenges.
                </p>
                <p>
                  Today, Oasis Europe operates as a structured real estate platform
                  focused on managing and improving residential assets across Southern
                  Europe.
                </p>
              </div>
            </div>
          </div>

          {/* Visual column - show on mobile too */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <img
              src={textureImg}
              alt="Mediterranean architectural detail"
              className="w-full h-[280px] md:h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
              width={960}
              height={1280}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
