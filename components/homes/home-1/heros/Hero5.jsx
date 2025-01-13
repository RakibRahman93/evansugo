"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const divSections = [
  {
    className: "home-section bg-scroll bg-light-alpha-60",
    bgImage: "/assets/images/full-width-images/section-bg-7.jpg",
    darkclassName: "home-section bg-scroll bg-dark-alpha-70",
  },
  {
    className: "home-section bg-scroll",
    darkclassName: "home-section bg-scroll bg-dark-alpha-70",
    bgImage: "/assets/images/full-width-images/section-bg-8.jpg",
  },
  {
    className: "home-section bg-scroll bg-light-alpha-50",
    bgImage: "/assets/images/full-width-images/section-bg-9.jpg",
    darkclassName: "home-section bg-scroll bg-dark-alpha-70",
  },
];
export default function Hero5({ dark }) {
  return (
    <>
      <div className="fullwidth-gallery-wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          autoplay
          effect="fade"
          watchSlidesProgress
          resizeObserver
          className="fullwidth-gallery owl-carousel owl-theme  overflow-hidden position-static"
          style={{
            opacity: 1,
            display: "block",
          }}
        >
          {/* Team item */}
          {divSections.map((elm, index) => (
            <SwiperSlide className="owl-item" key={index}>
              <div
                className={dark ? elm.darkclassName : elm.className}
                style={{
                  backgroundImage: `url(${elm.bgImage})`,
                }}
              />
            </SwiperSlide>
          ))}

          {/* End Team item */}
        </Swiper>
      </div>
      {/* End Fullwidth Slider */}
      <div className="fullwidth-galley-content">
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
          {/* Home Section Content */}
          <div className="home-content">
            <div className="row">
              {/* Home Section Text */}
              <div className="col-md-10 offset-md-1 mb-20 mb-sm-0">
                <h2
                  className="hs-title-11 mb-30 mb-xs-10 wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  Resonance Creative Studio
                </h2>
                <h1 className="hs-title-12 mb-50 mb-sm-30">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    <AnimatedText text="Grow your business with new online experience." />
                  </span>
                </h1>
                <div
                  className="local-scroll wch-unset wow fadeInUp animated"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.2s",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp",
                  }}
                >
                  <a
                    href="#about"
                    className={`btn btn-mod btn-border ${
                      dark ? " btn-border-w " : ""
                    } btn-large btn-round ms-1 me-1 mt-2 align-middle`}
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">Learn More</span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Learn More
                      </span>
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className={`btn btn-mod btn-large ${
                      dark ? " btn-w " : ""
                    } btn-round ms-1 me-1 mt-2 align-middle`}
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">Get In Touch</span>
                      <span className="btn-animate-y-2" aria-hidden="true">
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
            className="local-scroll scroll-down-wrap-4 wow fadeInUp"
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
          <div className="hs-status wow fadeInUp" data-wow-offset={0}>
            Based in London, United Kingdom
          </div>
          {/* End Status */}
        </div>
      </div>
    </>
  );
}
