"use client";
import { testimonials3 } from "@/data/testimonials";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="wow fadeInUp">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          prevEl: ".snbp11",
          nextEl: ".snbn11",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2, // When window width is <= 768px
          },
          0: {
            slidesPerView: 1, // When window width is <= 480px
          },
        }}
        watchSlidesProgress
        resizeObserver
        className="testimonials-slider-3 slider-strong owl-carousel owl-theme overflow-visible position-static"
        style={{
          opacity: 1,
          display: "block",
        }}
      >
        {/* Team item */}
        {testimonials3.map((elm, i) => (
          <SwiperSlide className="owl-item" key={i}>
            <div className="testimonials-3-item ">
              <div className="testimonials-3-icon">
                <i className="icon-quotation-mark" aria-hidden="true"></i>
              </div>
              <blockquote className="testimonials-3-text">
                <p className="mb-0">{elm.text}</p>
                <footer className="testimonials-3-author pt-30 clearfix">
                  <div className="testimonials-3-author-img float-start">
                    <Image
                      width={44}
                      height={44}
                      src={elm.imgSrc}
                      alt="Image description is here"
                    />
                  </div>
                  <div className="overflow-hidden">
                    {elm.author}
                    <div className="small">{elm.role}</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
        <div className="owl-controls clickable">
          <div className="owl-buttons">
            <div className="owl-prev snbp11" role="button" tabIndex="0">
              <span className="visually-hidden">Previous Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="13px"
                viewBox="0 0 18 13"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M17.995,6.998 L3.591,6.998 C5.630,8.221 7.000,10.447 7.000,12.998 L6.000,12.998 C6.000,9.684 3.313,6.998 -0.001,6.998 L-0.015,6.998 L-0.015,5.998 L-0.001,5.998 C3.313,5.998 6.000,3.312 6.000,-0.002 L7.000,-0.002 C7.000,2.549 5.630,4.775 3.591,5.998 L17.995,5.998 L17.995,6.998 Z"
                ></path>
              </svg>
            </div>
            <div className="owl-next snbn11" role="button" tabIndex="0">
              <span className="visually-hidden">Next Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="13px"
                viewBox="0 0 18 13"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18.000,6.998 C14.687,6.998 12.000,9.684 12.000,12.998 L11.000,12.998 C11.000,10.447 12.370,8.221 14.409,6.998 L0.005,6.998 L0.005,5.998 L14.409,5.998 C12.370,4.775 11.000,2.549 11.000,-0.002 L12.000,-0.002 C12.000,3.312 14.687,5.998 18.000,5.998 L18.015,5.998 L18.015,6.998 L18.000,6.998 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* End Team item */}
      </Swiper>
    </div>
  );
}
