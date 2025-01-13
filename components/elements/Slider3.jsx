"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const projects = [
  {
    type: "image",
    src: "/assets/images/full-width-images/section-bg-5.jpg",
    title: "Creative Project 1",
    description:
      "Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor elementum venenatis, purus magna bibendum nisl, accumsan ipsum erat eu ipsum morede sapien.",
    buttonText: "View Project 1",
    buttonLink: "#",
  },
  {
    type: "video",
    src: "https://player.vimeo.com/video/37066208?title=0&byline=0&portrait=0&color=ffffff",
    title: "Creative Project 2",
    description:
      "Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor elementum venenatis, purus magna bibendum nisl, accumsan ipsum erat eu ipsum morede sapien.",
    buttonText: "View Project 2",
    buttonLink: "#",
  },
  {
    type: "image",
    src: "/assets/images/full-width-images/section-bg-6.jpg",
    title: "Creative Project 3",
    description:
      "Phasellus facilisis mauris vel velit molestie pellentesque. Donec rutrum, tortor elementum venenatis, purus magna bibendum nisl, accumsan ipsum erat eu ipsum morede sapien.",
    buttonText: "View Project 3",
    buttonLink: "#",
  },
];

export default function Slider3() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation={{
        prevEl: ".snbp3",
        nextEl: ".snbn3",
      }}
      watchSlidesProgress
      resizeObserver
      className="fullwidth-slider owl-carousel bg-gray owl-theme overflow-hidden"
      style={{
        opacity: 1,
        display: "block",
      }}
      pagination={{
        el: ".sp3",
        clickable: true,
        bulletActiveClass: "active",
        renderBullet: (index, className) => {
          return `<div class=" owl-page ${className}">
                   <span></span>
                  </div>`;
        },
      }}
    >
      {projects.map((elm, i) => (
        <SwiperSlide key={i} className="page-section bg-gray-lighter">
          <div className="container relative">
            <div className="row">
              <div className="col-md-7 mb-sm-40">
                {/* Work Image */}
                <div
                  style={{ height: "100%" }}
                  className="work-full-media mt-0"
                >
                  {elm.type == "image" ? (
                    <Image
                      style={{ height: "100%", objectFit: "contain" }}
                      src={elm.src}
                      width={1920}
                      height={1080}
                      alt=""
                    />
                  ) : (
                    <iframe
                      src={elm.src}
                      width={"100%"}
                      height={563}
                      allowFullScreen=""
                    />
                  )}
                </div>
                {/* End Work Image */}
              </div>
              <div className="col-md-5 col-lg-4 offset-lg-1 d-flex align-items-center">
                {/* About Project */}
                <div className="w-100">
                  <h2 className="section-title-small mb-30 mb-md-20">
                    {elm.title}
                  </h2>
                  <p className="text-gray mb-40 mb-sm-30">{elm.description}</p>
                  <div>
                    <a
                      href="#"
                      className="btn btn-mod btn-white btn-round btn-large btn-hover-anim"
                    >
                      <span>View Project 1</span>
                    </a>
                  </div>
                </div>
                {/* End About Project */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="owl-controls clickable">
        <div className="owl-pagination sp3"></div>
        <div className="owl-buttons">
          <div className="owl-prev snbp3 " role="button" tabIndex="0">
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
          <div className="owl-next snbn3" role="button" tabIndex="0">
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
  );
}
