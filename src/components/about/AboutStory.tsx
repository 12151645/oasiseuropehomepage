import { useEffect, useRef, useState } from "react";
import aboutStoryBg from "@/assets/about-team.jpg";

const AboutStory = () => {
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
    <section ref={ref} className="relative py-32 md:py-44">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutStoryBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="section-padding relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-primary-foreground/60 mb-6">Who We Are</p>
          <h2 className="heading-xl text-primary-foreground mb-10">
            Built on the Ground,
            <br />
            <em className="italic font-light">Driven by Strategy</em>
          </h2>
          <p className="text-lg md:text-xl font-body font-light text-primary-foreground/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Oasis Europe was founded with a singular conviction: luxury property
            in Southern Spain deserves the same level of strategic oversight as
            any institutional asset class. What began as a boutique advisory
            practice has grown into a fully integrated property group.
          </p>
          <p className="text-lg md:text-xl font-body font-light text-primary-foreground/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Today, we operate across four interconnected verticals — Management,
            Developments, Capital, and Advisory — giving our clients a cohesive
            ecosystem where every decision is informed by market intelligence,
            operational experience, and long-term thinking.
          </p>
          <p className="text-lg md:text-xl font-body font-light text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Based in Marbella's Golden Triangle, we combine deep local
            knowledge with the discipline of structured asset management.
            Every property we touch benefits from this dual perspective.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
