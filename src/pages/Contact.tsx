import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/cta/CTAModals";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Please add a subject").max(140),
  message: z.string().trim().min(5, "Message is too short").max(1000),
  preferred: z.enum(["email", "phone", "whatsapp"]),
});

const offices = [
  {
    city: "Marbella",
    region: "Headquarters · Costa del Sol",
    address: "Av. Ricardo Soriano 72, 29601 Marbella, Spain",
    email: "marbella@oasiseurope.nl",
    phone: "+34 952 000 000",
  },
  {
    city: "Ibiza",
    region: "Balearic Office",
    address: "Carrer d'Annibal 15, 07800 Ibiza, Spain",
    email: "ibiza@oasiseurope.nl",
    phone: "+34 971 000 000",
  },
  {
    city: "Amsterdam",
    region: "Northern Europe Liaison",
    address: "Herengracht 420, 1017 BZ Amsterdam, NL",
    email: "amsterdam@oasiseurope.nl",
    phone: "+31 20 000 0000",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferred: "email" as "email" | "phone" | "whatsapp",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Oasis Europe | Private Office Enquiries";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Speak with the Oasis Europe private office. Offices in Marbella, Ibiza, and Amsterdam. We respond within one business day."
      );
    }
  }, []);

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value as never });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message received", {
        description: "Thank you. A member of our private office will respond within one business day.",
      });
      setForm({ name: "", email: "", phone: "", subject: "", message: "", preferred: "email" });
    }, 700);
  };

  return (
    <main className="overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-secondary">
        <div className="section-padding max-w-3xl mx-auto text-center">
          <p className="label-sm mb-8">Private Office</p>
          <h1 className="heading-xl text-foreground mb-6">
            Begin a quiet conversation.
          </h1>
          <p className="body-md max-w-xl mx-auto">
            Whether you are considering acquisition, advisory, or entrusting an existing residence to our care,
            our team responds with the discretion the matter deserves.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-24 md:pb-32">
        <div className="section-padding max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          {/* Form */}
          <div className="bg-card border border-border/60 p-7 md:p-12">
            <p className="label-sm mb-3">Direct Enquiry</p>
            <h2 className="heading-lg text-foreground mb-8">
              Tell us how we may assist.
            </h2>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="c-name">Full Name</Label>
                  <Input id="c-name" value={form.name} onChange={update("name")} required className="mt-1.5 h-12" />
                </div>
                <div>
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" value={form.email} onChange={update("email")} required className="mt-1.5 h-12" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="c-phone">Phone (optional)</Label>
                  <Input id="c-phone" value={form.phone} onChange={update("phone")} className="mt-1.5 h-12" />
                </div>
                <div>
                  <Label htmlFor="c-pref">Preferred Contact</Label>
                  <select
                    id="c-pref"
                    value={form.preferred}
                    onChange={update("preferred")}
                    className="mt-1.5 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="c-subject">Subject</Label>
                <Input id="c-subject" value={form.subject} onChange={update("subject")} required className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="c-msg">Message</Label>
                <Textarea id="c-msg" rows={6} value={form.message} onChange={update("message")} required className="mt-1.5" />
              </div>
              <Button type="submit" variant="dark" size="lg" className="w-full h-12" disabled={submitting}>
                {submitting ? "Sending…" : "Send Message"}
                {!submitting && <ArrowRight size={16} className="ml-2" />}
              </Button>
              <p className="text-[0.7rem] text-muted-foreground text-center">
                By submitting, you agree to be contacted regarding your enquiry.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-foreground text-background p-7 md:p-10">
              <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-accent mb-4">Direct Channels</p>
              <h3 className="heading-md mb-6">
                Reach the private office directly.
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@oasiseurope.nl"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors min-h-[44px]"
                >
                  <Mail size={16} className="text-accent" />
                  <span className="text-sm">info@oasiseurope.nl</span>
                </a>
                <a
                  href="tel:+34952000000"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors min-h-[44px]"
                >
                  <Phone size={16} className="text-accent" />
                  <span className="text-sm">+34 952 000 000</span>
                </a>
                <div className="flex items-center gap-3 text-background/60 min-h-[44px]">
                  <Clock size={16} className="text-accent" />
                  <span className="text-sm">Mon – Fri · 09:00 – 19:00 CET</span>
                </div>
              </div>
            </div>

            <div className="border border-border/60 p-7 md:p-10">
              <p className="label-sm mb-3">Private Consultation</p>
              <h3 className="heading-md text-foreground mb-3">
                Prefer a structured introduction?
              </h3>
              <p className="body-md mb-5">
                Request a confidential briefing with a senior advisor.
              </p>
              <EnquiryDialog
                trigger={
                  <button className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] font-medium text-foreground hover:text-accent transition-colors">
                    Begin a Conversation
                    <ArrowRight size={14} />
                  </button>
                }
                title="Request a Private Consultation"
                description="Share a few details and our team will arrange a discreet introduction."
              />
            </div>
          </aside>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="label-sm mb-4 text-accent">Our Offices</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight">
              Anchored across three coastlines.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {offices.map((o) => (
              <div key={o.city} className="border-t border-foreground/20 pt-8">
                <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-accent mb-3">{o.region}</p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-5 leading-tight">{o.city}</h3>
                <div className="space-y-3 text-sm text-foreground/70">
                  <p className="flex items-start gap-3 leading-[1.7]">
                    <MapPin size={14} className="text-accent mt-1 shrink-0" />
                    {o.address}
                  </p>
                  <a href={`mailto:${o.email}`} className="flex items-center gap-3 hover:text-foreground transition-colors min-h-[36px]">
                    <Mail size={14} className="text-accent" />
                    {o.email}
                  </a>
                  <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-foreground transition-colors min-h-[36px]">
                    <Phone size={14} className="text-accent" />
                    {o.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
