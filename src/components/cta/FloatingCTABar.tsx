import { Phone, MessageCircle, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { EnquiryDialog } from "./CTAModals";

const WHATSAPP_NUMBER = "34600000000"; // placeholder
const PHONE = "+34600000000";

export const FloatingCTABar = () => {
  const [mounted, setMounted] = useState(false);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Oasis Europe, I would like to enquire."
  )}`;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const baseBtn =
    "group/cta relative flex items-center justify-center gap-0 overflow-hidden rounded-full shadow-[0_8px_24px_-8px_hsl(var(--foreground)/0.35)] transition-all duration-500 ease-out h-12 w-12 md:hover:w-auto md:hover:px-5";
  const labelCls =
    "max-w-0 opacity-0 md:group-hover/cta:max-w-[160px] md:group-hover/cta:opacity-100 md:group-hover/cta:ml-2 transition-all duration-500 text-[0.7rem] uppercase tracking-[0.14em] font-medium whitespace-nowrap";

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[90] flex flex-col gap-2.5 transition-all duration-700 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <EnquiryDialog
        trigger={
          <button aria-label="Enquire" className={`${baseBtn} bg-warm-black text-sand hover:bg-foreground`}>
            <Mail size={16} className="shrink-0" />
            <span className={labelCls}>Enquire</span>
          </button>
        }
      />
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`${baseBtn} bg-[hsl(140,55%,40%)] text-white hover:bg-[hsl(140,55%,35%)]`}
      >
        <MessageCircle size={16} className="shrink-0" />
        <span className={labelCls}>WhatsApp</span>
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call"
        className={`${baseBtn} bg-accent text-accent-foreground hover:bg-accent/90`}
      >
        <Phone size={16} className="shrink-0" />
        <span className={labelCls}>Call</span>
      </a>
    </div>
  );
};
