import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin, Phone, ArrowRight, Linkedin, Instagram } from "lucide-react";
import { SubscribeDialog, EnquiryDialog } from "@/components/cta/CTAModals";

const WHATSAPP_NUMBER = "34600000000";
const PHONE_DISPLAY = "+34 600 000 000";
const EMAIL = "private@oasiseurope.com";

const Footer = () => {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Oasis Europe.")}`;
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
      {/* Editorial CTA band */}
      <div className="border-b border-primary-foreground/10">
        <div className="section-padding py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 items-end">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-accent mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent/60" />
              Private Office
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.015em]">
              Where discerning capital
              <br />
              meets <em className="italic font-normal text-accent">considered design.</em>
            </h2>
            <p className="mt-6 text-sm md:text-base text-primary-foreground/55 font-light max-w-md leading-relaxed">
              A confidential dialogue with our principals — by introduction or appointment.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <EnquiryDialog
              trigger={
                <button className="group inline-flex items-center justify-between gap-4 bg-accent text-foreground px-7 py-5 text-[0.72rem] uppercase tracking-[0.18em] font-medium hover:bg-primary-foreground transition-colors duration-300 w-full">
                  <span className="inline-flex items-center gap-2.5">
                    <Mail size={14} /> Begin a Conversation
                  </span>
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              }
            />
            <div className="grid grid-cols-2 gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/25 text-primary-foreground px-4 py-4 text-[0.7rem] uppercase tracking-[0.16em] hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
              <SubscribeDialog
                trigger={
                  <button className="inline-flex items-center justify-center gap-2 border border-primary-foreground/25 text-primary-foreground px-4 py-4 text-[0.7rem] uppercase tracking-[0.16em] hover:border-accent hover:text-accent transition-colors duration-300">
                    Subscribe
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sitemap + contact */}
      <div className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand + offices */}
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="text-xl font-light tracking-[0.08em] text-primary-foreground inline-block">
              OASIS <span className="font-medium">EUROPE</span>
            </Link>
            <p className="mt-5 text-sm text-primary-foreground/55 font-light leading-relaxed max-w-xs">
              A private office for the stewardship of homes, capital and legacy across Southern Europe.
            </p>

            <ul className="mt-8 space-y-4">
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

            <div className="mt-8 pt-6 border-t border-primary-foreground/10 space-y-3">
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
              >
                <Phone size={13} className="text-accent" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
              >
                <Mail size={13} className="text-accent" />
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/40 mb-6">
              Services
            </p>
            <ul className="space-y-3.5">
              {services.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/40 mb-6">
              Explore
            </p>
            <ul className="space-y-3.5">
              {explore.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial */}
          <div className="col-span-2 md:col-span-2">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/40 mb-6">
              Journal
            </p>
            <ul className="space-y-3.5">
              {editorial.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-foreground/40 mt-10 mb-5">
              Follow
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-9 w-9 inline-flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/65 hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-9 w-9 inline-flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/65 hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-padding py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground/45 font-light">
              Private Consultations · By Appointment
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {["Legal", "Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[0.7rem] uppercase tracking-[0.16em] text-primary-foreground/45 hover:text-accent transition-colors"
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
