import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Oasis Europe transformed our Marbella property into a high-performing asset. Their attention to detail and market expertise gave us returns we never imagined possible.",
    name: "M. van der Berg",
    location: "Amsterdam, Netherlands",
  },
  {
    quote:
      "As a first-time international investor, I needed a partner I could trust completely. Oasis Europe made the entire process seamless — from acquisition to first booking.",
    name: "J. Eriksson",
    location: "Stockholm, Sweden",
  },
  {
    quote:
      "The level of transparency and professionalism is unmatched. Real-time reporting, proactive communication, and a genuine care for our investment. Simply outstanding.",
    name: "R. de Wit",
    location: "Rotterdam, Netherlands",
  },
];

const AboutTestimonials = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (dir: number) => {
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} style={{ backgroundColor: 'rgb(250, 248, 245)' }}>
      <div className="section-padding py-24 md:py-32">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm mb-4">Testimonials</p>
          <h2 className="heading-lg text-foreground mb-16">
            What Our Investors Say
          </h2>

          {/* Quote */}
          <div className="relative min-h-[200px] flex flex-col items-center justify-center">
            <Quote size={28} className="text-accent/40 mb-6" strokeWidth={1} />
            <p className="font-display text-lg md:text-xl italic text-foreground leading-[1.6] mb-8 max-w-2xl transition-opacity duration-500">
              "{testimonials[current].quote}"
            </p>
            <div>
              <p className="text-sm font-medium text-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-xs text-muted-foreground tracking-[0.06em] mt-1">
                {testimonials[current].location}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={() => goTo(-1)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-6 h-[2px] transition-all duration-300 ${
                    i === current ? "bg-foreground" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(1)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
