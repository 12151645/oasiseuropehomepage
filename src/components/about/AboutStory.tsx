import { useEffect, useRef, useState } from "react";

const AboutStory = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div
        className={`mx-auto max-w-[680px] px-6 text-left transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="label-sm text-accent mb-4">Our Beginning</p>
        <h2 className="font-gourmand text-2xl md:text-3xl font-normal text-foreground leading-[1.2] mb-10">
          A Vision Takes Root
        </h2>

        <div className="space-y-6 text-[15px] md:text-base font-body font-light text-muted-foreground leading-[1.85]">
          <p>
            Oasis Europe was founded from first-hand experience.
          </p>
          <p>
            As Dutch entrepreneurs investing in Southern Europe, we spent years navigating the realities of owning and managing property across borders—balancing opportunities abroad with the practical challenges that come with it.
          </p>
          <p>
            While the region offered exceptional potential, the process itself was often fragmented, inefficient, and lacking the level of service international investors expect.
          </p>
          <p>
            We recognised this not as outsiders, but as investors ourselves.
          </p>
          <p>
            That perspective shaped Oasis Europe: a business built to provide clarity, structure, and a more considered approach to real estate ownership in one of Europe's most sought-after regions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
