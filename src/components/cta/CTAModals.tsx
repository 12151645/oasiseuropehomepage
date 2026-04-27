import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Message is too short").max(1000),
  preferred: z.enum(["email", "phone", "whatsapp"]).optional(),
});

interface EnquiryDialogProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  context?: string; // e.g. property ref / page
  defaultMessage?: string;
}

export const EnquiryDialog = ({
  trigger,
  title = "Enquire About This Residence",
  description = "Our private client team will respond within one business day.",
  context,
  defaultMessage = "",
}: EnquiryDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: defaultMessage,
    preferred: "email" as "email" | "phone" | "whatsapp",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.errors[0];
      toast.error(first.message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
      toast.success("Enquiry received", {
        description: "Thank you. A member of our team will be in touch shortly.",
      });
      setForm({ name: "", email: "", phone: "", message: defaultMessage, preferred: "email" });
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          {context && <p className="text-xs text-muted-foreground mt-1">Ref: {context}</p>}
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="enq-name">Name</Label>
              <Input id="enq-name" value={form.name} onChange={update("name")} required />
            </div>
            <div>
              <Label htmlFor="enq-email">Email</Label>
              <Input id="enq-email" type="email" value={form.email} onChange={update("email")} required />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="enq-phone">Phone (optional)</Label>
              <Input id="enq-phone" value={form.phone} onChange={update("phone")} />
            </div>
            <div>
              <Label htmlFor="enq-pref">Preferred contact</Label>
              <select
                id="enq-pref"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm"
                value={form.preferred}
                onChange={(e) => setForm({ ...form, preferred: e.target.value as typeof form.preferred })}
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
          </div>
          <div>
            <Label htmlFor="enq-msg">Message</Label>
            <Textarea id="enq-msg" rows={4} value={form.message} onChange={update("message")} required />
          </div>
          <Button type="submit" variant="dark" size="lg" className="w-full" disabled={submitting}>
            {submitting ? "Sending…" : "Send Enquiry"}
          </Button>
          <p className="text-[0.7rem] text-muted-foreground text-center">
            By submitting, you agree to be contacted about your enquiry.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const subscribeSchema = z.object({
  email: z.string().trim().email("Invalid email").max(255),
});

export const SubscribeDialog = ({ trigger }: { trigger: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = subscribeSchema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setOpen(false);
    setEmail("");
    toast.success("Subscribed", { description: "You will receive curated insights and listings." });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">Receive Curated Insights</DialogTitle>
          <DialogDescription>Quarterly market intelligence and exclusive listings.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-3 mt-2">
          <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Button type="submit" variant="dark" size="lg" className="w-full">Subscribe</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const bookingSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
});

export const BookingDialog = ({ trigger, propertyRef }: { trigger: ReactNode; propertyRef?: string }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "10:00" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = bookingSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    setOpen(false);
    toast.success("Viewing requested", { description: `We will confirm ${form.date} at ${form.time}.` });
    setForm({ name: "", email: "", date: "", time: "10:00" });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">Book a Private Viewing</DialogTitle>
          <DialogDescription>Reserve a time slot — we will confirm by email.</DialogDescription>
          {propertyRef && <p className="text-xs text-muted-foreground">Ref: {propertyRef}</p>}
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-3 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="bk-name">Name</Label>
              <Input id="bk-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="bk-email">Email</Label>
              <Input id="bk-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="bk-date">Date</Label>
              <Input id="bk-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="bk-time">Time</Label>
              <Input id="bk-time" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
            </div>
          </div>
          <Button type="submit" variant="dark" size="lg" className="w-full">Request Viewing</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
