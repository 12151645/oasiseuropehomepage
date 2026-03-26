import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/about-hero-1.jpg";
import heroImage2 from "@/assets/about-hero-2.jpg";
import heroImage3 from "@/assets/about-hero-3.jpg";

const slides = [heroImage1, heroImage2, heroImage3];

const AboutHero = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goTo = useCallback((dir: number) => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Carousel images */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1.5s] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Marbella luxury property ${i + 1}`}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-foreground/10" />

      {/* Navigation arrows */}
      <button
        onClick={() => goTo(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-sand/60 hover:text-sand transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} strokeWidth={1} />
      </button>
      <button
        onClick={() => goTo(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-sand/60 hover:text-sand transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={28} strokeWidth={1} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-8 h-[2px] transition-all duration-500 ${
              i === current ? "bg-sand" : "bg-sand/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding pb-20 md:pb-28">
        <div className="max-w-3xl">
          <p
            className={`label-sm text-sand/60 mb-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            About Oasis Europe
          </p>

          <h1
            className={`font-gourmand text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-[-0.01em] text-sand mb-6 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Crafting Your Oasis on
            <br />
            <em className="italic">Spain's Golden Coast</em>
          </h1>

          <p
            className={`text-sm md:text-base font-body font-light text-sand/75 max-w-xl mb-10 leading-[1.7] transition-all duration-1000 delay-[400ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Seamless property management for global investors.
          </p>

          <div
            className={`transition-all duration-1000 delay-[600ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Button variant="hero-light" size="lg" asChild>
              <Link to="/contact">Find Your Oasis</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
