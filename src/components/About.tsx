const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Professional Drivers",
    desc: "Experienced, licensed, and courteous drivers who know every route.",
    color: "#3B82F6",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
    title: "Safe Journey",
    desc: "Sanitized vehicles, GPS tracking, and comprehensive insurance coverage.",
    color: "#10B981",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Round-the-clock customer service — call, WhatsApp, or email anytime.",
    color: "#C9A84C",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "Transparent rates with no hidden charges. Best value for every ride.",
    color: "#8B5CF6",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F8F9FC] relative overflow-hidden">
      {/* Subtle BG decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C9A84C, transparent)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Top layout: text + image-like visual */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div>
            <div className="section-tag" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="14"
                height="14"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              About Us
            </div>
            <h2 className="section-title mb-6">
              Most Trusted Car
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #E8C97A, #C9A84C, #A07830)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Rental Partner
              </span>
            </h2>
            <p className="section-subtitle mb-6">
              Founded with a passion for exceptional travel,{" "}
              <strong>Balaji Travels</strong> has been serving Bhubaneswar and beyond
              for over 8 years. We connect you with premium vehicles and
              professional chauffeurs for every journey — from daily office
              commutes to royal wedding convoys.
            </p>
            <p className="section-subtitle mb-8">
              Our promise is simple: punctuality, comfort, transparency, and
              safety — every single ride.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "8+", label: "Years in Service" },
                { num: "1200+", label: "Happy Customers" },
                { num: "10+", label: "Vehicles Available" },
                { num: "15+", label: "Cities Covered" },
              ].map((item) => (
                <div key={item.label} className="card p-5">
                  <p
                    className="font-bold text-2xl mb-1"
                    style={{
                      background: "linear-gradient(135deg, #E8C97A, #C9A84C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.num}
                  </p>
                  <p className="text-[#5A6A8A] text-sm font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden shadow-3xl aspect-[4/3]"
              style={{ boxShadow: "0 50px 80px rgba(240, 196, 73, 0.22)" }}
            >
              <img
                src="logo.png"
                alt="Balaji Travels professional car rental team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="gradient-divider mb-16" aria-hidden="true" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <article key={f.title} className="card p-7 text-center group">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.color}18`, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold text-[#1A1A2E] text-lg mb-3">
                {f.title}
              </h3>
              <p className="text-[#5A6A8A] text-sm leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
