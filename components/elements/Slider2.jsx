"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const imageData = [
  {
    placeholderSrc: "/assets/images/placeholder.png",
    dataSrc: "/assets/images/full-width-images/section-bg-3.jpg",
    alt: "Image Description 3",
  },
  {
    placeholderSrc: "/assets/images/placeholder.png",
    dataSrc: "/assets/images/full-width-images/section-bg-6.jpg",
    alt: "Image Description 4",
  },
  // Add more image data objects as needed
];

export default function Slider2() {
  return (
    <div className="container relative">
      <div className="row">
        <div className="col-md-5 col-lg-4 mb-sm-40 d-flex align-items-center">
          {/* About Project */}
          <div className="w-100">
            <h2 className="section-title-small mb-30 mb-md-20">
              Creative Project 2
            </h2>
            <p className="text-gray mb-40 mb-sm-30">
              Phasellus facilisis mauris vel velit molestie pellentesque. Donec
              rutrum, tortor elementum venenatis, purus magna bibendum nisl,
              accumsan ipsum erat eu ipsum morede sapien.
            </p>
            <div>
              <a
                href="#"
                className="btn btn-mod btn-white  btn-round btn-large btn-hover-anim"
              >
                <span>View Project 2</span>
              </a>
            </div>
          </div>
          {/* End About Project */}
        </div>
        <div className="col-md-7 offset-lg-1">
          {/* Gallery */}
          <div className="work-full-media mt-0">
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
              className="clearlist work-full-slider owl-carousel owl-theme overflow-hidden light-content"
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
              {imageData.map((elm, i) => (
                <SwiperSlide key={i}>
                  <Image
                    className="lazyOwl"
                    src={elm.dataSrc}
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
            </Swiper>
          </div>
          {/* End Gallery */}
        </div>
      </div>
    </div>
  );
}
