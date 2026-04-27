import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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

            <div className="mt-8 pt-6 border-t border-border/50 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: "420ms", animationFillMode: "both" }}>
              <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-accent mb-3">
                Discover
              </p>
              <div className="flex flex-col">
                {secondaryItems.map((item, i) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`py-2.5 text-base text-foreground/70 hover:text-foreground transition-colors animate-in slide-in-from-left-4 duration-500 ${
                      location.pathname === item.href ? "!text-accent" : ""
                    }`}
                    style={{ animationDelay: `${480 + i * 50}ms`, animationFillMode: "both" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-10 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: "640ms", animationFillMode: "both" }}>
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

            {/* Discover dropdown */}
            <div className="relative group">
              <button
                className={`label-sm flex items-center gap-1.5 transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : dark ? "text-foreground/80 hover:text-foreground" : "text-capital-foreground/80 hover:text-capital-foreground"
                } ${secondaryItems.some((s) => s.href === location.pathname) ? "!text-accent" : ""}`}
                aria-haspopup="true"
              >
                Discover
                <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                <div className="min-w-[200px] bg-background border border-border shadow-xl py-2">
                  <p className="px-5 pt-2 pb-3 text-[0.6rem] uppercase tracking-[0.18em] text-accent border-b border-border/50">
                    Discover
                  </p>
                  {secondaryItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`block px-5 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03] transition-colors ${
                        location.pathname === item.href ? "!text-accent" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
