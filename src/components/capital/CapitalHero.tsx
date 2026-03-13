import { useEffect, useState } from "react";

const CapitalHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 bg-capital" />
      <div className="relative z-10 section-padding py-24 md:py-32 max-w-3xl mx-auto">
        <p
          className={`label-sm text-capital-foreground/60 mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Investment Fund
        </p>

        <h1
          className={`heading-xl font-sans-pro text-capital-foreground mb-8 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Private Capital
        </h1>

        <p
          className={`body-lg text-capital-foreground/80 max-w-xl mx-auto transition-all duration-1000 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          The Oasis Europe Private Investment Fund provides structured access to
          high-end residential real estate projects in prime Mediterranean locations.
          The model is straightforward and each project follows a defined lifecycle
          with professional oversight from acquisition through exit.
        </p>
      </div>
    </section>
  );
};

export default CapitalHero;
