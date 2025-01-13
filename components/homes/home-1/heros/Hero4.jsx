"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sections = [
  {
    bgImage: "/assets/images/full-width-images/section-bg-5.jpg",
    title: "Resonance Creative Studio",
    subtitle: "Maximize your online impact with our solutions.",
    status: "Based in London, United Kingdom",
  },
  {
    bgImage: "/assets/images/full-width-images/section-bg-3.jpg",
    title: "Resonance Creative Studio",
    subtitle: "Grow your business with new online experience.",
    status: "Based in London, United Kingdom",
  },
  {
    bgImage: "/assets/images/full-width-images/section-bg-6.jpg",
    title: "Resonance Creative Studio",
    subtitle: "Redefine your strategy for long-term success.",
    status: "Based in London, United Kingdom",
  },
];

export default function Hero4() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay
        navigation={{
          prevEl: ".snbp10",
          nextEl: ".snbn10",
        }}
        pagination={{
          el: ".sp10",
          clickable: true,
          bulletActiveClass: "active",
          renderBullet: (index, className) => {
            return `<div class="owl-page ${className}">
                   <span></span>
                  </div>`;
          },
        }}
        watchSlidesProgress
        resizeObserver
        className=" home-section fullwidth-slider-fade bg-dark light-content owl-carousel owl-theme overflow-hidden position-static"
        style={{
          opacity: 1,
          display: "block",
        }}
      >
        {/* Team item */}
        {sections.map((elm, index) => (
          <SwiperSlide className="owl-item" key={index}>
            <section
              className="home-section bg-scroll bg-dark-alpha-60 light-content"
              style={{
                backgroundImage: `url(${elm.bgImage})`,
              }}
            >
              <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
                {/* Home Section Content */}
                <div className="home-content">
                  <div className="row">
                    {/* Home Section Text */}
                    <div className="col-md-10 offset-md-1 mb-20 mb-sm-0">
                      <h2 className="hs-title-11 mb-30 mb-xs-10 owl-animate-fadeInUp">
                        {elm.title}
                      </h2>
                      <h1 className="hs-title-12 mb-50 mb-sm-30">
                        <span
                          className="owl-animate-chars"
                          data-splitting="chars"
                        >
                          <AnimatedText text={elm.subtitle} />
                        </span>
                      </h1>
                      <div className="local-scroll owl-animate-fadeInUp owl-delay-700 wch-unset">
                        <a
                          href="#about"
                          className="btn btn-mod btn-border-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                          data-btn-animate="y"
                          tabIndex="-1"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">Learn More</span>
                            <span
                              className="btn-animate-y-2"
                              aria-hidden="true"
                            >
                              Learn More
                            </span>
                          </span>
                        </a>
                        <a
                          href="#contact"
                          className="btn btn-mod btn-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                          data-btn-animate="y"
                          tabIndex="-1"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">
                              Get In Touch
                            </span>
                            <span
                              className="btn-animate-y-2"
                              aria-hidden="true"
                            >
                              Get In Touch
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    {/* End Home Section Text */}
                  </div>
                </div>
                {/* End Home Section Content */}
                {/* Scroll Down */}
                <div
                  className="local-scroll scroll-down-wrap-4 d-none d-sm-block wow fadeInUp"
                  data-wow-offset={0}
                >
                  <div className="full-wrapper text-end">
                    <a href="#about" className="scroll-down-4">
                      <i className="mi-arrow-down size-24" />
                    </a>
                  </div>
                </div>
                {/* End Scroll Down */}
                {/* Status */}
                <div
                  className="hs-status d-none d-sm-block wow fadeInUp"
                  data-wow-offset={0}
                >
                  {elm.status}
                </div>
                {/* End Status */}
              </div>
            </section>
          </SwiperSlide>
        ))}
        <div className="owl-controls clickable">
          <div className="owl-pagination sp10"></div>
          <div className="owl-buttons">
            <div className="owl-prev snbp10" role="button" tabIndex={0}>
              <span className="visually-hidden">Previous Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="27px"
                height="57px"
                viewBox="0 0 27 57"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z" />
              </svg>
            </div>
            <div className="owl-next snbn10" role="button" tabIndex={0}>
              <span className="visually-hidden">Next Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="27px"
                height="57px"
                viewBox="0 0 27 57"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* End Team item */}
      </Swiper>{" "}
    </>
  );
}
