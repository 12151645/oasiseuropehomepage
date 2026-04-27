import { Phone, MessageCircle, Mail } from "lucide-react";
import { EnquiryDialog } from "./CTAModals";

const WHATSAPP_NUMBER = "34600000000"; // placeholder
const PHONE = "+34600000000";

export const FloatingCTABar = () => {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Oasis Europe, I would like to enquire.")}`;
  return (
    <div className="fixed bottom-4 right-4 z-[90] flex flex-col gap-2 md:flex-row md:bottom-6 md:right-6">
      <EnquiryDialog
        trigger={
          <button
            aria-label="Enquire"
            className="group flex items-center gap-2 bg-warm-black text-sand px-4 py-3 rounded-full shadow-lg hover:bg-foreground transition-all text-xs uppercase tracking-[0.12em] font-medium"
          >
            <Mail size={16} />
            <span className="hidden md:inline">Enquire</span>
          </button>
        }
      />
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex items-center gap-2 bg-[hsl(140,55%,40%)] text-white px-4 py-3 rounded-full shadow-lg hover:opacity-90 transition-all text-xs uppercase tracking-[0.12em] font-medium"
      >
        <MessageCircle size={16} />
        <span className="hidden md:inline">WhatsApp</span>
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call"
        className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-full shadow-lg hover:opacity-90 transition-all text-xs uppercase tracking-[0.12em] font-medium"
      >
        <Phone size={16} />
        <span className="hidden md:inline">Call</span>
      </a>
    </div>
  );
};
