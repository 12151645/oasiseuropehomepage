import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-secondary">
      <div className="section-padding text-center">
        <p className="label-sm text-muted-foreground mb-4">Get in Touch</p>
        <h2 className="heading-lg mb-4">Where Your Investment Begins</h2>
        <p className="body-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Whether you're looking to invest, develop, list a property, or simply learn 
          more about what we do — we'd like to hear from you.
        </p>
        <Button variant="hero" size="lg">
          Book an Appointment
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
