import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Management", href: "/management" },
  { label: "Developments", href: "/developments" },
  { label: "Capital", href: "/capital" },
  { label: "Advisory", href: "/advisory" },
  { label: "Brands", href: "#" },
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
        <a href="/" className="font-display text-xl md:text-2xl font-light tracking-wide">
          OASIS <span className="font-medium">EUROPE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="label-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
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
