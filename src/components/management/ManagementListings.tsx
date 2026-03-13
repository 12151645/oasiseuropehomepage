import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";

const listings = [
  {
    image: listing1,
    tag: "New Listing",
    title: "Villa Serena",
    location: "La Zagaleta, Marbella",
    beds: 6,
    baths: 7,
    size: "1,250 m²",
    price: "€8,500 / night",
  },
  {
    image: listing2,
    tag: "Editor's Pick",
    title: "Casa del Mar",
    location: "Es Cubells, Ibiza",
    beds: 5,
    baths: 5,
    size: "980 m²",
    price: "€6,200 / night",
  },
  {
    image: listing3,
    tag: "Top Performer",
    title: "Villa Horizonte",
    location: "Sierra Blanca, Marbella",
    beds: 7,
    baths: 8,
    size: "1,400 m²",
    price: "€12,000 / night",
  },
];

const ManagementListings = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="label-sm text-muted-foreground mb-4">Featured Properties</p>
            <h2 className="heading-lg">Our Latest & Most Exceptional</h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 label-sm text-foreground hover:text-accent transition-colors"
          >
            View All Properties
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listings.map((listing, i) => (
            <a
              key={listing.title}
              href="#"
              className={`group block transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden mb-5">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1.5">
                  {listing.tag}
                </span>
              </div>

              {/* Details */}
              <h3 className="font-sans-pro text-xl font-medium text-foreground mb-1">
                {listing.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {listing.location}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-4">
                <span>{listing.beds} Beds</span>
                <span className="w-px h-3 bg-border" />
                <span>{listing.baths} Baths</span>
                <span className="w-px h-3 bg-border" />
                <span>{listing.size}</span>
              </div>

              <p className="font-display text-lg font-medium text-foreground">
                {listing.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementListings;
