const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
    title: 'Verified Safety',
    description: 'All vehicles undergo rigorous safety checks. GPS tracked, insured, and sanitized before every ride.',
    gradient: 'from-[#10B981]/15 to-[#10B981]/5',
    color: '#10B981',
    accent: '#10B981',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true">
        <path d="M20 9.27V4h-3V1H7v3H4v5.27C2.81 9.62 2 10.71 2 12c0 1.29.81 2.38 2 2.73V20h7v-3h2v3h7v-5.27c1.19-.35 2-1.44 2-2.73 0-1.29-.81-2.38-2-2.73z"/>
      </svg>
    ),
    title: 'Supreme Comfort',
    description: 'Premium interiors, air conditioning, ample legroom — designed for a relaxed, enjoyable journey.',
    gradient: 'from-[#3B82F6]/15 to-[#3B82F6]/5',
    color: '#3B82F6',
    accent: '#3B82F6',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surge pricing. What you see is what you pay — with upfront quotes.',
    gradient: 'from-[#C9A84C]/15 to-[#C9A84C]/5',
    color: '#C9A84C',
    accent: '#A07830',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
      </svg>
    ),
    title: 'Always Reliable',
    description: 'On-time every time. Our drivers are punctual, professional, and ready for any challenge.',
    gradient: 'from-[#8B5CF6]/15 to-[#8B5CF6]/5',
    color: '#8B5CF6',
    accent: '#8B5CF6',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    title: 'Wide Coverage',
    description: 'Bhubaneswar city, outstation, Puri, Nayagarh, Cuttack and beyond — we go wherever you need.',
    gradient: 'from-[#EF4444]/15 to-[#EF4444]/5',
    color: '#EF4444',
    accent: '#EF4444',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" aria-hidden="true">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    title: 'Expert Drivers',
    description: 'Trained, licensed, background-verified chauffeurs with 5+ years of professional experience.',
    gradient: 'from-[#F59E0B]/15 to-[#F59E0B]/5',
    color: '#F59E0B',
    accent: '#F59E0B',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)' }}
    >
      {/* BG pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />

      {/* Gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag inline-flex" style={{ background: 'rgba(201,168,76,0.15)', borderColor: 'rgba(201,168,76,0.4)', color: '#E8C97A' }} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Why Choose Us
          </div>
          <h2 className="section-title mt-2 mb-4 text-white">
            The Balaji Travels Difference
          </h2>
          <p className="section-subtitle mx-auto text-center text-white/60">
            We don't just drive you — we deliver a premium travel experience that keeps
            our customers coming back.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="group relative rounded-2xl p-7 border border-white/8 transition-all duration-400 hover:border-white/20 cursor-default overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${reason.color}18, transparent 70%)` }}
                aria-hidden="true"
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `bg-gradient-to-br ${reason.gradient}`, backgroundColor: `${reason.color}18`, color: reason.color }}
              >
                {reason.icon}
              </div>

              <h3 className="font-bold text-white text-lg mb-3">{reason.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{reason.description}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${reason.color}, transparent)` }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
