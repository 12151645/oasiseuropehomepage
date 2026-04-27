import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FloatingCTABar } from "@/components/cta/FloatingCTABar";
import heroImg from "@/assets/cta-villa.jpg";
import rentImg from "@/assets/rental-villa.jpg";
import saleImg from "@/assets/villa-marbesa-56.jpg";

const OasisEurope = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar dark />

      <section className="relative min-h-[70svh] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Oasis Europe" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pb-16 text-sand">
          <p className="label-sm text-sand/70 mb-4">Oasis Europe</p>
          <h1 className="font-gourmand text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            Curated Residences <em className="italic">across Europe.</em>
          </h1>
          <p className="max-w-xl mt-6 text-sand/80 text-sm md:text-base font-light leading-[1.7]">
            A discreet portfolio of properties available for long-term rent or acquisition,
            managed end-to-end by Oasis Europe.
          </p>
        </div>
      </section>

      <section className="section-padding py-20 grid grid-cols-1 md:grid-cols-2 gap-1 bg-border">
        <Link to="/oasis-europe/rentals" className="group relative aspect-[4/3] md:aspect-auto md:h-[70vh] overflow-hidden bg-background">
          <img src={rentImg} alt="Long-term rentals" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-sand">
            <p className="label-sm text-sand/70 mb-3">Long-Term Rent</p>
            <h2 className="font-gourmand text-3xl md:text-4xl mb-3">Secure a Long-Term Residence</h2>
            <p className="text-sm text-sand/80 max-w-md mb-6">Fully-serviced villas and apartments for relocation, leases of 6+ months.</p>
            <Button variant="hero-light" size="lg" className="w-fit">Browse Rentals</Button>
          </div>
        </Link>
        <Link to="/oasis-europe/sales" className="group relative aspect-[4/3] md:aspect-auto md:h-[70vh] overflow-hidden bg-background">
          <img src={saleImg} alt="For sale" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-sand">
            <p className="label-sm text-sand/70 mb-3">For Sale</p>
            <h2 className="font-gourmand text-3xl md:text-4xl mb-3">Acquire Your Next Signature Property</h2>
            <p className="text-sm text-sand/80 max-w-md mb-6">A curated selection of homes vetted by our private capital and advisory teams.</p>
            <Button variant="hero-light" size="lg" className="w-fit">Browse Sales</Button>
          </div>
        </Link>
      </section>

      <Footer />
      <FloatingCTABar />
    </main>
  );
};

export default OasisEurope;
