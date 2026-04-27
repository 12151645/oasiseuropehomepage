import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/cta/CTAModals";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";

interface Props { mode: "rent" | "sale" }

const OasisEuropeListings = ({ mode }: Props) => {
  const items = properties.filter((p) => p.type === mode);
  const nav = useNavigate();

  useEffect(() => {
    document.title = mode === "rent" ? "Long-Term Rentals · Oasis Europe" : "Properties for Sale · Oasis Europe";
  }, [mode]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      <section className="pt-32 md:pt-40 pb-10 section-padding">
        <p className="label-sm mb-3">Oasis Europe</p>
        <h1 className="font-gourmand text-3xl md:text-5xl leading-[1.1] mb-3">
          {mode === "rent" ? <>Long-Term <em className="italic">Rentals</em></> : <>Properties <em className="italic">for Sale</em></>}
        </h1>
        <p className="body-lg max-w-2xl">
          {mode === "rent"
            ? "Curated residences available for leases of 6 months or longer — turn-key, serviced, and discreetly managed."
            : "A vetted selection of acquisition opportunities across our European footprint."}
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <Button variant="dark" onClick={() => nav(`/search?type=${mode}`)}>Open advanced search</Button>
          <EnquiryDialog
            trigger={<Button variant="outline">Speak with our team</Button>}
            title={mode === "rent" ? "Long-Term Rental Enquiry" : "Acquisition Enquiry"}
          />
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <div key={p.slug} className="relative">
              <PropertyCard property={p} index={i} />
              {/* Animated Send Inquiry nudge */}
              <EnquiryDialog
                context={p.ref}
                defaultMessage={`I'm interested in ${p.title} (Ref: ${p.ref}).`}
                trigger={
                  <button className="absolute bottom-4 right-4 z-10 bg-accent text-accent-foreground text-[0.65rem] uppercase tracking-[0.12em] px-3 py-2 shadow-lg animate-fade-in hover:scale-105 transition-transform">
                    Send Inquiry
                  </button>
                }
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingCTABar />
    </main>
  );
};

export default OasisEuropeListings;
