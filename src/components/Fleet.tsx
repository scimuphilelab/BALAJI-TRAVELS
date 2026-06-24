import { useState, type JSX } from 'react';
import { vehicleCategories } from '../data/vehicles';
import VehicleCarousel from './VehicleCarousel';

const categoryIcons: Record<string, JSX.Element> = {
  Sedan: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
    </svg>
  ),
  SUV: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M20 8h-3L15 4H9L7 8H4c-1.1 0-2 .9-2 2v8h2c0 1.1.9 2 2 2s2-.9 2-2h8c0 1.1.9 2 2 2s2-.9 2-2h2v-8c0-1.1-.9-2-2-2zm-14.5 8c-.83 0-1.5-.67-1.5-1.5S4.67 13 5.5 13s1.5.67 1.5 1.5S6.33 16 5.5 16zm13 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM4 14v-4h.54l2-4h10.92l2 4H20v4H4z"/>
    </svg>
  ),
  Groups: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
};

const tabs = Object.keys(vehicleCategories);

export default function Fleet() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="fleet" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag inline-flex" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/></svg>
            Our Fleet
          </div>
          <h2 className="section-title text-center mt-2 mb-4">
            Choose Your Perfect Ride
          </h2>
          <p className="section-subtitle mx-auto text-center">
            From compact sedans to ultra-luxury vehicles — every car in our fleet is
            maintained to the highest standards for a perfect journey.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex gap-3 mb-10 justify-center flex-wrap"
          role="tablist"
          aria-label="Vehicle categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`panel-${tab}`}
              id={`tab-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === tab
                  ? 'text-white shadow-lg'
                  : 'bg-[#F8F9FC] text-[#5A6A8A] hover:bg-[#F0F0F8] border border-[#E8ECF4]'
              }`}
              style={
                activeTab === tab
                  ? { background: 'linear-gradient(135deg, #E8C97A, #C9A84C, #A07830)', boxShadow: '0 4px 20px rgba(201,168,76,0.4)' }
                  : {}
              }
            >
              {categoryIcons[tab]}
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel Panel */}
        {tabs.map((tab) => (
          <div
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            className={`transition-all duration-500 ${activeTab === tab ? 'block' : 'hidden'}`}
            style={{ paddingLeft: '24px', paddingRight: '24px' }}
          >
            <VehicleCarousel vehicles={vehicleCategories[tab]} category={tab} />
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-[#5A6A8A] mb-4 text-sm">Looking for a specific vehicle? Contact us!</p>
          <a href="/book" className="btn-gold" aria-label="Book your preferred vehicle">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
            </svg>
            Book Any Vehicle
          </a>
        </div>
      </div>
    </section>
  );
}
