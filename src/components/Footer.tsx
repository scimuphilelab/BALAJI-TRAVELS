const quickLinks = [
  { label: 'Home',        href: '/#home' },
  { label: 'About Us',    href: '/#about' },
  { label: 'Our Fleet',   href: '/#fleet' },
  { label: 'Why Us',      href: '/#why-us' },
  { label: 'Testimonials',href: '/#testimonials' },
  { label: 'Contact',     href: '/#contact' },
  { label: 'Book Now',    href: '/book' },
];

const services = [
  'Outstation Trips',
  'Airport Transfers',
  'Wedding Car Rental',
  'Corporate Travel',
  'Pilgrimage Packages',
  'City Day Tours',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1A1A2E 0%, #16213E 60%, #0F3460 100%)' }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Grid BG */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      {/* Gold top border */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E8C97A] via-[#C9A84C] to-[#A07830] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" width="22" height="22" aria-hidden="true">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-xl leading-none">BALAJI TRAVELS</p>
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase">Premium Car Rental</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Bhubaneswar's most trusted car rental service since 2016. Your Destination is our Priority — always.
            </p>
            {/* Social / contact quick */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+918658169299"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
                aria-label="Call us"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call Now
              </a>
              <a
                href="https://wa.me/918658169299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-white/50 text-sm flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="#C9A84C" width="12" height="12" aria-hidden="true">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
          aria-hidden="true"
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/35 text-xs">
          <p>© {year} Balaji Travels. All rights reserved.</p>
          <p>Designed and Developed by @ScimuphileLab.</p>
        </div>
      </div>
    </footer>
  );
}
