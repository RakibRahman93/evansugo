"use client";
import { testimonials3 } from "@/data/testimonials";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <h2 className="section-caption-gradient mb-20 mb-xs-10">
            Testimonials
          </h2>
          <div className="section-line-gradient mx-auto mb-20" />
          <h3 className="section-title mb-80 mb-sm-60">
            Resonance template is trusted by
            <span className="mark-decoration-4">10,000</span>+ customers.
          </h3>
        </div>
      </div>
      {/* Testimonials Carousel */}

      {/* Testimonials item */}

      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          prevEl: ".snbp7",
          nextEl: ".snbn7",
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
        className="testimonials-slider-3 slider-gradient owl-carousel owl-theme overflow-visible position-static"
        style={{
          opacity: 1,
          display: "block",
        }}
      >
        {/* Team item */}
        {testimonials3.map((elm, i) => (
          <SwiperSlide className="owl-item" key={i}>
            <div className="testimonials-3-item testimonials-grad">
              <div className="testimonials-3-icon">
                <i className="icon-quotation-mark" />
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
            <div className="owl-prev snbp7" role="button" tabIndex="0">
              <span className="visually-hidden">Previous Slide</span>
              <i className="mi-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="owl-next snbn7" role="button" tabIndex="0">
              <span className="visually-hidden">Next Slide</span>
              <i className="mi-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        {/* End Team item */}
      </Swiper>
      {/* End Testimonials item */}

      {/* End Testimonials Carousel */}
    </div>
  );
}
