import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import rentalVilla from "@/assets/rental-villa.jpg";

const RentalAndCollectionSection = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible1(true); },
      { threshold: 0.2 }
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible2(true); },
      { threshold: 0.2 }
    );
    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    return () => { observer1.disconnect(); observer2.disconnect(); };
  }, []);

  return (
    <>
      {/* Rental Division */}
      <section ref={ref1} className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src={rentalVilla}
          alt="Luxury rental villa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div
          className={`relative z-10 section-padding pb-16 md:pb-20 transition-all duration-1000 ${
            visible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-sand/60 mb-4">Rental Division</p>
          <h2 className="heading-lg text-sand mb-4">Hospitality-Driven Yield.</h2>
          <p className="body-lg text-sand/70 max-w-xl mb-8">
            Through RNTLS Ibiza and Marbella operations, we transform properties 
            into high-performing hospitality assets.
          </p>
          <Button variant="hero-light" size="lg">
            View Rental Division
          </Button>
        </div>
      </section>

      {/* The Marbella Collection */}
      <section ref={ref2} className="bg-warm-black py-24 md:py-32">
        <div
          className={`section-padding text-center transition-all duration-1000 ${
            visible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-sm text-gold/70 mb-6">The Marbella Collection</p>
          <h2 className="heading-xl text-sand mb-6">The Exceptional Only.</h2>
          <p className="body-lg text-sand/50 max-w-lg mx-auto mb-10">
            A highly curated portfolio launching 2027.
          </p>
          <Button
            variant="hero-outline"
            size="lg"
            className="border-sand/30 text-sand hover:bg-sand hover:text-warm-black"
          >
            Request Early Access
          </Button>
        </div>
      </section>
    </>
  );
};

export default RentalAndCollectionSection;
