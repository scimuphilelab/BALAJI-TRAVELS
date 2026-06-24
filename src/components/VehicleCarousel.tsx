"use client";
import { useEffect, useRef } from "react";
import type { Vehicle } from "../data/vehicles";
import VehicleCard from "./VehicleCard";

interface Props {
  vehicles: Vehicle[];
  category: string;
}

export default function VehicleCarousel({ vehicles, category }: Props) {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const initSwiper = async () => {
      const { Swiper } = await import("swiper");
      const { Navigation, Pagination, A11y } = await import("swiper/modules");

      if (!isMounted || !swiperRef.current) return;

      swiperInstanceRef.current = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, A11y],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: vehicles.length >= 2,
        a11y: {
          prevSlideMessage: "Previous vehicle",
          nextSlideMessage: "Next vehicle",
        },
        breakpoints: {
          740: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        navigation: {
          nextEl: `.swiper-next-${category.toLowerCase()}`,
          prevEl: `.swiper-prev-${category.toLowerCase()}`,
        },
        pagination: {
          el: `.swiper-pagination-${category.toLowerCase()}`,
          clickable: true,
        },
      });
    };

    initSwiper();
    return () => {
      isMounted = false;
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, [vehicles, category]);

  return (
    <div className="relative" aria-label={`${category} vehicle carousel`}>
      <div ref={swiperRef} className="swiper overflow-hidden ">
        <div className="swiper-wrapper">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="swiper-slide h-auto">
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div
          className={`swiper-pagination swiper-pagination-${category.toLowerCase()} mt-6`}
          style={{ position: "static", marginTop: "24px" }}
        />
      </div>
      {/* Custom Nav Buttons */}
      <button
        className={`swiper-prev-${category.toLowerCase()} swiper-button-prev-custom`}
        aria-label={`Previous ${category} vehicle`}
        style={{
          position: "absolute",
          top: "40%",
          left: "-30px",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "white",
          border: "1.5px solid #E8ECF4",
          boxShadow: "0 4px 16px rgba(26,26,46,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.25s ease",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#C9A84C";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A84C";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "white";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#E8ECF4";
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden="true"
          className="fill-[#1A1A2E] group-hover:fill-white transition-colors"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        className={`swiper-next-${category.toLowerCase()} swiper-button-next-custom`}
        aria-label={`Next ${category} vehicle`}
        style={{
          position: "absolute",
          top: "40%",
          right: "-30px",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "white",
          border: "1.5px solid #E8ECF4",
          boxShadow: "0 4px 16px rgba(26,26,46,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.25s ease",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#C9A84C";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A84C";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "white";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#E8ECF4";
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden="true"
          className="fill-[#1A1A2E]"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>
  );
}
