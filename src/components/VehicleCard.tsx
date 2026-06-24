import type { Vehicle } from '../data/vehicles';

interface Props {
  vehicle: Vehicle;
}

const fuelIcons: Record<string, string> = {
  'Petrol': '⛽',
  'Diesel': '🛢️',
  'CNG / Petrol': '🌿',
  'Petrol / CNG': '🌿',
  'Hybrid': '⚡',
  'Electric': '🔋',
};

export default function VehicleCard({ vehicle }: Props) {
  const bookUrl = `/book?car=${encodeURIComponent(vehicle.name)}`;
  const fuelEmoji = fuelIcons[vehicle.fuel] ?? '⛽';

  return (
    <article className="card flex flex-col h-full overflow-hidden group" aria-label={`${vehicle.name} rental card`}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} for hire`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: 'rgba(26,26,46,0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            {vehicle.category}
          </span>
        </div>
        {/* Price badge */}
        <div className="absolute top-3 right-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, #E8C97A, #C9A84C)', color: '#1A1A2E' }}
          >
            {vehicle.pricePerKm}
          </span>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/20 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-[#1A1A2E] text-lg mb-1 leading-tight">{vehicle.name}</h3>
        <p className="text-[#5A6A8A] text-sm mb-4 leading-relaxed flex-1">{vehicle.description}</p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="flex items-center gap-2 bg-[#F8F9FC] rounded-xl px-3 py-2">
            <svg viewBox="0 0 24 24" fill="#C9A84C" width="15" height="15" aria-hidden="true">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <span className="text-xs font-medium text-[#1A1A2E]">{vehicle.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2 bg-[#F8F9FC] rounded-xl px-3 py-2">
            <svg viewBox="0 0 24 24" fill="#C9A84C" width="15" height="15" aria-hidden="true">
              <path d="M20 6h-2.18c.07-.44.18-.87.18-1.33C18 2.99 16.89 2 15.67 2c-.88 0-1.6.5-2.07 1.26L12 5.5l-1.6-2.24C9.93 2.5 9.21 2 8.33 2 7.11 2 6 2.99 6 4.67c0 .46.11.89.18 1.33H4C2.9 6 2 6.9 2 8v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
            </svg>
            <span className="text-xs font-medium text-[#1A1A2E]">{vehicle.luggage} Bags</span>
          </div>
          <div className="flex items-center gap-2 bg-[#F8F9FC] rounded-xl px-3 py-2">
            <span className="text-sm" aria-hidden="true">{fuelEmoji}</span>
            <span className="text-xs font-medium text-[#1A1A2E] truncate">{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#F8F9FC] rounded-xl px-3 py-2">
            <svg viewBox="0 0 24 24" fill="#C9A84C" width="15" height="15" aria-hidden="true">
              <path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 5H8v2H6v-2H4v-2h2V8h2v2h2v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5zm4-5h-1v5h-1v-5h-1V9h3v1z"/>
            </svg>
            <span className="text-xs font-medium text-[#1A1A2E] truncate">{vehicle.transmission}</span>
          </div>
        </div>

        {/* Book Button */}
        <a
          href={bookUrl}
          className="btn-gold w-full justify-center py-3 text-sm"
          aria-label={`Book ${vehicle.name}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
          </svg>
          Book Now
        </a>
      </div>
    </article>
  );
}
