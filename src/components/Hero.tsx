import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=85",
    tag: "Premium Road Trips",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=85",
    tag: "Luxury Fleet",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85",
    tag: "Professional Drivers",
  },
  {
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=85",
    tag: "Airport Transfers",
  },
];

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "1200+", label: "Happy Customers" },
  { value: "10+", label: "Vehicles Options" },
  { value: "24/7", label: "Customer Support" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setTransitioning(false);
      }, 600);
    },
    [transitioning],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [current, goTo]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
      aria-label="Hero section"
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="hero-slide"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,26,46,0.82) 0%, rgba(26,26,46,0.55) 50%, rgba(26,26,46,0.70) 100%)",
        }}
      />

      {/* Gold bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-[3]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-[4] flex flex-col justify-center min-h-screen w-full max-w-7xl mx-auto pl-4 pr-6 sm:pl-16 sm:pr-12 md:pl-28 md:pr-20 lg:pl-36 lg:pr-24 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Slide tag */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <div className="w-8 h-0.5 bg-[#C9A84C]" aria-hidden="true" />
            <span className="text-[#E8C97A] text-sm font-medium tracking-widest uppercase">
              {slides[current].tag}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-['Playfair_Display',serif] font-bold text-white mb-6 leading-[1.1]"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}
          >
            Premium Car Rental
            <br />
            <span className="text-gold-gradient">Services in Bhubaneswar</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-white/75 mb-10 leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              maxWidth: "560px",
            }}
          >
            Experience luxury travel with professional drivers, a handpicked
            fleet, and seamless bookings. Whether it's an outstation trip,
            airport transfer, or a special occasion — we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollToSection("fleet")}
              className="btn-gold"
              aria-label="Explore our vehicle fleet"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
              </svg>
              Explore Fleet
            </button>
            <a href="/book" className="btn-outline" aria-label="Book a car now">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
              </svg>
              Book Now
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-left">
                {" "}
                {/* Changed text-center to text-left for cleaner alignment */}
                <p className="text-gold-gradient font-bold text-2xl leading-none">
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs mt-1 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex gap-2"
        role="tablist"
        aria-label="Slide indicators"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-[#C9A84C]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 right-8 z-[5] hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#C9A84C]/50 to-transparent" />
      </div>
    </section>
  );
}
