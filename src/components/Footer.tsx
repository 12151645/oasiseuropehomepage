import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";
import { SubscribeDialog, EnquiryDialog } from "@/components/cta/CTAModals";

const PHONE_DISPLAY = "+34 600 000 000";
const EMAIL = "private@oasiseurope.com";

const Footer = () => {
  const year = new Date().getFullYear();

  const services = [
    { label: "Management", to: "/management" },
    { label: "Advisory", to: "/advisory" },
    { label: "Private Capital", to: "/capital" },
    { label: "Developments", to: "/developments" },
  ];
  const explore = [
    { label: "Buy", to: "/search?type=sale" },
    { label: "Long-Term Rent", to: "/search?type=rent" },
    { label: "Oasis Europe Portfolio", to: "/oasis-europe" },
    { label: "About Us", to: "/about" },
  ];
  const editorial = [
    { label: "News & Insights", to: "/news" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "FAQ", to: "/faq" },
  ];
  const offices = [
    { city: "Marbella", region: "Costa del Sol — HQ" },
    { city: "Ibiza", region: "Balearic Islands" },
    { city: "Amsterdam", region: "Netherlands" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Sitemap + contact */}
      <div className="section-padding py-12 md:py-24">
        {/* Brand block — full width on mobile, top of grid on desktop */}
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="text-xl font-light tracking-[0.08em] text-primary-foreground inline-block">
              OASIS <span className="font-medium">EUROPE</span>
            </Link>
            <p className="mt-5 text-sm text-primary-foreground/55 font-light leading-relaxed max-w-xs">
              A private office for the stewardship of homes, capital and legacy across Southern Europe.
            </p>
          </div>

          {/* Mobile: stacked nav columns. Desktop: inline */}
          <div className="mt-12 md:mt-0 md:col-span-8 md:col-start-6 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-8">
            {/* Services */}
            <div className="col-span-1">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/40 mb-5 md:mb-6">
                Services
              </p>
              <ul className="space-y-1">
                {services.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="block py-2.5 text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div className="col-span-1">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/40 mb-5 md:mb-6">
                Explore
              </p>
              <ul className="space-y-1">
                {explore.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="block py-2.5 text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Journal */}
            <div className="col-span-2 md:col-span-1">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/40 mb-5 md:mb-6">
                Journal
              </p>
              <ul className="space-y-1 grid grid-cols-2 md:block gap-x-4">
                {editorial.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="block py-2.5 text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Offices — horizontal scroll cards on mobile, list on desktop above contact */}
        <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-primary-foreground/10">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/40 mb-6">
            Offices
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
            {offices.map((o) => (
              <li key={o.city} className="flex items-start gap-3">
                <MapPin size={13} className="mt-1 text-accent shrink-0" />
                <div>
                  <p className="text-sm font-light text-primary-foreground/85">{o.city}</p>
                  <p className="text-[0.7rem] uppercase tracking-[0.14em] text-primary-foreground/40 mt-0.5">
                    {o.region}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 min-h-[44px] text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
            >
              <Phone size={13} className="text-accent" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 min-h-[44px] text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
            >
              <Mail size={13} className="text-accent" />
              {EMAIL}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/40 mr-2">
              Follow
            </span>
            <a
              href="#"
              aria-label="LinkedIn"
              className="h-11 w-11 inline-flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/65 hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="h-11 w-11 inline-flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/65 hover:border-accent hover:text-accent transition-colors"
            >
              <Instagram size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-padding py-6 md:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground/45 font-light">
              Private Consultations · By Appointment
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {["Legal", "Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="inline-flex items-center min-h-[40px] text-[0.7rem] uppercase tracking-[0.16em] text-primary-foreground/45 hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
            <span className="text-[0.7rem] uppercase tracking-[0.16em] text-primary-foreground/30">
              © {year} Oasis Europe
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
