import { Link } from "react-router-dom";
import { Bed, Bath, Maximize2, MapPin } from "lucide-react";
import { Property, formatPrice } from "@/data/properties";

export const PropertyCard = ({ property, index = 0 }: { property: Property; index?: number }) => {
  return (
    <Link
      to={`/properties/${property.slug}`}
      className="group block bg-background border border-border/40 hover:border-accent/60 transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both" }}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={property.hero}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-warm-black/85 text-sand text-[0.65rem] uppercase tracking-[0.12em] px-2.5 py-1">
          {property.type === "rent" ? "Long-Term Rent" : "For Sale"}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-medium leading-tight group-hover:text-accent transition-colors">
            {property.title}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
          <MapPin size={12} /> {property.area}, {property.city}
        </p>
        <p className="text-base font-medium mb-4">{formatPrice(property)}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/40 pt-3">
          <span className="flex items-center gap-1"><Bed size={13} /> {property.beds}</span>
          <span className="flex items-center gap-1"><Bath size={13} /> {property.baths}</span>
          <span className="flex items-center gap-1"><Maximize2 size={13} /> {property.sizeSqm} m²</span>
          <span className="ml-auto text-[0.65rem] uppercase tracking-[0.1em]">{property.ref}</span>
        </div>
      </div>
    </Link>
  );
};
