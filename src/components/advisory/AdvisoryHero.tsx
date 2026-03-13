import { useEffect, useState } from "react";

const AdvisoryHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center items-center text-center bg-advisory">
      <div className="section-padding py-24 md:py-32 max-w-3xl mx-auto">
        <p
          className={`label-sm text-advisory-foreground/50 mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Transaction
        </p>

        <h1
          className={`heading-xl font-sans-pro text-advisory-foreground mb-8 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Asset Advisory
        </h1>

        <p
          className={`body-lg text-advisory-foreground/70 max-w-xl mx-auto transition-all duration-1000 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Oasis Europe provides Strategic Asset Advisory for private investors
          and property owners seeking structured oversight across the full
          lifecycle of a luxury asset. We ensure that each acquisition and exit
          is guided by structure, intelligence and long-term value creation.
        </p>
      </div>
    </section>
  );
};

export default AdvisoryHero;
