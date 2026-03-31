import { useEffect, useRef, useState } from "react";
import interiorImg from "@/assets/about-interior.jpg";

const points = [
  {
    title: "Better Managed Homes",
    body: "We improve the day-to-day experience of residential property ownership.",
  },
  {
    title: "Stronger Asset Performance",
    body: "We enhance operational efficiency and long-term property stability.",
  },
  {
    title: "Reduced Complexity",
    body: "We simplify cross-border ownership through structured management and clear communication.",
  },
  {
    title: "Long-Term Asset Care",
    body: "We extend the lifecycle and quality of residential assets through consistent oversight.",
  },
];

const AboutImpact = () => {
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
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Left: Image */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <img
              src={interiorImg}
              alt="Luxury villa interior with natural light"
              className="w-full h-[400px] lg:h-full object-cover"
              loading="lazy"
              width={1280}
              height={960}
            />
          </div>

          {/* Right: Content */}
          <div>
            <div
              className={`mb-12 transition-all duration-1000 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="label-sm mb-6">Results</p>
              <h2 className="heading-lg text-foreground mb-6">Our Impact</h2>
              <p className="text-sm md:text-[0.938rem] font-body font-light text-muted-foreground leading-[1.85]">
                We measure impact through the quality, stability, and long-term
                performance of the assets we manage.
              </p>
            </div>

            <div className="space-y-0">
              {points.map((point, i) => (
                <div
                  key={point.title}
                  className={`border-t border-border pt-6 pb-5 transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${400 + i * 120}ms` }}
                >
                  <h3 className="text-sm font-medium text-foreground mb-2 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-[1.7]">
                    {point.body}
                  </p>
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImpact;
