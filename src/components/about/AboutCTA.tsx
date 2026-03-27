import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/about-hero-cliffs.jpg";

const AboutCTA = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div
        className={`relative z-10 section-padding max-w-2xl mx-auto text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-gourmand text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.15] text-sand mb-6">
          Let's Start a Conversation
        </h2>
        <p className="text-sm md:text-base font-body font-light text-sand/60 leading-[1.7] mb-12 max-w-lg mx-auto">
          Whether you are exploring an investment, considering a partnership, or simply looking for clarity, we would be pleased to speak with you.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-8 py-3 bg-sand text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-sand/90 transition-colors"
        >
          Get in Touch
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;
