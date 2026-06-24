export interface Vehicle {
  id: string;
  name: string;
  image: string;
  seats: number;
  luggage: number;
  fuel: string;
  transmission: string;
  description: string;
  pricePerKm: string;
  category: string;
}

export const vehicleCategories: Record<string, Vehicle[]> = {
  Sedan: [
    {
      id: "sedan-honda-city",
      name: "Honda City",
      image:
        "/cars/HONDA-CITY.jpg",
      seats: 5,
      luggage: 3,
      fuel: "Petrol",
      transmission: "Automatic",
      description:
        "Premium sedan offering superior comfort, spacious interiors, and smooth rides for business trips, airport transfers, and family travel.",
      pricePerKm: "₹15/km",
      category: "Sedan",
    },

    {
      id: "luxury-audi",
      name: "Audi",
      image:
        "/cars/AUDI.jpg",
      seats: 5,
      luggage: 3,
      fuel: "Petrol",
      transmission: "Automatic",
      description:
        "Premium luxury sedan featuring leather interiors, executive comfort, and elegant wedding or VIP transportation.",
      pricePerKm: "₹40/km",
      category: "Luxury",
    },
  ],

  SUV: [
    {
      id: "suv-dzire",
      name: "Maruti Suzuki Dzire",
      image:
        "/cars/DZIRE.jpg",
      seats: 5,
      luggage: 2,
      fuel: "Petrol",
      transmission: "Manual",
      description:
        "Comfortable and fuel-efficient sedan ideal for local sightseeing, airport transfers, and short-distance travel.",
      pricePerKm: "₹12/km",
      category: "SUV",
    },

    {
      id: "suv-innova",
      name: "Toyota Innova",
      image:
        "/cars/INNOVA.jpg",
      seats: 7,
      luggage: 4,
      fuel: "Diesel",
      transmission: "Manual",
      description:
        "Reliable and spacious MPV suitable for family tours, outstation trips, and corporate transportation.",
      pricePerKm: "₹18/km",
      category: "SUV",
    },

    {
      id: "suv-innova-crysta",
      name: "Toyota Innova Crysta",
      image:
        "/cars/INNOVA-CRYSTA.jpg",
      seats: 7,
      luggage: 4,
      fuel: "Diesel",
      transmission: "Manual / Automatic",
      description:
        "Premium MPV with luxurious seating, excellent ride quality, and superior comfort for long-distance journeys.",
      pricePerKm: "₹20/km",
      category: "SUV",
    },

    {
      id: "suv-bolero",
      name: "Mahindra Bolero",
      image:
        "/cars/BOLERO.jpg",
      seats: 7,
      luggage: 3,
      fuel: "Diesel",
      transmission: "Manual",
      description:
        "Strong and dependable SUV designed for village roads, rough terrains, and group transportation.",
      pricePerKm: "₹16/km",
      category: "SUV",
    },

    {
      id: "suv-ertiga",
      name: "Maruti Suzuki Ertiga",
      image:
        "/cars/ERTIGA.jpg",
      seats: 7,
      luggage: 3,
      fuel: "Petrol / CNG",
      transmission: "Manual",
      description:
        "Versatile 7-seater MPV perfect for family vacations, sightseeing tours, and airport pickups.",
      pricePerKm: "₹16/km",
      category: "SUV",
    },
  ],

  Groups: [
    {
      id: "groups-traveller-12",
      name: "Tempo Traveller",
      image:
        "/cars/TRAVELLER.png",
      seats: "12/17/21",
      luggage: 8,
      fuel: "Diesel",
      transmission: "Manual",
      description:
        "Comfortable group travel vehicle ideal for family tours, corporate outings, pilgrimages, and sightseeing trips.",
      pricePerKm: "₹24/km",
      category: "Groups",
    },

    {
      id: "groups-mini-bus",
      name: "Mini Bus",
      image:
        "/cars/MINI-BUS.jpg",
      seats: 21,
      luggage: 12,
      fuel: "Diesel",
      transmission: "Manual",
      description:
        "Large-capacity vehicle perfect for school trips, corporate events, wedding guests, and group tours.",
      pricePerKm: "₹30/km",
      category: "Groups",
    },
  ],
};

export const allVehicles: Vehicle[] = Object.values(vehicleCategories).flat();
