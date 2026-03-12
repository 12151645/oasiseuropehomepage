import { useEffect, useState } from "react";

const AboutHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden bg-foreground">
      <div className="absolute inset-0 bg-foreground" />

      <div className="relative z-10 section-padding py-24 md:py-32 max-w-3xl mx-auto">
        <p
          className={`label-sm text-sand/50 mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Our Story
        </p>

        <h1
          className={`heading-xl text-sand mb-8 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          About Oasis Europe
        </h1>

        <p
          className={`body-lg text-sand/70 max-w-xl mx-auto transition-all duration-1000 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A vertically integrated luxury property group operating across
          Marbella's most prestigious addresses. We combine local expertise
          with institutional rigour.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
