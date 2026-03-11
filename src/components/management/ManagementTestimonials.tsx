import { useEffect, useRef, useState, useCallback } from "react";
import ctaVilla from "@/assets/cta-villa.jpg";

const testimonials = [
  {
    quote:
      "Oasis Europe transformed our villa into a high-performing asset while maintaining the highest standards of hospitality.",
    author: "Property Owner",
    location: "Marbella",
  },
  {
    quote:
      "The structured approach to revenue management delivered results far beyond what we experienced with traditional agencies.",
    author: "International Investor",
    location: "Costa del Sol",
  },
  {
    quote:
      "Complete transparency, exceptional guest reviews, and consistent performance reporting. Exactly what we needed.",
    author: "Villa Owner",
    location: "Ibiza",
  },
  {
    quote:
      "Their attention to design and positioning elevated our property to an entirely different market segment.",
    author: "Portfolio Owner",
    location: "Marbella",
  },
];

const ManagementTestimonials = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <img
        src={ctaVilla}
        alt="Luxury Mediterranean villa"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 section-padding max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-primary-foreground/70 mb-16">What Owners Say</p>

          <div className="relative min-h-[200px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <blockquote className="font-display text-2xl md:text-3xl font-light italic leading-relaxed text-foreground mb-8">
                  "{t.quote}"
                </blockquote>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {t.author} — {t.location}
                </p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-foreground scale-125" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTestimonials;
