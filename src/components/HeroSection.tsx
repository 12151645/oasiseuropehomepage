import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-villa.jpg";

const stats = [
  { value: "€120M+", label: "Management Value" },
  { value: "42", label: "Projects Managed" },
  { value: "€65M+", label: "Capital Deployed" },
  { value: "28%", label: "Avg. ROI" },
  { value: "12", label: "Assets in Development" },
];

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Marbella villa at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding pb-8 md:pb-20">
        <div className="max-w-4xl">
          <p
            className={`label-sm text-sand/70 mb-4 md:mb-6 text-[0.6rem] md:text-[0.6875rem] transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Management · Development · Private Capital · Advisory · Brands
          </p>

          <h1
            className={`font-gourmand text-3xl md:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] tracking-[-0.01em] text-sand mb-5 md:mb-8 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Asset Management,
            <br />
            <em className="italic">Reimagined.</em>
          </h1>

          <p
            className={`text-[0.8rem] md:text-sm text-sand/80 max-w-2xl mb-8 md:mb-10 leading-[1.7] font-body font-light transition-all duration-1000 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            An all-inclusive asset management platform for international property owners 
            and investors in Marbella. We transform luxury real estate into structured 
            investment vehicles — combining hospitality performance, strategic design and 
            capital structuring under one ecosystem.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-16 transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Button variant="hero-light" size="lg" className="w-full sm:w-auto text-xs md:text-sm py-3">
              Explore Our Ecosystem
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="border-sand/40 text-sand hover:bg-sand hover:text-foreground w-full sm:w-auto text-xs md:text-sm py-3"
            >
              Schedule a Private Consultation
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 pt-8 md:pt-10 border-t border-sand/20 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-xl md:text-3xl font-light text-sand">
                {stat.value}
              </p>
              <p className="text-[0.6rem] md:text-xs text-sand/50 uppercase tracking-[0.08em] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;