"use client";
import { testimonials3 } from "@/data/testimonials";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Testimonials3() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
          <h2 className="section-caption mb-xs-10 wow fadeInUp">
            Clients Stories
          </h2>
          <h3 className="section-title mb-50 mb-sm-30">
            <span className="wow charsAnimIn" data-splitting="chars">
              We're trusted by leading worldwide companies.
            </span>
          </h3>
        </div>
      </div>
      {/* Testimonials Carousel */}
      <div className="wow fadeInUp" data-wow-delay="0.6s">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp7",
            nextEl: ".snbn7",
          }}
          breakpoints={{
            1199: {
              slidesPerView: 3, // When window width is <= 1199px
            },
            1024: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1, // When window width is <= 768px
            },
            0: {
              slidesPerView: 1, // When window width is <= 480px
            },
          }}
          watchSlidesProgress
          resizeObserver
          className="testimonials-slider-3 owl-carousel owl-theme overflow-visible position-static"
          style={{
            opacity: 1,
            display: "block",
          }}
        >
          {/* Team item */}
          {testimonials3.map((elm, i) => (
            <SwiperSlide className="owl-item" key={i}>
              <div className="testimonials-3-item">
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
      </div>
      {/* End Testimonials Carousel */}
    </div>
  );
}
