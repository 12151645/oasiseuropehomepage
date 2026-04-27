import { Link } from "react-router-dom";
import { Mail, MessageCircle, Handshake, MapPin, Phone, ArrowRight } from "lucide-react";
import { SubscribeDialog, EnquiryDialog } from "@/components/cta/CTAModals";

const WHATSAPP_NUMBER = "34600000000";
const PHONE_DISPLAY = "+34 600 000 000";
const EMAIL = "private@oasiseurope.com";

const Footer = () => {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Oasis Europe.")}`;
  const year = new Date().getFullYear();

  const explore = [
    { label: "Buy", to: "/search?type=sale" },
    { label: "Long-Term Rent", to: "/search?type=rent" },
    { label: "Oasis Europe", to: "/oasis-europe" },
    { label: "Insights", to: "/insights" },
  ];
  const company = [
    { label: "About", to: "/about" },
    { label: "Capital", to: "/capital" },
    { label: "Advisory", to: "/advisory" },
    { label: "Developments", to: "/developments" },
    { label: "Management", to: "/management" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Editorial CTA band */}
      <div className="border-b border-primary-foreground/10">
        <div className="section-padding py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-end">
          <div>
            <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-5">
              Private Office
            </p>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-[-0.01em]">
              Where discerning capital
              <br />
              meets <em className="italic font-normal text-accent">considered design.</em>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <EnquiryDialog
              trigger={
                <button className="group inline-flex items-center justify-between gap-4 bg-primary-foreground text-foreground px-6 py-4 text-xs uppercase tracking-[0.14em] font-medium hover:bg-accent transition-colors duration-300 w-full">
                  <span className="inline-flex items-center gap-2">
                    <Mail size={14} /> Begin a Conversation
                  </span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              }
            />
            <div className="grid grid-cols-2 gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/25 text-primary-foreground px-4 py-3.5 text-[0.7rem] uppercase tracking-[0.14em] hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
              <SubscribeDialog
                trigger={
                  <button className="inline-flex items-center justify-center gap-2 border border-primary-foreground/25 text-primary-foreground px-4 py-3.5 text-[0.7rem] uppercase tracking-[0.14em] hover:border-accent hover:text-accent transition-colors duration-300">
                    Subscribe
                  </button>
                }
              />
            </div>
            <EnquiryDialog
              title="Collaborate with Oasis Europe"
              description="Partnerships, press and co-investment."
              trigger={
                <button className="inline-flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-primary-foreground/70 hover:text-accent transition-colors py-2">
                  <Handshake size={13} /> Collaborate with Us
                </button>
              }
            />
          </div>
        </div>
      </div>

      {/* Sitemap + contact */}
      <div className="section-padding py-14 md:py-20 grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
        <div className="col-span-2 md:col-span-4">
          <Link to="/" className="text-xl font-light tracking-wide text-primary-foreground inline-block">
            OASIS <span className="font-medium">EUROPE</span>
          </Link>
          <p className="text-[0.7rem] text-primary-foreground/40 uppercase tracking-[0.12em] mt-4 mb-8 leading-relaxed">
            Marbella · Costa del Sol
            <br />
            Ibiza · Amsterdam
          </p>

          <ul className="space-y-3 text-sm text-primary-foreground/65 font-light">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 text-accent shrink-0" />
              <span>Avenida del Mar 12 — Marbella, Spain</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={14} className="mt-1 text-accent shrink-0" />
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="hover:text-primary-foreground transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={14} className="mt-1 text-accent shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-primary-foreground transition-colors">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-3 md:col-start-6">
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/40 mb-5">
            Explore
          </p>
          <ul className="space-y-3">
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

        <div className="col-span-1 md:col-span-3">
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/40 mb-5">
            Divisions
          </p>
          <ul className="space-y-3">
            {company.map((l) => (
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

        <div className="col-span-2 md:col-span-2">
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/40 mb-5">
            Follow
          </p>
          <ul className="space-y-3">
            {["LinkedIn", "Instagram"].map((social) => (
              <li key={social}>
                <a
                  href="#"
                  className="text-sm font-light text-primary-foreground/75 hover:text-accent transition-colors"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-padding py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[0.7rem] text-primary-foreground/40 italic font-light">
            Private Consultations by Appointment Only
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {["Legal", "Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[0.7rem] uppercase tracking-[0.12em] text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
              >
                {link}
              </a>
            ))}
            <span className="text-[0.7rem] text-primary-foreground/30">© {year} Oasis Europe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
