import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const enquiryTypes = [
  "Rental Management",
  "Asset Advisory",
  "Private Capital",
  "Development",
  "Other",
] as const;

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Please enter your first name").max(60),
  lastName: z.string().trim().min(2, "Please enter your last name").max(60),
  email: z.string().trim().email("Invalid email").max(255),
  phoneCode: z.string(),
  phone: z.string().trim().min(4, "Please enter a phone number").max(40),
  enquiryType: z.enum(enquiryTypes),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  agreeComms: z.boolean().optional(),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the Terms and Conditions" }),
  }),
});

const office = {
  city: "Marbella",
  region: "Headquarters · Costa del Sol",
  name: "Oasis Europe HQ",
  address: "Av. Ricardo Soriano 72, 29601 Marbella, Spain",
  email: "info@oasiseurope.nl",
  phone: "+34 952 000 000",
  hours: "Mon – Fri · 09:00 – 19:00 CET",
};

const phoneCodes = [
  { label: "Spain (+34)", value: "+34" },
  { label: "Netherlands (+31)", value: "+31" },
  { label: "United Kingdom (+44)", value: "+44" },
  { label: "France (+33)", value: "+33" },
  { label: "Germany (+49)", value: "+49" },
  { label: "United States (+1)", value: "+1" },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+34",
    phone: "",
    enquiryType: "Rental Management" as (typeof enquiryTypes)[number],
    message: "",
    agreeComms: false,
    agreeTerms: false,
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Oasis Europe | Private Office Enquiries";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Speak with the Oasis Europe private office in Marbella. We respond within one business day."
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
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneCode: "+34",
        phone: "",
        enquiryType: "Rental Management",
        message: "",
        agreeComms: false,
        agreeTerms: false,
      });
    }, 700);
  };

  const mapQuery = encodeURIComponent(office.address);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <main className="overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero — centered editorial intro */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="section-padding max-w-3xl mx-auto text-center">
          <p className="label-sm mb-8">Submit an enquiry</p>
          <h1 className="heading-xl text-foreground mb-6">
            A structured approach to real estate in Marbella.
          </h1>
          <p className="body-md max-w-xl mx-auto">
            Oasis Europe supports investors and property owners across rental management,
            asset advisory, private capital, and development. Submit your enquiry below.
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-accent mt-8">
            We respond within the same business day
          </p>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 md:py-28">
        <div className="section-padding max-w-7xl mx-auto">
          <h2 className="heading-xl text-foreground mb-12 md:mb-16">
            Contact us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="c-first" className="text-xs uppercase tracking-[0.14em] text-foreground/70">
                    First name <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="c-first"
                    value={form.firstName}
                    onChange={update("firstName")}
                    required
                    className="mt-2 h-12 rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="c-last" className="text-xs uppercase tracking-[0.14em] text-foreground/70">
                    Last name <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="c-last"
                    value={form.lastName}
                    onChange={update("lastName")}
                    required
                    className="mt-2 h-12 rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="c-email" className="text-xs uppercase tracking-[0.14em] text-foreground/70">
                  Email <span className="text-accent">*</span>
                </Label>
                <Input
                  id="c-email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                  className="mt-2 h-12 rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
                />
              </div>

              <div>
                <Label className="text-xs uppercase tracking-[0.14em] text-foreground/70">
                  Phone number <span className="text-accent">*</span>
                </Label>
                <div className="mt-2 grid grid-cols-[160px_1fr] gap-3">
                  <select
                    value={form.phoneCode}
                    onChange={update("phoneCode")}
                    className="h-12 border-0 border-b border-foreground/30 bg-transparent text-base md:text-sm focus:outline-none focus:border-foreground"
                  >
                    {phoneCodes.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <Input
                    value={form.phone}
                    onChange={update("phone")}
                    required
                    className="h-12 rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="c-type" className="text-xs uppercase tracking-[0.14em] text-foreground/70">
                  I am enquiring about
                </Label>
                <select
                  id="c-type"
                  value={form.enquiryType}
                  onChange={update("enquiryType")}
                  className="mt-2 h-12 w-full border-0 border-b border-foreground/30 bg-transparent text-base md:text-sm focus:outline-none focus:border-foreground"
                >
                  {enquiryTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="c-msg" className="text-xs uppercase tracking-[0.14em] text-foreground/70">
                  Comments
                </Label>
                <Textarea
                  id="c-msg"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="mt-2 rounded-none border border-foreground/30 bg-transparent focus-visible:ring-0 focus-visible:border-foreground"
                />
              </div>

              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    checked={form.agreeComms}
                    onCheckedChange={(v) => setForm({ ...form, agreeComms: !!v })}
                    className="mt-0.5 rounded-none"
                  />
                  <span className="text-sm text-foreground/80 leading-[1.6]">
                    I agree to receive communications from Oasis Europe.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    checked={form.agreeTerms}
                    onCheckedChange={(v) => setForm({ ...form, agreeTerms: !!v })}
                    className="mt-0.5 rounded-none"
                  />
                  <span className="text-sm text-foreground/80 leading-[1.6]">
                    I have read and understood the{" "}
                    <a href="#" className="text-accent underline underline-offset-2 hover:text-accent/80">
                      Terms and Conditions
                    </a>
                    . <span className="text-accent">*</span>
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                variant="dark"
                size="lg"
                className="w-full h-14 rounded-none text-xs uppercase tracking-[0.18em]"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send"}
              </Button>
            </form>

            {/* Map with overlay card */}
            <div className="relative min-h-[520px] lg:min-h-full">
              <div className="absolute inset-0 bg-muted overflow-hidden">
                <iframe
                  title={`Map of ${office.name}`}
                  src={mapSrc}
                  className="w-full h-full border-0 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Overlay info card */}
              <div className="relative z-10 m-6 md:m-8 max-w-xs bg-foreground text-primary-foreground p-7 md:p-8 shadow-xl">
                <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-accent mb-3">
                  {office.region}
                </p>
                <h3 className="font-display text-2xl md:text-3xl mb-4 leading-[1.15]">
                  {office.name}
                </h3>
                <div className="space-y-3 text-sm text-primary-foreground/80">
                  <p className="flex items-start gap-3 leading-[1.65]">
                    <MapPin size={14} className="text-accent mt-1 shrink-0" />
                    {office.address}
                  </p>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-3 hover:text-primary-foreground transition-colors"
                  >
                    <Mail size={14} className="text-accent" />
                    {office.email}
                  </a>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 hover:text-primary-foreground transition-colors"
                  >
                    <Phone size={14} className="text-accent" />
                    {office.phone}
                  </a>
                  <p className="flex items-center gap-3 text-primary-foreground/60">
                    <Clock size={14} className="text-accent" />
                    {office.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data protection */}
          <div className="mt-20 md:mt-28 pt-10 border-t border-border/60 max-w-4xl">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-[0.12em]">
              Contact form data protection information
            </h3>
            <p className="text-xs text-foreground/60 leading-[1.8]">
              Oasis Europe, with registered office at Av. Ricardo Soriano 72, 29601 Marbella, Spain
              ("Oasis Europe") is the data controller of the data you provide and that will be used
              to manage your enquiry, either in the sale or rental of a property or to inform you
              about services you have requested. To exercise your rights of access, rectification,
              objection, erasure, restriction, portability or to revoke any consent granted, you
              may send a written request together with a copy of your identification document to
              Oasis Europe at the above address or by email.
            </p>
          </div>
        </div>
      </section>

      
      <Footer />
    </main>
  );
};

export default Contact;
