import { Link } from "react-router-dom";
import { Mail, MessageCircle, Handshake } from "lucide-react";
import { SubscribeDialog, EnquiryDialog } from "@/components/cta/CTAModals";

const WHATSAPP_NUMBER = "34600000000";

const Footer = () => {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Oasis Europe.")}`;
  return (
    <footer className="py-16 bg-foreground">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 mb-12">
          <div>
            <Link to="/" className="text-xl font-light tracking-wide text-primary-foreground">
              OASIS <span className="font-medium">EUROPE</span>
            </Link>
            <p className="text-xs text-primary-foreground/40 uppercase tracking-[0.08em] mt-3">
              Marbella · Costa del Sol · Ibiza · Amsterdam
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <EnquiryDialog
              trigger={
                <button className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-4 py-2.5 text-xs uppercase tracking-[0.12em] hover:opacity-90 transition-opacity">
                  <Mail size={14} /> Contact
                </button>
              }
            />
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-4 py-2.5 text-xs uppercase tracking-[0.12em] hover:bg-primary-foreground/10 transition-colors">
              <MessageCircle size={14} /> WhatsApp
            </a>
            <SubscribeDialog
              trigger={
                <button className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-4 py-2.5 text-xs uppercase tracking-[0.12em] hover:bg-primary-foreground/10 transition-colors">
                  Subscribe
                </button>
              }
            />
            <EnquiryDialog
              title="Collaborate with Oasis Europe"
              description="Partnerships, press and co-investment."
              trigger={
                <button className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-4 py-2.5 text-xs uppercase tracking-[0.12em] hover:bg-primary-foreground/10 transition-colors">
                  <Handshake size={14} /> Collaborate
                </button>
              }
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Buy", to: "/search?type=sale" },
            { label: "Long-Term Rent", to: "/search?type=rent" },
            { label: "Oasis Europe", to: "/oasis-europe" },
            { label: "Insights", to: "/insights" },
            { label: "About", to: "/about" },
          ].map((l) => (
            <Link key={l.label} to={l.to} className="text-xs text-primary-foreground/60 uppercase tracking-[0.08em] hover:text-primary-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-primary-foreground/30 italic">
            Private Consultations by Appointment Only
          </p>

          <div className="flex items-center gap-6">
            {["LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-primary-foreground/40 uppercase tracking-[0.08em] hover:text-primary-foreground/70 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-6">
          {["Legal", "Privacy", "Terms"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors"
            >
              {link}
            </a>
          ))}
          <span className="text-xs text-primary-foreground/20">
            © {new Date().getFullYear()} Oasis Europe
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
