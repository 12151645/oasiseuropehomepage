import { useEffect, useRef, useState } from "react";
import aboutStoryBg from "@/assets/about-story.jpg";

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
    <section ref={ref} className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutStoryBg})` }}
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="section-padding relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-muted-foreground mb-4">Who We Are</p>
          <h2 className="heading-lg text-foreground mb-8">
            Built on the Ground,
            <br />
            <em className="italic font-light">Driven by Strategy</em>
          </h2>
          <p className="body-lg text-muted-foreground leading-relaxed mb-8">
            Oasis Europe was founded with a singular conviction: luxury property
            in Southern Spain deserves the same level of strategic oversight as
            any institutional asset class. What began as a boutique advisory
            practice has grown into a fully integrated property group.
          </p>
          <p className="body-lg text-muted-foreground leading-relaxed mb-8">
            Today, we operate across four interconnected verticals — Management,
            Developments, Capital, and Advisory — giving our clients a cohesive
            ecosystem where every decision is informed by market intelligence,
            operational experience, and long-term thinking.
          </p>
          <p className="body-lg text-muted-foreground leading-relaxed">
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
