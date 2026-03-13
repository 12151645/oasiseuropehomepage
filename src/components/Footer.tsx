const Footer = () => {
  return (
    <footer className="py-16 bg-foreground">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <a href="/" className="font-sans-pro text-xl font-light tracking-wide text-primary-foreground">
            OASIS <span className="font-medium">EUROPE</span>
          </a>
          <p className="text-xs text-primary-foreground/40 uppercase tracking-wider">
            Marbella · Costa del Sol · Ibiza
          </p>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-primary-foreground/30 italic font-sans-pro">
            Private Consultations by Appointment Only
          </p>

          <div className="flex items-center gap-6">
            {/* Social Icons */}
            {["LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-primary-foreground/40 uppercase tracking-wider hover:text-primary-foreground/70 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-6">
          {["Legal", "Privacy", "Terms"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors"
            >
              {link}
            </a>
          ))}
          <span className="text-xs text-primary-foreground/20">
            © {new Date().getFullYear()} Oasis Europe
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
