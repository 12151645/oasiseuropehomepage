import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import oasisLogo from "@/assets/oasis-logo.svg";

const navItems = [
  { label: "Management", href: "/management" },
  { label: "Advisory", href: "/advisory" },
  { label: "Private Capital", href: "/capital" },
  { label: "Development", href: "/developments" },
  { label: "About Us", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src={oasisLogo}
            alt="Oasis Europe"
            className="h-5 md:h-6 w-auto transition-all duration-500"
            style={{
              filter: scrolled
                ? 'brightness(0) sepia(0.3) saturate(0.5)'
                : 'brightness(0) invert(0.9) sepia(0.2) saturate(0.4) hue-rotate(15deg)',
            }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`label-sm transition-colors duration-300 ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-capital-foreground/80 hover:text-capital-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-capital-foreground"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="section-padding py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="label-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
