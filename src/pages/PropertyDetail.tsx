import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProperty, formatPrice, properties } from "@/data/properties";
import { Bed, Bath, Maximize2, MapPin, Phone, MessageCircle, Heart, Share2, Download, Calendar } from "lucide-react";
import { EnquiryDialog, BookingDialog } from "@/components/cta/CTAModals";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import { PropertyCard } from "@/components/property/PropertyCard";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "34600000000";
const PHONE = "+34600000000";

const PropertyDetail = () => {
  const { slug = "" } = useParams();
  const property = getProperty(slug);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (property) {
      document.title = `${property.title} · Oasis Europe`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", `${property.title} — ${property.beds} bed, ${property.sizeSqm} m². ${formatPrice(property)}.`);
    }
  }, [property]);

  if (!property) return <Navigate to="/search" replace />;

  const related = properties.filter((p) => p.slug !== property.slug && p.type === property.type).slice(0, 3);

  const waMsg = encodeURIComponent(`Hello Oasis Europe, I'm interested in ${property.title} (Ref: ${property.ref}).`);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": property.type === "rent" ? "Apartment" : "SingleFamilyResidence",
    name: property.title,
    description: property.description,
    image: property.gallery,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressRegion: property.area,
      addressCountry: property.country,
    },
    numberOfRooms: property.beds,
    floorSize: { "@type": "QuantitativeValue", value: property.sizeSqm, unitCode: "MTK" },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: property.currency,
      availability: "https://schema.org/InStock",
    },
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: property.title, url }); } catch {}
    } else {
      navigator.clipboard.writeText(url);
      toast.success("Link copied");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero gallery */}
      <section className="pt-20 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-1 bg-background">
          <div className="aspect-[16/10] md:aspect-[4/3] overflow-hidden">
            <img src={property.gallery[activeImg]} alt={property.title} className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:grid grid-cols-1 grid-rows-2 gap-1">
            {property.gallery.slice(1, 3).map((g, i) => (
              <button key={i} onClick={() => setActiveImg(i + 1)} className="overflow-hidden">
                <img src={g} alt="" className="w-full h-full object-cover hover:opacity-90 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="section-padding pt-3 flex gap-2 overflow-x-auto">
          {property.gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`shrink-0 w-20 h-14 overflow-hidden border-2 transition-colors ${activeImg === i ? "border-accent" : "border-transparent"}`}
            >
              <img src={g} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Title / facts */}
      <section className="section-padding pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <div>
            <p className="label-sm mb-3 flex items-center gap-2">
              <span>{property.type === "rent" ? "Available for Long-Term" : "Available for Purchase"}</span>
              <span className="text-muted-foreground">· Ref {property.ref}</span>
            </p>
            <h1 className="font-gourmand text-3xl md:text-5xl font-normal leading-[1.1] mb-3">{property.title}</h1>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-6">
              <MapPin size={14} /> {property.area}, {property.city}, {property.country}
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 py-5 border-y border-border mb-8">
              <div className="flex items-center gap-2"><Bed size={16} /> <span className="text-sm">{property.beds} bedrooms</span></div>
              <div className="flex items-center gap-2"><Bath size={16} /> <span className="text-sm">{property.baths} bathrooms</span></div>
              <div className="flex items-center gap-2"><Maximize2 size={16} /> <span className="text-sm">{property.sizeSqm} m²</span></div>
              <div className="flex items-center gap-2"><Calendar size={16} /> <span className="text-sm">Available {new Date(property.availableFrom).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</span></div>
            </div>

            <h2 className="font-display text-xl font-medium mb-3">About this residence</h2>
            <p className="body-lg mb-8">{property.description}</p>

            <h2 className="font-display text-xl font-medium mb-3">Features & amenities</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
              {property.features.map((f) => (
                <li key={f} className="text-sm py-2 px-3 bg-secondary/60">{f}</li>
              ))}
            </ul>

            {/* Map placeholder */}
            <h2 className="font-display text-xl font-medium mb-3">Neighbourhood</h2>
            <div className="aspect-[16/7] bg-secondary border border-border relative overflow-hidden mb-6">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-warm-black text-sand text-xs px-3 py-2 rounded-full flex items-center gap-1.5">
                <MapPin size={12} /> {property.area}, {property.city}
              </span>
              <div className="absolute bottom-3 left-3 text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground bg-background/80 px-2 py-1">
                Interactive map coming soon
              </div>
            </div>

            {/* Featured-in */}
            <div className="bg-secondary/60 border-l-2 border-accent p-5 mt-8">
              <p className="label-sm text-accent mb-1">Featured in</p>
              <Link to="/insights/news" className="font-display text-lg hover:text-accent transition-colors">
                Read the latest Oasis Europe market commentary →
              </Link>
            </div>
          </div>

          {/* Sticky CTA card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-border bg-background p-6">
              <p className="label-sm mb-2">{property.type === "rent" ? "Monthly rent" : "Asking price"}</p>
              <p className="font-gourmand text-3xl mb-5">{formatPrice(property)}</p>

              <div className="space-y-2">
                <EnquiryDialog
                  context={property.ref}
                  defaultMessage={`I'm interested in ${property.title} (Ref: ${property.ref}).`}
                  trigger={<Button variant="dark" size="lg" className="w-full">Enquire About This Residence</Button>}
                />
                <BookingDialog
                  propertyRef={property.ref}
                  trigger={<Button variant="outline" size="lg" className="w-full"><Calendar size={14} /> Book a Viewing</Button>}
                />
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full"><MessageCircle size={14} /> Message on WhatsApp</Button>
                </a>
                <a href={`tel:${PHONE}`}>
                  <Button variant="ghost" size="lg" className="w-full"><Phone size={14} /> {PHONE}</Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-border">
                <button onClick={() => toast.success("Saved to favourites")} className="flex flex-col items-center gap-1 text-[0.65rem] uppercase tracking-[0.1em] py-2 hover:text-accent">
                  <Heart size={14} /> Save
                </button>
                <button onClick={handleShare} className="flex flex-col items-center gap-1 text-[0.65rem] uppercase tracking-[0.1em] py-2 hover:text-accent">
                  <Share2 size={14} /> Share
                </button>
                <button onClick={() => toast.success("Brochure request received", { description: "We will email you the gated brochure." })} className="flex flex-col items-center gap-1 text-[0.65rem] uppercase tracking-[0.1em] py-2 hover:text-accent">
                  <Download size={14} /> Brochure
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding py-20 border-t border-border">
        <h2 className="font-display text-2xl mb-8">Related Residences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p, i) => (<PropertyCard key={p.slug} property={p} index={i} />))}
        </div>
      </section>

      {/* Sticky bottom CTA bar (mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[80] bg-background border-t border-border p-3 grid grid-cols-3 gap-2">
        <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-1 text-xs py-3 border border-border"><Phone size={14} /> Call</a>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 text-xs py-3 border border-border"><MessageCircle size={14} /> WhatsApp</a>
        <EnquiryDialog
          context={property.ref}
          defaultMessage={`I'm interested in ${property.title} (Ref: ${property.ref}).`}
          trigger={<button className="flex items-center justify-center gap-1 text-xs py-3 bg-warm-black text-sand">Enquire</button>}
        />
      </div>

      <Footer />
      <div className="hidden lg:block"><FloatingCTABar /></div>
    </main>
  );
};

export default PropertyDetail;
