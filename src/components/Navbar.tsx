import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import oasisLogo from "@/assets/oasis-logo.svg";

const navItems = [
  { label: "Management", href: "/management" },
  { label: "Advisory", href: "/advisory" },
  { label: "Private Capital", href: "/capital" },
  { label: "Development", href: "/developments" },
  { label: "About Us", href: "/about" },
];

const Navbar = ({ dark = false }: { dark?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3 md:py-4"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <Link to="/" className="flex items-center relative z-[60]">
          <img
            src={oasisLogo}
            alt="Oasis Europe"
            className="h-4 md:h-5 lg:h-6 w-auto transition-all duration-500"
            style={{
              filter: scrolled || dark || menuOpen
                ? 'brightness(0) sepia(0.3) saturate(0.5)'
                : 'brightness(0) invert(0.9) sepia(0.2) saturate(0.4) hue-rotate(15deg)',
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`label-sm transition-colors duration-300 ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : dark ? "text-foreground/80 hover:text-foreground" : "text-capital-foreground/80 hover:text-capital-foreground"
              } ${location.pathname === item.href ? "!text-accent" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
            scrolled || menuOpen ? "text-foreground" : dark ? "text-foreground" : "text-capital-foreground"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-background transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto z-[55]" : "opacity-0 pointer-events-none z-[55]"
        }`}
      >
        <div className="flex flex-col justify-center items-start h-full section-padding">
          <div className="space-y-1 w-full">
            {navItems.map((item, i) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block py-4 text-2xl font-display font-medium text-foreground/80 hover:text-foreground transition-all duration-500 border-b border-border/50 ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                } ${location.pathname === item.href ? "!text-accent" : ""}`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 80}ms` : "0ms" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div
            className={`mt-12 transition-all duration-500 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: menuOpen ? "600ms" : "0ms" }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-[0.08em] mb-3">
              Marbella · Costa del Sol · Ibiza
            </p>
            <a
              href="mailto:info@oasiseurope.nl"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              info@oasiseurope.nl
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
