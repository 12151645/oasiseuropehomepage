import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ManagementHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-secondary">
      <div className="section-padding py-32 md:py-40 max-w-4xl">
        <p
          className={`label-sm text-muted-foreground mb-8 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Management
        </p>

        <h1
          className={`heading-xl text-foreground mb-8 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Hospitality Asset
          <br />
          <em className="italic font-light">Management</em>
        </h1>

        <p
          className={`font-display text-xl md:text-2xl font-light text-muted-foreground mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A property is more than a listing.
          <br />
          <em className="italic">It is a performing asset.</em>
        </p>

        <p
          className={`body-lg text-muted-foreground max-w-2xl mb-12 transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Oasis Europe manages luxury villas and apartments through a performance-driven
          hospitality model combining dynamic pricing systems, global distribution,
          hotel-level guest experience, and full operational oversight.
        </p>

        <div
          className={`transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button variant="hero" size="lg" className="gap-3">
            List Your Property
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ManagementHero;
