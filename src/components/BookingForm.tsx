'use client';
import { useState, useEffect } from 'react';
import { allVehicles } from '../data/vehicles';

const ADMIN_WHATSAPP = '918658169299';

interface FormData {
  fullName: string;
  phone: string;
  car: string;
  journeyDate: string;
  pickUp: string;
  destination: string;
  duration: string;
  approxKm: string;
}

interface Errors {
  fullName?: string;
  phone?: string;
  car?: string;
  journeyDate?: string;
  pickUp?: string;
  destination?: string;
  duration?: string;
}

function InputField({
  id, label, type = 'text', placeholder, value, onChange, error, required, children,
}: {
  id: string; label: string; type?: string; placeholder?: string;
  value: string; onChange: (v: string) => void;
  error?: string; required?: boolean; children?: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
      </label>
      {children ?? (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          className={`form-input ${error ? 'border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}`}
          min={type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-red-500 text-xs flex items-center gap-1" role="alert">
          <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    fullName: '', phone: '', car: '', journeyDate: '',
    pickUp: '', destination: '', duration: '', approxKm: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill car from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const carParam = params.get('car');
    if (carParam) setForm((prev) => ({ ...prev, car: decodeURIComponent(carParam) }));
  }, []);

  const setField = (field: keyof FormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    else if (form.fullName.trim().length < 2) newErrors.fullName = 'Name must be at least 2 characters';

    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) newErrors.phone = 'Enter a valid 10-digit Indian mobile number';

    if (!form.car) newErrors.car = 'Please select a vehicle';
    if (!form.journeyDate) newErrors.journeyDate = 'Journey date is required';
    if (!form.pickUp.trim()) newErrors.pickUp = 'Pick-up location is required';
    if (!form.destination.trim()) newErrors.destination = 'Destination is required';
    if (!form.duration.trim()) newErrors.duration = 'Duration is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `*Balaji Travels - New Booking Request*

👤 *Name:* ${form.fullName}
📞 *Phone:* ${form.phone}
🚙 *Vehicle:* ${form.car}
📅 *Journey Date:* ${form.journeyDate}
📍 *Pickup:* ${form.pickUp}
🏁 *Destination:* ${form.destination}
⏱️ *Duration:* ${form.duration}
📏 *Approx KM:* ${form.approxKm || 'Not specified'}

_Sent via balajitravel.in_`;

    const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-8 animate-fade-in" role="status" aria-live="polite">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float"
          style={{ background: 'linear-gradient(135deg, #E8C97A, #C9A84C)' }}
        >
          <svg viewBox="0 0 24 24" fill="white" width="36" height="36" aria-hidden="true">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <h2 className="font-bold text-[#1A1A2E] text-2xl mb-3">Booking Request Sent!</h2>
        <p className="text-[#5A6A8A] mb-8 max-w-md mx-auto leading-relaxed">
          Your booking request has been forwarded to our WhatsApp. Our team will confirm your
          booking shortly. Thank you for choosing Balaji Travels!
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSubmitted(false)}
            className="btn-gold"
          >
            Make Another Booking
          </button>
          <a href="/" className="btn-outline !text-[#1A1A2E] !border-[#E8ECF4] hover:!border-[#C9A84C] hover:!text-[#A07830]">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Car booking form" className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="fullName" label="Full Name" placeholder="e.g. Rahul Sharma"
          value={form.fullName} onChange={setField('fullName')}
          error={errors.fullName} required
        />
        <InputField
          id="phone" label="Phone Number" type="tel" placeholder="e.g. 9876543210"
          value={form.phone} onChange={setField('phone')}
          error={errors.phone} required
        />
      </div>

      <InputField id="car" label="Select Vehicle" error={errors.car} required value={form.car} onChange={setField('car')}>
        <select
          id="car"
          value={form.car}
          onChange={(e) => setField('car')(e.target.value)}
          required
          aria-required="true"
          aria-describedby={errors.car ? 'car-error' : undefined}
          aria-invalid={!!errors.car}
          className={`form-input ${errors.car ? 'border-red-400 focus:border-red-400' : ''}`}
          style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px', paddingRight: '44px' }}
        >
          <option value="">— Choose a vehicle —</option>
          {['Sedan', 'SUV', 'Luxury'].map((cat) => (
            <optgroup key={cat} label={`${cat} Vehicles`}>
              {allVehicles.filter((v) => v.category === cat).map((v) => (
                <option key={v.id} value={v.name}>{v.name} ({v.pricePerKm})</option>
              ))}
            </optgroup>
          ))}
        </select>
      </InputField>

      <InputField
        id="journeyDate" label="Journey Date" type="date"
        value={form.journeyDate} onChange={setField('journeyDate')}
        error={errors.journeyDate} required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          id="pickUp" label="Pick Up From" placeholder="e.g. Rasulgarh, Bhubaneshwar"
          value={form.pickUp} onChange={setField('pickUp')}
          error={errors.pickUp} required
        />
        <InputField
          id="destination" label="Destination" placeholder="e.g. Airport, Bhubaneshwar"
          value={form.destination} onChange={setField('destination')}
          error={errors.destination} required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField id="duration" label="Time Duration" error={errors.duration} required value={form.duration} onChange={setField('duration')}>
          <select
            id="duration"
            value={form.duration}
            onChange={(e) => setField('duration')(e.target.value)}
            required
            aria-required="true"
            aria-invalid={!!errors.duration}
            className={`form-input ${errors.duration ? 'border-red-400' : ''}`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px', paddingRight: '44px' }}
          >
            <option value="">— Select duration —</option>
            <option value="4 Hours">4 Hours</option>
            <option value="8 Hours">8 Hours</option>
            <option value="12 Hours">12 Hours</option>
            <option value="1 Day">1 Day</option>
            <option value="2 Days">2 Days</option>
            <option value="3 Days">3 Days</option>
            <option value="4-7 Days">4–7 Days</option>
            <option value="1 Week+">1 Week+</option>
            <option value="Custom">Custom (mention in approx KM)</option>
          </select>
        </InputField>
        <InputField
          id="approxKm" label="Approx KM (Optional)" type="number" placeholder="e.g. 300"
          value={form.approxKm} onChange={setField('approxKm')}
        />
      </div>

      {/* Summary card */}
      {(form.car || form.pickUp || form.destination) && (
        <div
          className="rounded-xl p-5 border"
          style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.25)' }}
          aria-live="polite"
        >
          <p className="text-xs font-semibold text-[#A07830] uppercase tracking-widest mb-3">Booking Summary</p>
          <div className="grid grid-cols-1 gap-3 text-sm">
            {form.car && (
              <div>
                <span className="text-[#5A6A8A]">Vehicle:</span>
                <span className="font-semibold text-[#1A1A2E] ml-1">{form.car}</span>
              </div>
            )}
            {form.pickUp && (
              <div>
                <span className="text-[#5A6A8A]">Pickup:</span>
                <span className="font-semibold text-[#1A1A2E] ml-1">{form.pickUp}</span>
              </div>
            )}
            {form.destination && (
              <div>
                <span className="text-[#5A6A8A]">To:</span>
                <span className="font-semibold text-[#1A1A2E] ml-1">{form.destination}</span>
              </div>
            )}
            {form.journeyDate && (
              <div>
                <span className="text-[#5A6A8A]">Date:</span>
                <span className="font-semibold text-[#1A1A2E] ml-1">{form.journeyDate}</span>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        type="submit"
        className="btn-gold w-full justify-center py-4 text-base"
        aria-label="Send booking request via WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Send Booking via WhatsApp
      </button>

      <p className="text-center text-[#5A6A8A] text-xs">
        Your booking details will be sent to our WhatsApp. We'll confirm within minutes.
      </p>
    </form>
  );
}
