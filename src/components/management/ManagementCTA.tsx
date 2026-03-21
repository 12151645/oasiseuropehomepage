import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ManagementCTA = () => {
  return (
    <section className="py-28 md:py-36 bg-secondary">
      <div className="section-padding max-w-3xl mx-auto text-center">
        <p className="body-md mb-12 leading-[1.7]">
          Join a network of international property owners who trust Oasis Europe
          to manage their assets.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="gap-3">
            List Your Property
            <ArrowRight size={16} />
          </Button>
          <Button variant="hero-outline" size="lg">
            Download Owner Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ManagementCTA;