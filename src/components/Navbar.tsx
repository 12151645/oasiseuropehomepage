import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import oasisLogo from "@/assets/oasis-logo.svg";

const navItems = [
  { label: "Management", href: "/management" },
  { label: "Advisory", href: "/advisory" },
  { label: "Private Capital", href: "/capital" },
  { label: "Development", href: "/developments" },
  { label: "About Us", href: "/about" },
];

const secondaryItems = [
  { label: "News", href: "/news" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQ", href: "/faq" },
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const mobileMenu = menuOpen
    ? createPortal(
        <div className="lg:hidden fixed inset-0 z-[200] bg-background flex flex-col animate-in fade-in duration-300">
          {/* Header row matching navbar */}
          <div className="section-padding py-3 flex items-center justify-between border-b border-border/50">
            <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
              <img
                src={oasisLogo}
                alt="Oasis Europe"
                className="h-4 md:h-5 w-auto"
                style={{ filter: 'brightness(0) sepia(0.3) saturate(0.5)' }}
              />
            </Link>
            <button
              className="w-10 h-10 flex items-center justify-center text-foreground"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 flex flex-col justify-center section-padding">
            <div className="space-y-1">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block py-4 text-2xl font-display font-medium text-foreground/80 hover:text-foreground transition-all duration-500 border-b border-border/50 animate-in slide-in-from-left-4 ${
                    location.pathname === item.href ? "!text-accent" : ""
                  }`}
                  style={{ animationDelay: `${100 + i * 60}ms`, animationFillMode: "both" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-12 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: "500ms", animationFillMode: "both" }}>
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
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border py-3 md:py-4"
            : "bg-transparent py-3 md:py-6"
        }`}
      >
        <div className="section-padding flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={oasisLogo}
              alt="Oasis Europe"
              className="h-4 md:h-5 lg:h-6 w-auto transition-all duration-500"
              style={{
                filter: scrolled || dark
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
            className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
              scrolled ? "text-foreground" : dark ? "text-foreground" : "text-capital-foreground"
            }`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
      {mobileMenu}
    </>
  );
};

export default Navbar;
