const PHONE = '+91 8658169299';
const ALT_PHONE = '+91 8658169299';
const WHATSAPP = '918658169299'
const EMAIL = 'balajitravels2999@gmail.com';
const ADDRESS = 'Beherasahi, Nayapalli, Bhubaneswar,Odisha,751012';
const MAPS_URL = 'https://maps.app.goo.gl/puW9TsgjbtDCHjWJ7';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)', transform: 'translate(30%, 30%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag inline-flex" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Contact Us
          </div>
          <h2 className="section-title mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Ready to book or have a question? Reach us via phone, WhatsApp, or email.
            We're available 24/7 for your travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact details */}
          <div className="space-y-5">
            {/* Phone */}
            <a
              href={`tel:${ALT_PHONE.replace(/\s/g, '')}`}
              className="flex items-center gap-5 card p-6 group"
              aria-label={`Call us at ${ALT_PHONE}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', color: '#fff' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#5A6A8A] uppercase tracking-widest mb-1">Phone</p>
                <p className="font-bold text-[#1A1A2E] text-xs">{ALT_PHONE}</p>
                <p className="text-[#5A6A8A] text-sm">Available 24 hours, 7 days</p>
              </div>
              <svg className="ml-auto text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 card p-6 group"
              aria-label="Message us on WhatsApp"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#5A6A8A] uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="font-bold text-[#1A1A2E] text-xs">{ALT_PHONE}</p>
                <p className="text-[#5A6A8A] text-sm">Message us anytime</p>
              </div>
              <svg className="ml-auto text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-5 card p-6 group"
              aria-label={`Email us at ${EMAIL}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A07830)', color: '#fff' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#5A6A8A] uppercase tracking-widest mb-1">Email</p>
                <p className="font-bold text-[#1A1A2E] text-xs ">{EMAIL}</p>
                <p className="text-[#5A6A8A] text-sm">We reply within 2 hours</p>
              </div>
              <svg className="ml-auto text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </a>

            {/* Location */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 card p-6 group"
              aria-label="View our location on Google Maps"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #EF4444, #B91C1C)', color: '#fff' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#5A6A8A] uppercase tracking-widest mb-1">Location</p>
                <p className="font-bold text-[#1A1A2E] text-xs leading-snug">{ADDRESS}</p>
                <p className="text-[#5A6A81] text-sm">View on Google Maps</p>
              </div>
              <svg className="ml-auto text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </a>
          </div>

          {/* Map embed */}
          <div
            className="rounded-2xl overflow-hidden shadow-2xl border border-[#E8ECF4]"
            style={{ height: '460px', minHeight: '320px' }}
          >
            <iframe
              title="Balaji Travels Location on Google Maps"
              src="https://maps.google.com/maps?q=20.286948,85.817296&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
