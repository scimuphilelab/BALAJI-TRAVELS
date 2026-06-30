import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar({ hideBookButton = false }: { hideBookButton?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
    if (!hash) return;

    const target = document.querySelector(hash);

    if (target) {
      e.preventDefault();
      setOpen(false);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_4px_30px_rgba(26,26,46,0.1)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Balaji Travels Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8C97A] via-[#C9A84C] to-[#A07830] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <img
              src="/logo.png"
              alt="Balaji Travels Logo"
              className="w-10 h-10"
            />
          </div>

          <div>
            <p
              className={`font-bold text-lg mt-0.5 leading-none transition-colors duration-300 ${
                scrolled ? "text-[#1A1A2E]" : "text-white"
              }`}
            >
              BALAJI
            </p>

            <p className="text-[11px] font-medium mt-0.2 text-[#C9A84C] leading-none tracking-widest uppercase">
              Travels
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`nav-link ${
                scrolled
                  ? "text-[#5A6A8A] hover:text-[#A07830]"
                  : "text-white/80 hover:text-white"
              }`}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        {!hideBookButton && (
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/book"
              className="btn-gold text-sm px-6 py-3"
              aria-label="Book a car now"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
              </svg>
              Book Now
            </a>
          </div>
        )}

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-[#1A1A2E]" : "bg-white"
            } ${open ? "rotate-45 translate-y-2" : ""}`}
          />

          <span
            className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-[#1A1A2E]" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />

          <span
            className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-[#1A1A2E]" : "bg-white"
            } ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 top-full bg-[#F8F6F0] border border-t-0 border-[#1A1A2E]/10 rounded-b-2xl shadow-[0_12px_30px_rgba(26,26,46,0.15)] overflow-hidden transition-all duration-500 origin-top ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-5 py-2 flex flex-col">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`text-[#1A1A2E] font-medium text-base py-4 hover:text-[#A07830] transition-colors duration-200 ${
                i !== navLinks.length - 1 ? "border-b border-[#1A1A2E]/8" : ""
              }`}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          ))}

          {!hideBookButton && (
            <a
              href="/book"
              className="btn-gold mt-4 mb-4 justify-center"
              aria-label="Book a car now"
            >
              Book Now
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
