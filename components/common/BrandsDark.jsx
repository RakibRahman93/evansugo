"use client";

import { brandsDark } from "@/data/brands";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandsDark() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={6}
      watchSlidesProgress
      modules={[Autoplay]}
      autoplay
      resizeObserver
      className="small-item-carousel black owl-carousel mb-0 owl-theme overflow-hidden position-static"
      style={{
        opacity: 1,
        display: "block",
      }}
      breakpoints={{
        1199: {
          slidesPerView: 6, // When window width is <= 1199px
        },
        768: {
          slidesPerView: 4, // When window width is <= 768px
        },
        480: {
          slidesPerView: 3, // When window width is <= 480px
        },
        0: {
          slidesPerView: 2,
        },
      }}
    >
      {/* Team item */}
      {brandsDark.map((elm, i) => (
        <SwiperSlide className="owl-item" key={i}>
          <div className="logo-item">
            <Image src={elm} width={215} height={75} alt="Company Name" />
          </div>
        </SwiperSlide>
      ))}

      {/* End Team item */}
    </Swiper>
  );
}
