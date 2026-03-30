import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[65vh] flex flex-col justify-center items-center text-center bg-card">
      <div className="section-padding py-24 md:py-32 max-w-3xl mx-auto">
        <p
          className={`label-sm mb-8 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          About Us
        </p>

        <h1
          className={`heading-xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Real Estate Built
          <br />
          on Structure
        </h1>

        <p
          className={`body-md max-w-xl mx-auto mb-12 transition-all duration-1000 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A tailored, integrated platform designed to enhance and manage
          residential assets, creating long-term value for owners, investors,
          and stakeholders.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-3 bg-foreground text-primary-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-foreground/90 transition-colors font-body"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-3 border border-foreground/20 text-foreground text-sm uppercase tracking-[0.12em] font-medium hover:bg-foreground/5 transition-colors font-body"
          >
            Explore Our Platform
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
