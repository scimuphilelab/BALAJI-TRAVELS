const testimonials = [
  {
    name: 'Tanbir Pradhan',
    role: 'Software Engineer, IserveU',
    location: 'BBSR → Puri',
    rating: 5,
    text: 'Absolutely outstanding service! The driver was punctual, the car was spotless, and the entire trip was seamless. Balaji Travels is our go-to for every family outing now. Highly recommended!',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1Joz7Onnw3ru57dPHPc6s9PKDxkOo3FQ2A&s',
  },
  {
    name: 'Rasmi Ranjan Pal',
    role: 'Student',
    location: 'BBSR → Nayagarh',
    rating: 5,
    text: 'Booked an Innova for our hometown trip. The vehicle was comfortable, the driver was professional and knowledgeable about routes. The price was fair and transparent — no hidden charges at all!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Ananya Kulkarni',
    role: 'HR Manager, TCS',
    location: 'Airport Transfer',
    rating: 5,
    text: 'Used Balaji Travels for airport pickup at odd hours — 3 AM! The driver was already waiting at arrivals. Car was clean and air-conditioned. Will never use another service. Absolute five stars!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F8F9FC] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)', transform: 'translate(-40%, -40%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag inline-flex" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Testimonials
          </div>
          <h2 className="section-title mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Over 1,200 happy travellers have trusted Balaji Travels. Here's what some of them say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="card p-7 flex flex-col"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(135deg, #E8C97A, #C9A84C)' }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} viewBox="0 0 24 24" fill="#C9A84C" width="16" height="16" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-[#5A6A8A] text-sm leading-relaxed mb-6 flex-1 italic">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#E8ECF4]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#C9A84C]/20"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-[#1A1A2E] text-sm">{t.name}</p>
                  <p className="text-[#5A6A8A] text-xs">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(201,168,76,0.1)', color: '#A07830' }}
                  >
                    {t.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google rating banner */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-4 border border-[#E8ECF4]"
            style={{ boxShadow: '0 8px 32px rgba(201,168,76,0.10)' }}
          >
            <div className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="#C9A84C" width="18" height="18">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="font-bold text-[#1A1A2E]">4.9/5</p>
            <div className="w-px h-5 bg-[#E8ECF4]" aria-hidden="true" />
            <p className="text-[#5A6A8A] text-sm">Based on 200+ Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
