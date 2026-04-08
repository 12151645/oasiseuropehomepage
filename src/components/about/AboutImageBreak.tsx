import { useEffect, useRef, useState } from "react";
import coastImg from "@/assets/about-coast.jpg";

const AboutImageBreak = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative h-[40vh] md:h-[60vh] overflow-hidden">
      <img
        src={coastImg}
        alt="Marbella coastline at sunset"
        className={`w-full h-full object-cover transition-all duration-[1.5s] ${
          visible ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`}
        loading="lazy"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-gourmand text-xl md:text-3xl lg:text-4xl text-primary-foreground text-center max-w-3xl px-6 md:px-8 leading-[1.3]">
          Structure creates clarity.
          <br />
          <span className="text-primary-foreground/70">Clarity creates value.</span>
        </p>
      </div>
    </section>
  );
};

export default AboutImageBreak;
