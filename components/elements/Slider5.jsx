"use client";
import Image from "next/image";
const imageData = [
  "/assets/images/full-width-images/section-bg-8.jpg",
  "/assets/images/full-width-images/section-bg-9.jpg",
];
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Slider5() {
  return (
    <div className="container relative">
      <div className="work-full-media image-fullwidth mb-0">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".snbp2",
            nextEl: ".snbn2",
          }}
          watchSlidesProgress
          resizeObserver
          className="clearlist work-full-slider owl-carousel owl-theme overflow-hidden "
          style={{
            opacity: 1,
            display: "block",
          }}
          pagination={{
            el: ".sp2",
            clickable: true,
            bulletActiveClass: "active",
            renderBullet: (index, className) => {
              return `<div class=" owl-page ${className}">
                   <span></span>
                  </div>`;
            },
          }}
        >
          {/* Team item */}
          {imageData.map((image, index) => (
            <SwiperSlide className="owl-item" key={index}>
              <Image
                src={image}
                width={1920}
                height={1080}
                alt="Image Description"
              />
            </SwiperSlide>
          ))}
          <div className="owl-controls clickable">
            <div className="owl-pagination sp2"></div>
            <div className="owl-buttons">
              <div className="owl-prev snbp2 " role="button" tabIndex="0">
                <span className="visually-hidden">Previous Slide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27px"
                  height="57px"
                  viewBox="0 0 27 57"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
                </svg>
              </div>
              <div className="owl-next snbn2" role="button" tabIndex="0">
                <span className="visually-hidden">Next Slide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27px"
                  height="57px"
                  viewBox="0 0 27 57"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* End Team item */}
        </Swiper>
      </div>
    </div>
  );
}
