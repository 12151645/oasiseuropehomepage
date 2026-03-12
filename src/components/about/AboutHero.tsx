import { useEffect, useState } from "react";
import oasisLogo from "@/assets/oasis-logo.svg";

const AboutHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-background pt-32 pb-20">
      {/* Logo */}
      <div
        className={`mb-16 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <img
          src={oasisLogo}
          alt="Oasis Europe"
          className="h-10 md:h-12 mx-auto"
        />
      </div>

      {/* Quote */}
      <div
        className={`max-w-3xl mx-auto section-padding transition-all duration-1000 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="body-lg text-muted-foreground leading-relaxed mb-10">
          We offer our clients an innovative combination of real estate
          investments and luxury rental strategies to generate a solid annual
          return. Dynamism is our team's energy and strong desire to make
          something happen. This is where we make the difference.
        </p>

        <div className="flex items-center gap-3 justify-start max-w-3xl mx-auto">
          <span className="w-6 h-px bg-foreground" />
          <div className="text-left">
            <p className="font-display text-sm font-semibold text-foreground">
              Stefano van Tuyl
            </p>
            <p className="text-xs text-muted-foreground tracking-wide uppercase">
              Owner and Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
